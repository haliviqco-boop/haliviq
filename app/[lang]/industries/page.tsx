import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { t, type Lang } from '@/lib/i18n'

export async function generateStaticParams() {
  return [{ lang: 'th' }, { lang: 'en' }]
}

const glass = 'rgba(255,255,255,0.05)'
const glassBorder = '1px solid rgba(255,255,255,0.1)'
const dim = 'rgba(255,255,255,0.4)'

function Panel({ children, style, className }: { children: any; style?: any; className?: string }) {
  return (
    <div className={`rounded-lg px-3 py-2.5 ${className || ''}`} style={{ background: glass, border: glassBorder, ...style }}>
      {children}
    </div>
  )
}

function Bar({ w, color = 'var(--purple-light)' }: { w: number; color?: string }) {
  return <div className="h-1.5 rounded-full" style={{ width: `${w}%`, background: color }} />
}

// Generic animated icon illustration — pulsing rings + floating icon + a floating live-status badge.
// Shared template used by most industries; a few keep a bespoke composition below.
function AnimatedIcon({ icon, badgeLabel, badgeValue, color = 'var(--lime)' }: { icon: string; badgeLabel: string; badgeValue: string; color?: string }) {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="relative flex items-center justify-center" style={{ width: 90, height: 90 }}>
        <span className="absolute rounded-full" style={{ width: 90, height: 90, border: '1px solid var(--purple-light)', animation: 'ringPulse 2.6s ease-out infinite' }} />
        <span className="absolute rounded-full" style={{ width: 90, height: 90, border: '1px solid var(--purple-light)', animation: 'ringPulse 2.6s ease-out 1.3s infinite' }} />
        <div className="rounded-full flex items-center justify-center" style={{ width: 64, height: 64, background: 'rgba(155,107,255,0.18)', border: '1px solid rgba(155,107,255,0.4)', animation: 'iconFloat 3.4s ease-in-out infinite' }}>
          <i className={`ti ${icon}`} style={{ fontSize: 30, color }} aria-hidden="true" />
        </div>
        <div className="absolute rounded-lg px-2.5 py-1.5 flex items-center gap-1.5" style={{ bottom: -10, right: -38, background: 'rgba(10,8,16,0.9)', border: glassBorder, animation: 'badgeFloat 3.2s ease-in-out infinite' }}>
          <span className="rounded-full shrink-0" style={{ width: 5, height: 5, background: 'var(--lime)', animation: 'blinkDot 1.6s ease-in-out infinite' }} />
          <div>
            <div style={{ fontSize: 7, color: dim, whiteSpace: 'nowrap' }}>{badgeLabel}</div>
            <div style={{ fontSize: 10, color: '#fff', fontWeight: 500, whiteSpace: 'nowrap' }}>{badgeValue}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

// One bespoke, animated mini-illustration per industry, in Haliviq's dark / purple / lime visual language
function IndustryVisual({ slug }: { slug: string }) {
  switch (slug) {
    case 'fintech':
      return (
        <div className="absolute inset-0 flex items-center justify-center">
          <Panel style={{ width: 170 }}>
            <div className="flex items-center gap-1.5 mb-2">
              <span className="rounded-full" style={{ width: 5, height: 5, background: 'var(--lime)', animation: 'blinkDot 1.6s ease-in-out infinite' }} />
              <span style={{ fontSize: 9, color: dim }}>ACCOUNT BALANCE</span>
            </div>
            <div style={{ fontSize: 20, color: '#fff', fontWeight: 500, marginBottom: 10 }}>฿1,284,500</div>
            <div className="flex items-end gap-[3px] h-8">
              {[35, 55, 40, 70, 50, 85, 60, 75, 45, 65].map((h, i) => (
                <div key={i} style={{ height: `${h}%`, width: 4, background: 'var(--lime)', borderRadius: 2, opacity: 0.85, transformOrigin: 'bottom', animation: `barGrow 1.8s ease-in-out ${i * 0.12}s infinite` }} />
              ))}
            </div>
          </Panel>
        </div>
      )
    case 'healthcare':
      return (
        <div className="absolute inset-0 flex items-center justify-center">
          <Panel style={{ width: 178 }}>
            <div className="flex items-center gap-1.5 mb-3">
              <i className="ti ti-heartbeat" style={{ color: 'var(--lime)', fontSize: 13, animation: 'blinkDot 1.4s ease-in-out infinite' }} aria-hidden="true" />
              <span style={{ fontSize: 9, color: dim }}>PATIENT VITALS</span>
            </div>
            <svg width="100%" height="28" viewBox="0 0 150 28" fill="none">
              <path d="M0 14 L30 14 L38 4 L46 24 L54 14 L150 14" stroke="var(--purple-light)" strokeWidth="2" fill="none" strokeDasharray="6 4" style={{ animation: 'dashFlow 1.2s linear infinite' }} />
            </svg>
            <div className="flex justify-between mt-2">
              <span style={{ fontSize: 8, color: dim }}>HR 72</span>
              <span style={{ fontSize: 8, color: dim }}>SpO2 98%</span>
            </div>
          </Panel>
        </div>
      )
    case 'retail':
      return (
        <div className="absolute inset-0 flex items-center justify-center">
          <Panel style={{ width: 180 }}>
            <div style={{ fontSize: 9, color: dim, marginBottom: 8 }}>THE EVERYDAY STORE</div>
            <div className="grid grid-cols-3 gap-2">
              {['ti-shopping-bag', 'ti-shirt', 'ti-device-mobile'].map((ic, i) => (
                <div key={ic} className="rounded-md flex items-center justify-center" style={{ height: 32, background: 'rgba(155,107,255,0.18)', animation: `iconFloat 2.6s ease-in-out ${i * 0.2}s infinite` }}>
                  <i className={`ti ${ic}`} style={{ color: 'var(--lime)', fontSize: 15 }} aria-hidden="true" />
                </div>
              ))}
            </div>
          </Panel>
        </div>
      )
    case 'real-estate':
      return (
        <div className="absolute inset-0 flex items-center justify-center gap-2 px-6">
          <Panel style={{ width: 150 }}>
            <div style={{ fontSize: 9, color: dim, marginBottom: 6 }}>LISTING</div>
            <div className="h-10 rounded-md mb-2 flex items-end justify-center gap-1 p-1.5" style={{ background: 'rgba(155,107,255,0.15)' }}>
              {[40, 65, 50, 80, 55].map((h, i) => (
                <div key={i} style={{ height: `${h}%`, width: 6, background: 'var(--purple-light)', borderRadius: 1, transformOrigin: 'bottom', animation: `barGrow 2s ease-in-out ${i * 0.15}s infinite` }} />
              ))}
            </div>
            <div className="flex items-center justify-between">
              <Bar w={50} color="rgba(255,255,255,0.2)" />
              <span style={{ fontSize: 9, color: 'var(--lime)' }}>฿8.9M</span>
            </div>
          </Panel>
        </div>
      )
    case 'education':
      return (
        <div className="absolute inset-0 flex items-center justify-center">
          <Panel style={{ width: 170 }}>
            <div style={{ fontSize: 9, color: dim, marginBottom: 8 }}>COURSE PROGRESS</div>
            <div className="space-y-2">
              {[{ l: 'Module 1', w: 100 }, { l: 'Module 2', w: 70 }, { l: 'Module 3', w: 30 }].map((r, i) => (
                <div key={r.l} className="flex items-center gap-2">
                  <span style={{ fontSize: 8, color: dim, width: 46 }}>{r.l}</span>
                  <div className="flex-1" style={{ animation: `blinkDot 2.4s ease-in-out ${i * 0.3}s infinite` }}><Bar w={r.w} color="var(--lime)" /></div>
                </div>
              ))}
            </div>
          </Panel>
        </div>
      )
    case 'logistics':
      return (
        <div className="absolute inset-0 flex items-center justify-center gap-3 px-6">
          <div className="w-11 h-11 rounded-full flex items-center justify-center shrink-0" style={{ background: 'rgba(155,107,255,0.25)', border: '1px solid var(--purple-light)', animation: 'iconFloat 2.6s ease-in-out infinite' }}>
            <i className="ti ti-truck-delivery" style={{ color: 'var(--lime)', fontSize: 18 }} aria-hidden="true" />
          </div>
          <div className="flex-1 h-px" style={{ backgroundImage: 'repeating-linear-gradient(90deg,var(--lime) 0 4px,transparent 4px 9px)', backgroundSize: '26px 1px', animation: 'dashScroll 0.8s linear infinite' }} />
          <Panel style={{ width: 84 }}>
            <div style={{ fontSize: 9, color: dim, marginBottom: 4 }}>ETA</div>
            <div style={{ fontSize: 14, color: '#fff', fontWeight: 500 }}>12:40</div>
          </Panel>
        </div>
      )
    case 'aerospace-defense':
      return <AnimatedIcon icon="ti-satellite" badgeLabel="DOWNLINK" badgeValue="Active" />
    case 'agriculture':
      return <AnimatedIcon icon="ti-plant-2" badgeLabel="SOIL MOISTURE" badgeValue="72%" />
    case 'automotive':
      return <AnimatedIcon icon="ti-car" badgeLabel="CHARGE" badgeValue="84%" />
    case 'consumer-goods':
      return <AnimatedIcon icon="ti-package" badgeLabel="ORDERS" badgeValue="1,204" />
    case 'energy-utilities':
      return <AnimatedIcon icon="ti-bolt" badgeLabel="GRID LOAD" badgeValue="92%" />
    case 'government':
      return <AnimatedIcon icon="ti-building-bank" badgeLabel="REQUESTS" badgeValue="Verified" />
    case 'hospitality-travel':
      return <AnimatedIcon icon="ti-bed" badgeLabel="ROOM 208" badgeValue="Unlocked" />
    case 'manufacturing':
      return <AnimatedIcon icon="ti-building-factory" badgeLabel="LINE 04" badgeValue="Running" />
    case 'media-entertainment':
      return <AnimatedIcon icon="ti-movie" badgeLabel="LIVE" badgeValue="4K" />
    case 'professional-services':
      return <AnimatedIcon icon="ti-briefcase" badgeLabel="CASES" badgeValue="38 Active" />
    case 'technology':
      return <AnimatedIcon icon="ti-cpu" badgeLabel="DEPLOYS" badgeValue="12 Today" />
    case 'telecommunications':
      return <AnimatedIcon icon="ti-antenna" badgeLabel="NETWORK" badgeValue="5G" />
    default:
      return <AnimatedIcon icon="ti-sparkles" badgeLabel="STATUS" badgeValue="Online" />
  }
}

export default function Page({ params }: { params: { lang: Lang } }) {
  const lang = (params.lang === 'en' ? 'en' : 'th') as Lang
  const isEN = lang === 'en'
  const tr = t[lang] as any
  const prefix = `/${lang}`

  const industries = [
    { slug: 'aerospace-defense', icon: 'ti-satellite', title: isEN ? 'Aerospace & Defense' : 'การบินและอวกาศ & กลาโหม', href: '/industries/aerospace-defense', desc: isEN ? 'Secure software and data systems for aerospace and defense organizations.' : 'ซอฟต์แวร์และระบบข้อมูลที่ปลอดภัยสำหรับองค์กรด้านการบินและกลาโหม' },
    { slug: 'agriculture', icon: 'ti-plant-2', title: isEN ? 'Agriculture' : 'เกษตรกรรม', href: '/industries/agriculture', desc: isEN ? 'AgTech solutions for modern farming and food production.' : 'โซลูชัน AgTech สำหรับการเกษตรและการผลิตอาหารยุคใหม่' },
    { slug: 'automotive', icon: 'ti-car', title: isEN ? 'Automotive' : 'ยานยนต์', href: '/industries/automotive', desc: isEN ? 'Connected vehicle and automotive industry solutions.' : 'โซลูชันสำหรับยานยนต์เชื่อมต่อและอุตสาหกรรมยานยนต์' },
    { slug: 'consumer-goods', icon: 'ti-package', title: isEN ? 'Consumer Goods' : 'สินค้าอุปโภคบริโภค', href: '/industries/consumer-goods', desc: isEN ? 'Digital transformation for consumer product companies.' : 'การปรับสู่ดิจิทัลสำหรับบริษัทสินค้าอุปโภคบริโภค' },
    { slug: 'education', icon: 'ti-school', title: isEN ? 'Education' : 'การศึกษา', href: '/industries/education', desc: isEN ? 'Transform learning with modern educational technology.' : 'ยกระดับการเรียนรู้ด้วยเทคโนโลยีการศึกษาสมัยใหม่' },
    { slug: 'energy-utilities', icon: 'ti-bolt', title: isEN ? 'Energy & Utilities' : 'พลังงานและสาธารณูปโภค', href: '/industries/energy-utilities', desc: isEN ? 'Smart solutions for energy management and utility services.' : 'โซลูชันอัจฉริยะสำหรับการจัดการพลังงานและสาธารณูปโภค' },
    { slug: 'fintech', icon: 'ti-building-bank', title: isEN ? 'Financial Services' : 'บริการทางการเงิน', href: '/industries/fintech', desc: isEN ? 'Digital solutions for banks, insurance, and financial institutions.' : 'Digital Banking และ Payment ที่ปลอดภัยและ Compliant ตามมาตรฐาน ธปท.' },
    { slug: 'government', icon: 'ti-building-bank', title: isEN ? 'Government & Public Sector' : 'ภาครัฐและหน่วยงานสาธารณะ', href: '/industries/government', desc: isEN ? 'Digital services for government and public institutions.' : 'บริการดิจิทัลสำหรับภาครัฐและหน่วยงานสาธารณะ' },
    { slug: 'healthcare', icon: 'ti-heartbeat', title: isEN ? 'Healthcare & Life Sciences' : 'สุขภาพและวิทยาศาสตร์ชีวภาพ', href: '/industries/healthcare', desc: isEN ? 'Technology solutions that improve patient care and medical research.' : 'เทคโนโลยีที่ยกระดับการดูแลผู้ป่วยและงานวิจัยทางการแพทย์' },
    { slug: 'hospitality-travel', icon: 'ti-bed', title: isEN ? 'Hospitality & Travel' : 'การบริการและการท่องเที่ยว', href: '/industries/hospitality-travel', desc: isEN ? 'Enhance guest experiences with innovative technology solutions.' : 'ยกระดับประสบการณ์ผู้เข้าพักด้วยเทคโนโลยีที่ล้ำสมัย' },
    { slug: 'manufacturing', icon: 'ti-building-factory', title: isEN ? 'Manufacturing & Industrials' : 'การผลิตและอุตสาหกรรม', href: '/industries/manufacturing', desc: isEN ? 'Digital transformation for modern manufacturing operations.' : 'การปรับสู่ดิจิทัลสำหรับการดำเนินงานการผลิตยุคใหม่' },
    { slug: 'media-entertainment', icon: 'ti-movie', title: isEN ? 'Media & Entertainment' : 'สื่อและบันเทิง', href: '/industries/media-entertainment', desc: isEN ? 'Digital platforms for content creation and distribution.' : 'แพลตฟอร์มดิจิทัลสำหรับสร้างและกระจายคอนเทนต์' },
    { slug: 'professional-services', icon: 'ti-briefcase', title: isEN ? 'Professional Services' : 'บริการวิชาชีพ', href: '/industries/professional-services', desc: isEN ? 'Digital tools for consulting, legal, and business services.' : 'เครื่องมือดิจิทัลสำหรับที่ปรึกษา กฎหมาย และธุรกิจบริการ' },
    { slug: 'real-estate', icon: 'ti-building-skyscraper', title: isEN ? 'Real Estate' : 'อสังหาริมทรัพย์', href: '/industries/real-estate', desc: isEN ? 'Property technology solutions for the modern real estate industry.' : 'แพลตฟอร์มดิจิทัลสำหรับค้นหา จัดการ และขายอสังหาฯ' },
    { slug: 'retail', icon: 'ti-shopping-cart', title: isEN ? 'Retail & E-commerce' : 'ค้าปลีก & อีคอมเมิร์ซ', href: '/industries/retail', desc: isEN ? 'Build engaging shopping experiences that drive conversions.' : 'สร้างประสบการณ์ช้อปปิ้งที่น่าดึงดูดและเพิ่ม Conversion' },
    { slug: 'technology', icon: 'ti-cpu', title: isEN ? 'Technology & Hi-Tech' : 'เทคโนโลยีและไฮเทค', href: '/industries/technology', desc: isEN ? 'Solutions for technology companies and startups.' : 'โซลูชันสำหรับบริษัทเทคโนโลยีและสตาร์ทอัพ' },
    { slug: 'telecommunications', icon: 'ti-antenna', title: isEN ? 'Telecommunications' : 'โทรคมนาคม', href: '/industries/telecommunications', desc: isEN ? 'Next-generation solutions for telecom providers.' : 'โซลูชันยุคใหม่สำหรับผู้ให้บริการโทรคมนาคม' },
    { slug: 'logistics', icon: 'ti-truck-delivery', title: isEN ? 'Transportation & Logistics' : 'คมนาคมและโลจิสติกส์', href: '/industries/logistics', desc: isEN ? 'Optimize supply chains and transportation networks.' : 'ระบบซัพพลายเชน ขนส่ง และคลังสินค้าที่ฉลาดขึ้น' },
  ]

  return (
    <>
      <Navbar lang={lang} tr={tr} />
      <main>
        {/* Hero */}
        <section className="pt-[80px] bg-white">
          <div className="h-1 w-full" style={{ background: 'linear-gradient(90deg,var(--purple),var(--purple-light),var(--lime))' }} />
          <div className="max-w-5xl mx-auto px-6 lg:px-10 pt-20 lg:pt-28 pb-16 text-center">
            <p className="t-label mb-5">{isEN ? 'Industries' : 'อุตสาหกรรม'}</p>
            <h1 className="t-display text-[clamp(2.6rem,5.5vw,4.8rem)] text-[#0A0A0F] leading-none mb-6">
              {isEN ? (
                <>Built for Your<br /><span style={{ background: 'linear-gradient(135deg,var(--purple) 0%,var(--purple-light) 50%,var(--lime) 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Industry</span></>
              ) : (
                <>โซลูชันที่เข้าใจ<br /><span style={{ background: 'linear-gradient(135deg,var(--purple) 0%,var(--purple-light) 50%,var(--lime) 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>ธุรกิจคุณจริงๆ</span></>
              )}
            </h1>
            <p className="t-body text-lg leading-relaxed max-w-2xl mx-auto">
              {isEN
                ? 'Every industry has different rules, users, and risks. We bring domain-specific expertise to every product we build.'
                : 'แต่ละอุตสาหกรรมมีกฎ ผู้ใช้ และความเสี่ยงที่ต่างกัน เรานำความเชี่ยวชาญเฉพาะด้านมาใช้ในทุกผลิตภัณฑ์ที่สร้าง'}
            </p>
          </div>
        </section>

        {/* Industries grid */}
        <section className="pb-24 pt-4" style={{ background: '#08070E' }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-10 py-12">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14">
              {industries.map((it) => (
                <Link key={it.href} href={`${prefix}${it.href}`} className="group flex flex-col">
                  <div
                    className="relative h-56 rounded-2xl overflow-hidden mb-6 group-hover:border-[var(--purple-light)]/40 transition-colors"
                    style={{ background: 'linear-gradient(160deg,#171025 0%,#0B0813 100%)', border: '1px solid rgba(255,255,255,0.07)' }}
                  >
                    <div className="absolute inset-0 opacity-[0.08] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle,#fff 1px,transparent 1px)', backgroundSize: '18px 18px' }} />
                    <IndustryVisual slug={it.slug} />
                  </div>
                  <h3 className="text-white mb-2.5" style={{ fontWeight: 500, fontSize: '1.2rem' }}>{it.title}</h3>
                  <p className="text-sm leading-relaxed mb-4" style={{ color: 'rgba(255,255,255,0.85)', fontWeight: 400 }}>{it.desc}</p>
                  <span className="inline-flex items-center gap-1.5 text-sm mt-auto" style={{ color: 'var(--lime)', fontWeight: 500 }}>
                    {isEN ? 'Learn more' : 'ดูเพิ่มเติม'}
                    <i className="ti ti-arrow-right text-sm group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 lg:py-32 relative overflow-hidden" style={{ background: 'linear-gradient(135deg,#2D1B69 0%,var(--purple) 40%,var(--purple-light) 100%)' }}>
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle,#fff 1px,transparent 1px)', backgroundSize: '28px 28px' }} />
          <div className="relative max-w-4xl mx-auto px-4 lg:px-10 text-center">
            <p className="mb-6" style={{ color: '#ffffff', fontSize: '0.85rem', fontWeight: 400 }}>{isEN ? 'Start Today' : 'เริ่มต้นวันนี้'}</p>
            <h2 className="t-display mb-4 leading-tight" style={{ color: '#ffffff', fontSize: 'clamp(2rem,4vw,4rem)', fontWeight: 500 }}>
              {isEN ? "Don't See Your Industry?" : 'ไม่เห็นอุตสาหกรรมของคุณ?'}
            </h2>
            <p className="text-white text-base mb-10 max-w-lg mx-auto" style={{ fontWeight: 400 }}>
              {isEN ? 'Tell us about your business and we will show you how we can help.' : 'เล่าให้เราฟังเรื่องธุรกิจของคุณ แล้วเราจะแสดงให้เห็นว่าเราช่วยอะไรได้บ้าง'}
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href={`${prefix}/contact`} className="inline-flex items-center gap-2 px-10 py-4 bg-white rounded-full text-sm font-medium hover:bg-[var(--purple-bg)] transition-colors" style={{ color: 'var(--purple)', fontWeight: 400 }}>
                {isEN ? 'Talk to Us' : 'คุยกับเรา'}
                <i className="ti ti-arrow-right" style={{ fontSize: 15 }} aria-hidden="true" />
              </Link>
              <Link href="mailto:wu@haliviq.com" className="inline-flex items-center gap-2 px-10 py-4 border border-white/30 text-white rounded-full text-sm hover:border-white/60 transition-colors" style={{ fontWeight: 400 }}>
                wu@haliviq.com
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer lang={lang} tr={tr} />
    </>
  )
}
