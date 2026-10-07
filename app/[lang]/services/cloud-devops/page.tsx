import ServiceLayout from '@/components/service/ServiceLayout'
import { type Lang } from '@/lib/i18n'

export async function generateStaticParams() {
  return [{ lang: 'th' }, { lang: 'en' }]
}

export default function Page({ params }: { params: { lang: Lang } }) {
  const isEN = params.lang === 'en'
  const badge    = isEN ? 'Engineering / Cloud & DevOps'  : 'Engineering / Cloud & DevOps'
  const title    = isEN ? 'Infrastructure That Is'  : 'Infrastructure ที่'
  const subtitle = isEN ? 'Secure and Ready to Scale'    : 'ปลอดภัยและพร้อม Scale'
  const heroDesc = isEN ? 'Cloud is not a destination — it is a foundation. Haliviq designs, migrates, and manages cloud infrastructure that gives your product the reliability, performance, and security it needs to grow.'  : 'Cloud ไม่ใช่จุดหมาย แต่คือรากฐาน Haliviq ออกแบบ ย้าย และดูแล Cloud Infrastructure เพื่อให้ผลิตภัณฑ์ของคุณเชื่อถือได้ ทำงานเร็ว และปลอดภัยตามที่ต้องการ'
  const whyTitle = isEN ? 'Why on-premise is holding your team back'    : 'ทำไม On-premise ถึงฉุดรั้งทีมของคุณ'
  const whyDesc  = isEN ? 'On-premise servers require upfront capital, constant maintenance, and manual scaling that cannot keep up with demand. Cloud gives you the flexibility to grow and shrink at the speed of business.'  : 'เซิร์ฟเวอร์ On-premise ต้องลงทุนล่วงหน้า ดูแลรักษาต่อเนื่อง และขยายด้วยมือจนตามไม่ทัน Cloud ช่วยให้เพิ่มหรือลดทรัพยากรตามความต้องการของธุรกิจได้อย่างยืดหยุ่น'
  const ctaTitle = isEN ? 'Ready to move to the cloud?'    : 'พร้อมย้ายไป Cloud หรือยัง?'
  const ctaDesc  = isEN ? 'Get a free Cloud Readiness Assessment. We will map your migration path and estimate cost savings.'   : 'ขอประเมินความพร้อมขึ้น Cloud ฟรี เราจะวางเส้นทางการย้ายและประเมินว่าประหยัดได้เท่าไหร่'
  const heroBullets = isEN ? [
      'Cloud architecture design on AWS, GCP, or Azure',
      'Legacy system migration to cloud with zero data loss',
      'CI/CD pipeline setup and DevOps culture enablement',
      'Infrastructure as Code with Terraform or Pulumi',
      '24/7 monitoring, alerting, and incident response',
    ] : [
      'ออกแบบสถาปัตยกรรม Cloud บน AWS, GCP หรือ Azure',
      'ย้ายระบบเก่าขึ้น Cloud โดยไม่สูญเสียข้อมูล',
      'ตั้งค่า CI/CD Pipeline และสร้างวัฒนธรรม DevOps',
      'Infrastructure as Code ด้วย Terraform หรือ Pulumi',
      'ติดตามระบบ แจ้งเตือน และรับมือเหตุขัดข้อง ตลอด 24/7',
    ]
  const whyPoints   = isEN ? [
      'Auto-scaling ensures infrastructure matches demand — no idle capacity costs or crashes under load',
      'Cloud-native managed services eliminate entire categories of operational burden',
      'GitOps and Infrastructure as Code make your environment reproducible and disaster-recoverable',
      'Multi-region deployment reduces latency for international users and provides business continuity',
      'FinOps practices typically reduce cloud spend by 20-35% through right-sizing and reserved capacity',
    ] : [
      'Auto-scaling ทำให้ระบบรับความต้องการใช้งานได้ทันที และไม่ต้องจ่ายค่าทรัพยากรที่ไม่ได้ใช้',
      'บริการ Managed Services บน Cloud ช่วยตัดภาระการดูแลระบบไปได้ทั้งหมวด',
      'GitOps และ Infrastructure as Code ทำให้สร้างสภาพแวดล้อมซ้ำได้และกู้คืนได้',
      'การใช้หลาย Region ลดความหน่วงสำหรับผู้ใช้ต่างประเทศ และช่วยให้ธุรกิจเดินต่อได้เมื่อเกิดเหตุ',
      'แนวปฏิบัติ FinOps ลดค่า Cloud ได้ 20-35% ด้วยการปรับขนาดให้พอดีและจองทรัพยากรล่วงหน้า',
    ]
  const outcomes    = isEN ? [
      {stat: '99.99%', label: 'Uptime SLA', desc: 'Multi-AZ architecture'},
      {stat: '35%', label: 'Cloud Cost Reduction', desc: 'With FinOps optimisation'},
      {stat: '<5min', label: 'Deployment Time', desc: 'Automated CI/CD pipeline'},
      {stat: '0', label: 'Manual Server Patches', desc: 'Fully automated updates'}
    ] : [
      {stat: '99.99%', label: 'Uptime SLA', desc: 'Multi-AZ Architecture'},
      {stat: '35%', label: 'ลดค่า Cloud', desc: 'ด้วยการปรับแบบ FinOps'},
      {stat: '<5 นาที', label: 'Deployment Time', desc: 'Automated CI/CD Pipeline'},
      {stat: '0', label: 'Manual Server Patch', desc: 'อัปเดตอัตโนมัติทั้งหมด'}
    ]
  const features    = isEN ? [
      {icon: 'ti-cloud', title: 'Cloud Architecture Design', desc: 'Design architecture on AWS, GCP, or Azure matched to your workload, budget, and compliance needs.'},
      {icon: 'ti-arrows-move', title: 'Cloud Migration', desc: 'Migrate from on-premise or existing cloud using lift-and-shift, re-platform, or re-architect strategies.'},
      {icon: 'ti-code-asterisk', title: 'Infrastructure as Code', desc: 'Manage infrastructure with Terraform or Pulumi for reproducible, versioned environments.'},
      {icon: 'ti-git-branch', title: 'CI/CD Pipeline', desc: 'Set up automated build, test, and deploy pipelines for fast, safe releases.'},
      {icon: 'ti-activity', title: 'Monitoring & Observability', desc: 'Set up Prometheus, Grafana, CloudWatch, or Datadog with alerts and runbooks.'},
      {icon: 'ti-currency-dollar', title: 'FinOps & Cost Optimisation', desc: 'Analyse and optimise cloud spend through right-sizing, reserved instances, and spot instances.'}
    ] : [
      {icon: 'ti-cloud', title: 'Cloud Architecture Design', desc: 'ออกแบบสถาปัตยกรรมบน AWS, GCP หรือ Azure ให้ตรงกับงาน งบประมาณ และข้อกำหนดด้าน Compliance'},
      {icon: 'ti-arrows-move', title: 'Cloud Migration', desc: 'ย้ายจาก On-premise หรือ Cloud เดิม ด้วย Lift-and-shift, Re-platform หรือ Re-architect'},
      {icon: 'ti-code-asterisk', title: 'Infrastructure as Code', desc: 'จัดการ Infrastructure ด้วย Terraform หรือ Pulumi ให้สร้างซ้ำและจัดเวอร์ชันได้'},
      {icon: 'ti-git-branch', title: 'CI/CD Pipeline', desc: 'ตั้งค่า Build, Test และ Deploy อัตโนมัติ ให้ปล่อยงานได้เร็วและปลอดภัย'},
      {icon: 'ti-activity', title: 'Monitoring & Observability', desc: 'ตั้งค่า Prometheus, Grafana, CloudWatch หรือ Datadog พร้อมระบบแจ้งเตือนและคู่มือรับมือเหตุ (Runbook)'},
      {icon: 'ti-currency-dollar', title: 'FinOps & Cost Optimization', desc: 'วิเคราะห์และลดค่า Cloud ด้วยการปรับขนาดให้พอดี Reserved Instance และ Spot Instance'}
    ]
  const steps       = isEN ? [
      {no: '01', title: 'Cloud Assessment', desc: 'Assess current workloads, analyse dependencies, and plan migration.'},
      {no: '02', title: 'Architecture Design', desc: 'Design target architecture, network topology, and security boundaries.'},
      {no: '03', title: 'IaC Setup', desc: 'Build Infrastructure as Code and foundational CI/CD pipelines.'},
      {no: '04', title: 'Migration & Testing', desc: 'Migrate workloads incrementally, test every layer, and validate performance.'},
      {no: '05', title: 'Optimise & Monitor', desc: 'Tune cost, performance, and security post-migration with 24/7 monitoring.'}
    ] : [
      {no: '01', title: 'Cloud Assessment', desc: 'ประเมินงานที่ใช้อยู่ วิเคราะห์ความเชื่อมโยงของระบบ และวางแผนการย้าย'},
      {no: '02', title: 'Architecture Design', desc: 'ออกแบบสถาปัตยกรรมปลายทาง โครงสร้างเครือข่าย และขอบเขตความปลอดภัย'},
      {no: '03', title: 'IaC Setup', desc: 'สร้าง Infrastructure as Code และ CI/CD Pipeline พื้นฐาน'},
      {no: '04', title: 'Migration & Testing', desc: 'ย้ายงานทีละส่วน ทดสอบทุกชั้น และตรวจสอบประสิทธิภาพ'},
      {no: '05', title: 'Optimize & Monitor', desc: 'ปรับต้นทุน ประสิทธิภาพ และความปลอดภัยหลังย้าย พร้อมติดตามระบบ 24/7'}
    ]
  const caseStudies = isEN ? [
      {tag: 'E-Commerce · Nationwide', title: 'AWS Migration Cuts Infrastructure Cost 40%', desc: 'Re-architected from monolith on VMs to containerised microservices on EKS.', result: 'Cost down 40%, Uptime 99.99%'},
      {tag: 'FinTech · Bangkok', title: 'CI/CD Pipeline Cuts Deployment Time 95%', desc: 'From 2-hour manual deploy to 5-minute automated deploy.', result: 'Deployment Time down 95%'},
      {tag: 'Healthcare · Nationwide', title: 'Multi-region Setup for 20 Hospitals', desc: 'Disaster recovery with RTO < 1 hour and HIPAA compliance.', result: '99.99% Availability'}
    ] : [
      {tag: 'E-Commerce · ทั่วประเทศ', title: 'ย้ายไป AWS ลดต้นทุน Infrastructure 40%', desc: 'Re-architect จาก Monolith บน VM เป็น Microservices บน Container ใน EKS', result: 'ต้นทุนลด 40%, Uptime 99.99%'},
      {tag: 'FinTech · กรุงเทพฯ', title: 'CI/CD Pipeline ลดเวลา Deploy 95%', desc: 'จาก Deploy ด้วยมือ 2 ชั่วโมง เป็น Deploy อัตโนมัติ 5 นาที', result: 'เวลา Deploy ลด 95%'},
      {tag: 'Healthcare · ทั่วประเทศ', title: 'ตั้งค่าหลาย Region สำหรับ 20 โรงพยาบาล', desc: 'ระบบกู้คืนจากภัยพิบัติที่ RTO < 1 ชั่วโมง และเป็นไปตามมาตรฐาน HIPAA', result: '99.99% Availability'}
    ]
  const faqs        = isEN ? [
      {q: 'AWS, GCP, or Azure — which is better?', a: 'It depends on your workload and ecosystem. AWS has the widest service range; GCP is strong for data and ML; Azure suits Microsoft ecosystems. We help you choose based on context.'},
      {q: 'Does migration require downtime?', a: 'Not necessarily. We use blue-green, canary, and database replication strategies to migrate without downtime.'},
      {q: 'Is cloud more secure than on-premise?', a: 'Major cloud providers invest in security far beyond most organisations. But security is a shared responsibility — we help configure it correctly.'},
      {q: 'Is cloud expensive?', a: 'It depends on how you use it. Well-optimised cloud is often cheaper than on-premise when you factor in hardware, energy, and maintenance costs.'}
    ] : [
      {q: 'AWS, GCP หรือ Azure ดีกว่ากัน?', a: 'ขึ้นอยู่กับงานและระบบที่ใช้อยู่ AWS ใหญ่สุดและมีบริการครบสุด GCP แข็งด้านข้อมูลและ ML Azure เหมาะกับระบบของ Microsoft เราช่วยเลือกให้ตรงกับบริบทของคุณ'},
      {q: 'การย้ายต้องหยุดระบบไหม?', a: 'ไม่จำเป็น เราใช้ Blue-green, Canary และ Database Replication ทำให้ย้ายได้โดยไม่ต้องหยุดระบบ'},
      {q: 'ปลอดภัยกว่า On-premise ไหม?', a: 'ผู้ให้บริการ Cloud รายใหญ่ลงทุนด้านความปลอดภัยมากกว่าองค์กรส่วนใหญ่มาก แต่ความปลอดภัยเป็นความรับผิดชอบร่วมกัน (Shared Responsibility) เราช่วยตั้งค่าให้ถูกต้อง'},
      {q: 'ค่าใช้จ่าย Cloud แพงไหม?', a: 'ขึ้นอยู่กับวิธีใช้ Cloud ที่ปรับแล้วมักถูกกว่า On-premise เมื่อรวมต้นทุนฮาร์ดแวร์ ค่าไฟ และค่าดูแลรักษา'}
    ]
  const related     = isEN ? [
      {label: 'Backend & API', href: '/services/backend-api'},
      {label: 'Web Development', href: '/services/web-development'},
      {label: 'QA & Testing', href: '/services/qa-testing'},
      {label: 'Automation', href: '/services/automation'}
    ] : [
      {label: 'Backend & API', href: '/services/backend-api'},
      {label: 'Web Development', href: '/services/web-development'},
      {label: 'QA & Testing', href: '/services/qa-testing'},
      {label: 'Automation', href: '/services/automation'}
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
      color="var(--purple)" bg="var(--purple-bg)"
      heroImg="/images/services/cloud-devops/hero.jpg"
      whyImg="/images/services/cloud-devops/why1.jpg"
      whyImg2="/images/services/cloud-devops/why2.jpg"
      featureImg="/images/services/cloud-devops/feature.jpg"
      processImg="/images/services/cloud-devops/process.jpg"
    />
  )
}
