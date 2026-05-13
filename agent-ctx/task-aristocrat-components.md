# Task: Create Three Aristocrat IAS Academy Components

## Summary
Created three premium components for the Aristocrat IAS Academy website, following brand guidelines and design specifications.

## Files Created

### 1. `/home/z/my-project/src/components/resources-section.tsx`
- **Free Resources / Lead Capture Section** with Gold Pale (#FDF4DC) background
- Two-column layout (form left, resource cards right) — stacks on mobile
- Lead capture form with react-hook-form + zod validation (fullName, email, phone)
- Simulated submission with setTimeout (1.5s delay), success state with green checkmark
- 4 resource cards with hover effects (navy left border + lift animation)
- Uses shadcn/ui Input, Button, Label components
- Framer Motion scroll-triggered reveal animations

### 2. `/home/z/my-project/src/components/location-section.tsx`
- **Location & Reach Section** with Ivory Cream (#FAFAF7) background
- Two-column layout (map placeholder left, contact info right)
- Styled navy map placeholder with grid pattern, gold pin icon, and "Get Directions" button linking to Google Maps
- Contact details: address, phone, WhatsApp, email with appropriate icons
- Operational hours table (Mon-Fri, Saturday, Sunday)
- "How to Reach Us" section with metro, landmark, and bus route info
- Social media links row (Instagram, YouTube, Facebook, Twitter) with hover gold effect
- Framer Motion scroll-triggered animations

### 3. `/home/z/my-project/src/components/stats-counter-section.tsx`
- **Animated Stats Section** with Navy (#0F1F4B) background
- 4 stats in responsive grid (2 cols mobile, 4 cols desktop)
- Animated count-up using custom `useCountUp` hook with ease-out cubic easing
- Triggers on viewport entry via framer-motion `useInView`
- Vertical gold separators (20% opacity) between stats on desktop
- Champagne gold numbers in Playfair Display, cream labels

### 4. `/home/z/my-project/src/app/page.tsx` — Updated
- Integrated all three components in order: StatsCounter → Resources → Location

## Technical Details
- All components are `'use client'`
- Uses `cn()` from `@/lib/utils` for class merging
- Brand colors applied via inline styles and Tailwind custom color classes
- Responsive mobile-first design with proper breakpoints
- TypeScript strict typing throughout
- Lint passes for all new files (pre-existing lint error in testimonials-section.tsx unrelated)
