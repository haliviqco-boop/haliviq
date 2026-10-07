import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'

export const metadata: Metadata = {
  title: 'Haliviq | Digital Product Studio in Bangkok',
  description: 'Haliviq is a Bangkok digital product studio. We plan, design and build websites, mobile apps, LINE mini apps and AI tools for Thai and Southeast Asian teams.',
  icons: {
    icon: [
      { url: '/favicon.png', type: 'image/png' },
      { url: '/favicon.ico', sizes: 'any' },
    ],
    shortcut: '/favicon.ico',
    apple: '/favicon.png',
  },
  openGraph: {
    title: 'Haliviq | Digital Product Studio in Bangkok',
    description: 'Haliviq is a Bangkok digital product studio. We plan, design and build websites, mobile apps, LINE mini apps and AI tools for Thai and Southeast Asian teams.',
    images: ['/og/haliviq-og.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Haliviq | Digital Product Studio in Bangkok',
    description: 'Haliviq is a Bangkok digital product studio. We plan, design and build websites, mobile apps, LINE mini apps and AI tools for Thai and Southeast Asian teams.',
    images: ['/og/haliviq-og.png'],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="th">
      <head>
        <link rel="preload" href="/fonts/LINESeedSansTH_Th.woff2" as="font" type="font/woff2" crossOrigin="anonymous"/>
        <link rel="preload" href="/fonts/LINESeedSansTH_Rg.woff2" as="font" type="font/woff2" crossOrigin="anonymous"/>
        <link rel="preload" href="/fonts/LINESeedSansTH_Bd.woff2" as="font" type="font/woff2" crossOrigin="anonymous"/>
        <link rel="preconnect" href="https://cdn.jsdelivr.net" crossOrigin="anonymous" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/tabler-icons.min.css"/>
      </head>
      <body>
        {children}
        <Script async src="https://www.googletagmanager.com/gtag/js?id=AW-18293218603" strategy="afterInteractive"/>
        <Script id="gtag-init" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('consent', 'default', {
            analytics_storage: 'denied',
            ad_storage: 'denied',
            ad_user_data: 'denied',
            ad_personalization: 'denied'
          });
          gtag('js', new Date());
          gtag('config', 'AW-18293218603');
        `}</Script>
      </body>
    </html>
  )
}
