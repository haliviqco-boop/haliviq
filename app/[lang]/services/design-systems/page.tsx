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
  const heroDesc = isEN ? 'A design system is the single source of truth for your product — components, tokens, patterns, and guidelines that ensure every screen looks and feels like it belongs to the same product.'  : 'Design System คือ Single Source of Truth สำหรับ Product ของคุณ ทั้ง Component, Token, Pattern และ Guideline ที่ทำให้ทุกหน้าจอดูและรู้สึกเหมือนมาจาก Product เดียวกัน'
  const whyTitle = isEN ? 'Why inconsistent design creates compounding problems'    : 'ทำไม Inconsistent Design ถึงสร้างปัญหาแบบ Compound'
  const whyDesc  = isEN ? 'Without a design system, every new feature reinvents the wheel. Designers drift. Developers implement the same component differently across teams. The product feels fragmented and trust erodes.'  : 'หากไม่มี Design System Feature ใหม่ทุกชิ้นต้องประดิษฐ์ล้อใหม่ Designer เบี่ยงเบน Developer Implement Component เดียวกันต่างกันในแต่ละทีม Product รู้สึกแตกแยกและความเชื่อมั่นลดลง'
  const ctaTitle = isEN ? 'Ready to build your design system?'    : 'พร้อมสร้าง Design System ไหม?'
  const ctaDesc  = isEN ? 'Start with a free Design Audit. We will assess your current consistency and scope the right system.'   : 'เริ่มด้วย Design Audit ฟรี เราจะประเมิน Consistency ปัจจุบันและ Scope ระบบที่เหมาะสม'
  const heroBullets = isEN ? [
      'Design token architecture (colour, typography, spacing, motion)',
      'Component library in Figma and React/Vue/Angular',
      'Usage guidelines, documentation, and contribution process',
      'Accessibility standards built into every component',
      'Versioning, migration guides, and long-term maintenance',
    ] : [
      'ออกแบบ Design Token Architecture (สี, ตัวอักษร, ระยะห่าง, Animation)',
      'สร้าง Component Library ใน Figma และ React/Vue/Angular',
      'เขียน Guideline, Documentation และ Contribution Process',
      'ใส่ Accessibility Standard เข้าทุก Component',
      'Versioning, Migration Guide และ Maintenance ระยะยาว',
    ]
  const whyPoints   = isEN ? [
      'Teams with design systems ship new features 34% faster than those without',
      'Shared components eliminate the most common designer-developer handoff conflicts',
      'Accessibility baked into components ensures compliance without per-feature audits',
      'Tokenised design systems allow full rebranding or white-labelling in days, not months',
      'A living documentation site keeps the entire organisation aligned on current standards',
    ] : [
      'ทีมที่มี Design System ออก Feature ใหม่ได้เร็วกว่า 34%',
      'Shared Component ขจัด Conflict ระหว่าง Designer และ Developer ที่พบบ่อยที่สุด',
      'Accessibility ที่ Built-in ใน Component ทำให้ Compliance ไม่ต้องทำทีละ Feature',
      'Design System ที่ใช้ Token ทำให้ Rebrand หรือ White-label ได้ภายในไม่กี่วัน',
      'Documentation Site ที่มีชีวิตทำให้ทุกคนในองค์กร Align กับ Standard ปัจจุบัน',
    ]
  const outcomes    = isEN ? [
      {stat: '34%', label: 'Faster Feature Shipping', desc: 'With shared components'},
      {stat: '0', label: 'Inconsistent Implementations', desc: 'Single source of truth'},
      {stat: 'Days', label: 'To Rebrand Entirely', desc: 'With design tokens'},
      {stat: 'WCAG AA', label: 'Accessibility Standard', desc: 'Built into every component'}
    ] : [
      {stat: '34%', label: 'Feature ออกเร็วขึ้น', desc: 'ด้วย Shared Component'},
      {stat: '0', label: 'Inconsistent Implementation', desc: 'Single Source of Truth'},
      {stat: 'ไม่กี่วัน', label: 'Rebrand ทั้งระบบ', desc: 'ด้วย Design Token'},
      {stat: 'WCAG AA', label: 'Accessibility Standard', desc: 'Built-in ทุก Component'}
    ]
  const features    = isEN ? [
      {icon: 'ti-color-swatch', title: 'Design Token Architecture', desc: 'Define tokens for colour, typography, spacing, shadow, and motion as a single source in both Figma and code.'},
      {icon: 'ti-components', title: 'Component Library (Figma)', desc: 'Build a comprehensive Figma component library with variants, states, and documentation.'},
      {icon: 'ti-brand-react', title: 'Component Library (Code)', desc: 'Implement components in React, Vue, or Angular that match Figma 100%.'},
      {icon: 'ti-book', title: 'Documentation Site', desc: 'Build a documentation site with Storybook or a custom site that is interactive and auto-updated.'},
      {icon: 'ti-accessible', title: 'Accessibility', desc: 'Every component passes WCAG AA with ARIA labels, keyboard navigation, and screen reader support.'},
      {icon: 'ti-git-merge', title: 'Governance & Process', desc: 'Establish a contribution process, review workflow, and versioning strategy so the team can maintain the system.'}
    ] : [
      {icon: 'ti-color-swatch', title: 'Design Token Architecture', desc: 'กำหนด Token สำหรับสี, ตัวอักษร, ระยะห่าง, Shadow และ Animation ที่เป็น Single Source ทั้งใน Figma และ Code'},
      {icon: 'ti-components', title: 'Component Library (Figma)', desc: 'สร้าง Component Library ใน Figma ที่ครบถ้วน พร้อม Variant, State และ Documentation'},
      {icon: 'ti-brand-react', title: 'Component Library (Code)', desc: 'Implement Component ด้วย React, Vue หรือ Angular ที่ตรงกับ Figma 100%'},
      {icon: 'ti-book', title: 'Documentation Site', desc: 'สร้าง Documentation Site ด้วย Storybook หรือ Custom Site ที่ Interactive และอัปเดตอัตโนมัติ'},
      {icon: 'ti-accessible', title: 'Accessibility', desc: 'ทุก Component ผ่าน WCAG AA มี ARIA Label, Keyboard Navigation และ Screen Reader Support'},
      {icon: 'ti-git-merge', title: 'Governance & Process', desc: 'วาง Contribution Process, Review Workflow และ Versioning Strategy ให้ทีมดูแล System ต่อได้'}
    ]
  const steps       = isEN ? [
      {no: '01', title: 'Audit & Inventory', desc: 'Review current UI, count existing components, and identify key inconsistencies.'},
      {no: '02', title: 'Token & Foundation Design', desc: 'Define all tokens and design foundation components like colour, typography, and spacing.'},
      {no: '03', title: 'Component Build', desc: 'Build components in Figma and code with testing and review.'},
      {no: '04', title: 'Documentation', desc: 'Write guidelines, usage examples, and launch the documentation site.'},
      {no: '05', title: 'Adoption & Training', desc: 'Train design and development teams and establish a contribution process.'}
    ] : [
      {no: '01', title: 'Audit & Inventory', desc: 'ตรวจสอบ UI ปัจจุบัน นับ Component ที่มี และระบุ Inconsistency ที่สำคัญ'},
      {no: '02', title: 'Token & Foundation Design', desc: 'กำหนด Token ทั้งหมดและออกแบบ Foundation Component เช่น Color, Typography, Spacing'},
      {no: '03', title: 'Component Build', desc: 'สร้าง Component ใน Figma และ Code พร้อม Test และ Review'},
      {no: '04', title: 'Documentation', desc: 'เขียน Guideline, Usage Example และ Launch Documentation Site'},
      {no: '05', title: 'Adoption & Training', desc: 'Train ทีม Design และ Dev ให้ใช้งาน System และวาง Process สำหรับ Contribution'}
    ]
  const caseStudies = isEN ? [
      {tag: 'FinTech · Bangkok', title: 'Design System Cuts Design Time 50%', desc: 'Built a 120-component library shared across 3 products by one team.', result: 'Feature delivery 50% faster'},
      {tag: 'SaaS · Bangkok', title: 'Rebranded 5 Products in 2 Weeks', desc: 'Token architecture enabled a full brand colour change by updating just a few tokens.', result: 'Rebrand done in 2 weeks'},
      {tag: 'Healthcare · Bangkok', title: 'WCAG AA Compliance Across Every Component', desc: 'Designed an accessible component library for a patient portal.', result: '100% WCAG AA passed'}
    ] : [
      {tag: 'FinTech · กรุงเทพฯ', title: 'Design System ลด Design Time 50%', desc: 'สร้าง Component Library 120 Component ที่ทีมใช้ร่วมกัน 3 Product', result: 'Feature Delivery เร็วขึ้น 50%'},
      {tag: 'SaaS · กรุงเทพฯ', title: 'Rebrand 5 Product ใน 2 สัปดาห์', desc: 'Token Architecture ที่ดีทำให้เปลี่ยน Brand Color ทั้งระบบโดยแก้แค่ไม่กี่ Token', result: 'Rebrand เสร็จใน 2 สัปดาห์'},
      {tag: 'Healthcare · กรุงเทพฯ', title: 'WCAG AA Compliance ทุก Component', desc: 'ออกแบบ Accessible Component Library สำหรับ Patient Portal', result: '100% WCAG AA ผ่าน'}
    ]
  const faqs        = isEN ? [
      {q: 'How is a design system different from a UI kit?', a: 'A UI kit is a Figma file with designed components. A design system includes Figma, code, documentation, and processes that help teams work consistently together.'},
      {q: 'How long does it take to build?', a: 'An initial MVP design system takes 6-10 weeks. A full system covering all patterns may take 3-6 months.'},
      {q: 'Does a small team need a design system?', a: 'Teams of all sizes benefit. Small teams gain speed; large teams gain consistency. The earlier you start, the longer you compound the benefits.'},
      {q: 'How is a design system maintained?', a: 'We establish governance processes, contribution guides, and release cycles so your team can maintain it independently.'}
    ] : [
      {q: 'Design System ต่างจาก UI Kit ยังไง?', a: 'UI Kit คือ Figma File ที่มี Component ออกแบบไว้ Design System คือทั้ง Figma, Code, Documentation และ Process ที่ทำให้ทีมทำงานด้วยกันได้อย่างสม่ำเสมอ'},
      {q: 'ใช้เวลานานแค่ไหนในการสร้าง?', a: 'MVP Design System เบื้องต้นใช้ 6-10 สัปดาห์ Full System ที่ครอบคลุมทุก Pattern อาจใช้ 3-6 เดือน'},
      {q: 'ทีมเล็กต้องการ Design System ไหม?', a: 'ทีมทุกขนาดได้ประโยชน์ครับ ทีมเล็กได้ Speed ทีมใหญ่ได้ Consistency ยิ่งเริ่มเร็วยิ่งสะสมประโยชน์ได้นานกว่า'},
      {q: 'ดูแลรักษา Design System ยังไง?', a: 'เราวาง Governance Process, Contribution Guide และ Release Cycle ให้ทีมของคุณดูแลต่อได้เอง'}
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
