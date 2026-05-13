'use client'

import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Calendar, Clock, ChevronRight, ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'

/* ─── UPSC CSE Calendar Events ─── */
const upscEvents = [
  {
    date: 'Feb 2026',
    title: 'UPSC CSE Notification Released',
    description: 'Official notification with exam schedule, syllabus updates, and eligibility criteria',
    status: 'upcoming' as const,
  },
  {
    date: 'Mar 2026',
    title: 'Application Window Opens',
    description: 'Submit your application form online through the UPSC portal',
    status: 'upcoming' as const,
  },
  {
    date: 'May 2026',
    title: 'Prelims Admit Card Available',
    description: 'Download your admit card and verify exam center details',
    status: 'upcoming' as const,
  },
  {
    date: 'May 25, 2026',
    title: 'UPSC CSE Prelims 2026',
    description: 'The first hurdle — General Studies & CSAT papers',
    status: 'upcoming' as const,
    isHighlight: true,
  },
  {
    date: 'Jun – Aug 2026',
    title: 'Mains Preparation Phase',
    description: 'Intensive preparation period for qualifying candidates',
    status: 'upcoming' as const,
  },
  {
    date: 'Sep 2026',
    title: 'Mains Admit Card',
    description: 'Admit cards released for the UPSC CSE Mains examination',
    status: 'upcoming' as const,
  },
  {
    date: 'Sep – Oct 2026',
    title: 'UPSC CSE Mains 2026',
    description: 'Written examination — 9 papers across multiple days',
    status: 'upcoming' as const,
    isHighlight: true,
  },
  {
    date: 'Feb 2027',
    title: 'Interview / Personality Test',
    description: 'Final stage — face the UPSC board for personality assessment',
    status: 'upcoming' as const,
  },
  {
    date: 'Apr 2027',
    title: 'Final Results',
    description: 'Merit list and service allocation announced',
    status: 'upcoming' as const,
    isHighlight: true,
  },
]

/* ─── KAS Calendar Events ─── */
const kasEvents = [
  {
    date: 'Mar 2026',
    title: 'KAS Notification Released',
    description: 'Official notification for Karnataka Administrative Service examination',
    status: 'upcoming' as const,
  },
  {
    date: 'Apr 2026',
    title: 'Application Window Opens',
    description: 'Submit applications through the KPSC online portal',
    status: 'upcoming' as const,
  },
  {
    date: 'Jun 2026',
    title: 'Prelims Admit Card Available',
    description: 'Download admit card and check exam center allocation',
    status: 'upcoming' as const,
  },
  {
    date: 'Jul 2026',
    title: 'KAS Prelims 2026',
    description: 'Objective-type papers — General Studies and Aptitude Test',
    status: 'upcoming' as const,
    isHighlight: true,
  },
  {
    date: 'Aug – Sep 2026',
    title: 'Mains Preparation Phase',
    description: 'Focused preparation for qualifying candidates',
    status: 'upcoming' as const,
  },
  {
    date: 'Sep 2026',
    title: 'Mains Admit Card',
    description: 'Admit cards released for the KAS Mains examination',
    status: 'upcoming' as const,
  },
  {
    date: 'Oct 2026',
    title: 'KAS Mains 2026',
    description: 'Descriptive-type written examination across multiple papers',
    status: 'upcoming' as const,
    isHighlight: true,
  },
  {
    date: 'Dec 2026',
    title: 'Interview / Personality Test',
    description: 'Final assessment by the KPSC interview board',
    status: 'upcoming' as const,
  },
  {
    date: 'Feb 2027',
    title: 'Final Results',
    description: 'Merit list and service allocation announced by KPSC',
    status: 'upcoming' as const,
    isHighlight: true,
  },
]

/* ─── Tab Types ─── */
type TabType = 'upsc' | 'kas'

/* ─── Timeline Event Card ─── */
function TimelineCard({
  event,
  index,
  isLeft,
}: {
  event: (typeof upscEvents)[number]
  index: number
  isLeft: boolean
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -30 : 30, y: 10 }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className={cn(
        'relative w-full md:w-[calc(50%-2rem)]',
        isLeft ? 'md:mr-auto md:pr-0' : 'md:ml-auto md:pl-0',
        // On mobile, all cards on right side
        'ml-8 md:ml-0',
      )}
    >
      <div
        className={cn(
          'group relative rounded-xl p-5 sm:p-6',
          'bg-white dark:bg-[#111827]',
          'border border-light-gray dark:border-[#1C2541]',
          'premium-shadow',
          'transition-all duration-300',
          'hover:shadow-xl hover:-translate-y-1',
          event.isHighlight && 'ring-1 ring-[#C8960C]/30 dark:ring-[#E8B830]/30',
        )}
      >
        {/* Gold top accent on highlight cards */}
        {event.isHighlight && (
          <div
            className="absolute top-0 left-0 right-0 h-[2px] rounded-t-xl"
            style={{
              background: 'linear-gradient(90deg, #C8960C, #E8B830, #C8960C)',
            }}
          />
        )}

        {/* Date badge */}
        <div className="flex items-center gap-2 mb-2">
          <Calendar className="w-3.5 h-3.5 text-[#C8960C] dark:text-[#E8B830] flex-shrink-0" />
          <span
            className={cn(
              'font-mono text-[12px] sm:text-[13px] font-medium tracking-wide',
              'text-[#C8960C] dark:text-[#E8B830]',
            )}
          >
            {event.date}
          </span>
          {event.isHighlight && (
            <span className="ml-auto">
              <Clock className="w-3.5 h-3.5 text-[#C8960C] dark:text-[#E8B830]" />
            </span>
          )}
        </div>

        {/* Event title */}
        <h3
          className={cn(
            'font-serif text-[16px] sm:text-[18px] font-semibold leading-snug mb-1.5',
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

        {/* Arrow on hover */}
        <ChevronRight
          className={cn(
            'absolute top-5 right-4 w-4 h-4',
            'text-[#C8960C]/40 dark:text-[#E8B830]/40',
            'opacity-0 -translate-x-1',
            'transition-all duration-300',
            'group-hover:opacity-100 group-hover:translate-x-0',
          )}
        />
      </div>
    </motion.div>
  )
}

/* ─── Main Section ─── */
export default function ExamCalendarSection() {
  const [activeTab, setActiveTab] = useState<TabType>('upsc')
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' })

  const events = activeTab === 'upsc' ? upscEvents : kasEvents

  return (
    <section
      ref={sectionRef}
      className="relative py-16 md:py-24 overflow-hidden"
      aria-labelledby="exam-calendar-heading"
    >
      {/* Navy gradient background */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(160deg, #0F1F4B 0%, #1A2E6B 40%, #0F1F4B 100%)',
        }}
      />
      {/* Dark mode deeper bg */}
      <div
        className="absolute inset-0 hidden dark:block"
        style={{
          background: 'linear-gradient(160deg, #070E20 0%, #0A1428 40%, #070E20 100%)',
        }}
      />

      {/* Pattern dots overlay */}
      <div
        className="absolute inset-0 pointer-events-none pattern-dots"
        style={{ opacity: 0.25 }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-10 md:mb-14 text-center"
        >
          {/* Section Label */}
          <p className="section-label ui-label section-label-diamond mb-4 text-[#C8960C] dark:text-[#E8B830]">
            EXAM ROADMAP
          </p>

          {/* Heading */}
          <h2
            id="exam-calendar-heading"
            className={cn(
              'font-serif section-heading text-[32px] leading-tight md:text-[44px]',
              'text-[#FAFAF7]',
            )}
          >
            UPSC 2026 Calendar
          </h2>

          {/* Gold Separator */}
          <div className="mx-auto mt-5 mb-4 h-[2px] w-10 bg-[#C8960C]" />

          {/* Subheading */}
          <p
            className="font-sans body-text text-[15px] md:text-[16px]"
            style={{ color: 'rgba(250,250,247,0.55)' }}
          >
            Key dates and milestones for your preparation journey
          </p>
        </motion.div>

        {/* Tab Toggle */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center mb-12 md:mb-16"
        >
          <div
            className={cn(
              'inline-flex items-center rounded-full p-1',
              'bg-[rgba(250,250,247,0.08)]',
              'border border-[rgba(200,150,12,0.2)]',
            )}
          >
            <button
              onClick={() => setActiveTab('upsc')}
              className={cn(
                'relative px-6 py-2.5 rounded-full',
                'font-sans text-[13px] font-semibold tracking-wide',
                'transition-all duration-300',
                activeTab === 'upsc'
                  ? 'text-[#0F1F4B] dark:text-[#0F1F4B]'
                  : 'text-[rgba(250,250,247,0.6)] hover:text-[#FAFAF7]',
              )}
            >
              {activeTab === 'upsc' && (
                <motion.div
                  layoutId="calTab"
                  className="absolute inset-0 rounded-full"
                  style={{
                    background: 'linear-gradient(135deg, #C8960C, #E8B830)',
                  }}
                  transition={{ type: 'spring', duration: 0.5, bounce: 0.2 }}
                />
              )}
              <span className="relative z-10">UPSC CSE</span>
            </button>
            <button
              onClick={() => setActiveTab('kas')}
              className={cn(
                'relative px-6 py-2.5 rounded-full',
                'font-sans text-[13px] font-semibold tracking-wide',
                'transition-all duration-300',
                activeTab === 'kas'
                  ? 'text-[#0F1F4B] dark:text-[#0F1F4B]'
                  : 'text-[rgba(250,250,247,0.6)] hover:text-[#FAFAF7]',
              )}
            >
              {activeTab === 'kas' && (
                <motion.div
                  layoutId="calTab"
                  className="absolute inset-0 rounded-full"
                  style={{
                    background: 'linear-gradient(135deg, #C8960C, #E8B830)',
                  }}
                  transition={{ type: 'spring', duration: 0.5, bounce: 0.2 }}
                />
              )}
              <span className="relative z-10">KAS</span>
            </button>
          </div>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Gold Line */}
          <div
            className="absolute left-3 md:left-1/2 top-0 bottom-0 w-[2px] md:-translate-x-px"
            style={{
              background: 'linear-gradient(180deg, #C8960C, #E8B830, #C8960C)',
            }}
          />

          {/* Timeline Events */}
          <div className="relative space-y-8 md:space-y-10">
            {events.map((event, index) => {
              const isLeft = index % 2 === 0

              return (
                <div key={`${activeTab}-${index}`} className="relative">
                  {/* Gold Dot on Timeline */}
                  <div
                    className={cn(
                      'absolute left-3 md:left-1/2 top-6',
                      '-translate-x-1/2 z-10',
                    )}
                  >
                    <div
                      className={cn(
                        'w-4 h-4 rounded-full',
                        'border-2 border-[#C8960C] dark:border-[#E8B830]',
                        event.isHighlight
                          ? 'bg-[#C8960C] dark:bg-[#E8B830]'
                          : 'bg-[#0F1F4B] dark:bg-[#0A1428]',
                        'transition-all duration-300',
                      )}
                    >
                      {/* Pulse for highlight events */}
                      {event.isHighlight && (
                        <span
                          className="absolute inset-0 rounded-full animate-ping"
                          style={{
                            backgroundColor: 'rgba(200,150,12,0.3)',
                          }}
                        />
                      )}
                    </div>
                  </div>

                  {/* Card */}
                  <TimelineCard
                    event={event}
                    index={index}
                    isLeft={isLeft}
                  />
                </div>
              )
            })}
          </div>

          {/* Timeline End Marker */}
          <div className="relative flex justify-center mt-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className={cn(
                'w-10 h-10 rounded-full',
                'flex items-center justify-center',
                'bg-[#C8960C] dark:bg-[#E8B830]',
              )}
            >
              <ArrowRight className="w-5 h-5 text-[#0F1F4B] dark:text-[#0A1428]" />
            </motion.div>
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
            Start Your Preparation
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
