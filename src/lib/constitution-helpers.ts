/**
 * Constitution Explorer — Data helpers
 * All data operations live here. Components import helpers, not raw JSON.
 */

import parts from '@/data/constitution/parts.json'
import articles from '@/data/constitution/articles.json'
import cases from '@/data/constitution/cases.json'
import questions from '@/data/constitution/upsc_questions.json'
import schedules from '@/data/constitution/schedules.json'
import amendments from '@/data/constitution/amendments.json'

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

export interface Part {
  part_id: string
  part_number: string
  part_title: string
  article_range: string
  upsc_paper: string
  summary: string
  upsc_importance: string
}

export interface Article {
  article_id: string
  article_number: string
  article_title: string
  part_id: string
  part_title: string
  upsc_importance: string
  summary: string
  is_deleted: boolean
  amended: boolean
  amendment_note: string
  tags: string[]
  related_articles: string[]
  plain_language: string
  original_text: string
  chapter: string
}

export interface Case {
  case_id: string
  case_name: string
  year: number
  citation: string
  articles_interpreted: string[]
  what_decided: string
  upsc_one_liner: string
  upsc_asked_directly: boolean
  is_recent: boolean
  overruled: string
  overruled_by: string
}

export interface UPSCQuestion {
  question_id: string
  year: number
  exam: string
  exam_type: string
  subject: string
  topic: string
  question_type: string
  question_text: string
  options: Record<string, string>
  correct_answer: string
  articles_referenced: string[]
  option_explanation: string
  answer_dimensions: string[]
  marks: string
  paper: string
  difficulty: string
  linked_schedules: string[]
  linked_amendments: string[]
  linked_cases: string[]
  explanation: string
  elimination_hint: string
  trap_area: string
}

export interface Schedule {
  schedule_id: string
  schedule_number: string
  schedule_title: string
  linked_articles: string[]
  part_linked: string
  broad_content: string
  upsc_importance: string
  upsc_angle: string
  key_traps: string[]
  static_tags: string[]
  current_linkage: string
  memory_trigger: string
  plain_language: string
  full_text: string
}

export interface Amendment {
  amendment_id: string
  amendment_number: number
  year: number
  short_title: string
  upsc_importance: string
  theme: string
  key_changes: string[]
  articles_schedules_affected: string[]
  upsc_trap: string
}

/* ------------------------------------------------------------------ */
/*  Lookup helpers                                                     */
/* ------------------------------------------------------------------ */

export function getArticleById(id: string): Article | undefined {
  return (articles as Article[]).find((a) => a.article_id === id)
}

export function getPartById(id: string): Part | undefined {
  return (parts as Part[]).find((p) => p.part_id === id)
}

export function getArticlesByPart(partId: string): Article[] {
  return (articles as Article[]).filter((a) => a.part_id === partId)
}

export function getCasesByArticle(articleId: string): Case[] {
  return (cases as Case[]).filter((c) =>
    c.articles_interpreted.includes(articleId)
  )
}

export function getQuestionsByArticle(articleId: string): UPSCQuestion[] {
  return (questions as UPSCQuestion[]).filter((q) =>
    q.articles_referenced.includes(articleId)
  )
}

export function getSchedulesByArticle(articleId: string): Schedule[] {
  return (schedules as Schedule[]).filter((s) =>
    s.linked_articles.includes(articleId)
  )
}

export function getAmendmentsByArticle(articleId: string): Amendment[] {
  return (amendments as Amendment[]).filter((a) =>
    a.articles_schedules_affected.includes(articleId)
  )
}

/* ------------------------------------------------------------------ */
/*  Search & Filter                                                    */
/* ------------------------------------------------------------------ */

export function searchConstitution(query: string): Article[] {
  if (!query.trim()) return articles as Article[]
  const q = query.toLowerCase()
  return (articles as Article[]).filter(
    (a) =>
      a.article_title.toLowerCase().includes(q) ||
      a.article_number.toLowerCase().includes(q) ||
      a.tags.some((t) => t.toLowerCase().includes(q)) ||
      a.plain_language.toLowerCase().includes(q) ||
      a.part_title.toLowerCase().includes(q)
  )
}

export type FilterTag =
  | 'all'
  | 'high-priority'
  | 'fundamental-rights'
  | 'emergency'
  | 'centre-state'
  | 'recently-amended'

export function filterArticlesByTag(tag: FilterTag): Article[] {
  if (tag === 'all') return articles as Article[]

  return (articles as Article[]).filter((a) => {
    switch (tag) {
      case 'high-priority':
        return a.upsc_importance === 'HIGH'
      case 'fundamental-rights':
        return a.part_id === 'part_3'
      case 'emergency':
        return a.tags.includes('emergency')
      case 'centre-state':
        return a.tags.includes('centre-state')
      case 'recently-amended':
        return a.amended === true
      default:
        return true
    }
  })
}

/* ------------------------------------------------------------------ */
/*  Saved articles (localStorage)                                      */
/* ------------------------------------------------------------------ */

const STORAGE_KEY = 'constitution_saved'

export function getSavedArticles(): string[] {
  if (typeof window === 'undefined') return []
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? JSON.parse(raw) : []
  } catch {
    return []
  }
}

export function saveArticle(id: string): string[] {
  const saved = getSavedArticles()
  if (!saved.includes(id)) {
    saved.push(id)
  }
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(saved))
  } catch {
    // ignore
  }
  return saved
}

export function removeArticle(id: string): string[] {
  let saved = getSavedArticles()
  saved = saved.filter((s) => s !== id)
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(saved))
  } catch {
    // ignore
  }
  return saved
}

export function isArticleSaved(id: string): boolean {
  return getSavedArticles().includes(id)
}

/* ------------------------------------------------------------------ */
/*  Tree data builder                                                  */
/* ------------------------------------------------------------------ */

export interface TreeNode {
  type: 'part' | 'article'
  part_id: string
  part_number: string
  part_title: string
  article_range: string
  article_id?: string
  article_number?: string
  article_title?: string
  upsc_importance?: string
  is_deleted?: boolean
  amended?: boolean
  children?: TreeNode[]
}

export function buildTreeData(): TreeNode[] {
  return (parts as Part[]).map((part) => {
    const partArticles = getArticlesByPart(part.part_id)
    return {
      type: 'part' as const,
      part_id: part.part_id,
      part_number: part.part_number,
      part_title: part.part_title,
      article_range: part.article_range,
      children: partArticles.map((art) => ({
        type: 'article' as const,
        part_id: part.part_id,
        part_number: part.part_number,
        part_title: part.part_title,
        article_range: part.article_range,
        article_id: art.article_id,
        article_number: art.article_number,
        article_title: art.article_title,
        upsc_importance: art.upsc_importance,
        is_deleted: art.is_deleted,
        amended: art.amended,
      })),
    }
  })
}
