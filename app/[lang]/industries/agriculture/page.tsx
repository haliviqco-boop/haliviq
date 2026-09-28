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

  const badge = isEN ? 'Industry / Agriculture' : 'อุตสาหกรรม / เกษตรกรรม'
  const heroSubhead = isEN
    ? 'AgTech solutions for modern farming and food production.'
    : 'โซลูชัน AgTech สำหรับการทำเกษตรและการผลิตอาหารยุคใหม่'

  const challenges = isEN ? [
    { icon: 'ti-cloud-storm', title: 'Unpredictable Weather & Climate Risk', desc: 'Shifting rainfall patterns, droughts, and extreme weather events make yield planning increasingly difficult, and most farms still lack the localized, data-driven forecasting needed to manage this risk.' },
    { icon: 'ti-database', title: 'Fragmented Farm Data', desc: 'Sensor readings, weather feeds, machinery logs, and financial records typically live in disconnected tools, leaving farm managers without a single source of truth to guide day-to-day decisions.' },
    { icon: 'ti-users-group', title: 'Labor Shortages & Rising Input Costs', desc: 'A shrinking agricultural workforce combined with volatile prices for seed, fertilizer, and fuel is squeezing margins, pushing operations to automate wherever possible.' },
    { icon: 'ti-barcode', title: 'Traceability Demands from Buyers & Regulators', desc: 'Retailers, export markets, and regulators increasingly require farm-to-table traceability and Compliance documentation, which manual, paper-based record keeping cannot reliably provide.' },
  ] : [
    { icon: 'ti-cloud-storm', title: 'ความเสี่ยงด้านสภาพอากาศที่คาดเดายาก', desc: 'รูปแบบฝนที่เปลี่ยนไป ภัยแล้ง และสภาพอากาศสุดขั้ว ทำให้การวางแผนผลผลิตยากขึ้นเรื่อยๆ ขณะที่ฟาร์มส่วนใหญ่ยังขาดการพยากรณ์แบบ Data-driven เฉพาะพื้นที่เพื่อบริหารความเสี่ยงนี้' },
    { icon: 'ti-database', title: 'ข้อมูลฟาร์มที่กระจัดกระจาย', desc: 'ข้อมูลจากเซนเซอร์ สภาพอากาศ เครื่องจักร และการเงิน มักอยู่คนละระบบที่ไม่เชื่อมต่อกัน ทำให้ผู้จัดการฟาร์มไม่มีข้อมูลชุดเดียวที่เชื่อถือได้สำหรับตัดสินใจในแต่ละวัน' },
    { icon: 'ti-users-group', title: 'แรงงานขาดแคลนและต้นทุนวัตถุดิบที่สูงขึ้น', desc: 'แรงงานภาคเกษตรที่ลดลง ผนวกกับราคาเมล็ดพันธุ์ ปุ๋ย และเชื้อเพลิงที่ผันผวน กำลังบีบกำไรของผู้ประกอบการ ผลักดันให้ต้องหันมาใช้ระบบอัตโนมัติมากขึ้น' },
    { icon: 'ti-barcode', title: 'ความต้องการด้าน Traceability จากผู้ซื้อและหน่วยงานกำกับดูแล', desc: 'ผู้ค้าปลีก ตลาดส่งออก และหน่วยงานกำกับดูแล ต้องการเอกสาร Traceability และ Compliance ตั้งแต่ฟาร์มถึงโต๊ะอาหารมากขึ้นเรื่อยๆ ซึ่งการจดบันทึกด้วยกระดาษไม่สามารถตอบโจทย์นี้ได้อย่างน่าเชื่อถือ' },
  ]

  const metrics = [
    { value: '$41.5B', label: isEN ? 'Global Precision Agriculture Market by 2030' : 'มูลค่าตลาด Precision Agriculture ทั่วโลกภายในปี 2030', source: 'MarketsandMarkets Precision Agriculture Report, 2024' },
    { value: '68%', label: isEN ? 'Of Large Farms Adopting IoT & Data-Driven Tools' : 'ของฟาร์มขนาดใหญ่ที่นำ IoT และเครื่องมือ Data-Driven มาใช้', source: 'Deloitte Future of Agriculture Survey, 2024' },
    { value: '25%', label: isEN ? 'Higher Yields with Data-Driven Farming Practices' : 'ผลผลิตที่เพิ่มขึ้นด้วยแนวทางการทำเกษตรแบบ Data-Driven', source: 'FAO Digital Agriculture Report, 2024' },
  ]

  const capabilities = isEN ? [
    { icon: 'ti-plug-connected', title: 'IoT Soil & Crop Monitoring Platforms', desc: 'Sensor networks and dashboards that track soil moisture, nutrient levels, and crop health in real time, alerting farmers before problems affect yield.' },
    { icon: 'ti-tractor', title: 'Farm Management Systems', desc: 'End-to-end platforms for planning, scheduling, and tracking field operations, equipment, and labor across single or multi-site farming operations.' },
    { icon: 'ti-barcode', title: 'Produce Traceability & Supply Chain Tools', desc: 'Blockchain and QR-based traceability systems that record every step from planting to shelf, satisfying buyer and regulatory Compliance requirements.' },
    { icon: 'ti-chart-line', title: 'AI Yield-Prediction Models', desc: 'Machine learning models trained on satellite imagery, weather data, and historical yields to forecast harvest volumes and optimize planning decisions.' },
    { icon: 'ti-building-store', title: 'Farmer-Buyer Marketplace Platforms', desc: 'Digital marketplaces that connect farmers directly with buyers, processors, and exporters, with pricing, logistics, and payment built in.' },
    { icon: 'ti-droplet', title: 'Irrigation & Resource Optimization Systems', desc: 'Automated irrigation control and resource-planning platforms that reduce water and energy waste while keeping crops at optimal growing conditions.' },
  ] : [
    { icon: 'ti-plug-connected', title: 'IoT Soil & Crop Monitoring Platforms', desc: 'เครือข่ายเซนเซอร์และ Dashboard ที่ติดตามความชื้นในดิน ระดับสารอาหาร และสุขภาพพืชแบบ Real-time พร้อมแจ้งเตือนก่อนเกิดปัญหาที่กระทบผลผลิต' },
    { icon: 'ti-tractor', title: 'Farm Management Systems', desc: 'แพลตฟอร์มครบวงจรสำหรับวางแผน จัดตาราง และติดตามการปฏิบัติงานในแปลง เครื่องจักร และแรงงาน ทั้งฟาร์มเดี่ยวและหลายพื้นที่' },
    { icon: 'ti-barcode', title: 'Produce Traceability & Supply Chain Tools', desc: 'ระบบ Traceability ด้วย Blockchain และ QR Code ที่บันทึกทุกขั้นตอนตั้งแต่ปลูกจนถึงวางขาย ตอบโจทย์ Compliance ของผู้ซื้อและหน่วยงานกำกับดูแล' },
    { icon: 'ti-chart-line', title: 'AI Yield-Prediction Models', desc: 'โมเดล Machine Learning ที่เทรนจากภาพถ่ายดาวเทียม ข้อมูลสภาพอากาศ และผลผลิตในอดีต เพื่อพยากรณ์ปริมาณการเก็บเกี่ยวและวางแผนได้แม่นยำขึ้น' },
    { icon: 'ti-building-store', title: 'Farmer-Buyer Marketplace Platforms', desc: 'แพลตฟอร์ม Marketplace ที่เชื่อมเกษตรกรเข้ากับผู้ซื้อ โรงงานแปรรูป และผู้ส่งออกโดยตรง พร้อมระบบราคา Logistics และการชำระเงินในตัว' },
    { icon: 'ti-droplet', title: 'Irrigation & Resource Optimization Systems', desc: 'ระบบควบคุมการให้น้ำอัตโนมัติและวางแผนทรัพยากร ที่ลดการสูญเสียน้ำและพลังงาน พร้อมรักษาสภาพการเติบโตของพืชให้เหมาะสมที่สุด' },
  ]

  const techStack = ['IoT', 'LoRaWAN', 'React', 'React Native', 'Python', 'Machine Learning', 'Satellite Imagery', 'Computer Vision', 'AWS', 'PostgreSQL', 'GraphQL', 'Time Series DBs']

  const useCases = isEN ? [
    { no: '01', title: 'IoT Crop-Monitoring Platform', desc: 'Field-deployed sensor network with a central dashboard tracking soil moisture, temperature, and nutrient levels, sending real-time alerts to farm managers.' },
    { no: '02', title: 'Produce Traceability System', desc: 'QR-code and blockchain-backed traceability platform that records every stage of the supply chain from planting to retail shelf for Compliance and buyer trust.' },
    { no: '03', title: 'Yield-Prediction Analytics Tool', desc: 'Machine learning platform combining satellite imagery, weather data, and historical harvest records to forecast yields and guide planting decisions.' },
  ] : [
    { no: '01', title: 'IoT Crop-Monitoring Platform', desc: 'เครือข่ายเซนเซอร์ในแปลงพร้อม Dashboard กลางที่ติดตามความชื้นในดิน อุณหภูมิ และระดับสารอาหาร พร้อมแจ้งเตือน Real-time ให้ผู้จัดการฟาร์ม' },
    { no: '02', title: 'Produce Traceability System', desc: 'แพลตฟอร์ม Traceability ด้วย QR Code และ Blockchain ที่บันทึกทุกขั้นตอนของ Supply Chain ตั้งแต่ปลูกจนถึงชั้นวางขาย เพื่อ Compliance และสร้างความเชื่อมั่นให้ผู้ซื้อ' },
    { no: '03', title: 'Yield-Prediction Analytics Tool', desc: 'แพลตฟอร์ม Machine Learning ที่รวมภาพถ่ายดาวเทียม ข้อมูลสภาพอากาศ และประวัติการเก็บเกี่ยว เพื่อพยากรณ์ผลผลิตและช่วยตัดสินใจในการเพาะปลูก' },
  ]

  const heroVisual = (
    <div className="relative pb-10 pr-6">
      <div className="rounded-2xl overflow-hidden" style={{ background: '#141329', border: '1px solid rgba(123,110,246,0.35)' }}>
        <div className="flex items-center justify-between px-5 py-3.5" style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
          <span className="text-xs tracking-widest uppercase" style={{ color: 'rgba(255,255,255,0.85)', fontFamily: 'monospace' }}>{isEN ? 'Field / Sensor-01' : 'Field / Sensor-01'}</span>
          <div className="flex gap-1">
            <span className="w-3 h-[2px] rounded-full" style={{ background: 'rgba(255,255,255,0.3)' }} />
            <span className="w-3 h-[2px] rounded-full" style={{ background: 'rgba(255,255,255,0.3)' }} />
          </div>
        </div>
        <div className="p-5">
          <div className="aspect-[16/9] rounded-xl mb-4 flex items-center justify-center relative overflow-hidden" style={{ background: 'linear-gradient(135deg, rgba(123,110,246,0.18), rgba(83,195,215,0.1))' }}>
            <svg width="130" height="70" viewBox="0 0 130 70" fill="none" style={{ animation: 'iconFloat 3s ease-in-out infinite' }}>
              <path d="M8 50 L28 30 L48 44 L70 18 L92 34 L122 12" stroke="var(--lime)" strokeWidth="2" strokeLinecap="round" fill="none" />
              <circle cx="28" cy="30" r="3" fill="var(--purple-light)" />
              <circle cx="70" cy="18" r="3" fill="var(--purple-light)" />
              <circle cx="122" cy="12" r="3" fill="var(--lime)" />
            </svg>
          </div>
          <p className="mb-1" style={{ color: '#fff', fontWeight: 500, fontSize: '1.05rem' }}>{isEN ? 'Soil Moisture' : 'ความชื้นในดิน'}</p>
          <p className="text-xs mb-3" style={{ color: 'rgba(255,255,255,0.5)' }}>{isEN ? '38% · Optimal range' : '38% · อยู่ในเกณฑ์เหมาะสม'}</p>
          <div className="w-full h-1.5 rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.1)' }}>
            <div className="h-full rounded-full" style={{ width: '62%', background: 'linear-gradient(90deg, var(--purple-light), var(--lime))', animation: 'barGrow 1.6s ease-out' }} />
          </div>
        </div>
      </div>

      <div
        className="absolute -bottom-2 -right-2 w-[180px] rounded-2xl p-4"
        style={{ background: '#1B1A33', border: '1px solid rgba(255,255,255,0.1)', boxShadow: '0 20px 50px -10px rgba(0,0,0,0.6)', animation: 'badgeFloat 3.4s ease-in-out infinite' }}
      >
        <div className="flex items-center justify-between mb-2.5">
          <span className="text-[10px] tracking-widest uppercase" style={{ color: 'rgba(255,255,255,0.85)' }}>{isEN ? 'Crop Health' : 'สุขภาพพืช'}</span>
          <i className="ti ti-circle-check" style={{ fontSize: 14, color: 'var(--lime)' }} aria-hidden="true" />
        </div>
        <div className="w-9 h-9 rounded-lg flex items-center justify-center mb-2" style={{ background: 'rgba(123,110,246,0.15)' }}>
          <i className="ti ti-leaf" style={{ fontSize: 16, color: 'var(--purple-light)' }} aria-hidden="true" />
        </div>
        <p className="text-xs mb-3" style={{ color: 'rgba(255,255,255,0.5)' }}>{isEN ? 'Field 12 · 4.2 ha' : 'แปลง 12 · 4.2 ไร่'}</p>
        <div
          className="rounded-lg text-center py-1.5 text-xs"
          style={{ background: 'linear-gradient(90deg, var(--purple), var(--purple-light))', color: '#fff' }}
        >
          {isEN ? 'View Report →' : 'ดูรายงาน →'}
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
                  {isEN ? 'Agriculture &' : 'เกษตรกรรม &'}<br />{isEN ? 'AgTech' : 'AgTech'}
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
                  ? 'We help farms, cooperatives, and agribusinesses build IoT monitoring platforms, farm management systems, traceability tools, and AI-driven yield-prediction models that turn field data into better decisions. Our solutions run reliably in low-connectivity rural environments and combine deep sensor and data engineering expertise to help our clients grow more with less waste.'
                  : 'เราช่วยฟาร์ม สหกรณ์ และผู้ประกอบการเกษตร สร้างแพลตฟอร์ม IoT Monitoring, ระบบ Farm Management, เครื่องมือ Traceability และโมเดล AI พยากรณ์ผลผลิต ที่เปลี่ยนข้อมูลจากแปลงเกษตรให้เป็นการตัดสินใจที่ดีขึ้น โซลูชันของเราทำงานได้อย่างเสถียรแม้ในพื้นที่ชนบทที่การเชื่อมต่ออินเทอร์เน็ตจำกัด ผสมผสานความเชี่ยวชาญด้าน Sensor และ Data Engineering เพื่อช่วยลูกค้าเราเพิ่มผลผลิตโดยลดของเสียให้น้อยที่สุด'}
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
