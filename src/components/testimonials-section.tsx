'use client'

import { useRef, useCallback, useEffect, useState } from 'react'
import { motion, useInView, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Star, BadgeCheck } from 'lucide-react'
import useEmblaCarousel from 'embla-carousel-react'
import { cn } from '@/lib/utils'

const testimonials = [
  {
    name: 'xxxxxxx',
    initials: 'T1',
    rank: 'xxxxxxx',
    quote:
      "Aristocrat didn't just teach me how to clear the exam — they showed me how to think like an officer. The mentorship here is not a feature; it's the foundation.",
  },
  {
    name: 'xxxxxxx',
    initials: 'T2',
    rank: 'xxxxxxx',
    quote:
      'I attempted UPSC twice before joining Aristocrat. The structured approach and personal mentorship changed everything. My mentor was available at 11 PM the night before my interview.',
  },
  {
    name: 'xxxxxxx',
    initials: 'T3',
    rank: 'xxxxxxx',
    quote:
      'The faculty at Aristocrat brings real administrative experience into the classroom. When your Polity teacher has actually drafted policy, the subject comes alive in ways no textbook can replicate.',
  },
]

function StarRating() {
  return (
    <div className="flex items-center gap-0.5 mb-4" aria-label="5 out of 5 stars">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className="w-4 h-4 fill-[#C8960C] star-gold"
        />
      ))}
    </div>
  )
}

/* ─── Parallax Quote Mark Decorations ─── */
function QuoteMarkParallax({ position }: { position: 'top-left' | 'bottom-right' }) {
  const sectionRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], [0, position === 'top-left' ? -30 : 30])
  const x = useTransform(scrollYProgress, [0, 1], [0, position === 'top-left' ? -15 : 15])

  const className = position === 'top-left'
    ? 'absolute top-20 left-8 w-40 h-40 opacity-[0.03]'
    : 'absolute bottom-20 right-8 w-32 h-32 opacity-[0.03]'

  return (
    <motion.div
      ref={sectionRef}
      className={cn(className, 'pointer-events-none')}
      style={{ y, x }}
      aria-hidden="true"
    >
      <svg viewBox="0 0 200 200" fill="none" className="w-full h-full">
        <path
          d="M40 100C40 72 60 40 100 40C80 60 70 80 70 100H100V160H40V100ZM120 100C120 72 140 40 180 40C160 60 150 80 150 100H180V160H120V100Z"
          fill="#C8960C"
        />
      </svg>
    </motion.div>
  )
}

export default function TestimonialsSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'center',
  })

  const [selectedIndex, setSelectedIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    emblaApi.on('select', onSelect)
    return () => {
      emblaApi.off('select', onSelect)
    }
  }, [emblaApi, onSelect])

  // Auto-advance every 6 seconds, pause on hover
  useEffect(() => {
    if (!emblaApi || isPaused) return
    const interval = setInterval(() => {
      emblaApi.scrollNext()
    }, 6000)
    return () => clearInterval(interval)
  }, [emblaApi, isPaused])

  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext()
  }, [emblaApi])

  return (
    <section
      ref={sectionRef}
      className="relative bg-ivory-cream dark:bg-[#0D1525] py-16 md:py-24 overflow-hidden"
      aria-labelledby="testimonials-heading"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Decorative quote SVG mark in the background — with parallax */}
      <QuoteMarkParallax position="top-left" />
      <QuoteMarkParallax position="bottom-right" />

      {/* Subtle gradient overlay at section edges */}
      <div
        className="absolute top-0 left-0 right-0 h-24 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, #FAFAF7, transparent)' }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
        style={{ background: 'linear-gradient(to top, #FAFAF7, transparent)' }}
        aria-hidden="true"
      />
      {/* Gradient overlay on dark mode */}
      <div
        className="absolute top-0 left-0 right-0 h-24 pointer-events-none hidden dark:block"
        style={{ background: 'linear-gradient(to bottom, #0D1525, transparent)' }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none hidden dark:block"
        style={{ background: 'linear-gradient(to top, #0D1525, transparent)' }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center md:mb-16"
        >
          {/* Section Label */}
          <p className="section-label ui-label section-label-diamond mb-4">Success Stories</p>

          {/* Section Heading */}
          <h2
            id="testimonials-heading"
            className={cn(
              'mb-6 font-serif section-heading text-[36px] leading-tight text-navy dark:text-ivory-cream md:text-[44px]'
            )}
          >
            Voices of Achievement
          </h2>

          {/* Gold Separator */}
          <div className="mx-auto mb-6 h-[2px] w-10 bg-sovereign-gold dark:bg-champagne-gold" />
        </motion.div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Desktop Arrow Buttons */}
          <button
            onClick={scrollPrev}
            className={cn(
              'absolute -left-4 top-1/2 z-10 hidden -translate-y-1/2 md:flex',
              'h-10 w-10 items-center justify-center rounded-full',
              'border border-light-gray dark:border-[#1C2541] bg-white dark:bg-[#111827] text-navy dark:text-ivory-cream',
              'transition-all duration-200 hover:border-sovereign-gold dark:hover:border-champagne-gold hover:text-sovereign-gold dark:hover:text-champagne-gold',
              'focus-visible:outline-2 focus-visible:outline-sovereign-gold'
            )}
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <button
            onClick={scrollNext}
            className={cn(
              'absolute -right-4 top-1/2 z-10 hidden -translate-y-1/2 md:flex',
              'h-10 w-10 items-center justify-center rounded-full',
              'border border-light-gray dark:border-[#1C2541] bg-white dark:bg-[#111827] text-navy dark:text-ivory-cream',
              'transition-all duration-200 hover:border-sovereign-gold dark:hover:border-champagne-gold hover:text-sovereign-gold dark:hover:text-champagne-gold',
              'focus-visible:outline-2 focus-visible:outline-sovereign-gold'
            )}
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          {/* Embla Carousel */}
          <div ref={emblaRef} className="overflow-hidden">
            <div className="flex">
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.initials}
                  className="min-w-0 flex-shrink-0 basis-full pl-0"
                >
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.4, ease: 'easeOut' }}
                      className={cn(
                        'relative mx-auto max-w-3xl rounded-xl border border-light-gray dark:border-[#1C2541] bg-white dark:bg-[#111827]',
                        'p-8 md:p-12',
                        'gold-top-border',
                        selectedIndex === index && 'card-gold-border-left is-active'
                      )}
                    >
                      {/* Decorative Quote Mark */}
                      <span
                        className={cn(
                          'absolute -top-2 left-6 font-serif text-[72px] leading-none',
                          'text-sovereign-gold dark:text-champagne-gold select-none md:left-10'
                        )}
                        aria-hidden="true"
                      >
                        &ldquo;
                      </span>

                      {/* 5 Gold Stars */}
                      <div className="mt-4">
                        <StarRating />
                      </div>

                      {/* Quote Text */}
                      <blockquote
                        className={cn(
                          'mb-8 font-serif pull-quote text-[26px]',
                          'text-navy dark:text-ivory-cream md:text-[32px]'
                        )}
                      >
                        {testimonial.quote}
                      </blockquote>

                      {/* Author Info */}
                      <div className="flex items-center gap-4">
                        {/* Avatar */}
                        <div
                          className={cn(
                            'flex h-12 w-12 items-center justify-center rounded-full',
                            'bg-navy dark:bg-[#0A1428] text-champagne-gold',
                            'font-serif text-sm font-semibold'
                          )}
                        >
                          {testimonial.initials}
                        </div>

                        {/* Name, Rank & Verified Badge */}
                        <div>
                          <p className="font-sans text-[16px] font-semibold text-navy dark:text-ivory-cream">
                            {testimonial.name}
                          </p>
                          <p className="font-sans text-[14px] text-stone-gray dark:text-ivory-cream/70">
                            {testimonial.rank}
                          </p>
                          {/* Verified Student badge */}
                          <span className="badge-verified-icon mt-1">
                            <BadgeCheck className="w-3.5 h-3.5" />
                            Verified Student
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Navigation Dots — gold and larger */}
        <div className="mt-8 flex items-center justify-center gap-2.5">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => emblaApi?.scrollTo(index)}
              className={cn(
                'h-3 rounded-full transition-all duration-300',
                selectedIndex === index
                  ? 'w-10 bg-sovereign-gold dark:bg-champagne-gold'
                  : 'w-3 bg-sovereign-gold/30 dark:bg-champagne-gold/30 hover:bg-sovereign-gold/60 dark:hover:bg-champagne-gold/60'
              )}
              aria-label={`Go to testimonial ${index + 1}`}
              aria-current={selectedIndex === index ? 'true' : undefined}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
