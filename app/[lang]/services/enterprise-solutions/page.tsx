import Link from 'next/link'
import ServiceLayout from '@/components/service/ServiceLayout'
import { type Lang } from '@/lib/i18n'

const BRAND_LOGOS: Record<string, { hex: string; path: string }> = {
  sap: { hex: '#0FAAFF', path: 'M0 6.064v11.872h12.13L24 6.064zm3.264 2.208h.005c.863.001 1.915.245 2.676.633l-.82 1.43c-.835-.404-1.255-.442-1.73-.467-.708-.038-1.064.215-1.069.488-.007.332.669.633 1.305.838.964.306 2.19.715 2.377 1.9L7.77 8.437h2.046l2.064 5.576-.007-5.575h2.37c2.257 0 3.318.764 3.318 2.519 0 1.575-1.09 2.514-2.936 2.514h-.763l-.01 2.094-3.588-.003-.25-.908c-.37.122-.787.189-1.23.189-.456 0-.885-.071-1.263-.2l-.358.919-2 .006.09-.462c-.029.025-.057.05-.087.074-.535.43-1.208.629-2.037.644l-.213.002a5.075 5.075 0 0 1-2.581-.675l.73-1.448c.79.467 1.286.572 1.956.558.347-.007.598-.07.761-.239a.557.557 0 0 0 .156-.369c.007-.376-.53-.553-1.185-.756-.531-.164-1.135-.389-1.606-.735-.559-.41-.825-.924-.812-1.65a1.99 1.99 0 0 1 .566-1.377c.519-.537 1.357-.863 2.363-.863zm10.597 1.67v1.904h.521c.694 0 1.247-.23 1.248-.964 0-.709-.554-.94-1.248-.94zm-5.087.767l-.748 2.362c.223.085.481.133.757.133.268 0 .52-.047.742-.126l-.736-2.37z' },
  hubspot: { hex: '#FF7A59', path: 'M18.164 7.93V5.084a2.198 2.198 0 001.267-1.978v-.067A2.2 2.2 0 0017.238.845h-.067a2.2 2.2 0 00-2.193 2.193v.067a2.196 2.196 0 001.252 1.973l.013.006v2.852a6.22 6.22 0 00-2.969 1.31l.012-.01-7.828-6.095A2.497 2.497 0 104.3 4.656l-.012.006 7.697 5.991a6.176 6.176 0 00-1.038 3.446c0 1.343.425 2.588 1.147 3.607l-.013-.02-2.342 2.343a1.968 1.968 0 00-.58-.095h-.002a2.033 2.033 0 102.033 2.033 1.978 1.978 0 00-.1-.595l.005.014 2.317-2.317a6.247 6.247 0 104.782-11.134l-.036-.005zm-.964 9.378a3.206 3.206 0 113.215-3.207v.002a3.206 3.206 0 01-3.207 3.207z' },
  odoo: { hex: '#714B67', path: 'M21.1002 15.7957c-1.6015 0-2.8997-1.2983-2.8997-2.8998s1.2983-2.8997 2.8997-2.8997c1.6015 0 2.8998 1.2982 2.8998 2.8997 0 1.5999-1.2979 2.8998-2.8998 2.8998zm0-1.2c.9388.0006 1.7003-.7601 1.7008-1.6989.0004-.9388-.7602-1.7003-1.699-1.7007h-.0018c-.9388.0004-1.6994.7619-1.699 1.7007.0005.9381.761 1.6985 1.699 1.699zm-6.0655 1.2c-1.6014 0-2.8997-1.2983-2.8997-2.8998s1.2983-2.8997 2.8997-2.8997c1.6015 0 2.8998 1.2982 2.8998 2.8997 0 1.5999-1.2999 2.8998-2.8998 2.8998zm0-1.2c.9389.0006 1.7003-.7601 1.7008-1.6989.0005-.9388-.7602-1.7003-1.699-1.7007h-.0018c-.9388.0004-1.6994.7619-1.699 1.7007.0005.9381.761 1.6985 1.699 1.699zM11.865 12.858c0 1.6199-1.2979 2.9378-2.8977 2.9378s-2.8998-1.314-2.8998-2.9358 1.1799-2.8597 2.8998-2.8597c.6359 0 1.2239.134 1.6998.484v-1.68a.6.6 0 0 1 1.2 0v4.0537h-.002zm-2.8977 1.7399c.9388.0005 1.7002-.7602 1.7007-1.699.0005-.9388-.7602-1.7003-1.699-1.7007h-.0017c-.9389.0004-1.6995.7619-1.699 1.7007.0004.9381.7608 1.6985 1.699 1.699zm-6.0675 1.1979C1.2983 15.7957 0 14.4974 0 12.8959s1.2983-2.8997 2.8998-2.8997 2.8997 1.2982 2.8997 2.8997c0 1.5999-1.2999 2.8998-2.8997 2.8998zm0-1.2c.9388.0006 1.7002-.7601 1.7007-1.699.0005-.9387-.7602-1.7002-1.699-1.7006h-.0017c-.9388.0004-1.6995.7619-1.699 1.7007.0004.9381.7608 1.6985 1.699 1.699z' },
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

  const badge    = isEN ? 'Enterprise / ERP · CRM · POS'  : 'Enterprise / ERP · CRM · POS'
  const title    = isEN ? 'Enterprise Systems'  : 'ระบบ Enterprise'
  const subtitle = isEN ? 'That Fit How You Work'    : 'ที่เข้ากับวิธีทำงานจริง'
  const heroDesc = isEN ? 'Implement, customize, and integrate ERP, CRM, and POS systems around how your business actually operates.'  : 'Implement, Customize และ Integrate ระบบ ERP, CRM และ POS ให้เข้ากับวิธีทำงานจริงของธุรกิจคุณ'
  const whyTitle = isEN ? 'Why off-the-shelf software fails without the right fit'    : 'ทำไม Software สำเร็จรูปถึงล้มเหลวถ้าไม่ Fit จริง'
  const whyDesc  = isEN ? 'Off-the-shelf enterprise software only succeeds when it is aligned with your actual workflows — forced adoption of a rigid system just creates workarounds and shadow spreadsheets.'  : 'Software Enterprise สำเร็จรูปจะสำเร็จได้ก็ต่อเมื่อสอดคล้องกับ Workflow จริงของธุรกิจ การบังคับใช้ระบบที่ตายตัวเกินไป มักจบด้วย Workaround และ Spreadsheet ลับๆ ที่พนักงานสร้างขึ้นมาเอง'
  const ctaTitle = isEN ? 'Ready for systems that fit your business?'    : 'พร้อมให้ระบบที่เข้ากับธุรกิจคุณจริงๆ ไหม?'
  const ctaDesc  = isEN ? 'Start with a free process mapping session. We will show you where systems and reality diverge.'   : 'เริ่มด้วยการทำ Process Mapping ฟรี เราจะชี้ให้เห็นว่าระบบกับความจริงต่างกันตรงไหน'
  const overviewText = isEN
    ? 'Off-the-shelf enterprise software succeeds when it is aligned with existing workflows, not the other way around. We implement and customize ERP, CRM, and POS platforms, integrating them with e-commerce, logistics, finance, and data systems while training your team for real adoption — and when standard packages hit genuine limitations, we build targeted extensions and APIs rather than forcing your business to bend around software that does not fit.'
    : 'Software Enterprise สำเร็จรูปจะสำเร็จได้เมื่อสอดคล้องกับ Workflow ที่มีอยู่ ไม่ใช่ให้ธุรกิจต้องปรับตามระบบ เรา Implement และ Customize Platform ERP, CRM และ POS พร้อม Integrate เข้ากับ E-commerce, Logistics, Finance และระบบข้อมูล พร้อม Training ทีมให้ใช้งานได้จริง และเมื่อ Package มาตรฐานมีข้อจำกัดจริง เราจะสร้าง Extension และ API เฉพาะจุด แทนที่จะบังคับให้ธุรกิจต้องปรับตามระบบที่ไม่เหมาะสม'

  const heroBullets = isEN ? [
      'ERP implementation covering finance, supply chain, operations',
      'CRM platforms connected to real communication channels',
      'POS and commerce integration across stores and online',
      'Custom extensions when standard packages fall short',
      'Team training built into every rollout, not an afterthought',
    ] : [
      'Implement ERP ครอบคลุม Finance, Supply Chain และ Operations',
      'CRM Platform ที่เชื่อมกับช่องทางสื่อสารจริง',
      'Integrate POS และ Commerce ทั้งหน้าร้านและออนไลน์',
      'สร้าง Extension เฉพาะเมื่อ Package มาตรฐานไม่เพียงพอ',
      'Training ทีมงานอยู่ในทุกขั้นตอน ไม่ใช่มาทีหลัง',
    ]
  const whyPoints   = isEN ? [
      'Manual data re-entry between disconnected systems is one of the largest hidden operational costs.',
      'A CRM that does not match your sales process gets abandoned within months.',
      'Connected POS and inventory data prevents the stockouts and overselling that cost real revenue.',
      'Custom extensions cost far less than forcing a business to redesign itself around rigid software.',
      'Training that happens during rollout, not after, is what actually drives adoption.',
    ] : [
      'การคีย์ข้อมูลซ้ำระหว่างระบบที่ไม่เชื่อมกัน คือต้นทุนซ่อนเร้นด้าน Operation ที่ใหญ่ที่สุดอย่างหนึ่ง',
      'CRM ที่ไม่เข้ากับกระบวนการขายจริง มักถูกทิ้งภายในไม่กี่เดือน',
      'ข้อมูล POS และ Inventory ที่เชื่อมกัน ป้องกันปัญหาสินค้าหมดและขายเกิน Stock ที่ทำให้เสียรายได้จริง',
      'Extension เฉพาะจุดมีต้นทุนต่ำกว่าการบังคับให้ธุรกิจปรับตัวตาม Software ที่ตายตัวมาก',
      'Training ที่เกิดขึ้นระหว่าง Rollout ไม่ใช่หลังจากนั้น คือสิ่งที่ทำให้เกิดการใช้งานจริง',
    ]
  const outcomes    = isEN ? [
      {stat: '60%', label: 'Less Manual Entry', desc: 'After system integration'},
      {stat: '100%', label: 'Data Visibility', desc: 'Across sales, inventory, finance'},
      {stat: '3x', label: 'Faster Reporting', desc: 'With connected data sources'},
      {stat: '90%+', label: 'Team Adoption Rate', desc: 'With rollout-embedded training'}
    ] : [
      {stat: '60%', label: 'ลด Manual Entry', desc: 'หลังทำ System Integration'},
      {stat: '100%', label: 'Data Visibility', desc: 'ครอบคลุม Sales, Inventory, Finance'},
      {stat: '3x', label: 'Reporting เร็วขึ้น', desc: 'ด้วยแหล่งข้อมูลที่เชื่อมกัน'},
      {stat: '90%+', label: 'อัตราการใช้งานจริง', desc: 'ด้วย Training ที่ฝังใน Rollout'}
    ]
  const features    = isEN ? [
      {icon: 'ti-building-warehouse', title: 'ERP Implementation', desc: 'Configure and deploy ERP modules addressing finance, supply chain, and operations needs.'},
      {icon: 'ti-users-group', title: 'CRM Platforms', desc: 'Sales, service, and marketing systems connected to customer communication channels.'},
      {icon: 'ti-shopping-cart', title: 'POS & Commerce Integration', desc: 'Link stores, inventory, payments, and online channels into unified commerce infrastructure.'},
      {icon: 'ti-puzzle', title: 'Customization & Extensions', desc: 'Custom solutions filling gaps where standard packages prove insufficient.'},
      {icon: 'ti-transfer', title: 'System Integration', desc: 'Connect finance, operations, and sales channels into one coherent data flow.'},
      {icon: 'ti-school', title: 'Team Training', desc: 'Building capability for sustained adoption, not just a handover document.'}
    ] : [
      {icon: 'ti-building-warehouse', title: 'ERP Implementation', desc: 'Configure และ Deploy โมดูล ERP ครอบคลุม Finance, Supply Chain และ Operations'},
      {icon: 'ti-users-group', title: 'CRM Platforms', desc: 'ระบบ Sales, Service และ Marketing ที่เชื่อมกับช่องทางสื่อสารลูกค้าจริง'},
      {icon: 'ti-shopping-cart', title: 'POS & Commerce Integration', desc: 'เชื่อมหน้าร้าน, Inventory, Payment และช่องทางออนไลน์เข้าเป็น Commerce Infrastructure เดียว'},
      {icon: 'ti-puzzle', title: 'Customization & Extensions', desc: 'สร้าง Solution เฉพาะเพื่อเติมเต็มจุดที่ Package มาตรฐานไม่ครอบคลุม'},
      {icon: 'ti-transfer', title: 'System Integration', desc: 'เชื่อม Finance, Operations และช่องทาง Sales เข้าเป็น Data Flow เดียวที่สอดคล้องกัน'},
      {icon: 'ti-school', title: 'Team Training', desc: 'สร้างความสามารถให้ทีมใช้งานได้จริงต่อเนื่อง ไม่ใช่แค่เอกสารส่งมอบ'}
    ]
  const steps       = isEN ? [
      {no: '01', title: 'Requirements', desc: 'Process mapping and success criteria definition.'},
      {no: '02', title: 'Selection', desc: 'Fit assessment and platform evaluation.'},
      {no: '03', title: 'Implement', desc: 'Configuration, migration, and deployment.'},
      {no: '04', title: 'Customize', desc: 'Extensions addressing actual workflows.'},
      {no: '05', title: 'Integrate', desc: 'Connecting finance, operations, and sales channels.'},
      {no: '06', title: 'Train', desc: 'Building team capability for sustained adoption.'}
    ] : [
      {no: '01', title: 'Requirements', desc: 'ทำ Process Mapping และกำหนดเกณฑ์ความสำเร็จ'},
      {no: '02', title: 'Selection', desc: 'ประเมิน Fit และเปรียบเทียบ Platform'},
      {no: '03', title: 'Implement', desc: 'Configuration, Migration และ Deployment'},
      {no: '04', title: 'Customize', desc: 'สร้าง Extension ตอบโจทย์ Workflow จริง'},
      {no: '05', title: 'Integrate', desc: 'เชื่อม Finance, Operations และช่องทาง Sales'},
      {no: '06', title: 'Train', desc: 'สร้างความสามารถให้ทีมใช้งานได้ต่อเนื่อง'}
    ]
  const caseStudies = isEN ? [
      {tag: 'Manufacturing · Bangkok', title: 'SAP Rollout Across 4 Plants', desc: 'Finance, supply chain, and production modules unified into one system.', result: 'Manual entry down 60%'},
      {tag: 'Retail · Nationwide', title: 'CRM + POS Unified for 200 Stores', desc: 'Real-time inventory and customer data across every location.', result: 'Stockouts down 45%'},
      {tag: 'Logistics · Bangkok', title: 'Custom ERP Extension for Fleet Ops', desc: 'Standard ERP extended with fleet-specific scheduling and tracking.', result: 'Dispatch time cut in half'}
    ] : [
      {tag: 'Manufacturing · กรุงเทพฯ', title: 'Rollout SAP ครอบคลุม 4 โรงงาน', desc: 'รวมโมดูล Finance, Supply Chain และ Production เข้าเป็นระบบเดียว', result: 'Manual Entry ลดลง 60%'},
      {tag: 'Retail · ทั่วประเทศ', title: 'รวม CRM + POS สำหรับ 200 สาขา', desc: 'ข้อมูล Inventory และลูกค้าแบบ Real-time ทุกสาขา', result: 'สินค้าหมด Stock ลดลง 45%'},
      {tag: 'Logistics · กรุงเทพฯ', title: 'Extension ERP เฉพาะสำหรับ Fleet Ops', desc: 'ต่อยอด ERP มาตรฐานด้วย Scheduling และ Tracking เฉพาะ Fleet', result: 'เวลา Dispatch ลดลงครึ่งหนึ่ง'}
    ]
  const faqs        = isEN ? [
      {q: 'Which ERP, CRM, and POS platforms do you work with?', a: 'SAP, Salesforce, Microsoft Dynamics, HubSpot, Odoo, and Oracle, plus custom integrations between them.'},
      {q: 'Do you customize off-the-shelf software?', a: 'Yes. We customize platforms to match actual business operations and build integrations for clean data exchange.'},
      {q: 'Can you connect ERP or CRM to customer-facing products?', a: 'Yes. One team builds both enterprise systems and customer-facing software for integrated delivery.'},
      {q: 'Should we buy off-the-shelf or build custom?', a: 'Off-the-shelf for commodity workflows, custom where your process is genuinely a competitive advantage.'}
    ] : [
      {q: 'รองรับ Platform ERP, CRM, POS ไหนบ้าง?', a: 'SAP, Salesforce, Microsoft Dynamics, HubSpot, Odoo และ Oracle พร้อม Custom Integration ระหว่างระบบเหล่านี้'},
      {q: 'Customize Software สำเร็จรูปได้ไหม?', a: 'ได้ครับ เรา Customize Platform ให้เข้ากับการดำเนินงานจริง และสร้าง Integration เพื่อแลกเปลี่ยนข้อมูลอย่างสะอาด'},
      {q: 'เชื่อม ERP หรือ CRM กับ Product ที่ลูกค้าใช้ได้ไหม?', a: 'ได้ครับ ทีมเดียวสร้างทั้งระบบ Enterprise และ Software สำหรับลูกค้า เพื่อการส่งมอบที่เชื่อมโยงกัน'},
      {q: 'ควรซื้อสำเร็จรูปหรือสร้าง Custom?', a: 'สำเร็จรูปสำหรับ Workflow ทั่วไป และ Custom สำหรับส่วนที่เป็นความได้เปรียบทางธุรกิจจริงๆ'}
    ]
  const related     = isEN ? [
      {label: 'E-Commerce Development', href: '/services/ecommerce'},
      {label: 'Digital Transformation', href: '/services/digital-transformation'},
      {label: 'Data Analytics & Engineering', href: '/services/data-analytics'},
      {label: 'Application Modernization', href: '/services/application-modernization'}
    ] : [
      {label: 'E-Commerce Development', href: '/services/ecommerce'},
      {label: 'Digital Transformation', href: '/services/digital-transformation'},
      {label: 'Data & Analytics', href: '/services/data-analytics'},
      {label: 'ปรับปรุงระบบเดิม', href: '/services/application-modernization'}
    ]

  const entLines = [
    { n: 1, jsx: <><span style={{ color: '#82AAFF' }}>{'>'}</span>&nbsp;<span style={{ color: '#C792EA' }}>sync --erp-crm --realtime</span></> },
    { n: 2, jsx: <><span style={{ color: 'var(--lime)' }}>✓</span>&nbsp;{isEN ? '4 systems connected · 0 conflicts' : 'เชื่อม 4 ระบบ · ไม่มี Conflict'}</> },
    { n: 3, jsx: <>&nbsp;</> },
    { n: 4, jsx: <><span style={{ color: '#82AAFF' }}>{'>'}</span>&nbsp;<span style={{ color: '#C792EA' }}>migrate --inventory --stores=200</span></> },
    { n: 5, jsx: <><span style={{ color: 'var(--lime)' }}>✓</span>&nbsp;{isEN ? 'Inventory synced across all stores' : 'Sync Inventory ครบทุกสาขา'}</> },
    { n: 6, jsx: <>&nbsp;</> },
    { n: 7, jsx: <><span style={{ color: '#82AAFF' }}>{'>'}</span>&nbsp;<span style={{ color: '#C792EA' }}>{isEN ? 'training --rollout finance-team' : 'training --rollout finance-team'}</span></> },
    { n: 8, jsx: <><span style={{ color: 'var(--lime)' }}>✓</span>&nbsp;{isEN ? '92% adoption in week 1' : 'อัตราใช้งาน 92% สัปดาห์แรก'}</> },
  ]

  const heroSlot = (
    <div className="relative pb-10 pr-6">
      <div className="rounded-2xl overflow-hidden" style={{ background: '#141329', border: '1px solid rgba(123,110,246,0.35)' }}>
        <div className="flex items-center gap-2 px-5 py-3.5" style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
          <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#F87171' }} />
          <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#FBBF24' }} />
          <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#34D399' }} />
          <span className="ml-3 text-xs" style={{ color: 'rgba(255,255,255,0.85)', fontFamily: 'monospace' }}>integration.log</span>
        </div>
        <div className="px-6 py-6" style={{ fontFamily: 'monospace', fontSize: '0.9rem', lineHeight: 1.9, color: 'rgba(255,255,255,0.85)' }}>
          {entLines.map((l) => (
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
          <span className="text-[10px] tracking-widest uppercase" style={{ color: 'rgba(255,255,255,0.85)' }}>{isEN ? 'System Visibility' : 'ทัศนวิสัยของระบบ'}</span>
          <span className="w-2 h-2 rounded-full" style={{ background: 'var(--lime)' }} />
        </div>
        <div className="flex items-center gap-3 mb-3">
          <div className="w-12 h-12 rounded-lg flex items-center justify-center shrink-0" style={{ background: 'linear-gradient(135deg,var(--purple),var(--purple-light))' }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M3 3h7v7H3zM14 3h7v7h-7zM3 14h7v7H3zM14 14h7v7h-7z" stroke="#fff" strokeWidth="1.6" strokeLinejoin="round" /></svg>
          </div>
          <div className="flex-1 space-y-1.5">
            <div className="h-1.5 rounded-full" style={{ background: 'rgba(255,255,255,0.15)', width: '90%' }} />
            <div className="h-1.5 rounded-full" style={{ background: 'rgba(255,255,255,0.15)', width: '68%' }} />
            <div className="h-3.5 rounded-full" style={{ background: 'linear-gradient(90deg,var(--purple),var(--lime))', width: '100%' }} />
          </div>
        </div>
        <div className="flex items-center gap-1.5 text-xs" style={{ color: 'var(--lime)' }}>
          <i className="ti ti-circle-check" style={{ fontSize: 13 }} aria-hidden="true" />
          {isEN ? '100% data visibility' : 'Data Visibility 100%'}
        </div>
      </div>
    </div>
  )

  const capabilities = isEN ? [
    { icon: 'ti-building-warehouse', title: 'ERP Implementation', desc: 'Configure and deploy ERP modules addressing finance, supply chain, and operations needs.' },
    { icon: 'ti-users-group', title: 'CRM Platforms', desc: 'Sales, service, and marketing systems connected to customer communication channels.' },
    { icon: 'ti-shopping-cart', title: 'POS & Commerce Integration', desc: 'Link stores, inventory, payments, and online channels into unified commerce infrastructure.' },
    { icon: 'ti-puzzle', title: 'Customization & Extensions', desc: 'Custom solutions filling gaps where standard packages prove insufficient.' },
  ] : [
    { icon: 'ti-building-warehouse', title: 'ERP Implementation', desc: 'Configure และ Deploy โมดูล ERP ครอบคลุม Finance, Supply Chain และ Operations' },
    { icon: 'ti-users-group', title: 'CRM Platforms', desc: 'ระบบ Sales, Service และ Marketing ที่เชื่อมกับช่องทางสื่อสารลูกค้าจริง' },
    { icon: 'ti-shopping-cart', title: 'POS & Commerce Integration', desc: 'เชื่อมหน้าร้าน, Inventory, Payment และช่องทางออนไลน์เข้าเป็น Commerce Infrastructure เดียว' },
    { icon: 'ti-puzzle', title: 'Customization & Extensions', desc: 'สร้าง Solution เฉพาะเพื่อเติมเต็มจุดที่ Package มาตรฐานไม่ครอบคลุม' },
  ]

  const techStack = [
    { label: 'SAP', svg: 'sap' },
    { label: 'Salesforce', icon: 'ti-cloud' },
    { label: 'Microsoft Dynamics', icon: 'ti-chart-infographic' },
    { label: 'HubSpot', svg: 'hubspot' },
    { label: 'Odoo', svg: 'odoo' },
    { label: 'Oracle', icon: 'ti-database' },
  ] as { label: string; icon?: string; svg?: string }[]

  const approachSteps = isEN ? [
    { no: '01', title: 'Requirements', desc: 'Process mapping, success criteria' },
    { no: '02', title: 'Selection', desc: 'Fit assessment, platform evaluation' },
    { no: '03', title: 'Implement', desc: 'Configuration, migration, deployment' },
    { no: '04', title: 'Customize', desc: 'Extensions for real workflows' },
    { no: '05', title: 'Integrate', desc: 'Finance, operations, sales channels' },
    { no: '06', title: 'Train', desc: 'Capability for sustained adoption' },
  ] : [
    { no: '01', title: 'Requirements', desc: 'Process Mapping และเกณฑ์ความสำเร็จ' },
    { no: '02', title: 'Selection', desc: 'ประเมิน Fit และเปรียบเทียบ Platform' },
    { no: '03', title: 'Implement', desc: 'Configuration, Migration, Deployment' },
    { no: '04', title: 'Customize', desc: 'Extension ตอบโจทย์ Workflow จริง' },
    { no: '05', title: 'Integrate', desc: 'Finance, Operations, ช่องทาง Sales' },
    { no: '06', title: 'Train', desc: 'สร้างความสามารถใช้งานต่อเนื่อง' },
  ]

  const darkFaqs = isEN ? [
    { q: 'Which ERP, CRM, and POS platforms does Haliviq work with?', a: 'SAP, Salesforce, Microsoft Dynamics, HubSpot, Odoo, and Oracle, plus custom integrations between them and the rest of your systems. We recommend the platform that fits your operations and budget, not the one with the biggest name.' },
    { q: 'Does Haliviq customize off-the-shelf enterprise software?', a: 'Yes. We customize platforms to match how your business actually operates and build integrations that enable clean data exchange with your other systems — rather than making you redesign your processes around a rigid, unmodified package.' },
    { q: 'Can you connect our ERP or CRM to customer-facing products?', a: 'Yes. Because one team builds both enterprise systems and customer-facing software, delivery is integrated from the start rather than requiring coordination between separate vendors who each blame the other when something breaks.' },
    { q: 'Should we buy off-the-shelf software or build something custom?', a: 'Off-the-shelf for commodity workflows — accounting, standard HR processes, generic sales pipelines. Custom where your process is genuinely a competitive advantage. Most businesses need a mix, not an all-or-nothing decision.' },
    { q: 'How long does a typical ERP or CRM implementation take?', a: 'A focused CRM rollout for one department typically takes 6-10 weeks. A full ERP implementation across finance, supply chain, and operations for a mid-size business usually runs 4-8 months, phased by module so the business sees value before the whole system goes live.' },
    { q: 'How much does an enterprise system implementation cost?', a: 'Cost depends heavily on the platform license itself (which we do not mark up), the number of modules in scope, and how much customization and data migration is needed. Implementation services typically start in the mid five figures (THB) for a focused CRM rollout, with full ERP programs quoted after a requirements and process-mapping phase.' },
    { q: 'What happens to our existing data during migration?', a: 'We map your existing data structures first, run migrations in a staging environment with validation against the source system, and keep the legacy system available in read-only mode until the new system is proven in production — so nothing gets lost in transition.' },
    { q: 'How do you make sure the team actually uses the new system?', a: 'Training is built into the rollout itself, not scheduled as a single session at the end. We train department by department as each module goes live, and we design the configuration around how people already work rather than forcing them to relearn their job to match generic software defaults.' },
  ] : [
    { q: 'Haliviq รองรับ Platform ERP, CRM, POS ไหนบ้าง?', a: 'SAP, Salesforce, Microsoft Dynamics, HubSpot, Odoo และ Oracle พร้อม Custom Integration ระหว่างระบบเหล่านี้กับระบบอื่นของคุณ เราแนะนำ Platform ที่เหมาะกับการดำเนินงานและงบประมาณของคุณ ไม่ใช่ตัวที่มีชื่อใหญ่ที่สุด' },
    { q: 'Haliviq Customize Software Enterprise สำเร็จรูปได้ไหม?', a: 'ได้ครับ เรา Customize Platform ให้เข้ากับวิธีดำเนินธุรกิจจริง และสร้าง Integration ที่แลกเปลี่ยนข้อมูลได้อย่างสะอาดกับระบบอื่นของคุณ แทนที่จะให้คุณต้องปรับ Process ตาม Package ที่ตายตัวและไม่ได้ปรับแต่ง' },
    { q: 'เชื่อม ERP หรือ CRM กับ Product ที่ลูกค้าใช้ได้ไหม?', a: 'ได้ครับ เพราะทีมเดียวสร้างทั้งระบบ Enterprise และ Software ฝั่งลูกค้า การส่งมอบจึงเชื่อมโยงกันตั้งแต่ต้น แทนที่จะต้องประสานงานระหว่าง Vendor แยกที่ต่างฝ่ายต่างโทษกันเมื่อมีปัญหา' },
    { q: 'ควรซื้อ Software สำเร็จรูปหรือสร้าง Custom?', a: 'สำเร็จรูปสำหรับ Workflow ทั่วไป เช่น บัญชี, HR มาตรฐาน, Sales Pipeline ทั่วไป ส่วน Custom สำหรับจุดที่ Process ของคุณเป็นความได้เปรียบทางธุรกิจจริงๆ ธุรกิจส่วนใหญ่ต้องการทั้งสองแบบผสมกัน ไม่ใช่การเลือกแบบขาวดำ' },
    { q: 'Implement ERP หรือ CRM ทั่วไปใช้เวลานานแค่ไหน?', a: 'Rollout CRM แบบเจาะจงสำหรับหนึ่งแผนก มักใช้เวลา 6-10 สัปดาห์ ส่วน Implement ERP เต็มรูปแบบครอบคลุม Finance, Supply Chain และ Operations สำหรับธุรกิจขนาดกลาง มักใช้เวลา 4-8 เดือน แบ่งเป็น Phase ตามโมดูล เพื่อให้ธุรกิจเห็นคุณค่าก่อนที่ระบบทั้งหมดจะ Live' },
    { q: 'Implement ระบบ Enterprise มีค่าใช้จ่ายเท่าไหร่?', a: 'ต้นทุนขึ้นอยู่กับค่า License ของ Platform เอง (ซึ่งเราไม่บวกราคาเพิ่ม), จำนวนโมดูลในขอบเขต และปริมาณ Customization กับ Data Migration ที่ต้องทำ บริการ Implementation มักเริ่มต้นที่หลักแสนต้นๆ (บาท) สำหรับ CRM แบบเจาะจง ส่วนโปรแกรม ERP เต็มรูปแบบจะเสนอราคาหลังขั้นตอน Requirements และ Process Mapping' },
    { q: 'ข้อมูลเดิมของเราจะเป็นอย่างไรระหว่าง Migrate?', a: 'เราทำแผนที่โครงสร้างข้อมูลเดิมก่อน รัน Migration ใน Staging Environment พร้อมตรวจสอบเทียบกับระบบต้นทาง และเก็บระบบเดิมไว้แบบ Read-only จนกว่าระบบใหม่จะพิสูจน์ตัวเองบน Production เพื่อไม่ให้มีอะไรสูญหายระหว่างการเปลี่ยนผ่าน' },
    { q: 'มั่นใจได้อย่างไรว่าทีมจะใช้ระบบใหม่จริง?', a: 'Training ถูกฝังอยู่ใน Rollout เอง ไม่ใช่การนัด Session เดียวตอนท้าย เรา Train ทีละแผนกตามที่แต่ละโมดูล Live และออกแบบการ Configure ตามวิธีทำงานจริงของคน แทนที่จะบังคับให้พวกเขาเรียนรู้งานใหม่เพื่อให้เข้ากับค่า Default ทั่วไปของ Software' },
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
            {isEN ? 'Platforms We Use' : 'Platform ที่ใช้'}
          </p>
          <h2 className="t-display mb-4" style={{ color: '#fff', fontSize: 'clamp(2.25rem,4.5vw,3.5rem)' }}>
            {isEN ? 'Technologies We Use' : 'เทคโนโลยีที่เราใช้งาน'}
          </h2>
          <p className="mb-12" style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1.2rem', fontWeight: 400, maxWidth: 640 }}>
            {isEN
              ? 'Proven enterprise platforms we apply where they fit — chosen for your operations, not the biggest name.'
              : 'Platform Enterprise ที่พิสูจน์แล้ว เลือกใช้ตามการดำเนินงานจริง ไม่ใช่ตามชื่อที่ใหญ่ที่สุด'}
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
              ? 'A clear path from requirements to real adoption — adjusted per business, never one-size-fits-all.'
              : 'เส้นทางที่ชัดเจนจาก Requirements สู่การใช้งานจริง ปรับตามแต่ละธุรกิจ ไม่ใช่สูตรสำเร็จตายตัว'}
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
            {isEN ? 'Straight answers about how we build enterprise systems.' : 'คำตอบตรงไปตรงมาเกี่ยวกับวิธีที่เราสร้างระบบ Enterprise'}
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
      whyImg="/images/services/enterprise-solutions/why1.jpg"
      whyImg2="/images/services/enterprise-solutions/why2.jpg"
      featureImg="/images/services/enterprise-solutions/feature.jpg"
      processImg="/images/services/enterprise-solutions/process.jpg"
    />
  )
}
