import { type Lang, type T } from '@/lib/i18n'
type Props = { lang: Lang; tr: T }

export default function About({ tr }: Props) {
  const a = tr.about
  return (
    <section id="about" className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          <div>
            <p className="t-label mb-5">{a.label}</p>
            <h2 className="t-display text-[clamp(2.2rem,4.5vw,3.8rem)] mb-8">
              {a.h2a}<br/>
              <span style={{background:'linear-gradient(135deg,var(--purple),var(--lime))',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent',backgroundClip:'text'}}>{a.h2b}</span>
            </h2>
            <p className="t-body mb-5">{a.p1}</p>
            <p className="t-body mb-10">{a.p2}</p>
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-[#E4E4EC]">
              {[{n:'120+',i:0},{n:'8'+( a.stats[1]==='ประสบการณ์'?' ปี':' yrs'),i:1},{n:'95%',i:2}].map((s,idx) => (
                <div key={idx}>
                  <div className="stat-num">{['120+','8','95%'][idx]}{idx===1&&(a.stats[1]==='ประสบการณ์'?' ปี':' yrs')}</div>
                  <p className="text-xs text-[#70708A] mt-1" style={{fontWeight:400}}>{a.stats[idx]}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {a.pillars.map((p,i) => (
              <div key={i} className="card p-6">
                <div className="w-8 h-8 rounded-xl bg-[var(--purple-bg)] flex items-center justify-center mb-4">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full text-sm" style={{fontWeight:700,background:'var(--purple-bg)',color:'var(--purple)'}}>0{i+1}</span>
                </div>
                <h4 className="text-[#0A0A0F] mb-2" style={{fontWeight:500,fontSize:'1.3rem'}}>{p.title}</h4>
                <p className="t-body" style={{fontSize:'0.95rem',fontWeight:400}}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
