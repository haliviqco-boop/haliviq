import ServiceLayout from '@/components/service/ServiceLayout'
import { type Lang } from '@/lib/i18n'

export async function generateStaticParams() {
  return [{ lang: 'th' }, { lang: 'en' }]
}

export default function Page({ params }: { params: { lang: Lang } }) {
  const isEN = params.lang === 'en'
  const badge    = isEN ? 'AI & Innovation / Automation'  : 'AI & นวัตกรรม / ระบบอัตโนมัติ (Automation)'
  const title    = isEN ? 'Let Systems'  : 'ให้ระบบ'
  const subtitle = isEN ? 'Do the Work for You'    : 'ทำงานแทนคุณ'
  const heroDesc = isEN ? 'Every hour your team spends on repetitive manual tasks is an hour not creating value. Haliviq automates your processes so your people can focus on creative and decision-making work.'  : 'ทุกชั่วโมงที่ทีมเสียไปกับงานมือที่ทำซ้ำๆ คือชั่วโมงที่ไม่ได้สร้างคุณค่า Haliviq ทำขั้นตอนงานของคุณให้เป็นอัตโนมัติ เพื่อให้ทีมโฟกัสกับงานที่ต้องใช้ความคิดสร้างสรรค์และการตัดสินใจ'
  const whyTitle = isEN ? 'Why manual processes are the silent tax on your business'    : 'ทำไมงานที่ทำด้วยมือถึงเป็นต้นทุนซ่อนเร้นของธุรกิจ'
  const whyDesc  = isEN ? 'Manual processes are not just slow — they are inconsistent, error-prone, and demoralising. Every repeated task is a candidate for automation.'  : 'งานที่ทำด้วยมือไม่ได้แค่ช้า แต่ยังไม่สม่ำเสมอ ผิดพลาดบ่อย และทำให้คนทำหมดแรง ทุกงานที่ทำซ้ำได้คือตัวเลือกที่ควรทำให้เป็นอัตโนมัติ'
  const ctaTitle = isEN ? 'Ready to automate?'    : 'พร้อมทำให้งานเป็นอัตโนมัติหรือยัง?'
  const ctaDesc  = isEN ? 'Get a free Process Audit. We will identify your highest-value automation opportunities in one session.'   : 'ขอตรวจขั้นตอนงานฟรี เราจะชี้งานที่ควรทำอัตโนมัติและคุ้มค่าที่สุดให้ในเซสชันเดียว'
  const heroBullets = isEN ? [
      'Process mapping and automation opportunity assessment',
      'RPA, workflow automation, and API integration',
      'Document processing with AI OCR and data extraction',
      'Automated reporting, alerts, and escalation logic',
      'ROI measurement and continuous improvement',
    ] : [
      'วาดผังขั้นตอนงานและหางานที่ทำอัตโนมัติได้',
      'RPA, Workflow Automation และเชื่อมระบบด้วย API',
      'อ่านเอกสารด้วย AI OCR',
      'รายงาน การแจ้งเตือน และการส่งต่อเรื่องอัตโนมัติ',
      'วัดผลตอบแทน (ROI) และพัฒนาต่อเนื่อง',
    ]
  const whyPoints   = isEN ? [
      'Knowledge workers spend an average of 19% of their week searching for information — automation fixes this',
      'Human error rates in manual data entry run at 1-5%. Automated validation eliminates this category of mistake',
      'Automation running 24/7 adds throughput without adding payroll costs',
      'Consistent automated processes pass audits and compliance checks far more easily',
      'Teams freed from repetitive work report higher engagement and lower turnover',
    ] : [
      'พนักงานออฟฟิศใช้เวลาเฉลี่ย 19% ของสัปดาห์ไปกับการค้นหาข้อมูล ระบบอัตโนมัติแก้ปัญหานี้ได้',
      'คนคีย์ข้อมูลด้วยมือพลาดอยู่ที่ 1-5% การตรวจสอบอัตโนมัติช่วยตัดข้อผิดพลาดแบบนี้',
      'ระบบอัตโนมัติที่ทำงาน 24/7 รับงานได้มากขึ้นโดยไม่ต้องเพิ่มค่าแรง',
      'ขั้นตอนที่ทำเป็นอัตโนมัติผ่านการตรวจสอบและ Compliance ได้ง่ายกว่ามาก',
      'ทีมที่ไม่ต้องทำงานซ้ำๆ รายงานว่ามีใจกับงานมากขึ้นและมีคนลาออกน้อยลง',
    ]
  const outcomes    = isEN ? [
      {stat: '80%', label: 'Manual Work Eliminated', desc: 'In automated processes'},
      {stat: '0%', label: 'Data Entry Errors', desc: 'With automated validation'},
      {stat: '24/7', label: 'Process Availability', desc: 'No human dependency'},
      {stat: '6 months', label: 'Average ROI Payback', desc: 'Across all automation projects'}
    ] : [
      {stat: '80%', label: 'ลดงานที่ทำด้วยมือ', desc: 'ในขั้นตอนที่ทำเป็นอัตโนมัติ'},
      {stat: '0%', label: 'Data Entry Error', desc: 'ด้วยการตรวจสอบอัตโนมัติ'},
      {stat: '24/7', label: 'Process Availability', desc: 'ไม่ต้องพึ่งคน'},
      {stat: '6 เดือน', label: 'Average ROI Payback', desc: 'ทุกโปรเจกต์ระบบอัตโนมัติ'}
    ]
  const features    = isEN ? [
      {icon: 'ti-map-2', title: 'Process Mapping & Analysis', desc: 'Document current processes, identify bottlenecks, and find the highest-value automation opportunities.'},
      {icon: 'ti-robot', title: 'RPA (Robotic Process Automation)', desc: 'Bots that perform UI-based human tasks — copying data, filling forms, and generating reports.'},
      {icon: 'ti-arrows-exchange-2', title: 'Workflow & API Integration', desc: 'Connect systems via APIs and webhooks so data flows automatically between tools.'},
      {icon: 'ti-file-text-ai', title: 'Document Processing & OCR', desc: 'Read and extract data from invoices, contracts, and forms using AI OCR.'},
      {icon: 'ti-bell-ringing', title: 'Automated Alerting & Escalation', desc: 'Monitor KPIs and immediately alert the right team when exceptions or thresholds are triggered.'},
      {icon: 'ti-chart-bar', title: 'Automated Reporting', desc: 'Generate reports and dashboards automatically on schedule and deliver to the right recipients.'}
    ] : [
      {icon: 'ti-map-2', title: 'Process Mapping & Analysis', desc: 'จดขั้นตอนปัจจุบัน ระบุจุดที่ติดขัด และหางานที่ทำอัตโนมัติแล้วคุ้มที่สุด'},
      {icon: 'ti-robot', title: 'RPA (Robotic Process Automation)', desc: 'บอตที่ทำงานแทนคนในงานผ่านหน้าจอ เช่น คัดลอกข้อมูล กรอกฟอร์ม และออกรายงาน'},
      {icon: 'ti-arrows-exchange-2', title: 'Workflow & API Integration', desc: 'เชื่อมระบบต่างๆ ด้วย API และ Webhook ให้ข้อมูลไหลอัตโนมัติระหว่างเครื่องมือ'},
      {icon: 'ti-file-text-ai', title: 'Document Processing & OCR', desc: 'อ่านและดึงข้อมูลจากเอกสาร เช่น ใบแจ้งหนี้ สัญญา และแบบฟอร์ม ด้วย AI OCR'},
      {icon: 'ti-bell-ringing', title: 'Automated Alerting & Escalation', desc: 'ติดตามตัวชี้วัด และแจ้งทีมที่เกี่ยวข้องทันทีเมื่อมีเหตุผิดปกติหรือค่าเกินกำหนด'},
      {icon: 'ti-chart-bar', title: 'Automated Reporting', desc: 'สร้างรายงานและ Dashboard อัตโนมัติตามเวลาที่กำหนด ส่งถึงผู้รับที่ถูกต้อง'}
    ]
  const steps       = isEN ? [
      {no: '01', title: 'Process Discovery', desc: 'Workshop with the team to map processes and identify the best candidates for automation.'},
      {no: '02', title: 'Feasibility & ROI Analysis', desc: 'Assess technical feasibility and calculate expected ROI before committing.'},
      {no: '03', title: 'Build & Test', desc: 'Build automation with unit tests, integration tests, and UAT with end users.'},
      {no: '04', title: 'Deploy & Monitor', desc: 'Deploy to production with monitoring and alerts when automation fails.'},
      {no: '05', title: 'Measure & Optimize', desc: 'Measure real ROI, fix edge cases, and scale to other processes.'}
    ] : [
      {no: '01', title: 'Process Discovery', desc: 'จัดเวิร์กช็อปกับทีมเพื่อวาดผังขั้นตอนงาน และเลือกงานที่เหมาะจะทำอัตโนมัติที่สุด'},
      {no: '02', title: 'Feasibility & ROI Analysis', desc: 'ประเมินความเป็นไปได้ทางเทคนิคและคำนวณผลตอบแทนที่คาดไว้ก่อนตัดสินใจลงมือ'},
      {no: '03', title: 'Build & Test', desc: 'พัฒนาพร้อม Unit Test, Integration Test และ UAT กับผู้ใช้จริง'},
      {no: '04', title: 'Deploy & Monitor', desc: 'นำขึ้นใช้งานจริงพร้อมระบบติดตามและแจ้งเตือนเมื่อระบบอัตโนมัติทำงานล้มเหลว'},
      {no: '05', title: 'Measure & Optimize', desc: 'วัดผลตอบแทนจริง แก้กรณีพิเศษ และขยายไปยังขั้นตอนงานอื่นๆ'}
    ]
  const caseStudies = isEN ? [
      {tag: 'Banking · Bangkok', title: 'Loan Document Automation, 93% Faster', desc: 'RPA + AI OCR reads documents, validates data, and routes to systems automatically.', result: 'Processing Time down 93%'},
      {tag: 'Insurance · Bangkok', title: 'Automated Claims Processing, 73% Faster', desc: 'Workflow automation connecting 5 systems, reducing manual steps from 23 to 6.', result: 'Claims Time down 73%'},
      {tag: 'Manufacturing · Nationwide', title: 'Daily Automated Inventory Reports', desc: 'Pulls data from 8 systems, generates reports, and emails executives every morning.', result: '40 hours saved per month'}
    ] : [
      {tag: 'ธนาคาร · กรุงเทพฯ', title: 'ทำเอกสารสินเชื่ออัตโนมัติ ลดเวลาประมวลผล 93%', desc: 'RPA ร่วมกับ AI OCR อ่านเอกสาร ตรวจข้อมูล และส่งต่อไปยังระบบอื่นอัตโนมัติ', result: 'เวลาประมวลผลลด 93%'},
      {tag: 'Insurance · กรุงเทพฯ', title: 'ประมวลผลเคลมอัตโนมัติ ลดเวลา 73%', desc: 'Workflow Automation เชื่อม 5 ระบบ ลดขั้นตอนที่ทำด้วยมือจาก 23 เหลือ 6', result: 'เวลาจัดการเคลมลด 73%'},
      {tag: 'Manufacturing · ทั่วประเทศ', title: 'รายงานสต็อกอัตโนมัติทุกวัน', desc: 'ดึงข้อมูลจาก 8 ระบบ สร้างรายงาน และส่งอีเมลให้ผู้บริหารทุกเช้าอัตโนมัติ', result: 'ประหยัด 40 ชั่วโมง/เดือน'}
    ]
  const faqs        = isEN ? [
      {q: 'Can every process be automated?', a: 'Not all. Best candidates are rule-based, repetitive, high-volume, and digital. Tasks requiring judgment or creativity still need humans.'},
      {q: 'Do we need to replace our old systems?', a: 'Not necessarily. RPA works on top of existing system UIs. API integration works with systems that have API or database access.'},
      {q: 'What happens if automation fails?', a: 'We design error handling and fallback processes every time, with immediate alerts to the right team and complete logs for debugging.'},
      {q: 'How is automation maintained?', a: 'We offer maintenance services including monitoring, bug fixes when source systems change, and continuous optimisation.'}
    ] : [
      {q: 'ทำให้ทุกขั้นตอนเป็นอัตโนมัติได้ไหม?', a: 'ไม่ทั้งหมด ขั้นตอนที่เหมาะคือที่มีกฎชัดเจน ทำซ้ำ ปริมาณมาก และข้อมูลเป็นดิจิทัล งานที่ต้องใช้วิจารณญาณหรือความคิดสร้างสรรค์ยังต้องใช้คน'},
      {q: 'ต้องเปลี่ยนระบบเก่าไหม?', a: 'ไม่จำเป็น RPA ทำงานบนหน้าจอของระบบเก่าได้ ส่วนการเชื่อมด้วย API ใช้ได้กับระบบที่มี API หรือเข้าถึงฐานข้อมูลได้'},
      {q: 'ถ้าระบบอัตโนมัติผิดพลาดทำยังไง?', a: 'เราออกแบบการจัดการข้อผิดพลาดและขั้นตอนสำรองไว้ทุกครั้ง พร้อมแจ้งทีมที่เกี่ยวข้องทันที และเก็บ Log ครบเพื่อหาสาเหตุ'},
      {q: 'ดูแลรักษาระบบอัตโนมัติยังไง?', a: 'เรามีบริการดูแลรักษา ทั้งติดตามระบบ แก้บั๊กเมื่อระบบต้นทางเปลี่ยน และปรับปรุงต่อเนื่อง'}
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
