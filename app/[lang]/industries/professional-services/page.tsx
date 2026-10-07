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

  const badge = isEN ? 'Industry / Professional Services' : 'อุตสาหกรรม / บริการวิชาชีพ'
  const heroSubhead = isEN
    ? 'Digital tools for consulting, legal, and business services.'
    : 'เครื่องมือสำหรับที่ปรึกษา สำนักงานกฎหมาย และธุรกิจบริการ'

  const challenges = isEN ? [
    { icon: 'ti-files', title: 'Manual Document-Heavy Workflows', desc: 'Contracts, reports, and engagement letters still move through email and paper-based approval chains, slowing delivery and introducing version-control errors that erode client trust.' },
    { icon: 'ti-eye-search', title: 'Inconsistent Client-Engagement Visibility', desc: 'Partners and account teams lack a single view of engagement status, deliverables, and risk, making it hard to spot scope creep or at-risk relationships before they escalate.' },
    { icon: 'ti-clock-dollar', title: 'Time-Tracking & Billing Accuracy', desc: 'Tracking billable hours accurately across dozens of concurrent engagements is error-prone with manual timesheets, leading to revenue leakage and disputed invoices.' },
    { icon: 'ti-network', title: 'Knowledge Silos Across Teams & Offices', desc: 'Institutional knowledge, precedents, and past deliverables stay locked in individual inboxes and local drives, forcing teams to repeatedly rebuild work that already exists elsewhere in the firm.' },
  ] : [
    { icon: 'ti-files', title: 'งานเอกสารที่ยังทำด้วยมือ', desc: 'สัญญา รายงาน และจดหมายว่าจ้างยังส่งผ่านอีเมลและสายอนุมัติแบบกระดาษ ทำให้ส่งมอบช้าและเกิดปัญหาเอกสารคนละเวอร์ชัน ซึ่งทำให้ลูกค้าเสียความเชื่อมั่น' },
    { icon: 'ti-eye-search', title: 'มองเห็นสถานะงานลูกค้าไม่สม่ำเสมอ', desc: 'พาร์ตเนอร์และทีมดูแลลูกค้าไม่มีภาพรวมเดียวของสถานะงาน งานที่ต้องส่งมอบ และความเสี่ยง จึงจับปัญหางานบานปลายหรือความสัมพันธ์ที่เสี่ยงได้ยากก่อนจะลุกลาม' },
    { icon: 'ti-clock-dollar', title: 'บันทึกเวลาและออกบิลให้แม่นยำ', desc: 'การติดตามชั่วโมงทำงานที่เรียกเก็บเงินได้ในหลายสิบโปรเจกต์พร้อมกัน เสี่ยงผิดพลาดเมื่อใช้ Timesheet ที่กรอกด้วยมือ ทำให้รายได้รั่วไหลและลูกค้าโต้แย้งใบแจ้งหนี้' },
    { icon: 'ti-network', title: 'ความรู้ถูกเก็บแยกกันระหว่างทีมและสำนักงาน', desc: 'ความรู้ ตัวอย่างงานเก่า และงานที่เคยส่งมอบ ถูกเก็บในกล่องอีเมลและไดรฟ์ส่วนตัวของแต่ละคน ทีมจึงต้องทำงานที่องค์กรมีอยู่แล้วซ้ำแล้วซ้ำเล่า' },
  ]

  const metrics = [
    { value: '$122B', label: isEN ? 'Global Legal & Professional Services Software Market by 2030' : 'มูลค่าตลาดซอฟต์แวร์สำหรับบริการวิชาชีพและกฎหมายทั่วโลกภายในปี 2030', source: 'Grand View Research Professional Services Software Report, 2024' },
    { value: '25%', label: isEN ? 'Improvement in Billable-Hour Recovery from Automation' : 'ชั่วโมงงานที่เรียกเก็บเงินได้เพิ่มขึ้นจากระบบอัตโนมัติ', source: 'Deloitte Professional Services Automation Study, 2024' },
    { value: '61%', label: isEN ? 'Of Firms Now Piloting AI-Assisted Document Tools' : 'ของบริษัทที่กำลังทดลองใช้เครื่องมือเอกสารที่มี AI ช่วย', source: 'Thomson Reuters Future of Professionals Report, 2024' },
  ]

  const capabilities = isEN ? [
    { icon: 'ti-address-book', title: 'Client-Engagement CRM Dashboards', desc: 'Unified dashboards that give partners and account teams real-time visibility into engagement status, deliverables, risk flags, and client relationship health.' },
    { icon: 'ti-signature', title: 'Document Automation & E-Signature Systems', desc: 'Template-driven document generation with built-in e-signature workflows that cut contract and engagement-letter turnaround from days to minutes.' },
    { icon: 'ti-clock-hour-4', title: 'Time-Tracking & Billing Platforms', desc: 'Accurate, low-friction time capture integrated with invoicing and revenue-recognition rules to eliminate billing disputes and reduce leakage.' },
    { icon: 'ti-books', title: 'Knowledge-Management Portals', desc: 'Searchable, permission-aware repositories for precedents, playbooks, and past deliverables so teams reuse institutional knowledge instead of rebuilding it.' },
    { icon: 'ti-briefcase', title: 'Project & Matter-Management Systems', desc: 'End-to-end tracking of engagements or legal matters, with task assignment, budget-to-actual monitoring, and milestone reporting for every team.' },
    { icon: 'ti-robot', title: 'AI-Assisted Research Tools', desc: 'AI copilots that accelerate research, summarize case law or market data, and draft first-pass deliverables for professionals to review and refine.' },
  ] : [
    { icon: 'ti-address-book', title: 'Client-Engagement CRM Dashboards', desc: 'แดชบอร์ดกลางให้พาร์ตเนอร์และทีมดูแลลูกค้าเห็นสถานะงาน งานที่ต้องส่งมอบ สัญญาณความเสี่ยง และสุขภาพความสัมพันธ์กับลูกค้าแบบเรียลไทม์' },
    { icon: 'ti-signature', title: 'Document Automation & E-Signature Systems', desc: 'ระบบสร้างเอกสารจากเทมเพลตพร้อมเซ็นชื่ออิเล็กทรอนิกส์ในตัว ลดเวลาทำสัญญาและจดหมายว่าจ้างจากหลายวันเหลือไม่กี่นาที' },
    { icon: 'ti-clock-hour-4', title: 'Time-Tracking & Billing Platforms', desc: 'บันทึกเวลาได้แม่นยำและใช้ง่าย เชื่อมกับการออกใบแจ้งหนี้และกฎการรับรู้รายได้ เพื่อลดข้อพิพาทเรื่องบิลและรายได้ที่รั่วไหล' },
    { icon: 'ti-books', title: 'Knowledge-Management Portals', desc: 'คลังข้อมูลตัวอย่างงานเก่า Playbook และงานที่เคยส่งมอบ ค้นหาได้และควบคุมสิทธิ์เข้าถึง เพื่อให้ทีมนำความรู้กลับมาใช้ซ้ำ ไม่ต้องทำใหม่' },
    { icon: 'ti-briefcase', title: 'Project & Matter-Management Systems', desc: 'ระบบติดตามโปรเจกต์หรือคดีตั้งแต่ต้นจนจบ มอบหมายงาน เทียบงบประมาณกับค่าใช้จ่ายจริง และรายงานความคืบหน้าให้ทุกทีม' },
    { icon: 'ti-robot', title: 'AI-Assisted Research Tools', desc: 'AI Copilot ช่วยค้นคว้าให้เร็วขึ้น สรุปคำพิพากษาหรือข้อมูลตลาด และร่างงานเบื้องต้น ให้ผู้เชี่ยวชาญตรวจและปรับต่อ' },
  ]

  const techStack = ['React', 'Next.js', 'Node.js', 'PostgreSQL', 'DocuSign API', 'AI/ML', 'GraphQL', 'AWS', 'Redis', 'Elasticsearch', 'OAuth 2.0', 'Stripe', 'PDF Processing']

  const useCases = isEN ? [
    { no: '01', title: 'Client-Engagement CRM', desc: 'Centralized platform that tracks every active engagement, deliverable, and relationship health signal, giving partners a single source of truth across the firm.' },
    { no: '02', title: 'Document Automation Platform', desc: 'Template-based contract and engagement-letter generation with integrated e-signature and approval routing, cutting turnaround time from days to hours.' },
    { no: '03', title: 'Time-Tracking & Billing System', desc: 'Low-friction time capture connected to automated invoicing and revenue-recognition rules, eliminating manual reconciliation and billing disputes.' },
  ] : [
    { no: '01', title: 'Client-Engagement CRM', desc: 'แพลตฟอร์มกลางที่ติดตามทุกงานที่กำลังทำ งานที่ต้องส่งมอบ และสัญญาณสุขภาพความสัมพันธ์ ให้พาร์ตเนอร์มีแหล่งข้อมูลเดียวที่เชื่อถือได้ทั้งบริษัท' },
    { no: '02', title: 'Document Automation Platform', desc: 'ระบบสร้างสัญญาและจดหมายว่าจ้างจากเทมเพลต พร้อมเซ็นชื่ออิเล็กทรอนิกส์และสายอนุมัติในตัว ลดเวลาจากหลายวันเหลือไม่กี่ชั่วโมง' },
    { no: '03', title: 'Time-Tracking & Billing System', desc: 'ระบบบันทึกเวลาที่ใช้ง่าย เชื่อมกับการออกใบแจ้งหนี้อัตโนมัติและกฎการรับรู้รายได้ ไม่ต้องกระทบยอดด้วยมือ และลดข้อพิพาทเรื่องบิล' },
  ]

  const heroVisual = (
    <div className="relative pb-10 pr-6">
      <div className="rounded-2xl overflow-hidden" style={{ background: '#141329', border: '1px solid rgba(123,110,246,0.35)' }}>
        <div className="flex items-center justify-between px-5 py-3.5" style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
          <span className="text-xs tracking-widest uppercase" style={{ color: 'rgba(255,255,255,0.85)', fontFamily: 'monospace' }}>{isEN ? 'Studio / Matters' : 'Studio / Matters'}</span>
          <div className="flex gap-1">
            <span className="w-3 h-[2px] rounded-full" style={{ background: 'rgba(255,255,255,0.3)' }} />
            <span className="w-3 h-[2px] rounded-full" style={{ background: 'rgba(255,255,255,0.3)' }} />
          </div>
        </div>
        <div className="p-5">
          <div className="rounded-xl mb-4 p-4" style={{ background: 'linear-gradient(135deg, rgba(123,110,246,0.18), rgba(83,195,215,0.1))' }}>
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs" style={{ color: 'rgba(255,255,255,0.7)' }}>{isEN ? 'Engagement Progress' : 'ความคืบหน้าโปรเจกต์'}</span>
              <span className="text-xs" style={{ color: 'var(--lime)', fontWeight: 600 }}>82%</span>
            </div>
            <div className="w-full h-2 rounded-full mb-4 overflow-hidden" style={{ background: 'rgba(255,255,255,0.1)' }}>
              <div className="h-full rounded-full" style={{ width: '82%', background: 'linear-gradient(90deg, var(--purple-light), var(--lime))', animation: 'barGrow 1.6s ease-out' }} />
            </div>
            <div className="flex items-center gap-2 mb-2">
              <i className="ti ti-file-check" style={{ fontSize: 15, color: 'var(--lime)' }} aria-hidden="true" />
              <span className="text-xs" style={{ color: 'rgba(255,255,255,0.7)' }}>{isEN ? 'Contract signed' : 'เซ็นสัญญาแล้ว'}</span>
            </div>
            <div className="flex items-center gap-2">
              <i className="ti ti-checklist" style={{ fontSize: 15, color: 'var(--purple-light)' }} aria-hidden="true" />
              <span className="text-xs" style={{ color: 'rgba(255,255,255,0.7)' }}>{isEN ? '3 deliverables pending review' : 'มี Deliverable รออนุมัติ 3 รายการ'}</span>
            </div>
          </div>
          <p className="mb-1" style={{ color: '#fff', fontWeight: 500, fontSize: '1.05rem' }}>{isEN ? 'Acme Advisory Retainer' : 'Acme Advisory Retainer'}</p>
          <p className="text-xs mb-3" style={{ color: 'rgba(255,255,255,0.5)' }}>{isEN ? 'Due in 6 days' : 'ครบกำหนดใน 6 วัน'}</p>
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
          <span className="text-[10px] tracking-widest uppercase" style={{ color: 'rgba(255,255,255,0.85)' }}>{isEN ? 'Billing' : 'การเรียกเก็บเงิน'}</span>
          <i className="ti ti-circle-check" style={{ fontSize: 14, color: 'var(--lime)' }} aria-hidden="true" />
        </div>
        <div className="w-9 h-9 rounded-lg flex items-center justify-center mb-2" style={{ background: 'rgba(123,110,246,0.15)' }}>
          <i className="ti ti-clock-dollar" style={{ fontSize: 16, color: 'var(--purple-light)' }} aria-hidden="true" />
        </div>
        <p className="text-xs mb-3" style={{ color: 'rgba(255,255,255,0.5)' }}>{isEN ? '38.5 hrs logged this week' : 'บันทึกแล้ว 38.5 ชม. สัปดาห์นี้'}</p>
        <div
          className="rounded-lg text-center py-1.5 text-xs"
          style={{ background: 'linear-gradient(90deg, var(--purple), var(--purple-light))', color: '#fff' }}
        >
          {isEN ? 'Send Invoice →' : 'ส่งใบแจ้งหนี้ →'}
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
                  {isEN ? 'Professional' : 'บริการ'}<br />{isEN ? 'Services' : 'วิชาชีพ'}
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
                  ? 'We help consulting, legal, and business-services firms build client-engagement CRMs, document-automation systems, time-tracking and billing platforms, and knowledge-management portals that recover billable hours and strengthen client relationships. Our solutions integrate cleanly with existing practice-management tools and combine deep workflow expertise with secure, auditable engineering.'
                  : 'เราช่วยบริษัทที่ปรึกษา สำนักงานกฎหมาย และธุรกิจบริการ สร้าง CRM ดูแลลูกค้า ระบบสร้างเอกสารอัตโนมัติ แพลตฟอร์มบันทึกเวลาและออกบิล รวมถึงระบบคลังความรู้ ที่ช่วยเก็บชั่วโมงงานที่เรียกเก็บได้ไม่ให้หลุด และทำให้ความสัมพันธ์กับลูกค้าแน่นแฟ้นขึ้น ระบบของเราเชื่อมกับเครื่องมือบริหารงานสำนักงานเดิมได้ราบรื่น เราผสมความรู้ด้านขั้นตอนงานกับงานวิศวกรรมที่ปลอดภัยและตรวจสอบย้อนหลังได้'}
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
                : 'ปัญหาหลักที่ธุรกิจในอุตสาหกรรมนี้ต้องเจอ'}
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
              {isEN ? "Proven solutions we build to address your industry's most pressing needs." : 'ระบบที่เราสร้างและใช้งานได้จริง เพื่อแก้ปัญหาสำคัญของอุตสาหกรรมคุณ'}
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
              {isEN ? 'Technologies We Use' : 'เทคโนโลยีที่เราใช้'}
            </h2>
            <p className="mb-12" style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1.2rem', fontWeight: 400, maxWidth: 640 }}>
              {isEN
                ? 'Industry-proven tools and frameworks we leverage to build robust solutions.'
                : 'เครื่องมือและ Framework ที่เราเลือกใช้ เพราะมั่นคงและเชื่อถือได้'}
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
              {isEN ? 'Concrete project types we deliver for clients in this industry.' : 'ตัวอย่างงานที่เราทำให้ลูกค้าในอุตสาหกรรมนี้'}
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
              {isEN ? "We'd love to hear what you're building." : 'เล่าให้เราฟังได้ครับว่าคุณกำลังทำอะไรอยู่'}
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
