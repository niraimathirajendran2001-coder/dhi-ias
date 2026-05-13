'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Check, ArrowRight, Star } from 'lucide-react'
import { cn } from '@/lib/utils'

/* ─── Tier Data ─── */
const tiers = [
  {
    name: 'Foundation Mentor',
    price: '₹5,000',
    period: '/mo',
    popular: false,
    description: 'Build a strong foundation with structured guidance',
    features: [
      { label: 'Weekly 1-on-1 sessions', included: true },
      { label: 'Study plan customization', included: true },
      { label: 'Answer review', included: false },
      { label: 'Mock interview prep', included: false },
      { label: '24/7 doubt resolution', included: false },
    ],
  },
  {
    name: 'Advanced Guide',
    price: '₹8,000',
    period: '/mo',
    popular: true,
    description: 'Comprehensive mentorship for serious aspirants',
    features: [
      { label: 'Weekly 1-on-1 sessions', included: true },
      { label: 'Study plan customization', included: true },
      { label: 'Answer review', included: true },
      { label: 'Mock interview prep', included: true },
      { label: '24/7 doubt resolution', included: false },
    ],
  },
  {
    name: 'Premium Strategist',
    price: '₹15,000',
    period: '/mo',
    popular: false,
    description: 'Elite all-access mentorship with unlimited support',
    features: [
      { label: 'Weekly 1-on-1 sessions', included: true },
      { label: 'Study plan customization', included: true },
      { label: 'Answer review', included: true },
      { label: 'Mock interview prep', included: true },
      { label: '24/7 doubt resolution', included: true },
    ],
  },
]

/* ─── Tier Card ─── */
function TierCard({
  tier,
  index,
}: {
  tier: (typeof tiers)[number]
  index: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className={cn(
        'group relative rounded-2xl',
        'glass-card gold-top-border',
        'p-6 sm:p-8',
        'hover-lift transition-all duration-300',
        'flex flex-col',
        'border border-ivory-cream/10 dark:border-ivory-cream/5',
        tier.popular && 'ring-2 ring-[#C8960C]/40 dark:ring-champagne-gold/40',
      )}
    >
      {/* Most Popular Ribbon */}
      {tier.popular && (
        <div
          className={cn(
            'absolute -top-3 left-1/2 -translate-x-1/2',
            'px-4 py-1 rounded-full',
            'font-sans text-[11px] font-bold tracking-wider uppercase',
            'ribbon z-10',
            'flex items-center gap-1.5',
          )}
          style={{
            background: 'linear-gradient(135deg, #C8960C, #E8B830)',
            color: '#0F1F4B',
          }}
        >
          <Star className="w-3 h-3 fill-current" />
          Most Popular
        </div>
      )}

      {/* Tier Name */}
      <h3 className="font-serif text-[22px] sm:text-[26px] font-semibold text-ivory-cream dark:text-ivory-cream mb-2">
        {tier.name}
      </h3>

      {/* Description */}
      <p className="font-sans text-[13px] text-ivory-cream/60 dark:text-ivory-cream/50 mb-5">
        {tier.description}
      </p>

      {/* Price */}
      <div className="mb-6">
        <span className="font-serif text-[36px] sm:text-[42px] font-bold gold-gradient-text leading-none">
          {tier.price}
        </span>
        <span className="font-sans text-[14px] text-ivory-cream/50 dark:text-ivory-cream/40 ml-1">
          {tier.period}
        </span>
      </div>

      {/* Features */}
      <ul className="space-y-3 mb-8 flex-1">
        {tier.features.map((feature) => (
          <li key={feature.label} className="flex items-start gap-2.5">
            {feature.included ? (
              <span
                className={cn(
                  'shrink-0 w-5 h-5 rounded-full',
                  'flex items-center justify-center',
                  'mt-0.5',
                )}
                style={{ backgroundColor: 'rgba(200, 150, 12, 0.2)' }}
              >
                <Check className="w-3 h-3 text-[#C8960C] dark:text-champagne-gold" />
              </span>
            ) : (
              <span
                className={cn(
                  'shrink-0 w-5 h-5 rounded-full',
                  'flex items-center justify-center',
                  'mt-0.5',
                  'border border-ivory-cream/15 dark:border-ivory-cream/10',
                )}
              />
            )}
            <span
              className={cn(
                'font-sans text-[13px] sm:text-[14px]',
                feature.included
                  ? 'text-ivory-cream/90 dark:text-ivory-cream/80'
                  : 'text-ivory-cream/30 dark:text-ivory-cream/20',
              )}
            >
              {feature.label}
            </span>
          </li>
        ))}
      </ul>

      {/* CTA Button */}
      <button
        className={cn(
          'w-full inline-flex items-center justify-center gap-2',
          'px-6 py-3 rounded-lg',
          'font-sans text-[14px] font-semibold tracking-wide',
          'transition-all duration-300',
          tier.popular ? 'btn-gold-shimmer' : '',
        )}
        style={{
          background: tier.popular
            ? 'linear-gradient(135deg, #C8960C, #E8B830)'
            : 'transparent',
          color: tier.popular ? '#0F1F4B' : '#FAFAF7',
          border: tier.popular ? 'none' : '1px solid rgba(200,150,12,0.4)',
        }}
      >
        Get Started
        <ArrowRight className="w-4 h-4" />
      </button>
    </motion.div>
  )
}

/* ─── Main Section ─── */
export function MentorshipSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' })

  return (
    <section
      ref={sectionRef}
      className="relative py-16 md:py-24 overflow-hidden"
      aria-labelledby="mentorship-heading"
    >
      {/* Navy gradient background */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(160deg, #0F1F4B 0%, #1A2E6B 40%, #0F1F4B 100%)',
        }}
      />

      {/* Pattern dots overlay */}
      <div
        className="absolute inset-0 pointer-events-none pattern-dots"
        style={{ opacity: 0.3 }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-16 text-center"
        >
          <p className="section-label ui-label section-label-diamond mb-4 text-[#C8960C] dark:text-champagne-gold">
            MENTORSHIP
          </p>
          <h2
            id="mentorship-heading"
            className="font-serif section-heading text-[36px] leading-tight text-ivory-cream md:text-[44px]"
          >
            1-on-1 Mentorship Programme
          </h2>
          <div className="mx-auto mt-5 mb-4 h-[2px] w-10 bg-[#C8960C] dark:bg-champagne-gold" />
          <p className="font-sans body-text text-[15px] md:text-[16px] text-ivory-cream/60 dark:text-ivory-cream/50 max-w-2xl mx-auto">
            Personalised guidance from experienced mentors who have walked the path before you
          </p>
        </motion.div>

        {/* Tier Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
          {tiers.map((tier, i) => (
            <TierCard key={tier.name} tier={tier} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
