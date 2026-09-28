import ServiceLayout from '@/components/service/ServiceLayout'
import { type Lang } from '@/lib/i18n'

export async function generateStaticParams() {
  return [{ lang: 'th' }, { lang: 'en' }]
}

export default function Page({ params }: { params: { lang: Lang } }) {
  const isEN = params.lang === 'en'
  const badge    = isEN ? 'AI & Innovation / Automation'  : 'AI & นวัตกรรม / Automation'
  const title    = isEN ? 'Let Systems'  : 'ให้ระบบ'
  const subtitle = isEN ? 'Do the Work for You'    : 'ทำงานแทนคุณ'
  const heroDesc = isEN ? 'Every hour your team spends on repetitive manual tasks is an hour not creating value. Haliviq automates your processes so your people can focus on creative and decision-making work.'  : 'ทุกชั่วโมงที่ทีมเสียไปกับงาน Manual ซ้ำๆ คือชั่วโมงที่ไม่ได้สร้างคุณค่า Haliviq Automate กระบวนการของคุณให้ทีมโฟกัสกับงานที่ต้องใช้ความคิดสร้างสรรค์และการตัดสินใจ'
  const whyTitle = isEN ? 'Why manual processes are the silent tax on your business'    : 'ทำไม Manual Process ถึงเป็น Silent Tax ของธุรกิจ'
  const whyDesc  = isEN ? 'Manual processes are not just slow — they are inconsistent, error-prone, and demoralising. Every repeated task is a candidate for automation.'  : 'Manual Process ไม่แค่ช้า แต่ยังไม่สม่ำเสมอ เกิด Error บ่อย และทำให้คนที่ทำรู้สึกหมดพลัง ทุกงานที่ทำซ้ำได้คือ Candidate สำหรับ Automation'
  const ctaTitle = isEN ? 'Ready to automate?'    : 'พร้อม Automate ไหม?'
  const ctaDesc  = isEN ? 'Get a free Process Audit. We will identify your highest-value automation opportunities in one session.'   : 'ขอ Process Audit ฟรี เราจะระบุ Automation Opportunity ที่คุ้มค่าที่สุดในเซสชันเดียว'
  const heroBullets = isEN ? [
      'Process mapping and automation opportunity assessment',
      'RPA, workflow automation, and API integration',
      'Document processing with AI OCR and data extraction',
      'Automated reporting, alerts, and escalation logic',
      'ROI measurement and continuous improvement',
    ] : [
      'Map Process และหา Automation Opportunity',
      'RPA, Workflow Automation และ API Integration',
      'Document Processing ด้วย AI OCR',
      'Automated Reporting, Alert และ Escalation',
      'วัด ROI และพัฒนาต่อเนื่อง',
    ]
  const whyPoints   = isEN ? [
      'Knowledge workers spend an average of 19% of their week searching for information — automation fixes this',
      'Human error rates in manual data entry run at 1-5%. Automated validation eliminates this category of mistake',
      'Automation running 24/7 adds throughput without adding payroll costs',
      'Consistent automated processes pass audits and compliance checks far more easily',
      'Teams freed from repetitive work report higher engagement and lower turnover',
    ] : [
      'Knowledge Worker ใช้เวลาเฉลี่ย 19% ของสัปดาห์ค้นหาข้อมูล Automation แก้ปัญหานี้ได้',
      'Human Error Rate ใน Manual Data Entry อยู่ที่ 1-5% Automated Validation ขจัดข้อผิดพลาดประเภทนี้',
      'Automation ที่ทำงาน 24/7 เพิ่ม Throughput โดยไม่เพิ่มค่าใช้จ่าย Payroll',
      'กระบวนการที่ Automate ผ่าน Audit และ Compliance ได้ง่ายกว่ามาก',
      'ทีมที่หลุดพ้นจากงาน Repetitive รายงาน Engagement สูงขึ้นและ Turnover ต่ำลง',
    ]
  const outcomes    = isEN ? [
      {stat: '80%', label: 'Manual Work Eliminated', desc: 'In automated processes'},
      {stat: '0%', label: 'Data Entry Errors', desc: 'With automated validation'},
      {stat: '24/7', label: 'Process Availability', desc: 'No human dependency'},
      {stat: '6 months', label: 'Average ROI Payback', desc: 'Across all automation projects'}
    ] : [
      {stat: '80%', label: 'ลด Manual Work', desc: 'ในกระบวนการที่ Automate'},
      {stat: '0%', label: 'Data Entry Error', desc: 'ด้วย Automated Validation'},
      {stat: '24/7', label: 'Process Availability', desc: 'ไม่ต้องพึ่งคน'},
      {stat: '6 เดือน', label: 'Average ROI Payback', desc: 'ทุกโปรเจกต์ Automation'}
    ]
  const features    = isEN ? [
      {icon: 'ti-map-2', title: 'Process Mapping & Analysis', desc: 'Document current processes, identify bottlenecks, and find the highest-value automation opportunities.'},
      {icon: 'ti-robot', title: 'RPA (Robotic Process Automation)', desc: 'Bots that perform UI-based human tasks — copying data, filling forms, and generating reports.'},
      {icon: 'ti-arrows-exchange-2', title: 'Workflow & API Integration', desc: 'Connect systems via APIs and webhooks so data flows automatically between tools.'},
      {icon: 'ti-file-text-ai', title: 'Document Processing & OCR', desc: 'Read and extract data from invoices, contracts, and forms using AI OCR.'},
      {icon: 'ti-bell-ringing', title: 'Automated Alerting & Escalation', desc: 'Monitor KPIs and immediately alert the right team when exceptions or thresholds are triggered.'},
      {icon: 'ti-chart-bar', title: 'Automated Reporting', desc: 'Generate reports and dashboards automatically on schedule and deliver to the right recipients.'}
    ] : [
      {icon: 'ti-map-2', title: 'Process Mapping & Analysis', desc: 'Document กระบวนการปัจจุบัน ระบุ Bottleneck และหา Automation Opportunity ที่คุ้มค่าสูงสุด'},
      {icon: 'ti-robot', title: 'RPA (Robotic Process Automation)', desc: 'Bot ที่ทำงานแทนมนุษย์ในงาน UI-based เช่น คัดลอกข้อมูล กรอก Form และออก Report'},
      {icon: 'ti-arrows-exchange-2', title: 'Workflow & API Integration', desc: 'เชื่อมต่อระบบต่างๆ ด้วย API และ Webhook ให้ข้อมูลไหลอัตโนมัติระหว่าง Tool'},
      {icon: 'ti-file-text-ai', title: 'Document Processing & OCR', desc: 'อ่านและแยกข้อมูลจากเอกสาร Invoice, Contract, Form ด้วย AI OCR'},
      {icon: 'ti-bell-ringing', title: 'Automated Alerting & Escalation', desc: 'Monitor KPI และ Alert ทีมที่ถูกต้องทันทีเมื่อมี Exception หรือ Threshold เกิน'},
      {icon: 'ti-chart-bar', title: 'Automated Reporting', desc: 'สร้าง Report และ Dashboard อัตโนมัติตาม Schedule ส่งถึงผู้รับที่ถูกต้อง'}
    ]
  const steps       = isEN ? [
      {no: '01', title: 'Process Discovery', desc: 'Workshop with the team to map processes and identify the best candidates for automation.'},
      {no: '02', title: 'Feasibility & ROI Analysis', desc: 'Assess technical feasibility and calculate expected ROI before committing.'},
      {no: '03', title: 'Build & Test', desc: 'Build automation with unit tests, integration tests, and UAT with end users.'},
      {no: '04', title: 'Deploy & Monitor', desc: 'Deploy to production with monitoring and alerts when automation fails.'},
      {no: '05', title: 'Measure & Optimize', desc: 'Measure real ROI, fix edge cases, and scale to other processes.'}
    ] : [
      {no: '01', title: 'Process Discovery', desc: 'Workshop กับ Team เพื่อ Map กระบวนการและระบุ Process ที่ดีสุดสำหรับ Automate'},
      {no: '02', title: 'Feasibility & ROI Analysis', desc: 'ประเมินความเป็นไปได้ทางเทคนิคและคำนวณ ROI ที่คาดหวังก่อน Commit'},
      {no: '03', title: 'Build & Test', desc: 'พัฒนา Automation พร้อม Unit Test, Integration Test และ UAT กับ End User'},
      {no: '04', title: 'Deploy & Monitor', desc: 'Deploy ใน Production พร้อม Monitoring และ Alert เมื่อ Automation ล้มเหลว'},
      {no: '05', title: 'Measure & Optimize', desc: 'วัด ROI จริง ปรับปรุง Edge Case และ Scale ไปยัง Process อื่นๆ'}
    ]
  const caseStudies = isEN ? [
      {tag: 'Banking · Bangkok', title: 'Loan Document Automation, 93% Faster', desc: 'RPA + AI OCR reads documents, validates data, and routes to systems automatically.', result: 'Processing Time down 93%'},
      {tag: 'Insurance · Bangkok', title: 'Automated Claims Processing, 73% Faster', desc: 'Workflow automation connecting 5 systems, reducing manual steps from 23 to 6.', result: 'Claims Time down 73%'},
      {tag: 'Manufacturing · Nationwide', title: 'Daily Automated Inventory Reports', desc: 'Pulls data from 8 systems, generates reports, and emails executives every morning.', result: '40 hours saved per month'}
    ] : [
      {tag: 'ธนาคาร · กรุงเทพฯ', title: 'Automate Loan Document ลด Processing 93%', desc: 'RPA + AI OCR อ่านเอกสาร Validate ข้อมูล และส่งต่อ System อัตโนมัติ', result: 'Processing Time ลด 93%'},
      {tag: 'Insurance · กรุงเทพฯ', title: 'Claims Processing อัตโนมัติ ลดเวลา 73%', desc: 'Workflow Automation เชื่อม 5 ระบบ ลด Manual Step จาก 23 เหลือ 6', result: 'Claims Time ลด 73%'},
      {tag: 'Manufacturing · ทั่วประเทศ', title: 'Automated Inventory Report ทุกวัน', desc: 'ดึงข้อมูลจาก 8 ระบบ สร้าง Report และส่ง Email ให้ผู้บริหารทุกเช้าอัตโนมัติ', result: 'ประหยัด 40 ชั่วโมง/เดือน'}
    ]
  const faqs        = isEN ? [
      {q: 'Can every process be automated?', a: 'Not all. Best candidates are rule-based, repetitive, high-volume, and digital. Tasks requiring judgment or creativity still need humans.'},
      {q: 'Do we need to replace our old systems?', a: 'Not necessarily. RPA works on top of existing system UIs. API integration works with systems that have API or database access.'},
      {q: 'What happens if automation fails?', a: 'We design error handling and fallback processes every time, with immediate alerts to the right team and complete logs for debugging.'},
      {q: 'How is automation maintained?', a: 'We offer maintenance services including monitoring, bug fixes when source systems change, and continuous optimisation.'}
    ] : [
      {q: 'Automate ได้ทุกกระบวนการไหม?', a: 'ไม่ทั้งหมดครับ กระบวนการที่เหมาะสมคือที่ Rule-based, ทำซ้ำ, มี Volume สูง และข้อมูลเป็น Digital งานที่ต้องใช้ Judgment หรือ Creativity ยังต้องการคน'},
      {q: 'ต้องเปลี่ยน System เก่าไหม?', a: 'ไม่จำเป็นครับ RPA ทำงานบน UI ของ System เก่าได้ ส่วน API Integration ใช้ได้กับ System ที่มี API หรือ Database Access'},
      {q: 'ถ้า Automation เกิด Error ทำยังไง?', a: 'เราออกแบบ Error Handling และ Fallback Process ทุกครั้ง พร้อม Alert ทีมที่ถูกต้องทันที มี Log ครบเพื่อ Debug'},
      {q: 'ดูแลรักษา Automation ยังไง?', a: 'เราให้บริการ Maintenance พร้อม Monitor, Fix Bug เมื่อ System ต้นทางเปลี่ยน และ Optimize ต่อเนื่อง'}
    ]
  const related     = isEN ? [
      {label: 'AI Solutions', href: '/services/ai'},
      {label: 'ERP & CRM', href: '/services/erp-crm'},
      {label: 'Data & Analytics', href: '/services/data-analytics'},
      {label: 'Backend & API', href: '/services/backend-api'}
    ] : [
      {label: 'AI Solutions', href: '/services/ai'},
      {label: 'ERP & CRM', href: '/services/erp-crm'},
      {label: 'Data & Analytics', href: '/services/data-analytics'},
      {label: 'Backend & API', href: '/services/backend-api'}
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
      heroImg="/images/services/automation/hero.jpg"
      whyImg="/images/services/automation/why1.jpg"
      whyImg2="/images/services/automation/why2.jpg"
      featureImg="/images/services/automation/feature.jpg"
      processImg="/images/services/automation/process.jpg"
    />
  )
}
