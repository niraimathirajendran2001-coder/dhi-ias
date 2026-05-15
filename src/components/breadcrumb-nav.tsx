'use client'

import Link from 'next/link'
import { ChevronRight, Home } from 'lucide-react'

interface BreadcrumbItem {
  label: string
  href?: string
}

export function BreadcrumbNav({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Breadcrumb" className="py-3 bg-white dark:bg-card border-b border-light-gray dark:border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ol className="flex items-center gap-1.5 text-sm font-sans">
          <li>
            <Link href="/" className="flex items-center gap-1 text-mid-gray hover:text-sovereign-gold dark:text-ivory-cream/50 dark:hover:text-champagne-gold transition-colors">
              <Home className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Home</span>
            </Link>
          </li>
          {items.map((item) => (
            <li key={item.label} className="flex items-center gap-1.5">
              <ChevronRight className="w-3 h-3 text-mid-gray/50 dark:text-ivory-cream/20" />
              {item.href ? (
                <Link href={item.href} className="text-mid-gray hover:text-sovereign-gold dark:text-ivory-cream/50 dark:hover:text-champagne-gold transition-colors">
                  {item.label}
                </Link>
              ) : (
                <span className="text-navy dark:text-ivory-cream font-medium">{item.label}</span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  )
}
