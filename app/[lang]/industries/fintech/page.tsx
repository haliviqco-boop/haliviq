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

  const badge = isEN ? 'Industry / Financial Services' : 'อุตสาหกรรม / บริการทางการเงิน'
  const heroSubhead = isEN
    ? 'Digital solutions for banks, insurance, and financial institutions.'
    : 'Digital Banking และ Payment ที่ปลอดภัยและ Compliant ตามมาตรฐาน ธปท.'

  const challenges = isEN ? [
    { icon: 'ti-scale', title: 'Regulatory Complexity', desc: 'Navigating evolving regulations across jurisdictions while maintaining innovation velocity requires sophisticated compliance systems that adapt to changing requirements automatically.' },
    { icon: 'ti-server-2', title: 'Legacy Infrastructure', desc: 'Core banking systems built decades ago are brittle and expensive to maintain, yet they process millions of daily transactions that cannot tolerate downtime during modernisation.' },
    { icon: 'ti-shield-exclamation', title: 'Escalating Cyber Threats', desc: 'Financial institutions face increasingly sophisticated attacks targeting customer data, transaction systems, and proprietary algorithms, demanding defense-in-depth security architectures.' },
    { icon: 'ti-star', title: 'Rising Customer Expectations', desc: 'Consumers expect instant, personalised, always-available financial services across every channel, setting a bar that legacy institutions struggle to meet with outdated technology.' },
  ] : [
    { icon: 'ti-scale', title: 'ความซับซ้อนด้านกฎระเบียบ', desc: 'การปรับตัวตามกฎระเบียบที่เปลี่ยนแปลงในแต่ละประเทศ พร้อมรักษาความเร็วในการสร้างนวัตกรรม ต้องการระบบ Compliance ที่ปรับตามข้อกำหนดใหม่ได้อัตโนมัติ' },
    { icon: 'ti-server-2', title: 'Legacy Infrastructure', desc: 'ระบบ Core Banking ที่สร้างมาหลายสิบปีเปราะบางและมีต้นทุนดูแลสูง แต่ยังต้องประมวลผล Transaction หลักล้านรายการต่อวันโดยรับ Downtime ระหว่าง Modernization ไม่ได้' },
    { icon: 'ti-shield-exclamation', title: 'ภัยคุกคามไซเบอร์ที่ทวีความรุนแรง', desc: 'สถาบันการเงินเผชิญการโจมตีที่ซับซ้อนขึ้นเรื่อยๆ ทั้งข้อมูลลูกค้า ระบบ Transaction และ Algorithm เฉพาะทาง ต้องการสถาปัตยกรรมความปลอดภัยแบบ Defense-in-depth' },
    { icon: 'ti-star', title: 'ความคาดหวังของลูกค้าที่สูงขึ้น', desc: 'ผู้บริโภคคาดหวังบริการทางการเงินที่รวดเร็ว Personalize และพร้อมใช้งานทุกช่องทางตลอดเวลา ซึ่งเป็นมาตรฐานที่สถาบันเดิมตามด้วยเทคโนโลยีเก่าได้ยาก' },
  ]

  const metrics = [
    { value: '$15.2B', label: isEN ? 'Global Digital Banking Platform Market by 2028' : 'ขนาดตลาด Digital Banking Platform ทั่วโลกภายในปี 2028', source: 'Grand View Research, 2024' },
    { value: '$164B', label: isEN ? 'Global Fintech Investment in 2024' : 'เงินลงทุน Fintech ทั่วโลกในปี 2024', source: 'CB Insights State of Fintech, 2024' },
    { value: '78%', label: isEN ? 'Consumers Using Mobile Payments Regularly in Southeast Asia' : 'ผู้บริโภคที่ใช้ Mobile Payment เป็นประจำในเอเชียตะวันออกเฉียงใต้', source: 'McKinsey Digital Payments, 2024' },
  ]

  const capabilities = isEN ? [
    { icon: 'ti-building-bank', title: 'Digital Banking Platforms', desc: 'Mobile-first banking applications with account management, payments, budgeting tools, and personalised financial insights.' },
    { icon: 'ti-credit-card', title: 'Payment Solutions', desc: 'Secure payment processing systems supporting real-time transfers, QR payments, digital wallets, and cross-border transactions.' },
    { icon: 'ti-shield-check', title: 'Risk & Compliance Platforms', desc: 'Automated KYC, AML, and regulatory reporting systems that reduce compliance costs while maintaining audit readiness.' },
    { icon: 'ti-pig-money', title: 'Wealth Management Tools', desc: 'Portfolio management and advisory platforms with robo-advisory capabilities, risk profiling, and real-time market analytics.' },
    { icon: 'ti-api', title: 'Open Banking APIs', desc: 'Secure API platforms enabling third-party integrations, account aggregation, and data sharing in compliance with open banking regulations.' },
  ] : [
    { icon: 'ti-building-bank', title: 'Digital Banking Platforms', desc: 'แอปธนาคารแบบ Mobile-first พร้อมจัดการบัญชี ชำระเงิน เครื่องมือ Budgeting และ Insight ทางการเงินที่ Personalize' },
    { icon: 'ti-credit-card', title: 'Payment Solutions', desc: 'ระบบ Payment ที่ปลอดภัย รองรับโอนเงิน Real-time, QR Payment, Digital Wallet และ Transaction ข้ามประเทศ' },
    { icon: 'ti-shield-check', title: 'Risk & Compliance Platforms', desc: 'ระบบ KYC, AML และรายงานตามกฎระเบียบแบบอัตโนมัติ ลดต้นทุน Compliance พร้อมพร้อมรับการตรวจสอบเสมอ' },
    { icon: 'ti-pig-money', title: 'Wealth Management Tools', desc: 'แพลตฟอร์มจัดการ Portfolio และให้คำปรึกษา พร้อม Robo-advisory, Risk Profiling และ Market Analytics แบบ Real-time' },
    { icon: 'ti-api', title: 'Open Banking APIs', desc: 'แพลตฟอร์ม API ที่ปลอดภัย รองรับ Third-party Integration, Account Aggregation และ Data Sharing ตาม Open Banking Regulation' },
  ]

  const techStack = ['React', 'Node.js', 'Kubernetes', 'PostgreSQL', 'Redis', 'Kafka', 'AWS', 'Blockchain', 'AI/ML', 'GraphQL', 'OAuth 2.0', 'PCI DSS']

  const useCases = isEN ? [
    { no: '01', title: 'Mobile Banking Application', desc: 'Full-featured mobile banking platform with biometric login, real-time transactions, budgeting tools, card management, and personalised financial insights.' },
    { no: '02', title: 'Fraud Detection Engine', desc: 'Real-time transaction monitoring system using machine learning to detect anomalous patterns, flag suspicious activity, and reduce false positive rates.' },
    { no: '03', title: 'Open Banking Integration', desc: 'API gateway platform enabling secure account data sharing, payment initiation, and third-party fintech integrations in compliance with open banking regulations.' },
  ] : [
    { no: '01', title: 'Mobile Banking Application', desc: 'Mobile Banking ครบวงจร พร้อม Biometric Login, Transaction แบบ Real-time, เครื่องมือ Budgeting, จัดการบัตร และ Insight ทางการเงินที่ Personalize' },
    { no: '02', title: 'Fraud Detection Engine', desc: 'ระบบ Monitor Transaction แบบ Real-time ด้วย Machine Learning ตรวจจับรูปแบบผิดปกติ แจ้งเตือนกิจกรรมน่าสงสัย และลด False Positive' },
    { no: '03', title: 'Open Banking Integration', desc: 'แพลตฟอร์ม API Gateway ที่รองรับการแชร์ข้อมูลบัญชีอย่างปลอดภัย เริ่ม Payment และเชื่อมต่อกับ Fintech ภายนอกตาม Open Banking Regulation' },
  ]

  const heroVisual = (
    <div className="relative pb-10 pr-6">
      <div className="rounded-2xl overflow-hidden" style={{ background: '#141329', border: '1px solid rgba(123,110,246,0.35)' }}>
        <div className="flex items-center gap-2 px-5 py-3.5" style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
          <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#F87171' }} />
          <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#FBBF24' }} />
          <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#34D399' }} />
          <span className="ml-3 text-xs" style={{ color: 'rgba(255,255,255,0.85)', fontFamily: 'monospace' }}>wallet.app</span>
        </div>
        <div className="px-6 py-7">
          <div className="flex items-center justify-between mb-6">
            <span className="text-xs tracking-widest uppercase" style={{ color: 'rgba(255,255,255,0.5)' }}>{isEN ? 'Account Balance' : 'ยอดคงเหลือ'}</span>
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full" style={{ background: 'var(--lime)', animation: 'blinkDot 1.6s ease-in-out infinite' }} />
              <span className="text-xs" style={{ color: 'var(--lime)' }}>{isEN ? 'Secured' : 'ปลอดภัย'}</span>
            </div>
          </div>
          <div className="mb-7 leading-none" style={{ color: '#fff', fontSize: '2.1rem', fontWeight: 500, fontFamily: 'monospace' }}>
            ฿1,284,500.00
          </div>
          <div className="space-y-3">
            {[
              { icon: 'ti-arrow-up-right', label: isEN ? 'Transfer to Somchai' : 'โอนให้สมชาย', amount: '-฿2,400' },
              { icon: 'ti-qrcode', label: isEN ? 'QR Payment · Cafe' : 'QR Payment · คาเฟ่', amount: '-฿120' },
              { icon: 'ti-arrow-down-left', label: isEN ? 'Salary Deposit' : 'เงินเดือนเข้า', amount: '+฿48,000' },
            ].map((row) => (
              <div key={row.label} className="flex items-center gap-3 p-3 rounded-xl" style={{ background: 'rgba(255,255,255,0.04)' }}>
                <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0" style={{ background: 'rgba(123,110,246,0.15)' }}>
                  <i className={`ti ${row.icon}`} style={{ fontSize: 15, color: 'var(--purple-light)' }} aria-hidden="true" />
                </div>
                <span className="flex-1 text-xs" style={{ color: 'rgba(255,255,255,0.85)' }}>{row.label}</span>
                <span className="text-xs" style={{ color: row.amount.startsWith('+') ? 'var(--lime)' : 'rgba(255,255,255,0.85)', fontFamily: 'monospace' }}>{row.amount}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div
        className="absolute -bottom-2 -right-2 w-[210px] rounded-2xl p-4"
        style={{ background: '#1B1A33', border: '1px solid rgba(255,255,255,0.1)', boxShadow: '0 20px 50px -10px rgba(0,0,0,0.6)', animation: 'badgeFloat 3.4s ease-in-out infinite' }}
      >
        <div className="flex items-center justify-between mb-2.5">
          <span className="text-[10px] tracking-widest uppercase" style={{ color: 'rgba(255,255,255,0.85)' }}>{isEN ? 'Fraud Check' : 'ตรวจสอบ Fraud'}</span>
          <i className="ti ti-shield-check" style={{ fontSize: 14, color: 'var(--lime)' }} aria-hidden="true" />
        </div>
        <div className="flex items-center gap-1.5 text-xs" style={{ color: 'var(--lime)' }}>
          <i className="ti ti-circle-check" style={{ fontSize: 13 }} aria-hidden="true" />
          {isEN ? '0 anomalies today' : 'วันนี้ไม่พบความผิดปกติ'}
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
                  {isEN ? 'Financial' : 'บริการ'}<br />{isEN ? 'Services' : 'ทางการเงิน'}
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
                  ? 'We work with banks, insurers, asset managers, and fintech startups to build secure, scalable platforms — from mobile banking apps and fraud detection engines to payment systems and open banking integrations. Our approach combines deep financial domain knowledge with modern engineering, helping you move faster without compromising on compliance.'
                  : 'เราทำงานร่วมกับธนาคาร บริษัทประกัน ผู้จัดการสินทรัพย์ และ Fintech Startup เพื่อสร้าง Platform ที่ปลอดภัยและ Scale ได้ ตั้งแต่ Mobile Banking App, Fraud Detection Engine ไปจนถึง Payment System และ Open Banking Integration แนวทางของเราผสมผสานความเข้าใจด้านการเงินอย่างลึกซึ้งกับวิศวกรรมยุคใหม่ ช่วยให้คุณก้าวได้เร็วขึ้นโดยไม่ประนีประนอมเรื่อง Compliance'}
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
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6" style={{ background: 'rgba(168,216,50,0.12)' }}>
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
            style={{ height: 260, background: 'radial-gradient(ellipse 70% 100% at 50% 100%, rgba(123,110,246,0.35) 0%, rgba(196,255,92,0.08) 45%, transparent 75%)' }}
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
