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
  const heroDesc = isEN ? 'Bugs in production cost 100x more to fix than bugs caught in testing. Haliviq builds comprehensive QA programmes that catch issues before your users do — at every layer of your system.'  : 'Bug ใน Production มีต้นทุนสูงกว่าที่จับได้ในการ Test ถึง 100 เท่า Haliviq สร้าง QA Programme ที่ครอบคลุมเพื่อจับ Issue ก่อนที่ผู้ใช้จะเจอ ทุก Layer ของระบบ'
  const whyTitle = isEN ? 'Why QA is not optional'    : 'ทำไม QA ถึงไม่ใช่ Optional'
  const whyDesc  = isEN ? 'A single critical bug in production can cost more than an entire QA programme. Beyond the direct cost, the reputational damage from public failures is nearly impossible to quantify.'  : 'Bug Critical เพียงหนึ่งตัวใน Production อาจมีต้นทุนมากกว่า QA Programme ทั้งหมด นอกจาก Direct Cost แล้ว Reputational Damage จาก Public Failure ยังแทบประเมินค่าไม่ได้'
  const ctaTitle = isEN ? 'Ready to ship with confidence?'    : 'พร้อม Ship ด้วยความมั่นใจไหม?'
  const ctaDesc  = isEN ? 'Get a free QA Audit. We will assess your current test coverage and identify the biggest risks.'   : 'ขอ QA Audit ฟรี เราจะประเมิน Test Coverage ปัจจุบันและระบุความเสี่ยงที่ใหญ่ที่สุด'
  const heroBullets = isEN ? [
      'Test strategy, planning, and coverage analysis',
      'Manual functional testing and exploratory testing',
      'Automated regression testing and CI/CD integration',
      'Performance, load, and stress testing',
      'Security testing and vulnerability assessment',
    ] : [
      'วางแผน Test Strategy, Planning และ Coverage Analysis',
      'Manual Functional Testing และ Exploratory Testing',
      'Automated Regression Testing และ CI/CD Integration',
      'Performance, Load และ Stress Testing',
      'Security Testing และ Vulnerability Assessment',
    ]
  const whyPoints   = isEN ? [
      'Automated test suites reduce regression testing time 80%, enabling faster release cycles',
      'Load testing before launch identifies capacity limits — preventing the worst possible first impression',
      'Security testing is now a regulatory requirement in many industries',
      'Shift-left testing costs 10-100x less than finding bugs after release',
      'A well-tested codebase attracts better engineers who want to work on quality products',
    ] : [
      'Automated Test Suite ลดเวลา Regression Testing 80% ทำให้ Release Cycle เร็วขึ้น',
      'Load Testing ก่อน Launch ระบุ Capacity Limit ป้องกัน First Impression ที่แย่ที่สุด',
      'Security Testing กลายเป็น Regulatory Requirement ในหลายอุตสาหกรรม',
      'Shift-left Testing จับ Bug ตั้งแต่เนิ่นๆ มีต้นทุนต่ำกว่าการพบหลัง Release 10-100 เท่า',
      'Codebase ที่ Test ดีดึงดูด Engineer ที่ดีกว่าที่ต้องการทำงานกับ Quality Product',
    ]
  const outcomes    = isEN ? [
      {stat: '80%', label: 'Faster Regression Testing', desc: 'With test automation'},
      {stat: '100x', label: 'Cheaper to Fix Early', desc: 'vs production bugs'},
      {stat: '0', label: 'Critical Bugs at Launch', desc: 'With full pre-launch QA'},
      {stat: 'OWASP', label: 'Security Standard', desc: 'Top 10 vulnerabilities covered'}
    ] : [
      {stat: '80%', label: 'Regression Testing เร็วขึ้น', desc: 'ด้วย Test Automation'},
      {stat: '100x', label: 'ถูกกว่าการแก้ Bug ตั้งแต่แรก', desc: 'vs Production Bug'},
      {stat: '0', label: 'Critical Bug ตอน Launch', desc: 'ด้วย Full Pre-launch QA'},
      {stat: 'OWASP', label: 'Security Standard', desc: 'Top 10 Vulnerabilities ครอบคลุม'}
    ]
  const features    = isEN ? [
      {icon: 'ti-checklist', title: 'Manual & Exploratory Testing', desc: 'Comprehensive functional testing plus exploratory testing to find edge cases automated scripts miss.'},
      {icon: 'ti-robot', title: 'Test Automation', desc: 'Write automated tests with Playwright, Cypress, or Selenium that run on every PR in CI/CD.'},
      {icon: 'ti-chart-arrows', title: 'Performance & Load Testing', desc: 'Test with k6, Locust, or JMeter to know your system capacity before launch.'},
      {icon: 'ti-shield-check', title: 'Security Testing', desc: 'Check OWASP Top 10, SQL injection, XSS, and other vulnerabilities before production.'},
      {icon: 'ti-device-tablet-check', title: 'Cross-platform & Device Testing', desc: 'Test across browsers, OS versions, and devices so every user gets the same experience.'},
      {icon: 'ti-api', title: 'API Testing', desc: 'Test API contracts, edge cases, error handling, and authentication across every endpoint.'}
    ] : [
      {icon: 'ti-checklist', title: 'Manual & Exploratory Testing', desc: 'ทดสอบ Functionality ทุกส่วนอย่างครอบคลุม พร้อม Exploratory Testing เพื่อหา Edge Case ที่ Script พลาด'},
      {icon: 'ti-robot', title: 'Test Automation', desc: 'เขียน Automated Test ด้วย Playwright, Cypress หรือ Selenium ที่ Run ทุก PR ใน CI/CD'},
      {icon: 'ti-chart-arrows', title: 'Performance & Load Testing', desc: 'Test ด้วย k6, Locust หรือ JMeter เพื่อรู้ว่าระบบรับ Load ได้แค่ไหนก่อน Launch'},
      {icon: 'ti-shield-check', title: 'Security Testing', desc: 'ตรวจสอบ OWASP Top 10, SQL Injection, XSS และ Vulnerability อื่นๆ ก่อน Production'},
      {icon: 'ti-device-tablet-check', title: 'Cross-platform & Device Testing', desc: 'Test บน Browser, OS Version และ Device หลากหลาย เพื่อให้ User ทุกคนได้รับประสบการณ์เดียวกัน'},
      {icon: 'ti-api', title: 'API Testing', desc: 'Test API Contract, Edge Case, Error Handling และ Authentication ทุก Endpoint'}
    ]
  const steps       = isEN ? [
      {no: '01', title: 'Test Planning', desc: 'Analyse requirements, define test strategy, coverage goals, and risk areas.'},
      {no: '02', title: 'Test Case Design', desc: 'Write test cases covering happy paths, edge cases, and negative scenarios.'},
      {no: '03', title: 'Test Execution', desc: 'Run manual tests, automated tests, performance tests, and security scans.'},
      {no: '04', title: 'Bug Reporting & Tracking', desc: 'Report bugs with steps to reproduce and priority, and track until fully resolved.'},
      {no: '05', title: 'Regression & Sign-off', desc: 'Run regression tests after fixes and sign off when all quality gates pass.'}
    ] : [
      {no: '01', title: 'Test Planning', desc: 'วิเคราะห์ Requirement, กำหนด Test Strategy, Coverage Goal และ Risk Area'},
      {no: '02', title: 'Test Case Design', desc: 'เขียน Test Case ครอบคลุม Happy Path, Edge Case และ Negative Scenario'},
      {no: '03', title: 'Test Execution', desc: 'Run Manual Test, Automated Test, Performance Test และ Security Scan'},
      {no: '04', title: 'Bug Reporting & Tracking', desc: 'Report Bug พร้อม Steps to Reproduce, Priority และ Track จนแก้ไขครบ'},
      {no: '05', title: 'Regression & Sign-off', desc: 'Run Regression Test หลังแก้ Bug และ Sign-off เมื่อ Quality Gate ผ่านครบ'}
    ]
  const caseStudies = isEN ? [
      {tag: 'FinTech · Bangkok', title: 'Automated Tests Cut Regression Time 80%', desc: 'Built a 500-test suite in 6 weeks running on every PR in 12 minutes.', result: 'Release cycle reduced from 2 weeks to 3 days'},
      {tag: 'E-Commerce · Nationwide', title: 'Load Test Prevents Flash Sale Crash', desc: 'Discovered system crashed at 500 concurrent users before launch — fixed and scaled in time.', result: '0 Downtime on Flash Sale day'},
      {tag: 'Healthcare · Bangkok', title: 'Security Audit Finds 12 Critical Vulnerabilities', desc: 'OWASP assessment before launch found and fixed vulnerabilities that would have exposed patient data.', result: '0 Security Incidents after launch'}
    ] : [
      {tag: 'FinTech · กรุงเทพฯ', title: 'Automated Test ลด Regression Time 80%', desc: 'สร้าง Test Suite 500 Test ใน 6 สัปดาห์ Run ทุก PR ใน 12 นาที', result: 'Release Cycle ลดจาก 2 สัปดาห์ เหลือ 3 วัน'},
      {tag: 'E-Commerce · ทั่วประเทศ', title: 'Load Test ป้องกัน Crash ใน Flash Sale', desc: 'พบว่าระบบ Crash ที่ 500 Concurrent User ก่อน Launch แก้และ Scale ได้ทัน', result: '0 Downtime ในวัน Flash Sale'},
      {tag: 'Healthcare · กรุงเทพฯ', title: 'Security Audit พบ 12 Critical Vulnerability', desc: 'OWASP Assessment ก่อน Launch พบและแก้ไข Vulnerability ที่อาจ Expose ข้อมูลผู้ป่วย', result: '0 Security Incident หลัง Launch'}
    ]
  const faqs        = isEN ? [
      {q: 'What is the difference between manual and automated testing?', a: 'Manual testing suits exploratory, UX, and one-time scenarios. Automated testing suits regression, repetitive, and high-frequency scenarios. Both complement each other.'},
      {q: 'How long does it take to build automated tests?', a: 'It depends on desired coverage. Basic unit tests take 1-2 weeks. A full E2E suite for a medium-sized app may take 4-8 weeks.'},
      {q: 'When should QA start?', a: 'The earlier the better. Shift-left testing means starting from design and development, not waiting for a QA phase.'},
      {q: 'Do we need an in-house QA team?', a: 'Not necessarily. We offer QA as a Service both project-based and as an ongoing retainer.'}
    ] : [
      {q: 'Manual Test กับ Automated Test ต่างกันยังไง?', a: 'Manual Test เหมาะกับ Exploratory, UX และ One-time Scenario Automated Test เหมาะกับ Regression, Repetitive และ High-frequency Scenario ทั้งสองเสริมกัน'},
      {q: 'Automated Test ใช้เวลานานแค่ไหนในการสร้าง?', a: 'ขึ้นอยู่กับขนาด Coverage ที่ต้องการครับ Unit Test พื้นฐานใช้ 1-2 สัปดาห์ Full E2E Suite สำหรับ App ขนาดกลางอาจใช้ 4-8 สัปดาห์'},
      {q: 'QA ควรเริ่มเมื่อไหร่?', a: 'ยิ่งเร็วยิ่งดีครับ Shift-left Testing หมายถึงเริ่ม Test ตั้งแต่ Design และ Development ไม่ใช่รอ QA Phase'},
      {q: 'ต้องมี QA Team ในบริษัทไหม?', a: 'ไม่จำเป็นครับ เราให้บริการ QA as a Service ทั้งแบบ Project-based และ Ongoing Retainer'}
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
