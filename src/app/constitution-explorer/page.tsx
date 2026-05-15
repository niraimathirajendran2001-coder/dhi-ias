'use client'

import { Suspense, useState, useCallback, useEffect, useMemo } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import { ArrowLeft } from 'lucide-react'
import { Header } from '@/components/header'
import NavigationTree from '@/components/constitution/NavigationTree'
import ArticleDetail from '@/components/constitution/ArticleDetail'
import ContextPanel from '@/components/constitution/ContextPanel'
import MobileDrawer from '@/components/constitution/MobileDrawer'
import { getArticleById, type FilterTag } from '@/lib/constitution-helpers'

/* ------------------------------------------------------------------ */
/*  Constants                                                          */
/* ------------------------------------------------------------------ */

const DEFAULT_ARTICLE = 'article_21'
const HEADER_HEIGHT = 80

/* ------------------------------------------------------------------ */
/*  Main Page — wraps explorer in Suspense for useSearchParams          */
/* ------------------------------------------------------------------ */

export default function ConstitutionExplorerPage() {
  return (
    <Suspense
      fallback={
        <div
          className="flex items-center justify-center min-h-screen bg-background"
        >
          <div className="font-sans text-stone-gray" style={{ fontSize: 14 }}>
            Loading Constitution Explorer…
          </div>
        </div>
      }
    >
      <ConstitutionExplorer />
    </Suspense>
  )
}

/* ------------------------------------------------------------------ */
/*  Explorer — inner component that uses useSearchParams                */
/* ------------------------------------------------------------------ */

function ConstitutionExplorer() {
  const router = useRouter()
  const searchParams = useSearchParams()

  /* ── Derive initial article from URL ── */
  const initialArticle = useMemo(() => {
    const param = searchParams.get('article')
    if (param && getArticleById(param)) return param
    return DEFAULT_ARTICLE
  }, [searchParams])

  /* ── State ── */
  const [selectedArticleId, setSelectedArticleId] = useState(initialArticle)
  const [searchQuery, setSearchQuery] = useState('')
  const [activeFilter, setActiveFilter] = useState<FilterTag>('all')
  const [savedRefresh, setSavedRefresh] = useState(0)

  /* ── Sync URL on article change ── */
  useEffect(() => {
    const currentParam = searchParams.get('article')
    if (currentParam !== selectedArticleId) {
      router.push(
        `/constitution-explorer?article=${selectedArticleId}`,
        { scroll: false }
      )
    }
  }, [selectedArticleId, router, searchParams])

  /* ── Article selection handler ── */
  const handleSelectArticle = useCallback((articleId: string) => {
    setSelectedArticleId(articleId)
    // Scroll Zone B to top on mobile
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  /* ── Saved articles refresh ── */
  const handleSavedChange = useCallback(() => {
    setSavedRefresh((n) => n + 1)
  }, [])

  return (
    <div
      className="min-h-screen flex flex-col bg-background"
    >
      <Header />

      {/* ── Sub-header bar with back link ── */}
      <div
        className="flex-shrink-0 flex items-center gap-4 px-6 border-b bg-navy"
        style={{
          paddingTop: HEADER_HEIGHT,
          borderColor: 'rgba(255,255,255,0.08)',
        }}
      >
        <button
          onClick={() => router.push('/')}
          className="flex items-center gap-1.5 font-sans text-[13px] transition-colors py-3"
          style={{ color: 'rgba(255,255,255,0.6)', background: 'none', border: 'none', cursor: 'pointer' }}
          onMouseEnter={(e) => { e.currentTarget.style.color = '#E31837' }}
          onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.6)' }}
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          Back to Home
        </button>
        <span style={{ color: 'rgba(255,255,255,0.2)' }}>|</span>
        <span
          className="font-sans uppercase tracking-[2px] text-sovereign-gold"
          style={{ fontSize: 11 }}
        >
          Constitution Explorer
        </span>
      </div>

      {/* ── Desktop / Tablet: Three-zone layout ── */}
      <div className="hidden md:flex flex-1" style={{ height: `calc(100vh - ${HEADER_HEIGHT}px - 45px)` }}>
        {/* Zone A — Navigation Tree (280px fixed left) */}
        <div
          className="flex-shrink-0 overflow-y-auto"
          style={{
            width: 280,
          }}
        >
          <NavigationTree
            selectedArticleId={selectedArticleId}
            onSelectArticle={handleSelectArticle}
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            activeFilter={activeFilter}
            onFilterChange={setActiveFilter}
          />
        </div>

        {/* Zone B — Article Detail (flex center) */}
        <div className="flex-1 overflow-y-auto" style={{ position: 'relative' }}>
          <ArticleDetail
            key={selectedArticleId + '-' + savedRefresh}
            articleId={selectedArticleId}
            onSelectArticle={handleSelectArticle}
            onSavedChange={handleSavedChange}
          />
        </div>

        {/* Zone C — Context Panel (320px fixed right, hidden on tablet) */}
        <div
          className="hidden lg:block flex-shrink-0"
          style={{
            width: 320,
          }}
        >
          <ContextPanel articleId={selectedArticleId} />
        </div>
      </div>

      {/* ── Mobile: Single column with bottom drawer ── */}
      <div className="md:hidden flex-1 pb-16">
        {/* Zone B — Article Detail (full width) */}
        <div>
          <ArticleDetail
            key={selectedArticleId + '-mob-' + savedRefresh}
            articleId={selectedArticleId}
            onSelectArticle={handleSelectArticle}
            onSavedChange={handleSavedChange}
          />
        </div>
      </div>

      {/* Mobile Drawer (Zone A) */}
      <div className="md:hidden">
        <MobileDrawer
          selectedArticleId={selectedArticleId}
          onSelectArticle={handleSelectArticle}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          activeFilter={activeFilter}
          onFilterChange={setActiveFilter}
        />
      </div>
    </div>
  )
}
