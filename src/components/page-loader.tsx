'use client'

import { useState, useEffect, useCallback, useSyncExternalStore } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

/* ─── Session storage helpers for useSyncExternalStore ─── */
const STORAGE_KEY = 'aristocrat-loader-shown'

function subscribeToSessionStorage(callback: () => void) {
  window.addEventListener('storage', callback)
  return () => window.removeEventListener('storage', callback)
}

function getSessionSnapshot(): boolean {
  if (typeof window === 'undefined') return true // SSR fallback: assume already shown
  try {
    return sessionStorage.getItem(STORAGE_KEY) === 'true'
  } catch {
    return false
  }
}

function getServerSnapshot(): boolean {
  return true // SSR: assume already shown (don't render loader)
}

/* ─── Ashoka Chakra SVG with 8 spokes ─── */
function LoaderAshokaChakra() {
  const size = 120
  const cx = size / 2
  const cy = size / 2
  const outerR = size / 2 - 8
  const innerR = outerR - 10
  const spokeR = outerR - 2
  const hubR = 16
  const numSpokes = 8

  const spokes = Array.from({ length: numSpokes }, (_, i) => {
    const angle = (i * 360) / numSpokes
    const rad = (angle * Math.PI) / 180
    const x2 = cx + spokeR * Math.cos(rad)
    const y2 = cy + spokeR * Math.sin(rad)
    return (
      <line
        key={i}
        x1={cx}
        y1={cy}
        x2={x2}
        y2={y2}
        stroke="#C8960C"
        strokeWidth="2"
        opacity="0.9"
      />
    )
  })

  const dots = Array.from({ length: numSpokes }, (_, i) => {
    const angle = ((i + 0.5) * 360) / numSpokes
    const rad = (angle * Math.PI) / 180
    const dotR = (outerR + innerR) / 2
    const dx = cx + dotR * Math.cos(rad)
    const dy = cy + dotR * Math.sin(rad)
    return (
      <circle
        key={`dot-${i}`}
        cx={dx}
        cy={dy}
        r="3"
        fill="#C8960C"
        opacity="0.7"
      />
    )
  })

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-[80px] h-[80px] sm:w-[120px] sm:h-[120px]"
      style={{ animation: 'rotate-slow 4s linear infinite' }}
    >
      {/* Outer circle */}
      <circle
        cx={cx}
        cy={cy}
        r={outerR}
        stroke="#C8960C"
        strokeWidth="2"
        opacity="0.8"
      />
      {/* Inner circle */}
      <circle
        cx={cx}
        cy={cy}
        r={innerR}
        stroke="#C8960C"
        strokeWidth="1.5"
        opacity="0.5"
      />
      {/* Spokes */}
      {spokes}
      {/* Dots between spokes */}
      {dots}
      {/* Central hub */}
      <circle
        cx={cx}
        cy={cy}
        r={hubR}
        stroke="#C8960C"
        strokeWidth="2"
        opacity="0.8"
      />
      <circle
        cx={cx}
        cy={cy}
        r={hubR - 5}
        stroke="#C8960C"
        strokeWidth="1"
        opacity="0.5"
      />
      <circle cx={cx} cy={cy} r="4" fill="#C8960C" opacity="0.9" />
    </svg>
  )
}

/* ─── Gold orbiting particles ─── */
function GoldParticles() {
  const particles = Array.from({ length: 9 }, (_, i) => ({
    id: i,
    radius: 55 + i * 12,
    duration: 3.5 + i * 0.6,
    size: 3 + (i % 3),
    delay: -i * 0.8,
    opacity: 0.5 + (i % 3) * 0.15,
  }))

  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      {particles.map((p) => (
        <span
          key={p.id}
          className="absolute rounded-full bg-sovereign-gold dark:bg-champagne-gold"
          style={{
            width: p.size,
            height: p.size,
            opacity: p.opacity,
            '--orbit-radius': `${p.radius}px`,
            '--orbit-duration': `${p.duration}s`,
            animation: `gold-particle-orbit var(--orbit-duration) linear infinite`,
            animationDelay: `${p.delay}s`,
          } as React.CSSProperties}
        />
      ))}
    </div>
  )
}

export default function PageLoader() {
  // useSyncExternalStore reads sessionStorage safely without hydration mismatch.
  // Server snapshot = true (already shown = don't render loader).
  // Client reads actual value. On first visit, React re-renders to show loader.
  const wasLoaderShown = useSyncExternalStore(
    subscribeToSessionStorage,
    getSessionSnapshot,
    getServerSnapshot,
  )

  const [isExiting, setIsExiting] = useState(false)
  const [hasDismissed, setHasDismissed] = useState(false)

  const startExit = useCallback(() => {
    setIsExiting(true)
    // After gold ring expansion animation (0.9s), trigger split reveal
    setTimeout(() => {
      setHasDismissed(true)
      try {
        sessionStorage.setItem(STORAGE_KEY, 'true')
        window.dispatchEvent(
          new StorageEvent('storage', { key: STORAGE_KEY, newValue: 'true' }),
        )
      } catch {
        // Ignore storage errors
      }
    }, 900)
  }, [])

  useEffect(() => {
    // If already shown in this session, don't auto-dismiss (loader isn't visible)
    if (wasLoaderShown) return

    // Auto-dismiss after 2.5 seconds (gives time for animations)
    const timer = setTimeout(() => {
      startExit()
    }, 2500)

    return () => clearTimeout(timer)
  }, [wasLoaderShown, startExit])

  // Don't render anything if already shown in this session or fully dismissed
  if (wasLoaderShown || hasDismissed) return null

  return (
    <AnimatePresence>
      {!hasDismissed && (
        <motion.div
          key="page-loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.1 }}
          className="fixed inset-0 z-[9999] flex flex-col"
        >
          {/* Top half — slides up on exit */}
          <motion.div
            className="flex-1 flex flex-col items-center justify-center relative bg-navy dark:bg-[#0A1428]"
            exit={{ y: '-100%' }}
            transition={{ duration: 0.8, ease: [0.77, 0, 0.175, 1] }}
          >
            {/* Subtle pattern overlay */}
            <div className="absolute inset-0 pattern-dots opacity-10" aria-hidden="true" />

            {/* Ashoka Chakra wheel */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5, rotate: -30 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="mb-6"
            >
              <LoaderAshokaChakra />
            </motion.div>

            {/* Brand Text with gold-shimmer sweep */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative text-center"
            >
              {/* Gold orbiting particles around brand text */}
              <GoldParticles />

              {/* ARISTOCRAT */}
              <h1 className="font-serif text-[36px] sm:text-[48px] md:text-[56px] font-semibold tracking-tight gold-shimmer-sweep relative z-10">
                ARISTOCRAT
              </h1>

              {/* IAS ACADEMY */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.5 }}
                className="font-sans ui-label text-[12px] sm:text-[14px] tracking-[0.2em] mt-2 text-sovereign-gold dark:text-champagne-gold relative z-10"
              >
                IAS ACADEMY
              </motion.p>
            </motion.div>

            {/* Animated Gold Line */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6 h-[2px] w-32 sm:w-40 origin-left"
              style={{
                background: 'linear-gradient(90deg, transparent, #C8960C, #E8B830, #C8960C, transparent)',
              }}
            />

            {/* Subtle loading dots */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.9 }}
              className="mt-8 flex items-center gap-2"
            >
              {[0, 1, 2].map((i) => (
                <motion.span
                  key={i}
                  className="w-1.5 h-1.5 rounded-full bg-sovereign-gold dark:bg-champagne-gold"
                  animate={{
                    opacity: [0.3, 1, 0.3],
                    scale: [0.8, 1, 0.8],
                  }}
                  transition={{
                    duration: 1,
                    delay: i * 0.2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />
              ))}
            </motion.div>

            {/* Expanding gold ring before exit */}
            {isExiting && (
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <span
                  className="rounded-full border-sovereign-gold dark:border-champagne-gold gold-ring-expand"
                  style={{ width: 60, height: 60 }}
                />
              </div>
            )}
          </motion.div>

          {/* Bottom half — slides down on exit */}
          <motion.div
            className="flex-1 bg-navy dark:bg-[#0A1428]"
            exit={{ y: '100%' }}
            transition={{ duration: 0.8, ease: [0.77, 0, 0.175, 1] }}
          >
            {/* Subtle pattern overlay */}
            <div className="w-full h-full pattern-dots opacity-10" aria-hidden="true" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
