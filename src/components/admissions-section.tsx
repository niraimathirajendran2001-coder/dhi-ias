'use client'

import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Loader2, CheckCircle, ArrowRight, ClipboardList, GraduationCap, Award, Check } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
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

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
}

const steps = [
  {
    number: 1,
    title: 'Fill Inquiry Form',
    description: 'Share your details and course interest',
    icon: ClipboardList,
  },
  {
    number: 2,
    title: 'Attend Free Demo Class',
    description: 'Experience our teaching methodology',
    icon: GraduationCap,
  },
  {
    number: 3,
    title: 'Complete Enrollment',
    description: 'Begin your civil services journey',
    icon: Award,
  },
]

const courseOptions = [
  'GS Foundation',
  'KAS Coaching',
  'Optional Subjects',
  'Test Series',
  'Current Affairs',
  'Interview Guidance',
]

const referralOptions = [
  'Google Search',
  'Social Media',
  'Friend/Referral',
  'Newspaper',
  'Walk-in',
  'Other',
]

const feeStructure = [
  { course: 'GS Foundation', duration: '12 months', fee: '₹1,20,000' },
  { course: 'KAS Coaching', duration: '8 months', fee: '₹85,000' },
  { course: 'Test Series', duration: '6 months', fee: '₹15,000' },
]

interface FormData {
  fullName: string
  phone: string
  email: string
  course: string
  city: string
  referral: string
  whatsapp: boolean
}

export default function AdmissionsSection() {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    phone: '',
    email: '',
    course: '',
    city: '',
    referral: '',
    whatsapp: false,
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  // Compute form completion progress (3 steps: personal info → course → referral)
  const progressSteps = useMemo(() => {
    const personalComplete = formData.fullName.trim() !== '' && formData.phone.trim() !== '' && formData.email.trim() !== ''
    const courseComplete = formData.course.trim() !== '' && formData.city.trim() !== ''
    const referralComplete = formData.referral.trim() !== ''
    return {
      personal: personalComplete,
      course: courseComplete,
      referral: referralComplete,
      completedCount: [personalComplete, courseComplete, referralComplete].filter(Boolean).length,
    }
  }, [formData])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const res = await fetch('/api/admission-inquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (res.ok) {
        setIsSuccess(true)
      }
    } catch {
      // Silently handle — form UI stays in loading or returns to editable
    } finally {
      setIsSubmitting(false)
    }
  }

  const updateField = (field: keyof FormData, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <section
      className="relative py-16 md:py-24 overflow-hidden bg-navy dark:bg-[#0A1428]"
    >
      {/* Subtle pattern overlay */}
      <div
        className="absolute inset-0 pointer-events-none pattern-dots"
        style={{ opacity: 0.3 }}
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
            className="inline-block mb-4 font-sans ui-label text-[11px] text-champagne-gold section-label-diamond"
          >
            ADMISSIONS
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            className="font-serif section-heading text-[36px] md:text-[44px] leading-tight mb-4 text-ivory-cream"
          >
            Your Journey Starts Here
          </motion.h2>
          <motion.div
            variants={fadeInUp}
            className="mx-auto h-[2px] w-20 bg-sovereign-gold dark:bg-champagne-gold"
          />
        </motion.div>

        {/* Three-Step Process with decorative icons and animated gold connector */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          className="mb-16"
        >
          <div className="relative flex flex-col md:flex-row items-center justify-center gap-6 md:gap-0">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                variants={scaleIn}
                className="relative flex flex-col md:flex-row items-center gap-4 md:gap-0"
              >
                <div className="flex flex-col items-center text-center relative">
                  {/* Large semi-transparent step number behind icon */}
                  <span
                    className="absolute -top-4 left-1/2 -translate-x-1/2 font-serif text-[72px] font-bold leading-none select-none pointer-events-none"
                    style={{ color: 'rgba(200,150,12,0.08)' }}
                    aria-hidden="true"
                  >
                    {String(step.number).padStart(2, '0')}
                  </span>

                  {/* Step badge with decorative icon */}
                  <div
                    className="relative flex items-center justify-center rounded-full mb-3 border-2 border-sovereign-gold dark:border-champagne-gold"
                    style={{
                      width: 56,
                      height: 56,
                      background: 'linear-gradient(135deg, rgba(200,150,12,0.1), rgba(200,150,12,0.05))',
                    }}
                  >
                    <step.icon
                      className="w-5 h-5 text-champagne-gold"
                      strokeWidth={1.8}
                    />
                    {/* Step number badge */}
                    <div
                      className="absolute -top-1 -right-1 w-5 h-5 rounded-full flex items-center justify-center font-sans text-[10px] font-bold bg-sovereign-gold dark:bg-champagne-gold text-navy dark:text-[#0A1428]"
                    >
                      {step.number}
                    </div>
                  </div>
                  <p
                    className="font-sans text-[16px] font-semibold mb-1 text-ivory-cream"
                  >
                    {step.title}
                  </p>
                  <p
                    className="font-sans text-[13px] max-w-[180px] text-ivory-cream/60"
                  >
                    {step.description}
                  </p>
                </div>
                {/* Animated gold connector arrow between steps */}
                {index < steps.length - 1 && (
                  <div className="hidden md:flex items-center px-4 relative">
                    {/* Gold animated line */}
                    <motion.div
                      className="h-[2px] w-12 bg-gradient-to-r from-sovereign-gold to-champagne-gold"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.3 + index * 0.2 }}
                    />
                    <ArrowRight
                      className="size-5 ml-1 text-champagne-gold opacity-60"
                    />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Inquiry Form */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          className="mx-auto max-w-xl mb-16"
        >
          <AnimatePresence mode="wait">
            {!isSuccess ? (
              <motion.form
                key="form"
                onSubmit={handleSubmit}
                className="space-y-5"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                {/* Step Progress Indicator */}
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className={cn('form-progress-step', progressSteps.personal && 'completed', !progressSteps.personal && progressSteps.completedCount === 0 && 'active')}>
                      {progressSteps.personal ? <Check className="w-3.5 h-3.5" /> : <span>1</span>}
                      Personal
                    </span>
                    <span className={cn('form-progress-step', progressSteps.course && 'completed', !progressSteps.personal && !progressSteps.course && 'active', progressSteps.personal && !progressSteps.course && 'active')}>
                      {progressSteps.course ? <Check className="w-3.5 h-3.5" /> : <span>2</span>}
                      Course
                    </span>
                    <span className={cn('form-progress-step', progressSteps.referral && 'completed', progressSteps.course && !progressSteps.referral && 'active')}>
                      {progressSteps.referral ? <Check className="w-3.5 h-3.5" /> : <span>3</span>}
                      Details
                    </span>
                  </div>
                  <div className="form-progress-bar">
                    <div
                      className="form-progress-bar-fill"
                      style={{ width: `${(progressSteps.completedCount / 3) * 100}%` }}
                    />
                  </div>
                </div>
                {/* Full Name */}
                <div className="space-y-2">
                  <Label
                    htmlFor="admissions-fullName"
                    className="font-sans text-[13px] font-medium text-ivory-cream"
                  >
                    Full Name
                  </Label>
                  <Input
                    id="admissions-fullName"
                    type="text"
                    required
                    placeholder="Enter your full name"
                    value={formData.fullName}
                    onChange={(e) => updateField('fullName', e.target.value)}
                    className="w-full font-sans bg-ivory-cream/8 border-ivory-cream/25 text-ivory-cream placeholder:text-ivory-cream/50 dark:bg-ivory-cream/5 dark:border-ivory-cream/15 form-focus-ring"
                  />
                </div>

                {/* Phone + WhatsApp */}
                <div className="space-y-2">
                  <Label
                    htmlFor="admissions-phone"
                    className="font-sans text-[13px] font-medium text-ivory-cream"
                  >
                    Phone Number
                  </Label>
                  <Input
                    id="admissions-phone"
                    type="tel"
                    required
                    placeholder="+91 XXXXX XXXXX"
                    value={formData.phone}
                    onChange={(e) => updateField('phone', e.target.value)}
                    className="w-full font-sans bg-ivory-cream/8 border-ivory-cream/25 text-ivory-cream placeholder:text-ivory-cream/50 dark:bg-ivory-cream/5 dark:border-ivory-cream/15 form-focus-ring"
                  />
                  <div className="flex items-center gap-2 pt-1">
                    <Checkbox
                      id="admissions-whatsapp"
                      checked={formData.whatsapp}
                      onCheckedChange={(checked) =>
                        updateField('whatsapp', checked === true)
                      }
                      className="border-ivory-cream/40 data-[state=checked]:bg-sovereign-gold data-[state=checked]:border-sovereign-gold"
                    />
                    <Label
                      htmlFor="admissions-whatsapp"
                      className="font-sans text-[13px] font-normal cursor-pointer text-ivory-cream/70"
                    >
                      Contact me on WhatsApp
                    </Label>
                  </div>
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <Label
                    htmlFor="admissions-email"
                    className="font-sans text-[13px] font-medium text-ivory-cream"
                  >
                    Email Address
                  </Label>
                  <Input
                    id="admissions-email"
                    type="email"
                    required
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={(e) => updateField('email', e.target.value)}
                    className="w-full font-sans bg-ivory-cream/8 border-ivory-cream/25 text-ivory-cream placeholder:text-ivory-cream/50 dark:bg-ivory-cream/5 dark:border-ivory-cream/15 form-focus-ring"
                  />
                </div>

                {/* Course of Interest */}
                <div className="space-y-2">
                  <Label
                    className="font-sans text-[13px] font-medium text-ivory-cream"
                  >
                    Course of Interest
                  </Label>
                  <Select
                    value={formData.course}
                    onValueChange={(val) => updateField('course', val)}
                  >
                    <SelectTrigger
                      className="w-full font-sans bg-ivory-cream/8 border-ivory-cream/25 text-ivory-cream dark:bg-ivory-cream/5 dark:border-ivory-cream/15 form-focus-ring"
                    >
                      <SelectValue placeholder="Select a course" className="text-ivory-cream/50" />
                    </SelectTrigger>
                    <SelectContent>
                      {courseOptions.map((course) => (
                        <SelectItem key={course} value={course}>
                          {course}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* City */}
                <div className="space-y-2">
                  <Label
                    htmlFor="city"
                    className="font-sans text-[13px] font-medium text-ivory-cream"
                  >
                    City / Location
                  </Label>
                  <Input
                    id="city"
                    type="text"
                    required
                    placeholder="Your city"
                    value={formData.city}
                    onChange={(e) => updateField('city', e.target.value)}
                    className="w-full font-sans bg-ivory-cream/8 border-ivory-cream/25 text-ivory-cream placeholder:text-ivory-cream/50 dark:bg-ivory-cream/5 dark:border-ivory-cream/15 form-focus-ring"
                  />
                </div>

                {/* How did you hear */}
                <div className="space-y-2">
                  <Label
                    className="font-sans text-[13px] font-medium text-ivory-cream"
                  >
                    How did you hear about us?
                  </Label>
                  <Select
                    value={formData.referral}
                    onValueChange={(val) => updateField('referral', val)}
                  >
                    <SelectTrigger
                      className="w-full font-sans bg-ivory-cream/8 border-ivory-cream/25 text-ivory-cream dark:bg-ivory-cream/5 dark:border-ivory-cream/15 form-focus-ring"
                    >
                      <SelectValue placeholder="Select an option" className="text-ivory-cream/50" />
                    </SelectTrigger>
                    <SelectContent>
                      {referralOptions.map((option) => (
                        <SelectItem key={option} value={option}>
                          {option}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Submit */}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 h-auto font-sans text-[16px] font-semibold rounded-md btn-gold-shimmer bg-sovereign-gold dark:bg-champagne-gold text-navy dark:text-[#0A1428] relative cta-pulse-dot"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <Loader2 className="size-5 animate-spin" />
                      Submitting...
                    </span>
                  ) : (
                    'Book My Free Demo Class'
                  )}
                </Button>
              </motion.form>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className="text-center py-12"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                >
                  <CheckCircle
                    className="mx-auto size-16 mb-6 text-green-500"
                  />
                </motion.div>
                <p
                  className="font-sans text-[18px] font-semibold mb-2 text-ivory-cream"
                >
                  Thank you!
                </p>
                <p
                  className="font-sans text-[15px] text-ivory-cream/80"
                >
                  We&apos;ll reach out within 2 hours.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Fee Structure with improved styling */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          className="mx-auto max-w-xl"
        >
          <h3
            className="font-serif section-heading text-[24px] mb-6 text-center text-ivory-cream"
          >
            Transparent Fee Structure
          </h3>

          <div className="overflow-hidden rounded-xl border border-ivory-cream/15">
            <table className="w-full">
              <thead>
                <tr style={{ background: 'linear-gradient(135deg, #C8960C, #E8B830)' }}>
                  <th className="font-sans text-[13px] font-semibold text-left px-4 py-3.5 text-navy">
                    Course
                  </th>
                  <th className="font-sans text-[13px] font-semibold text-left px-4 py-3.5 text-navy">
                    Duration
                  </th>
                  <th className="font-sans text-[13px] font-semibold text-right px-4 py-3.5 text-navy">
                    Fee
                  </th>
                </tr>
              </thead>
              <tbody>
                {feeStructure.map((row, index) => (
                  <tr
                    key={row.course}
                    className={cn(
                      'fee-table-row',
                      'transition-colors duration-200',
                      index % 2 === 0
                        ? 'bg-royal-navy dark:bg-[#0D1525]/80'
                        : 'bg-royal-navy/60 dark:bg-[#0D1525]/60'
                    )}
                    style={{
                      backgroundColor: index % 2 === 0 ? '#1A2E6B' : 'rgba(26,46,107,0.6)',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = 'rgba(200,150,12,0.08)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = index % 2 === 0 ? '#1A2E6B' : 'rgba(26,46,107,0.6)'
                    }}
                  >
                    <td className="font-sans text-[14px] px-4 py-3 text-ivory-cream">
                      {row.course}
                    </td>
                    <td className="font-sans text-[14px] px-4 py-3 text-ivory-cream/70">
                      {row.duration}
                    </td>
                    <td className="font-sans text-[14px] text-right px-4 py-3 font-medium text-champagne-gold">
                      {row.fee}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p
            className="font-sans text-[12px] mt-4 text-center text-ivory-cream/60"
          >
            All fees inclusive of study material, test series, and mentorship. EMI options available.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
