'use client'

import { useEffect, useState, useSyncExternalStore } from 'react'

function subscribeToScroll(callback: () => void) {
  window.addEventListener('scroll', callback, { passive: true })
  return () => window.removeEventListener('scroll', callback)
}

function getScrollSnapshot() {
  if (typeof window === 'undefined') return 0
  const scrollTop = window.scrollY
  const docHeight = document.documentElement.scrollHeight - window.innerHeight
  return docHeight > 0 ? (scrollTop / docHeight) * 100 : 0
}

function getServerSnapshot() {
  return 0
}

export function ScrollProgress() {
  const progress = useSyncExternalStore(
    subscribeToScroll,
    getScrollSnapshot,
    getServerSnapshot,
  )

  return (
    <div
      className="fixed top-0 left-0 right-0 z-[60] h-[2px]"
      aria-hidden="true"
    >
      <div
        className="h-full transition-[width] duration-150 ease-out"
        style={{
          width: `${progress}%`,
          background: 'linear-gradient(90deg, #C8960C, #E8B830)',
        }}
      />
    </div>
  )
}
