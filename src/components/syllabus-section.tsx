'use client'

import { useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import {
  BookOpen,
  Globe,
  Landmark,
  TrendingUp,
  FlaskConical,
  Trees,
  Brain,
  Puzzle,
  BarChart3,
  PenTool,
  History,
  Map,
  ScrollText,
  Scale,
  ShieldCheck,
  Briefcase,
  Palette,
  Languages,
  MessageSquare,
  Eye,
  Compass,
  Users,
  Lightbulb,
  Download,
} from 'lucide-react'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import { cn } from '@/lib/utils'

/* ─── Prelims Data ─── */
const gsPaperITopics = [
  { icon: History, title: 'History', desc: 'Ancient, Medieval & Modern India' },
  { icon: Globe, title: 'Geography', desc: 'Physical, Human & Indian Geography' },
  { icon: Landmark, title: 'Polity', desc: 'Constitution & Governance' },
  { icon: TrendingUp, title: 'Economy', desc: 'Indian & World Economy' },
  { icon: FlaskConical, title: 'Science', desc: 'General Science & Technology' },
  { icon: Trees, title: 'Environment', desc: 'Ecology, Biodiversity & Climate' },
]

const csatPaperIITopics = [
  { icon: Brain, title: 'Comprehension', desc: 'Reading & analytical understanding' },
  { icon: Puzzle, title: 'Logical Reasoning', desc: 'Analytical & logical ability' },
  { icon: BarChart3, title: 'Data Interpretation', desc: 'Charts, tables & data sufficiency' },
]

/* ─── Mains Data ─── */
const mainsPapers = [
  { icon: PenTool, title: 'Essay', desc: 'Two essays on given topics, 250 marks each' },
  { icon: History, title: 'GS I', desc: 'Heritage, Culture, History & Geography' },
  { icon: Scale, title: 'GS II', desc: 'Polity, Governance & International Relations' },
  { icon: TrendingUp, title: 'GS III', desc: 'Technology, Economy & Environment' },
  { icon: ShieldCheck, title: 'GS IV', desc: 'Ethics, Integrity & Aptitude' },
  { icon: Briefcase, title: 'Optional I', desc: 'Chosen subject Paper I' },
  { icon: Palette, title: 'Optional II', desc: 'Chosen subject Paper II' },
  { icon: Languages, title: 'Language Paper A', desc: 'Indian language qualifying paper' },
  { icon: Languages, title: 'Language Paper B', desc: 'English qualifying paper' },
]

/* ─── Interview Data ─── */
const interviewAreas = [
  { icon: Eye, title: 'Mental Calibre', desc: 'Clarity of thought and logical expression' },
  { icon: Compass, title: 'Moral Integrity', desc: 'Ethical grounding and honesty' },
  { icon: Users, title: 'Social Traits', desc: 'Leadership, empathy & teamwork' },
  { icon: Lightbulb, title: 'Analytical Ability', desc: 'Problem-solving and critical thinking' },
  { icon: MessageSquare, title: 'Communication', desc: 'Articulation and presentation skills' },
]

/* ─── Stagger animation variants ─── */
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.1,
    },
  },
}

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
}

/* ─── Topic Card ─── */
function TopicCard({
  icon: Icon,
  title,
  desc,
  index,
  accentColor,
}: {
  icon: React.ComponentType<{ className?: string }>
  title: string
  desc: string
  index: number
  accentColor?: 'gold' | 'navy' | 'teal'
}) {
  const borderClass = accentColor === 'teal'
    ? 'border-l-3 border-l-forest-teal dark:border-l-[#14B8A6]'
    : accentColor === 'navy'
      ? 'border-l-3 border-l-navy dark:border-l-royal-navy'
      : 'border-l-3 border-l-[#C8960C] dark:border-l-champagne-gold'

  return (
    <motion.div
      variants={fadeInUp}
      custom={index}
      className={cn(
        'group relative rounded-xl p-4 sm:p-5',
        'bg-white dark:bg-[#111827]',
        'border border-light-gray dark:border-[#1C2541]',
        'hover-lift card-glow-hover transition-all duration-300',
        'gold-top-border',
        borderClass,
      )}
    >
      <div className="flex items-start gap-3">
        <div
          className={cn(
            'shrink-0 w-10 h-10 rounded-lg',
            'flex items-center justify-center',
            'bg-[#C8960C]/10 dark:bg-champagne-gold/10',
            'group-hover:bg-[#C8960C]/20 dark:group-hover:bg-champagne-gold/20',
            'transition-colors duration-200',
          )}
        >
          <Icon className="w-5 h-5 text-[#C8960C] dark:text-champagne-gold" />
        </div>
        <div className="min-w-0">
          <h4 className="font-sans card-title text-[14px] sm:text-[15px] text-navy dark:text-ivory-cream mb-0.5">
            {title}
          </h4>
          <p className="font-sans text-[12px] sm:text-[13px] text-mid-gray dark:text-ivory-cream/50 leading-relaxed">
            {desc}
          </p>
        </div>
      </div>
    </motion.div>
  )
}

/* ─── Mains Paper Card ─── */
function PaperCard({
  icon: Icon,
  title,
  desc,
  index,
}: {
  icon: React.ComponentType<{ className?: string }>
  title: string
  desc: string
  index: number
}) {
  return (
    <motion.div
      variants={fadeInUp}
      custom={index}
      className={cn(
        'group relative rounded-xl p-4 sm:p-5 text-center',
        'bg-white dark:bg-[#111827]',
        'border border-light-gray dark:border-[#1C2541]',
        'hover-lift card-glow-hover transition-all duration-300',
        'gold-top-border',
        'border-l-3 border-l-navy dark:border-l-royal-navy',
      )}
    >
      <div
        className={cn(
          'mx-auto mb-3 w-10 h-10 rounded-lg',
          'flex items-center justify-center',
          'bg-[#C8960C]/10 dark:bg-champagne-gold/10',
          'group-hover:bg-[#C8960C]/20 dark:group-hover:bg-champagne-gold/20',
          'transition-colors duration-200',
        )}
      >
        <Icon className="w-5 h-5 text-[#C8960C] dark:text-champagne-gold" />
      </div>
      <h4 className="font-sans card-title text-[14px] sm:text-[15px] text-navy dark:text-ivory-cream mb-1">
        {title}
      </h4>
      <p className="font-sans text-[12px] sm:text-[13px] text-mid-gray dark:text-ivory-cream/50 leading-relaxed">
        {desc}
      </p>
    </motion.div>
  )
}

/* ─── Interview Area Card ─── */
function InterviewCard({
  icon: Icon,
  title,
  desc,
  index,
}: {
  icon: React.ComponentType<{ className?: string }>
  title: string
  desc: string
  index: number
}) {
  return (
    <motion.div
      variants={fadeInUp}
      custom={index}
      className={cn(
        'group relative rounded-xl p-5 sm:p-6',
        'bg-white dark:bg-[#111827]',
        'border border-light-gray dark:border-[#1C2541]',
        'hover-lift card-glow-hover transition-all duration-300',
        'gold-top-border',
        'text-center',
        'border-l-3 border-l-forest-teal dark:border-l-[#14B8A6]',
      )}
    >
      <div
        className={cn(
          'mx-auto mb-3 w-12 h-12 rounded-full',
          'flex items-center justify-center',
          'bg-[#C8960C]/10 dark:bg-champagne-gold/10',
          'group-hover:bg-[#C8960C]/20 dark:group-hover:bg-champagne-gold/20',
          'transition-colors duration-200',
        )}
      >
        <Icon className="w-6 h-6 text-[#C8960C] dark:text-champagne-gold" />
      </div>
      <h4 className="font-sans card-title text-[15px] text-navy dark:text-ivory-cream mb-1">
        {title}
      </h4>
      <p className="font-sans text-[13px] text-mid-gray dark:text-ivory-cream/50 leading-relaxed">
        {desc}
      </p>
    </motion.div>
  )
}

/* ─── Main Section ─── */
export function SyllabusSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' })

  return (
    <section
      ref={sectionRef}
      className="relative py-16 md:py-24 overflow-hidden bg-ivory-cream dark:bg-[#0D1525]"
      aria-labelledby="syllabus-heading"
    >
      {/* Subtle gold pattern overlay */}
      <div
        className="absolute inset-0 pointer-events-none pattern-dots"
        style={{ opacity: 0.15 }}
        aria-hidden="true"
      />

      {/* Cream gradient background */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-ivory-cream via-[#F5F0E8] to-ivory-cream dark:from-[#0D1525] dark:via-[#111D35] dark:to-[#0D1525]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-16 text-center"
        >
          <p className="section-label ui-label section-label-diamond mb-4 text-sovereign-gold dark:text-champagne-gold">
            SYLLABUS
          </p>
          <h2
            id="syllabus-heading"
            className="font-serif section-heading text-[36px] leading-tight text-navy dark:text-ivory-cream md:text-[44px]"
          >
            UPSC Syllabus Overview
          </h2>
          <div className="mx-auto mt-5 mb-4 h-[2px] w-10 bg-sovereign-gold dark:bg-champagne-gold" />
          <p className="font-sans body-text text-[15px] md:text-[16px] text-mid-gray dark:text-ivory-cream/50 max-w-2xl mx-auto">
            A comprehensive breakdown of the three-stage Civil Services Examination
          </p>
        </motion.div>

        {/* Interactive Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Tabs defaultValue="prelims" className="w-full">
            <TabsList
              className={cn(
                'mx-auto mb-8 md:mb-12',
                'bg-white dark:bg-[#111827]',
                'border border-light-gray dark:border-[#1C2541]',
                'rounded-xl p-1',
                'h-auto flex',
              )}
            >
              <TabsTrigger
                value="prelims"
                className={cn(
                  'px-5 sm:px-8 py-2.5 rounded-lg',
                  'font-sans text-[13px] sm:text-[14px] font-semibold tracking-wide',
                  'data-[state=active]:bg-[#C8960C] data-[state=active]:text-[#0F1F4B]',
                  'dark:data-[state=active]:bg-champagne-gold dark:data-[state=active]:text-[#0F1F4B]',
                  'data-[state=inactive]:text-mid-gray dark:data-[state=inactive]:text-ivory-cream/50',
                  'transition-all duration-200',
                  'tab-gold-underline',
                )}
              >
                Prelims
                <span className={cn(
                  'ml-1.5 px-1.5 py-0.5 rounded-full',
                  'text-[10px] font-bold',
                  'bg-[#C8960C]/15 dark:bg-champagne-gold/15',
                  'text-[#C8960C] dark:text-champagne-gold',
                  'data-[state=active]:bg-[#0F1F4B]/20 data-[state=active]:text-[#0F1F4B]',
                )}>
                  2 Papers
                </span>
              </TabsTrigger>
              <TabsTrigger
                value="mains"
                className={cn(
                  'px-5 sm:px-8 py-2.5 rounded-lg',
                  'font-sans text-[13px] sm:text-[14px] font-semibold tracking-wide',
                  'data-[state=active]:bg-[#C8960C] data-[state=active]:text-[#0F1F4B]',
                  'dark:data-[state=active]:bg-champagne-gold dark:data-[state=active]:text-[#0F1F4B]',
                  'data-[state=inactive]:text-mid-gray dark:data-[state=inactive]:text-ivory-cream/50',
                  'transition-all duration-200',
                  'tab-gold-underline',
                )}
              >
                Mains
                <span className={cn(
                  'ml-1.5 px-1.5 py-0.5 rounded-full',
                  'text-[10px] font-bold',
                  'bg-[#C8960C]/15 dark:bg-champagne-gold/15',
                  'text-[#C8960C] dark:text-champagne-gold',
                  'data-[state=active]:bg-[#0F1F4B]/20 data-[state=active]:text-[#0F1F4B]',
                )}>
                  9 Papers
                </span>
              </TabsTrigger>
              <TabsTrigger
                value="interview"
                className={cn(
                  'px-5 sm:px-8 py-2.5 rounded-lg',
                  'font-sans text-[13px] sm:text-[14px] font-semibold tracking-wide',
                  'data-[state=active]:bg-[#C8960C] data-[state=active]:text-[#0F1F4B]',
                  'dark:data-[state=active]:bg-champagne-gold dark:data-[state=active]:text-[#0F1F4B]',
                  'data-[state=inactive]:text-mid-gray dark:data-[state=inactive]:text-ivory-cream/50',
                  'transition-all duration-200',
                  'tab-gold-underline',
                )}
              >
                Interview
                <span className={cn(
                  'ml-1.5 px-1.5 py-0.5 rounded-full',
                  'text-[10px] font-bold',
                  'bg-[#C8960C]/15 dark:bg-champagne-gold/15',
                  'text-[#C8960C] dark:text-champagne-gold',
                  'data-[state=active]:bg-[#0F1F4B]/20 data-[state=active]:text-[#0F1F4B]',
                )}>
                  1 Test
                </span>
              </TabsTrigger>
            </TabsList>

            {/* Prelims Tab */}
            <TabsContent value="prelims">
              <AnimatePresence mode="wait">
                <motion.div
                  key="prelims"
                  initial="hidden"
                  animate="visible"
                  variants={staggerContainer}
                >
                  {/* GS Paper I */}
                  <div className="mb-8">
                    <h3 className="font-sans ui-label text-[12px] text-sovereign-gold dark:text-champagne-gold mb-4 flex items-center gap-2">
                      <BookOpen className="w-4 h-4" />
                      GENERAL STUDIES PAPER I — 200 MARKS
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                      {gsPaperITopics.map((topic, i) => (
                        <TopicCard key={topic.title} {...topic} index={i} accentColor="gold" />
                      ))}
                    </div>
                  </div>

                  {/* CSAT Paper II */}
                  <div>
                    <h3 className="font-sans ui-label text-[12px] text-sovereign-gold dark:text-champagne-gold mb-4 flex items-center gap-2">
                      <Brain className="w-4 h-4" />
                      CSAT PAPER II — 200 MARKS (QUALIFYING)
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                      {csatPaperIITopics.map((topic, i) => (
                        <TopicCard key={topic.title} {...topic} index={i + gsPaperITopics.length} accentColor="gold" />
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </TabsContent>

            {/* Mains Tab */}
            <TabsContent value="mains">
              <AnimatePresence mode="wait">
                <motion.div
                  key="mains"
                  initial="hidden"
                  animate="visible"
                  variants={staggerContainer}
                >
                  <p className="font-sans text-[14px] text-mid-gray dark:text-ivory-cream/50 mb-6 text-center max-w-2xl mx-auto">
                    The Mains examination consists of 9 descriptive papers totaling 1750 marks, 
                    testing depth of knowledge and analytical ability.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                    {mainsPapers.map((paper, i) => (
                      <PaperCard key={paper.title} {...paper} index={i} />
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </TabsContent>

            {/* Interview Tab */}
            <TabsContent value="interview">
              <AnimatePresence mode="wait">
                <motion.div
                  key="interview"
                  initial="hidden"
                  animate="visible"
                  variants={staggerContainer}
                >
                  <div className="text-center mb-8">
                    <p className="font-sans text-[14px] text-mid-gray dark:text-ivory-cream/50 max-w-2xl mx-auto leading-relaxed">
                      The Personality Test (275 marks) assesses your overall suitability for a career in 
                      civil services. A board of competent observers evaluates your mental caliber, social 
                      traits, and intellectual depth through a 30-minute conversation.
                    </p>
                  </div>
                  <h3 className="font-sans ui-label text-[12px] text-sovereign-gold dark:text-champagne-gold mb-4 text-center">
                    KEY ASSESSMENT AREAS
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 max-w-4xl mx-auto">
                    {interviewAreas.map((area, i) => (
                      <InterviewCard key={area.title} {...area} index={i} />
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </TabsContent>
          </Tabs>
        </motion.div>

        {/* Download CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 md:mt-16 text-center"
        >
          <a
            href="#admissions"
            className={cn(
              'inline-flex items-center gap-2',
              'px-7 py-3 rounded-lg',
              'font-sans text-[14px] font-semibold tracking-wide',
              'transition-all duration-300',
              'btn-gold-shimmer',
              'bg-gradient-to-br from-[#C8960C] to-[#E8B830]',
              'dark:from-champagne-gold dark:to-[#F5D060]',
              'text-navy dark:text-[#0F1F4B]',
            )}
          >
            <Download className="w-4 h-4" />
            Download Complete Syllabus
          </a>
        </motion.div>
      </div>
    </section>
  )
}
