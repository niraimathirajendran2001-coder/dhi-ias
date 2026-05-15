'use client'

import { Header } from '@/components/header'
import Footer from '@/components/footer'
import { BreadcrumbNav } from '@/components/breadcrumb-nav'
import { motion, type Variants } from 'framer-motion'
import {
  BookOpen,
  GraduationCap,
  ClipboardList,
  FileText,
  Calendar,
  Target,
  Zap,
  Heart,
  PenTool,
  Newspaper,
  TreePine,
  Brain,
  Rocket,
  Crosshair,
  Mic,
  ChevronRight,
  ArrowRight,
} from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

/* ------------------------------------------------------------------ */
/*  Course Data                                                        */
/* ------------------------------------------------------------------ */

interface Course {
  title: string
  description: string
  icon: React.ComponentType<{ className?: string }>
  category: 'foundation' | 'test-series' | 'specialized' | 'crash-course'
  highlight?: boolean
}

const courses: Course[] = [
  {
    title: 'Foundation',
    description: 'Complete GS foundation for beginners. Build a strong academic base with comprehensive coverage of all General Studies subjects.',
    icon: BookOpen,
    category: 'foundation',
    highlight: true,
  },
  {
    title: 'IPM (Integrated Prelims and Mains)',
    description: 'Combined preparation for both stages. A holistic approach that prepares you for Prelims and Mains simultaneously.',
    icon: GraduationCap,
    category: 'foundation',
    highlight: true,
  },
  {
    title: 'Mains Test Series 2025',
    description: 'Comprehensive mains answer writing practice with expert evaluation and detailed feedback to improve your score.',
    icon: ClipboardList,
    category: 'test-series',
  },
  {
    title: 'Optional Test Series',
    description: 'Sociology, PSIR, Geography optionals. Subject-specific test series with in-depth answer evaluation.',
    icon: FileText,
    category: 'test-series',
  },
  {
    title: 'Year Long Mains (YLM)',
    description: 'Year-long mains preparation program. Consistent practice and guidance throughout the year for Mains excellence.',
    icon: Calendar,
    category: 'test-series',
  },
  {
    title: 'Year Long Prelims (YLP)',
    description: 'Year-long prelims preparation program. Systematic coverage and revision to ace the Prelims exam.',
    icon: Target,
    category: 'test-series',
  },
  {
    title: 'ASTRA Test Series 2025',
    description: 'Advanced test series program with rigorous testing and analytics-driven performance improvement.',
    icon: Zap,
    category: 'test-series',
  },
  {
    title: 'Ethics (GS Paper 4)',
    description: 'Specialized ethics paper preparation. Case studies, theoretical frameworks, and answer writing techniques.',
    icon: Heart,
    category: 'specialized',
  },
  {
    title: 'Essay Paper',
    description: 'Essay writing guidance with structured approaches, topic selection strategies, and practice sessions.',
    icon: PenTool,
    category: 'specialized',
  },
  {
    title: 'Current Affairs',
    description: 'Daily, weekly, and monthly current affairs coverage with analysis and UPSC-oriented approach.',
    icon: Newspaper,
    category: 'specialized',
  },
  {
    title: 'IFoS',
    description: 'Indian Forest Service preparation. Specialized guidance for IFoS examination with focused subject coverage.',
    icon: TreePine,
    category: 'specialized',
  },
  {
    title: 'CSAT',
    description: 'Civil Services Aptitude Test preparation. Quantitative aptitude, logical reasoning, and reading comprehension.',
    icon: Brain,
    category: 'specialized',
  },
  {
    title: 'Mains Crash Course',
    description: 'Intensive mains revision program. Quick, focused preparation to revise key topics before the Mains exam.',
    icon: Rocket,
    category: 'crash-course',
  },
  {
    title: 'Prelims Crash Course',
    description: 'Intensive prelims revision program. Last-minute focused preparation with mock tests and strategy sessions.',
    icon: Crosshair,
    category: 'crash-course',
  },
  {
    title: 'Interview Guidance Program',
    description: 'Mock interviews and personality test prep. Build confidence, articulation, and the right attitude for the UPSC interview.',
    icon: Mic,
    category: 'crash-course',
  },
]

const categoryLabels: Record<string, { title: string; subtitle: string }> = {
  foundation: {
    title: 'Foundation Programs',
    subtitle: 'Build a strong base for your UPSC journey',
  },
  'test-series': {
    title: 'Test Series',
    subtitle: 'Practice, evaluate, and improve your performance',
  },
  specialized: {
    title: 'Specialized Courses',
    subtitle: 'Focused preparation for specific papers and topics',
  },
  'crash-course': {
    title: 'Crash Courses & Interview',
    subtitle: 'Intensive short-term programs for quick revision',
  },
}

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

const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
}

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function CoursesPage() {
  const categories = ['foundation', 'test-series', 'specialized', 'crash-course'] as const

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
              Our Programs
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-serif display-headline text-4xl sm:text-5xl md:text-6xl text-ivory-cream mb-6"
            >
              Courses at DHI Academy
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-sans body-text text-ivory-cream/60 max-w-2xl mx-auto"
            >
              Comprehensive programs designed for every stage of your UPSC Civil Services
              preparation — from foundation to interview.
            </motion.p>
          </div>
        </section>

        <BreadcrumbNav items={[{ label: 'Courses' }]} />

        {/* ── Course Categories ── */}
        {categories.map((category, catIdx) => {
          const categoryCourses = courses.filter((c) => c.category === category)
          const label = categoryLabels[category]

          return (
            <section
              key={category}
              className={`py-16 md:py-20 ${
                catIdx % 2 === 0 ? 'bg-background' : 'bg-light-gray/30 dark:bg-card/30'
              }`}
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-50px' }}
                  className="mb-10"
                >
                  <p className="font-sans section-label text-sovereign-gold dark:text-champagne-gold mb-2">
                    {label.title}
                  </p>
                  <h2 className="font-serif section-heading text-2xl sm:text-3xl text-navy dark:text-ivory-cream">
                    {label.subtitle}
                  </h2>
                </motion.div>

                <motion.div
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-50px' }}
                  className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                  {categoryCourses.map((course) => (
                    <motion.div
                      key={course.title}
                      variants={fadeInUp}
                      className={`group relative p-6 rounded-xl bg-white dark:bg-card border card-hover-premium gold-border-animate ${
                        course.highlight
                          ? 'border-sovereign-gold/30 dark:border-champagne-gold/30'
                          : 'border-light-gray dark:border-border'
                      }`}
                    >
                      {/* Popular ribbon */}
                      {course.highlight && (
                        <div className="absolute top-0 right-6">
                          <div className="bg-sovereign-gold dark:bg-champagne-gold text-ivory-cream dark:text-navy text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-b-lg">
                            Popular
                          </div>
                        </div>
                      )}

                      <div className="flex items-start gap-4 mb-4">
                        <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gold-pale dark:bg-sovereign-gold/10 flex items-center justify-center group-hover:bg-sovereign-gold/10 dark:group-hover:bg-champagne-gold/20 transition-colors">
                          <course.icon className="w-6 h-6 text-sovereign-gold dark:text-champagne-gold" />
                        </div>
                        <div>
                          <h3 className="font-serif text-lg font-semibold text-navy dark:text-ivory-cream leading-snug">
                            {course.title}
                          </h3>
                        </div>
                      </div>

                      <p className="font-sans text-sm text-mid-gray dark:text-ivory-cream/60 leading-relaxed mb-5">
                        {course.description}
                      </p>

                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-1 font-sans text-sm font-semibold text-sovereign-gold dark:text-champagne-gold hover:text-deep-crimson dark:hover:text-champagne-gold transition-colors gold-underline-hover"
                      >
                        Enquire Now
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </section>
          )
        })}

        {/* ── CTA Section ── */}
        <section className="py-16 md:py-20 bg-navy text-ivory-cream relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none gradient-mesh-hero" />
          <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h2 className="font-serif section-heading text-3xl sm:text-4xl text-ivory-cream mb-4">
                Not Sure Which Course to <span className="text-sovereign-gold dark:text-champagne-gold">Choose?</span>
              </h2>
              <p className="font-sans body-text text-ivory-cream/60 mb-8">
                Our counsellors will help you find the right program based on your preparation
                level, optional subjects, and target attempt.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button className="bg-sovereign-gold dark:bg-champagne-gold text-ivory-cream dark:text-navy hover:bg-champagne-gold dark:hover:bg-[#F5D060] font-semibold rounded-lg h-12 px-8 btn-gold-shimmer">
                    Get Course Guidance
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </Button>
                </Link>
                <a
                  href="https://wa.me/919844868662?text=Hi%2C%20I%27d%20like%20to%20know%20about%20DHI%20Academy%20courses."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="outline"
                    className="border-ivory-cream/20 text-ivory-cream hover:bg-ivory-cream/5 hover:text-champagne-gold font-semibold rounded-lg h-12 px-8 w-full sm:w-auto"
                  >
                    Chat on WhatsApp
                  </Button>
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
