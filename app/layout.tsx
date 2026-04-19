import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Muhammad Abdul Nafay | Full Stack Developer | MERN + Laravel',
  description: 'Professional Full Stack Web Developer specializing in MERN stack and Laravel. Building scalable, user-friendly web applications with modern technologies.',
  keywords: [
    'Full Stack Developer',
    'MERN Stack',
    'Laravel',
    'React',
    'Node.js',
    'Web Development',
    'Next.js',
    'JavaScript',
    'PHP',
    'MongoDB',
    'MySQL',
    'PostgreSQL',
  ],
  authors: [{ name: 'Muhammad Abdul Nafay' }],
  creator: 'Muhammad Abdul Nafay',
  metadataBase: new URL('https://nafay-portfolio.vercel.app'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://nafay-portfolio.vercel.app',
    title: 'Muhammad Abdul Nafay | Full Stack Developer',
    description: 'Professional Full Stack Web Developer specializing in MERN stack and Laravel.',
    images: [
      {
        url: 'https://nafay-portfolio.vercel.app/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Muhammad Abdul Nafay - Full Stack Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Muhammad Abdul Nafay | Full Stack Developer',
    description: 'Professional Full Stack Web Developer specializing in MERN stack and Laravel.',
    images: ['https://nafay-portfolio.vercel.app/og-image.png'],
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
    'max-snippet': -1,
    'max-video-preview': -1,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background scroll-smooth">
      <head>
        <meta name="theme-color" content="#1f2937" media="(prefers-color-scheme: dark)" />
        <meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </head>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
