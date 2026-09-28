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

  const badge = isEN ? 'Industry / Consumer Goods' : 'อุตสาหกรรม / สินค้าอุปโภคบริโภค'
  const heroSubhead = isEN
    ? 'Digital transformation for consumer product companies.'
    : 'ขับเคลื่อนการปรับสู่ดิจิทัลให้กับบริษัทสินค้าอุปโภคบริโภค'

  const challenges = isEN ? [
    { icon: 'ti-network', title: 'Fragmented DTC & Distribution Data', desc: 'Direct-to-consumer sales, retail partners, and distributors each generate siloed data on customers, orders, and inventory, making it nearly impossible to get a single view of demand across channels.' },
    { icon: 'ti-chart-line', title: 'Demand-Forecasting Volatility', desc: 'Seasonal spikes, viral trends, and shifting consumer preferences make demand notoriously hard to predict, leading to costly overstock, stockouts, and reactive supply-chain decisions.' },
    { icon: 'ti-currency-dollar', title: 'Rising Customer-Acquisition Costs', desc: 'As paid media costs climb and privacy changes limit targeting, brands need smarter retention, loyalty, and first-party data strategies to keep acquisition economics sustainable.' },
    { icon: 'ti-barcode', title: 'Product-Information Management at Scale', desc: 'Keeping product data, imagery, pricing, and compliance details consistent across thousands of SKUs and dozens of marketplaces and retail channels overwhelms manual, spreadsheet-driven processes.' },
  ] : [
    { icon: 'ti-network', title: 'ข้อมูล DTC และ Distribution ที่กระจัดกระจาย', desc: 'ยอดขายแบบ Direct-to-Consumer พันธมิตรค้าปลีก และผู้จัดจำหน่าย ต่างสร้างข้อมูลลูกค้า คำสั่งซื้อ และสต๊อกที่แยกส่วนกัน ทำให้แทบเป็นไปไม่ได้ที่จะเห็นภาพ Demand แบบรวมศูนย์ในทุกช่องทาง' },
    { icon: 'ti-chart-line', title: 'ความผันผวนของการพยากรณ์ Demand', desc: 'ยอดขายที่พุ่งตามฤดูกาล กระแสไวรัล และความชอบของผู้บริโภคที่เปลี่ยนเร็ว ทำให้พยากรณ์ Demand ได้ยาก นำไปสู่ Overstock, Stockout และการตัดสินใจ Supply Chain แบบเฉพาะหน้าที่มีต้นทุนสูง' },
    { icon: 'ti-currency-dollar', title: 'ต้นทุนการหาลูกค้าใหม่ที่สูงขึ้น', desc: 'เมื่อค่าโฆษณาแพงขึ้นและนโยบาย Privacy จำกัดการ Targeting แบรนด์ต้องใช้กลยุทธ์ Retention, Loyalty และ First-party Data ที่ฉลาดขึ้นเพื่อรักษาความคุ้มค่าในการหาลูกค้า' },
    { icon: 'ti-barcode', title: 'การจัดการ Product Information ในระดับใหญ่', desc: 'การรักษาข้อมูลสินค้า รูปภาพ ราคา และรายละเอียด Compliance ให้สอดคล้องกันในหลายพันรายการ SKU และหลายสิบช่องทาง Marketplace และค้าปลีก เกินกำลังของกระบวนการแบบ Spreadsheet' },
  ]

  const metrics = [
    { value: '$212B', label: isEN ? 'Global DTC E-commerce Market Size by 2028' : 'ขนาดตลาด DTC E-commerce ทั่วโลกภายในปี 2028', source: 'Grand View Research CPG & DTC Report, 2024' },
    { value: '64%', label: isEN ? 'Consumers More Loyal to Brands with Strong Loyalty Programs' : 'ผู้บริโภคภักดีต่อแบรนด์ที่มี Loyalty Program ที่แข็งแรงมากขึ้น', source: 'Deloitte Consumer Loyalty Survey, 2024' },
    { value: '35%', label: isEN ? 'Improvement in Forecast Accuracy from AI-Driven Demand Planning' : 'ความแม่นยำในการพยากรณ์ที่เพิ่มขึ้นจาก AI Demand Planning', source: 'McKinsey Consumer Goods Analytics, 2024' },
  ]

  const capabilities = isEN ? [
    { icon: 'ti-shopping-cart', title: 'DTC E-commerce Platforms', desc: 'Fast, conversion-optimized direct-to-consumer storefronts with flexible checkout, subscriptions, and bundling built for modern consumer brands.' },
    { icon: 'ti-gift', title: 'Loyalty & Membership Apps', desc: 'Points-based loyalty and membership platforms with tiered rewards, referral programs, and personalized offers that deepen customer relationships.' },
    { icon: 'ti-report-analytics', title: 'Retail-Distribution Dashboards', desc: 'Unified reporting dashboards that combine sell-in and sell-out data from retail partners and distributors into a single source of truth.' },
    { icon: 'ti-chart-line', title: 'AI Demand-Forecasting Systems', desc: 'Machine learning models that forecast demand across SKUs and channels, factoring in seasonality, promotions, and market signals to reduce waste.' },
    { icon: 'ti-database', title: 'Product Information Management (PIM)', desc: 'Centralized PIM systems that keep product data, imagery, and specifications consistent and compliant across every sales channel and marketplace.' },
    { icon: 'ti-tag', title: 'Trade-Promotion & Pricing Optimization', desc: 'Pricing and promotion-planning tools that model margin impact and recommend optimal discounts and trade-spend allocation.' },
  ] : [
    { icon: 'ti-shopping-cart', title: 'DTC E-commerce Platforms', desc: 'Storefront แบบ Direct-to-Consumer ที่รวดเร็วและปรับให้ Convert สูง พร้อม Checkout ที่ยืดหยุ่น ระบบ Subscription และ Bundling สำหรับแบรนด์ยุคใหม่' },
    { icon: 'ti-gift', title: 'Loyalty & Membership Apps', desc: 'แพลตฟอร์ม Loyalty และ Membership แบบสะสมคะแนน พร้อมรางวัลแบบ Tier โปรแกรม Referral และข้อเสนอ Personalize ที่กระชับความสัมพันธ์กับลูกค้า' },
    { icon: 'ti-report-analytics', title: 'Retail-Distribution Dashboards', desc: 'Dashboard รายงานแบบรวมศูนย์ที่รวมข้อมูล Sell-in และ Sell-out จากพันธมิตรค้าปลีกและผู้จัดจำหน่ายให้เป็นแหล่งข้อมูลเดียวที่เชื่อถือได้' },
    { icon: 'ti-chart-line', title: 'AI Demand-Forecasting Systems', desc: 'โมเดล Machine Learning ที่พยากรณ์ Demand ในทุก SKU และช่องทาง โดยคำนึงถึงฤดูกาล โปรโมชัน และสัญญาณตลาด เพื่อลดความสูญเปล่า' },
    { icon: 'ti-database', title: 'Product Information Management (PIM)', desc: 'ระบบ PIM แบบรวมศูนย์ที่รักษาข้อมูลสินค้า รูปภาพ และ Specification ให้สอดคล้องและเป็นไปตาม Compliance ในทุกช่องทางขายและ Marketplace' },
    { icon: 'ti-tag', title: 'Trade-Promotion & Pricing Optimization', desc: 'เครื่องมือวางแผนราคาและโปรโมชันที่จำลองผลกระทบต่อ Margin และแนะนำส่วนลดและการจัดสรร Trade Spend ที่เหมาะสมที่สุด' },
  ]

  const techStack = ['React', 'Next.js', 'Node.js', 'Shopify APIs', 'Algolia', 'Machine Learning', 'PostgreSQL', 'Redis', 'AWS', 'GraphQL', 'Stripe', 'Elasticsearch']

  const useCases = isEN ? [
    { no: '01', title: 'DTC Storefront Platform', desc: 'A high-conversion direct-to-consumer storefront with subscriptions, bundling, and loyalty integration, built to scale across seasonal demand spikes.' },
    { no: '02', title: 'Loyalty & Rewards App', desc: 'A tiered loyalty and membership app with points, referrals, and personalized offers that increases repeat purchase rate and customer lifetime value.' },
    { no: '03', title: 'Demand-Forecasting System', desc: 'An AI-driven forecasting platform that predicts SKU-level demand across DTC, retail, and distribution channels to minimize stockouts and overstock.' },
  ] : [
    { no: '01', title: 'DTC Storefront Platform', desc: 'Storefront แบบ Direct-to-Consumer ที่ Convert สูง พร้อม Subscription, Bundling และการเชื่อมต่อ Loyalty ที่ออกแบบมาให้ Scale รองรับ Demand ช่วงฤดูกาลได้' },
    { no: '02', title: 'Loyalty & Rewards App', desc: 'แอป Loyalty และ Membership แบบ Tier พร้อมคะแนนสะสม โปรแกรม Referral และข้อเสนอ Personalize ที่เพิ่มอัตราการซื้อซ้ำและ Customer Lifetime Value' },
    { no: '03', title: 'Demand-Forecasting System', desc: 'แพลตฟอร์มพยากรณ์ที่ขับเคลื่อนด้วย AI ซึ่งคาดการณ์ Demand ระดับ SKU ในทุกช่องทาง DTC ค้าปลีก และผู้จัดจำหน่าย เพื่อลด Stockout และ Overstock' },
  ]

  const heroVisual = (
    <div className="relative pb-10 pr-6">
      <div className="rounded-2xl overflow-hidden" style={{ background: '#141329', border: '1px solid rgba(123,110,246,0.35)' }}>
        <div className="flex items-center justify-between px-5 py-3.5" style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
          <span className="text-xs tracking-widest uppercase" style={{ color: 'rgba(255,255,255,0.85)', fontFamily: 'monospace' }}>{isEN ? 'Studio / Catalog' : 'Studio / Catalog'}</span>
          <div className="flex gap-1">
            <span className="w-3 h-[2px] rounded-full" style={{ background: 'rgba(255,255,255,0.3)' }} />
            <span className="w-3 h-[2px] rounded-full" style={{ background: 'rgba(255,255,255,0.3)' }} />
          </div>
        </div>
        <div className="p-5">
          <div className="aspect-[16/9] rounded-xl mb-4 flex items-center justify-center relative overflow-hidden" style={{ background: 'linear-gradient(135deg, rgba(123,110,246,0.18), rgba(83,195,215,0.1))' }}>
            <svg width="130" height="70" viewBox="0 0 130 70" fill="none" style={{ animation: 'iconFloat 3s ease-in-out infinite' }}>
              <rect x="10" y="12" width="34" height="34" rx="4" stroke="var(--purple-light)" strokeWidth="2" fill="rgba(123,110,246,0.12)" />
              <rect x="52" y="12" width="34" height="34" rx="4" stroke="var(--lime)" strokeWidth="2" fill="rgba(83,195,215,0.1)" />
              <rect x="94" y="12" width="26" height="34" rx="4" stroke="var(--purple-light)" strokeWidth="2" fill="rgba(123,110,246,0.12)" />
              <path d="M10 58 L120 58" stroke="rgba(255,255,255,0.25)" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>
          <p className="mb-1" style={{ color: '#fff', fontWeight: 500, fontSize: '1.05rem' }}>{isEN ? 'Product Catalog' : 'Product Catalog'}</p>
          <p className="text-xs mb-3" style={{ color: 'rgba(255,255,255,0.5)' }}>{isEN ? '1,248 SKUs synced' : 'Sync แล้ว 1,248 SKUs'}</p>
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
          <span className="text-[10px] tracking-widest uppercase" style={{ color: 'rgba(255,255,255,0.85)' }}>{isEN ? 'Rewards' : 'คะแนนสะสม'}</span>
          <i className="ti ti-circle-check" style={{ fontSize: 14, color: 'var(--lime)' }} aria-hidden="true" />
        </div>
        <div className="w-9 h-9 rounded-lg flex items-center justify-center mb-2" style={{ background: 'rgba(123,110,246,0.15)' }}>
          <i className="ti ti-award" style={{ fontSize: 16, color: 'var(--purple-light)' }} aria-hidden="true" />
        </div>
        <p className="text-xs mb-3" style={{ color: 'rgba(255,255,255,0.5)' }}>{isEN ? '2,450 points · Gold Tier' : '2,450 คะแนน · ระดับ Gold'}</p>
        <div
          className="rounded-lg text-center py-1.5 text-xs"
          style={{ background: 'linear-gradient(90deg, var(--purple), var(--purple-light))', color: '#fff' }}
        >
          {isEN ? 'Redeem →' : 'แลกคะแนน →'}
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
                  {isEN ? 'Consumer' : 'สินค้า'}<br />{isEN ? 'Goods' : 'อุปโภคบริโภค'}
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
                  ? 'We help consumer goods companies build DTC e-commerce platforms, loyalty and membership apps, AI-driven demand-forecasting systems, and product information management platforms that unify data across every channel. Our solutions bridge the gap between direct-to-consumer growth and traditional retail distribution, turning fragmented data into a single source of truth that drives sharper decisions.'
                  : 'เราช่วยบริษัทสินค้าอุปโภคบริโภคสร้าง DTC E-commerce Platform, แอป Loyalty และ Membership, ระบบพยากรณ์ Demand ด้วย AI และแพลตฟอร์ม Product Information Management ที่รวมข้อมูลจากทุกช่องทางเป็นหนึ่งเดียว โซลูชันของเราเชื่อมช่องว่างระหว่างการเติบโตแบบ Direct-to-Consumer กับการจัดจำหน่ายค้าปลีกแบบดั้งเดิม เปลี่ยนข้อมูลที่กระจัดกระจายให้กลายเป็นแหล่งข้อมูลเดียวที่ขับเคลื่อนการตัดสินใจที่แม่นยำขึ้น'}
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
