import type { Metadata } from 'next'
import { type Lang } from '@/lib/i18n'
import WorkPageClient from './WorkPageClient'

export async function generateMetadata({ params }: { params: { lang: Lang } }): Promise<Metadata> {
  const isEN = params.lang === 'en'
  const title = isEN
    ? 'Our Work — 20+ Digital Products Shipped | Haliviq'
    : 'ผลงานของเรา — ผลิตภัณฑ์ดิจิทัลกว่า 20 โปรเจกต์ | Haliviq'
  const description = isEN
    ? 'Browse Haliviq\'s portfolio of websites, mobile apps, and AI CRM systems across F&B, government, real estate, retail, and more — grouped by service category.'
    : 'สำรวจผลงานของ Haliviq ทั้งเว็บไซต์ แอปมือถือ และระบบ AI CRM ครอบคลุมธุรกิจอาหาร ภาครัฐ อสังหาริมทรัพย์ ค้าปลีก และอื่นๆ จัดกลุ่มตามประเภทบริการ'
  const siteUrl = `https://haliviq.com/${params.lang}/work`
  return {
    title,
    description,
    alternates: { canonical: siteUrl },
    openGraph: { title, description, url: siteUrl },
    twitter: { card: 'summary_large_image', title, description },
  }
}

export default function Page({ params }: { params: { lang: Lang } }) {
  return <WorkPageClient params={params} />
}
