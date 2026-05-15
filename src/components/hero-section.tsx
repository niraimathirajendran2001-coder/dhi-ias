'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useRef, useState, useEffect } from 'react'

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
}

const labelVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
}

const headlineVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
}

const lineVariants = {
  hidden: { opacity: 0, scaleX: 0 },
  visible: {
    opacity: 1,
    scaleX: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
}

const subtextVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
}

const ctaVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
}

/* ─── Typing animation hook ─── */
function useTypingEffect(text: string, speed: number = 30, startDelay: number = 1200) {
  const [displayedText, setDisplayedText] = useState('')
  const [isTyping, setIsTyping] = useState(true)

  useEffect(() => {
    let i = 0
    const startTimer = setTimeout(() => {
      const interval = setInterval(() => {
        if (i < text.length) {
          setDisplayedText(text.slice(0, i + 1))
          i++
        } else {
          setIsTyping(false)
          clearInterval(interval)
        }
      }, speed)
      return () => clearInterval(interval)
    }, startDelay)

    return () => clearTimeout(startTimer)
  }, [text, speed, startDelay])

  return { displayedText, isTyping }
}

/* ─── Floating geometric shapes ─── */
function FloatingShapes() {
  const shapes = [
    { type: 'triangle', x: '8%', y: '15%', size: 60, opacity: 0.04, duration: '14s', delay: '0s' },
    { type: 'circle', x: '85%', y: '25%', size: 40, opacity: 0.03, duration: '16s', delay: '-2s' },
    { type: 'square', x: '60%', y: '20%', size: 30, opacity: 0.03, duration: '18s', delay: '-4s' },
    { type: 'triangle', x: '75%', y: '70%', size: 50, opacity: 0.035, duration: '15s', delay: '-3s' },
    { type: 'circle', x: '15%', y: '75%', size: 30, opacity: 0.03, duration: '17s', delay: '-5s' },
    { type: 'diamond', x: '92%', y: '55%', size: 35, opacity: 0.04, duration: '13s', delay: '-1s' },
    { type: 'square', x: '30%', y: '85%', size: 24, opacity: 0.025, duration: '19s', delay: '-6s' },
  ]

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
      {shapes.map((shape, i) => (
        <div
          key={i}
          className="absolute geometric-float"
          style={{
            left: shape.x,
            top: shape.y,
            opacity: shape.opacity,
            '--geo-duration': shape.duration,
            '--geo-delay': shape.delay,
          } as React.CSSProperties}
        >
          {shape.type === 'triangle' && (
            <svg width={shape.size} height={shape.size} viewBox="0 0 60 60">
              <polygon points="30,5 55,50 5,50" fill="#C8960C" />
            </svg>
          )}
          {shape.type === 'circle' && (
            <svg width={shape.size} height={shape.size} viewBox="0 0 40 40">
              <circle cx="20" cy="20" r="18" fill="none" stroke="#C8960C" strokeWidth="1.5" />
            </svg>
          )}
          {shape.type === 'diamond' && (
            <svg width={shape.size} height={shape.size} viewBox="0 0 40 40">
              <polygon points="20,2 38,20 20,38 2,20" fill="none" stroke="#E8B830" strokeWidth="1.5" />
            </svg>
          )}
          {shape.type === 'square' && (
            <svg width={shape.size} height={shape.size} viewBox="0 0 30 30">
              <rect x="2" y="2" width="26" height="26" fill="none" stroke="#C8960C" strokeWidth="1.2" rx="2" />
            </svg>
          )}
        </div>
      ))}
    </div>
  )
}

/* ─── Particle dust ─── */
/* Deterministic particle positions to avoid hydration mismatch */
const particleDustData = [
  { left: 8, size: 2.5, duration: 8, delay: 0.5, driftX: 12 },
  { left: 17, size: 3.0, duration: 10, delay: 2.0, driftX: -8 },
  { left: 25, size: 2.2, duration: 7, delay: 4.5, driftX: 22 },
  { left: 33, size: 3.5, duration: 9, delay: 1.2, driftX: -15 },
  { left: 42, size: 2.8, duration: 11, delay: 3.0, driftX: 5 },
  { left: 50, size: 2.0, duration: 8, delay: 6.5, driftX: -25 },
  { left: 58, size: 3.2, duration: 10, delay: 0.8, driftX: 18 },
  { left: 67, size: 2.6, duration: 7, delay: 5.0, driftX: -10 },
  { left: 75, size: 3.8, duration: 9, delay: 2.5, driftX: 30 },
  { left: 83, size: 2.4, duration: 11, delay: 7.0, driftX: -20 },
  { left: 90, size: 3.0, duration: 8, delay: 3.5, driftX: 8 },
  { left: 95, size: 2.8, duration: 10, delay: 1.0, driftX: -12 },
]

function ParticleDust() {
  const particles = particleDustData.map((p, i) => ({
    id: i,
    left: `${p.left}%`,
    size: p.size,
    duration: p.duration,
    delay: p.delay,
    driftX: p.driftX,
  }))

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
      {particles.map((p) => (
        <span
          key={p.id}
          className="absolute rounded-full bg-sovereign-gold dark:bg-champagne-gold particle-dust"
          style={{
            left: p.left,
            bottom: '-10px',
            width: p.size,
            height: p.size,
            opacity: 0,
            '--dust-duration': `${p.duration}s`,
            '--dust-delay': `${p.delay}s`,
            '--drift-x': `${p.driftX}px`,
          } as React.CSSProperties}
        />
      ))}
    </div>
  )
}

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })

  // Parallax: Ashoka Chakra moves at 40% of scroll speed
  const chakraY = useTransform(scrollYProgress, [0, 1], [0, 150])

  // Typing effect for tagline
  const taglineText = 'Transforming Lives'
  const { displayedText: taglineDisplayed, isTyping: isTaglineTyping } = useTypingEffect(taglineText, 45, 1200)

  // Typing effect for subtitle
  const subtitleText = 'DHI Academy guides aspirants through every stage of UPSC & KAS with expert mentorship, comprehensive content, and a proven track record. Transforming Lives since inception.'
  const { displayedText, isTyping } = useTypingEffect(subtitleText, 25, 3500)

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-navy dark:bg-[#0A1428]"
      aria-label="Hero Section"
    >
      {/* Animated gradient mesh background — 2 slowly-moving radial blobs */}
      <div className="gradient-mesh-hero" aria-hidden="true" />

      {/* Horizontal gold light beam sweep — 8s cycle */}
      <div className="light-sweep" aria-hidden="true" />

      {/* Diagonal light sweep overlay — very subtle 5% opacity */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 40%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      {/* Subtle geometric diamond pattern overlay — 2-3% opacity */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          opacity: 0.03,
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0L60 30L30 60L0 30Z' fill='none' stroke='%23FAFAF7' stroke-width='0.5'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
        }}
        aria-hidden="true"
      />

      {/* Particle/dot pattern overlay for depth */}
      <div
        className="absolute inset-0 pointer-events-none pattern-dots"
        aria-hidden="true"
      />

      {/* Floating geometric shapes — subtle triangles, circles at 3-5% opacity */}
      <FloatingShapes />

      {/* Particle dust — small gold dots drifting upward */}
      <ParticleDust />

      {/* Vignette — dark edges */}
      <div className="vignette" aria-hidden="true" />

      {/* Subtle grain/noise texture overlay for premium depth */}
      <div className="grain-texture" aria-hidden="true" />

      {/* Right side: Ashoka Chakra decorative watermark — hidden on mobile, with parallax */}
      <motion.div
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-[15%] md:translate-x-[10%] lg:translate-x-[5%] pointer-events-none hidden md:block"
        style={{ y: chakraY }}
        aria-hidden="true"
      >
        <AshokaChakra />
      </motion.div>

      {/* Main content */}
      <motion.div
        className="relative z-10 w-full max-w-2xl pl-8 md:pl-16 lg:pl-24 text-left"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Decorative thin gold line above label */}
        <motion.div
          className="mb-3"
          variants={lineVariants}
        >
          <div className="h-px w-8 bg-sovereign-gold dark:bg-champagne-gold" />
        </motion.div>

        {/* Gold uppercase label */}
        <motion.p
          className="font-sans ui-label text-[11px] mb-6 text-sovereign-gold dark:text-champagne-gold"
          variants={labelVariants}
        >
          DHI Academy
        </motion.p>

        {/* Main headline — Cormorant Garamond at display size */}
        <motion.h1
          className="font-serif display-headline text-[clamp(2.75rem,7vw,4.5rem)] mb-6 text-ivory-cream text-shadow-gold relative"
          variants={headlineVariants}
        >
          {/* Subtle gold radial gradient glow behind headline */}
          <span
            className="absolute inset-0 -z-10 pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse at 30% 50%, rgba(200,150,12,0.08) 0%, transparent 60%)',
            }}
            aria-hidden="true"
          />
          Transform Your Civil Services Journey.
        </motion.h1>

        {/* Gold decorative line */}
        <motion.div
          className="mb-4"
          variants={lineVariants}
        >
          <div
            className="h-[2px] w-10 origin-left bg-sovereign-gold dark:bg-champagne-gold"
          />
        </motion.div>

        {/* Tagline — typing animation with gold shimmer */}
        <motion.p
          className="font-serif text-xl md:text-2xl mb-4 text-sovereign-gold dark:text-champagne-gold"
          variants={subtextVariants}
        >
          {taglineDisplayed}
          {isTaglineTyping && <span className="typing-cursor" />}
        </motion.p>

        {/* Supporting subtext — typing animation */}
        <motion.p
          className="font-sans body-text text-lg max-w-lg mb-10 text-ivory-cream/65"
          variants={subtextVariants}
        >
          {displayedText}
          {isTyping && <span className="typing-cursor" />}
        </motion.p>

        {/* CTAs with magnetic hover */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4"
          variants={ctaVariants}
        >
          <a
            href="/courses"
            className={cn(
              'inline-flex items-center justify-center font-sans font-bold rounded-md',
              'px-8 py-4 sm:py-5 text-sm transition-all duration-300',
              'hover:brightness-110 active:scale-[0.98]',
              'btn-gold-shimmer btn-magnetic cta-gold-border-glow',
              'bg-sovereign-gold dark:bg-champagne-gold text-navy dark:text-[#0A1428]',
              'shadow-[0_2px_8px_rgba(200,150,12,0.35)]'
            )}
          >
            Explore Courses
          </a>
          <a
            href="/contact"
            className={cn(
              'inline-flex items-center justify-center font-sans font-semibold rounded-md',
              'px-8 py-4 text-sm transition-all duration-300',
              'border-2 hover:bg-ivory-cream hover:text-navy active:scale-[0.98]',
              'border-ivory-cream text-ivory-cream btn-magnetic cta-gold-border-glow'
            )}
          >
            Contact Us
          </a>
          <a
            href="/courses"
            className={cn(
              'inline-flex items-center justify-center font-sans font-semibold rounded-md',
              'px-8 py-4 text-sm transition-all duration-300',
              'border-2 hover:bg-sovereign-gold hover:text-navy active:scale-[0.98]',
              'border-sovereign-gold dark:border-champagne-gold text-sovereign-gold dark:text-champagne-gold btn-magnetic cta-gold-border-glow'
            )}
          >
            Scholarship Test
          </a>
        </motion.div>
      </motion.div>

      {/* Gold gradient overlay at bottom edge for smooth transition */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none z-20 bg-gradient-to-t from-ivory-cream dark:from-[#0D1525] to-transparent"
        aria-hidden="true"
      />

      {/* Scroll down indicator — gold line that draws down + chevron */}
      <motion.div
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        aria-hidden="true"
      >
        {/* Gold line that draws down */}
        <motion.div
          className="w-px bg-sovereign-gold dark:bg-champagne-gold"
          initial={{ height: 0 }}
          animate={{ height: 28 }}
          transition={{ delay: 2, duration: 1, ease: 'easeOut' }}
        />
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <ChevronDown className="w-5 h-5 text-sovereign-gold dark:text-champagne-gold" />
        </motion.div>
      </motion.div>
    </section>
  )
}

/** Pure SVG Ashoka Chakra watermark — gold accents at low opacity */
/* Precomputed coordinates to avoid hydration mismatch from Math.cos/sin float precision differences */
function AshokaChakra() {
  const size = 480
  const cx = 240
  const cy = 240
  const outerR = 220
  const innerR = 204
  const spokeR = 216
  const hubR = 36
  const numSpokes = 24

  // Precompute spoke endpoints with fixed precision to avoid hydration mismatch
  const spokeData = Array.from({ length: numSpokes }, (_, i) => {
    const angle = (i * 360) / numSpokes
    const rad = (angle * Math.PI) / 180
    const x2 = Number((cx + spokeR * Math.cos(rad)).toFixed(2))
    const y2 = Number((cy + spokeR * Math.sin(rad)).toFixed(2))
    return { x2, y2 }
  })

  const dotData = Array.from({ length: numSpokes }, (_, i) => {
    const angle = ((i + 0.5) * 360) / numSpokes
    const rad = (angle * Math.PI) / 180
    const dotR = (outerR + innerR) / 2
    const dx = Number((cx + dotR * Math.cos(rad)).toFixed(2))
    const dy = Number((cy + dotR * Math.sin(rad)).toFixed(2))
    return { dx, dy }
  })

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-[320px] h-[320px] lg:w-[480px] lg:h-[480px]"
    >
      {/* Outer circle */}
      <circle
        cx={cx}
        cy={cy}
        r={outerR}
        stroke="#C8960C"
        strokeWidth="1.5"
        opacity="0.15"
      />
      {/* Inner circle */}
      <circle
        cx={cx}
        cy={cy}
        r={innerR}
        stroke="#C8960C"
        strokeWidth="1"
        opacity="0.12"
      />
      {/* Spokes */}
      {spokeData.map((spoke, i) => (
        <line
          key={i}
          x1={cx}
          y1={cy}
          x2={spoke.x2}
          y2={spoke.y2}
          stroke="#C8960C"
          strokeWidth="1.2"
          opacity="0.18"
        />
      ))}
      {/* Dots between spokes */}
      {dotData.map((dot, i) => (
        <circle
          key={`dot-${i}`}
          cx={dot.dx}
          cy={dot.dy}
          r="2.5"
          fill="#C8960C"
          opacity="0.15"
        />
      ))}
      {/* Central hub */}
      <circle
        cx={cx}
        cy={cy}
        r={hubR}
        stroke="#C8960C"
        strokeWidth="1.5"
        opacity="0.18"
      />
      <circle
        cx={cx}
        cy={cy}
        r={hubR - 8}
        stroke="#C8960C"
        strokeWidth="0.8"
        opacity="0.12"
      />
      {/* Decorative inner hub pattern */}
      <circle cx={cx} cy={cy} r="8" fill="#C8960C" opacity="0.2" />
    </svg>
  )
}
