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

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.inboxotomat.com'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Inbox Otomat – Kahve Otomatı Hizmetleri | Jetinno JL300',
    template: '%s | Inbox Otomat',
  },
  description:
    'Inbox Otomat, Jetinno JL300 tam otomatik kahve makinesiyle 72 saatte anahtar teslim kurulum sunar. Türkiye genelinde 7/24 operatörsüz kahve satışı çözümleri.',
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
    'inbox otomat',
    'otomat hizmetleri',
    'kahve otomatı kiralama',
    'inboxotomat',
  ],
  authors: [{ name: 'Inbox Otomat', url: siteUrl }],
  creator: 'Inbox Otomat',
  publisher: 'Inbox Otomat',
  alternates: {
    canonical: '/',
    languages: { 'tr-TR': '/' },
  },
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    url: siteUrl,
    siteName: 'Inbox Otomat',
    title: 'Inbox Otomat – Kahve Otomatı Hizmetleri | Jetinno JL300',
    description:
      '72 saatte anahtar teslim kahve otomatı kurulumu. Türkiye\'nin her bölgesinde 7/24 operatörsüz hizmet.',
    images: [
      {
        url: '/images/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Inbox Otomat Kahve Otomatı Hizmetleri',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Inbox Otomat – Kahve Otomatı Hizmetleri',
    description: '72 saatte anahtar teslim kahve otomatı kurulumu. 7/24 operatörsüz hizmet.',
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
    // google: 'your-google-verification-code', // Google Search Console doğrulama kodu buraya
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
        <link rel="canonical" href={siteUrl} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Inbox Otomat',
              url: siteUrl,
              logo: `${siteUrl}/images/inbox-logo.svg`,
              description:
                'Inbox Otomat, Jetinno JL300 kahve otomatıyla 72 saatte kurulum garantisi sunan tam otomatik kahve çözümleri sağlayıcısıdır.',
              contactPoint: {
                '@type': 'ContactPoint',
                contactType: 'customer support',
                availableLanguage: 'Turkish',
              },
              areaServed: 'TR',
              sameAs: [
                'https://www.inboxotomat.com',
              ],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              name: 'Inbox Otomat',
              url: siteUrl,
              image: `${siteUrl}/images/og-image.webp`,
              description: 'Türkiye genelinde 7/24 operatörsüz kahve otomatı kurulum ve kiralama hizmetleri.',
              areaServed: {
                '@type': 'Country',
                name: 'Turkey',
              },
              knowsLanguage: 'tr',
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
