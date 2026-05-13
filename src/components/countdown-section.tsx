'use client'

import { useEffect, useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'

/* ─── Target Date ─── */
const TARGET_DATE = new Date('2026-06-15T09:00:00+05:30').getTime()

/* ─── Time Left Calculation ─── */
function getTimeLeft() {
  const now = Date.now()
  const diff = Math.max(TARGET_DATE - now, 0)

  const days = Math.floor(diff / (1000 * 60 * 60 * 24))
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24)
  const minutes = Math.floor((diff / (1000 * 60)) % 60)
  const seconds = Math.floor((diff / 1000) % 60)

  return { days, hours, minutes, seconds }
}

/* ─── Decorative Gold Particles ─── */
function GoldParticles() {
  const particles = Array.from({ length: 18 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    size: 2 + Math.random() * 3,
    delay: Math.random() * 4,
    duration: 3 + Math.random() * 4,
  }))

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
      {particles.map((p) => (
        <motion.span
          key={p.id}
          className="absolute rounded-full"
          style={{
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
            backgroundColor: 'rgba(200, 150, 12, 0.25)',
          }}
          animate={{
            opacity: [0.15, 0.5, 0.15],
            scale: [1, 1.4, 1],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  )
}

/* ─── Countdown Box ─── */
function CountdownBox({
  value,
  label,
  delay,
}: {
  value: number
  label: string
  delay: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className={cn(
        'flex flex-col items-center justify-center',
        'rounded-xl p-4 sm:p-6',
        'glass-countdown gold-pulse-glow',
        'relative overflow-hidden',
      )}
      style={{
        minWidth: '80px',
      }}
    >
      {/* Gold shimmer line at top */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background: 'linear-gradient(90deg, transparent, rgba(200,150,12,0.4), transparent)',
        }}
      />
      <span
        className={cn(
          'font-serif stat-number text-4xl sm:text-5xl md:text-6xl',
          'gold-gradient-text',
        )}
      >
        {String(value).padStart(2, '0')}
      </span>
      <span
        className="mt-2 font-sans ui-label text-[10px] sm:text-[11px] tracking-[0.12em]"
        style={{ color: 'rgba(250,250,247,0.6)' }}
      >
        {label}
      </span>
    </motion.div>
  )
}

/* ─── Main Section ─── */
export default function CountdownSection() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft)
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' })

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getTimeLeft())
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative py-16 md:py-24 overflow-hidden"
      aria-labelledby="countdown-heading"
    >
      {/* Navy gradient background */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(160deg, #0F1F4B 0%, #1A2E6B 40%, #0F1F4B 100%)',
        }}
      />

      {/* Pattern dots overlay */}
      <div
        className="absolute inset-0 pointer-events-none pattern-dots"
        style={{ opacity: 0.3 }}
        aria-hidden="true"
      />

      {/* Gold particles decoration */}
      <GoldParticles />

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-10 md:mb-14"
        >
          {/* Section Label */}
          <p className="section-label ui-label section-label-diamond mb-4">Limited Seats Available</p>

          {/* Heading */}
          <h2
            id="countdown-heading"
            className={cn(
              'font-serif section-heading text-[32px] leading-tight md:text-[44px]',
              'text-[#FAFAF7]',
            )}
          >
            Next Batch Starts In
          </h2>

          {/* Gold Separator */}
          <div className="mx-auto mt-5 h-[2px] w-10 bg-[#C8960C]" />
        </motion.div>

        {/* Countdown Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-2xl mx-auto">
          <CountdownBox value={timeLeft.days} label="Days" delay={0.1} />
          <CountdownBox value={timeLeft.hours} label="Hours" delay={0.2} />
          <CountdownBox value={timeLeft.minutes} label="Minutes" delay={0.3} />
          <CountdownBox value={timeLeft.seconds} label="Seconds" delay={0.4} />
        </div>

        {/* Date hint */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-5 font-sans text-[13px]"
          style={{ color: 'rgba(250,250,247,0.45)' }}
        >
          June 15, 2026 &middot; Morning Batch
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-8"
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
            Reserve Your Seat
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
