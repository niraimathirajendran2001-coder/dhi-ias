'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { GraduationCap, BookOpen, Users, Building, Lightbulb, Trophy } from 'lucide-react'
import { cn } from '@/lib/utils'

/* ─── Gallery Items Data ─── */
const galleryItems = [
  {
    label: 'Classroom Sessions',
    icon: GraduationCap,
    gradient: 'linear-gradient(135deg, #0F1F4B 0%, #1A2E6B 60%, #243A80 100%)',
    pattern: 'pattern-grid',
    aspectClass: 'aspect-[4/3]',
  },
  {
    label: 'Library & Resources',
    icon: BookOpen,
    gradient: 'linear-gradient(135deg, #0D6E6E 0%, #0F1F4B 60%, #1A2E6B 100%)',
    pattern: 'pattern-dots',
    aspectClass: 'aspect-[3/4]',
  },
  {
    label: 'Expert Seminars',
    icon: Users,
    gradient: 'linear-gradient(135deg, #1A2E6B 0%, #C8960C40 60%, #0F1F4B 100%)',
    pattern: 'pattern-diagonal',
    aspectClass: 'aspect-[4/3]',
  },
  {
    label: 'Campus View',
    icon: Building,
    gradient: 'linear-gradient(135deg, #8B1A1A 0%, #0F1F4B 70%, #1A2E6B 100%)',
    pattern: 'pattern-grid',
    aspectClass: 'aspect-[3/4]',
  },
  {
    label: 'Study Groups',
    icon: Lightbulb,
    gradient: 'linear-gradient(135deg, #C8960C30 0%, #0F1F4B 50%, #243A80 100%)',
    pattern: 'pattern-dots',
    aspectClass: 'aspect-[4/3]',
  },
  {
    label: 'Success Celebrations',
    icon: Trophy,
    gradient: 'linear-gradient(135deg, #0F1F4B 0%, #C8960C50 60%, #1A2E6B 100%)',
    pattern: 'pattern-diagonal',
    aspectClass: 'aspect-[4/3]',
  },
]

/* ─── Gallery Card ─── */
function GalleryCard({
  item,
  index,
}: {
  item: (typeof galleryItems)[number]
  index: number
}) {
  const Icon = item.icon

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={cn(
        'group relative rounded-xl overflow-hidden',
        'premium-shadow',
        'cursor-pointer',
        'transition-all duration-400',
        'hover:scale-[1.03]',
        'hover:ring-2 hover:ring-[#C8960C]/60 dark:hover:ring-[#E8B830]/60',
      )}
    >
      {/* Gradient Background */}
      <div
        className={cn('relative w-full', item.aspectClass)}
        style={{ background: item.gradient }}
      >
        {/* Pattern Overlay */}
        <div
          className={cn('absolute inset-0', item.pattern, 'opacity-30')}
          aria-hidden="true"
        />

        {/* Icon */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className={cn(
              'w-16 h-16 sm:w-20 sm:h-20 rounded-full',
              'flex items-center justify-center',
              'bg-[rgba(200,150,12,0.12)]',
              'border border-[rgba(200,150,12,0.25)]',
              'transition-all duration-400',
              'group-hover:bg-[rgba(200,150,12,0.2)]',
              'group-hover:scale-110',
              'group-hover:border-[rgba(200,150,12,0.5)]',
            )}
          >
            <Icon
              className={cn(
                'w-7 h-7 sm:w-8 sm:h-8',
                'text-[#E8B830]',
                'transition-transform duration-400',
                'group-hover:scale-110',
              )}
            />
          </div>
        </div>

        {/* Label at Bottom */}
        <div
          className={cn(
            'absolute bottom-0 left-0 right-0',
            'p-4',
            'transition-all duration-400',
          )}
        >
          <div
            className={cn(
              'relative',
              'py-2 px-3 rounded-lg',
              'backdrop-blur-sm',
              'bg-[rgba(15,31,75,0.6)]',
              'transition-all duration-400',
              'group-hover:bg-[rgba(15,31,75,0.8)]',
            )}
          >
            <span
              className={cn(
                'font-sans text-[13px] font-medium',
                'text-[#FAFAF7]/80',
                'transition-colors duration-300',
                'group-hover:text-[#E8B830]',
              )}
            >
              {item.label}
            </span>
          </div>
        </div>

        {/* Hover overlay */}
        <div
          className={cn(
            'absolute inset-0',
            'bg-[rgba(200,150,12,0)]',
            'transition-all duration-400',
            'group-hover:bg-[rgba(200,150,12,0.06)]',
          )}
        />
      </div>
    </motion.div>
  )
}

/* ─── Main Section ─── */
export default function GallerySection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' })

  return (
    <section
      ref={sectionRef}
      className="relative py-16 md:py-24 overflow-hidden"
      aria-labelledby="gallery-heading"
    >
      {/* Cream background */}
      <div
        className="absolute inset-0"
        style={{ backgroundColor: '#FAFAF7' }}
      />
      <div
        className="absolute inset-0 hidden dark:block"
        style={{ backgroundColor: '#0D1525' }}
      />

      {/* Pattern overlay */}
      <div
        className="absolute inset-0 pointer-events-none pattern-dots opacity-30"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-10 md:mb-14 text-center"
        >
          {/* Section Label */}
          <p className="section-label ui-label mb-4 text-[#C8960C] dark:text-[#E8B830]">
            CAMPUS LIFE
          </p>

          {/* Heading */}
          <h2
            id="gallery-heading"
            className={cn(
              'font-serif section-heading text-[36px] leading-tight text-[#0F1F4B] dark:text-[#FAFAF7] md:text-[44px]',
            )}
          >
            Life at Aristocrat
          </h2>

          {/* Gold Separator */}
          <div className="mx-auto mt-5 h-[2px] w-10 bg-[#C8960C]" />
        </motion.div>

        {/* Masonry-style Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {galleryItems.map((item, index) => (
            <GalleryCard key={item.label} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
