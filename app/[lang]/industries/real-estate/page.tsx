import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { t, type Lang } from '@/lib/i18n'

export async function generateStaticParams() {
  return [{ lang: 'th' }, { lang: 'en' }]
}

export default function Page({ params }: { params: { lang: Lang } }) {
  const lang = params.lang
  const isEN = lang === 'en'
  const prefix = `/${lang}`
  const tr = t[lang] as any

  const badge = isEN ? 'Industry / Real Estate' : 'อุตสาหกรรม / อสังหาริมทรัพย์'
  const heroSubhead = isEN
    ? 'Property technology solutions for the modern real estate industry.'
    : 'โซลูชัน Proptech สำหรับอุตสาหกรรมอสังหาริมทรัพย์ยุคใหม่'

  const challenges = isEN ? [
    { icon: 'ti-building-skyscraper', title: 'Fragmented Listing Data', desc: 'Property information scattered across multiple portals, agents, and internal systems makes it difficult to maintain accurate, up-to-date listings and creates inconsistent experiences for buyers and renters.' },
    { icon: 'ti-file-invoice', title: 'Paper-Heavy Transactions', desc: 'Property transactions still rely heavily on manual paperwork, in-person signings, and disconnected document workflows, slowing down deals that should close in days rather than weeks.' },
    { icon: 'ti-building-community', title: 'Property Management Complexity', desc: 'Managing maintenance requests, rent collection, and occupancy across dozens or hundreds of units requires operational systems most property managers have outgrown or never had.' },
    { icon: 'ti-shield-check', title: 'Trust & Transparency Expectations', desc: 'Buyers and tenants increasingly expect transparent pricing, verified listings, and clear communication throughout the process, putting pressure on operators to modernize how they build trust.' },
  ] : [
    { icon: 'ti-building-skyscraper', title: 'ข้อมูล Listing ที่กระจัดกระจาย', desc: 'ข้อมูลอสังหาริมทรัพย์กระจายอยู่ในหลาย Portal ตัวแทน และระบบภายใน ทำให้ยากต่อการรักษาความถูกต้องและความทันสมัยของ Listing และสร้างประสบการณ์ที่ไม่สอดคล้องกันสำหรับผู้ซื้อและผู้เช่า' },
    { icon: 'ti-file-invoice', title: 'กระบวนการทำธุรกรรมที่ยังใช้กระดาษ', desc: 'ธุรกรรมอสังหาริมทรัพย์ยังพึ่งพาเอกสารแบบ Manual การเซ็นสัญญาต่อหน้า และ Workflow เอกสารที่แยกส่วนกัน ทำให้การปิดดีลที่ควรใช้เวลาไม่กี่วันกลับใช้เวลาหลายสัปดาห์' },
    { icon: 'ti-building-community', title: 'ความซับซ้อนของ Property Management', desc: 'การจัดการคำขอซ่อมบำรุง การเก็บค่าเช่า และอัตราการเข้าพักในหน่วยจำนวนหลายสิบถึงหลายร้อยยูนิต ต้องการระบบปฏิบัติการที่ผู้จัดการอสังหาฯ ส่วนใหญ่ยังไม่มีหรือเติบโตเกินกว่าระบบเดิม' },
    { icon: 'ti-shield-check', title: 'ความคาดหวังด้าน Trust & Transparency', desc: 'ผู้ซื้อและผู้เช่าคาดหวังราคาที่โปร่งใส Listing ที่ตรวจสอบได้ และการสื่อสารที่ชัดเจนตลอดกระบวนการ สร้างแรงกดดันให้ผู้ประกอบการต้องปรับตัวสู่ดิจิทัลเพื่อสร้างความไว้วางใจ' },
  ]

  const metrics = [
    { value: '$106.6B', label: isEN ? 'Global Proptech Market Size by 2029' : 'มูลค่าตลาด Proptech ทั่วโลกภายในปี 2029', source: 'MarketsandMarkets Proptech Forecast, 2024' },
    { value: '40%', label: isEN ? 'Faster Leasing Cycles with Digital Property Tools' : 'รอบเวลาการปล่อยเช่าที่เร็วขึ้นด้วยเครื่องมือดิจิทัล', source: 'JLL Digital Real Estate Report, 2024' },
    { value: '97%', label: isEN ? 'Of Buyers Who Start Their Property Search Online' : 'ของผู้ซื้อที่เริ่มค้นหาอสังหาริมทรัพย์ทางออนไลน์', source: 'NAR Real Estate in a Digital Age, 2024' },
  ]

  const capabilities = isEN ? [
    { icon: 'ti-home-search', title: 'Property Listing & Search Platforms', desc: 'Consumer-facing marketplaces with powerful search, filtering, and map-based discovery that connect buyers and renters with the right properties faster.' },
    { icon: 'ti-view-360', title: 'Virtual Tour & 3D Visualization Tools', desc: 'Immersive walkthrough experiences and 3D property visualizations that let buyers explore properties remotely and reduce unnecessary in-person visits.' },
    { icon: 'ti-building-community', title: 'Property Management Systems', desc: 'End-to-end platforms for managing maintenance requests, lease renewals, rent collection, and occupancy across residential and commercial portfolios.' },
    { icon: 'ti-signature', title: 'Digital Transaction & E-Signature Workflows', desc: 'Streamlined document workflows with e-signatures, automated compliance checks, and secure storage that turn weeks-long closings into days.' },
    { icon: 'ti-users-group', title: 'Tenant & Landlord Portals', desc: 'Self-service portals that give tenants and landlords real-time visibility into payments, maintenance status, lease terms, and communication history.' },
    { icon: 'ti-chart-bar', title: 'Market Analytics Dashboards', desc: 'Data-driven dashboards that surface pricing trends, comparable sales, and portfolio performance to support smarter investment and leasing decisions.' },
  ] : [
    { icon: 'ti-home-search', title: 'Property Listing & Search Platforms', desc: 'Marketplace ที่มุ่งเน้นผู้บริโภค พร้อมการค้นหาที่ทรงพลัง การกรอง และการค้นพบแบบ Map-based ที่เชื่อมผู้ซื้อและผู้เช่ากับอสังหาริมทรัพย์ที่ใช่ได้เร็วขึ้น' },
    { icon: 'ti-view-360', title: 'Virtual Tour & 3D Visualization Tools', desc: 'ประสบการณ์ Walkthrough แบบ Immersive และการแสดงผล 3D ของอสังหาริมทรัพย์ ที่ให้ผู้ซื้อสำรวจได้จากระยะไกลและลดการเข้าชมสถานที่จริงที่ไม่จำเป็น' },
    { icon: 'ti-building-community', title: 'Property Management Systems', desc: 'แพลตฟอร์มครบวงจรสำหรับจัดการคำขอซ่อมบำรุง การต่อสัญญาเช่า การเก็บค่าเช่า และอัตราการเข้าพักทั้งพอร์ตที่พักอาศัยและเชิงพาณิชย์' },
    { icon: 'ti-signature', title: 'Digital Transaction & E-Signature Workflows', desc: 'Workflow เอกสารที่คล่องตัวพร้อม E-Signature การตรวจสอบ Compliance อัตโนมัติ และการจัดเก็บที่ปลอดภัย เปลี่ยนการปิดดีลที่ใช้เวลาหลายสัปดาห์ให้เหลือเพียงไม่กี่วัน' },
    { icon: 'ti-users-group', title: 'Tenant & Landlord Portals', desc: 'Portal แบบ Self-service ที่ให้ผู้เช่าและเจ้าของบ้านเห็นสถานะการชำระเงิน สถานะซ่อมบำรุง เงื่อนไขสัญญา และประวัติการสื่อสารแบบ Real-time' },
    { icon: 'ti-chart-bar', title: 'Market Analytics Dashboards', desc: 'Dashboard ที่ขับเคลื่อนด้วยข้อมูล แสดงแนวโน้มราคา การเปรียบเทียบยอดขาย และประสิทธิภาพพอร์ตโฟลิโอ เพื่อสนับสนุนการตัดสินใจลงทุนและปล่อยเช่าที่ชาญฉลาดขึ้น' },
  ]

  const techStack = ['React', 'Next.js', 'Node.js', 'Google Maps API', 'PostgreSQL', 'GraphQL', 'AWS', 'DocuSign API', 'Machine Learning', 'Redis', 'Elasticsearch', 'WebGL', 'Stripe']

  const useCases = isEN ? [
    { no: '01', title: 'Property Listing Marketplace', desc: 'Consumer marketplace with advanced search, map-based discovery, saved searches, and agent-buyer messaging that connects thousands of listings with active buyers and renters.' },
    { no: '02', title: 'Virtual Tour Platform', desc: 'Immersive 3D walkthrough and virtual staging platform that lets prospective buyers explore properties remotely, complete with floor plans and measurement tools.' },
    { no: '03', title: 'Property Management System', desc: 'Operations platform for landlords and property managers covering rent collection, maintenance tracking, lease management, and tenant communication across a multi-unit portfolio.' },
  ] : [
    { no: '01', title: 'Property Listing Marketplace', desc: 'Marketplace สำหรับผู้บริโภคพร้อมการค้นหาขั้นสูง การค้นพบแบบ Map-based การบันทึกการค้นหา และการส่งข้อความระหว่างตัวแทนและผู้ซื้อ ที่เชื่อมโยง Listing หลายพันรายการกับผู้ซื้อและผู้เช่าที่กำลังมองหา' },
    { no: '02', title: 'Virtual Tour Platform' , desc: 'แพลตฟอร์ม Walkthrough 3D แบบ Immersive และ Virtual Staging ที่ให้ผู้ซื้อที่มีศักยภาพสำรวจอสังหาริมทรัพย์จากระยะไกล พร้อมแผนผังชั้นและเครื่องมือวัดขนาด' },
    { no: '03', title: 'Property Management System', desc: 'แพลตฟอร์มปฏิบัติการสำหรับเจ้าของบ้านและผู้จัดการอสังหาฯ ครอบคลุมการเก็บค่าเช่า การติดตามซ่อมบำรุง การจัดการสัญญาเช่า และการสื่อสารกับผู้เช่าทั่วทั้งพอร์ตหลายยูนิต' },
  ]

  const heroVisual = (
    <div className="relative pb-10 pr-6">
      <div className="rounded-2xl overflow-hidden" style={{ background: '#141329', border: '1px solid rgba(123,110,246,0.35)' }}>
        <div className="flex items-center justify-between px-5 py-3.5" style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
          <span className="text-xs tracking-widest uppercase" style={{ color: 'rgba(255,255,255,0.85)', fontFamily: 'monospace' }}>{isEN ? 'Studio / Listing' : 'Studio / Listing'}</span>
          <div className="flex gap-1">
            <span className="w-3 h-[2px] rounded-full" style={{ background: 'rgba(255,255,255,0.3)' }} />
            <span className="w-3 h-[2px] rounded-full" style={{ background: 'rgba(255,255,255,0.3)' }} />
          </div>
        </div>
        <div className="p-5">
          <div className="aspect-[16/9] rounded-xl mb-4 flex items-center justify-center relative overflow-hidden" style={{ background: 'linear-gradient(135deg, rgba(123,110,246,0.18), rgba(83,195,215,0.1))' }}>
            <svg width="130" height="70" viewBox="0 0 130 70" fill="none" style={{ animation: 'iconFloat 3s ease-in-out infinite' }}>
              <path d="M20 60 L20 32 L65 12 L110 32 L110 60 Z" stroke="var(--purple-light)" strokeWidth="2" fill="rgba(123,110,246,0.12)" />
              <path d="M45 60 L45 42 L85 42 L85 60" stroke="var(--lime)" strokeWidth="2" strokeLinecap="round" fill="none" />
            </svg>
          </div>
          <p className="mb-1" style={{ color: '#fff', fontWeight: 500, fontSize: '1.05rem' }}>{isEN ? 'Riverside Loft 12B' : 'Riverside Loft 12B'}</p>
          <div className="flex items-center justify-between mb-3">
            <p className="text-xs" style={{ color: 'rgba(255,255,255,0.5)' }}>{isEN ? '2 bed · 2 bath · 88 sqm' : '2 ห้องนอน · 2 ห้องน้ำ · 88 ตร.ม.'}</p>
            <p className="text-xs" style={{ color: 'var(--lime)', fontWeight: 600 }}>฿6.9M</p>
          </div>
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full" style={{ background: 'var(--lime)' }} />
            <span className="w-2.5 h-2.5 rounded-full" style={{ background: 'rgba(255,255,255,0.3)' }} />
            <span className="w-2.5 h-2.5 rounded-full" style={{ background: 'var(--purple-light)' }} />
          </div>
        </div>
      </div>

      <div
        className="absolute -bottom-2 -right-2 w-[180px] rounded-2xl p-4"
        style={{ background: '#1B1A33', border: '1px solid rgba(255,255,255,0.1)', boxShadow: '0 20px 50px -10px rgba(0,0,0,0.6)', animation: 'badgeFloat 3.4s ease-in-out infinite' }}
      >
        <div className="flex items-center justify-between mb-2.5">
          <span className="text-[10px] tracking-widest uppercase" style={{ color: 'rgba(255,255,255,0.85)' }}>{isEN ? 'Virtual Tour' : 'ทัวร์เสมือนจริง'}</span>
          <i className="ti ti-circle-check" style={{ fontSize: 14, color: 'var(--lime)' }} aria-hidden="true" />
        </div>
        <div className="w-9 h-9 rounded-lg flex items-center justify-center mb-2" style={{ background: 'rgba(123,110,246,0.15)' }}>
          <i className="ti ti-view-360" style={{ fontSize: 16, color: 'var(--purple-light)' }} aria-hidden="true" />
        </div>
        <p className="text-xs mb-3" style={{ color: 'rgba(255,255,255,0.5)' }}>{isEN ? '360° · Ready to view' : '360° · พร้อมเข้าชม'}</p>
        <div
          className="rounded-lg text-center py-1.5 text-xs"
          style={{ background: 'linear-gradient(90deg, var(--purple), var(--purple-light))', color: '#fff' }}
        >
          {isEN ? 'Book Viewing →' : 'จองเข้าชม →'}
        </div>
      </div>
    </div>
  )

  return (
    <>
      <Navbar lang={lang} tr={tr} />
      <main>

        {/* Hero */}
        <section className="relative overflow-hidden pt-[80px]" style={{ background: '#08070F' }}>
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.35]"
            style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.14) 1px, transparent 1px)', backgroundSize: '22px 22px' }}
          />
          <div
            className="absolute -top-40 -left-32 w-[560px] h-[560px] rounded-full pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgba(123,110,246,0.28) 0%, transparent 70%)', filter: 'blur(20px)' }}
          />
          <div className="relative max-w-7xl mx-auto px-4 lg:px-10 py-24 lg:py-32">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 text-xs tracking-widest uppercase" style={{ background: 'rgba(123,110,246,0.15)', color: 'var(--purple-light)' }}>
                  <span className="w-1.5 h-1.5 rounded-full inline-block" style={{ background: 'var(--lime)', animation: 'blinkDot 1.6s ease-in-out infinite' }} />
                  {badge}
                </div>
                <h1 className="t-display mb-6 leading-tight" style={{ fontSize: 'clamp(2.25rem,4.5vw,3.5rem)', background: 'linear-gradient(135deg, #fff 0%, #53C3D7 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                  {isEN ? 'Real' : 'อสังหา'}<br />{isEN ? 'Estate' : 'ริมทรัพย์'}
                </h1>
                <p className="leading-relaxed mb-10" style={{ fontSize: '1.15rem', color: 'rgba(255,255,255,0.85)', fontWeight: 400, maxWidth: 560 }}>
                  {heroSubhead}
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href={`${prefix}/work`}
                    className="inline-flex items-center gap-2 rounded-full transition-transform hover:scale-[1.03]"
                    style={{ fontSize: '1rem', padding: '14px 32px', background: 'linear-gradient(135deg, var(--purple) 0%, var(--purple-dark) 100%)', color: '#fff', fontWeight: 500, boxShadow: '0 8px 28px rgba(123,110,246,0.35)' }}
                  >
                    {isEN ? 'View Case Studies' : 'ดูผลงานของเรา'}
                    <svg width="15" height="15" viewBox="0 0 14 14" fill="none"><path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </Link>
                  <Link href={`${prefix}/contact`} className="inline-flex items-center gap-2 rounded-full border transition-colors" style={{ fontSize: '1rem', padding: '14px 32px', borderColor: 'rgba(255,255,255,0.2)', color: '#fff', fontWeight: 400 }}>
                    {isEN ? 'Free Consultation' : 'ปรึกษาฟรี'}
                  </Link>
                </div>
              </div>
              <div className="relative">
                {heroVisual}
              </div>
            </div>
          </div>
        </section>

        {/* Intro */}
        <section className="relative overflow-hidden" style={{ background: '#08070F' }}>
          <div className="relative max-w-7xl mx-auto px-4 lg:px-10 pb-20 lg:pb-28">
            <div className="rounded-2xl p-10 lg:p-14" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}>
              <div className="w-12 h-[3px] rounded-full mb-8" style={{ background: 'linear-gradient(90deg, var(--purple-light), var(--lime))' }} />
              <p className="leading-relaxed" style={{ color: 'rgba(255,255,255,0.85)', fontSize: 'clamp(1.05rem,1.6vw,1.35rem)', fontWeight: 400, maxWidth: 900 }}>
                {isEN
                  ? 'We help real estate developers, brokerages, and property managers build listing marketplaces, virtual tour platforms, property management systems, and digital transaction workflows that shorten sales cycles and cut operational overhead. Our solutions combine rich, map-based discovery experiences with rigorous backend engineering to turn browsers into buyers and tenants into long-term residents.'
                  : 'เราช่วยผู้พัฒนาอสังหาริมทรัพย์ นายหน้า และผู้จัดการอสังหาฯ สร้าง Marketplace สำหรับ Listing แพลตฟอร์ม Virtual Tour ระบบ Property Management และ Workflow ธุรกรรมดิจิทัล ที่ทำให้รอบการขายสั้นลงและลดต้นทุนการดำเนินงาน โซลูชันของเราผสมผสานประสบการณ์การค้นพบแบบ Map-based ที่สมบูรณ์ กับวิศวกรรม Backend ที่รัดกุม เพื่อเปลี่ยนคนดูให้กลายเป็นผู้ซื้อ และผู้เช่าให้กลายเป็นผู้อยู่อาศัยระยะยาว'}
              </p>
            </div>
          </div>
        </section>

        {/* Key Challenges */}
        <section className="relative overflow-hidden" style={{ background: '#050308' }}>
          <div className="relative max-w-7xl mx-auto px-4 lg:px-10 py-20 lg:py-28">
            <p className="mb-5 text-xs tracking-widest uppercase" style={{ color: 'var(--lime)', fontWeight: 600 }}>
              {isEN ? 'Challenges' : 'ความท้าทาย'}
            </p>
            <h2 className="t-display mb-4" style={{ color: '#fff', fontSize: 'clamp(2.25rem,4.5vw,3.5rem)' }}>
              {isEN ? 'Key Challenges' : 'ความท้าทายหลัก'}
            </h2>
            <p className="mb-14" style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1.2rem', fontWeight: 400, maxWidth: 640 }}>
              {isEN
                ? 'Understanding the critical obstacles that drive digital transformation in this industry.'
                : 'ความเข้าใจอุปสรรคสำคัญที่ผลักดันการปรับสู่ดิจิทัลในอุตสาหกรรมนี้'}
            </p>
            <div className="grid sm:grid-cols-2 gap-5">
              {challenges.map((c) => (
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
          </div>
        </section>

        {/* Industry at a Glance */}
        <div className="border-y" style={{ borderColor: 'rgba(255,255,255,0.08)', background: '#0C0A17' }}>
          <div className="max-w-7xl mx-auto px-4 lg:px-10">
            <div className="grid sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x" style={{ borderColor: 'rgba(255,255,255,0.08)' } as any}>
              {metrics.map((m) => (
                <div key={m.label} className="px-4 lg:px-10 py-10">
                  <p className="mb-3 text-xs tracking-widest uppercase" style={{ color: 'var(--lime)', fontWeight: 600 }}>
                    {isEN ? 'Industry at a Glance' : 'ภาพรวมอุตสาหกรรม'}
                  </p>
                  <div className="mb-3 leading-none" style={{ fontFamily: 'var(--font-main)', fontWeight: 400, fontSize: 'clamp(2.2rem,4vw,3.2rem)', background: 'linear-gradient(135deg,var(--purple-light),var(--lime))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                    {m.value}
                  </div>
                  <p className="mb-3 leading-snug" style={{ color: '#fff', fontWeight: 500, fontSize: '1.05rem' }}>{m.label}</p>
                  <p className="text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>{m.source}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Our Capabilities */}
        <section className="relative overflow-hidden" style={{ background: '#08070F' }}>
          <div className="relative max-w-7xl mx-auto px-4 lg:px-10 py-20 lg:py-28">
            <p className="mb-5 text-xs tracking-widest uppercase" style={{ color: 'var(--lime)', fontWeight: 600 }}>
              {isEN ? 'Capabilities' : 'ความสามารถ'}
            </p>
            <h2 className="t-display mb-4" style={{ color: '#fff', fontSize: 'clamp(2.25rem,4.5vw,3.5rem)' }}>
              {isEN ? 'Our Capabilities' : 'ความสามารถของเรา'}
            </h2>
            <p className="mb-14" style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1.2rem', fontWeight: 400, maxWidth: 640 }}>
              {isEN ? "Proven solutions we build to address your industry's most pressing needs." : 'โซลูชันที่พิสูจน์แล้วซึ่งเราสร้างเพื่อตอบโจทย์ที่สำคัญที่สุดของอุตสาหกรรมคุณ'}
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {capabilities.map((c) => (
                <div key={c.title} className="p-8 rounded-2xl" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}>
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6" style={{ background: 'rgba(83,195,215,0.12)' }}>
                    <i className={`ti ${c.icon}`} style={{ fontSize: 24, color: 'var(--lime)' }} aria-hidden="true" />
                  </div>
                  <h3 className="mb-3" style={{ color: '#fff', fontWeight: 600, fontSize: '1.3rem' }}>{c.title}</h3>
                  <p className="leading-relaxed" style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1.1rem', fontWeight: 400 }}>{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technology We Use */}
        <section className="relative overflow-hidden" style={{ background: '#050308' }}>
          <div className="relative max-w-7xl mx-auto px-4 lg:px-10 py-20 lg:py-28">
            <p className="mb-5 text-xs tracking-widest uppercase" style={{ color: 'var(--lime)', fontWeight: 600 }}>
              {isEN ? 'Tech Stack' : 'เทคโนโลยีที่ใช้'}
            </p>
            <h2 className="t-display mb-4" style={{ color: '#fff', fontSize: 'clamp(2.25rem,4.5vw,3.5rem)' }}>
              {isEN ? 'Technologies We Use' : 'เทคโนโลยีที่เราใช้งาน'}
            </h2>
            <p className="mb-12" style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1.2rem', fontWeight: 400, maxWidth: 640 }}>
              {isEN
                ? 'Industry-proven tools and frameworks we leverage to build robust solutions.'
                : 'เครื่องมือและ Framework ที่พิสูจน์แล้วในอุตสาหกรรม ที่เราใช้สร้างโซลูชันที่แข็งแรงและเชื่อถือได้'}
            </p>
            <div className="flex flex-wrap gap-3">
              {techStack.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-base"
                  style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.85)', fontWeight: 400 }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="relative overflow-hidden" style={{ background: '#08070F' }}>
          <div className="relative max-w-7xl mx-auto px-4 lg:px-10 py-20 lg:py-28">
            <p className="mb-5 text-xs tracking-widest uppercase" style={{ color: 'var(--lime)', fontWeight: 600 }}>
              {isEN ? 'Use Cases' : 'ตัวอย่างการใช้งาน'}
            </p>
            <h2 className="t-display mb-4" style={{ color: '#fff', fontSize: 'clamp(2.25rem,4.5vw,3.5rem)' }}>
              {isEN ? 'Use Cases' : 'ตัวอย่างการใช้งาน'}
            </h2>
            <p className="mb-14" style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1.2rem', fontWeight: 400, maxWidth: 640 }}>
              {isEN ? 'Concrete project types we deliver for clients in this industry.' : 'ตัวอย่างโปรเจกต์ที่เราส่งมอบจริงให้กับลูกค้าในอุตสาหกรรมนี้'}
            </p>
            <div className="grid lg:grid-cols-3 gap-6">
              {useCases.map((u) => (
                <div key={u.no} className="p-8 rounded-2xl" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}>
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center mb-6 font-mono"
                    style={{
                      background: 'linear-gradient(135deg, var(--purple) 0%, var(--purple-dark) 100%)',
                      boxShadow: '0 8px 24px -8px rgba(123,110,246,0.6)',
                      color: '#fff',
                      fontSize: '1.05rem',
                      fontWeight: 600,
                    }}
                  >
                    {u.no}
                  </div>
                  <h3 className="mb-3" style={{ color: '#fff', fontWeight: 600, fontSize: '1.3rem' }}>{u.title}</h3>
                  <p className="leading-relaxed" style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1.1rem', fontWeight: 400 }}>{u.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="relative overflow-hidden" style={{ background: '#050308' }}>
          <div
            className="absolute inset-0 pointer-events-none opacity-40"
            style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), radial-gradient(rgba(255,255,255,0.3) 1px, transparent 1px)', backgroundSize: '180px 180px, 260px 260px', backgroundPosition: '0 0, 90px 130px' }}
          />
          <div
            className="absolute left-0 right-0 bottom-0 pointer-events-none"
            style={{ height: 260, background: 'radial-gradient(ellipse 70% 100% at 50% 100%, rgba(123,110,246,0.35) 0%, rgba(83,195,215,0.08) 45%, transparent 75%)' }}
          />
          <div className="relative max-w-7xl mx-auto px-4 lg:px-10 py-28 lg:py-36">
            <h2 className="t-display mb-5 leading-tight" style={{ background: 'linear-gradient(135deg, #fff 0%, #53C3D7 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', fontSize: 'clamp(2.5rem,5.5vw,4.2rem)' }}>
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
                {isEN ? 'Talk to Us' : 'คุยกับเรา'}
                <i className="ti ti-arrow-right" style={{ fontSize: 17 }} aria-hidden="true" />
              </Link>
              <a href="mailto:wu@haliviq.com" style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1.1rem', fontWeight: 400 }}>
                wu@haliviq.com
              </a>
            </div>
          </div>
        </section>

      </main>
      <Footer lang={lang} tr={tr} />
    </>
  )
}
