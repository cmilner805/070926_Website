import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Fraunces } from 'next/font/google'
import { SiteNav } from '@/components/site-nav'
import { SiteFooter } from '@/components/site-footer'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  display: 'swap',
  axes: ['opsz'],
})

export const metadata: Metadata = {
  title: {
    default: 'Charlie Milner | Offline Editor',
    template: '%s | Charlie Milner',
  },
  description:
    'Charlie Milner is a UK-based Offline Editor specialising in film and video editing across documentary, narrative film and client work. First Class BA (Hons) Film Production graduate, Avid Media Composer Certified.',
  keywords: [
    'Charlie Milner',
    'Offline Editor',
    'Film Editor',
    'Video Editor',
    'Documentary Editor',
    'Avid Media Composer',
    'Post-Production',
  ],
  generator: 'v0.app',
  openGraph: {
    title: 'Charlie Milner | Offline Editor',
    description:
      'Emerging Offline Editor specialising in storytelling, pacing and post-production.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#161a2e',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`dark bg-background ${inter.variable} ${fraunces.variable}`}>
      <body className="min-h-dvh font-sans antialiased">
        <SiteNav />
        <main>{children}</main>
        <SiteFooter />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
