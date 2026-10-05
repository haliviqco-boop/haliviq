import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { t, type Lang } from '@/lib/i18n'

export async function generateStaticParams() {
  return [{ lang: 'th' }, { lang: 'en' }]
}

export async function generateMetadata({ params }: { params: { lang: Lang } }): Promise<Metadata> {
  const isEN = params.lang === 'en'
  const title = isEN
    ? 'About Us — Our Team & Story | Haliviq'
    : 'เกี่ยวกับเรา — ทีมงานและเรื่องราวของเรา | Haliviq'
  const description = isEN
    ? 'Meet the team behind Haliviq — a Bangkok-based digital product studio building software and AI solutions for ambitious businesses.'
    : 'รู้จักทีมงานเบื้องหลัง Haliviq สตูดิโอพัฒนาผลิตภัณฑ์ดิจิทัลในกรุงเทพฯ ที่สร้างซอฟต์แวร์และโซลูชัน AI ให้ธุรกิจที่มีความทะเยอทะยาน'
  const siteUrl = `https://haliviq.com/${params.lang}/about`
  return {
    title,
    description,
    alternates: { canonical: siteUrl },
    openGraph: { title, description, url: siteUrl },
    twitter: { card: 'summary_large_image', title, description },
  }
}

const team = [
  {
    photo: '/images/team/thanapoom.jpg',
    name: 'Thanapoom Utoxpach',
    nickname: 'WU',
    titleEN: 'Business Development Director',
    titleTH: 'ผู้อำนวยการฝ่ายพัฒนาธุรกิจ',
  },
  {
    photo: '/images/team/shalisa.jpg',
    name: 'Shalisa Sangthada',
    nickname: 'AM',
    titleEN: 'Chief Executive Officer',
    titleTH: 'ประธานเจ้าหน้าที่บริหาร',
  },
  {
    photo: '/images/team/padol.jpg',
    name: 'Padol Thamsirisakul',
    nickname: 'DOL',
    titleEN: 'Project Manager',
    titleTH: 'ผู้จัดการโครงการ',
  },
]

export default function Page({ params }: { params: { lang: Lang } }) {
  const lang = (params.lang === 'en' ? 'en' : 'th') as Lang
  const isEN = lang === 'en'
  const tr = t[lang] as any
  const a = tr.about
  const prefix = `/${lang}`

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: isEN ? 'About Haliviq' : 'เกี่ยวกับ Haliviq',
    url: `https://haliviq.com/${lang}/about`,
    mainEntity: {
      '@type': 'Organization',
      name: 'Haliviq',
      url: 'https://haliviq.com',
      employee: team.map((m) => ({
        '@type': 'Person',
        name: m.name,
        jobTitle: isEN ? m.titleEN : m.titleTH,
      })),
    },
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
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
          <div className="relative max-w-5xl mx-auto px-6 lg:px-10 pt-20 lg:pt-28 pb-16 text-center">
            <p className="t-label mb-5" style={{ color: 'rgba(255,255,255,0.6)' }}>{a.label}</p>
            <h1 className="t-display text-[clamp(2.6rem,5.5vw,4.8rem)] leading-relaxed mb-6" style={{ color: '#fff' }}>
              {a.h2a}
              <br />
              <span style={{ background: 'linear-gradient(135deg,var(--purple) 0%,var(--purple-light) 50%,var(--lime) 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                {a.h2b}
              </span>
            </h1>
            <p className="text-lg leading-relaxed max-w-2xl mx-auto mb-4" style={{ color: 'rgba(255,255,255,0.7)', fontWeight: 400 }}>
              {a.p1}
            </p>
            <p className="text-lg leading-relaxed max-w-2xl mx-auto" style={{ color: 'rgba(255,255,255,0.7)', fontWeight: 400 }}>
              {a.p2}
            </p>

            <div className="grid grid-cols-3 gap-6 max-w-lg mx-auto mt-14 pt-10" style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}>
              {['120+', isEN ? '8 yrs' : '8 ปี', '95%'].map((n, idx) => (
                <div key={idx}>
                  <div className="t-display" style={{ fontSize: 'clamp(1.6rem,3vw,2.4rem)', color: '#fff' }}>{n}</div>
                  <p className="text-xs mt-1" style={{ color: 'rgba(255,255,255,0.5)', fontWeight: 400 }}>{a.stats[idx]}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pillars */}
        <section className="pb-24 pt-4" style={{ background: '#08070E' }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-10 py-12">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {a.pillars.map((p: { title: string; desc: string }, i: number) => (
                <div key={i} className="rounded-2xl p-6" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
                  <span className="inline-flex items-center justify-center w-9 h-9 rounded-full text-sm mb-4" style={{ fontWeight: 700, background: 'rgba(155,107,255,0.18)', color: 'var(--purple-light)' }}>
                    0{i + 1}
                  </span>
                  <h4 className="text-white mb-2" style={{ fontWeight: 500, fontSize: '1.1rem' }}>{p.title}</h4>
                  <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.65)', fontWeight: 400 }}>{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team / Leadership */}
        <section className="relative overflow-hidden py-24" style={{ background: '#0A0812' }}>
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.25]"
            style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.14) 1px, transparent 1px)', backgroundSize: '22px 22px' }}
          />
          <div
            className="absolute -bottom-40 -right-32 w-[560px] h-[560px] rounded-full pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgba(123,110,246,0.22) 0%, transparent 70%)', filter: 'blur(20px)' }}
          />
          <div className="relative max-w-6xl mx-auto px-6 lg:px-10">
            <div className="text-center mb-16">
              <p className="t-label mb-5" style={{ color: 'rgba(255,255,255,0.6)' }}>
                {isEN ? 'Leadership' : 'ทีมผู้บริหาร'}
              </p>
              <h2 className="t-display text-[clamp(2rem,4.2vw,3.4rem)] mb-5" style={{ color: '#fff' }}>
                {isEN ? 'The People Behind ' : 'คนที่อยู่เบื้องหลัง '}
                <span style={{ background: 'linear-gradient(135deg,var(--purple) 0%,var(--purple-light) 50%,var(--lime) 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                  Haliviq
                </span>
              </h2>
              <p className="text-base max-w-xl mx-auto" style={{ color: 'rgba(255,255,255,0.65)', fontWeight: 400 }}>
                {isEN
                  ? 'A small, senior team that stays close to every project — from strategy to delivery.'
                  : 'ทีมงานระดับมืออาชีพขนาดกะทัดรัด ที่ดูแลใกล้ชิดทุกโปรเจกต์ ตั้งแต่กลยุทธ์จนถึงส่งมอบงาน'}
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {team.map((m) => (
                <div
                  key={m.name}
                  className="group rounded-3xl overflow-hidden transition-colors"
                  style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
                >
                  <div className="relative overflow-hidden" style={{ aspectRatio: '4 / 5' }}>
                    <img
                      src={m.photo}
                      alt={m.name}
                      width={1122}
                      height={1402}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(180deg, transparent 60%, rgba(10,8,18,0.7) 100%)' }} />
                  </div>
                  <div className="p-6">
                    <h3 className="text-white mb-1" style={{ fontWeight: 500, fontSize: '1.25rem' }}>
                      {m.name} <span style={{ color: 'var(--lime)', fontWeight: 500 }}>&ldquo;{m.nickname}&rdquo;</span>
                    </h3>
                    <p className="text-sm" style={{ color: 'rgba(255,255,255,0.6)', fontWeight: 400 }}>
                      {isEN ? m.titleEN : m.titleTH}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative overflow-hidden" style={{ background: '#050308' }}>
          <div
            className="absolute inset-0 pointer-events-none opacity-40"
            style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), radial-gradient(rgba(255,255,255,0.3) 1px, transparent 1px)', backgroundSize: '180px 180px, 260px 260px', backgroundPosition: '0 0, 90px 130px' }}
          />
          <div
            className="absolute left-0 right-0 bottom-0 pointer-events-none"
            style={{ height: 260, background: 'radial-gradient(ellipse 70% 100% at 50% 100%, rgba(123,110,246,0.35) 0%, rgba(83,195,215,0.08) 45%, transparent 75%)' }}
          />
          <div className="relative max-w-4xl mx-auto px-4 lg:px-10 py-24 lg:py-32 text-center">
            <p className="text-sm tracking-widest uppercase mb-6" style={{ color: '#fff', fontWeight: 500 }}>
              {isEN ? 'Start Today' : 'เริ่มต้นวันนี้'}
            </p>
            <h2
              className="t-display mb-6 leading-tight"
              style={{ background: 'linear-gradient(135deg, var(--purple-light) 0%, #53C3D7 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', fontSize: 'clamp(2rem,4vw,4rem)' }}
            >
              {isEN ? "Let's Build Something Together" : 'มาสร้างสิ่งที่ยิ่งใหญ่ไปด้วยกัน'}
            </h2>
            <p className="text-base mb-10 max-w-lg mx-auto" style={{ color: 'rgba(255,255,255,0.7)', fontWeight: 400 }}>
              {isEN ? 'Tell us about your business and we will show you how we can help.' : 'เล่าให้เราฟังเรื่องธุรกิจของคุณ แล้วเราจะแสดงให้เห็นว่าเราช่วยอะไรได้บ้าง'}
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href={`${prefix}/contact`} className="inline-flex items-center gap-2 px-10 py-4 rounded-full text-sm transition-opacity hover:opacity-90" style={{ background: 'linear-gradient(135deg, var(--purple) 0%, var(--purple-dark) 100%)', color: '#fff', fontWeight: 500 }}>
                {isEN ? 'Talk to Us' : 'คุยกับเรา'}
                <i className="ti ti-arrow-right" style={{ fontSize: 15 }} aria-hidden="true" />
              </Link>
              <Link href="mailto:wu@haliviq.com" className="inline-flex items-center gap-2 px-10 py-4 rounded-full text-sm transition-colors" style={{ border: '1px solid rgba(255,255,255,0.3)', color: '#fff', fontWeight: 400 }}>
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
