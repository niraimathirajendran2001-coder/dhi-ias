'use client'

import { useRef, useCallback, useEffect, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import useEmblaCarousel from 'embla-carousel-react'
import { cn } from '@/lib/utils'

const testimonials = [
  {
    name: 'Rahul Menon',
    initials: 'RM',
    rank: 'AIR 34, IAS (2024)',
    quote:
      "Aristocrat didn't just teach me how to clear the exam — they showed me how to think like an officer. The mentorship here is not a feature; it's the foundation.",
  },
  {
    name: 'Priya Sharma',
    initials: 'PS',
    rank: 'AIR 112, IPS (2024)',
    quote:
      'I attempted UPSC twice before joining Aristocrat. The structured approach and personal mentorship changed everything. My mentor was available at 11 PM the night before my interview.',
  },
  {
    name: 'Ananya Krishnan',
    initials: 'AK',
    rank: 'AIR 67, IFS (2023)',
    quote:
      'The faculty at Aristocrat brings real administrative experience into the classroom. When your Polity teacher has actually drafted policy, the subject comes alive in ways no textbook can replicate.',
  },
]

export default function TestimonialsSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'center',
  })

  const [selectedIndex, setSelectedIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    emblaApi.on('select', onSelect)
    return () => {
      emblaApi.off('select', onSelect)
    }
  }, [emblaApi, onSelect])

  // Auto-advance every 6 seconds, pause on hover
  useEffect(() => {
    if (!emblaApi || isPaused) return
    const interval = setInterval(() => {
      emblaApi.scrollNext()
    }, 6000)
    return () => clearInterval(interval)
  }, [emblaApi, isPaused])

  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext()
  }, [emblaApi])

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#FAFAF7] py-16 md:py-24"
      aria-labelledby="testimonials-heading"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center md:mb-16"
        >
          {/* Section Label */}
          <p className="section-label ui-label mb-4">Success Stories</p>

          {/* Section Heading */}
          <h2
            id="testimonials-heading"
            className={cn(
              'mb-6 font-serif section-heading text-[36px] leading-tight text-[#0F1F4B] md:text-[44px]'
            )}
          >
            Voices of Achievement
          </h2>

          {/* Gold Separator */}
          <div className="mx-auto mb-6 h-[2px] w-10 bg-[#C8960C]" />
        </motion.div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Desktop Arrow Buttons */}
          <button
            onClick={scrollPrev}
            className={cn(
              'absolute -left-4 top-1/2 z-10 hidden -translate-y-1/2 md:flex',
              'h-10 w-10 items-center justify-center rounded-full',
              'border border-[#E8E8E4] bg-white text-[#0F1F4B]',
              'transition-all duration-200 hover:border-[#C8960C] hover:text-[#C8960C]',
              'focus-visible:outline-2 focus-visible:outline-[#0F1F4B]'
            )}
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <button
            onClick={scrollNext}
            className={cn(
              'absolute -right-4 top-1/2 z-10 hidden -translate-y-1/2 md:flex',
              'h-10 w-10 items-center justify-center rounded-full',
              'border border-[#E8E8E4] bg-white text-[#0F1F4B]',
              'transition-all duration-200 hover:border-[#C8960C] hover:text-[#C8960C]',
              'focus-visible:outline-2 focus-visible:outline-[#0F1F4B]'
            )}
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          {/* Embla Carousel */}
          <div ref={emblaRef} className="overflow-hidden">
            <div className="flex">
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.initials}
                  className="min-w-0 flex-shrink-0 basis-full pl-0"
                >
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.4, ease: 'easeOut' }}
                      className={cn(
                        'relative mx-auto max-w-3xl rounded-xl border border-[#E8E8E4] bg-white',
                        'p-8 md:p-12'
                      )}
                    >
                      {/* Decorative Quote Mark */}
                      <span
                        className={cn(
                          'absolute -top-2 left-6 font-serif text-[72px] leading-none',
                          'text-[#C8960C] select-none md:left-10'
                        )}
                        aria-hidden="true"
                      >
                        &ldquo;
                      </span>

                      {/* Quote Text */}
                      <blockquote
                        className={cn(
                          'mb-8 mt-6 font-serif pull-quote text-[26px]',
                          'text-[#0F1F4B] md:text-[32px]'
                        )}
                      >
                        {testimonial.quote}
                      </blockquote>

                      {/* Author Info */}
                      <div className="flex items-center gap-4">
                        {/* Avatar */}
                        <div
                          className={cn(
                            'flex h-12 w-12 items-center justify-center rounded-full',
                            'bg-[#0F1F4B] text-[#E8B830]',
                            'font-serif text-sm font-semibold'
                          )}
                        >
                          {testimonial.initials}
                        </div>

                        {/* Name & Rank */}
                        <div>
                          <p className="font-sans text-[16px] font-semibold text-[#0F1F4B]">
                            {testimonial.name}
                          </p>
                          <p className="font-sans text-[14px] text-[#3D3D3A]">
                            {testimonial.rank}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="mt-8 flex items-center justify-center gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => emblaApi?.scrollTo(index)}
              className={cn(
                'h-2.5 rounded-full transition-all duration-300',
                selectedIndex === index
                  ? 'w-8 bg-[#C8960C]'
                  : 'w-2.5 bg-[#C8960C]/30 hover:bg-[#C8960C]/60'
              )}
              aria-label={`Go to testimonial ${index + 1}`}
              aria-current={selectedIndex === index ? 'true' : undefined}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
