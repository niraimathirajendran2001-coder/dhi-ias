'use client'

import { motion } from 'framer-motion'
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
      className="pt-16 pb-8"
      style={{ backgroundColor: '#0F1F4B' }}
    >
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        {/* Four Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-12">
          {/* Column 1: Brand */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2
              className="font-serif text-[24px] font-semibold mb-1"
              style={{ color: '#E8B830' }}
            >
              ARISTOCRAT
            </h2>
            <p
              className="font-sans text-[11px] uppercase tracking-[0.15em] mb-4"
              style={{ color: 'rgba(250,250,247,0.7)' }}
            >
              IAS ACADEMY
            </p>
            <p
              className="font-sans text-[13px] leading-relaxed mb-6"
              style={{ color: 'rgba(250,250,247,0.5)' }}
            >
              Elite UPSC &amp; KAS coaching in Chandralayout, Bengaluru. Guided by experience.
              Driven by results.
            </p>

            {/* Social Icons */}
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
                  className="transition-colors duration-200"
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

        {/* Separator */}
        <div
          className="h-px w-full mb-6"
          style={{ backgroundColor: 'rgba(200,150,12,0.2)' }}
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
      </div>
    </footer>
  )
}
