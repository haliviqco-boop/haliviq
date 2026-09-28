import ServiceLayout from '@/components/service/ServiceLayout'
import { type Lang } from '@/lib/i18n'

export async function generateStaticParams() {
  return [{ lang: 'th' }, { lang: 'en' }]
}

export default function Page({ params }: { params: { lang: Lang } }) {
  const isEN = params.lang === 'en'

  const badge    = isEN ? 'Enterprise Systems / ERP & CRM'  : 'Enterprise Systems / ERP & CRM'
  const title    = isEN ? 'Manage Your Business'  : 'บริหารธุรกิจด้วย'
  const subtitle = isEN ? 'With Intelligent Systems'    : 'ระบบอัจฉริยะ'
  const heroDesc = isEN ? 'Spreadsheets and siloed tools are the silent killers of growth. Haliviq implements and customises ERP and CRM systems that give your entire organisation a single source of truth.'  : 'Spreadsheet และเครื่องมือที่แยกกันอยู่คือฆาตกรเงียบของการเติบโต Haliviq ติดตั้งและ Customize ระบบ ERP และ CRM ที่ให้ทั้งองค์กรมี Single Source of Truth'
  const whyTitle = isEN ? 'Why disconnected systems limit your potential'    : 'ทำไมระบบที่แยกกันถึงจำกัดศักยภาพของคุณ'
  const whyDesc  = isEN ? 'When Finance, Sales, Operations, and HR each have their own tools and spreadsheets, the result is duplicate data, reconciliation nightmares, and decisions made on information that is always slightly out of date.'  : 'เมื่อ Finance, Sales, Operations และ HR ต่างมีเครื่องมือและ Spreadsheet ของตัวเอง ผลคือข้อมูลซ้ำซ้อน ปัญหาการกระทบยอด และการตัดสินใจบนข้อมูลที่ล้าสมัย'
  const ctaTitle = isEN ? 'Ready to unify your business systems?'    : 'พร้อม Unify ระบบธุรกิจของคุณไหม?'
  const ctaDesc  = isEN ? 'Start with a free Systems Audit. We will map your current tools and design the right integration.'   : 'เริ่มด้วย Systems Audit ฟรี เราจะ Map เครื่องมือปัจจุบันและออกแบบ Integration ที่เหมาะสม'

  const heroBullets = isEN ? [
      'ERP and CRM needs assessment and vendor selection',
      'Custom configuration and module development',
      'Data migration from legacy systems with full integrity',
      'Role-based access, workflows, and approval automation',
      'Training, go-live support, and ongoing system administration',
    ] : [
      'ประเมิน ERP/CRM และเลือก Vendor ที่เหมาะสม',
      'Customize Configuration และพัฒนา Module เพิ่มเติม',
      'Migrate ข้อมูลจาก Legacy System อย่างครบถ้วน',
      'Role-based Access, Workflow และ Approval Automation',
      'Training, Go-live Support และ System Administration ต่อเนื่อง',
    ]
  const whyPoints   = isEN ? [
      'A unified ERP eliminates an average 3.5 hours per employee per week spent reconciling data',
      'Real-time inventory reduces stock-outs by 40% and overstock by 30%',
      'CRM automation increases sales team productivity by 29% by eliminating manual data entry',
      'Automated approval workflows cut processing time by 70%',
      'A single customer record across all teams creates consistent, personalised experiences',
    ] : [
      'ERP ที่รวมเป็นระบบเดียวกำจัดเวลาเฉลี่ย 3.5 ชั่วโมง/พนักงาน/สัปดาห์ที่เสียไปกับการกระทบยอด',
      'Real-time Inventory ลด Stock-out 40% และ Overstock 30%',
      'CRM Automation เพิ่ม Productivity ทีม Sales 29% โดยลด Manual Data Entry',
      'Automated Approval Workflow ลด Processing Time 70%',
      'Customer Record เดียวทั่วทุกทีมสร้างประสบการณ์ที่ Consistent และ Personalized',
    ]
  const outcomes    = isEN ? [
      {stat: '3.5h', label: 'Saved Per Employee Per Week', desc: 'From eliminated reconciliation'},
      {stat: '40%', label: 'Fewer Stock-Outs', desc: 'With real-time inventory'},
      {stat: '29%', label: 'Sales Productivity Gain', desc: 'With CRM automation'},
      {stat: '70%', label: 'Faster Approvals', desc: 'Automated workflows'}
    ] : [
      {stat: '3.5h', label: 'ประหยัดต่อคนต่อสัปดาห์', desc: 'จากการกำจัด Reconciliation'},
      {stat: '40%', label: 'Stock-out ลดลง', desc: 'ด้วย Real-time Inventory'},
      {stat: '29%', label: 'Sales Productivity เพิ่ม', desc: 'ด้วย CRM Automation'},
      {stat: '70%', label: 'Approval เร็วขึ้น', desc: 'ด้วย Automated Workflow'}
    ]
  const features    = isEN ? [
      {icon: 'ti-building-factory', title: 'ERP Implementation', desc: 'Install and configure ERP systems like SAP, Oracle, Odoo, or Microsoft Dynamics to your requirements.'},
      {icon: 'ti-users', title: 'CRM Setup & Customization', desc: 'Set up Salesforce, HubSpot, or Zoho CRM with custom fields, workflows, and reports.'},
      {icon: 'ti-arrows-exchange', title: 'System Integration', desc: 'Connect ERP/CRM with other systems — e-commerce, accounting, HR, and logistics.'},
      {icon: 'ti-database-import', title: 'Data Migration', desc: 'Migrate data from legacy systems completely, with validation and rollback plans.'},
      {icon: 'ti-settings-automation', title: 'Workflow Automation', desc: 'Automate approvals, notifications, and task assignments to reduce manual work across departments.'},
      {icon: 'ti-school', title: 'Training & Change Management', desc: 'Train users at all levels and manage change to ensure high adoption.'}
    ] : [
      {icon: 'ti-building-factory', title: 'ERP Implementation', desc: 'ติดตั้งและ Configure ERP เช่น SAP, Oracle, Odoo หรือ Microsoft Dynamics ตามความต้องการ'},
      {icon: 'ti-users', title: 'CRM Setup & Customization', desc: 'Setup Salesforce, HubSpot หรือ Zoho CRM พร้อม Custom Field, Workflow และ Report'},
      {icon: 'ti-arrows-exchange', title: 'System Integration', desc: 'เชื่อมต่อ ERP/CRM กับระบบอื่นๆ เช่น E-commerce, Accounting, HR และ Logistics'},
      {icon: 'ti-database-import', title: 'Data Migration', desc: 'Migrate ข้อมูลจาก Legacy System อย่างครบถ้วน มี Validation และ Rollback Plan'},
      {icon: 'ti-settings-automation', title: 'Workflow Automation', desc: 'Automate Approval, Notification และ Task Assignment ลด Manual Work ทุก Department'},
      {icon: 'ti-school', title: 'Training & Change Management', desc: 'ฝึกอบรม User ทุกระดับและบริหาร Change เพื่อให้ Adoption สูง'}
    ]
  const steps       = isEN ? [
      {no: '01', title: 'Current State Assessment', desc: 'Assess current processes, data, and pain points before selecting a solution.'},
      {no: '02', title: 'Solution Design', desc: 'Design architecture, integration, and necessary customisations.'},
      {no: '03', title: 'Configuration & Development', desc: 'Configure the system and develop custom modules and integrations.'},
      {no: '04', title: 'Data Migration & Testing', desc: 'Migrate data, test every scenario, and conduct UAT with key users.'},
      {no: '05', title: 'Go-live & Support', desc: 'Launch in phases, monitor closely, and support the team until confident.'}
    ] : [
      {no: '01', title: 'Current State Assessment', desc: 'ประเมิน Process, ข้อมูล และ Pain Point ปัจจุบันก่อนเลือก Solution'},
      {no: '02', title: 'Solution Design', desc: 'ออกแบบ Architecture, Integration และ Customization ที่จำเป็น'},
      {no: '03', title: 'Configuration & Development', desc: 'Configure ระบบ พัฒนา Custom Module และ Integration'},
      {no: '04', title: 'Data Migration & Testing', desc: 'Migrate ข้อมูล Test ทุก Scenario และ UAT กับ Key User'},
      {no: '05', title: 'Go-live & Support', desc: 'Launch แบบ Phased, Monitor ใกล้ชิด และ Support ทีมจนมั่นใจ'}
    ]
  const caseStudies = isEN ? [
      {tag: 'Manufacturing · Nationwide', title: 'ERP Connecting 5 Factories in Real-time', desc: 'Odoo ERP unifying inventory, production, finance, and HR in one system.', result: 'OpEx down 28%'},
      {tag: 'Retail · Nationwide', title: 'CRM Boosting Sales Team Productivity 29%', desc: 'Salesforce customised to the sales process with dashboards the team actually uses.', result: 'Revenue up 18%'},
      {tag: 'Healthcare · Bangkok', title: 'End-to-end Hospital Management System', desc: 'ERP connecting HIS, pharmacy, finance, and HR to reduce manual work hospital-wide.', result: 'Manual Work down 60%'}
    ] : [
      {tag: 'Manufacturing · ทั่วประเทศ', title: 'ERP เชื่อม 5 โรงงาน Real-time', desc: 'Odoo ERP รวม Inventory, Production, Finance และ HR ในระบบเดียว', result: 'OpEx ลด 28%'},
      {tag: 'Retail · ทั่วประเทศ', title: 'CRM เพิ่ม Sales Team Productivity 29%', desc: 'Salesforce ที่ Custom ตาม Sales Process พร้อม Dashboard ที่ใช้งานได้จริง', result: 'Revenue เพิ่ม 18%'},
      {tag: 'Healthcare · กรุงเทพฯ', title: 'Hospital Management System ครบวงจร', desc: 'ERP เชื่อม HIS, Pharmacy, Finance และ HR ลด Manual Work ทั่วโรงพยาบาล', result: 'Manual Work ลด 60%'}
    ]
  const faqs        = isEN ? [
      {q: 'Which ERP is best?', a: 'There is no single answer. SAP suits large enterprises, Odoo suits flexible SMEs, Microsoft Dynamics suits Microsoft ecosystems. We assess based on your context.'},
      {q: 'How long does implementation take?', a: 'A basic ERP takes 3-6 months; a full enterprise implementation can take 12-18 months depending on scope and complexity.'},
      {q: 'Can you migrate our old data?', a: 'Yes. We design migration scripts, validate accuracy, and always have a rollback plan ready.'},
      {q: 'Will staff adopt the new system?', a: 'Change management is critical. We run training, super user programs, and hypercare in the early period to maximise adoption.'}
    ] : [
      {q: 'ERP ตัวไหนดีที่สุด?', a: 'ไม่มีคำตอบเดียวครับ SAP เหมาะกับ Enterprise ขนาดใหญ่ Odoo เหมาะกับ SME ที่ต้องการ Flexible Microsoft Dynamics เหมาะกับ Microsoft Ecosystem เราประเมินให้ตาม Context'},
      {q: 'ใช้เวลา Implement นานแค่ไหน?', a: 'ERP พื้นฐานใช้ 3-6 เดือน Full Enterprise Implementation อาจถึง 12-18 เดือน ขึ้นอยู่กับขอบเขตและความซับซ้อน'},
      {q: 'ข้อมูลเก่า Migrate ได้ไหม?', a: 'ได้ครับ เราออกแบบ Migration Script, Validate ความถูกต้อง และมี Rollback Plan พร้อมเสมอ'},
      {q: 'พนักงานจะยอมรับระบบใหม่ไหม?', a: 'Change Management สำคัญมากครับ เราทำ Training, Super User Program และ Hypercare ช่วงแรกเพื่อให้ Adoption สูง'}
    ]
  const related     = isEN ? [
      {label: 'Automation', href: '/services/automation'},
      {label: 'Data & Analytics', href: '/services/data-analytics'},
      {label: 'Digital Transformation', href: '/services/digital-transformation'},
      {label: 'Cloud & DevOps', href: '/services/cloud-devops'}
    ] : [
      {label: 'Automation', href: '/services/automation'},
      {label: 'Data & Analytics', href: '/services/data-analytics'},
      {label: 'Digital Transformation', href: '/services/digital-transformation'},
      {label: 'Cloud & DevOps', href: '/services/cloud-devops'}
    ]

  return (
    <ServiceLayout
      lang={params.lang as Lang}
      badge={badge} title={title} subtitle={subtitle}
      heroDesc={heroDesc} heroBullets={heroBullets}
      whyTitle={whyTitle} whyDesc={whyDesc} whyPoints={whyPoints}
      outcomes={outcomes} ctaTitle={ctaTitle} ctaDesc={ctaDesc}
      features={features} steps={steps} caseStudies={caseStudies}
      faqs={faqs} related={related}
      color="var(--purple-light)" bg="var(--purple-bg)"
      heroImg="/images/services/erp-crm/hero.jpg"
      whyImg="/images/services/erp-crm/why1.jpg"
      whyImg2="/images/services/erp-crm/why2.jpg"
      featureImg="/images/services/erp-crm/feature.jpg"
      processImg="/images/services/erp-crm/process.jpg"
    />
  )
}
