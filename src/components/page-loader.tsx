'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

/* ─── Module-level session check (runs once when module loads) ─── */
const wasLoaderShown =
  typeof window !== 'undefined'
    ? sessionStorage.getItem('aristocrat-loader-shown') === 'true'
    : false

export default function PageLoader() {
  const [isVisible, setIsVisible] = useState(!wasLoaderShown)
  const [hasLoaded, setHasLoaded] = useState(wasLoaderShown)

  useEffect(() => {
    // If already shown in this session, skip everything
    if (wasLoaderShown) return

    // Auto-dismiss after 1.5 seconds
    const timer = setTimeout(() => {
      setIsVisible(false)
      sessionStorage.setItem('aristocrat-loader-shown', 'true')
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  // After exit animation completes, mark as fully loaded
  function handleExitComplete() {
    setHasLoaded(true)
  }

  // Don't render anything if already loaded
  if (hasLoaded) return null

  return (
    <AnimatePresence onExitComplete={handleExitComplete}>
      {isVisible && (
        <motion.div
          key="page-loader"
          initial={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
          style={{ backgroundColor: '#0F1F4B' }}
        >
          {/* Subtle pattern overlay */}
          <div className="absolute inset-0 pattern-dots opacity-10" aria-hidden="true" />

          {/* Brand Text */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative text-center"
          >
            {/* ARISTOCRAT */}
            <h1
              className="font-serif text-[36px] sm:text-[48px] md:text-[56px] font-semibold tracking-tight gold-shimmer"
            >
              ARISTOCRAT
            </h1>

            {/* IAS ACADEMY */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="font-sans ui-label text-[12px] sm:text-[14px] tracking-[0.2em] mt-2"
              style={{ color: '#C8960C' }}
            >
              IAS ACADEMY
            </motion.p>
          </motion.div>

          {/* Animated Gold Line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 h-[2px] w-32 sm:w-40 origin-left"
            style={{
              background: 'linear-gradient(90deg, transparent, #C8960C, #E8B830, #C8960C, transparent)',
            }}
          />

          {/* Subtle loading dots */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.8 }}
            className="mt-8 flex items-center gap-2"
          >
            {[0, 1, 2].map((i) => (
              <motion.span
                key={i}
                className="w-1.5 h-1.5 rounded-full"
                style={{ backgroundColor: '#C8960C' }}
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
        </motion.div>
      )}
    </AnimatePresence>
  )
}
