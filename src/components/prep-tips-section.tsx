'use client'

import { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import {
  BookOpen,
  Target,
  Clock,
  PenTool,
  Brain,
  Users,
  ArrowRight,
  ChevronDown,
} from 'lucide-react'
import { cn } from '@/lib/utils'

/* ─── Icon Map ─── */
const iconMap: Record<string, React.ElementType> = {
  BookOpen,
  Target,
  Clock,
  PenTool,
  Brain,
  Users,
}

/* ─── Tip Data ─── */
const tips = [
  {
    icon: 'BookOpen',
    title: 'Master the Syllabus',
    description:
      'Understand every topic in the UPSC syllabus deeply. Map each topic to standard books and current affairs sources for comprehensive coverage.',
    extraPoints: [
      'Create a topic-wise mapping of syllabus to reference books',
      'Use the syllabus as your roadmap — never study outside it',
      'Revise the syllabus monthly to track your coverage progress',
    ],
  },
  {
    icon: 'Target',
    title: 'Practice Answer Writing',
    description:
      'Develop structured, concise answers with clear introductions, body, and conclusions. Join test series for regular practice and expert feedback.',
    extraPoints: [
      'Follow the intro-body-conclusion format for every answer',
      'Use subheadings and bullet points for better readability',
      'Incorporate data, examples, and government schemes in answers',
    ],
  },
  {
    icon: 'Clock',
    title: 'Time Management',
    description:
      'Create a realistic timetable balancing all subjects. Allocate time for revision, current affairs, and mock tests consistently.',
    extraPoints: [
      'Use the 50/10 rule: 50 minutes study, 10 minutes break',
      'Dedicate the first 2 hours of your day to the toughest subject',
      'Set weekly targets and review progress every Sunday',
    ],
  },
  {
    icon: 'PenTool',
    title: 'Stay Updated',
    description:
      'Read The Hindu or Indian Express daily. Make crisp notes linking current events to syllabus topics for Prelims and Mains.',
    extraPoints: [
      'Focus on editorials and opinion pieces for analytical depth',
      'Maintain a separate notebook for current affairs by subject',
      'Revise current affairs notes weekly — they fade quickly',
    ],
  },
  {
    icon: 'Brain',
    title: 'Revision Strategy',
    description:
      'Plan multiple revisions using spaced repetition. Short notes and mind maps help consolidate information for quick recall.',
    extraPoints: [
      'First revision after 7 days, second after 21 days, third after 45 days',
      'Use flashcards and mind maps for quick concept revision',
      'Allocate the last 2 months before exam solely for revision',
    ],
  },
  {
    icon: 'Users',
    title: 'Join Study Groups',
    description:
      'Collaborative learning enhances understanding. Discuss topics with peers to gain diverse perspectives and fill knowledge gaps.',
    extraPoints: [
      'Form a group of 3-5 serious aspirants for weekly discussions',
      'Assign topics to members for focused research and presentation',
      'Use group discussions for Mains answer brainstorming sessions',
    ],
  },
]

/* ─── Tip Card ─── */
function TipCard({
  tip,
  index,
}: {
  tip: (typeof tips)[number]
  index: number
}) {
  const [isExpanded, setIsExpanded] = useState(false)
  const IconComponent = iconMap[tip.icon]

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={cn(
        'group relative rounded-xl',
        'glass-card gold-top-border',
        'p-5 sm:p-6',
        'hover-lift transition-all duration-300',
        'border border-ivory-cream/10 dark:border-ivory-cream/5',
        'hover:border-[#C8960C]/40 dark:hover:border-champagne-gold/40',
        'flex flex-col',
      )}
    >
      {/* Icon */}
      <div
        className={cn(
          'w-12 h-12 rounded-lg flex items-center justify-center mb-4',
          'bg-[#C8960C]/15 dark:bg-champagne-gold/15',
          'transition-all duration-300',
          'group-hover:bg-[#C8960C]/25 dark:group-hover:bg-champagne-gold/25',
          'group-hover:scale-110',
        )}
      >
        {IconComponent && (
          <IconComponent className="w-6 h-6 text-[#C8960C] dark:text-champagne-gold" />
        )}
      </div>

      {/* Title */}
      <h3 className="font-serif text-[20px] sm:text-[22px] font-semibold text-ivory-cream dark:text-ivory-cream mb-2">
        {tip.title}
      </h3>

      {/* Description */}
      <p className="font-sans body-text text-[13px] sm:text-[14px] text-ivory-cream/65 dark:text-ivory-cream/55 mb-4 flex-1">
        {tip.description}
      </p>

      {/* Read More Toggle */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className={cn(
          'w-full flex items-center justify-between gap-2',
          'px-3 py-2 rounded-lg',
          'bg-ivory-cream/5 dark:bg-ivory-cream/5',
          'border border-ivory-cream/10 dark:border-ivory-cream/5',
          'transition-all duration-200',
          'hover:bg-ivory-cream/10 dark:hover:bg-ivory-cream/10',
          'text-left',
        )}
        aria-expanded={isExpanded}
      >
        <span className="font-sans text-[12px] font-semibold tracking-wide uppercase text-[#C8960C] dark:text-champagne-gold">
          Read More
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
              {tip.extraPoints.map((point, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 font-sans text-[12px] sm:text-[13px] text-ivory-cream/65 dark:text-ivory-cream/55"
                >
                  <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-[#C8960C] dark:bg-champagne-gold mt-1.5" />
                  {point}
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
export default function PrepTipsSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' })

  return (
    <section
      ref={sectionRef}
      className="relative py-16 md:py-24 overflow-hidden"
      aria-labelledby="prep-tips-heading"
    >
      {/* Navy gradient background */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(160deg, #0F1F4B 0%, #1A2E6B 40%, #0F1F4B 100%)',
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
          {/* Section Label */}
          <p className="section-label ui-label section-label-diamond mb-4 text-[#C8960C] dark:text-champagne-gold">
            EXPERT TIPS
          </p>

          {/* Heading */}
          <h2
            id="prep-tips-heading"
            className="font-serif section-heading text-[36px] leading-tight text-ivory-cream dark:text-ivory-cream md:text-[44px]"
          >
            UPSC Preparation Tips
          </h2>

          {/* Gold Separator */}
          <div className="mx-auto mt-5 mb-4 h-[2px] w-10 bg-[#C8960C] dark:bg-champagne-gold" />

          {/* Subtext */}
          <p className="font-sans body-text text-[15px] md:text-[16px] text-ivory-cream/60 dark:text-ivory-cream/50 max-w-2xl mx-auto">
            Proven strategies from our expert faculty to streamline your civil services preparation
          </p>
        </motion.div>

        {/* Tips Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {tips.map((tip, index) => (
            <TipCard key={tip.title} tip={tip} index={index} />
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-10 md:mt-14 text-center"
        >
          <a
            href="#admissions"
            className={cn(
              'inline-flex items-center gap-2',
              'px-8 py-3.5 rounded-lg',
              'font-sans text-[14px] font-semibold tracking-wide',
              'transition-all duration-300',
              'btn-gold-shimmer',
            )}
            style={{
              background: 'linear-gradient(135deg, #C8960C, #E8B830)',
              color: '#0F1F4B',
            }}
          >
            Download Preparation Guide
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
