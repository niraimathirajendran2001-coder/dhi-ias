'use client'

import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const faqs = [
  {
    question: 'What courses does Aristocrat IAS Academy offer?',
    answer:
      'We offer comprehensive courses including GS Foundation (12 months), KAS Coaching (8 months), Optional Subject coaching, Test Series (6 months), Current Affairs programs, and Interview Guidance. Each course is designed with structured mentorship and proven methodology.',
  },
  {
    question: 'What is the fee structure for your courses?',
    answer:
      'Our GS Foundation course is ₹1,20,000 for 12 months, KAS Coaching is ₹85,000 for 8 months, and the Test Series is ₹15,000 for 6 months. All fees are inclusive of study material, test series, and mentorship. We also offer EMI options for student convenience.',
  },
  {
    question: 'How do I enroll in a course?',
    answer:
      'Enrollment is simple: 1) Fill out the inquiry form on our website or call us, 2) Attend a free demo class to experience our teaching methodology, 3) Complete enrollment and begin your civil services journey. Our admissions team will guide you through every step.',
  },
  {
    question: 'Who are the faculty members?',
    answer:
      'Our faculty comprises 12+ expert educators with extensive experience in UPSC coaching. They include former civil servants, subject matter specialists, and seasoned academicians who bring real-world insights and proven teaching methods to every class.',
  },
  {
    question: 'Does the academy provide study materials?',
    answer:
      'Yes, we provide comprehensive study materials for all our courses, including curated notes, current affairs compilations, reference books, and practice question sets. All study materials are included in the course fee and are regularly updated to align with the latest UPSC syllabus.',
  },
  {
    question: 'What is the success rate of Aristocrat IAS Academy?',
    answer:
      'We are proud to have 200+ selections over our 15+ years of experience. Our structured approach, expert faculty, and personalized mentorship have consistently helped aspirants clear the UPSC and KAS examinations. Many of our alumni are serving officers today.',
  },
  {
    question: 'Can working professionals join your courses?',
    answer:
      'Absolutely! We offer flexible batch timings including weekend and evening batches designed specifically for working professionals. Our GS Foundation and KAS courses have dedicated weekend schedules. Contact us to find a batch that fits your schedule.',
  },
  {
    question: 'Do you offer online classes or is it only classroom-based?',
    answer:
      'We offer both classroom and online learning modes. Our hybrid approach ensures you can attend live classes from anywhere while still benefiting from interactive sessions, doubt clearing, and mentorship. Recorded sessions are also available for revision.',
  },
  {
    question: 'Is there a demo class before enrollment?',
    answer:
      'Yes! We offer free demo classes for all our courses so you can experience our teaching methodology, interact with faculty, and make an informed decision. Simply fill out the inquiry form or call us to schedule your free demo class.',
  },
]

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
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

export function FAQSection() {
  return (
    <section
      id="faq"
      className="py-16 md:py-24"
      style={{ backgroundColor: '#FAFAF7' }}
    >
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="mb-12 text-center"
        >
          <motion.span
            variants={fadeInUp}
            className="inline-block mb-4 font-sans ui-label text-[11px]"
            style={{ color: '#C8960C' }}
          >
            FAQ
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            className="font-serif section-heading text-[36px] md:text-[44px] leading-tight mb-4"
            style={{ color: '#0F1F4B' }}
          >
            Common Questions
          </motion.h2>
          <motion.div
            variants={fadeInUp}
            className="mx-auto h-[2px] w-20"
            style={{ backgroundColor: '#C8960C' }}
          />
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="rounded-lg border px-5 overflow-hidden transition-all duration-200"
                style={{
                  borderColor: '#E8E8E4',
                  backgroundColor: '#FFFFFF',
                }}
              >
                <AccordionTrigger className="hover:no-underline py-4 text-left font-sans text-[15px] font-semibold group"
                  style={{ color: '#0F1F4B' }}
                >
                  <span className="flex-1 pr-4">{faq.question}</span>
                  <ChevronDown className="w-5 h-5 shrink-0 transition-transform duration-200 text-sovereign-gold group-[&[data-state=open]]:rotate-180" />
                </AccordionTrigger>
                <AccordionContent className="font-sans body-text text-[14px] pb-4" style={{ color: '#3D3D3A' }}>
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}
