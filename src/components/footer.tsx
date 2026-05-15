'use client'

import { useState } from 'react'
import { motion, type Variants } from 'framer-motion'
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
  Loader2,
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { toast } from 'sonner'

const quickLinks = [
  { name: 'About Us', href: '/about' },
  { name: 'Courses', href: '/courses' },
  { name: 'Faculty', href: '/about#team' },
  { name: 'Results & Toppers', href: '/results' },
  { name: 'Contact Us', href: '/contact' },
]

const courseLinks = [
  { name: 'IPM (Integrated Prelims & Mains)', href: '/courses' },
  { name: 'Foundation Course', href: '/courses' },
  { name: 'Mains Test Series', href: '/courses' },
  { name: 'Optional Test Series', href: '/courses' },
  { name: 'Current Affairs', href: '/courses' },
  { name: 'Interview Guidance', href: '/courses' },
]

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
}

export default function Footer() {
  const [email, setEmail] = useState('')
  const [isSubscribing, setIsSubscribing] = useState(false)

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email || !email.includes('@')) {
      toast.error('Please enter a valid email address.')
      return
    }
    setIsSubscribing(true)
    try {
      const res = await fetch('/api/lead-capture', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: 'Newsletter Subscriber',
          email,
          phone: 'N/A',
        }),
      })
      if (res.ok) {
        toast.success('Thank you for subscribing! Check your inbox for UPSC tips.')
        setEmail('')
      } else {
        toast.error('Something went wrong. Please try again.')
      }
    } catch {
      toast.error('Something went wrong. Please try again.')
    } finally {
      setIsSubscribing(false)
    }
  }

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
            fill="#1C1C1E"
            opacity="0.5"
          />
        </svg>
      </div>

      {/* Subtle gradient background */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(180deg, #1C1C1E 0%, #151517 60%, #0F0F11 100%)',
        }}
      />

      {/* Decorative top border — gold gradient line */}
      <div
        className="absolute top-0 left-0 right-0 h-[2px] z-10"
        style={{
          background: 'linear-gradient(90deg, transparent 5%, #E31837, #FF2D4B, #E31837, transparent 95%)',
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
            background: 'linear-gradient(135deg, rgba(227,24,55,0.1) 0%, rgba(227,24,55,0.05) 50%, rgba(255,45,75,0.08) 100%)',
            border: '1px solid rgba(227,24,55,0.15)',
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
              <form onSubmit={handleNewsletterSubmit} className="flex items-center gap-2 w-full sm:w-auto">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 sm:w-[260px] h-11 px-4 rounded-lg bg-white/5 border border-sovereign-gold/20 text-ivory-cream text-sm font-sans placeholder:text-ivory-cream/30 focus:outline-none focus:border-sovereign-gold/50 focus:ring-1 focus:ring-sovereign-gold/30 transition-all"
                />
                <button
                  type="submit"
                  disabled={isSubscribing}
                  className="h-11 px-5 rounded-lg bg-sovereign-gold dark:bg-champagne-gold text-navy dark:text-[#0A1428] font-semibold text-sm font-sans btn-gold-shimmer transition-all duration-200 hover:bg-champagne-gold dark:hover:bg-[#F5D060] disabled:opacity-60"
                >
                  {isSubscribing ? <Loader2 className="size-5 animate-spin" /> : 'Subscribe'}
                </button>
              </form>
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
                src="/dhi-logo.jpg"
                alt="DHI Academy Logo"
                width={48}
                height={48}
                className="rounded-full"
              />
              <div>
                <h2
                  className="font-serif text-[24px] font-semibold leading-none text-champagne-gold"
                >
                  DHI
                </h2>
                <p
                  className="font-sans text-[11px] uppercase tracking-[0.15em] mt-0.5 text-ivory-cream/70"
                >
                  ACADEMY
                </p>
              </div>
            </div>
            <p
              className="font-sans text-[13px] leading-relaxed mb-6 text-ivory-cream/50"
            >
              UPSC & KAS coaching in Chandralayout, Bengaluru. Transforming Lives through structured mentorship and proven results.
            </p>

            {/* Social Icons with gold background circle on hover */}
            <div className="flex items-center gap-4">
              {[
                { Icon: Instagram, label: 'Instagram', href: 'https://www.instagram.com/dhiacademy/' },
                { Icon: Youtube, label: 'YouTube', href: 'https://www.youtube.com/@DhiAcademy' },
                { Icon: Facebook, label: 'Facebook', href: 'https://www.facebook.com/DhiAcademy' },
                { Icon: Twitter, label: 'Twitter', href: 'https://twitter.com/DhiAcademy' },
              ].map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className={cn(
                    'flex items-center justify-center size-9 rounded-full',
                    'transition-all duration-300',
                    'text-ivory-cream hover:text-navy dark:hover:text-[#0A1428]',
                    'hover:bg-sovereign-gold dark:hover:bg-champagne-gold',
                    'hover:scale-110 hover:shadow-md hover:shadow-[rgba(227,24,55,0.3)]'
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
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="font-sans text-[14px] transition-colors duration-200 text-ivory-cream/70 hover:text-sovereign-gold dark:hover:text-champagne-gold footer-link-animated"
                  >
                    {link.name}
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
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="font-sans text-[14px] transition-colors duration-200 text-ivory-cream/70 hover:text-sovereign-gold dark:hover:text-champagne-gold footer-link-animated"
                  >
                    {link.name}
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
                  Bus Stand, 1561, 2nd Floor, 8th Cross Rd, above SBI Bank, opposite Chandra Layout, Bengaluru, Karnataka 560040
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="size-4 mt-0.5 flex-shrink-0 text-sovereign-gold dark:text-champagne-gold" />
                <span
                  className="font-sans text-[14px] text-ivory-cream/70"
                >
                  +91 91083 33136
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="size-4 mt-0.5 flex-shrink-0 text-sovereign-gold dark:text-champagne-gold" />
                <span
                  className="font-sans text-[14px] text-ivory-cream/70"
                >
                  info@dhiacademy.in
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
              href="/contact"
              className="inline-flex items-center gap-1 mt-5 font-sans text-[14px] font-medium transition-colors duration-200 text-sovereign-gold dark:text-champagne-gold hover:text-champagne-gold footer-link-animated"
            >
              Book a Demo Class
              <ArrowRight className="size-4" />
            </a>
          </motion.div>
        </div>

        {/* Separator — gold gradient */}
        <div
          className="h-px w-full mb-6"
          style={{ background: 'linear-gradient(90deg, transparent, rgba(227,24,55,0.3), rgba(255,45,75,0.3), rgba(227,24,55,0.3), transparent)' }}
        />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p
            className="font-sans text-[12px] text-ivory-cream/40"
          >
            &copy; 2026 DHI Academy. All rights reserved.
          </p>
          <p
            className="font-serif italic text-[13px] order-first md:order-none text-champagne-gold/60"
          >
            Transforming Lives.
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
