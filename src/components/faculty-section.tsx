'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'

const facultyMembers = [
  {
    name: 'Dr. Raghavan Iyer',
    initials: 'RI',
    subject: 'Indian Polity & Governance',
    credential: 'Former IAS Officer | Ministry of Home Affairs',
  },
  {
    name: 'Prof. Lakshmi Narayan',
    initials: 'LN',
    subject: 'Geography & Environment',
    credential: 'PhD JNU | 18 Years Teaching Experience',
  },
  {
    name: 'Shankar Menon',
    initials: 'SM',
    subject: 'Economy & Current Affairs',
    credential: 'Former IRS Officer | CBDT',
  },
  {
    name: 'Dr. Aparna Rao',
    initials: 'AR',
    subject: 'History & Art & Culture',
    credential: 'PhD IISc | Author of 3 UPSC Books',
  },
  {
    name: 'Vikram Singh Rathore',
    initials: 'VR',
    subject: 'Ethics & Essay',
    credential: 'Former IPS Officer | Karnataka Cadre',
  },
  {
    name: 'Dr. Nandini Sharma',
    initials: 'NS',
    subject: 'Science & Technology',
    credential: 'PhD IIT-D | Research Scientist',
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
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
}

function FacultyCard({
  member,
}: {
  member: (typeof facultyMembers)[number]
}) {
  return (
    <motion.div
      variants={cardVariants}
      className={cn(
        'group min-w-[280px] flex-shrink-0 rounded-xl border p-6',
        'transition-all duration-300 ease-out',
        'border-[#243A80] dark:border-[#1C2541] bg-[#1A2E6B] dark:bg-[#0D1525]',
        'hover:-translate-y-[3px] hover:border-t-[4px] hover:border-t-[#C8960C]',
        'hover:shadow-lg hover:shadow-[rgba(200,150,12,0.08)]',
        'hover:border-[#C8960C]/30',
        'border-t-[2px] border-t-transparent',
        'hover:ring-1 hover:ring-[#C8960C]/20'
      )}
    >
      {/* Avatar with gold ring animation on hover */}
      <div className="relative mb-4 inline-block">
        <div
          className={cn(
            'flex h-20 w-20 items-center justify-center rounded-full',
            'bg-navy dark:bg-[#0A1428] text-champagne-gold',
            'font-serif text-2xl font-bold tracking-wide',
            'transition-all duration-300',
            'ring-2 ring-transparent group-hover:ring-sovereign-gold dark:group-hover:ring-champagne-gold group-hover:ring-offset-2 group-hover:ring-offset-[#1A2E6B] dark:group-hover:ring-offset-[#0D1525]'
          )}
        >
          {member.initials}
        </div>
      </div>

      {/* Name */}
      <h3
        className={cn(
          'mb-1 font-serif card-title text-[20px] leading-tight',
          'text-ivory-cream'
        )}
      >
        {member.name}
      </h3>

      {/* Gold accent bar below name */}
      <div className="mb-2 h-[2px] w-8 bg-gradient-to-r from-sovereign-gold to-champagne-gold" />

      {/* Subject */}
      <p className="mb-2 text-[14px] font-medium text-champagne-gold">
        {member.subject}
      </p>

      {/* Credential */}
      <p className="text-[13px] leading-snug text-ivory-cream/60">
        {member.credential}
      </p>

      {/* View Profile link */}
      <a
        href="#"
        className="mt-3 inline-flex items-center gap-1 text-[12px] font-sans font-medium text-champagne-gold gold-underline-hover transition-colors"
        onClick={(e) => e.preventDefault()}
      >
        View Profile
        <ArrowRight size={12} />
      </a>
    </motion.div>
  )
}

export default function FacultySection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  return (
    <section
      ref={sectionRef}
      className="relative py-16 md:py-24 overflow-hidden bg-navy dark:bg-[#0A1428]"
      aria-labelledby="faculty-heading"
    >
      {/* Subtle background grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none pattern-grid"
        aria-hidden="true"
      />

      {/* Decorative geometric accent SVG (top-right) */}
      <svg
        className="absolute top-12 right-8 w-24 h-24 opacity-[0.06] pointer-events-none"
        viewBox="0 0 100 100"
        fill="none"
        aria-hidden="true"
      >
        <path d="M50 5L95 50L50 95L5 50Z" stroke="#E8B830" strokeWidth="1" />
        <path d="M50 20L80 50L50 80L20 50Z" stroke="#E8B830" strokeWidth="0.5" />
      </svg>

      {/* Decorative geometric accent SVG (bottom-left) */}
      <svg
        className="absolute bottom-12 left-8 w-20 h-20 opacity-[0.05] pointer-events-none"
        viewBox="0 0 100 100"
        fill="none"
        aria-hidden="true"
        style={{ animation: 'rotate-slow 60s linear infinite' }}
      >
        <circle cx="50" cy="50" r="45" stroke="#C8960C" strokeWidth="0.8" />
        <circle cx="50" cy="50" r="30" stroke="#C8960C" strokeWidth="0.5" />
        <line x1="50" y1="5" x2="50" y2="95" stroke="#C8960C" strokeWidth="0.3" />
        <line x1="5" y1="50" x2="95" y2="50" stroke="#C8960C" strokeWidth="0.3" />
      </svg>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center md:mb-16"
        >
          {/* Section Label */}
          <p className="section-label ui-label section-label-diamond mb-4 text-champagne-gold">Our Mentors</p>

          {/* Section Heading */}
          <h2
            id="faculty-heading"
            className={cn(
              'mb-6 font-serif section-heading text-[36px] leading-tight md:text-[44px]',
              'text-ivory-cream'
            )}
          >
            Guided by Those Who Served
          </h2>

          {/* Gold Separator */}
          <div className="mx-auto mb-6 h-[2px] w-10 bg-sovereign-gold dark:bg-champagne-gold" />

          {/* Subtext */}
          <p
            className={cn(
              'mx-auto max-w-2xl text-[16px] font-sans body-text leading-relaxed',
              'text-ivory-cream/65'
            )}
          >
            Our faculty brings decades of administrative experience, academic
            excellence, and a personal commitment to every aspirant&apos;s
            success.
          </p>
        </motion.div>

        {/* Faculty Cards - Horizontal scroll on mobile, grid on desktop */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className={cn(
            'flex gap-4 overflow-x-auto pb-4 md:grid md:grid-cols-4 md:gap-6 md:overflow-x-visible md:pb-0',
            'snap-x snap-mandatory scroll-smooth',
            '[&::-webkit-scrollbar]:h-1 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-[#243A80]'
          )}
        >
          {facultyMembers.map((member) => (
            <FacultyCard key={member.initials} member={member} />
          ))}
        </motion.div>

        {/* Meet All Faculty Link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-10 flex justify-end md:mt-12"
        >
          <a
            href="#faculty"
            className={cn(
              'group inline-flex items-center gap-2 text-champagne-gold transition-all duration-200',
              'font-sans text-sm font-medium',
              'hover:underline'
            )}
          >
            Meet All Faculty
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
