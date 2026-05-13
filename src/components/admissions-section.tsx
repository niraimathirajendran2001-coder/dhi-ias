'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Loader2, CheckCircle, ArrowRight } from 'lucide-react'
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
  },
  {
    number: 2,
    title: 'Attend Free Demo Class',
    description: 'Experience our teaching methodology',
  },
  {
    number: 3,
    title: 'Complete Enrollment',
    description: 'Begin your civil services journey',
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
      id="admissions"
      className="py-16 md:py-24"
      style={{ backgroundColor: '#0F1F4B' }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
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
            className="inline-block mb-4 font-sans text-[11px] font-semibold uppercase tracking-[0.15em]"
            style={{ color: '#E8B830' }}
          >
            ADMISSIONS
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            className="font-serif text-[36px] md:text-[44px] font-bold leading-tight mb-4"
            style={{ color: '#FAFAF7' }}
          >
            Your Journey Starts Here
          </motion.h2>
          <motion.div
            variants={fadeInUp}
            className="mx-auto h-[2px] w-20"
            style={{ backgroundColor: '#C8960C' }}
          />
        </motion.div>

        {/* Three-Step Process */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          className="mb-16"
        >
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-0">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                variants={scaleIn}
                className="flex flex-col md:flex-row items-center gap-4 md:gap-0"
              >
                <div className="flex flex-col items-center text-center">
                  <div
                    className="flex items-center justify-center rounded-full mb-3"
                    style={{
                      width: 40,
                      height: 40,
                      border: '2px solid #C8960C',
                    }}
                  >
                    <span
                      className="font-sans text-[16px] font-semibold"
                      style={{ color: '#C8960C' }}
                    >
                      {step.number}
                    </span>
                  </div>
                  <p
                    className="font-sans text-[16px] font-semibold mb-1"
                    style={{ color: '#FAFAF7' }}
                  >
                    {step.title}
                  </p>
                  <p
                    className="font-sans text-[13px] max-w-[180px]"
                    style={{ color: 'rgba(250,250,247,0.6)' }}
                  >
                    {step.description}
                  </p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden md:flex items-center px-6 pt-0 md:pt-[-24px]">
                    <ArrowRight
                      className="size-6"
                      style={{ color: '#C8960C', opacity: 0.4 }}
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
                {/* Full Name */}
                <div className="space-y-2">
                  <Label
                    htmlFor="fullName"
                    className="font-sans text-[13px] font-medium"
                    style={{ color: '#FAFAF7' }}
                  >
                    Full Name
                  </Label>
                  <Input
                    id="fullName"
                    type="text"
                    required
                    placeholder="Enter your full name"
                    value={formData.fullName}
                    onChange={(e) => updateField('fullName', e.target.value)}
                    className="w-full font-sans"
                    style={{
                      backgroundColor: 'rgba(250,250,247,0.08)',
                      borderColor: 'rgba(232,232,228,0.25)',
                      color: '#FAFAF7',
                    }}
                  />
                </div>

                {/* Phone + WhatsApp */}
                <div className="space-y-2">
                  <Label
                    htmlFor="phone"
                    className="font-sans text-[13px] font-medium"
                    style={{ color: '#FAFAF7' }}
                  >
                    Phone Number
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    required
                    placeholder="+91 XXXXX XXXXX"
                    value={formData.phone}
                    onChange={(e) => updateField('phone', e.target.value)}
                    className="w-full font-sans"
                    style={{
                      backgroundColor: 'rgba(250,250,247,0.08)',
                      borderColor: 'rgba(232,232,228,0.25)',
                      color: '#FAFAF7',
                    }}
                  />
                  <div className="flex items-center gap-2 pt-1">
                    <Checkbox
                      id="whatsapp"
                      checked={formData.whatsapp}
                      onCheckedChange={(checked) =>
                        updateField('whatsapp', checked === true)
                      }
                      className="border-[rgba(232,232,228,0.4)] data-[state=checked]:bg-[#C8960C] data-[state=checked]:border-[#C8960C]"
                    />
                    <Label
                      htmlFor="whatsapp"
                      className="font-sans text-[13px] font-normal cursor-pointer"
                      style={{ color: 'rgba(250,250,247,0.7)' }}
                    >
                      Contact me on WhatsApp
                    </Label>
                  </div>
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <Label
                    htmlFor="email"
                    className="font-sans text-[13px] font-medium"
                    style={{ color: '#FAFAF7' }}
                  >
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={(e) => updateField('email', e.target.value)}
                    className="w-full font-sans"
                    style={{
                      backgroundColor: 'rgba(250,250,247,0.08)',
                      borderColor: 'rgba(232,232,228,0.25)',
                      color: '#FAFAF7',
                    }}
                  />
                </div>

                {/* Course of Interest */}
                <div className="space-y-2">
                  <Label
                    className="font-sans text-[13px] font-medium"
                    style={{ color: '#FAFAF7' }}
                  >
                    Course of Interest
                  </Label>
                  <Select
                    value={formData.course}
                    onValueChange={(val) => updateField('course', val)}
                  >
                    <SelectTrigger
                      className="w-full font-sans"
                      style={{
                        backgroundColor: 'rgba(250,250,247,0.08)',
                        borderColor: 'rgba(232,232,228,0.25)',
                        color: formData.course ? '#FAFAF7' : 'rgba(250,250,247,0.5)',
                      }}
                    >
                      <SelectValue placeholder="Select a course" />
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
                    className="font-sans text-[13px] font-medium"
                    style={{ color: '#FAFAF7' }}
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
                    className="w-full font-sans"
                    style={{
                      backgroundColor: 'rgba(250,250,247,0.08)',
                      borderColor: 'rgba(232,232,228,0.25)',
                      color: '#FAFAF7',
                    }}
                  />
                </div>

                {/* How did you hear */}
                <div className="space-y-2">
                  <Label
                    className="font-sans text-[13px] font-medium"
                    style={{ color: '#FAFAF7' }}
                  >
                    How did you hear about us?
                  </Label>
                  <Select
                    value={formData.referral}
                    onValueChange={(val) => updateField('referral', val)}
                  >
                    <SelectTrigger
                      className="w-full font-sans"
                      style={{
                        backgroundColor: 'rgba(250,250,247,0.08)',
                        borderColor: 'rgba(232,232,228,0.25)',
                        color: formData.referral ? '#FAFAF7' : 'rgba(250,250,247,0.5)',
                      }}
                    >
                      <SelectValue placeholder="Select an option" />
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
                  className="w-full py-4 h-auto font-sans text-[16px] font-semibold rounded-md"
                  style={{
                    backgroundColor: '#C8960C',
                    color: '#0F1F4B',
                  }}
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
                    className="mx-auto size-16 mb-6"
                    style={{ color: '#22C55E' }}
                  />
                </motion.div>
                <p
                  className="font-sans text-[18px] font-semibold mb-2"
                  style={{ color: '#FAFAF7' }}
                >
                  Thank you!
                </p>
                <p
                  className="font-sans text-[15px]"
                  style={{ color: 'rgba(250,250,247,0.8)' }}
                >
                  We&apos;ll reach out within 2 hours.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Fee Structure */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          className="mx-auto max-w-xl"
        >
          <h3
            className="font-serif text-[24px] font-semibold mb-6 text-center"
            style={{ color: '#FAFAF7' }}
          >
            Transparent Fee Structure
          </h3>

          <div className="overflow-hidden rounded-lg border" style={{ borderColor: 'rgba(232,232,228,0.15)' }}>
            <table className="w-full">
              <thead>
                <tr style={{ backgroundColor: '#C8960C' }}>
                  <th className="font-sans text-[13px] font-semibold text-left px-4 py-3" style={{ color: '#0F1F4B' }}>
                    Course
                  </th>
                  <th className="font-sans text-[13px] font-semibold text-left px-4 py-3" style={{ color: '#0F1F4B' }}>
                    Duration
                  </th>
                  <th className="font-sans text-[13px] font-semibold text-right px-4 py-3" style={{ color: '#0F1F4B' }}>
                    Fee
                  </th>
                </tr>
              </thead>
              <tbody>
                {feeStructure.map((row, index) => (
                  <tr
                    key={row.course}
                    style={{
                      backgroundColor: index % 2 === 0 ? '#1A2E6B' : 'rgba(26,46,107,0.6)',
                    }}
                  >
                    <td className="font-sans text-[14px] px-4 py-3" style={{ color: '#FAFAF7' }}>
                      {row.course}
                    </td>
                    <td className="font-sans text-[14px] px-4 py-3" style={{ color: '#FAFAF7' }}>
                      {row.duration}
                    </td>
                    <td className="font-sans text-[14px] text-right px-4 py-3 font-medium" style={{ color: '#FAFAF7' }}>
                      {row.fee}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p
            className="font-sans text-[12px] mt-4 text-center"
            style={{ color: 'rgba(250,250,247,0.6)' }}
          >
            All fees inclusive of study material, test series, and mentorship. EMI options available.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
