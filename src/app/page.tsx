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
  ClipboardCheck,
  GraduationCap,
  MapPin,
  MessageCircle,
  PenLine,
  RefreshCw,
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
    title: 'Build Foundation',
    text: 'For beginners and early-stage aspirants who need syllabus clarity, classroom structure, and disciplined study rhythm.',
    cta: 'See Foundation Plan',
    icon: GraduationCap,
  },
  {
    title: 'Improve Test Performance',
    text: 'For students who know the syllabus but need accuracy, speed, evaluation, and repeatable score improvement.',
    cta: 'Explore Test Series',
    icon: BookOpenCheck,
  },
  {
    title: 'Master Mains Writing',
    text: 'For aspirants preparing for Mains, Essay, Ethics, optional papers, and interview-stage articulation.',
    cta: 'Get Module Guidance',
    icon: Target,
  },
]

const readinessOptions = ['Beginner', 'Prelims 2026', 'Mains', 'Optional', 'KAS']

const preparationLoop = [
  { step: 'Read', text: 'Understand concepts with syllabus-linked notes.', icon: BookOpenCheck },
  { step: 'Recall', text: 'Revise actively before the test pressure begins.', icon: RefreshCw },
  { step: 'Respond', text: 'Write answers, solve PYQs, and attempt mocks.', icon: PenLine },
  { step: 'Refine', text: 'Use mentor feedback to correct the next attempt.', icon: ClipboardCheck },
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
                Where serious aspirants become exam-ready thinkers.
              </h1>

              <p className="mt-7 max-w-2xl text-lg leading-8 text-white/72 sm:text-xl">
                DHI Academy helps UPSC and KAS aspirants transform information into
                disciplined thinking, answer quality, and exam temperament.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/contact"
                  className="group inline-flex h-14 items-center justify-center rounded-full bg-dhi-red px-7 text-sm font-bold text-white shadow-[0_18px_50px_rgba(227,24,55,0.32)] transition hover:-translate-y-0.5 hover:bg-dhi-red-dark"
                >
                  Start Your UPSC Plan
                  <ArrowRight className="ml-2 size-4 transition group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/constitution-explorer"
                  className="inline-flex h-14 items-center justify-center rounded-full border border-white/20 bg-white/[0.08] px-7 text-sm font-bold text-white backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/[0.14]"
                >
                  Try Constitution Explorer
                </Link>
              </div>

              <div className="mt-10 rounded-[1.5rem] border border-white/10 bg-white/[0.06] p-4 backdrop-blur">
                <p className="text-xs font-bold uppercase tracking-[0.24em] text-white/45">
                  I am preparing for
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {readinessOptions.map((option) => (
                    <Link
                      key={option}
                      href={`/contact?stage=${encodeURIComponent(option)}`}
                      className="rounded-full border border-white/12 bg-black/20 px-4 py-2 text-sm font-semibold text-white/78 transition hover:border-dhi-red/60 hover:bg-dhi-red/15 hover:text-white"
                    >
                      {option}
                    </Link>
                  ))}
                </div>
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
                    The DHI 4R Method.
                  </h2>
                  <p className="mt-3 text-sm leading-6 text-white/58">
                    Read, Recall, Respond, Refine. A preparation loop designed for thinking transformation.
                  </p>
                  <div className="mt-7 space-y-4">
                    {[
                      ['01', 'Mentor-marked answer sheet'],
                      ['02', 'Weekly revision planner'],
                      ['03', 'PYQ-linked concept map'],
                      ['04', 'Feedback to next action'],
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
                  <p className="mt-3 text-xs font-bold uppercase tracking-[0.2em] text-dhi-red">
                    Who this is for
                  </p>
                  <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-white/60">{item.text}</p>
                  <Link href="/courses" className="mt-6 inline-flex items-center text-sm font-bold text-dhi-red hover:text-dhi-red-dark">
                    {item.cta}
                    <ArrowRight className="ml-2 size-4" />
                  </Link>
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
                DHI is built around process, not promises.
              </h2>
              <p className="mt-5 leading-8 text-white/65">
                The DHI 4R Method turns preparation into a visible loop: learn, revise,
                write, receive feedback, and improve with direction.
              </p>
            </div>

            <div className="grid gap-4">
              {preparationLoop.map((item) => (
                <div key={item.step} className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5 dark:border-white/10 dark:bg-white/[0.04]">
                  <item.icon className="mt-1 size-5 shrink-0 text-dhi-red" />
                  <div>
                    <p className="font-serif text-xl font-semibold text-dhi-ink dark:text-white">{item.step}</p>
                    <p className="mt-1 text-sm leading-6 text-slate-600 dark:text-white/62">{item.text}</p>
                  </div>
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
                  India Polity, mapped for UPSC revision: Articles, cases, schedules,
                  high-frequency tags, PYQ context, and saved revision flow.
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
