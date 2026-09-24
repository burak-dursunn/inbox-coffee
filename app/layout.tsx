import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'

const jakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
})

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-fraunces',
  style: ['normal', 'italic'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
})

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://coffeevar.com.tr'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'CoffeeVar – Kahve Otomatı Çözümleri | Jetinno JL300',
    template: '%s | CoffeeVar',
  },
  description:
    'CoffeeVar, Jetinno JL300 tam otomatik kahve makinesiyle 72 saatte anahtar teslim kurulum sunar. Türkiye genelinde 7/24 operatörsüz kahve satışı.',
  keywords: [
    'kahve otomatı',
    'vending machine',
    'coffee machine',
    'jetinno jl300',
    'kahve otomatı türkiye',
    'otomatik kahve makinesi',
    'anahtar teslim kahve',
    '72 saatte kurulum',
    'kafeterya makinesi',
  ],
  authors: [{ name: 'CoffeeVar' }],
  creator: 'CoffeeVar',
  publisher: 'CoffeeVar',
  alternates: {
    canonical: '/',
    languages: { 'tr-TR': '/' },
  },
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    url: siteUrl,
    siteName: 'CoffeeVar',
    title: 'CoffeeVar – Kahve Otomatı Çözümleri | Jetinno JL300',
    description:
      '72 saatte anahtar teslim kahve otomatı kurulumu. Türkiye\'nin her bölgesinde hizmet.',
    images: [
      {
        url: '/images/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'CoffeeVar Kahve Otomatı',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CoffeeVar – Kahve Otomatı Çözümleri',
    description: '72 saatte anahtar teslim kahve otomatı kurulumu.',
    images: ['/images/og-image.webp'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // google: 'your-google-verification-code',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#1a0f0a',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr" className={`${jakartaSans.variable} ${cormorant.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'CoffeeVar',
              url: siteUrl,
              logo: `${siteUrl}/images/logo.webp`,
              description:
                'CoffeeVar, Jetinno JL300 kahve otomatıyla 72 saatte kurulum garantisi sunan tam otomatik kahve çözümleri sağlayıcısıdır.',
              contactPoint: {
                '@type': 'ContactPoint',
                contactType: 'customer support',
                availableLanguage: 'Turkish',
              },
              areaServed: 'TR',
              sameAs: [],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Product',
              name: 'Jetinno JL300 Kahve Otomatı',
              description:
                'Tam otomatik, 15.6" dokunmatik ekranlı, 50+ içecek seçenekli, UV hijyen sistemli kahve otomatı.',
              brand: { '@type': 'Brand', name: 'Jetinno' },
              offers: {
                '@type': 'Offer',
                availability: 'https://schema.org/InStock',
                areaServed: 'TR',
              },
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
