'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import {
  Instagram,
  Youtube,
  Facebook,
  Twitter,
  MapPin,
  Phone,
  Mail,
  Clock,
  ArrowRight,
  ChevronUp,
} from 'lucide-react'
import { cn } from '@/lib/utils'

const quickLinks = [
  'About Us',
  'Courses',
  'Faculty',
  'Results & Toppers',
  'Admissions',
  'Contact Us',
]

const courseLinks = [
  'GS Foundation',
  'KAS Coaching',
  'Optional Subjects',
  'Test Series',
  'Current Affairs',
  'Interview Guidance',
]

const mediaLogos = [
  'The Hindu',
  'Indian Express',
  'Deccan Herald',
  'The Times of India',
  'Bangalore Mirror',
]

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
}

export default function Footer() {
  return (
    <footer
      className="relative pt-16 pb-8 overflow-hidden bg-navy dark:bg-[#0A1428]"
    >
      {/* Wave/curve SVG separator at the very top */}
      <div className="absolute -top-1 left-0 right-0 z-20" aria-hidden="true">
        <svg
          viewBox="0 0 1440 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-[30px] sm:h-[40px]"
          preserveAspectRatio="none"
        >
          <path
            d="M0 40V20C240 0 480 0 720 10C960 20 1200 30 1440 15V40H0Z"
            className="fill-navy dark:fill-[#0A1428]"
          />
          <path
            d="M0 40V25C360 5 720 5 1080 15C1260 20 1380 25 1440 20V40H0Z"
            fill="#0F1F4B"
            opacity="0.5"
          />
        </svg>
      </div>

      {/* Subtle gradient background */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(180deg, #0F1F4B 0%, #0D1A3F 60%, #0A1428 100%)',
        }}
      />

      {/* Decorative top border — gold gradient line */}
      <div
        className="absolute top-0 left-0 right-0 h-[2px] z-10"
        style={{
          background: 'linear-gradient(90deg, transparent 5%, #C8960C, #E8B830, #C8960C, transparent 95%)',
        }}
        aria-hidden="true"
      />

      {/* Subtle pattern overlay */}
      <div
        className="absolute inset-0 pointer-events-none pattern-dots"
        style={{ opacity: 0.2 }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        {/* Newsletter section with gradient background */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-12 -mt-2 rounded-xl p-6 sm:p-8 relative overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, rgba(200,150,12,0.1) 0%, rgba(200,150,12,0.05) 50%, rgba(232,184,48,0.08) 100%)',
            border: '1px solid rgba(200,150,12,0.15)',
          }}
        >
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="font-serif text-[22px] sm:text-[26px] font-semibold text-champagne-gold mb-1">
                Stay Updated
              </h3>
              <p className="font-sans text-[13px] text-ivory-cream/50">
                Get UPSC tips, current affairs updates, and exclusive offers.
              </p>
            </div>
            <div className="flex items-center gap-2 w-full sm:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 sm:w-[260px] h-11 px-4 rounded-lg bg-white/5 border border-sovereign-gold/20 text-ivory-cream text-sm font-sans placeholder:text-ivory-cream/30 focus:outline-none focus:border-sovereign-gold/50 focus:ring-1 focus:ring-sovereign-gold/30 transition-all"
              />
              <button
                className="h-11 px-5 rounded-lg bg-sovereign-gold dark:bg-champagne-gold text-navy dark:text-[#0A1428] font-semibold text-sm font-sans btn-gold-shimmer transition-all duration-200 hover:bg-champagne-gold dark:hover:bg-[#F5D060]"
              >
                Subscribe
              </button>
            </div>
          </div>
        </motion.div>

        {/* Four Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-12">
          {/* Column 1: Brand */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/logo.jpg"
                alt="Aristocrat IAS Academy Logo"
                width={48}
                height={48}
                className="rounded-full"
              />
              <div>
                <h2
                  className="font-serif text-[24px] font-semibold leading-none text-champagne-gold"
                >
                  ARISTOCRAT
                </h2>
                <p
                  className="font-sans text-[11px] uppercase tracking-[0.15em] mt-0.5 text-ivory-cream/70"
                >
                  IAS ACADEMY
                </p>
              </div>
            </div>
            <p
              className="font-sans text-[13px] leading-relaxed mb-6 text-ivory-cream/50"
            >
              Elite UPSC &amp; KAS coaching in Chandralayout, Bengaluru. Guided by experience.
              Driven by results.
            </p>

            {/* Social Icons with gold background circle on hover */}
            <div className="flex items-center gap-4">
              {[
                { Icon: Instagram, label: 'Instagram' },
                { Icon: Youtube, label: 'YouTube' },
                { Icon: Facebook, label: 'Facebook' },
                { Icon: Twitter, label: 'Twitter' },
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className={cn(
                    'flex items-center justify-center size-9 rounded-full',
                    'transition-all duration-300',
                    'text-ivory-cream hover:text-navy dark:hover:text-[#0A1428]',
                    'hover:bg-sovereign-gold dark:hover:bg-champagne-gold',
                    'hover:scale-110 hover:shadow-md hover:shadow-[rgba(200,150,12,0.3)]'
                  )}
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Column 2: Quick Links */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3
              className="font-sans ui-label text-[14px] mb-5 text-champagne-gold"
            >
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="font-sans text-[14px] transition-colors duration-200 text-ivory-cream/70 hover:text-sovereign-gold dark:hover:text-champagne-gold footer-link-animated"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 3: Courses */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3
              className="font-sans ui-label text-[14px] mb-5 text-champagne-gold"
            >
              Our Courses
            </h3>
            <ul className="space-y-3">
              {courseLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="font-sans text-[14px] transition-colors duration-200 text-ivory-cream/70 hover:text-sovereign-gold dark:hover:text-champagne-gold footer-link-animated"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 4: Contact */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3
              className="font-sans ui-label text-[14px] mb-5 text-champagne-gold"
            >
              Get in Touch
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="size-4 mt-0.5 flex-shrink-0 text-sovereign-gold dark:text-champagne-gold" />
                <span
                  className="font-sans text-[14px] text-ivory-cream/70"
                >
                  Chandralayout, Bengaluru 560040
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="size-4 mt-0.5 flex-shrink-0 text-sovereign-gold dark:text-champagne-gold" />
                <span
                  className="font-sans text-[14px] text-ivory-cream/70"
                >
                  +91 80 XXXX XXXX
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="size-4 mt-0.5 flex-shrink-0 text-sovereign-gold dark:text-champagne-gold" />
                <span
                  className="font-sans text-[14px] text-ivory-cream/70"
                >
                  info@aristocratiasacademy.in
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="size-4 mt-0.5 flex-shrink-0 text-sovereign-gold dark:text-champagne-gold" />
                <span
                  className="font-sans text-[14px] text-ivory-cream/70"
                >
                  Mon-Sat: 8AM - 8PM
                </span>
              </li>
            </ul>
            <a
              href="#admissions"
              className="inline-flex items-center gap-1 mt-5 font-sans text-[14px] font-medium transition-colors duration-200 text-sovereign-gold dark:text-champagne-gold hover:text-champagne-gold footer-link-animated"
            >
              Book a Demo Class
              <ArrowRight className="size-4" />
            </a>
          </motion.div>
        </div>

        {/* "As seen in" media logos row */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-10 pt-8"
        >
          <p className="font-sans text-[10px] uppercase tracking-[0.2em] text-ivory-cream/25 text-center mb-4">
            As Seen In
          </p>
          <div className="flex items-center justify-center flex-wrap gap-x-8 gap-y-3">
            {mediaLogos.map((name) => (
              <span
                key={name}
                className="font-serif text-[14px] sm:text-[16px] text-ivory-cream/15 hover:text-ivory-cream/30 transition-colors duration-300 select-none"
              >
                {name}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Separator — gold gradient */}
        <div
          className="h-px w-full mb-6"
          style={{ background: 'linear-gradient(90deg, transparent, rgba(200,150,12,0.3), rgba(232,184,48,0.3), rgba(200,150,12,0.3), transparent)' }}
        />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p
            className="font-sans text-[12px] text-ivory-cream/40"
          >
            &copy; 2026 Aristocrat IAS Academy. All rights reserved.
          </p>
          <p
            className="font-serif italic text-[13px] order-first md:order-none text-champagne-gold/60"
          >
            Built for those who dare to serve.
          </p>
          <p
            className="font-sans text-[12px] text-ivory-cream/40"
          >
            Privacy Policy | Terms of Use
          </p>
        </div>

        {/* Back-to-top visual hint */}
        <div className="mt-8 flex justify-center">
          <a
            href="#"
            className={cn(
              'flex flex-col items-center gap-1',
              'transition-all duration-300',
              'hover:opacity-80'
            )}
            onClick={(e) => {
              e.preventDefault()
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }}
            aria-label="Back to top"
          >
            <ChevronUp
              className="w-5 h-5 text-sovereign-gold/40"
            />
            <span
              className="font-sans text-[10px] uppercase tracking-widest text-sovereign-gold/30"
            >
              Top
            </span>
          </a>
        </div>
      </div>
    </footer>
  )
}
