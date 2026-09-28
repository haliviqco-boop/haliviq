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

  const badge = isEN ? 'Industry / Telecommunications' : 'อุตสาหกรรม / โทรคมนาคม'
  const heroSubhead = isEN
    ? 'Next-generation solutions for telecom providers.'
    : 'โซลูชันยุคใหม่สำหรับผู้ให้บริการโทรคมนาคม'

  const challenges = isEN ? [
    { icon: 'ti-server-2', title: 'Legacy OSS/BSS Complexity', desc: 'Decades-old operations and billing support systems are tightly coupled and poorly documented, making every new feature or integration a slow, high-risk undertaking.' },
    { icon: 'ti-trending-down', title: 'Rising Customer Churn Pressure', desc: 'Subscribers switch providers more easily than ever, and without predictive insight and fast, personalized support, carriers lose customers before they can intervene.' },
    { icon: 'ti-antenna-bars-5', title: 'Network Monitoring at Massive Scale', desc: 'Tracking the health of millions of cell sites, routers, and endpoints in real time requires observability infrastructure most legacy NOC tooling was never built to handle.' },
    { icon: 'ti-router', title: '5G/IoT Rollout Integration Demands', desc: 'Rolling out 5G and onboarding millions of IoT devices means integrating new radio, edge, and connectivity-management platforms into systems that were designed for a single-purpose voice and data network.' },
  ] : [
    { icon: 'ti-server-2', title: 'ความซับซ้อนของ Legacy OSS/BSS', desc: 'ระบบ Operations และ Billing Support ที่ใช้งานมานานหลายสิบปีมีความผูกพันกันแน่นและเอกสารไม่ครบถ้วน ทำให้ทุกฟีเจอร์ใหม่หรือการ Integration เป็นงานที่ช้าและเสี่ยงสูง' },
    { icon: 'ti-trending-down', title: 'แรงกดดันด้าน Customer Churn ที่เพิ่มขึ้น', desc: 'ลูกค้าเปลี่ยนผู้ให้บริการได้ง่ายกว่าที่เคย หากไม่มี Insight เชิงพยากรณ์และการซัพพอร์ตที่รวดเร็วและ Personalize ผู้ให้บริการจะสูญเสียลูกค้าก่อนที่จะแก้ไขได้ทัน' },
    { icon: 'ti-antenna-bars-5', title: 'Network Monitoring ในระดับ Massive Scale', desc: 'การติดตามสถานะของเสาสัญญาณ เราเตอร์ และอุปกรณ์ปลายทางนับล้านชิ้นแบบ Real-time ต้องการโครงสร้าง Observability ที่เครื่องมือ NOC แบบเดิมไม่เคยถูกออกแบบมารองรับ' },
    { icon: 'ti-router', title: 'ความต้องการ Integration ของ 5G/IoT', desc: 'การเปิดให้บริการ 5G และเชื่อมต่ออุปกรณ์ IoT นับล้านชิ้น หมายถึงการ Integrate แพลตฟอร์ม Radio, Edge และ Connectivity Management ใหม่เข้ากับระบบที่ออกแบบมาเพื่อเครือข่ายเสียงและข้อมูลแบบเดิม' },
  ]

  const metrics = [
    { value: '$1.2T', label: isEN ? 'Global Telecom Software Market by 2030' : 'มูลค่าตลาดซอฟต์แวร์โทรคมนาคมทั่วโลกภายในปี 2030', source: 'MarketsandMarkets Telecom Software Report, 2024' },
    { value: '25%', label: isEN ? 'Reduction in Customer Churn with AI-Powered Support' : 'Customer Churn ที่ลดลงด้วยการซัพพอร์ตขับเคลื่อนด้วย AI', source: 'Deloitte Telecom AI Study, 2024' },
    { value: '18B', label: isEN ? 'IoT Connections Worldwide by 2027' : 'การเชื่อมต่อ IoT ทั่วโลกภายในปี 2027', source: 'GSMA Mobile Economy Report, 2024' },
  ]

  const capabilities = isEN ? [
    { icon: 'ti-device-mobile', title: 'Self-Service Customer Apps', desc: 'Mobile and web self-care platforms that let subscribers manage plans, top-ups, and support tickets without ever calling a call center.' },
    { icon: 'ti-chart-dots', title: 'Network Monitoring Dashboards', desc: 'Real-time observability platforms that visualize network health, latency, and outages across thousands of cell sites and endpoints.' },
    { icon: 'ti-file-invoice', title: 'Billing & OSS/BSS Integration', desc: 'Modern integration layers that connect legacy billing and operations systems to new digital products without a costly rip-and-replace.' },
    { icon: 'ti-message-chatbot', title: 'AI Support Chatbots', desc: 'Conversational AI assistants that resolve common billing, plan, and troubleshooting requests instantly, in both Thai and English.' },
    { icon: 'ti-antenna', title: '5G/IoT Connectivity Tooling', desc: 'Device provisioning, connectivity management, and edge-orchestration platforms built for large-scale 5G and IoT deployments.' },
    { icon: 'ti-trending-up', title: 'Customer Churn Prediction Systems', desc: 'Machine learning models that flag at-risk subscribers early and trigger targeted retention offers before they cancel.' },
  ] : [
    { icon: 'ti-device-mobile', title: 'Self-Service Customer Apps', desc: 'แพลตฟอร์ม Self-care บนมือถือและเว็บที่ให้ลูกค้าจัดการแพ็กเกจ เติมเงิน และแจ้งปัญหาได้เองโดยไม่ต้องโทรหา Call Center' },
    { icon: 'ti-chart-dots', title: 'Network Monitoring Dashboards', desc: 'แพลตฟอร์ม Observability แบบ Real-time ที่แสดงสถานะเครือข่าย Latency และเหตุการณ์ขัดข้องในเสาสัญญาณและอุปกรณ์ปลายทางนับพัน' },
    { icon: 'ti-file-invoice', title: 'Billing & OSS/BSS Integration', desc: 'เลเยอร์ Integration สมัยใหม่ที่เชื่อมระบบ Billing และ Operations แบบเดิมเข้ากับผลิตภัณฑ์ดิจิทัลใหม่ โดยไม่ต้อง Rip-and-Replace ที่มีต้นทุนสูง' },
    { icon: 'ti-message-chatbot', title: 'AI Support Chatbots', desc: 'ผู้ช่วย Conversational AI ที่แก้ปัญหาการเรียกเก็บเงิน แพ็กเกจ และปัญหาการใช้งานทั่วไปได้ทันที ทั้งภาษาไทยและอังกฤษ' },
    { icon: 'ti-antenna', title: '5G/IoT Connectivity Tooling', desc: 'แพลตฟอร์ม Device Provisioning, Connectivity Management และ Edge Orchestration ที่ออกแบบมาสำหรับการติดตั้ง 5G และ IoT ขนาดใหญ่' },
    { icon: 'ti-trending-up', title: 'Customer Churn Prediction Systems', desc: 'โมเดล Machine Learning ที่ระบุลูกค้ากลุ่มเสี่ยงตั้งแต่เนิ่นๆ และกระตุ้นข้อเสนอ Retention แบบเจาะจงก่อนที่ลูกค้าจะยกเลิก' },
  ]

  const techStack = ['React', 'React Native', 'Node.js', 'Kafka', 'Kubernetes', 'AWS', 'PostgreSQL', 'GraphQL', 'Machine Learning', '5G', 'IoT', 'Time Series DBs', 'Redis']

  const useCases = isEN ? [
    { no: '01', title: 'Self-Service Customer App', desc: 'Mobile self-care app that lets subscribers view usage, manage plans, top up, and get AI-assisted support without a single call center interaction.' },
    { no: '02', title: 'Network Monitoring Dashboard', desc: 'Unified observability platform aggregating signal, latency, and outage data across thousands of cell sites into a single real-time operations view.' },
    { no: '03', title: 'Churn Prediction System', desc: 'Machine learning platform that scores subscriber churn risk daily and automatically triggers targeted retention offers for at-risk accounts.' },
  ] : [
    { no: '01', title: 'Self-Service Customer App', desc: 'แอปมือถือ Self-care ที่ให้ลูกค้าดูการใช้งาน จัดการแพ็กเกจ เติมเงิน และรับการซัพพอร์ตด้วย AI โดยไม่ต้องโทรหา Call Center เลย' },
    { no: '02', title: 'Network Monitoring Dashboard', desc: 'แพลตฟอร์ม Observability แบบรวมศูนย์ที่รวมข้อมูลสัญญาณ Latency และเหตุการณ์ขัดข้องจากเสาสัญญาณนับพันไว้ในมุมมอง Operations แบบ Real-time เดียว' },
    { no: '03', title: 'Churn Prediction System', desc: 'แพลตฟอร์ม Machine Learning ที่คำนวณความเสี่ยง Churn ของลูกค้าทุกวัน และกระตุ้นข้อเสนอ Retention แบบเจาะจงให้กับบัญชีกลุ่มเสี่ยงโดยอัตโนมัติ' },
  ]

  const heroVisual = (
    <div className="relative pb-10 pr-6">
      <div className="rounded-2xl overflow-hidden" style={{ background: '#141329', border: '1px solid rgba(123,110,246,0.35)' }}>
        <div className="flex items-center justify-between px-5 py-3.5" style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
          <span className="text-xs tracking-widest uppercase" style={{ color: 'rgba(255,255,255,0.85)', fontFamily: 'monospace' }}>{isEN ? 'Network / Status' : 'Network / Status'}</span>
          <div className="flex gap-1">
            <span className="w-3 h-[2px] rounded-full" style={{ background: 'rgba(255,255,255,0.3)' }} />
            <span className="w-3 h-[2px] rounded-full" style={{ background: 'rgba(255,255,255,0.3)' }} />
          </div>
        </div>
        <div className="p-5">
          <div className="aspect-[16/9] rounded-xl mb-4 flex items-center justify-center relative overflow-hidden" style={{ background: 'linear-gradient(135deg, rgba(123,110,246,0.18), rgba(83,195,215,0.1))' }}>
            <svg width="130" height="70" viewBox="0 0 130 70" fill="none" style={{ animation: 'iconFloat 3s ease-in-out infinite' }}>
              <path d="M65 8 L65 62" stroke="var(--purple-light)" strokeWidth="2" />
              <path d="M65 8 L46 22" stroke="var(--purple-light)" strokeWidth="2" strokeLinecap="round" />
              <path d="M65 8 L84 22" stroke="var(--purple-light)" strokeWidth="2" strokeLinecap="round" />
              <circle cx="65" cy="8" r="4" fill="var(--lime)" />
              <rect x="30" y="46" width="8" height="16" rx="1" fill="rgba(255,255,255,0.25)" />
              <rect x="44" y="38" width="8" height="24" rx="1" fill="rgba(255,255,255,0.35)" />
              <rect x="58" y="30" width="8" height="32" rx="1" fill="var(--lime)" />
              <rect x="72" y="38" width="8" height="24" rx="1" fill="rgba(255,255,255,0.35)" />
              <rect x="86" y="46" width="8" height="16" rx="1" fill="rgba(255,255,255,0.25)" />
            </svg>
          </div>
          <p className="mb-1" style={{ color: '#fff', fontWeight: 500, fontSize: '1.05rem' }}>{isEN ? 'National Network' : 'เครือข่ายทั่วประเทศ'}</p>
          <p className="text-xs mb-3" style={{ color: 'rgba(255,255,255,0.5)' }}>{isEN ? '5G core · 12,480 sites online' : '5G Core · เสาสัญญาณ 12,480 แห่ง'}</p>
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
          <span className="text-[10px] tracking-widest uppercase" style={{ color: 'rgba(255,255,255,0.85)' }}>{isEN ? 'Uptime' : 'Uptime'}</span>
          <i className="ti ti-circle-check" style={{ fontSize: 14, color: 'var(--lime)' }} aria-hidden="true" />
        </div>
        <div className="w-9 h-9 rounded-lg flex items-center justify-center mb-2" style={{ background: 'rgba(123,110,246,0.15)' }}>
          <i className="ti ti-antenna" style={{ fontSize: 16, color: 'var(--purple-light)' }} aria-hidden="true" />
        </div>
        <p className="text-xs mb-3" style={{ color: 'rgba(255,255,255,0.5)' }}>{isEN ? '99.98% this month' : '99.98% เดือนนี้'}</p>
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
                <h1 className="t-display mb-6 leading-none" style={{ fontSize: 'clamp(2.25rem,4.5vw,3.5rem)', background: 'linear-gradient(135deg, #fff 0%, #53C3D7 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                  {isEN ? 'Telecom-' : 'โทร'}<br />{isEN ? 'munications' : 'คมนาคม'}
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
                  ? 'We help telecom providers build self-service customer apps, network monitoring dashboards, modern OSS/BSS integration layers, and AI-driven support and churn-prediction systems that keep subscribers connected and loyal. Our solutions scale to millions of devices and combine deep systems engineering with real-time data infrastructure to modernize legacy networks without disrupting live service.'
                  : 'เราช่วยผู้ให้บริการโทรคมนาคมสร้าง Self-Service Customer App, Network Monitoring Dashboard, เลเยอร์ Integration OSS/BSS สมัยใหม่ และระบบซัพพอร์ตกับ Churn Prediction ที่ขับเคลื่อนด้วย AI เพื่อรักษาความพึงพอใจของลูกค้า โซลูชันของเรา Scale ได้ถึงระดับอุปกรณ์หลายล้านชิ้น ผสมผสานวิศวกรรมระบบเชิงลึกกับโครงสร้างข้อมูล Real-time เพื่อปรับปรุงเครือข่าย Legacy โดยไม่กระทบการให้บริการจริง'}
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
