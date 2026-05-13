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
        'border-[#243A80] bg-[#1A2E6B]',
        'hover:-translate-y-[3px] hover:border-t-[4px] hover:border-t-[#C8960C]',
        'border-t-[2px] border-t-transparent'
      )}
    >
      {/* Avatar */}
      <div
        className={cn(
          'mb-4 flex h-20 w-20 items-center justify-center rounded-full',
          'bg-[#0F1F4B] text-[#E8B830]',
          'font-serif text-xl font-semibold tracking-wide'
        )}
      >
        {member.initials}
      </div>

      {/* Name */}
      <h3
        className={cn(
          'mb-1 font-serif card-title text-[20px] leading-tight',
          'text-[#FAFAF7]'
        )}
      >
        {member.name}
      </h3>

      {/* Subject */}
      <p className="mb-2 text-[14px] font-medium text-[#E8B830]">
        {member.subject}
      </p>

      {/* Credential */}
      <p className="text-[13px] leading-snug text-[#FAFAF7]/60">
        {member.credential}
      </p>
    </motion.div>
  )
}

export default function FacultySection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#0F1F4B] py-16 md:py-24"
      aria-labelledby="faculty-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center md:mb-16"
        >
          {/* Section Label */}
          <p className="section-label ui-label mb-4 text-[#E8B830]">Our Mentors</p>

          {/* Section Heading */}
          <h2
            id="faculty-heading"
            className={cn(
              'mb-6 font-serif section-heading text-[36px] leading-tight md:text-[44px]',
              'text-[#FAFAF7]'
            )}
          >
            Guided by Those Who Served
          </h2>

          {/* Gold Separator */}
          <div className="mx-auto mb-6 h-[2px] w-10 bg-[#C8960C]" />

          {/* Subtext */}
          <p
            className={cn(
              'mx-auto max-w-2xl text-[16px] font-sans body-text leading-relaxed',
              'text-[#FAFAF7]/65'
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
              'group inline-flex items-center gap-2 text-[#E8B830] transition-all duration-200',
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
