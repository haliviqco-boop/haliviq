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

  const badge = isEN ? 'Industry / Energy & Utilities' : 'อุตสาหกรรม / พลังงานและสาธารณูปโภค'
  const heroSubhead = isEN
    ? 'Smart solutions for energy management and utility services.'
    : 'โซลูชันอัจฉริยะสำหรับการจัดการพลังงานและบริการสาธารณูปโภค'

  const challenges = isEN ? [
    { icon: 'ti-building-factory', title: 'Aging Grid Infrastructure', desc: 'Decades-old transmission and distribution assets require costly modernization, yet utilities must keep the grid reliable while upgrading in phases without disrupting service.' },
    { icon: 'ti-solar-panel', title: 'Renewable Integration & Grid Balancing', desc: 'Intermittent solar and wind generation strains grid stability, demanding sophisticated forecasting and load-balancing systems to keep supply and demand in sync.' },
    { icon: 'ti-bolt-off', title: 'Real-Time Outage Detection', desc: 'Customers expect instant awareness and rapid restoration when outages occur, but many utilities still rely on manual reporting instead of automated, sensor-driven detection.' },
    { icon: 'ti-file-certificate', title: 'Evolving Regulatory Requirements', desc: 'Decarbonization mandates and shifting Compliance frameworks require continuous reporting and auditable data trails, adding operational complexity across the organization.' },
  ] : [
    { icon: 'ti-building-factory', title: 'โครงสร้างพื้นฐาน Grid ที่เก่าแก่', desc: 'สินทรัพย์ระบบส่งและจำหน่ายไฟฟ้าที่ใช้งานมาหลายทศวรรษต้องการการปรับปรุงให้ทันสมัยด้วยต้นทุนสูง แต่การไฟฟ้าต้องรักษาความน่าเชื่อถือของ Grid ไว้ระหว่างการอัปเกรดเป็นระยะโดยไม่กระทบบริการ' },
    { icon: 'ti-solar-panel', title: 'การรวม Renewable Energy และ Grid Balancing', desc: 'การผลิตไฟฟ้าจากพลังงานแสงอาทิตย์และลมที่ไม่สม่ำเสมอสร้างแรงกดดันต่อเสถียรภาพของ Grid ต้องการระบบพยากรณ์และ Load Balancing ที่ซับซ้อนเพื่อรักษาสมดุลระหว่างอุปสงค์และอุปทาน' },
    { icon: 'ti-bolt-off', title: 'การตรวจจับไฟฟ้าขัดข้องแบบ Real-time', desc: 'ลูกค้าคาดหวังการรับรู้ทันทีและการฟื้นฟูบริการอย่างรวดเร็วเมื่อเกิดไฟฟ้าขัดข้อง แต่หลายการไฟฟ้ายังพึ่งพาการรายงานแบบ Manual แทนการตรวจจับอัตโนมัติด้วยเซนเซอร์' },
    { icon: 'ti-file-certificate', title: 'ข้อกำหนดด้านกฎระเบียบที่เปลี่ยนแปลงตลอดเวลา', desc: 'นโยบาย Decarbonization และกรอบ Compliance ที่เปลี่ยนแปลงอยู่เสมอ ต้องการการรายงานอย่างต่อเนื่องและ Audit Trail ที่ตรวจสอบได้ เพิ่มความซับซ้อนในการดำเนินงานทั่วทั้งองค์กร' },
  ]

  const metrics = [
    { value: '$145B', label: isEN ? 'Global Smart Grid Market Size by 2030' : 'ขนาดตลาด Smart Grid ทั่วโลกภายในปี 2030', source: 'MarketsandMarkets Smart Grid Report, 2024' },
    { value: '38%', label: isEN ? 'Growth in Global Renewable Generation Capacity' : 'การเติบโตของกำลังผลิตไฟฟ้าจาก Renewable Energy ทั่วโลก', source: 'IEA Renewables Outlook, 2024' },
    { value: '45%', label: isEN ? 'Reduction in Outage Duration with Predictive Analytics' : 'ระยะเวลาไฟฟ้าขัดข้องที่ลดลงด้วย Predictive Analytics', source: 'Deloitte Power & Utilities Study, 2024' },
  ]

  const capabilities = isEN ? [
    { icon: 'ti-gauge', title: 'Smart Grid Monitoring Dashboards', desc: 'Real-time visualization platforms that aggregate smart-meter and sensor data to give operators full visibility into grid load, voltage, and performance.' },
    { icon: 'ti-battery', title: 'Solar & Battery Management Platforms', desc: 'Monitoring and control systems for distributed solar arrays and battery storage that optimize generation, charging cycles, and energy dispatch.' },
    { icon: 'ti-bell-ringing', title: 'Outage Reporting & Response Systems', desc: 'Automated detection and dispatch platforms that pinpoint outage locations, notify affected customers, and coordinate field crews for faster restoration.' },
    { icon: 'ti-receipt-2', title: 'Usage Analytics & Billing Platforms', desc: 'Consumption tracking and billing engines that turn granular smart-meter data into accurate invoices and actionable customer usage insights.' },
    { icon: 'ti-adjustments-horizontal', title: 'Demand-Response Optimization Tools', desc: 'Automated systems that shift or curtail load during peak periods, incentivizing customer participation while easing pressure on the grid.' },
    { icon: 'ti-arrows-exchange', title: 'Energy Trading & Marketplace Systems', desc: 'Digital marketplaces and trading platforms that enable peer-to-peer energy exchange, settlement, and transparent pricing across the grid.' },
  ] : [
    { icon: 'ti-gauge', title: 'Smart Grid Monitoring Dashboards', desc: 'แพลตฟอร์ม Visualization แบบ Real-time ที่รวมข้อมูลจาก Smart Meter และเซนเซอร์ ให้ผู้ปฏิบัติงานมองเห็นภาพรวมของ Load แรงดัน และประสิทธิภาพของ Grid ได้อย่างครบถ้วน' },
    { icon: 'ti-battery', title: 'Solar & Battery Management Platforms', desc: 'ระบบตรวจสอบและควบคุมสำหรับแผงโซลาร์แบบกระจายและระบบกักเก็บพลังงานแบตเตอรี่ ที่เพิ่มประสิทธิภาพการผลิต รอบการชาร์จ และการจ่ายพลังงาน' },
    { icon: 'ti-bell-ringing', title: 'Outage Reporting & Response Systems', desc: 'แพลตฟอร์มตรวจจับและ Dispatch อัตโนมัติที่ระบุตำแหน่งไฟฟ้าขัดข้อง แจ้งเตือนลูกค้าที่ได้รับผลกระทบ และประสานงานทีมภาคสนามเพื่อฟื้นฟูบริการได้เร็วขึ้น' },
    { icon: 'ti-receipt-2', title: 'Usage Analytics & Billing Platforms', desc: 'ระบบติดตามการใช้พลังงานและ Billing Engine ที่แปลงข้อมูล Smart Meter แบบละเอียดให้เป็นใบแจ้งหนี้ที่แม่นยำและ Insight การใช้งานที่นำไปปฏิบัติได้จริง' },
    { icon: 'ti-adjustments-horizontal', title: 'Demand-Response Optimization Tools', desc: 'ระบบอัตโนมัติที่เลื่อนหรือลด Load ในช่วง Peak Period จูงใจให้ลูกค้าเข้าร่วมพร้อมลดแรงกดดันต่อ Grid' },
    { icon: 'ti-arrows-exchange', title: 'Energy Trading & Marketplace Systems', desc: 'Marketplace ดิจิทัลและแพลตฟอร์มซื้อขายที่เปิดให้แลกเปลี่ยนพลังงานแบบ Peer-to-Peer การชำระบัญชี และการตั้งราคาที่โปร่งใสทั่วทั้ง Grid' },
  ]

  const techStack = ['IoT', 'MQTT', 'Time Series DBs', 'React', 'Node.js', 'Python', 'Machine Learning', 'AWS IoT Core', 'Kafka', 'PostgreSQL', 'GraphQL', 'Edge Computing', 'Grafana']

  const useCases = isEN ? [
    { no: '01', title: 'Smart Grid Monitoring Dashboard', desc: 'Real-time platform aggregating smart-meter and sensor telemetry across substations and feeders, giving operators live visibility into load, voltage, and fault conditions.' },
    { no: '02', title: 'Solar & Battery Management Platform', desc: 'Distributed energy resource management system that monitors solar generation and battery storage, optimizing dispatch and charging schedules across sites.' },
    { no: '03', title: 'Outage Response System', desc: 'Automated outage detection and crew-dispatch platform that maps affected areas in real time, notifies customers, and tracks restoration progress end to end.' },
  ] : [
    { no: '01', title: 'Smart Grid Monitoring Dashboard', desc: 'แพลตฟอร์ม Real-time ที่รวมข้อมูล Telemetry จาก Smart Meter และเซนเซอร์ทั่วสถานีไฟฟ้าและสายป้อน ให้ผู้ปฏิบัติงานเห็นภาพ Load แรงดัน และความผิดปกติแบบ Live' },
    { no: '02', title: 'Solar & Battery Management Platform', desc: 'ระบบจัดการทรัพยากรพลังงานแบบกระจายที่ตรวจสอบการผลิตไฟฟ้าจากโซลาร์และระบบกักเก็บแบตเตอรี่ เพิ่มประสิทธิภาพการจ่ายไฟและตารางการชาร์จในทุกไซต์' },
    { no: '03', title: 'Outage Response System', desc: 'แพลตฟอร์มตรวจจับไฟฟ้าขัดข้องและ Dispatch ทีมงานอัตโนมัติที่ทำแผนที่พื้นที่ได้รับผลกระทบแบบ Real-time แจ้งเตือนลูกค้า และติดตามความคืบหน้าการฟื้นฟูตั้งแต่ต้นจนจบ' },
  ]

  const heroVisual = (
    <div className="relative pb-10 pr-6">
      <div className="rounded-2xl overflow-hidden" style={{ background: '#141329', border: '1px solid rgba(123,110,246,0.35)' }}>
        <div className="flex items-center justify-between px-5 py-3.5" style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
          <span className="text-xs tracking-widest uppercase" style={{ color: 'rgba(255,255,255,0.85)', fontFamily: 'monospace' }}>{isEN ? 'Grid / Load Monitor' : 'Grid / Load Monitor'}</span>
          <div className="flex gap-1">
            <span className="w-3 h-[2px] rounded-full" style={{ background: 'rgba(255,255,255,0.3)' }} />
            <span className="w-3 h-[2px] rounded-full" style={{ background: 'rgba(255,255,255,0.3)' }} />
          </div>
        </div>
        <div className="p-5">
          <div className="aspect-[16/9] rounded-xl mb-4 flex items-center justify-center relative overflow-hidden" style={{ background: 'linear-gradient(135deg, rgba(123,110,246,0.18), rgba(83,195,215,0.1))' }}>
            <svg width="140" height="70" viewBox="0 0 140 70" fill="none" style={{ animation: 'iconFloat 3s ease-in-out infinite' }}>
              <polyline points="4,50 22,50 32,20 46,58 58,34 70,44 82,26 96,44 110,38 124,50 136,50" stroke="var(--lime)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" style={{ animation: 'dashFlow 2.4s linear infinite', strokeDasharray: '6 4' }} />
              <path d="M62 8 L48 32 L60 32 L52 58 L78 26 L64 26 Z" stroke="var(--purple-light)" strokeWidth="1.5" fill="rgba(123,110,246,0.18)" strokeLinejoin="round" />
            </svg>
          </div>
          <div className="flex items-end gap-1.5 mb-4" style={{ height: 34 }}>
            {[0.5, 0.8, 0.4, 0.95, 0.65, 0.75, 0.55].map((h, i) => (
              <span
                key={i}
                className="flex-1 rounded-sm"
                style={{ height: `${h * 34}px`, background: i % 2 === 0 ? 'var(--purple-light)' : 'var(--lime)', transformOrigin: 'bottom', animation: `barGrow ${2 + i * 0.2}s ease-in-out infinite` }}
              />
            ))}
          </div>
          <p className="mb-1" style={{ color: '#fff', fontWeight: 500, fontSize: '1.05rem' }}>{isEN ? 'Feeder Load: 82%' : 'Feeder Load: 82%'}</p>
          <p className="text-xs mb-3" style={{ color: 'rgba(255,255,255,0.5)' }}>{isEN ? 'Stable · No anomalies detected' : 'ปกติ · ไม่พบความผิดปกติ'}</p>
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
          <span className="text-[10px] tracking-widest uppercase" style={{ color: 'rgba(255,255,255,0.85)' }}>{isEN ? 'Solar Output' : 'พลังงานโซลาร์'}</span>
          <i className="ti ti-circle-check" style={{ fontSize: 14, color: 'var(--lime)' }} aria-hidden="true" />
        </div>
        <div className="w-9 h-9 rounded-lg flex items-center justify-center mb-2" style={{ background: 'rgba(123,110,246,0.15)' }}>
          <i className="ti ti-solar-panel" style={{ fontSize: 16, color: 'var(--purple-light)' }} aria-hidden="true" />
        </div>
        <p className="text-xs mb-3" style={{ color: 'rgba(255,255,255,0.5)' }}>{isEN ? '4.2 MWh today' : '4.2 MWh วันนี้'}</p>
        <div
          className="rounded-lg text-center py-1.5 text-xs"
          style={{ background: 'linear-gradient(90deg, var(--purple), var(--purple-light))', color: '#fff' }}
        >
          {isEN ? 'View Grid →' : 'ดู Grid →'}
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
                <h1 className="t-display mb-6 leading-normal" style={{ fontSize: 'clamp(2.8rem,6vw,5.5rem)', background: 'linear-gradient(135deg, var(--purple-light) 0%, #53C3D7 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                  {isEN ? 'Energy &' : 'พลังงาน &'}<br />{isEN ? 'Utilities' : 'สาธารณูปโภค'}
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
                  ? 'We help energy and utility companies build smart grid monitoring dashboards, solar and battery management platforms, outage response systems, and demand-response tools that improve reliability and accelerate the transition to renewables. Our solutions integrate real-time IoT telemetry with resilient backend engineering to keep the lights on and the grid future-ready.'
                  : 'เราช่วยบริษัทพลังงานและสาธารณูปโภคสร้าง Smart Grid Monitoring Dashboard, แพลตฟอร์มจัดการโซลาร์และแบตเตอรี่, ระบบตอบสนองไฟฟ้าขัดข้อง และเครื่องมือ Demand-Response ที่เพิ่มความน่าเชื่อถือและเร่งการเปลี่ยนผ่านสู่พลังงานหมุนเวียน โซลูชันของเราผสาน IoT Telemetry แบบ Real-time เข้ากับวิศวกรรม Backend ที่แข็งแรง เพื่อให้ไฟฟ้าไม่ดับและ Grid พร้อมสำหรับอนาคต'}
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
