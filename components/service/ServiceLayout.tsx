import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { t, type Lang } from '@/lib/i18n'

type Feature  = { icon: string; title: string; desc: string; detail?: string }
type Step     = { no: string; title: string; desc: string; detail?: string }
type FAQ      = { q: string; a: string }
type Related  = { label: string; href: string }
type Outcome  = { stat: string; label: string; desc?: string }
type CaseStudy = { tag: string; title: string; result: string; desc: string; img?: string }

type Props = {
  lang?: Lang
  badge: string; title: string; subtitle: string; heroDesc?: string; heroBullets?: string[]
  color?: string; bg?: string
  heroImg?: string; whyImg?: string; whyImg2?: string; featureImg?: string; processImg?: string
  heroSlot?: React.ReactNode
  heroDark?: boolean
  heroCtaLabel?: string
  heroShowSecondaryCta?: boolean
  postHeroSlot?: React.ReactNode
  whyTitle?: string; whyDesc?: string; whyPoints?: string[]
  features?: Feature[]; steps?: Step[]; outcomes?: Outcome[]
  caseStudies?: CaseStudy[]; faqs?: FAQ[]; related?: Related[]
  ctaTitle?: string; ctaDesc?: string
}

const IP = ({ label, height=400, color='var(--purple)', bg='var(--purple-bg)' }: {label:string;height?:number;color?:string;bg?:string}) => (
  <div className="w-full rounded-2xl flex flex-col items-center justify-center gap-3"
    style={{background:bg, minHeight:height, border:`2px dashed ${color}25`}}>
    <div className="w-14 h-14 rounded-2xl flex items-center justify-center" style={{background:`${color}15`}}>
      <i className="ti ti-photo" style={{fontSize:26, color}} aria-hidden="true"/>
    </div>
    <p className="text-sm" style={{color, opacity:0.5, fontWeight:400}}>{label}</p>
    <p className="text-xs" style={{color, opacity:0.3, fontWeight:400}}>แนะนำ 1440 × 640px</p>
  </div>
)

export default function ServiceLayout({
  lang: langProp,
  badge, title, subtitle, heroDesc, heroBullets,
  color='var(--purple)', bg='var(--purple-bg)',
  heroImg, whyImg, whyImg2, featureImg, processImg,
  heroSlot, heroDark=false, heroCtaLabel, heroShowSecondaryCta=true, postHeroSlot,
  whyTitle, whyDesc, whyPoints,
  features, steps, outcomes, caseStudies, faqs, related,
  ctaTitle='พร้อมเริ่มโปรเจกต์กับเราไหม?',
  ctaDesc='ปรึกษาฟรีครั้งแรก ตอบกลับภายใน 24 ชั่วโมง พร้อม NDA ลงนามได้ทันที',
}: Props) {
  const lang = langProp ?? 'th'
  const tr = t[lang] as any
  const prefix = `/${lang}`

  return (
    <>
      <Navbar lang={lang} tr={tr}/>
      <main>

        {/* Hero */}
        {heroDark ? (
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
                  <h1 className="t-display mb-6 leading-none" style={{ color: '#fff', fontSize: 'clamp(2.8rem,6vw,5.5rem)' }}>
                    {title}
                    {subtitle && (
                      <>
                        <br />
                        <span style={{ background: `linear-gradient(135deg,${color},var(--lime))`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>{subtitle}</span>
                      </>
                    )}
                  </h1>
                  <p className="leading-relaxed mb-10" style={{ fontSize: '1.15rem', color: 'rgba(255,255,255,0.85)', fontWeight: 400, maxWidth: 560 }}>{heroDesc}</p>
                  <div className="flex flex-wrap gap-4">
                    <Link
                      href={`${prefix}/contact`}
                      className="inline-flex items-center gap-2 rounded-full transition-transform hover:scale-[1.03]"
                      style={{ fontSize: '1rem', padding: '14px 32px', background: 'linear-gradient(135deg, var(--purple) 0%, var(--purple-dark) 100%)', color: '#fff', fontWeight: 500, boxShadow: '0 8px 28px rgba(123,110,246,0.35)' }}
                    >
                      {heroCtaLabel ?? (lang === 'en' ? 'Get Started' : 'เริ่มต้นเลย')}
                      <svg width="15" height="15" viewBox="0 0 14 14" fill="none"><path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    </Link>
                    {heroShowSecondaryCta && (
                      <Link href={`${prefix}/work`} className="inline-flex items-center gap-2 rounded-full border transition-colors" style={{ fontSize: '1rem', padding: '14px 32px', borderColor: 'rgba(255,255,255,0.2)', color: '#fff', fontWeight: 400 }}>
                        {lang === 'en' ? 'View Work' : 'ดูผลงาน'}
                      </Link>
                    )}
                  </div>
                </div>
                <div className="relative">
                  {heroSlot}
                </div>
              </div>
            </div>
          </section>
        ) : (
          <section className="pt-[80px] bg-white">
            <div className="gradient-bar" />
            <div className="max-w-7xl mx-auto px-4 lg:px-10 py-20 lg:py-16">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div>
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 text-xs tracking-widest uppercase" style={{ background: bg, color }}>
                    <span className="w-1.5 h-1.5 rounded-full inline-block" style={{ background: color }} />{badge}
                  </div>
                  <h1 className="t-display text-[clamp(2.8rem,6vw,5.5rem)] text-[#0A0A0F] mb-6 leading-none">
                    {title}<br />
                    <span style={{ background: `linear-gradient(135deg,${color},var(--purple-light))`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>{subtitle}</span>
                  </h1>
                  <p className="t-body leading-relaxed mb-8" style={{ fontSize: "1.2rem", color: "#0A0A0F" }}>{heroDesc}</p>
                  {heroBullets && (
                    <ul className="space-y-3 mb-10">
                      {(heroBullets ?? []).map((b, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5" style={{ background: bg }}>
                            <i className="ti ti-check" style={{ fontSize: 12, color }} aria-hidden="true" />
                          </div>
                          <span className="leading-relaxed" style={{ fontWeight: 400, fontSize: "1.1rem", color: "#0A0A0F" }}>{b}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  <div className="flex flex-wrap gap-4">
                    <Link href={`${prefix}/contact`} className="btn-primary" style={{ fontSize: '1rem', padding: '14px 32px' }}>
                      {lang === 'en' ? 'Free Consultation' : 'ปรึกษาฟรี'}
                      <svg width="15" height="15" viewBox="0 0 14 14" fill="none"><path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    </Link>
                    <Link href={`${prefix}/work`} className="btn-outline" style={{ fontSize: '1rem', padding: '14px 32px' }}>
                      {lang === 'en' ? 'View Work' : 'ดูผลงาน'}
                    </Link>
                  </div>
                </div>
                {heroImg
                  ? <div className="w-full rounded-2xl overflow-hidden">
                    <img src={heroImg} alt={title} className="w-full h-auto block" />
                  </div>
                  : <IP label="Hero Image / Screenshot" height={440} color={color} bg={bg} />
                }
              </div>
            </div>
          </section>
        )}

        {postHeroSlot}

        {/* Outcomes */}
        <div className="border-y border-[#E4E4EC] bg-[#F7F7FC]">
          <div className="max-w-7xl mx-auto px-4 lg:px-10">
            <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-[#E4E4EC]">
              {(outcomes ?? []).map(o => (
                <div key={o.label} className="px-4 lg:px-10 py-8">
                  <div className="text-[clamp(2rem,4vw,3rem)] leading-none mb-2" style={{fontFamily:'var(--font-main)',fontWeight: 400,color}}>{o.stat}</div>
                  <p className="mb-1" style={{fontWeight:500,fontSize:"1rem",color:"#0A0A0F"}}>{o.label}</p>
                  {o.desc && <p className="" style={{fontWeight:400,fontSize:"0.95rem",color:"#0A0A0F"}}>{o.desc}</p>}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Why */}
        <section className="bg-white py-24 lg:py-32">
          <div className="max-w-7xl mx-auto px-4 lg:px-10">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
              <div>
                <p className="t-label mb-5">{lang==='en'?'Why It Matters':'ทำไมถึงสำคัญ'}</p>
                <h2 className="t-display text-[clamp(2rem,4.5vw,3.8rem)] text-[#0A0A0F] mb-8 leading-tight">{whyTitle}</h2>
                <p className="t-body leading-relaxed mb-6" style={{fontSize:"1.2rem",color:"#0A0A0F"}}>{whyDesc}</p>
                {whyPoints && (
                  <ul className="space-y-4">
                    {(whyPoints??[]).map((p,i) => (
                      <li key={i} className="flex items-start gap-4 p-5 rounded-2xl border border-[#E4E4EC]">
                        <div className="w-8 h-8 rounded-xl flex items-center justify-center shrink-0" style={{background:bg}}>
                          <span className="text-xs" style={{color,fontWeight:400,fontFamily:'monospace'}}>0{i+1}</span>
                        </div>
                        <p className="leading-relaxed" style={{fontWeight:400,fontSize:"1.1rem",color:"#0A0A0F"}}>{p}</p>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              <div className="space-y-5">
                {whyImg
                  ? <img src={whyImg} alt="why" className="w-full rounded-2xl h-auto block"/>
                  : <IP label="Infographic / Diagram" height={360} color={color} bg={bg}/>
                }
                {whyImg2
                  ? <img src={whyImg2} alt="chart" className="w-full rounded-2xl h-auto block"/>
                  : <IP label="Before / After หรือ Chart" height={200} color={color} bg={`${color}08`}/>
                }
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="bg-[#F7F7FC] py-24 lg:py-32">
          <div className="max-w-7xl mx-auto px-4 lg:px-10">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <p className="t-label mb-5">{lang==='en'?'What You Get':'สิ่งที่คุณได้รับ'}</p>
              <h2 className="t-display text-[clamp(2rem,4.5vw,3.8rem)] text-[#0A0A0F] mb-6">
                {lang==='en'?<>Full Coverage<br/><span style={{background:`linear-gradient(135deg,${color},var(--purple-light))`,WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent',backgroundClip:'text'}}>End to End</span></>
                :<>ครอบคลุม<br/><span style={{background:`linear-gradient(135deg,${color},var(--purple-light))`,WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent',backgroundClip:'text'}}>ทุกด้านที่คุณต้องการ</span></>}
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {(features??[]).map((f,i) => (
                <div key={f.title} className="card p-8 group">
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6" style={{background:i%2===0?bg:`${color}10`}}>
                    <i className={`ti ${f.icon}`} style={{fontSize:26,color}} aria-hidden="true"/>
                  </div>
                  <h3 className="text-[#0A0A0F] mb-3 group-hover:text-[var(--purple)] transition-colors" style={{fontWeight:400,fontSize:'1.4rem'}}>{f.title}</h3>
                  <p className="t-body leading-relaxed mb-4" style={{fontSize:"1.15rem",color:"#0A0A0F"}}>{f.desc}</p>
                  {f.detail && <p className="text-xs text-[#9999AA] leading-relaxed pt-4 border-t border-[#F0F0F6]" style={{fontWeight:400}}>{f.detail}</p>}
                </div>
              ))}
            </div>
            <div className="mt-12">{featureImg
              ? <img src={featureImg} alt="feature" className="w-full rounded-2xl h-auto block"/>
              : <IP label="Feature Overview / Screenshot หรือ Demo" height={480} color={color} bg={bg}/>
            }</div>
          </div>
        </section>

        {/* Process */}
        <section className="bg-white py-24 lg:py-32">
          <div className="max-w-7xl mx-auto px-4 lg:px-10">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
              <div>
                <p className="t-label mb-5">{lang==='en'?'How We Work':'กระบวนการทำงาน'}</p>
                <h2 className="t-display text-[clamp(2rem,4.5vw,3.8rem)] text-[#0A0A0F] mb-6 leading-tight">
                  {lang==='en'
                    ? <>Every Step<br/><span style={{background:`linear-gradient(135deg,${color},var(--purple-light))`,WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent',backgroundClip:'text'}}>Clear & Measurable</span></>
                    : <>ทุกขั้นตอน<br/><span style={{background:`linear-gradient(135deg,${color},var(--purple-light))`,WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent',backgroundClip:'text'}}>โปร่งใสและวัดผลได้</span></>
                  }
                </h2>
                <p className="t-body leading-relaxed mb-10" style={{fontSize:"1.15rem",color:"#0A0A0F"}}>
                  {lang==='en'
                    ? 'We work Agile with full transparency. You see progress and communicate with the team at all times — no surprises on delivery day.'
                    : 'เราทำงานแบบ Agile ที่มีโครงสร้างชัดเจน ลูกค้าเห็นความคืบหน้าและสื่อสารกับทีมได้ตลอดเวลา ไม่มีความประหลาดใจในวันส่งมอบ'}
                </p>
                <div className="space-y-5">
                  {(steps??[]).map(s => (
                    <div key={s.no} className="flex gap-5 p-6 rounded-2xl border border-[#E4E4EC] hover:border-[var(--purple)]/30 transition-colors group">
                      <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 font-mono text-sm" style={{background:bg,color}}>{s.no}</div>
                      <div>
                        <h4 className="text-[#0A0A0F] mb-2 group-hover:text-[var(--purple)] transition-colors" style={{fontWeight: 400,fontSize:'1.05rem'}}>{s.title}</h4>
                        <p className="t-body leading-relaxed mb-2" style={{fontSize:"1.05rem",color:"#0A0A0F"}}>{s.desc}</p>
                        {s.detail && <p className="text-xs text-[#9999AA]" style={{fontWeight:400}}>{s.detail}</p>}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="space-y-5 lg:sticky lg:top-28">
                {processImg
                  ? <img src={processImg} alt="process" className="w-full rounded-2xl h-auto block"/>
                  : <IP label="Process Diagram / Timeline" height={500} color={color} bg={bg}/>
                }
                <div className="grid grid-cols-2 gap-4">
                  {(outcomes ?? []).slice(0,2).map(o => (
                    <div key={o.label} className="card p-6 text-center">
                      <div className="text-2xl mb-1" style={{fontWeight: 400,color}}>{o.stat}</div>
                      <p className="" style={{fontWeight:400,fontSize:"0.95rem",color:"#0A0A0F"}}>{o.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Case Studies */}
        {caseStudies && caseStudies.length > 0 && (
          <section className="bg-[#F7F7FC] py-24 lg:py-32">
            <div className="max-w-7xl mx-auto px-4 lg:px-10">
              <div className="mb-16">
                <p className="t-label mb-5">{lang==='en'?'Related Work':'ผลงานที่เกี่ยวข้อง'}</p>
                <h2 className="t-display text-[clamp(2rem,4.5vw,3.8rem)] text-[#0A0A0F]">
                  {lang==='en'
                    ?<>Real-world results<br/><span style={{background:`linear-gradient(135deg,${color},var(--purple-light))`,WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent',backgroundClip:'text'}}>we're proud of</span></>
                    :<>ตัวอย่างจากงานจริง<br/><span style={{background:`linear-gradient(135deg,${color},var(--purple-light))`,WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent',backgroundClip:'text'}}>ที่เราภาคภูมิใจ</span></>}
                </h2>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {(caseStudies??[]).map((cs,i) => {
                  const caseImg = cs.img || (heroImg ? heroImg.replace("/hero.jpg", `/case-${i+1}.jpg`) : null)
                  return (
                  <div key={i} className="card overflow-hidden group">
                    {caseImg
                      ? <img src={caseImg} alt={cs.title} className="w-full rounded-2xl h-auto block"/>
                      : <IP label={`Case Study: ${cs.title}`} height={220} color={color} bg={i%2===0?bg:`${color}08`}/>
                    }
                    <div className="p-7">
                      <p className="t-label mb-3">{cs.tag}</p>
                      <h3 className="text-[#0A0A0F] mb-3 group-hover:text-[var(--purple)] transition-colors leading-snug" style={{fontWeight: 400,fontSize:'1.1rem'}}>{cs.title}</h3>
                      <p className="t-body leading-relaxed mb-5" style={{fontSize:"1.05rem",color:"#0A0A0F"}}>{cs.desc}</p>
                      <div className="flex items-center gap-2 text-sm" style={{color,fontWeight:400}}>
                        <i className="ti ti-trending-up" style={{fontSize:16}} aria-hidden="true"/>{cs.result}
                      </div>
                    </div>
                  </div>
                  )
                })}
              </div>
              <div className="text-center mt-10">
                <Link href={`${prefix}/work`} className="btn-outline" style={{fontSize:'0.95rem',padding:'12px 28px'}}>
                  {lang==='en'?'View All Work →':'ดูผลงานทั้งหมด →'}
                </Link>
              </div>
            </div>
          </section>
        )}

        {/* FAQ */}
        <section className="bg-white py-24 lg:py-32">
          <div className="max-w-7xl mx-auto px-4 lg:px-10">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
              <div>
                <p className="t-label mb-5">{lang==='en'?'FAQ':'คำถามที่พบบ่อย'}</p>
                <h2 className="t-display text-[clamp(2rem,4.5vw,3.8rem)] text-[#0A0A0F] mb-6 leading-tight">
                  {lang==='en'
                    ?<>Have questions?<br/><span style={{background:`linear-gradient(135deg,${color},var(--purple-light))`,WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent',backgroundClip:'text'}}>We have answers.</span></>
                    :<>มีข้อสงสัย?<br/><span style={{background:`linear-gradient(135deg,${color},var(--purple-light))`,WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent',backgroundClip:'text'}}>เราตอบได้ทุกคำถาม</span></>}
                </h2>
                <p className="t-body mb-8 leading-relaxed" style={{fontSize:"1.15rem",color:"#0A0A0F"}}>
                  {lang==='en'?'Can\'t find what you need? Contact us for a free consultation.':'ไม่เจอคำตอบที่ต้องการ? ติดต่อเราได้เลย ทีมผู้เชี่ยวชาญยินดีให้คำปรึกษาฟรี'}
                </p>
                <Link href={`${prefix}/contact`} className="btn-primary" style={{fontSize:'0.95rem',padding:'12px 24px'}}>
                  {lang==='en'?'Ask Us Directly →':'ถามเราโดยตรง →'}
                </Link>
              </div>
              <div className="divide-y divide-[#E4E4EC]">
                {(faqs??[]).map(f => (
                  <details key={f.q} className="group py-6">
                    <summary className="flex items-start justify-between cursor-pointer list-none gap-4">
                      <span className="text-[#0A0A0F] leading-snug" style={{fontWeight: 400,fontSize:'1.05rem'}}>{f.q}</span>
                      <span className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center mt-0.5 transition-all group-open:rotate-45" style={{background:bg,color}}>
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M7 2v10M2 7h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
                      </span>
                    </summary>
                    <p className="t-body leading-relaxed mt-4 pr-12" style={{fontSize:"1.05rem",color:"#0A0A0F"}}>{f.a}</p>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 lg:py-32 relative overflow-hidden" style={{background:'linear-gradient(135deg,#2D1B69 0%,var(--purple) 40%,var(--purple-light) 100%)'}}>
          <div className="absolute inset-0 opacity-10" style={{backgroundImage:'radial-gradient(circle,#fff 1px,transparent 1px)',backgroundSize:'28px 28px'}}/>
          <div className="relative max-w-4xl mx-auto px-4 lg:px-10 text-center">
            <p className="mb-6" style={{color:"#ffffff",fontSize:"0.85rem",fontWeight:400,fontFamily:"var(--font-main)"}}>{lang==='en'?'Start Today':'เริ่มต้นวันนี้'}</p>
            <h2 className="t-display mb-4 leading-tight" style={{color:"#ffffff",fontSize:"clamp(2rem,4vw,4rem)",fontWeight:500}}>{ctaTitle}</h2>
            <p className="text-white text-base mb-4 max-w-lg mx-auto" style={{fontWeight:400}}>{ctaDesc}</p>
            <div className="flex flex-wrap justify-center gap-6 mb-12 text-sm text-white">
              {(lang==='en'
                ?['Free first consultation','Response within 24 hours','NDA available','No commitment']
                :['ปรึกษาฟรีครั้งแรก','ตอบกลับภายใน 24 ชั่วโมง','NDA พร้อมลงนาม','ไม่มีผูกมัด']
              ).map(txt => (
                <div key={txt} className="flex items-center gap-2">
                  <i className="ti ti-circle-check" style={{fontSize:14,color:'var(--lime)'}} aria-hidden="true"/>
                  <span style={{fontWeight:400}}>{txt}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href={`${prefix}/contact`} className="inline-flex items-center gap-2 px-10 py-4 bg-white rounded-full text-sm font-medium hover:bg-[var(--purple-bg)] transition-colors" style={{color:'var(--purple)',fontWeight:400}}>
                {lang==='en'?'Start a Project':'เริ่มโปรเจกต์เลย'}
                <i className="ti ti-arrow-right" style={{fontSize:15}} aria-hidden="true"/>
              </Link>
              <Link href="mailto:wu@haliviq.com" className="inline-flex items-center gap-2 px-10 py-4 border border-white/30 text-white rounded-full text-sm hover:border-white/60 transition-colors" style={{fontWeight:400}}>
                wu@haliviq.com
              </Link>
            </div>
          </div>
        </section>

        {/* Related */}
        <section className="bg-[#F7F7FC] py-16">
          <div className="max-w-7xl mx-auto px-4 lg:px-10">
            <p className="t-label mb-8">{lang==='en'?'Related Services':'บริการที่เกี่ยวข้อง'}</p>
            <div className="flex flex-wrap gap-3">
              {(related??[]).map(r => (
                <Link key={r.href} href={`${prefix}${r.href}`} className="btn-outline group flex items-center gap-2" style={{fontSize:'0.9rem',padding:'10px 20px'}}>
                  {r.label}
                  <i className="ti ti-arrow-right opacity-0 group-hover:opacity-100 transition-opacity" style={{fontSize:13}} aria-hidden="true"/>
                </Link>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer lang={lang} tr={tr}/>
    </>
  )
}
