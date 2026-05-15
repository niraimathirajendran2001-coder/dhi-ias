'use client'

import { motion } from 'framer-motion'
import {
  MapPin,
  Phone,
  MessageCircle,
  Mail,
  Clock,
  Train,
  Landmark,
  Bus,
  ExternalLink,
  Instagram,
  Youtube,
  Facebook,
  Twitter,
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'

/* ─── Data ─── */
const hours = [
  { day: 'Mon–Fri', time: '8:00 AM – 8:00 PM' },
  { day: 'Saturday', time: '9:00 AM – 6:00 PM' },
  { day: 'Sunday', time: '10:00 AM – 2:00 PM', note: 'Doubt clearing only' },
]

const socialLinks = [
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Youtube, href: '#', label: 'YouTube' },
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Twitter, href: '#', label: 'Twitter' },
]

const googleMapsUrl =
  'https://www.google.com/maps/search/DHI+Academy+Chandralayout+Bengaluru+560040'

/* ─── Decorative Compass SVG ─── */
function CompassDecorative() {
  return (
    <svg
      className="absolute bottom-16 right-16 w-32 h-32 opacity-[0.04] pointer-events-none"
      viewBox="0 0 100 100"
      fill="none"
      aria-hidden="true"
      style={{ animation: 'rotate-slow 90s linear infinite' }}
    >
      <circle cx="50" cy="50" r="46" stroke="#C8960C" strokeWidth="0.8" />
      <circle cx="50" cy="50" r="36" stroke="#C8960C" strokeWidth="0.4" />
      <circle cx="50" cy="50" r="26" stroke="#C8960C" strokeWidth="0.3" />
      {/* Cardinal lines */}
      <line x1="50" y1="4" x2="50" y2="20" stroke="#C8960C" strokeWidth="0.6" />
      <line x1="50" y1="80" x2="50" y2="96" stroke="#C8960C" strokeWidth="0.6" />
      <line x1="4" y1="50" x2="20" y2="50" stroke="#C8960C" strokeWidth="0.6" />
      <line x1="80" y1="50" x2="96" y2="50" stroke="#C8960C" strokeWidth="0.6" />
      {/* N/S/E/W labels */}
      <text x="50" y="14" textAnchor="middle" fill="#C8960C" fontSize="6" fontFamily="serif">N</text>
      <text x="50" y="92" textAnchor="middle" fill="#C8960C" fontSize="6" fontFamily="serif">S</text>
      <text x="90" y="52" textAnchor="middle" fill="#C8960C" fontSize="6" fontFamily="serif">E</text>
      <text x="10" y="52" textAnchor="middle" fill="#C8960C" fontSize="6" fontFamily="serif">W</text>
      {/* Compass needle */}
      <polygon points="50,22 47,50 50,48 53,50" fill="#C8960C" opacity="0.3" />
      <polygon points="50,78 47,50 50,52 53,50" fill="#E8E8E4" opacity="0.2" />
      <circle cx="50" cy="50" r="3" fill="#C8960C" opacity="0.2" />
    </svg>
  )
}

/* ─── Component ─── */
export function LocationSection() {
  return (
    <section
      id="location"
      className="relative py-16 md:py-24 overflow-hidden bg-ivory-cream dark:bg-[#0D1525]"
    >
      {/* Decorative compass SVG */}
      <CompassDecorative />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          {/* ── Left: Map placeholder ── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7 }}
            className="relative flex min-h-[360px] items-center justify-center overflow-hidden rounded-2xl md:min-h-[480px] bg-navy dark:bg-[#0A1428]"
          >
            {/* Grid pattern overlay */}
            <div
              className="absolute inset-0 opacity-[0.07]"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(200,150,12,0.6) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(200,150,12,0.6) 1px, transparent 1px)
                `,
                backgroundSize: '48px 48px',
              }}
            />

            {/* Decorative road lines */}
            <div
              className="absolute inset-0 opacity-[0.04]"
              style={{
                backgroundImage: `
                  linear-gradient(35deg, transparent 40%, rgba(255,255,255,0.5) 40%, rgba(255,255,255,0.5) 40.3%, transparent 40.3%),
                  linear-gradient(-25deg, transparent 55%, rgba(255,255,255,0.5) 55%, rgba(255,255,255,0.5) 55.3%, transparent 55.3%)
                `,
              }}
            />

            {/* Subtle gradient overlay on the map */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: 'radial-gradient(ellipse at center, transparent 30%, rgba(15,31,75,0.5) 100%)',
              }}
              aria-hidden="true"
            />

            {/* Pin + content */}
            <div className="relative z-10 flex flex-col items-center text-center">
              <motion.div
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="relative"
              >
                <MapPin
                  className="mb-4 h-14 w-14 drop-shadow-lg text-champagne-gold"
                  strokeWidth={1.6}
                />
                {/* Pulsing dot on the map pin */}
                <span
                  className="absolute bottom-1 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-champagne-gold"
                  aria-hidden="true"
                />
                <motion.span
                  className="absolute bottom-1 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-champagne-gold"
                  animate={{ scale: [1, 2.5], opacity: [0.6, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'easeOut' }}
                  aria-hidden="true"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <h3 className="font-serif text-xl font-bold text-white md:text-2xl">
                  DHI Academy
                </h3>
                <p className="mt-1 text-sm text-white/70">
                  Chandra Layout, Bengaluru — 560040
                </p>

                <Button
                  asChild
                  className="mt-5 gap-2 rounded-md font-semibold btn-gold-shimmer bg-sovereign-gold dark:bg-champagne-gold text-navy dark:text-[#0A1428] hover:ring-2 hover:ring-sovereign-gold dark:hover:ring-champagne-gold hover:ring-offset-2 hover:ring-offset-navy dark:hover:ring-offset-[#0A1428] transition-all duration-300"
                >
                  <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4" />
                    Get Directions
                  </a>
                </Button>
              </motion.div>
            </div>

            {/* Corner accent — gold gradient bottom bar */}
            <div
              className="absolute bottom-0 left-0 right-0 h-1"
              style={{
                background:
                  'linear-gradient(90deg, #C8960C, #E8B830, #C8960C)',
              }}
            />
          </motion.div>

          {/* ── Right: Contact details ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7 }}
            className="flex flex-col"
          >
            <h2 className="font-serif section-heading text-3xl text-navy dark:text-ivory-cream md:text-4xl">
              Find Us
            </h2>

            {/* Address */}
            <div className="mt-5 flex items-start gap-3">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-sovereign-gold dark:text-champagne-gold" />
              <p className="text-[15px] leading-relaxed text-stone-gray dark:text-ivory-cream/70">
                4th Cross, 4th Main, Chandra Layout, 4th Main Rd, Basaveshwara HBCS Layout, 2nd Stage Rd, Maruthi Nagar, Attiguppe, Bengaluru, Karnataka 560040
              </p>
            </div>

            {/* Phone, WhatsApp, Email */}
            <div className="mt-4 space-y-3">
              <a
                href="tel:+919108333136"
                className="flex items-center gap-3 text-[15px] text-stone-gray dark:text-ivory-cream/70 transition-all duration-200 hover:text-navy dark:hover:text-ivory-cream hover:translate-x-1"
              >
                <Phone className="h-5 w-5 shrink-0 text-sovereign-gold dark:text-champagne-gold" />
                +91 91083 33136
              </a>
              <a
                href="https://wa.me/919845806645"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-[15px] text-stone-gray dark:text-ivory-cream/70 transition-all duration-200 hover:text-forest-teal hover:translate-x-1"
              >
                <MessageCircle className="h-5 w-5 shrink-0 text-forest-teal" />
                +91 98458 06645
              </a>
              <a
                href="mailto:info@dhiacademy.in"
                className="flex items-center gap-3 text-[15px] text-stone-gray dark:text-ivory-cream/70 transition-all duration-200 hover:text-navy dark:hover:text-ivory-cream hover:translate-x-1"
              >
                <Mail className="h-5 w-5 shrink-0 text-sovereign-gold dark:text-champagne-gold" />
                info@dhiacademy.in
              </a>
            </div>

            {/* Operational Hours */}
            <div className="mt-6">
              <h4 className="flex items-center gap-2 text-sm font-semibold text-navy dark:text-ivory-cream">
                <Clock className="h-4 w-4 text-sovereign-gold dark:text-champagne-gold" />
                Operational Hours
              </h4>
              <ul className="mt-2 space-y-1.5">
                {hours.map((h) => (
                  <li
                    key={h.day}
                    className="flex items-baseline justify-between text-[14px] text-stone-gray dark:text-ivory-cream/70"
                  >
                    <span className="font-medium">{h.day}</span>
                    <span className="flex items-center gap-1.5">
                      {h.time}
                      {h.note && (
                        <span className="text-[11px] text-mid-gray dark:text-ivory-cream/50">
                          ({h.note})
                        </span>
                      )}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* How to Reach */}
            <div className="mt-6">
              <h4 className="text-sm font-semibold text-navy dark:text-ivory-cream">
                How to Reach Us
              </h4>
              <ul className="mt-2 space-y-2">
                <li className="flex items-start gap-2.5 text-[14px] text-stone-gray dark:text-ivory-cream/70">
                  <Train className="mt-0.5 h-4 w-4 shrink-0 text-sovereign-gold dark:text-champagne-gold" />
                  <span>
                    Nearest Metro:{' '}
                    <span className="font-medium">
                      Chandralayout Metro Station — 500m
                    </span>
                  </span>
                </li>
                <li className="flex items-start gap-2.5 text-[14px] text-stone-gray dark:text-ivory-cream/70">
                  <Landmark className="mt-0.5 h-4 w-4 shrink-0 text-sovereign-gold dark:text-champagne-gold" />
                  <span>
                    Landmark:{' '}
                    <span className="font-medium">
                      Opposite Chandralayout Bus Stand
                    </span>
                  </span>
                </li>
                <li className="flex items-start gap-2.5 text-[14px] text-stone-gray dark:text-ivory-cream/70">
                  <Bus className="mt-0.5 h-4 w-4 shrink-0 text-sovereign-gold dark:text-champagne-gold" />
                  <span>
                    Bus Routes:{' '}
                    <span className="font-medium">BMTC Routes 335, 500, 501</span>
                  </span>
                </li>
              </ul>
            </div>

            {/* Social links with gold border on hover */}
            <div className="mt-8 flex items-center gap-4">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    'flex h-10 w-10 items-center justify-center rounded-full',
                    'border border-light-gray dark:border-[#1C2541] bg-white dark:bg-[#111827] text-navy dark:text-ivory-cream',
                    'transition-all duration-300',
                    'hover:border-sovereign-gold dark:hover:border-champagne-gold hover:text-sovereign-gold dark:hover:text-champagne-gold',
                    'hover:shadow-md hover:shadow-[rgba(200,150,12,0.12)]',
                    'hover:scale-110'
                  )}
                >
                  <s.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
