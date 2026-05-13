'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { cn } from '@/lib/utils'

/* ─── Data ─── */
const stats = [
  { value: 200, suffix: '+', label: 'UPSC & KAS Selections' },
  { value: 12, suffix: '+', label: 'Expert Faculty Members' },
  { value: 15, suffix: '+', label: 'Years of Excellence' },
  { value: 95, suffix: '%', label: 'Student Satisfaction Rate' },
]

/* ─── Animated counter hook ─── */
function useCountUp(target: number, inView: boolean, duration = 1800) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!inView) return

    let start = 0
    const startTime = performance.now()

    const step = (now: number) => {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)

      // Ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3)
      const current = Math.round(eased * target)

      setCount(current)

      if (progress < 1) {
        requestAnimationFrame(step)
      }
    }

    requestAnimationFrame(step)
  }, [inView, target, duration])

  return count
}

/* ─── Single Stat ─── */
function StatItem({
  value,
  suffix,
  label,
  inView,
}: {
  value: number
  suffix: string
  label: string
  inView: boolean
}) {
  const count = useCountUp(value, inView)

  return (
    <div className="flex flex-col items-center px-4 text-center">
      <motion.span
        className="font-serif stat-number text-5xl md:text-6xl"
        style={{ color: '#E8B830' }}
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {count}
        {suffix}
      </motion.span>
      <span
        className="mt-2 text-sm font-sans body-text"
        style={{ color: 'rgba(250, 250, 247, 0.7)' }}
      >
        {label}
      </span>
    </div>
  )
}

/* ─── Section ─── */
export function StatsCounterSection() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section
      ref={ref}
      className="py-12"
      style={{ backgroundColor: '#0F1F4B' }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 items-center md:grid-cols-4">
          {stats.map((stat, i) => (
            <div key={stat.label} className="flex items-center justify-center">
              <StatItem
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
                inView={inView}
              />
              {/* Vertical gold separator — not after last item */}
              {i < stats.length - 1 && (
                <div
                  className="hidden h-14 w-px md:block"
                  style={{
                    backgroundColor: 'rgba(200, 150, 12, 0.2)',
                  }}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
