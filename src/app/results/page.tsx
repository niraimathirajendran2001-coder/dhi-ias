'use client'

import { Header } from '@/components/header'
import Footer from '@/components/footer'
import { BreadcrumbNav } from '@/components/breadcrumb-nav'
import { motion } from 'framer-motion'
import { Trophy, Star, TrendingUp, Users, Award, ChevronRight, ArrowRight, BookOpen, Target, ClipboardList, GraduationCap, Rocket } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

/* ------------------------------------------------------------------ */
/*  Topper Data (Generic placeholders)                                 */
/* ------------------------------------------------------------------ */

interface Topper {
  initials: string
  name: string
  rank: string
  exam: string
  year: string
  optional: string
}

const toppers: Topper[] = [
  { initials: 'AK', name: 'Aspirant K', rank: 'Top 50', exam: 'UPSC CSE', year: '2024', optional: 'Sociology' },
  { initials: 'RS', name: 'Aspirant S', rank: 'Top 100', exam: 'UPSC CSE', year: '2024', optional: 'PSIR' },
  { initials: 'MP', name: 'Aspirant P', rank: 'Top 150', exam: 'UPSC CSE', year: '2024', optional: 'Geography' },
  { initials: 'NK', name: 'Aspirant N', rank: 'Selected', exam: 'KPSC KAS', year: '2024', optional: 'Public Admin' },
  { initials: 'VD', name: 'Aspirant D', rank: 'Top 200', exam: 'UPSC CSE', year: '2023', optional: 'Sociology' },
  { initials: 'SK', name: 'Aspirant K', rank: 'Selected', exam: 'KPSC KAS', year: '2023', optional: 'Kannada Lit' },
  { initials: 'PJ', name: 'Aspirant J', rank: 'Top 300', exam: 'UPSC CSE', year: '2023', optional: 'Geography' },
  { initials: 'AR', name: 'Aspirant R', rank: 'Selected', exam: 'UPSC IFoS', year: '2023', optional: 'Forestry' },
]

const resultStats = [
  { icon: Trophy, value: '50+', label: 'Selections in UPSC CSE' },
  { icon: Star, value: '30+', label: 'Top 100 Rankers' },
  { icon: TrendingUp, value: '85%', label: 'Success Rate' },
  { icon: Users, value: '1000+', label: 'Students Trained' },
]

interface SuccessReason {
  title: string
  desc: string
  icon: React.ComponentType<{ className?: string }>
}

const successReasons: SuccessReason[] = [
  {
    title: 'Comprehensive Content',
    desc: 'We develop our own comprehensive content strictly related to the syllabus, updated regularly to match evolving UPSC patterns.',
    icon: BookOpen,
  },
  {
    title: 'Individual Attention',
    desc: 'Every student receives personalized mentorship and guidance. We focus on your weak areas and help you strengthen them.',
    icon: Target,
  },
  {
    title: 'Test-Based Learning',
    desc: 'Regular tests and evaluations with detailed feedback help students track their progress and improve consistently.',
    icon: ClipboardList,
  },
  {
    title: 'Expert Faculty',
    desc: 'Our faculty members have appeared in UPSC interviews and Mains, bringing real exam experience to their teaching.',
    icon: GraduationCap,
  },
  {
    title: 'Competitive Environment',
    desc: 'We develop a competitive attitude amongst aspirants, fostering peer learning and healthy motivation.',
    icon: Trophy,
  },
  {
    title: 'All-Stage Preparation',
    desc: 'From Prelims to Mains to Interview, we prepare aspirants for every stage of the Civil Services Examination.',
    icon: Rocket,
  },
]

/* ------------------------------------------------------------------ */
/*  Animation Variants                                                 */
/* ------------------------------------------------------------------ */

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}

const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
}

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function ResultsPage() {
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
              Results & Toppers
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-serif display-headline text-4xl sm:text-5xl md:text-6xl text-ivory-cream mb-6"
            >
              Our Toppers
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-sans body-text text-ivory-cream/60 max-w-2xl mx-auto"
            >
              DHI Academy takes pride in the success of its students. Our structured mentorship
              and dedicated faculty have helped aspirants achieve their Civil Services dream.
            </motion.p>
          </div>
        </section>

        <BreadcrumbNav items={[{ label: 'Results & Toppers' }]} />

        {/* ── Stats Section ── */}
        <section className="py-16 md:py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6"
            >
              {resultStats.map((stat) => (
                <motion.div
                  key={stat.label}
                  variants={fadeInUp}
                  className="p-6 rounded-xl bg-white dark:bg-card border border-light-gray dark:border-border text-center card-hover-premium"
                >
                  <stat.icon className="w-8 h-8 mx-auto text-sovereign-gold dark:text-champagne-gold mb-3" />
                  <p className="font-serif stat-number text-3xl text-navy dark:text-ivory-cream">
                    {stat.value}
                  </p>
                  <p className="font-sans text-xs text-mid-gray dark:text-ivory-cream/50 mt-1">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── Topper Cards ── */}
        <section className="py-16 md:py-20 bg-light-gray/30 dark:bg-card/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-center mb-14"
            >
              <p className="font-sans section-label text-sovereign-gold dark:text-champagne-gold mb-3">
                Success Stories
              </p>
              <h2 className="font-serif section-heading text-3xl sm:text-4xl text-navy dark:text-ivory-cream">
                Our <span className="text-sovereign-gold dark:text-champagne-gold">Achievers</span>
              </h2>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {toppers.map((topper) => (
                <motion.div
                  key={topper.name + topper.year}
                  variants={fadeInUp}
                  className="group p-6 rounded-xl bg-white dark:bg-card border border-light-gray dark:border-border card-hover-premium text-center"
                >
                  {/* Avatar */}
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-navy/5 dark:bg-ivory-cream/5 flex items-center justify-center group-hover:bg-sovereign-gold/10 dark:group-hover:bg-champagne-gold/10 transition-colors">
                    <span className="font-serif text-2xl text-sovereign-gold dark:text-champagne-gold font-semibold">
                      {topper.initials}
                    </span>
                  </div>

                  <h3 className="font-serif text-lg font-semibold text-navy dark:text-ivory-cream mb-1">
                    {topper.name}
                  </h3>

                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold-pale dark:bg-sovereign-gold/10 border border-sovereign-gold/10 dark:border-champagne-gold/20 mb-3">
                    <Award className="w-3.5 h-3.5 text-sovereign-gold dark:text-champagne-gold" />
                    <span className="font-sans text-xs font-semibold text-sovereign-gold dark:text-champagne-gold">
                      {topper.rank}
                    </span>
                  </div>

                  <p className="font-sans text-sm text-mid-gray dark:text-ivory-cream/60">
                    {topper.exam} {topper.year}
                  </p>
                  <p className="font-sans text-xs text-mid-gray dark:text-ivory-cream/40 mt-1">
                    Optional: {topper.optional}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mt-10 text-center"
            >
              <p className="font-sans text-sm text-mid-gray dark:text-ivory-cream/50 italic">
                Many more toppers have chosen to remain anonymous. We respect their privacy.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ── Why Our Students Succeed ── */}
        <section className="py-16 md:py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-center mb-14"
            >
              <p className="font-sans section-label text-sovereign-gold dark:text-champagne-gold mb-3">
                Our Approach
              </p>
              <h2 className="font-serif section-heading text-3xl sm:text-4xl text-navy dark:text-ivory-cream">
                Why Our Students <span className="text-sovereign-gold dark:text-champagne-gold">Succeed</span>
              </h2>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {successReasons.map((item) => (
                <motion.div
                  key={item.title}
                  variants={fadeInUp}
                  className="p-6 rounded-xl bg-white dark:bg-card border border-light-gray dark:border-border card-hover-premium"
                >
                  <div className="mb-4">
                    <item.icon className="w-8 h-8 text-sovereign-gold dark:text-champagne-gold" />
                  </div>
                  <h3 className="font-serif text-lg font-semibold text-navy dark:text-ivory-cream mb-2">
                    {item.title}
                  </h3>
                  <p className="font-sans text-sm text-mid-gray dark:text-ivory-cream/60 leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

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
                Your Name Could Be <span className="text-sovereign-gold dark:text-champagne-gold">Next</span>
              </h2>
              <p className="font-sans body-text text-ivory-cream/60 mb-8">
                Join DHI Academy and start your journey towards cracking the Civil Services
                Examination. The right guidance makes all the difference.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/courses">
                  <Button className="bg-sovereign-gold dark:bg-champagne-gold text-ivory-cream dark:text-navy hover:bg-champagne-gold dark:hover:bg-[#F5D060] font-semibold rounded-lg h-12 px-8 btn-gold-shimmer">
                    Explore Courses
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button
                    variant="outline"
                    className="border-ivory-cream/20 text-ivory-cream hover:bg-ivory-cream/5 hover:text-champagne-gold font-semibold rounded-lg h-12 px-8"
                  >
                    Join DHI Academy
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
