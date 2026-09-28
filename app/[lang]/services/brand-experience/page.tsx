import ServiceLayout from '@/components/service/ServiceLayout'
import { type Lang } from '@/lib/i18n'

export async function generateStaticParams() {
  return [{ lang: 'th' }, { lang: 'en' }]
}

export default function Page({ params }: { params: { lang: Lang } }) {
  const isEN = params.lang === 'en'
  const badge    = isEN ? 'Design / Brand Experience'  : 'ดีไซน์ / Brand Experience'
  const title    = isEN ? 'A Brand That Is'  : 'แบรนด์ที่'
  const subtitle = isEN ? 'Remembered Everywhere'    : 'จดจำได้ทุกที่'
  const heroDesc = isEN ? 'Brand is not a logo — it is the feeling people have every time they interact with your product. Haliviq builds brand experiences that are bold, consistent, and impossible to forget.'  : 'แบรนด์ไม่ใช่แค่โลโก้ แต่คือความรู้สึกที่คนมีทุกครั้งที่มีปฏิสัมพันธ์กับ Product ของคุณ Haliviq สร้าง Brand Experience ที่ Bold สม่ำเสมอ และจดจำไม่ลืม'
  const whyTitle = isEN ? 'Why brand is a strategic business asset'    : 'ทำไมแบรนด์ถึงเป็น Strategic Business Asset'
  const whyDesc  = isEN ? 'In commoditised markets, brand is often the only sustainable differentiator. Customers choose, trust, and stay loyal to brands — not products. A strong brand commands premium pricing and reduces acquisition costs.'  : 'ในตลาดที่สินค้า Commoditize แบรนด์มักเป็นตัวแปรที่แยกแยะได้เพียงตัวเดียวที่ยั่งยืน ลูกค้าเลือก เชื่อ และซื่อสัตย์ต่อแบรนด์ ไม่ใช่ Product แบรนด์ที่แข็งแกร่งทำให้ตั้งราคาพรีเมียมและลดต้นทุน Acquisition'
  const ctaTitle = isEN ? 'Ready to build a brand that lasts?'    : 'พร้อมสร้างแบรนด์ที่คงทนไหม?'
  const ctaDesc  = isEN ? 'Start with a free Brand Audit. We will assess your current identity and map opportunities.'   : 'เริ่มด้วย Brand Audit ฟรี เราจะประเมิน Identity ปัจจุบันและ Map โอกาส'
  const heroBullets = isEN ? [
      'Brand strategy, positioning, and messaging framework',
      'Visual identity: logo, colour, typography, and illustration style',
      'Brand guidelines and asset library for every touchpoint',
      'Digital experience design aligned with brand values',
      'Brand rollout across web, mobile, print, and social',
    ] : [
      'วาง Brand Strategy, Positioning และ Messaging Framework',
      'Visual Identity: โลโก้, สี, ตัวอักษร และ Illustration Style',
      'Brand Guideline และ Asset Library สำหรับทุก Touchpoint',
      'Digital Experience Design ที่สอดคล้องกับ Brand Value',
      'Brand Rollout บน Web, Mobile, Print และ Social',
    ]
  const whyPoints   = isEN ? [
      'Consistent brand presentation across all channels increases revenue by up to 23%',
      'Strong brands reduce customer acquisition costs by building trust before the first interaction',
      'A clearly articulated brand attracts better talent — people want to work for companies they believe in',
      'Brand equity compounds over time — one of the few assets that appreciates',
      'Digital-first brand design ensures your identity works from a 6-inch phone screen to a billboard',
    ] : [
      'การนำเสนอแบรนด์ที่สม่ำเสมอทุก Channel เพิ่ม Revenue ได้ถึง 23%',
      'แบรนด์ที่แข็งแกร่งลด Customer Acquisition Cost โดยสร้างความเชื่อมั่นก่อนการมีปฏิสัมพันธ์ครั้งแรก',
      'แบรนด์ที่ Articulate ชัดเจนดึงดูด Talent ที่ดีกว่า คนอยากทำงานกับบริษัทที่ตัวเองเชื่อ',
      'Brand Equity Compound ไปเรื่อยๆ เป็น Asset ที่หายากที่ Appreciate ตามเวลา',
      'Digital-first Brand Design ทำให้ Identity ของคุณทำงานได้ตั้งแต่หน้าจอ 6 นิ้วถึงป้ายโฆษณา',
    ]
  const outcomes    = isEN ? [
      {stat: '23%', label: 'Revenue from Consistency', desc: 'Cross-channel brand alignment'},
      {stat: '40%', label: 'Lower Acquisition Cost', desc: 'With strong brand trust'},
      {stat: '3x', label: 'Better Talent Attraction', desc: 'With clear brand purpose'},
      {stat: '10+ yrs', label: 'Brand System Lifespan', desc: 'Built to evolve, not expire'}
    ] : [
      {stat: '23%', label: 'Revenue เพิ่มจาก Consistency', desc: 'Cross-channel Brand Alignment'},
      {stat: '40%', label: 'ลด Acquisition Cost', desc: 'ด้วย Strong Brand Trust'},
      {stat: '3x', label: 'ดึงดูด Talent ดีกว่า', desc: 'ด้วย Clear Brand Purpose'},
      {stat: '10+ ปี', label: 'Brand System Lifespan', desc: 'Built to Evolve ไม่ใช่ Expire'}
    ]
  const features    = isEN ? [
      {icon: 'ti-target', title: 'Brand Strategy & Positioning', desc: 'Define the brand why, who, what, and how — find unique market positioning and craft messaging that resonates.'},
      {icon: 'ti-palette', title: 'Visual Identity Design', desc: 'Create a unified logo, colour palette, typography system, illustration style, and photography direction.'},
      {icon: 'ti-book-2', title: 'Brand Guidelines', desc: 'Document every brand element with clear dos and don\'ts so everyone uses the brand correctly.'},
      {icon: 'ti-device-desktop', title: 'Digital Brand Experience', desc: 'Apply the brand across digital touchpoints — website, app, email, and social media.'},
      {icon: 'ti-writing', title: 'Brand Voice & Messaging', desc: 'Define tone of voice, key messages, and brand story that align with the visual identity.'},
      {icon: 'ti-certificate', title: 'Brand Asset Library', desc: 'Consolidate all assets in a brand hub that teams can access easily and use correctly every time.'}
    ] : [
      {icon: 'ti-target', title: 'Brand Strategy & Positioning', desc: 'กำหนด Why, Who, What และ How ของแบรนด์ หา Unique Positioning ในตลาด และวาง Messaging ที่ Resonate'},
      {icon: 'ti-palette', title: 'Visual Identity Design', desc: 'สร้าง โลโก้, Color Palette, Typography System, Illustration Style และ Photography Direction ที่เป็นหนึ่งเดียว'},
      {icon: 'ti-book-2', title: 'Brand Guidelines', desc: 'Document ทุก Element ของแบรนด์พร้อม Do & Don\'t ที่ชัดเจน เพื่อให้ทุกคนใช้งาน Brand ได้ถูกต้อง'},
      {icon: 'ti-device-desktop', title: 'Digital Brand Experience', desc: 'Apply Brand ลงใน Digital Touchpoint ตั้งแต่ Website, App, Email จนถึง Social Media'},
      {icon: 'ti-writing', title: 'Brand Voice & Messaging', desc: 'กำหนด Tone of Voice, Key Message และ Brand Story ที่สอดคล้องกับ Visual Identity'},
      {icon: 'ti-certificate', title: 'Brand Asset Library', desc: 'รวบรวม Asset ทั้งหมดใน Brand Hub ที่ทีมเข้าถึงได้ง่าย ใช้งานได้ถูกต้องทุกครั้ง'}
    ]
  const steps       = isEN ? [
      {no: '01', title: 'Brand Discovery', desc: 'Understand business goals, target audience, competitive landscape, and brand aspirations.'},
      {no: '02', title: 'Strategy & Positioning', desc: 'Define brand positioning, value proposition, and messaging framework with stakeholders.'},
      {no: '03', title: 'Identity Design', desc: 'Create multiple visual identity directions, test, and refine to find the strongest approach.'},
      {no: '04', title: 'System & Guidelines', desc: 'Develop a complete brand system with clear guidelines for every touchpoint.'},
      {no: '05', title: 'Rollout & Activation', desc: 'Apply the brand across digital and physical touchpoints and train the team to use it correctly.'}
    ] : [
      {no: '01', title: 'Brand Discovery', desc: 'ทำความเข้าใจ Business Goal, Target Audience, Competitive Landscape และ Brand Aspiration'},
      {no: '02', title: 'Strategy & Positioning', desc: 'กำหนด Brand Positioning, Value Proposition และ Messaging Framework ร่วมกับ Stakeholder'},
      {no: '03', title: 'Identity Design', desc: 'สร้าง Visual Identity หลายแนวทาง ทดสอบและ Refine จนได้ Direction ที่แข็งแกร่ง'},
      {no: '04', title: 'System & Guidelines', desc: 'Develop Brand System ครบวงจรพร้อม Guideline ที่ชัดเจนสำหรับทุก Touchpoint'},
      {no: '05', title: 'Rollout & Activation', desc: 'Apply Brand บน Digital และ Physical Touchpoint พร้อม Train ทีมให้ใช้งานถูกต้อง'}
    ]
  const caseStudies = isEN ? [
      {tag: 'F&B · Bangkok', title: 'Restaurant Rebrand Grows Revenue 35%', desc: 'Repositioned brand, created visual identity, and applied across every touchpoint.', result: 'Revenue up 35% in 6 months'},
      {tag: 'SaaS · Bangkok', title: 'Brand That Attracts Series A Funding', desc: 'Built a credible, premium brand that gave investors confidence in the company vision.', result: 'Series A successfully closed'},
      {tag: 'Healthcare · Bangkok', title: 'Brand Unification Across 5 Hospitals', desc: 'Created a master brand and sub-brand architecture consistent across the network.', result: 'Brand recognition up 60%'}
    ] : [
      {tag: 'F&B · กรุงเทพฯ', title: 'Rebrand ร้านอาหาร เพิ่ม Revenue 35%', desc: 'วาง Brand Positioning ใหม่ สร้าง Visual Identity และ Apply บนทุก Touchpoint', result: 'Revenue เพิ่ม 35% ใน 6 เดือน'},
      {tag: 'SaaS · กรุงเทพฯ', title: 'Brand ที่ดึงดูด Series A Funding', desc: 'สร้าง Brand ที่ Credible และ Premium ทำให้ Investor เชื่อมั่นใน Vision ของบริษัท', result: 'ระดมทุน Series A สำเร็จ'},
      {tag: 'Healthcare · กรุงเทพฯ', title: 'Brand Unification 5 โรงพยาบาล', desc: 'สร้าง Master Brand และ Sub-brand Architecture ที่สม่ำเสมอทั่วเครือข่าย', result: 'Brand Recognition เพิ่ม 60%'}
    ]
  const faqs        = isEN ? [
      {q: 'What is the difference between a rebrand and a refresh?', a: 'A rebrand changes the entire identity including strategy. A refresh updates the visual elements while preserving existing equity. We help assess which is right for your situation.'},
      {q: 'How long does it take?', a: 'A basic brand identity takes 8-12 weeks. A full brand system including guidelines and digital takes 16-20 weeks.'},
      {q: 'Do we need research first?', a: 'Highly recommended. Good brand discovery includes customer interviews, competitor analysis, and internal workshops to give the strategy a solid foundation.'},
      {q: 'What are the deliverables?', a: 'Logo files in all formats, brand guideline PDF, asset library, typography licence, and templates for social, presentations, and documents.'}
    ] : [
      {q: 'Rebrand กับ Refresh ต่างกันยังไง?', a: 'Rebrand คือการเปลี่ยน Identity ใหม่ทั้งหมด รวมถึง Strategy Refresh คือการ Update Visual เล็กน้อยโดยรักษา Equity เดิมไว้ เราช่วยประเมินว่าแบบไหนเหมาะกับสถานการณ์ของคุณ'},
      {q: 'ใช้เวลานานแค่ไหน?', a: 'Brand Identity พื้นฐานใช้ 8-12 สัปดาห์ Full Brand System รวม Guideline และ Digital ใช้ 16-20 สัปดาห์'},
      {q: 'ต้องทำ Research ก่อนไหม?', a: 'แนะนำครับ Brand Discovery ที่ดีรวม Customer Interview, Competitor Analysis และ Internal Workshop เพื่อให้ Strategy มีฐานที่แข็งแกร่ง'},
      {q: 'ส่งมอบอะไรบ้าง?', a: 'Logo File ทุก Format, Brand Guideline PDF, Asset Library, Typography License และ Template สำหรับ Social, Presentation และ Document'}
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
