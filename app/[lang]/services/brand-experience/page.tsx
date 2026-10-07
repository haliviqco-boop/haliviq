import ServiceLayout from '@/components/service/ServiceLayout'
import { type Lang } from '@/lib/i18n'

export async function generateStaticParams() {
  return [{ lang: 'th' }, { lang: 'en' }]
}

export default function Page({ params }: { params: { lang: Lang } }) {
  const isEN = params.lang === 'en'
  const badge    = isEN ? 'Design / Brand Experience'  : 'ดีไซน์ / แบรนด์ (Brand Experience)'
  const title    = isEN ? 'A Brand That Is'  : 'แบรนด์ที่'
  const subtitle = isEN ? 'Remembered Everywhere'    : 'จดจำได้ทุกที่'
  const heroDesc = isEN ? 'Brand is not a logo — it is the feeling people have every time they interact with your product. Haliviq builds brand experiences that are bold, consistent, and impossible to forget.'  : 'แบรนด์ไม่ใช่แค่โลโก้ แต่คือความรู้สึกที่คนมีทุกครั้งที่ใช้ผลิตภัณฑ์ของคุณ Haliviq สร้างแบรนด์ที่โดดเด่น สม่ำเสมอ และจำได้ไม่ลืม'
  const whyTitle = isEN ? 'Why brand is a strategic business asset'    : 'ทำไมแบรนด์ถึงเป็นสินทรัพย์สำคัญของธุรกิจ'
  const whyDesc  = isEN ? 'In commoditised markets, brand is often the only sustainable differentiator. Customers choose, trust, and stay loyal to brands — not products. A strong brand commands premium pricing and reduces acquisition costs.'  : 'ในตลาดที่สินค้าคล้ายกันไปหมด แบรนด์มักเป็นสิ่งเดียวที่สร้างความต่างได้อย่างยั่งยืน ลูกค้าเลือก เชื่อ และภักดีต่อแบรนด์ ไม่ใช่ตัวสินค้า แบรนด์ที่แข็งแกร่งทำให้ตั้งราคาพรีเมียมได้และลดต้นทุนในการหาลูกค้า'
  const ctaTitle = isEN ? 'Ready to build a brand that lasts?'    : 'พร้อมสร้างแบรนด์ที่อยู่ได้นานหรือยัง?'
  const ctaDesc  = isEN ? 'Start with a free Brand Audit. We will assess your current identity and map opportunities.'   : 'เริ่มด้วยการตรวจแบรนด์ฟรี เราจะประเมินตัวตนแบรนด์ปัจจุบันและมองหาโอกาส'
  const heroBullets = isEN ? [
      'Brand strategy, positioning, and messaging framework',
      'Visual identity: logo, colour, typography, and illustration style',
      'Brand guidelines and asset library for every touchpoint',
      'Digital experience design aligned with brand values',
      'Brand rollout across web, mobile, print, and social',
    ] : [
      'วางกลยุทธ์แบรนด์ ตำแหน่งในตลาด และกรอบการสื่อสาร',
      'ตัวตนแบรนด์ด้านภาพ: โลโก้ สี ตัวอักษร และสไตล์ภาพประกอบ',
      'คู่มือแบรนด์และคลังไฟล์สำหรับทุกจุดที่ลูกค้าพบแบรนด์',
      'ออกแบบประสบการณ์ดิจิทัลให้สอดคล้องกับคุณค่าของแบรนด์',
      'นำแบรนด์ไปใช้บน Web, Mobile, สิ่งพิมพ์ และ Social',
    ]
  const whyPoints   = isEN ? [
      'Consistent brand presentation across all channels increases revenue by up to 23%',
      'Strong brands reduce customer acquisition costs by building trust before the first interaction',
      'A clearly articulated brand attracts better talent — people want to work for companies they believe in',
      'Brand equity compounds over time — one of the few assets that appreciates',
      'Digital-first brand design ensures your identity works from a 6-inch phone screen to a billboard',
    ] : [
      'การนำเสนอแบรนด์ที่สม่ำเสมอทุกช่องทางเพิ่มรายได้ได้ถึง 23%',
      'แบรนด์ที่แข็งแกร่งลดต้นทุนการหาลูกค้า เพราะสร้างความเชื่อมั่นก่อนที่จะได้คุยกันครั้งแรก',
      'แบรนด์ที่สื่อสารชัดเจนดึงดูดคนเก่งได้ดีกว่า เพราะคนอยากทำงานกับบริษัทที่ตัวเองเชื่อ',
      'คุณค่าของแบรนด์สะสมไปเรื่อยๆ เป็นสินทรัพย์หายากที่มีมูลค่าเพิ่มตามเวลา',
      'ออกแบบแบรนด์โดยคิดถึงดิจิทัลก่อน ทำให้ตัวตนของคุณใช้ได้ตั้งแต่หน้าจอ 6 นิ้วจนถึงป้ายโฆษณา',
    ]
  const outcomes    = isEN ? [
      {stat: '23%', label: 'Revenue from Consistency', desc: 'Cross-channel brand alignment'},
      {stat: '40%', label: 'Lower Acquisition Cost', desc: 'With strong brand trust'},
      {stat: '3x', label: 'Better Talent Attraction', desc: 'With clear brand purpose'},
      {stat: '10+ yrs', label: 'Brand System Lifespan', desc: 'Built to evolve, not expire'}
    ] : [
      {stat: '23%', label: 'รายได้เพิ่มจากความสม่ำเสมอ', desc: 'Cross-channel Brand Alignment'},
      {stat: '40%', label: 'ลดต้นทุนการหาลูกค้า', desc: 'จากความเชื่อมั่นในแบรนด์'},
      {stat: '3x', label: 'ดึงดูดคนเก่งได้ดีกว่า', desc: 'จากจุดมุ่งหมายของแบรนด์ที่ชัดเจน'},
      {stat: '10+ ปี', label: 'Brand System Lifespan', desc: 'สร้างให้พัฒนาต่อได้ ไม่ใช่หมดอายุ'}
    ]
  const features    = isEN ? [
      {icon: 'ti-target', title: 'Brand Strategy & Positioning', desc: 'Define the brand why, who, what, and how — find unique market positioning and craft messaging that resonates.'},
      {icon: 'ti-palette', title: 'Visual Identity Design', desc: 'Create a unified logo, colour palette, typography system, illustration style, and photography direction.'},
      {icon: 'ti-book-2', title: 'Brand Guidelines', desc: 'Document every brand element with clear dos and don\'ts so everyone uses the brand correctly.'},
      {icon: 'ti-device-desktop', title: 'Digital Brand Experience', desc: 'Apply the brand across digital touchpoints — website, app, email, and social media.'},
      {icon: 'ti-writing', title: 'Brand Voice & Messaging', desc: 'Define tone of voice, key messages, and brand story that align with the visual identity.'},
      {icon: 'ti-certificate', title: 'Brand Asset Library', desc: 'Consolidate all assets in a brand hub that teams can access easily and use correctly every time.'}
    ] : [
      {icon: 'ti-target', title: 'Brand Strategy & Positioning', desc: 'กำหนดเหตุผล กลุ่มเป้าหมาย สิ่งที่นำเสนอ และวิธีการของแบรนด์ หาจุดยืนที่แตกต่างในตลาด และวางข้อความที่โดนใจกลุ่มเป้าหมาย'},
      {icon: 'ti-palette', title: 'Visual Identity Design', desc: 'สร้างโลโก้ ชุดสี ระบบตัวอักษร สไตล์ภาพประกอบ และแนวทางการถ่ายภาพที่เป็นหนึ่งเดียวกัน'},
      {icon: 'ti-book-2', title: 'Brand Guidelines', desc: 'จัดทำเอกสารทุกองค์ประกอบของแบรนด์ พร้อมข้อควรทำและไม่ควรทำที่ชัดเจน เพื่อให้ทุกคนใช้แบรนด์ได้ถูกต้อง'},
      {icon: 'ti-device-desktop', title: 'Digital Brand Experience', desc: 'นำแบรนด์ไปใช้บนช่องทางดิจิทัล ตั้งแต่เว็บไซต์ แอป อีเมล ไปจนถึง Social Media'},
      {icon: 'ti-writing', title: 'Brand Voice & Messaging', desc: 'กำหนดน้ำเสียง ข้อความหลัก และเรื่องราวของแบรนด์ ให้สอดคล้องกับตัวตนด้านภาพ'},
      {icon: 'ti-certificate', title: 'Brand Asset Library', desc: 'รวบรวมไฟล์ทั้งหมดไว้ใน Brand Hub ที่ทีมเข้าถึงง่าย และใช้ได้ถูกต้องทุกครั้ง'}
    ]
  const steps       = isEN ? [
      {no: '01', title: 'Brand Discovery', desc: 'Understand business goals, target audience, competitive landscape, and brand aspirations.'},
      {no: '02', title: 'Strategy & Positioning', desc: 'Define brand positioning, value proposition, and messaging framework with stakeholders.'},
      {no: '03', title: 'Identity Design', desc: 'Create multiple visual identity directions, test, and refine to find the strongest approach.'},
      {no: '04', title: 'System & Guidelines', desc: 'Develop a complete brand system with clear guidelines for every touchpoint.'},
      {no: '05', title: 'Rollout & Activation', desc: 'Apply the brand across digital and physical touchpoints and train the team to use it correctly.'}
    ] : [
      {no: '01', title: 'Brand Discovery', desc: 'ทำความเข้าใจเป้าหมายธุรกิจ กลุ่มเป้าหมาย คู่แข่ง และภาพที่อยากให้แบรนด์เป็น'},
      {no: '02', title: 'Strategy & Positioning', desc: 'กำหนดตำแหน่งแบรนด์ คุณค่าที่เสนอ และกรอบการสื่อสาร ร่วมกับผู้มีส่วนเกี่ยวข้อง'},
      {no: '03', title: 'Identity Design', desc: 'สร้างตัวตนด้านภาพหลายแนวทาง ทดสอบและปรับจนได้ทิศทางที่แข็งแกร่ง'},
      {no: '04', title: 'System & Guidelines', desc: 'พัฒนาระบบแบรนด์ครบชุด พร้อมคู่มือที่ชัดเจนสำหรับทุกจุดที่ลูกค้าพบแบรนด์'},
      {no: '05', title: 'Rollout & Activation', desc: 'นำแบรนด์ไปใช้ทั้งบนดิจิทัลและของจริง พร้อมอบรมทีมให้ใช้ได้ถูกต้อง'}
    ]
  const caseStudies = isEN ? [
      {tag: 'F&B · Bangkok', title: 'Restaurant Rebrand Grows Revenue 35%', desc: 'Repositioned brand, created visual identity, and applied across every touchpoint.', result: 'Revenue up 35% in 6 months'},
      {tag: 'SaaS · Bangkok', title: 'Brand That Attracts Series A Funding', desc: 'Built a credible, premium brand that gave investors confidence in the company vision.', result: 'Series A successfully closed'},
      {tag: 'Healthcare · Bangkok', title: 'Brand Unification Across 5 Hospitals', desc: 'Created a master brand and sub-brand architecture consistent across the network.', result: 'Brand recognition up 60%'}
    ] : [
      {tag: 'F&B · กรุงเทพฯ', title: 'Rebrand ร้านอาหาร รายได้เพิ่ม 35%', desc: 'วางตำแหน่งแบรนด์ใหม่ สร้างตัวตนด้านภาพ และนำไปใช้ทุกจุดที่ลูกค้าพบแบรนด์', result: 'รายได้เพิ่ม 35% ใน 6 เดือน'},
      {tag: 'SaaS · กรุงเทพฯ', title: 'แบรนด์ที่ดึงดูดเงินทุน Series A', desc: 'สร้างแบรนด์ที่น่าเชื่อถือและดูพรีเมียม ทำให้นักลงทุนเชื่อมั่นในวิสัยทัศน์ของบริษัท', result: 'ระดมทุน Series A สำเร็จ'},
      {tag: 'Healthcare · กรุงเทพฯ', title: 'รวมแบรนด์ 5 โรงพยาบาลให้เป็นหนึ่งเดียว', desc: 'สร้างแบรนด์หลักและโครงสร้างแบรนด์ย่อยที่สม่ำเสมอทั่วเครือข่าย', result: 'คนจำแบรนด์ได้เพิ่ม 60%'}
    ]
  const faqs        = isEN ? [
      {q: 'What is the difference between a rebrand and a refresh?', a: 'A rebrand changes the entire identity including strategy. A refresh updates the visual elements while preserving existing equity. We help assess which is right for your situation.'},
      {q: 'How long does it take?', a: 'A basic brand identity takes 8-12 weeks. A full brand system including guidelines and digital takes 16-20 weeks.'},
      {q: 'Do we need research first?', a: 'Highly recommended. Good brand discovery includes customer interviews, competitor analysis, and internal workshops to give the strategy a solid foundation.'},
      {q: 'What are the deliverables?', a: 'Logo files in all formats, brand guideline PDF, asset library, typography licence, and templates for social, presentations, and documents.'}
    ] : [
      {q: 'Rebrand กับ Refresh ต่างกันยังไง?', a: 'Rebrand คือการเปลี่ยนตัวตนใหม่ทั้งหมด รวมถึงกลยุทธ์ ส่วน Refresh คือการปรับภาพเล็กน้อยโดยรักษาคุณค่าเดิมของแบรนด์ไว้ เราช่วยประเมินว่าแบบไหนเหมาะกับสถานการณ์ของคุณ'},
      {q: 'ใช้เวลานานแค่ไหน?', a: 'ตัวตนแบรนด์พื้นฐานใช้ 8-12 สัปดาห์ ระบบแบรนด์เต็มรูปแบบรวมคู่มือและงานดิจิทัลใช้ 16-20 สัปดาห์'},
      {q: 'ต้องทำรีเสิร์ชก่อนไหม?', a: 'แนะนำให้ทำ การสำรวจแบรนด์ที่ดีรวมการสัมภาษณ์ลูกค้า วิเคราะห์คู่แข่ง และเวิร์กช็อปภายในองค์กร เพื่อให้กลยุทธ์มีฐานที่แข็งแรง'},
      {q: 'ส่งมอบอะไรบ้าง?', a: 'ไฟล์โลโก้ทุกรูปแบบ คู่มือแบรนด์แบบ PDF คลังไฟล์ สิทธิ์ใช้ฟอนต์ และเทมเพลตสำหรับ Social, งานนำเสนอ และเอกสาร'}
    ]
  const related     = isEN ? [
      {label: 'Design Systems', href: '/services/design-systems'},
      {label: 'UX & UI Design', href: '/services/ux-ui-design'},
      {label: 'Rapid Prototyping', href: '/services/rapid-prototyping'},
      {label: 'Web Development', href: '/services/web-development'}
    ] : [
      {label: 'Design Systems', href: '/services/design-systems'},
      {label: 'UX & UI Design', href: '/services/ux-ui-design'},
      {label: 'Rapid Prototyping', href: '/services/rapid-prototyping'},
      {label: 'Web Development', href: '/services/web-development'}
    ]
  return (
    <ServiceLayout
      lang={params.lang as Lang}
      badge={badge} title={title} subtitle={subtitle}
      heroDesc={heroDesc} heroBullets={heroBullets}
      whyTitle={whyTitle} whyDesc={whyDesc} whyPoints={whyPoints}
      outcomes={outcomes} ctaTitle={ctaTitle} ctaDesc={ctaDesc}
      features={features} steps={steps} caseStudies={caseStudies}
      faqs={faqs} related={related}
      color="var(--purple-light)" bg="var(--purple-bg)"
      heroImg="/images/services/brand-experience/hero.jpg"
      whyImg="/images/services/brand-experience/why1.jpg"
      whyImg2="/images/services/brand-experience/why2.jpg"
      featureImg="/images/services/brand-experience/feature.jpg"
      processImg="/images/services/brand-experience/process.jpg"
    />
  )
}
