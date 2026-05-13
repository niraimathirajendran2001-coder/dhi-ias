'use client'

import { useTheme } from 'next-themes'
import { Moon, Sun } from 'lucide-react'
import { cn } from '@/lib/utils'

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  const isDark = theme === 'dark'

  return (
    <button
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className={cn(
        'inline-flex items-center justify-center',
        'w-10 h-10 rounded-[6px]',
        'transition-all duration-200',
        'hover:scale-105',
      )}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
    >
      <Sun
        className={cn(
          'w-5 h-5 transition-all duration-300',
          isDark ? 'text-champagne-gold rotate-0 scale-100' : 'text-navy rotate-90 scale-0',
        )}
      />
      <Moon
        className={cn(
          'w-5 h-5 absolute transition-all duration-300',
          isDark ? 'text-champagne-gold rotate-90 scale-0' : 'text-navy rotate-0 scale-100',
        )}
      />
    </button>
  )
}
