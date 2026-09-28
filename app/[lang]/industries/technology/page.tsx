import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { t, type Lang } from '@/lib/i18n'

export async function generateStaticParams() {
  return [{ lang: 'th' }, { lang: 'en' }]
}

export default function Page({ params }: { params: { lang: Lang } }) {
  const lang = params.lang
  const isEN = lang === 'en'
  const prefix = `/${lang}`
  const tr = t[lang] as any

  const badge = isEN ? 'Industry / Technology & Hi-Tech' : 'อุตสาหกรรม / เทคโนโลยีและไฮเทค'
  const heroSubhead = isEN
    ? 'Solutions for technology companies and startups.'
    : 'โซลูชันสำหรับบริษัทเทคโนโลยีและสตาร์ทอัพ'

  const challenges = isEN ? [
    { icon: 'ti-rocket', title: 'Speed-to-Market Pressure', desc: 'Startups need to validate ideas and ship MVPs fast to secure funding and beat competitors, but rushing engineering without the right foundation often creates costly rework later.' },
    { icon: 'ti-users-group', title: 'Scaling Engineering Teams', desc: 'Growing from a founding team to a full engineering organization introduces technical debt, inconsistent code quality, and knowledge silos that slow product velocity if not managed deliberately.' },
    { icon: 'ti-cloud-computing', title: 'Infrastructure Cost & Complexity', desc: 'As usage grows, cloud infrastructure and architecture decisions made early on become expensive or brittle, requiring re-platforming that most lean teams are not staffed to handle.' },
    { icon: 'ti-clipboard-check', title: 'Technical Due-Diligence Readiness', desc: 'Fundraising and M&A events demand a codebase, architecture, and documentation that can withstand investor and acquirer scrutiny, yet most fast-moving teams are not audit-ready.' },
  ] : [
    { icon: 'ti-rocket', title: 'แรงกดดันด้าน Speed-to-Market', desc: 'สตาร์ทอัพต้องพิสูจน์ไอเดียและปล่อย MVP ให้เร็วเพื่อระดมทุนและแซงหน้าคู่แข่ง แต่การเร่งพัฒนาโดยไม่มีพื้นฐานที่ดีมักสร้างภาระ Rework ที่แพงในภายหลัง' },
    { icon: 'ti-users-group', title: 'การขยายทีมวิศวกรรม', desc: 'การเติบโตจากทีมผู้ก่อตั้งไปสู่องค์กรวิศวกรรมเต็มรูปแบบนำมาซึ่ง Technical Debt คุณภาพโค้ดที่ไม่สม่ำเสมอ และ Knowledge Silo ที่ทำให้ความเร็วในการพัฒนาผลิตภัณฑ์ช้าลงหากไม่จัดการอย่างตั้งใจ' },
    { icon: 'ti-cloud-computing', title: 'ต้นทุนและความซับซ้อนของ Infrastructure', desc: 'เมื่อการใช้งานเติบโตขึ้น การตัดสินใจด้าน Cloud Infrastructure และสถาปัตยกรรมที่ทำไว้ตั้งแต่ต้นอาจมีต้นทุนสูงหรือเปราะบาง ต้องทำ Re-platforming ซึ่งทีมส่วนใหญ่ไม่มีกำลังคนรองรับ' },
    { icon: 'ti-clipboard-check', title: 'ความพร้อมด้าน Technical Due-Diligence', desc: 'การระดมทุนและดีล M&A ต้องการ Codebase สถาปัตยกรรม และเอกสารที่ทนต่อการตรวจสอบจากนักลงทุนและผู้ซื้อ แต่ทีมที่เคลื่อนไหวเร็วส่วนใหญ่ยังไม่พร้อมสำหรับ Audit' },
  ]

  const metrics = [
    { value: '$1.3T', label: isEN ? 'Global SaaS Market Size by 2030' : 'ขนาดตลาด SaaS ทั่วโลกภายในปี 2030', source: 'Grand View Research SaaS Market Report, 2024' },
    { value: '67%', label: isEN ? 'Startups Citing Engineering Capacity as Top Bottleneck' : 'สตาร์ทอัพที่ระบุว่า Engineering Capacity คือคอขวดอันดับหนึ่ง', source: 'CB Insights Startup Failure Report, 2024' },
    { value: '40%', label: isEN ? 'Faster Time-to-Market with Experienced Dev Partners' : 'Time-to-Market ที่เร็วขึ้นเมื่อทำงานกับพันธมิตรพัฒนาที่มีประสบการณ์', source: 'Deloitte Tech Trends Study, 2024' },
  ]

  const capabilities = isEN ? [
    { icon: 'ti-code', title: 'MVP Development', desc: 'Rapid, well-architected MVP builds that validate your product hypothesis with real users while laying a foundation that scales past the pilot stage.' },
    { icon: 'ti-users', title: 'Forward-Deployed Engineering Teams', desc: 'Embedded engineers who work as an extension of your team, moving fast on your roadmap without the overhead of a traditional hiring cycle.' },
    { icon: 'ti-cloud', title: 'SaaS Platform Builds', desc: 'Multi-tenant SaaS architectures with subscription billing, role-based access, and usage analytics designed to support your growth trajectory.' },
    { icon: 'ti-plug', title: 'API & Infrastructure Design', desc: 'Scalable API layers and cloud infrastructure built with security, observability, and cost-efficiency in mind from day one.' },
    { icon: 'ti-search', title: 'Technical Due-Diligence Audits', desc: 'Independent code, architecture, and security reviews that prepare your company for investor scrutiny or acquisition readiness.' },
    { icon: 'ti-adjustments-alt', title: 'DevOps & Scaling Support', desc: 'CI/CD pipelines, infrastructure-as-code, and monitoring setups that let your team ship confidently as traffic and headcount grow.' },
  ] : [
    { icon: 'ti-code', title: 'MVP Development', desc: 'พัฒนา MVP ที่รวดเร็วและมีสถาปัตยกรรมที่ดี เพื่อพิสูจน์สมมติฐานผลิตภัณฑ์กับผู้ใช้จริง พร้อมวางรากฐานให้ Scale ต่อได้หลังผ่านช่วง Pilot' },
    { icon: 'ti-users', title: 'Forward-Deployed Engineering Teams', desc: 'ทีมวิศวกรที่ทำงานฝังตัวเป็นส่วนขยายของทีมคุณ เดินหน้าตาม Roadmap ได้เร็วโดยไม่ต้องผ่านรอบการจ้างงานแบบดั้งเดิม' },
    { icon: 'ti-cloud', title: 'SaaS Platform Builds', desc: 'สถาปัตยกรรม SaaS แบบ Multi-tenant พร้อม Subscription Billing, Role-based Access และ Usage Analytics ที่ออกแบบมารองรับการเติบโต' },
    { icon: 'ti-plug', title: 'API & Infrastructure Design', desc: 'API Layer และ Cloud Infrastructure ที่ Scale ได้ ออกแบบโดยคำนึงถึงความปลอดภัย Observability และประสิทธิภาพด้านต้นทุนตั้งแต่วันแรก' },
    { icon: 'ti-search', title: 'Technical Due-Diligence Audits', desc: 'การตรวจสอบ Code สถาปัตยกรรม และความปลอดภัยโดยอิสระ เพื่อเตรียมบริษัทของคุณให้พร้อมรับการตรวจสอบจากนักลงทุนหรือการควบรวมกิจการ' },
    { icon: 'ti-adjustments-alt', title: 'DevOps & Scaling Support', desc: 'CI/CD Pipeline, Infrastructure-as-Code และระบบ Monitoring ที่ช่วยให้ทีมของคุณ Ship งานได้อย่างมั่นใจเมื่อ Traffic และจำนวนพนักงานเติบโตขึ้น' },
  ]

  const techStack = ['React', 'Next.js', 'Node.js', 'TypeScript', 'PostgreSQL', 'Kubernetes', 'AWS', 'GraphQL', 'Redis', 'Terraform', 'CI/CD', 'Microservices', 'Docker']

  const useCases = isEN ? [
    { no: '01', title: 'Funded Startup MVP Build', desc: 'End-to-end MVP development for a seed-to-Series-A startup, from technical architecture and cloud setup through a production-ready launch in under 12 weeks.' },
    { no: '02', title: 'SaaS Platform Re-Architecture', desc: 'Migration of a monolithic SaaS product to a scalable microservices architecture, cutting infrastructure costs while improving reliability and deploy frequency.' },
    { no: '03', title: 'Technical Due-Diligence Engagement', desc: 'Independent codebase, security, and architecture audit ahead of a Series B raise, producing a remediation roadmap that satisfied investor requirements.' },
  ] : [
    { no: '01', title: 'Funded Startup MVP Build', desc: 'พัฒนา MVP แบบครบวงจรให้กับสตาร์ทอัพระดับ Seed ถึง Series A ตั้งแต่สถาปัตยกรรมทางเทคนิคและการตั้งค่า Cloud ไปจนถึงการ Launch สู่ Production ภายในไม่ถึง 12 สัปดาห์' },
    { no: '02', title: 'SaaS Platform Re-Architecture', desc: 'ย้ายผลิตภัณฑ์ SaaS แบบ Monolithic ไปสู่สถาปัตยกรรม Microservices ที่ Scale ได้ ลดต้นทุน Infrastructure พร้อมเพิ่มความน่าเชื่อถือและความถี่ในการ Deploy' },
    { no: '03', title: 'Technical Due-Diligence Engagement', desc: 'ตรวจสอบ Codebase ความปลอดภัย และสถาปัตยกรรมโดยอิสระ ก่อนการระดมทุนรอบ Series B พร้อมจัดทำแผนแก้ไขที่ตอบโจทย์ความต้องการของนักลงทุน' },
  ]

  const heroVisual = (
    <div className="relative pb-10 pr-6">
      <div className="rounded-2xl overflow-hidden" style={{ background: '#141329', border: '1px solid rgba(123,110,246,0.35)' }}>
        <div className="flex items-center justify-between px-5 py-3.5" style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
          <span className="text-xs tracking-widest uppercase" style={{ color: 'rgba(255,255,255,0.85)', fontFamily: 'monospace' }}>{isEN ? 'Deploy / Pipeline' : 'Deploy / Pipeline'}</span>
          <div className="flex gap-1">
            <span className="w-3 h-[2px] rounded-full" style={{ background: 'rgba(255,255,255,0.3)' }} />
            <span className="w-3 h-[2px] rounded-full" style={{ background: 'rgba(255,255,255,0.3)' }} />
          </div>
        </div>
        <div className="p-5">
          <div className="rounded-xl mb-4 p-4" style={{ background: 'linear-gradient(135deg, rgba(123,110,246,0.18), rgba(83,195,215,0.1))' }}>
            <div className="flex items-center gap-2 mb-3">
              <i className="ti ti-terminal-2" style={{ fontSize: 18, color: 'var(--lime)', animation: 'iconFloat 3s ease-in-out infinite' }} aria-hidden="true" />
              <span className="text-xs" style={{ color: 'rgba(255,255,255,0.75)', fontFamily: 'monospace' }}>{isEN ? 'build → test → deploy' : 'build → test → deploy'}</span>
            </div>
            <div className="space-y-2">
              {[
                { label: isEN ? 'Build' : 'Build', w: '100%' },
                { label: isEN ? 'Test Suite' : 'Test Suite', w: '92%' },
                { label: isEN ? 'Deploy' : 'Deploy', w: '78%' },
              ].map((row, i) => (
                <div key={row.label}>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[11px]" style={{ color: 'rgba(255,255,255,0.6)', fontFamily: 'monospace' }}>{row.label}</span>
                    <i className="ti ti-circle-check" style={{ fontSize: 12, color: 'var(--lime)' }} aria-hidden="true" />
                  </div>
                  <div className="w-full h-[4px] rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.08)' }}>
                    <div
                      className="h-full rounded-full"
                      style={{ width: row.w, background: 'linear-gradient(90deg, var(--purple-light), var(--lime))', animation: `barGrow 1.6s ease-out ${i * 0.15}s both` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <p className="mb-1" style={{ color: '#fff', fontWeight: 500, fontSize: '1.05rem' }}>{isEN ? 'API Gateway' : 'API Gateway'}</p>
          <p className="text-xs mb-3" style={{ color: 'rgba(255,255,255,0.5)' }}>{isEN ? 'Shipped to production.' : 'Shipped to production.'}</p>
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full" style={{ background: 'var(--lime)' }} />
            <span className="w-2.5 h-2.5 rounded-full" style={{ background: 'rgba(255,255,255,0.3)' }} />
            <span className="w-2.5 h-2.5 rounded-full" style={{ background: 'var(--purple-light)' }} />
          </div>
        </div>
      </div>

      <div
        className="absolute -bottom-2 -right-2 w-[180px] rounded-2xl p-4"
        style={{ background: '#1B1A33', border: '1px solid rgba(255,255,255,0.1)', boxShadow: '0 20px 50px -10px rgba(0,0,0,0.6)', animation: 'badgeFloat 3.4s ease-in-out infinite' }}
      >
        <div className="flex items-center justify-between mb-2.5">
          <span className="text-[10px] tracking-widest uppercase" style={{ color: 'rgba(255,255,255,0.85)' }}>{isEN ? 'Uptime' : 'Uptime'}</span>
          <span className="w-1.5 h-1.5 rounded-full inline-block" style={{ background: 'var(--lime)', animation: 'blinkDot 1.6s ease-in-out infinite' }} />
        </div>
        <div className="w-9 h-9 rounded-lg flex items-center justify-center mb-2" style={{ background: 'rgba(123,110,246,0.15)' }}>
          <i className="ti ti-cpu" style={{ fontSize: 16, color: 'var(--purple-light)' }} aria-hidden="true" />
        </div>
        <p className="text-xs mb-3" style={{ color: 'rgba(255,255,255,0.5)' }}>{isEN ? '99.98% · 30d avg' : '99.98% · เฉลี่ย 30 วัน'}</p>
        <div
          className="rounded-lg text-center py-1.5 text-xs"
          style={{ background: 'linear-gradient(90deg, var(--purple), var(--purple-light))', color: '#fff' }}
        >
          {isEN ? 'View Logs →' : 'ดู Logs →'}
        </div>
      </div>
    </div>
  )

  return (
    <>
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
          <div className="relative max-w-7xl mx-auto px-4 lg:px-10 py-24 lg:py-32">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 text-xs tracking-widest uppercase" style={{ background: 'rgba(123,110,246,0.15)', color: 'var(--purple-light)' }}>
                  <span className="w-1.5 h-1.5 rounded-full inline-block" style={{ background: 'var(--lime)', animation: 'blinkDot 1.6s ease-in-out infinite' }} />
                  {badge}
                </div>
                <h1 className="t-display mb-6 leading-relaxed" style={{ fontSize: 'clamp(2.8rem,6vw,5.5rem)', background: 'linear-gradient(135deg, var(--purple-light) 0%, #53C3D7 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                  {isEN ? 'Technology &' : 'เทคโนโลยี &'}<br />{isEN ? 'Hi-Tech' : 'ไฮเทค'}
                </h1>
                <p className="leading-relaxed mb-10" style={{ fontSize: '1.15rem', color: 'rgba(255,255,255,0.85)', fontWeight: 400, maxWidth: 560 }}>
                  {heroSubhead}
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href={`${prefix}/work`}
                    className="inline-flex items-center gap-2 rounded-full transition-transform hover:scale-[1.03]"
                    style={{ fontSize: '1rem', padding: '14px 32px', background: 'linear-gradient(135deg, var(--purple) 0%, var(--purple-dark) 100%)', color: '#fff', fontWeight: 500, boxShadow: '0 8px 28px rgba(123,110,246,0.35)' }}
                  >
                    {isEN ? 'View Case Studies' : 'ดูผลงานของเรา'}
                    <svg width="15" height="15" viewBox="0 0 14 14" fill="none"><path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </Link>
                  <Link href={`${prefix}/contact`} className="inline-flex items-center gap-2 rounded-full border transition-colors" style={{ fontSize: '1rem', padding: '14px 32px', borderColor: 'rgba(255,255,255,0.2)', color: '#fff', fontWeight: 400 }}>
                    {isEN ? 'Free Consultation' : 'ปรึกษาฟรี'}
                  </Link>
                </div>
              </div>
              <div className="relative">
                {heroVisual}
              </div>
            </div>
          </div>
        </section>

        {/* Intro */}
        <section className="relative overflow-hidden" style={{ background: '#08070F' }}>
          <div className="relative max-w-7xl mx-auto px-4 lg:px-10 pb-20 lg:pb-28">
            <div className="rounded-2xl p-10 lg:p-14" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}>
              <div className="w-12 h-[3px] rounded-full mb-8" style={{ background: 'linear-gradient(90deg, var(--purple-light), var(--lime))' }} />
              <p className="leading-relaxed" style={{ color: 'rgba(255,255,255,0.85)', fontSize: 'clamp(1.05rem,1.6vw,1.35rem)', fontWeight: 400, maxWidth: 900 }}>
                {isEN
                  ? 'We help technology companies and startups build MVPs, SaaS platforms, and scalable infrastructure that move fast without accumulating technical debt. Our forward-deployed engineering teams embed alongside yours, bringing production-grade discipline to every sprint so you can raise, scale, and exit with confidence.'
                  : 'เราช่วยบริษัทเทคโนโลยีและสตาร์ทอัพสร้าง MVP, แพลตฟอร์ม SaaS และ Infrastructure ที่ Scale ได้ เคลื่อนไหวได้เร็วโดยไม่สะสม Technical Debt ทีมวิศวกรแบบ Forward-Deployed ของเราทำงานฝังตัวร่วมกับทีมคุณ นำวินัยระดับ Production เข้าสู่ทุก Sprint เพื่อให้คุณระดมทุน Scale และ Exit ได้อย่างมั่นใจ'}
              </p>
            </div>
          </div>
        </section>

        {/* Key Challenges */}
        <section className="relative overflow-hidden" style={{ background: '#050308' }}>
          <div className="relative max-w-7xl mx-auto px-4 lg:px-10 py-20 lg:py-28">
            <p className="mb-5 text-xs tracking-widest uppercase" style={{ color: 'var(--lime)', fontWeight: 600 }}>
              {isEN ? 'Challenges' : 'ความท้าทาย'}
            </p>
            <h2 className="t-display mb-4" style={{ color: '#fff', fontSize: 'clamp(2.25rem,4.5vw,3.5rem)' }}>
              {isEN ? 'Key Challenges' : 'ความท้าทายหลัก'}
            </h2>
            <p className="mb-14" style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1.2rem', fontWeight: 400, maxWidth: 640 }}>
              {isEN
                ? 'Understanding the critical obstacles that drive digital transformation in this industry.'
                : 'ความเข้าใจอุปสรรคสำคัญที่ผลักดันการปรับสู่ดิจิทัลในอุตสาหกรรมนี้'}
            </p>
            <div className="grid sm:grid-cols-2 gap-5">
              {challenges.map((c) => (
                <div key={c.title} className="p-8 rounded-2xl" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}>
                  <div className="flex items-start gap-5">
                    <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0" style={{ background: 'rgba(123,110,246,0.15)' }}>
                      <i className={`ti ${c.icon}`} style={{ fontSize: 20, color: 'var(--purple-light)' }} aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="mb-2" style={{ color: '#fff', fontWeight: 600, fontSize: '1.35rem' }}>{c.title}</h3>
                      <p className="leading-relaxed" style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1.1rem', fontWeight: 400 }}>{c.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industry at a Glance */}
        <div className="border-y" style={{ borderColor: 'rgba(255,255,255,0.08)', background: '#0C0A17' }}>
          <div className="max-w-7xl mx-auto px-4 lg:px-10">
            <div className="grid sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x" style={{ borderColor: 'rgba(255,255,255,0.08)' } as any}>
              {metrics.map((m) => (
                <div key={m.label} className="px-4 lg:px-10 py-10">
                  <p className="mb-3 text-xs tracking-widest uppercase" style={{ color: 'var(--lime)', fontWeight: 600 }}>
                    {isEN ? 'Industry at a Glance' : 'ภาพรวมอุตสาหกรรม'}
                  </p>
                  <div className="mb-3 leading-none" style={{ fontFamily: 'var(--font-main)', fontWeight: 400, fontSize: 'clamp(2.2rem,4vw,3.2rem)', background: 'linear-gradient(135deg,var(--purple-light),var(--lime))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                    {m.value}
                  </div>
                  <p className="mb-3 leading-snug" style={{ color: '#fff', fontWeight: 500, fontSize: '1.05rem' }}>{m.label}</p>
                  <p className="text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>{m.source}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Our Capabilities */}
        <section className="relative overflow-hidden" style={{ background: '#08070F' }}>
          <div className="relative max-w-7xl mx-auto px-4 lg:px-10 py-20 lg:py-28">
            <p className="mb-5 text-xs tracking-widest uppercase" style={{ color: 'var(--lime)', fontWeight: 600 }}>
              {isEN ? 'Capabilities' : 'ความสามารถ'}
            </p>
            <h2 className="t-display mb-4" style={{ color: '#fff', fontSize: 'clamp(2.25rem,4.5vw,3.5rem)' }}>
              {isEN ? 'Our Capabilities' : 'ความสามารถของเรา'}
            </h2>
            <p className="mb-14" style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1.2rem', fontWeight: 400, maxWidth: 640 }}>
              {isEN ? "Proven solutions we build to address your industry's most pressing needs." : 'โซลูชันที่พิสูจน์แล้วซึ่งเราสร้างเพื่อตอบโจทย์ที่สำคัญที่สุดของอุตสาหกรรมคุณ'}
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {capabilities.map((c) => (
                <div key={c.title} className="p-8 rounded-2xl" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}>
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6" style={{ background: 'rgba(83,195,215,0.12)' }}>
                    <i className={`ti ${c.icon}`} style={{ fontSize: 24, color: 'var(--lime)' }} aria-hidden="true" />
                  </div>
                  <h3 className="mb-3" style={{ color: '#fff', fontWeight: 600, fontSize: '1.3rem' }}>{c.title}</h3>
                  <p className="leading-relaxed" style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1.1rem', fontWeight: 400 }}>{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technology We Use */}
        <section className="relative overflow-hidden" style={{ background: '#050308' }}>
          <div className="relative max-w-7xl mx-auto px-4 lg:px-10 py-20 lg:py-28">
            <p className="mb-5 text-xs tracking-widest uppercase" style={{ color: 'var(--lime)', fontWeight: 600 }}>
              {isEN ? 'Tech Stack' : 'เทคโนโลยีที่ใช้'}
            </p>
            <h2 className="t-display mb-4" style={{ color: '#fff', fontSize: 'clamp(2.25rem,4.5vw,3.5rem)' }}>
              {isEN ? 'Technologies We Use' : 'เทคโนโลยีที่เราใช้งาน'}
            </h2>
            <p className="mb-12" style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1.2rem', fontWeight: 400, maxWidth: 640 }}>
              {isEN
                ? 'Industry-proven tools and frameworks we leverage to build robust solutions.'
                : 'เครื่องมือและ Framework ที่พิสูจน์แล้วในอุตสาหกรรม ที่เราใช้สร้างโซลูชันที่แข็งแรงและเชื่อถือได้'}
            </p>
            <div className="flex flex-wrap gap-3">
              {techStack.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-base"
                  style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.85)', fontWeight: 400 }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="relative overflow-hidden" style={{ background: '#08070F' }}>
          <div className="relative max-w-7xl mx-auto px-4 lg:px-10 py-20 lg:py-28">
            <p className="mb-5 text-xs tracking-widest uppercase" style={{ color: 'var(--lime)', fontWeight: 600 }}>
              {isEN ? 'Use Cases' : 'ตัวอย่างการใช้งาน'}
            </p>
            <h2 className="t-display mb-4" style={{ color: '#fff', fontSize: 'clamp(2.25rem,4.5vw,3.5rem)' }}>
              {isEN ? 'Use Cases' : 'ตัวอย่างการใช้งาน'}
            </h2>
            <p className="mb-14" style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1.2rem', fontWeight: 400, maxWidth: 640 }}>
              {isEN ? 'Concrete project types we deliver for clients in this industry.' : 'ตัวอย่างโปรเจกต์ที่เราส่งมอบจริงให้กับลูกค้าในอุตสาหกรรมนี้'}
            </p>
            <div className="grid lg:grid-cols-3 gap-6">
              {useCases.map((u) => (
                <div key={u.no} className="p-8 rounded-2xl" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}>
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center mb-6 font-mono"
                    style={{
                      background: 'linear-gradient(135deg, var(--purple) 0%, var(--purple-dark) 100%)',
                      boxShadow: '0 8px 24px -8px rgba(123,110,246,0.6)',
                      color: '#fff',
                      fontSize: '1.05rem',
                      fontWeight: 600,
                    }}
                  >
                    {u.no}
                  </div>
                  <h3 className="mb-3" style={{ color: '#fff', fontWeight: 600, fontSize: '1.3rem' }}>{u.title}</h3>
                  <p className="leading-relaxed" style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1.1rem', fontWeight: 400 }}>{u.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="relative overflow-hidden" style={{ background: '#050308' }}>
          <div
            className="absolute inset-0 pointer-events-none opacity-40"
            style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), radial-gradient(rgba(255,255,255,0.3) 1px, transparent 1px)', backgroundSize: '180px 180px, 260px 260px', backgroundPosition: '0 0, 90px 130px' }}
          />
          <div
            className="absolute left-0 right-0 bottom-0 pointer-events-none"
            style={{ height: 260, background: 'radial-gradient(ellipse 70% 100% at 50% 100%, rgba(123,110,246,0.35) 0%, rgba(83,195,215,0.08) 45%, transparent 75%)' }}
          />
          <div className="relative max-w-7xl mx-auto px-4 lg:px-10 py-28 lg:py-36">
            <h2 className="t-display mb-5 leading-tight" style={{ background: 'linear-gradient(135deg, #fff 0%, #53C3D7 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', fontSize: 'clamp(2.5rem,5.5vw,4.2rem)' }}>
              {isEN ? 'Have a project in mind?' : 'มีโปรเจกต์ในใจแล้วใช่ไหม?'}
            </h2>
            <p className="mb-10" style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1.25rem', fontWeight: 400 }}>
              {isEN ? "We'd love to hear what you're building." : 'เรายินดีรับฟังสิ่งที่คุณกำลังสร้างครับ'}
            </p>
            <div className="flex flex-wrap items-center gap-6">
              <Link
                href={`${prefix}/contact`}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-base font-medium transition-opacity hover:opacity-90"
                style={{ background: 'linear-gradient(135deg, var(--purple) 0%, var(--purple-dark) 100%)', color: '#fff', fontWeight: 500 }}
              >
                {isEN ? 'Talk to Us' : 'คุยกับเรา'}
                <i className="ti ti-arrow-right" style={{ fontSize: 17 }} aria-hidden="true" />
              </Link>
              <a href="mailto:wu@haliviq.com" style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1.1rem', fontWeight: 400 }}>
                wu@haliviq.com
              </a>
            </div>
          </div>
        </section>

      </main>
      <Footer lang={lang} tr={tr} />
    </>
  )
}
