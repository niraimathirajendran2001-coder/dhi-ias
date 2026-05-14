'use client'

import { Suspense, useState, useCallback, useEffect, useMemo } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import NavigationTree from '@/components/constitution/NavigationTree'
import ArticleDetail from '@/components/constitution/ArticleDetail'
import ContextPanel from '@/components/constitution/ContextPanel'
import MobileDrawer from '@/components/constitution/MobileDrawer'
import { getArticleById, type FilterTag } from '@/lib/constitution-helpers'

/* ------------------------------------------------------------------ */
/*  Constants                                                          */
/* ------------------------------------------------------------------ */

const DEFAULT_ARTICLE = 'article_21'

/* ------------------------------------------------------------------ */
/*  Main Page — wraps explorer in Suspense for useSearchParams          */
/* ------------------------------------------------------------------ */

export default function ConstitutionExplorerPage() {
  return (
    <Suspense
      fallback={
        <div
          className="flex items-center justify-center min-h-screen"
          style={{ background: '#FAFAF7' }}
        >
          <div className="font-sans" style={{ fontSize: 14, color: '#3D3D3A' }}>
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
      className="min-h-screen"
      style={{ background: '#FAFAF7' }}
    >
      {/* ── Desktop / Tablet: Three-zone layout ── */}
      <div className="hidden md:flex" style={{ height: 'calc(100vh - 80px)' }}>
        {/* Zone A — Navigation Tree (280px fixed left) */}
        <div
          className="flex-shrink-0 overflow-y-auto"
          style={{
            width: 280,
            position: 'sticky',
            top: 80,
            height: 'calc(100vh - 80px)',
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
            position: 'sticky',
            top: 80,
            height: 'calc(100vh - 80px)',
          }}
        >
          <ContextPanel articleId={selectedArticleId} />
        </div>
      </div>

      {/* ── Mobile: Single column with bottom drawer ── */}
      <div className="md:hidden pb-16">
        {/* Zone B — Article Detail (full width) */}
        <div style={{ paddingTop: 80 }}>
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
