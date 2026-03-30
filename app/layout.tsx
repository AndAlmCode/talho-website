import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const cormorant = Cormorant_Garamond({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: '--font-serif',
  display: 'swap',
});

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Talho do André | Talho na Charneca da Caparica - Carnes de Qualidade Premium',
  description: 'Talho do André - O melhor talho na Charneca da Caparica. Corte com alma. Carnes frescas selecionadas, qualidade premium, cortes personalizados e tradição familiar. Visite-nos na Charneca da Caparica.',
  keywords: ['talho', 'charneca da caparica', 'talho charneca', 'carnes frescas', 'talho premium', 'carnes qualidade', 'açougue charneca', 'carne de vaca', 'carne de porco', 'frango fresco', 'almada', 'costa da caparica'],
  authors: [{ name: 'Talho do André' }],
  creator: 'Talho do André',
  publisher: 'Talho do André',
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  openGraph: {
    title: 'Talho do André | Talho na Charneca da Caparica',
    description: 'Corte com alma. O melhor talho na Charneca da Caparica. Carnes frescas selecionadas e qualidade premium.',
    url: 'https://talhodoandrе.com',
    siteName: 'Talho do André',
    locale: 'pt_PT',
    type: 'website',
    images: [
      {
        url: '/logo.jpeg',
        width: 1200,
        height: 630,
        alt: 'Talho do André - Corte com Alma',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Talho do André | Charneca da Caparica',
    description: 'Corte com alma. Carnes frescas e qualidade premium na Charneca da Caparica.',
    images: ['/logo.jpeg'],
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
  icons: {
    icon: '/logo.jpeg',
    apple: '/logo.jpeg',
  },
  alternates: {
    canonical: 'https://talhodoandrе.com',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  themeColor: '#2d2d2d',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://talhodoandrе.com',
    name: 'Talho do André',
    description: 'Talho premium na Charneca da Caparica. Carnes frescas selecionadas e cortes personalizados.',
    url: 'https://talhodoandrе.com',
    telephone: '+351912345678',
    image: '/logo.jpeg',
    priceRange: '€€',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Rua Principal',
      addressLocality: 'Charneca da Caparica',
      addressRegion: 'Setúbal',
      postalCode: '2820',
      addressCountry: 'PT',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 38.6167,
      longitude: -9.2,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '19:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '08:00',
        closes: '13:00',
      },
    ],
    sameAs: [],
  }

  return (
    <html lang="pt" className="bg-background scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${cormorant.variable} ${inter.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
