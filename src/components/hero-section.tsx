'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useRef } from 'react'

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

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })

  // Parallax: Ashoka Chakra moves at 40% of scroll speed
  const chakraY = useTransform(scrollYProgress, [0, 1], [0, 150])

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ backgroundColor: '#0F1F4B' }}
      aria-label="Hero Section"
    >
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
        {/* Gold uppercase label */}
        <motion.p
          className="font-sans ui-label text-[11px] mb-6"
          style={{ color: '#C8960C' }}
          variants={labelVariants}
        >
          Aristocrat IAS Academy
        </motion.p>

        {/* Main headline — Cormorant Garamond at display size */}
        <motion.h1
          className="font-serif display-headline text-[clamp(2.75rem,7vw,4.5rem)] mb-6"
          style={{ color: '#FAFAF7' }}
          variants={headlineVariants}
        >
          Where Civil Servants Begin.
        </motion.h1>

        {/* Gold decorative line */}
        <motion.div
          className="mb-6"
          variants={lineVariants}
        >
          <div
            className="h-[2px] w-10 origin-left"
            style={{ backgroundColor: '#C8960C' }}
          />
        </motion.div>

        {/* Supporting subtext */}
        <motion.p
          className="font-sans body-text text-lg max-w-lg mb-10"
          style={{ color: 'rgba(250,250,247,0.65)' }}
          variants={subtextVariants}
        >
          Elite UPSC &amp; KAS coaching guided by former civil servants.
          Structured mentorship. Proven results. Your path to serving the
          nation starts here.
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4"
          variants={ctaVariants}
        >
          <a
            href="#admissions"
            className={cn(
              'inline-flex items-center justify-center font-sans font-semibold rounded-md',
              'px-8 py-4 text-sm transition-all duration-300',
              'hover:brightness-110 active:scale-[0.98]',
              'btn-gold-shimmer'
            )}
            style={{
              backgroundColor: '#C8960C',
              color: '#0F1F4B',
            }}
          >
            Book Free Demo Class
          </a>
          <a
            href="#courses"
            className={cn(
              'inline-flex items-center justify-center font-sans font-semibold rounded-md',
              'px-8 py-4 text-sm transition-all duration-300',
              'border-2 hover:bg-[#FAFAF7] hover:text-[#0F1F4B] active:scale-[0.98]'
            )}
            style={{
              borderColor: '#FAFAF7',
              color: '#FAFAF7',
            }}
          >
            Explore Courses
          </a>
        </motion.div>
      </motion.div>

      {/* Gold gradient overlay at bottom edge for smooth transition */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none z-20"
        style={{
          background: 'linear-gradient(to top, #FAFAF7 0%, transparent 100%)',
        }}
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
          className="w-px"
          style={{ backgroundColor: '#C8960C' }}
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
          <ChevronDown className="w-5 h-5" style={{ color: '#C8960C' }} />
        </motion.div>
      </motion.div>
    </section>
  )
}

/** Pure SVG Ashoka Chakra watermark — gold accents at low opacity */
function AshokaChakra() {
  const size = 480
  const cx = size / 2
  const cy = size / 2
  const outerR = size / 2 - 20
  const innerR = outerR - 16
  const spokeR = outerR - 4
  const hubR = 36
  const numSpokes = 24

  const spokes = Array.from({ length: numSpokes }, (_, i) => {
    const angle = (i * 360) / numSpokes
    const rad = (angle * Math.PI) / 180
    const x2 = cx + spokeR * Math.cos(rad)
    const y2 = cy + spokeR * Math.sin(rad)
    return (
      <line
        key={i}
        x1={cx}
        y1={cy}
        x2={x2}
        y2={y2}
        stroke="#C8960C"
        strokeWidth="1.2"
        opacity="0.18"
      />
    )
  })

  // Decorative dots between spokes on the outer ring
  const dots = Array.from({ length: numSpokes }, (_, i) => {
    const angle = ((i + 0.5) * 360) / numSpokes
    const rad = (angle * Math.PI) / 180
    const dotR = (outerR + innerR) / 2
    const dx = cx + dotR * Math.cos(rad)
    const dy = cy + dotR * Math.sin(rad)
    return (
      <circle
        key={`dot-${i}`}
        cx={dx}
        cy={dy}
        r="2.5"
        fill="#C8960C"
        opacity="0.15"
      />
    )
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
      {spokes}
      {/* Dots between spokes */}
      {dots}
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
