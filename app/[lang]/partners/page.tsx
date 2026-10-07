import Link from 'next/link'
import Navbar from '@/components/Navbar'
import { t, type Lang } from '@/lib/i18n'
import Footer from '@/components/Footer'

export async function generateStaticParams() {
  return [{ lang: 'th' }, { lang: 'en' }]
}

const tiers = [
  { key:'platinum', color:'var(--purple)', bg:'var(--purple-bg)' },
  { key:'gold', color:'var(--purple-light)', bg:'var(--purple-bg)' },
  { key:'technology', color:'var(--lime)', bg:'#F0FFF4' },
]

export default function Page({ params }: { params: { lang: Lang } }) {
  const lang = (params.lang === 'en' ? 'en' : 'th') as Lang
  const isEN = lang === 'en'
  const tr = t[lang] as any

  const benefits = isEN ? [
    { icon:'ti-users', title:'Co-selling', desc:'Joint go-to-market with the Haliviq team. We introduce you to clients whose needs match your product.' },
    { icon:'ti-certificate', title:'Co-branding', desc:'Joint case studies, blog posts, and event presence. Expand your brand reach in Southeast Asia.' },
    { icon:'ti-discount', title:'Partner Pricing', desc:'Special pricing on Haliviq services for your clients. Deliver more value without more cost.' },
    { icon:'ti-school', title:'Training & Enablement', desc:'Product training for our team so we can position and implement your technology effectively.' },
    { icon:'ti-chart-bar', title:'Deal Registration', desc:'Protect deals you bring to us. Full transparency on pipeline, status, and revenue sharing.' },
    { icon:'ti-headset', title:'Dedicated Support', desc:'A dedicated Partner Success Manager for technical support, escalations, and account management.' },
  ] : [
    { icon:'ti-users', title:'Co-selling', desc:'ขายและทำการตลาดร่วมกับทีม Haliviq เราแนะนำลูกค้าที่ต้องการสิ่งที่ตรงกับผลิตภัณฑ์ของคุณ' },
    { icon:'ti-certificate', title:'Co-branding', desc:'ทำกรณีศึกษาและบทความร่วมกัน และออกงานอีเวนต์ด้วยกัน ช่วยให้แบรนด์เป็นที่รู้จักมากขึ้นในเอเชียตะวันออกเฉียงใต้' },
    { icon:'ti-discount', title:'Partner Pricing', desc:'ราคาพิเศษที่ส่งต่อประโยชน์ถึงลูกค้าได้หลายรูปแบบ' },
    { icon:'ti-school', title:'Training & Enablement', desc:'อบรมทีม Haliviq เพื่อให้เรานำเสนอและติดตั้งเทคโนโลยีของคุณให้ลูกค้าได้อย่างมีประสิทธิภาพ' },
    { icon:'ti-chart-bar', title:'Deal Registration', desc:'คุ้มครองดีลที่คุณนำมา และเปิดเผยชัดเจนเรื่องงานที่อยู่ในระหว่างขาย สถานะ และการแบ่งรายได้' },
    { icon:'ti-headset', title:'Dedicated Support', desc:'มี Partner Success Manager ดูแลคุณโดยตรง ทั้งเรื่องซัพพอร์ตด้านเทคนิค การส่งต่อปัญหา และดูแลบัญชี' },
  ]

  const partnerTypes = isEN ? [
    { icon:'ti-cloud', title:'Cloud & Infrastructure', desc:'AWS, GCP, Azure, and other cloud providers who want a delivery partner in Southeast Asia.' },
    { icon:'ti-code', title:'Technology Platforms', desc:'SaaS, API, and platform companies looking for integration and implementation expertise.' },
    { icon:'ti-building', title:'Consulting Firms', desc:'Strategy and management consultancies seeking a digital product execution partner.' },
    { icon:'ti-device-analytics', title:'Data & AI Providers', desc:'Data, analytics, and AI vendors who need a product team to implement their solutions.' },
  ] : [
    { icon:'ti-cloud', title:'Cloud & Infrastructure', desc:'AWS, GCP, Azure และ Cloud Provider อื่น ๆ ที่ต้องการพาร์ทเนอร์ส่งมอบงานในเอเชียตะวันออกเฉียงใต้' },
    { icon:'ti-code', title:'Technology Platforms', desc:'บริษัท SaaS, API และ Platform ที่ต้องการผู้เชี่ยวชาญด้านการเชื่อมต่อระบบและการติดตั้งใช้งาน' },
    { icon:'ti-building', title:'Consulting Firms', desc:'บริษัทที่ปรึกษาด้านกลยุทธ์และการจัดการที่ต้องการพาร์ทเนอร์ลงมือสร้างผลิตภัณฑ์ดิจิทัล' },
    { icon:'ti-device-analytics', title:'Data & AI Providers', desc:'ผู้ให้บริการด้าน Data, Analytics และ AI ที่ต้องการทีมผลิตภัณฑ์มาช่วยติดตั้งใช้งานระบบ' },
  ]

  const tierLabels = isEN
    ? { platinum: 'Platinum Partner', gold: 'Gold Partner', technology: 'Technology Partner' }
    : { platinum: 'Platinum Partner', gold: 'Gold Partner', technology: 'Technology Partner' }

  return (
    <>
      <Navbar lang={lang} tr={tr} />
      <main>
        <section className="pt-[80px] bg-white">
          <div className="h-1 w-full" style={{ background:'linear-gradient(90deg,var(--purple),var(--purple-light),var(--lime))' }} />
          <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-20 lg:pt-28 pb-20">
            <div className="max-w-3xl">
              <p className="t-label mb-5">{isEN ? 'Partner Program' : 'โปรแกรมพาร์ทเนอร์'}</p>
              <h1 className="t-display text-[clamp(3rem,6.5vw,6rem)] text-[#0A0A0F] leading-relaxed mb-8">
                {isEN ? <>Grow Together<br /><span style={{ background:'linear-gradient(135deg,var(--purple) 0%,var(--purple-light) 50%,var(--lime) 100%)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' }}>with Haliviq</span></> : <>เติบโตไปด้วยกัน<br /><span style={{ background:'linear-gradient(135deg,var(--purple) 0%,var(--purple-light) 50%,var(--lime) 100%)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' }}>กับ Haliviq</span></>}
              </h1>
              <p className="t-body text-lg leading-relaxed max-w-2xl">
                {isEN ? 'We partner with technology platforms, cloud providers, and consulting firms who share our commitment to building products that create real business value.' : 'เราเป็นพาร์ทเนอร์กับ Technology Platform, Cloud Provider และบริษัทที่ปรึกษา ที่ตั้งใจสร้างผลิตภัณฑ์ที่ให้ผลทางธุรกิจจริงเหมือนกัน'}
              </p>
            </div>
          </div>
        </section>

        <div className="border-y border-[#E4E4EC] bg-[#F7F7FC]">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-[#E4E4EC]">
              {(isEN
                ? [{ n:'40+',l:'Active Partners' },{ n:'12',l:'Countries' },{ n:'300+',l:'Joint Projects' },{ n:'95%',l:'Partner Retention' }]
                : [{ n:'40+',l:'พาร์ทเนอร์ที่ทำงานร่วมกันอยู่' },{ n:'12',l:'ประเทศ' },{ n:'300+',l:'โปรเจกต์ร่วมกัน' },{ n:'95%',l:'พาร์ทเนอร์ที่ร่วมงานต่อ' }]
              ).map(s => (
                <div key={s.l} className="px-6 lg:px-10 py-8">
                  <div className="text-[clamp(2rem,3.5vw,2.8rem)] leading-none mb-1" style={{ fontFamily:'var(--font-main)', fontWeight:500, color:'var(--purple)' }}>{s.n}</div>
                  <p className="text-base text-[#6E6E88]" style={{ fontWeight:400 }}>{s.l}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <section className="bg-white py-24 lg:py-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <p className="t-label mb-5">{isEN ? 'Who We Partner With' : 'เราเป็นพาร์ทเนอร์กับใคร'}</p>
              <h2 className="t-display text-[clamp(2rem,4vw,3.5rem)] text-[#0A0A0F]">
                {isEN ? 'Built for the Right Fit' : 'เลือกพาร์ทเนอร์ที่เหมาะกัน'}
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {partnerTypes.map(p => (
                <div key={p.title} className="p-7 border border-[#E4E4EC] rounded-2xl hover:border-[var(--purple)]/30 hover:-translate-y-1 transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-[var(--purple-bg)] flex items-center justify-center mb-5">
                    <i className={`ti ${p.icon}`} style={{ fontSize:22, color:'var(--purple)' }} aria-hidden="true" />
                  </div>
                  <h3 className="text-[#0A0A0F] mb-2" style={{ fontWeight:500, fontSize:'1.3rem' }}>{p.title}</h3>
                  <p className="t-body text-sm leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#F7F7FC] py-24 lg:py-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <p className="t-label mb-5">{isEN ? 'Partner Benefits' : 'สิทธิประโยชน์'}</p>
              <h2 className="t-display text-[clamp(2rem,4vw,3.5rem)] text-[#0A0A0F]">
                {isEN ? <>What You Get<br />as a Partner</> : <>สิ่งที่คุณได้รับ<br />ในฐานะพาร์ทเนอร์</>}
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {benefits.map(b => (
                <div key={b.title} className="bg-white p-7 border border-[#E4E4EC] rounded-2xl hover:border-[var(--purple)]/30 hover:-translate-y-1 transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-[var(--purple-bg)] flex items-center justify-center mb-5">
                    <i className={`ti ${b.icon}`} style={{ fontSize:22, color:'var(--purple)' }} aria-hidden="true" />
                  </div>
                  <h3 className="text-[#0A0A0F] mb-2" style={{ fontWeight:500, fontSize:'1.3rem' }}>{b.title}</h3>
                  <p className="t-body text-sm leading-relaxed">{b.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 relative overflow-hidden" style={{ background:'linear-gradient(135deg,var(--purple) 0%,var(--purple-light) 50%,var(--lime) 100%)' }}>
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage:'radial-gradient(circle,#fff 1px,transparent 1px)', backgroundSize:'28px 28px' }} />
          <div className="relative max-w-3xl mx-auto px-6 lg:px-10 text-center">
            <p className="text-white/60 text-xs tracking-widest uppercase mb-6 font-mono">{isEN ? 'Become a Partner' : 'เป็นพาร์ทเนอร์'}</p>
            <h2 className="t-display text-white text-[clamp(2rem,5vw,4.5rem)] mb-6 leading-tight">
              {isEN ? <>Ready to grow<br />together?</> : <>พร้อมเติบโต<br />ไปด้วยกันไหม?</>}
            </h2>
            <p className="text-white/85 mb-10 max-w-md mx-auto" style={{ fontWeight:400 }}>
              {isEN ? 'Tell us about your company and how you would like to collaborate. We will get back to you within 48 hours.' : 'เล่าให้เราฟังเรื่องบริษัทของคุณและวิธีที่อยากร่วมมือกัน เราจะตอบกลับภายใน 48 ชั่วโมง'}
            </p>
            <Link href={`/${lang}/contact`} className="inline-flex items-center gap-2 px-10 py-4 bg-white rounded-full text-sm hover:bg-[var(--purple-bg)] transition-colors" style={{ color:'var(--purple)', fontWeight:400 }}>
              {isEN ? 'Apply to Partner' : 'สมัครเป็นพาร์ทเนอร์'} <i className="ti ti-arrow-right" style={{ fontSize:15 }} aria-hidden="true" />
            </Link>
          </div>
        </section>
      </main>
      <Footer lang={lang} tr={tr} />
    </>
  )
}
