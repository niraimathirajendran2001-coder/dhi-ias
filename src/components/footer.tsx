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
      className="relative pt-16 pb-8 overflow-hidden"
      style={{ backgroundColor: '#0F1F4B' }}
    >
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
                  className="font-serif text-[24px] font-semibold leading-none"
                  style={{ color: '#E8B830' }}
                >
                  ARISTOCRAT
                </h2>
                <p
                  className="font-sans text-[11px] uppercase tracking-[0.15em] mt-0.5"
                  style={{ color: 'rgba(250,250,247,0.7)' }}
                >
                  IAS ACADEMY
                </p>
              </div>
            </div>
            <p
              className="font-sans text-[13px] leading-relaxed mb-6"
              style={{ color: 'rgba(250,250,247,0.5)' }}
            >
              Elite UPSC &amp; KAS coaching in Chandralayout, Bengaluru. Guided by experience.
              Driven by results.
            </p>

            {/* Social Icons with hover scale + gold color transition */}
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
                    'transition-all duration-300',
                    'hover:scale-125 hover:drop-shadow-[0_0_6px_rgba(200,150,12,0.4)]'
                  )}
                  style={{ color: '#FAFAF7' }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = '#C8960C')
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = '#FAFAF7')
                  }
                >
                  <Icon className="size-5" />
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
              className="font-sans ui-label text-[14px] mb-5"
              style={{ color: '#E8B830' }}
            >
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="font-sans text-[14px] transition-colors duration-200"
                    style={{ color: 'rgba(250,250,247,0.7)' }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = '#C8960C')
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = 'rgba(250,250,247,0.7)')
                    }
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
              className="font-sans ui-label text-[14px] mb-5"
              style={{ color: '#E8B830' }}
            >
              Our Courses
            </h3>
            <ul className="space-y-3">
              {courseLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="font-sans text-[14px] transition-colors duration-200"
                    style={{ color: 'rgba(250,250,247,0.7)' }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = '#C8960C')
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = 'rgba(250,250,247,0.7)')
                    }
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
              className="font-sans ui-label text-[14px] mb-5"
              style={{ color: '#E8B830' }}
            >
              Get in Touch
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="size-4 mt-0.5 flex-shrink-0" style={{ color: '#C8960C' }} />
                <span
                  className="font-sans text-[14px]"
                  style={{ color: 'rgba(250,250,247,0.7)' }}
                >
                  Chandralayout, Bengaluru 560040
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="size-4 mt-0.5 flex-shrink-0" style={{ color: '#C8960C' }} />
                <span
                  className="font-sans text-[14px]"
                  style={{ color: 'rgba(250,250,247,0.7)' }}
                >
                  +91 80 XXXX XXXX
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="size-4 mt-0.5 flex-shrink-0" style={{ color: '#C8960C' }} />
                <span
                  className="font-sans text-[14px]"
                  style={{ color: 'rgba(250,250,247,0.7)' }}
                >
                  info@aristocratiasacademy.in
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="size-4 mt-0.5 flex-shrink-0" style={{ color: '#C8960C' }} />
                <span
                  className="font-sans text-[14px]"
                  style={{ color: 'rgba(250,250,247,0.7)' }}
                >
                  Mon-Sat: 8AM - 8PM
                </span>
              </li>
            </ul>
            <a
              href="#admissions"
              className="inline-flex items-center gap-1 mt-5 font-sans text-[14px] font-medium transition-colors duration-200"
              style={{ color: '#C8960C' }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = '#E8B830')
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = '#C8960C')
              }
            >
              Book a Demo Class
              <ArrowRight className="size-4" />
            </a>
          </motion.div>
        </div>

        {/* Separator — gold gradient */}
        <div
          className="h-px w-full mb-6"
          style={{ background: 'linear-gradient(90deg, transparent, rgba(200,150,12,0.3), rgba(232,184,48,0.3), rgba(200,150,12,0.3), transparent)' }}
        />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p
            className="font-sans text-[12px]"
            style={{ color: 'rgba(250,250,247,0.4)' }}
          >
            &copy; 2026 Aristocrat IAS Academy. All rights reserved.
          </p>
          <p
            className="font-serif italic text-[13px] order-first md:order-none"
            style={{ color: 'rgba(232,184,48,0.6)' }}
          >
            Built for those who dare to serve.
          </p>
          <p
            className="font-sans text-[12px]"
            style={{ color: 'rgba(250,250,247,0.4)' }}
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
              className="w-5 h-5"
              style={{ color: 'rgba(200,150,12,0.4)' }}
            />
            <span
              className="font-sans text-[10px] uppercase tracking-widest"
              style={{ color: 'rgba(200,150,12,0.3)' }}
            >
              Top
            </span>
          </a>
        </div>
      </div>
    </footer>
  )
}
