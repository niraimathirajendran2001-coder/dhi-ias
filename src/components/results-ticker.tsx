'use client'

import { cn } from '@/lib/utils'

const RESULTS = [
  'Rahul Menon — AIR 34, IAS',
  'Priya Sharma — AIR 112, IPS',
  'Ananya Krishnan — AIR 67, IFS',
  'Vikram Patel — AIR 23, IAS',
  'Meera Nair — AIR 89, IPS',
  'Arjun Reddy — AIR 156, IRS',
  'Kavitha Rao — AIR 45, IAS',
  'Deepak Kumar — AIR 78, IFS',
  'Sanya Joseph — AIR 201, IPS',
  'Ramesh Gowda — AIR 92, KAS',
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
