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

  const badge = isEN ? 'Industry / Healthcare & Life Sciences' : 'อุตสาหกรรม / สุขภาพและวิทยาศาสตร์ชีวภาพ'
  const heroSubhead = isEN
    ? 'Technology solutions that improve patient care and medical research.'
    : 'เทคโนโลยีที่ยกระดับการดูแลผู้ป่วยและงานวิจัยทางการแพทย์'

  const challenges = isEN ? [
    { icon: 'ti-affiliate', title: 'Data Interoperability', desc: 'Healthcare data is trapped in siloed systems using incompatible standards, preventing the seamless information exchange needed for coordinated care and clinical decision-making.' },
    { icon: 'ti-scale', title: 'Regulatory Compliance', desc: 'HIPAA, PDPA, and other health data regulations impose strict requirements on how patient information is stored, transmitted, and accessed, adding complexity to every technical decision.' },
    { icon: 'ti-heart-handshake', title: 'Patient Engagement', desc: 'Patients expect convenient, transparent digital experiences from their healthcare providers, yet most health systems struggle to deliver consumer-grade portals and communication tools.' },
    { icon: 'ti-shield-lock', title: 'Healthcare Cybersecurity', desc: 'Medical records are among the most valuable targets for cybercriminals, and a breach can compromise patient safety, not just privacy, demanding robust security at every layer.' },
  ] : [
    { icon: 'ti-affiliate', title: 'Data Interoperability', desc: 'ข้อมูลสุขภาพถูกแยกอยู่ในระบบที่ใช้มาตรฐานไม่เข้ากัน ทำให้แลกเปลี่ยนข้อมูลระหว่างระบบไม่ราบรื่น ซึ่งจำเป็นต่อการดูแลผู้ป่วยแบบประสานงานและการตัดสินใจทางคลินิก' },
    { icon: 'ti-scale', title: 'Regulatory Compliance', desc: 'HIPAA, PDPA และกฎระเบียบด้านข้อมูลสุขภาพอื่นๆ กำหนดข้อบังคับเข้มงวดเรื่องการจัดเก็บ ส่งผ่าน และเข้าถึงข้อมูลผู้ป่วย เพิ่มความซับซ้อนในทุกการตัดสินใจด้านเทคนิค' },
    { icon: 'ti-heart-handshake', title: 'Patient Engagement', desc: 'ผู้ป่วยคาดหวังประสบการณ์ดิจิทัลที่สะดวกและโปร่งใสจากผู้ให้บริการสุขภาพ แต่ระบบสุขภาพส่วนใหญ่ยังทำ Portal และเครื่องมือสื่อสารระดับ Consumer-grade ได้ยาก' },
    { icon: 'ti-shield-lock', title: 'Healthcare Cybersecurity', desc: 'เวชระเบียนเป็นเป้าหมายที่มีมูลค่าสูงที่สุดสำหรับอาชญากรไซเบอร์ และการรั่วไหลของข้อมูลอาจกระทบความปลอดภัยของผู้ป่วยโดยตรง ไม่ใช่แค่ความเป็นส่วนตัว ต้องการความปลอดภัยที่แข็งแรงทุกชั้น' },
  ]

  const metrics = [
    { value: '$286B', label: isEN ? 'Global Telehealth Market by 2030' : 'ขนาดตลาด Telehealth ทั่วโลกภายในปี 2030', source: 'Grand View Research, 2024' },
    { value: '$45.2B', label: isEN ? 'Healthcare AI Market Size by 2028' : 'ขนาดตลาด Healthcare AI ภายในปี 2028', source: 'Statista Health AI Report, 2024' },
    { value: '73%', label: isEN ? 'Patients Actively Using Digital Health Portals' : 'ผู้ป่วยที่ใช้งาน Digital Health Portal อย่างสม่ำเสมอ', source: 'ONC Health IT Dashboard, 2024' },
  ]

  const capabilities = isEN ? [
    { icon: 'ti-stethoscope', title: 'Telemedicine Platforms', desc: 'HIPAA-compliant virtual care platforms with video consultations, prescription management, appointment scheduling, and clinical documentation.' },
    { icon: 'ti-clipboard-plus', title: 'EHR Integration Solutions', desc: 'HL7 FHIR-based integration layers that connect disparate electronic health record systems for seamless clinical data exchange.' },
    { icon: 'ti-heartbeat', title: 'Clinical Analytics Platforms', desc: 'AI-powered analytics dashboards that surface clinical insights, identify at-risk patients, and support evidence-based treatment decisions.' },
    { icon: 'ti-user', title: 'Patient Engagement Portals', desc: 'Consumer-grade patient portals for appointment booking, lab results access, medication management, and secure provider communication.' },
    { icon: 'ti-activity', title: 'Remote Patient Monitoring', desc: 'IoT-enabled platforms that collect and analyze patient vitals data from wearable devices for continuous remote health monitoring.' },
  ] : [
    { icon: 'ti-stethoscope', title: 'Telemedicine Platforms', desc: 'แพลตฟอร์ม Virtual Care ที่สอดคล้อง HIPAA พร้อม Video Consultation, จัดการใบสั่งยา, นัดหมาย และบันทึกเวชระเบียน' },
    { icon: 'ti-clipboard-plus', title: 'EHR Integration Solutions', desc: 'Layer เชื่อมต่อด้วย HL7 FHIR ที่เชื่อมระบบเวชระเบียนอิเล็กทรอนิกส์ที่แตกต่างกันให้แลกเปลี่ยนข้อมูลทางคลินิกได้ราบรื่น' },
    { icon: 'ti-heartbeat', title: 'Clinical Analytics Platforms', desc: 'Dashboard วิเคราะห์ข้อมูลด้วย AI ที่แสดง Insight ทางคลินิก ระบุผู้ป่วยกลุ่มเสี่ยง และสนับสนุนการตัดสินใจรักษาตาม Evidence' },
    { icon: 'ti-user', title: 'Patient Engagement Portals', desc: 'Portal ผู้ป่วยระดับ Consumer-grade สำหรับนัดหมาย ดูผลตรวจ จัดการยา และสื่อสารกับแพทย์อย่างปลอดภัย' },
    { icon: 'ti-activity', title: 'Remote Patient Monitoring', desc: 'แพลตฟอร์มที่เชื่อมต่อ IoT เก็บและวิเคราะห์ข้อมูลสัญญาณชีพจากอุปกรณ์ Wearable เพื่อติดตามสุขภาพจากระยะไกลต่อเนื่อง' },
  ]

  const techStack = ['React', 'React Native', 'FHIR', 'HL7', 'AWS HealthLake', 'HIPAA', 'Python', 'TensorFlow', 'IoT', 'WebRTC', 'PostgreSQL', 'Redis']

  const useCases = isEN ? [
    { no: '01', title: 'Telemedicine Platform', desc: 'HIPAA-compliant virtual care application with video consultations, e-prescriptions, appointment scheduling, clinical notes, and insurance verification integration.' },
    { no: '02', title: 'Clinical Decision Support Tool', desc: 'AI-assisted diagnostic support platform that analyzes patient data, lab results, and medical literature to provide evidence-based treatment recommendations to clinicians.' },
    { no: '03', title: 'Remote Patient Monitoring', desc: 'IoT-enabled platform collecting continuous vital signs from wearable devices with automated alerts, trend analysis, and clinician notification workflows.' },
  ] : [
    { no: '01', title: 'Telemedicine Platform', desc: 'แอป Virtual Care ที่สอดคล้อง HIPAA พร้อม Video Consultation, ใบสั่งยาอิเล็กทรอนิกส์, นัดหมาย, บันทึกทางคลินิก และเชื่อมต่อตรวจสอบประกัน' },
    { no: '02', title: 'Clinical Decision Support Tool', desc: 'แพลตฟอร์มช่วยวินิจฉัยด้วย AI ที่วิเคราะห์ข้อมูลผู้ป่วย ผลตรวจ และวรรณกรรมทางการแพทย์ เพื่อให้คำแนะนำการรักษาตาม Evidence แก่แพทย์' },
    { no: '03', title: 'Remote Patient Monitoring', desc: 'แพลตฟอร์มที่เชื่อมต่อ IoT เก็บสัญญาณชีพต่อเนื่องจากอุปกรณ์ Wearable พร้อมแจ้งเตือนอัตโนมัติ วิเคราะห์แนวโน้ม และแจ้งแพทย์' },
  ]

  const heroVisual = (
    <div className="relative pb-10 pr-6">
      <div className="rounded-2xl overflow-hidden" style={{ background: '#141329', border: '1px solid rgba(123,110,246,0.35)' }}>
        <div className="flex items-center gap-2 px-5 py-3.5" style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
          <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#F87171' }} />
          <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#FBBF24' }} />
          <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#34D399' }} />
          <span className="ml-3 text-xs" style={{ color: 'rgba(255,255,255,0.85)', fontFamily: 'monospace' }}>vitals.monitor</span>
        </div>
        <div className="px-6 py-7">
          <div className="flex items-center justify-between mb-6">
            <span className="text-xs tracking-widest uppercase" style={{ color: 'rgba(255,255,255,0.5)' }}>{isEN ? 'Connected Care' : 'การดูแลแบบเชื่อมต่อ'}</span>
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full" style={{ background: 'var(--lime)', animation: 'blinkDot 1.6s ease-in-out infinite' }} />
              <span className="text-xs" style={{ color: 'var(--lime)' }}>{isEN ? 'Live' : 'สด'}</span>
            </div>
          </div>
          <svg width="100%" height="70" viewBox="0 0 300 70" fill="none" className="mb-5">
            <path
              d="M0 35 L45 35 L58 12 L72 58 L86 20 L100 35 L145 35 L158 12 L172 58 L186 20 L200 35 L300 35"
              stroke="var(--lime)" strokeWidth="2" fill="none"
              strokeDasharray="6 6"
              style={{ animation: 'dashFlow 1.2s linear infinite' }}
            />
          </svg>
          <div className="flex items-center gap-8">
            <div>
              <div className="leading-none mb-1" style={{ color: '#fff', fontSize: '1.8rem', fontWeight: 500, fontFamily: 'monospace' }}>72</div>
              <span className="text-xs" style={{ color: 'rgba(255,255,255,0.5)' }}>bpm</span>
            </div>
            <div>
              <div className="leading-none mb-1" style={{ color: '#fff', fontSize: '1.8rem', fontWeight: 500, fontFamily: 'monospace' }}>98%</div>
              <span className="text-xs" style={{ color: 'rgba(255,255,255,0.5)' }}>SpO₂</span>
            </div>
          </div>
        </div>
      </div>

      <div
        className="absolute -bottom-2 -right-2 w-[200px] rounded-2xl p-4"
        style={{ background: '#1B1A33', border: '1px solid rgba(255,255,255,0.1)', boxShadow: '0 20px 50px -10px rgba(0,0,0,0.6)', animation: 'badgeFloat 3.4s ease-in-out infinite' }}
      >
        <div className="flex items-center justify-between mb-2.5">
          <span className="text-[10px] tracking-widest uppercase" style={{ color: 'rgba(255,255,255,0.85)' }}>{isEN ? 'Care Plan' : 'แผนการรักษา'}</span>
          <i className="ti ti-circle-check" style={{ fontSize: 14, color: 'var(--lime)' }} aria-hidden="true" />
        </div>
        <div className="flex items-center gap-2 mb-2">
          <i className="ti ti-capsule" style={{ fontSize: 18, color: 'var(--purple-light)', animation: 'iconFloat 2.6s ease-in-out infinite' }} aria-hidden="true" />
          <i className="ti ti-capsule" style={{ fontSize: 18, color: 'var(--purple-light)', animation: 'iconFloat 2.9s ease-in-out infinite' }} aria-hidden="true" />
        </div>
        <div className="flex items-center gap-1.5 text-xs" style={{ color: 'var(--lime)' }}>
          <i className="ti ti-check" style={{ fontSize: 12 }} aria-hidden="true" />
          {isEN ? 'Prescription synced' : 'ยาซิงก์แล้ว'}
        </div>
      </div>
    </div>
  )

  return (
    <>
      <Navbar lang={lang} tr={tr} />
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
                <h1 className="t-display mb-6 leading-tight" style={{ fontSize: 'clamp(2.8rem,6vw,5.5rem)', background: 'linear-gradient(135deg, var(--purple-light) 0%, #53C3D7 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                  {isEN ? 'Healthcare &' : 'สุขภาพและ'}<br />{isEN ? 'Life Sciences' : 'วิทยาศาสตร์ชีวภาพ'}
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
                  ? 'We partner with hospitals, clinics, healthtech startups, and pharmaceutical companies to build telemedicine platforms, EHR integrations, remote monitoring systems, and clinical analytics dashboards. Our teams understand HL7/FHIR standards and regulatory requirements like HIPAA and PDPA, building compliance in from day one so you can innovate confidently.'
                  : 'เราร่วมงานกับโรงพยาบาล คลินิก Healthtech Startup และบริษัทยา เพื่อสร้าง Telemedicine Platform, EHR Integration, ระบบ Remote Monitoring และ Dashboard วิเคราะห์ทางคลินิก ทีมของเราเข้าใจมาตรฐาน HL7/FHIR และข้อกำหนดด้านกฎระเบียบอย่าง HIPAA และ PDPA โดยสร้าง Compliance เข้าไปตั้งแต่วันแรก เพื่อให้คุณสร้างนวัตกรรมได้อย่างมั่นใจ'}
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
