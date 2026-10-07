import ServiceLayout from '@/components/service/ServiceLayout'
import { type Lang } from '@/lib/i18n'

export async function generateStaticParams() {
  return [{ lang: 'th' }, { lang: 'en' }]
}

export default function Page({ params }: { params: { lang: Lang } }) {
  const isEN = params.lang === 'en'
  const badge    = isEN ? 'Design / Design Systems'  : 'ดีไซน์ / Design Systems'
  const title    = isEN ? 'Consistent Design'  : 'ดีไซน์ที่สม่ำเสมอ'
  const subtitle = isEN ? 'That Scales'    : 'และรองรับการขยาย'
  const heroDesc = isEN ? 'A design system is the single source of truth for your product — components, tokens, patterns, and guidelines that ensure every screen looks and feels like it belongs to the same product.'  : 'Design System คือแหล่งอ้างอิงกลางของผลิตภัณฑ์คุณ ประกอบด้วย Component, Token, Pattern และแนวปฏิบัติ ที่ทำให้ทุกหน้าจอดูและใช้งานเหมือนอยู่ในผลิตภัณฑ์เดียวกัน'
  const whyTitle = isEN ? 'Why inconsistent design creates compounding problems'    : 'ทำไมดีไซน์ที่ไม่สม่ำเสมอถึงสร้างปัญหาที่ทับถมขึ้นเรื่อยๆ'
  const whyDesc  = isEN ? 'Without a design system, every new feature reinvents the wheel. Designers drift. Developers implement the same component differently across teams. The product feels fragmented and trust erodes.'  : 'ถ้าไม่มี Design System ทุกฟีเจอร์ใหม่ต้องเริ่มทำใหม่หมด ดีไซเนอร์ก็ออกนอกแนว นักพัฒนาแต่ละทีมทำ Component เดียวกันไม่เหมือนกัน ผลิตภัณฑ์ดูไม่เป็นหนึ่งเดียว และความเชื่อมั่นลดลง'
  const ctaTitle = isEN ? 'Ready to build your design system?'    : 'พร้อมสร้าง Design System ไหม?'
  const ctaDesc  = isEN ? 'Start with a free Design Audit. We will assess your current consistency and scope the right system.'   : 'เริ่มด้วยการตรวจดีไซน์ (Design Audit) ฟรี เราจะประเมินว่าตอนนี้ดีไซน์สม่ำเสมอแค่ไหน และกำหนดขอบเขตระบบที่เหมาะสม'
  const heroBullets = isEN ? [
      'Design token architecture (colour, typography, spacing, motion)',
      'Component library in Figma and React/Vue/Angular',
      'Usage guidelines, documentation, and contribution process',
      'Accessibility standards built into every component',
      'Versioning, migration guides, and long-term maintenance',
    ] : [
      'ออกแบบโครงสร้าง Design Token (สี, ตัวอักษร, ระยะห่าง, Animation)',
      'สร้าง Component Library ใน Figma และ React/Vue/Angular',
      'เขียนแนวปฏิบัติ เอกสาร และขั้นตอนการมีส่วนร่วม',
      'ใส่มาตรฐาน Accessibility ไว้ในทุก Component',
      'จัดการเวอร์ชัน คู่มือย้ายระบบ และดูแลระยะยาว',
    ]
  const whyPoints   = isEN ? [
      'Teams with design systems ship new features 34% faster than those without',
      'Shared components eliminate the most common designer-developer handoff conflicts',
      'Accessibility baked into components ensures compliance without per-feature audits',
      'Tokenised design systems allow full rebranding or white-labelling in days, not months',
      'A living documentation site keeps the entire organisation aligned on current standards',
    ] : [
      'ทีมที่มี Design System ออกฟีเจอร์ใหม่ได้เร็วกว่า 34%',
      'Component ที่ใช้ร่วมกันช่วยลดความขัดแย้งที่พบบ่อยที่สุดระหว่างดีไซเนอร์กับนักพัฒนา',
      'Accessibility ที่ฝังอยู่ใน Component ทำให้ไม่ต้องไล่ทำให้ได้มาตรฐานทีละฟีเจอร์',
      'Design System ที่ใช้ Token ช่วยให้เปลี่ยนแบรนด์หรือทำ White-label ได้ภายในไม่กี่วัน',
      'เว็บเอกสารที่อัปเดตอยู่เสมอ ทำให้ทุกคนในองค์กรใช้มาตรฐานล่าสุดตรงกัน',
    ]
  const outcomes    = isEN ? [
      {stat: '34%', label: 'Faster Feature Shipping', desc: 'With shared components'},
      {stat: '0', label: 'Inconsistent Implementations', desc: 'Single source of truth'},
      {stat: 'Days', label: 'To Rebrand Entirely', desc: 'With design tokens'},
      {stat: 'WCAG AA', label: 'Accessibility Standard', desc: 'Built into every component'}
    ] : [
      {stat: '34%', label: 'ฟีเจอร์ออกเร็วขึ้น', desc: 'ด้วย Component ที่ใช้ร่วมกัน'},
      {stat: '0', label: 'Inconsistent Implementation', desc: 'Single Source of Truth'},
      {stat: 'ไม่กี่วัน', label: 'เปลี่ยนแบรนด์ทั้งระบบ', desc: 'ด้วย Design Token'},
      {stat: 'WCAG AA', label: 'Accessibility Standard', desc: 'ฝังในทุก Component'}
    ]
  const features    = isEN ? [
      {icon: 'ti-color-swatch', title: 'Design Token Architecture', desc: 'Define tokens for colour, typography, spacing, shadow, and motion as a single source in both Figma and code.'},
      {icon: 'ti-components', title: 'Component Library (Figma)', desc: 'Build a comprehensive Figma component library with variants, states, and documentation.'},
      {icon: 'ti-brand-react', title: 'Component Library (Code)', desc: 'Implement components in React, Vue, or Angular that match Figma 100%.'},
      {icon: 'ti-book', title: 'Documentation Site', desc: 'Build a documentation site with Storybook or a custom site that is interactive and auto-updated.'},
      {icon: 'ti-accessible', title: 'Accessibility', desc: 'Every component passes WCAG AA with ARIA labels, keyboard navigation, and screen reader support.'},
      {icon: 'ti-git-merge', title: 'Governance & Process', desc: 'Establish a contribution process, review workflow, and versioning strategy so the team can maintain the system.'}
    ] : [
      {icon: 'ti-color-swatch', title: 'Design Token Architecture', desc: 'กำหนด Token สำหรับสี ตัวอักษร ระยะห่าง เงา และ Animation เป็นแหล่งเดียวที่ใช้ตรงกันทั้งใน Figma และโค้ด'},
      {icon: 'ti-components', title: 'Component Library (Figma)', desc: 'สร้าง Component Library ใน Figma ให้ครบ พร้อม Variant, State และเอกสาร'},
      {icon: 'ti-brand-react', title: 'Component Library (Code)', desc: 'เขียน Component ด้วย React, Vue หรือ Angular ให้ตรงกับ Figma 100%'},
      {icon: 'ti-book', title: 'Documentation Site', desc: 'สร้างเว็บเอกสารด้วย Storybook หรือเว็บที่ทำเอง ใช้งานแบบโต้ตอบได้และอัปเดตอัตโนมัติ'},
      {icon: 'ti-accessible', title: 'Accessibility', desc: 'ทุก Component ผ่าน WCAG AA มี ARIA Label รองรับคีย์บอร์ด และรองรับ Screen Reader'},
      {icon: 'ti-git-merge', title: 'Governance & Process', desc: 'วางขั้นตอนการมีส่วนร่วม การรีวิว และการจัดการเวอร์ชัน ให้ทีมดูแลระบบต่อได้เอง'}
    ]
  const steps       = isEN ? [
      {no: '01', title: 'Audit & Inventory', desc: 'Review current UI, count existing components, and identify key inconsistencies.'},
      {no: '02', title: 'Token & Foundation Design', desc: 'Define all tokens and design foundation components like colour, typography, and spacing.'},
      {no: '03', title: 'Component Build', desc: 'Build components in Figma and code with testing and review.'},
      {no: '04', title: 'Documentation', desc: 'Write guidelines, usage examples, and launch the documentation site.'},
      {no: '05', title: 'Adoption & Training', desc: 'Train design and development teams and establish a contribution process.'}
    ] : [
      {no: '01', title: 'Audit & Inventory', desc: 'ตรวจ UI ปัจจุบัน นับ Component ที่มี และชี้จุดที่ไม่สม่ำเสมอที่สำคัญ'},
      {no: '02', title: 'Token & Foundation Design', desc: 'กำหนด Token ทั้งหมด และออกแบบ Component พื้นฐาน เช่น สี ตัวอักษร ระยะห่าง'},
      {no: '03', title: 'Component Build', desc: 'สร้าง Component ใน Figma และโค้ด พร้อมทดสอบและรีวิว'},
      {no: '04', title: 'Documentation', desc: 'เขียนแนวปฏิบัติ ตัวอย่างการใช้งาน และเปิดเว็บเอกสาร'},
      {no: '05', title: 'Adoption & Training', desc: 'อบรมทีมดีไซน์และทีมพัฒนาให้ใช้ระบบเป็น และวางขั้นตอนการมีส่วนร่วม'}
    ]
  const caseStudies = isEN ? [
      {tag: 'FinTech · Bangkok', title: 'Design System Cuts Design Time 50%', desc: 'Built a 120-component library shared across 3 products by one team.', result: 'Feature delivery 50% faster'},
      {tag: 'SaaS · Bangkok', title: 'Rebranded 5 Products in 2 Weeks', desc: 'Token architecture enabled a full brand colour change by updating just a few tokens.', result: 'Rebrand done in 2 weeks'},
      {tag: 'Healthcare · Bangkok', title: 'WCAG AA Compliance Across Every Component', desc: 'Designed an accessible component library for a patient portal.', result: '100% WCAG AA passed'}
    ] : [
      {tag: 'FinTech · กรุงเทพฯ', title: 'Design System ลดเวลาออกแบบ 50%', desc: 'สร้าง Component Library 120 Component ที่ 3 ผลิตภัณฑ์ใช้ร่วมกัน', result: 'ส่งฟีเจอร์เร็วขึ้น 50%'},
      {tag: 'SaaS · กรุงเทพฯ', title: 'รีแบรนด์ 5 ผลิตภัณฑ์ใน 2 สัปดาห์', desc: 'Token Architecture ที่ดีทำให้เปลี่ยนสีแบรนด์ทั้งระบบได้ โดยแก้แค่ไม่กี่ Token', result: 'รีแบรนด์เสร็จใน 2 สัปดาห์'},
      {tag: 'Healthcare · กรุงเทพฯ', title: 'WCAG AA ครบทุก Component', desc: 'ออกแบบ Component Library ที่ทุกคนเข้าถึงได้ สำหรับ Patient Portal', result: 'ผ่าน WCAG AA 100%'}
    ]
  const faqs        = isEN ? [
      {q: 'How is a design system different from a UI kit?', a: 'A UI kit is a Figma file with designed components. A design system includes Figma, code, documentation, and processes that help teams work consistently together.'},
      {q: 'How long does it take to build?', a: 'An initial MVP design system takes 6-10 weeks. A full system covering all patterns may take 3-6 months.'},
      {q: 'Does a small team need a design system?', a: 'Teams of all sizes benefit. Small teams gain speed; large teams gain consistency. The earlier you start, the longer you compound the benefits.'},
      {q: 'How is a design system maintained?', a: 'We establish governance processes, contribution guides, and release cycles so your team can maintain it independently.'}
    ] : [
      {q: 'Design System ต่างจาก UI Kit ยังไง?', a: 'UI Kit คือไฟล์ Figma ที่มี Component ออกแบบไว้ ส่วน Design System คือ Figma, โค้ด, เอกสาร และขั้นตอนทำงานรวมกัน ที่ทำให้ทีมทำงานตรงกันอย่างสม่ำเสมอ'},
      {q: 'ใช้เวลาสร้างนานแค่ไหน?', a: 'Design System ขั้นต้น (MVP) ใช้ 6-10 สัปดาห์ ระบบเต็มที่ครอบคลุมทุก Pattern อาจใช้ 3-6 เดือน'},
      {q: 'ทีมเล็กต้องมี Design System ไหม?', a: 'ทีมทุกขนาดได้ประโยชน์ครับ ทีมเล็กได้ความเร็ว ทีมใหญ่ได้ความสม่ำเสมอ ยิ่งเริ่มเร็ว ยิ่งได้ประโยชน์นาน'},
      {q: 'ดูแล Design System อย่างไร?', a: 'เราวางขั้นตอนดูแลระบบ คู่มือการมีส่วนร่วม และรอบการปล่อยเวอร์ชัน ให้ทีมคุณดูแลต่อเองได้'}
    ]
  const related     = isEN ? [
      {label: 'UX & UI Design', href: '/services/ux-ui-design'},
      {label: 'Brand Experience', href: '/services/brand-experience'},
      {label: 'Rapid Prototyping', href: '/services/rapid-prototyping'},
      {label: 'Web Development', href: '/services/web-development'}
    ] : [
      {label: 'UX & UI Design', href: '/services/ux-ui-design'},
      {label: 'Brand Experience', href: '/services/brand-experience'},
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
      heroImg="/images/services/design-systems/hero.jpg"
      whyImg="/images/services/design-systems/why1.jpg"
      whyImg2="/images/services/design-systems/why2.jpg"
      featureImg="/images/services/design-systems/feature.jpg"
      processImg="/images/services/design-systems/process.jpg"
    />
  )
}
