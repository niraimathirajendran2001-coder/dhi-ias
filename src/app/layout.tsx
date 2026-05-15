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
  title: "DHI Academy | UPSC & KAS Coaching in Bengaluru — Transforming Lives",
  description:
    "DHI Academy — Chandralayout, Bengaluru. UPSC & KAS coaching with expert faculty, proven results, and structured mentorship. Transforming Lives.",
  keywords: [
    "IAS coaching Bengaluru",
    "UPSC coaching Chandralayout",
    "KAS coaching Bangalore",
    "IAS academy",
    "civil services coaching",
    "DHI Academy",
    "UPSC preparation",
    "IAS toppers",
    "GS foundation course",
    "UPSC test series",
  ],
  authors: [{ name: "DHI Academy" }],
  icons: {
    icon: "/dhi-logo.jpg",
  },
  openGraph: {
    title: "DHI Academy | UPSC & KAS Coaching in Bengaluru — Transforming Lives",
    description:
      "UPSC & KAS coaching in Chandralayout, Bengaluru. Expert faculty. Proven results. Structured mentorship. Transforming Lives.",
    url: "https://dhiacademy.in",
    siteName: "DHI Academy",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "DHI Academy | UPSC & KAS Coaching in Bengaluru — Transforming Lives",
    description:
      "UPSC & KAS coaching in Chandralayout, Bengaluru. Expert faculty. Proven results. Structured mentorship. Transforming Lives.",
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
