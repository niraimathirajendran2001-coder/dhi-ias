'use client'

import { useState } from 'react'
import { useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { BookOpen, Layers, Target, Rocket, ChevronDown, Download, CheckCircle2 } from 'lucide-react'
import { cn } from '@/lib/utils'

/* ─── Phase Data ─── */
const phases = [
  {
    id: 'foundation',
    title: 'Foundation',
    duration: 'Months 1–3',
    icon: BookOpen,
    progress: 25,
    color: '#C8960C',
    focusAreas: [
      'NCERT basics across all subjects',
      'Daily newspaper reading habit',
      'Complete UPSC syllabus mastery',
      'Build foundational note-making system',
    ],
    description: 'Build a rock-solid base with NCERT fundamentals, develop the newspaper habit essential for current affairs, and internalize the entire UPSC syllabus structure.',
  },
  {
    id: 'build-up',
    title: 'Build-Up',
    duration: 'Months 4–8',
    icon: Layers,
    progress: 50,
    color: '#D4A829',
    focusAreas: [
      'Standard reference books coverage',
      'Answer writing practice begins',
      'First comprehensive revision cycle',
      'Optional subject selection & start',
    ],
    description: 'Transition to standard references like Laxmikanth and Spectrum, start writing answers from day one, and complete your first full revision of all subjects.',
  },
  {
    id: 'intensive',
    title: 'Intensive',
    duration: 'Months 9–12',
    icon: Target,
    progress: 75,
    color: '#E8B830',
    focusAreas: [
      'Full-length mock test series',
      'Mains answer writing intensive',
      'Optional subject depth mastery',
      'Essay writing refinement',
    ],
    description: 'Enter the most demanding phase with full mock tests under exam conditions, intensive Mains answer writing, and going deep into your optional subject.',
  },
  {
    id: 'final-sprint',
    title: 'Final Sprint',
    duration: 'Months 12–15',
    icon: Rocket,
    progress: 100,
    color: '#F5D060',
    focusAreas: [
      'Prelims-focused revision & mocks',
      'Mock interview preparation',
      'Quick revision of all subjects',
      'Exam strategy & time management',
    ],
    description: 'The final push — sharpen your Prelims accuracy with targeted mocks, prepare for the interview stage, and lock in your exam-day strategy.',
  },
]

/* ─── Phase Card ─── */
function PhaseCard({
  phase,
  index,
  isExpanded,
  onToggle,
  isActive,
}: {
  phase: (typeof phases)[number]
  index: number
  isExpanded: boolean
  onToggle: () => void
  isActive: boolean
}) {
  const Icon = phase.icon

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.12 }}
      className="relative"
    >
      <button
        onClick={onToggle}
        className={cn(
          'w-full text-left rounded-xl overflow-hidden',
          'transition-all duration-400',
          'premium-shadow',
          'hover:shadow-xl',
          'focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C8960C] dark:focus-visible:ring-[#E8B830]',
        )}
        aria-expanded={isExpanded}
      >
        {/* Navy Card Background */}
        <div
          className={cn(
            'relative p-5 sm:p-6',
            'bg-[#0F1F4B] dark:bg-[#0A1428]',
            'border',
            isActive
              ? 'border-[#C8960C] dark:border-[#E8B830] ring-2 ring-[#C8960C]/30 dark:ring-[#E8B830]/30'
              : 'border-[rgba(200,150,12,0.15)] dark:border-[rgba(232,184,48,0.15)]',
            'transition-all duration-300',
          )}
        >
          {/* Active phase pulsing dot */}
          {isActive && (
            <motion.span
              className="absolute top-4 right-4 w-3 h-3 rounded-full bg-[#C8960C] dark:bg-[#E8B830]"
              animate={{ scale: [1, 1.4, 1], opacity: [1, 0.6, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            />
          )}

          {/* Top Row: Icon + Title + Duration */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Icon */}
            <div
              className={cn(
                'flex-shrink-0 w-11 h-11 sm:w-12 sm:h-12 rounded-lg',
                'flex items-center justify-center',
                'bg-[rgba(200,150,12,0.12)] dark:bg-[rgba(232,184,48,0.12)]',
                'border border-[rgba(200,150,12,0.25)] dark:border-[rgba(232,184,48,0.25)]',
                'transition-all duration-300',
              )}
            >
              <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-[#C8960C] dark:text-[#E8B830]" />
            </div>

            {/* Title & Duration */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <h3
                  className={cn(
                    'font-serif text-[18px] sm:text-[20px] font-semibold',
                    'text-[#FAFAF7]',
                    'leading-tight',
                  )}
                >
                  {phase.title}
                </h3>
                {/* Duration Badge */}
                <span
                  className={cn(
                    'inline-flex items-center px-2.5 py-0.5 rounded-full',
                    'font-sans text-[11px] font-medium',
                    'bg-[rgba(200,150,12,0.15)] dark:bg-[rgba(232,184,48,0.15)]',
                    'text-[#E8B830] dark:text-[#F5D060]',
                    'border border-[rgba(200,150,12,0.25)] dark:border-[rgba(232,184,48,0.25)]',
                  )}
                >
                  {phase.duration}
                </span>
              </div>

              {/* Progress Bar */}
              <div className="mt-3 flex items-center gap-2">
                <div
                  className={cn(
                    'flex-1 h-[6px] rounded-full',
                    'bg-[rgba(250,250,247,0.08)]',
                    'overflow-hidden',
                  )}
                >
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${phase.progress}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.3 + index * 0.12, ease: 'easeOut' }}
                    className="h-full rounded-full"
                    style={{
                      background: `linear-gradient(90deg, #C8960C, #E8B830, ${phase.color})`,
                    }}
                  />
                </div>
                <span
                  className={cn(
                    'font-sans text-[11px] font-medium',
                    'text-[#E8B830] dark:text-[#F5D060]',
                  )}
                >
                  {phase.progress}%
                </span>
              </div>
            </div>

            {/* Expand/Collapse Chevron */}
            <motion.div
              animate={{ rotate: isExpanded ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              className="flex-shrink-0"
            >
              <ChevronDown className="w-5 h-5 text-[#C8960C] dark:text-[#E8B830]" />
            </motion.div>
          </div>

          {/* Active Phase Indicator */}
          {isActive && (
            <div className="mt-3 flex items-center gap-1.5">
              <span
                className={cn(
                  'inline-flex items-center gap-1 px-2 py-0.5 rounded',
                  'font-sans text-[10px] font-semibold uppercase tracking-wider',
                  'bg-[#C8960C] dark:bg-[#E8B830]',
                  'text-[#0F1F4B] dark:text-[#0A1428]',
                )}
              >
                <CheckCircle2 className="w-3 h-3" />
                Recommended Start
              </span>
            </div>
          )}
        </div>
      </button>

      {/* Expandable Content */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div
              className={cn(
                'p-5 sm:p-6',
                'bg-white dark:bg-[#111827]',
                'border border-t-0',
                'border-[rgba(200,150,12,0.15)] dark:border-[rgba(232,184,48,0.15)]',
                'rounded-b-xl',
              )}
            >
              {/* Description */}
              <p
                className={cn(
                  'font-sans text-[14px] leading-relaxed mb-4',
                  'text-stone-gray dark:text-ivory-cream/70',
                )}
              >
                {phase.description}
              </p>

              {/* Focus Areas */}
              <h4
                className={cn(
                  'font-sans text-[12px] font-semibold uppercase tracking-wider mb-3',
                  'text-[#C8960C] dark:text-[#E8B830]',
                )}
              >
                Key Focus Areas
              </h4>
              <ul className="space-y-2">
                {phase.focusAreas.map((area, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: i * 0.08 }}
                    className={cn(
                      'flex items-start gap-2.5',
                      'font-sans text-[13px] leading-relaxed',
                      'text-[#0F1F4B] dark:text-ivory-cream/80',
                    )}
                  >
                    <span
                      className={cn(
                        'mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full',
                        'bg-[#C8960C] dark:bg-[#E8B830]',
                      )}
                    />
                    {area}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

/* ─── Main Section ─── */
export default function StudyPlannerSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' })
  const [expandedPhase, setExpandedPhase] = useState<string | null>('foundation')

  const handleToggle = (phaseId: string) => {
    setExpandedPhase(prev => (prev === phaseId ? null : phaseId))
  }

  return (
    <section
      ref={sectionRef}
      className="relative py-16 md:py-24 overflow-hidden"
      aria-labelledby="study-planner-heading"
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

      {/* Pattern dots overlay */}
      <div
        className="absolute inset-0 pointer-events-none pattern-dots opacity-25"
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
          <p className="section-label ui-label mb-4 text-[#C8960C] dark:text-[#E8B830]">
            PREPARATION BLUEPRINT
          </p>

          {/* Heading */}
          <h2
            id="study-planner-heading"
            className={cn(
              'font-serif section-heading text-[36px] leading-tight text-[#0F1F4B] dark:text-[#FAFAF7] md:text-[44px]',
            )}
          >
            Your UPSC Study Planner
          </h2>

          {/* Subheading */}
          <p
            className={cn(
              'mt-4 font-sans text-[16px] md:text-[18px]',
              'text-stone-gray dark:text-ivory-cream/60',
              'max-w-xl mx-auto',
            )}
          >
            A structured roadmap from beginner to Mains-ready
          </p>

          {/* Gold Separator */}
          <div className="mx-auto mt-5 mb-4 h-[2px] w-10 bg-[#C8960C] dark:bg-[#E8B830]" />
        </motion.div>

        {/* Horizontal Step Indicators (Desktop) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="hidden md:flex items-center justify-center gap-0 mb-10"
        >
          {phases.map((phase, index) => {
            const Icon = phase.icon
            const isActive = index === 0
            return (
              <div key={phase.id} className="flex items-center">
                <button
                  onClick={() => handleToggle(phase.id)}
                  className={cn(
                    'flex flex-col items-center gap-2 px-4 sm:px-6 py-3',
                    'transition-all duration-300',
                    'rounded-lg',
                    expandedPhase === phase.id
                      ? 'bg-[rgba(200,150,12,0.08)] dark:bg-[rgba(232,184,48,0.08)]'
                      : 'hover:bg-[rgba(200,150,12,0.04)] dark:hover:bg-[rgba(232,184,48,0.04)]',
                    isActive && expandedPhase !== phase.id
                      ? 'ring-1 ring-[rgba(200,150,12,0.2)]'
                      : '',
                  )}
                >
                  <div
                    className={cn(
                      'w-10 h-10 rounded-full flex items-center justify-center',
                      'transition-all duration-300',
                      expandedPhase === phase.id
                        ? 'bg-[#C8960C] dark:bg-[#E8B830] text-[#0F1F4B] dark:text-[#0A1428]'
                        : 'bg-[rgba(200,150,12,0.1)] dark:bg-[rgba(232,184,48,0.1)] text-[#C8960C] dark:text-[#E8B830]',
                    )}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <span
                    className={cn(
                      'font-sans text-[12px] font-semibold uppercase tracking-wider',
                      expandedPhase === phase.id
                        ? 'text-[#C8960C] dark:text-[#E8B830]'
                        : 'text-stone-gray dark:text-ivory-cream/50',
                    )}
                  >
                    {phase.title}
                  </span>
                  {/* Active indicator dot */}
                  {isActive && (
                    <motion.span
                      className="w-1.5 h-1.5 rounded-full bg-[#C8960C] dark:bg-[#E8B830]"
                      animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  )}
                </button>
                {/* Connector line */}
                {index < phases.length - 1 && (
                  <div
                    className="w-8 sm:w-12 h-[2px] flex-shrink-0"
                    style={{
                      background: 'linear-gradient(90deg, #C8960C, #E8B830)',
                    }}
                  />
                )}
              </div>
            )
          })}
        </motion.div>

        {/* Phase Cards (Expandable) */}
        <div className="space-y-4">
          {phases.map((phase, index) => (
            <PhaseCard
              key={phase.id}
              phase={phase}
              index={index}
              isExpanded={expandedPhase === phase.id}
              onToggle={() => handleToggle(phase.id)}
              isActive={index === 0}
            />
          ))}
        </div>

        {/* Download CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-10 md:mt-14 text-center"
        >
          <a
            href="#resources"
            className={cn(
              'inline-flex items-center gap-2.5',
              'px-8 py-3.5 rounded-lg',
              'font-sans text-[14px] font-semibold uppercase tracking-wider',
              'bg-[#C8960C] dark:bg-[#E8B830]',
              'text-[#0F1F4B] dark:text-[#0A1428]',
              'transition-all duration-300',
              'hover:bg-[#B8860B] dark:hover:bg-[#F5D060]',
              'hover:shadow-lg hover:shadow-[rgba(200,150,12,0.25)]',
              'btn-gold-shimmer',
              'focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C8960C] dark:focus-visible:ring-[#E8B830]',
            )}
          >
            <Download className="w-4 h-4" />
            Download Study Plan
          </a>
        </motion.div>
      </div>
    </section>
  )
}
