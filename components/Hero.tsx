'use client'
import Link from 'next/link'
import { type Lang, type T } from '@/lib/i18n'

type Props = { lang: Lang; tr: T }

export default function Hero({ lang, tr }: Props) {
  const h = tr.hero
  const prefix = `/${lang}`

  return (
    <section className="relative overflow-hidden" style={{minHeight:'100vh', background:'#050310'}}>
      {/* Purple dune landscape background — slow Ken Burns zoom */}
      <img src="/images/hero/dune-bg.jpg" alt=""
        className="absolute inset-0 w-full h-full object-cover"
        style={{zIndex:0, animation:'heroKenBurns 22s ease-in-out infinite', transformOrigin:'center center', willChange:'transform'}}/>
      {/* Soft glow pulse layer */}
      <div className="absolute inset-0 pointer-events-none" style={{
        zIndex:1,
        background:'radial-gradient(circle at 50% 40%, rgba(168,110,246,0.35) 0%, transparent 60%)',
        animation:'heroGlowPulse 6s ease-in-out infinite',
      }}/>
      {/* Soft top-to-bottom overlay for nav + text legibility */}
      <div className="absolute inset-0" style={{background:'linear-gradient(180deg, rgba(5,3,16,0.55) 0%, rgba(5,3,16,0.15) 30%, rgba(5,3,16,0.1) 55%, rgba(5,3,16,0.65) 100%)', zIndex:2}}/>

      <div className="relative flex flex-col" style={{zIndex:3, minHeight:'100vh'}}>
        <div className="flex-1 flex items-center justify-center">
          <div className="max-w-5xl mx-auto px-4 lg:px-10 text-center">
            {/* Tagline — thin, wide letter-spacing, brand mark */}
            <p className="fade-up" style={{animationDelay:'0s', fontFamily:'var(--font-main)', fontWeight:400, fontSize:'clamp(0.65rem,1.1vw,0.85rem)', letterSpacing:'0.35em', color:'rgba(244,242,255,0.8)', textTransform:'uppercase', marginBottom:'1.75rem'}}>
              Human Ideas. Intelligent Future.
            </p>

            <h1 className="t-display text-[clamp(2.75rem,6vw,5.5rem)] mb-6 fade-up" style={{animationDelay:'0.1s', color:'#fff'}}>
              {h.h1a} <span style={{background:'linear-gradient(135deg,var(--purple-light) 0%,#8CD8E3 100%)',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent',backgroundClip:'text'}}>{h.h1b}</span> {h.h1c}
            </h1>

            <p className="t-body max-w-xl mx-auto mb-10 fade-up" style={{animationDelay:'0.2s', fontSize:'1.05rem', color: 'rgba(255,255,255,0.85)', fontWeight:400}}>
              {h.sub}
            </p>

            <div className="flex justify-center fade-up" style={{animationDelay:'0.3s'}}>
              <Link href={`${prefix}/work`}
                className="inline-flex items-center gap-2 rounded-full transition-transform hover:scale-[1.03]"
                style={{fontSize:'1rem', fontWeight:500, padding:'14px 30px', background:'#2B1764', color:'#fff'}}>
                {h.btn2}
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M7 2v9M3 7l4 4 4-4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Wordmark — sits low, glowing over the dune valley like the brand key art */}
        <div className="flex justify-center fade-up pb-10" style={{animationDelay:'0.4s'}}>
          <img src="/haliviq-logo-light.svg" alt="Haliviq"
            className="w-auto opacity-90" style={{height:'clamp(24px,4vw,40px)', filter:'drop-shadow(0 0 24px rgba(165,119,253,0.55))'}}/>
        </div>

        {/* Client logo strip — pinned to the bottom edge of the hero, like OOZOU */}
        <div className="border-t border-white/10" style={{background:'rgba(10,7,22,0.55)', backdropFilter:'blur(16px)'}}>
          <div className="max-w-7xl mx-auto px-4 lg:px-10 flex flex-wrap items-center justify-center gap-x-12 gap-y-4 py-7">
            {h.statsN.map((n, i) => (
              <div key={i} className="text-center">
                <span className="stat-num" style={{color:'#fff', fontSize:'1.35rem'}}>{n}</span>
                <span className="ml-2 text-xs" style={{fontWeight:400, color: 'rgba(255,255,255,0.85)'}}>{h.stats[i]}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
