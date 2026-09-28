import Link from 'next/link'
import ServiceLayout from '@/components/service/ServiceLayout'
import { type Lang } from '@/lib/i18n'

const BRAND_LOGOS: Record<string, { hex: string; path: string }> = {
  figma: { hex: '#F24E1E', path: 'M15.852 8.981h-4.588V0h4.588c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.491-4.49 4.491zM12.735 7.51h3.117c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-3.117V7.51zm0 1.471H8.148c-2.476 0-4.49-2.014-4.49-4.49S5.672 0 8.148 0h4.588v8.981zm-4.587-7.51c-1.665 0-3.019 1.355-3.019 3.019s1.354 3.02 3.019 3.02h3.117V1.471H8.148zm4.587 15.019H8.148c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h4.588v8.98zM8.148 8.981c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h3.117V8.981H8.148zM8.172 24c-2.489 0-4.515-2.014-4.515-4.49s2.014-4.49 4.49-4.49h4.588v4.441c0 2.503-2.047 4.539-4.563 4.539zm-.024-7.51a3.023 3.023 0 0 0-3.019 3.019c0 1.665 1.365 3.019 3.044 3.019 1.705 0 3.093-1.376 3.093-3.068v-2.97H8.148zm7.704 0h-.098c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h.098c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.49-4.49 4.49zm-.097-7.509c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h.098c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-.098z' },
  storybook: { hex: '#FF4785', path: 'M16.71.243l-.12 2.71a.18.18 0 00.29.15l1.06-.8.9.7a.18.18 0 00.28-.14l-.1-2.76 1.33-.1a1.2 1.2 0 011.279 1.2v21.596a1.2 1.2 0 01-1.26 1.2l-16.096-.72a1.2 1.2 0 01-1.15-1.16l-.75-19.797a1.2 1.2 0 011.13-1.27L16.7.222zM13.64 9.3c0 .47 3.16.24 3.59-.08 0-3.2-1.72-4.89-4.859-4.89-3.15 0-4.899 1.72-4.899 4.29 0 4.45 5.999 4.53 5.999 6.959 0 .7-.32 1.1-1.05 1.1-.96 0-1.35-.49-1.3-2.16 0-.36-3.649-.48-3.769 0-.27 4.03 2.23 5.2 5.099 5.2 2.79 0 4.969-1.49 4.969-4.18 0-4.77-6.099-4.64-6.099-6.999 0-.97.72-1.1 1.13-1.1.45 0 1.25.07 1.19 1.87z' },
  maze: { hex: '#FFFFFF', path: 'M1.126 16.547c-1.5013-1.4881-1.5013-3.9009 0-5.389l4.0778-4.042c1.2692-1.258 3.205-1.4525 4.6803-.5836.4564.2687.4524.8852.077 1.2573-.3753.372-.988.34-1.4975.1923-.6524-.1891-1.386-.0287-1.9006.4813l-4.0777 4.0419a1.8935 1.8935 0 0 0 0 2.6945c.7506.744 1.9678.744 2.7184 0l8.1555-8.0836c1.5014-1.4882 3.9355-1.4882 5.437 0l4.0778 4.0418c1.5013 1.4881 1.5013 3.901 0 5.389-1.5014 1.4882-3.9356 1.4882-5.437 0l-1.3593-1.3472-1.699 1.684c-1.2692 1.258-3.205 1.4526-4.6804.5837-.4563-.2687-.4523-.8852-.077-1.2573.3754-.372.988-.34 1.4975-.1923.6524.1892 1.386.0287 1.9006-.4813l1.7476-1.7322c.724-.7175 1.8975-.7175 2.6214 0l1.4078 1.3954c.7507.744 1.9678.744 2.7186 0a1.8936 1.8936 0 0 0 0-2.6945l-4.0779-4.0419c-.7507-.744-1.9678-.744-2.7185 0L6.563 16.5471c-1.5014 1.4882-3.9356 1.4881-5.437 0' },
}

function BrandLogo({ name, size = 15 }: { name: string; size?: number }) {
  const logo = BRAND_LOGOS[name]
  if (!logo) return null
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <path d={logo.path} fill={logo.hex} />
    </svg>
  )
}

export async function generateStaticParams() {
  return [{ lang: 'th' }, { lang: 'en' }]
}

export default function Page({ params }: { params: { lang: Lang } }) {
  const isEN = params.lang === 'en'
  const prefix = `/${params.lang}`

  const badge    = isEN ? 'Design / UX & UI Design'  : 'ดีไซน์ / UX & UI Design'
  const title    = isEN ? 'Beautiful Design'  : 'ดีไซน์ที่สวยงาม'
  const subtitle = isEN ? 'That Actually Works'    : 'และใช้งานได้จริง'
  const heroDesc = isEN ? 'User research, product UX, interface design, and design systems that make complex products feel simple.'  : 'User Research, Product UX, Interface Design และ Design System ที่ทำให้ Product ที่ซับซ้อนใช้งานง่ายขึ้น'
  const whyTitle = isEN ? 'Why bad UX costs more than you think'    : 'ทำไม UX ที่ไม่ดีถึงมีต้นทุนสูงกว่าที่คิด'
  const whyDesc  = isEN ? 'Every friction point in your product is a user who does not complete a task, a customer who does not convert, and a support ticket that did not need to exist. Good UX is measurable ROI.'  : 'ทุก Friction Point ใน Product คือผู้ใช้ที่ไม่ทำ Task สำเร็จ ลูกค้าที่ไม่ Convert และ Support Ticket ที่ไม่ควรเกิดขึ้น UX ที่ดีคือ ROI ที่วัดได้'
  const ctaTitle = isEN ? 'Ready to design something great?'    : 'พร้อมออกแบบสิ่งที่ยอดเยี่ยมไหม?'
  const ctaDesc  = isEN ? 'Start with a free UX Audit. We will identify the top friction points and opportunities.'   : 'เริ่มด้วย UX Audit ฟรี เราจะระบุ Friction Point สำคัญและโอกาสในการปรับปรุง'
  const overviewText = isEN
    ? 'We start by understanding the problem, not by opening a design tool. Our process runs through research, journey mapping, and prototype testing with real users, then into design systems work that keeps interfaces consistent across every platform. Every design decision is validated with evidence before it reaches engineering, so what gets built is what actually serves your users — not a guess dressed up as a mockup.'
    : 'เราเริ่มจากการเข้าใจปัญหาก่อน ไม่ใช่การเปิดโปรแกรมออกแบบทันที กระบวนการของเราครอบคลุมตั้งแต่ Research, Journey Mapping และการทดสอบ Prototype กับผู้ใช้จริง ไปจนถึงงาน Design System ที่ทำให้ Interface สอดคล้องกันในทุก Platform ทุกการตัดสินใจด้านดีไซน์จะถูกตรวจสอบด้วยหลักฐานจริงก่อนส่งต่อให้ทีม Engineering เพื่อให้สิ่งที่ถูกสร้างขึ้นตอบโจทย์ผู้ใช้จริง ไม่ใช่การเดาที่ห่อหุ้มด้วย Mockup ที่สวยงาม'

  const heroBullets = isEN ? [
      'User research and persona development',
      'Information architecture and user flow mapping',
      'Wireframing, prototyping, and usability testing',
      'High-fidelity UI design with pixel-perfect specifications',
      'Design system creation for scalable, consistent interfaces',
    ] : [
      'ทำ User Research และสร้าง Persona',
      'วาง Information Architecture และ User Flow',
      'สร้าง Wireframe, Prototype และ Usability Test',
      'ออกแบบ UI ระดับ Pixel-perfect พร้อม Specification',
      'สร้าง Design System เพื่อความสม่ำเสมอในระยะยาว',
    ]
  const whyPoints   = isEN ? [
      'Every 1 invested in UX returns 100 on average — a 9,900% ROI',
      'Reducing task completion time 20% through better UX equals the productivity of hiring more staff',
      'Good onboarding reduces time-to-value, directly improving Day-1 and Day-7 retention',
      'Accessible design reaches a broader audience and reduces legal risk',
      'A design system reduces design and development time by 30-50% for every new feature',
    ] : [
      'ทุก 1 บาทที่ลงทุนใน UX ให้ผลตอบแทน 100 บาทเฉลี่ย คิดเป็น 9,900% ROI',
      'ลด Task Completion Time 20% ด้วย UX ที่ดีขึ้น มีผลเท่ากับการจ้างพนักงานเพิ่ม',
      'Onboarding ที่ดีลด Time-to-value ของผู้ใช้ใหม่ ช่วย Day-1 และ Day-7 Retention โดยตรง',
      'Accessible Design ขยายกลุ่มผู้ใช้และลดความเสี่ยงทางกฎหมาย',
      'Design System ช่วยลดเวลาออกแบบและพัฒนา Feature ใหม่ 30-50%',
    ]
  const outcomes    = isEN ? [
      {stat: '9,900%', label: 'Average UX ROI', desc: 'Forrester Research benchmark'},
      {stat: '20%', label: 'Task Completion Improvement', desc: 'After UX redesign'},
      {stat: '50%', label: 'Faster Feature Delivery', desc: 'With a design system'},
      {stat: '4.8★', label: 'Average Usability Score', desc: 'Post-launch user testing'}
    ] : [
      {stat: '9,900%', label: 'ROI เฉลี่ยจาก UX', desc: 'อ้างอิง Forrester Research'},
      {stat: '20%', label: 'Task Completion ดีขึ้น', desc: 'หลัง UX Redesign'},
      {stat: '50%', label: 'Feature Delivery เร็วขึ้น', desc: 'ด้วย Design System'},
      {stat: '4.8★', label: 'Usability Score เฉลี่ย', desc: 'จาก Post-launch Testing'}
    ]
  const features    = isEN ? [
      {icon: 'ti-user-search', title: 'User Research', desc: 'Interview real users, run surveys, and conduct usability tests to understand behaviour and needs.'},
      {icon: 'ti-sitemap', title: 'Information Architecture', desc: 'Structure content and navigation so users find what they need quickly and easily.'},
      {icon: 'ti-pencil', title: 'Wireframing & Prototyping', desc: 'Build wireframes and interactive prototypes to test before investing in development.'},
      {icon: 'ti-palette', title: 'Visual UI Design', desc: 'Design beautiful, brand-consistent interfaces with strong accessibility.'},
      {icon: 'ti-components', title: 'Design System', desc: 'Build a shared component library, tokens, and guidelines for the whole organisation.'},
      {icon: 'ti-device-mobile-check', title: 'Usability Testing', desc: 'Test with real users at every stage and refine design based on evidence, not opinion.'}
    ] : [
      {icon: 'ti-user-search', title: 'User Research', desc: 'สัมภาษณ์ผู้ใช้จริง ทำ Survey และ Usability Test เพื่อเข้าใจพฤติกรรมและความต้องการ'},
      {icon: 'ti-sitemap', title: 'Information Architecture', desc: 'จัดโครงสร้างข้อมูลและ Navigation ให้ผู้ใช้หาสิ่งที่ต้องการได้ง่ายและเร็ว'},
      {icon: 'ti-pencil', title: 'Wireframing & Prototyping', desc: 'สร้าง Wireframe และ Interactive Prototype เพื่อ Test ก่อน Invest ในการพัฒนา'},
      {icon: 'ti-palette', title: 'Visual UI Design', desc: 'ออกแบบ Interface ที่สวยงาม สอดคล้องกับ Brand และมี Accessibility ที่ดี'},
      {icon: 'ti-components', title: 'Design System', desc: 'สร้าง Component Library, Token และ Guideline ที่ทีมทั้งองค์กรใช้ร่วมกันได้'},
      {icon: 'ti-device-mobile-check', title: 'Usability Testing', desc: 'Test กับผู้ใช้จริงทุกขั้นตอน ปรับ Design ตาม Evidence ไม่ใช่ Opinion'}
    ]
  const steps       = isEN ? [
      {no: '01', title: 'Research & Discovery', desc: 'Interview users, analyse competitors, and conduct heuristic evaluations to understand context.'},
      {no: '02', title: 'Define & Architect', desc: 'Synthesise insights into user journeys, personas, and information architecture.'},
      {no: '03', title: 'Design & Prototype', desc: 'Create wireframes and high-fidelity designs with interactive prototypes.'},
      {no: '04', title: 'Test & Validate', desc: 'Test with real users, refine based on feedback, and validate again.'},
      {no: '05', title: 'Handoff & Support', desc: 'Deliver design specs, assets, and design system with full developer support.'}
    ] : [
      {no: '01', title: 'Research & Discovery', desc: 'สัมภาษณ์ผู้ใช้ วิเคราะห์คู่แข่ง และทำ Heuristic Evaluation เพื่อเข้าใจ Context'},
      {no: '02', title: 'Define & Architect', desc: 'สรุป Insight เป็น User Journey, Persona และ Information Architecture'},
      {no: '03', title: 'Design & Prototype', desc: 'วาด Wireframe และ High-fidelity Design พร้อม Interactive Prototype'},
      {no: '04', title: 'Test & Validate', desc: 'Test กับผู้ใช้จริง ปรับแก้ตาม Feedback และ Validate ซ้ำ'},
      {no: '05', title: 'Handoff & Support', desc: 'ส่งมอบ Design Spec, Asset และ Design System พร้อมสนับสนุนทีม Dev'}
    ]
  const caseStudies = isEN ? [
      {tag: 'FinTech · Bangkok', title: 'Mobile Banking Redesign, +62% DAU', desc: 'Research with 200 users, full UX redesign, improved task completion rate.', result: 'DAU up 62%'},
      {tag: 'Healthcare · Bangkok', title: 'Most Usable Patient App in Thailand', desc: 'Designed end-to-end patient journey from appointment to results.', result: 'App Store Rating 4.9★'},
      {tag: 'E-Commerce · Nationwide', title: 'Checkout Redesign, -45% Abandonment', desc: 'Single-page checkout tested with real users, reduced steps from 7 to 3.', result: 'Cart Abandonment down 45%'}
    ] : [
      {tag: 'FinTech · กรุงเทพฯ', title: 'Redesign Mobile Banking เพิ่ม DAU 62%', desc: 'Research กับผู้ใช้ 200 คน Redesign UX ใหม่ทั้งหมด เพิ่ม Task Completion Rate', result: 'DAU เพิ่ม 62%'},
      {tag: 'Healthcare · กรุงเทพฯ', title: 'Patient App ที่ใช้งานง่ายที่สุดในไทย', desc: 'ออกแบบ End-to-end Patient Journey ตั้งแต่ Appointment ถึง Result', result: 'App Store Rating 4.9★'},
      {tag: 'E-Commerce · ทั่วประเทศ', title: 'Checkout Redesign ลด Abandonment 45%', desc: 'Single-page Checkout ที่ทดสอบกับผู้ใช้จริง ลดขั้นตอนจาก 7 เหลือ 3', result: 'Cart Abandonment ลด 45%'}
    ]
  const faqs        = isEN ? [
      {q: 'What is the difference between UX and UI?', a: 'UX is the overall experience — flows, architecture, and feelings. UI is the visual interface. We do both in alignment.'},
      {q: 'Do we always need research before design?', a: 'Research reduces risk. The scope depends on time and budget, but at minimum 5 user interviews before designing makes a big difference.'},
      {q: 'How long does it take?', a: 'A UX Audit takes 1-2 weeks. A full UX/UI project takes 6-12 weeks depending on size and complexity.'},
      {q: 'What do we get at handoff?', a: 'A complete Figma file, design tokens, component library, prototype, spec document, and export-ready assets.'}
    ] : [
      {q: 'UX กับ UI ต่างกันยังไง?', a: 'UX คือประสบการณ์รวมที่ผู้ใช้มี ตั้งแต่ Flow, Architecture จนถึงความรู้สึก UI คือ Visual Interface ที่เห็น เราทำทั้งสองอย่างให้สอดคล้องกัน'},
      {q: 'ต้องมี Research ก่อนออกแบบทุกครั้งไหม?', a: 'Research ช่วยลด Risk ครับ แต่ Scope ขึ้นอยู่กับเวลาและงบ อย่างน้อยควรมี 5 User Interview ก่อนออกแบบ'},
      {q: 'ใช้เวลานานแค่ไหน?', a: 'UX Audit ใช้ 1-2 สัปดาห์ Full UX/UI Project ใช้ 6-12 สัปดาห์ ขึ้นอยู่กับขนาดและความซับซ้อน'},
      {q: 'ส่งมอบอะไรบ้าง?', a: 'Figma File ที่ครบถ้วน, Design Token, Component Library, Prototype, Spec Document และ Asset Export พร้อมใช้'}
    ]
  const related     = isEN ? [
      {label: 'Rapid Prototyping', href: '/services/rapid-prototyping'},
      {label: 'Design Systems', href: '/services/design-systems'},
      {label: 'User Research', href: '/services/user-research'},
      {label: 'Mobile Apps', href: '/services/mobile-apps'}
    ] : [
      {label: 'Rapid Prototyping', href: '/services/rapid-prototyping'},
      {label: 'Design Systems', href: '/services/design-systems'},
      {label: 'User Research', href: '/services/user-research'},
      {label: 'Mobile Apps', href: '/services/mobile-apps'}
    ]

  const designLines = [
    { n: 1, jsx: <><span style={{ color: '#82AAFF' }}>Frame</span>&nbsp;{isEN ? 'Onboarding / Sign up' : 'Onboarding / สมัครสมาชิก'}</> },
    { n: 2, jsx: <>&nbsp;&nbsp;<span style={{ color: '#C792EA' }}>Button/Primary</span></> },
    { n: 3, jsx: <>&nbsp;&nbsp;<span style={{ color: '#C792EA' }}>Input/Email</span></> },
    { n: 4, jsx: <>&nbsp;</> },
    { n: 5, jsx: <><span style={{ color: 'var(--lime)' }}>✓</span>&nbsp;{isEN ? '5 usability tests passed' : 'Usability Test ผ่าน 5 คน'}</> },
    { n: 6, jsx: <>&nbsp;</> },
    { n: 7, jsx: <><span style={{ color: '#82AAFF' }}>{'>'}</span>&nbsp;<span style={{ color: '#C792EA' }}>{isEN ? 'exporting design tokens' : 'Export Design Token'}</span></> },
    { n: 8, jsx: <><span style={{ color: 'var(--lime)' }}>✓</span>&nbsp;{isEN ? 'Synced to Storybook' : 'Sync กับ Storybook สำเร็จ'}</> },
  ]

  const heroSlot = (
    <div className="relative pb-10 pr-6">
      <div className="rounded-2xl overflow-hidden" style={{ background: '#141329', border: '1px solid rgba(123,110,246,0.35)' }}>
        <div className="flex items-center gap-2 px-5 py-3.5" style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
          <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#F87171' }} />
          <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#FBBF24' }} />
          <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#34D399' }} />
          <span className="ml-3 text-xs" style={{ color: 'rgba(255,255,255,0.85)', fontFamily: 'monospace' }}>design.fig</span>
        </div>
        <div className="px-6 py-6" style={{ fontFamily: 'monospace', fontSize: '0.9rem', lineHeight: 1.9, color: 'rgba(255,255,255,0.85)' }}>
          {designLines.map((l) => (
            <div key={l.n} className="flex gap-4">
              <span style={{ color: 'rgba(255,255,255,0.25)', width: 16, textAlign: 'right' }}>{l.n}</span>
              <span>{l.jsx}</span>
            </div>
          ))}
        </div>
      </div>

      <div
        className="absolute -bottom-2 -right-2 w-[220px] rounded-2xl p-4"
        style={{ background: '#1B1A33', border: '1px solid rgba(255,255,255,0.1)', boxShadow: '0 20px 50px -10px rgba(0,0,0,0.6)' }}
      >
        <div className="flex items-center justify-between mb-3">
          <span className="text-[10px] tracking-widest uppercase" style={{ color: 'rgba(255,255,255,0.85)' }}>{isEN ? 'Usability Score' : 'คะแนน Usability'}</span>
          <span className="w-2 h-2 rounded-full" style={{ background: 'var(--lime)' }} />
        </div>
        <div className="flex items-center gap-3 mb-3">
          <div className="w-12 h-12 rounded-lg flex items-center justify-center shrink-0" style={{ background: 'linear-gradient(135deg,var(--purple),var(--purple-light))' }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M12 2l2.4 6.6L21 11l-6.6 2.4L12 21l-2.4-7.6L3 11l6.6-2.4Z" stroke="#fff" strokeWidth="1.6" strokeLinejoin="round" /></svg>
          </div>
          <div className="flex-1 space-y-1.5">
            <div className="h-1.5 rounded-full" style={{ background: 'rgba(255,255,255,0.15)', width: '92%' }} />
            <div className="h-1.5 rounded-full" style={{ background: 'rgba(255,255,255,0.15)', width: '68%' }} />
            <div className="h-3.5 rounded-full" style={{ background: 'linear-gradient(90deg,var(--purple),var(--lime))', width: '96%' }} />
          </div>
        </div>
        <div className="flex items-center gap-1.5 text-xs" style={{ color: 'var(--lime)' }}>
          <i className="ti ti-circle-check" style={{ fontSize: 13 }} aria-hidden="true" />
          {isEN ? '4.9/5 avg task success' : 'Task Success เฉลี่ย 4.9/5'}
        </div>
      </div>
    </div>
  )

  const capabilities = isEN ? [
    { icon: 'ti-user-search', title: 'User Research', desc: 'Interviews, usability tests, and behavioural evidence that de-risk product decisions early.' },
    { icon: 'ti-sitemap', title: 'UX & Information Architecture', desc: 'Flows, IA, and interaction design that make complex domains understandable.' },
    { icon: 'ti-click', title: 'Prototyping & Validation', desc: 'Clickable prototypes used to test ideas with users before expensive engineering starts.' },
    { icon: 'ti-components', title: 'Design Systems', desc: 'Component libraries, tokens, and documentation that keep product UI consistent at scale.' },
  ] : [
    { icon: 'ti-user-search', title: 'User Research', desc: 'Interview, Usability Test และหลักฐานเชิงพฤติกรรมที่ช่วยลดความเสี่ยงของการตัดสินใจด้าน Product ตั้งแต่เนิ่นๆ' },
    { icon: 'ti-sitemap', title: 'UX & Information Architecture', desc: 'Flow, IA และ Interaction Design ที่ทำให้เรื่องซับซ้อนเข้าใจง่ายขึ้น' },
    { icon: 'ti-click', title: 'Prototyping & Validation', desc: 'Clickable Prototype ที่ใช้ Test ไอเดียกับผู้ใช้จริงก่อนลงทุนด้าน Engineering ที่มีต้นทุนสูง' },
    { icon: 'ti-components', title: 'Design Systems', desc: 'Component Library, Token และเอกสารที่ทำให้ UI ของ Product สอดคล้องกันในทุกขนาด' },
  ]

  const techStack = [
    { label: 'Figma', svg: 'figma' },
    { label: 'FigJam', svg: 'figma' },
    { label: 'Storybook', svg: 'storybook' },
    { label: 'UserTesting', icon: 'ti-user-check' },
    { label: 'Maze', svg: 'maze' },
    { label: 'Principle', icon: 'ti-player-play' },
  ] as { label: string; icon?: string; svg?: string }[]

  const approachSteps = isEN ? [
    { no: '01', title: 'Research', desc: 'Interviews, evidence, and behavioural insight' },
    { no: '02', title: 'UX Design', desc: 'Flows, information architecture, interactions' },
    { no: '03', title: 'UI Design', desc: 'Visual language, components, brand fit' },
    { no: '04', title: 'Prototype', desc: 'Clickable prototypes ready for testing' },
    { no: '05', title: 'Test', desc: 'Validate with real users, refine, repeat' },
    { no: '06', title: 'Handoff', desc: 'Specs, tokens, and design system in code' },
  ] : [
    { no: '01', title: 'Research', desc: 'Interview, หลักฐาน และ Insight เชิงพฤติกรรม' },
    { no: '02', title: 'UX Design', desc: 'Flow, Information Architecture และ Interaction' },
    { no: '03', title: 'UI Design', desc: 'Visual Language, Component และความสอดคล้องกับ Brand' },
    { no: '04', title: 'Prototype', desc: 'Clickable Prototype พร้อมสำหรับการ Test' },
    { no: '05', title: 'Test', desc: 'Validate กับผู้ใช้จริง ปรับแก้ และทำซ้ำ' },
    { no: '06', title: 'Handoff', desc: 'Spec, Token และ Design System ในรูปแบบ Code' },
  ]

  const darkFaqs = isEN ? [
    { q: 'What does product design at Haliviq include?', a: 'User research, UX and information architecture, interface design, rapid prototyping, and design systems. Design at Haliviq means understanding the problem before opening Figma, and every design is validated with real users before development begins — so nothing reaches engineering as an untested guess.' },
    { q: 'Do you run user research in Thailand?', a: 'Yes. We run research and usability testing with real users in Thai and English, and we design for Southeast Asian audiences as well as global ones. This matters for things a generic template misses — local payment flows, address formats, and reading patterns that differ from Western UX conventions.' },
    { q: 'Which design tools do you use?', a: 'Figma and FigJam for design and workshops, Storybook for design systems in code (not just static Figma files), and UserTesting and Maze for research and validation. We pick the specific toolset based on your team\'s existing workflow so handoff is smooth rather than a format migration project of its own.' },
    { q: 'Can you work within our existing design system?', a: 'Yes. We extend existing design systems where they work, and we build new ones where they do not. Either way, the system lives in code with Storybook, not just in Figma files — so designers and engineers are always looking at the same source of truth instead of two versions that slowly drift apart.' },
    { q: 'How long does a design project take?', a: 'A focused UX Audit takes 1-2 weeks and gives you a prioritised list of friction points. A full UX/UI project for one product area typically runs 6-12 weeks from research through handoff, depending on complexity and how much existing research we can build on. A complete design system for a multi-product organisation usually runs 3-4 months.' },
    { q: 'How much does design work cost?', a: 'Cost tracks the number of screens, the depth of research required, and whether a design system is in scope. A scoped UX Audit generally starts in the low five figures (THB); a full UX/UI redesign for a product typically starts in the mid six figures, and a complete design system with component library and documentation runs several times that. We quote a fixed price per phase after an initial scoping call.' },
    { q: 'Who owns the Figma files, design system, and assets afterward?', a: 'You do, entirely. The complete Figma file, design tokens, component library, prototypes, and all exported assets transfer to you on final payment, with no ongoing licence or dependency on us. If your team works inside your own Figma organisation from day one, which we recommend, you have full ownership and edit access throughout the project, not just at handoff.' },
    { q: 'Do you design for accessibility and both Thai and English content?', a: 'Yes, on both counts. Accessibility (colour contrast, touch target size, screen reader support, keyboard navigation) is built into the design process rather than checked at the end, and every design that needs to support both languages is built with bilingual content in mind from the start — Thai text runs longer than English in most UI contexts, so we design layouts that hold up in both, not just the language we happened to draft in first.' },
  ] : [
    { q: 'งานออกแบบ Product ของ Haliviq ครอบคลุมอะไรบ้าง?', a: 'User Research, UX และ Information Architecture, Interface Design, Rapid Prototyping และ Design System การออกแบบของ Haliviq หมายถึงการเข้าใจปัญหาก่อนเปิด Figma และทุกดีไซน์จะถูก Validate กับผู้ใช้จริงก่อนเริ่มพัฒนา เพื่อไม่ให้อะไรที่ยังไม่ผ่านการทดสอบไปถึงทีม Engineering' },
    { q: 'ทำ User Research ในประเทศไทยได้ไหม?', a: 'ได้ครับ เราทำ Research และ Usability Test กับผู้ใช้จริงทั้งภาษาไทยและอังกฤษ และออกแบบสำหรับผู้ใช้ในภูมิภาคเอเชียตะวันออกเฉียงใต้เช่นเดียวกับผู้ใช้ทั่วโลก สิ่งนี้สำคัญกับรายละเอียดที่ Template ทั่วไปมักพลาด เช่น Payment Flow ในท้องถิ่น รูปแบบที่อยู่ และ Pattern การอ่านที่ต่างจาก UX Convention แบบตะวันตก' },
    { q: 'ใช้เครื่องมือออกแบบอะไรบ้าง?', a: 'Figma และ FigJam สำหรับงานออกแบบและ Workshop, Storybook สำหรับ Design System ในรูปแบบ Code (ไม่ใช่แค่ไฟล์ Figma แบบ Static) และ UserTesting กับ Maze สำหรับงาน Research และ Validation เราเลือกชุดเครื่องมือตาม Workflow ของทีมคุณ เพื่อให้การส่งมอบราบรื่น ไม่ใช่โปรเจกต์ Migrate Format แยกต่างหาก' },
    { q: 'ทำงานบน Design System ที่เรามีอยู่แล้วได้ไหม?', a: 'ได้ครับ เราต่อยอด Design System ที่มีอยู่แล้วในส่วนที่ยังใช้ได้ดี และสร้างใหม่ในส่วนที่ยังไม่ตอบโจทย์ ไม่ว่าจะแบบไหน System จะอยู่ในรูปแบบ Code ผ่าน Storybook ไม่ใช่แค่ไฟล์ Figma เพื่อให้ Designer และ Engineer มองไปที่แหล่งข้อมูลเดียวกันเสมอ แทนที่จะมีสองเวอร์ชันที่ค่อยๆ ต่างกันไปเรื่อยๆ' },
    { q: 'โปรเจกต์ออกแบบใช้เวลานานแค่ไหน?', a: 'UX Audit ที่กำหนดขอบเขตชัดเจนใช้เวลา 1-2 สัปดาห์ และให้ List ของ Friction Point ที่จัดลำดับความสำคัญแล้ว โปรเจกต์ UX/UI เต็มรูปแบบสำหรับหนึ่งส่วนของ Product โดยทั่วไปใช้เวลา 6-12 สัปดาห์ตั้งแต่ Research จนถึง Handoff ขึ้นอยู่กับความซับซ้อนและ Research เดิมที่มีอยู่ ส่วน Design System เต็มรูปแบบสำหรับองค์กรที่มีหลาย Product มักใช้เวลา 3-4 เดือน' },
    { q: 'งานออกแบบมีค่าใช้จ่ายเท่าไหร่?', a: 'ต้นทุนขึ้นอยู่กับจำนวนหน้าจอ ความลึกของ Research ที่ต้องทำ และมี Design System อยู่ในขอบเขตงานหรือไม่ UX Audit ที่กำหนดขอบเขตชัดเจนโดยทั่วไปเริ่มต้นที่หลักหมื่นปลายๆ (บาท) การ Redesign UX/UI เต็มรูปแบบสำหรับหนึ่ง Product โดยทั่วไปเริ่มต้นที่หลักแสนกลางๆ และ Design System เต็มรูปแบบพร้อม Component Library และเอกสารมักอยู่ที่หลายเท่าของตัวเลขนั้น เราเสนอราคาคงที่ตาม Phase หลังการคุย Scope เบื้องต้น' },
    { q: 'ไฟล์ Figma, Design System และ Asset เป็นของใครหลังจบโปรเจกต์?', a: 'เป็นของคุณทั้งหมดครับ ไฟล์ Figma ฉบับสมบูรณ์, Design Token, Component Library, Prototype และ Asset ที่ Export ทั้งหมดจะโอนเป็นของคุณเมื่อชำระเงินงวดสุดท้าย ไม่มี License ต่อเนื่องหรือการต้องพึ่งเรา หากทีมของคุณทำงานบน Figma Organization ของคุณเองตั้งแต่วันแรก ซึ่งเราแนะนำ คุณจะมีสิทธิ์เป็นเจ้าของและแก้ไขได้เต็มที่ตลอดทั้งโปรเจกต์ ไม่ใช่แค่ตอน Handoff' },
    { q: 'ออกแบบให้รองรับ Accessibility และเนื้อหาทั้งไทย-อังกฤษไหม?', a: 'รองรับทั้งสองเรื่องครับ Accessibility (Color Contrast, ขนาด Touch Target, การรองรับ Screen Reader, Keyboard Navigation) ถูกฝังอยู่ในกระบวนการออกแบบตั้งแต่ต้น ไม่ใช่มาตรวจทีหลัง และทุกดีไซน์ที่ต้องรองรับสองภาษาจะถูกออกแบบโดยคำนึงถึงเนื้อหาสองภาษาตั้งแต่แรก เพราะข้อความภาษาไทยมักยาวกว่าภาษาอังกฤษใน UI ส่วนใหญ่ เราจึงออกแบบ Layout ที่ใช้ได้ดีทั้งสองภาษา ไม่ใช่แค่ภาษาที่ร่างไว้ตอนแรก' },
  ]

  const postHeroSlot = (
    <>
    <section className="relative overflow-hidden" style={{ background: '#08070F' }}>
      <div className="relative max-w-7xl mx-auto px-4 lg:px-10 pb-24 lg:pb-32">
        <div className="rounded-2xl p-10 lg:p-16 mb-16 lg:mb-24" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}>
          <div className="w-12 h-[3px] rounded-full mb-8" style={{ background: 'linear-gradient(90deg, var(--purple-light), var(--lime))' }} />
          <p className="leading-relaxed" style={{ color: 'rgba(255,255,255,0.85)', fontSize: 'clamp(1.05rem,1.6vw,1.35rem)', fontWeight: 400, maxWidth: 900 }}>
            {overviewText}
          </p>
        </div>

        <p className="mb-5 text-xs tracking-widest uppercase" style={{ color: 'var(--lime)', fontWeight: 600 }}>
          {isEN ? 'Capabilities' : 'ความสามารถ'}
        </p>
        <h2 className="t-display mb-4" style={{ color: '#fff', fontSize: 'clamp(2.25rem,4.5vw,3.5rem)' }}>
          {isEN ? 'Key Capabilities' : 'ความสามารถหลัก'}
        </h2>
        <p className="mb-12" style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1.2rem', fontWeight: 400 }}>
          {isEN ? 'Concrete capabilities we bring to this engagement — not buzzwords.' : 'ความสามารถที่จับต้องได้จริงที่เรานำมาใช้ในทุกโปรเจกต์ ไม่ใช่แค่คำสวยหรู'}
        </p>

        <div className="grid sm:grid-cols-2 gap-5">
          {capabilities.map((c) => (
            <div key={c.title} className="p-8 rounded-2xl" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}>
              <div className="flex items-start gap-5">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0" style={{ background: 'rgba(123,110,246,0.15)' }}>
                  <i className={`ti ${c.icon}`} style={{ fontSize: 20, color: 'var(--purple-light)' }} aria-hidden="true" />
                </div>
                <div>
                  <h3 className="mb-2" style={{ color: '#fff', fontWeight: 600, fontSize: '1.35rem' }}>{c.title}</h3>
                  <p className="leading-relaxed" style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1.1rem', fontWeight: 400 }}>{c.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 lg:mt-24">
          <p className="mb-5 text-xs tracking-widest uppercase" style={{ color: 'var(--lime)', fontWeight: 600 }}>
            {isEN ? 'Tools We Use' : 'เครื่องมือที่ใช้'}
          </p>
          <h2 className="t-display mb-4" style={{ color: '#fff', fontSize: 'clamp(2.25rem,4.5vw,3.5rem)' }}>
            {isEN ? 'Technologies We Use' : 'เทคโนโลยีที่เราใช้งาน'}
          </h2>
          <p className="mb-12" style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1.2rem', fontWeight: 400, maxWidth: 640 }}>
            {isEN
              ? 'Proven design and research tools we apply where they fit — chosen for the problem, not the trend cycle.'
              : 'เครื่องมือออกแบบและ Research ที่พิสูจน์แล้ว เลือกใช้ตามโจทย์งานจริง ไม่ใช่ตามกระแส'}
          </p>

          <div className="flex flex-wrap gap-3">
            {techStack.map((t) => (
              <span
                key={t.label}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-base"
                style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.85)', fontWeight: 400 }}
              >
                {t.label}
                {t.svg ? (
                  <BrandLogo name={t.svg} />
                ) : (
                  <i className={`ti ${t.icon}`} style={{ fontSize: 15, color: 'var(--purple-light)' }} aria-hidden="true" />
                )}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-16 lg:mt-24">
          <p className="mb-5 text-xs tracking-widest uppercase" style={{ color: 'var(--lime)', fontWeight: 600 }}>
            {isEN ? 'How We Work' : 'วิธีการทำงาน'}
          </p>
          <h2 className="t-display mb-4" style={{ color: '#fff', fontSize: 'clamp(2.25rem,4.5vw,3.5rem)' }}>
            {isEN ? 'Our Approach' : 'แนวทางการทำงานของเรา'}
          </h2>
          <p className="mb-16" style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1.2rem', fontWeight: 400, maxWidth: 640 }}>
            {isEN
              ? 'A clear path from problem to production — adjusted per product, never one-size-fits-all.'
              : 'เส้นทางที่ชัดเจนจากปัญหาสู่ Production ปรับตามแต่ละ Product ไม่ใช่สูตรสำเร็จตายตัว'}
          </p>

          <div className="relative">
            <div
              className="hidden lg:block absolute left-0 right-0"
              style={{ top: 32, height: 1, background: 'linear-gradient(90deg, rgba(123,110,246,0.5), rgba(196,255,92,0.5))' }}
            />
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-x-6 gap-y-14">
              {approachSteps.map((s) => (
                <div key={s.no} className="relative">
                  <div
                    className="relative z-10 w-16 h-16 rounded-full flex items-center justify-center mb-6 font-mono"
                    style={{
                      background: 'linear-gradient(135deg, var(--purple) 0%, var(--purple-dark) 100%)',
                      boxShadow: '0 8px 24px -8px rgba(123,110,246,0.6)',
                      color: '#fff',
                      fontSize: '1.05rem',
                      fontWeight: 600,
                    }}
                  >
                    {s.no}
                  </div>
                  <h3 className="mb-2" style={{ color: '#fff', fontWeight: 600, fontSize: '1.2rem' }}>{s.title}</h3>
                  <p className="leading-relaxed" style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1rem', fontWeight: 400 }}>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 lg:mt-24">
          <h2 className="t-display mb-4" style={{ color: '#fff', fontSize: 'clamp(2.25rem,4.5vw,3.5rem)' }}>
            {isEN ? 'Frequently Asked Questions' : 'คำถามที่พบบ่อย'}
          </h2>
          <p className="mb-4" style={{ color: 'var(--lime)', fontSize: '1.2rem', fontWeight: 600 }}>
            {isEN ? 'Straight answers about how we design products.' : 'คำตอบตรงไปตรงมาเกี่ยวกับวิธีที่เราออกแบบ Product'}
          </p>

          <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}>
            {darkFaqs.map((f, i) => (
              <details key={f.q} className="group marker:hidden [&::-webkit-details-marker]:hidden" style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }} open={i === 0}>
                <summary className="flex items-center justify-between gap-6 cursor-pointer list-none py-6">
                  <span style={{ color: '#fff', fontSize: 'clamp(1.15rem,1.8vw,1.4rem)', fontWeight: 500 }}>{f.q}</span>
                  <i className="ti ti-chevron-down shrink-0 transition-transform duration-300 group-open:rotate-180" style={{ fontSize: 20, color: 'rgba(255,255,255,0.85)' }} aria-hidden="true" />
                </summary>
                <p className="pb-6 leading-relaxed" style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1.15rem', fontWeight: 400, maxWidth: 900 }}>
                  {f.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>

    <section className="relative overflow-hidden" style={{ background: '#050308' }}>
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), radial-gradient(rgba(255,255,255,0.3) 1px, transparent 1px)', backgroundSize: '180px 180px, 260px 260px', backgroundPosition: '0 0, 90px 130px' }}
      />
      <div
        className="absolute left-0 right-0 bottom-0 pointer-events-none"
        style={{ height: 260, background: 'radial-gradient(ellipse 70% 100% at 50% 100%, rgba(123,110,246,0.35) 0%, rgba(196,255,92,0.08) 45%, transparent 75%)' }}
      />
      <div className="relative max-w-7xl mx-auto px-4 lg:px-10 py-28 lg:py-36">
        <h2 className="t-display mb-5 leading-tight" style={{ color: '#fff', fontSize: 'clamp(2.5rem,5.5vw,4.2rem)' }}>
          {isEN ? 'Have a project in mind?' : 'มีโปรเจกต์ในใจแล้วใช่ไหม?'}
        </h2>
        <p className="mb-10" style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1.25rem', fontWeight: 400 }}>
          {isEN ? "We'd love to hear what you're building." : 'เรายินดีรับฟังสิ่งที่คุณกำลังสร้างครับ'}
        </p>
        <div className="flex flex-wrap items-center gap-6">
          <Link
            href={`${prefix}/contact`}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-base font-medium transition-opacity hover:opacity-90"
            style={{ background: 'linear-gradient(135deg, var(--purple) 0%, var(--purple-dark) 100%)', color: '#fff', fontWeight: 500 }}
          >
            {isEN ? 'Start a Conversation' : 'เริ่มบทสนทนา'}
            <i className="ti ti-arrow-right" style={{ fontSize: 17 }} aria-hidden="true" />
          </Link>
          <a href="mailto:wu@haliviq.com" style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1.1rem', fontWeight: 400 }}>
            wu@haliviq.com
          </a>
        </div>
      </div>
    </section>
    </>
  )

  return (
    <ServiceLayout
      lang={params.lang as Lang}
      badge={badge} title={title} subtitle={subtitle}
      heroDesc={heroDesc} heroBullets={heroBullets}
      heroDark heroSlot={heroSlot} heroShowSecondaryCta={false}
      heroCtaLabel={isEN ? 'Get Started' : 'เริ่มต้นเลย'}
      postHeroSlot={postHeroSlot}
      whyTitle={whyTitle} whyDesc={whyDesc} whyPoints={whyPoints}
      outcomes={outcomes} ctaTitle={ctaTitle} ctaDesc={ctaDesc}
      features={features} steps={steps} caseStudies={caseStudies}
      faqs={faqs} related={related}
      color="var(--purple-light)" bg="var(--purple-bg)"
      whyImg="/images/services/ux-ui-design/why1.jpg"
      whyImg2="/images/services/ux-ui-design/why2.jpg"
      featureImg="/images/services/ux-ui-design/feature.jpg"
      processImg="/images/services/ux-ui-design/process.jpg"
    />
  )
}
