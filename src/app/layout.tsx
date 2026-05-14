import type { Metadata } from "next";
import { Cormorant_Garamond, IBM_Plex_Sans, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as SonnerToaster } from "@/components/ui/sonner";

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-cormorant-garamond",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const ibmPlexSans = IBM_Plex_Sans({
  variable: "--font-ibm-plex-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aristocrat IAS Academy | Premium UPSC & KAS Coaching in Bengaluru",
  description:
    "Aristocrat IAS Academy — Chandralayout, Bengaluru. UPSC, IAS, KAS coaching with expert faculty, proven results, and structured mentorship. Your path to civil service begins here.",
  keywords: [
    "IAS coaching Bengaluru",
    "UPSC coaching Chandralayout",
    "KAS coaching Bangalore",
    "IAS academy",
    "civil services coaching",
    "Aristocrat IAS",
    "UPSC preparation",
    "IAS toppers",
    "GS foundation course",
    "UPSC test series",
  ],
  authors: [{ name: "Aristocrat IAS Academy" }],
  icons: {
    icon: "/logo.svg",
  },
  openGraph: {
    title: "Aristocrat IAS Academy | Where Civil Servants Begin",
    description:
      "UPSC & KAS coaching in Chandralayout, Bengaluru. Expert faculty. Proven results. Structured mentorship.",
    url: "https://aristocratiasacademy.in",
    siteName: "Aristocrat IAS Academy",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aristocrat IAS Academy | Where Civil Servants Begin",
    description:
      "UPSC & KAS coaching in Chandralayout, Bengaluru. Expert faculty. Proven results. Structured mentorship.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${cormorantGaramond.variable} ${ibmPlexSans.variable} ${jetbrainsMono.variable} antialiased bg-background text-foreground font-sans`}
      >
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <a href="#main-content" className="skip-link">
            Skip to main content
          </a>
          {children}
          <Toaster />
          <SonnerToaster position="top-right" richColors />
        </ThemeProvider>
      </body>
    </html>
  );
}
