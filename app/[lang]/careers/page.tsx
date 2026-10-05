import Navbar from '@/components/Navbar'
import { t, type Lang } from '@/lib/i18n'
import Footer from '@/components/Footer'
import { HeroArt, CultureArt, OfficeArt, ActivityArt, WorkspaceArt, DrinksArt, HackathonArt } from '@/components/CareersArt'

const openings = [
  { dept: 'Engineering', color: 'var(--purple)', bg: 'var(--purple-bg)', jobs: [
    { title: 'Senior Frontend Engineer', type: 'Full-time', level: 'Senior', skills: ['React', 'Next.js', 'TypeScript', 'TailwindCSS'] },
    { title: 'Backend Engineer (Node.js)', type: 'Full-time', level: 'Mid-Senior', skills: ['Node.js', 'PostgreSQL', 'AWS', 'Docker'] },
    { title: 'Mobile Developer (React Native)', type: 'Full-time', level: 'Mid', skills: ['React Native', 'iOS', 'Android', 'TypeScript'] },
    { title: 'DevOps / Cloud Engineer', type: 'Full-time', level: 'Senior', skills: ['AWS', 'Kubernetes', 'CI/CD', 'Terraform'] },
  ]},
  { dept: 'Design', color: 'var(--purple-light)', bg: 'var(--purple-bg)', jobs: [
    { title: 'Senior UX/UI Designer', type: 'Full-time', level: 'Senior', skills: ['Figma', 'User Research', 'Prototyping', 'Design Systems'] },
    { title: 'Product Designer', type: 'Full-time', level: 'Mid', skills: ['Figma', 'UX Strategy', 'Interaction Design', 'Usability Testing'] },
    { title: 'Motion Designer', type: 'Full-time', level: 'Mid', skills: ['After Effects', 'Lottie', 'Figma', 'CSS Animation'] },
  ]},
  { dept: 'Strategy & Product', color: 'var(--purple)', bg: 'var(--purple-bg)', jobs: [
    { title: 'Product Manager', type: 'Full-time', level: 'Senior', skills: ['Product Strategy', 'Agile', 'Data Analysis', 'Stakeholder Management'] },
    { title: 'Business Analyst / Consultant', type: 'Full-time', level: 'Mid-Senior', skills: ['Requirements Gathering', 'Process Analysis', 'SQL', 'Presentation'] },
    { title: 'AI/ML Engineer', type: 'Full-time', level: 'Senior', skills: ['Python', 'LLM', 'MLOps', 'TensorFlow/PyTorch'] },
  ]},
  { dept: 'Project Management', color: 'var(--purple-light)', bg: 'var(--purple-bg)', jobs: [
    { title: 'Technical Project Manager', type: 'Full-time', level: 'Senior', skills: ['Agile/Scrum', 'JIRA', 'Risk Management', 'Client Communication'] },
    { title: 'Scrum Master', type: 'Full-time', level: 'Mid', skills: ['Scrum', 'Kanban', 'Facilitation', 'Agile Coaching'] },
  ]},
]

export async function generateStaticParams() {
  return [{ lang: 'th' }, { lang: 'en' }]
}

export default function Page({ params }: { params: { lang: Lang } }) {
  const lang = (params.lang === 'en' ? 'en' : 'th') as Lang
  const isEN = lang === 'en'
  const tr = t[lang] as any

  const benefits = isEN ? [
    { icon: 'ti-home-2', title: 'Hybrid Work', desc: 'Work remotely 3 days/week — no need to be in the office every day.' },
    { icon: 'ti-clock', title: 'Flexible Hours', desc: 'Flexible schedule with core hours 10:00–16:00. Manage the rest yourself.' },
    { icon: 'ti-school', title: 'Learning Budget', desc: 'THB 20,000/year learning budget for courses, conferences, and books.' },
    { icon: 'ti-heart', title: 'Health Insurance', desc: 'Private health insurance covering IPD+OPD from day one.' },
    { icon: 'ti-airplane', title: 'Vacation', desc: '15 days annual leave plus all public holidays.' },
    { icon: 'ti-device-laptop', title: 'Work Equipment', desc: 'MacBook Pro + Monitor + Ergonomic Chair — fully equipped.' },
    { icon: 'ti-trophy', title: 'Performance Bonus', desc: 'Annual bonus based on individual and company performance.' },
    { icon: 'ti-users', title: 'Team Activities', desc: 'Team outings, hackathons, and Friday drinks every month.' },
  ] : [
    { icon: 'ti-home-2', title: 'Hybrid Work', desc: 'ทำงาน Remote ได้ 3 วัน/สัปดาห์ ไม่ต้องติดออฟฟิศทุกวัน' },
    { icon: 'ti-clock', title: 'Flexible Hours', desc: 'ยืดหยุ่น Core Hours 10.00–16.00 น. นอกนั้นจัดการเองได้' },
    { icon: 'ti-school', title: 'Learning Budget', desc: 'งบ Learning 20,000 บาท/ปี สำหรับ Course, Conference, Books' },
    { icon: 'ti-heart', title: 'ประกันสุขภาพ', desc: 'ประกันสุขภาพเอกชนครอบคลุม IPD+OPD ตั้งแต่วันแรก' },
    { icon: 'ti-airplane', title: 'Vacation', desc: 'วันหยุดพักร้อน 15 วัน/ปี + วันหยุดนักขัตฤกษ์ครบ' },
    { icon: 'ti-device-laptop', title: 'Work Equipment', desc: 'MacBook Pro + Monitor + Ergonomic Chair จัดให้ครบ' },
    { icon: 'ti-trophy', title: 'Performance Bonus', desc: 'โบนัสประจำปีตาม Performance ทั้งทีมและบริษัท' },
    { icon: 'ti-users', title: 'Team Activities', desc: 'งาน Team Outing, Hackathon และ Friday Drinks ทุกเดือน' },
  ]

  const values = isEN ? [
    { icon: 'ti-rocket', title: 'Ship Fast, Learn Fast', desc: 'We believe in rapid iteration, are not afraid to experiment, and learn from every mistake.' },
    { icon: 'ti-users', title: 'Team Above All', desc: 'No ego here. We win and lose together, always helping each other first.' },
    { icon: 'ti-eye', title: 'Craft with Care', desc: 'We are proud of our work, reject mediocrity, and continuously develop our skills.' },
    { icon: 'ti-shield', title: 'Honest & Transparent', desc: 'Straight talk with the team, clients, and ourselves. No politics, no hidden information.' },
  ] : [
    { icon: 'ti-rocket', title: 'Ship เร็ว เรียนรู้เร็ว', desc: 'เราเชื่อใน Iteration ที่รวดเร็ว ไม่กลัวทดลองสิ่งใหม่ และเรียนรู้จากทุก Mistake' },
    { icon: 'ti-users', title: 'ทีมคือทุกอย่าง', desc: 'Ego ไม่มีที่ทางที่นี่ เราชนะและแพ้พร้อมกัน ช่วยเหลือซึ่งกันและกันก่อนเสมอ' },
    { icon: 'ti-eye', title: 'Craft ที่ใส่ใจ', desc: 'เราภาคภูมิใจในงานที่ทำ ไม่ยอมรับ Mediocre และพัฒนาทักษะอย่างต่อเนื่อง' },
    { icon: 'ti-shield', title: 'ซื่อตรงและโปร่งใส', desc: 'พูดตรงๆ กับทีม ลูกค้า และตัวเอง ไม่มีการ Politics ไม่มีการซ่อนข้อมูล' },
  ]

  const stats = isEN
    ? [{ n:'40+',l:'Team Members',d:'And growing' },{ n:'8 yrs',l:'Company Age',d:'Founded 2017' },{ n:'120+',l:'Projects',d:'Delivered' },{ n:'4.9★',l:'Glassdoor Score',d:'From real employees' }]
    : [{ n:'40+',l:'คนในทีม',d:'และยังเติบโตต่อเนื่อง' },{ n:'8 ปี',l:'อายุบริษัท',d:'ก่อตั้งปี 2017' },{ n:'120+',l:'โปรเจกต์',d:'ส่งมอบแล้ว' },{ n:'4.9★',l:'คะแนน Glassdoor',d:'จากพนักงานจริง' }]

  const steps = isEN ? [
    { no:'01', icon:'ti-mail', title:'Apply', desc:'Send your CV + Portfolio to careers@haliviq.co or fill in the form below. We reply within 3 business days.', time:'~1 day' },
    { no:'02', icon:'ti-video', title:'Intro Call', desc:'30-minute chat with HR to get to know each other and discuss the role and expectations.', time:'~30 min' },
    { no:'03', icon:'ti-code', title:'Technical Round', desc:'A technical interview or take-home assignment designed to show real skills — not tricks.', time:'~1-2 hrs' },
    { no:'04', icon:'ti-users', title:'Team Meet', desc:'Meet the team you will work with. Full Q&A — we evaluate each other.', time:'~1 hr' },
  ] : [
    { no:'01', icon:'ti-mail', title:'ส่ง Application', desc:'ส่ง CV + Portfolio มาที่ careers@haliviq.co หรือกรอก Form ด้านล่าง ตอบกลับภายใน 3 วันทำการ', time:'~1 วัน' },
    { no:'02', icon:'ti-video', title:'Intro Call', desc:'คุยกับ HR 30 นาที เพื่อทำความรู้จักกัน ถามตอบเรื่องตำแหน่งและ Expectation', time:'~30 นาที' },
    { no:'03', icon:'ti-code', title:'Technical Round', desc:'Technical Interview หรือ Take-home Assignment ที่ออกแบบมาเพื่อแสดง Real Skill ไม่ใช่ Trick', time:'~1-2 ชั่วโมง' },
    { no:'04', icon:'ti-users', title:'Team Meet', desc:'พบทีมที่จะร่วมงานด้วย ถามตอบอย่างเต็มที่ ทั้งคุณและเราประเมินกันและกัน', time:'~1 ชั่วโมง' },
  ]

  const ctaTrust = isEN
    ? ['No application fee', 'We reply to every application', 'Feedback given every round']
    : ['ไม่มีค่าธรรมเนียมในการสมัคร', 'ตอบกลับทุก Application', 'Feedback ให้ทุกรอบ']

  const G = { background: 'linear-gradient(135deg,#A99CF8 0%,#7B6EF6 45%,#53C3D7 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' } as const
  const card = { background: 'rgba(255,255,255,0.035)', border: '1px solid rgba(255,255,255,0.1)' } as const
  const muted = { color: 'rgba(255,255,255,0.68)', fontWeight: 400 } as const
  const dots = { backgroundImage: 'radial-gradient(rgba(255,255,255,0.14) 1px, transparent 1px)', backgroundSize: '22px 22px' } as const
  const Tile = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
    <div className={`rounded-2xl overflow-hidden ${className}`} style={{ border: '1px solid rgba(255,255,255,0.1)' }}>{children}</div>
  )

  return (
    <>
      <Navbar lang={lang} tr={tr} transparent />
      <main style={{ background: '#08070F' }}>
        {/* Hero */}
        <section className="relative overflow-hidden pt-[80px]" style={{ background: '#08070F' }}>
          <div className="absolute inset-0 pointer-events-none opacity-[0.35]" style={dots} />
          <div className="absolute -top-40 -left-32 w-[620px] h-[620px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(123,110,246,0.3) 0%, transparent 70%)', filter: 'blur(20px)' }} />
          <div className="relative max-w-7xl mx-auto px-6 lg:px-10 pt-20 lg:pt-28 pb-16 lg:pb-24">
            <div className="grid lg:grid-cols-2 gap-14 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8" style={{ background: 'rgba(123,110,246,0.15)', border: '1px solid rgba(123,110,246,0.35)' }}>
                  <span className="w-2 h-2 rounded-full bg-[var(--lime)] animate-pulse inline-block" />
                  <span className="t-label" style={{ fontSize: '0.7rem', color: 'var(--purple-light)' }}>{isEN ? 'Now Hiring 12 Positions' : 'กำลังเปิดรับ 12 ตำแหน่ง'}</span>
                </div>
                <h1 className="t-display text-[clamp(3rem,6.5vw,5.6rem)] leading-relaxed mb-8" style={{ color: '#fff' }}>
                  {isEN ? <>Come build<br /><span style={G}>something great</span><br />together</> : <>มาร่วมสร้าง<br /><span style={G}>สิ่งที่ยิ่งใหญ่</span><br />ไปด้วยกัน</>}
                </h1>
                <p className="text-lg leading-relaxed mb-10 max-w-md" style={muted}>
                  {isEN ? 'Haliviq is where Designers, Engineers, and Strategists come together to build digital products that make a real difference for businesses.' : 'Haliviq คือที่ที่ Designer, Engineer และ Strategist มารวมตัวกันเพื่อสร้างผลิตภัณฑ์ดิจิทัลที่สร้างความต่างให้ธุรกิจจริงๆ'}
                </p>
                <div className="flex flex-wrap gap-3">
                  <a href="#openings" className="btn-primary" style={{ fontSize: '1rem', padding: '14px 32px' }}>
                    {isEN ? 'View Open Roles' : 'ดูตำแหน่งงาน'}
                    <i className="ti ti-arrow-down" style={{ fontSize: 15 }} aria-hidden="true" />
                  </a>
                  <a href="mailto:careers@haliviq.co" className="inline-flex items-center gap-2 rounded-full transition-colors hover:bg-white/10" style={{ fontSize: '1rem', padding: '13px 32px', border: '1.5px solid rgba(255,255,255,0.25)', color: '#fff', fontWeight: 400 }}>
                    {isEN ? 'Send Your CV' : 'ส่ง CV มาก่อน'}
                  </a>
                </div>
              </div>
              <div className="hidden lg:block">
                <Tile className="aspect-square max-w-[560px] ml-auto"><HeroArt /></Tile>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', borderBottom: '1px solid rgba(255,255,255,0.08)', background: '#0B0A14' }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="grid grid-cols-2 lg:grid-cols-4">
              {stats.map((s, i) => (
                <div key={s.l} className="px-6 lg:px-10 py-8" style={{ borderLeft: i ? '1px solid rgba(255,255,255,0.08)' : undefined }}>
                  <div className="text-[clamp(2rem,3.5vw,2.8rem)] leading-none mb-1" style={{ fontFamily: 'var(--font-main)', fontWeight: 500, ...G }}>{s.n}</div>
                  <p className="text-base mb-0.5" style={{ color: '#fff', fontWeight: 400 }}>{s.l}</p>
                  <p className="text-sm" style={{ color: 'rgba(255,255,255,0.5)', fontWeight: 400 }}>{s.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Culture */}
        <section className="py-24 lg:py-32" style={{ background: '#08070F' }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-20">
              <div>
                <p className="t-label mb-5" style={{ color: 'rgba(255,255,255,0.6)' }}>{isEN ? 'Our Culture' : 'วัฒนธรรมองค์กร'}</p>
                <h2 className="t-display text-[clamp(2.2rem,4.5vw,4rem)] leading-tight mb-8" style={{ color: '#fff' }}>
                  {isEN ? <>No<br /><span style={G}>Micromanagement</span></> : <>ที่นี่ไม่มี<br /><span style={G}>Micromanagement</span></>}
                </h2>
                <p className="text-sm leading-relaxed mb-6" style={muted}>
                  {isEN ? 'We believe the best people do their best work when trusted, given autonomy, and surrounded by others who are skilled and passionate.' : 'เราเชื่อว่าคนที่ดีที่สุดทำงานได้ดีที่สุดเมื่อได้รับความไว้วางใจ มี Autonomy และทำงานกับคนที่เก่งและ Passionate เหมือนกัน'}
                </p>
                <p className="text-sm leading-relaxed" style={muted}>
                  {isEN ? 'At Haliviq you will work on products with real impact, learn from top-tier teammates, and grow alongside a rapidly scaling company.' : 'ที่ Haliviq คุณจะได้ทำงานกับ Product ที่มี Impact จริง ได้เรียนรู้จากเพื่อนร่วมทีมที่ Top ในสายงาน และได้เติบโตไปพร้อมกับบริษัทที่ Scale อย่างรวดเร็ว'}
                </p>
              </div>
              <Tile className="aspect-[4/3]"><CultureArt /></Tile>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {values.map(v => (
                <div key={v.title} className="p-7 rounded-2xl group hover:-translate-y-1 hover:border-[rgba(123,110,246,0.5)] transition-all duration-300" style={card}>
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5" style={{ background: 'rgba(123,110,246,0.18)' }}>
                    <i className={`ti ${v.icon}`} style={{ fontSize: 22, color: 'var(--purple-light)' }} aria-hidden="true" />
                  </div>
                  <h3 className="mb-2" style={{ color: '#fff', fontWeight: 500, fontSize: '1.3rem' }}>{v.title}</h3>
                  <p className="text-sm leading-relaxed" style={muted}>{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Life */}
        <section className="py-24" style={{ background: '#0B0A14' }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="mb-12">
              <p className="t-label mb-4" style={{ color: 'rgba(255,255,255,0.6)' }}>{isEN ? 'Life at Haliviq' : 'ชีวิตใน Haliviq'}</p>
              <h2 className="t-display text-[clamp(2rem,4vw,3.5rem)]" style={{ color: '#fff' }}>
                {isEN ? <>Great Work,<br /><span style={G}>Great Life</span></> : <>งานดี<br /><span style={G}>ชีวิตก็ดี</span></>}
              </h2>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[170px] lg:auto-rows-[210px]">
              <Tile className="col-span-2 row-span-2"><OfficeArt /></Tile>
              <Tile><ActivityArt /></Tile>
              <Tile><WorkspaceArt /></Tile>
              <Tile><DrinksArt /></Tile>
              <Tile><HackathonArt /></Tile>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-24 lg:py-32" style={{ background: '#08070F' }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <p className="t-label mb-5" style={{ color: 'rgba(255,255,255,0.6)' }}>{isEN ? 'Benefits' : 'สวัสดิการ'}</p>
              <h2 className="t-display text-[clamp(2rem,4.5vw,3.8rem)] leading-tight" style={{ color: '#fff' }}>
                {isEN ? <>We care for our team<br /><span style={G}>like we care for clients</span></> : <>ดูแลทีมเหมือน<br /><span style={G}>ดูแลลูกค้า</span></>}
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {benefits.map(b => (
                <div key={b.title} className="p-7 rounded-2xl hover:-translate-y-1 hover:border-[rgba(123,110,246,0.5)] transition-all duration-300" style={card}>
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5" style={{ background: 'rgba(83,195,215,0.15)' }}>
                    <i className={`ti ${b.icon}`} style={{ fontSize: 22, color: 'var(--lime)' }} aria-hidden="true" />
                  </div>
                  <h3 className="mb-2" style={{ color: '#fff', fontWeight: 500, fontSize: '1.25rem' }}>{b.title}</h3>
                  <p className="text-sm leading-relaxed" style={muted}>{b.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Openings */}
        <section id="openings" className="py-24 lg:py-32 scroll-mt-20" style={{ background: '#0B0A14' }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
              <div>
                <p className="t-label mb-5" style={{ color: 'rgba(255,255,255,0.6)' }}>{isEN ? 'Open Roles' : 'ตำแหน่งงาน'}</p>
                <h2 className="t-display text-[clamp(2rem,4.5vw,3.8rem)] leading-tight" style={{ color: '#fff' }}>
                  {isEN ? <>12 open positions<br /><span style={G}>Starting now</span></> : <>เปิดรับ 12 ตำแหน่ง<br /><span style={G}>เริ่มได้เดี๋ยวนี้</span></>}
                </h2>
              </div>
              <p className="text-sm max-w-xs" style={muted}>
                {isEN ? <>No role that fits? Send your CV to <a href="mailto:careers@haliviq.co" className="hover:underline" style={{ color: 'var(--purple-light)' }}>careers@haliviq.co</a></> : <>ไม่เจอตำแหน่งที่ใช่? ส่ง CV มาได้เลยที่ <a href="mailto:careers@haliviq.co" className="hover:underline" style={{ color: 'var(--purple-light)' }}>careers@haliviq.co</a></>}
              </p>
            </div>
            <div className="space-y-8">
              {openings.map(dept => (
                <div key={dept.dept}>
                  <div className="flex items-center gap-4 mb-4">
                    <span className="px-4 py-2 rounded-full text-sm" style={{ background: 'rgba(123,110,246,0.18)', color: 'var(--purple-light)', fontWeight: 400 }}>{dept.dept}</span>
                    <div className="flex-1 h-px" style={{ background: 'rgba(255,255,255,0.08)' }} />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {dept.jobs.map(job => (
                      <a key={job.title} href={`mailto:careers@haliviq.co?subject=${encodeURIComponent(job.title)}`} className="group block rounded-2xl p-7 hover:-translate-y-0.5 hover:border-[rgba(123,110,246,0.5)] transition-all duration-300" style={card}>
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h3 className="mb-2 group-hover:text-[var(--purple-light)] transition-colors" style={{ color: '#fff', fontWeight: 500, fontSize: '1.3rem' }}>{job.title}</h3>
                            <div className="flex items-center gap-2">
                              <span className="text-sm px-2.5 py-1 rounded-full" style={{ background: 'rgba(255,255,255,0.07)', color: 'rgba(255,255,255,0.7)', fontWeight: 400 }}>{job.type}</span>
                              <span className="text-sm px-2.5 py-1 rounded-full" style={{ background: 'rgba(83,195,215,0.15)', color: 'var(--lime)', fontWeight: 400 }}>{job.level}</span>
                            </div>
                          </div>
                          <div className="w-10 h-10 rounded-xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all" style={{ border: '1px solid var(--purple)' }}>
                            <i className="ti ti-arrow-up-right" style={{ fontSize: 16, color: 'var(--purple-light)' }} aria-hidden="true" />
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {job.skills.map(s => (
                            <span key={s} className="text-sm px-3 py-1 rounded-full" style={{ border: '1px solid rgba(255,255,255,0.14)', color: 'rgba(255,255,255,0.65)', fontWeight: 400 }}>{s}</span>
                          ))}
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-24" style={{ background: '#08070F' }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="mb-16 text-center">
              <p className="t-label mb-5" style={{ color: 'rgba(255,255,255,0.6)' }}>{isEN ? 'Application Process' : 'กระบวนการสมัคร'}</p>
              <h2 className="t-display text-[clamp(2rem,4vw,3.5rem)]" style={{ color: '#fff' }}>
                {isEN ? <>Straightforward<br /><span style={G}>No Time Wasted</span></> : <>ตรงไปตรงมา<br /><span style={G}>ไม่เสียเวลา</span></>}
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {steps.map(step => (
                <div key={step.no} className="rounded-2xl p-7 hover:-translate-y-1 hover:border-[rgba(123,110,246,0.5)] transition-all duration-300" style={card}>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: 'rgba(123,110,246,0.18)' }}>
                      <i className={`ti ${step.icon}`} style={{ fontSize: 22, color: 'var(--purple-light)' }} aria-hidden="true" />
                    </div>
                    <span className="text-sm font-mono" style={{ color: 'rgba(255,255,255,0.5)' }}>{step.time}</span>
                  </div>
                  <span className="text-sm font-mono block mb-2" style={{ color: 'var(--lime)' }}>{step.no}</span>
                  <h3 className="mb-2" style={{ color: '#fff', fontWeight: 500, fontSize: '1.3rem' }}>{step.title}</h3>
                  <p className="text-sm leading-relaxed" style={muted}>{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 relative overflow-hidden" style={{ background: '#050308' }}>
          <div className="absolute inset-0 opacity-[0.3]" style={dots} />
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[760px] h-[760px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(123,110,246,0.28) 0%, transparent 65%)' }} />
          <div className="relative max-w-4xl mx-auto px-6 lg:px-10 text-center">
            <p className="text-xs tracking-widest uppercase mb-6 font-mono" style={{ color: 'rgba(255,255,255,0.55)' }}>{isEN ? 'No role that fits?' : 'ยังไม่เจอตำแหน่งที่ใช่?'}</p>
            <h2 className="t-display text-[clamp(2.2rem,5vw,4.6rem)] mb-8 leading-tight" style={{ color: '#fff' }}>
              {isEN ? <>Send your CV first.<br /><span style={G}>We will find a place for you.</span></> : <>ส่ง CV มาก่อน<br /><span style={G}>เราจะหาที่ให้</span></>}
            </h2>
            <p className="text-base mb-6 max-w-lg mx-auto" style={muted}>
              {isEN ? 'If you are talented and passionate, we want to talk — whether or not we have that exact role open.' : 'ถ้าคุณเก่งและ Passionate เราอยากคุยกับคุณ ไม่ว่าจะเปิดรับตำแหน่งนั้นอยู่หรือเปล่า'}
            </p>
            <div className="flex flex-wrap justify-center gap-5 mb-12">
              {ctaTrust.map(txt => (
                <div key={txt} className="flex items-center gap-2">
                  <i className="ti ti-circle-check" style={{ fontSize: 15, color: 'var(--lime)' }} aria-hidden="true" />
                  <span className="text-base" style={{ color: 'rgba(255,255,255,0.65)', fontWeight: 400 }}>{txt}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="mailto:careers@haliviq.co" className="btn-primary" style={{ fontSize: '1rem', padding: '14px 36px' }}>
                <i className="ti ti-mail" style={{ fontSize: 15 }} aria-hidden="true" />
                careers@haliviq.co
              </a>
              <a href="#openings" className="inline-flex items-center gap-2 rounded-full transition-colors hover:bg-white/10" style={{ fontSize: '1rem', padding: '13px 36px', border: '1.5px solid rgba(255,255,255,0.25)', color: '#fff', fontWeight: 400 }}>
                {isEN ? 'View Open Roles' : 'ดูตำแหน่งงาน'}
                <i className="ti ti-arrow-down" style={{ fontSize: 15 }} aria-hidden="true" />
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer lang={lang} tr={tr} />
    </>
  )
}
