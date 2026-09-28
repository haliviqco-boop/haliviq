import ServiceLayout from '@/components/service/ServiceLayout'
import { type Lang } from '@/lib/i18n'

export async function generateStaticParams() {
  return [{ lang: 'th' }, { lang: 'en' }]
}

export default function Page({ params }: { params: { lang: Lang } }) {
  const isEN = params.lang === 'en'
  const badge    = isEN ? 'Support / Maintenance & Support'  : 'Support / Maintenance & Support'
  const title    = isEN ? 'Systems You Can'  : 'ระบบที่คุณ'
  const subtitle = isEN ? 'Rely On 24/7'    : 'พึ่งพาได้ตลอด 24/7'
  const heroDesc = isEN ? 'Launch is not the finish line — it is the starting line. Haliviq provides post-launch support, system maintenance, and continuous improvement so your product keeps getting better.'  : 'Launch ไม่ใช่เส้นชัย แต่คือเส้นเริ่มต้น Haliviq ให้บริการ Post-launch Support, System Maintenance และ Continuous Improvement เพื่อให้ Product ของคุณดีขึ้นเรื่อยๆ'
  const whyTitle = isEN ? 'Why support is the most underrated investment'    : 'ทำไม Support ถึงเป็นการลงทุนที่ Underrate ที่สุด'
  const whyDesc  = isEN ? 'Most businesses focus on building and launching. But the value of a product is realised over years, not weeks. Without sustained maintenance and improvement, even great products decay.'  : 'ธุรกิจส่วนใหญ่โฟกัสที่การสร้างและ Launch แต่คุณค่าของ Product เกิดขึ้นในช่วงหลาย ปีไม่ใช่หลายสัปดาห์ หากไม่มีการบำรุงรักษาและพัฒนาต่อเนื่อง แม้ Product ที่ดีก็จะเสื่อมลง'
  const ctaTitle = isEN ? 'Ready for a support partner you can trust?'    : 'พร้อมมี Support Partner ที่ไว้ใจได้ไหม?'
  const ctaDesc  = isEN ? 'Talk to us about your current system. We will propose a support plan that fits your needs and budget.'   : 'คุยกับเราเรื่องระบบปัจจุบันของคุณ เราจะเสนอ Support Plan ที่เหมาะกับความต้องการและงบประมาณ'
  const heroBullets = isEN ? [
      'SLA-backed monitoring, alerting, and incident response',
      'Regular security patches, dependency updates, and backups',
      'Performance monitoring and proactive optimisation',
      'Feature development, bug fixes, and iterative improvements',
      'Monthly reporting and strategic product review sessions',
    ] : [
      'Monitoring, Alerting และ Incident Response แบบ SLA',
      'Security Patch, Dependency Update และ Backup สม่ำเสมอ',
      'Performance Monitoring และ Proactive Optimization',
      'Feature Development, Bug Fix และ Iterative Improvement',
      'Monthly Report และ Strategic Product Review Session',
    ]
  const whyPoints   = isEN ? [
      'Systems without active maintenance accumulate security vulnerabilities predictably — it is a matter of when, not if',
      'Proactive monitoring catches performance degradation before users notice',
      'Regular dependency updates prevent the big-bang migration that happens when you fall too far behind',
      'An ongoing partnership with the team that built the product is dramatically more efficient than onboarding new developers',
      'Continuous small improvements compound into significant advantages over 12-24 months',
    ] : [
      'ระบบที่ไม่ได้รับการ Maintain จะสะสม Security Vulnerability อย่างคาดเดาได้ เป็นเรื่องของเมื่อไหร่ไม่ใช่ถ้า',
      'Proactive Monitoring จับ Performance Degradation ก่อนที่ผู้ใช้จะสังเกตเห็น',
      'Regular Dependency Update ป้องกัน Big-bang Migration ที่เกิดขึ้นเมื่อตามหลังมากเกินไป',
      'ความร่วมมือกับทีมที่สร้าง Product มีประสิทธิภาพมากกว่าการ Onboard Developer ใหม่',
      'Continuous Improvement เล็กๆ น้อยๆ Compound กลายเป็นความได้เปรียบที่สำคัญใน 12-24 เดือน',
    ]
  const outcomes    = isEN ? [
      {stat: '99.9%', label: 'Uptime Achieved', desc: 'With proactive monitoring'},
      {stat: '<1hr', label: 'Incident Response Time', desc: 'SLA-backed guarantee'},
      {stat: '0', label: 'Known Vulnerabilities', desc: 'With regular security patches'},
      {stat: '24/7', label: 'System Monitoring', desc: 'Automated alerts and escalation'}
    ] : [
      {stat: '99.9%', label: 'Uptime ที่ทำได้จริง', desc: 'ด้วย Proactive Monitoring'},
      {stat: '<1 ชม.', label: 'Incident Response Time', desc: 'SLA-backed Guarantee'},
      {stat: '0', label: 'Known Vulnerability', desc: 'ด้วย Regular Security Patch'},
      {stat: '24/7', label: 'System Monitoring', desc: 'Automated Alert และ Escalation'}
    ]
  const features    = isEN ? [
      {icon: 'ti-activity', title: '24/7 Monitoring & Alerting', desc: 'Monitor uptime, performance, error rate, and security events continuously. Alert the right team immediately.'},
      {icon: 'ti-alarm', title: 'Incident Response', desc: 'On-call engineers respond per agreed SLA, with runbooks for every scenario type.'},
      {icon: 'ti-shield', title: 'Security Maintenance', desc: 'Apply security patches, update dependencies, and run vulnerability scans regularly.'},
      {icon: 'ti-chart-line', title: 'Performance Optimisation', desc: 'Continuously monitor and optimise response time, database queries, and infrastructure.'},
      {icon: 'ti-code', title: 'Bug Fix & Feature Development', desc: 'Fix bugs by priority and develop new features according to an agreed roadmap.'},
      {icon: 'ti-presentation-analytics', title: 'Monthly Review & Reporting', desc: 'Report on system health, incident summary, performance trends, and plan the next quarter.'}
    ] : [
      {icon: 'ti-activity', title: '24/7 Monitoring & Alerting', desc: 'ติดตาม Uptime, Performance, Error Rate และ Security Event ตลอดเวลา Alert ทีมที่ถูกต้องทันที'},
      {icon: 'ti-alarm', title: 'Incident Response', desc: 'On-call Engineer พร้อม Response ตาม SLA ที่ตกลงไว้ มี Runbook สำหรับ Scenario ทุกประเภท'},
      {icon: 'ti-shield', title: 'Security Maintenance', desc: 'Apply Security Patch, Update Dependency และ Run Vulnerability Scan สม่ำเสมอ'},
      {icon: 'ti-chart-line', title: 'Performance Optimization', desc: 'Monitor และ Optimize Response Time, Database Query และ Infrastructure ต่อเนื่อง'},
      {icon: 'ti-code', title: 'Bug Fix & Feature Development', desc: 'แก้ Bug ตาม Priority และพัฒนา Feature ใหม่ตาม Roadmap ที่ตกลงร่วมกัน'},
      {icon: 'ti-presentation-analytics', title: 'Monthly Review & Reporting', desc: 'Report สถานะระบบ, Incident Summary, Performance Trend และวางแผน Next Quarter'}
    ]
  const steps       = isEN ? [
      {no: '01', title: 'System Handover & Audit', desc: 'Receive the system from the dev team, audit completeness, and set up foundational monitoring.'},
      {no: '02', title: 'Monitoring Setup', desc: 'Set up monitoring stack, alert rules, and comprehensive on-call schedule.'},
      {no: '03', title: 'SLA & Runbook', desc: 'Agree on SLAs and build runbooks for every incident type.'},
      {no: '04', title: 'Regular Maintenance', desc: 'Perform scheduled maintenance, security patches, and dependency updates per plan.'},
      {no: '05', title: 'Review & Plan', desc: 'Monthly review together — summarise incidents, performance, and plan the next quarter.'}
    ] : [
      {no: '01', title: 'System Handover & Audit', desc: 'รับ System จากทีม Dev, ทำ Audit ความสมบูรณ์ และ Setup Monitoring พื้นฐาน'},
      {no: '02', title: 'Monitoring Setup', desc: 'Setup Monitoring Stack, Alert Rule และ On-call Schedule ที่ครอบคลุม'},
      {no: '03', title: 'SLA & Runbook', desc: 'ตกลง SLA ร่วมกัน สร้าง Runbook สำหรับ Incident ทุกประเภท'},
      {no: '04', title: 'Regular Maintenance', desc: 'ทำ Scheduled Maintenance, Security Patch และ Dependency Update ตาม Plan'},
      {no: '05', title: 'Review & Plan', desc: 'Monthly Review ร่วมกัน สรุป Incident, Performance และวาง Next Quarter Plan'}
    ]
  const caseStudies = isEN ? [
      {tag: 'FinTech · Bangkok', title: '3 Years of Support with Zero Critical Incidents', desc: 'Proactive monitoring caught 47 issues before users experienced them over 3 years.', result: '99.97% Uptime for 3 years'},
      {tag: 'E-Commerce · Nationwide', title: 'Maintenance Eliminates Security Incidents', desc: 'Monthly patching and vulnerability scanning with zero security breaches.', result: '0 Security Incidents in 2 years'},
      {tag: 'Healthcare · Bangkok', title: 'Continuous Improvement Triples Performance', desc: '12 months of performance optimisation reduced page load from 4.2s to 1.1s.', result: 'Page Load 3x faster'}
    ] : [
      {tag: 'FinTech · กรุงเทพฯ', title: 'Support 3 ปี ไม่มี Critical Incident เลย', desc: 'Proactive Monitoring จับ Issue 47 ครั้งก่อนที่ผู้ใช้จะเจอ ใน 3 ปี', result: '99.97% Uptime ตลอด 3 ปี'},
      {tag: 'E-Commerce · ทั่วประเทศ', title: 'Maintenance ลด Security Incident 100%', desc: 'Regular Patch และ Vulnerability Scan ทุกเดือน ไม่มี Security Breach เลย', result: '0 Security Incident ใน 2 ปี'},
      {tag: 'Healthcare · กรุงเทพฯ', title: 'Continuous Improvement เพิ่ม Performance 3x', desc: '12 เดือนของ Performance Optimization ลด Page Load จาก 4.2s เป็น 1.1s', result: 'Page Load เร็วขึ้น 3x'}
    ]
  const faqs        = isEN ? [
      {q: 'What does the SLA cover?', a: 'It depends on the package. Generally covers response time, resolution time, uptime guarantee, and business hours vs 24/7 support.'},
      {q: 'Can you support a system built by another team?', a: 'Yes. We start with a system audit to understand the architecture, stack, and codebase before taking responsibility.'},
      {q: 'What if we need new features?', a: 'We handle feature development within the support contract, with a shared backlog and quarterly planning.'},
      {q: 'How much does support cost?', a: 'We offer packages from basic SME support to premium 24/7 for critical systems. Contact us for a quote tailored to your needs.'}
    ] : [
      {q: 'SLA ครอบคลุมอะไรบ้าง?', a: 'ขึ้นอยู่กับแพ็กเกจที่เลือกครับ โดยทั่วไปครอบคลุม Response Time, Resolution Time, Uptime Guarantee และ Business Hours vs 24/7 Support'},
      {q: 'ทำงานกับ System ที่ทีมอื่นสร้างได้ไหม?', a: 'ได้ครับ เราเริ่มด้วย System Audit เพื่อทำความเข้าใจ Architecture, Stack และ Codebase ก่อนรับ Responsibility'},
      {q: 'ถ้าต้องการ Feature ใหม่ทำยังไง?', a: 'เราทำ Feature Development ได้ภายใน Support Contract ครับ โดยมี Backlog ร่วมกันและ Plan ทุก Quarter'},
      {q: 'ราคา Support เท่าไหร่?', a: 'เริ่มต้นจากแพ็กเกจ Basic สำหรับ SME ไปถึง Premium 24/7 สำหรับ Critical System ติดต่อเพื่อรับ Quote ที่ตรงกับความต้องการ'}
    ]
  const related     = isEN ? [
      {label: 'QA & Testing', href: '/services/qa-testing'},
      {label: 'Cloud & DevOps', href: '/services/cloud-devops'},
      {label: 'Backend & API', href: '/services/backend-api'},
      {label: 'Web Development', href: '/services/web-development'}
    ] : [
      {label: 'QA & Testing', href: '/services/qa-testing'},
      {label: 'Cloud & DevOps', href: '/services/cloud-devops'},
      {label: 'Backend & API', href: '/services/backend-api'},
      {label: 'Web Development', href: '/services/web-development'}
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
      heroImg="/images/services/support/hero.jpg"
      whyImg="/images/services/support/why1.jpg"
      whyImg2="/images/services/support/why2.jpg"
      featureImg="/images/services/support/feature.jpg"
      processImg="/images/services/support/process.jpg"
    />
  )
}
