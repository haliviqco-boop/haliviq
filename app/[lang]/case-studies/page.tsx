import type { Metadata } from 'next'
import { type Lang } from '@/lib/i18n'
import CaseStudiesPageClient from './CaseStudiesPageClient'

export async function generateMetadata({ params }: { params: { lang: Lang } }): Promise<Metadata> {
  const isEN = params.lang === 'en'
  const title = isEN
    ? 'Case Studies — Real Client Results | Haliviq'
    : 'Case Studies — ผลงานจริงของลูกค้า | Haliviq'
  const description = isEN
    ? 'In-depth case studies on how Haliviq helped clients across F&B, government, real estate, retail, and more solve real challenges with design and engineering.'
    : 'เจาะลึก Case Study การทำงานของ Haliviq ที่ช่วยลูกค้าในธุรกิจอาหาร ภาครัฐ อสังหาริมทรัพย์ ค้าปลีก และอื่นๆ แก้โจทย์จริงด้วยการออกแบบและวิศวกรรม'
  const siteUrl = `https://haliviq.com/${params.lang}/case-studies`
  return {
    title,
    description,
    alternates: { canonical: siteUrl },
    openGraph: { title, description, url: siteUrl },
    twitter: { card: 'summary_large_image', title, description },
  }
}

export default function Page({ params }: { params: { lang: Lang } }) {
  return <CaseStudiesPageClient params={params} />
}
