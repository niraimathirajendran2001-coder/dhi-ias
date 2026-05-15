'use client'

import { useState, useCallback, useSyncExternalStore } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ShieldCheck, Settings, ChevronDown, ChevronUp } from 'lucide-react'
import { Switch } from '@/components/ui/switch'
import { cn } from '@/lib/utils'

const STORAGE_KEY = 'dhi-cookie-consent'

interface CookiePreferences {
  essential: boolean
  analytics: boolean
  marketing: boolean
  accepted: boolean
}

const defaultPreferences: CookiePreferences = {
  essential: true,
  analytics: false,
  marketing: false,
  accepted: false,
}

function subscribeToStorage(callback: () => void) {
  window.addEventListener('storage', callback)
  return () => window.removeEventListener('storage', callback)
}

function getStorageSnapshot(): boolean {
  if (typeof window === 'undefined') return true // SSR: assume accepted
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (!stored) return false
    const parsed = JSON.parse(stored) as CookiePreferences
    return parsed.accepted === true
  } catch {
    return false
  }
}

function getServerSnapshot(): boolean {
  return true // SSR: assume accepted
}

export function CookieConsent() {
  const isAccepted = useSyncExternalStore(
    subscribeToStorage,
    getStorageSnapshot,
    getServerSnapshot,
  )
  const [showPreferences, setShowPreferences] = useState(false)
  const [preferences, setPreferences] = useState<CookiePreferences>({
    ...defaultPreferences,
    essential: true,
  })

  const savePreferences = useCallback((prefs: CookiePreferences) => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ ...prefs, accepted: true }))
      window.dispatchEvent(
        new StorageEvent('storage', { key: STORAGE_KEY, newValue: JSON.stringify({ ...prefs, accepted: true }) }),
      )
    } catch {
      // Ignore storage errors
    }
  }, [])

  const handleAcceptAll = useCallback(() => {
    const allAccepted: CookiePreferences = {
      essential: true,
      analytics: true,
      marketing: true,
      accepted: true,
    }
    savePreferences(allAccepted)
  }, [savePreferences])

  const handleSavePreferences = useCallback(() => {
    savePreferences({ ...preferences, accepted: true })
  }, [preferences, savePreferences])

  const togglePreference = useCallback((key: 'analytics' | 'marketing') => {
    setPreferences((prev) => ({ ...prev, [key]: !prev[key] }))
  }, [])

  if (isAccepted) return null

  return (
    <AnimatePresence>
      {/* Backdrop overlay when preferences expanded */}
      {showPreferences && (
        <motion.div
          key="cookie-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-40 bg-black/20 dark:bg-black/40 backdrop-blur-sm"
          aria-hidden="true"
        />
      )}
      <motion.div
        key="cookie-consent-panel"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          'fixed bottom-0 left-0 right-0 z-50',
          'bg-[#1C1C1E] dark:bg-[#0F0F11]',
          'shadow-[0_-8px_30px_rgba(0,0,0,0.3)]',
        )}
      >
        {/* Gold accent line at top */}
        <div className="h-[2px] bg-gradient-to-r from-transparent via-[#E31837] to-[#FF2D4B] dark:via-[#FF2D4B] dark:to-[#FF4D6A]" />
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-4 sm:py-5">
          {/* Main content */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            {/* Icon + Text */}
            <div className="flex items-start gap-3 flex-1">
              <ShieldCheck className="w-5 h-5 mt-0.5 text-[#E31837] dark:text-champagne-gold shrink-0" />
              <p className="font-sans text-[14px] leading-relaxed text-ivory-cream/80 dark:text-ivory-cream/70">
                We use cookies to enhance your experience. By continuing, you agree to our{' '}
                <a
                  href="#contact"
                  className="text-[#E31837] dark:text-champagne-gold underline underline-offset-2 hover:text-[#FF2D4B] transition-colors"
                >
                  Privacy Policy
                </a>
                .
              </p>
            </div>

            {/* Buttons */}
            <div className="flex items-center gap-3 shrink-0 w-full sm:w-auto">
              <button
                onClick={() => setShowPreferences(!showPreferences)}
                className={cn(
                  'flex items-center gap-1.5',
                  'px-4 py-2 rounded-lg',
                  'font-sans text-[13px] font-medium',
                  'border border-ivory-cream/30 dark:border-ivory-cream/20',
                  'text-ivory-cream/80 dark:text-ivory-cream/60',
                  'hover:border-[#E31837] dark:hover:border-champagne-gold',
                  'hover:text-ivory-cream',
                  'transition-all duration-200',
                  'w-full sm:w-auto justify-center',
                )}
              >
                <Settings className="w-3.5 h-3.5" />
                Manage Preferences
                {showPreferences ? (
                  <ChevronUp className="w-3 h-3" />
                ) : (
                  <ChevronDown className="w-3 h-3" />
                )}
              </button>

              <button
                onClick={handleAcceptAll}
                className={cn(
                  'px-5 py-2 rounded-lg',
                  'font-sans text-[13px] font-semibold tracking-wide',
                  'transition-all duration-300',
                  'btn-gold-shimmer',
                  'w-full sm:w-auto text-center',
                  'bg-gradient-to-br from-[#E31837] to-[#FF2D4B] dark:from-champagne-gold dark:to-[#FF4D6A]',
                  'text-navy dark:text-[#1C1C1E]',
                )}
              >
                Accept All
              </button>
            </div>
          </div>

          {/* Preferences Panel */}
          <AnimatePresence>
            {showPreferences && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="overflow-hidden"
              >
                <div className="mt-4 pt-4 border-t border-ivory-cream/10 dark:border-ivory-cream/5">
                  <div className="space-y-4">
                    {/* Essential */}
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <p className="font-sans text-[14px] font-semibold text-ivory-cream dark:text-ivory-cream/90">
                          Essential
                        </p>
                        <p className="font-sans text-[12px] text-ivory-cream/50 dark:text-ivory-cream/40">
                          Required for the website to function. Cannot be disabled.
                        </p>
                      </div>
                      <Switch checked disabled className="opacity-60 cursor-not-allowed toggle-gold-active" />
                    </div>

                    {/* Analytics */}
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <p className="font-sans text-[14px] font-semibold text-ivory-cream dark:text-ivory-cream/90">
                          Analytics
                        </p>
                        <p className="font-sans text-[12px] text-ivory-cream/50 dark:text-ivory-cream/40">
                          Help us understand how visitors interact with our site.
                        </p>
                      </div>
                      <Switch
                        checked={preferences.analytics}
                        onCheckedChange={() => togglePreference('analytics')}
                        className="toggle-gold-active"
                      />
                    </div>

                    {/* Marketing */}
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <p className="font-sans text-[14px] font-semibold text-ivory-cream dark:text-ivory-cream/90">
                          Marketing
                        </p>
                        <p className="font-sans text-[12px] text-ivory-cream/50 dark:text-ivory-cream/40">
                          Used to deliver relevant advertisements and track campaigns.
                        </p>
                      </div>
                      <Switch
                        checked={preferences.marketing}
                        onCheckedChange={() => togglePreference('marketing')}
                        className="toggle-gold-active"
                      />
                    </div>
                  </div>

                  {/* Save Preferences Button */}
                  <div className="mt-5 flex justify-end">
                    <button
                      onClick={handleSavePreferences}
                      className={cn(
                        'px-5 py-2 rounded-lg',
                        'font-sans text-[13px] font-semibold tracking-wide',
                        'transition-all duration-300',
                        'btn-gold-shimmer',
                        'bg-gradient-to-br from-[#E31837] to-[#FF2D4B] dark:from-champagne-gold dark:to-[#FF4D6A]',
                        'text-navy dark:text-[#1C1C1E]',
                      )}
                    >
                      Save Preferences
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
