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

  const badge = isEN ? 'Industry / Transportation & Logistics' : 'อุตสาหกรรม / คมนาคมและโลจิสติกส์'
  const heroSubhead = isEN
    ? 'Optimize supply chains and transportation networks.'
    : 'เพิ่มประสิทธิภาพห่วงโซ่อุปทานและเครือข่ายการขนส่ง'

  const challenges = isEN ? [
    { icon: 'ti-truck-delivery', title: 'Last-Mile Delivery Cost Pressure', desc: 'Last-mile delivery accounts for the largest share of total shipping cost, and rising fuel, labor, and customer expectations for free or cheap delivery squeeze margins on every order.' },
    { icon: 'ti-radar', title: 'Real-Time Visibility Gaps', desc: 'Shippers, carriers, and customers all need live visibility into where a shipment is and when it will arrive, but fragmented tracking systems leave blind spots across multi-leg journeys.' },
    { icon: 'ti-building-warehouse', title: 'Warehouse Capacity & Labor Volatility', desc: 'Seasonal demand swings, labor shortages, and rising storage costs make it difficult to plan warehouse capacity and staffing without sophisticated forecasting and automation.' },
    { icon: 'ti-plug-connected', title: 'Fragmented Multi-Carrier Integrations', desc: 'Coordinating shipments across dozens of carriers, each with its own API, tracking format, and SLA, creates brittle integrations that are costly to maintain and slow to extend.' },
  ] : [
    { icon: 'ti-truck-delivery', title: 'แรงกดดันด้านต้นทุน Last-Mile Delivery', desc: 'Last-Mile Delivery คิดเป็นสัดส่วนต้นทุนขนส่งที่สูงที่สุด และค่าน้ำมัน ค่าแรงที่เพิ่มขึ้น รวมถึงความคาดหวังของลูกค้าต่อการจัดส่งฟรีหรือราคาถูก บีบอัตรากำไรในทุกออเดอร์' },
    { icon: 'ti-radar', title: 'ช่องว่างด้าน Real-Time Visibility', desc: 'ทั้งผู้ส่ง ผู้ขนส่ง และลูกค้า ต้องการมองเห็นตำแหน่งของสินค้าและเวลาที่จะถึงแบบ Real-time แต่ระบบติดตามที่กระจัดกระจายทำให้เกิดจุดบอดตลอดเส้นทางที่มีหลายช่วงต่อ' },
    { icon: 'ti-building-warehouse', title: 'ความผันผวนของ Warehouse Capacity และแรงงาน', desc: 'ความต้องการที่ผันผวนตามฤดูกาล การขาดแคลนแรงงาน และต้นทุนการจัดเก็บที่สูงขึ้น ทำให้การวางแผน Capacity คลังสินค้าและอัตรากำลังคนทำได้ยากหากไม่มีระบบพยากรณ์และ Automation ที่ดี' },
    { icon: 'ti-plug-connected', title: 'การเชื่อมต่อ Multi-Carrier ที่กระจัดกระจาย', desc: 'การประสานงานขนส่งกับผู้ให้บริการหลายสิบราย ซึ่งแต่ละรายมี API รูปแบบ Tracking และ SLA ของตัวเอง สร้างการเชื่อมต่อที่เปราะบาง ดูแลรักษายาก และขยายต่อได้ช้า' },
  ]

  const metrics = [
    { value: '$47.9B', label: isEN ? 'Global Supply Chain Tech Market by 2032' : 'ตลาด Supply Chain Tech ทั่วโลกภายในปี 2032', source: 'Fortune Business Insights Supply Chain Management Software Report, 2024' },
    { value: '25%', label: isEN ? 'Reduction in Last-Mile Delivery Costs Through Route Optimization' : 'ลดต้นทุน Last-Mile Delivery ด้วย Route Optimization', source: 'McKinsey Future of Logistics, 2024' },
    { value: '20%', label: isEN ? 'Higher Fleet Utilization With Telematics-Driven Dispatch' : 'เพิ่ม Fleet Utilization ด้วยการจ่ายงานที่ขับเคลื่อนด้วย Telematics', source: 'Gartner Supply Chain Technology Survey, 2024' },
  ]

  const capabilities = isEN ? [
    { icon: 'ti-map-pin', title: 'Real-Time Shipment Tracking', desc: 'Live tracking platforms that unify GPS, carrier, and IoT sensor data into a single view of every shipment from origin to final delivery.' },
    { icon: 'ti-route', title: 'Route Optimization Systems', desc: 'Algorithmic route planning engines that minimize distance, fuel, and delivery time while respecting time windows, vehicle capacity, and driver constraints.' },
    { icon: 'ti-building-warehouse', title: 'Warehouse Management Systems', desc: 'End-to-end WMS platforms covering inbound receiving, put-away, picking, packing, and outbound dispatch across single or multi-site warehouse networks.' },
    { icon: 'ti-gauge', title: 'Fleet Telematics Dashboards', desc: 'Real-time fleet monitoring dashboards that surface vehicle location, driver behavior, fuel consumption, and maintenance alerts from onboard telematics devices.' },
    { icon: 'ti-plug-connected', title: 'Multi-Carrier Integration Platforms', desc: 'Unified integration layers that normalize rates, labels, and tracking events across dozens of carriers behind a single, consistent API.' },
    { icon: 'ti-trending-up', title: 'Demand & Capacity Forecasting', desc: 'Machine learning forecasting tools that predict shipment volumes and warehouse capacity needs to guide staffing, procurement, and network planning.' },
  ] : [
    { icon: 'ti-map-pin', title: 'Real-Time Shipment Tracking', desc: 'แพลตฟอร์มติดตามแบบ Real-time ที่รวมข้อมูล GPS, ผู้ขนส่ง และ IoT Sensor เป็นมุมมองเดียวของทุกการจัดส่งตั้งแต่ต้นทางจนถึงปลายทาง' },
    { icon: 'ti-route', title: 'Route Optimization Systems', desc: 'ระบบวางแผนเส้นทางด้วยอัลกอริทึมที่ลดระยะทาง เชื้อเพลิง และเวลาจัดส่ง โดยคำนึงถึง Time Window ความจุรถ และข้อจำกัดของคนขับ' },
    { icon: 'ti-building-warehouse', title: 'Warehouse Management Systems', desc: 'แพลตฟอร์ม WMS แบบครบวงจร ครอบคลุมการรับสินค้าเข้า การจัดเก็บ การหยิบ การบรรจุ และการจ่ายออก ทั้งคลังเดียวและเครือข่ายหลายคลัง' },
    { icon: 'ti-gauge', title: 'Fleet Telematics Dashboards', desc: 'Dashboard ติดตามยานพาหนะแบบ Real-time ที่แสดงตำแหน่งรถ พฤติกรรมคนขับ การใช้เชื้อเพลิง และการแจ้งเตือนซ่อมบำรุงจากอุปกรณ์ Telematics บนรถ' },
    { icon: 'ti-plug-connected', title: 'Multi-Carrier Integration Platforms', desc: 'ชั้นการเชื่อมต่อแบบรวมศูนย์ที่ทำให้อัตราค่าขนส่ง ใบปะหน้า และ Tracking Event จากผู้ขนส่งหลายสิบรายเป็นมาตรฐานเดียวผ่าน API เดียว' },
    { icon: 'ti-trending-up', title: 'Demand & Capacity Forecasting', desc: 'เครื่องมือพยากรณ์ด้วย Machine Learning ที่คาดการณ์ปริมาณการจัดส่งและความต้องการ Capacity คลังสินค้า เพื่อวางแผนกำลังคน การจัดซื้อ และเครือข่าย' },
  ]

  const techStack = ['React', 'Node.js', 'GPS/Telematics', 'Google Maps API', 'Kafka', 'PostgreSQL', 'Redis', 'Machine Learning', 'AWS', 'GraphQL', 'IoT', 'Elasticsearch', 'Docker']

  const useCases = isEN ? [
    { no: '01', title: 'Real-Time Shipment Tracking Platform', desc: 'Unified tracking application that ingests GPS, carrier, and IoT sensor feeds to give shippers and customers live ETAs across every leg of a shipment.' },
    { no: '02', title: 'Route Optimization System', desc: 'Dynamic route planning engine that assigns stops to vehicles and sequences deliveries to minimize distance and fuel while meeting delivery time windows.' },
    { no: '03', title: 'Warehouse Management Platform', desc: 'Multi-site WMS that orchestrates receiving, put-away, picking, and dispatch, with real-time inventory accuracy and labor productivity analytics.' },
  ] : [
    { no: '01', title: 'Real-Time Shipment Tracking Platform', desc: 'แอปพลิเคชันติดตามแบบรวมศูนย์ที่ดึงข้อมูล GPS, ผู้ขนส่ง และ IoT Sensor เพื่อให้ผู้ส่งและลูกค้าเห็น ETA แบบ Real-time ในทุกช่วงของการจัดส่ง' },
    { no: '02', title: 'Route Optimization System', desc: 'ระบบวางแผนเส้นทางแบบ Dynamic ที่จัดสรรจุดส่งให้กับรถแต่ละคันและจัดลำดับการส่งเพื่อลดระยะทางและเชื้อเพลิง พร้อมตรง Time Window ที่กำหนด' },
    { no: '03', title: 'Warehouse Management Platform', desc: 'ระบบ WMS สำหรับหลายคลังที่จัดการการรับสินค้า การจัดเก็บ การหยิบ และการจ่ายออก พร้อมความแม่นยำของสต๊อกแบบ Real-time และ Analytics ด้านผลิตภาพแรงงาน' },
  ]

  const heroVisual = (
    <div className="relative pb-10 pr-6">
      <div className="rounded-2xl overflow-hidden" style={{ background: '#141329', border: '1px solid rgba(123,110,246,0.35)' }}>
        <div className="flex items-center justify-between px-5 py-3.5" style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
          <span className="text-xs tracking-widest uppercase" style={{ color: 'rgba(255,255,255,0.85)', fontFamily: 'monospace' }}>{isEN ? 'Fleet / Tracking' : 'Fleet / Tracking'}</span>
          <div className="flex gap-1">
            <span className="w-3 h-[2px] rounded-full" style={{ background: 'rgba(255,255,255,0.3)' }} />
            <span className="w-3 h-[2px] rounded-full" style={{ background: 'rgba(255,255,255,0.3)' }} />
          </div>
        </div>
        <div className="p-5">
          <div className="aspect-[16/9] rounded-xl mb-4 flex items-center justify-center relative overflow-hidden" style={{ background: 'linear-gradient(135deg, rgba(123,110,246,0.18), rgba(83,195,215,0.1))' }}>
            <svg width="140" height="70" viewBox="0 0 140 70" fill="none">
              <path d="M6 50 Q30 50 34 34 Q40 14 58 14 Q76 14 82 34 Q88 50 112 50 Q126 50 134 40" stroke="var(--purple-light)" strokeWidth="2" strokeDasharray="6 5" fill="none" style={{ animation: 'dashFlow 2.4s linear infinite' }} />
              <circle cx="6" cy="50" r="4" fill="var(--lime)" />
              <circle cx="134" cy="40" r="4" fill="var(--purple-light)" style={{ animation: 'ringPulse 2s ease-in-out infinite' }} />
              <circle cx="82" cy="34" r="3.5" fill="#fff" style={{ animation: 'iconFloat 3s ease-in-out infinite' }} />
            </svg>
          </div>
          <p className="mb-1" style={{ color: '#fff', fontWeight: 500, fontSize: '1.05rem' }}>{isEN ? 'Shipment #HLQ-2291' : 'Shipment #HLQ-2291'}</p>
          <p className="text-xs mb-3" style={{ color: 'rgba(255,255,255,0.5)' }}>{isEN ? 'ETA 14:20 · On schedule' : 'ETA 14:20 · ตรงตามกำหนด'}</p>
          <div className="w-full h-1.5 rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.1)' }}>
            <div className="h-full rounded-full" style={{ background: 'linear-gradient(90deg, var(--purple-light), var(--lime))', width: '68%', animation: 'barGrow 1.4s ease-out' }} />
          </div>
        </div>
      </div>

      <div
        className="absolute -bottom-2 -right-2 w-[180px] rounded-2xl p-4"
        style={{ background: '#1B1A33', border: '1px solid rgba(255,255,255,0.1)', boxShadow: '0 20px 50px -10px rgba(0,0,0,0.6)', animation: 'badgeFloat 3.4s ease-in-out infinite' }}
      >
        <div className="flex items-center justify-between mb-2.5">
          <span className="text-[10px] tracking-widest uppercase" style={{ color: 'rgba(255,255,255,0.85)' }}>{isEN ? 'Fleet Status' : 'สถานะยานพาหนะ'}</span>
          <span className="w-1.5 h-1.5 rounded-full inline-block" style={{ background: 'var(--lime)', animation: 'blinkDot 1.6s ease-in-out infinite' }} />
        </div>
        <div className="w-9 h-9 rounded-lg flex items-center justify-center mb-2" style={{ background: 'rgba(123,110,246,0.15)' }}>
          <i className="ti ti-truck-delivery" style={{ fontSize: 16, color: 'var(--purple-light)' }} aria-hidden="true" />
        </div>
        <p className="text-xs mb-3" style={{ color: 'rgba(255,255,255,0.5)' }}>{isEN ? '128 vehicles active' : 'รถ 128 คันกำลังวิ่งงาน'}</p>
        <div
          className="rounded-lg text-center py-1.5 text-xs"
          style={{ background: 'linear-gradient(90deg, var(--purple), var(--purple-light))', color: '#fff' }}
        >
          {isEN ? 'View Map →' : 'ดูแผนที่ →'}
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
                <h1 className="t-display mb-6 leading-none" style={{ color: '#fff', fontSize: 'clamp(2.8rem,6vw,5.5rem)' }}>
                  {isEN ? 'Transportation &' : 'คมนาคมและ'}<br />{isEN ? 'Logistics' : 'โลจิสติกส์'}
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
                  ? 'We help transportation and logistics companies build real-time tracking platforms, route optimization systems, warehouse management software, and fleet telematics dashboards that cut cost and improve service reliability. Our solutions integrate cleanly with existing carrier and ERP systems, scale across peak seasons, and turn fragmented operational data into decisions your team can act on immediately.'
                  : 'เราช่วยบริษัทขนส่งและโลจิสติกส์สร้างแพลตฟอร์มติดตามแบบ Real-time, ระบบ Route Optimization, ซอฟต์แวร์ Warehouse Management และ Dashboard Fleet Telematics ที่ลดต้นทุนและเพิ่มความน่าเชื่อถือของบริการ โซลูชันของเราเชื่อมต่อกับระบบผู้ขนส่งและ ERP เดิมได้อย่างราบรื่น Scale ได้ในช่วงพีคของฤดูกาล และเปลี่ยนข้อมูลปฏิบัติการที่กระจัดกระจายให้กลายเป็นการตัดสินใจที่ทีมของคุณนำไปใช้ได้ทันที'}
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
            <h2 className="t-display mb-5 leading-tight" style={{ color: '#fff', fontSize: 'clamp(2.5rem,5.5vw,4.2rem)' }}>
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
