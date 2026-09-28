import Link from 'next/link'
import ServiceLayout from '@/components/service/ServiceLayout'
import { type Lang } from '@/lib/i18n'

const BRAND_LOGOS: Record<string, { hex: string; path: string }> = {
  kubernetes: { hex: '#326CE5', path: 'M10.204 14.35l.007.01-.999 2.413a5.171 5.171 0 0 1-2.075-2.597l2.578-.437.004.005a.44.44 0 0 1 .484.606zm-.833-2.129a.44.44 0 0 0 .173-.756l.002-.011L7.585 9.7a5.143 5.143 0 0 0-.73 3.255l2.514-.725.002-.009zm1.145-1.98a.44.44 0 0 0 .699-.337l.01-.005.15-2.62a5.144 5.144 0 0 0-3.01 1.442l2.147 1.523.004-.002zm.76 2.75l.723.349.722-.347.18-.78-.5-.623h-.804l-.5.623.179.779zm1.5-3.095a.44.44 0 0 0 .7.336l.008.003 2.134-1.513a5.188 5.188 0 0 0-2.992-1.442l.148 2.615.002.001zm10.876 5.97l-5.773 7.181a1.6 1.6 0 0 1-1.248.594l-9.261.003a1.6 1.6 0 0 1-1.247-.596l-5.776-7.18a1.583 1.583 0 0 1-.307-1.34L2.1 5.573c.108-.47.425-.864.863-1.073L11.305.513a1.606 1.606 0 0 1 1.385 0l8.345 3.985c.438.209.755.604.863 1.073l2.062 8.955c.108.47-.005.963-.308 1.34zm-3.289-2.057c-.042-.01-.103-.026-.145-.034-.174-.033-.315-.025-.479-.038-.35-.037-.638-.067-.895-.148-.105-.04-.18-.165-.216-.216l-.201-.059a6.45 6.45 0 0 0-.105-2.332 6.465 6.465 0 0 0-.936-2.163c.052-.047.15-.133.177-.159.008-.09.001-.183.094-.282.197-.185.444-.338.743-.522.142-.084.273-.137.415-.242.032-.024.076-.062.11-.089.24-.191.295-.52.123-.736-.172-.216-.506-.236-.745-.045-.034.027-.08.062-.111.088-.134.116-.217.23-.33.35-.246.25-.45.458-.673.609-.097.056-.239.037-.303.033l-.19.135a6.545 6.545 0 0 0-4.146-2.003l-.012-.223c-.065-.062-.143-.115-.163-.25-.022-.268.015-.557.057-.905.023-.163.061-.298.068-.475.001-.04-.001-.099-.001-.142 0-.306-.224-.555-.5-.555-.275 0-.499.249-.499.555l.001.014c0 .041-.002.092 0 .128.006.177.044.312.067.475.042.348.078.637.056.906a.545.545 0 0 1-.162.258l-.012.211a6.424 6.424 0 0 0-4.166 2.003 8.373 8.373 0 0 1-.18-.128c-.09.012-.18.04-.297-.029-.223-.15-.427-.358-.673-.608-.113-.12-.195-.234-.329-.349-.03-.026-.077-.062-.111-.088a.594.594 0 0 0-.348-.132.481.481 0 0 0-.398.176c-.172.216-.117.546.123.737l.007.005.104.083c.142.105.272.159.414.242.299.185.546.338.743.522.076.082.09.226.1.288l.16.143a6.462 6.462 0 0 0-1.02 4.506l-.208.06c-.055.072-.133.184-.215.217-.257.081-.546.11-.895.147-.164.014-.305.006-.48.039-.037.007-.09.02-.133.03l-.004.002-.007.002c-.295.071-.484.342-.423.608.061.267.349.429.645.365l.007-.001.01-.003.129-.029c.17-.046.294-.113.448-.172.33-.118.604-.217.87-.256.112-.009.23.069.288.101l.217-.037a6.5 6.5 0 0 0 2.88 3.596l-.09.218c.033.084.069.199.044.282-.097.252-.263.517-.452.813-.091.136-.185.242-.268.399-.02.037-.045.095-.064.134-.128.275-.034.591.213.71.248.12.556-.007.69-.282v-.002c.02-.039.046-.09.062-.127.07-.162.094-.301.144-.458.132-.332.205-.68.387-.897.05-.06.13-.082.215-.105l.113-.205a6.453 6.453 0 0 0 4.609.012l.106.192c.086.028.18.042.256.155.136.232.229.507.342.84.05.156.074.295.145.457.016.037.043.09.062.129.133.276.442.402.69.282.247-.118.341-.435.213-.71-.02-.039-.045-.096-.065-.134-.083-.156-.177-.261-.268-.398-.19-.296-.346-.541-.443-.793-.04-.13.007-.21.038-.294-.018-.022-.059-.144-.083-.202a6.499 6.499 0 0 0 2.88-3.622c.064.01.176.03.213.038.075-.05.144-.114.28-.104.266.039.54.138.87.256.154.06.277.128.448.173.036.01.088.019.13.028l.009.003.007.001c.297.064.584-.098.645-.365.06-.266-.128-.537-.423-.608zM16.4 9.701l-1.95 1.746v.005a.44.44 0 0 0 .173.757l.003.01 2.526.728a5.199 5.199 0 0 0-.108-1.674A5.208 5.208 0 0 0 16.4 9.7zm-4.013 5.325a.437.437 0 0 0-.404-.232.44.44 0 0 0-.372.233h-.002l-1.268 2.292a5.164 5.164 0 0 0 3.326.003l-1.27-2.296h-.01zm1.888-1.293a.44.44 0 0 0-.27.036.44.44 0 0 0-.214.572l-.003.004 1.01 2.438a5.15 5.15 0 0 0 2.081-2.615l-2.6-.44-.004.005z' },
}

function BrandLogo({ name, size = 15 }: { name: string; size?: number }) {
  const logo = BRAND_LOGOS[name]
  if (!logo) return null
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <path d={logo.path} fill={logo.hex} />
    </svg>
  )
}

export async function generateStaticParams() {
  return [{ lang: 'th' }, { lang: 'en' }]
}

export default function Page({ params }: { params: { lang: Lang } }) {
  const isEN = params.lang === 'en'
  const prefix = `/${params.lang}`

  const badge    = isEN ? 'Engineering / Application Modernization'  : 'วิศวกรรม / Application Modernization'
  const title    = isEN ? 'Modernize Legacy Systems'  : 'ปรับปรุงระบบเดิม'
  const subtitle = isEN ? 'Without Stopping the Business'    : 'โดยไม่หยุดธุรกิจ'
  const heroDesc = isEN ? 'Evolve legacy systems into maintainable, API-first, cloud-ready platforms without stopping the business.'  : 'ปรับระบบเดิมให้เป็น Platform แบบ API-first, พร้อม Cloud และดูแลรักษาง่าย โดยไม่ต้องหยุดธุรกิจ'
  const whyTitle = isEN ? 'Why legacy systems quietly cap your growth'    : 'ทำไมระบบเดิมถึงเป็นเพดานการเติบโตแบบเงียบๆ'
  const whyDesc  = isEN ? 'Every feature that takes weeks instead of days, every outage from a fragile dependency, every engineer who avoids touching "that module" — that is legacy debt compounding against you.'  : 'ทุก Feature ที่ใช้เวลาเป็นสัปดาห์แทนที่จะเป็นวัน ทุก Outage จาก Dependency ที่เปราะบาง ทุก Engineer ที่ไม่กล้าแตะ "Module นั้น" คือหนี้ทางเทคนิคที่ทบต้นอยู่ตลอดเวลา'
  const ctaTitle = isEN ? 'Ready to modernize without the risk?'    : 'พร้อมปรับปรุงระบบโดยไม่เสี่ยงไหม?'
  const ctaDesc  = isEN ? 'Start with a free legacy system assessment. We will tell you honestly what to rewrite, wrap, or leave alone.'   : 'เริ่มด้วยการประเมินระบบเดิมฟรี เราจะบอกตรงๆ ว่าอะไรควร Rewrite, Wrap หรือปล่อยไว้'
  const overviewText = isEN
    ? "We modernize critical applications through assessment, strangler-fig migrations, refactoring, and re-architecture — deliberately avoiding prolonged, risky rewrites. That means decomposing monoliths, introducing APIs and event-driven patterns, containerizing workloads, and executing data migrations with cutover strategies that preserve revenue while your users stay productive throughout, not after a six-month blackout."
    : 'เราปรับปรุง Application สำคัญผ่าน Assessment, Strangler-fig Migration, Refactoring และ Re-architecture โดยตั้งใจหลีกเลี่ยงการ Rewrite แบบยาวนานที่มีความเสี่ยงสูง หมายถึงการแตก Monolith ออกเป็นส่วนย่อย นำ API และ Event-driven Pattern เข้ามาใช้ Containerize Workload และดำเนินการย้ายข้อมูลด้วยกลยุทธ์ Cutover ที่รักษารายได้ไว้ ในขณะที่ผู้ใช้ของคุณยังทำงานได้ต่อเนื่องตลอดกระบวนการ ไม่ใช่หลังจากหยุดระบบ 6 เดือน'

  const heroBullets = isEN ? [
      'Incremental modernization using the strangler-fig pattern',
      'Decompose monoliths into services behind an API gateway',
      'Containerize and move workloads onto Kubernetes',
      'Data migrations with parity verification, not guesswork',
      'The business keeps running throughout — no rewrite blackout',
    ] : [
      'ปรับปรุงแบบค่อยเป็นค่อยไปด้วย Strangler-fig Pattern',
      'แตก Monolith เป็น Service ย่อยผ่าน API Gateway',
      'Containerize และย้าย Workload ขึ้น Kubernetes',
      'ย้ายข้อมูลพร้อมตรวจสอบความถูกต้อง ไม่ใช่การเดา',
      'ธุรกิจดำเนินต่อได้ตลอดกระบวนการ ไม่มีการหยุดระบบยาวๆ'
    ]
  const whyPoints   = isEN ? [
      'Legacy systems with no tests make every change a gamble — modernization starts by locking in behavior first.',
      'The strangler pattern lets new services take over one capability at a time, with rollback always available.',
      'A full rewrite is rarely the right answer — it is usually slower, riskier, and more expensive than incremental change.',
      'API-first architecture unlocks new channels (mobile, partners, AI) without touching the legacy core.',
      'Total cost of ownership drops significantly once hosting, licensing, and maintenance move to modern patterns.',
    ] : [
      'ระบบเดิมที่ไม่มี Test ทำให้ทุกการเปลี่ยนแปลงเป็นการพนัน การ Modernize จึงเริ่มจากการล็อค Behavior ไว้ก่อน',
      'Strangler Pattern ให้ Service ใหม่เข้ามาแทนที่ทีละความสามารถ พร้อม Rollback ได้เสมอ',
      'การ Rewrite ทั้งหมดมักไม่ใช่คำตอบที่ถูกต้อง เพราะช้ากว่า เสี่ยงกว่า และแพงกว่าการเปลี่ยนแบบค่อยเป็นค่อยไป',
      'Architecture แบบ API-first เปิดช่องทางใหม่ (Mobile, Partner, AI) โดยไม่ต้องแตะ Core ระบบเดิม',
      'Total Cost of Ownership ลดลงอย่างมากเมื่อ Hosting, Licensing และ Maintenance ย้ายมาใช้ Pattern สมัยใหม่',
    ]
  const outcomes    = isEN ? [
      {stat: '5x', label: 'Faster Feature Delivery', desc: 'After decomposition and API layer'},
      {stat: '0', label: 'Business Downtime', desc: 'Across all modernization cutovers'},
      {stat: '45%', label: 'Lower TCO', desc: 'Hosting, licensing, and maintenance combined'},
      {stat: '100%', label: 'Data Parity Verified', desc: 'Before every cutover'}
    ] : [
      {stat: '5x', label: 'ส่ง Feature เร็วขึ้น', desc: 'หลังแตก Service และเพิ่ม API Layer'},
      {stat: '0', label: 'Downtime ทางธุรกิจ', desc: 'ตลอดการ Cutover ทุกครั้ง'},
      {stat: '45%', label: 'TCO ลดลง', desc: 'รวม Hosting, Licensing และ Maintenance'},
      {stat: '100%', label: 'ตรวจสอบ Data Parity', desc: 'ก่อนทุกการ Cutover'}
    ]
  const features    = isEN ? [
      {icon: 'ti-search', title: 'Legacy Assessment', desc: 'Technical and business analysis determining what to rewrite, wrap, replace, or retain.'},
      {icon: 'ti-adjustments', title: 'Incremental Refactoring', desc: 'In-place structural and testability improvements while maintaining continuous delivery.'},
      {icon: 'ti-cloud', title: 'Cloud-Native Patterns', desc: 'Containers, microservices, serverless, and event-driven designs where justified.'},
      {icon: 'ti-api', title: 'API Modernization', desc: 'Stable APIs and integration layers enabling new channels without full rewrites.'},
      {icon: 'ti-database-export', title: 'Data Migration', desc: 'Parity-verified data transitions with rollback safety at every cutover.'},
      {icon: 'ti-topology-star-3', title: 'Microservices Decomposition', desc: 'Breaking monoliths apart at natural seams, not arbitrary boundaries.'}
    ] : [
      {icon: 'ti-search', title: 'Legacy Assessment', desc: 'วิเคราะห์ทั้งด้านเทคนิคและธุรกิจ เพื่อตัดสินใจว่าอะไรควร Rewrite, Wrap, Replace หรือ Retain'},
      {icon: 'ti-adjustments', title: 'Incremental Refactoring', desc: 'ปรับปรุงโครงสร้างและ Testability ทีละส่วน พร้อมรักษา Continuous Delivery'},
      {icon: 'ti-cloud', title: 'Cloud-Native Patterns', desc: 'Container, Microservices, Serverless และ Event-driven Design เมื่อมีเหตุผลรองรับ'},
      {icon: 'ti-api', title: 'API Modernization', desc: 'สร้าง API และ Integration Layer ที่มั่นคง เปิดช่องทางใหม่โดยไม่ต้อง Rewrite ทั้งหมด'},
      {icon: 'ti-database-export', title: 'Data Migration', desc: 'ย้ายข้อมูลพร้อมตรวจสอบ Parity และ Rollback ได้ปลอดภัยทุกการ Cutover'},
      {icon: 'ti-topology-star-3', title: 'Microservices Decomposition', desc: 'แตก Monolith ตามรอยต่อที่เป็นธรรมชาติ ไม่ใช่การแบ่งแบบสุ่ม'}
    ]
  const steps       = isEN ? [
      {no: '01', title: 'Assess', desc: 'Examine code, data, and operational conditions.'},
      {no: '02', title: 'Strategy', desc: 'Define rewrite, refactor, or replace pathways.'},
      {no: '03', title: 'Modernize', desc: 'Execute incremental structural enhancements.'},
      {no: '04', title: 'Migrate', desc: 'Handle platform and data transitions.'},
      {no: '05', title: 'Verify', desc: 'Confirm parity, performance, no regressions.'},
      {no: '06', title: 'Optimize', desc: 'Improve cost efficiency, scalability, operability.'}
    ] : [
      {no: '01', title: 'Assess', desc: 'ตรวจสอบ Code, Data และสภาพการทำงานจริง'},
      {no: '02', title: 'Strategy', desc: 'กำหนดแนวทาง Rewrite, Refactor หรือ Replace'},
      {no: '03', title: 'Modernize', desc: 'ปรับปรุงโครงสร้างแบบค่อยเป็นค่อยไป'},
      {no: '04', title: 'Migrate', desc: 'จัดการการเปลี่ยนผ่าน Platform และ Data'},
      {no: '05', title: 'Verify', desc: 'ยืนยัน Parity, Performance และไม่มี Regression'},
      {no: '06', title: 'Optimize', desc: 'ปรับปรุงต้นทุน Scalability และการดูแลระบบ'}
    ]
  const caseStudies = isEN ? [
      {tag: 'Banking · Bangkok', title: 'Monolith to Microservices, Zero Downtime', desc: 'Strangler-fig migration of core banking over 8 months, no outage.', result: 'Feature delivery: 5x faster'},
      {tag: 'Retail · Nationwide', title: 'Legacy ERP Wrapped with Modern APIs', desc: 'New mobile and partner channels shipped without touching the core.', result: '3 new channels in 4 months'},
      {tag: 'Logistics · Bangkok', title: '15-Year-Old System Moved to Kubernetes', desc: 'Containerized and migrated with full data parity verification.', result: 'Infra cost down 45%'}
    ] : [
      {tag: 'ธนาคาร · กรุงเทพฯ', title: 'จาก Monolith สู่ Microservices แบบ Zero Downtime', desc: 'Migrate ระบบธนาคารหลักด้วย Strangler-fig ตลอด 8 เดือน ไม่มี Outage', result: 'ส่ง Feature เร็วขึ้น 5 เท่า'},
      {tag: 'Retail · ทั่วประเทศ', title: 'Wrap ERP เดิมด้วย API สมัยใหม่', desc: 'เปิดช่องทาง Mobile และ Partner ใหม่โดยไม่ต้องแตะ Core เดิม', result: 'เปิด 3 ช่องทางใหม่ใน 4 เดือน'},
      {tag: 'Logistics · กรุงเทพฯ', title: 'ย้ายระบบอายุ 15 ปีขึ้น Kubernetes', desc: 'Containerize และ Migrate พร้อมตรวจสอบ Data Parity เต็มรูปแบบ', result: 'ต้นทุน Infra ลดลง 45%'}
    ]
  const faqs        = isEN ? [
      {q: 'How do you modernize without stopping the business?', a: 'Incrementally, using the strangler pattern — new services take over one capability at a time while the legacy system keeps running.'},
      {q: 'What does the legacy system become?', a: 'Maintainable, API-first, cloud-ready platforms: typically services in containers on Kubernetes, event-driven where it helps.'},
      {q: 'Our system has no documentation. Can you still work with it?', a: 'Yes. We start by mapping what the system actually does from its code, data, and traffic, and lock in behavior with tests first.'},
      {q: 'When is a full rewrite the right choice?', a: 'Rarely, and only when the cost of incremental change genuinely exceeds a rebuild. We tell you honestly after an assessment.'}
    ] : [
      {q: 'ปรับปรุงระบบโดยไม่หยุดธุรกิจได้อย่างไร?', a: 'ปรับแบบค่อยเป็นค่อยไปด้วย Strangler Pattern — Service ใหม่เข้ามาแทนที่ทีละความสามารถ ในขณะที่ระบบเดิมยังทำงานต่อไป'},
      {q: 'ระบบเดิมจะกลายเป็นอะไร?', a: 'Platform ที่ดูแลง่าย, API-first และพร้อม Cloud โดยทั่วไปคือ Service บน Container ใน Kubernetes และ Event-driven เมื่อเหมาะสม'},
      {q: 'ระบบเราไม่มีเอกสารเลย ทำได้ไหม?', a: 'ได้ครับ เป็นเรื่องปกติ เราเริ่มจากทำแผนที่สิ่งที่ระบบทำจริงจาก Code, Data และ Traffic แล้วล็อค Behavior ด้วย Test ก่อน'},
      {q: 'เมื่อไหร่ควร Rewrite ทั้งหมด?', a: 'น้อยครั้งมาก และเฉพาะเมื่อต้นทุนของการเปลี่ยนแบบค่อยเป็นค่อยไปสูงกว่าการสร้างใหม่จริงๆ เราจะบอกตรงๆ หลัง Assessment'}
    ]
  const related     = isEN ? [
      {label: 'Cloud Services & Migration', href: '/services/cloud-services-migration'},
      {label: 'Quality Assurance & Testing', href: '/services/quality-assurance-testing'},
      {label: 'Digital Transformation', href: '/services/digital-transformation'},
      {label: 'Cybersecurity', href: '/services/cybersecurity'}
    ] : [
      {label: 'Cloud Services & Migration', href: '/services/cloud-services-migration'},
      {label: 'Quality Assurance & Testing', href: '/services/quality-assurance-testing'},
      {label: 'Digital Transformation', href: '/services/digital-transformation'},
      {label: 'ความปลอดภัยไซเบอร์', href: '/services/cybersecurity'}
    ]

  const modLines = [
    { n: 1, jsx: <><span style={{ color: '#82AAFF' }}>{'>'}</span>&nbsp;<span style={{ color: '#C792EA' }}>strangler --route orders-v2</span></> },
    { n: 2, jsx: <><span style={{ color: 'var(--lime)' }}>✓</span>&nbsp;{isEN ? '12% traffic on new service' : 'Traffic 12% เข้า Service ใหม่'}</> },
    { n: 3, jsx: <>&nbsp;</> },
    { n: 4, jsx: <><span style={{ color: '#82AAFF' }}>{'>'}</span>&nbsp;<span style={{ color: '#C792EA' }}>diff --parity legacy vs new</span></> },
    { n: 5, jsx: <><span style={{ color: 'var(--lime)' }}>✓</span>&nbsp;{isEN ? '0 discrepancies found' : 'ไม่พบความแตกต่าง'}</> },
    { n: 6, jsx: <>&nbsp;</> },
    { n: 7, jsx: <><span style={{ color: '#82AAFF' }}>{'>'}</span>&nbsp;<span style={{ color: '#C792EA' }}>{isEN ? 'cutover --module orders' : 'cutover --module orders'}</span></> },
    { n: 8, jsx: <><span style={{ color: 'var(--lime)' }}>✓</span>&nbsp;{isEN ? 'Legacy module retired safely' : 'ปิด Module เดิมได้ปลอดภัย'}</> },
  ]

  const heroSlot = (
    <div className="relative pb-10 pr-6">
      <div className="rounded-2xl overflow-hidden" style={{ background: '#141329', border: '1px solid rgba(123,110,246,0.35)' }}>
        <div className="flex items-center gap-2 px-5 py-3.5" style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
          <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#F87171' }} />
          <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#FBBF24' }} />
          <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#34D399' }} />
          <span className="ml-3 text-xs" style={{ color: 'rgba(255,255,255,0.85)', fontFamily: 'monospace' }}>migrate.log</span>
        </div>
        <div className="px-6 py-6" style={{ fontFamily: 'monospace', fontSize: '0.9rem', lineHeight: 1.9, color: 'rgba(255,255,255,0.85)' }}>
          {modLines.map((l) => (
            <div key={l.n} className="flex gap-4">
              <span style={{ color: 'rgba(255,255,255,0.25)', width: 16, textAlign: 'right' }}>{l.n}</span>
              <span>{l.jsx}</span>
            </div>
          ))}
        </div>
      </div>

      <div
        className="absolute -bottom-2 -right-2 w-[220px] rounded-2xl p-4"
        style={{ background: '#1B1A33', border: '1px solid rgba(255,255,255,0.1)', boxShadow: '0 20px 50px -10px rgba(0,0,0,0.6)' }}
      >
        <div className="flex items-center justify-between mb-3">
          <span className="text-[10px] tracking-widest uppercase" style={{ color: 'rgba(255,255,255,0.85)' }}>{isEN ? 'Migration Progress' : 'ความคืบหน้า Migrate'}</span>
          <span className="w-2 h-2 rounded-full" style={{ background: 'var(--lime)' }} />
        </div>
        <div className="flex items-center gap-3 mb-3">
          <div className="w-12 h-12 rounded-lg flex items-center justify-center shrink-0" style={{ background: 'linear-gradient(135deg,var(--purple),var(--purple-light))' }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M4 4h7v7H4zM13 4h7v7h-7zM4 13h7v7H4zM13 13h7v7h-7z" stroke="#fff" strokeWidth="1.6" strokeLinejoin="round" /></svg>
          </div>
          <div className="flex-1 space-y-1.5">
            <div className="h-1.5 rounded-full" style={{ background: 'rgba(255,255,255,0.15)', width: '88%' }} />
            <div className="h-1.5 rounded-full" style={{ background: 'rgba(255,255,255,0.15)', width: '62%' }} />
            <div className="h-3.5 rounded-full" style={{ background: 'linear-gradient(90deg,var(--purple),var(--lime))', width: '75%' }} />
          </div>
        </div>
        <div className="flex items-center gap-1.5 text-xs" style={{ color: 'var(--lime)' }}>
          <i className="ti ti-circle-check" style={{ fontSize: 13 }} aria-hidden="true" />
          {isEN ? 'Zero downtime maintained' : 'ไม่มี Downtime ตลอดโปรเจกต์'}
        </div>
      </div>
    </div>
  )

  const capabilities = isEN ? [
    { icon: 'ti-search', title: 'Legacy Assessment', desc: 'Technical and business analysis determining what to rewrite, wrap, replace, or retain.' },
    { icon: 'ti-adjustments', title: 'Incremental Refactoring', desc: 'In-place structural and testability improvements maintaining continuous delivery.' },
    { icon: 'ti-cloud', title: 'Cloud-Native Patterns', desc: 'Containers, microservices, serverless, and event-driven designs where justified.' },
    { icon: 'ti-api', title: 'API Modernization', desc: 'Stable APIs and integration layers enabling new channels without full rewrites.' },
  ] : [
    { icon: 'ti-search', title: 'Legacy Assessment', desc: 'วิเคราะห์ด้านเทคนิคและธุรกิจ เพื่อตัดสินใจว่าอะไรควร Rewrite, Wrap, Replace หรือ Retain' },
    { icon: 'ti-adjustments', title: 'Incremental Refactoring', desc: 'ปรับปรุงโครงสร้างและ Testability ทีละส่วน พร้อมรักษา Continuous Delivery' },
    { icon: 'ti-cloud', title: 'Cloud-Native Patterns', desc: 'Container, Microservices, Serverless และ Event-driven Design เมื่อมีเหตุผลรองรับ' },
    { icon: 'ti-api', title: 'API Modernization', desc: 'สร้าง API และ Integration Layer ที่มั่นคง เปิดช่องทางใหม่โดยไม่ต้อง Rewrite ทั้งหมด' },
  ]

  const techStack = [
    { label: 'Microservices', icon: 'ti-topology-star-3' },
    { label: 'Containers', icon: 'ti-box' },
    { label: 'Kubernetes', svg: 'kubernetes' },
    { label: 'API Gateway', icon: 'ti-api' },
    { label: 'Event-Driven Architecture', icon: 'ti-bolt' },
    { label: 'Serverless', icon: 'ti-cloud-bolt' },
    { label: 'CQRS', icon: 'ti-arrows-split' },
  ] as { label: string; icon?: string; svg?: string }[]

  const approachSteps = isEN ? [
    { no: '01', title: 'Assess', desc: 'Code, data, operational conditions' },
    { no: '02', title: 'Strategy', desc: 'Rewrite, refactor, or replace' },
    { no: '03', title: 'Modernize', desc: 'Incremental structural changes' },
    { no: '04', title: 'Migrate', desc: 'Platform and data transitions' },
    { no: '05', title: 'Verify', desc: 'Parity, performance, no regressions' },
    { no: '06', title: 'Optimize', desc: 'Cost, scalability, operability' },
  ] : [
    { no: '01', title: 'Assess', desc: 'Code, Data และสภาพการทำงานจริง' },
    { no: '02', title: 'Strategy', desc: 'Rewrite, Refactor หรือ Replace' },
    { no: '03', title: 'Modernize', desc: 'ปรับปรุงโครงสร้างแบบค่อยเป็นค่อยไป' },
    { no: '04', title: 'Migrate', desc: 'เปลี่ยนผ่าน Platform และ Data' },
    { no: '05', title: 'Verify', desc: 'Parity, Performance และไม่มี Regression' },
    { no: '06', title: 'Optimize', desc: 'ต้นทุน Scalability และการดูแลระบบ' },
  ]

  const darkFaqs = isEN ? [
    { q: 'How do you modernize legacy applications without stopping the business?', a: 'Incrementally. We use the strangler pattern: new services take over one capability at a time behind an API gateway while the legacy system keeps running, so the business never stops for a rewrite. Traffic shifts gradually as each new piece proves itself in production.' },
    { q: 'What does Haliviq modernize legacy systems into?', a: 'Maintainable, API-first, cloud-ready platforms: typically services in containers on Kubernetes, event-driven where it helps, and serverless where it is simpler. The target architecture follows your team and workloads, not fashion — we don\'t default to microservices just because it sounds modern.' },
    { q: 'Our legacy system has no documentation. Can you still work with it?', a: 'Yes. That is normal, not a blocker. We start by mapping what the system actually does from its code, data, and production traffic, and we lock in current behavior with tests before changing anything — so we know immediately if a change breaks something.' },
    { q: 'When is a full rewrite the right choice instead of incremental modernization?', a: 'Rarely, and only when the cost of incremental change genuinely exceeds a rebuild — usually when the underlying technology is fully unsupported or the domain model itself is fundamentally wrong. We will tell you honestly which side of that line your system is on after an assessment, not sell you a rewrite by default.' },
    { q: 'How long does a typical modernization project take?', a: 'A single-module strangler migration usually takes 2-4 months from assessment to full cutover. A full monolith decomposition for a larger system is phased over 6-18 months, with each phase delivering working software and measurable progress rather than one long project with nothing to show until the end.' },
    { q: 'How much does application modernization cost?', a: 'Cost scales with the size and complexity of the legacy system and how much of it needs to change. A focused assessment typically starts in the low five figures (THB); a phased modernization program is quoted per phase after that assessment, so you can validate value before committing to the next stage.' },
    { q: 'What happens to our team during the modernization process?', a: 'We work alongside your engineers rather than in a silo, pairing on the parts of the system they know best and transferring knowledge as we go. By the time we hand over, your team understands the new architecture because they helped build it, not because they read a document afterward.' },
    { q: 'Who owns the code and infrastructure after the project?', a: 'You do, entirely. All new services, infrastructure code, and documentation live in your own repositories and cloud accounts from day one. We work inside your environment, so there is no separate system to migrate away from us at handover.' },
  ] : [
    { q: 'ปรับปรุงระบบเดิมโดยไม่หยุดธุรกิจได้อย่างไร?', a: 'ปรับแบบค่อยเป็นค่อยไปครับ เราใช้ Strangler Pattern โดย Service ใหม่จะเข้ามาแทนที่ทีละความสามารถผ่าน API Gateway ในขณะที่ระบบเดิมยังทำงานต่อไป ธุรกิจจึงไม่ต้องหยุดเพื่อรอ Rewrite Traffic จะค่อยๆ ย้ายไปเมื่อแต่ละส่วนใหม่พิสูจน์ตัวเองบน Production แล้ว' },
    { q: 'Haliviq ปรับระบบเดิมให้กลายเป็นอะไร?', a: 'Platform ที่ดูแลรักษาง่าย, API-first และพร้อม Cloud โดยทั่วไปคือ Service บน Container ใน Kubernetes, Event-driven เมื่อช่วยได้จริง และ Serverless เมื่อง่ายกว่า Architecture เป้าหมายจะตามทีมและ Workload ของคุณ ไม่ใช่ตามกระแส เราไม่ Default ไปที่ Microservices เพียงเพราะฟังดูทันสมัย' },
    { q: 'ระบบเดิมของเราไม่มีเอกสารเลย ยังทำงานด้วยได้ไหม?', a: 'ได้ครับ เป็นเรื่องปกติ ไม่ใช่อุปสรรค เราเริ่มจากทำแผนที่สิ่งที่ระบบทำจริงจาก Code, Data และ Traffic บน Production แล้วล็อค Behavior ปัจจุบันด้วย Test ก่อนเปลี่ยนแปลงอะไร เพื่อให้รู้ทันทีถ้าการเปลี่ยนแปลงทำให้อะไรพัง' },
    { q: 'เมื่อไหร่ควรเลือก Rewrite ทั้งหมดแทนการปรับปรุงแบบค่อยเป็นค่อยไป?', a: 'น้อยครั้งมาก และเฉพาะเมื่อต้นทุนของการเปลี่ยนแบบค่อยเป็นค่อยไปสูงกว่าการสร้างใหม่จริงๆ มักเกิดขึ้นเมื่อเทคโนโลยีเดิมไม่มีใครรองรับแล้ว หรือ Domain Model เองผิดตั้งแต่ต้น เราจะบอกตรงๆ ว่าระบบคุณอยู่ฝั่งไหนหลัง Assessment ไม่ใช่ขาย Rewrite เป็น Default' },
    { q: 'โปรเจกต์ Modernization ทั่วไปใช้เวลานานแค่ไหน?', a: 'Migrate หนึ่ง Module ด้วย Strangler Pattern มักใช้เวลา 2-4 เดือนตั้งแต่ Assessment ถึง Cutover เต็มรูปแบบ ส่วนการแตก Monolith ทั้งระบบสำหรับระบบขนาดใหญ่ แบ่งเป็น Phase ตลอด 6-18 เดือน แต่ละ Phase ส่งมอบ Software ที่ใช้งานได้จริงและความคืบหน้าที่วัดผลได้ ไม่ใช่โปรเจกต์ยาวๆ ที่ไม่มีอะไรให้เห็นจนจบ' },
    { q: 'Application Modernization มีค่าใช้จ่ายเท่าไหร่?', a: 'ต้นทุนขึ้นอยู่กับขนาดและความซับซ้อนของระบบเดิม และปริมาณที่ต้องเปลี่ยนแปลง การ Assessment แบบเจาะจงมักเริ่มต้นที่หลักหมื่นปลายๆ (บาท) ส่วนโปรแกรม Modernization แบบแบ่ง Phase จะเสนอราคาต่อ Phase หลัง Assessment นั้น เพื่อให้คุณ Validate คุณค่าก่อนตัดสินใจ Phase ถัดไป' },
    { q: 'ทีมของเราจะเป็นอย่างไรระหว่างกระบวนการ Modernization?', a: 'เราทำงานเคียงข้างทีม Engineer ของคุณ ไม่ใช่แยกทำเงียบๆ โดย Pair กับส่วนของระบบที่พวกเขาเข้าใจดีที่สุด และ Transfer Knowledge ไปตลอดทาง เมื่อถึงตอนส่งมอบ ทีมคุณจะเข้าใจ Architecture ใหม่เพราะพวกเขาช่วยสร้างมันขึ้นมา ไม่ใช่เพราะอ่านเอกสารทีหลัง' },
    { q: 'Code และ Infrastructure เป็นของใครหลังจบโปรเจกต์?', a: 'เป็นของคุณทั้งหมดครับ Service ใหม่, Infrastructure Code และเอกสารทั้งหมดอยู่ใน Repository และ Cloud Account ของคุณเองตั้งแต่วันแรก เราทำงานในสภาพแวดล้อมของคุณ จึงไม่มีระบบแยกที่ต้อง Migrate ออกจากเราตอนส่งมอบ' },
  ]

  const postHeroSlot = (
    <>
    <section className="relative overflow-hidden" style={{ background: '#08070F' }}>
      <div className="relative max-w-7xl mx-auto px-4 lg:px-10 pb-24 lg:pb-32">
        <div className="rounded-2xl p-10 lg:p-16 mb-16 lg:mb-24" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}>
          <div className="w-12 h-[3px] rounded-full mb-8" style={{ background: 'linear-gradient(90deg, var(--purple-light), var(--lime))' }} />
          <p className="leading-relaxed" style={{ color: 'rgba(255,255,255,0.85)', fontSize: 'clamp(1.05rem,1.6vw,1.35rem)', fontWeight: 400, maxWidth: 900 }}>
            {overviewText}
          </p>
        </div>

        <p className="mb-5 text-xs tracking-widest uppercase" style={{ color: 'var(--lime)', fontWeight: 600 }}>
          {isEN ? 'Capabilities' : 'ความสามารถ'}
        </p>
        <h2 className="t-display mb-4" style={{ color: '#fff', fontSize: 'clamp(2.25rem,4.5vw,3.5rem)' }}>
          {isEN ? 'Key Capabilities' : 'ความสามารถหลัก'}
        </h2>
        <p className="mb-12" style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1.2rem', fontWeight: 400 }}>
          {isEN ? 'Concrete capabilities we bring to this engagement — not buzzwords.' : 'ความสามารถที่จับต้องได้จริงที่เรานำมาใช้ในทุกโปรเจกต์ ไม่ใช่แค่คำสวยหรู'}
        </p>

        <div className="grid sm:grid-cols-2 gap-5">
          {capabilities.map((c) => (
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

        <div className="mt-16 lg:mt-24">
          <p className="mb-5 text-xs tracking-widest uppercase" style={{ color: 'var(--lime)', fontWeight: 600 }}>
            {isEN ? 'Patterns We Use' : 'แนวทางที่เราใช้'}
          </p>
          <h2 className="t-display mb-4" style={{ color: '#fff', fontSize: 'clamp(2.25rem,4.5vw,3.5rem)' }}>
            {isEN ? 'Technologies We Use' : 'เทคโนโลยีที่เราใช้งาน'}
          </h2>
          <p className="mb-12" style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1.2rem', fontWeight: 400, maxWidth: 640 }}>
            {isEN
              ? 'Proven architecture patterns we apply where they fit — chosen for the problem, not the trend cycle.'
              : 'Architecture Pattern ที่พิสูจน์แล้ว เลือกใช้ตามโจทย์งานจริง ไม่ใช่ตามกระแส'}
          </p>

          <div className="flex flex-wrap gap-3">
            {techStack.map((t) => (
              <span
                key={t.label}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-base"
                style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.85)', fontWeight: 400 }}
              >
                {t.label}
                {t.svg ? (
                  <BrandLogo name={t.svg} />
                ) : (
                  <i className={`ti ${t.icon}`} style={{ fontSize: 15, color: 'var(--purple-light)' }} aria-hidden="true" />
                )}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-16 lg:mt-24">
          <p className="mb-5 text-xs tracking-widest uppercase" style={{ color: 'var(--lime)', fontWeight: 600 }}>
            {isEN ? 'How We Work' : 'วิธีการทำงาน'}
          </p>
          <h2 className="t-display mb-4" style={{ color: '#fff', fontSize: 'clamp(2.25rem,4.5vw,3.5rem)' }}>
            {isEN ? 'Our Approach' : 'แนวทางการทำงานของเรา'}
          </h2>
          <p className="mb-16" style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1.2rem', fontWeight: 400, maxWidth: 640 }}>
            {isEN
              ? 'A clear path from legacy to modern — adjusted per system, never one-size-fits-all.'
              : 'เส้นทางที่ชัดเจนจากระบบเดิมสู่ระบบสมัยใหม่ ปรับตามแต่ละระบบ ไม่ใช่สูตรสำเร็จตายตัว'}
          </p>

          <div className="relative">
            <div
              className="hidden lg:block absolute left-0 right-0"
              style={{ top: 32, height: 1, background: 'linear-gradient(90deg, rgba(123,110,246,0.5), rgba(83,195,215,0.5))' }}
            />
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-x-6 gap-y-14">
              {approachSteps.map((s) => (
                <div key={s.no} className="relative">
                  <div
                    className="relative z-10 w-16 h-16 rounded-full flex items-center justify-center mb-6 font-mono"
                    style={{
                      background: 'linear-gradient(135deg, var(--purple) 0%, var(--purple-dark) 100%)',
                      boxShadow: '0 8px 24px -8px rgba(123,110,246,0.6)',
                      color: '#fff',
                      fontSize: '1.05rem',
                      fontWeight: 600,
                    }}
                  >
                    {s.no}
                  </div>
                  <h3 className="mb-2" style={{ color: '#fff', fontWeight: 600, fontSize: '1.2rem' }}>{s.title}</h3>
                  <p className="leading-relaxed" style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1rem', fontWeight: 400 }}>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 lg:mt-24">
          <h2 className="t-display mb-4" style={{ color: '#fff', fontSize: 'clamp(2.25rem,4.5vw,3.5rem)' }}>
            {isEN ? 'Frequently Asked Questions' : 'คำถามที่พบบ่อย'}
          </h2>
          <p className="mb-4" style={{ color: 'var(--lime)', fontSize: '1.2rem', fontWeight: 600 }}>
            {isEN ? 'Straight answers about how we modernize systems.' : 'คำตอบตรงไปตรงมาเกี่ยวกับวิธีที่เราปรับปรุงระบบ'}
          </p>

          <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}>
            {darkFaqs.map((f, i) => (
              <details key={f.q} className="group marker:hidden [&::-webkit-details-marker]:hidden" style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }} open={i === 0}>
                <summary className="flex items-center justify-between gap-6 cursor-pointer list-none py-6">
                  <span style={{ color: '#fff', fontSize: 'clamp(1.15rem,1.8vw,1.4rem)', fontWeight: 500 }}>{f.q}</span>
                  <i className="ti ti-chevron-down shrink-0 transition-transform duration-300 group-open:rotate-180" style={{ fontSize: 20, color: 'rgba(255,255,255,0.85)' }} aria-hidden="true" />
                </summary>
                <p className="pb-6 leading-relaxed" style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1.15rem', fontWeight: 400, maxWidth: 900 }}>
                  {f.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>

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
        <h2 className="t-display mb-5 leading-tight" style={{ color: '#fff', fontSize: 'clamp(2.5rem,5.5vw,4.2rem)' }}>
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
            {isEN ? 'Start a Conversation' : 'เริ่มบทสนทนา'}
            <i className="ti ti-arrow-right" style={{ fontSize: 17 }} aria-hidden="true" />
          </Link>
          <a href="mailto:wu@haliviq.com" style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1.1rem', fontWeight: 400 }}>
            wu@haliviq.com
          </a>
        </div>
      </div>
    </section>
    </>
  )

  return (
    <ServiceLayout
      lang={params.lang as Lang}
      badge={badge} title={title} subtitle={subtitle}
      heroDesc={heroDesc} heroBullets={heroBullets}
      heroDark heroSlot={heroSlot} heroShowSecondaryCta={false}
      heroCtaLabel={isEN ? 'Get Started' : 'เริ่มต้นเลย'}
      whyTitle={whyTitle} whyDesc={whyDesc} whyPoints={whyPoints}
      outcomes={outcomes} ctaTitle={ctaTitle} ctaDesc={ctaDesc}
      features={features} steps={steps} caseStudies={caseStudies}
      faqs={faqs} related={related}
      color="var(--purple)" bg="var(--purple-bg)"
      whyImg="/images/services/application-modernization/why1.jpg"
      whyImg2="/images/services/application-modernization/why2.jpg"
      featureImg="/images/services/application-modernization/feature.jpg"
      processImg="/images/services/application-modernization/process.jpg"
    />
  )
}
