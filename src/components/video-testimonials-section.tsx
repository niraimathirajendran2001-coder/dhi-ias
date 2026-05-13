'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Play, Quote } from 'lucide-react'
import { cn } from '@/lib/utils'

/* ─── Testimonials Data ─── */
const testimonials = [
  {
    name: 'Rahul Menon',
    initials: 'RM',
    rank: 'AIR 34',
    service: 'IAS',
    year: '2024',
    quote: 'The mentorship changed everything',
    featured: true,
  },
  {
    name: 'Priya Sharma',
    initials: 'PS',
    rank: 'AIR 112',
    service: 'IPS',
    year: '2024',
    quote: 'Answer writing practice was the key',
    featured: false,
  },
  {
    name: 'Ananya Krishnan',
    initials: 'AK',
    rank: 'AIR 67',
    service: 'IFS',
    year: '2023',
    quote: 'From zero to IFS in 18 months',
    featured: false,
  },
  {
    name: 'Vikram Patel',
    initials: 'VP',
    rank: 'AIR 23',
    service: 'IAS',
    year: '2023',
    quote: 'The test series is unmatched',
    featured: false,
  },
  {
    name: 'Meera Nair',
    initials: 'MN',
    rank: 'AIR 89',
    service: 'IPS',
    year: '2024',
    quote: 'Personal guidance made the difference',
    featured: false,
  },
  {
    name: 'Arjun Reddy',
    initials: 'AR',
    rank: 'AIR 156',
    service: 'IRS',
    year: '2023',
    quote: 'Best decision of my life',
    featured: false,
  },
]

/* ─── Service Color Map ─── */
const serviceColors: Record<string, string> = {
  IAS: 'bg-[#C8960C] text-[#0F1F4B] dark:bg-[#E8B830] dark:text-[#0A1428]',
  IFS: 'bg-teal-600 text-white dark:bg-teal-500 dark:text-[#0A1428]',
  IPS: 'bg-[#1A2E6B] text-white dark:bg-[#243A80] dark:text-[#FAFAF7]',
  IRS: 'bg-[#1B3A6B] text-white dark:bg-[#264A8B] dark:text-[#FAFAF7]',
}

/* ─── Featured Card ─── */
function FeaturedCard({
  testimonial,
  index,
}: {
  testimonial: (typeof testimonials)[number]
  index: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={cn(
        'group relative rounded-xl overflow-hidden',
        'sm:col-span-2',
        'premium-shadow',
        'transition-all duration-400',
        'hover-lift',
      )}
    >
      {/* Video thumbnail placeholder with gradient overlay */}
      <div className="relative aspect-video sm:aspect-[21/9]">
        {/* Gradient background */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(135deg, #0F1F4B 0%, #1A2E6B 40%, #243A80 70%, #C8960C30 100%)',
          }}
        />
        {/* Dark mode gradient */}
        <div
          className="absolute inset-0 hidden dark:block"
          style={{
            background:
              'linear-gradient(135deg, #0A1428 0%, #0D1A35 40%, #111B30 70%, #E8B83020 100%)',
          }}
        />

        {/* Pattern overlay */}
        <div
          className="absolute inset-0 pointer-events-none pattern-dots opacity-30"
          aria-hidden="true"
        />

        {/* Play button centered */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className={cn(
              'w-16 h-16 sm:w-20 sm:h-20 rounded-full',
              'flex items-center justify-center',
              'bg-[#C8960C] dark:bg-[#E8B830]',
              'text-[#0F1F4B] dark:text-[#0A1428]',
              'shadow-[0_0_30px_rgba(200,150,12,0.4)]',
              'transition-shadow duration-300',
              'hover:shadow-[0_0_40px_rgba(200,150,12,0.6)]',
              'focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C8960C] dark:focus-visible:ring-[#E8B830]',
            )}
            aria-label={`Watch ${testimonial.name}'s video testimonial`}
          >
            <Play className="w-6 h-6 sm:w-7 sm:h-7 ml-1" fill="currentColor" />
          </motion.button>
        </div>

        {/* Quote mark decoration */}
        <Quote
          className={cn(
            'absolute top-4 left-4 sm:top-6 sm:left-6',
            'w-8 h-8 sm:w-10 sm:h-10',
            'text-[rgba(200,150,12,0.15)]',
          )}
        />

        {/* Bottom gradient overlay for text */}
        <div
          className="absolute bottom-0 left-0 right-0 h-1/2"
          style={{
            background: 'linear-gradient(to top, rgba(15,31,75,0.95), transparent)',
          }}
        />
        <div
          className="absolute bottom-0 left-0 right-0 h-1/2 hidden dark:block"
          style={{
            background: 'linear-gradient(to top, rgba(10,20,40,0.95), transparent)',
          }}
        />

        {/* Content at bottom */}
        <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 md:p-8">
          <div className="flex items-end gap-4 sm:gap-6">
            {/* Circular initials avatar */}
            <div
              className={cn(
                'flex-shrink-0 w-14 h-14 sm:w-16 sm:h-16 rounded-full',
                'flex items-center justify-center',
                'bg-[rgba(200,150,12,0.2)] dark:bg-[rgba(232,184,48,0.2)]',
                'border-2 border-[#C8960C] dark:border-[#E8B830]',
                'transition-all duration-300',
                'group-hover:border-[#F5D060] group-hover:shadow-[0_0_16px_rgba(200,150,12,0.3)]',
              )}
            >
              <span
                className={cn(
                  'font-serif text-[18px] sm:text-[20px] font-bold',
                  'text-[#C8960C] dark:text-[#E8B830]',
                )}
              >
                {testimonial.initials}
              </span>
            </div>

            {/* Info */}
            <div className="flex-1 min-w-0">
              {/* Quote */}
              <p
                className={cn(
                  'font-serif text-[18px] sm:text-[22px] md:text-[24px] font-medium italic',
                  'text-[#FAFAF7]',
                  'leading-snug mb-2',
                )}
              >
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
                {/* Name */}
                <span
                  className={cn(
                    'font-sans text-[14px] sm:text-[16px] font-semibold',
                    'text-[#FAFAF7]',
                  )}
                >
                  {testimonial.name}
                </span>

                {/* Rank Badge */}
                <span
                  className={cn(
                    'inline-flex items-center px-2.5 py-0.5 rounded-full',
                    'font-sans text-[11px] font-bold',
                    serviceColors[testimonial.service] || serviceColors.IAS,
                  )}
                >
                  {testimonial.rank} · {testimonial.service}
                </span>

                {/* Year */}
                <span
                  className={cn(
                    'font-mono text-[12px]',
                    'text-[#FAFAF7]/50',
                  )}
                >
                  {testimonial.year}
                </span>
              </div>
            </div>

            {/* Watch Video Button (Desktop) */}
            <div className="hidden sm:flex flex-shrink-0">
              <span
                className={cn(
                  'inline-flex items-center gap-2 px-4 py-2 rounded-lg',
                  'font-sans text-[12px] font-medium',
                  'bg-[rgba(200,150,12,0.15)] dark:bg-[rgba(232,184,48,0.15)]',
                  'text-[#C8960C] dark:text-[#E8B830]',
                  'border border-[rgba(200,150,12,0.25)] dark:border-[rgba(232,184,48,0.25)]',
                  'transition-all duration-300',
                  'group-hover:bg-[rgba(200,150,12,0.25)] dark:group-hover:bg-[rgba(232,184,48,0.25)]',
                )}
              >
                <Play className="w-3.5 h-3.5" fill="currentColor" />
                Watch Video
              </span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

/* ─── Regular Card ─── */
function RegularCard({
  testimonial,
  index,
}: {
  testimonial: (typeof testimonials)[number]
  index: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={cn(
        'group relative rounded-xl overflow-hidden',
        'premium-shadow',
        'transition-all duration-400',
        'hover-lift',
      )}
    >
      <div
        className={cn(
          'relative p-5 sm:p-6',
          'bg-[#0F1F4B] dark:bg-[#0A1428]',
          'border border-[rgba(200,150,12,0.12)] dark:border-[rgba(232,184,48,0.12)]',
          'transition-all duration-300',
          'hover:border-[rgba(200,150,12,0.3)] dark:hover:border-[rgba(232,184,48,0.3)]',
        )}
      >
        {/* Quote mark decoration */}
        <Quote
          className={cn(
            'absolute top-3 right-3',
            'w-6 h-6',
            'text-[rgba(200,150,12,0.1)]',
          )}
        />

        {/* Top Row: Avatar + Info */}
        <div className="flex items-center gap-3 mb-4">
          {/* Circular initials avatar */}
          <div
            className={cn(
              'flex-shrink-0 w-12 h-12 rounded-full',
              'flex items-center justify-center',
              'bg-[rgba(200,150,12,0.15)] dark:bg-[rgba(232,184,48,0.15)]',
              'border border-[rgba(200,150,12,0.3)] dark:border-[rgba(232,184,48,0.3)]',
              'transition-all duration-300',
              'group-hover:border-[#C8960C] dark:group-hover:border-[#E8B830]',
              'group-hover:shadow-[0_0_12px_rgba(200,150,12,0.2)]',
            )}
          >
            <span
              className={cn(
                'font-serif text-[16px] font-bold',
                'text-[#C8960C] dark:text-[#E8B830]',
              )}
            >
              {testimonial.initials}
            </span>
          </div>

          <div className="min-w-0">
            {/* Name */}
            <h3
              className={cn(
                'font-serif text-[15px] font-semibold',
                'text-[#FAFAF7]',
                'leading-tight',
              )}
            >
              {testimonial.name}
            </h3>
            <div className="flex items-center gap-2 mt-1">
              {/* Rank Badge */}
              <span
                className={cn(
                  'inline-flex items-center px-2 py-0.5 rounded-full',
                  'font-sans text-[10px] font-bold',
                  serviceColors[testimonial.service] || serviceColors.IAS,
                )}
              >
                {testimonial.rank} · {testimonial.service}
              </span>
              {/* Year */}
              <span
                className={cn(
                  'font-mono text-[11px]',
                  'text-[#FAFAF7]/40',
                )}
              >
                {testimonial.year}
              </span>
            </div>
          </div>
        </div>

        {/* Quote */}
        <p
          className={cn(
            'font-serif text-[15px] sm:text-[16px] italic',
            'text-[#FAFAF7]/80',
            'leading-relaxed mb-4',
          )}
        >
          &ldquo;{testimonial.quote}&rdquo;
        </p>

        {/* Play button */}
        <div className="flex items-center justify-between">
          <span
            className={cn(
              'font-sans text-[11px] uppercase tracking-wider',
              'text-[#FAFAF7]/30',
            )}
          >
            Video Testimonial
          </span>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className={cn(
              'w-10 h-10 rounded-full',
              'flex items-center justify-center',
              'bg-[rgba(200,150,12,0.12)] dark:bg-[rgba(232,184,48,0.12)]',
              'text-[#C8960C] dark:text-[#E8B830]',
              'border border-[rgba(200,150,12,0.25)] dark:border-[rgba(232,184,48,0.25)]',
              'transition-all duration-300',
              'hover:bg-[#C8960C] hover:text-[#0F1F4B] dark:hover:bg-[#E8B830] dark:hover:text-[#0A1428]',
              'focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C8960C] dark:focus-visible:ring-[#E8B830]',
            )}
            aria-label={`Watch ${testimonial.name}'s video testimonial`}
          >
            <Play className="w-4 h-4 ml-0.5" fill="currentColor" />
          </motion.button>
        </div>
      </div>
    </motion.div>
  )
}

/* ─── Main Section ─── */
export default function VideoTestimonialsSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' })

  const featuredTestimonial = testimonials[0]
  const regularTestimonials = testimonials.slice(1)

  return (
    <section
      ref={sectionRef}
      className="relative py-16 md:py-24 overflow-hidden"
      aria-labelledby="video-testimonials-heading"
    >
      {/* Navy gradient background */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(180deg, #0F1F4B 0%, #1A2E6B 50%, #0F1F4B 100%)',
        }}
      />
      {/* Dark mode background */}
      <div
        className="absolute inset-0 hidden dark:block"
        style={{
          background: 'linear-gradient(180deg, #0A1428 0%, #0D1A35 50%, #0A1428 100%)',
        }}
      />

      {/* Pattern dots overlay */}
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
          <p className="section-label ui-label mb-4 text-[#C8960C] dark:text-[#E8B830]">
            HEAR FROM OUR TOPPERS
          </p>

          {/* Heading */}
          <h2
            id="video-testimonials-heading"
            className={cn(
              'font-serif section-heading text-[36px] leading-tight text-[#FAFAF7] md:text-[44px]',
            )}
          >
            Stories That Inspire
          </h2>

          {/* Subheading */}
          <p
            className={cn(
              'mt-4 font-sans text-[16px] md:text-[18px]',
              'text-[#FAFAF7]/60',
              'max-w-xl mx-auto',
            )}
          >
            Our successful candidates share their journey and strategies
          </p>

          {/* Gold Separator */}
          <div className="mx-auto mt-5 mb-4 h-[2px] w-10 bg-[#C8960C] dark:bg-[#E8B830]" />
        </motion.div>

        {/* Featured Card */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          <FeaturedCard testimonial={featuredTestimonial} index={0} />

          {/* Regular Cards */}
          {regularTestimonials.map((testimonial, index) => (
            <RegularCard
              key={testimonial.name}
              testimonial={testimonial}
              index={index + 1}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
