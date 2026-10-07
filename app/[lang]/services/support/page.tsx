import ServiceLayout from '@/components/service/ServiceLayout'
import { type Lang } from '@/lib/i18n'

export async function generateStaticParams() {
  return [{ lang: 'th' }, { lang: 'en' }]
}

export default function Page({ params }: { params: { lang: Lang } }) {
  const isEN = params.lang === 'en'
  const badge    = isEN ? 'Support / Maintenance & Support'  : 'Support / Maintenance & Support'
  const title    = isEN ? 'Systems You Can'  : 'ระบบที่คุณ'
  const subtitle = isEN ? 'Rely On 24/7'    : 'ไว้ใจได้ตลอด 24/7'
  const heroDesc = isEN ? 'Launch is not the finish line — it is the starting line. Haliviq provides post-launch support, system maintenance, and continuous improvement so your product keeps getting better.'  : 'วันเปิดตัวไม่ใช่เส้นชัย แต่เป็นจุดเริ่มต้น Haliviq ดูแลหลังเปิดตัว บำรุงรักษาระบบ และพัฒนาต่อเนื่อง เพื่อให้ผลิตภัณฑ์ของคุณดีขึ้นเรื่อยๆ'
  const whyTitle = isEN ? 'Why support is the most underrated investment'    : 'ทำไมการดูแลระบบถึงเป็นการลงทุนที่คนมองข้ามมากที่สุด'
  const whyDesc  = isEN ? 'Most businesses focus on building and launching. But the value of a product is realised over years, not weeks. Without sustained maintenance and improvement, even great products decay.'  : 'ธุรกิจส่วนใหญ่โฟกัสที่การสร้างและเปิดตัว แต่คุณค่าของผลิตภัณฑ์เกิดขึ้นในช่วงหลายปี ไม่ใช่หลายสัปดาห์ ถ้าไม่ดูแลและพัฒนาต่อเนื่อง ผลิตภัณฑ์ดีแค่ไหนก็ค่อยๆ เสื่อมลง'
  const ctaTitle = isEN ? 'Ready for a support partner you can trust?'    : 'พร้อมมีพาร์ตเนอร์ดูแลระบบที่ไว้ใจได้หรือยัง?'
  const ctaDesc  = isEN ? 'Talk to us about your current system. We will propose a support plan that fits your needs and budget.'   : 'คุยกับเราเรื่องระบบปัจจุบันของคุณ เราจะเสนอแพ็กเกจดูแลที่เหมาะกับความต้องการและงบประมาณ'
  const heroBullets = isEN ? [
      'SLA-backed monitoring, alerting, and incident response',
      'Regular security patches, dependency updates, and backups',
      'Performance monitoring and proactive optimisation',
      'Feature development, bug fixes, and iterative improvements',
      'Monthly reporting and strategic product review sessions',
    ] : [
      'เฝ้าระบบ แจ้งเตือน และรับมือเหตุขัดข้องตาม SLA',
      'อุดช่องโหว่ อัปเดต Dependency และสำรองข้อมูลสม่ำเสมอ',
      'เฝ้าดูประสิทธิภาพและปรับปรุงล่วงหน้า',
      'พัฒนาฟีเจอร์ แก้บั๊ก และปรับปรุงต่อเนื่อง',
      'รายงานรายเดือนและประชุมทบทวนผลิตภัณฑ์เชิงกลยุทธ์',
    ]
  const whyPoints   = isEN ? [
      'Systems without active maintenance accumulate security vulnerabilities predictably — it is a matter of when, not if',
      'Proactive monitoring catches performance degradation before users notice',
      'Regular dependency updates prevent the big-bang migration that happens when you fall too far behind',
      'An ongoing partnership with the team that built the product is dramatically more efficient than onboarding new developers',
      'Continuous small improvements compound into significant advantages over 12-24 months',
    ] : [
      'ระบบที่ไม่ได้ดูแลจะสะสมช่องโหว่ด้านความปลอดภัยแน่นอน ไม่ใช่ถ้าแต่เมื่อไหร่',
      'การเฝ้าระบบล่วงหน้าจับประสิทธิภาพที่ตกลงได้ก่อนผู้ใช้จะสังเกตเห็น',
      'อัปเดต Dependency สม่ำเสมอ ช่วยกันไม่ให้ต้องย้ายระบบครั้งใหญ่ ซึ่งเกิดเมื่อปล่อยให้ตามหลังนานเกินไป',
      'การทำงานต่อกับทีมที่สร้างผลิตภัณฑ์เองได้ผลดีกว่าการให้นักพัฒนาใหม่มาเรียนรู้ระบบ',
      'การปรับปรุงเล็กๆ น้อยๆ อย่างต่อเนื่อง สะสมเป็นความได้เปรียบสำคัญภายใน 12-24 เดือน',
    ]
  const outcomes    = isEN ? [
      {stat: '99.9%', label: 'Uptime Achieved', desc: 'With proactive monitoring'},
      {stat: '<1hr', label: 'Incident Response Time', desc: 'SLA-backed guarantee'},
      {stat: '0', label: 'Known Vulnerabilities', desc: 'With regular security patches'},
      {stat: '24/7', label: 'System Monitoring', desc: 'Automated alerts and escalation'}
    ] : [
      {stat: '99.9%', label: 'Uptime ที่ทำได้จริง', desc: 'ด้วยการเฝ้าระบบล่วงหน้า'},
      {stat: '<1 ชม.', label: 'Incident Response Time', desc: 'SLA-backed Guarantee'},
      {stat: '0', label: 'Known Vulnerability', desc: 'ด้วยการอุดช่องโหว่สม่ำเสมอ'},
      {stat: '24/7', label: 'System Monitoring', desc: 'แจ้งเตือนอัตโนมัติและส่งต่อผู้รับผิดชอบ'}
    ]
  const features    = isEN ? [
      {icon: 'ti-activity', title: '24/7 Monitoring & Alerting', desc: 'Monitor uptime, performance, error rate, and security events continuously. Alert the right team immediately.'},
      {icon: 'ti-alarm', title: 'Incident Response', desc: 'On-call engineers respond per agreed SLA, with runbooks for every scenario type.'},
      {icon: 'ti-shield', title: 'Security Maintenance', desc: 'Apply security patches, update dependencies, and run vulnerability scans regularly.'},
      {icon: 'ti-chart-line', title: 'Performance Optimisation', desc: 'Continuously monitor and optimise response time, database queries, and infrastructure.'},
      {icon: 'ti-code', title: 'Bug Fix & Feature Development', desc: 'Fix bugs by priority and develop new features according to an agreed roadmap.'},
      {icon: 'ti-presentation-analytics', title: 'Monthly Review & Reporting', desc: 'Report on system health, incident summary, performance trends, and plan the next quarter.'}
    ] : [
      {icon: 'ti-activity', title: '24/7 Monitoring & Alerting', desc: 'ติดตาม Uptime ประสิทธิภาพ อัตราข้อผิดพลาด และเหตุด้านความปลอดภัยตลอดเวลา และแจ้งทีมที่เกี่ยวข้องทันที'},
      {icon: 'ti-alarm', title: 'Incident Response', desc: 'วิศวกรเวรพร้อมรับมือตาม SLA ที่ตกลง และมีคู่มือรับมือสำหรับทุกสถานการณ์'},
      {icon: 'ti-shield', title: 'Security Maintenance', desc: 'อุดช่องโหว่ อัปเดต Dependency และสแกนหาช่องโหว่สม่ำเสมอ'},
      {icon: 'ti-chart-line', title: 'Performance Optimization', desc: 'เฝ้าดูและปรับเวลาตอบสนอง การดึงข้อมูลจากฐานข้อมูล และโครงสร้างพื้นฐานต่อเนื่อง'},
      {icon: 'ti-code', title: 'Bug Fix & Feature Development', desc: 'แก้บั๊กตามลำดับความสำคัญ และพัฒนาฟีเจอร์ใหม่ตามโรดแมปที่ตกลงร่วมกัน'},
      {icon: 'ti-presentation-analytics', title: 'Monthly Review & Reporting', desc: 'รายงานสถานะระบบ สรุปเหตุขัดข้อง แนวโน้มประสิทธิภาพ และวางแผนไตรมาสถัดไป'}
    ]
  const steps       = isEN ? [
      {no: '01', title: 'System Handover & Audit', desc: 'Receive the system from the dev team, audit completeness, and set up foundational monitoring.'},
      {no: '02', title: 'Monitoring Setup', desc: 'Set up monitoring stack, alert rules, and comprehensive on-call schedule.'},
      {no: '03', title: 'SLA & Runbook', desc: 'Agree on SLAs and build runbooks for every incident type.'},
      {no: '04', title: 'Regular Maintenance', desc: 'Perform scheduled maintenance, security patches, and dependency updates per plan.'},
      {no: '05', title: 'Review & Plan', desc: 'Monthly review together — summarise incidents, performance, and plan the next quarter.'}
    ] : [
      {no: '01', title: 'System Handover & Audit', desc: 'รับระบบจากทีมพัฒนา ตรวจความสมบูรณ์ และตั้งระบบเฝ้าดูพื้นฐาน'},
      {no: '02', title: 'Monitoring Setup', desc: 'ตั้งระบบเฝ้าดู กฎแจ้งเตือน และตารางเวรที่ครอบคลุม'},
      {no: '03', title: 'SLA & Runbook', desc: 'ตกลง SLA ร่วมกัน และทำคู่มือรับมือเหตุขัดข้องทุกประเภท'},
      {no: '04', title: 'Regular Maintenance', desc: 'บำรุงรักษาตามกำหนด อุดช่องโหว่ และอัปเดต Dependency ตามแผน'},
      {no: '05', title: 'Review & Plan', desc: 'ทบทวนร่วมกันทุกเดือน สรุปเหตุขัดข้อง ประสิทธิภาพ และวางแผนไตรมาสถัดไป'}
    ]
  const caseStudies = isEN ? [
      {tag: 'FinTech · Bangkok', title: '3 Years of Support with Zero Critical Incidents', desc: 'Proactive monitoring caught 47 issues before users experienced them over 3 years.', result: '99.97% Uptime for 3 years'},
      {tag: 'E-Commerce · Nationwide', title: 'Maintenance Eliminates Security Incidents', desc: 'Monthly patching and vulnerability scanning with zero security breaches.', result: '0 Security Incidents in 2 years'},
      {tag: 'Healthcare · Bangkok', title: 'Continuous Improvement Triples Performance', desc: '12 months of performance optimisation reduced page load from 4.2s to 1.1s.', result: 'Page Load 3x faster'}
    ] : [
      {tag: 'FinTech · กรุงเทพฯ', title: 'ดูแล 3 ปี ไม่มีเหตุร้ายแรงเลย', desc: 'การเฝ้าระบบล่วงหน้าจับปัญหาได้ 47 ครั้งก่อนผู้ใช้เจอ ในเวลา 3 ปี', result: 'Uptime 99.97% ตลอด 3 ปี'},
      {tag: 'E-Commerce · ทั่วประเทศ', title: 'การบำรุงรักษาลดเหตุด้านความปลอดภัยเหลือศูนย์', desc: 'อุดช่องโหว่และสแกนทุกเดือน ไม่มีการเจาะระบบเลย', result: 'ไม่มีเหตุด้านความปลอดภัยใน 2 ปี'},
      {tag: 'Healthcare · กรุงเทพฯ', title: 'ปรับปรุงต่อเนื่อง ประสิทธิภาพเพิ่ม 3 เท่า', desc: 'ปรับประสิทธิภาพต่อเนื่อง 12 เดือน ลดเวลาโหลดหน้าจาก 4.2s เหลือ 1.1s', result: 'โหลดหน้าเร็วขึ้น 3 เท่า'}
    ]
  const faqs        = isEN ? [
      {q: 'What does the SLA cover?', a: 'It depends on the package. Generally covers response time, resolution time, uptime guarantee, and business hours vs 24/7 support.'},
      {q: 'Can you support a system built by another team?', a: 'Yes. We start with a system audit to understand the architecture, stack, and codebase before taking responsibility.'},
      {q: 'What if we need new features?', a: 'We handle feature development within the support contract, with a shared backlog and quarterly planning.'},
      {q: 'How much does support cost?', a: 'We offer packages from basic SME support to premium 24/7 for critical systems. Contact us for a quote tailored to your needs.'}
    ] : [
      {q: 'SLA ครอบคลุมอะไรบ้าง?', a: 'ขึ้นกับแพ็กเกจที่เลือกครับ โดยทั่วไปครอบคลุมเวลาตอบรับ เวลาแก้ปัญหา การรับประกัน Uptime และเลือกได้ว่าดูแลเฉพาะเวลาทำการหรือ 24/7'},
      {q: 'ดูแลระบบที่ทีมอื่นสร้างได้ไหม?', a: 'ได้ครับ เราเริ่มจากตรวจระบบเพื่อทำความเข้าใจสถาปัตยกรรม เทคโนโลยี และโค้ดก่อนรับผิดชอบ'},
      {q: 'ถ้าต้องการฟีเจอร์ใหม่ทำอย่างไร?', a: 'เราพัฒนาฟีเจอร์ภายใต้สัญญาดูแลได้ครับ โดยมีรายการงานร่วมกันและวางแผนทุกไตรมาส'},
      {q: 'ราคาดูแลระบบเท่าไหร่?', a: 'เริ่มจากแพ็กเกจ Basic สำหรับ SME ไปถึง Premium 24/7 สำหรับระบบสำคัญ ติดต่อเพื่อขอใบเสนอราคาที่ตรงกับความต้องการ'}
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
