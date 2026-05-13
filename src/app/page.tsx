'use client'

import { Header } from '@/components/header'
import { ScrollProgress } from '@/components/scroll-progress'
import HeroSection from '@/components/hero-section'
import ResultsTicker from '@/components/results-ticker'
import WhyAristocratSection from '@/components/why-aristocrat-section'
import CoursesSection from '@/components/courses-section'
import { StatsCounterSection } from '@/components/stats-counter-section'
import FacultySection from '@/components/faculty-section'
import TestimonialsSection from '@/components/testimonials-section'
import AboutSection from '@/components/about-section'
import { ResourcesSection } from '@/components/resources-section'
import { FAQSection } from '@/components/faq-section'
import AdmissionsSection from '@/components/admissions-section'
import { LocationSection } from '@/components/location-section'
import Footer from '@/components/footer'
import { WhatsAppButton } from '@/components/whatsapp-button'
import { ChatbotWidget } from '@/components/chatbot-widget'
import { BackToTop } from '@/components/back-to-top'
import { AnnouncementBar } from '@/components/announcement-bar'
import { SectionDivider } from '@/components/section-divider'
import CountdownSection from '@/components/countdown-section'
import AchieversSection from '@/components/achievers-section'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <AnnouncementBar />
      <ScrollProgress />
      <Header />

      <main id="main-content" className="flex-1">
        {/* Hero — Full viewport, navy background */}
        <section id="home">
          <HeroSection />
          <ResultsTicker />
        </section>

        <SectionDivider variant="wave" />

        {/* Why Aristocrat — Cream background */}
        <WhyAristocratSection />

        <SectionDivider variant="gold-line" />

        {/* Stats Counter — Navy dark strip */}
        <StatsCounterSection />

        <SectionDivider variant="wave" />

        {/* Countdown — Navy background */}
        <CountdownSection />

        <SectionDivider variant="gold-line" />

        {/* Courses — Light gradient background */}
        <section id="courses">
          <CoursesSection />
        </section>

        <SectionDivider variant="ornament" />

        {/* Faculty — Navy dark section */}
        <section id="faculty">
          <FacultySection />
        </section>

        <SectionDivider variant="wave" />

        {/* Testimonials — Cream background */}
        <section id="results">
          <TestimonialsSection />
        </section>

        <SectionDivider variant="gold-line" />

        {/* Achievers — Cream background */}
        <AchieversSection />

        <SectionDivider variant="wave" />

        {/* About — Cream background */}
        <section id="about">
          <AboutSection />
        </section>

        <SectionDivider variant="gold-line" />

        {/* Resources — Gold pale background */}
        <section id="resources">
          <ResourcesSection />
        </section>

        <SectionDivider variant="wave" />

        {/* FAQ — Cream background */}
        <FAQSection />

        <SectionDivider variant="gold-line" />

        {/* Admissions — Navy background */}
        <section id="admissions">
          <AdmissionsSection />
        </section>

        <SectionDivider variant="wave" />

        {/* Location — Ivory cream background */}
        <section id="contact">
          <LocationSection />
        </section>
      </main>

      <Footer />
      <BackToTop />
      <ChatbotWidget />
      <WhatsAppButton />
    </div>
  )
}
