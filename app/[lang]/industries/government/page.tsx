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

  const badge = isEN ? 'Industry / Government & Public Sector' : 'อุตสาหกรรม / ภาครัฐและหน่วยงานสาธารณะ'
  const heroSubhead = isEN
    ? 'Digital services for government and public institutions.'
    : 'บริการดิจิทัลสำหรับภาครัฐและหน่วยงานสาธารณะ'

  const challenges = isEN ? [
    { icon: 'ti-server-cog', title: 'Legacy System Modernization at Scale', desc: 'Decades-old mainframe and monolithic systems run mission-critical services, making replacement risky, yet the cost and complexity of modernizing at government scale is enormous.' },
    { icon: 'ti-shield-lock', title: 'Strict Data-Privacy & Security Compliance', desc: 'Citizen data demands the highest standards of security and regulatory compliance, requiring rigorous access controls, encryption, and audit trails across every system.' },
    { icon: 'ti-accessible', title: 'Digital-Accessibility Requirements for All Citizens', desc: 'Public digital services must be usable by every citizen regardless of ability, device, or connectivity, requiring strict adherence to accessibility standards from day one.' },
    { icon: 'ti-topology-star-3', title: 'Cross-Agency Interoperability', desc: 'Delivering a single, coherent citizen experience requires data and workflows to flow seamlessly across agencies that were never designed to share information.' },
  ] : [
    { icon: 'ti-server-cog', title: 'Legacy System Modernization ในระดับใหญ่', desc: 'ระบบ Mainframe และ Monolithic ที่มีอายุหลายสิบปียังคงรันบริการที่สำคัญต่อภารกิจ ทำให้การเปลี่ยนระบบมีความเสี่ยงสูง แต่ต้นทุนและความซับซ้อนของการทำ Modernization ในระดับภาครัฐก็มหาศาลเช่นกัน' },
    { icon: 'ti-shield-lock', title: 'ข้อกำหนดด้าน Data-Privacy และ Security ที่เข้มงวด', desc: 'ข้อมูลประชาชนต้องการมาตรฐานความปลอดภัยและ Compliance สูงสุด ต้องมี Access Control, การเข้ารหัส และ Audit Trail ที่รัดกุมในทุกระบบ' },
    { icon: 'ti-accessible', title: 'ข้อกำหนดด้าน Digital Accessibility สำหรับประชาชนทุกคน', desc: 'บริการดิจิทัลของภาครัฐต้องใช้งานได้กับประชาชนทุกคนไม่ว่าจะมีข้อจำกัดด้านร่างกาย อุปกรณ์ หรือการเชื่อมต่อแบบใด จึงต้องยึดตามมาตรฐาน Accessibility อย่างเคร่งครัดตั้งแต่ต้น' },
    { icon: 'ti-topology-star-3', title: 'Cross-Agency Interoperability', desc: 'การมอบประสบการณ์ที่ราบรื่นให้ประชาชนต้องอาศัยข้อมูลและ Workflow ที่ไหลลื่นระหว่างหน่วยงานต่างๆ ซึ่งแต่เดิมไม่ได้ถูกออกแบบมาให้แชร์ข้อมูลกัน' },
  ]

  const metrics = [
    { value: '$1.2T', label: isEN ? 'Global GovTech & E-Government Market by 2030' : 'มูลค่าตลาด GovTech และ E-Government ทั่วโลกภายในปี 2030', source: 'MarketsandMarkets GovTech Forecast, 2024' },
    { value: '68%', label: isEN ? 'Citizen Adoption Rate of Digital Government Services' : 'อัตราการใช้บริการภาครัฐดิจิทัลของประชาชน', source: 'OECD Digital Government Index, 2024' },
    { value: '40%', label: isEN ? 'Cost Savings from Digitized Public Services' : 'ต้นทุนที่ลดลงจากบริการภาครัฐที่ทำเป็นดิจิทัล', source: 'Deloitte Public Sector Digital Transformation, 2024' },
  ]

  const capabilities = isEN ? [
    { icon: 'ti-building-bank', title: 'E-Government Portals', desc: 'Unified citizen-facing portals that consolidate services, forms, and payments from multiple agencies into a single, intuitive digital front door.' },
    { icon: 'ti-id-badge-2', title: 'Digital-ID & Permit Systems', desc: 'Secure digital identity and permit-issuance platforms that let citizens verify themselves and apply for licenses or permits entirely online.' },
    { icon: 'ti-accessible', title: 'Accessibility-Compliant Public Websites', desc: 'WCAG-compliant public websites and applications built with inclusive design so every citizen can access government services with ease.' },
    { icon: 'ti-lock-square', title: 'Secure Citizen-Data Platforms', desc: 'Hardened data platforms with Zero Trust architecture, encryption at rest and in transit, and full audit logging to protect sensitive citizen information.' },
    { icon: 'ti-affiliate', title: 'Cross-Agency Data-Integration Systems', desc: 'Interoperability layers and shared APIs that connect siloed agency systems so citizen data and workflows move seamlessly across departments.' },
    { icon: 'ti-layout-dashboard', title: 'Digital-Service Delivery Dashboards', desc: 'Real-time operational dashboards that give agency leaders visibility into service uptake, processing times, and citizen satisfaction.' },
  ] : [
    { icon: 'ti-building-bank', title: 'E-Government Portals', desc: 'Portal สำหรับประชาชนแบบรวมศูนย์ ที่รวมบริการ แบบฟอร์ม และการชำระเงินจากหลายหน่วยงานไว้ในประตูดิจิทัลเดียวที่ใช้งานง่าย' },
    { icon: 'ti-id-badge-2', title: 'Digital-ID และระบบใบอนุญาต', desc: 'แพลตฟอร์ม Digital Identity และการออกใบอนุญาตที่ปลอดภัย ให้ประชาชนยืนยันตัวตนและยื่นขอใบอนุญาตได้ทั้งหมดแบบออนไลน์' },
    { icon: 'ti-accessible', title: 'เว็บไซต์ภาครัฐที่ได้มาตรฐาน Accessibility', desc: 'เว็บไซต์และแอปพลิเคชันภาครัฐที่ได้มาตรฐาน WCAG ออกแบบด้วยแนวคิด Inclusive Design เพื่อให้ประชาชนทุกคนเข้าถึงบริการได้อย่างสะดวก' },
    { icon: 'ti-lock-square', title: 'แพลตฟอร์มข้อมูลประชาชนที่ปลอดภัย', desc: 'แพลตฟอร์มข้อมูลที่แข็งแรงด้วยสถาปัตยกรรม Zero Trust การเข้ารหัสทั้ง At-rest และ In-transit พร้อม Audit Logging ครบถ้วนเพื่อปกป้องข้อมูลประชาชนที่อ่อนไหว' },
    { icon: 'ti-affiliate', title: 'ระบบเชื่อมต่อข้อมูลข้ามหน่วยงาน', desc: 'ชั้น Interoperability และ API ที่ใช้ร่วมกัน เชื่อมระบบของแต่ละหน่วยงานที่แยกกันอยู่ ให้ข้อมูลและ Workflow ของประชาชนไหลลื่นข้ามหน่วยงานได้' },
    { icon: 'ti-layout-dashboard', title: 'Dashboard สำหรับการส่งมอบบริการดิจิทัล', desc: 'Dashboard ปฏิบัติการแบบ Real-time ที่ให้ผู้บริหารหน่วยงานเห็นภาพการใช้บริการ ระยะเวลาดำเนินการ และความพึงพอใจของประชาชน' },
  ]

  const techStack = ['React', 'Node.js', 'PostgreSQL', 'AWS GovCloud', 'OAuth 2.0', 'Zero Trust', 'GraphQL', 'Kubernetes', 'Digital ID', 'WCAG', 'Elasticsearch', 'Redis']

  const useCases = isEN ? [
    { no: '01', title: 'Citizen Services Portal', desc: 'A unified digital front door where citizens can request documents, pay fees, and track applications across multiple agencies from a single account.' },
    { no: '02', title: 'Digital Permit & Licensing System', desc: 'An end-to-end online permitting platform with document upload, status tracking, and automated compliance checks that replaces paper-based approvals.' },
    { no: '03', title: 'Cross-Agency Data Platform', desc: 'A secure interoperability layer that lets multiple agencies share verified citizen data in real time while preserving strict access controls and audit trails.' },
  ] : [
    { no: '01', title: 'Citizen Services Portal', desc: 'ประตูดิจิทัลแบบรวมศูนย์ที่ประชาชนสามารถขอเอกสาร ชำระค่าธรรมเนียม และติดตามคำขอจากหลายหน่วยงานได้ในบัญชีเดียว' },
    { no: '02', title: 'ระบบขอใบอนุญาตดิจิทัล', desc: 'แพลตฟอร์มขอใบอนุญาตออนไลน์แบบครบวงจร พร้อมอัปโหลดเอกสาร ติดตามสถานะ และตรวจสอบ Compliance อัตโนมัติ แทนที่การอนุมัติแบบกระดาษ' },
    { no: '03', title: 'Cross-Agency Data Platform', desc: 'ชั้น Interoperability ที่ปลอดภัย ให้หลายหน่วยงานแชร์ข้อมูลประชาชนที่ยืนยันแล้วแบบ Real-time พร้อมคงไว้ซึ่ง Access Control และ Audit Trail ที่เข้มงวด' },
  ]

  const heroVisual = (
    <div className="relative pb-10 pr-6">
      <div className="rounded-2xl overflow-hidden" style={{ background: '#141329', border: '1px solid rgba(123,110,246,0.35)' }}>
        <div className="flex items-center justify-between px-5 py-3.5" style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
          <span className="text-xs tracking-widest uppercase" style={{ color: 'rgba(255,255,255,0.85)', fontFamily: 'monospace' }}>{isEN ? 'Portal / Gov' : 'Portal / Gov'}</span>
          <div className="flex gap-1">
            <span className="w-3 h-[2px] rounded-full" style={{ background: 'rgba(255,255,255,0.3)' }} />
            <span className="w-3 h-[2px] rounded-full" style={{ background: 'rgba(255,255,255,0.3)' }} />
          </div>
        </div>
        <div className="p-5">
          <div className="aspect-[16/9] rounded-xl mb-4 flex items-center justify-center relative overflow-hidden" style={{ background: 'linear-gradient(135deg, rgba(123,110,246,0.18), rgba(83,195,215,0.1))' }}>
            <svg width="130" height="70" viewBox="0 0 130 70" fill="none" style={{ animation: 'iconFloat 3s ease-in-out infinite' }}>
              <rect x="18" y="14" width="94" height="42" rx="6" stroke="var(--purple-light)" strokeWidth="2" fill="rgba(123,110,246,0.12)" />
              <circle cx="38" cy="35" r="10" stroke="var(--lime)" strokeWidth="2" fill="none" />
              <path d="M33 35 L37 39 L44 30" stroke="var(--lime)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              <line x1="60" y1="27" x2="102" y2="27" stroke="rgba(255,255,255,0.4)" strokeWidth="2" strokeLinecap="round" />
              <line x1="60" y1="35" x2="94" y2="35" stroke="rgba(255,255,255,0.25)" strokeWidth="2" strokeLinecap="round" />
              <line x1="60" y1="43" x2="88" y2="43" stroke="rgba(255,255,255,0.25)" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>
          <p className="mb-1" style={{ color: '#fff', fontWeight: 500, fontSize: '1.05rem' }}>{isEN ? 'Digital ID Verified' : 'ยืนยันตัวตนดิจิทัลแล้ว'}</p>
          <p className="text-xs mb-3" style={{ color: 'rgba(255,255,255,0.5)' }}>{isEN ? 'Permit application in progress.' : 'คำขอใบอนุญาตกำลังดำเนินการ'}</p>
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
          <span className="text-[10px] tracking-widest uppercase" style={{ color: 'rgba(255,255,255,0.85)' }}>{isEN ? 'Application' : 'คำขอ'}</span>
          <i className="ti ti-circle-check" style={{ fontSize: 14, color: 'var(--lime)' }} aria-hidden="true" />
        </div>
        <div className="w-9 h-9 rounded-lg flex items-center justify-center mb-2" style={{ background: 'rgba(123,110,246,0.15)' }}>
          <i className="ti ti-id-badge-2" style={{ fontSize: 16, color: 'var(--purple-light)' }} aria-hidden="true" />
        </div>
        <p className="text-xs mb-3" style={{ color: 'rgba(255,255,255,0.5)' }}>{isEN ? 'Permit #GV-2451' : 'ใบอนุญาต #GV-2451'}</p>
        <div
          className="rounded-lg text-center py-1.5 text-xs"
          style={{ background: 'linear-gradient(90deg, var(--purple), var(--purple-light))', color: '#fff' }}
        >
          {isEN ? 'Approved →' : 'อนุมัติแล้ว →'}
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
                  {isEN ? 'Government &' : 'ภาครัฐ &'}<br />{isEN ? 'Public Sector' : 'หน่วยงานสาธารณะ'}
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
                  ? 'We help government agencies and public institutions build e-government portals, digital-ID and permit systems, and secure cross-agency data platforms that make public services faster, more accessible, and easier to trust. Our solutions meet the highest security and accessibility standards while modernizing legacy infrastructure without disrupting the services citizens rely on.'
                  : 'เราช่วยหน่วยงานภาครัฐและองค์กรสาธารณะสร้าง E-Government Portal, ระบบ Digital-ID และใบอนุญาต และแพลตฟอร์มข้อมูลข้ามหน่วยงานที่ปลอดภัย เพื่อให้บริการสาธารณะเร็วขึ้น เข้าถึงง่ายขึ้น และน่าเชื่อถือมากขึ้น โซลูชันของเราตอบโจทย์มาตรฐานความปลอดภัยและ Accessibility ระดับสูงสุด พร้อมทำ Modernization ระบบเดิมโดยไม่กระทบบริการที่ประชาชนพึ่งพา'}
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
