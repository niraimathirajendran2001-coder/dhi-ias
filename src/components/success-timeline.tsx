'use client'

import { useRef, useEffect, useState, useCallback } from 'react'
import { motion, useInView } from 'framer-motion'
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'

/* ─── Timeline Events Data ─── */
const timelineEvents = [
  {
    year: '2010',
    title: 'Founded in Bengaluru',
    description: 'Started with a vision to create the next generation of civil servants',
  },
  {
    year: '2013',
    title: 'First IAS Selection',
    description: 'Our first student cracked UPSC CSE, validating our methodology',
  },
  {
    year: '2016',
    title: '100+ Selections Milestone',
    description: 'Crossed 100 selections across UPSC & KAS',
  },
  {
    year: '2018',
    title: 'KAS State Topper',
    description: 'Our student secured Rank 1 in KAS examination',
  },
  {
    year: '2020',
    title: 'Digital Expansion',
    description: 'Launched online classes and digital study resources during pandemic',
  },
  {
    year: '2022',
    title: '200+ Selections',
    description: 'Doubled our selection count with consistent results',
  },
  {
    year: '2024',
    title: 'New Campus',
    description: 'Expanded to our state-of-the-art campus in Chandralayout',
  },
  {
    year: '2026',
    title: '500+ Selections Goal',
    description: 'On track to achieve 500+ total selections',
  },
]

/* ─── Milestone Card ─── */
function MilestoneCard({
  event,
  index,
}: {
  event: (typeof timelineEvents)[number]
  index: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={cn(
        'group relative flex-shrink-0 w-[260px] sm:w-[280px]',
        'md:flex-shrink-0',
      )}
    >
      <div
        className={cn(
          'relative rounded-xl p-5 sm:p-6',
          'bg-white dark:bg-[#111827]',
          'border border-light-gray dark:border-[#1C2541]',
          'premium-shadow',
          'transition-all duration-300',
          'hover:shadow-xl hover:-translate-y-1',
          'hover:border-[#C8960C]/40 dark:hover:border-[#E8B830]/40',
        )}
      >
        {/* Year */}
        <span
          className={cn(
            'font-mono text-[28px] sm:text-[32px] font-bold',
            'gold-gradient-text',
            'leading-none',
          )}
        >
          {event.year}
        </span>

        {/* Gold accent line */}
        <div
          className="my-3 h-[2px] w-8 rounded-full"
          style={{
            background: 'linear-gradient(90deg, #C8960C, #E8B830)',
          }}
        />

        {/* Title */}
        <h3
          className={cn(
            'font-serif text-[16px] sm:text-[18px] font-semibold leading-snug mb-2',
            'text-[#0F1F4B] dark:text-[#FAFAF7]',
          )}
        >
          {event.title}
        </h3>

        {/* Description */}
        <p
          className={cn(
            'font-sans text-[13px] leading-relaxed',
            'text-stone-gray dark:text-ivory-cream/60',
          )}
        >
          {event.description}
        </p>
      </div>
    </motion.div>
  )
}

/* ─── Vertical Timeline Card (Mobile) ─── */
function VerticalMilestoneCard({
  event,
  index,
}: {
  event: (typeof timelineEvents)[number]
  index: number
}) {
  return (
    <div className="relative flex items-start gap-5">
      {/* Timeline Dot */}
      <div className="flex flex-col items-center flex-shrink-0">
        <div
          className={cn(
            'w-4 h-4 rounded-full z-10',
            'bg-[#C8960C] dark:bg-[#E8B830]',
            'border-2 border-[#FAFAF7] dark:border-[#0D1525]',
            'shadow-[0_0_8px_rgba(200,150,12,0.3)]',
          )}
        />
        {index < timelineEvents.length - 1 && (
          <div
            className="w-[2px] flex-1 min-h-[40px]"
            style={{
              background: 'linear-gradient(180deg, #C8960C, #E8B830)',
            }}
          />
        )}
      </div>

      {/* Card */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.08 }}
        className={cn(
          'group relative rounded-xl p-5',
          'bg-white dark:bg-[#111827]',
          'border border-light-gray dark:border-[#1C2541]',
          'premium-shadow',
          'transition-all duration-300',
          'hover:shadow-xl hover:-translate-y-1',
          'hover:border-[#C8960C]/40 dark:hover:border-[#E8B830]/40',
          'mb-6',
        )}
      >
        {/* Year */}
        <span
          className={cn(
            'font-mono text-[24px] font-bold',
            'gold-gradient-text',
            'leading-none',
          )}
        >
          {event.year}
        </span>

        {/* Gold accent line */}
        <div
          className="my-2 h-[2px] w-8 rounded-full"
          style={{
            background: 'linear-gradient(90deg, #C8960C, #E8B830)',
          }}
        />

        {/* Title */}
        <h3
          className={cn(
            'font-serif text-[16px] font-semibold leading-snug mb-1.5',
            'text-[#0F1F4B] dark:text-[#FAFAF7]',
          )}
        >
          {event.title}
        </h3>

        {/* Description */}
        <p
          className={cn(
            'font-sans text-[13px] leading-relaxed',
            'text-stone-gray dark:text-ivory-cream/60',
          )}
        >
          {event.description}
        </p>
      </motion.div>
    </div>
  )
}

/* ─── Main Section ─── */
export default function SuccessTimeline() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' })
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)
  const [isAutoScrolling, setIsAutoScrolling] = useState(true)

  /* ─── Scroll check for arrow visibility ─── */
  const checkScroll = useCallback(() => {
    const el = scrollContainerRef.current
    if (!el) return
    setCanScrollLeft(el.scrollLeft > 10)
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10)
  }, [])

  /* ─── Auto-scroll with pause on hover ─── */
  useEffect(() => {
    const el = scrollContainerRef.current
    if (!el) return

    let direction = 1
    const scrollSpeed = 0.5

    const interval = setInterval(() => {
      if (!isAutoScrolling) return
      el.scrollLeft += scrollSpeed * direction

      if (el.scrollLeft >= el.scrollWidth - el.clientWidth - 5) {
        direction = -1
      } else if (el.scrollLeft <= 5) {
        direction = 1
      }

      checkScroll()
    }, 16)

    return () => clearInterval(interval)
  }, [isAutoScrolling, checkScroll])

  useEffect(() => {
    const el = scrollContainerRef.current
    if (!el) return
    el.addEventListener('scroll', checkScroll, { passive: true })
    checkScroll()
    return () => el.removeEventListener('scroll', checkScroll)
  }, [checkScroll])

  const scroll = (direction: 'left' | 'right') => {
    const el = scrollContainerRef.current
    if (!el) return
    setIsAutoScrolling(false)
    const amount = 300
    el.scrollBy({
      left: direction === 'left' ? -amount : amount,
      behavior: 'smooth',
    })
    // Resume auto scroll after 3 seconds of inactivity
    setTimeout(() => setIsAutoScrolling(true), 3000)
  }

  return (
    <section
      ref={sectionRef}
      className="relative py-16 md:py-24 overflow-hidden"
      aria-labelledby="success-timeline-heading"
    >
      {/* Cream gradient background */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(180deg, #FAFAF7 0%, #F5F3EE 50%, #FAFAF7 100%)',
        }}
      />
      {/* Dark mode background */}
      <div
        className="absolute inset-0 hidden dark:block"
        style={{
          background: 'linear-gradient(180deg, #0D1525 0%, #111B30 50%, #0D1525 100%)',
        }}
      />

      {/* Pattern overlay */}
      <div
        className="absolute inset-0 pointer-events-none pattern-dots opacity-20"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-10 md:mb-14 text-center"
        >
          {/* Section Label */}
          <p className="section-label ui-label section-label-diamond mb-4 text-[#C8960C] dark:text-[#E8B830]">
            OUR JOURNEY
          </p>

          {/* Heading */}
          <h2
            id="success-timeline-heading"
            className={cn(
              'font-serif section-heading text-[36px] leading-tight text-[#0F1F4B] dark:text-[#FAFAF7] md:text-[44px]',
            )}
          >
            A Legacy of Excellence
          </h2>

          {/* Gold Separator */}
          <div className="mx-auto mt-5 mb-4 h-[2px] w-10 bg-[#C8960C] dark:bg-[#E8B830]" />
        </motion.div>

        {/* ─── Desktop: Horizontal Timeline ─── */}
        <div className="hidden md:block">
          {/* Navigation Arrows */}
          <div className="flex justify-end gap-2 mb-6">
            <button
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              className={cn(
                'w-10 h-10 rounded-full flex items-center justify-center',
                'border border-[rgba(200,150,12,0.3)] dark:border-[rgba(232,184,48,0.3)]',
                'bg-white dark:bg-[#111827]',
                'text-[#C8960C] dark:text-[#E8B830]',
                'transition-all duration-200',
                'hover:bg-[#C8960C] hover:text-[#0F1F4B] dark:hover:bg-[#E8B830] dark:hover:text-[#0A1428]',
                'disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-white dark:disabled:hover:bg-[#111827] disabled:hover:text-[#C8960C] dark:disabled:hover:text-[#E8B830]',
              )}
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              className={cn(
                'w-10 h-10 rounded-full flex items-center justify-center',
                'border border-[rgba(200,150,12,0.3)] dark:border-[rgba(232,184,48,0.3)]',
                'bg-white dark:bg-[#111827]',
                'text-[#C8960C] dark:text-[#E8B830]',
                'transition-all duration-200',
                'hover:bg-[#C8960C] hover:text-[#0F1F4B] dark:hover:bg-[#E8B830] dark:hover:text-[#0A1428]',
                'disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-white dark:disabled:hover:bg-[#111827] disabled:hover:text-[#C8960C] dark:disabled:hover:text-[#E8B830]',
              )}
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Horizontal Scrollable Timeline */}
          <div
            className="relative"
            onMouseEnter={() => setIsAutoScrolling(false)}
            onMouseLeave={() => setIsAutoScrolling(true)}
          >
            {/* Gold gradient line */}
            <div
              className="absolute top-[42px] left-0 right-0 h-[2px] z-0"
              style={{
                background: 'linear-gradient(90deg, transparent, #C8960C, #E8B830, #C8960C, transparent)',
              }}
            />

            {/* Cards with dots above */}
            <div
              ref={scrollContainerRef}
              className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 pt-14"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {timelineEvents.map((event, index) => (
                <div key={event.year} className="relative flex flex-col items-center flex-shrink-0">
                  {/* Gold dot on timeline */}
                  <div
                    className={cn(
                      'absolute -top-[18px] left-1/2 -translate-x-1/2',
                      'w-4 h-4 rounded-full z-10',
                      'bg-[#C8960C] dark:bg-[#E8B830]',
                      'border-2 border-white dark:border-[#0D1525]',
                      'shadow-[0_0_8px_rgba(200,150,12,0.3)]',
                    )}
                  />
                  <MilestoneCard event={event} index={index} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ─── Mobile: Vertical Timeline ─── */}
        <div className="md:hidden">
          <div className="relative ml-3">
            {/* Vertical gold gradient line */}
            <div
              className="absolute left-[7px] top-0 bottom-0 w-[2px]"
              style={{
                background: 'linear-gradient(180deg, #C8960C, #E8B830, #C8960C)',
              }}
            />

            {/* Vertical milestone cards */}
            {timelineEvents.map((event, index) => (
              <VerticalMilestoneCard
                key={event.year}
                event={event}
                index={index}
              />
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <a
            href="#about"
            className={cn(
              'inline-flex items-center gap-2',
              'font-sans text-[14px] font-medium',
              'text-[#C8960C] dark:text-[#E8B830]',
              'transition-colors duration-200',
              'hover:text-champagne-gold dark:hover:text-[#F5D060]',
              'gold-underline-hover',
            )}
          >
            Read Our Full Story
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
