'use client'

import { GraduationCap, Trophy, Users } from 'lucide-react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface FeatureCard {
  icon: React.ReactNode
  stat: string
  label: string
  description: string
}

const features: FeatureCard[] = [
  {
    icon: <GraduationCap size={40} className="text-sovereign-gold" />,
    stat: '12+',
    label: 'Former Civil Servants & Experts',
    description:
      'Our faculty includes former IAS, IRS, and IFS officers who bring real administrative experience into every lecture.',
  },
  {
    icon: <Trophy size={40} className="text-sovereign-gold" />,
    stat: '200+',
    label: 'UPSC & KAS Selections',
    description:
      'Consistent results across UPSC CSE and KAS examinations. Our students don\u2019t just clear \u2014 they rank.',
  },
  {
    icon: <Users size={40} className="text-sovereign-gold" />,
    stat: '1-on-1',
    label: 'Personal Mentorship for Every Student',
    description:
      'From Day 1 to interview day, every aspirant is paired with a dedicated faculty mentor. Not the week before Prelims \u2014 from the start.',
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
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

export default function WhyAristocratSection() {
  return (
    <section
      className="bg-ivory-cream py-16 md:py-24 lg:py-24"
      aria-labelledby="why-aristocrat-heading"
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
          <span className="section-label ui-label">THE ARISTOCRAT DIFFERENCE</span>

          {/* Section Heading */}
          <h2
            id="why-aristocrat-heading"
            className="mt-3 font-serif section-heading text-[40px] text-navy md:text-[46px]"
          >
            Why Future Officers Choose Us
          </h2>

          {/* Gold Separator */}
          <div className="mx-auto mt-5 h-[2px] w-[40px] bg-sovereign-gold" />
        </motion.div>

        {/* Feature Cards */}
        <motion.div
          className="mt-12 grid grid-cols-1 gap-8 md:mt-16 md:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {features.map((feature, index) => (
            <motion.article
              key={index}
              variants={cardVariants}
              className={cn(
                'group cursor-default rounded-xl border border-light-gray bg-white p-8',
                'border-l-[1px] transition-all duration-200',
                'hover:border-l-[4px] hover:border-l-navy hover:-translate-y-[3px]'
              )}
            >
              <div className="flex flex-col items-center text-center">
                {/* Icon */}
                <div className="mb-5">{feature.icon}</div>

                {/* Stat */}
                <span className="font-serif stat-number text-[48px] leading-none text-navy">
                  {feature.stat}
                </span>

                {/* Label */}
                <span className="mt-2 text-base font-sans font-medium text-stone-gray">
                  {feature.label}
                </span>

                {/* Description */}
                <p className="mt-3 line-clamp-2 text-sm font-sans leading-relaxed text-mid-gray">
                  {feature.description}
                </p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
