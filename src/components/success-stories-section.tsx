'use client'

import { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { ArrowRight, ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

/* ─── Story Data ─── */
const stories = [
  {
    name: 'Priya Sharma',
    initials: 'PS',
    rank: 'AIR 23, CSE 2024',
    service: 'IAS',
    year: '2024',
    testimonial:
      'Aristocrat\'s structured approach and personalized mentorship transformed my preparation. The faculty\'s guidance on answer writing was the game-changer for my Mains score.',
    tips: [
      'Focus on answer writing practice from Day 1 — join a good test series',
      'Revise standard books at least 4 times before Prelims',
      'Maintain short notes for quick revision in the final month',
    ],
  },
  {
    name: 'Vikram Patel',
    initials: 'VP',
    rank: 'AIR 45, CSE 2023',
    service: 'IAS',
    year: '2023',
    testimonial:
      'The mock interview sessions at Aristocrat were incredibly close to the real UPSC interview. I walked in confident and walked out with a top rank.',
    tips: [
      'Start interview preparation early — don\'t wait for Mains results',
      'Build a balanced DAF with hobbies that show depth and character',
      'Practice speaking concisely — 2-minute answers are ideal',
    ],
  },
  {
    name: 'Ananya Krishnan',
    initials: 'AK',
    rank: 'AIR 67, CSE 2024',
    service: 'IFS',
    year: '2024',
    testimonial:
      'Coming from an engineering background, I was unsure about optional selection. Aristocrat\'s counselling helped me choose the right optional and score 290+.',
    tips: [
      'Choose your optional based on interest and scoring potential, not trends',
      'Current affairs should complement your optional, not replace standard books',
      'Join study groups for peer learning and motivation',
    ],
  },
  {
    name: 'Deepak Kumar',
    initials: 'DK',
    rank: 'AIR 112, CSE 2023',
    service: 'IPS',
    year: '2023',
    testimonial:
      'The daily answer writing practice and weekly tests at Aristocrat built my consistency. Their current affairs modules are the best in the industry.',
    tips: [
      'Consistency beats intensity — study 6-8 hours daily, not 14 hours on weekends',
      'Use the Pomodoro technique to maintain focus during long study hours',
      'Analyze previous year questions to understand UPSC\'s evolving pattern',
    ],
  },
]

/* ─── Story Card ─── */
function StoryCard({
  story,
  index,
}: {
  story: (typeof stories)[number]
  index: number
}) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={cn(
        'group relative rounded-xl',
        'bg-white dark:bg-[#111827] border border-light-gray dark:border-[#1C2541]',
        'p-5 sm:p-6',
        'premium-shadow hover-lift gold-top-border',
        'transition-all duration-300',
        'overflow-hidden',
        'card-hover-premium',
        'flex flex-col',
      )}
    >
      {/* Year Badge */}
      <div className="absolute top-3 right-3">
        <span
          className={cn(
            'inline-flex items-center px-2.5 py-0.5 rounded-full',
            'font-mono text-[11px] font-semibold',
            'bg-[#C8960C]/10 dark:bg-champagne-gold/10',
            'text-[#C8960C] dark:text-champagne-gold',
          )}
        >
          {story.year}
        </span>
      </div>

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
            className="font-serif text-lg font-bold text-[#E8B830] dark:text-champagne-gold"
          >
            {story.initials}
          </span>
        </div>
      </div>

      {/* Name & Rank */}
      <h3 className="font-serif text-[18px] font-semibold mb-1 text-navy dark:text-ivory-cream text-center">
        {story.name}
      </h3>
      <p className="font-sans text-[13px] font-medium text-[#C8960C] dark:text-champagne-gold text-center mb-3">
        {story.rank}
      </p>

      {/* Testimonial Quote */}
      <div className="relative mb-4 flex-1">
        <span
          className="absolute -top-1 -left-1 text-[#C8960C]/20 dark:text-champagne-gold/20 font-serif text-[40px] leading-none select-none"
          aria-hidden="true"
        >
          &ldquo;
        </span>
        <p className="font-sans body-text text-[13px] sm:text-[14px] text-stone-gray dark:text-ivory-cream/70 pl-4 italic">
          {story.testimonial}
        </p>
      </div>

      {/* Expandable Preparation Strategy */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className={cn(
          'w-full flex items-center justify-between gap-2',
          'px-3 py-2 rounded-lg',
          'bg-[#C8960C]/5 dark:bg-champagne-gold/5',
          'border border-[#C8960C]/15 dark:border-champagne-gold/15',
          'transition-all duration-200',
          'hover:bg-[#C8960C]/10 dark:hover:bg-champagne-gold/10',
          'text-left',
        )}
        aria-expanded={isExpanded}
      >
        <span className="font-sans text-[12px] font-semibold tracking-wide uppercase text-[#C8960C] dark:text-champagne-gold">
          Preparation Strategy
        </span>
        <ChevronDown
          className={cn(
            'w-4 h-4 text-[#C8960C] dark:text-champagne-gold transition-transform duration-200',
            isExpanded && 'rotate-180',
          )}
        />
      </button>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <ul className="pt-3 space-y-2">
              {story.tips.map((tip, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 font-sans text-[12px] sm:text-[13px] text-stone-gray dark:text-ivory-cream/65"
                >
                  <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-[#C8960C] dark:bg-champagne-gold mt-1.5" />
                  {tip}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

/* ─── Main Section ─── */
export default function SuccessStoriesSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' })

  return (
    <section
      ref={sectionRef}
      className="relative py-16 md:py-24 overflow-hidden bg-ivory-cream dark:bg-[#0D1525]"
      aria-labelledby="success-stories-heading"
    >
      {/* Subtle gradient background with pattern overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(180deg, #FAFAF7 0%, #F5F3EE 50%, #FAFAF7 100%)',
        }}
      />
      <div
        className="dark:hidden absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, rgba(200,150,12,0.04) 1px, transparent 0)',
          backgroundSize: '28px 28px',
        }}
        aria-hidden="true"
      />
      <div
        className="hidden dark:block absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, rgba(200,150,12,0.06) 1px, transparent 0)',
          backgroundSize: '28px 28px',
        }}
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
          {/* Section Label */}
          <p className="section-label ui-label section-label-diamond mb-4 text-[#C8960C] dark:text-champagne-gold">
            SUCCESS STORIES
          </p>

          {/* Heading */}
          <h2
            id="success-stories-heading"
            className={cn(
              'font-serif section-heading text-[36px] leading-tight text-navy dark:text-ivory-cream md:text-[44px]',
            )}
          >
            Student Success Stories
          </h2>

          {/* Gold Separator */}
          <div className="mx-auto mt-5 mb-4 h-[2px] w-10 bg-[#C8960C] dark:bg-champagne-gold" />

          {/* Subtext */}
          <p className="font-sans body-text text-[15px] md:text-[16px] text-mid-gray dark:text-ivory-cream/50 max-w-2xl mx-auto">
            Real journeys, real results — hear from our alumni who cracked UPSC with flying colours
          </p>
        </motion.div>

        {/* Stories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {stories.map((story, index) => (
            <StoryCard key={story.initials} story={story} index={index} />
          ))}
        </div>

        {/* Read More Stories Link */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-10 text-center"
        >
          <a
            href="#results"
            className={cn(
              'inline-flex items-center gap-2',
              'font-sans text-[14px] font-medium',
              'text-[#C8960C] dark:text-champagne-gold',
              'transition-colors duration-200',
              'hover:text-champagne-gold dark:hover:text-[#F5D060]',
              'gold-underline-hover',
            )}
          >
            Read More Stories
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
