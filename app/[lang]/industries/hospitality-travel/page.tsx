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

  const badge = isEN ? 'Industry / Hospitality & Travel' : 'อุตสาหกรรม / การบริการและการท่องเที่ยว'
  const heroSubhead = isEN
    ? 'Enhance guest experiences with innovative technology solutions.'
    : 'ยกระดับประสบการณ์ผู้เข้าพักด้วยเทคโนโลยีที่ล้ำสมัย'

  const challenges = isEN ? [
    { icon: 'ti-star', title: 'Elevated Guest Expectations', desc: 'Modern travelers expect seamless digital experiences from booking through checkout, including mobile check-in, personalised recommendations, and instant service requests.' },
    { icon: 'ti-refresh', title: 'Operational Inefficiency', desc: 'Fragmented property management, booking, and guest communication systems create operational silos that increase costs and degrade the guest experience across touchpoints.' },
    { icon: 'ti-calendar', title: 'Seasonal Demand Volatility', desc: 'Dramatic demand fluctuations require dynamic pricing, flexible staffing, and revenue optimisation systems that adapt in real time to maximise occupancy and profitability.' },
    { icon: 'ti-user', title: 'Persistent Staff Shortages', desc: 'The hospitality industry faces chronic labour shortages, driving the need for automation and self-service technologies that maintain service quality with fewer team members.' },
  ] : [
    { icon: 'ti-star', title: 'ความคาดหวังของผู้เข้าพักที่สูงขึ้น', desc: 'นักเดินทางยุคใหม่คาดหวังประสบการณ์ดิจิทัลที่ราบรื่นตั้งแต่จองจนถึง Checkout รวมถึง Mobile Check-in คำแนะนำที่ Personalize และคำขอบริการแบบทันที' },
    { icon: 'ti-refresh', title: 'ความไม่มีประสิทธิภาพในการดำเนินงาน', desc: 'ระบบจัดการทรัพย์สิน การจอง และการสื่อสารกับผู้เข้าพักที่แยกส่วนกัน ทำให้เกิด Silo ในการทำงาน เพิ่มต้นทุน และลดคุณภาพประสบการณ์ในทุกจุดสัมผัส' },
    { icon: 'ti-calendar', title: 'ความผันผวนของ Demand ตามฤดูกาล', desc: 'ความต้องการที่ผันผวนมากต้องการ Dynamic Pricing กำลังคนที่ยืดหยุ่น และระบบ Revenue Optimization ที่ปรับตัวแบบ Real-time เพื่อเพิ่ม Occupancy และกำไรสูงสุด' },
    { icon: 'ti-user', title: 'ปัญหาขาดแคลนพนักงานเรื้อรัง', desc: 'อุตสาหกรรม Hospitality เผชิญปัญหาขาดแคลนแรงงานเรื้อรัง ผลักดันความต้องการ Automation และเทคโนโลยี Self-service ที่รักษาคุณภาพบริการด้วยทีมที่เล็กลง' },
  ]

  const metrics = [
    { value: '$24.3B', label: isEN ? 'Global Hospitality Technology Market by 2028' : 'ขนาดตลาดเทคโนโลยี Hospitality ทั่วโลกภายในปี 2028', source: 'Mordor Intelligence, 2024' },
    { value: '72%', label: isEN ? 'Hotel Bookings Made on Mobile Devices' : 'การจองโรงแรมที่ทำผ่านอุปกรณ์มือถือ', source: 'Phocuswright Travel Research, 2024' },
    { value: '23%', label: isEN ? 'Revenue Uplift from Personalized Guest Experiences' : 'รายได้ที่เพิ่มขึ้นจากประสบการณ์ผู้เข้าพักที่ Personalize', source: 'Deloitte Hospitality Insights, 2024' },
  ]

  const capabilities = isEN ? [
    { icon: 'ti-calendar-event', title: 'Booking Engine Platforms', desc: 'Direct booking systems with real-time availability, dynamic pricing, package configuration, and seamless payment processing.' },
    { icon: 'ti-building', title: 'Property Management Systems', desc: 'Centralised PMS platforms managing reservations, housekeeping, maintenance, guest profiles, and multi-property operations.' },
    { icon: 'ti-bell', title: 'Guest Engagement Tools', desc: 'Mobile apps and digital concierge platforms for personalised recommendations, service requests, and real-time guest communication.' },
    { icon: 'ti-trending-up', title: 'Revenue Optimization Systems', desc: 'AI-driven pricing and revenue management platforms that maximise occupancy and RevPAR through dynamic rate optimisation.' },
    { icon: 'ti-wifi', title: 'Contactless Experience Solutions', desc: 'Mobile check-in, digital key, and contactless payment systems that streamline the guest journey while reducing operational overhead.' },
  ] : [
    { icon: 'ti-calendar-event', title: 'Booking Engine Platforms', desc: 'ระบบ Direct Booking พร้อมความพร้อมของห้องแบบ Real-time, Dynamic Pricing, การตั้งค่า Package และการชำระเงินที่ราบรื่น' },
    { icon: 'ti-building', title: 'Property Management Systems', desc: 'แพลตฟอร์ม PMS แบบรวมศูนย์ จัดการการจอง แม่บ้าน ซ่อมบำรุง โปรไฟล์ผู้เข้าพัก และการดำเนินงานหลายทรัพย์สิน' },
    { icon: 'ti-bell', title: 'Guest Engagement Tools', desc: 'แอปมือถือและแพลตฟอร์ม Digital Concierge สำหรับคำแนะนำที่ Personalize คำขอบริการ และสื่อสารกับผู้เข้าพักแบบ Real-time' },
    { icon: 'ti-trending-up', title: 'Revenue Optimization Systems', desc: 'แพลตฟอร์มตั้งราคาและจัดการรายได้ด้วย AI ที่เพิ่ม Occupancy และ RevPAR สูงสุดผ่านการปรับราคาแบบ Dynamic' },
    { icon: 'ti-wifi', title: 'Contactless Experience Solutions', desc: 'Mobile Check-in, Digital Key และระบบชำระเงินแบบ Contactless ที่ทำให้เส้นทางผู้เข้าพักราบรื่นขึ้นและลดภาระงานปฏิบัติการ' },
  ]

  const techStack = ['React', 'React Native', 'Node.js', 'Redis', 'Elasticsearch', 'AWS', 'Stripe', 'Google Maps API', 'IoT', 'Machine Learning']

  const useCases = isEN ? [
    { no: '01', title: 'Direct Booking Engine', desc: 'Conversion-optimized booking platform with real-time availability, dynamic pricing, package upsells, promotional codes, and integrated payment processing.' },
    { no: '02', title: 'Guest Experience Mobile App', desc: 'White-label mobile application for guests with mobile check-in, digital key, service requests, local recommendations, and in-app messaging with staff.' },
    { no: '03', title: 'Revenue Management System', desc: 'AI-driven revenue optimization platform that analyzes market demand, competitor rates, and booking patterns to recommend dynamic pricing strategies.' },
  ] : [
    { no: '01', title: 'Direct Booking Engine', desc: 'แพลตฟอร์ม Booking ที่ปรับให้ Conversion สูงสุด พร้อมความพร้อมของห้องแบบ Real-time, Dynamic Pricing, Package Upsell, โค้ดส่วนลด และระบบชำระเงินครบวงจร' },
    { no: '02', title: 'Guest Experience Mobile App', desc: 'แอปมือถือแบบ White-label สำหรับผู้เข้าพัก พร้อม Mobile Check-in, Digital Key, คำขอบริการ คำแนะนำสถานที่ และแชทกับพนักงานในแอป' },
    { no: '03', title: 'Revenue Management System', desc: 'แพลตฟอร์ม Revenue Optimization ด้วย AI ที่วิเคราะห์ Demand ตลาด ราคาคู่แข่ง และรูปแบบการจอง เพื่อแนะนำกลยุทธ์ตั้งราคาแบบ Dynamic' },
  ]

  const heroVisual = (
    <div className="relative pb-10 pr-6">
      <div className="rounded-2xl overflow-hidden" style={{ background: '#141329', border: '1px solid rgba(123,110,246,0.35)' }}>
        <div className="flex items-center gap-2 px-5 py-3.5" style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
          <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#F87171' }} />
          <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#FBBF24' }} />
          <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#34D399' }} />
          <span className="ml-3 text-xs" style={{ color: 'rgba(255,255,255,0.85)', fontFamily: 'monospace' }}>guest.key</span>
        </div>
        <div className="px-6 py-10 flex items-center justify-center gap-6">
          <div className="w-[150px] rounded-2xl p-5" style={{ background: 'rgba(123,110,246,0.12)', border: '1px solid rgba(255,255,255,0.08)' }}>
            <div className="w-8 h-[2px] rounded-full mb-4" style={{ background: 'var(--lime)' }} />
            <p className="text-xs mb-1" style={{ color: 'rgba(255,255,255,0.5)' }}>{isEN ? 'Welcome back' : 'ยินดีต้อนรับ'}</p>
            <p className="mb-5" style={{ color: '#fff', fontWeight: 500, fontSize: '1.1rem' }}>{isEN ? 'Room 208' : 'ห้อง 208'}</p>
            <div className="w-10 h-10 rounded-full flex items-center justify-center mb-5" style={{ background: 'rgba(123,110,246,0.25)' }}>
              <i className="ti ti-key" style={{ fontSize: 18, color: 'var(--purple-light)' }} aria-hidden="true" />
            </div>
            <p className="text-[10px] tracking-wide" style={{ color: 'rgba(255,255,255,0.4)' }}>{isEN ? 'Tap to unlock' : 'แตะเพื่อปลดล็อก'}</p>
          </div>
          <div className="relative w-[110px] h-[180px] rounded-lg" style={{ border: '2px solid var(--lime)', background: 'rgba(83,195,215,0.05)' }}>
            <span className="absolute top-3 left-0 right-0 text-center" style={{ color: '#fff', fontSize: '1.5rem', fontWeight: 600 }}>208</span>
            <i className="ti ti-wifi" style={{ position: 'absolute', left: 8, top: 60, fontSize: 22, color: 'var(--lime)', animation: 'iconFloat 2.2s ease-in-out infinite' }} aria-hidden="true" />
            <i className="ti ti-lock-open" style={{ position: 'absolute', right: 14, bottom: 20, fontSize: 22, color: 'var(--lime)' }} aria-hidden="true" />
          </div>
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
                  {isEN ? 'Hospitality' : 'การบริการและ'}<br />{isEN ? '& Travel' : 'การท่องเที่ยว'}
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
                  ? 'We help hotels, resorts, and travel companies build direct booking engines, property management systems, guest experience apps, and revenue optimization platforms. Our solutions handle seasonal demand fluctuations and multi-property complexity while delighting guests with intuitive, seamless digital experiences.'
                  : 'เราช่วยโรงแรม รีสอร์ท และบริษัทท่องเที่ยว สร้าง Direct Booking Engine, Property Management System, แอปประสบการณ์ผู้เข้าพัก และแพลตฟอร์ม Revenue Optimization โซลูชันของเรารองรับความผันผวนตามฤดูกาลและความซับซ้อนของหลายทรัพย์สิน พร้อมมอบประสบการณ์ดิจิทัลที่ใช้งานง่ายและราบรื่นให้ผู้เข้าพัก'}
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
