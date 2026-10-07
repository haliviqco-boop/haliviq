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
  const heroDesc = isEN ? 'Spreadsheets and siloed tools are the silent killers of growth. Haliviq implements and customises ERP and CRM systems that give your entire organisation a single source of truth.'  : 'Spreadsheet และเครื่องมือที่แยกกันอยู่เป็นตัวฉุดการเติบโตแบบเงียบๆ Haliviq ติดตั้งและปรับแต่งระบบ ERP และ CRM ให้ทั้งองค์กรใช้ข้อมูลชุดเดียวกัน'
  const whyTitle = isEN ? 'Why disconnected systems limit your potential'    : 'ทำไมระบบที่แยกกันถึงจำกัดศักยภาพของคุณ'
  const whyDesc  = isEN ? 'When Finance, Sales, Operations, and HR each have their own tools and spreadsheets, the result is duplicate data, reconciliation nightmares, and decisions made on information that is always slightly out of date.'  : 'เมื่อฝ่ายการเงิน ฝ่ายขาย ฝ่ายปฏิบัติการ และ HR ต่างมีเครื่องมือและ Spreadsheet ของตัวเอง ผลคือข้อมูลซ้ำกัน กระทบยอดยาก และต้องตัดสินใจจากข้อมูลที่ไม่ทันสมัยอยู่เสมอ'
  const ctaTitle = isEN ? 'Ready to unify your business systems?'    : 'พร้อมรวมระบบธุรกิจของคุณหรือยัง?'
  const ctaDesc  = isEN ? 'Start with a free Systems Audit. We will map your current tools and design the right integration.'   : 'เริ่มด้วยการตรวจระบบ (Systems Audit) ฟรี เราจะดูว่าตอนนี้ใช้เครื่องมืออะไรบ้าง แล้วออกแบบการเชื่อมต่อที่เหมาะสม'

  const heroBullets = isEN ? [
      'ERP and CRM needs assessment and vendor selection',
      'Custom configuration and module development',
      'Data migration from legacy systems with full integrity',
      'Role-based access, workflows, and approval automation',
      'Training, go-live support, and ongoing system administration',
    ] : [
      'ประเมิน ERP/CRM และเลือกผู้ให้บริการที่เหมาะสม',
      'ปรับแต่งการตั้งค่า และพัฒนา Module เพิ่มเติม',
      'ย้ายข้อมูลจากระบบเก่ามาให้ครบถ้วน',
      'กำหนดสิทธิ์ตามบทบาท Workflow และการอนุมัติอัตโนมัติ',
      'อบรม ช่วยดูแลตอนเปิดใช้ และดูแลระบบต่อเนื่อง',
    ]
  const whyPoints   = isEN ? [
      'A unified ERP eliminates an average 3.5 hours per employee per week spent reconciling data',
      'Real-time inventory reduces stock-outs by 40% and overstock by 30%',
      'CRM automation increases sales team productivity by 29% by eliminating manual data entry',
      'Automated approval workflows cut processing time by 70%',
      'A single customer record across all teams creates consistent, personalised experiences',
    ] : [
      'ERP ระบบเดียวช่วยประหยัดเวลาเฉลี่ย 3.5 ชั่วโมงต่อพนักงานต่อสัปดาห์ ที่เคยเสียไปกับการกระทบยอด',
      'Inventory แบบ Real-time ลดสินค้าขาดสต็อก 40% และสินค้าล้นสต็อก 30%',
      'CRM อัตโนมัติช่วยให้ทีมขายทำงานได้มากขึ้น 29% เพราะลดการกรอกข้อมูลด้วยมือ',
      'Workflow อนุมัติอัตโนมัติลดเวลาดำเนินการ 70%',
      'ข้อมูลลูกค้าชุดเดียวทุกทีม ช่วยให้ประสบการณ์ลูกค้าสม่ำเสมอและตรงกับแต่ละคน',
    ]
  const outcomes    = isEN ? [
      {stat: '3.5h', label: 'Saved Per Employee Per Week', desc: 'From eliminated reconciliation'},
      {stat: '40%', label: 'Fewer Stock-Outs', desc: 'With real-time inventory'},
      {stat: '29%', label: 'Sales Productivity Gain', desc: 'With CRM automation'},
      {stat: '70%', label: 'Faster Approvals', desc: 'Automated workflows'}
    ] : [
      {stat: '3.5h', label: 'ประหยัดต่อคนต่อสัปดาห์', desc: 'จากไม่ต้องกระทบยอดด้วยมือ'},
      {stat: '40%', label: 'สินค้าขาดสต็อกลดลง', desc: 'ด้วย Inventory แบบ Real-time'},
      {stat: '29%', label: 'ทีมขายทำงานได้มากขึ้น', desc: 'ด้วย CRM อัตโนมัติ'},
      {stat: '70%', label: 'อนุมัติเร็วขึ้น', desc: 'ด้วย Workflow อัตโนมัติ'}
    ]
  const features    = isEN ? [
      {icon: 'ti-building-factory', title: 'ERP Implementation', desc: 'Install and configure ERP systems like SAP, Oracle, Odoo, or Microsoft Dynamics to your requirements.'},
      {icon: 'ti-users', title: 'CRM Setup & Customization', desc: 'Set up Salesforce, HubSpot, or Zoho CRM with custom fields, workflows, and reports.'},
      {icon: 'ti-arrows-exchange', title: 'System Integration', desc: 'Connect ERP/CRM with other systems — e-commerce, accounting, HR, and logistics.'},
      {icon: 'ti-database-import', title: 'Data Migration', desc: 'Migrate data from legacy systems completely, with validation and rollback plans.'},
      {icon: 'ti-settings-automation', title: 'Workflow Automation', desc: 'Automate approvals, notifications, and task assignments to reduce manual work across departments.'},
      {icon: 'ti-school', title: 'Training & Change Management', desc: 'Train users at all levels and manage change to ensure high adoption.'}
    ] : [
      {icon: 'ti-building-factory', title: 'ERP Implementation', desc: 'ติดตั้งและตั้งค่า ERP เช่น SAP, Oracle, Odoo หรือ Microsoft Dynamics ตามความต้องการ'},
      {icon: 'ti-users', title: 'CRM Setup & Customization', desc: 'ตั้งค่า Salesforce, HubSpot หรือ Zoho CRM พร้อมฟิลด์ Workflow และรายงานที่ปรับเอง'},
      {icon: 'ti-arrows-exchange', title: 'System Integration', desc: 'เชื่อมต่อ ERP/CRM กับระบบอื่น เช่น E-commerce, ระบบบัญชี, HR และ Logistics'},
      {icon: 'ti-database-import', title: 'Data Migration', desc: 'ย้ายข้อมูลจากระบบเก่าให้ครบถ้วน มีการตรวจสอบความถูกต้อง และแผนย้อนกลับ'},
      {icon: 'ti-settings-automation', title: 'Workflow Automation', desc: 'ทำการอนุมัติ การแจ้งเตือน และการมอบหมายงานให้อัตโนมัติ ลดงานมือในทุกแผนก'},
      {icon: 'ti-school', title: 'Training & Change Management', desc: 'อบรมผู้ใช้ทุกระดับและช่วยบริหารการเปลี่ยนแปลง เพื่อให้คนในองค์กรใช้ระบบกันจริง'}
    ]
  const steps       = isEN ? [
      {no: '01', title: 'Current State Assessment', desc: 'Assess current processes, data, and pain points before selecting a solution.'},
      {no: '02', title: 'Solution Design', desc: 'Design architecture, integration, and necessary customisations.'},
      {no: '03', title: 'Configuration & Development', desc: 'Configure the system and develop custom modules and integrations.'},
      {no: '04', title: 'Data Migration & Testing', desc: 'Migrate data, test every scenario, and conduct UAT with key users.'},
      {no: '05', title: 'Go-live & Support', desc: 'Launch in phases, monitor closely, and support the team until confident.'}
    ] : [
      {no: '01', title: 'Current State Assessment', desc: 'ประเมินขั้นตอนทำงาน ข้อมูล และปัญหาที่เจออยู่ก่อนเลือกระบบ'},
      {no: '02', title: 'Solution Design', desc: 'ออกแบบ Architecture, การเชื่อมต่อ และส่วนที่ต้องปรับแต่ง'},
      {no: '03', title: 'Configuration & Development', desc: 'ตั้งค่าระบบ พัฒนา Module และการเชื่อมต่อ'},
      {no: '04', title: 'Data Migration & Testing', desc: 'ย้ายข้อมูล ทดสอบทุกสถานการณ์ และ UAT กับผู้ใช้หลัก'},
      {no: '05', title: 'Go-live & Support', desc: 'เปิดใช้ทีละระยะ ติดตามใกล้ชิด และช่วยทีมจนมั่นใจ'}
    ]
  const caseStudies = isEN ? [
      {tag: 'Manufacturing · Nationwide', title: 'ERP Connecting 5 Factories in Real-time', desc: 'Odoo ERP unifying inventory, production, finance, and HR in one system.', result: 'OpEx down 28%'},
      {tag: 'Retail · Nationwide', title: 'CRM Boosting Sales Team Productivity 29%', desc: 'Salesforce customised to the sales process with dashboards the team actually uses.', result: 'Revenue up 18%'},
      {tag: 'Healthcare · Bangkok', title: 'End-to-end Hospital Management System', desc: 'ERP connecting HIS, pharmacy, finance, and HR to reduce manual work hospital-wide.', result: 'Manual Work down 60%'}
    ] : [
      {tag: 'Manufacturing · ทั่วประเทศ', title: 'ERP เชื่อม 5 โรงงานแบบ Real-time', desc: 'Odoo ERP รวม Inventory, Production, Finance และ HR ไว้ในระบบเดียว', result: 'OpEx ลด 28%'},
      {tag: 'Retail · ทั่วประเทศ', title: 'CRM เพิ่มประสิทธิภาพทีมขาย 29%', desc: 'Salesforce ที่ปรับตามขั้นตอนการขาย พร้อม Dashboard ที่ใช้งานได้จริง', result: 'รายได้เพิ่ม 18%'},
      {tag: 'Healthcare · กรุงเทพฯ', title: 'ระบบบริหารโรงพยาบาลตั้งแต่ต้นจนจบ', desc: 'ERP เชื่อม HIS, ร้านยา, การเงิน และ HR ลดงานมือทั่วโรงพยาบาล', result: 'งานมือลด 60%'}
    ]
  const faqs        = isEN ? [
      {q: 'Which ERP is best?', a: 'There is no single answer. SAP suits large enterprises, Odoo suits flexible SMEs, Microsoft Dynamics suits Microsoft ecosystems. We assess based on your context.'},
      {q: 'How long does implementation take?', a: 'A basic ERP takes 3-6 months; a full enterprise implementation can take 12-18 months depending on scope and complexity.'},
      {q: 'Can you migrate our old data?', a: 'Yes. We design migration scripts, validate accuracy, and always have a rollback plan ready.'},
      {q: 'Will staff adopt the new system?', a: 'Change management is critical. We run training, super user programs, and hypercare in the early period to maximise adoption.'}
    ] : [
      {q: 'ERP ตัวไหนดีที่สุด?', a: 'ไม่มีคำตอบเดียวครับ SAP เหมาะกับองค์กรขนาดใหญ่ Odoo เหมาะกับ SME ที่ต้องการความยืดหยุ่น Microsoft Dynamics เหมาะกับองค์กรที่ใช้ผลิตภัณฑ์ Microsoft เป็นหลัก เราประเมินให้ตามสถานการณ์ของคุณ'},
      {q: 'ใช้เวลาติดตั้งนานแค่ไหน?', a: 'ERP พื้นฐานใช้ 3-6 เดือน ระบบระดับองค์กรเต็มรูปแบบอาจถึง 12-18 เดือน ขึ้นอยู่กับขอบเขตและความซับซ้อน'},
      {q: 'ย้ายข้อมูลเก่าได้ไหม?', a: 'ได้ครับ เราเขียนสคริปต์ย้ายข้อมูล ตรวจความถูกต้อง และเตรียมแผนย้อนกลับไว้เสมอ'},
      {q: 'พนักงานจะยอมรับระบบใหม่ไหม?', a: 'การบริหารการเปลี่ยนแปลงสำคัญมากครับ เรามีอบรม โครงการ Super User และดูแลใกล้ชิดช่วงแรก เพื่อให้คนใช้ระบบกันจริง'}
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
