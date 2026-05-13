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
  'https://www.google.com/maps/search/Aristocrat+IAS+Academy+Chandralayout+Bengaluru+560040'

/* ─── Component ─── */
export function LocationSection() {
  return (
    <section
      id="location"
      className="py-16 md:py-24"
      style={{ backgroundColor: '#FAFAF7' }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          {/* ── Left: Map placeholder ── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7 }}
            className="relative flex min-h-[360px] items-center justify-center overflow-hidden rounded-2xl md:min-h-[480px]"
            style={{ backgroundColor: '#0F1F4B' }}
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

            {/* Pin + content */}
            <div className="relative z-10 flex flex-col items-center text-center">
              <motion.div
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <MapPin
                  className="mb-4 h-14 w-14 drop-shadow-lg"
                  style={{ color: '#E8B830' }}
                  strokeWidth={1.6}
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <h3 className="font-serif text-xl font-bold text-white md:text-2xl">
                  Aristocrat IAS Academy
                </h3>
                <p className="mt-1 text-sm text-white/70">
                  Chandralayout, Bengaluru — 560040
                </p>

                <Button
                  asChild
                  className="mt-5 gap-2 rounded-md font-semibold"
                  style={{ backgroundColor: '#C8960C', color: '#0F1F4B' }}
                >
                  <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4" />
                    Get Directions
                  </a>
                </Button>
              </motion.div>
            </div>

            {/* Corner accent */}
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
            <h2 className="font-serif text-3xl font-bold text-navy md:text-4xl">
              Find Us
            </h2>

            {/* Address */}
            <div className="mt-5 flex items-start gap-3">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-sovereign-gold" />
              <p className="text-[15px] leading-relaxed text-stone-gray">
                Aristocrat IAS Academy, Chandralayout, Bengaluru — 560040,
                Karnataka
              </p>
            </div>

            {/* Phone, WhatsApp, Email */}
            <div className="mt-4 space-y-3">
              <a
                href="tel:+9180XXXX0000"
                className="flex items-center gap-3 text-[15px] text-stone-gray transition-colors hover:text-navy"
              >
                <Phone className="h-5 w-5 shrink-0 text-sovereign-gold" />
                +91 80 XXXX XXXX
              </a>
              <a
                href="https://wa.me/9198XXX00000"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-[15px] text-stone-gray transition-colors hover:text-forest-teal"
              >
                <MessageCircle className="h-5 w-5 shrink-0 text-forest-teal" />
                +91 98XXX XXXXX
              </a>
              <a
                href="mailto:info@aristocratiasacademy.in"
                className="flex items-center gap-3 text-[15px] text-stone-gray transition-colors hover:text-navy"
              >
                <Mail className="h-5 w-5 shrink-0 text-sovereign-gold" />
                info@aristocratiasacademy.in
              </a>
            </div>

            {/* Operational Hours */}
            <div className="mt-6">
              <h4 className="flex items-center gap-2 text-sm font-semibold text-navy">
                <Clock className="h-4 w-4 text-sovereign-gold" />
                Operational Hours
              </h4>
              <ul className="mt-2 space-y-1.5">
                {hours.map((h) => (
                  <li
                    key={h.day}
                    className="flex items-baseline justify-between text-[14px] text-stone-gray"
                  >
                    <span className="font-medium">{h.day}</span>
                    <span className="flex items-center gap-1.5">
                      {h.time}
                      {h.note && (
                        <span className="text-[11px] text-mid-gray">
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
              <h4 className="text-sm font-semibold text-navy">
                How to Reach Us
              </h4>
              <ul className="mt-2 space-y-2">
                <li className="flex items-start gap-2.5 text-[14px] text-stone-gray">
                  <Train className="mt-0.5 h-4 w-4 shrink-0 text-sovereign-gold" />
                  <span>
                    Nearest Metro:{' '}
                    <span className="font-medium">
                      Chandralayout Metro Station — 500m
                    </span>
                  </span>
                </li>
                <li className="flex items-start gap-2.5 text-[14px] text-stone-gray">
                  <Landmark className="mt-0.5 h-4 w-4 shrink-0 text-sovereign-gold" />
                  <span>
                    Landmark:{' '}
                    <span className="font-medium">
                      Opposite Chandralayout Bus Stand
                    </span>
                  </span>
                </li>
                <li className="flex items-start gap-2.5 text-[14px] text-stone-gray">
                  <Bus className="mt-0.5 h-4 w-4 shrink-0 text-sovereign-gold" />
                  <span>
                    Bus Routes:{' '}
                    <span className="font-medium">BMTC Routes 335, 500, 501</span>
                  </span>
                </li>
              </ul>
            </div>

            {/* Social links */}
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
                    'border border-light-gray bg-white text-navy',
                    'transition-all duration-200',
                    'hover:border-sovereign-gold hover:text-sovereign-gold hover:shadow-sm'
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
