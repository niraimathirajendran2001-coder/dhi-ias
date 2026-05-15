'use client'

import { Header } from '@/components/header'
import Footer from '@/components/footer'
import { BreadcrumbNav } from '@/components/breadcrumb-nav'
import { motion, type Variants } from 'framer-motion'
import { Users, BookOpen, Award, Target, ChevronRight } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

/* ------------------------------------------------------------------ */
/*  Faculty Data                                                       */
/* ------------------------------------------------------------------ */

interface FacultyMember {
  name: string
  subject: string
  bio: string
  credentials: string[]
}

const faculty: FacultyMember[] = [
  {
    name: 'Mayank',
    subject: 'World History & Ethics',
    bio: 'Appeared UPSC Civil Service Mains exam. Over 2 years of teaching experience in GS – History. Over 5 years of experience in UPSC/Civil content field.',
    credentials: ['UPSC CSE Mains', '5+ yrs Content', '2+ yrs Teaching'],
  },
  {
    name: 'Dr. Shailaja',
    subject: 'Ancient, Medieval & Modern History, Art & Culture, Sci & Tech',
    bio: 'Appeared UPSC Civil Service Interview 2019. Over 2 years of teaching experience. Mentoring expert for over 4 years.',
    credentials: ['UPSC Interview 2019', '4+ yrs Mentoring', '2+ yrs Teaching'],
  },
  {
    name: 'Syed Younus',
    subject: 'English Communication & Presentation Skills',
    bio: 'Former Director at My Concepts. Relationship Manager and Faculty member for enhancement of English Communication and Presentation skills.',
    credentials: ['Former Director', 'Communication Expert', 'Faculty Member'],
  },
  {
    name: 'Dheeraj Yalamanchi',
    subject: 'Sociology',
    bio: 'Passionate towards making a difference in UPSC CSE preparation through result-oriented teaching and personalized mentorship. UPSC CSE Interview, 5 CSE Mains & 2 IFoS Mains. Over 3 years experience.',
    credentials: ['UPSC CSE Interview', '5 CSE Mains', '3+ yrs Teaching'],
  },
  {
    name: 'Ajay TL',
    subject: 'Environment, Geography & Forestry',
    bio: '7 years of experience in teaching for UPSC exam. Specialized in Environment, Geography and Forestry subjects.',
    credentials: ['7+ yrs Teaching', 'Environment Expert', 'Geography Specialist'],
  },
  {
    name: 'Devicharan Shetty',
    subject: 'Kannada Literature',
    bio: 'Appeared in UPSC CSE and KPSC Mains. 5+ years of experience in teaching Kannada Literature optional.',
    credentials: ['UPSC & KPSC Mains', '5+ yrs Teaching', 'Kannada Literature'],
  },
  {
    name: 'Vinay R',
    subject: 'Polity & Society',
    bio: 'Appeared in UPSC Civil Service Mains exam. Over 4 years of experience in mentoring and teaching. Over 6 years of experience in UPSC Civil Service content field.',
    credentials: ['UPSC CSE Mains', '6+ yrs Content', '4+ yrs Mentoring'],
  },
]

const stats = [
  { label: 'Faculty Members', value: '7+', icon: Users },
  { label: 'Subjects Covered', value: '15+', icon: BookOpen },
  { label: 'Years Combined Experience', value: '30+', icon: Award },
  { label: 'Mentorship Focus', value: '1:1', icon: Target },
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

const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
}

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-20">
        {/* ── Hero Section ── */}
        <section className="relative py-20 md:py-28 bg-navy text-ivory-cream overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 pointer-events-none gradient-mesh-hero" />
          <div className="absolute inset-0 pointer-events-none light-sweep" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="font-sans ui-label text-sovereign-gold dark:text-champagne-gold text-xs tracking-widest mb-4"
            >
              About Us
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-serif display-headline text-4xl sm:text-5xl md:text-6xl text-ivory-cream mb-6"
            >
              About DHI Academy
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-serif pull-quote text-xl sm:text-2xl text-sovereign-gold/80 dark:text-champagne-gold/80 max-w-2xl mx-auto"
            >
              Transforming Lives
            </motion.p>
          </div>
        </section>

        <BreadcrumbNav items={[{ label: 'About Us' }]} />

        {/* ── Who We Are ── */}
        <section className="py-16 md:py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
              <motion.div
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-50px' }}
              >
                <p className="font-sans section-label text-sovereign-gold dark:text-champagne-gold mb-3">
                  Who We Are
                </p>
                <h2 className="font-serif section-heading text-3xl sm:text-4xl text-navy dark:text-ivory-cream mb-6">
                  Guiding Aspirants Towards{' '}
                  <span className="text-sovereign-gold dark:text-champagne-gold">Civil Services</span>
                </h2>
                <p className="font-sans body-text text-mid-gray dark:text-ivory-cream/70 leading-relaxed mb-6">
                  DHI Academy aspires to train and guide students for the Civil Services
                  Examination. With the aim to achieve the success story, we believe that we
                  understand the pulse of this examination and the needs of the aspirants.
                </p>
                <p className="font-sans body-text text-mid-gray dark:text-ivory-cream/70 leading-relaxed mb-6">
                  Since UPSC has been constantly revising and evolving the pattern of Civil
                  Services Examination, therefore we make sure to update our content and modify
                  our pedagogy accordingly. At DHI Academy, we don&apos;t just teach
                  pre-available content, but also develop our own comprehensive content strictly
                  related to the syllabus and relevance for the examination.
                </p>
                <p className="font-sans body-text text-mid-gray dark:text-ivory-cream/70 leading-relaxed">
                  The aim is to prepare the aspirants for each stage of the exam by developing
                  sound academic base with quality teaching and individual attention and
                  developing competitive attitude amongst them.
                </p>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-50px' }}
                className="grid grid-cols-2 gap-4"
              >
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="p-6 rounded-xl bg-white dark:bg-card border border-light-gray dark:border-border card-hover-premium text-center"
                  >
                    <stat.icon className="w-8 h-8 mx-auto text-sovereign-gold dark:text-champagne-gold mb-3" />
                    <p className="font-serif stat-number text-3xl text-navy dark:text-ivory-cream">
                      {stat.value}
                    </p>
                    <p className="font-sans text-xs text-mid-gray dark:text-ivory-cream/50 mt-1">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── Divider ── */}
        <div className="gradient-divider" />

        {/* ── Our Team ── */}
        <section className="py-16 md:py-24 bg-background" id="team">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-center mb-14"
            >
              <p className="font-sans section-label text-sovereign-gold dark:text-champagne-gold mb-3">
                Our Team
              </p>
              <h2 className="font-serif section-heading text-3xl sm:text-4xl text-navy dark:text-ivory-cream">
                Meet Our <span className="text-sovereign-gold dark:text-champagne-gold">Faculty</span>
              </h2>
              <p className="font-sans body-text text-mid-gray dark:text-ivory-cream/60 mt-4 max-w-2xl mx-auto">
                Our experienced faculty members bring years of UPSC expertise and a deep
                commitment to student success.
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            >
              {faculty.map((member) => (
                <motion.div
                  key={member.name}
                  variants={fadeInUp}
                  className="group relative p-6 pt-8 rounded-xl bg-white dark:bg-card border border-light-gray dark:border-border card-hover-premium overflow-hidden"
                >
                  {/* Accent top strip */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-sovereign-gold to-champagne-gold opacity-60 group-hover:opacity-100 transition-opacity" />

                  {/* Avatar with gradient border ring */}
                  <div className="relative w-16 h-16 mx-auto mb-4">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-sovereign-gold to-champagne-gold opacity-20" />
                    <div className="relative w-full h-full rounded-full bg-white dark:bg-card flex items-center justify-center border-2 border-sovereign-gold/20 group-hover:border-sovereign-gold/40 transition-colors">
                      <span className="font-serif text-2xl text-sovereign-gold dark:text-champagne-gold font-semibold">
                        {member.name.charAt(0)}
                      </span>
                    </div>
                  </div>

                  <h3 className="font-serif text-xl font-semibold text-navy dark:text-ivory-cream text-center mb-1">
                    {member.name}
                  </h3>
                  <p className="font-sans text-sm font-medium text-sovereign-gold dark:text-champagne-gold text-center mb-3">
                    {member.subject}
                  </p>
                  <p className="font-sans text-xs text-mid-gray dark:text-ivory-cream/60 leading-relaxed text-center mb-4">
                    {member.bio}
                  </p>

                  <div className="flex flex-wrap justify-center gap-2">
                    {member.credentials.map((cred) => (
                      <span
                        key={cred}
                        className="inline-block px-2.5 py-1 rounded-full text-[10px] font-semibold bg-gold-pale dark:bg-sovereign-gold/10 text-sovereign-gold dark:text-champagne-gold border border-sovereign-gold/10 dark:border-champagne-gold/20"
                      >
                        {cred}
                      </span>
                    ))}
                  </div>
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
                Ready to Begin Your <span className="text-sovereign-gold dark:text-champagne-gold">Journey?</span>
              </h2>
              <p className="font-sans body-text text-ivory-cream/60 mb-8">
                Join DHI Academy and take the first step towards your Civil Services career.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/courses">
                  <Button
                    className="bg-sovereign-gold dark:bg-champagne-gold text-ivory-cream dark:text-navy hover:bg-champagne-gold dark:hover:bg-[#F5D060] font-semibold rounded-lg h-12 px-8 btn-gold-shimmer"
                  >
                    Explore Courses
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button
                    variant="outline"
                    className="border-ivory-cream/20 text-ivory-cream hover:bg-ivory-cream/5 hover:text-champagne-gold font-semibold rounded-lg h-12 px-8"
                  >
                    Contact Us
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
