'use client'

import { cn } from '@/lib/utils'

const RESULTS = [
  'xxxxxxx — AIR xx, IAS',
  'xxxxxxx — AIR xx, IPS',
  'xxxxxxx — AIR xx, IFS',
  'xxxxxxx — AIR xx, IAS',
  'xxxxxxx — AIR xx, IPS',
  'xxxxxxx — AIR xx, IRS',
  'xxxxxxx — AIR xx, IAS',
  'xxxxxxx — AIR xx, IFS',
  'xxxxxxx — AIR xx, IPS',
  'xxxxxxx — AIR xx, KAS',
]

function Separator() {
  return (
    <span
      className="inline-flex items-center mx-4 text-[10px] text-sovereign-gold dark:text-champagne-gold"
      aria-hidden="true"
    >
      ◆
    </span>
  )
}

export default function ResultsTicker() {
  const content = RESULTS.map((name, i) => (
    <span key={i} className="whitespace-nowrap">
      <span>{name}</span>
      {i < RESULTS.length - 1 && <Separator />}
    </span>
  ))

  return (
    <div
      className="relative overflow-hidden py-3 bg-navy dark:bg-[#0A1428]"
      role="marquee"
      aria-label="Our successful candidates"
    >
      {/* Left gradient fade */}
      <div
        className="absolute left-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
        style={{
          background: 'linear-gradient(to right, #0F1F4B, transparent)',
        }}
        aria-hidden="true"
      />

      {/* Right gradient fade */}
      <div
        className="absolute right-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
        style={{
          background: 'linear-gradient(to left, #0F1F4B, transparent)',
        }}
        aria-hidden="true"
      />

      {/* Marquee track */}
      <div className={cn('animate-marquee flex whitespace-nowrap font-sans text-sm font-medium text-sovereign-gold dark:text-champagne-gold')}>
        {/* First copy */}
        {content}
        {/* Separator between copies */}
        <Separator />
        {/* Duplicate for seamless looping */}
        {content}
        {/* Separator at end for seamless loop */}
        <Separator />
      </div>
    </div>
  )
}
