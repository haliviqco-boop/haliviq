"use client"
import React, { useRef } from 'react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import { t, type Lang } from '@/lib/i18n'
import Footer from '@/components/Footer'

const serviceGroupsEN = [
  { key: 'web', label: 'Web Development' },
  { key: 'mobile', label: 'Mobile Apps' },
  { key: 'ai', label: 'AI Agent & Generative AI' },
  { key: 'data', label: 'Data Analytics & Engineering' },
  { key: 'enterprise', label: 'Digital Transformation & Enterprise' },
]
const serviceGroupsTH = [
  { key: 'web', label: 'พัฒนาเว็บไซต์' },
  { key: 'mobile', label: 'พัฒนาแอปมือถือ' },
  { key: 'ai', label: 'AI Agent & Generative AI' },
  { key: 'data', label: 'Data Analytics & Engineering' },
  { key: 'enterprise', label: 'Digital Transformation & Enterprise' },
]

const projectsEN = [
  { id:1, service:'mobile', tags:['FinTech','Mobile App'], year:'2024', title:'Digital Banking Super App', client:'Leading Bank', desc:'Redesigned mobile banking for 4 million users, from onboarding to daily transfers.', result:'+62% DAU' },
  { id:2, service:'web', tags:['E-Commerce','Web Platform'], year:'2024', title:'Omnichannel Retail Platform', client:'Retail Group', desc:'Unified commerce platform connecting 2,000+ branches into one order and inventory system.', result:'3× Conversion' },
  { id:3, service:'web', tags:['Healthcare','Web Platform'], year:'2023', title:'Patient Digital Ecosystem', client:'Hospital Group', desc:'End-to-end digital health system — from finding a doctor to booking and follow-up.', result:'-40% No-show' },
  { id:4, service:'ai', tags:['AI','Enterprise'], year:'2024', title:'AI Document Intelligence', client:'Insurance Company', desc:'AI document processing that reads and classifies claims automatically.', result:'-80% Processing' },
  { id:5, service:'web', tags:['FinTech','Web Platform'], year:'2023', title:'Payment Gateway Platform', client:'FinTech Startup', desc:'High-throughput payment infrastructure handling 500K transactions per day.', result:'99.97% Success' },
  { id:6, service:'mobile', tags:['E-Commerce','Mobile App'], year:'2023', title:'Grocery Delivery App', client:'Retail Chain', desc:'30-minute delivery app with real-time inventory sync across dark stores.', result:'4.8★ App Store' },
  { id:7, service:'enterprise', tags:['Enterprise','Web Platform'], year:'2022', title:'ERP & Workforce Management', client:'Factory (500 staff)', desc:'Full ERP covering finance, HR, and inventory for a mid-size manufacturer.', result:'-28% OpEx' },
  { id:8, service:'ai', tags:['AI','Mobile App'], year:'2024', title:'AI-powered EdTech Platform', client:'Online Academy', desc:'Personalized AI tutor adapting to each of 50K learners in real time.', result:'4× Completion' },
  { id:9, service:'enterprise', tags:['Enterprise','Web Platform'], year:'2023', title:'Logistics & Fleet Management', client:'Express Logistics', desc:'Last-mile routing and fleet system coordinating 3,000 drivers.', result:'97% On-time' },
  { id:10, service:'mobile', tags:['Healthcare','Mobile App'], year:'2024', title:'Telemedicine & Mental Health', client:'Health Platform', desc:'Video consultation app with mood tracking and care-plan reminders.', result:'92% Completion' },
  { id:11, service:'data', tags:['FinTech','Enterprise'], year:'2023', title:'InsurTech Claims Platform', client:'Insurance Group', desc:'Data pipeline and analytics dashboard powering automated claims decisions.', result:'73% Faster' },
  { id:12, service:'data', tags:['E-Commerce','AI'], year:'2024', title:'Personalization Engine', client:'Fashion Retailer', desc:'Behavioral data pipeline feeding a product-recommendation model.', result:'+45% AOV' },
]

const projectsTH = [
  { id:1, service:'mobile', tags:['FinTech','Mobile App'], year:'2024', title:'Digital Banking Super App', client:'ธนาคารชั้นนำ', desc:'รีดีไซน์ Mobile Banking สำหรับผู้ใช้ 4 ล้านคน ตั้งแต่ Onboarding จนถึงการโอนเงินประจำวัน', result:'+62% DAU' },
  { id:2, service:'web', tags:['E-Commerce','Web Platform'], year:'2024', title:'Omnichannel Retail Platform', client:'เครือค้าปลีก', desc:'แพลตฟอร์ม Unified Commerce เชื่อม 2,000+ สาขาเข้ากับระบบสั่งซื้อและสต๊อกเดียว', result:'3× Conversion' },
  { id:3, service:'web', tags:['Healthcare','Web Platform'], year:'2023', title:'Patient Digital Ecosystem', client:'กลุ่มโรงพยาบาล', desc:'ระบบสุขภาพดิจิทัลครบวงจร ตั้งแต่ค้นหาแพทย์ จองนัด จนถึงติดตามผล', result:'-40% No-show' },
  { id:4, service:'ai', tags:['AI','Enterprise'], year:'2024', title:'AI Document Intelligence', client:'บริษัทประกันภัย', desc:'AI อ่านและจัดหมวดเอกสารเคลมประกันอัตโนมัติ', result:'-80% Processing' },
  { id:5, service:'web', tags:['FinTech','Web Platform'], year:'2023', title:'Payment Gateway Platform', client:'FinTech Startup', desc:'โครงสร้าง Payment รองรับ 500,000 รายการต่อวัน', result:'99.97% Success' },
  { id:6, service:'mobile', tags:['E-Commerce','Mobile App'], year:'2023', title:'Grocery Delivery App', client:'Retail Chain', desc:'แอป Delivery ภายใน 30 นาที Sync Inventory แบบ Real-time ข้ามสาขา', result:'4.8★ App Store' },
  { id:7, service:'enterprise', tags:['Enterprise','Web Platform'], year:'2022', title:'ERP & Workforce Management', client:'โรงงาน 500 คน', desc:'ระบบ ERP ครบวงจร Finance, HR และ Inventory สำหรับโรงงานขนาดกลาง', result:'-28% OpEx' },
  { id:8, service:'ai', tags:['AI','Mobile App'], year:'2024', title:'AI-powered EdTech Platform', client:'Online Academy', desc:'AI Tutor ปรับเนื้อหาให้เหมาะกับผู้เรียนแต่ละคนแบบ Real-time จาก 50,000 คน', result:'4× Completion' },
  { id:9, service:'enterprise', tags:['Enterprise','Web Platform'], year:'2023', title:'Logistics & Fleet Management', client:'Express Logistics', desc:'ระบบวางเส้นทางและจัดการยานพาหนะสำหรับ Driver 3,000 คน', result:'97% On-time' },
  { id:10, service:'mobile', tags:['Healthcare','Mobile App'], year:'2024', title:'Telemedicine & Mental Health', client:'Health Platform', desc:'แอป Video Consultation พร้อม Mood Tracking และแจ้งเตือนแผนการดูแล', result:'92% Completion' },
  { id:11, service:'data', tags:['FinTech','Enterprise'], year:'2023', title:'InsurTech Claims Platform', client:'Insurance Group', desc:'Data Pipeline และ Dashboard วิเคราะห์ข้อมูลสำหรับตัดสินใจเคลมอัตโนมัติ', result:'73% Faster' },
  { id:12, service:'data', tags:['E-Commerce','AI'], year:'2024', title:'Personalization Engine', client:'Fashion Retailer', desc:'Data Pipeline พฤติกรรมผู้ใช้ป้อนโมเดลแนะนำสินค้า', result:'+45% AOV' },
]

const gradients = [
  'linear-gradient(135deg, var(--purple) 0%, var(--purple-light) 100%)',
  'linear-gradient(135deg, var(--purple-light) 0%, var(--lime) 100%)',
  'linear-gradient(135deg, var(--purple-dark) 0%, var(--purple) 100%)',
  'linear-gradient(135deg, var(--purple) 0%, var(--lime) 100%)',
]

export default function Page({ params }: { params: { lang: Lang } }) {
  const lang = (params.lang === 'en' ? 'en' : 'th') as Lang
  const isEN = lang === 'en'
  const tr = t[lang] as any

  const projects = isEN ? projectsEN : projectsTH
  const serviceGroups = isEN ? serviceGroupsEN : serviceGroupsTH
  const rowRefs = useRef<Record<string, HTMLDivElement | null>>({})

  const scrollRow = (key: string, dir: 1 | -1) => {
    const el = rowRefs.current[key]
    if (el) el.scrollBy({ left: dir * 360, behavior: 'smooth' })
  }

  const stats = isEN
    ? [{ n: '120+', l: 'Projects Delivered' }, { n: '8 yrs', l: 'Experience' }, { n: '15+', l: 'Industries' }, { n: '95%', l: 'Client Referral Rate' }]
    : [{ n: '120+', l: 'โปรเจกต์ที่ส่งมอบ' }, { n: '8 ปี', l: 'ประสบการณ์' }, { n: '15+', l: 'อุตสาหกรรม' }, { n: '95%', l: 'ลูกค้าแนะนำต่อ' }]

  return (
    <>
      <Navbar lang={lang} tr={tr} />
      <main>
        <section className="pt-[80px] bg-white">
          <div className="h-1 w-full" style={{ background: 'linear-gradient(90deg,var(--purple),var(--purple-light),var(--lime))' }} />
          <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-20 pb-16 lg:pt-28 lg:pb-20">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
              <div>
                <p className="t-label mb-5">{isEN ? 'Our Work' : 'ผลงานของเรา'}</p>
                <h1 className="t-display text-[clamp(3rem,7vw,6.5rem)] text-[#0A0A0F] leading-normal">
                  {isEN ? 'Products We Are' : 'ผลิตภัณฑ์ที่เรา'}<br />
                  <span style={{ background: 'linear-gradient(135deg,var(--purple) 0%,var(--purple-light) 50%,var(--lime) 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                    {isEN ? 'Proud Of' : 'ภาคภูมิใจ'}
                  </span>
                </h1>
              </div>
              <p className="t-body text-sm max-w-sm">
                {isEN ? '120+ projects over 8 years, grouped below by the service that shipped them.' : '120+ โปรเจกต์ใน 8 ปี จัดกลุ่มด้านล่างตามบริการที่ใช้สร้างแต่ละโปรเจกต์'}
              </p>
            </div>
          </div>
        </section>

        {/* Dark section — projects grouped by service category, horizontal scroll rows */}
        <section className="py-20 lg:py-28" style={{ background: '#08070F' }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col gap-16">
            {serviceGroups.map((sg) => {
              const items = projects.filter(p => p.service === sg.key)
              if (!items.length) return null
              return (
                <div key={sg.key}>
                  <div className="flex items-end justify-between mb-8">
                    <div>
                      <h2 className="t-display text-[clamp(1.6rem,2.8vw,2.4rem)] leading-tight mb-2" style={{ color:'#fff' }}>{sg.label}</h2>
                      <p className="text-sm" style={{ color:'var(--lime)', fontWeight:400 }}>
                        {isEN ? `${items.length} project${items.length > 1 ? 's' : ''} in this service line` : `${items.length} โปรเจกต์ในบริการนี้`}
                      </p>
                    </div>
                    <div className="hidden sm:flex items-center gap-2 shrink-0">
                      <button
                        aria-label={isEN ? 'Scroll left' : 'เลื่อนซ้าย'}
                        onClick={() => scrollRow(sg.key, -1)}
                        className="w-9 h-9 rounded-full flex items-center justify-center transition-colors hover:bg-white/10"
                        style={{ border:'1px solid rgba(255,255,255,0.15)' }}
                      >
                        <i className="ti ti-chevron-left" style={{ fontSize:16, color:'#fff' }} aria-hidden="true" />
                      </button>
                      <button
                        aria-label={isEN ? 'Scroll right' : 'เลื่อนขวา'}
                        onClick={() => scrollRow(sg.key, 1)}
                        className="w-9 h-9 rounded-full flex items-center justify-center transition-colors hover:bg-white/10"
                        style={{ border:'1px solid rgba(255,255,255,0.15)' }}
                      >
                        <i className="ti ti-chevron-right" style={{ fontSize:16, color:'#fff' }} aria-hidden="true" />
                      </button>
                    </div>
                  </div>

                  <div
                    ref={(el) => { rowRefs.current[sg.key] = el }}
                    className="no-scrollbar flex gap-5 overflow-x-auto scroll-smooth snap-x snap-mandatory"
                  >
                    {items.map((p, i) => (
                      <div
                        key={p.id}
                        className="group shrink-0 w-[300px] snap-start rounded-2xl p-4 transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                        style={{ background:'rgba(255,255,255,0.03)', border:'1px solid rgba(255,255,255,0.08)' }}
                      >
                        <div className="relative h-36 rounded-xl flex items-center justify-center mb-4" style={{ background: gradients[i % gradients.length] }}>
                          <i className="ti ti-photo" style={{ fontSize:22, color:'#fff', opacity:0.4 }} aria-hidden="true" />
                          <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-xs bg-white/20 backdrop-blur-sm text-white" style={{ fontWeight:400 }}>{p.year}</span>
                          <span className="absolute bottom-3 right-3 px-2.5 py-1 rounded-full text-xs flex items-center gap-1" style={{ background:'rgba(8,7,15,0.6)', color:'var(--lime)', fontWeight:500 }}>
                            <i className="ti ti-trending-up" style={{ fontSize:12 }} aria-hidden="true" />{p.result}
                          </span>
                        </div>
                        <p className="text-xs mb-1.5" style={{ color:'var(--purple-light)', fontWeight:400 }}>{p.client}</p>
                        <h3 className="text-white leading-snug mb-2 group-hover:text-[var(--purple-light)] transition-colors" style={{ fontWeight:500, fontSize:'0.98rem' }}>{p.title}</h3>
                        <p style={{ color:'rgba(255,255,255,0.55)', fontWeight:400, fontSize:'0.8rem', lineHeight:1.5 }} className="mb-4 line-clamp-2">{p.desc}</p>
                        <span className="text-sm flex items-center gap-1.5 group-hover:gap-2.5 transition-all" style={{ color:'var(--purple-light)', fontWeight:400 }}>
                          {isEN ? 'View project' : 'ดูรายละเอียด'} <i className="ti ti-arrow-up-right" style={{ fontSize:13 }} aria-hidden="true" />
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        <div className="border-y border-[#E4E4EC] bg-[#F7F7FC]">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-[#E4E4EC]">
              {stats.map(s => (
                <div key={s.l} className="px-6 lg:px-10 py-7">
                  <div className="text-[clamp(2rem,3.5vw,2.8rem)] leading-none mb-1" style={{ fontFamily:'var(--font-main)', fontWeight:500, color:'var(--purple)' }}>{s.n}</div>
                  <p className="text-sm text-[#6E6E88]" style={{ fontWeight:400 }}>{s.l}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <section className="py-24 relative overflow-hidden" style={{ background:'linear-gradient(135deg,var(--purple) 0%,var(--purple-light) 50%,var(--lime) 100%)' }}>
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage:'radial-gradient(circle,#fff 1px,transparent 1px)', backgroundSize:'28px 28px' }} />
          <div className="relative max-w-3xl mx-auto px-6 lg:px-10 text-center">
            <p className="text-white/60 text-xs tracking-widest uppercase mb-6 font-mono">{isEN ? 'Ready to start?' : 'พร้อมเริ่มแล้ว?'}</p>
            <h2 className="t-display text-white text-[clamp(2rem,5vw,4.5rem)] mb-6 leading-tight">
              {isEN ? 'Let your project\nbe on this list' : 'ให้โปรเจกต์ของคุณ\nอยู่ในลิสต์นี้'}
            </h2>
            <p className="text-white/85 mb-10 max-w-md mx-auto" style={{ fontWeight:400 }}>
              {isEN ? 'We are ready to build a product you are proud of. Start with a free conversation.' : 'เราพร้อมช่วยสร้างผลิตภัณฑ์ที่คุณภาคภูมิใจ เริ่มจากการสนทนาฟรี'}
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2 px-10 py-4 bg-white rounded-full text-sm hover:bg-[var(--purple-bg)] transition-colors" style={{ color:'var(--purple)', fontWeight:400 }}>
              {isEN ? 'Start a Project' : 'เริ่มโปรเจกต์เลย'} <i className="ti ti-arrow-right" style={{ fontSize:15 }} aria-hidden="true" />
            </Link>
          </div>
        </section>
      </main>
      <Footer lang={lang} tr={tr} />
    </>
  )
}
