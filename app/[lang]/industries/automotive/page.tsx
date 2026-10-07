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

  const badge = isEN ? 'Industry / Automotive' : 'อุตสาหกรรม / ยานยนต์'
  const heroSubhead = isEN
    ? 'Connected vehicle and mobility solutions for the automotive industry.'
    : 'ระบบรถยนต์เชื่อมต่ออินเทอร์เน็ตและบริการ Mobility สำหรับธุรกิจยานยนต์'

  const challenges = isEN ? [
    { icon: 'ti-plug', title: 'EV Charging Infrastructure Fragmentation', desc: 'Charging networks span dozens of hardware vendors and payment systems with no unified standard, leaving drivers with inconsistent availability data and fragmented apps across providers.' },
    { icon: 'ti-shield-lock', title: 'Connected-Car Data Volume & Security', desc: 'Modern vehicles generate terabytes of telemetry per day, and securing that data pipeline against interception or tampering while keeping it queryable in real time is a constant engineering challenge.' },
    { icon: 'ti-tool', title: 'Dealer & Service Network Experience Gaps', desc: 'Dealers and service centers still rely on disconnected legacy systems for scheduling, parts, and warranty claims, creating friction that erodes customer trust at every touchpoint.' },
    { icon: 'ti-cpu', title: 'Software-Defined-Vehicle Complexity', desc: 'As vehicles shift from hardware-defined to software-defined architectures, OEMs must manage over-the-air updates, feature flags, and safety-critical compliance across an ever-growing codebase.' },
  ] : [
    { icon: 'ti-plug', title: 'สถานีชาร์จ EV กระจัดกระจาย', desc: 'สถานีชาร์จกระจายอยู่กับผู้ผลิตฮาร์ดแวร์และระบบชำระเงินหลายสิบเจ้า ไม่มีมาตรฐานร่วมกัน ผู้ขับจึงเจอข้อมูลสถานะที่ไม่ตรงกัน และต้องใช้แอปแยกกันของแต่ละผู้ให้บริการ' },
    { icon: 'ti-shield-lock', title: 'ข้อมูลจำนวนมากและความปลอดภัยของรถเชื่อมต่อ', desc: 'รถยนต์สมัยใหม่สร้างข้อมูล Telemetry หลาย Terabyte ต่อวัน การป้องกัน Data Pipeline ไม่ให้ถูกดักหรือแก้ไขข้อมูล โดยยังค้นข้อมูลแบบเรียลไทม์ได้ เป็นโจทย์วิศวกรรมที่ยากอยู่เสมอ' },
    { icon: 'ti-tool', title: 'ประสบการณ์ดิจิทัลของดีลเลอร์และศูนย์บริการยังไม่ดี', desc: 'ดีลเลอร์และศูนย์บริการยังใช้ระบบเก่าแยกกันสำหรับการนัดหมาย อะไหล่ และการเคลมประกัน ทำให้ติดขัด และลดความไว้วางใจของลูกค้าในทุกขั้นตอน' },
    { icon: 'ti-cpu', title: 'ความซับซ้อนของรถที่ขับเคลื่อนด้วยซอฟต์แวร์', desc: 'เมื่อรถเปลี่ยนจากฮาร์ดแวร์เป็นหลักไปเป็น Software-Defined ผู้ผลิตต้องจัดการ OTA Update, Feature Flag และความปลอดภัยตามข้อกำหนด บน Codebase ที่ใหญ่ขึ้นเรื่อยๆ' },
  ]

  const metrics = [
    { value: '$285B', label: isEN ? 'Global Connected Car Market Size by 2030' : 'ขนาดตลาดรถยนต์เชื่อมต่ออินเทอร์เน็ตทั่วโลกภายในปี 2030', source: 'MarketsandMarkets Connected Car Market Report, 2024' },
    { value: '26%', label: isEN ? 'Projected Annual Growth in Global EV Adoption' : 'อัตราการเติบโตต่อปีที่คาดการณ์ของการใช้รถ EV ทั่วโลก', source: 'IEA Global EV Outlook, 2024' },
    { value: '20%', label: isEN ? 'Cost Savings from Telematics-Driven Fleet Management' : 'ต้นทุนที่ประหยัดได้จากการบริหารกองยานด้วย Telematics', source: 'Deloitte Future of Mobility Study, 2024' },
  ]

  const capabilities = isEN ? [
    { icon: 'ti-bolt', title: 'EV Charging Network Apps', desc: 'Consumer and operator apps that unify station discovery, real-time availability, reservations, and payments across multi-vendor charging networks.' },
    { icon: 'ti-truck', title: 'Fleet Management Platforms', desc: 'End-to-end fleet platforms with route optimization, driver behavior scoring, fuel and energy tracking, and compliance reporting for logistics operators.' },
    { icon: 'ti-dashboard', title: 'Connected-Car Telematics Dashboards', desc: 'Real-time dashboards that ingest vehicle telemetry to surface diagnostics, location, and usage insights for owners, fleets, and OEM operations teams.' },
    { icon: 'ti-calendar-event', title: 'Dealer & Service Booking Systems', desc: 'Digital scheduling and workshop management platforms that connect dealers, service bays, parts inventory, and customers in one streamlined workflow.' },
    { icon: 'ti-steering-wheel', title: 'In-Car UX & Infotainment Software', desc: 'Infotainment and HMI software built for automotive-grade constraints, delivering responsive navigation, media, and voice experiences behind the wheel.' },
    { icon: 'ti-chart-dots', title: 'Predictive Vehicle-Maintenance Analytics', desc: 'Machine learning models that analyze sensor data to predict component failures before they happen, reducing downtime and unplanned service visits.' },
  ] : [
    { icon: 'ti-bolt', title: 'EV Charging Network Apps', desc: 'แอปสำหรับผู้ขับและผู้ให้บริการ รวมการค้นหาสถานี สถานะแบบเรียลไทม์ การจอง และการชำระเงินของเครือข่ายชาร์จหลายผู้ให้บริการไว้ในที่เดียว' },
    { icon: 'ti-truck', title: 'Fleet Management Platforms', desc: 'แพลตฟอร์มบริหารกองยานครบทุกด้าน มี Route Optimization ให้คะแนนพฤติกรรมผู้ขับ ติดตามเชื้อเพลิงและพลังงาน และรายงานตามข้อกำหนดสำหรับผู้ให้บริการโลจิสติกส์' },
    { icon: 'ti-dashboard', title: 'Connected-Car Telematics Dashboards', desc: 'Dashboard แบบเรียลไทม์ที่รับข้อมูล Telemetry จากรถ แสดงผลวินิจฉัย ตำแหน่ง และข้อมูลการใช้งาน สำหรับเจ้าของรถ กองยาน และทีมปฏิบัติการของผู้ผลิต' },
    { icon: 'ti-calendar-event', title: 'Dealer & Service Booking Systems', desc: 'แพลตฟอร์มนัดหมายและบริหารศูนย์บริการ เชื่อมดีลเลอร์ ช่างบริการ คลังอะไหล่ และลูกค้าไว้ในขั้นตอนเดียวที่ต่อเนื่อง' },
    { icon: 'ti-steering-wheel', title: 'In-Car UX & Infotainment Software', desc: 'ซอฟต์แวร์ Infotainment และ HMI ที่ออกแบบตามข้อจำกัดของรถยนต์ นำทาง เล่นสื่อ และสั่งงานด้วยเสียงได้ไว ขณะขับขี่' },
    { icon: 'ti-chart-dots', title: 'Predictive Vehicle-Maintenance Analytics', desc: 'โมเดล Machine Learning วิเคราะห์ข้อมูลเซนเซอร์เพื่อทำนายว่าชิ้นส่วนจะเสียก่อนเกิดขึ้นจริง ลด Downtime และการเข้าศูนย์บริการโดยไม่ได้วางแผน' },
  ]

  const techStack = ['React', 'React Native', 'IoT', 'MQTT', 'Kubernetes', 'AWS', 'PostgreSQL', 'GraphQL', 'Machine Learning', 'Edge Computing', 'gRPC', 'Digital Twin', 'TimescaleDB']

  const useCases = isEN ? [
    { no: '01', title: 'EV Charging Network App', desc: 'Cross-network mobile app that lets drivers locate, reserve, and pay for charging sessions in real time across multiple charge-point operators.' },
    { no: '02', title: 'Fleet Telematics Dashboard', desc: 'Live operations dashboard aggregating vehicle location, driver behavior, and energy consumption data to optimize routes and reduce fleet operating costs.' },
    { no: '03', title: 'Predictive Maintenance Platform', desc: 'Sensor-driven analytics platform that flags at-risk components ahead of failure, scheduling proactive service and minimizing vehicle downtime.' },
  ] : [
    { no: '01', title: 'EV Charging Network App', desc: 'แอปมือถือที่ให้ผู้ขับค้นหา จอง และจ่ายเงินค่าชาร์จแบบเรียลไทม์ ได้ในสถานีของผู้ให้บริการหลายราย' },
    { no: '02', title: 'Fleet Telematics Dashboard', desc: 'Dashboard ปฏิบัติการแบบสด รวมข้อมูลตำแหน่งรถ พฤติกรรมผู้ขับ และการใช้พลังงาน เพื่อปรับเส้นทางให้มีประสิทธิภาพและลดต้นทุนของกองยาน' },
    { no: '03', title: 'Predictive Maintenance Platform', desc: 'แพลตฟอร์มวิเคราะห์ข้อมูลเซนเซอร์ แจ้งเตือนชิ้นส่วนเสี่ยงก่อนเสียหาย และจัดตารางเข้าศูนย์บริการล่วงหน้าเพื่อลด Downtime ของรถ' },
  ]

  const heroVisual = (
    <div className="relative pb-10 pr-6">
      <div className="rounded-2xl overflow-hidden" style={{ background: '#141329', border: '1px solid rgba(123,110,246,0.35)' }}>
        <div className="flex items-center justify-between px-5 py-3.5" style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
          <span className="text-xs tracking-widest uppercase" style={{ color: 'rgba(255,255,255,0.85)', fontFamily: 'monospace' }}>{isEN ? 'Studio / Drive' : 'Studio / Drive'}</span>
          <div className="flex gap-1">
            <span className="w-3 h-[2px] rounded-full" style={{ background: 'rgba(255,255,255,0.3)' }} />
            <span className="w-3 h-[2px] rounded-full" style={{ background: 'rgba(255,255,255,0.3)' }} />
          </div>
        </div>
        <div className="p-5">
          <div className="aspect-[16/9] rounded-xl mb-4 flex items-center justify-center relative overflow-hidden" style={{ background: 'linear-gradient(135deg, rgba(123,110,246,0.18), rgba(83,195,215,0.1))' }}>
            <svg width="130" height="70" viewBox="0 0 130 70" fill="none" style={{ animation: 'iconFloat 3s ease-in-out infinite' }}>
              <path d="M15 45 L20 30 Q24 24 32 24 L92 24 Q100 24 104 30 L109 45" stroke="var(--purple-light)" strokeWidth="2" fill="none" strokeLinecap="round" />
              <rect x="10" y="45" width="104" height="14" rx="6" stroke="var(--purple-light)" strokeWidth="2" fill="rgba(123,110,246,0.12)" />
              <circle cx="32" cy="59" r="7" stroke="var(--lime)" strokeWidth="2" fill="#141329" />
              <circle cx="92" cy="59" r="7" stroke="var(--lime)" strokeWidth="2" fill="#141329" />
              <path d="M60 30 L54 40 L62 40 L56 50" stroke="var(--lime)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            </svg>
          </div>
          <p className="mb-1" style={{ color: '#fff', fontWeight: 500, fontSize: '1.05rem' }}>{isEN ? 'Vehicle Status' : 'สถานะยานพาหนะ'}</p>
          <p className="text-xs mb-3" style={{ color: 'rgba(255,255,255,0.5)' }}>{isEN ? 'Charging · 78% · 22 min left' : 'กำลังชาร์จ · 78% · เหลือ 22 นาที'}</p>
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
          <span className="text-[10px] tracking-widest uppercase" style={{ color: 'rgba(255,255,255,0.85)' }}>{isEN ? 'Charging Session' : 'เซสชันชาร์จ'}</span>
          <i className="ti ti-circle-check" style={{ fontSize: 14, color: 'var(--lime)' }} aria-hidden="true" />
        </div>
        <div className="w-9 h-9 rounded-lg flex items-center justify-center mb-2" style={{ background: 'rgba(123,110,246,0.15)' }}>
          <i className="ti ti-plug" style={{ fontSize: 16, color: 'var(--purple-light)' }} aria-hidden="true" />
        </div>
        <p className="text-xs mb-3" style={{ color: 'rgba(255,255,255,0.5)' }}>{isEN ? 'Station B4 · 150 kW' : 'สถานี B4 · 150 กิโลวัตต์'}</p>
        <div
          className="rounded-lg text-center py-1.5 text-xs"
          style={{ background: 'linear-gradient(90deg, var(--purple), var(--purple-light))', color: '#fff' }}
        >
          {isEN ? 'View Details →' : 'ดูรายละเอียด →'}
        </div>
      </div>
    </div>
  )

  return (
    <>
      <Navbar lang={lang} tr={tr} transparent />
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
                <h1 className="t-display mb-6 leading-relaxed" style={{ fontSize: 'clamp(2.8rem,6vw,5.5rem)', background: 'linear-gradient(135deg, var(--purple-light) 0%, #53C3D7 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                  {isEN ? 'Automotive &' : 'ยานยนต์ &'}<br />{isEN ? 'Mobility' : 'โมบิลิตี้'}
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
                  ? 'We help automotive OEMs, dealers, and mobility operators build EV charging apps, fleet management platforms, connected-car telematics dashboards, and predictive maintenance systems that keep vehicles on the road and customers loyal. Our solutions handle massive sensor data volumes in real time while combining automotive-grade reliability with modern, delightful software experiences.'
                  : 'เราช่วยผู้ผลิตรถยนต์ ดีลเลอร์ และผู้ให้บริการ Mobility สร้างแอปชาร์จ EV แพลตฟอร์มบริหารกองยาน Dashboard Telematics สำหรับรถเชื่อมต่ออินเทอร์เน็ต และระบบทำนายการซ่อมบำรุง เพื่อให้รถใช้งานได้ต่อเนื่องและลูกค้าอยู่กับแบรนด์ ระบบของเรารองรับข้อมูลเซนเซอร์ปริมาณมหาศาลแบบเรียลไทม์ ด้วยความเสถียรระดับยานยนต์ และซอฟต์แวร์ที่ทันสมัยใช้งานง่าย'}
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
                : 'ปัญหาหลักที่ธุรกิจในอุตสาหกรรมนี้ต้องเจอ'}
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
              {isEN ? "Proven solutions we build to address your industry's most pressing needs." : 'ระบบที่เราสร้างและใช้งานได้จริง เพื่อแก้ปัญหาสำคัญของอุตสาหกรรมคุณ'}
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
              {isEN ? 'Technologies We Use' : 'เทคโนโลยีที่เราใช้'}
            </h2>
            <p className="mb-12" style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1.2rem', fontWeight: 400, maxWidth: 640 }}>
              {isEN
                ? 'Industry-proven tools and frameworks we leverage to build robust solutions.'
                : 'เครื่องมือและ Framework ที่เราเลือกใช้ เพราะมั่นคงและเชื่อถือได้'}
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
              {isEN ? 'Concrete project types we deliver for clients in this industry.' : 'ตัวอย่างงานที่เราทำให้ลูกค้าในอุตสาหกรรมนี้'}
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
              {isEN ? "We'd love to hear what you're building." : 'เล่าให้เราฟังได้ครับว่าคุณกำลังทำอะไรอยู่'}
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
