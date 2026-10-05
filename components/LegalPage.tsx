import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { t, type Lang } from '@/lib/i18n'

export type LegalSection = { title: string; body: string }

export default function LegalPage({ lang, title, sections }: { lang: Lang; title: string; sections: LegalSection[] }) {
  const isEN = lang === 'en'
  const tr = t[lang] as any
  return (
    <>
      <Navbar lang={lang} tr={tr} transparent />
      <main>
        <section className="relative overflow-hidden pt-[80px]" style={{ background: '#08070F' }}>
          <div className="absolute inset-0 pointer-events-none opacity-[0.35]" style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.14) 1px, transparent 1px)', backgroundSize: '22px 22px' }} />
          <div className="absolute -top-40 -left-32 w-[560px] h-[560px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(123,110,246,0.28) 0%, transparent 70%)', filter: 'blur(20px)' }} />
          <div className="relative max-w-3xl mx-auto px-6 lg:px-10 pt-20 lg:pt-28 pb-16 text-center">
            <p className="t-label mb-5" style={{ color: 'rgba(255,255,255,0.6)' }}>{isEN ? 'Legal' : 'กฎหมาย'}</p>
            <h1 className="t-display text-[clamp(2.4rem,5vw,4rem)] leading-relaxed mb-5" style={{ color: '#fff' }}>{title}</h1>
            <p className="text-sm" style={{ color: 'rgba(255,255,255,0.5)', fontWeight: 400 }}>{isEN ? 'Last updated: October 5, 2026' : 'ปรับปรุงล่าสุด: 5 ตุลาคม 2569'}</p>
          </div>
        </section>
        <section className="pb-24 pt-4" style={{ background: '#08070E' }}>
          <div className="max-w-3xl mx-auto px-6 lg:px-10 py-12 space-y-10">
            {sections.map((s) => (
              <div key={s.title}>
                <h2 className="mb-3" style={{ color: '#fff', fontWeight: 500, fontSize: '1.3rem' }}>{s.title}</h2>
                <p className="leading-relaxed" style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1rem', fontWeight: 400 }}>{s.body}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer lang={lang} tr={tr} />
    </>
  )
}
