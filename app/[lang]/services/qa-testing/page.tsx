import ServiceLayout from '@/components/service/ServiceLayout'
import { type Lang } from '@/lib/i18n'

export async function generateStaticParams() {
  return [{ lang: 'th' }, { lang: 'en' }]
}

export default function Page({ params }: { params: { lang: Lang } }) {
  const isEN = params.lang === 'en'
  const badge    = isEN ? 'Engineering / QA & Testing'  : 'Engineering / QA & Testing'
  const title    = isEN ? 'Software You Can'  : 'ซอฟต์แวร์ที่คุณ'
  const subtitle = isEN ? 'Trust Every Time'    : 'เชื่อใจได้ทุกครั้ง'
  const heroDesc = isEN ? 'Bugs in production cost 100x more to fix than bugs caught in testing. Haliviq builds comprehensive QA programmes that catch issues before your users do — at every layer of your system.'  : 'บั๊กที่หลุดไปถึงระบบจริงมีต้นทุนแก้สูงกว่าบั๊กที่เจอตอนทดสอบถึง 100 เท่า Haliviq วางระบบ QA ที่ตรวจทุกส่วนของระบบ เพื่อให้เจอปัญหาก่อนผู้ใช้'
  const whyTitle = isEN ? 'Why QA is not optional'    : 'ทำไมต้องมี QA'
  const whyDesc  = isEN ? 'A single critical bug in production can cost more than an entire QA programme. Beyond the direct cost, the reputational damage from public failures is nearly impossible to quantify.'  : 'บั๊กร้ายแรงตัวเดียวบนระบบจริงอาจเสียหายมากกว่าค่า QA ทั้งโปรแกรม ยังไม่นับชื่อเสียงที่เสียไปเมื่อปัญหาเกิดต่อหน้าสาธารณะ ซึ่งแทบวัดเป็นตัวเลขไม่ได้'
  const ctaTitle = isEN ? 'Ready to ship with confidence?'    : 'พร้อมปล่อยระบบอย่างมั่นใจหรือยัง?'
  const ctaDesc  = isEN ? 'Get a free QA Audit. We will assess your current test coverage and identify the biggest risks.'   : 'ขอตรวจ QA ฟรี เราจะดูว่าตอนนี้ทดสอบครอบคลุมแค่ไหน และชี้ความเสี่ยงที่ใหญ่ที่สุด'
  const heroBullets = isEN ? [
      'Test strategy, planning, and coverage analysis',
      'Manual functional testing and exploratory testing',
      'Automated regression testing and CI/CD integration',
      'Performance, load, and stress testing',
      'Security testing and vulnerability assessment',
    ] : [
      'วางแผนการทดสอบและวิเคราะห์ว่าทดสอบครอบคลุมแค่ไหน',
      'ทดสอบการทำงานด้วยมือ และทดสอบแบบสำรวจหาจุดผิดปกติ',
      'Regression Test อัตโนมัติ เชื่อมกับ CI/CD',
      'ทดสอบประสิทธิภาพ รับโหลด และรับภาระหนัก',
      'ทดสอบความปลอดภัยและประเมินช่องโหว่',
    ]
  const whyPoints   = isEN ? [
      'Automated test suites reduce regression testing time 80%, enabling faster release cycles',
      'Load testing before launch identifies capacity limits — preventing the worst possible first impression',
      'Security testing is now a regulatory requirement in many industries',
      'Shift-left testing costs 10-100x less than finding bugs after release',
      'A well-tested codebase attracts better engineers who want to work on quality products',
    ] : [
      'ชุดทดสอบอัตโนมัติลดเวลา Regression Test ได้ 80% ปล่อยเวอร์ชันใหม่ได้เร็วขึ้น',
      'ทดสอบโหลดก่อนเปิดตัวจะรู้ว่าระบบรับได้แค่ไหน ไม่ต้องล่มตั้งแต่วันแรก',
      'การทดสอบความปลอดภัยเป็นข้อบังคับในหลายอุตสาหกรรม',
      'ทดสอบตั้งแต่ต้นทางเจอบั๊กเร็ว แก้ถูกกว่าไปเจอหลังปล่อย 10-100 เท่า',
      'โค้ดที่ทดสอบดีดึงดูดวิศวกรเก่งๆ ที่อยากทำงานกับสินค้าคุณภาพ',
    ]
  const outcomes    = isEN ? [
      {stat: '80%', label: 'Faster Regression Testing', desc: 'With test automation'},
      {stat: '100x', label: 'Cheaper to Fix Early', desc: 'vs production bugs'},
      {stat: '0', label: 'Critical Bugs at Launch', desc: 'With full pre-launch QA'},
      {stat: 'OWASP', label: 'Security Standard', desc: 'Top 10 vulnerabilities covered'}
    ] : [
      {stat: '80%', label: 'Regression Test เร็วขึ้น', desc: 'ด้วยการทดสอบอัตโนมัติ'},
      {stat: '100x', label: 'ถูกกว่าแก้บั๊กหลังปล่อยจริง', desc: 'vs Production Bug'},
      {stat: '0', label: 'บั๊กร้ายแรงตอนเปิดตัว', desc: 'เพราะมี QA เต็มรูปแบบก่อนเปิดตัว'},
      {stat: 'OWASP', label: 'Security Standard', desc: 'ครอบคลุมช่องโหว่ 10 อันดับแรก'}
    ]
  const features    = isEN ? [
      {icon: 'ti-checklist', title: 'Manual & Exploratory Testing', desc: 'Comprehensive functional testing plus exploratory testing to find edge cases automated scripts miss.'},
      {icon: 'ti-robot', title: 'Test Automation', desc: 'Write automated tests with Playwright, Cypress, or Selenium that run on every PR in CI/CD.'},
      {icon: 'ti-chart-arrows', title: 'Performance & Load Testing', desc: 'Test with k6, Locust, or JMeter to know your system capacity before launch.'},
      {icon: 'ti-shield-check', title: 'Security Testing', desc: 'Check OWASP Top 10, SQL injection, XSS, and other vulnerabilities before production.'},
      {icon: 'ti-device-tablet-check', title: 'Cross-platform & Device Testing', desc: 'Test across browsers, OS versions, and devices so every user gets the same experience.'},
      {icon: 'ti-api', title: 'API Testing', desc: 'Test API contracts, edge cases, error handling, and authentication across every endpoint.'}
    ] : [
      {icon: 'ti-checklist', title: 'Manual & Exploratory Testing', desc: 'ทดสอบทุกฟังก์ชันอย่างละเอียด และสำรวจหาเคสแปลกๆ ที่สคริปต์มองไม่เห็น'},
      {icon: 'ti-robot', title: 'Test Automation', desc: 'เขียนชุดทดสอบอัตโนมัติด้วย Playwright, Cypress หรือ Selenium ให้รันทุกครั้งที่มี PR ใน CI/CD'},
      {icon: 'ti-chart-arrows', title: 'Performance & Load Testing', desc: 'ทดสอบด้วย k6, Locust หรือ JMeter ให้รู้ว่าระบบรับโหลดได้แค่ไหนก่อนเปิดตัว'},
      {icon: 'ti-shield-check', title: 'Security Testing', desc: 'ตรวจ OWASP Top 10, SQL Injection, XSS และช่องโหว่อื่นๆ ก่อนขึ้นระบบจริง'},
      {icon: 'ti-device-tablet-check', title: 'Cross-platform & Device Testing', desc: 'ทดสอบบนเบราว์เซอร์ ระบบปฏิบัติการ และอุปกรณ์หลายแบบ ให้ผู้ใช้ทุกคนได้ประสบการณ์เหมือนกัน'},
      {icon: 'ti-api', title: 'API Testing', desc: 'ทดสอบ API ทั้งสัญญาข้อมูล เคสพิเศษ การจัดการข้อผิดพลาด และการยืนยันตัวตน ทุก Endpoint'}
    ]
  const steps       = isEN ? [
      {no: '01', title: 'Test Planning', desc: 'Analyse requirements, define test strategy, coverage goals, and risk areas.'},
      {no: '02', title: 'Test Case Design', desc: 'Write test cases covering happy paths, edge cases, and negative scenarios.'},
      {no: '03', title: 'Test Execution', desc: 'Run manual tests, automated tests, performance tests, and security scans.'},
      {no: '04', title: 'Bug Reporting & Tracking', desc: 'Report bugs with steps to reproduce and priority, and track until fully resolved.'},
      {no: '05', title: 'Regression & Sign-off', desc: 'Run regression tests after fixes and sign off when all quality gates pass.'}
    ] : [
      {no: '01', title: 'Test Planning', desc: 'วิเคราะห์ความต้องการ วางกลยุทธ์ทดสอบ ตั้งเป้าความครอบคลุม และระบุจุดเสี่ยง'},
      {no: '02', title: 'Test Case Design', desc: 'เขียน Test Case ให้ครอบคลุมทั้งกรณีปกติ กรณีพิเศษ และกรณีที่ควรล้มเหลว'},
      {no: '03', title: 'Test Execution', desc: 'รันทดสอบด้วยมือ ทดสอบอัตโนมัติ ทดสอบประสิทธิภาพ และสแกนความปลอดภัย'},
      {no: '04', title: 'Bug Reporting & Tracking', desc: 'รายงานบั๊กพร้อมขั้นตอนทำซ้ำและลำดับความสำคัญ แล้วติดตามจนแก้ครบ'},
      {no: '05', title: 'Regression & Sign-off', desc: 'รัน Regression Test หลังแก้บั๊ก และอนุมัติเมื่อผ่านเกณฑ์คุณภาพครบ'}
    ]
  const caseStudies = isEN ? [
      {tag: 'FinTech · Bangkok', title: 'Automated Tests Cut Regression Time 80%', desc: 'Built a 500-test suite in 6 weeks running on every PR in 12 minutes.', result: 'Release cycle reduced from 2 weeks to 3 days'},
      {tag: 'E-Commerce · Nationwide', title: 'Load Test Prevents Flash Sale Crash', desc: 'Discovered system crashed at 500 concurrent users before launch — fixed and scaled in time.', result: '0 Downtime on Flash Sale day'},
      {tag: 'Healthcare · Bangkok', title: 'Security Audit Finds 12 Critical Vulnerabilities', desc: 'OWASP assessment before launch found and fixed vulnerabilities that would have exposed patient data.', result: '0 Security Incidents after launch'}
    ] : [
      {tag: 'FinTech · กรุงเทพฯ', title: 'ทดสอบอัตโนมัติลดเวลา Regression Test 80%', desc: 'สร้างชุดทดสอบ 500 รายการใน 6 สัปดาห์ รันทุก PR ใน 12 นาที', result: 'รอบปล่อยเวอร์ชันลดจาก 2 สัปดาห์ เหลือ 3 วัน'},
      {tag: 'E-Commerce · ทั่วประเทศ', title: 'ทดสอบโหลดกันระบบล่มช่วง Flash Sale', desc: 'ก่อนเปิดตัวพบว่าระบบล่มที่ผู้ใช้พร้อมกัน 500 คน จึงแก้และขยายระบบได้ทัน', result: 'ไม่มีระบบล่มในวัน Flash Sale'},
      {tag: 'Healthcare · กรุงเทพฯ', title: 'ตรวจความปลอดภัยพบช่องโหว่ร้ายแรง 12 จุด', desc: 'ตรวจตามมาตรฐาน OWASP ก่อนเปิดตัว พบและแก้ช่องโหว่ที่อาจทำให้ข้อมูลผู้ป่วยรั่ว', result: 'ไม่มีเหตุด้านความปลอดภัยหลังเปิดตัว'}
    ]
  const faqs        = isEN ? [
      {q: 'What is the difference between manual and automated testing?', a: 'Manual testing suits exploratory, UX, and one-time scenarios. Automated testing suits regression, repetitive, and high-frequency scenarios. Both complement each other.'},
      {q: 'How long does it take to build automated tests?', a: 'It depends on desired coverage. Basic unit tests take 1-2 weeks. A full E2E suite for a medium-sized app may take 4-8 weeks.'},
      {q: 'When should QA start?', a: 'The earlier the better. Shift-left testing means starting from design and development, not waiting for a QA phase.'},
      {q: 'Do we need an in-house QA team?', a: 'Not necessarily. We offer QA as a Service both project-based and as an ongoing retainer.'}
    ] : [
      {q: 'ทดสอบด้วยมือกับทดสอบอัตโนมัติต่างกันอย่างไร?', a: 'ทดสอบด้วยมือเหมาะกับงานสำรวจ งานด้าน UX และเคสที่ทำครั้งเดียว ส่วนทดสอบอัตโนมัติเหมาะกับ Regression และเคสที่ต้องทำซ้ำบ่อยๆ สองแบบใช้เสริมกัน'},
      {q: 'สร้างชุดทดสอบอัตโนมัติใช้เวลานานแค่ไหน?', a: 'ขึ้นกับว่าต้องการครอบคลุมแค่ไหนครับ Unit Test พื้นฐานใช้ 1-2 สัปดาห์ ชุด E2E เต็มรูปแบบสำหรับแอปขนาดกลางอาจใช้ 4-8 สัปดาห์'},
      {q: 'ควรเริ่ม QA เมื่อไหร่?', a: 'ยิ่งเร็วยิ่งดีครับ การทดสอบตั้งแต่ต้นทางคือเริ่มทดสอบตั้งแต่ออกแบบและพัฒนา ไม่ต้องรอถึงช่วง QA'},
      {q: 'ต้องมีทีม QA ในบริษัทไหม?', a: 'ไม่จำเป็นครับ เรารับทำ QA เป็นบริการ ทั้งแบบรายโปรเจกต์และแบบรายเดือนต่อเนื่อง'}
    ]
  const related     = isEN ? [
      {label: 'Backend & API', href: '/services/backend-api'},
      {label: 'Cloud & DevOps', href: '/services/cloud-devops'},
      {label: 'Web Development', href: '/services/web-development'},
      {label: 'Mobile Apps', href: '/services/mobile-apps'}
    ] : [
      {label: 'Backend & API', href: '/services/backend-api'},
      {label: 'Cloud & DevOps', href: '/services/cloud-devops'},
      {label: 'Web Development', href: '/services/web-development'},
      {label: 'Mobile Apps', href: '/services/mobile-apps'}
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
      heroImg="/images/services/qa-testing/hero.jpg"
      whyImg="/images/services/qa-testing/why1.jpg"
      whyImg2="/images/services/qa-testing/why2.jpg"
      featureImg="/images/services/qa-testing/feature.jpg"
      processImg="/images/services/qa-testing/process.jpg"
    />
  )
}
