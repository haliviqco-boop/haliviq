'use client'
import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import LangSwitcher from '@/components/LangSwitcher'
import { type Lang, type T } from '@/lib/i18n'

type Props = { lang: Lang; tr: T; transparent?: boolean }

const servicesMenuTh = {
  'กลยุทธ์': [
    {label:'การเปลี่ยนแปลงสู่ดิจิทัล',href:'/services/digital-transformation'},
    {label:'ค้นหาแนวทางผลิตภัณฑ์',href:'/services/product-discovery'},
    {label:'กลยุทธ์การเติบโต',href:'/services/growth-strategy'},
    {label:'ข้อมูลและการวิเคราะห์',href:'/services/data-analytics'},
    {label:'วิจัยผู้ใช้งาน',href:'/services/user-research'},
  ],
  'ดีไซน์': [
    {label:'ออกแบบ UX / UI',href:'/services/ux-ui-design'},
    {label:'ระบบดีไซน์',href:'/services/design-systems'},
    {label:'สร้าง Prototype',href:'/services/rapid-prototyping'},
    {label:'ประสบการณ์แบรนด์',href:'/services/brand-experience'},
  ],
  'พัฒนาซอฟต์แวร์': [
    {label:'พัฒนาเว็บไซต์',href:'/services/web-development'},
    {label:'แอปมือถือ iOS & Android',href:'/services/mobile-apps'},
    {label:'Backend & API',href:'/services/backend-api'},
    {label:'Cloud & DevOps',href:'/services/cloud-devops'},
    {label:'ทดสอบระบบ QA',href:'/services/qa-testing'},
    {label:'ระบบ ERP / CRM',href:'/services/erp-crm'},
  ],
  'AI & นวัตกรรม': [
    {label:'พัฒนาผลิตภัณฑ์ AI',href:'/services/ai'},
    {label:'ระบบอัตโนมัติ',href:'/services/automation'},
    {label:'บำรุงรักษาและซัพพอร์ต',href:'/services/support'},
  ],
  'อุตสาหกรรม': [
    {label:'FinTech & ธนาคาร',href:'/industries/fintech'},
    {label:'สุขภาพ',href:'/industries/healthcare'},
    {label:'ค้าปลีก & อีคอมเมิร์ซ',href:'/industries/retail'},
    {label:'อสังหาริมทรัพย์',href:'/industries/real-estate'},
    {label:'การศึกษา',href:'/industries/education'},
    {label:'โลจิสติกส์',href:'/industries/logistics'},
  ],
}

const servicesMenuEn = {
  'Strategy': [
    {label:'Digital Transformation',href:'/services/digital-transformation'},
    {label:'Product Discovery',href:'/services/product-discovery'},
    {label:'Growth Strategy',href:'/services/growth-strategy'},
    {label:'Data & Analytics',href:'/services/data-analytics'},
    {label:'User Research',href:'/services/user-research'},
  ],
  'Design': [
    {label:'UX / UI Design',href:'/services/ux-ui-design'},
    {label:'Design Systems',href:'/services/design-systems'},
    {label:'Rapid Prototyping',href:'/services/rapid-prototyping'},
    {label:'Brand Experience',href:'/services/brand-experience'},
  ],
  'Engineering': [
    {label:'Web Development',href:'/services/web-development'},
    {label:'Mobile Apps iOS & Android',href:'/services/mobile-apps'},
    {label:'Backend & API',href:'/services/backend-api'},
    {label:'Cloud & DevOps',href:'/services/cloud-devops'},
    {label:'QA Testing',href:'/services/qa-testing'},
    {label:'ERP / CRM Systems',href:'/services/erp-crm'},
  ],
  'AI & Innovation': [
    {label:'AI Product Development',href:'/services/ai'},
    {label:'Automation',href:'/services/automation'},
    {label:'Support & Maintenance',href:'/services/support'},
  ],
  'Industries': [
    {label:'FinTech & Banking',href:'/industries/fintech'},
    {label:'Healthcare',href:'/industries/healthcare'},
    {label:'Retail & E-Commerce',href:'/industries/retail'},
    {label:'Real Estate',href:'/industries/real-estate'},
    {label:'Education',href:'/industries/education'},
    {label:'Logistics',href:'/industries/logistics'},
  ],
}

const flagshipServicesTh = [
  { icon:'ti-code', title:'พัฒนาเว็บไซต์', href:'/services/web-development', desc:'เว็บแอปพลิเคชันระดับ Production ที่มั่นคง ปลอดภัย และดูแลรักษาง่ายในระยะยาว' },
  { icon:'ti-robot', title:'AI Agent & Generative AI', href:'/services/ai', desc:'AI Agent และระบบ RAG ที่ทำงานได้จริง ไม่ใช่แค่ Demo บนสไลด์' },
  { icon:'ti-device-mobile', title:'พัฒนาแอปมือถือ', href:'/services/mobile-apps', desc:'แอป Native และ Cross-platform ที่ลื่นไหลใช้งานง่าย พร้อม Architecture ที่ขยายได้' },
  { icon:'ti-chart-dots-3', title:'Data Analytics & Engineering', href:'/services/data-analytics', desc:'Pipeline และ Dashboard ที่แปลงข้อมูลให้เป็นการตัดสินใจที่วัดผลได้จริง' },
  { icon:'ti-palette', title:'UI/UX & Product Design', href:'/services/ux-ui-design', desc:'งานวิจัยผู้ใช้และ Design System ที่ทำให้ผลิตภัณฑ์ซับซ้อนใช้งานง่ายขึ้น' },
  { icon:'ti-replace', title:'Digital Transformation', href:'/services/digital-transformation', desc:'แผนปรับองค์กรสู่ดิจิทัลที่จับต้องได้ เชื่อมเทคโนโลยี กระบวนการ และทีมเข้าด้วยกัน' },
  { icon:'ti-bulb', title:'AI Workshops', href:'/services/automation', desc:'Workshop ลงมือทำจริง พาทีมของคุณนำ AI ไปใช้ในงานประจำวัน' },
]

const flagshipServicesEn = [
  { icon:'ti-code', title:'Web Development', href:'/services/web-development', desc:'Production-grade web apps and platforms built for performance, security, and long-term maintainability.' },
  { icon:'ti-robot', title:'AI Agents & Generative AI', href:'/services/ai', desc:'AI agents, RAG systems, and LLM products that automate real work — not demos that never leave the slide deck.' },
  { icon:'ti-device-mobile', title:'Mobile App Development', href:'/services/mobile-apps', desc:'Native and cross-platform mobile apps with the polish users expect and the architecture teams can scale.' },
  { icon:'ti-chart-dots-3', title:'Data Analytics & Engineering', href:'/services/data-analytics', desc:'Reliable pipelines, warehouses, and analytics that turn operational data into decisions you can act on.' },
  { icon:'ti-palette', title:'UI/UX & Product Design', href:'/services/ux-ui-design', desc:'User research, product UX, interface design, and design systems that make complex products feel simple.' },
  { icon:'ti-replace', title:'Digital Transformation', href:'/services/digital-transformation', desc:'Practical modernization programs that align technology, process, and teams around outcomes that matter.' },
  { icon:'ti-bulb', title:'AI Workshops', href:'/services/automation', desc:"Hands-on workshops to bring AI into your team's daily work." },
]

const flagshipIndustriesTh = [
  { icon: 'ti-building-bank', title: 'FinTech & ธนาคาร', href: '/industries/fintech', desc: 'Digital Banking และ Payment ที่ปลอดภัยและ Compliant' },
  { icon: 'ti-heartbeat', title: 'สุขภาพ', href: '/industries/healthcare', desc: 'เทคโนโลยีที่ยกระดับการดูแลผู้ป่วยและงานวิจัยทางการแพทย์' },
  { icon: 'ti-shopping-cart', title: 'ค้าปลีก & อีคอมเมิร์ซ', href: '/industries/retail', desc: 'สร้างประสบการณ์ช้อปปิ้งที่น่าดึงดูดและเพิ่ม Conversion' },
  { icon: 'ti-building-skyscraper', title: 'อสังหาริมทรัพย์', href: '/industries/real-estate', desc: 'แพลตฟอร์มดิจิทัลสำหรับค้นหา จัดการ และขายอสังหาฯ' },
  { icon: 'ti-school', title: 'การศึกษา', href: '/industries/education', desc: 'ยกระดับการเรียนรู้ด้วยเทคโนโลยีการศึกษาสมัยใหม่' },
  { icon: 'ti-truck-delivery', title: 'โลจิสติกส์', href: '/industries/logistics', desc: 'ระบบซัพพลายเชน ขนส่ง และคลังสินค้าที่ฉลาดขึ้น' },
]

const workMenuTh = [
  { title: 'Digital Banking Super App', href: '/work', client: 'ธนาคารชั้นนำ', desc: 'รีดีไซน์ Mobile Banking สำหรับผู้ใช้ 4 ล้านคน' },
  { title: 'Patient Digital Ecosystem', href: '/work', client: 'กลุ่มโรงพยาบาล', desc: 'ระบบสุขภาพดิจิทัลครบวงจร ตั้งแต่ค้นหาแพทย์จนถึงจองนัดหมาย' },
  { title: 'Omnichannel Retail Platform', href: '/work', client: 'เครือค้าปลีก', desc: 'Unified Commerce เชื่อม 2,000+ สาขาเข้าด้วยกัน' },
  { title: 'AI Document Intelligence', href: '/work', client: 'บริษัทประกันภัย', desc: 'AI อ่านเอกสารอัตโนมัติ ลด Manual Work ลง 80%' },
]

const workMenuEn = [
  { title: 'Digital Banking Super App', href: '/work', client: 'Leading Bank', desc: 'Redesigned mobile banking for 4 million users.' },
  { title: 'Patient Digital Ecosystem', href: '/work', client: 'Hospital Group', desc: 'End-to-end digital health system from finding a doctor to booking a visit.' },
  { title: 'Omnichannel Retail Platform', href: '/work', client: 'Retail Group', desc: 'Unified commerce connecting 2,000+ branches.' },
  { title: 'AI Document Intelligence', href: '/work', client: 'Insurance Company', desc: 'AI document processing that cut manual work by 80%.' },
]

const insightsMenuTh = [
  { title: 'บทความ', href: '/blog', desc: 'บทความ มุมมอง และความรู้เชิงลึกจากทีมผู้เชี่ยวชาญของเรา' },
  { title: 'Case Studies', href: '/case-studies', desc: 'ตัวอย่างจริงที่เราช่วยลูกค้าแก้โจทย์ที่ซับซ้อน' },
  { title: 'Today I Learned', href: '/today-i-learned', desc: 'บันทึกสั้นๆ เชิงปฏิบัติจากทีมวิศวกรและดีไซเนอร์ของเรา' },
]

const insightsMenuEn = [
  { title: 'Blog', href: '/blog', desc: 'Insights, perspectives, and thought leadership from our team of experts.' },
  { title: 'Case Studies', href: '/case-studies', desc: "Real-world examples of how we've helped clients solve complex challenges." },
  { title: 'Today I Learned', href: '/today-i-learned', desc: 'Quick, practical notes from our engineers and designers' },
]

const flagshipIndustriesEn = [
  { icon: 'ti-building-bank', title: 'FinTech & Banking', href: '/industries/fintech', desc: 'Secure, compliant digital banking and payment products.' },
  { icon: 'ti-heartbeat', title: 'Healthcare', href: '/industries/healthcare', desc: 'Technology solutions that improve patient care and medical research.' },
  { icon: 'ti-shopping-cart', title: 'Retail & E-Commerce', href: '/industries/retail', desc: 'Build engaging shopping experiences that drive conversions.' },
  { icon: 'ti-building-skyscraper', title: 'Real Estate', href: '/industries/real-estate', desc: 'Digital platforms for property search, management, and sales.' },
  { icon: 'ti-school', title: 'Education', href: '/industries/education', desc: 'Transform learning with modern educational technology.' },
  { icon: 'ti-truck-delivery', title: 'Logistics', href: '/industries/logistics', desc: 'Smarter supply chain, fleet, and warehouse operations.' },
]

const segmentsTh = [
  { icon:'ti-building-skyscraper', title:'Enterprise', desc:'ทีมงานครบวงจรสำหรับแพลตฟอร์มซับซ้อน พร้อมมาตรฐานความปลอดภัยและกระบวนการที่องค์กรใหญ่ต้องการ' },
  { icon:'ti-rocket', title:'ธุรกิจขนาดเล็ก & Startup', desc:'งานที่กระชับตรงจุด เราช่วยตัดสิ่งที่ไม่จำเป็นออก ไม่ใช่คุณภาพ งบไม่มากก็ได้โปรดักต์ที่แข็งแรง' },
]

const segmentsEn = [
  { icon:'ti-building-skyscraper', title:'Enterprise', desc:'Full delivery teams for complex platforms, with the security, compliance, and process rigor large organizations expect.' },
  { icon:'ti-rocket', title:'Small Business & Startups', desc:'Lean, focused builds that get the essentials right. We help you trim scope, not quality, so a modest budget still ships a solid product.' },
]

const mobileNavTh = [
  { key: 'contact', label: 'ติดต่อ', href: '/contact' },
]

const mobileNavEn = [
  { key: 'contact', label: 'Contact', href: '/contact' },
]

export default function Navbar({ lang, tr, transparent = false }: Props) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [industriesOpen, setIndustriesOpen] = useState(false)
  const [insightsOpen, setInsightsOpen] = useState(false)
  const [workOpen, setWorkOpen] = useState(false)
  const [openMobileKey, setOpenMobileKey] = useState<string|null>(null)
  const [openCatKey, setOpenCatKey] = useState<string|null>(null)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const [mobileIndustriesOpen, setMobileIndustriesOpen] = useState(false)
  const [mobileInsightsOpen, setMobileInsightsOpen] = useState(false)
  const [mobileWorkOpen, setMobileWorkOpen] = useState(false)
  const servicesRef = useRef<HTMLDivElement>(null)
  const industriesRef = useRef<HTMLDivElement>(null)
  const insightsRef = useRef<HTMLDivElement>(null)
  const workRef = useRef<HTMLDivElement>(null)
  const n = tr.nav
  const prefix = `/${lang}`
  const servicesMenu = lang === 'en' ? servicesMenuEn : servicesMenuTh
  const flagshipServices = lang === 'en' ? flagshipServicesEn : flagshipServicesTh
  const flagshipIndustries = lang === 'en' ? flagshipIndustriesEn : flagshipIndustriesTh
  const insightsMenu = lang === 'en' ? insightsMenuEn : insightsMenuTh
  const workMenu = lang === 'en' ? workMenuEn : workMenuTh
  const segments = lang === 'en' ? segmentsEn : segmentsTh
  const allServicesLabel = lang === 'en' ? 'All Services' : 'บริการทั้งหมด'
  const allIndustriesLabel = n.allIndustries
  const mobileNav = lang === 'en' ? mobileNavEn : mobileNavTh

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(e.target as Node)) setServicesOpen(false)
      if (industriesRef.current && !industriesRef.current.contains(e.target as Node)) setIndustriesOpen(false)
      if (insightsRef.current && !insightsRef.current.contains(e.target as Node)) setInsightsOpen(false)
      if (workRef.current && !workRef.current.contains(e.target as Node)) setWorkOpen(false)
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  // Pages that opt into the dark theme (currently just the homepage) keep the light
  // logo and bright nav text at all scroll positions, since the whole page is dark —
  // only the header backdrop swaps from fully transparent to a dark blurred bar on scroll.
  const isTransparent = transparent
  const navTextColor = isTransparent ? 'var(--purple-light)' : 'var(--purple)'

  // Mobile menu panel: match whichever theme the page itself uses, same as the
  // desktop nav above, instead of always forcing the light panel.
  const mobileBg = isTransparent ? '#08070F' : '#fff'
  const mobileBorder = isTransparent ? 'rgba(255,255,255,0.14)' : '#E4E4EC'
  const mobileSubBorder = isTransparent ? 'rgba(255,255,255,0.08)' : '#F0F0F6'
  const mobileHeadColor = isTransparent ? 'var(--purple-light)' : 'var(--purple)'
  const mobileItemColor = isTransparent ? 'rgba(255,255,255,0.85)' : '#0A0A0F'

  return (
    <>
      <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        transparent
          ? (scrolled ? 'bg-[#08070F]/90 backdrop-blur-xl shadow-sm shadow-black/[0.3] border-b border-white/[0.08]' : 'bg-transparent border-b border-transparent')
          : 'bg-white/96 backdrop-blur-xl shadow-sm shadow-black/[0.04] border-b border-[#E4E4EC]'
      }`}>
        {/* Brand gradient hairline across the very top edge */}
        <div className="h-[3px] w-full" style={{background:'linear-gradient(90deg, var(--purple-dark) 0%, var(--purple) 30%, var(--purple-light) 60%, var(--lime) 100%)', opacity: isTransparent && !scrolled ? 1 : 0, transition:'opacity 0.3s'}}/>
        <div className="max-w-7xl mx-auto px-4 lg:px-6 flex items-center justify-between h-[60px]">

          <Link href={`${prefix}`}>
            <img src={isTransparent ? '/haliviq-logo-light.svg' : '/haliviq-logo.svg'} alt="Haliviq" className="h-9 w-auto transition-all duration-300"/>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            <div className="relative" ref={servicesRef}>
              <button onClick={() => setServicesOpen(!servicesOpen)}
                className="flex items-center gap-1.5 transition-colors"
                style={{fontWeight:400,fontSize:'16px', color:navTextColor}}>
                {n.services}
                <svg width="13" height="13" viewBox="0 0 12 12" fill="none" className={`transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`}>
                  <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>

              {servicesOpen && (
                <div
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[560px] rounded-2xl p-5"
                  style={{ zIndex: 200, background: '#0B0A16', border: '1px solid rgba(255,255,255,0.08)', boxShadow: '0 30px 60px -20px rgba(0,0,0,0.6)' }}
                >
                  <div className="mb-4">
                    {flagshipServices.map((s) => (
                      <Link
                        key={s.href}
                        href={`${prefix}${s.href}`}
                        onClick={() => setServicesOpen(false)}
                        className="group flex items-start gap-4 p-3 rounded-xl hover:bg-white/5 transition-colors"
                      >
                        <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0" style={{ background: 'rgba(255,255,255,0.06)' }}>
                          <i className={`ti ${s.icon}`} style={{ fontSize: 18, color: 'var(--purple-light)' }} aria-hidden="true" />
                        </div>
                        <div>
                          <p className="mb-0.5 transition-colors group-hover:text-[var(--purple-light)]" style={{ color: '#fff', fontWeight: 500, fontSize: '0.95rem' }}>
                            {s.title}
                          </p>
                          <p style={{ color: 'rgba(255,255,255,0.85)', fontWeight: 400, fontSize: '0.82rem', lineHeight: 1.45 }}>
                            {s.desc}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>

                  <div className="grid grid-cols-2 gap-3 mb-3">
                    {segments.map((seg) => (
                      <Link
                        key={seg.title}
                        href={`${prefix}/contact`}
                        onClick={() => setServicesOpen(false)}
                        className="rounded-xl p-4 hover:bg-white/[0.06] transition-colors"
                        style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
                      >
                        <div className="w-9 h-9 rounded-lg flex items-center justify-center mb-3" style={{ background: 'rgba(255,255,255,0.06)' }}>
                          <i className={`ti ${seg.icon}`} style={{ fontSize: 16, color: 'var(--lime)' }} aria-hidden="true" />
                        </div>
                        <p className="mb-1" style={{ color: '#fff', fontWeight: 500, fontSize: '0.85rem' }}>{seg.title}</p>
                        <p style={{ color: 'rgba(255,255,255,0.85)', fontWeight: 400, fontSize: '0.75rem', lineHeight: 1.5 }}>{seg.desc}</p>
                      </Link>
                    ))}
                  </div>

                  <Link
                    href={`${prefix}/services`}
                    onClick={() => setServicesOpen(false)}
                    className="flex items-center justify-between px-4 py-3 rounded-xl transition-colors hover:bg-[rgba(123,110,246,0.18)]"
                    style={{ background: 'rgba(123,110,246,0.12)', border: '1px solid rgba(123,110,246,0.3)' }}
                  >
                    <span style={{ color: 'var(--purple-light)', fontWeight: 500, fontSize: '0.9rem' }}>{allServicesLabel}</span>
                    <svg width="15" height="15" viewBox="0 0 14 14" fill="none"><path d="M2 7h10M8 3l4 4-4 4" stroke="var(--purple-light)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </Link>
                </div>
              )}
            </div>

            <div className="relative" ref={workRef}>
              <button onClick={() => setWorkOpen(!workOpen)}
                className="flex items-center gap-1.5 transition-colors"
                style={{fontWeight:400,fontSize:'16px', color:navTextColor}}>
                {n.work}
                <svg width="13" height="13" viewBox="0 0 12 12" fill="none" className={`transition-transform duration-200 ${workOpen ? 'rotate-180' : ''}`}>
                  <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>

              {workOpen && (
                <div
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[380px] rounded-2xl p-5"
                  style={{ zIndex: 200, background: '#0B0A16', border: '1px solid rgba(255,255,255,0.08)', boxShadow: '0 30px 60px -20px rgba(0,0,0,0.6)' }}
                >
                  <div className="mb-3">
                    {workMenu.map((w, i) => (
                      <Link
                        key={i}
                        href={`${prefix}${w.href}`}
                        onClick={() => setWorkOpen(false)}
                        className={`group block p-3 rounded-xl hover:bg-white/5 transition-colors ${i > 0 ? 'mt-1' : ''}`}
                      >
                        <p className="mb-1 transition-colors group-hover:text-[var(--purple-light)]" style={{ color: '#fff', fontWeight: 500, fontSize: '0.95rem' }}>
                          {w.title}
                        </p>
                        <p style={{ color: 'rgba(255,255,255,0.7)', fontWeight: 400, fontSize: '0.82rem', lineHeight: 1.45 }}>
                          {w.desc}
                        </p>
                      </Link>
                    ))}
                  </div>

                  <Link
                    href={`${prefix}/work`}
                    onClick={() => setWorkOpen(false)}
                    className="flex items-center justify-between px-4 py-3 rounded-xl transition-colors hover:bg-[rgba(123,110,246,0.18)]"
                    style={{ background: 'rgba(123,110,246,0.12)', border: '1px solid rgba(123,110,246,0.3)' }}
                  >
                    <span style={{ color: 'var(--purple-light)', fontWeight: 500, fontSize: '0.9rem' }}>{lang === 'en' ? 'All Work' : 'ผลงานทั้งหมด'}</span>
                    <svg width="15" height="15" viewBox="0 0 14 14" fill="none"><path d="M2 7h10M8 3l4 4-4 4" stroke="var(--purple-light)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </Link>
                </div>
              )}
            </div>

            <div className="relative" ref={industriesRef}>
              <button onClick={() => setIndustriesOpen(!industriesOpen)}
                className="flex items-center gap-1.5 transition-colors"
                style={{fontWeight:400,fontSize:'16px', color:navTextColor}}>
                {n.industries}
                <svg width="13" height="13" viewBox="0 0 12 12" fill="none" className={`transition-transform duration-200 ${industriesOpen ? 'rotate-180' : ''}`}>
                  <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>

              {industriesOpen && (
                <div
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[380px] rounded-2xl p-5"
                  style={{ zIndex: 200, background: '#0B0A16', border: '1px solid rgba(255,255,255,0.08)', boxShadow: '0 30px 60px -20px rgba(0,0,0,0.6)' }}
                >
                  <div className="mb-3">
                    {flagshipIndustries.map((ind) => (
                      <Link
                        key={ind.href}
                        href={`${prefix}${ind.href}`}
                        onClick={() => setIndustriesOpen(false)}
                        className="group flex items-start gap-4 p-3 rounded-xl hover:bg-white/5 transition-colors"
                      >
                        <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0" style={{ background: 'rgba(255,255,255,0.06)' }}>
                          <i className={`ti ${ind.icon}`} style={{ fontSize: 18, color: 'var(--lime)' }} aria-hidden="true" />
                        </div>
                        <div>
                          <p className="mb-0.5 transition-colors group-hover:text-[var(--purple-light)]" style={{ color: '#fff', fontWeight: 500, fontSize: '0.95rem' }}>
                            {ind.title}
                          </p>
                          <p style={{ color: 'rgba(255,255,255,0.85)', fontWeight: 400, fontSize: '0.82rem', lineHeight: 1.45 }}>
                            {ind.desc}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>

                  <Link
                    href={`${prefix}/industries`}
                    onClick={() => setIndustriesOpen(false)}
                    className="flex items-center justify-between px-4 py-3 rounded-xl transition-colors hover:bg-[rgba(123,110,246,0.18)]"
                    style={{ background: 'rgba(123,110,246,0.12)', border: '1px solid rgba(123,110,246,0.3)' }}
                  >
                    <span style={{ color: 'var(--purple-light)', fontWeight: 500, fontSize: '0.9rem' }}>{allIndustriesLabel}</span>
                    <svg width="15" height="15" viewBox="0 0 14 14" fill="none"><path d="M2 7h10M8 3l4 4-4 4" stroke="var(--purple-light)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </Link>
                </div>
              )}
            </div>

            <div className="relative" ref={insightsRef}>
              <button onClick={() => setInsightsOpen(!insightsOpen)}
                className="flex items-center gap-1.5 transition-colors"
                style={{fontWeight:400,fontSize:'16px', color:navTextColor}}>
                {n.insights}
                <svg width="13" height="13" viewBox="0 0 12 12" fill="none" className={`transition-transform duration-200 ${insightsOpen ? 'rotate-180' : ''}`}>
                  <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>

              {insightsOpen && (
                <div
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[340px] rounded-2xl p-5"
                  style={{ zIndex: 200, background: '#0B0A16', border: '1px solid rgba(255,255,255,0.08)', boxShadow: '0 30px 60px -20px rgba(0,0,0,0.6)' }}
                >
                  {insightsMenu.map((it, i) => (
                    <Link
                      key={it.href}
                      href={`${prefix}${it.href}`}
                      onClick={() => setInsightsOpen(false)}
                      className={`group block p-3 rounded-xl hover:bg-white/5 transition-colors ${i > 0 ? 'mt-1' : ''}`}
                    >
                      <p className="mb-1 transition-colors group-hover:text-[var(--purple-light)]" style={{ color: '#fff', fontWeight: 500, fontSize: '0.98rem' }}>
                        {it.title}
                      </p>
                      <p style={{ color: 'rgba(255,255,255,0.7)', fontWeight: 400, fontSize: '0.83rem', lineHeight: 1.5 }}>
                        {it.desc}
                      </p>
                    </Link>
                  ))}
                </div>
              )}
            </div>

          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <LangSwitcher/>
            <Link href={`${prefix}/contact`} className="transition-colors mr-1" style={{fontWeight:400,fontSize:'16px', color:navTextColor}}>{n.contact}</Link>
            <Link href={`${prefix}/contact`} className="inline-flex items-center gap-2 rounded-full transition-transform hover:scale-[1.03]" style={{fontSize:'1rem',padding:'12px 24px', background:'#2B1764', color:'#fff'}}>
              {n.cta}
              <svg width="15" height="15" viewBox="0 0 14 14" fill="none"><path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </Link>
          </div>

          <div className="lg:hidden flex items-center gap-2">
            <LangSwitcher/>
            <button onClick={() => setMenuOpen(!menuOpen)} className="p-2" style={{color:navTextColor}}>
              <div className={`w-5 h-0.5 bg-current mb-1.5 transition-all ${menuOpen?'rotate-45 translate-y-2':''}`}/>
              <div className={`w-5 h-0.5 bg-current mb-1.5 transition-all ${menuOpen?'opacity-0':''}`}/>
              <div className={`w-5 h-0.5 bg-current transition-all ${menuOpen?'-rotate-45 -translate-y-2':''}`}/>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <div className={`fixed inset-0 z-40 transition-all duration-300 lg:hidden ${menuOpen?'opacity-100 visible':'opacity-0 invisible'}`} style={{ background: mobileBg }}>
        <div className="flex flex-col h-full pt-20 pb-10 px-5 overflow-y-auto">
          <nav className="flex flex-col mt-2">

            {/* บริการ accordion */}
            <div className="border-b" style={{ borderColor: mobileBorder }}>
              <button
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="flex items-center justify-between w-full py-3"
                style={{fontWeight:400,fontSize:"1.15rem", color: mobileHeadColor}}
              >
                {n.services}
                <svg width="16" height="16" viewBox="0 0 12 12" fill="none"
                  className={`transition-transform duration-200 ${mobileServicesOpen?'rotate-180':''}`}>
                  <path d="M2 4l4 4 4-4" stroke={mobileHeadColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              {mobileServicesOpen && (
                <div className="pb-3 pl-2">
                  {Object.entries(servicesMenu).map(([cat, items]) => (
                    <div key={cat} className="mb-1 border-b last:border-0" style={{ borderColor: mobileSubBorder }}>
                      <button
                        onClick={() => setOpenCatKey(openCatKey === cat ? null : cat)}
                        className="flex items-center justify-between w-full py-2"
                      >
                        <span style={{fontSize:"1.05rem",fontWeight:400,color:mobileHeadColor}}>{cat}</span>
                        <svg width="14" height="14" viewBox="0 0 12 12" fill="none"
                          className={`transition-transform duration-200 ${openCatKey === cat ? 'rotate-180' : ''}`}>
                          <path d="M2 4l4 4 4-4" stroke={mobileHeadColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </button>
                      {openCatKey === cat && (
                        <div className="pb-2 pl-2">
                          {(items as any[]).map((i:any) => (
                            <Link key={i.href} href={`${prefix}${i.href}`}
                              onClick={() => { setMenuOpen(false); setMobileServicesOpen(false); setOpenCatKey(null) }}
                              className="block py-1.5 hover:text-[var(--purple-light)] transition-colors"
                              style={{fontWeight:400,fontSize:'1rem', color: mobileItemColor}}>{i.label}</Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Work accordion */}
            <div className="border-b" style={{ borderColor: mobileBorder }}>
              <button
                onClick={() => setMobileWorkOpen(!mobileWorkOpen)}
                className="flex items-center justify-between w-full py-3"
                style={{fontWeight:400,fontSize:"1.15rem", color: mobileHeadColor}}
              >
                {n.work}
                <svg width="16" height="16" viewBox="0 0 12 12" fill="none"
                  className={`transition-transform duration-200 ${mobileWorkOpen?'rotate-180':''}`}>
                  <path d="M2 4l4 4 4-4" stroke={mobileHeadColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              {mobileWorkOpen && (
                <div className="pb-3 pl-2">
                  {workMenu.map((w, i) => (
                    <Link key={i} href={`${prefix}${w.href}`}
                      onClick={() => { setMenuOpen(false); setMobileWorkOpen(false) }}
                      className="block py-1.5 hover:text-[var(--purple-light)] transition-colors"
                      style={{fontWeight:400,fontSize:'1rem', color: mobileItemColor}}>{w.title}</Link>
                  ))}
                  <Link href={`${prefix}/work`}
                    onClick={() => { setMenuOpen(false); setMobileWorkOpen(false) }}
                    className="block py-1.5 mt-1 transition-colors"
                    style={{fontWeight:500,fontSize:'1rem', color: mobileHeadColor}}>{lang === 'en' ? 'All Work' : 'ผลงานทั้งหมด'} →</Link>
                </div>
              )}
            </div>

            {/* อุตสาหกรรม accordion */}
            <div className="border-b" style={{ borderColor: mobileBorder }}>
              <button
                onClick={() => setMobileIndustriesOpen(!mobileIndustriesOpen)}
                className="flex items-center justify-between w-full py-3"
                style={{fontWeight:400,fontSize:"1.15rem", color: mobileHeadColor}}
              >
                {n.industries}
                <svg width="16" height="16" viewBox="0 0 12 12" fill="none"
                  className={`transition-transform duration-200 ${mobileIndustriesOpen?'rotate-180':''}`}>
                  <path d="M2 4l4 4 4-4" stroke={mobileHeadColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              {mobileIndustriesOpen && (
                <div className="pb-3 pl-2">
                  {flagshipIndustries.map((ind) => (
                    <Link key={ind.href} href={`${prefix}${ind.href}`}
                      onClick={() => { setMenuOpen(false); setMobileIndustriesOpen(false) }}
                      className="block py-1.5 hover:text-[var(--purple-light)] transition-colors"
                      style={{fontWeight:400,fontSize:'1rem', color: mobileItemColor}}>{ind.title}</Link>
                  ))}
                  <Link href={`${prefix}/industries`}
                    onClick={() => { setMenuOpen(false); setMobileIndustriesOpen(false) }}
                    className="block py-1.5 mt-1 transition-colors"
                    style={{fontWeight:500,fontSize:'1rem', color: mobileHeadColor}}>{allIndustriesLabel} →</Link>
                </div>
              )}
            </div>

            {/* Insights accordion */}
            <div className="border-b" style={{ borderColor: mobileBorder }}>
              <button
                onClick={() => setMobileInsightsOpen(!mobileInsightsOpen)}
                className="flex items-center justify-between w-full py-3"
                style={{fontWeight:400,fontSize:"1.15rem", color: mobileHeadColor}}
              >
                {n.insights}
                <svg width="16" height="16" viewBox="0 0 12 12" fill="none"
                  className={`transition-transform duration-200 ${mobileInsightsOpen?'rotate-180':''}`}>
                  <path d="M2 4l4 4 4-4" stroke={mobileHeadColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              {mobileInsightsOpen && (
                <div className="pb-3 pl-2">
                  {insightsMenu.map((it) => (
                    <Link key={it.href} href={`${prefix}${it.href}`}
                      onClick={() => { setMenuOpen(false); setMobileInsightsOpen(false) }}
                      className="block py-1.5 hover:text-[var(--purple-light)] transition-colors"
                      style={{fontWeight:400,fontSize:'1rem', color: mobileItemColor}}>{it.title}</Link>
                  ))}
                </div>
              )}
            </div>

            {/* เมนูหลักอื่นๆ เป็น link ตรงๆ */}
            {mobileNav.map(({ key, label, href }) => (
              <Link key={key} href={`${prefix}${href}`}
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-between py-3 hover:text-[var(--purple-light)] transition-colors border-b"
                style={{fontWeight:400,fontSize:"1.15rem", color: mobileHeadColor, borderColor: mobileBorder}}>
                {label}
              </Link>
            ))}
          </nav>

          <div className="mt-6">
            <Link href={`${prefix}/contact`} onClick={() => setMenuOpen(false)} className="btn-primary w-full justify-center">
              {n.cta}
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
