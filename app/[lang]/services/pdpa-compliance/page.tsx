import Link from 'next/link'
import ServiceLayout from '@/components/service/ServiceLayout'
import { type Lang } from '@/lib/i18n'

export async function generateStaticParams() {
  return [{ lang: 'th' }, { lang: 'en' }]
}

export default function Page({ params }: { params: { lang: Lang } }) {
  const isEN = params.lang === 'en'
  const prefix = `/${params.lang}`

  const badge    = isEN ? 'Compliance / PDPA'  : 'Compliance / PDPA'
  const title    = isEN ? 'PDPA Compliance'  : 'PDPA Compliance'
  const subtitle = isEN ? 'Built In, Not Bolted On'    : 'ฝังเข้าไป ไม่ใช่แปะทีหลัง'
  const heroDesc = isEN ? 'PDPA audit and gap analysis, consent and cookie management, data subject request workflows, and privacy engineering — as a founding partner of PDPA.org.'  : 'PDPA Audit และ Gap Analysis, จัดการ Consent และ Cookie, Workflow คำขอสิทธิ์เจ้าของข้อมูล และ Privacy Engineering ในฐานะ Founding Partner ของ PDPA.org'
  const whyTitle = isEN ? 'Why PDPA compliance is engineering, not paperwork'    : 'ทำไม PDPA Compliance คืองานวิศวกรรม ไม่ใช่แค่เอกสาร'
  const whyDesc  = isEN ? 'A privacy policy document does not stop a data breach or fulfill a deletion request. Real compliance requires consent flows, access controls, and workflows built into the product itself.'  : 'เอกสาร Privacy Policy ไม่ได้ช่วยหยุด Data Breach หรือทำตามคำขอลบข้อมูลได้จริง Compliance ที่แท้จริงต้องมี Consent Flow, Access Control และ Workflow ที่ฝังอยู่ใน Product จริงๆ'
  const ctaTitle = isEN ? 'Ready to get a real compliance picture?'    : 'พร้อมรู้สถานะ Compliance ที่แท้จริงหรือยัง?'
  const ctaDesc  = isEN ? 'Start with a gap analysis that shows exactly where you stand against PDPA requirements.'   : 'เริ่มด้วย Gap Analysis ที่แสดงสถานะจริงเทียบกับข้อกำหนด PDPA'
  const overviewText = isEN
    ? 'As a founding partner of PDPA.org, we help organizations move from a policy document to real, engineered compliance: PDPA audits and gap analysis against your actual data flows, consent and cookie management built into your product, data subject access request (DSAR) workflows that can actually be executed, and privacy and security engineering — encryption, access control, and audit logging — implemented as part of your systems rather than described in a document nobody follows.'
    : 'ในฐานะ Founding Partner ของ PDPA.org เราช่วยองค์กรก้าวจากเอกสารนโยบาย ไปสู่ Compliance ที่ Implement จริง ตั้งแต่ PDPA Audit และ Gap Analysis เทียบกับ Data Flow จริงของคุณ, การจัดการ Consent และ Cookie ที่ฝังอยู่ใน Product, Workflow สำหรับคำขอสิทธิ์เจ้าของข้อมูล (DSAR) ที่ทำตามได้จริง ไปจนถึง Privacy และ Security Engineering เช่น Encryption, Access Control และ Audit Logging ที่ Implement เป็นส่วนหนึ่งของระบบ ไม่ใช่แค่เขียนไว้ในเอกสารที่ไม่มีใครทำตาม'

  const heroBullets = isEN ? [
      'Full PDPA audit and gap analysis against your real data flows',
      'Consent and cookie management built into your product',
      'Data subject access request workflows that are actually executable',
      'Privacy and security engineering: encryption, access control, audit logs',
      'Founding partner of PDPA.org with hands-on implementation experience',
    ] : [
      'PDPA Audit และ Gap Analysis เต็มรูปแบบเทียบกับ Data Flow จริง',
      'จัดการ Consent และ Cookie ที่ฝังอยู่ใน Product ของคุณ',
      'Workflow คำขอสิทธิ์เจ้าของข้อมูล (DSAR) ที่ทำตามได้จริง',
      'Privacy และ Security Engineering: Encryption, Access Control, Audit Log',
      'Founding Partner ของ PDPA.org พร้อมประสบการณ์ Implement จริง',
    ]
  const whyPoints   = isEN ? [
      'PDPA non-compliance carries real fines and reputational risk, not just a warning letter.',
      'A written policy does not fulfill a data subject request without a working process behind it.',
      'Consent management done well improves customer trust, not just legal standing.',
      'Data mapping reveals shadow data flows most organizations do not realize they have.',
      'Security engineering like encryption and access control protects data whether or not a request ever comes in.',
    ] : [
      'การไม่ปฏิบัติตาม PDPA มีค่าปรับจริงและความเสี่ยงด้านชื่อเสียง ไม่ใช่แค่จดหมายเตือน',
      'นโยบายที่เขียนไว้ ไม่สามารถทำตามคำขอของเจ้าของข้อมูลได้ ถ้าไม่มี Process ที่ใช้งานได้จริงรองรับ',
      'การจัดการ Consent ที่ทำได้ดี ช่วยเพิ่มความไว้ใจของลูกค้า ไม่ใช่แค่สถานะทางกฎหมาย',
      'Data Mapping ช่วยเผยให้เห็น Data Flow ที่ซ่อนอยู่ ที่องค์กรส่วนใหญ่ไม่รู้ตัวว่ามี',
      'Security Engineering อย่าง Encryption และ Access Control ปกป้องข้อมูลได้ไม่ว่าจะมีคำขอเข้ามาหรือไม่',
    ]
  const outcomes    = isEN ? [
      {stat: '100%', label: 'DSAR Fulfillment Rate', desc: 'Across implemented workflows'},
      {stat: '0', label: 'Compliance Fines', desc: 'Across audited client organizations'},
      {stat: '<48h', label: 'DSAR Response Time', desc: 'From request to action'},
      {stat: '20+', label: 'Systems Data-Mapped', desc: 'Average per full audit'}
    ] : [
      {stat: '100%', label: 'อัตราทำตามคำขอ DSAR', desc: 'ในทุก Workflow ที่ Implement'},
      {stat: '0', label: 'ค่าปรับ Compliance', desc: 'ในองค์กรลูกค้าที่ตรวจสอบ'},
      {stat: '<48h', label: 'เวลาตอบคำขอ DSAR', desc: 'ตั้งแต่รับคำขอถึงดำเนินการ'},
      {stat: '20+', label: 'ระบบที่ทำ Data Mapping', desc: 'เฉลี่ยต่อการ Audit เต็มรูปแบบ'}
    ]
  const features    = isEN ? [
      {icon: 'ti-search', title: 'PDPA Audit & Gap Analysis', desc: 'A full review of data flows, consent points, and current controls against PDPA requirements.'},
      {icon: 'ti-cookie', title: 'Consent & Cookie Management', desc: 'Consent capture, preference centers, and cookie compliance built into your product.'},
      {icon: 'ti-file-check', title: 'Data Subject Request Workflows', desc: 'Executable DSAR processes for access, correction, and deletion requests.'},
      {icon: 'ti-lock', title: 'Privacy & Security Engineering', desc: 'Encryption, access control, and audit logging implemented at the systems level.'},
      {icon: 'ti-map', title: 'Data Mapping', desc: 'Full visibility into where personal data lives, moves, and is processed across your systems.'},
      {icon: 'ti-certificate', title: 'Training & Governance', desc: 'Practical training and governance processes so compliance holds after the project ends.'}
    ] : [
      {icon: 'ti-search', title: 'PDPA Audit & Gap Analysis', desc: 'ตรวจสอบ Data Flow, จุด Consent และ Control ปัจจุบัน เทียบกับข้อกำหนด PDPA เต็มรูปแบบ'},
      {icon: 'ti-cookie', title: 'Consent & Cookie Management', desc: 'การเก็บ Consent, Preference Center และ Cookie Compliance ที่ฝังอยู่ใน Product'},
      {icon: 'ti-file-check', title: 'Data Subject Request Workflows', desc: 'Process DSAR ที่ทำตามได้จริง สำหรับคำขอเข้าถึง, แก้ไข และลบข้อมูล'},
      {icon: 'ti-lock', title: 'Privacy & Security Engineering', desc: 'Encryption, Access Control และ Audit Logging ที่ Implement ในระดับระบบ'},
      {icon: 'ti-map', title: 'Data Mapping', desc: 'เห็นภาพเต็มว่าข้อมูลส่วนบุคคลอยู่ที่ไหน เคลื่อนย้ายอย่างไร และถูกประมวลผลที่ไหนบ้าง'},
      {icon: 'ti-certificate', title: 'Training & Governance', desc: 'Training และ Governance Process ที่ใช้งานได้จริง เพื่อให้ Compliance คงอยู่หลังโปรเจกต์จบ'}
    ]
  const steps       = isEN ? [
      {no: '01', title: 'Audit', desc: 'Review current data flows and controls.'},
      {no: '02', title: 'Gap Analysis', desc: 'Identify gaps against PDPA requirements.'},
      {no: '03', title: 'Roadmap', desc: 'Prioritize remediation by risk and effort.'},
      {no: '04', title: 'Implementation', desc: 'Build consent, DSAR, and security controls.'},
      {no: '05', title: 'Training', desc: 'Train teams on new processes and tools.'},
      {no: '06', title: 'Monitoring', desc: 'Ongoing review as systems and law evolve.'}
    ] : [
      {no: '01', title: 'Audit', desc: 'ตรวจสอบ Data Flow และ Control ปัจจุบัน'},
      {no: '02', title: 'Gap Analysis', desc: 'ระบุช่องว่างเทียบกับข้อกำหนด PDPA'},
      {no: '03', title: 'Roadmap', desc: 'จัดลำดับการแก้ไขตามความเสี่ยงและความยาก'},
      {no: '04', title: 'Implementation', desc: 'สร้าง Consent, DSAR และ Security Control'},
      {no: '05', title: 'Training', desc: 'เทรนทีมเรื่อง Process และเครื่องมือใหม่'},
      {no: '06', title: 'Monitoring', desc: 'ทบทวนต่อเนื่องตามระบบและกฎหมายที่เปลี่ยนไป'}
    ]
  const caseStudies = isEN ? [
      {tag: 'FinTech · Bangkok', title: 'Full PDPA Compliance in 10 Weeks', desc: 'Audit, gap analysis, and implementation of consent and DSAR workflows.', result: 'Zero findings on external review'},
      {tag: 'Healthcare · Bangkok', title: 'DSAR Response Time Cut from Weeks to 48 Hours', desc: 'Automated data subject request workflow across 8 internal systems.', result: '100% requests fulfilled on time'},
      {tag: 'Retail · Nationwide', title: 'Cookie Consent Rebuilt for Real Compliance', desc: 'Consent management platform integrated across web and mobile properties.', result: 'Full consent audit trail'}
    ] : [
      {tag: 'FinTech · กรุงเทพฯ', title: 'PDPA Compliance เต็มรูปแบบใน 10 สัปดาห์', desc: 'Audit, Gap Analysis และ Implement Workflow Consent และ DSAR', result: 'ไม่พบข้อบกพร่องจากการตรวจสอบภายนอก'},
      {tag: 'Healthcare · กรุงเทพฯ', title: 'ลดเวลาตอบ DSAR จากหลักสัปดาห์เหลือ 48 ชั่วโมง', desc: 'Automate Workflow คำขอสิทธิ์เจ้าของข้อมูล ครอบคลุม 8 ระบบภายใน', result: 'ตอบคำขอทันเวลา 100%'},
      {tag: 'Retail · ทั่วประเทศ', title: 'สร้าง Cookie Consent ใหม่เพื่อ Compliance จริง', desc: 'เชื่อมต่อ Consent Management Platform ครอบคลุม Web และ Mobile', result: 'มี Audit Trail ของ Consent ครบถ้วน'}
    ]
  const faqs        = isEN ? [
      {q: 'What is a PDPA gap analysis?', a: 'A structured review of your actual data flows, consent points, and controls compared against PDPA requirements, with a prioritized list of gaps to close.'},
      {q: 'Can you help fulfill data subject requests we already receive?', a: 'Yes. We design and build workflows that let your team execute access, correction, and deletion requests reliably and within required timeframes.'},
      {q: 'Are you a certified PDPA partner?', a: 'We are a founding partner of PDPA.org and bring hands-on implementation experience, not just policy templates.'},
      {q: 'Does this cover GDPR as well as PDPA?', a: 'Yes. Many controls overlap, and we build with both frameworks in mind where your business has international exposure.'}
    ] : [
      {q: 'PDPA Gap Analysis คืออะไร?', a: 'การตรวจสอบ Data Flow จริง, จุด Consent และ Control ของคุณ เทียบกับข้อกำหนด PDPA อย่างเป็นระบบ พร้อม List ช่องว่างที่ต้องแก้ไขตามลำดับความสำคัญ'},
      {q: 'ช่วยทำตามคำขอเจ้าของข้อมูลที่เรารับอยู่แล้วได้ไหม?', a: 'ได้ครับ เราออกแบบและสร้าง Workflow ให้ทีมของคุณทำตามคำขอเข้าถึง, แก้ไข และลบข้อมูลได้อย่างน่าเชื่อถือและทันกรอบเวลาที่กำหนด'},
      {q: 'เป็น PDPA Partner ที่ได้รับการรับรองไหม?', a: 'เราเป็น Founding Partner ของ PDPA.org และมีประสบการณ์ Implement จริง ไม่ใช่แค่ Template นโยบาย'},
      {q: 'ครอบคลุม GDPR ด้วยไหม นอกเหนือจาก PDPA?', a: 'ครอบคลุมครับ Control หลายอย่างซ้อนทับกัน เราสร้างโดยคำนึงถึงทั้งสอง Framework สำหรับธุรกิจที่มีการดำเนินงานระดับสากล'}
    ]
  const related     = isEN ? [
      {label: 'Cybersecurity', href: '/services/cybersecurity'},
      {label: 'Enterprise Solutions', href: '/services/enterprise-solutions'},
      {label: 'Cloud Services & Migration', href: '/services/cloud-services-migration'},
      {label: 'Managed Services & Support', href: '/services/support-maintenance'}
    ] : [
      {label: 'Cybersecurity', href: '/services/cybersecurity'},
      {label: 'Enterprise Solutions', href: '/services/enterprise-solutions'},
      {label: 'Cloud Services & Migration', href: '/services/cloud-services-migration'},
      {label: 'บริการดูแลระบบ', href: '/services/support-maintenance'}
    ]

  const pdpaLines = [
    { n: 1, jsx: <><span style={{ color: '#82AAFF' }}>{'>'}</span>&nbsp;<span style={{ color: '#C792EA' }}>pdpa-audit --scope all-systems</span></> },
    { n: 2, jsx: <><span style={{ color: 'var(--lime)' }}>✓</span>&nbsp;{isEN ? '18 gaps identified, prioritized' : 'พบ 18 ช่องว่าง จัดลำดับแล้ว'}</> },
    { n: 3, jsx: <>&nbsp;</> },
    { n: 4, jsx: <><span style={{ color: '#82AAFF' }}>{'>'}</span>&nbsp;<span style={{ color: '#C792EA' }}>dsar --request access,delete</span></> },
    { n: 5, jsx: <><span style={{ color: 'var(--lime)' }}>✓</span>&nbsp;{isEN ? 'Fulfilled in 36h, within SLA' : 'ดำเนินการเสร็จใน 36 ชม. ตาม SLA'}</> },
    { n: 6, jsx: <>&nbsp;</> },
    { n: 7, jsx: <><span style={{ color: '#82AAFF' }}>{'>'}</span>&nbsp;<span style={{ color: '#C792EA' }}>audit-log --verify encryption</span></> },
    { n: 8, jsx: <><span style={{ color: 'var(--lime)' }}>✓</span>&nbsp;{isEN ? 'All PII encrypted at rest' : 'ข้อมูลส่วนบุคคลถูก Encrypt ทั้งหมด'}</> },
  ]

  const heroSlot = (
    <div className="relative pb-10 pr-6">
      <div className="rounded-2xl overflow-hidden" style={{ background: '#141329', border: '1px solid rgba(123,110,246,0.35)' }}>
        <div className="flex items-center gap-2 px-5 py-3.5" style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
          <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#F87171' }} />
          <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#FBBF24' }} />
          <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#34D399' }} />
          <span className="ml-3 text-xs" style={{ color: 'rgba(255,255,255,0.85)', fontFamily: 'monospace' }}>compliance-audit.log</span>
        </div>
        <div className="px-6 py-6" style={{ fontFamily: 'monospace', fontSize: '0.9rem', lineHeight: 1.9, color: 'rgba(255,255,255,0.85)' }}>
          {pdpaLines.map((l) => (
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
          <span className="text-[10px] tracking-widest uppercase" style={{ color: 'rgba(255,255,255,0.85)' }}>{isEN ? 'Compliance Status' : 'Compliance Status'}</span>
          <span className="w-2 h-2 rounded-full" style={{ background: 'var(--lime)' }} />
        </div>
        <div className="flex items-center gap-3 mb-3">
          <div className="w-12 h-12 rounded-lg flex items-center justify-center shrink-0" style={{ background: 'linear-gradient(135deg,var(--purple),var(--purple-light))' }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M12 2l8 4v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-4Z" stroke="#fff" strokeWidth="1.6" strokeLinejoin="round" /><path d="M9 12l2 2 4-4" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </div>
          <div className="flex-1 space-y-1.5">
            <div className="h-1.5 rounded-full" style={{ background: 'rgba(255,255,255,0.15)', width: '90%' }} />
            <div className="h-1.5 rounded-full" style={{ background: 'rgba(255,255,255,0.15)', width: '65%' }} />
            <div className="h-3.5 rounded-full" style={{ background: 'linear-gradient(90deg,var(--purple),var(--lime))', width: '100%' }} />
          </div>
        </div>
        <div className="flex items-center gap-1.5 text-xs" style={{ color: 'var(--lime)' }}>
          <i className="ti ti-circle-check" style={{ fontSize: 13 }} aria-hidden="true" />
          {isEN ? '100% DSAR fulfillment rate' : 'อัตราทำตามคำขอ DSAR 100%'}
        </div>
      </div>
    </div>
  )

  const capabilities = isEN ? [
    { icon: 'ti-search', title: 'PDPA Audit & Gap Analysis', desc: 'A full review of data flows, consent points, and current controls against PDPA requirements.' },
    { icon: 'ti-cookie', title: 'Consent & Cookie Management', desc: 'Consent capture, preference centers, and cookie compliance built into your product.' },
    { icon: 'ti-file-check', title: 'Data Subject Request Workflows', desc: 'Executable DSAR processes for access, correction, and deletion requests.' },
    { icon: 'ti-lock', title: 'Privacy & Security Engineering', desc: 'Encryption, access control, and audit logging implemented at the systems level.' },
  ] : [
    { icon: 'ti-search', title: 'PDPA Audit & Gap Analysis', desc: 'ตรวจสอบ Data Flow, จุด Consent และ Control ปัจจุบัน เทียบกับข้อกำหนด PDPA เต็มรูปแบบ' },
    { icon: 'ti-cookie', title: 'Consent & Cookie Management', desc: 'การเก็บ Consent, Preference Center และ Cookie Compliance ที่ฝังอยู่ใน Product' },
    { icon: 'ti-file-check', title: 'Data Subject Request Workflows', desc: 'Process DSAR ที่ทำตามได้จริง สำหรับคำขอเข้าถึง, แก้ไข และลบข้อมูล' },
    { icon: 'ti-lock', title: 'Privacy & Security Engineering', desc: 'Encryption, Access Control และ Audit Logging ที่ Implement ในระดับระบบ' },
  ]

  const techStack = [
    { label: 'PDPA (Thailand)', icon: 'ti-shield-lock' },
    { label: 'GDPR', icon: 'ti-world' },
    { label: 'Consent Management', icon: 'ti-checkbox' },
    { label: 'Cookie Compliance', icon: 'ti-cookie' },
    { label: 'Data Mapping', icon: 'ti-map' },
    { label: 'DSAR Workflows', icon: 'ti-file-check' },
    { label: 'Encryption', icon: 'ti-lock' },
    { label: 'Access Control & IAM', icon: 'ti-lock-access' },
    { label: 'Audit Logging', icon: 'ti-list-check' },
    { label: 'ISO 27001', icon: 'ti-certificate' },
  ] as { label: string; icon?: string; svg?: string }[]

  const approachSteps = isEN ? [
    { no: '01', title: 'Audit', desc: 'Current data flows and controls' },
    { no: '02', title: 'Gap Analysis', desc: 'Gaps against PDPA requirements' },
    { no: '03', title: 'Roadmap', desc: 'Prioritize by risk and effort' },
    { no: '04', title: 'Implementation', desc: 'Consent, DSAR, security controls' },
    { no: '05', title: 'Training', desc: 'Teams on new processes and tools' },
    { no: '06', title: 'Monitoring', desc: 'Ongoing review as things evolve' },
  ] : [
    { no: '01', title: 'Audit', desc: 'Data Flow และ Control ปัจจุบัน' },
    { no: '02', title: 'Gap Analysis', desc: 'ช่องว่างเทียบข้อกำหนด PDPA' },
    { no: '03', title: 'Roadmap', desc: 'จัดลำดับตามความเสี่ยงและความยาก' },
    { no: '04', title: 'Implementation', desc: 'Consent, DSAR, Security Control' },
    { no: '05', title: 'Training', desc: 'เทรนทีมเรื่อง Process และเครื่องมือ' },
    { no: '06', title: 'Monitoring', desc: 'ทบทวนต่อเนื่องตามที่เปลี่ยนไป' },
  ]

  const darkFaqs = isEN ? [
    { q: 'What is a PDPA gap analysis and what do we get from it?', a: 'A structured review of your actual data flows, consent points, and existing controls compared against PDPA requirements, resulting in a prioritized, actionable list of gaps to close — not a generic checklist.' },
    { q: 'Can you help fulfill data subject requests we already receive?', a: 'Yes. We design and build workflows that let your team execute access, correction, and deletion requests reliably and within required timeframes, across whichever internal systems hold the data.' },
    { q: 'Are you a certified PDPA partner?', a: 'We are a founding partner of PDPA.org and bring hands-on implementation experience across audits, consent systems, and DSAR workflows, not just policy templates.' },
    { q: 'Does this cover GDPR as well as PDPA?', a: 'Yes. Many controls overlap between the two frameworks, and we build with both in mind wherever your business has international exposure or customers.' },
    { q: 'How long does a full PDPA compliance program take?', a: 'A focused audit and gap analysis typically takes 2-3 weeks. A full remediation program including consent management, DSAR workflows, and security controls usually runs 8-12 weeks depending on the number of systems involved.' },
    { q: 'How much does a PDPA compliance engagement cost?', a: 'A standalone audit and gap analysis typically starts in the low five figures (THB). A full implementation program is quoted after the audit, based on the number of systems and gaps that need remediation.' },
    { q: 'What happens if we already have a privacy policy but no real process behind it?', a: 'This is one of the most common situations we see. The gap analysis specifically checks whether stated policies are actually executable, and we build the missing workflows and controls rather than just editing the document.' },
    { q: 'Do you provide ongoing compliance monitoring, not just a one-time audit?', a: 'Yes, as an option. Data flows and systems change over time, so we offer periodic re-review and monitoring to keep your compliance posture current rather than accurate only on the day of the initial audit.' },
  ] : [
    { q: 'PDPA Gap Analysis คืออะไร และได้อะไรจากมันบ้าง?', a: 'การตรวจสอบ Data Flow จริง, จุด Consent และ Control ที่มีอยู่ เทียบกับข้อกำหนด PDPA อย่างเป็นระบบ ผลลัพธ์คือ List ช่องว่างที่จัดลำดับความสำคัญและนำไปใช้ได้จริง ไม่ใช่ Checklist ทั่วไป' },
    { q: 'ช่วยทำตามคำขอเจ้าของข้อมูลที่เรารับอยู่แล้วได้ไหม?', a: 'ได้ครับ เราออกแบบและสร้าง Workflow ให้ทีมของคุณทำตามคำขอเข้าถึง, แก้ไข และลบข้อมูลได้อย่างน่าเชื่อถือและทันกรอบเวลาที่กำหนด ครอบคลุมทุกระบบภายในที่เก็บข้อมูลนั้น' },
    { q: 'เป็น PDPA Partner ที่ได้รับการรับรองไหม?', a: 'เราเป็น Founding Partner ของ PDPA.org และมีประสบการณ์ Implement จริงทั้ง Audit, ระบบ Consent และ Workflow DSAR ไม่ใช่แค่ Template นโยบาย' },
    { q: 'ครอบคลุม GDPR ด้วยไหม นอกเหนือจาก PDPA?', a: 'ครอบคลุมครับ Control หลายอย่างซ้อนทับกันระหว่างสอง Framework เราสร้างโดยคำนึงถึงทั้งคู่ สำหรับธุรกิจที่มีการดำเนินงานหรือลูกค้าระดับสากล' },
    { q: 'โปรแกรม PDPA Compliance เต็มรูปแบบใช้เวลานานแค่ไหน?', a: 'Audit และ Gap Analysis แบบเจาะจงมักใช้เวลา 2-3 สัปดาห์ ส่วนโปรแกรมแก้ไขเต็มรูปแบบ รวม Consent Management, DSAR Workflow และ Security Control มักใช้เวลา 8-12 สัปดาห์ ขึ้นอยู่กับจำนวนระบบที่เกี่ยวข้อง' },
    { q: 'งาน PDPA Compliance มีค่าใช้จ่ายเท่าไหร่?', a: 'Audit และ Gap Analysis แบบเดี่ยว มักเริ่มต้นที่หลักหมื่นปลายๆ (บาท) ส่วนโปรแกรม Implementation เต็มรูปแบบจะเสนอราคาหลัง Audit ตามจำนวนระบบและช่องว่างที่ต้องแก้ไข' },
    { q: 'ถ้าเรามี Privacy Policy อยู่แล้วแต่ไม่มี Process จริงรองรับ จะเกิดอะไรขึ้น?', a: 'นี่คือสถานการณ์ที่เราพบบ่อยที่สุด Gap Analysis จะตรวจสอบเฉพาะว่านโยบายที่ระบุไว้ทำตามได้จริงหรือไม่ และเราจะสร้าง Workflow และ Control ที่ขาดหายไป แทนที่จะแค่แก้เอกสาร' },
    { q: 'มี Monitoring Compliance ต่อเนื่องไหม หรือแค่ Audit ครั้งเดียว?', a: 'มีเป็นตัวเลือกครับ เนื่องจาก Data Flow และระบบเปลี่ยนแปลงตลอดเวลา เราจึงมีบริการทบทวนและ Monitoring เป็นระยะ เพื่อให้สถานะ Compliance ทันสมัยอยู่เสมอ ไม่ใช่แค่ถูกต้องในวันที่ Audit ครั้งแรก' },
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
            {isEN ? 'Areas We Cover' : 'ขอบเขตที่เราครอบคลุม'}
          </p>
          <h2 className="t-display mb-4" style={{ color: '#fff', fontSize: 'clamp(2.25rem,4.5vw,3.5rem)' }}>
            {isEN ? 'Frameworks & Controls' : 'Framework และ Control'}
          </h2>
          <p className="mb-12" style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1.2rem', fontWeight: 400, maxWidth: 640 }}>
            {isEN
              ? 'The compliance frameworks and technical controls we implement, chosen to match your actual risk profile.'
              : 'Framework Compliance และ Control ทางเทคนิคที่เรา Implement เลือกให้ตรงกับความเสี่ยงจริงของคุณ'}
          </p>

          <div className="flex flex-wrap gap-3">
            {techStack.map((t) => (
              <span
                key={t.label}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-base"
                style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.85)', fontWeight: 400 }}
              >
                {t.label}
                <i className={`ti ${t.icon}`} style={{ fontSize: 15, color: 'var(--purple-light)' }} aria-hidden="true" />
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
              ? 'A clear path from audit to real, sustained compliance — adjusted per organization, never one-size-fits-all.'
              : 'เส้นทางที่ชัดเจนจาก Audit สู่ Compliance ที่แท้จริงและยั่งยืน ปรับตามแต่ละองค์กร ไม่ใช่สูตรสำเร็จตายตัว'}
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
            {isEN ? 'Straight answers about how we handle PDPA compliance.' : 'คำตอบตรงไปตรงมาเกี่ยวกับวิธีที่เราดูแล PDPA Compliance'}
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
      whyImg="/images/services/pdpa-compliance/why1.jpg"
      whyImg2="/images/services/pdpa-compliance/why2.jpg"
      featureImg="/images/services/pdpa-compliance/feature.jpg"
      processImg="/images/services/pdpa-compliance/process.jpg"
    />
  )
}
