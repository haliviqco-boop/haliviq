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

  const badge = isEN ? 'Industry / Education' : 'อุตสาหกรรม / การศึกษา'
  const heroSubhead = isEN
    ? 'Transform learning with modern educational technology.'
    : 'ยกระดับการเรียนรู้ด้วยเทคโนโลยีการศึกษาสมัยใหม่'

  const challenges = isEN ? [
    { icon: 'ti-affiliate', title: 'Digital Access Divide', desc: 'Unequal access to devices, connectivity, and digital literacy leaves some learners behind, no matter how good the platform is.' },
    { icon: 'ti-mood-sad', title: 'Engagement & Retention', desc: 'Keeping learners motivated and preventing dropout is far harder in online and hybrid environments than in a physical classroom.' },
    { icon: 'ti-stack-2', title: 'Content Scalability', desc: 'Creating, localising, and maintaining quality learning content at scale strains even well-resourced institutions.' },
    { icon: 'ti-shield-check', title: 'Assessment Integrity', desc: 'Ensuring fair, reliable assessment in remote and hybrid settings requires more than just a video call and a timer.' },
  ] : [
    { icon: 'ti-affiliate', title: 'ความเหลื่อมล้ำในการเข้าถึงดิจิทัล', desc: 'การเข้าถึงอุปกรณ์ อินเทอร์เน็ต และทักษะดิจิทัลที่ไม่เท่ากัน ทำให้ผู้เรียนบางกลุ่มถูกทิ้งไว้ข้างหลัง ไม่ว่า Platform จะดีแค่ไหน' },
    { icon: 'ti-mood-sad', title: 'Engagement & Retention', desc: 'การรักษาแรงจูงใจและป้องกัน Dropout ทำได้ยากกว่าห้องเรียนจริงมากในสภาพแวดล้อมออนไลน์และไฮบริด' },
    { icon: 'ti-stack-2', title: 'Content Scalability', desc: 'การสร้าง แปล และดูแลเนื้อหาการเรียนรู้คุณภาพสูงในระดับ Scale เป็นภาระแม้กับสถาบันที่มีทรัพยากรพร้อม' },
    { icon: 'ti-shield-check', title: 'Assessment Integrity', desc: 'การประเมินผลที่เป็นธรรมและเชื่อถือได้ในรูปแบบ Remote และ Hybrid ต้องการมากกว่าแค่ Video Call กับตัวจับเวลา' },
  ]

  const metrics = [
    { value: '$400B', label: isEN ? 'Global EdTech Market Size by 2028' : 'ขนาดตลาด EdTech ทั่วโลกภายในปี 2028', source: 'HolonIQ, 2024' },
    { value: '12%', label: isEN ? 'Annual Growth Rate of Online Learning Enrollment' : 'อัตราการเติบโตรายปีของผู้เรียนออนไลน์', source: 'UNESCO, 2024' },
    { value: '60%', label: isEN ? 'Educational Institutions Planning AI Integration by 2027' : 'สถาบันการศึกษาที่วางแผนนำ AI มาใช้ภายในปี 2027', source: 'EDUCAUSE, 2024' },
  ]

  const capabilities = isEN ? [
    { icon: 'ti-book', title: 'Learning Management Systems', desc: 'Full-featured LMS platforms for course delivery, progress tracking, and certification.' },
    { icon: 'ti-device-gamepad-2', title: 'Interactive Learning Experiences', desc: 'Gamified lessons, simulations, and adaptive content that keep learners engaged.' },
    { icon: 'ti-chart-dots-3', title: 'Analytics & Assessment Tools', desc: 'Data-driven insights into learner progress, performance, and at-risk indicators.' },
    { icon: 'ti-video', title: 'Virtual Classroom Platforms', desc: 'Live video, breakout rooms, and collaborative tools for real-time online teaching.' },
    { icon: 'ti-folders', title: 'Educational Content Management', desc: 'Systems to author, localise, version, and distribute learning content at scale.' },
  ] : [
    { icon: 'ti-book', title: 'Learning Management Systems', desc: 'LMS ครบวงจรสำหรับส่งมอบคอร์ส ติดตามความคืบหน้า และออกใบรับรอง' },
    { icon: 'ti-device-gamepad-2', title: 'Interactive Learning Experiences', desc: 'บทเรียนแบบ Gamification, Simulation และเนื้อหาแบบ Adaptive ที่ดึงดูดผู้เรียน' },
    { icon: 'ti-chart-dots-3', title: 'Analytics & Assessment Tools', desc: 'ข้อมูลเชิงลึกด้านความคืบหน้า ผลการเรียน และสัญญาณเสี่ยง Dropout ของผู้เรียน' },
    { icon: 'ti-video', title: 'Virtual Classroom Platforms', desc: 'Video สด, Breakout Room และเครื่องมือ Collaboration สำหรับสอนออนไลน์แบบ Real-time' },
    { icon: 'ti-folders', title: 'Educational Content Management', desc: 'ระบบสร้าง แปล จัดเวอร์ชัน และกระจายเนื้อหาการเรียนรู้ในระดับ Scale' },
  ]

  const techStack = ['React', 'WebRTC', 'Canvas API', 'WebSocket', 'AI/ML', 'Cloud Platforms', 'Mobile SDKs', 'LTI', 'SCORM', 'xAPI']

  const useCases = isEN ? [
    { no: '01', title: 'Adaptive Learning Platform', desc: 'AI personalises difficulty, pacing, and content format to each learner’s progress and preferred way of learning.' },
    { no: '02', title: 'Virtual Classroom Solution', desc: 'Live video, interactive whiteboards, breakout rooms, polling, and session recording in one seamless platform.' },
    { no: '03', title: 'Student Analytics Dashboard', desc: 'Real-time engagement, performance, and at-risk metrics that help teachers intervene before students fall behind.' },
  ] : [
    { no: '01', title: 'Adaptive Learning Platform', desc: 'AI ปรับความยากง่าย จังหวะการเรียน และรูปแบบเนื้อหาให้เหมาะกับความคืบหน้าและสไตล์การเรียนรู้ของผู้เรียนแต่ละคน' },
    { no: '02', title: 'Virtual Classroom Solution', desc: 'Video สด, Whiteboard แบบโต้ตอบ, Breakout Room, Polling และการบันทึกคาบเรียนในแพลตฟอร์มเดียว' },
    { no: '03', title: 'Student Analytics Dashboard', desc: 'ข้อมูล Engagement ผลการเรียน และความเสี่ยง Dropout แบบ Real-time ที่ช่วยให้ครูเข้าช่วยเหลือได้ทันก่อนสาย' },
  ]

  const heroVisual = (
    <div className="relative pb-10 pr-6">
      <div className="rounded-2xl overflow-hidden" style={{ background: '#141329', border: '1px solid rgba(123,110,246,0.35)' }}>
        <div className="flex items-center gap-2 px-5 py-3.5" style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
          <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#F87171' }} />
          <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#FBBF24' }} />
          <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#34D399' }} />
          <span className="ml-3 text-xs" style={{ color: 'rgba(255,255,255,0.85)', fontFamily: 'monospace' }}>classroom.live</span>
        </div>
        <div className="px-6 py-7">
          <div className="flex items-center justify-between mb-5">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full" style={{ background: 'var(--lime)', animation: 'blinkDot 1.6s ease-in-out infinite' }} />
              <span className="text-xs tracking-widest uppercase" style={{ color: 'var(--lime)', fontWeight: 600 }}>{isEN ? 'Live Class' : 'สอนสด'}</span>
            </div>
            <span className="text-xs" style={{ color: 'rgba(255,255,255,0.5)', fontFamily: 'monospace' }}>24:18</span>
          </div>
          <div className="grid grid-cols-3 gap-3 mb-5">
            {[0, 1, 2].map((i) => (
              <div key={i} className="aspect-video rounded-lg flex items-center justify-center" style={{ background: 'rgba(123,110,246,0.12)', border: '1px solid rgba(255,255,255,0.08)' }}>
                <i className="ti ti-user" style={{ fontSize: 18, color: 'var(--purple-light)', animation: `iconFloat ${2.4 + i * 0.3}s ease-in-out infinite` }} aria-hidden="true" />
              </div>
            ))}
          </div>
          <div className="space-y-2.5">
            {[92, 76, 58].map((w, i) => (
              <div key={i} className="flex items-center gap-3">
                <span className="text-[10px] w-16 shrink-0" style={{ color: 'rgba(255,255,255,0.5)' }}>{isEN ? `Module ${i + 1}` : `บทที่ ${i + 1}`}</span>
                <div className="flex-1 h-2 rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.08)' }}>
                  <div className="h-full rounded-full" style={{ width: `${w}%`, background: 'linear-gradient(90deg, var(--purple), var(--lime))' }} />
                </div>
                <span className="text-[10px] w-8 text-right" style={{ color: 'rgba(255,255,255,0.5)' }}>{w}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div
        className="absolute -bottom-2 -right-2 w-[210px] rounded-2xl p-4"
        style={{ background: '#1B1A33', border: '1px solid rgba(255,255,255,0.1)', boxShadow: '0 20px 50px -10px rgba(0,0,0,0.6)', animation: 'badgeFloat 3.4s ease-in-out infinite' }}
      >
        <div className="flex items-center justify-between mb-2.5">
          <span className="text-[10px] tracking-widest uppercase" style={{ color: 'rgba(255,255,255,0.85)' }}>{isEN ? 'Assignment 03' : 'งานที่ 03'}</span>
          <i className="ti ti-clipboard-check" style={{ fontSize: 14, color: 'var(--lime)' }} aria-hidden="true" />
        </div>
        <div className="flex items-center gap-1.5 text-xs" style={{ color: 'var(--lime)' }}>
          <i className="ti ti-circle-check" style={{ fontSize: 13 }} aria-hidden="true" />
          {isEN ? '28 / 32 submitted' : 'ส่งแล้ว 28 / 32'}
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
                  {isEN ? 'Education' : 'การศึกษา'}
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
                  ? 'Haliviq helps educational institutions and EdTech startups build engaging learning platforms — from LMS and AI tutors to virtual classrooms and learning analytics — that hold up to real classroom scale, not just a demo.'
                  : 'Haliviq ช่วยสถาบันการศึกษาและ EdTech Startup สร้าง Learning Platform ที่ดึงดูดผู้เรียนจริง ตั้งแต่ LMS, AI Tutor ไปจนถึง Virtual Classroom และ Learning Analytics ที่รองรับการใช้งานจริงในระดับห้องเรียน ไม่ใช่แค่ Demo'}
              </p>
            </div>
          </div>
        </section>

        {/* Key Challenges */}
        <section className="relative overflow-hidden" style={{ background: '#050308' }}>
          <div className="relative max-w-7xl mx-auto px-4 lg:px-10 py-20 lg:py-28">
            <p className="mb-5 text-xs tracking-widest uppercase" style={{ color: 'var(--lime)', fontWeight: 600 }}>
              {isEN ? 'Key Challenges' : 'ความท้าทายหลัก'}
            </p>
            <h2 className="t-display mb-4" style={{ color: '#fff', fontSize: 'clamp(2.25rem,4.5vw,3.5rem)' }}>
              {isEN ? 'What Education Providers Are Up Against' : 'สิ่งที่ผู้ให้บริการการศึกษาต้องเผชิญ'}
            </h2>
            <p className="mb-14" style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1.2rem', fontWeight: 400, maxWidth: 640 }}>
              {isEN
                ? 'Building for education means solving problems no generic software vendor has to think about.'
                : 'การสร้างซอฟต์แวร์เพื่อการศึกษาต้องแก้ปัญหาที่ Vendor ซอฟต์แวร์ทั่วไปไม่ต้องเจอ'}
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
              {isEN ? 'Everything needed to build a modern education platform, end to end.' : 'ทุกอย่างที่จำเป็นสำหรับสร้าง Education Platform ยุคใหม่แบบครบวงจร'}
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
                ? 'Proven tools and frameworks chosen for reliability at classroom scale.'
                : 'เครื่องมือและ Framework ที่พิสูจน์แล้วว่าเชื่อถือได้ในระดับการใช้งานจริงของห้องเรียน'}
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
              {isEN ? 'What We Build for Education' : 'สิ่งที่เราสร้างให้กับวงการการศึกษา'}
            </h2>
            <p className="mb-14" style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1.2rem', fontWeight: 400, maxWidth: 640 }}>
              {isEN ? 'Real systems shipped for real learners, not proof-of-concept demos.' : 'ระบบจริงที่ Deploy ใช้งานกับผู้เรียนจริง ไม่ใช่แค่ Proof of Concept'}
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
