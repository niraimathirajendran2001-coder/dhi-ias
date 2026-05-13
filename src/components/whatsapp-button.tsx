'use client'

import { MessageCircle } from 'lucide-react'
import { cn } from '@/lib/utils'

/* ------------------------------------------------------------------ */
/*  Constants                                                          */
/* ------------------------------------------------------------------ */

const WHATSAPP_URL =
  'https://wa.me/919845806645?text=Hi%2C%20I%27d%20like%20to%20know%20more%20about%20Aristocrat%20IAS%20Academy.'

/* ------------------------------------------------------------------ */
/*  Component: WhatsAppButton                                          */
/* ------------------------------------------------------------------ */

export function WhatsAppButton() {
  return (
    <div className="fixed bottom-[1rem] right-5 sm:right-6 z-50 group/wa">
      {/* Tooltip — appears to the left on hover */}
      <span
        className={cn(
          'tooltip-left',
        )}
        role="tooltip"
      >
        WhatsApp
      </span>

      {/* Button */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className={cn(
          'flex items-center justify-center',
          'w-12 h-12 rounded-full bg-navy dark:bg-[#0A1428] text-ivory-cream',
          'transition-all duration-200 ease-out',
          'gold-ring-btn',
          /* Hover: scale */
          'hover:scale-110',
          /* Focus-visible for keyboard users */
          'focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-sovereign-gold focus-visible:ring-offset-2 focus-visible:ring-offset-background',
          /* Pulse animation */
          'whatsapp-pulse-btn',
          'animate-bounce-in',
        )}
        style={{ animationDelay: '0.4s' }}
      >
        <MessageCircle className="w-5 h-5" strokeWidth={2} />
      </a>
    </div>
  )
}
