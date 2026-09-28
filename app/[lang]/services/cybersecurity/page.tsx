import Link from 'next/link'
import ServiceLayout from '@/components/service/ServiceLayout'
import { type Lang } from '@/lib/i18n'

const BRAND_LOGOS: Record<string, { hex: string; path: string }> = {
  vault: { hex: '#FFEC6E', path: 'M0 0l11.955 24L24 0zm13.366 4.827h1.393v1.38h-1.393zm-2.77 5.569H9.22V8.993h1.389zm0-2.087H9.22V6.906h1.389zm0-2.086H9.22V4.819h1.389zm2.087 6.263h-1.377V11.08h1.388zm0-2.09h-1.377V8.993h1.388zm0-2.087h-1.377V6.906h1.388zm0-2.086h-1.377V4.819h1.388zm.683.683h1.393v1.389h-1.393zm0 3.475V8.993h1.389v1.388Z' },
  snyk: { hex: '#4C4A73', path: 'M17.097 13.344c.143-.37.06-2.117-.222-4.675l-.004-.04.904-2.431v-.05c0-1.06-1.374-3.9-2.186-5.41L15.192 0l-.84 5.854-.503.829-.125-.042c-.351-.118-1.042-.316-1.728-.316-.65 0-1.294.171-1.72.315l-.125.042-.504-.827L8.807 0l-.396.737c-.812 1.51-2.186 4.35-2.186 5.411v.05l.904 2.432-.004.039c-.283 2.558-.366 4.305-.222 4.674.13.332.642 1.041 1.072 1.605l-.619 5.724.617.442.576-5.329c.012.414.064 1.277.275 2.068l-.389 3.592L12 24l4.279-3.067.375-.268-.62-5.73c.428-.561.934-1.262 1.063-1.591zM15.59 2.298c.694 1.408 1.421 3.08 1.471 3.779l-.388 1.045c-.935-1.31-1.228-3.441-1.253-3.636zm-1.124 7.8c.84 0 .212.712.138.792h-1.587c.144-.18.69-.792 1.45-.792zm-.452 1.468a.178.178 0 0 1-.175.153.292.292 0 1 0 .441-.31h.504v.024a.662.662 0 0 1-1.325 0v-.025h.511l-.008.007c.039.038.06.093.052.15zM12.39 19.29c.097.064.2.115.306.156-.168.19-.399.287-.697.287-.299 0-.53-.097-.697-.288.107-.04.21-.092.306-.156a.573.573 0 0 0 .391.114c.103 0 .255 0 .391-.113zm-2.62-7.724a.178.178 0 0 1-.174.153.292.292 0 1 0 .441-.31h.504v.024a.662.662 0 0 1-1.326 0v-.025h.511l-.008.007c.039.038.06.093.052.15zm-.374-.676c-.074-.08-.702-.792.138-.792.759 0 1.305.612 1.45.792zM6.948 6.077c.05-.699.778-2.37 1.471-3.78l.185 1.29c-.07.48-.393 2.37-1.257 3.56zM9.473 18.09c-.373-1.02-.377-2.446-.377-2.507v-.097l-.06-.076c-.551-.683-1.477-1.9-1.616-2.257l-.005-.014c-.124-.43.1-2.997.268-4.513l.008-.066-.187-.502.07-.075c.476-.497.88-1.213 1.203-2.126L9 5.223l.118.82.807 1.326.22-.094c.009-.004.934-.4 1.851-.4H12v.44h-.004c-.812 0-1.669.36-1.677.363l-.571.246-.797-1.308c-.27.62-.585 1.137-.94 1.543l.129.347-.019.169c-.24 2.156-.348 4.044-.285 4.332.086.2.523.812 1 1.437l.748-.218 1.17-1.334.184 3.458c-.011.015-.28.393-.28.609 0 .235.344.541.685.786.005-.01.007-.02.013-.03.12-.212.275-.251.346-.087.04.092.028.369.028.369l.005.002v.328c-.013.027-.302.674-1.014.674-.275 0-.948-.089-1.248-.911zm2.536 2.409c-.527 0-1.297-.257-1.374-.952.029.001.057.003.086.003.06 0 .119-.003.177-.01.235.455.665.6 1.102.6.436 0 .865-.146 1.1-.6.059.007.119.01.18.01.029 0 .057-.002.085-.003-.076.695-.835.952-1.356.952zm2.956-5.09l-.061.077v.097c0 .06-.004 1.487-.377 2.507-.3.822-.973.91-1.248.91-.71 0-1.002-.658-1.014-.686V18l.005-.004s-.012-.276.028-.368c.07-.164.226-.126.346.088.006.009.009.02.013.03.34-.246.686-.552.686-.787 0-.216-.269-.593-.28-.61l.183-3.457 1.17 1.334 1.2.35c-.23.304-.463.6-.651.834zm-8.472-1.907c-.22-.563-.022-2.916.187-4.817l-.895-2.409v-.128c0-.312.095-.734.246-1.207-1.177.253-1.808.49-1.808.49v12.996l2.67 1.914.577-5.332c-.538-.718-.868-1.226-.977-1.507zm3.853-7.346c.446-.136 1.042-.27 1.65-.27.61 0 1.21.135 1.658.27l.276-.453.184-1.288s-1.288-.068-2.103-.068c-.759 0-1.467.026-2.125.07l.184 1.286zm7.623-1.217c.151.474.247.896.247 1.21v.127l-.895 2.409c.208 1.901.406 4.253.186 4.818-.109.279-.435.782-.968 1.493l.578 5.337 2.66-1.906V5.432s-.632-.24-1.808-.493Z' },
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

  const badge    = isEN ? 'Security / Cybersecurity'  : 'ความปลอดภัย / Cybersecurity'
  const title    = isEN ? 'Secure by Design'  : 'ปลอดภัยตั้งแต่การออกแบบ'
  const subtitle = isEN ? 'Not by Accident'    : 'ไม่ใช่เรื่องบังเอิญ'
  const heroDesc = isEN ? 'Security assessments, secure-by-design engineering, and compliance support for modern product teams.'  : 'Security Assessment, วิศวกรรมแบบ Secure-by-design และการสนับสนุน Compliance สำหรับทีม Product ยุคใหม่'
  const whyTitle = isEN ? 'Why a breach costs far more than prevention'    : 'ทำไมเหตุการณ์ Breach ถึงแพงกว่าการป้องกันมาก'
  const whyDesc  = isEN ? 'A security incident costs downtime, incident response, regulatory exposure, and customer trust that takes years to rebuild — all avoidable with controls built in from the start.'  : 'เหตุการณ์ด้าน Security หนึ่งครั้ง ต้องแลกด้วย Downtime, การรับมือเหตุการณ์, ความเสี่ยงด้านกฎหมาย และความเชื่อมั่นลูกค้าที่ต้องใช้เวลาหลายปีกว่าจะฟื้น ทั้งหมดนี้ป้องกันได้ถ้าวางระบบ Control ไว้ตั้งแต่ต้น'
  const ctaTitle = isEN ? 'Ready to find out where you stand?'    : 'พร้อมรู้สถานะความปลอดภัยของคุณไหม?'
  const ctaDesc  = isEN ? 'Start with a free security posture review. We will show you the real risks, not a generic checklist.'   : 'เริ่มด้วยการตรวจสอบ Security Posture ฟรี เราจะชี้ให้เห็นความเสี่ยงจริง ไม่ใช่ Checklist ทั่วไป'
  const overviewText = isEN
    ? 'We help organizations find and fix security vulnerabilities before attackers do, while embedding protective measures directly into how software gets built. That covers security architecture reviews, penetration testing, vulnerability management, identity and access design, and hands-on support for compliance frameworks including SOC 2, ISO 27001, and GDPR — treated as engineering work, not a once-a-year audit exercise.'
    : 'เราช่วยองค์กรค้นหาและแก้ไขช่องโหว่ด้าน Security ก่อนที่ผู้ไม่หวังดีจะเจอ พร้อมฝังมาตรการป้องกันเข้าไปในกระบวนการพัฒนา Software โดยตรง ครอบคลุมตั้งแต่ Security Architecture Review, Penetration Testing, Vulnerability Management, การออกแบบ Identity และ Access ไปจนถึงการสนับสนุน Compliance Framework อย่าง SOC 2, ISO 27001 และ GDPR โดยมองเป็นงานวิศวกรรม ไม่ใช่การ Audit ปีละครั้ง'

  const heroBullets = isEN ? [
      'Architecture reviews and risk assessments around real threats',
      'Hands-on penetration testing with clear remediation guidance',
      'Practical SOC 2, ISO 27001, and GDPR compliance support',
      'Incident response playbooks and readiness practices',
      'Security built into engineering from the first sprint',
    ] : [
      'Architecture Review และ Risk Assessment ตาม Threat จริง',
      'Penetration Testing แบบลงมือทำจริง พร้อมแนวทางแก้ไขชัดเจน',
      'สนับสนุน Compliance SOC 2, ISO 27001 และ GDPR แบบปฏิบัติได้จริง',
      'วาง Incident Response Playbook และความพร้อมรับมือ',
      'ฝัง Security เข้าไปในงาน Engineering ตั้งแต่ Sprint แรก',
    ]
  const whyPoints   = isEN ? [
      'The average data breach costs organizations millions once downtime, legal, and reputation damage are counted.',
      'Zero-trust and least-privilege access dramatically limit blast radius when something does go wrong.',
      'Compliance frameworks like SOC 2 and ISO 27001 are increasingly required to win enterprise deals.',
      'Dependency scanning catches the majority of exploited vulnerabilities before they ship.',
      'Incident readiness turns a potential crisis into a contained, well-handled event.',
    ] : [
      'ค่าเสียหายเฉลี่ยจาก Data Breach สูงถึงหลักล้านเมื่อรวม Downtime, กฎหมาย และความเสียหายด้านชื่อเสียง',
      'Zero-trust และ Least-privilege Access ช่วยจำกัดความเสียหายอย่างมากเมื่อเกิดปัญหา',
      'Compliance Framework อย่าง SOC 2 และ ISO 27001 จำเป็นมากขึ้นในการปิดดีล Enterprise',
      'Dependency Scanning จับช่องโหว่ส่วนใหญ่ที่ถูกใช้โจมตีจริงได้ก่อนปล่อยใช้งาน',
      'ความพร้อมรับมือเหตุการณ์ เปลี่ยนวิกฤตที่อาจเกิดขึ้น ให้กลายเป็นเหตุการณ์ที่ควบคุมได้',
    ]
  const outcomes    = isEN ? [
      {stat: '0', label: 'Critical Incidents', desc: 'Across audited client systems'},
      {stat: '100%', label: 'SOC 2 Pass Rate', desc: 'On first audit attempt'},
      {stat: '<24h', label: 'Incident Response', desc: 'Time to containment'},
      {stat: '40+', label: 'Vulnerabilities Fixed', desc: 'Average per assessment'}
    ] : [
      {stat: '0', label: 'เหตุการณ์ Critical', desc: 'ในระบบลูกค้าที่ตรวจสอบ'},
      {stat: '100%', label: 'อัตราผ่าน SOC 2', desc: 'ตั้งแต่การ Audit ครั้งแรก'},
      {stat: '<24h', label: 'Incident Response', desc: 'เวลาในการควบคุมสถานการณ์'},
      {stat: '40+', label: 'ช่องโหว่ที่แก้ไข', desc: 'เฉลี่ยต่อการ Assessment'}
    ]
  const features    = isEN ? [
      {icon: 'ti-shield-search', title: 'Security Assessments', desc: 'Architecture reviews and risk assessments prioritized around genuine business threats.'},
      {icon: 'ti-bug', title: 'Penetration Testing', desc: 'Hands-on testing of apps, APIs, and infrastructure with clear remediation guidance.'},
      {icon: 'ti-certificate', title: 'Compliance Readiness', desc: 'Practical assistance with SOC 2, ISO 27001, GDPR, and industry-specific controls.'},
      {icon: 'ti-alert-triangle', title: 'Incident Readiness', desc: 'Playbooks and response practices to contain incidents and extract lessons.'},
      {icon: 'ti-lock-access', title: 'Identity & Access', desc: 'Least-privilege IAM, zero trust principles, and access reviews built into architecture.'},
      {icon: 'ti-key', title: 'Secrets Management', desc: 'Vault-based secrets handling and dependency scanning built into the engineering process.'}
    ] : [
      {icon: 'ti-shield-search', title: 'Security Assessments', desc: 'Architecture Review และ Risk Assessment ที่จัดลำดับตาม Threat ทางธุรกิจจริง'},
      {icon: 'ti-bug', title: 'Penetration Testing', desc: 'ทดสอบ App, API และ Infrastructure แบบลงมือจริง พร้อมแนวทางแก้ไขชัดเจน'},
      {icon: 'ti-certificate', title: 'Compliance Readiness', desc: 'สนับสนุนแบบปฏิบัติได้จริงสำหรับ SOC 2, ISO 27001, GDPR และ Control เฉพาะอุตสาหกรรม'},
      {icon: 'ti-alert-triangle', title: 'Incident Readiness', desc: 'วาง Playbook และแนวทางรับมือเหตุการณ์เพื่อควบคุมและถอดบทเรียน'},
      {icon: 'ti-lock-access', title: 'Identity & Access', desc: 'IAM แบบ Least-privilege, หลัก Zero Trust และการทบทวนสิทธิ์เข้าถึงในระดับ Architecture'},
      {icon: 'ti-key', title: 'Secrets Management', desc: 'จัดการ Secret ผ่าน Vault และ Dependency Scanning ที่ฝังในกระบวนการ Engineering'}
    ]
  const steps       = isEN ? [
      {no: '01', title: 'Assess', desc: 'Posture, assets, and threat model evaluation.'},
      {no: '02', title: 'Plan', desc: 'Controls and remediation roadmap development.'},
      {no: '03', title: 'Implement', desc: 'Hardening and secure delivery practices.'},
      {no: '04', title: 'Monitor', desc: 'Detection and continuous review mechanisms.'},
      {no: '05', title: 'Respond', desc: 'Incident handling and recovery procedures.'},
      {no: '06', title: 'Improve', desc: 'Lessons learned integrated into the SDLC.'}
    ] : [
      {no: '01', title: 'Assess', desc: 'ประเมิน Posture, Asset และ Threat Model'},
      {no: '02', title: 'Plan', desc: 'วาง Control และ Roadmap การแก้ไข'},
      {no: '03', title: 'Implement', desc: 'Harden ระบบและวาง Secure Delivery Practice'},
      {no: '04', title: 'Monitor', desc: 'วางกลไก Detection และ Review ต่อเนื่อง'},
      {no: '05', title: 'Respond', desc: 'รับมือเหตุการณ์และขั้นตอน Recovery'},
      {no: '06', title: 'Improve', desc: 'นำบทเรียนกลับเข้า SDLC'}
    ]
  const caseStudies = isEN ? [
      {tag: 'FinTech · Bangkok', title: 'SOC 2 Type II Passed on First Attempt', desc: 'Full architecture hardening and control implementation ahead of audit.', result: 'Zero audit findings'},
      {tag: 'Healthcare · Bangkok', title: '23 Critical Vulnerabilities Found & Fixed', desc: 'Penetration test across app, API, and infrastructure before launch.', result: 'Fixed before go-live'},
      {tag: 'E-Commerce · Nationwide', title: 'Incident Contained in 4 Hours', desc: 'Playbook and monitoring caught and contained an intrusion attempt.', result: 'Zero customer data lost'}
    ] : [
      {tag: 'FinTech · กรุงเทพฯ', title: 'ผ่าน SOC 2 Type II ตั้งแต่ครั้งแรก', desc: 'Harden Architecture และติดตั้ง Control เต็มรูปแบบก่อนการ Audit', result: 'ไม่พบข้อบกพร่องจาก Audit'},
      {tag: 'Healthcare · กรุงเทพฯ', title: 'พบและแก้ช่องโหว่ Critical 23 จุด', desc: 'Penetration Test ครอบคลุม App, API และ Infrastructure ก่อน Launch', result: 'แก้ไขเสร็จก่อน Go-live'},
      {tag: 'E-Commerce · ทั่วประเทศ', title: 'ควบคุมเหตุการณ์ได้ใน 4 ชั่วโมง', desc: 'Playbook และ Monitoring จับและควบคุมการพยายามบุกรุกได้ทัน', result: 'ไม่มีข้อมูลลูกค้าสูญหาย'}
    ]
  const faqs        = isEN ? [
      {q: 'What cybersecurity services do you provide?', a: 'Security assessments, secure-by-design engineering, and compliance support: threat modeling, hardening, identity and access management, and monitoring.'},
      {q: 'Can you assess an existing application?', a: 'Yes. We conduct comprehensive assessments covering code, infrastructure, dependencies, and access controls with prioritized remediation.'},
      {q: 'Do you help with PDPA and GDPR compliance?', a: 'Yes. We support PDPA compliance in Thailand as a founding partner of PDPA.org, and build controls aligned with GDPR and ISO 27001.'},
      {q: 'How do you build security into new products?', a: 'Zero trust principles, least-privilege access, secrets management, and dependency scanning are built in from the first sprint.'}
    ] : [
      {q: 'ให้บริการ Cybersecurity แบบไหนบ้าง?', a: 'Security Assessment, วิศวกรรมแบบ Secure-by-design และการสนับสนุน Compliance: Threat Modeling, Hardening, Identity และ Access Management และ Monitoring'},
      {q: 'ตรวจสอบระบบเดิมที่มีอยู่แล้วได้ไหม?', a: 'ได้ครับ เราทำ Assessment ครอบคลุม Code, Infrastructure, Dependency และ Access Control พร้อมจัดลำดับการแก้ไข'},
      {q: 'ช่วยเรื่อง PDPA และ GDPR ได้ไหม?', a: 'ได้ครับ เราสนับสนุน PDPA ในไทยในฐานะ Founding Partner ของ PDPA.org และวาง Control ให้สอดคล้องกับ GDPR และ ISO 27001'},
      {q: 'สร้าง Security ให้ Product ใหม่อย่างไร?', a: 'หลัก Zero Trust, Least-privilege Access, Secrets Management และ Dependency Scanning ถูกฝังไว้ตั้งแต่ Sprint แรก'}
    ]
  const related     = isEN ? [
      {label: 'PDPA Compliance', href: '/services/pdpa-compliance'},
      {label: 'Cloud Services & Migration', href: '/services/cloud-services-migration'},
      {label: 'Quality Assurance & Testing', href: '/services/quality-assurance-testing'},
      {label: 'Managed Services & Support', href: '/services/support-maintenance'}
    ] : [
      {label: 'PDPA Compliance', href: '/services/pdpa-compliance'},
      {label: 'Cloud Services & Migration', href: '/services/cloud-services-migration'},
      {label: 'Quality Assurance & Testing', href: '/services/quality-assurance-testing'},
      {label: 'บริการดูแลระบบ', href: '/services/support-maintenance'}
    ]

  const secLines = [
    { n: 1, jsx: <><span style={{ color: '#82AAFF' }}>{'>'}</span>&nbsp;<span style={{ color: '#C792EA' }}>snyk test --all-projects</span></> },
    { n: 2, jsx: <><span style={{ color: 'var(--lime)' }}>✓</span>&nbsp;{isEN ? '0 high-severity vulnerabilities' : 'ไม่พบช่องโหว่ระดับ High'}</> },
    { n: 3, jsx: <>&nbsp;</> },
    { n: 4, jsx: <><span style={{ color: '#82AAFF' }}>{'>'}</span>&nbsp;<span style={{ color: '#C792EA' }}>pentest --scope app,api,infra</span></> },
    { n: 5, jsx: <><span style={{ color: 'var(--lime)' }}>✓</span>&nbsp;{isEN ? '23 findings remediated' : 'แก้ไข Finding 23 จุด'}</> },
    { n: 6, jsx: <>&nbsp;</> },
    { n: 7, jsx: <><span style={{ color: '#82AAFF' }}>{'>'}</span>&nbsp;<span style={{ color: '#C792EA' }}>{isEN ? 'audit --framework soc2' : 'audit --framework soc2'}</span></> },
    { n: 8, jsx: <><span style={{ color: 'var(--lime)' }}>✓</span>&nbsp;{isEN ? 'SOC 2 Type II: passed' : 'SOC 2 Type II: ผ่าน'}</> },
  ]

  const heroSlot = (
    <div className="relative pb-10 pr-6">
      <div className="rounded-2xl overflow-hidden" style={{ background: '#141329', border: '1px solid rgba(123,110,246,0.35)' }}>
        <div className="flex items-center gap-2 px-5 py-3.5" style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
          <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#F87171' }} />
          <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#FBBF24' }} />
          <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#34D399' }} />
          <span className="ml-3 text-xs" style={{ color: 'rgba(255,255,255,0.85)', fontFamily: 'monospace' }}>security-scan.log</span>
        </div>
        <div className="px-6 py-6" style={{ fontFamily: 'monospace', fontSize: '0.9rem', lineHeight: 1.9, color: 'rgba(255,255,255,0.85)' }}>
          {secLines.map((l) => (
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
          <span className="text-[10px] tracking-widest uppercase" style={{ color: 'rgba(255,255,255,0.85)' }}>{isEN ? 'Security Posture' : 'Security Posture'}</span>
          <span className="w-2 h-2 rounded-full" style={{ background: 'var(--lime)' }} />
        </div>
        <div className="flex items-center gap-3 mb-3">
          <div className="w-12 h-12 rounded-lg flex items-center justify-center shrink-0" style={{ background: 'linear-gradient(135deg,var(--purple),var(--purple-light))' }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M12 2l8 4v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-4Z" stroke="#fff" strokeWidth="1.6" strokeLinejoin="round" /></svg>
          </div>
          <div className="flex-1 space-y-1.5">
            <div className="h-1.5 rounded-full" style={{ background: 'rgba(255,255,255,0.15)', width: '90%' }} />
            <div className="h-1.5 rounded-full" style={{ background: 'rgba(255,255,255,0.15)', width: '65%' }} />
            <div className="h-3.5 rounded-full" style={{ background: 'linear-gradient(90deg,var(--purple),var(--lime))', width: '98%' }} />
          </div>
        </div>
        <div className="flex items-center gap-1.5 text-xs" style={{ color: 'var(--lime)' }}>
          <i className="ti ti-circle-check" style={{ fontSize: 13 }} aria-hidden="true" />
          {isEN ? 'SOC 2 audit ready' : 'พร้อมสำหรับ SOC 2 Audit'}
        </div>
      </div>
    </div>
  )

  const capabilities = isEN ? [
    { icon: 'ti-shield-search', title: 'Security Assessments', desc: 'Architecture reviews and risk assessments prioritized around genuine business threats.' },
    { icon: 'ti-bug', title: 'Penetration Testing', desc: 'Hands-on testing of apps, APIs, and infrastructure with clear remediation guidance.' },
    { icon: 'ti-certificate', title: 'Compliance Readiness', desc: 'Practical assistance with SOC 2, ISO 27001, GDPR, and industry-specific controls.' },
    { icon: 'ti-alert-triangle', title: 'Incident Readiness', desc: 'Playbooks and response practices to contain incidents and extract lessons.' },
  ] : [
    { icon: 'ti-shield-search', title: 'Security Assessments', desc: 'Architecture Review และ Risk Assessment ที่จัดลำดับตาม Threat ทางธุรกิจจริง' },
    { icon: 'ti-bug', title: 'Penetration Testing', desc: 'ทดสอบ App, API และ Infrastructure แบบลงมือจริง พร้อมแนวทางแก้ไขชัดเจน' },
    { icon: 'ti-certificate', title: 'Compliance Readiness', desc: 'สนับสนุนแบบปฏิบัติได้จริงสำหรับ SOC 2, ISO 27001, GDPR และ Control เฉพาะอุตสาหกรรม' },
    { icon: 'ti-alert-triangle', title: 'Incident Readiness', desc: 'วาง Playbook และแนวทางรับมือเหตุการณ์เพื่อควบคุมและถอดบทเรียน' },
  ]

  const techStack = [
    { label: 'SIEM', icon: 'ti-radar' },
    { label: 'WAF', icon: 'ti-shield-check' },
    { label: 'IAM', icon: 'ti-lock-access' },
    { label: 'Zero Trust', icon: 'ti-shield-half' },
    { label: 'SOAR', icon: 'ti-server-cog' },
    { label: 'Vault', svg: 'vault' },
    { label: 'Snyk', svg: 'snyk' },
  ] as { label: string; icon?: string; svg?: string }[]

  const approachSteps = isEN ? [
    { no: '01', title: 'Assess', desc: 'Posture, assets, threat model' },
    { no: '02', title: 'Plan', desc: 'Controls and remediation roadmap' },
    { no: '03', title: 'Implement', desc: 'Hardening and secure delivery' },
    { no: '04', title: 'Monitor', desc: 'Detection and continuous review' },
    { no: '05', title: 'Respond', desc: 'Incident handling and recovery' },
    { no: '06', title: 'Improve', desc: 'Lessons integrated into the SDLC' },
  ] : [
    { no: '01', title: 'Assess', desc: 'Posture, Asset และ Threat Model' },
    { no: '02', title: 'Plan', desc: 'Control และ Roadmap การแก้ไข' },
    { no: '03', title: 'Implement', desc: 'Harden และ Secure Delivery' },
    { no: '04', title: 'Monitor', desc: 'Detection และ Review ต่อเนื่อง' },
    { no: '05', title: 'Respond', desc: 'รับมือเหตุการณ์และ Recovery' },
    { no: '06', title: 'Improve', desc: 'นำบทเรียนกลับเข้า SDLC' },
  ]

  const darkFaqs = isEN ? [
    { q: 'What cybersecurity services does Haliviq provide?', a: 'Security assessments, secure-by-design engineering, and compliance support for product teams: threat modeling, hardening, identity and access management, and monitoring with SIEM and SOAR tooling. We treat security as engineering work integrated into delivery, not a once-a-year audit exercise.' },
    { q: 'Can you assess the security of an existing application?', a: 'Yes. We conduct comprehensive assessments covering code, infrastructure, dependencies, and access controls, delivering prioritized, actionable remediation rather than a lengthy report that sits unread. You get a ranked list of what to fix first and why it matters.' },
    { q: 'Does Haliviq help with PDPA and other compliance requirements?', a: 'Yes. We support PDPA compliance in Thailand as a founding partner of PDPA.org, and we build controls that align with GDPR and ISO 27001 where your business needs them — practical implementation, not just policy documents.' },
    { q: 'How do you build security into new products from the start?', a: 'Zero trust principles, least-privilege access, secrets management with tools like Vault, and dependency scanning with Snyk are built into our engineering process from the first sprint, not added as a security review before launch.' },
    { q: 'How much does a security assessment cost?', a: 'A focused assessment of one application or system typically starts in the low five figures (THB), scaling with the number of systems in scope and depth of testing required. A full SOC 2 or ISO 27001 readiness program, including control implementation, is quoted after an initial scoping call based on your current gaps.' },
    { q: 'How long does penetration testing take?', a: 'A focused penetration test of a single application typically takes 1-2 weeks including the report and remediation guidance. A comprehensive assessment across app, API, and infrastructure for a larger system usually runs 3-5 weeks.' },
    { q: 'What happens if you find a critical vulnerability during testing?', a: 'We flag critical findings immediately rather than waiting for the final report, so your team can start remediation the same day. Our report includes reproduction steps and concrete fix guidance, not just a severity score.' },
    { q: 'Do you provide ongoing security monitoring, or only point-in-time assessments?', a: 'Both, depending on what you need. A point-in-time assessment gives you a snapshot and a fix list; ongoing monitoring with SIEM and SOAR tooling plus periodic re-testing keeps your posture current as your systems and the threat landscape change.' },
  ] : [
    { q: 'Haliviq ให้บริการ Cybersecurity แบบไหนบ้าง?', a: 'Security Assessment, วิศวกรรมแบบ Secure-by-design และการสนับสนุน Compliance สำหรับทีม Product: Threat Modeling, Hardening, Identity และ Access Management และ Monitoring ด้วย SIEM และ SOAR เรามอง Security เป็นงานวิศวกรรมที่ผสานเข้ากับ Delivery ไม่ใช่การ Audit ปีละครั้ง' },
    { q: 'ตรวจสอบความปลอดภัยของแอปพลิเคชันที่มีอยู่แล้วได้ไหม?', a: 'ได้ครับ เราทำ Assessment ครอบคลุม Code, Infrastructure, Dependency และ Access Control พร้อมส่งมอบแนวทางแก้ไขที่จัดลำดับความสำคัญและนำไปใช้ได้จริง แทนที่จะเป็นรายงานยาวๆ ที่ไม่มีใครอ่าน คุณจะได้ List ที่จัดลำดับว่าควรแก้อะไรก่อนและเพราะอะไร' },
    { q: 'Haliviq ช่วยเรื่อง PDPA และ Compliance อื่นๆ ได้ไหม?', a: 'ได้ครับ เราสนับสนุน PDPA Compliance ในไทยในฐานะ Founding Partner ของ PDPA.org และวาง Control ให้สอดคล้องกับ GDPR และ ISO 27001 ตามที่ธุรกิจต้องการ เป็นการ Implement จริง ไม่ใช่แค่เอกสารนโยบาย' },
    { q: 'สร้าง Security ให้ Product ใหม่ตั้งแต่ต้นอย่างไร?', a: 'หลัก Zero Trust, Least-privilege Access, Secrets Management ด้วยเครื่องมืออย่าง Vault และ Dependency Scanning ด้วย Snyk ถูกฝังไว้ในกระบวนการ Engineering ตั้งแต่ Sprint แรก ไม่ใช่มาเพิ่มเป็น Security Review ก่อน Launch' },
    { q: 'Security Assessment มีค่าใช้จ่ายเท่าไหร่?', a: 'การ Assessment แบบเจาะจงหนึ่ง Application หรือระบบ มักเริ่มต้นที่หลักหมื่นปลายๆ (บาท) และปรับตามจำนวนระบบในขอบเขตและความลึกของการ Test ส่วนโปรแกรมเตรียมความพร้อม SOC 2 หรือ ISO 27001 เต็มรูปแบบ รวมการติดตั้ง Control จะเสนอราคาหลังคุย Scope เบื้องต้นตาม Gap ที่มีอยู่' },
    { q: 'Penetration Testing ใช้เวลานานแค่ไหน?', a: 'Penetration Test แบบเจาะจงสำหรับหนึ่ง Application มักใช้เวลา 1-2 สัปดาห์ รวมรายงานและแนวทางแก้ไข ส่วน Assessment แบบครอบคลุม App, API และ Infrastructure สำหรับระบบขนาดใหญ่ มักใช้เวลา 3-5 สัปดาห์' },
    { q: 'ถ้าเจอช่องโหว่ Critical ระหว่าง Test จะทำอย่างไร?', a: 'เราแจ้ง Finding ระดับ Critical ทันที ไม่รอจนถึงรายงานสุดท้าย เพื่อให้ทีมคุณเริ่มแก้ไขได้ตั้งแต่วันนั้น รายงานของเรามีขั้นตอน Reproduction และแนวทางแก้ไขที่ชัดเจน ไม่ใช่แค่คะแนนความรุนแรง' },
    { q: 'มี Monitoring ต่อเนื่องไหม หรือตรวจแค่ครั้งเดียว?', a: 'มีทั้งสองแบบครับ ขึ้นอยู่กับความต้องการ การ Assessment แบบครั้งเดียวให้ภาพรวมและ List การแก้ไข ส่วน Monitoring ต่อเนื่องด้วย SIEM และ SOAR พร้อม Re-test เป็นระยะ ช่วยให้ Posture ของคุณทันสมัยตามระบบและภัยคุกคามที่เปลี่ยนไป' },
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
            {isEN ? 'Tools We Use' : 'เครื่องมือที่ใช้'}
          </p>
          <h2 className="t-display mb-4" style={{ color: '#fff', fontSize: 'clamp(2.25rem,4.5vw,3.5rem)' }}>
            {isEN ? 'Technologies We Use' : 'เทคโนโลยีที่เราใช้งาน'}
          </h2>
          <p className="mb-12" style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1.2rem', fontWeight: 400, maxWidth: 640 }}>
            {isEN
              ? 'Proven security tools and practices we apply where they fit — chosen for the threat model, not the trend cycle.'
              : 'เครื่องมือและแนวทาง Security ที่พิสูจน์แล้ว เลือกใช้ตาม Threat Model จริง ไม่ใช่ตามกระแส'}
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
              ? 'A clear path from assessment to continuous readiness — adjusted per system, never one-size-fits-all.'
              : 'เส้นทางที่ชัดเจนจากการประเมินสู่ความพร้อมต่อเนื่อง ปรับตามแต่ละระบบ ไม่ใช่สูตรสำเร็จตายตัว'}
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
            {isEN ? 'Straight answers about how we handle security.' : 'คำตอบตรงไปตรงมาเกี่ยวกับวิธีที่เราดูแล Security'}
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
      whyImg="/images/services/cybersecurity/why1.jpg"
      whyImg2="/images/services/cybersecurity/why2.jpg"
      featureImg="/images/services/cybersecurity/feature.jpg"
      processImg="/images/services/cybersecurity/process.jpg"
    />
  )
}
