import type { Metadata } from 'next'
import { type Lang } from '@/lib/i18n'
import CookieBanner from '@/components/CookieBanner'

export async function generateStaticParams() {
  return [{ lang: 'th' }, { lang: 'en' }]
}

export async function generateMetadata({ params }: { params: { lang: Lang } }): Promise<Metadata> {
  const isEN = params.lang === 'en'
  return {
    title: isEN ? 'Haliviq | Digital Product Studio in Bangkok' : 'Haliviq | สตูดิโอพัฒนาผลิตภัณฑ์ดิจิทัลในกรุงเทพฯ',
    description: isEN
      ? 'Haliviq is a Bangkok digital product studio. We plan, design and build websites, mobile apps, LINE mini apps and AI tools for Thai and Southeast Asian teams.'
      : 'Haliviq เป็นสตูดิโอในกรุงเทพฯ ที่ช่วยวางแผน ออกแบบ และพัฒนา website, แอปมือถือ, LINE mini app และระบบ AI ให้ทีมในไทยและเอเชียตะวันออกเฉียงใต้ ทำงานเสร็จที่เดียว',
  }
}

export default function LangLayout({ children, params }: { children: React.ReactNode; params: { lang: Lang } }) {
  const lang = (params.lang === 'en' ? 'en' : 'th') as Lang
  return (
    <>
      {children}
      <CookieBanner lang={lang} />
    </>
  )
}
