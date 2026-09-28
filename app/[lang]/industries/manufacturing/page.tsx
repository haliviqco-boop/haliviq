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

  const badge = isEN ? 'Industry / Manufacturing & Industrials' : 'อุตสาหกรรม / การผลิตและอุตสาหกรรม'
  const heroSubhead = isEN
    ? 'Digital transformation for modern manufacturing operations.'
    : 'การปรับสู่ดิจิทัลสำหรับการดำเนินงานการผลิตยุคใหม่'

  const challenges = isEN ? [
    { icon: 'ti-activity', title: 'Supply Chain Volatility', desc: 'Disruptions from geopolitical events, material shortages, and logistics bottlenecks demand real-time visibility and agile planning systems that adapt to changing conditions.' },
    { icon: 'ti-robot', title: 'Workforce & Automation Balance', desc: 'Integrating automation and robotics while managing workforce transitions requires careful planning, retraining programs, and human-machine collaboration strategies.' },
    { icon: 'ti-circle-check', title: 'Quality Assurance at Scale', desc: 'Maintaining consistent product quality across high-volume production lines demands automated inspection systems and statistical process controls that catch defects early.' },
    { icon: 'ti-leaf', title: 'Sustainability Requirements', desc: 'Regulatory mandates and customer expectations around carbon emissions, waste reduction, and circular manufacturing practices add new dimensions to operational planning.' },
  ] : [
    { icon: 'ti-activity', title: 'ความผันผวนของ Supply Chain', desc: 'การหยุดชะงักจากเหตุการณ์ทางภูมิรัฐศาสตร์ ขาดแคลนวัตถุดิบ และคอขวดด้าน Logistics ต้องการการมองเห็นแบบ Real-time และระบบวางแผนที่ยืดหยุ่นปรับตัวได้' },
    { icon: 'ti-robot', title: 'ความสมดุลระหว่างแรงงานและ Automation', desc: 'การผสาน Automation และหุ่นยนต์เข้ากับการดูแลการเปลี่ยนผ่านของแรงงาน ต้องการการวางแผนอย่างรอบคอบ โปรแกรม Retrain และกลยุทธ์ทำงานร่วมกันระหว่างคนกับเครื่องจักร' },
    { icon: 'ti-circle-check', title: 'การประกันคุณภาพในระดับ Scale', desc: 'การรักษาคุณภาพสินค้าให้สม่ำเสมอในสายการผลิตปริมาณสูง ต้องการระบบตรวจสอบอัตโนมัติและ Statistical Process Control ที่จับข้อบกพร่องได้ตั้งแต่เนิ่นๆ' },
    { icon: 'ti-leaf', title: 'ข้อกำหนดด้านความยั่งยืน', desc: 'ข้อบังคับด้านกฎระเบียบและความคาดหวังของลูกค้าเรื่องการปล่อยคาร์บอน ลดของเสีย และแนวปฏิบัติการผลิตแบบ Circular เพิ่มมิติใหม่ในการวางแผนปฏิบัติการ' },
  ]

  const metrics = [
    { value: '$525B', label: isEN ? 'Global Industrial IoT Market by 2028' : 'ขนาดตลาด Industrial IoT ทั่วโลกภายในปี 2028', source: 'Fortune Business Insights, 2024' },
    { value: '30%', label: isEN ? 'Maintenance Cost Reduction with Predictive Analytics' : 'ต้นทุนบำรุงรักษาที่ลดลงด้วย Predictive Analytics', source: 'Deloitte Industry 4.0 Report, 2024' },
    { value: '48%', label: isEN ? 'Manufacturers Implementing Digital Twin Technology' : 'ผู้ผลิตที่นำเทคโนโลยี Digital Twin มาใช้งาน', source: 'Gartner Manufacturing Survey, 2024' },
  ]

  const capabilities = isEN ? [
    { icon: 'ti-cpu', title: 'IoT Production Monitoring', desc: 'Real-time factory floor monitoring platforms that collect sensor data from equipment and production lines for operational visibility.' },
    { icon: 'ti-tool', title: 'Predictive Maintenance Systems', desc: 'Machine learning platforms that analyze equipment sensor data to predict failures and schedule maintenance before breakdowns occur.' },
    { icon: 'ti-cube', title: 'Supply Chain Visibility', desc: 'End-to-end supply chain tracking platforms providing real-time visibility into material flows, supplier performance, and logistics status.' },
    { icon: 'ti-shield-check', title: 'Quality Management Systems', desc: 'Automated inspection and quality control platforms using computer vision and statistical process control to ensure product consistency.' },
    { icon: 'ti-stack-2', title: 'Digital Twin Platforms', desc: 'Virtual replicas of physical assets and processes enabling simulation, optimization, and scenario planning without production disruption.' },
  ] : [
    { icon: 'ti-cpu', title: 'IoT Production Monitoring', desc: 'แพลตฟอร์มติดตามหน้างานโรงงานแบบ Real-time ที่เก็บข้อมูล Sensor จากเครื่องจักรและสายการผลิตเพื่อการมองเห็นการดำเนินงาน' },
    { icon: 'ti-tool', title: 'Predictive Maintenance Systems', desc: 'แพลตฟอร์ม Machine Learning ที่วิเคราะห์ข้อมูล Sensor ของเครื่องจักร เพื่อทำนายความเสียหายและวางแผนซ่อมบำรุงก่อนเครื่องหยุดทำงาน' },
    { icon: 'ti-cube', title: 'Supply Chain Visibility', desc: 'แพลตฟอร์มติดตาม Supply Chain แบบ End-to-end ให้การมองเห็นแบบ Real-time ทั้งการไหลของวัตถุดิบ ประสิทธิภาพ Supplier และสถานะ Logistics' },
    { icon: 'ti-shield-check', title: 'Quality Management Systems', desc: 'แพลตฟอร์มตรวจสอบและควบคุมคุณภาพอัตโนมัติ ด้วย Computer Vision และ Statistical Process Control เพื่อรักษาความสม่ำเสมอของสินค้า' },
    { icon: 'ti-stack-2', title: 'Digital Twin Platforms', desc: 'แบบจำลองเสมือนของสินทรัพย์และกระบวนการจริง ช่วยให้ Simulation, Optimization และวางแผน Scenario ได้โดยไม่กระทบการผลิตจริง' },
  ]

  const techStack = ['IoT', 'MQTT', 'AWS IoT Core', 'Time Series DBs', 'Machine Learning', 'Edge Computing', 'Digital Twin', 'React', 'Python', 'Kafka', 'SAP Integration']

  const useCases = isEN ? [
    { no: '01', title: 'Production Monitoring Dashboard', desc: 'Real-time factory floor monitoring platform displaying OEE metrics, production counts, downtime events, and quality indicators across all production lines.' },
    { no: '02', title: 'Predictive Quality Analytics', desc: 'Machine learning system analyzing production parameters to predict quality defects before they occur, reducing scrap rates and rework costs.' },
    { no: '03', title: 'Supply Chain Control Tower', desc: 'Centralized supply chain visibility platform with real-time tracking, supplier performance dashboards, risk alerts, and automated procurement workflows.' },
  ] : [
    { no: '01', title: 'Production Monitoring Dashboard', desc: 'แพลตฟอร์มติดตามหน้างานโรงงานแบบ Real-time แสดง OEE, จำนวนการผลิต, เหตุการณ์ Downtime และตัวชี้วัดคุณภาพในทุกสายการผลิต' },
    { no: '02', title: 'Predictive Quality Analytics', desc: 'ระบบ Machine Learning ที่วิเคราะห์พารามิเตอร์การผลิตเพื่อทำนายข้อบกพร่องด้านคุณภาพก่อนเกิดขึ้นจริง ลด Scrap Rate และต้นทุน Rework' },
    { no: '03', title: 'Supply Chain Control Tower', desc: 'แพลตฟอร์มมองเห็น Supply Chain แบบรวมศูนย์ พร้อมติดตาม Real-time, Dashboard ประสิทธิภาพ Supplier, แจ้งเตือนความเสี่ยง และ Workflow จัดซื้ออัตโนมัติ' },
  ]

  const heroVisual = (
    <div className="relative pb-10 pr-6">
      <div className="rounded-2xl overflow-hidden" style={{ background: '#141329', border: '1px solid rgba(123,110,246,0.35)' }}>
        <div className="flex items-center gap-2 px-5 py-3.5" style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
          <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#F87171' }} />
          <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#FBBF24' }} />
          <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#34D399' }} />
          <span className="ml-3 text-xs" style={{ color: 'rgba(255,255,255,0.85)', fontFamily: 'monospace' }}>line-04.oee</span>
        </div>
        <div className="px-6 py-8 relative">
          <div className="flex items-center justify-between mb-8">
            <span className="text-xs tracking-widest uppercase" style={{ color: 'rgba(255,255,255,0.5)' }}>{isEN ? 'Assembly Line' : 'สายการผลิต'}</span>
            <span
              className="px-3 py-1.5 rounded-lg text-xs"
              style={{ background: 'rgba(123,110,246,0.15)', color: 'var(--purple-light)', border: '1px solid rgba(255,255,255,0.08)' }}
            >
              {isEN ? 'Line 04' : 'สาย 04'}
            </span>
          </div>
          <div className="flex items-end gap-5 mb-6" style={{ height: 70 }}>
            {[0.5, 0.75, 0.95, 0.6, 0.85, 0.4].map((h, i) => (
              <div key={i} className="flex-1 rounded-t-md" style={{ height: `${h * 100}%`, background: 'linear-gradient(180deg, var(--lime), var(--purple-light))', animation: `barGrow ${1.6 + i * 0.15}s ease-in-out infinite` }} />
            ))}
          </div>
          <div className="flex items-center gap-2">
            <i className="ti ti-robot" style={{ fontSize: 20, color: 'var(--lime)', animation: 'iconFloat 2.4s ease-in-out infinite' }} aria-hidden="true" />
            {[0, 1, 2, 3].map((i) => (
              <div key={i} className="w-9 h-9 rounded-md flex items-center justify-center" style={{ background: 'rgba(83,195,215,0.1)', border: '1px solid rgba(83,195,215,0.3)' }}>
                <i className="ti ti-cube" style={{ fontSize: 15, color: 'var(--lime)' }} aria-hidden="true" />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div
        className="absolute -bottom-2 -right-2 w-[190px] rounded-2xl p-4"
        style={{ background: '#1B1A33', border: '1px solid rgba(255,255,255,0.1)', boxShadow: '0 20px 50px -10px rgba(0,0,0,0.6)', animation: 'badgeFloat 3.4s ease-in-out infinite' }}
      >
        <div className="flex items-center justify-between mb-2.5">
          <span className="text-[10px] tracking-widest uppercase" style={{ color: 'rgba(255,255,255,0.85)' }}>OEE</span>
          <i className="ti ti-trending-up" style={{ fontSize: 14, color: 'var(--lime)' }} aria-hidden="true" />
        </div>
        <div className="leading-none mb-1" style={{ color: '#fff', fontSize: '1.6rem', fontWeight: 500 }}>87.4%</div>
        <div className="flex items-center gap-1.5 text-xs" style={{ color: 'var(--lime)' }}>
          <span className="w-1.5 h-1.5 rounded-full inline-block" style={{ background: 'var(--lime)', animation: 'blinkDot 1.6s ease-in-out infinite' }} />
          {isEN ? 'Running' : 'กำลังทำงาน'}
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
                <h1 className="t-display mb-6 leading-normal" style={{ fontSize: 'clamp(2.8rem,6vw,5.5rem)', background: 'linear-gradient(135deg, var(--purple-light) 0%, #53C3D7 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                  {isEN ? 'Manufacturing &' : 'การผลิตและ'}<br />{isEN ? 'Industrials' : 'อุตสาหกรรม'}
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
                  ? 'We build IoT production monitoring platforms, predictive maintenance systems, supply chain visibility tools, and digital twin environments for manufacturers of all sizes. Our teams integrate with industrial protocols like OPC-UA and MQTT to connect the factory floor to the boardroom with real-time dashboards and actionable analytics.'
                  : 'เราสร้างแพลตฟอร์มติดตามการผลิตด้วย IoT, ระบบ Predictive Maintenance, เครื่องมือ Supply Chain Visibility และสภาพแวดล้อม Digital Twin สำหรับผู้ผลิตทุกขนาด ทีมของเราเชื่อมต่อกับโปรโตคอลอุตสาหกรรมอย่าง OPC-UA และ MQTT เพื่อเชื่อมหน้างานโรงงานเข้ากับห้องประชุมผู้บริหารด้วย Dashboard แบบ Real-time และ Analytics ที่นำไปใช้ได้จริง'}
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
