'use client'

import { Header } from '@/components/header'
import Footer from '@/components/footer'
import { BreadcrumbNav } from '@/components/breadcrumb-nav'
import { motion, type Variants } from 'framer-motion'
import {
  ArrowRight,
  Award,
  BookOpen,
  CheckCircle2,
  Crown,
  GraduationCap,
  Medal,
  ShieldCheck,
  Sparkles,
  Trophy,
  Users,
} from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

interface Officer {
  name: string
  rank: string
  exam: 'UPSC CSE' | 'UPSC IFS'
}

const cseOfficers: Officer[] = [
  { rank: 'AIR 7', name: 'A R Rajah', exam: 'UPSC CSE' },
  { rank: 'AIR 53', name: 'Kiran Kamate', exam: 'UPSC CSE' },
  { rank: 'AIR 58', name: 'Mohit Gupta', exam: 'UPSC CSE' },
  { rank: 'AIR 88', name: 'Deeksha Patkar', exam: 'UPSC CSE' },
  { rank: 'AIR 146', name: 'Saurabh Sharma', exam: 'UPSC CSE' },
  { rank: 'AIR 383', name: 'Darshana Singh', exam: 'UPSC CSE' },
  { rank: 'AIR 389', name: 'Manoj C C', exam: 'UPSC CSE' },
  { rank: 'AIR 393', name: 'Yarasi Tushahika', exam: 'UPSC CSE' },
  { rank: 'AIR 437', name: 'Tarun Pratap Maurya', exam: 'UPSC CSE' },
  { rank: 'AIR 453', name: 'Shiksha Pathak', exam: 'UPSC CSE' },
  { rank: 'AIR 469', name: 'Nivedita C Bhavmani', exam: 'UPSC CSE' },
  { rank: 'AIR 613', name: 'Abhishek Chaudhary', exam: 'UPSC CSE' },
  { rank: 'AIR 631', name: 'Sandeep Kumar Singh', exam: 'UPSC CSE' },
  { rank: 'AIR 661', name: 'Chandan Y', exam: 'UPSC CSE' },
  { rank: 'AIR 719', name: 'Mani Karan Soni', exam: 'UPSC CSE' },
  { rank: 'AIR 720', name: 'Praveena H T', exam: 'UPSC CSE' },
  { rank: 'AIR 734', name: 'Sandip Singh', exam: 'UPSC CSE' },
  { rank: 'AIR 880', name: 'Chandrashekar', exam: 'UPSC CSE' },
  { rank: 'AIR 899', name: 'Nishant Kumar', exam: 'UPSC CSE' },
  { rank: 'AIR 921', name: 'Manoj J', exam: 'UPSC CSE' },
]

const ifsOfficers: Officer[] = [
  { rank: 'Rank 3', name: 'Siddharth', exam: 'UPSC IFS' },
  { rank: 'Rank 4', name: 'Karan Kumar Singh', exam: 'UPSC IFS' },
  { rank: 'Rank 5', name: 'Aanchal Sharma', exam: 'UPSC IFS' },
  { rank: 'Rank 6', name: 'Anoop Reddy A', exam: 'UPSC IFS' },
  { rank: 'Rank 9', name: 'Ravi Laxmipriya', exam: 'UPSC IFS' },
  { rank: 'Rank 19', name: 'Abhay Raghav', exam: 'UPSC IFS' },
  { rank: 'Rank 24', name: 'Manisha Asok', exam: 'UPSC IFS' },
  { rank: 'Rank 25', name: 'Puneet Kumar', exam: 'UPSC IFS' },
  { rank: 'Rank 27', name: 'Aman Ayushkar', exam: 'UPSC IFS' },
  { rank: 'Rank 31', name: 'Wadavkar Sushant Uttam', exam: 'UPSC IFS' },
  { rank: 'Rank 32', name: 'Sushmita Singh', exam: 'UPSC IFS' },
  { rank: 'Rank 35', name: 'Anurag Kumar', exam: 'UPSC IFS' },
  { rank: 'Rank 38', name: 'Aashish Jain', exam: 'UPSC IFS' },
  { rank: 'Rank 40', name: 'Deepshikha', exam: 'UPSC IFS' },
  { rank: 'Rank 41', name: 'Bote Harshal Sunil', exam: 'UPSC IFS' },
  { rank: 'Rank 51', name: 'Chandan Y', exam: 'UPSC IFS' },
  { rank: 'Rank 52', name: 'Sanskar Bharti', exam: 'UPSC IFS' },
  { rank: 'Rank 66', name: 'Nikhil Kumar', exam: 'UPSC IFS' },
  { rank: 'Rank 70', name: 'Abijai Anand P', exam: 'UPSC IFS' },
  { rank: 'Rank 71', name: 'Kalaipriyan K', exam: 'UPSC IFS' },
  { rank: 'Rank 77', name: 'Manav Gupta', exam: 'UPSC IFS' },
  { rank: 'Rank 79', name: 'Prityesh Raj', exam: 'UPSC IFS' },
  { rank: 'Rank 85', name: 'Rakesh R', exam: 'UPSC IFS' },
  { rank: 'Rank 88', name: 'Rajat Kataria', exam: 'UPSC IFS' },
  { rank: 'Rank 97', name: 'Vinod Kumar', exam: 'UPSC IFS' },
  { rank: 'Rank 99', name: 'Dharmendra Choudhary', exam: 'UPSC IFS' },
  { rank: 'Rank 100', name: 'Kushare Pratik Chandrashekhar', exam: 'UPSC IFS' },
  { rank: 'Rank 102', name: 'Suryawanshi Darshan Rajendra', exam: 'UPSC IFS' },
  { rank: 'Rank 103', name: 'Piyush Choudhary', exam: 'UPSC IFS' },
  { rank: 'Rank 110', name: 'Saurabh Kumar Pal', exam: 'UPSC IFS' },
  { rank: 'Rank 114', name: 'Sanjay Bagali', exam: 'UPSC IFS' },
  { rank: 'Rank 122', name: 'Abhishek Nayak G S', exam: 'UPSC IFS' },
  { rank: 'Rank 123', name: 'Himanshu Kumar R', exam: 'UPSC IFS' },
  { rank: 'Rank 126', name: 'Amit Kumar', exam: 'UPSC IFS' },
  { rank: 'Rank 141', name: 'Chinthamani Selvan T', exam: 'UPSC IFS' },
]

const resultStats = [
  { icon: Trophy, value: '55+', label: 'Total selections' },
  { icon: Medal, value: '20+', label: 'UPSC CSE selections' },
  { icon: Crown, value: '35', label: 'UPSC IFS selections' },
  { icon: Users, value: '2025', label: 'Result year' },
]

const successReasons = [
  {
    title: 'Disciplined preparation culture',
    desc: 'DHI focuses on consistent study rhythm, syllabus clarity, and exam temperament across the preparation journey.',
    icon: ShieldCheck,
  },
  {
    title: 'Answer-oriented learning',
    desc: 'Students are trained to convert knowledge into clear, structured, and exam-relevant answers.',
    icon: BookOpen,
  },
  {
    title: 'Mentorship-led direction',
    desc: 'The academy emphasizes guidance, correction, and planning so aspirants do not prepare in isolation.',
    icon: GraduationCap,
  },
]

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
}

const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.04 },
  },
}

function initials(name: string) {
  return name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join('')
    .toUpperCase()
}

function OfficerCard({ officer, index }: { officer: Officer; index: number }) {
  const isTopRank = index < 5

  return (
    <motion.article
      variants={fadeInUp}
      className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-4 shadow-[0_18px_55px_rgba(15,23,42,0.06)] transition duration-300 hover:-translate-y-1 hover:border-dhi-red/30 hover:shadow-[0_22px_70px_rgba(227,24,55,0.13)] dark:border-white/10 dark:bg-white/[0.04]"
    >
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-dhi-red via-dhi-red-light to-dhi-red opacity-70" />
      <div className="flex items-start gap-4">
        <div className="relative grid size-14 shrink-0 place-items-center rounded-2xl bg-dhi-ink text-white shadow-lg">
          <span className="font-serif text-lg font-semibold">{initials(officer.name)}</span>
          {isTopRank && (
            <span className="absolute -right-1 -top-1 grid size-5 place-items-center rounded-full bg-dhi-red text-[10px] text-white">
              <Sparkles className="size-3" />
            </span>
          )}
        </div>
        <div className="min-w-0">
          <div className="inline-flex rounded-full bg-dhi-red/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-dhi-red">
            {officer.rank}
          </div>
          <h3 className="mt-2 font-serif text-lg font-semibold leading-tight text-dhi-ink dark:text-white">
            {officer.name}
          </h3>
          <p className="mt-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-white/45">
            {officer.exam} 2025
          </p>
        </div>
      </div>
    </motion.article>
  )
}

function OfficerWall({
  title,
  eyebrow,
  count,
  officers,
}: {
  title: string
  eyebrow: string
  count: string
  officers: Officer[]
}) {
  return (
    <section className="py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between"
        >
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-dhi-red">{eyebrow}</p>
            <h2 className="mt-3 font-serif text-4xl font-semibold tracking-tight text-dhi-ink dark:text-white">
              {title}
            </h2>
          </div>
          <div className="rounded-2xl border border-dhi-red/15 bg-dhi-red/10 px-5 py-4 text-dhi-ink dark:text-white">
            <span className="block font-serif text-3xl font-semibold text-dhi-red">{count}</span>
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-slate-600 dark:text-white/55">
              Successful selections
            </span>
          </div>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          {officers.map((officer, index) => (
            <OfficerCard key={`${officer.exam}-${officer.rank}-${officer.name}`} officer={officer} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default function ResultsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-20">
        <section className="relative overflow-hidden bg-dhi-ink py-20 text-white md:py-28">
          <div className="absolute inset-0 dhi-hero-grid opacity-80" aria-hidden="true" />
          <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-dhi-red/25 blur-3xl" aria-hidden="true" />
          <div className="absolute right-0 top-16 hidden h-[430px] w-[430px] translate-x-1/3 rounded-full border border-white/10 lg:block" aria-hidden="true" />

          <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
            <motion.div variants={fadeInUp} initial="hidden" animate="visible">
              <p className="inline-flex items-center gap-2 rounded-full border border-dhi-red/30 bg-dhi-red/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.28em] text-dhi-red-light">
                <Award className="size-4" />
                UPSC Results 2025
              </p>
              <h1 className="mx-auto mt-6 max-w-5xl font-serif text-5xl font-semibold leading-none tracking-[-0.04em] text-white sm:text-6xl md:text-7xl">
                The DHI Wall of Officers.
              </h1>
              <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-white/70">
                Heartiest congratulations to DHI Academy students for their remarkable achievement
                in UPSC CSE and UPSC IFS 2025.
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
            >
              {resultStats.map((stat) => (
                <motion.div
                  key={stat.label}
                  variants={fadeInUp}
                  className="rounded-3xl border border-white/10 bg-white/[0.07] p-5 backdrop-blur"
                >
                  <stat.icon className="mx-auto size-8 text-dhi-red-light" />
                  <p className="mt-4 font-serif text-4xl font-semibold text-white">{stat.value}</p>
                  <p className="mt-1 text-xs font-bold uppercase tracking-[0.2em] text-white/52">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <BreadcrumbNav items={[{ label: 'Wall of Officers' }]} />

        <section className="bg-dhi-paper py-10 dark:bg-card/40">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-4 md:grid-cols-3">
              {successReasons.map((item) => (
                <div
                  key={item.title}
                  className="rounded-3xl border border-slate-200 bg-white p-6 dark:border-white/10 dark:bg-white/[0.04]"
                >
                  <item.icon className="size-8 text-dhi-red" />
                  <h3 className="mt-5 font-serif text-2xl font-semibold text-dhi-ink dark:text-white">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-white/60">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <OfficerWall
          eyebrow="UPSC CSE Results 2025"
          title="Civil Services achievers"
          count="20+"
          officers={cseOfficers}
        />

        <div className="bg-gradient-to-b from-white to-dhi-paper dark:from-background dark:to-card/40">
          <OfficerWall
            eyebrow="UPSC IFS Results 2025"
            title="Indian Forest Service achievers"
            count="35"
            officers={ifsOfficers}
          />
        </div>

        <section className="bg-dhi-ink py-16 text-white md:py-20">
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <CheckCircle2 className="mx-auto size-10 text-dhi-red-light" />
            <h2 className="mt-6 font-serif text-4xl font-semibold tracking-tight sm:text-5xl">
              Your preparation can be the next story on this wall.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl leading-8 text-white/62">
              Speak with DHI Academy to understand the right course, test series, and mentorship
              plan for your current preparation stage.
            </p>
            <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
              <Link href="/courses">
                <Button className="h-12 rounded-full bg-dhi-red px-7 font-bold text-white hover:bg-dhi-red-dark">
                  Explore Courses
                  <ArrowRight className="ml-2 size-4" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  variant="outline"
                  className="h-12 rounded-full border-white/20 px-7 font-bold text-white hover:bg-white/10 hover:text-white"
                >
                  Book Counselling
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
