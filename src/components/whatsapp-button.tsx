'use client'

import { MessageCircle } from 'lucide-react'
import { cn } from '@/lib/utils'

/* ------------------------------------------------------------------ */
/*  Constants                                                          */
/* ------------------------------------------------------------------ */

const WHATSAPP_URL =
  'https://wa.me/919876543210?text=Hi%2C%20I%27d%20like%20to%20know%20more%20about%20Aristocrat%20IAS%20Academy.'

/* ------------------------------------------------------------------ */
/*  Component: WhatsAppButton                                          */
/* ------------------------------------------------------------------ */

export function WhatsAppButton() {
  return (
    <div className="fixed bottom-6 right-6 z-50 group/wa">
      {/* Tooltip — CSS-only, appears on hover */}
      <span
        className={cn(
          'absolute right-full mr-3 top-1/2 -translate-y-1/2',
          'whitespace-nowrap px-3 py-1.5 rounded-[6px]',
          'bg-carbon text-ivory-cream text-xs font-medium leading-snug',
          'opacity-0 pointer-events-none',
          'transition-opacity duration-200 group-hover/wa:opacity-100',
        )}
        role="tooltip"
      >
        Chat with us on WhatsApp
      </span>

      {/* Button */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className={cn(
          'flex items-center justify-center',
          'w-14 h-14 rounded-full bg-navy text-ivory-cream',
          'transition-all duration-200 ease-out',
          /* Hover: scale + gold ring */
          'hover:scale-110 hover:ring-[3px] hover:ring-sovereign-gold/60 hover:ring-offset-2 hover:ring-offset-background',
          /* Focus-visible for keyboard users */
          'focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-sovereign-gold focus-visible:ring-offset-2 focus-visible:ring-offset-background',
          /* Pulse animation — CSS class defined in globals.css */
          'whatsapp-pulse-btn',
        )}
      >
        <MessageCircle className="w-6 h-6" strokeWidth={2} />
      </a>
    </div>
  )
}
