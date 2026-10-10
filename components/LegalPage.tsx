import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { t, type Lang } from '@/lib/i18n'

export type LegalSection = { title: string; body?: string; items?: string[]; note?: string }

export default function LegalPage({ lang, title, sections, intro }: { lang: Lang; title: string; sections: LegalSection[]; intro?: string }) {
  const isEN = lang === 'en'
  const tr = t[lang] as any
  return (
    <>
      <Navbar lang={lang} tr={tr} transparent />
      <main>
        <section className="relative overflow-hidden pt-[80px]" style={{ background: 'var(--bg)' }}>
          <div className="absolute inset-0 pointer-events-none opacity-[0.35]" style={{ backgroundImage: 'radial-gradient(rgb(var(--fg) / 0.14) 1px, transparent 1px)', backgroundSize: '22px 22px' }} />
          <div className="absolute -top-40 -left-32 w-[560px] h-[560px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(123,110,246,0.28) 0%, transparent 70%)', filter: 'blur(20px)' }} />
          <div className="relative max-w-3xl mx-auto px-6 lg:px-10 pt-20 lg:pt-28 pb-16 text-center">
            <p className="t-label mb-5" style={{ color: 'rgb(var(--fg) / 0.6)' }}>{isEN ? 'Legal' : 'กฎหมาย'}</p>
            <h1 className="t-display text-[clamp(2.4rem,5vw,4rem)] leading-relaxed mb-5" style={{ color: 'var(--ink)' }}>{title}</h1>
            <p className="text-sm" style={{ color: 'rgb(var(--fg) / 0.5)', fontWeight: 400 }}>{isEN ? 'Last updated: October 5, 2026' : 'ปรับปรุงล่าสุด: 5 ตุลาคม 2569'}</p>
          </div>
        </section>
        <section className="pb-24 pt-4" style={{ background: 'var(--bg)' }}>
          <div className="max-w-3xl mx-auto px-6 lg:px-10 py-12">
            {intro && (
              <p className="leading-relaxed mb-10" style={{ color: 'rgb(var(--fg) / 0.85)', fontSize: '1.1rem', fontWeight: 400 }}>{intro}</p>
            )}
            <nav aria-label={isEN ? 'Contents' : 'สารบัญ'} className="rounded-2xl p-6 mb-14" style={{ background: 'rgb(var(--fg) / 0.04)', border: '1px solid rgb(var(--fg) / 0.08)' }}>
              <p className="mb-3 text-xs uppercase tracking-widest" style={{ color: 'rgb(var(--fg) / 0.5)', fontWeight: 500 }}>{isEN ? 'Contents' : 'สารบัญ'}</p>
              <ol className="grid sm:grid-cols-2 gap-x-8 gap-y-1.5 text-sm">
                {sections.map((s, i) => (
                  <li key={s.title}>
                    <a href={`#section-${i + 1}`} className="hover:text-[color:var(--ink)] transition-colors" style={{ color: 'var(--accent)', fontWeight: 400 }}>{s.title}</a>
                  </li>
                ))}
              </ol>
            </nav>
            <div className="space-y-12">
              {sections.map((s, i) => (
                <div key={s.title} id={`section-${i + 1}`} className="scroll-mt-28">
                  <h2 className="mb-4" style={{ color: 'var(--ink)', fontWeight: 500, fontSize: '1.4rem' }}>{s.title}</h2>
                  {s.body && <p className="leading-relaxed mb-4" style={{ color: 'rgb(var(--fg) / 0.72)', fontSize: '1rem', fontWeight: 400 }}>{s.body}</p>}
                  {s.items && (
                    <ul className="space-y-2.5 mb-4">
                      {s.items.map((it) => (
                        <li key={it} className="flex gap-3 leading-relaxed" style={{ color: 'rgb(var(--fg) / 0.72)', fontSize: '1rem', fontWeight: 400 }}>
                          <span className="mt-2.5 shrink-0 w-1.5 h-1.5 rounded-full" style={{ background: 'var(--lime)' }} />
                          <span>{it}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  {s.note && <p className="leading-relaxed text-sm" style={{ color: 'rgb(var(--fg) / 0.5)', fontWeight: 400 }}>{s.note}</p>}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer lang={lang} tr={tr} />
    </>
  )
}
