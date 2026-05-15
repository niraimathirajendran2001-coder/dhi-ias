'use client'

import { Header } from '@/components/header'
import Footer from '@/components/footer'
import { ChatbotWidget } from '@/components/chatbot-widget'
import { BackToTop } from '@/components/back-to-top'
import { CookieConsent } from '@/components/cookie-consent'
import { ScrollProgress } from '@/components/scroll-progress'
import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  BookOpen,
  Users,
  Trophy,
  Phone,
  GraduationCap,
  Target,
  Sparkles,
  ChevronRight,
  MapPin,
  Clock,
  Star,
  Shield,
  FileText,
  Brain,
  MessageCircle,
} from 'lucide-react'

/* ------------------------------------------------------------------ */
/*  Animation variants                                                 */
/* ------------------------------------------------------------------ */

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
}

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const stats = [
  { value: '500+', label: 'Students Trained', icon: Users },
  { value: '12+', label: 'Expert Faculty', icon: GraduationCap },
  { value: '95%', label: 'Mains Success Rate', icon: Target },
  { value: '10+', label: 'Years Experience', icon: Shield },
]

const features = [
  {
    icon: Brain,
    title: 'Expert Faculty',
    desc: 'Experienced educators and subject matter experts with proven UPSC track records guide every lecture.',
    href: '/about',
  },
  {
    icon: FileText,
    title: 'Comprehensive Content',
    desc: 'We develop our own content strictly aligned with the syllabus and relevance for the examination.',
    href: '/courses',
  },
  {
    icon: Sparkles,
    title: 'Individual Attention',
    desc: 'Quality teaching with personalized mentorship and individual attention for each aspirant.',
    href: '/about',
  },
  {
    icon: Target,
    title: 'Updated Pedagogy',
    desc: 'We constantly update our content and pedagogy according to the evolving UPSC pattern.',
    href: '/courses',
  },
]

const courseCategories = [
  {
    title: 'Foundation & IPM',
    courses: ['Foundation Course', 'IPM (Integrated Prelims & Mains)'],
    icon: BookOpen,
    href: '/courses',
  },
  {
    title: 'Test Series',
    courses: ['Mains Test Series 2025', 'ASTRA Test Series', 'YLM & YLP'],
    icon: FileText,
    href: '/courses',
  },
  {
    title: 'Optionals & Specialized',
    courses: ['Sociology', 'PSIR', 'Geography', 'Ethics', 'Essay'],
    icon: GraduationCap,
    href: '/courses',
  },
  {
    title: 'Current Affairs & More',
    courses: ['Current Affairs', 'CSAT', 'IFoS', 'Interview Guidance'],
    icon: MessageCircle,
    href: '/courses',
  },
]

const testimonials = [
  {
    name: 'Priya M.',
    result: 'UPSC CSE 2024 — Mains Qualified',
    text: 'The structured mentorship at DHI Academy transformed my preparation. The faculty\'s individual attention made all the difference.',
  },
  {
    name: 'Rahul K.',
    result: 'KAS 2024 — Selected',
    text: 'DHI Academy\'s test series and answer writing practice were exceptional. The feedback was detailed and actionable.',
  },
  {
    name: 'Ananya S.',
    result: 'UPSC CSE 2023 — Interview Round',
    text: 'The comprehensive content and updated pedagogy kept me ahead of the curve. Highly recommended for serious aspirants.',
  },
]

/* ------------------------------------------------------------------ */
/*  Homepage                                                           */
/* ------------------------------------------------------------------ */

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollProgress />
      <Header />

      <main id="main-content" className="flex-1">
        {/* ═══════════════════════════════════════════
            HERO SECTION
        ═══════════════════════════════════════════ */}
        <section className="relative min-h-screen flex items-center overflow-hidden bg-navy">
          {/* Background pattern */}
          <div className="absolute inset-0 pattern-dots opacity-[0.15] pointer-events-none" />
          <div className="gradient-mesh-hero" />

          <div className="relative z-10 mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8 py-32">
            <div className="max-w-3xl">
              {/* Tagline badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-6"
                style={{
                  background: 'rgba(227, 24, 55, 0.12)',
                  border: '1px solid rgba(227, 24, 55, 0.25)',
                }}
              >
                <Sparkles className="w-4 h-4 text-sovereign-gold" />
                <span className="font-sans text-[13px] font-medium text-sovereign-gold uppercase tracking-wider">
                  Transforming Lives
                </span>
              </motion.div>

              {/* Main heading */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-serif text-[42px] sm:text-[52px] lg:text-[64px] font-semibold leading-[1.1] text-ivory-cream mb-6"
              >
                Transform Your{' '}
                <span className="text-sovereign-gold">Civil Services</span>{' '}
                Journey
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="font-sans text-[17px] sm:text-[19px] leading-relaxed text-ivory-cream/60 mb-10 max-w-2xl"
              >
                DHI Academy guides aspirants through every stage of UPSC &amp; KAS
                with expert mentorship, comprehensive content, and a proven track
                record. Transforming Lives since inception.
              </motion.p>

              {/* CTA buttons */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link
                  href="/courses"
                  className="inline-flex items-center justify-center gap-2 h-14 px-8 rounded-lg bg-sovereign-gold text-white font-semibold text-[15px] font-sans btn-gold-shimmer transition-all duration-200 hover:bg-champagne-gold"
                >
                  Explore Courses
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 h-14 px-8 rounded-lg font-semibold text-[15px] font-sans transition-all duration-200 text-ivory-cream hover:bg-ivory-cream/10"
                  style={{ border: '1px solid rgba(255,255,255,0.2)' }}
                >
                  <Phone className="w-4 h-4" />
                  Contact Us
                </Link>
              </motion.div>

              {/* Quick stats under CTAs */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex flex-wrap gap-6 mt-12 pt-8"
                style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}
              >
                {stats.slice(0, 3).map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="font-serif text-[28px] font-bold text-sovereign-gold">
                      {stat.value}
                    </div>
                    <div className="font-sans text-[12px] text-ivory-cream/40 uppercase tracking-wider">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          >
            <span className="font-sans text-[11px] text-ivory-cream/30 uppercase tracking-widest">
              Scroll
            </span>
            <div className="w-[1px] h-8 bg-ivory-cream/20 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1/2 bg-sovereign-gold animate-bounce" />
            </div>
          </motion.div>
        </section>

        {/* ═══════════════════════════════════════════
            STATS STRIP
        ═══════════════════════════════════════════ */}
        <section className="relative py-12 bg-white border-b border-light-gray">
          <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex flex-col items-center text-center"
                >
                  <stat.icon className="w-6 h-6 text-sovereign-gold mb-2" />
                  <span className="font-serif text-[32px] sm:text-[40px] font-bold text-navy leading-none">
                    {stat.value}
                  </span>
                  <span className="font-sans text-[13px] text-mid-gray mt-1">
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            WHY DHI ACADEMY
        ═══════════════════════════════════════════ */}
        <section className="py-20 bg-ivory-cream">
          <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-center mb-14"
            >
              <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.15em] text-sovereign-gold">
                Why Choose Us
              </span>
              <h2 className="font-serif text-[32px] sm:text-[40px] font-semibold text-navy mt-3">
                Why DHI Academy?
              </h2>
              <p className="font-sans text-[16px] text-stone-gray max-w-2xl mx-auto mt-4 leading-relaxed">
                DHI Academy aspires to train and guide students for the Civil
                Services Examination with quality teaching and individual
                attention.
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {features.map((feature) => (
                <motion.div
                  key={feature.title}
                  variants={fadeInUp}
                  className="group relative p-6 rounded-xl bg-white border border-light-gray card-hover-premium"
                >
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                    style={{ background: '#FFF0F2' }}
                  >
                    <feature.icon className="w-6 h-6 text-sovereign-gold" />
                  </div>
                  <h3 className="font-sans text-[17px] font-semibold text-navy mb-2">
                    {feature.title}
                  </h3>
                  <p className="font-sans text-[14px] text-stone-gray leading-relaxed">
                    {feature.desc}
                  </p>
                  <Link
                    href={feature.href}
                    className="inline-flex items-center gap-1 font-sans text-[13px] font-medium text-sovereign-gold mt-4 hover:gap-2 transition-all"
                  >
                    Learn more <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            COURSES PREVIEW
        ═══════════════════════════════════════════ */}
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-center mb-14"
            >
              <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.15em] text-sovereign-gold">
                Our Programs
              </span>
              <h2 className="font-serif text-[32px] sm:text-[40px] font-semibold text-navy mt-3">
                Courses at DHI Academy
              </h2>
              <p className="font-sans text-[16px] text-stone-gray max-w-2xl mx-auto mt-4 leading-relaxed">
                From foundation to interview, we have a program for every stage of
                your civil services preparation.
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {courseCategories.map((cat) => (
                <motion.div
                  key={cat.title}
                  variants={fadeInUp}
                  className="group p-6 rounded-xl bg-ivory-cream border border-light-gray card-hover-premium"
                >
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4 bg-navy">
                    <cat.icon className="w-5 h-5 text-sovereign-gold" />
                  </div>
                  <h3 className="font-sans text-[17px] font-semibold text-navy mb-3">
                    {cat.title}
                  </h3>
                  <ul className="space-y-1.5 mb-4">
                    {cat.courses.map((course) => (
                      <li
                        key={course}
                        className="font-sans text-[13px] text-stone-gray flex items-start gap-2"
                      >
                        <span className="w-1 h-1 rounded-full bg-sovereign-gold mt-1.5 flex-shrink-0" />
                        {course}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={cat.href}
                    className="inline-flex items-center gap-1 font-sans text-[13px] font-medium text-sovereign-gold hover:gap-2 transition-all"
                  >
                    View all <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </motion.div>
              ))}
            </motion.div>

            <div className="text-center mt-10">
              <Link
                href="/courses"
                className="inline-flex items-center gap-2 h-12 px-8 rounded-lg bg-sovereign-gold text-white font-semibold text-[14px] font-sans btn-gold-shimmer transition-all duration-200 hover:bg-champagne-gold"
              >
                View All Courses
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            RESULTS / TOPPERS PREVIEW
        ═══════════════════════════════════════════ */}
        <section className="py-20 bg-navy relative overflow-hidden">
          <div className="absolute inset-0 pattern-dots opacity-[0.1] pointer-events-none" />
          <div className="relative z-10 mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-center mb-14"
            >
              <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.15em] text-sovereign-gold">
                Results
              </span>
              <h2 className="font-serif text-[32px] sm:text-[40px] font-semibold text-ivory-cream mt-3">
                Our Toppers
              </h2>
              <p className="font-sans text-[16px] text-ivory-cream/50 max-w-2xl mx-auto mt-4 leading-relaxed">
                DHI Academy students don&apos;t just clear — they rank. Our
                structured approach produces consistent results year after year.
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              {testimonials.map((t) => (
                <motion.div
                  key={t.name}
                  variants={fadeInUp}
                  className="p-6 rounded-xl border border-ivory-cream/10"
                  style={{ background: 'rgba(255,255,255,0.04)' }}
                >
                  <div className="flex items-center gap-1 mb-4">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star
                        key={s}
                        className="w-3.5 h-3.5 text-sovereign-gold fill-sovereign-gold"
                      />
                    ))}
                  </div>
                  <p className="font-sans text-[14px] text-ivory-cream/70 leading-relaxed mb-5">
                    &ldquo;{t.text}&rdquo;
                  </p>
                  <div>
                    <div className="font-sans text-[14px] font-semibold text-ivory-cream">
                      {t.name}
                    </div>
                    <div className="font-sans text-[12px] text-sovereign-gold mt-0.5">
                      {t.result}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <div className="text-center mt-10">
              <Link
                href="/results"
                className="inline-flex items-center gap-2 h-12 px-8 rounded-lg font-semibold text-[14px] font-sans text-sovereign-gold transition-all duration-200 hover:bg-sovereign-gold/10"
                style={{ border: '1px solid rgba(227, 24, 55, 0.3)' }}
              >
                View All Results
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            RESOURCES PREVIEW
        ═══════════════════════════════════════════ */}
        <section className="py-20 bg-gold-pale">
          <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-center mb-14"
            >
              <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.15em] text-sovereign-gold">
                Free Resources
              </span>
              <h2 className="font-serif text-[32px] sm:text-[40px] font-semibold text-navy mt-3">
                Study Tools &amp; Resources
              </h2>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-6"
            >
              {/* Constitution Explorer */}
              <motion.div variants={fadeInUp}>
                <Link
                  href="/constitution-explorer"
                  className="block p-6 rounded-xl bg-white border border-light-gray card-hover-premium group"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-navy">
                      <BookOpen className="w-5 h-5 text-sovereign-gold" />
                    </div>
                    <span className="font-sans text-[10px] font-semibold uppercase tracking-wider text-sovereign-gold bg-gold-pale px-2 py-0.5 rounded-full">
                      Interactive Tool
                    </span>
                  </div>
                  <h3 className="font-sans text-[17px] font-semibold text-navy mb-2">
                    Constitution Explorer
                  </h3>
                  <p className="font-sans text-[13px] text-stone-gray leading-relaxed">
                    Browse Indian Constitution articles, landmark SC cases, and
                    UPSC questions — all in one place.
                  </p>
                  <span className="inline-flex items-center gap-1 font-sans text-[13px] font-medium text-sovereign-gold mt-3 group-hover:gap-2 transition-all">
                    Explore <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </Link>
              </motion.div>

              {/* Daily Quiz */}
              <motion.div variants={fadeInUp}>
                <Link
                  href="/courses"
                  className="block p-6 rounded-xl bg-white border border-light-gray card-hover-premium group"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-navy">
                      <Brain className="w-5 h-5 text-sovereign-gold" />
                    </div>
                    <span className="font-sans text-[10px] font-semibold uppercase tracking-wider text-sovereign-gold bg-gold-pale px-2 py-0.5 rounded-full">
                      Practice
                    </span>
                  </div>
                  <h3 className="font-sans text-[17px] font-semibold text-navy mb-2">
                    Daily Quiz
                  </h3>
                  <p className="font-sans text-[13px] text-stone-gray leading-relaxed">
                    Test your knowledge with daily UPSC-style prelims and mains
                    questions curated by experts.
                  </p>
                  <span className="inline-flex items-center gap-1 font-sans text-[13px] font-medium text-sovereign-gold mt-3 group-hover:gap-2 transition-all">
                    Start Practicing <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </Link>
              </motion.div>

              {/* Current Affairs */}
              <motion.div variants={fadeInUp}>
                <Link
                  href="/courses"
                  className="block p-6 rounded-xl bg-white border border-light-gray card-hover-premium group"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-navy">
                      <FileText className="w-5 h-5 text-sovereign-gold" />
                    </div>
                    <span className="font-sans text-[10px] font-semibold uppercase tracking-wider text-sovereign-gold bg-gold-pale px-2 py-0.5 rounded-full">
                      Daily Updates
                    </span>
                  </div>
                  <h3 className="font-sans text-[17px] font-semibold text-navy mb-2">
                    Current Affairs
                  </h3>
                  <p className="font-sans text-[13px] text-stone-gray leading-relaxed">
                    Headlines of the day, daily news analysis, editorial
                    summaries, and Sansad TV coverage.
                  </p>
                  <span className="inline-flex items-center gap-1 font-sans text-[13px] font-medium text-sovereign-gold mt-3 group-hover:gap-2 transition-all">
                    Read Now <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            ABOUT PREVIEW
        ═══════════════════════════════════════════ */}
        <section className="py-20 bg-ivory-cream">
          <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.15em] text-sovereign-gold">
                  About Us
                </span>
                <h2 className="font-serif text-[32px] sm:text-[40px] font-semibold text-navy mt-3 mb-6">
                  Who We Are
                </h2>
                <p className="font-sans text-[15px] text-stone-gray leading-relaxed mb-4">
                  DHI Academy aspires to train and guide students for the Civil
                  Services Examination. With the aim to achieve the success
                  story, we believe that we understand the pulse of this
                  examination and the needs of the aspirants.
                </p>
                <p className="font-sans text-[15px] text-stone-gray leading-relaxed mb-6">
                  At DHI Academy, we don&apos;t just teach pre-available content,
                  but also develop our own comprehensive content strictly related
                  to the syllabus and relevance for the examination.
                </p>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 font-sans text-[14px] font-semibold text-sovereign-gold hover:gap-3 transition-all"
                >
                  Read Our Full Story <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-2 gap-4"
              >
                {[
                  { icon: Users, label: '7+ Faculty Members', desc: 'Experienced educators' },
                  { icon: Trophy, label: 'Proven Results', desc: 'Consistent selections' },
                  { icon: BookOpen, label: 'Own Content', desc: 'Syllabus-aligned material' },
                  { icon: Target, label: 'Individual Focus', desc: 'Personalized mentorship' },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="p-5 rounded-xl bg-white border border-light-gray"
                  >
                    <item.icon className="w-6 h-6 text-sovereign-gold mb-3" />
                    <div className="font-sans text-[14px] font-semibold text-navy">
                      {item.label}
                    </div>
                    <div className="font-sans text-[12px] text-mid-gray mt-0.5">
                      {item.desc}
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            CTA SECTION
        ═══════════════════════════════════════════ */}
        <section className="py-20 bg-navy relative overflow-hidden">
          <div className="absolute inset-0 pattern-dots opacity-[0.1] pointer-events-none" />
          <div className="relative z-10 mx-auto max-w-[800px] px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.15em] text-sovereign-gold">
                Get Started
              </span>
              <h2 className="font-serif text-[32px] sm:text-[42px] font-semibold text-ivory-cream mt-3 mb-6">
                Ready to Transform Your Future?
              </h2>
              <p className="font-sans text-[16px] text-ivory-cream/50 leading-relaxed mb-10">
                Join DHI Academy and take the first step towards a distinguished
                career in civil services. Our structured programs and expert
                faculty are here to guide you every step of the way.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/courses"
                  className="inline-flex items-center justify-center gap-2 h-14 px-8 rounded-lg bg-sovereign-gold text-white font-semibold text-[15px] font-sans btn-gold-shimmer transition-all duration-200 hover:bg-champagne-gold"
                >
                  Explore Courses
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 h-14 px-8 rounded-lg font-semibold text-[15px] font-sans text-ivory-cream transition-all duration-200 hover:bg-ivory-cream/10"
                  style={{ border: '1px solid rgba(255,255,255,0.2)' }}
                >
                  <Phone className="w-4 h-4" />
                  Contact Us
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            LOCATION PREVIEW
        ═══════════════════════════════════════════ */}
        <section className="py-16 bg-white border-t border-light-gray">
          <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-start gap-4">
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: '#FFF0F2' }}
                >
                  <MapPin className="w-5 h-5 text-sovereign-gold" />
                </div>
                <div>
                  <h3 className="font-sans text-[16px] font-semibold text-navy">
                    Visit DHI Academy
                  </h3>
                  <p className="font-sans text-[14px] text-stone-gray mt-1">
                    Bus Stand, 1561, 2nd Floor, 8th Cross Rd, above SBI Bank,
                    opposite Chandra Layout, Bengaluru 560040
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-sovereign-gold" />
                  <span className="font-sans text-[13px] text-stone-gray">
                    Mon–Sat: 8AM–8PM
                  </span>
                </div>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 h-10 px-5 rounded-lg bg-sovereign-gold text-white font-semibold text-[13px] font-sans transition-all hover:bg-champagne-gold"
                >
                  Get Directions
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <CookieConsent />
      <BackToTop />
      <ChatbotWidget />
    </div>
  )
}
