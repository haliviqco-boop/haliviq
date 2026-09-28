import { type Lang, type T } from '@/lib/i18n'
type Props = { lang: Lang; tr: T }

export default function Process({ tr }: Props) {
  const p = tr.process
  return (
    <section className="bg-[#F7F7FC] py-16">
      <div className="max-w-7xl mx-auto px-4 lg:px-10">
        <div className="mb-16">
          <p className="t-label mb-5">{p.label}</p>
          <h2 className="t-display text-[clamp(2.4rem,5vw,4rem)]">
            {p.h2a}<br/>
            <span style={{background:'linear-gradient(135deg,var(--purple),var(--lime))',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent',backgroundClip:'text'}}>{p.h2b}</span>
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {p.steps.map((s) => (
            <div key={s.no} className="card p-7 group">
              <div className="flex items-center justify-between mb-4">
                <span style={{fontWeight:700,fontSize:'3rem',lineHeight:1,background:'linear-gradient(135deg,var(--purple),var(--lime))',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent',backgroundClip:'text'}}>{s.no}</span>
                <span className="pill text-xs">{s.time}</span>
              </div>
              <h3 className="text-[#0A0A0F] leading-snug mb-3 group-hover:text-[var(--purple)] transition-colors" style={{fontWeight:500,fontSize:'1.3rem'}}>{s.title}</h3>
              <p className="t-body" style={{fontSize:'0.82rem',fontWeight:400}}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
