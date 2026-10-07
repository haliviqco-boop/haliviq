import type { Metadata } from 'next'
import { type Lang } from '@/lib/i18n'
import CookieBanner from '@/components/CookieBanner'

export async function generateStaticParams() {
  return [{ lang: 'th' }, { lang: 'en' }]
}

export async function generateMetadata({ params }: { params: { lang: Lang } }): Promise<Metadata> {
  const isEN = params.lang === 'en'
  return {
    title: isEN ? 'Haliviq — Digital Product Studio' : 'Haliviq — สตูดิโอพัฒนาผลิตภัณฑ์ดิจิทัล',
    description: isEN
      ? 'Strategy, design, and engineering under one roof.'
      : 'กลยุทธ์ ดีไซน์ และพัฒนาซอฟต์แวร์ ที่เดียวจบ',
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
