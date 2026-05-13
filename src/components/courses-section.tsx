'use client'

import { ArrowRight, Clock, CalendarDays, BookOpen, Landmark, Layers, ClipboardCheck, Newspaper, MessageSquare } from 'lucide-react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { Badge } from '@/components/ui/badge'

interface Course {
  name: string
  icon: React.ElementType
  badge?: {
    label: string
    className: string
  }
  duration: string
  nextBatch: string
  description: string
  tooltipText: string
  fee: string
  isMostPopular?: boolean
  isLimitedSeats?: boolean
}

const courses: Course[] = [
  {
    name: 'GS Foundation (Prelims + Mains)',
    icon: BookOpen,
    badge: {
      label: 'Most Popular',
      className:
        'border-sovereign-gold bg-gold-pale text-sovereign-gold font-sans',
    },
    duration: '12 Months',
    nextBatch: 'June 2026',
    description:
      'Comprehensive integrated program covering all GS papers, CSAT, and essay writing.',
    tooltipText: 'Our flagship program — 1200+ hours of guided preparation',
    fee: '\u20B9xxxxxxx',
    isMostPopular: true,
  },
  {
    name: 'KAS Coaching',
    icon: Landmark,
    badge: {
      label: 'New Batch',
      className: 'border-teal-light-bg bg-teal-light-bg text-forest-teal font-sans',
    },
    duration: '8 Months',
    nextBatch: 'July 2026',
    description:
      'Dedicated Karnataka Administrative Service preparation with state-specific focus.',
    tooltipText: 'Karnataka-specific syllabus & KPSC exam strategy',
    fee: '\u20B9xxxxxxx',
  },
  {
    name: 'Optional Subjects',
    icon: Layers,
    badge: {
      label: '6 Subjects Available',
      className: 'border-navy bg-navy text-ivory-cream font-sans',
    },
    duration: '4-6 Months',
    nextBatch: 'Rolling Admissions',
    description:
      'History, Geography, PSIR, Sociology, Public Administration & Anthropology.',
    tooltipText: 'Expert-led optional papers with answer writing practice',
    fee: '\u20B9xxxxxxx onwards',
  },
  {
    name: 'Test Series',
    icon: ClipboardCheck,
    badge: {
      label: 'Enroll Now',
      className: 'border-teal-light-bg bg-teal-light-bg text-forest-teal font-sans',
    },
    duration: '6 Months',
    nextBatch: 'Prelims 2026 Batch',
    description:
      '50 Prelims tests + 15 Mains tests with detailed individual evaluation and model answers.',
    tooltipText: 'Performance analytics & All-India ranking included',
    fee: '\u20B9xxxxxxx',
  },
  {
    name: 'Current Affairs Program',
    icon: Newspaper,
    duration: 'Ongoing',
    nextBatch: 'Monthly Enrollment',
    description:
      'Daily analyses, monthly compilations, and expert-led discussions on national & international events.',
    tooltipText: 'Stay updated with curated daily & monthly digests',
    fee: '\u20B9xxxxxxx/month',
  },
  {
    name: 'Interview Guidance',
    icon: MessageSquare,
    badge: {
      label: 'Limited Seats',
      className: 'border-crimson-light-bg bg-crimson-light-bg text-deep-crimson font-sans',
    },
    duration: '2 Months',
    nextBatch: 'Post-Mains 2026',
    description:
      'Mock interviews with former UPSC board members, personality development & DAF analysis.',
    tooltipText: 'Personalized DAF analysis & mock interview sessions',
    fee: '\u20B9xxxxxxx',
    isLimitedSeats: true,
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: 'easeOut',
    },
  },
}

const headingVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: 'easeOut',
    },
  },
}

export default function CoursesSection() {
  return (
    <section
      className="relative bg-gradient-to-b from-ivory-cream to-light-gray dark:from-[#0D1525] dark:to-[#111827] py-16 md:py-24 overflow-hidden"
      aria-labelledby="courses-heading"
    >
      {/* Subtle background pattern/texture */}
      <div
        className="absolute inset-0 pointer-events-none pattern-dots"
        style={{ opacity: 0.5 }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Label */}
        <motion.div
          className="text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={headingVariants}
        >
          <span className="section-label ui-label section-label-diamond">YOUR PREPARATION PATH</span>

          {/* Section Heading */}
          <h2
            id="courses-heading"
            className="mt-3 font-serif section-heading text-[40px] text-navy dark:text-ivory-cream md:text-[46px]"
          >
            Find Your Path
          </h2>

          {/* Gold Separator */}
          <div className="mx-auto mt-5 h-[2px] w-[40px] bg-sovereign-gold dark:bg-champagne-gold" />
        </motion.div>

        {/* Course Cards Grid */}
        <motion.div
          className="mt-12 grid grid-cols-1 gap-6 md:mt-16 md:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={containerVariants}
        >
          {courses.map((course, index) => {
            const Icon = course.icon
            return (
              <motion.article
                key={index}
                variants={cardVariants}
                className={cn(
                  'group relative flex flex-col rounded-xl border bg-white dark:bg-[#111827] p-6',
                  'gold-border-animate',
                  'transition-all duration-300',
                  'hover:-translate-y-[4px] hover:shadow-lg',
                  'hover:border-t-[2px] hover:border-t-sovereign-gold dark:hover:border-t-champagne-gold',
                  course.isMostPopular
                    ? 'border-sovereign-gold dark:border-champagne-gold bg-gold-pale/30 dark:bg-[#1A1A10]/30'
                    : 'border-light-gray dark:border-[#1C2541]',
                  'shadow-[inset_0_2px_4px_rgba(0,0,0,0.04)]'
                )}
              >
                {/* Tooltip on hover — brief course description */}
                <div className="tooltip-course">{course.tooltipText}</div>

                {/* Most Popular ribbon treatment — slight rotation + pulse */}
                {course.isMostPopular && (
                  <div className="ribbon ribbon-pulse -rotate-[2deg]" aria-label="Most Popular">
                    Most Popular
                  </div>
                )}

                {/* Subtle gradient overlay on Most Popular card */}
                {course.isMostPopular && (
                  <div
                    className="absolute inset-0 rounded-xl pointer-events-none"
                    style={{
                      background: 'linear-gradient(135deg, rgba(200,150,12,0.06) 0%, transparent 60%)',
                    }}
                    aria-hidden="true"
                  />
                )}

                {/* Badge (non-Most-Popular) */}
                {course.badge && !course.isMostPopular && (
                  <Badge
                    className={cn(
                      'mb-4 w-fit rounded-md text-xs font-semibold',
                      course.badge.className
                    )}
                  >
                    {course.badge.label}
                  </Badge>
                )}

                {/* Spacer if no badge to align content */}
                {!course.badge && !course.isMostPopular && <div className="mb-4 h-5" />}
                {course.isMostPopular && <div className="mb-4 h-5" />}

                {/* Course Name with Icon */}
                <div className="flex items-center gap-3">
                  <Icon className="w-5 h-5 text-sovereign-gold dark:text-champagne-gold shrink-0" strokeWidth={1.8} />
                  <h3 className="text-lg font-sans card-title text-navy dark:text-ivory-cream md:text-xl">
                    {course.name}
                  </h3>
                </div>

                {/* Duration & Batch */}
                <div className="mt-2 flex flex-col gap-1 text-sm text-mid-gray dark:text-ivory-cream/50">
                  <span className="flex items-center gap-1.5">
                    <Clock size={14} className="text-mid-gray dark:text-ivory-cream/50" />
                    {course.duration}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <CalendarDays size={14} className="text-mid-gray dark:text-ivory-cream/50" />
                    <span className="font-mono text-xs">{course.nextBatch}</span>
                  </span>
                </div>

                {/* Description */}
                <p className="mt-3 text-sm font-sans leading-relaxed text-stone-gray dark:text-ivory-cream/70">
                  {course.description}
                </p>

                {/* Fee with gold accent — larger ₹ symbol */}
                <span className="mt-4 font-mono text-base font-medium">
                  <span className="text-sovereign-gold dark:text-champagne-gold text-xl font-bold">\u20B9</span>
                  <span className="text-navy dark:text-ivory-cream">{course.fee.replace('\u20B9', '')}</span>
                </span>

                {/* Limited Seats indicator — gentle opacity blink */}
                {course.isLimitedSeats && (
                  <div className="mt-2 flex items-center gap-1.5 limited-seats-blink">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-deep-crimson opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-deep-crimson"></span>
                    </span>
                    <span className="text-xs font-sans font-semibold text-deep-crimson dark:text-[#E74C3C]">
                      Only a few spots remaining
                    </span>
                  </div>
                )}

                {/* Know More Link with gold underline hover */}
                <a
                  href="#"
                  className="mt-3 inline-flex items-center gap-1 text-sm font-sans font-medium text-sovereign-gold dark:text-champagne-gold gold-underline-hover transition-colors"
                  onClick={(e) => e.preventDefault()}
                >
                  Know More
                  <ArrowRight size={14} />
                </a>
              </motion.article>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
