import ServiceLayout from '@/components/service/ServiceLayout'
import { type Lang } from '@/lib/i18n'
export async function generateStaticParams() {
  return [{ lang: 'th' }, { lang: 'en' }]
}
export default function Page({ params }: { params: { lang: Lang } }) {
  const isEN = params.lang === 'en'
  return (
    <ServiceLayout
      lang={params.lang as Lang}
      badge={isEN ? 'Engineering / Web & Mobile' : 'Engineering / Web & Mobile'}
      title={isEN ? 'Reliable Code' : 'Code ที่เชื่อถือได้'}
      subtitle={isEN ? 'Built to Scale with You' : 'สร้างเพื่อเติบโตไปกับคุณ'}
      heroDesc={isEN ? 'Haliviq delivers Engineering / Web & Mobile that works in the real world — backed by 8+ years of experience and 120+ projects delivered.' : 'Haliviq ให้บริการ Engineering / Web & Mobile ที่ครบวงจร ด้วยทีมผู้เชี่ยวชาญประสบการณ์กว่า 8 ปี และโปรเจกต์กว่า 120 รายการ'}
      ctaTitle={isEN ? 'Ready to get started?' : 'พร้อมเริ่มต้นไหม?'}
      ctaDesc={isEN ? 'Talk to our team for free. No commitment required.' : 'ปรึกษาทีมของเราฟรี ไม่มีข้อผูกมัด'}
      color="var(--purple)" bg="var(--purple-bg)"
      heroImg="/images/services/web-mobile/hero.jpg"
      whyImg="/images/services/web-mobile/why1.jpg"
      whyImg2="/images/services/web-mobile/why2.jpg"
      featureImg="/images/services/web-mobile/feature.jpg"
      processImg="/images/services/web-mobile/process.jpg"
    />
  )
}
