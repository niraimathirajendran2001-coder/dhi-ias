'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { GraduationCap, Loader2 } from 'lucide-react'
import { cn } from '@/lib/utils'
import { toast } from 'sonner'

/* ─── Course Options ─── */
const courseOptions = [
  'IPM (Integrated Prelims & Mains)',
  'Foundation Course',
  'Mains Test Series 2025',
  'Optional Test Series',
  'Year Long Mains (YLM)',
  'Year Long Prelims (YLP)',
  'ASTRA Test Series 2025',
  'Ethics (GS Paper 4)',
  'Essay Paper',
  'Current Affairs',
]

/* ─── Props ─── */
interface BookDemoModalProps {
  isOpen: boolean
  onClose: () => void
}

/* ─── Form State ─── */
interface FormData {
  fullName: string
  phone: string
  email: string
  course: string
  preferredDate: string
}

/* ─── Component ─── */
export function BookDemoModal({ isOpen, onClose }: BookDemoModalProps) {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    phone: '',
    email: '',
    course: '',
    preferredDate: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!formData.fullName || !formData.phone || !formData.email || !formData.course) {
      toast.error('Please fill in all required fields.')
      return
    }

    setIsSubmitting(true)

    try {
      const res = await fetch('/api/admission-inquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: formData.fullName,
          phone: formData.phone,
          email: formData.email,
          course: `Demo Class — ${formData.course}`,
          city: 'N/A',
          referral: 'Book Demo Modal',
          preferredDate: formData.preferredDate || 'Not specified',
        }),
      })

      if (!res.ok) {
        throw new Error('Submission failed')
      }

      toast.success('Thank you! We\'ll reach out within 2 hours to confirm your demo class.')

      // Reset form and close
      setFormData({
        fullName: '',
        phone: '',
        email: '',
        course: '',
        preferredDate: '',
      })
      onClose()
    } catch {
      toast.error('Something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent
        className={cn(
          'sm:max-w-[480px] w-[calc(100%-2rem)]',
          'bg-[#0F1F4B] dark:bg-[#0A1428]',
          'border border-[#C8960C]/30 dark:border-champagne-gold/30',
          'rounded-xl p-0 overflow-hidden',
        )}
        showCloseButton={true}
      >
        {/* Gold top border accent */}
        <div
          className="h-1 w-full"
          style={{
            background: 'linear-gradient(90deg, #C8960C, #E8B830, #C8960C)',
          }}
        />

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="p-6 sm:p-8"
            >
              {/* Header */}
              <DialogHeader className="mb-6 text-center sm:text-center">
                <div className="flex justify-center mb-3">
                  <div
                    className={cn(
                      'w-14 h-14 rounded-full flex items-center justify-center',
                      'bg-[#C8960C]/15 dark:bg-champagne-gold/15',
                    )}
                  >
                    <GraduationCap className="w-7 h-7 text-[#C8960C] dark:text-champagne-gold" />
                  </div>
                </div>
                <DialogTitle
                  className="font-serif text-[24px] sm:text-[28px] font-semibold text-[#FAFAF7] dark:text-ivory-cream leading-tight"
                >
                  Book Your Free Demo Class
                </DialogTitle>
                <DialogDescription
                  className="font-sans text-[14px] text-ivory-cream/60 dark:text-ivory-cream/50 mt-1"
                >
                  Experience our teaching methodology firsthand — no commitment required
                </DialogDescription>
              </DialogHeader>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name */}
                <div className="space-y-1.5">
                  <Label
                    htmlFor="demo-name"
                    className="font-sans text-[12px] font-semibold tracking-wide uppercase text-[#C8960C] dark:text-champagne-gold"
                  >
                    Full Name *
                  </Label>
                  <Input
                    id="demo-name"
                    type="text"
                    placeholder="Enter your full name"
                    value={formData.fullName}
                    onChange={(e) => handleChange('fullName', e.target.value)}
                    className={cn(
                      'bg-ivory-cream/5 dark:bg-ivory-cream/5',
                      'border-ivory-cream/15 dark:border-ivory-cream/10',
                      'text-[#FAFAF7] dark:text-ivory-cream',
                      'placeholder:text-ivory-cream/30 dark:placeholder:text-ivory-cream/25',
                      'focus-visible:ring-[#C8960C]/40 dark:focus-visible:ring-champagne-gold/40',
                      'focus-visible:border-[#C8960C]/50 dark:focus-visible:border-champagne-gold/50',
                      'h-11',
                    )}
                    required
                  />
                </div>

                {/* Phone */}
                <div className="space-y-1.5">
                  <Label
                    htmlFor="demo-phone"
                    className="font-sans text-[12px] font-semibold tracking-wide uppercase text-[#C8960C] dark:text-champagne-gold"
                  >
                    Phone Number *
                  </Label>
                  <Input
                    id="demo-phone"
                    type="tel"
                    placeholder="Enter your phone number"
                    value={formData.phone}
                    onChange={(e) => handleChange('phone', e.target.value)}
                    className={cn(
                      'bg-ivory-cream/5 dark:bg-ivory-cream/5',
                      'border-ivory-cream/15 dark:border-ivory-cream/10',
                      'text-[#FAFAF7] dark:text-ivory-cream',
                      'placeholder:text-ivory-cream/30 dark:placeholder:text-ivory-cream/25',
                      'focus-visible:ring-[#C8960C]/40 dark:focus-visible:ring-champagne-gold/40',
                      'focus-visible:border-[#C8960C]/50 dark:focus-visible:border-champagne-gold/50',
                      'h-11',
                    )}
                    required
                  />
                </div>

                {/* Email */}
                <div className="space-y-1.5">
                  <Label
                    htmlFor="demo-email"
                    className="font-sans text-[12px] font-semibold tracking-wide uppercase text-[#C8960C] dark:text-champagne-gold"
                  >
                    Email Address *
                  </Label>
                  <Input
                    id="demo-email"
                    type="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                    className={cn(
                      'bg-ivory-cream/5 dark:bg-ivory-cream/5',
                      'border-ivory-cream/15 dark:border-ivory-cream/10',
                      'text-[#FAFAF7] dark:text-ivory-cream',
                      'placeholder:text-ivory-cream/30 dark:placeholder:text-ivory-cream/25',
                      'focus-visible:ring-[#C8960C]/40 dark:focus-visible:ring-champagne-gold/40',
                      'focus-visible:border-[#C8960C]/50 dark:focus-visible:border-champagne-gold/50',
                      'h-11',
                    )}
                    required
                  />
                </div>

                {/* Course Interest */}
                <div className="space-y-1.5">
                  <Label
                    className="font-sans text-[12px] font-semibold tracking-wide uppercase text-[#C8960C] dark:text-champagne-gold"
                  >
                    Course Interest *
                  </Label>
                  <Select
                    value={formData.course}
                    onValueChange={(value) => handleChange('course', value)}
                  >
                    <SelectTrigger
                      className={cn(
                        'w-full h-11',
                        'bg-ivory-cream/5 dark:bg-ivory-cream/5',
                        'border-ivory-cream/15 dark:border-ivory-cream/10',
                        'text-[#FAFAF7] dark:text-ivory-cream',
                        'focus-visible:ring-[#C8960C]/40 dark:focus-visible:ring-champagne-gold/40',
                      )}
                    >
                      <SelectValue placeholder="Select a course" />
                    </SelectTrigger>
                    <SelectContent
                      className="bg-[#0F1F4B] dark:bg-[#0A1428] border-[#C8960C]/20 dark:border-champagne-gold/20"
                    >
                      {courseOptions.map((course) => (
                        <SelectItem
                          key={course}
                          value={course}
                          className="text-[#FAFAF7] dark:text-ivory-cream focus:bg-[#C8960C]/15 focus:text-[#FAFAF7] dark:focus:bg-champagne-gold/15 dark:focus:text-ivory-cream"
                        >
                          {course}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Preferred Date */}
                <div className="space-y-1.5">
                  <Label
                    htmlFor="demo-date"
                    className="font-sans text-[12px] font-semibold tracking-wide uppercase text-[#C8960C] dark:text-champagne-gold"
                  >
                    Preferred Date
                  </Label>
                  <Input
                    id="demo-date"
                    type="date"
                    value={formData.preferredDate}
                    onChange={(e) => handleChange('preferredDate', e.target.value)}
                    className={cn(
                      'bg-ivory-cream/5 dark:bg-ivory-cream/5',
                      'border-ivory-cream/15 dark:border-ivory-cream/10',
                      'text-[#FAFAF7] dark:text-ivory-cream',
                      'focus-visible:ring-[#C8960C]/40 dark:focus-visible:ring-champagne-gold/40',
                      'focus-visible:border-[#C8960C]/50 dark:focus-visible:border-champagne-gold/50',
                      'h-11',
                      '[&::-webkit-calendar-picker-indicator]:invert',
                    )}
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className={cn(
                    'w-full h-12 mt-2',
                    'font-sans text-[15px] font-semibold tracking-wide',
                    'rounded-lg',
                    'transition-all duration-300',
                    'btn-gold-shimmer',
                    'disabled:opacity-60 disabled:cursor-not-allowed',
                  )}
                  style={{
                    background: 'linear-gradient(135deg, #C8960C, #E8B830)',
                    color: '#0F1F4B',
                  }}
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Booking...
                    </span>
                  ) : (
                    'Book My Free Demo Class'
                  )}
                </Button>

                {/* Privacy Note */}
                <p className="font-sans text-[11px] text-center text-ivory-cream/35 dark:text-ivory-cream/30 mt-2">
                  We respect your privacy. No spam, ever.
                </p>
              </form>
            </motion.div>
          )}
        </AnimatePresence>
      </DialogContent>
    </Dialog>
  )
}
