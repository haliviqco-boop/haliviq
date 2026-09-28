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

  const badge = isEN ? 'Industry / Aerospace & Defense' : 'อุตสาหกรรม / การบินและอวกาศ & กลาโหม'
  const heroSubhead = isEN
    ? 'Secure software and mission-critical systems for aerospace and defense organizations.'
    : 'ซอฟต์แวร์ที่ปลอดภัยและระบบ Mission-Critical สำหรับองค์กรด้านการบินและอวกาศและกลาโหม'

  const challenges = isEN ? [
    { icon: 'ti-world-check', title: 'Export-Control Compliance Complexity', desc: 'Navigating ITAR, EAR, and multi-jurisdiction export-control regimes demands rigorous access segregation and audit trails, yet most engineering teams lack tooling built for this level of scrutiny.' },
    { icon: 'ti-shield-lock', title: 'Secure Multi-Domain Data Handling', desc: 'Classified, controlled unclassified, and commercial data must move across networks with different clearance levels, requiring encryption, isolation, and provenance tracking at every boundary.' },
    { icon: 'ti-tool', title: 'Legacy & Long-Lifecycle Systems Integration', desc: 'Platforms designed to operate for decades must integrate with modern APIs and cloud services without compromising certification, safety cases, or decades-old avionics interfaces.' },
    { icon: 'ti-barcode', title: 'Supply-Chain & Parts-Traceability Assurance', desc: 'Ensuring every component is genuine, sourced from approved vendors, and traceable through its full lifecycle is essential for airworthiness and counterfeit-parts prevention.' },
  ] : [
    { icon: 'ti-world-check', title: 'ความซับซ้อนของ Export-Control Compliance', desc: 'การปฏิบัติตามกฎ ITAR, EAR และข้อบังคับ Export-Control ในหลายเขตอำนาจศาล ต้องการการแบ่งแยกสิทธิ์เข้าถึงและ Audit Trail ที่รัดกุม แต่ทีมวิศวกรรมส่วนใหญ่ยังขาดเครื่องมือที่รองรับระดับความเข้มงวดนี้' },
    { icon: 'ti-shield-lock', title: 'การจัดการข้อมูล Multi-Domain อย่างปลอดภัย', desc: 'ข้อมูลระดับ Classified, Controlled Unclassified และเชิงพาณิชย์ต้องเคลื่อนย้ายผ่านเครือข่ายที่มีระดับการรักษาความลับต่างกัน ต้องการ Encryption การแยก Network และการติดตามที่มาของข้อมูลในทุกจุดเชื่อมต่อ' },
    { icon: 'ti-tool', title: 'การผสานระบบ Legacy และ Long-Lifecycle', desc: 'แพลตฟอร์มที่ออกแบบให้ใช้งานได้นานหลายสิบปี ต้องผสานกับ API และบริการ Cloud สมัยใหม่ โดยไม่กระทบต่อการรับรองมาตรฐาน Safety Case หรืออินเทอร์เฟซ Avionics เก่าแก่' },
    { icon: 'ti-barcode', title: 'การรับประกัน Supply-Chain & Parts-Traceability', desc: 'การตรวจสอบให้แน่ใจว่าทุกชิ้นส่วนเป็นของแท้ มาจากผู้ผลิตที่ได้รับอนุมัติ และตรวจสอบย้อนกลับได้ตลอดวงจรชีวิต เป็นสิ่งจำเป็นต่อความปลอดภัยในการบินและการป้องกันชิ้นส่วนปลอม' },
  ]

  const metrics = [
    { value: '$650B', label: isEN ? 'Global Aerospace & Defense Software Market by 2030' : 'ตลาดซอฟต์แวร์การบินและอวกาศ & กลาโหมทั่วโลกภายในปี 2030', source: 'MarketsandMarkets Aerospace & Defense Software Forecast, 2024' },
    { value: '12.4%', label: isEN ? 'CAGR in Defense IT Modernization Spending' : 'CAGR ของการลงทุนปรับปรุงระบบ IT ด้านกลาโหม', source: 'Gartner Defense IT Modernization Report, 2024' },
    { value: '68%', label: isEN ? 'Defense Contractors Investing in Digital-Twin Technology' : 'ผู้รับเหมาด้านกลาโหมที่ลงทุนในเทคโนโลยี Digital Twin', source: 'Deloitte Aerospace & Defense Industry Outlook, 2024' },
  ]

  const capabilities = isEN ? [
    { icon: 'ti-shield-lock', title: 'Secure Communications Platforms', desc: 'End-to-end encrypted communication systems with zero-trust architecture, built to meet the strict security requirements of defense and aerospace operations.' },
    { icon: 'ti-satellite', title: 'Satellite & Ground-Station Dashboards', desc: 'Real-time telemetry and command-and-control interfaces that give operators clear visibility into satellite health, orbit status, and ground-station performance.' },
    { icon: 'ti-truck-loading', title: 'Supply-Chain & Parts-Traceability Systems', desc: 'End-to-end tracking platforms that verify part authenticity, vendor approval, and full lifecycle provenance to prevent counterfeit components and ensure airworthiness.' },
    { icon: 'ti-cube-3d-sphere', title: 'Simulation & Digital-Twin Tooling', desc: 'High-fidelity digital-twin and simulation environments that model mission scenarios, systems behavior, and maintenance forecasts before real-world deployment.' },
    { icon: 'ti-world-check', title: 'Export-Control & Compliance Automation', desc: 'Automated classification, access control, and audit-trail systems that streamline ITAR/EAR compliance while reducing manual review burden.' },
    { icon: 'ti-tool', title: 'Mission-Critical Systems Modernization', desc: 'Incremental modernization of legacy avionics and command systems that preserves certification and safety cases while introducing modern interfaces and cloud connectivity.' },
  ] : [
    { icon: 'ti-shield-lock', title: 'Secure Communications Platforms', desc: 'ระบบสื่อสารแบบ End-to-end Encrypted ด้วยสถาปัตยกรรม Zero-trust ที่ออกแบบให้ตรงตามข้อกำหนดความปลอดภัยที่เข้มงวดของงานด้านกลาโหมและการบินและอวกาศ' },
    { icon: 'ti-satellite', title: 'Satellite & Ground-Station Dashboards', desc: 'อินเทอร์เฟซ Telemetry และ Command-and-control แบบ Real-time ที่ทำให้ผู้ปฏิบัติงานมองเห็นสถานะดาวเทียม วงโคจร และประสิทธิภาพของ Ground Station ได้อย่างชัดเจน' },
    { icon: 'ti-truck-loading', title: 'Supply-Chain & Parts-Traceability Systems', desc: 'แพลตฟอร์มติดตามแบบ End-to-end ที่ตรวจสอบความแท้ของชิ้นส่วน การอนุมัติผู้ผลิต และที่มาตลอดวงจรชีวิต เพื่อป้องกันชิ้นส่วนปลอมและรับประกันความปลอดภัยในการบิน' },
    { icon: 'ti-cube-3d-sphere', title: 'Simulation & Digital-Twin Tooling', desc: 'สภาพแวดล้อม Digital Twin และการจำลองความละเอียดสูงที่จำลองสถานการณ์ภารกิจ พฤติกรรมระบบ และคาดการณ์การบำรุงรักษาก่อนใช้งานจริง' },
    { icon: 'ti-world-check', title: 'Export-Control & Compliance Automation', desc: 'ระบบจัดหมวดหมู่ ควบคุมการเข้าถึง และ Audit Trail อัตโนมัติ ที่ทำให้การปฏิบัติตาม ITAR/EAR ราบรื่นขึ้นและลดภาระการตรวจสอบด้วยมือ' },
    { icon: 'ti-tool', title: 'Mission-Critical Systems Modernization', desc: 'การปรับปรุงระบบ Avionics และ Command System แบบ Legacy อย่างค่อยเป็นค่อยไป โดยรักษาการรับรองมาตรฐานและ Safety Case ไว้ พร้อมเพิ่มอินเทอร์เฟซสมัยใหม่และการเชื่อมต่อ Cloud' },
  ]

  const techStack = ['React', 'Node.js', 'Rust', 'Kubernetes', 'AWS GovCloud', 'PostgreSQL', 'gRPC', 'MQTT', 'Digital Twin', 'Machine Learning', 'Zero Trust', 'FIPS 140-2', 'DO-178C']

  const useCases = isEN ? [
    { no: '01', title: 'Secure Communications Platform', desc: 'End-to-end encrypted messaging and command system with zero-trust identity verification, built to withstand hostile network conditions and meet defense-grade security standards.' },
    { no: '02', title: 'Supply-Chain & Parts-Traceability System', desc: 'Full-lifecycle tracking platform that verifies part authenticity and vendor approval status, flags counterfeit-risk components, and generates audit-ready traceability records.' },
    { no: '03', title: 'Mission Simulation & Digital-Twin Platform', desc: 'High-fidelity digital-twin environment that models aircraft and satellite systems for mission rehearsal, maintenance forecasting, and operator training without real-world risk.' },
  ] : [
    { no: '01', title: 'Secure Communications Platform', desc: 'ระบบส่งข้อความและ Command แบบ End-to-end Encrypted พร้อมการยืนยันตัวตนแบบ Zero-trust ออกแบบให้ทนต่อสภาพเครือข่ายที่เป็นปฏิปักษ์และตรงตามมาตรฐานความปลอดภัยระดับกลาโหม' },
    { no: '02', title: 'Supply-Chain & Parts-Traceability System', desc: 'แพลตฟอร์มติดตามตลอดวงจรชีวิตที่ตรวจสอบความแท้ของชิ้นส่วนและสถานะการอนุมัติผู้ผลิต แจ้งเตือนความเสี่ยงชิ้นส่วนปลอม และสร้างบันทึก Traceability ที่พร้อมสำหรับการตรวจสอบ' },
    { no: '03', title: 'Mission Simulation & Digital-Twin Platform', desc: 'สภาพแวดล้อม Digital Twin ความละเอียดสูงที่จำลองระบบอากาศยานและดาวเทียมสำหรับซ้อมภารกิจ คาดการณ์การบำรุงรักษา และฝึกอบรมผู้ปฏิบัติงานโดยไม่มีความเสี่ยงในโลกจริง' },
  ]

  const heroVisual = (
    <div className="relative pb-10 pr-6">
      <div className="rounded-2xl overflow-hidden" style={{ background: '#141329', border: '1px solid rgba(123,110,246,0.35)' }}>
        <div className="flex items-center justify-between px-5 py-3.5" style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
          <span className="text-xs tracking-widest uppercase" style={{ color: 'rgba(255,255,255,0.85)', fontFamily: 'monospace' }}>{isEN ? 'Ground Station / Telemetry' : 'Ground Station / Telemetry'}</span>
          <div className="flex gap-1">
            <span className="w-3 h-[2px] rounded-full" style={{ background: 'rgba(255,255,255,0.3)' }} />
            <span className="w-3 h-[2px] rounded-full" style={{ background: 'rgba(255,255,255,0.3)' }} />
          </div>
        </div>
        <div className="p-5">
          <div className="aspect-[16/9] rounded-xl mb-4 flex items-center justify-center relative overflow-hidden" style={{ background: 'linear-gradient(135deg, rgba(123,110,246,0.18), rgba(83,195,215,0.1))' }}>
            <svg width="130" height="70" viewBox="0 0 130 70" fill="none" style={{ animation: 'iconFloat 3s ease-in-out infinite' }}>
              <circle cx="65" cy="35" r="26" stroke="var(--purple-light)" strokeWidth="1.5" fill="none" opacity="0.5" />
              <circle cx="65" cy="35" r="16" stroke="var(--purple-light)" strokeWidth="1.5" fill="none" opacity="0.7" />
              <circle cx="65" cy="35" r="3" fill="var(--lime)" />
              <path d="M65 9 L65 2 M65 68 L65 61 M39 35 L32 35 M98 35 L91 35" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M18 55 L28 40 L45 46 L58 30" stroke="var(--lime)" strokeWidth="2" strokeLinecap="round" fill="none" />
            </svg>
          </div>
          <div className="flex items-center gap-2 mb-1">
            <span className="w-1.5 h-1.5 rounded-full inline-block" style={{ background: 'var(--lime)', animation: 'blinkDot 1.6s ease-in-out infinite' }} />
            <p style={{ color: '#fff', fontWeight: 500, fontSize: '1.05rem' }}>{isEN ? 'SAT-07 · Nominal' : 'SAT-07 · ปกติ'}</p>
          </div>
          <p className="text-xs mb-3" style={{ color: 'rgba(255,255,255,0.5)' }}>{isEN ? 'Signal lock acquired.' : 'ล็อกสัญญาณสำเร็จ'}</p>
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
          <span className="text-[10px] tracking-widest uppercase" style={{ color: 'rgba(255,255,255,0.85)' }}>{isEN ? 'Mission Status' : 'สถานะภารกิจ'}</span>
          <i className="ti ti-shield-check" style={{ fontSize: 14, color: 'var(--lime)' }} aria-hidden="true" />
        </div>
        <div className="w-9 h-9 rounded-lg flex items-center justify-center mb-2" style={{ background: 'rgba(123,110,246,0.15)' }}>
          <i className="ti ti-satellite" style={{ fontSize: 16, color: 'var(--purple-light)' }} aria-hidden="true" />
        </div>
        <p className="text-xs mb-3" style={{ color: 'rgba(255,255,255,0.5)' }}>{isEN ? 'Clearance verified' : 'ยืนยันสิทธิ์แล้ว'}</p>
        <div
          className="rounded-lg text-center py-1.5 text-xs"
          style={{ background: 'linear-gradient(90deg, var(--purple), var(--purple-light))', color: '#fff' }}
        >
          {isEN ? 'Track Telemetry →' : 'ติดตาม Telemetry →'}
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
                  {isEN ? 'Aerospace &' : 'การบินและอวกาศ &'}<br />{isEN ? 'Defense' : 'กลาโหม'}
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
                  ? 'We help aerospace and defense organizations build secure communications platforms, satellite and ground-station dashboards, supply-chain traceability systems, and digital-twin simulation tools that meet the strictest security and compliance standards. Our solutions combine deep systems-engineering expertise with rigorous security practices to modernize mission-critical operations without compromising certification.'
                  : 'เราช่วยองค์กรด้านการบินและอวกาศและกลาโหม สร้าง Secure Communications Platform, Dashboard สำหรับดาวเทียมและ Ground Station, ระบบตรวจสอบย้อนกลับ Supply-Chain และเครื่องมือจำลอง Digital Twin ที่ตรงตามมาตรฐานความปลอดภัยและ Compliance ที่เข้มงวดที่สุด โซลูชันของเราผสมผสานความเชี่ยวชาญด้าน Systems Engineering เชิงลึกกับแนวปฏิบัติด้านความปลอดภัยที่รัดกุม เพื่อปรับปรุงระบบ Mission-Critical ให้ทันสมัยโดยไม่กระทบต่อการรับรองมาตรฐาน'}
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
