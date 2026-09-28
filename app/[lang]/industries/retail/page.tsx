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

  const badge = isEN ? 'Industry / Retail & E-commerce' : 'อุตสาหกรรม / ค้าปลีก & อีคอมเมิร์ซ'
  const heroSubhead = isEN
    ? 'Build engaging shopping experiences that drive conversions.'
    : 'สร้างประสบการณ์ช้อปปิ้งที่น่าดึงดูดและเพิ่ม Conversion'

  const challenges = isEN ? [
    { icon: 'ti-affiliate', title: 'Omnichannel Complexity', desc: 'Delivering a seamless experience across online, mobile, in-store, and marketplace channels requires unified inventory, pricing, and customer data that most retailers struggle to achieve.' },
    { icon: 'ti-user-check', title: 'Customer Retention Pressure', desc: 'Acquiring customers is increasingly expensive, making retention and lifetime value optimization critical, yet most retailers lack the personalization and engagement tools to succeed.' },
    { icon: 'ti-atom-2', title: 'Inventory Management Complexity', desc: 'Managing inventory across multiple warehouses, stores, and fulfillment channels while avoiding stockouts and overstock requires sophisticated demand forecasting and allocation systems.' },
    { icon: 'ti-truck', title: 'Last-Mile Delivery Expectations', desc: 'Consumers expect same-day or next-day delivery at minimal cost, putting enormous pressure on fulfillment operations and logistics partnerships to deliver faster and cheaper.' },
  ] : [
    { icon: 'ti-affiliate', title: 'ความซับซ้อนของ Omnichannel', desc: 'การมอบประสบการณ์ที่ราบรื่นทั้งออนไลน์ มือถือ หน้าร้าน และ Marketplace ต้องการข้อมูลสต๊อก ราคา และลูกค้าที่รวมเป็นหนึ่งเดียว ซึ่งผู้ค้าปลีกส่วนใหญ่ทำได้ยาก' },
    { icon: 'ti-user-check', title: 'แรงกดดันด้าน Customer Retention', desc: 'การหาลูกค้าใหม่มีต้นทุนสูงขึ้นเรื่อยๆ ทำให้การรักษาลูกค้าและเพิ่ม Lifetime Value เป็นเรื่องสำคัญ แต่ผู้ค้าปลีกส่วนใหญ่ยังขาดเครื่องมือ Personalization และ Engagement ที่เพียงพอ' },
    { icon: 'ti-atom-2', title: 'ความซับซ้อนของ Inventory Management', desc: 'การจัดการสต๊อกในหลายคลังสินค้า หน้าร้าน และช่องทาง Fulfillment โดยหลีกเลี่ยง Stockout และ Overstock ต้องการระบบพยากรณ์ Demand และจัดสรรที่ซับซ้อน' },
    { icon: 'ti-truck', title: 'ความคาดหวังด้าน Last-Mile Delivery', desc: 'ผู้บริโภคคาดหวังการจัดส่งแบบ Same-day หรือ Next-day ด้วยต้นทุนต่ำที่สุด สร้างแรงกดดันมหาศาลต่อการดำเนินงานและพันธมิตร Logistics ให้ส่งเร็วขึ้นและถูกลง' },
  ]

  const metrics = [
    { value: '$8.1T', label: isEN ? 'Global E-commerce Sales by 2026' : 'ยอดขาย E-commerce ทั่วโลกภายในปี 2026', source: 'eMarketer Global E-commerce Forecast, 2024' },
    { value: '3.5x', label: isEN ? 'Higher Conversion Rate with Personalized Shopping Experiences' : 'Conversion Rate ที่สูงขึ้นด้วยประสบการณ์ช้อปปิ้งที่ Personalize', source: 'McKinsey Retail Personalization, 2024' },
    { value: '30%', label: isEN ? 'Higher Customer Lifetime Value for Omnichannel Shoppers' : 'Customer Lifetime Value ที่สูงขึ้นสำหรับลูกค้า Omnichannel', source: 'Harvard Business Review Retail Study, 2024' },
  ]

  const capabilities = isEN ? [
    { icon: 'ti-shopping-cart', title: 'Headless Commerce Platforms', desc: 'API-first e-commerce architectures that decouple frontend experiences from backend commerce logic for maximum flexibility and speed.' },
    { icon: 'ti-package', title: 'Inventory Management Systems', desc: 'Real-time inventory tracking and allocation platforms that optimize stock levels across warehouses, stores, and fulfillment centers.' },
    { icon: 'ti-sparkles', title: 'Personalization Engines', desc: 'AI-driven product recommendation and content personalization platforms that increase conversion rates and average order values.' },
    { icon: 'ti-affiliate', title: 'Omnichannel Integration', desc: 'Unified commerce platforms that synchronize inventory, pricing, promotions, and customer data across all sales channels.' },
    { icon: 'ti-gift', title: 'Loyalty Program Platforms', desc: 'Flexible loyalty and rewards platforms with points management, tier systems, personalized offers, and behavioral analytics.' },
    { icon: 'ti-building-store', title: 'Multi-Vendor Marketplaces', desc: 'Marketplace platforms with seller onboarding, catalog and inventory management, order splitting, payouts, and admin operations.' },
  ] : [
    { icon: 'ti-shopping-cart', title: 'Headless Commerce Platforms', desc: 'สถาปัตยกรรม E-commerce แบบ API-first ที่แยก Frontend ออกจาก Backend Commerce Logic เพื่อความยืดหยุ่นและความเร็วสูงสุด' },
    { icon: 'ti-package', title: 'Inventory Management Systems', desc: 'แพลตฟอร์มติดตามและจัดสรรสต๊อกแบบ Real-time ที่เพิ่มประสิทธิภาพระดับสต๊อกในคลัง หน้าร้าน และศูนย์ Fulfillment' },
    { icon: 'ti-sparkles', title: 'Personalization Engines', desc: 'แพลตฟอร์มแนะนำสินค้าและ Personalize เนื้อหาด้วย AI ที่เพิ่ม Conversion Rate และมูลค่าการสั่งซื้อเฉลี่ย' },
    { icon: 'ti-affiliate', title: 'Omnichannel Integration', desc: 'แพลตฟอร์ม Commerce แบบรวมศูนย์ที่ Sync สต๊อก ราคา โปรโมชัน และข้อมูลลูกค้าในทุกช่องทางขาย' },
    { icon: 'ti-gift', title: 'Loyalty Program Platforms', desc: 'แพลตฟอร์ม Loyalty และ Rewards ที่ยืดหยุ่น พร้อมจัดการคะแนน ระบบ Tier ข้อเสนอ Personalize และ Behavioral Analytics' },
    { icon: 'ti-building-store', title: 'Multi-Vendor Marketplaces', desc: 'แพลตฟอร์ม Marketplace พร้อม Seller Onboarding, จัดการ Catalog และสต๊อก, แบ่งคำสั่งซื้อ, การจ่ายเงิน และงาน Admin' },
  ]

  const techStack = ['React', 'Next.js', 'Node.js', 'Medusa.js', 'Shopify APIs', 'Stripe', 'Algolia', 'Redis', 'PostgreSQL', 'Machine Learning', 'AWS', 'Elasticsearch', 'GraphQL']

  const useCases = isEN ? [
    { no: '01', title: 'Headless Commerce Platform', desc: 'API-first commerce backend powering multiple storefronts with shared catalog, inventory, pricing, and checkout logic across web, mobile, and marketplace channels.' },
    { no: '02', title: 'Personalized Shopping Experience', desc: 'AI-driven storefront that adapts product displays, search results, promotions, and navigation based on individual customer behavior and preference signals.' },
    { no: '03', title: 'Inventory Optimization System', desc: 'Demand forecasting and inventory allocation platform that balances stock across locations, minimizes carrying costs, and prevents stockouts during peak demand.' },
  ] : [
    { no: '01', title: 'Headless Commerce Platform', desc: 'Backend Commerce แบบ API-first ที่ขับเคลื่อนหลาย Storefront ด้วย Catalog สต๊อก ราคา และ Checkout Logic ร่วมกันทั้งเว็บ มือถือ และ Marketplace' },
    { no: '02', title: 'Personalized Shopping Experience', desc: 'Storefront ที่ขับเคลื่อนด้วย AI ปรับการแสดงสินค้า ผลการค้นหา โปรโมชัน และการนำทางตามพฤติกรรมและความชอบของลูกค้าแต่ละคน' },
    { no: '03', title: 'Inventory Optimization System', desc: 'แพลตฟอร์มพยากรณ์ Demand และจัดสรรสต๊อกที่สมดุลระหว่างสาขา ลดต้นทุนการถือครองสินค้า และป้องกัน Stockout ช่วง Demand พุ่งสูง' },
  ]

  const heroVisual = (
    <div className="relative pb-10 pr-6">
      <div className="rounded-2xl overflow-hidden" style={{ background: '#141329', border: '1px solid rgba(123,110,246,0.35)' }}>
        <div className="flex items-center justify-between px-5 py-3.5" style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
          <span className="text-xs tracking-widest uppercase" style={{ color: 'rgba(255,255,255,0.85)', fontFamily: 'monospace' }}>{isEN ? 'Studio / Shop' : 'Studio / Shop'}</span>
          <div className="flex gap-1">
            <span className="w-3 h-[2px] rounded-full" style={{ background: 'rgba(255,255,255,0.3)' }} />
            <span className="w-3 h-[2px] rounded-full" style={{ background: 'rgba(255,255,255,0.3)' }} />
          </div>
        </div>
        <div className="p-5">
          <div className="aspect-[16/9] rounded-xl mb-4 flex items-center justify-center relative overflow-hidden" style={{ background: 'linear-gradient(135deg, rgba(123,110,246,0.18), rgba(83,195,215,0.1))' }}>
            <svg width="130" height="70" viewBox="0 0 130 70" fill="none" style={{ animation: 'iconFloat 3s ease-in-out infinite' }}>
              <path d="M8 45 Q20 20 45 25 L100 20 Q118 22 122 40 L122 50 Q120 58 108 58 L20 58 Q8 56 8 45 Z" stroke="var(--purple-light)" strokeWidth="2" fill="rgba(123,110,246,0.12)" />
              <path d="M45 25 L60 40 L75 22" stroke="var(--lime)" strokeWidth="2" strokeLinecap="round" fill="none" />
            </svg>
          </div>
          <p className="mb-1" style={{ color: '#fff', fontWeight: 500, fontSize: '1.05rem' }}>{isEN ? 'Everyday Runner' : 'Everyday Runner'}</p>
          <p className="text-xs mb-3" style={{ color: 'rgba(255,255,255,0.5)' }}>{isEN ? 'Made to move.' : 'Made to move.'}</p>
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
          <span className="text-[10px] tracking-widest uppercase" style={{ color: 'rgba(255,255,255,0.85)' }}>{isEN ? 'Your Bag' : 'ตะกร้าของคุณ'}</span>
          <i className="ti ti-circle-check" style={{ fontSize: 14, color: 'var(--lime)' }} aria-hidden="true" />
        </div>
        <div className="w-9 h-9 rounded-lg flex items-center justify-center mb-2" style={{ background: 'rgba(123,110,246,0.15)' }}>
          <i className="ti ti-shopping-bag" style={{ fontSize: 16, color: 'var(--purple-light)' }} aria-hidden="true" />
        </div>
        <p className="text-xs mb-3" style={{ color: 'rgba(255,255,255,0.5)' }}>{isEN ? '1 item · Size 42' : '1 ชิ้น · ไซส์ 42'}</p>
        <div
          className="rounded-lg text-center py-1.5 text-xs"
          style={{ background: 'linear-gradient(90deg, var(--purple), var(--purple-light))', color: '#fff' }}
        >
          {isEN ? 'Checkout →' : 'ชำระเงิน →'}
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
                  {isEN ? 'Retail &' : 'ค้าปลีก &'}<br />{isEN ? 'E-commerce' : 'อีคอมเมิร์ซ'}
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
                  ? 'We help retailers and e-commerce companies build headless commerce platforms, personalization engines, inventory optimization systems, and loyalty programs that drive measurable revenue growth. Our solutions scale effortlessly during peak demand and combine deep UX expertise with robust backend engineering to convert browsers into buyers.'
                  : 'เราช่วยผู้ค้าปลีกและบริษัทอีคอมเมิร์ซ สร้าง Headless Commerce Platform, Personalization Engine, ระบบ Inventory Optimization และ Loyalty Program ที่สร้างการเติบโตของรายได้ที่วัดผลได้ โซลูชันของเรา Scale ได้อย่างราบรื่นช่วง Demand พุ่งสูง ผสมผสานความเชี่ยวชาญด้าน UX กับวิศวกรรม Backend ที่แข็งแรง เพื่อเปลี่ยนคนดูให้กลายเป็นผู้ซื้อ'}
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
