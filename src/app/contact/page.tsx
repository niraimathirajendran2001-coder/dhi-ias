'use client'

import { useState } from 'react'
import { Header } from '@/components/header'
import Footer from '@/components/footer'
import { BreadcrumbNav } from '@/components/breadcrumb-nav'
import { motion, type Variants } from 'framer-motion'
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  Loader2,
  CheckCircle2,
  Instagram,
  Youtube,
  Facebook,
  Twitter,
  MessageCircle,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { toast } from 'sonner'

/* ------------------------------------------------------------------ */
/*  Constants                                                          */
/* ------------------------------------------------------------------ */

const contactInfo = [
  {
    icon: MapPin,
    label: 'Address',
    value: 'Bus Stand, 1561, 2nd Floor, 8th Cross Rd, above SBI Bank, opposite Chandra Layout, Bengaluru, Karnataka 560040',
    href: 'https://maps.google.com/?q=DHI+Academy+Chandra+Layout+Bengaluru',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 91083 33136',
    href: 'tel:+919108333136',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'info@dhiacademy.in',
    href: 'mailto:info@dhiacademy.in',
  },
  {
    icon: Clock,
    label: 'Office Hours',
    value: 'Mon–Sat: 8 AM – 8 PM',
    href: null,
  },
]

const socialLinks = [
  { icon: Instagram, label: 'Instagram', href: 'https://www.instagram.com/dhiacademy/' },
  { icon: Youtube, label: 'YouTube', href: 'https://www.youtube.com/@DhiAcademy' },
  { icon: Facebook, label: 'Facebook', href: 'https://www.facebook.com/DhiAcademy' },
  { icon: Twitter, label: 'Twitter', href: 'https://twitter.com/DhiAcademy' },
]

/* ------------------------------------------------------------------ */
/*  Animation Variants                                                 */
/* ------------------------------------------------------------------ */

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
}

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!formData.name || !formData.phone || !formData.message) {
      toast.error('Please fill in all required fields.')
      return
    }

    setIsSubmitting(true)

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (res.ok) {
        toast.success('Message sent successfully! We will get back to you shortly.')
        setIsSuccess(true)
        setFormData({ name: '', email: '', phone: '', message: '' })
        setTimeout(() => setIsSuccess(false), 5000)
      } else {
        toast.error('Something went wrong. Please try again.')
      }
    } catch {
      toast.error('Something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-20">
        {/* ── Hero Section ── */}
        <section className="relative py-20 md:py-28 bg-navy text-ivory-cream overflow-hidden">
          <div className="absolute inset-0 pointer-events-none gradient-mesh-hero" />
          <div className="absolute inset-0 pointer-events-none light-sweep" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="font-sans ui-label text-sovereign-gold dark:text-champagne-gold text-xs tracking-widest mb-4"
            >
              Get in Touch
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-serif display-headline text-4xl sm:text-5xl md:text-6xl text-ivory-cream mb-6"
            >
              Contact Us
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-sans body-text text-ivory-cream/60 max-w-2xl mx-auto"
            >
              Have questions about our courses or want to schedule a visit? We&apos;d love to hear
              from you. Reach out and we&apos;ll get back to you as soon as possible.
            </motion.p>
          </div>
        </section>

        <BreadcrumbNav items={[{ label: 'Contact Us' }]} />

        {/* ── Contact Form + Info ── */}
        <section className="py-16 md:py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
              {/* Left: Contact Form */}
              <motion.div
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-50px' }}
                className="lg:col-span-3"
              >
                <div className="p-6 sm:p-8 rounded-xl bg-white dark:bg-card border border-light-gray dark:border-border premium-shadow">
                  <h2 className="font-serif section-heading text-2xl text-navy dark:text-ivory-cream mb-2">
                    Send Us a Message
                  </h2>
                  <p className="font-sans text-sm text-mid-gray dark:text-ivory-cream/50 mb-8">
                    Fill out the form below and we&apos;ll get back to you within 24 hours.
                  </p>

                  {isSuccess && (
                    <div className="mb-6 p-4 rounded-lg bg-forest-teal/10 border border-forest-teal/20 flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-forest-teal flex-shrink-0" />
                      <p className="font-sans text-sm text-forest-teal">
                        Message sent successfully! We will get back to you shortly.
                      </p>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="font-sans text-sm font-medium text-navy dark:text-ivory-cream">
                          Full Name <span className="text-sovereign-gold">*</span>
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your full name"
                          className="h-11 font-sans"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone" className="font-sans text-sm font-medium text-navy dark:text-ivory-cream">
                          Phone <span className="text-sovereign-gold">*</span>
                        </Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+91 00000 00000"
                          className="h-11 font-sans"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="font-sans text-sm font-medium text-navy dark:text-ivory-cream">
                        Email
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        className="h-11 font-sans"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="font-sans text-sm font-medium text-navy dark:text-ivory-cream">
                        Message <span className="text-sovereign-gold">*</span>
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="How can we help you?"
                        rows={5}
                        className="font-sans resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto bg-sovereign-gold dark:bg-champagne-gold text-ivory-cream dark:text-navy hover:bg-champagne-gold dark:hover:bg-[#F5D060] font-semibold rounded-lg h-12 px-8 btn-gold-shimmer"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4 mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </div>
              </motion.div>

              {/* Right: Contact Info */}
              <motion.div
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-50px' }}
                className="lg:col-span-2 space-y-6"
              >
                {/* Contact Details */}
                <div className="p-6 sm:p-8 rounded-xl bg-white dark:bg-card border border-light-gray dark:border-border">
                  <h3 className="font-serif text-xl font-semibold text-navy dark:text-ivory-cream mb-6">
                    Contact Information
                  </h3>

                  <div className="space-y-5">
                    {contactInfo.map((info) => (
                      <div key={info.label} className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gold-pale dark:bg-sovereign-gold/10 flex items-center justify-center">
                          <info.icon className="w-5 h-5 text-sovereign-gold dark:text-champagne-gold" />
                        </div>
                        <div>
                          <p className="font-sans text-xs font-semibold uppercase tracking-wider text-mid-gray dark:text-ivory-cream/40 mb-0.5">
                            {info.label}
                          </p>
                          {info.href ? (
                            <a
                              href={info.href}
                              target={info.href.startsWith('http') ? '_blank' : undefined}
                              rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                              className="font-sans text-sm text-navy dark:text-ivory-cream hover:text-sovereign-gold dark:hover:text-champagne-gold transition-colors gold-underline-hover"
                            >
                              {info.value}
                            </a>
                          ) : (
                            <p className="font-sans text-sm text-navy dark:text-ivory-cream">
                              {info.value}
                            </p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Social Links */}
                <div className="p-6 sm:p-8 rounded-xl bg-white dark:bg-card border border-light-gray dark:border-border">
                  <h3 className="font-serif text-xl font-semibold text-navy dark:text-ivory-cream mb-4">
                    Follow Us
                  </h3>
                  <div className="flex items-center gap-3">
                    {socialLinks.map((social) => (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.label}
                        className="flex items-center justify-center w-10 h-10 rounded-full bg-gold-pale dark:bg-sovereign-gold/10 text-sovereign-gold dark:text-champagne-gold hover:bg-sovereign-gold dark:hover:bg-champagne-gold hover:text-ivory-cream dark:hover:text-navy transition-all duration-300 hover:scale-110"
                      >
                        <social.icon className="w-4 h-4" />
                      </a>
                    ))}
                  </div>
                </div>

                {/* Quick Action */}
                <div className="p-6 rounded-xl bg-navy dark:bg-[#0A1428] text-ivory-cream">
                  <h3 className="font-serif text-lg font-semibold text-ivory-cream mb-2">
                    Prefer to Chat?
                  </h3>
                  <p className="font-sans text-sm text-ivory-cream/60 mb-4">
                    Reach out on WhatsApp for instant responses during office hours.
                  </p>
                  <a
                    href="https://wa.me/919108333136?text=Hi%2C%20I%27d%20like%20to%20know%20more%20about%20DHI%20Academy."
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold rounded-lg h-11">
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Chat on WhatsApp
                    </Button>
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── Google Map ── */}
        <section className="py-16 md:py-20 bg-light-gray/30 dark:bg-card/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-center mb-10"
            >
              <p className="font-sans section-label text-sovereign-gold dark:text-champagne-gold mb-3">
                Find Us
              </p>
              <h2 className="font-serif section-heading text-3xl sm:text-4xl text-navy dark:text-ivory-cream">
                Visit Our <span className="text-sovereign-gold dark:text-champagne-gold">Campus</span>
              </h2>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="rounded-xl overflow-hidden border border-light-gray dark:border-border premium-shadow"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.6!2d77.55!3d12.95!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3d1c2e0f0a0d%3A0x0!2sChandra+Layout%2C+Bengaluru!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="DHI Academy Location - Chandra Layout, Bengaluru"
                className="w-full"
              />
            </motion.div>

            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mt-6 text-center"
            >
              <a
                href="https://maps.google.com/?q=DHI+Academy+Chandra+Layout+Bengaluru"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-sans text-sm font-semibold text-sovereign-gold dark:text-champagne-gold hover:text-deep-crimson dark:hover:text-champagne-gold transition-colors gold-underline-hover"
              >
                <MapPin className="w-4 h-4" />
                Get Directions on Google Maps
              </a>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
