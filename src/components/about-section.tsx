'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
}

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}

const fadeInLeft = {
  hidden: { opacity: 0, x: -32 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}

const fadeInRight = {
  hidden: { opacity: 0, x: 32 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}

const philosophyQuotes = [
  {
    quote: 'The right guidance, at the right moment, changes everything.',
    subtext: 'Our mentorship model ensures every aspirant receives timely, personalised direction when it matters most.',
  },
  {
    quote: 'Discipline is not restriction — it is the architecture of achievement.',
    subtext: 'We build structured routines and accountable study frameworks that transform effort into results.',
  },
  {
    quote: 'Every aspirant deserves a mentor who has walked the path before them.',
    subtext: 'Our faculty comprises former civil servants and seasoned educators who bring lived experience to every interaction.',
  },
]

/** Decorative gold flourish/ornament SVG */
function GoldFlourish() {
  return (
    <svg
      className="w-40 h-6 mx-auto my-8"
      viewBox="0 0 160 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Left scroll */}
      <path d="M0 12C8 4 20 4 30 12C20 20 8 20 0 12Z" stroke="#C8960C" strokeWidth="1" fill="none" />
      <line x1="30" y1="12" x2="60" y2="12" stroke="#C8960C" strokeWidth="0.8" />
      {/* Center diamond */}
      <path d="M75 6L82 12L75 18L68 12Z" stroke="#C8960C" strokeWidth="1" fill="none" />
      <circle cx="75" cy="12" r="2" fill="#C8960C" opacity="0.4" />
      {/* Right line */}
      <line x1="82" y1="12" x2="130" y2="12" stroke="#C8960C" strokeWidth="0.8" />
      {/* Right scroll */}
      <path d="M160 12C152 4 140 4 130 12C140 20 152 20 160 12Z" stroke="#C8960C" strokeWidth="1" fill="none" />
    </svg>
  )
}

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative py-16 md:py-24 overflow-hidden bg-ivory-cream dark:bg-[#0D1525]"
    >
      {/* Subtle paper texture feel */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          opacity: 0.015,
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='4' height='4' viewBox='0 0 4 4' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 3h1v1H1V3zm2-2h1v1H3V1z' fill='%233D3D3A' fill-opacity='1'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="mb-14 text-center"
        >
          <motion.span
            variants={fadeInUp}
            className="section-label ui-label inline-block mb-4"
          >
            ABOUT US
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            className="font-serif section-heading text-[36px] md:text-[44px] leading-tight mb-4 text-navy dark:text-ivory-cream"
          >
            Built Around a Single Belief
          </motion.h2>
          <motion.div
            variants={fadeInUp}
            className="mx-auto h-[2px] w-20 bg-sovereign-gold dark:bg-champagne-gold"
          />
        </motion.div>

        {/* Director's Message */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="mb-12"
        >
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start">
            {/* Portrait with gold ring + subtle pulse */}
            <motion.div variants={fadeInLeft} className="flex-shrink-0 self-center md:self-start">
              <div className="gold-ring-pulse inline-block">
                <div
                  className="flex items-center justify-center rounded-full bg-navy dark:bg-[#0A1428] border-[3px] border-sovereign-gold dark:border-champagne-gold"
                  style={{
                    width: 160,
                    height: 160,
                    boxShadow: '0 0 0 6px rgba(200,150,12,0.1), 0 8px 32px rgba(15,31,75,0.15)',
                  }}
                >
                  <span
                    className="font-serif text-[40px] font-semibold text-sovereign-gold dark:text-champagne-gold"
                  >
                    AK
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Message */}
            <motion.div variants={fadeInRight} className="flex-1">
              <h3
                className="font-serif text-[22px] md:text-[26px] font-semibold mb-1 text-navy dark:text-ivory-cream"
              >
                Arun Kumar
              </h3>
              <p
                className="font-sans text-[14px] font-medium mb-5 text-sovereign-gold dark:text-champagne-gold"
              >
                Founder &amp; Director
              </p>
              <p
                className="font-sans text-[14px] font-medium mb-6 text-sovereign-gold dark:text-champagne-gold"
              >
                Former IAS Officer | Karnataka Cadre (2005 Batch)
              </p>

              {/* Quote with decorative gold quotation mark */}
              <div className="relative">
                <span
                  className="absolute -top-6 -left-4 font-serif text-[72px] leading-none select-none text-sovereign-gold dark:text-champagne-gold opacity-35"
                  aria-hidden="true"
                >
                  &ldquo;
                </span>
                <div className="relative pl-4 md:pl-6">
                  <p
                    className="font-serif message-body text-[15px] md:text-[16px] mb-4 text-carbon dark:text-ivory-cream/90"
                  >
                    When I left the service after a decade in the Karnataka cadre, I did so with one
                    conviction: that the path to becoming a civil servant should not depend on where
                    you were born or what resources you had access to. The UPSC examination is one of
                    the fairest systems in the world — but the preparation ecosystem around it is
                    not.
                  </p>
                  <p
                    className="font-serif message-body text-[15px] md:text-[16px] mb-4 text-carbon dark:text-ivory-cream/90"
                  >
                    Aristocrat IAS Academy was founded to bridge that gap. Not by making promises we
                    cannot keep, but by building a system where every aspirant receives the same
                    quality of mentorship, the same depth of study material, and the same personal
                    attention — regardless of their background.
                  </p>
                  <p
                    className="font-serif message-body text-[15px] md:text-[16px] mb-4 text-carbon dark:text-ivory-cream/90"
                  >
                    I have sat on the other side of the interview table. I know what the examiners
                    look for. I know the common mistakes that even brilliant aspirants make. And I
                    know that the difference between a candidate who clears and one who doesn&apos;t
                    is rarely about intelligence — it is about guidance at the right moment,
                    discipline over a sustained period, and an environment that treats preparation as
                    the serious endeavor it is.
                  </p>
                  <p
                    className="font-serif message-body text-[15px] md:text-[16px] mb-4 text-carbon dark:text-ivory-cream/90"
                  >
                    Every member of our faculty shares this belief. Every system we have built — from
                    our structured curriculum to our one-on-one mentorship program — exists to ensure
                    that no aspirant walks this path alone.
                  </p>
                  <p
                    className="font-serif message-body text-[16px] md:text-[17px] font-semibold text-navy dark:text-ivory-cream"
                  >
                    This is not a coaching center. This is the place where your service to the nation
                    begins.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Decorative gold flourish between sections */}
        <GoldFlourish />

        {/* Our Philosophy */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          <motion.h3
            variants={fadeInUp}
            className="font-serif text-[28px] font-semibold mb-10 text-center text-navy dark:text-ivory-cream"
          >
            Our Philosophy
          </motion.h3>

          <div className="space-y-8">
            {philosophyQuotes.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="border-l-[4px] pl-6 md:pl-8 py-2 border-sovereign-gold dark:border-champagne-gold"
              >
                <blockquote
                  className="font-serif pull-quote text-[22px] md:text-[24px] mb-2 text-navy dark:text-ivory-cream"
                >
                  &ldquo;{item.quote}&rdquo;
                </blockquote>
                <p
                  className="font-sans text-[14px] body-text text-stone-gray dark:text-ivory-cream/70"
                >
                  {item.subtext}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
