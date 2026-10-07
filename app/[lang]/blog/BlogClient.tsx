'use client'
import { useState } from 'react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { t, type Lang } from '@/lib/i18n'
import { articles, blogCategories, coverOf, formatDate, type BlogCat } from '@/lib/blog-data'

const catLabel: Record<BlogCat, { en: string; th: string }> = {
  Technology: { en: 'Technology', th: 'เทคโนโลยี' },
  AI: { en: 'AI', th: 'AI' },
  Design: { en: 'Design & UX', th: 'ดีไซน์และ UX' },
  Business: { en: 'Business', th: 'ธุรกิจ' },
  'Case Study': { en: 'Case Studies', th: 'กรณีศึกษา' },
}

export default function BlogClient({ lang, newsletter }: { lang: Lang; newsletter: React.ReactNode }) {
  const isEN = lang === 'en'
  const tr = t[lang] as any
  const [active, setActive] = useState<BlogCat | 'all'>('all')
  const featured = articles[0]
  const list = articles.filter((a) => a.slug !== featured.slug && (active === 'all' || a.cat === active))
  const f = featured[lang]
  const objPos = (a: { cat: BlogCat }) => (a.cat === 'Case Study' ? 'center top' : 'center')

  return (
    <>
      <Navbar lang={lang} tr={tr} transparent />
      <main>
        <section className="relative overflow-hidden pt-[80px]" style={{ background: '#08070F' }}>
          <div className="absolute inset-0 pointer-events-none opacity-[0.35]" style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.14) 1px, transparent 1px)', backgroundSize: '22px 22px' }} />
          <div className="absolute -top-40 -left-32 w-[560px] h-[560px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(123,110,246,0.28) 0%, transparent 70%)', filter: 'blur(20px)' }} />
          <div className="relative max-w-7xl mx-auto px-6 lg:px-10 pt-20 lg:pt-28 pb-16">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
              <div>
                <p className="t-label mb-5">{isEN ? 'Insights' : 'บทความ'}</p>
                <h1 className="t-display text-[clamp(2.8rem,6.5vw,6rem)]" style={{ color: '#fff', lineHeight: 1.3 }}>
                  {isEN ? <>Ideas &amp;<br /><span style={{ background: 'linear-gradient(135deg,var(--purple) 0%,var(--purple-light) 50%,var(--lime) 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Knowledge</span></>
                    : <>ความรู้และ<br /><span style={{ background: 'linear-gradient(135deg,var(--purple) 0%,var(--purple-light) 50%,var(--lime) 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>เรื่องที่ควรรู้</span></>}
                </h1>
              </div>
              <p className="text-sm max-w-md leading-relaxed" style={{ color: 'rgba(255,255,255,0.75)', fontWeight: 400 }}>
                {isEN
                  ? 'Twenty articles on what is shaping digital products worldwide: AI, technology, design, regulation and business, plus real case studies from our Bangkok studio. Written to be useful, not to sell.'
                  : 'บทความ 20 เรื่อง เล่าสิ่งที่กำลังเปลี่ยนวงการผลิตภัณฑ์ดิจิทัลทั่วโลก ทั้ง AI เทคโนโลยี ดีไซน์ กฎระเบียบ และธุรกิจ พร้อมกรณีศึกษาจริงจากสตูดิโอของเราในกรุงเทพฯ เขียนให้อ่านแล้วเอาไปใช้ได้'}
              </p>
            </div>

            <Link href={`/${lang}/blog/${featured.slug}`} className="group block rounded-3xl overflow-hidden" style={{ border: '1px solid rgba(255,255,255,0.1)' }}>
              <div className="grid lg:grid-cols-2">
                <div className="relative min-h-[260px] lg:min-h-[380px] overflow-hidden">
                  <img src={coverOf(featured)} alt={f.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" style={{ objectPosition: objPos(featured) }} />
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center" style={{ background: '#141329' }}>
                  <div className="flex items-center gap-3 mb-5">
                    <span className="px-3 py-1 rounded-full text-xs" style={{ background: 'rgba(123,110,246,0.15)', color: 'var(--purple-light)' }}>{catLabel[featured.cat][lang]}</span>
                    <span className="text-sm" style={{ color: 'rgba(255,255,255,0.5)' }}>{formatDate(featured.date, lang)} · {featured.readMin} {isEN ? 'min read' : 'นาที'}</span>
                  </div>
                  <h2 className="t-display text-[clamp(1.5rem,2.4vw,2.1rem)] mb-5" style={{ color: '#fff', lineHeight: 1.45 }}>{f.title}</h2>
                  <p className="text-sm leading-relaxed mb-7" style={{ color: 'rgba(255,255,255,0.72)', lineHeight: 1.8 }}>{f.excerpt}</p>
                  <span className="text-base flex items-center gap-1.5 group-hover:gap-3 transition-all" style={{ color: 'var(--purple-light)' }}>
                    {isEN ? 'Read article' : 'อ่านบทความ'} <i className="ti ti-arrow-right" style={{ fontSize: 14 }} aria-hidden="true" />
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </section>

        <section className="py-16 lg:py-24" style={{ background: '#08070F' }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="flex flex-wrap gap-2 mb-10" role="tablist" aria-label={isEN ? 'Filter by topic' : 'กรองตามหัวข้อ'}>
              {(['all', ...blogCategories] as const).map((c) => {
                const on = active === c
                return (
                  <button key={c} role="tab" aria-selected={on} onClick={() => setActive(c)}
                    className="px-4 py-2 rounded-full text-sm transition-colors"
                    style={{ background: on ? 'var(--purple)' : 'rgba(255,255,255,0.05)', color: on ? '#fff' : 'rgba(255,255,255,0.75)', border: `1px solid ${on ? 'var(--purple)' : 'rgba(255,255,255,0.12)'}` }}>
                    {c === 'all' ? (isEN ? 'All' : 'ทั้งหมด') : catLabel[c][lang]}
                  </button>
                )
              })}
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {list.map((a) => {
                const l = a[lang]
                return (
                  <Link key={a.slug} href={`/${lang}/blog/${a.slug}`} className="group flex flex-col rounded-3xl overflow-hidden transition-all duration-300 hover:-translate-y-1"
                    style={{ background: 'rgba(255,255,255,0.035)', border: '1px solid rgba(255,255,255,0.1)' }}>
                    <div className="relative w-full overflow-hidden" style={{ aspectRatio: '16/10' }}>
                      <img src={coverOf(a)} alt={l.title} loading="lazy" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]" style={{ objectPosition: objPos(a) }} />
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="px-3 py-1 rounded-full text-xs" style={{ background: 'rgba(123,110,246,0.15)', color: 'var(--purple-light)' }}>{catLabel[a.cat][lang]}</span>
                        <span className="text-xs" style={{ color: 'rgba(255,255,255,0.5)' }}>{formatDate(a.date, lang)} · {a.readMin} {isEN ? 'min' : 'นาที'}</span>
                      </div>
                      <h3 className="mb-3 group-hover:text-[var(--purple-light)] transition-colors" style={{ color: '#fff', fontWeight: 600, fontSize: '1.12rem', lineHeight: 1.5 }}>{l.title}</h3>
                      <p className="mb-5 line-clamp-3" style={{ color: 'rgba(255,255,255,0.62)', fontSize: '0.88rem', lineHeight: 1.75 }}>{l.excerpt}</p>
                      <span className="mt-auto text-sm flex items-center gap-1.5 group-hover:gap-2.5 transition-all" style={{ color: 'var(--purple-light)' }}>
                        {isEN ? 'Read article' : 'อ่านบทความ'} <i className="ti ti-arrow-up-right" style={{ fontSize: 13 }} aria-hidden="true" />
                      </span>
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
        </section>
        {newsletter}
      </main>
      <Footer lang={lang} tr={tr} />
    </>
  )
}
