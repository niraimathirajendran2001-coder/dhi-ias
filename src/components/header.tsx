'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MapPin, Menu, X, Phone, MessageCircle, Scale } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { ThemeToggle } from '@/components/theme-toggle'

/* ------------------------------------------------------------------ */
/*  Constants                                                          */
/* ------------------------------------------------------------------ */

interface NavItem {
  label: string
  href: string
  id: string
}

const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '/', id: 'home' },
  { label: 'About', href: '/about', id: 'about' },
  { label: 'Courses', href: '/courses', id: 'courses' },
  { label: 'Results', href: '/results', id: 'results' },
  { label: 'Free Tools', href: '#free-tools', id: 'resources' },
  { label: 'Contact', href: '/contact', id: 'contact' },
]

const NAV_DESCRIPTIONS: Record<string, string> = {
  home: 'Welcome & Overview',
  about: 'Our Story & Team',
  courses: 'Programs & Fees',
  results: 'Selections & Toppers',
  resources: 'Explorer & Revision Tools',
  contact: 'Location & Reach Us',
}

const SCROLL_THRESHOLD = 50
const HEADER_HEIGHT_DEFAULT = 80
const HEADER_HEIGHT_SCROLLED = 60

/* ------------------------------------------------------------------ */
/*  Sub-nav for Free Resources (shown in desktop nav)                  */
/* ------------------------------------------------------------------ */

const FREE_RESOURCE_LINKS = [
  { label: 'Constitution Explorer', href: '/constitution-explorer', icon: Scale },
]

const WHATSAPP_LINK =
  'https://wa.me/919844868662?text=Hi%2C%20I%27d%20like%20to%20book%20a%20DHI%20Academy%20strategy%20call.'

/* ------------------------------------------------------------------ */
/*  Hook: Scroll State                                                 */
/* ------------------------------------------------------------------ */

function useScrolled(threshold: number): boolean {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold)
    onScroll() // set initial state
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [threshold])

  return scrolled
}

/* ------------------------------------------------------------------ */
/*  Component: Header                                                  */
/* ------------------------------------------------------------------ */

export function Header() {
  const isScrolled = useScrolled(SCROLL_THRESHOLD)
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [resourcesOpen, setResourcesOpen] = useState(false)

  /* ---- Determine active nav item from pathname ---- */
  const getIsActive = useCallback(
    (item: NavItem) => {
      if (item.id === 'resources') return false // Resources is a dropdown trigger
      if (item.href === '/') return pathname === '/'
      return pathname.startsWith(item.href)
    },
    [pathname],
  )

  /* ---- Escape key closes drawer ---- */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileMenuOpen(false)
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [])

  /* ---- Lock body scroll while drawer is open ---- */
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileMenuOpen])

  /* ---- Derived ---- */
  const headerHeight = isScrolled ? HEADER_HEIGHT_SCROLLED : HEADER_HEIGHT_DEFAULT

  return (
    <>
      {/* ==================== DESKTOP + MOBILE HEADER ==================== */}
      <motion.header
        className={cn(
          'fixed left-0 right-0 z-50 transition-all duration-300',
          isScrolled
            ? 'bg-navy dark:bg-[#0A1428] header-gold-border backdrop-blur-lg'
            : 'bg-ivory-cream/80 dark:bg-[#0D1525]/80 backdrop-blur-md',
        )}
        style={{ top: 0 }}
        animate={{ height: headerHeight }}
        transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
        role="banner"
      >
        <div className="h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* -------- Logo -------- */}
          <Link
            href="/"
            className="flex-shrink-0 select-none flex items-center gap-3"
            aria-label="DHI Academy — go to home"
          >
            <span className="relative grid size-12 place-items-center rounded-2xl border border-dhi-red/30 bg-white shadow-[0_12px_34px_rgba(227,24,55,0.18)]">
              <Image
                src="/dhi-logo.jpg"
                alt="DHI Academy Logo"
                width={42}
                height={42}
                className="rounded-xl object-cover"
                priority
              />
            </span>
            <div className="flex flex-col">
              <span
                className={cn(
                  'block font-serif text-[22px] sm:text-2xl font-semibold leading-none tracking-tight transition-colors duration-300',
                  isScrolled ? 'text-ivory-cream' : 'text-navy',
                )}
              >
                DHI
              </span>
              <span className="block font-sans text-[9px] sm:text-[10px] font-semibold tracking-[0.2em] uppercase text-sovereign-gold leading-none mt-0.5">
                ACADEMY
              </span>
              <span className="block font-sans text-[8px] sm:text-[9px] font-medium tracking-wider text-sovereign-gold/70 leading-none mt-0.5 italic">
                Transforming Lives
              </span>
            </div>
          </Link>

          {/* -------- Desktop Nav -------- */}
          <nav
            className="hidden lg:flex items-center gap-0.5"
            role="navigation"
            aria-label="Primary"
          >
            {NAV_ITEMS.map((item) => {
              const isActive = item.id === 'resources'
                ? pathname === '/constitution-explorer'
                : pathname === item.href ||
                  (item.href !== '/' && pathname.startsWith(item.href))

              // Resources item gets a dropdown with Constitution Explorer
              if (item.id === 'resources') {
                return (
                  <div
                    key={item.id}
                    className="relative"
                    onMouseEnter={() => setResourcesOpen(true)}
                    onMouseLeave={() => setResourcesOpen(false)}
                  >
                    <span
                      className={cn(
                        'relative px-3 py-2 text-[13px] font-medium transition-colors duration-200 whitespace-nowrap flex items-center gap-1 cursor-default',
                        isScrolled
                          ? 'text-ivory-cream/80 hover:text-champagne-gold'
                          : 'text-navy/80 hover:text-sovereign-gold dark:text-ivory-cream/80 dark:hover:text-champagne-gold',
                        isActive && (isScrolled ? 'text-champagne-gold' : 'text-sovereign-gold dark:text-champagne-gold'),
                        isActive && 'active-nav-dot',
                      )}
                    >
                      {item.label}
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                    </span>

                    {/* Dropdown */}
                    {resourcesOpen && (
                      <div
                        className="absolute top-full left-0 mt-1 w-56 rounded-lg shadow-lg overflow-hidden z-50"
                        style={{
                          background: isScrolled ? '#1C1C1E' : '#FFFFFF',
                          border: '1px solid rgba(227,24,55,0.2)',
                        }}
                      >
                        {FREE_RESOURCE_LINKS.map((link) => (
                          <Link
                            key={link.href}
                            href={link.href}
                            className="flex items-center gap-2 px-4 py-3 text-[13px] font-medium transition-colors hover:bg-white/5"
                            style={{
                              color: isScrolled ? '#FFFFFF' : '#1C1C1E',
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.color = '#E31837'
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.color = isScrolled ? '#FFFFFF' : '#1C1C1E'
                            }}
                          >
                            <link.icon className="w-4 h-4" strokeWidth={1.8} />
                            {link.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                )
              }

              return (
                <Link
                  key={item.id}
                  href={item.href}
                  className={cn(
                    'relative px-3 py-2 text-[13px] font-medium transition-colors duration-200 whitespace-nowrap',
                    isScrolled
                      ? 'text-ivory-cream/80 hover:text-champagne-gold'
                      : 'text-navy/80 hover:text-sovereign-gold dark:text-ivory-cream/80 dark:hover:text-champagne-gold',
                    isActive && (isScrolled ? 'text-champagne-gold' : 'text-sovereign-gold dark:text-champagne-gold'),
                    isActive && 'active-nav-dot',
                  )}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {item.label}
                  {isActive && (
                    <motion.span
                      layoutId="desktop-nav-underline"
                      className="absolute bottom-0 left-3 right-3 h-[2px] bg-sovereign-gold dark:bg-champagne-gold rounded-full"
                    />
                  )}
                </Link>
              )
            })}
          </nav>

          {/* -------- Right side: Theme Toggle + CTA + Hamburger -------- */}
          <div className="flex items-center gap-1 sm:gap-2">
            {/* Theme Toggle — visible on sm+ */}
            <div className="hidden sm:block">
              <ThemeToggle />
            </div>

            {/* CTA — visible on sm+ */}
            <Link href="/contact">
              <Button
                className={cn(
                  'hidden sm:inline-flex bg-dhi-red text-white hover:bg-dhi-red-dark',
                  'font-semibold rounded-full h-10 px-5 text-sm',
                  'transition-all duration-300',
                  'hover:shadow-[0_0_20px_rgba(227,24,55,0.35)] dark:hover:shadow-[0_0_20px_rgba(255,45,75,0.3)]',
                )}
              >
                Book Strategy Call
              </Button>
            </Link>

            {/* Hamburger — visible below lg */}
            <button
              type="button"
              className={cn(
                'lg:hidden inline-flex items-center justify-center w-12 h-12 rounded-[6px]',
                'transition-colors duration-200',
                isScrolled
                  ? 'text-ivory-cream hover:text-champagne-gold hover:bg-white/5'
                  : 'text-navy hover:text-sovereign-gold hover:bg-navy/5',
              )}
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </motion.header>

      {/* ==================== MOBILE DRAWER ==================== */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Overlay */}
            <motion.div
              key="drawer-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
              onClick={() => setMobileMenuOpen(false)}
              aria-hidden="true"
            />

            {/* Drawer panel */}
            <motion.div
              key="drawer-panel"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 32, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-full sm:w-[85vw] sm:max-w-[400px] bg-navy flex flex-col"
              role="dialog"
              aria-modal="true"
              aria-label="Navigation menu"
            >
              {/* ---- Drawer Header ---- */}
              <div className="flex items-center justify-between p-6 pb-4">
                <Link
                  href="/"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-2.5"
                >
                  <Image
                    src="/dhi-logo.jpg"
                    alt="DHI Academy Logo"
                    width={36}
                    height={36}
                    className="rounded-xl border border-dhi-red/30 bg-white"
                  />
                  <div className="flex flex-col">
                    <span className="block font-serif text-xl font-semibold text-ivory-cream leading-none">
                      DHI
                    </span>
                    <span className="block font-sans text-[9px] font-semibold tracking-[0.2em] uppercase text-sovereign-gold leading-none mt-0.5">
                      ACADEMY
                    </span>
                    <span className="block font-sans text-[8px] font-medium tracking-wider text-sovereign-gold/70 leading-none mt-0.5 italic">
                      Transforming Lives
                    </span>
                  </div>
                </Link>
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-12 h-12 flex items-center justify-center rounded-[6px] text-ivory-cream hover:text-champagne-gold hover:bg-white/5 transition-colors duration-200"
                  aria-label="Close navigation menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* ---- Divider ---- */}
              <div className="mx-6 h-px bg-white/10" />

              {/* ---- Nav Links ---- */}
              <nav
                className="flex-1 overflow-y-auto px-6 py-4 flex flex-col gap-0.5"
                role="navigation"
                aria-label="Mobile"
              >
                {NAV_ITEMS.map((item, index) => {
                  const isActive = item.id === 'resources'
                    ? pathname === '/constitution-explorer'
                    : pathname === item.href ||
                      (item.href !== '/' && pathname.startsWith(item.href))

                  // Resources item shows sub-links in mobile
                  if (item.id === 'resources') {
                    return (
                      <div key={item.id}>
                        <motion.div
                          initial={{ opacity: 0, x: 24 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{
                            delay: 0.04 * index,
                            duration: 0.3,
                            ease: 'easeOut',
                          }}
                          className={cn(
                            'flex flex-col py-3 px-4 rounded-[6px] transition-colors duration-200 mobile-nav-link-hover',
                            isActive
                              ? 'text-champagne-gold bg-white/5'
                              : 'text-ivory-cream/75 hover:text-ivory-cream hover:bg-white/5',
                          )}
                        >
                          <span className="text-lg font-medium">{item.label}</span>
                          <span className={cn(
                            'text-xs font-sans mt-0.5',
                            isActive ? 'text-champagne-gold/60' : 'text-ivory-cream/35'
                          )}>
                            {NAV_DESCRIPTIONS[item.id]}
                          </span>
                        </motion.div>
                        {/* Sub-links for Resources */}
                        {FREE_RESOURCE_LINKS.map((link) => (
                          <Link
                            key={link.href}
                            href={link.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="flex items-center gap-3 py-2 px-8 rounded-[6px] transition-colors duration-200 mobile-nav-link-hover text-ivory-cream/75 hover:text-ivory-cream hover:bg-white/5"
                          >
                            <link.icon className="w-4 h-4 text-sovereign-gold" strokeWidth={1.8} />
                            <span className="text-sm font-medium">{link.label}</span>
                          </Link>
                        ))}
                      </div>
                    )
                  }

                  return (
                    <Link
                      key={item.id}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={cn(
                        'flex flex-col py-3 px-4 rounded-[6px] transition-colors duration-200 mobile-nav-link-hover',
                        isActive
                          ? 'text-champagne-gold bg-white/5'
                          : 'text-ivory-cream/75 hover:text-ivory-cream hover:bg-white/5',
                      )}
                      aria-current={isActive ? 'page' : undefined}
                    >
                      <span className="text-lg font-medium">{item.label}</span>
                      <span className={cn(
                        'text-xs font-sans mt-0.5',
                        isActive ? 'text-champagne-gold/60' : 'text-ivory-cream/35'
                      )}>
                        {NAV_DESCRIPTIONS[item.id]}
                      </span>
                    </Link>
                  )
                })}
              </nav>

              {/* ---- Pinned Bottom: CTA + Contact ---- */}
              <div className="p-6 pt-4 space-y-3 border-t border-white/10">
                <div className="flex items-center justify-between">
                  <span className="text-ivory-cream/50 text-xs font-sans">Dark Mode</span>
                  <ThemeToggle />
                </div>
                <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                  <Button
                    className="w-full bg-dhi-red text-white hover:bg-dhi-red-dark font-bold rounded-full h-14 text-base transition-colors duration-200"
                  >
                    Book Strategy Call
                  </Button>
                </Link>

                <div className="grid grid-cols-3 gap-3">
                  <a
                    href="tel:+919844868662"
                    className={cn(
                      'inline-flex items-center justify-center gap-2',
                      'h-12 rounded-xl border border-white/20 text-ivory-cream',
                      'hover:bg-white/5 transition-colors duration-200 text-sm font-medium',
                    )}
                  >
                    <Phone className="w-4 h-4" />
                    Call
                  </a>
                  <a
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      'inline-flex items-center justify-center gap-2',
                      'h-12 rounded-xl border border-white/20 text-ivory-cream',
                      'hover:bg-white/5 transition-colors duration-200 text-sm font-medium',
                    )}
                  >
                    <MessageCircle className="w-4 h-4" />
                    WhatsApp
                  </a>
                  <a
                    href="https://maps.google.com/?q=DHI+IAS+Academy+1561+2nd+Floor+8th+Cross+Chandra+Layout+Bengaluru"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      'inline-flex items-center justify-center gap-2',
                      'h-12 rounded-xl border border-white/20 text-ivory-cream',
                      'hover:bg-white/5 transition-colors duration-200 text-sm font-medium',
                    )}
                  >
                    <MapPin className="w-4 h-4" />
                    Visit
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
