import { Header } from '@/components/header'
import Footer from '@/components/footer'
import { ChatbotWidget } from '@/components/chatbot-widget'
import { BackToTop } from '@/components/back-to-top'
import { CookieConsent } from '@/components/cookie-consent'
import { ScrollProgress } from '@/components/scroll-progress'
import Link from 'next/link'
import {
  ArrowRight,
  BookOpenCheck,
  CalendarCheck,
  GraduationCap,
  MapPin,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Target,
} from 'lucide-react'

const proofPoints = [
  { value: 'UPSC + KAS', label: 'Focused civil services preparation' },
  { value: '1:1', label: 'Mentorship-led student guidance' },
  { value: 'Bengaluru', label: 'Chandra Layout classroom campus' },
]

const pathways = [
  {
    title: 'Foundation & IPM',
    text: 'Build your base for Prelims and Mains with structured classes, mentorship, and syllabus discipline.',
    icon: GraduationCap,
  },
  {
    title: 'Test Series',
    text: 'Practice answer writing, Prelims accuracy, and evaluation-led improvement across the preparation cycle.',
    icon: BookOpenCheck,
  },
  {
    title: 'Focused Modules',
    text: 'Ethics, Essay, CSAT, current affairs, optionals, crash courses, and interview guidance.',
    icon: Target,
  },
]

const differentiators = [
  'Content aligned to the changing UPSC pattern',
  'Faculty and mentors with real exam exposure',
  'Individual attention instead of crowd-coaching',
  'Answer-writing practice with actionable feedback',
]

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <ScrollProgress />
      <Header />

      <main id="main-content" className="flex-1">
        <section className="relative overflow-hidden bg-dhi-ink text-white">
          <div className="absolute inset-0 dhi-hero-grid" aria-hidden="true" />
          <div className="absolute -left-28 top-28 h-72 w-72 rounded-full bg-dhi-red/25 blur-3xl" aria-hidden="true" />
          <div className="absolute right-0 top-24 hidden h-[520px] w-[520px] translate-x-1/3 rounded-full border border-white/10 lg:block" aria-hidden="true" />
          <div className="absolute right-20 top-40 hidden h-64 w-64 rounded-full bg-dhi-red/10 blur-3xl lg:block" aria-hidden="true" />

          <div className="relative mx-auto grid min-h-screen max-w-7xl items-center gap-12 px-4 pb-20 pt-32 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
            <div>
              <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-dhi-red/30 bg-dhi-red/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-dhi-red-light">
                <Sparkles className="size-4" />
                Transforming Lives
              </div>

              <h1 className="max-w-4xl font-serif text-[3.2rem] font-semibold leading-[0.95] tracking-[-0.045em] text-white sm:text-[4.6rem] lg:text-[5.8rem]">
                A sharper path to the civil services dream.
              </h1>

              <p className="mt-7 max-w-2xl text-lg leading-8 text-white/72 sm:text-xl">
                DHI Academy helps UPSC and KAS aspirants prepare with academic depth,
                accountable mentorship, and exam-focused discipline from foundation to interview.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/courses"
                  className="group inline-flex h-14 items-center justify-center rounded-full bg-dhi-red px-7 text-sm font-bold text-white shadow-[0_18px_50px_rgba(227,24,55,0.32)] transition hover:-translate-y-0.5 hover:bg-dhi-red-dark"
                >
                  Explore Programs
                  <ArrowRight className="ml-2 size-4 transition group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex h-14 items-center justify-center rounded-full border border-white/20 bg-white/[0.08] px-7 text-sm font-bold text-white backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/[0.14]"
                >
                  Book Free Counselling
                </Link>
              </div>

              <div className="mt-12 grid gap-3 sm:grid-cols-3">
                {proofPoints.map((item) => (
                  <div key={item.label} className="rounded-2xl border border-white/10 bg-white/[0.06] p-4 backdrop-blur">
                    <div className="font-serif text-2xl font-semibold text-white">{item.value}</div>
                    <p className="mt-1 text-xs leading-5 text-white/55">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative mx-auto hidden w-full max-w-md lg:block">
              <div className="dhi-butterfly-card">
                <div className="dhi-wing dhi-wing-left" />
                <div className="dhi-wing dhi-wing-right" />
                <div className="dhi-spine" />
                <div className="relative z-10 rounded-[2rem] border border-white/10 bg-white/[0.07] p-8 shadow-2xl backdrop-blur-xl">
                  <p className="text-xs font-semibold uppercase tracking-[0.32em] text-dhi-red-light">DHI Method</p>
                  <h2 className="mt-4 font-serif text-4xl font-semibold leading-tight text-white">
                    Learn. Test. Reflect. Rise.
                  </h2>
                  <div className="mt-7 space-y-4">
                    {[
                      ['01', 'Concept clarity'],
                      ['02', 'Structured practice'],
                      ['03', 'Mentor feedback'],
                      ['04', 'Exam temperament'],
                    ].map(([number, label]) => (
                      <div key={number} className="flex items-center gap-4 rounded-2xl border border-white/10 bg-black/20 p-4">
                        <span className="font-mono text-xs text-dhi-red-light">{number}</span>
                        <span className="text-sm font-semibold text-white/82">{label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-16 dark:bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-dhi-red">Programs</p>
                <h2 className="mt-4 font-serif text-4xl font-semibold tracking-tight text-dhi-ink sm:text-5xl dark:text-white">
                  Choose your preparation pathway.
                </h2>
              </div>
              <p className="text-base leading-8 text-slate-600 dark:text-white/62">
                Home should open the door, not overload the student. Detailed program
                information now belongs on the Courses page where aspirants can compare calmly.
              </p>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {pathways.map((item) => (
                <article key={item.title} className="group rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-[0_20px_70px_rgba(15,23,42,0.07)] transition hover:-translate-y-1 hover:border-dhi-red/30 dark:border-white/10 dark:bg-white/[0.04]">
                  <item.icon className="size-8 text-dhi-red" />
                  <h3 className="mt-6 font-serif text-2xl font-semibold text-dhi-ink dark:text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-white/60">{item.text}</p>
                </article>
              ))}
            </div>

            <div className="mt-10">
              <Link href="/courses" className="inline-flex items-center text-sm font-bold text-dhi-red hover:text-dhi-red-dark">
                View all courses
                <ArrowRight className="ml-2 size-4" />
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-dhi-paper py-16 dark:bg-card/40">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
            <div className="rounded-[2rem] bg-dhi-ink p-8 text-white shadow-2xl">
              <ShieldCheck className="size-9 text-dhi-red-light" />
              <h2 className="mt-8 font-serif text-4xl font-semibold leading-tight">
                Built for serious aspirants, not casual browsing.
              </h2>
              <p className="mt-5 leading-8 text-white/65">
                The design direction now mirrors the DHI mark: decisive red, disciplined
                black, breathable white, and transformation-led visual movement.
              </p>
            </div>

            <div className="grid gap-4">
              {differentiators.map((item) => (
                <div key={item} className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5 dark:border-white/10 dark:bg-white/[0.04]">
                  <CalendarCheck className="mt-1 size-5 shrink-0 text-dhi-red" />
                  <p className="text-base font-medium leading-7 text-dhi-ink dark:text-white/78">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-16 dark:bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6 lg:grid-cols-[1fr_0.7fr]">
              <div className="rounded-[2rem] border border-dhi-red/15 bg-gradient-to-br from-dhi-red/10 via-white to-white p-8 dark:from-dhi-red/15 dark:via-white/[0.04] dark:to-white/[0.02]">
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-dhi-red">Free Resource</p>
                <h2 className="mt-4 font-serif text-4xl font-semibold text-dhi-ink dark:text-white">
                  Constitution Explorer
                </h2>
                <p className="mt-4 max-w-2xl leading-8 text-slate-600 dark:text-white/62">
                  A focused learning tool for Articles, cases, schedules, and UPSC-linked revision.
                  It deserves its own space instead of being buried in the homepage.
                </p>
                <Link href="/constitution-explorer" className="mt-7 inline-flex h-12 items-center rounded-full bg-dhi-ink px-6 text-sm font-bold text-white transition hover:bg-black">
                  Open Explorer
                  <ArrowRight className="ml-2 size-4" />
                </Link>
              </div>

              <div className="rounded-[2rem] border border-slate-200 p-8 dark:border-white/10">
                <MapPin className="size-8 text-dhi-red" />
                <h3 className="mt-6 font-serif text-3xl font-semibold text-dhi-ink dark:text-white">Visit DHI Academy</h3>
                <p className="mt-4 leading-7 text-slate-600 dark:text-white/60">
                  Chandra Layout, Bengaluru. Talk to a counsellor, understand your level,
                  and choose the right preparation plan.
                </p>
                <Link href="/contact" className="mt-6 inline-flex items-center text-sm font-bold text-dhi-red">
                  Contact campus
                  <MessageCircle className="ml-2 size-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <ChatbotWidget />
      <BackToTop />
      <CookieConsent />
    </div>
  )
}
