'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Newspaper,
  BookOpen,
  FileText,
  PenTool,
  CheckCircle2,
  Loader2,
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'

/* ─── Schema ─── */
const leadSchema = z.object({
  fullName: z.string().min(2, 'Please enter your full name'),
  email: z.string().email('Please enter a valid email address'),
  phone: z
    .string()
    .min(10, 'Please enter a valid phone number')
    .regex(/^[\d\s+\-()]+$/, 'Please enter a valid phone number'),
})

type LeadFormData = z.infer<typeof leadSchema>

/* ─── Resource Card Data ─── */
const resources = [
  {
    icon: Newspaper,
    title: 'Daily Current Affairs',
    description: 'Latest summaries updated daily',
    linkText: 'Read Now →',
  },
  {
    icon: BookOpen,
    title: 'UPSC Syllabus 2026',
    description: 'Complete syllabus PDF',
    linkText: 'Download →',
  },
  {
    icon: FileText,
    title: 'Monthly Magazine',
    description: 'May 2026 Edition',
    linkText: 'Download →',
  },
  {
    icon: PenTool,
    title: 'Practice Questions',
    description: 'Free 20-question quiz',
    linkText: 'Start Quiz →',
  },
]

/* ─── Decorative Book SVG ─── */
function BookDecorative() {
  return (
    <svg
      className="absolute top-8 right-8 w-24 h-24 opacity-[0.04] pointer-events-none"
      viewBox="0 0 100 100"
      fill="none"
      aria-hidden="true"
    >
      {/* Open book shape */}
      <path d="M15 25L50 35V85L15 75V25Z" stroke="#C8960C" strokeWidth="1" />
      <path d="M85 25L50 35V85L85 75V25Z" stroke="#C8960C" strokeWidth="1" />
      <line x1="50" y1="35" x2="50" y2="85" stroke="#C8960C" strokeWidth="0.8" />
      {/* Page lines */}
      <line x1="22" y1="38" x2="45" y2="44" stroke="#C8960C" strokeWidth="0.4" />
      <line x1="22" y1="48" x2="45" y2="54" stroke="#C8960C" strokeWidth="0.4" />
      <line x1="22" y1="58" x2="45" y2="64" stroke="#C8960C" strokeWidth="0.4" />
      <line x1="78" y1="38" x2="55" y2="44" stroke="#C8960C" strokeWidth="0.4" />
      <line x1="78" y1="48" x2="55" y2="54" stroke="#C8960C" strokeWidth="0.4" />
      <line x1="78" y1="58" x2="55" y2="64" stroke="#C8960C" strokeWidth="0.4" />
    </svg>
  )
}

/* ─── Component ─── */
export function ResourcesSection() {
  const [submitted, setSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<LeadFormData>({
    resolver: zodResolver(leadSchema),
  })

  const onSubmit = async (data: LeadFormData) => {
    try {
      const res = await fetch('/api/lead-capture', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (res.ok) {
        setSubmitted(true)
        reset()
      }
    } catch {
      // Fallback: still show success for UX
      setSubmitted(true)
      reset()
    }
  }

  return (
    <section
      id="free-resources"
      className="relative py-16 md:py-24 overflow-hidden bg-gold-pale dark:bg-[#1A1A10]"
    >
      {/* Subtle pattern overlay */}
      <div
        className="absolute inset-0 pointer-events-none pattern-dots"
        style={{ opacity: 0.4 }}
        aria-hidden="true"
      />

      {/* Decorative book SVG */}
      <BookDecorative />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-10 text-center md:mb-14">
          <span className="section-label ui-label">Free Resources</span>
          <h2
            className={cn(
              'mt-3 font-serif section-heading text-3xl md:text-4xl lg:text-5xl',
              'text-navy dark:text-ivory-cream'
            )}
          >
            Start Your UPSC Journey — Free
          </h2>
        </div>

        {/* Two-column layout */}
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          {/* ── Left: Lead capture form ── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
          >
            <p
              className="mb-6 max-w-lg text-[15px] font-sans body-text text-stone-gray dark:text-ivory-cream/70"
            >
              Get our comprehensive 60-Day UPSC Study Plan delivered to your
              inbox. No spam. No calls. Just a solid plan to start your
              preparation.
            </p>

            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center justify-center rounded-xl bg-white dark:bg-[#111827] p-8 text-center shadow-sm"
                >
                  <CheckCircle2 className="mb-3 h-14 w-14 text-green-600" />
                  <h3 className="font-serif text-2xl font-bold text-navy dark:text-ivory-cream">
                    Check your inbox!
                  </h3>
                  <p className="mt-2 text-sm text-stone-gray dark:text-ivory-cream/70">
                    Your 60-Day Study Plan is on its way.
                  </p>
                  <Button
                    variant="outline"
                    className="mt-5 border-navy dark:border-ivory-cream/30 text-navy dark:text-ivory-cream hover:bg-navy hover:text-white"
                    onClick={() => setSubmitted(false)}
                  >
                    Download Another Copy
                  </Button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit(onSubmit)}
                  className="space-y-4"
                >
                  {/* Full Name */}
                  <div className="space-y-1.5">
                    <Label htmlFor="fullName" className="text-sm font-medium text-navy dark:text-ivory-cream">
                      Full Name
                    </Label>
                    <Input
                      id="fullName"
                      placeholder="Your full name"
                      className={cn(
                        'bg-white dark:bg-[#111827]',
                        errors.fullName && 'border-red-500 focus-visible:ring-red-500/30'
                      )}
                      {...register('fullName')}
                    />
                    {errors.fullName && (
                      <p className="text-xs text-red-600">{errors.fullName.message}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div className="space-y-1.5">
                    <Label htmlFor="email" className="text-sm font-medium text-navy dark:text-ivory-cream">
                      Email Address
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      className={cn(
                        'bg-white dark:bg-[#111827]',
                        errors.email && 'border-red-500 focus-visible:ring-red-500/30'
                      )}
                      {...register('email')}
                    />
                    {errors.email && (
                      <p className="text-xs text-red-600">{errors.email.message}</p>
                    )}
                  </div>

                  {/* Phone */}
                  <div className="space-y-1.5">
                    <Label htmlFor="phone" className="text-sm font-medium text-navy dark:text-ivory-cream">
                      Phone Number
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+91 XXXXX XXXXX"
                      className={cn(
                        'bg-white dark:bg-[#111827]',
                        errors.phone && 'border-red-500 focus-visible:ring-red-500/30'
                      )}
                      {...register('phone')}
                    />
                    {errors.phone && (
                      <p className="text-xs text-red-600">{errors.phone.message}</p>
                    )}
                  </div>

                  {/* Submit */}
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full rounded-md py-3 text-base font-semibold text-navy dark:text-[#0A1428] hover:brightness-110 disabled:opacity-60 btn-gold-shimmer bg-sovereign-gold dark:bg-champagne-gold"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-2">
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Sending...
                      </span>
                    ) : (
                      'Download Free Study Plan'
                    )}
                  </Button>

                  <p className="text-[11px] leading-relaxed text-mid-gray dark:text-ivory-cream/50">
                    By downloading, you agree to receive study materials via email.
                    Unsubscribe anytime.
                  </p>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>

          {/* ── Right: Resource cards ── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="grid gap-4 sm:grid-cols-2"
          >
            {resources.map((res, i) => (
              <motion.div
                key={res.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.08 * i }}
                className={cn(
                  'group cursor-pointer rounded-xl border border-light-gray dark:border-[#1C2541] bg-white dark:bg-[#111827] p-4',
                  'transition-all duration-300',
                  'hover:-translate-y-2 hover:shadow-lg',
                  'hover:shadow-[rgba(200,150,12,0.08)]',
                  'border-l-4 border-l-transparent hover:border-l-sovereign-gold dark:hover:border-l-champagne-gold',
                  'premium-shadow'
                )}
              >
                <res.icon
                  className="mb-3 h-6 w-6 text-sovereign-gold dark:text-champagne-gold"
                  strokeWidth={1.8}
                />
                <h4 className="text-base font-sans card-title text-navy dark:text-ivory-cream">{res.title}</h4>
                <p className="mt-0.5 text-[13px] text-mid-gray dark:text-ivory-cream/50">
                  {res.description}
                </p>
                <span className="mt-2 inline-block text-sm font-medium text-sovereign-gold dark:text-champagne-gold transition-colors hover:underline">
                  {res.linkText}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
