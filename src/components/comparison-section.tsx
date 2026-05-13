'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Check, X, ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'

/* ─── Comparison Data ─── */
const comparisonData = [
  {
    feature: 'Faculty',
    others: 'Retired Teachers',
    aristocrat: 'Bureaucrats & Scholars',
    aristocratHighlight: true,
    othersHighlight: false,
  },
  {
    feature: 'Mentorship',
    others: 'Group-only Sessions',
    aristocrat: '1-on-1 from Day 1',
    aristocratHighlight: true,
    othersHighlight: false,
  },
  {
    feature: 'Test Evaluation',
    others: 'Generic Model Answers',
    aristocrat: 'Individual Feedback',
    aristocratHighlight: true,
    othersHighlight: false,
  },
  {
    feature: 'Batch Size',
    others: '100+ Students',
    aristocrat: 'Max 40 Students',
    aristocratHighlight: true,
    othersHighlight: true,
  },
  {
    feature: 'Study Material',
    others: 'Outdated Photocopies',
    aristocrat: 'Curated & Updated',
    aristocratHighlight: true,
    othersHighlight: false,
  },
  {
    feature: 'Interview Prep',
    others: 'In-house Faculty',
    aristocrat: 'Former UPSC Board Members',
    aristocratHighlight: true,
    othersHighlight: false,
  },
  {
    feature: 'Current Affairs',
    others: 'Weekly Summary',
    aristocrat: 'Daily Analysis',
    aristocratHighlight: true,
    othersHighlight: false,
  },
  {
    feature: 'Result Rate',
    others: 'Industry Average 15%',
    aristocrat: '70%+ Selection Rate',
    aristocratHighlight: true,
    othersHighlight: false,
  },
]

/* ─── Mobile Comparison Card ─── */
function ComparisonCard({
  item,
  index,
}: {
  item: (typeof comparisonData)[number]
  index: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className={cn(
        'rounded-xl p-5',
        'glass-card',
        'border border-[rgba(255,255,255,0.08)]',
        'relative overflow-hidden',
        'bg-[rgba(255,255,255,0.04)]',
      )}
    >
      {/* Feature Name */}
      <h4
        className={cn(
          'font-serif text-[16px] font-semibold mb-4',
          'text-ivory-cream dark:text-ivory-cream',
        )}
      >
        {item.feature}
      </h4>

      <div className="space-y-3">
        {/* Others */}
        <div
          className={cn(
            'flex items-center gap-3 p-3 rounded-lg',
            'bg-[rgba(255,255,255,0.03)]',
            'border border-[rgba(255,255,255,0.06)]',
          )}
        >
          <span className="flex-shrink-0 w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center">
            <X className="w-3.5 h-3.5 text-red-400" />
          </span>
          <div>
            <span className="block font-sans text-[10px] ui-label text-[#FAFAF7]/40 mb-0.5">
              Others
            </span>
            <span className="font-sans text-[13px] text-[#FAFAF7]/50">
              {item.others}
            </span>
          </div>
        </div>

        {/* Aristocrat */}
        <div
          className={cn(
            'flex items-center gap-3 p-3 rounded-lg',
            'comparison-highlight',
            'border border-[rgba(200,150,12,0.2)]',
          )}
        >
          <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#C8960C]/20 flex items-center justify-center">
            <Check className="w-3.5 h-3.5 text-[#E8B830]" />
          </span>
          <div>
            <span className="block font-sans text-[10px] ui-label text-[#E8B830]/70 mb-0.5">
              Aristocrat
            </span>
            <span className="font-sans text-[13px] font-medium text-[#E8B830]">
              {item.aristocrat}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

/* ─── Desktop Table Row ─── */
function ComparisonRow({
  item,
  index,
}: {
  item: (typeof comparisonData)[number]
  index: number
}) {
  return (
    <motion.tr
      initial={{ opacity: 0, x: -16 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      className={cn(
        'group transition-colors duration-200',
        index % 2 === 0
          ? 'bg-[rgba(255,255,255,0.02)]'
          : 'bg-[rgba(255,255,255,0.05)]',
        'hover:bg-[rgba(200,150,12,0.06)]',
      )}
    >
      {/* Feature */}
      <td className="px-5 py-4 font-serif text-[15px] font-medium text-ivory-cream dark:text-ivory-cream">
        {item.feature}
      </td>

      {/* Others */}
      <td className="px-5 py-4">
        <div className="flex items-center gap-3">
          <span className="flex-shrink-0 w-6 h-6 rounded-full bg-red-500/15 flex items-center justify-center">
            <X className="w-3 h-3 text-red-400/70" />
          </span>
          <span className="font-sans text-[14px] text-ivory-cream/40 dark:text-ivory-cream/40">
            {item.others}
          </span>
        </div>
      </td>

      {/* Aristocrat — highlighted with gold background gradient */}
      <td className={cn('px-5 py-4', 'comparison-highlight')}>
        <div className="flex items-center gap-3">
          <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#C8960C]/20 dark:bg-champagne-gold/20 flex items-center justify-center">
            <Check className="w-3 h-3 text-[#E8B830] dark:text-champagne-gold" />
          </span>
          <span className="font-sans text-[14px] font-medium text-[#E8B830] dark:text-champagne-gold">
            {item.aristocrat}
          </span>
        </div>
      </td>
    </motion.tr>
  )
}

/* ─── Main Section ─── */
export default function ComparisonSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' })

  return (
    <section
      ref={sectionRef}
      className="relative py-16 md:py-24 overflow-hidden"
      aria-labelledby="comparison-heading"
    >
      {/* Navy gradient background */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-navy via-royal-navy to-navy dark:from-[#0A1428] dark:via-[#0D1525] dark:to-[#0A1428]"
      />
      <div
        className="absolute inset-0 hidden dark:block bg-gradient-to-br from-[#0A1428] via-[#0D1525] to-[#0A1428]"
      />

      {/* Pattern dots overlay */}
      <div
        className="absolute inset-0 pointer-events-none pattern-dots opacity-20"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-10 md:mb-14 text-center"
        >
          {/* Section Label */}
          <p className="section-label ui-label section-label-diamond mb-4 text-[#C8960C] dark:text-champagne-gold">
            THE ARISTOCRAT ADVANTAGE
          </p>

          {/* Heading */}
          <h2
            id="comparison-heading"
            className={cn(
              'font-serif section-heading text-[36px] leading-tight text-ivory-cream dark:text-ivory-cream md:text-[44px]',
            )}
          >
            Why We Stand Apart
          </h2>

          {/* Gold Separator */}
          <div className="mx-auto mt-5 h-[2px] w-10 bg-[#C8960C] dark:bg-champagne-gold" />
        </motion.div>

        {/* Desktop Table (hidden on mobile) */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="hidden md:block"
        >
          <div
            className={cn(
              'rounded-xl overflow-hidden',
              'glass-card',
              'border border-[rgba(255,255,255,0.08)]',
              'relative',
              'bg-[rgba(255,255,255,0.03)]',
              'backdrop-blur-[12px]',
            )}
          >
            <table className="w-full">
              {/* Header — sticky on scroll */}
              <thead className="sticky top-0 z-10">
                <tr
                  className="bg-gradient-to-r from-[rgba(200,150,12,0.15)] via-[rgba(232,184,48,0.2)] to-[rgba(200,150,12,0.15)]"
                >
                  <th className="px-5 py-4 text-left font-sans ui-label text-[11px] text-ivory-cream/70 dark:text-ivory-cream/70">
                    Feature
                  </th>
                  <th className="px-5 py-4 text-left font-sans ui-label text-[11px] text-ivory-cream/40 dark:text-ivory-cream/40">
                    Others
                  </th>
                  <th className={cn('px-5 py-4 text-left font-sans ui-label text-[11px] text-[#E8B830] dark:text-champagne-gold', 'comparison-highlight')}>
                    Aristocrat
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((item, index) => (
                  <ComparisonRow key={item.feature} item={item} index={index} />
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Mobile Cards (hidden on desktop) */}
        <div className="md:hidden grid grid-cols-1 gap-4">
          {comparisonData.map((item, index) => (
            <ComparisonCard key={item.feature} item={item} index={index} />
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-10 text-center"
        >
          <a
            href="#admissions"
            className={cn(
              'inline-flex items-center gap-2',
              'px-8 py-3.5 rounded-lg',
              'font-sans text-[14px] font-semibold tracking-wide',
              'transition-all duration-300',
              'btn-gold-shimmer',
              'bg-gradient-to-br from-[#C8960C] to-[#E8B830] dark:from-champagne-gold dark:to-[#F5D060]',
              'text-navy dark:text-[#0F1F4B]',
            )}
          >
            Experience the Difference
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
