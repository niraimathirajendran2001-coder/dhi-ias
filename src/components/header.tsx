'use client'

import { useState, useEffect, useCallback, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone, MessageCircle } from 'lucide-react'
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
  { label: 'Home', href: '#home', id: 'home' },
  { label: 'About', href: '#about', id: 'about' },
  { label: 'Courses', href: '#courses', id: 'courses' },
  { label: 'Faculty', href: '#faculty', id: 'faculty' },
  { label: 'Results', href: '#results', id: 'results' },
  { label: 'Resources', href: '#resources', id: 'resources' },
  { label: 'Admissions', href: '#admissions', id: 'admissions' },
  { label: 'Contact', href: '#contact', id: 'contact' },
]

const SCROLL_THRESHOLD = 50
const HEADER_HEIGHT_DEFAULT = 80
const HEADER_HEIGHT_SCROLLED = 60

/* ------------------------------------------------------------------ */
/*  Hook: Active Section via IntersectionObserver                      */
/* ------------------------------------------------------------------ */

function useActiveSection(ids: string[]): string {
  const [activeId, setActiveId] = useState<string>(ids[0] ?? '')

  useEffect(() => {
    const observers: IntersectionObserver[] = []

    ids.forEach((id) => {
      const element = document.getElementById(id)
      if (!element) return

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveId(id)
          }
        },
        {
          /* Trigger when section is in the top 20%-40% of the viewport */
          rootMargin: '-20% 0px -60% 0px',
          threshold: 0,
        },
      )

      observer.observe(element)
      observers.push(observer)
    })

    return () => {
      observers.forEach((obs) => obs.disconnect())
    }
  }, [ids])

  return activeId
}

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
  const sectionIds = useMemo(() => NAV_ITEMS.map((item) => item.id), [])
  const activeSection = useActiveSection(sectionIds)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  /* ---- Smooth-scroll handler ---- */
  const scrollToSection = useCallback((id: string) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    setMobileMenuOpen(false)
  }, [])

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
          'fixed top-0 left-0 right-0 z-50 transition-colors duration-300',
          isScrolled
            ? 'bg-navy border-b border-sovereign-gold/25'
            : 'bg-ivory-cream/80 backdrop-blur-md',
        )}
        animate={{ height: headerHeight }}
        transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
        role="banner"
      >
        <div className="h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* -------- Logo -------- */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault()
              scrollToSection('home')
            }}
            className="flex-shrink-0 select-none"
            aria-label="Aristocrat IAS Academy — go to home"
          >
            <span
              className={cn(
                'block font-serif text-[22px] sm:text-2xl font-bold leading-none tracking-tight transition-colors duration-300',
                isScrolled ? 'text-ivory-cream' : 'text-navy',
              )}
            >
              ARISTOCRAT
            </span>
            <span className="block font-sans text-[9px] sm:text-[10px] font-semibold tracking-[0.2em] uppercase text-sovereign-gold leading-none mt-0.5">
              IAS ACADEMY
            </span>
          </a>

          {/* -------- Desktop Nav -------- */}
          <nav
            className="hidden lg:flex items-center gap-0.5"
            role="navigation"
            aria-label="Primary"
          >
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id
              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection(item.id)
                  }}
                  className={cn(
                    'relative px-3 py-2 text-[13px] font-medium transition-colors duration-200 whitespace-nowrap',
                    isScrolled
                      ? 'text-ivory-cream/80 hover:text-champagne-gold'
                      : 'text-navy/80 hover:text-sovereign-gold',
                    isActive && (isScrolled ? 'text-champagne-gold' : 'text-sovereign-gold'),
                  )}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {item.label}
                  {isActive && (
                    <motion.span
                      layoutId="desktop-nav-underline"
                      className="absolute bottom-0 left-3 right-3 h-[2px] bg-sovereign-gold rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
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
            <Button
              onClick={() => scrollToSection('admissions')}
              className={cn(
                'hidden sm:inline-flex bg-sovereign-gold text-navy hover:bg-champagne-gold',
                'font-semibold rounded-[6px] h-10 px-5 text-sm',
                'transition-colors duration-200',
              )}
            >
              Book Demo Class
            </Button>

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
                <a
                  href="#home"
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection('home')
                  }}
                >
                  <span className="block font-serif text-xl font-bold text-ivory-cream leading-none">
                    ARISTOCRAT
                  </span>
                  <span className="block font-sans text-[9px] font-semibold tracking-[0.2em] uppercase text-sovereign-gold leading-none mt-0.5">
                    IAS ACADEMY
                  </span>
                </a>
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
                  const isActive = activeSection === item.id
                  return (
                    <motion.a
                      key={item.id}
                      href={item.href}
                      onClick={(e) => {
                        e.preventDefault()
                        scrollToSection(item.id)
                      }}
                      initial={{ opacity: 0, x: 24 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: 0.04 * index,
                        duration: 0.3,
                        ease: 'easeOut',
                      }}
                      className={cn(
                        'flex items-center text-lg font-medium py-3 px-4 rounded-[6px] transition-colors duration-200',
                        isActive
                          ? 'text-champagne-gold bg-white/5'
                          : 'text-ivory-cream/75 hover:text-ivory-cream hover:bg-white/5',
                      )}
                      aria-current={isActive ? 'page' : undefined}
                    >
                      <span>{item.label}</span>
                      {isActive && (
                        <span className="ml-3 h-[2px] w-6 bg-sovereign-gold rounded-full flex-shrink-0" />
                      )}
                    </motion.a>
                  )
                })}
              </nav>

              {/* ---- Pinned Bottom: CTA + Contact ---- */}
              <div className="p-6 pt-4 space-y-3 border-t border-white/10">
                <div className="flex items-center justify-between">
                  <span className="text-ivory-cream/50 text-xs font-sans">Dark Mode</span>
                  <ThemeToggle />
                </div>
                <Button
                  onClick={() => scrollToSection('admissions')}
                  className="w-full bg-sovereign-gold text-navy hover:bg-champagne-gold font-semibold rounded-[6px] h-12 text-base transition-colors duration-200"
                >
                  Book Demo Class
                </Button>

                <div className="flex gap-3">
                  <a
                    href="https://wa.me/919876543210?text=Hi%2C%20I%27d%20like%20to%20know%20more%20about%20Aristocrat%20IAS%20Academy."
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      'flex-1 inline-flex items-center justify-center gap-2',
                      'h-12 rounded-[6px] border border-white/20 text-ivory-cream',
                      'hover:bg-white/5 transition-colors duration-200 text-sm font-medium',
                    )}
                  >
                    <MessageCircle className="w-4 h-4" />
                    WhatsApp
                  </a>
                  <a
                    href="tel:+919876543210"
                    className={cn(
                      'flex-1 inline-flex items-center justify-center gap-2',
                      'h-12 rounded-[6px] border border-white/20 text-ivory-cream',
                      'hover:bg-white/5 transition-colors duration-200 text-sm font-medium',
                    )}
                  >
                    <Phone className="w-4 h-4" />
                    Call Us
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
