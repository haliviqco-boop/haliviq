import { t, type Lang } from '@/lib/i18n'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import CoreSkills from '@/components/CoreSkills'
import WhatWeDo from '@/components/WhatWeDo'
import Clients from '@/components/Clients'
import Services from '@/components/Services'
import Work from '@/components/Work'
import FeaturedWork from '@/components/FeaturedWork'
import PortfolioGallery from '@/components/PortfolioGallery'
import Process from '@/components/Process'
import About from '@/components/About'
import LatestThinking from '@/components/LatestThinking'
import FAQ from '@/components/FAQ'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'

export async function generateStaticParams() {
  return [{ lang: 'th' }, { lang: 'en' }]
}

export default function HomePage({ params }: { params: { lang: string } }) {
  const lang = (params.lang === 'en' ? 'en' : 'th') as Lang
  const tr = t[lang] as any

  return (
    <main>
      <Navbar lang={lang} tr={tr} transparent />
      <Hero lang={lang} tr={tr} />
      <CoreSkills lang={lang} tr={tr} />
      <WhatWeDo lang={lang} tr={tr} />
      <Clients lang={lang} tr={tr} />
      <Services lang={lang} tr={tr} />
      {/* Work section removed */}
      <FeaturedWork lang={lang} tr={tr} />
      <PortfolioGallery lang={lang} tr={tr} />
      <Process lang={lang} tr={tr} />
      <About lang={lang} tr={tr} />
      <LatestThinking lang={lang} tr={tr} />
      <FAQ lang={lang} tr={tr} />
      <CTA lang={lang} tr={tr} />
      <Footer lang={lang} tr={tr} />
    </main>
  )
}
