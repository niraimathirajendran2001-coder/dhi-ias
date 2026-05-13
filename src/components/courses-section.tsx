'use client'

import { ArrowRight, Clock, CalendarDays } from 'lucide-react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { Badge } from '@/components/ui/badge'

interface Course {
  name: string
  badge?: {
    label: string
    className: string
  }
  duration: string
  nextBatch: string
  description: string
  fee: string
  isMostPopular?: boolean
}

const courses: Course[] = [
  {
    name: 'GS Foundation (Prelims + Mains)',
    badge: {
      label: 'Most Popular',
      className:
        'border-sovereign-gold bg-gold-pale text-sovereign-gold font-sans',
    },
    duration: '12 Months',
    nextBatch: 'June 2026',
    description:
      'Comprehensive integrated program covering all GS papers, CSAT, and essay writing.',
    fee: '\u20B91,20,000',
    isMostPopular: true,
  },
  {
    name: 'KAS Coaching',
    badge: {
      label: 'New Batch',
      className: 'border-teal-light-bg bg-teal-light-bg text-forest-teal font-sans',
    },
    duration: '8 Months',
    nextBatch: 'July 2026',
    description:
      'Dedicated Karnataka Administrative Service preparation with state-specific focus.',
    fee: '\u20B985,000',
  },
  {
    name: 'Optional Subjects',
    badge: {
      label: '6 Subjects Available',
      className: 'border-navy bg-navy text-ivory-cream font-sans',
    },
    duration: '4-6 Months',
    nextBatch: 'Rolling Admissions',
    description:
      'History, Geography, PSIR, Sociology, Public Administration & Anthropology.',
    fee: '\u20B945,000 onwards',
  },
  {
    name: 'Test Series',
    badge: {
      label: 'Enroll Now',
      className: 'border-teal-light-bg bg-teal-light-bg text-forest-teal font-sans',
    },
    duration: '6 Months',
    nextBatch: 'Prelims 2026 Batch',
    description:
      '50 Prelims tests + 15 Mains tests with detailed individual evaluation and model answers.',
    fee: '\u20B915,000',
  },
  {
    name: 'Current Affairs Program',
    duration: 'Ongoing',
    nextBatch: 'Monthly Enrollment',
    description:
      'Daily analyses, monthly compilations, and expert-led discussions on national & international events.',
    fee: '\u20B98,000/month',
  },
  {
    name: 'Interview Guidance',
    badge: {
      label: 'Limited Seats',
      className: 'border-crimson-light-bg bg-crimson-light-bg text-deep-crimson font-sans',
    },
    duration: '2 Months',
    nextBatch: 'Post-Mains 2026',
    description:
      'Mock interviews with former UPSC board members, personality development & DAF analysis.',
    fee: '\u20B925,000',
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
      className="bg-gradient-to-b from-ivory-cream to-light-gray py-16 md:py-24"
      aria-labelledby="courses-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Label */}
        <motion.div
          className="text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={headingVariants}
        >
          <span className="section-label">YOUR PREPARATION PATH</span>

          {/* Section Heading */}
          <h2
            id="courses-heading"
            className="mt-3 font-serif text-[36px] leading-tight text-navy md:text-[40px] lg:text-[44px]"
          >
            Find Your Path
          </h2>

          {/* Gold Separator */}
          <div className="mx-auto mt-5 h-[2px] w-[40px] bg-sovereign-gold" />
        </motion.div>

        {/* Course Cards Grid */}
        <motion.div
          className="mt-12 grid grid-cols-1 gap-6 md:mt-16 md:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={containerVariants}
        >
          {courses.map((course, index) => (
            <motion.article
              key={index}
              variants={cardVariants}
              className={cn(
                'group relative flex flex-col rounded-xl border bg-white p-6',
                'border-l-[1px] transition-all duration-200',
                'hover:border-l-[4px] hover:border-l-navy hover:-translate-y-[3px]',
                course.isMostPopular
                  ? 'border-sovereign-gold border-l-[1px] bg-gold-pale/30 hover:border-l-navy'
                  : 'border-light-gray'
              )}
            >
              {/* Badge */}
              {course.badge && (
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
              {!course.badge && <div className="mb-4 h-5" />}

              {/* Course Name */}
              <h3 className="text-lg font-sans font-semibold text-navy md:text-xl">
                {course.name}
              </h3>

              {/* Duration & Batch */}
              <div className="mt-2 flex flex-col gap-1 text-sm text-mid-gray">
                <span className="flex items-center gap-1.5">
                  <Clock size={14} className="text-mid-gray" />
                  {course.duration}
                </span>
                <span className="flex items-center gap-1.5">
                  <CalendarDays size={14} className="text-mid-gray" />
                  <span className="font-mono text-xs">{course.nextBatch}</span>
                </span>
              </div>

              {/* Description */}
              <p className="mt-3 text-sm font-sans leading-relaxed text-stone-gray">
                {course.description}
              </p>

              {/* Fee */}
              <span className="mt-4 font-mono text-base font-medium text-navy">
                {course.fee}
              </span>

              {/* Know More Link */}
              <a
                href="#"
                className="mt-3 inline-flex items-center gap-1 text-sm font-sans font-medium text-sovereign-gold transition-colors hover:underline"
                onClick={(e) => e.preventDefault()}
              >
                Know More
                <ArrowRight size={14} />
              </a>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
