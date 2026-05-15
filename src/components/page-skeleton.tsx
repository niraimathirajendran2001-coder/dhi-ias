'use client'

import { Header } from '@/components/header'
import Footer from '@/components/footer'

export function PageSkeleton() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-20">
        {/* Hero skeleton */}
        <section className="relative py-20 md:py-28 bg-navy overflow-hidden">
          <div className="absolute inset-0 pointer-events-none gradient-mesh-hero" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="h-4 w-24 bg-white/10 rounded mx-auto mb-4 animate-pulse" />
            <div className="h-12 w-80 bg-white/10 rounded mx-auto mb-6 animate-pulse" />
            <div className="h-5 w-96 bg-white/10 rounded mx-auto animate-pulse" />
          </div>
        </section>

        {/* Content skeleton */}
        <section className="py-16 md:py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="h-8 w-48 bg-light-gray rounded mb-8 animate-pulse" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div
                  key={i}
                  className="p-6 rounded-xl bg-white border border-light-gray"
                >
                  <div className="w-12 h-12 bg-light-gray rounded-lg mb-4 animate-pulse" />
                  <div className="h-5 w-3/4 bg-light-gray rounded mb-3 animate-pulse" />
                  <div className="h-4 w-full bg-light-gray rounded mb-2 animate-pulse" />
                  <div className="h-4 w-2/3 bg-light-gray rounded animate-pulse" />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
