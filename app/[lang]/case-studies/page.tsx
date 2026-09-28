'use client'
import { useRef } from 'react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import { t, type Lang } from '@/lib/i18n'
import Footer from '@/components/Footer'

const featureCardsEN = [
  { icon: 'ti-code', title: 'Scalability', desc: 'Built and designed to scale cleanly as new features get added over time.' },
  { icon: 'ti-search', title: 'Find a Doctor', desc: 'Search and filter doctors across every specialty and clinic location.' },
  { icon: 'ti-users-group', title: 'Connect with Patients', desc: 'Multiple pathways for patients to reach the hospital — app, forms, call center.' },
  { icon: 'ti-affiliate', title: 'Seamless Integration', desc: 'Integrates cleanly with the existing website to preserve brand identity.' },
  { icon: 'ti-calendar-check', title: 'Easy Bookings', desc: 'Book appointments based on the criteria patients actually care about.' },
  { icon: 'ti-language', title: 'Language Support', desc: 'Built-in support for the languages an international patient base needs.' },
]
const featureCardsTH = [
  { icon: 'ti-code', title: 'Scalability', desc: 'ออกแบบให้ต่อยอด Feature ใหม่ๆ ได้อย่างต่อเนื่องในอนาคต' },
  { icon: 'ti-search', title: 'Find a Doctor', desc: 'ค้นหาและกรองแพทย์ได้ครบทุกความเชี่ยวชาญและสาขา' },
  { icon: 'ti-users-group', title: 'Connect with Patients', desc: 'เปิดหลายช่องทางให้ผู้ป่วยติดต่อโรงพยาบาลได้ ทั้งแอป ฟอร์ม และ Call Center' },
  { icon: 'ti-affiliate', title: 'Seamless Integration', desc: 'เชื่อมต่อกับเว็บไซต์เดิมได้อย่างไร้รอยต่อ รักษา Brand Identity ไว้ครบ' },
  { icon: 'ti-calendar-check', title: 'Easy Bookings', desc: 'จองนัดหมายตามเงื่อนไขที่ผู้ป่วยให้ความสำคัญจริงๆ' },
  { icon: 'ti-language', title: 'Language Support', desc: 'รองรับหลายภาษาสำหรับฐานผู้ป่วยนานาชาติ' },
]

const featuredEN = {
  badge: 'Healthcare & Life Sciences', client: 'Sukhumvit Health Network',
  title: 'Patient Digital Ecosystem Mobile App',
  desc: 'Building a comprehensive healthcare mobile app, enabling patients to find doctors, book appointments, and access medical services across multiple languages.',
}
const featuredTH = {
  badge: 'Healthcare & Life Sciences', client: 'เครือโรงพยาบาลสุขุมวิท',
  title: 'แอปมือถือระบบสุขภาพดิจิทัลครบวงจร',
  desc: 'สร้างแอปมือถือด้านสุขภาพแบบครบวงจร ให้ผู้ป่วยค้นหาแพทย์ จองนัดหมาย และเข้าถึงบริการทางการแพทย์ได้หลายภาษา',
}

const groupsEN = [
  { label: 'FinTech', ids: [1, 5, 11] },
  { label: 'E-Commerce', ids: [2, 6, 12] },
  { label: 'Healthcare', ids: [3, 10] },
  { label: 'AI', ids: [4, 8] },
  { label: 'Enterprise', ids: [7, 9] },
]

const casesEN = [
  { id:1, tags:['FinTech'], client:'Leading Bank', title:'Digital Banking Super App', desc:'Redesigned mobile banking for 4 million users.', result:'+62% DAU' },
  { id:2, tags:['E-Commerce'], client:'Retail Group', title:'Omnichannel Retail Platform', desc:'Unified commerce connecting 2,000+ branches.', result:'3× Conversion' },
  { id:3, tags:['Healthcare'], client:'Hospital Group', title:'Patient Digital Ecosystem', desc:'End-to-end digital health system.', result:'-40% No-show' },
  { id:4, tags:['AI'], client:'Insurance Company', title:'AI Document Intelligence', desc:'AI document processing, reduced manual work by 80%.', result:'-80% Processing' },
  { id:5, tags:['FinTech'], client:'FinTech Startup', title:'Payment Gateway Platform', desc:'Handles 500K transactions per day.', result:'99.97% Success' },
  { id:6, tags:['E-Commerce'], client:'Retail Chain', title:'Grocery Delivery App', desc:'30-minute delivery with real-time inventory.', result:'4.8★ App Store' },
  { id:7, tags:['Enterprise'], client:'Factory (500 staff)', title:'ERP & Workforce Management', desc:'Full ERP covering Finance, HR, Inventory.', result:'-28% OpEx' },
  { id:8, tags:['AI'], client:'Online Academy', title:'AI-powered EdTech Platform', desc:'Personalised AI tutor for 50K learners.', result:'4× Completion' },
  { id:9, tags:['Enterprise'], client:'Express Logistics', title:'Logistics & Fleet Management', desc:'Last-mile system for 3,000 drivers.', result:'97% On-time' },
  { id:10, tags:['Healthcare'], client:'Health Platform', title:'Telemedicine & Mental Health', desc:'Video consultation + mood tracking.', result:'92% Completion' },
  { id:11, tags:['FinTech'], client:'Insurance Group', title:'InsurTech Claims Platform', desc:'AI claims processing, 73% time reduction.', result:'73% Faster' },
  { id:12, tags:['E-Commerce'], client:'Fashion Retailer', title:'Personalization Engine', desc:'AI product recommendation increased AOV by 45%.', result:'+45% AOV' },
]

const groupsTH = groupsEN
const casesTH = [
  { id:1, tags:['FinTech'], client:'ธนาคารชั้นนำ', title:'Digital Banking Super App', desc:'รีดีไซน์ Mobile Banking สำหรับผู้ใช้ 4 ล้านคน', result:'+62% DAU' },
  { id:2, tags:['E-Commerce'], client:'เครือค้าปลีก', title:'Omnichannel Retail Platform', desc:'Unified Commerce เชื่อม 2,000+ สาขา', result:'3× Conversion' },
  { id:3, tags:['Healthcare'], client:'กลุ่มโรงพยาบาล', title:'Patient Digital Ecosystem', desc:'ระบบสุขภาพดิจิทัลครบวงจร', result:'-40% No-show' },
  { id:4, tags:['AI'], client:'บริษัทประกันภัย', title:'AI Document Intelligence', desc:'AI อ่านเอกสารอัตโนมัติ ลด Manual 80%', result:'-80% Processing' },
  { id:5, tags:['FinTech'], client:'FinTech Startup', title:'Payment Gateway Platform', desc:'รองรับ 500K Transaction/วัน', result:'99.97% Success' },
  { id:6, tags:['E-Commerce'], client:'Retail Chain', title:'Grocery Delivery App', desc:'Delivery 30 นาที, Real-time Inventory', result:'4.8★ App Store' },
  { id:7, tags:['Enterprise'], client:'โรงงาน 500 คน', title:'ERP & Workforce Management', desc:'ERP ครบวงจร Finance, HR, Inventory', result:'-28% OpEx' },
  { id:8, tags:['AI'], client:'Online Academy', title:'AI-powered EdTech Platform', desc:'AI Tutor Personalized สำหรับ 50K ผู้เรียน', result:'4× Completion' },
  { id:9, tags:['Enterprise'], client:'Express Logistics', title:'Logistics & Fleet Management', desc:'Last-mile สำหรับ 3,000 Driver', result:'97% On-time' },
  { id:10, tags:['Healthcare'], client:'Health Platform', title:'Telemedicine & Mental Health', desc:'Video Consultation + Mood Tracking', result:'92% Completion' },
  { id:11, tags:['FinTech'], client:'Insurance Group', title:'InsurTech Claims Platform', desc:'AI Claims Processing ลด 73% เวลา', result:'73% Faster' },
  { id:12, tags:['E-Commerce'], client:'Fashion Retailer', title:'Personalization Engine', desc:'AI Product Recommendation เพิ่ม AOV 45%', result:'+45% AOV' },
]

const gradients = [
  'linear-gradient(135deg, var(--purple) 0%, var(--purple-light) 100%)',
  'linear-gradient(135deg, var(--purple-light) 0%, var(--lime) 100%)',
  'linear-gradient(135deg, var(--purple-dark) 0%, var(--purple) 100%)',
  'linear-gradient(135deg, var(--purple) 0%, var(--lime) 100%)',
]

function PhoneMock({ variant }: { variant: 'home' | 'doctor' }) {
  return (
    <div className="w-[190px] h-[390px] rounded-[32px] p-1.5 shrink-0" style={{ background: '#0A0A0F', boxShadow: '0 30px 60px -20px rgba(0,0,0,0.5)' }}>
      <div className="w-full h-full rounded-[26px] overflow-hidden relative" style={{ background: '#fff' }}>
        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-16 h-4 rounded-full" style={{ background: '#0A0A0F', zIndex: 2 }} />
        {variant === 'home' ? (
          <div className="pt-9 px-3">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-7 h-7 rounded-full" style={{ background: 'var(--purple-bg)' }} />
              <div className="h-2 w-20 rounded" style={{ background: '#EDEDF5' }} />
            </div>
            <div className="h-7 rounded-lg mb-3" style={{ background: '#F5F5FA' }} />
            <div className="grid grid-cols-2 gap-2 mb-3">
              {[0,1,2,3].map(i => (
                <div key={i} className="h-14 rounded-xl flex items-center justify-center" style={{ background: i % 2 === 0 ? 'var(--purple-bg)' : 'var(--lime-bg)' }}>
                  <div className="w-5 h-5 rounded" style={{ background: i % 2 === 0 ? 'var(--purple)' : 'var(--lime-dark)', opacity: 0.6 }} />
                </div>
              ))}
            </div>
            <div className="h-2 w-16 rounded mb-2" style={{ background: '#EDEDF5' }} />
            <div className="h-20 rounded-xl" style={{ background: 'linear-gradient(135deg, var(--purple-bg), var(--lime-bg))' }} />
          </div>
        ) : (
          <div className="pt-9 px-3">
            <div className="h-20 rounded-xl mb-3" style={{ background: 'linear-gradient(135deg, var(--purple), var(--purple-light))' }} />
            <div className="h-2.5 w-24 rounded mb-2" style={{ background: '#0A0A0F', opacity: 0.75 }} />
            <div className="h-2 w-32 rounded mb-4" style={{ background: '#EDEDF5' }} />
            <div className="h-2 w-14 rounded mb-2" style={{ background: '#CFCFE0' }} />
            <div className="h-2 w-28 rounded mb-1.5" style={{ background: '#EDEDF5' }} />
            <div className="h-2 w-20 rounded mb-5" style={{ background: '#EDEDF5' }} />
            <div className="h-9 rounded-full" style={{ background: 'var(--lime-dark)' }} />
          </div>
        )}
      </div>
    </div>
  )
}

export default function Page({ params }: { params: { lang: Lang } }) {
  const lang = (params.lang === 'en' ? 'en' : 'th') as Lang
  const isEN = lang === 'en'
  const tr = t[lang] as any
  const featureCards = isEN ? featureCardsEN : featureCardsTH
  const featured = isEN ? featuredEN : featuredTH
  const groups = isEN ? groupsEN : groupsTH
  const cases = isEN ? casesEN : casesTH
  const rowRefs = useRef<Record<string, HTMLDivElement | null>>({})

  const scrollRow = (label: string, dir: 1 | -1) => {
    const el = rowRefs.current[label]
    if (el) el.scrollBy({ left: dir * 360, behavior: 'smooth' })
  }

  const left = featureCards.slice(0, 3)
  const right = featureCards.slice(3, 6)

  return (
    <>
      <Navbar lang={lang} tr={tr} />
      <main>
        <section className="pt-[80px] bg-white">
          <div className="h-1 w-full" style={{ background: 'linear-gradient(90deg,var(--purple),var(--purple-light),var(--lime))' }} />
          <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-20 lg:pt-28 pb-16">
            <div className="mb-16">
              <p className="t-label mb-5">{isEN ? 'Case Studies' : 'Case Studies'}</p>
              <h1 className="t-display text-[clamp(3rem,7vw,6.5rem)] text-[#0A0A0F] leading-none mb-6">
                {isEN ? <>Real work,<br /><span style={{ background:'linear-gradient(135deg,var(--purple) 0%,var(--purple-light) 50%,var(--lime) 100%)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' }}>Real results</span></> : <>ผลงานจริง<br /><span style={{ background:'linear-gradient(135deg,var(--purple) 0%,var(--purple-light) 50%,var(--lime) 100%)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' }}>ผลลัพธ์ที่วัดได้</span></>}
              </h1>
              <p className="t-body text-sm max-w-lg">
                {isEN ? "How we've helped clients across industries solve complex challenges with technology." : 'ตัวอย่างที่เราช่วยลูกค้าในหลากหลายอุตสาหกรรมแก้โจทย์ที่ซับซ้อนด้วยเทคโนโลยี'}
              </p>
            </div>

            {/* Featured case study — cover art + 2 rows of feature cards */}
            <div className="rounded-[32px] overflow-hidden border border-[#E4E4EC]">
              <div className="relative py-16 px-6 lg:px-16" style={{ background: 'linear-gradient(160deg, var(--purple-bg) 0%, var(--lime-bg) 100%)' }}>
                <div className="grid lg:grid-cols-[1fr_auto_1fr] gap-8 items-center">
                  <div className="grid grid-rows-2 gap-5 order-2 lg:order-1">
                    {left.map((c) => (
                      <div key={c.title} className="bg-white rounded-2xl p-5 shadow-lg shadow-black/5">
                        <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-3" style={{ background: 'var(--purple-bg)' }}>
                          <i className={`ti ${c.icon}`} style={{ fontSize: 18, color: 'var(--purple)' }} aria-hidden="true" />
                        </div>
                        <p className="mb-1" style={{ color: '#0A0A0F', fontWeight: 500, fontSize: '0.95rem' }}>{c.title}</p>
                        <p style={{ color: '#6E6E88', fontWeight: 400, fontSize: '0.8rem', lineHeight: 1.5 }}>{c.desc}</p>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-end justify-center gap-4 order-1 lg:order-2">
                    <div className="-rotate-6 -mr-6 mb-4"><PhoneMock variant="home" /></div>
                    <div className="rotate-3"><PhoneMock variant="doctor" /></div>
                  </div>

                  <div className="grid grid-rows-2 gap-5 order-3">
                    {right.map((c) => (
                      <div key={c.title} className="bg-white rounded-2xl p-5 shadow-lg shadow-black/5">
                        <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-3" style={{ background: 'var(--lime-bg)' }}>
                          <i className={`ti ${c.icon}`} style={{ fontSize: 18, color: 'var(--lime-dark)' }} aria-hidden="true" />
                        </div>
                        <p className="mb-1" style={{ color: '#0A0A0F', fontWeight: 500, fontSize: '0.95rem' }}>{c.title}</p>
                        <p style={{ color: '#6E6E88', fontWeight: 400, fontSize: '0.8rem', lineHeight: 1.5 }}>{c.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-10 lg:p-14" style={{ background: '#08070F' }}>
                <div className="flex items-center gap-3 mb-6">
                  <span className="px-3 py-1 rounded-full text-xs" style={{ background: 'rgba(123,110,246,0.15)', color: 'var(--purple-light)', fontWeight: 400 }}>{featured.badge}</span>
                  <span className="flex items-center gap-2 text-sm" style={{ color: 'rgba(255,255,255,0.55)', fontWeight: 400 }}>
                    <i className="ti ti-building-hospital" style={{ fontSize: 15 }} aria-hidden="true" /> {featured.client}
                  </span>
                </div>
                <h2 className="t-display text-[clamp(1.7rem,3vw,2.6rem)] leading-tight mb-5" style={{ color: 'var(--lime)' }}>{featured.title}</h2>
                <p className="max-w-2xl mb-8" style={{ color: 'rgba(255,255,255,0.65)', fontWeight: 400, fontSize: '0.95rem', lineHeight: 1.6 }}>{featured.desc}</p>
                <Link href={`/${lang}/work`} className="inline-flex items-center gap-2 text-base transition-all hover:gap-3" style={{ color: 'var(--lime)', fontWeight: 400 }}>
                  {isEN ? 'View Case Study' : 'ดูรายละเอียด'} <i className="ti ti-arrow-right" style={{ fontSize: 15 }} aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Grouped by industry — same horizontal-scroll pattern as Blog */}
        <section className="py-20 lg:py-28" style={{ background: '#08070F' }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col gap-16">
            {groups.map((g) => {
              const items = cases.filter(c => c.tags.includes(g.label))
              if (!items.length) return null
              return (
                <div key={g.label}>
                  <div className="flex items-end justify-between mb-8">
                    <div>
                      <h2 className="t-display text-[clamp(1.8rem,3vw,2.6rem)] leading-none mb-2" style={{ color: '#fff' }}>{g.label}</h2>
                      <p className="text-sm" style={{ color: 'var(--lime)', fontWeight: 400 }}>
                        {isEN ? 'Case studies from this industry.' : 'ผลงานจริงในอุตสาหกรรมนี้'}
                      </p>
                    </div>
                    <div className="hidden sm:flex items-center gap-2 shrink-0">
                      <button
                        aria-label={isEN ? 'Scroll left' : 'เลื่อนซ้าย'}
                        onClick={() => scrollRow(g.label, -1)}
                        className="w-9 h-9 rounded-full flex items-center justify-center transition-colors hover:bg-white/10"
                        style={{ border: '1px solid rgba(255,255,255,0.15)' }}
                      >
                        <i className="ti ti-chevron-left" style={{ fontSize: 16, color: '#fff' }} aria-hidden="true" />
                      </button>
                      <button
                        aria-label={isEN ? 'Scroll right' : 'เลื่อนขวา'}
                        onClick={() => scrollRow(g.label, 1)}
                        className="w-9 h-9 rounded-full flex items-center justify-center transition-colors hover:bg-white/10"
                        style={{ border: '1px solid rgba(255,255,255,0.15)' }}
                      >
                        <i className="ti ti-chevron-right" style={{ fontSize: 16, color: '#fff' }} aria-hidden="true" />
                      </button>
                    </div>
                  </div>

                  <div
                    ref={(el) => { rowRefs.current[g.label] = el }}
                    className="no-scrollbar flex gap-5 overflow-x-auto scroll-smooth snap-x snap-mandatory"
                  >
                    {items.map((c, i) => (
                      <Link
                        key={c.id}
                        href={`/${lang}/work`}
                        className="group shrink-0 w-[280px] snap-start rounded-2xl p-4 transition-all duration-300 hover:-translate-y-1"
                        style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}
                      >
                        <div className="h-32 rounded-xl flex items-center justify-center mb-4 relative" style={{ background: gradients[i % gradients.length] }}>
                          <i className="ti ti-photo" style={{ fontSize: 22, color: '#fff', opacity: 0.45 }} aria-hidden="true" />
                          <span className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-xs" style={{ background: 'rgba(255,255,255,0.9)', color: 'var(--purple)', fontWeight: 500 }}>{c.result}</span>
                        </div>
                        <p className="text-xs mb-1.5" style={{ color: 'rgba(255,255,255,0.45)', fontWeight: 400 }}>{c.client}</p>
                        <h3 className="text-white leading-snug mb-2 group-hover:text-[var(--purple-light)] transition-colors" style={{ fontWeight: 500, fontSize: '0.98rem' }}>{c.title}</h3>
                        <p style={{ color: 'rgba(255,255,255,0.55)', fontWeight: 400, fontSize: '0.8rem', lineHeight: 1.5 }} className="mb-4 line-clamp-2">{c.desc}</p>
                        <span className="text-sm flex items-center gap-1.5 group-hover:gap-2.5 transition-all" style={{ color: 'var(--purple-light)', fontWeight: 400 }}>
                          {isEN ? 'View Case Study' : 'ดูรายละเอียด'} <i className="ti ti-arrow-up-right" style={{ fontSize: 13 }} aria-hidden="true" />
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        <section className="py-24 relative overflow-hidden" style={{ background: 'linear-gradient(135deg,var(--purple) 0%,var(--purple-light) 50%,var(--lime) 100%)' }}>
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle,#fff 1px,transparent 1px)', backgroundSize: '28px 28px' }} />
          <div className="relative max-w-3xl mx-auto px-6 lg:px-10 text-center">
            <p className="text-white/60 text-xs tracking-widest uppercase mb-6 font-mono">{isEN ? 'Have a project in mind?' : 'มีโปรเจกต์ในใจแล้วใช่ไหม?'}</p>
            <h2 className="t-display text-white text-[clamp(2rem,4vw,3.5rem)] mb-6 leading-tight">
              {isEN ? <>Let's build your<br />next case study</> : <>มาสร้าง Case Study<br />ถัดไปด้วยกัน</>}
            </h2>
            <Link href={`/${lang}/contact`} className="inline-flex items-center gap-2 px-8 py-3.5 bg-white rounded-full text-sm hover:bg-[var(--purple-bg)] transition-colors" style={{ color: 'var(--purple)', fontWeight: 400 }}>
              {isEN ? 'Talk to Us' : 'คุยกับเรา'}
              <i className="ti ti-arrow-right" style={{ fontSize: 14 }} aria-hidden="true" />
            </Link>
          </div>
        </section>
      </main>
      <Footer lang={lang} tr={tr} />
    </>
  )
}
