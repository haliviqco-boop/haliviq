"use client"
import React, { useRef } from 'react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import { t, type Lang } from '@/lib/i18n'
import Footer from '@/components/Footer'
import { getCaseStudy } from '@/lib/case-studies-data'

const serviceGroupsEN = [
  { key: 'fnb', label: 'F&B', desc: 'Restaurant and dessert brands built for online ordering, reservations, and guest experience.' },
  { key: 'sme', label: 'SME & Retail Business', desc: 'Small and growing retail brands — e-commerce, shopping malls, and uniform manufacturers — with websites built to sell.' },
  { key: 'government', label: 'Government & Public Sector', desc: 'Public agencies and institutes digitizing services for citizens, exporters, and field officers.' },
  { key: 'realestate', label: 'Real Estate & Construction', desc: 'Developers and home builders with branding, websites, and CRM from lead to contract.' },
  { key: 'industry', label: 'Industry & Manufacturing', desc: 'Industrial manufacturers and infrastructure providers presenting capabilities to enterprise and B2B buyers.' },
  { key: 'wellness', label: 'Wellness', desc: 'Fitness and wellness brands with class booking and membership experiences.' },
  { key: 'travel', label: 'Travel & Tourism', desc: 'Tour and travel companies with brand identity, booking websites, and AI-driven CRM.' },
]
const serviceGroupsTH = [
  { key: 'fnb', label: 'ร้านอาหารและเครื่องดื่ม', desc: 'แบรนด์ร้านอาหารและของหวาน พร้อมระบบสั่งซื้อออนไลน์ จองโต๊ะ และประสบการณ์ลูกค้า' },
  { key: 'sme', label: 'ธุรกิจ SME และค้าปลีก', desc: 'ธุรกิจค้าปลีกขนาดเล็กถึงกลาง ทั้งอีคอมเมิร์ซ ศูนย์การค้า และผู้ผลิตยูนิฟอร์ม พร้อมเว็บไซต์ที่ช่วยขายได้จริง' },
  { key: 'government', label: 'หน่วยงานภาครัฐ', desc: 'หน่วยงานรัฐและสถาบันต่าง ๆ ยกระดับบริการดิจิทัลให้ประชาชน ผู้ส่งออก และเจ้าหน้าที่ภาคสนาม' },
  { key: 'realestate', label: 'อสังหาริมทรัพย์และก่อสร้าง', desc: 'ผู้พัฒนาโครงการและบริษัทรับสร้างบ้าน พร้อมแบรนด์ เว็บไซต์ และ CRM ตั้งแต่ลีดจนถึงเซ็นสัญญา' },
  { key: 'industry', label: 'อุตสาหกรรมและการผลิต', desc: 'ผู้ผลิตภาคอุตสาหกรรมและผู้ให้บริการโครงสร้างพื้นฐาน นำเสนอขีดความสามารถต่อลูกค้าองค์กรและ B2B' },
  { key: 'wellness', label: 'เวลเนส', desc: 'แบรนด์ฟิตเนสและเวลเนส พร้อมระบบจองคลาสและสมาชิก' },
  { key: 'travel', label: 'การท่องเที่ยวและทัวร์', desc: 'บริษัททัวร์และท่องเที่ยว พร้อมแบรนด์ เว็บไซต์จองทัวร์ และ AI CRM' },
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
  { id:13, service:'fnb', tags:['F&B','Web Platform'], year:'2025', title:'Michelin-Starred Restaurant Website', client:'Savelberg Restaurant', desc:'New bilingual website with an AI concierge chatbot and content direction for a Michelin-starred French restaurant.', result:'New Website', slug:'savelberg' },
  { id:14, service:'fnb', tags:['F&B','Web Platform'], year:'2025', title:'Ice Cream Brand Website', client:'OVO', desc:'New website for an ice cream and dessert brand, with online ordering and marketing content direction.', result:'New Website', slug:'ovo' },
  { id:15, service:'wellness', tags:['Fitness & Wellness','Web Platform'], year:'2025', title:'Fitness Studio Website', client:'BASE', desc:'New website for a fitness studio with online class booking and trainer profiles.', result:'New Website', slug:'base' },
  { id:16, service:'sme', tags:['Apparel & Uniforms','Web Platform'], year:'2025', title:'Medical Uniform Manufacturer Website', client:'Blue Bear', desc:'New website with a product catalog and B2B order-inquiry flow for hospital and clinic customers.', result:'New Website', slug:'blue-bear' },
  { id:17, service:'industry', tags:['Manufacturing','Web Platform'], year:'2025', title:'Precision Manufacturing Website', client:'Thai Metal Aluminium', desc:'New corporate website presenting manufacturing capabilities and quality standards to industrial customers.', result:'New Website', slug:'thai-metal-aluminium' },
  { id:18, service:'sme', tags:['E-Commerce','Web Platform'], year:'2025', title:'Bag Brand E-Commerce Website', client:'VERA', desc:'New e-commerce website for a self-manufactured bag brand, with cart and checkout for nationwide sales.', result:'New Website', slug:'vera' },
  { id:19, service:'government', tags:['Government','Web Platform'], year:'2025', title:'National Food Institute Website', client:'NFI – National Food Institute', desc:'New website organizing lab services and research for a public food-research institute.', result:'New Website', slug:'nfi' },
  { id:20, service:'sme', tags:['Retail','Mobile App'], year:'2025', title:'MBK Center Mobile App', client:'MBK Center', desc:'New mobile app letting shoppers find stores, promotions, and member perks in one place.', result:'New App', slug:'mbk' },
  { id:21, service:'government', tags:['Government','Mobile App'], year:'2025', title:'DITP Export Promotion Mobile App', client:'DITP', desc:'New version of an export-promotion app, built on an earlier version we developed, for Thai exporters.', result:'New App', slug:'ditp' },
  { id:22, service:'fnb', tags:['F&B','Web Platform'], year:'2025', title:'Fine-Dining Restaurant Website', client:'Sra Bua by Kiin Kiin', desc:'New bilingual website with online reservations for a modern Thai fine-dining restaurant.', result:'New Website', slug:'sra-bua' },
  { id:23, service:'travel', tags:['Travel','Web Platform'], year:'2025', title:'Website, Branding & AI CRM', client:'World Surprise Travel', desc:'New brand identity, website, and AI CRM for a tour company managing travel packages and customers.', result:'New Website', slug:'world-surprise-travel' },
  { id:24, service:'realestate', tags:['Real Estate','Web Platform'], year:'2025', title:'Home Builder Website with CRM', client:'Awii House', desc:'New website and CRM for a home-building company, tracking customers from consultation to contract.', result:'New Website', slug:'awii-house' },
  { id:25, service:'realestate', tags:['Real Estate','Web Platform'], year:'2025', title:'Website, Brand CI & Real Estate CRM', client:'Canapaya Residences', desc:'New brand identity, website, and a dedicated CRM for a luxury riverside residential project.', result:'New Website', slug:'canapaya-residences' },
  { id:26, service:'industry', tags:['Enterprise','Web Platform'], year:'2025', title:'Website with AI CRM', client:'RFS', desc:'New website and AI CRM for a Singapore-based telecom infrastructure and smart-city solutions provider.', result:'New Website', slug:'rfs' },
  { id:27, service:'government', tags:['Government','Mobile App'], year:'2025', title:'Tax Inspection App', client:'Excise Department', desc:'New mobile app for field officers to verify excise tax payments, integrated with data from related agencies.', result:'New App', slug:'excise-department' },
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
  { id:13, service:'fnb', tags:['F&B','Web Platform'], year:'2025', title:'เว็บไซต์ร้านอาหารระดับมิชลินสตาร์', client:'Savelberg Restaurant', desc:'เว็บไซต์สองภาษาพร้อมแชทบอท AI และวางแนวทางคอนเทนต์ให้ร้านอาหารฝรั่งเศสระดับมิชลินสตาร์', result:'เว็บไซต์ใหม่', slug:'savelberg' },
  { id:14, service:'fnb', tags:['F&B','Web Platform'], year:'2025', title:'เว็บไซต์แบรนด์ไอศกรีม', client:'OVO', desc:'เว็บไซต์ใหม่สำหรับแบรนด์ไอศกรีมและของหวาน พร้อมระบบสั่งซื้อออนไลน์และวางแนวทางคอนเทนต์การตลาด', result:'เว็บไซต์ใหม่', slug:'ovo' },
  { id:15, service:'wellness', tags:['Fitness & Wellness','Web Platform'], year:'2025', title:'เว็บไซต์สตูดิโอฟิตเนส', client:'BASE', desc:'เว็บไซต์ใหม่สำหรับสตูดิโอฟิตเนส พร้อมระบบจองคลาสออนไลน์และโปรไฟล์เทรนเนอร์', result:'เว็บไซต์ใหม่', slug:'base' },
  { id:16, service:'sme', tags:['Apparel & Uniforms','Web Platform'], year:'2025', title:'เว็บไซต์ผู้ผลิตชุดยูนิฟอร์มทางการแพทย์', client:'Blue Bear', desc:'เว็บไซต์ใหม่พร้อมแคตตาล็อกสินค้าและระบบติดต่อสั่งซื้อแบบองค์กรสำหรับลูกค้าโรงพยาบาลและคลินิก', result:'เว็บไซต์ใหม่', slug:'blue-bear' },
  { id:17, service:'industry', tags:['Manufacturing','Web Platform'], year:'2025', title:'เว็บไซต์โรงงานผลิตชิ้นส่วนอะลูมิเนียม', client:'Thai Metal Aluminium', desc:'เว็บไซต์องค์กรใหม่ นำเสนอขีดความสามารถด้านการผลิตและมาตรฐานคุณภาพต่อลูกค้าอุตสาหกรรม', result:'เว็บไซต์ใหม่', slug:'thai-metal-aluminium' },
  { id:18, service:'sme', tags:['E-Commerce','Web Platform'], year:'2025', title:'เว็บไซต์อีคอมเมิร์ซแบรนด์กระเป๋า', client:'VERA', desc:'เว็บไซต์อีคอมเมิร์ซใหม่สำหรับแบรนด์กระเป๋าที่ผลิตและขายออนไลน์ พร้อมระบบตะกร้าสินค้าและชำระเงิน', result:'เว็บไซต์ใหม่', slug:'vera' },
  { id:19, service:'government', tags:['Government','Web Platform'], year:'2025', title:'เว็บไซต์สถาบันอาหาร', client:'NFI สถาบันอาหาร', desc:'เว็บไซต์ใหม่จัดระเบียบบริการห้องปฏิบัติการและงานวิจัยให้สถาบันวิจัยอาหารภาครัฐ', result:'เว็บไซต์ใหม่', slug:'nfi' },
  { id:20, service:'sme', tags:['Retail','Mobile App'], year:'2025', title:'แอปมือถือศูนย์การค้า MBK', client:'MBK Center', desc:'แอปมือถือใหม่ให้ลูกค้าค้นหาร้านค้า โปรโมชัน และสิทธิพิเศษได้ในที่เดียว', result:'แอปใหม่', slug:'mbk' },
  { id:21, service:'government', tags:['Government','Mobile App'], year:'2025', title:'แอปมือถือส่งเสริมผู้ประกอบการส่งออก DITP', client:'DITP', desc:'แอปเวอร์ชันใหม่ต่อยอดจากแอปที่เคยพัฒนาให้ เพื่อสนับสนุนผู้ประกอบการส่งออกไทย', result:'แอปใหม่', slug:'ditp' },
  { id:22, service:'fnb', tags:['F&B','Web Platform'], year:'2025', title:'เว็บไซต์ร้านอาหารไฟน์ไดนิ่ง', client:'Sra Bua by Kiin Kiin', desc:'เว็บไซต์สองภาษาพร้อมระบบจองโต๊ะออนไลน์ให้ร้านอาหารไทยโมเดิร์นระดับไฟน์ไดนิ่ง', result:'เว็บไซต์ใหม่', slug:'sra-bua' },
  { id:23, service:'travel', tags:['Travel','Web Platform'], year:'2025', title:'เว็บไซต์ Branding และ AI CRM', client:'World Surprise Travel', desc:'วางแบรนด์ใหม่ เว็บไซต์ และ AI CRM ให้บริษัททัวร์บริหารแพ็กเกจและลูกค้า', result:'เว็บไซต์ใหม่', slug:'world-surprise-travel' },
  { id:24, service:'realestate', tags:['Real Estate','Web Platform'], year:'2025', title:'เว็บไซต์พร้อม CRM ให้บริษัทรับสร้างบ้าน', client:'Awii House', desc:'เว็บไซต์และ CRM ใหม่ให้บริษัทรับสร้างบ้าน ติดตามลูกค้าตั้งแต่ปรึกษาจนถึงเซ็นสัญญา', result:'เว็บไซต์ใหม่', slug:'awii-house' },
  { id:25, service:'realestate', tags:['Real Estate','Web Platform'], year:'2025', title:'เว็บไซต์ Brand CI และ CRM อสังหาริมทรัพย์', client:'Canapaya Residences', desc:'วางแบรนด์ เว็บไซต์ และ CRM เฉพาะทางให้โครงการที่พักอาศัยหรูริมแม่น้ำ', result:'เว็บไซต์ใหม่', slug:'canapaya-residences' },
  { id:26, service:'industry', tags:['Enterprise','Web Platform'], year:'2025', title:'เว็บไซต์พร้อม AI CRM', client:'RFS', desc:'เว็บไซต์และ AI CRM ใหม่ให้ผู้ให้บริการโครงสร้างพื้นฐานโทรคมนาคมและสมาร์ทซิตี้จากสิงคโปร์', result:'เว็บไซต์ใหม่', slug:'rfs' },
  { id:27, service:'government', tags:['Government','Mobile App'], year:'2025', title:'แอปตรวจสอบภาษี', client:'กรมสรรพสามิต', desc:'แอปมือถือใหม่ให้เจ้าหน้าที่ตรวจสอบภาษีสรรพสามิต เชื่อมข้อมูลกับหน่วยงานที่เกี่ยวข้อง', result:'แอปใหม่', slug:'excise-department' },
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

  return (
    <>
      <Navbar lang={lang} tr={tr} transparent />
      <main>
        <section className="relative overflow-hidden pt-[80px]" style={{ background: '#08070F' }}>
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.35]"
            style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.14) 1px, transparent 1px)', backgroundSize: '22px 22px' }}
          />
          <div
            className="absolute -top-40 -left-32 w-[560px] h-[560px] rounded-full pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgba(123,110,246,0.28) 0%, transparent 70%)', filter: 'blur(20px)' }}
          />
          <div className="relative max-w-7xl mx-auto px-6 lg:px-10 pt-20 pb-16 lg:pt-28 lg:pb-20">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
              <div>
                <p className="t-label mb-5">{isEN ? 'Our Work' : 'ผลงานของเรา'}</p>
                <h1 className="t-display text-[clamp(3rem,7vw,6.5rem)] leading-relaxed" style={{ color: '#fff' }}>
                  {isEN ? 'Products We Are' : 'ผลิตภัณฑ์ที่เรา'}<br />
                  <span style={{ background: 'linear-gradient(135deg,var(--purple) 0%,var(--purple-light) 50%,var(--lime) 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                    {isEN ? 'Proud Of' : 'ภาคภูมิใจ'}
                  </span>
                </h1>
              </div>
              <p className="text-sm max-w-sm" style={{ color: 'rgba(255,255,255,0.75)', fontWeight: 400 }}>
                {isEN ? '120+ projects over 8 years, grouped below by the service that shipped them.' : '120+ โปรเจกต์ใน 8 ปี จัดกลุ่มด้านล่างตามบริการที่ใช้สร้างแต่ละโปรเจกต์'}
              </p>
            </div>
          </div>
        </section>

        {/* Dark section — projects grouped by service category, horizontal scroll rows */}
        <section className="py-20 lg:py-28" style={{ background: '#08070F' }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col gap-16">
            {serviceGroups.map((sg) => {
              const items = projects.filter(p => p.service === sg.key && (p as any).slug)
              if (!items.length) return null
              return (
                <div key={sg.key}>
                  <div className="flex items-end justify-between mb-8">
                    <div className="max-w-xl">
                      <h2 className="t-display text-[clamp(1.6rem,2.8vw,2.4rem)] leading-tight mb-2" style={{ color:'#fff' }}>{sg.label}</h2>
                      <p className="text-sm mb-1.5" style={{ color:'rgba(255,255,255,0.6)', fontWeight:400, lineHeight:1.5 }}>
                        {(sg as any).desc}
                      </p>
                      <p className="text-sm" style={{ color:'var(--lime)', fontWeight:400 }}>
                        {isEN ? `${items.length} project${items.length > 1 ? 's' : ''} in this category` : `${items.length} โปรเจกต์ในหมวดนี้`}
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
                    {items.map((p, i) => {
                      const CardTag: any = (p as any).slug ? Link : 'div'
                      const cardProps = (p as any).slug ? { href: `/${lang}/case-studies/${(p as any).slug}` } : {}
                      const cover = (p as any).slug ? getCaseStudy((p as any).slug)?.[lang]?.heroImage : undefined
                      return (
                      <CardTag
                        key={p.id}
                        {...cardProps}
                        className="group shrink-0 w-[300px] snap-start rounded-2xl p-4 transition-all duration-300 hover:-translate-y-1 cursor-pointer block"
                        style={{ background:'rgba(255,255,255,0.03)', border:'1px solid rgba(255,255,255,0.08)' }}
                      >
                        <div className="relative h-36 rounded-xl flex items-center justify-center mb-4 overflow-hidden" style={cover ? undefined : { background: gradients[i % gradients.length] }}>
                          {cover ? (
                            // eslint-disable-next-line @next/next/no-img-element
                            <img src={cover} alt={p.title} className="absolute inset-0 w-full h-full object-cover" />
                          ) : (
                            <i className="ti ti-photo" style={{ fontSize:22, color:'#fff', opacity:0.4 }} aria-hidden="true" />
                          )}
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
                      </CardTag>
                      )
                    })}
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        <section className="relative overflow-hidden" style={{ background: '#050308' }}>
          <div
            className="absolute inset-0 pointer-events-none opacity-40"
            style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), radial-gradient(rgba(255,255,255,0.3) 1px, transparent 1px)', backgroundSize: '180px 180px, 260px 260px', backgroundPosition: '0 0, 90px 130px' }}
          />
          <div
            className="absolute left-0 right-0 bottom-0 pointer-events-none"
            style={{ height: 260, background: 'radial-gradient(ellipse 70% 100% at 50% 100%, rgba(123,110,246,0.35) 0%, rgba(83,195,215,0.08) 45%, transparent 75%)' }}
          />
          <div className="relative max-w-3xl mx-auto px-6 lg:px-10 py-24 text-center">
            <p className="text-sm tracking-widest uppercase mb-6" style={{ color: '#fff', fontWeight: 500 }}>{isEN ? 'Ready to start?' : 'พร้อมเริ่มแล้ว?'}</p>
            <h2 className="t-display text-[clamp(2rem,5vw,4.5rem)] mb-6 leading-tight" style={{ background: 'linear-gradient(135deg, var(--purple-light) 0%, #53C3D7 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              {isEN ? <>Let your project<br />be on this list</> : <>ให้โปรเจกต์ของคุณ<br />อยู่ในลิสต์นี้</>}
            </h2>
            <p className="mb-10 max-w-md mx-auto" style={{ color: 'rgba(255,255,255,0.7)', fontWeight: 400 }}>
              {isEN ? 'We are ready to build a product you are proud of. Start with a free conversation.' : 'เราพร้อมช่วยสร้างผลิตภัณฑ์ที่คุณภาคภูมิใจ เริ่มจากการสนทนาฟรี'}
            </p>
            <Link href={`/${lang}/contact`} className="inline-flex items-center gap-2 px-10 py-4 rounded-full text-sm transition-opacity hover:opacity-90" style={{ background: 'linear-gradient(135deg, var(--purple) 0%, var(--purple-dark) 100%)', color: '#fff', fontWeight: 500 }}>
              {isEN ? 'Start a Project' : 'เริ่มโปรเจกต์เลย'} <i className="ti ti-arrow-right" style={{ fontSize:15 }} aria-hidden="true" />
            </Link>
          </div>
        </section>
      </main>
      <Footer lang={lang} tr={tr} />
    </>
  )
}
