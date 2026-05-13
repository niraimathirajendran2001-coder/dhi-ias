'use client'

import { useState, useEffect, useCallback, useSyncExternalStore } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'

const announcements = [
  '🎯 New KAS Batch Starting July 2026 — Enroll Now!',
  '📚 Free UPSC Study Plan — Download Today!',
  '🏆 200+ Selections — Join the Legacy!',
]

const STORAGE_KEY = 'aristocrat-announcement-dismissed'

function subscribeToStorage(callback: () => void) {
  window.addEventListener('storage', callback)
  return () => window.removeEventListener('storage', callback)
}

function getStorageSnapshot(): boolean {
  if (typeof window === 'undefined') return true // SSR: assume dismissed
  try {
    return localStorage.getItem(STORAGE_KEY) === 'true'
  } catch {
    return false
  }
}

function getServerSnapshot(): boolean {
  return true // SSR: assume dismissed
}

export function AnnouncementBar() {
  const isDismissed = useSyncExternalStore(
    subscribeToStorage,
    getStorageSnapshot,
    getServerSnapshot,
  )
  const [currentIndex, setCurrentIndex] = useState(0)

  // Auto-rotate announcements
  useEffect(() => {
    if (isDismissed) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % announcements.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isDismissed])

  const handleDismiss = useCallback(() => {
    try {
      localStorage.setItem(STORAGE_KEY, 'true')
      // Dispatch storage event for other tabs
      window.dispatchEvent(new StorageEvent('storage', { key: STORAGE_KEY, newValue: 'true' }))
    } catch {
      // Ignore storage errors
    }
  }, [])

  if (isDismissed) return null

  return (
    <div
      className="fixed top-0 left-0 right-0 z-[60] h-9 flex items-center justify-center"
      style={{ backgroundColor: '#C8960C' }}
    >
      <div className="flex-1 flex items-center justify-center overflow-hidden relative h-full">
        <AnimatePresence mode="wait">
          <motion.p
            key={currentIndex}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="font-sans text-[13px] font-medium whitespace-nowrap"
            style={{ color: '#0F1F4B' }}
          >
            {announcements[currentIndex]}
          </motion.p>
        </AnimatePresence>
      </div>

      {/* Dismiss Button */}
      <button
        onClick={handleDismiss}
        className="absolute right-3 top-1/2 -translate-y-1/2 p-0.5 rounded-sm transition-colors hover:bg-black/10 cursor-pointer"
        style={{ color: '#0F1F4B' }}
        aria-label="Dismiss announcement"
      >
        <X className="w-3.5 h-3.5" />
      </button>
    </div>
  )
}
