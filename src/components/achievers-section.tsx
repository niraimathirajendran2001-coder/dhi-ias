'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'

/* ─── Achiever Data ─── */
const achievers = [
  { name: 'xxxxxxx', initials: 'A1', rank: 'xxxxxxx', service: 'IAS', year: 'xxxxxxx' },
  { name: 'xxxxxxx', initials: 'A2', rank: 'xxxxxxx', service: 'IAS', year: 'xxxxxxx' },
  { name: 'xxxxxxx', initials: 'A3', rank: 'xxxxxxx', service: 'IAS', year: 'xxxxxxx' },
  { name: 'xxxxxxx', initials: 'A4', rank: 'xxxxxxx', service: 'IFS', year: 'xxxxxxx' },
  { name: 'xxxxxxx', initials: 'A5', rank: 'xxxxxxx', service: 'IFS', year: 'xxxxxxx' },
  { name: 'xxxxxxx', initials: 'A6', rank: 'xxxxxxx', service: 'IPS', year: 'xxxxxxx' },
  { name: 'xxxxxxx', initials: 'A7', rank: 'xxxxxxx', service: 'IRS', year: 'xxxxxxx' },
  { name: 'xxxxxxx', initials: 'A8', rank: 'xxxxxxx', service: 'KAS', year: 'xxxxxxx' },
]

/* ─── Service Color Map ─── */
const serviceColors: Record<string, string> = {
  IAS: '#C8960C',
  IFS: '#0D6E6E',
  IPS: '#0F1F4B',
  IRS: '#1A2E6B',
  KAS: '#8B1A1A',
}

/* ─── Achiever Card ─── */
function AchieverCard({
  achiever,
  index,
}: {
  achiever: (typeof achievers)[number]
  index: number
}) {
  const serviceColor = serviceColors[achiever.service] || '#0F1F4B'

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className={cn(
        'group relative rounded-xl',
        'bg-white dark:bg-[#111827] border border-light-gray dark:border-[#1C2541]',
        'p-5 sm:p-6 text-center',
        'premium-shadow hover-lift gold-border-animate',
        'transition-all duration-300',
        'overflow-hidden',
        'card-hover-premium',
      )}
    >
      {/* Circular initials avatar */}
      <div className="flex justify-center mb-4">
        <div
          className={cn(
            'relative flex items-center justify-center',
            'w-16 h-16 rounded-full',
            'border-2 border-transparent',
            'transition-all duration-300',
            'group-hover:border-[#C8960C] group-hover:shadow-[0_0_12px_rgba(200,150,12,0.25)]',
          )}
          style={{ backgroundColor: '#0F1F4B' }}
        >
          <span
            className="font-serif text-lg font-bold"
            style={{ color: '#E8B830' }}
          >
            {achiever.initials}
          </span>
        </div>
      </div>

      {/* Name */}
      <h3
        className="font-serif text-[18px] font-semibold mb-2 text-navy dark:text-ivory-cream"
      >
        {achiever.name}
      </h3>

      {/* Rank Badge */}
      <div className="flex justify-center mb-2">
        <span
          className="inline-flex items-center px-3 py-1 rounded-full font-sans text-[11px] font-semibold tracking-wide shadow-sm"
          style={{
            backgroundColor: serviceColor,
            color: '#FAFAF7',
          }}
        >
          {achiever.rank}
        </span>
      </div>

      {/* Service */}
      <p
        className="font-sans text-[13px] font-medium mb-1 text-stone-gray dark:text-ivory-cream/70"
      >
        {achiever.service}
      </p>

      {/* Year */}
      <p
        className="font-mono text-[11px] text-mid-gray dark:text-ivory-cream/50"
      >
        {achiever.year}
      </p>
    </motion.div>
  )
}

/* ─── Main Section ─── */
export default function AchieversSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' })

  return (
    <section
      ref={sectionRef}
      className="relative py-16 md:py-24 overflow-hidden bg-ivory-cream dark:bg-[#0D1525]"
      aria-labelledby="achievers-heading"
    >
      {/* Subtle gradient background */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(180deg, #FAFAF7 0%, #F5F3EE 50%, #FAFAF7 100%)',
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-16 text-center"
        >
          {/* Section Label */}
          <p className="section-label ui-label section-label-diamond mb-4">Hall of Fame</p>

          {/* Heading */}
          <h2
            id="achievers-heading"
            className={cn(
              'font-serif section-heading text-[36px] leading-tight text-navy dark:text-ivory-cream md:text-[44px]',
            )}
          >
            Our Achievers
          </h2>

          {/* Gold Separator */}
          <div className="mx-auto mt-5 mb-4 h-[2px] w-10 bg-sovereign-gold dark:bg-champagne-gold" />

          {/* Subtext */}
          <p
            className="font-sans body-text text-[15px] md:text-[16px] text-mid-gray dark:text-ivory-cream/50"
          >
            Building the Next Generation of Civil Servants
          </p>
        </motion.div>

        {/* Achievers Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {achievers.map((achiever, index) => (
            <AchieverCard key={achiever.initials} achiever={achiever} index={index} />
          ))}
        </div>

        {/* View All Results Link */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="mt-10 text-center"
        >
          <a
            href="#results"
            className={cn(
              'inline-flex items-center gap-2',
              'font-sans text-[14px] font-medium',
              'text-sovereign-gold dark:text-champagne-gold',
              'transition-colors duration-200',
              'hover:text-champagne-gold dark:hover:text-[#F5D060]',
            )}
          >
            View All Results
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
