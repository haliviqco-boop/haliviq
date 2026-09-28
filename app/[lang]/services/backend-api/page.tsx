import ServiceLayout from '@/components/service/ServiceLayout'
import { type Lang } from '@/lib/i18n'

export async function generateStaticParams() {
  return [{ lang: 'th' }, { lang: 'en' }]
}

export default function Page({ params }: { params: { lang: Lang } }) {
  const isEN = params.lang === 'en'

  const badge    = isEN ? 'Engineering / Backend & API'  : 'Engineering / Backend & API'
  const title    = isEN ? 'Rock-Solid Backend'  : 'Backend ที่แข็งแกร่ง'
  const subtitle = isEN ? 'That Scales and Stays Secure'    : 'รองรับการขยายและปลอดภัย'
  const heroDesc = isEN ? 'The best frontend in the world cannot compensate for a fragile backend. Haliviq engineers reliable, secure server systems and APIs that handle whatever your product throws at them.'  : 'Frontend ที่ดีที่สุดในโลกก็ไม่สามารถชดเชย Backend ที่ Fragile ได้ Haliviq สร้าง Server System และ API ที่เชื่อถือได้ ปลอดภัย และรองรับทุกอย่างที่ Product ของคุณต้องการ'
  const whyTitle = isEN ? 'Why backend quality determines your ceiling'    : 'ทำไมคุณภาพ Backend ถึงกำหนดเพดานของคุณ'
  const whyDesc  = isEN ? 'A poorly designed backend becomes the bottleneck that limits every feature, every user, and every new integration. Fixing it later costs ten times more than building it right the first time.'  : 'Backend ที่ออกแบบมาไม่ดีกลายเป็น Bottleneck ที่จำกัดทุก Feature ทุกผู้ใช้ และทุก Integration ใหม่ การแก้ภายหลังมีต้นทุนสูงกว่าการสร้างให้ถูกต้องตั้งแต่แรก 10 เท่า'
  const ctaTitle = isEN ? 'Ready to build a backend that lasts?'    : 'พร้อมสร้าง Backend ที่คงทนไหม?'
  const ctaDesc  = isEN ? 'Start with a free architecture review. We will identify bottlenecks and risks before they become problems.'   : 'เริ่มด้วย Architecture Review ฟรี เราจะระบุ Bottleneck และความเสี่ยงก่อนที่จะกลายเป็นปัญหา'

  const heroBullets = isEN ? [
      'RESTful and GraphQL API design and development',
      'Microservices and event-driven architecture',
      'Database design, optimisation, and migration',
      'Authentication, authorisation, and security hardening',
      'Load testing, performance profiling, and scalability planning',
    ] : [
      'ออกแบบและพัฒนา RESTful และ GraphQL API',
      'Microservices และ Event-driven Architecture',
      'ออกแบบ Database, Optimize และ Migrate',
      'Authentication, Authorization และ Security Hardening',
      'Load Testing, Performance Profiling และ Scalability Planning',
    ]
  const whyPoints   = isEN ? [
      'API design following REST principles makes third-party integrations trivial and future-proof',
      'Database indexing and query optimisation can reduce response times 10-100x without hardware upgrades',
      'Zero-downtime deployments keep your service running during updates',
      'Rate limiting, input validation, and encryption protect against the most common attack vectors',
      'Event-driven architectures decouple services for independent scaling and deployment',
    ] : [
      'API ที่ออกแบบตาม REST Principles ทำให้ Integration กับ Third-party ง่ายและ Future-proof',
      'Database Indexing และ Query Optimization ลด Response Time ได้ 10-100 เท่าโดยไม่ต้องเพิ่ม Hardware',
      'Zero-downtime Deployment ทำให้ Service ไม่หยุดระหว่าง Update',
      'Rate Limiting, Input Validation และ Encryption ป้องกัน Attack Vector ที่พบบ่อยที่สุด',
      'Event-driven Architecture แยก Service ออกจากกัน ทำให้ Scale และ Deploy อิสระ',
    ]
  const outcomes    = isEN ? [
      {stat: '<100ms', label: 'API Response Time', desc: 'P95 under normal load'},
      {stat: '100x', label: 'Query Speedup', desc: 'With proper indexing'},
      {stat: '0', label: 'Planned Downtime', desc: 'Blue-green deployments'},
      {stat: 'SOC 2', label: 'Security Standard', desc: 'Ready architecture'}
    ] : [
      {stat: '<100ms', label: 'API Response Time', desc: 'P95 ภายใต้ Load ปกติ'},
      {stat: '100x', label: 'Query Speedup', desc: 'ด้วย Proper Indexing'},
      {stat: '0', label: 'Planned Downtime', desc: 'Blue-green Deployments'},
      {stat: 'SOC 2', label: 'Security Standard', desc: 'Ready Architecture'}
    ]
  const features    = isEN ? [
      {icon: 'ti-api', title: 'RESTful & GraphQL API', desc: 'Design clear, documented, and versioned APIs that make integration easy for every team.'},
      {icon: 'ti-database', title: 'Database Design & Optimization', desc: 'Choose the right database, design scalable schemas, and optimise queries for speed.'},
      {icon: 'ti-shield-lock', title: 'Security & Authentication', desc: 'JWT, OAuth 2.0, role-based access control, and encryption both at-rest and in-transit.'},
      {icon: 'ti-topology-star', title: 'Microservices Architecture', desc: 'Break systems into small services that deploy and scale independently.'},
      {icon: 'ti-brand-kafka', title: 'Event-driven & Queue', desc: 'Kafka, RabbitMQ, or AWS SQS for async processing and decoupled services.'},
      {icon: 'ti-activity', title: 'Performance & Load Testing', desc: 'Test before launch with k6 or Locust to understand capacity and bottlenecks in advance.'}
    ] : [
      {icon: 'ti-api', title: 'RESTful & GraphQL API', desc: 'ออกแบบ API ที่ชัดเจน Document ครบ และ Version ได้ ทำให้ Integration ง่ายสำหรับทุกทีม'},
      {icon: 'ti-database', title: 'Database Design & Optimization', desc: 'เลือก Database ที่เหมาะ ออกแบบ Schema ที่ Scale ได้ และ Optimize Query ให้เร็ว'},
      {icon: 'ti-shield-lock', title: 'Security & Authentication', desc: 'JWT, OAuth 2.0, Role-based Access Control และ Encryption ทั้ง At-rest และ In-transit'},
      {icon: 'ti-topology-star', title: 'Microservices Architecture', desc: 'แบ่ง System เป็น Service ย่อยๆ ที่ Deploy และ Scale อิสระต่อกัน'},
      {icon: 'ti-brand-kafka', title: 'Event-driven & Queue', desc: 'Kafka, RabbitMQ หรือ AWS SQS สำหรับ Async Processing และ Decoupled Services'},
      {icon: 'ti-activity', title: 'Performance & Load Testing', desc: 'Test ก่อน Launch ด้วย k6, Locust เพื่อรู้ Capacity และ Bottleneck ล่วงหน้า'}
    ]
  const steps       = isEN ? [
      {no: '01', title: 'Requirements & Architecture Design', desc: 'Analyse requirements and design architecture suited to your scale and budget.'},
      {no: '02', title: 'API Design & Documentation', desc: 'Design the API contract with OpenAPI spec before implementation.'},
      {no: '03', title: 'Development & Testing', desc: 'Build with TDD, comprehensive integration tests, and code review on every PR.'},
      {no: '04', title: 'Security Audit', desc: 'Check OWASP Top 10, run penetration tests, and fix vulnerabilities before launch.'},
      {no: '05', title: 'Deploy & Monitor', desc: 'Set up CI/CD, monitoring, alerting, and on-call runbooks.'}
    ] : [
      {no: '01', title: 'Requirements & Architecture Design', desc: 'วิเคราะห์ความต้องการและออกแบบ Architecture ที่เหมาะกับ Scale และ Budget'},
      {no: '02', title: 'API Design & Documentation', desc: 'ออกแบบ API Contract ด้วย OpenAPI Spec ก่อน Implement'},
      {no: '03', title: 'Development & Testing', desc: 'พัฒนาด้วย TDD, Integration Test ครอบคลุม และ Code Review ทุก PR'},
      {no: '04', title: 'Security Audit', desc: 'ตรวจสอบ OWASP Top 10, Penetration Test และ Fix Vulnerability ก่อน Launch'},
      {no: '05', title: 'Deploy & Monitor', desc: 'Setup CI/CD, Monitoring, Alerting และ On-call Runbook'}
    ]
  const caseStudies = isEN ? [
      {tag: 'FinTech · Bangkok', title: 'Payment API Handling 500K Transactions/Day', desc: 'Microservices architecture that scales with load, achieving 99.97% success rate.', result: '99.97% Transaction Success'},
      {tag: 'Healthcare · Bangkok', title: 'Healthcare API Connecting 15 Systems', desc: 'Integration layer standardising data from multiple legacy systems.', result: 'Integration Time reduced 80%'},
      {tag: 'E-Commerce · Nationwide', title: 'API That Never Drops During Flash Sales', desc: 'Auto-scaling + queue system handling 50x normal traffic spikes.', result: '0 Downtime for 12 months'}
    ] : [
      {tag: 'FinTech · กรุงเทพฯ', title: 'Payment API รองรับ 500K Transaction/วัน', desc: 'Microservices Architecture ที่ Scale ได้ตาม Load และ 99.97% Success Rate', result: '99.97% Transaction Success'},
      {tag: 'Healthcare · กรุงเทพฯ', title: 'Healthcare API เชื่อม 15 ระบบเข้าด้วยกัน', desc: 'Integration Layer ที่ Standardize Data จากหลาย Legacy System', result: 'Integration Time ลด 80%'},
      {tag: 'E-Commerce · ทั่วประเทศ', title: 'API ที่ Load ไม่ตกแม้ Flash Sale', desc: 'Auto-scaling + Queue System รับ Traffic Spike ได้ 50x จาก Normal', result: '0 Downtime ตลอด 12 เดือน'}
    ]
  const faqs        = isEN ? [
      {q: 'Node.js or Python — which is better?', a: 'It depends on use case. Node.js suits real-time and high-throughput; Python suits data processing and ML. We choose based on context.'},
      {q: 'SQL or NoSQL?', a: 'No definitive answer. SQL suits relational data needing consistency; NoSQL suits flexible schemas and high-write loads.'},
      {q: 'Monolith or Microservices?', a: 'We recommend starting with a monolith and extracting services when necessary. Microservices have high overhead for small teams.'},
      {q: 'Can you migrate from our existing system?', a: 'Yes. We have migrated many systems using the Strangler Pattern — migrating piece by piece without downtime.'}
    ] : [
      {q: 'Node.js หรือ Python ดีกว่ากัน?', a: 'ขึ้นอยู่กับ Use Case ครับ Node.js เหมาะกับ Real-time และ High-throughput Python เหมาะกับ Data Processing และ ML เราเลือกตาม Context'},
      {q: 'SQL หรือ NoSQL?', a: 'ไม่มีคำตอบตายตัวครับ SQL เหมาะกับ Relational Data ที่ต้องการ Consistency NoSQL เหมาะกับ Flexible Schema และ High-write Load'},
      {q: 'Monolith หรือ Microservices?', a: 'แนะนำเริ่มจาก Monolith ครับ แล้วค่อย Extract เป็น Service เมื่อจำเป็น Microservices มีต้นทุนสูงถ้า Team เล็กเกินไป'},
      {q: 'จะ Migrate จาก System เก่าได้ไหม?', a: 'ได้ครับ เรามีประสบการณ์ Migration หลายครั้ง ด้วย Strangler Pattern ที่ Migration ทีละส่วนโดยไม่ต้อง Downtime'}
    ]
  const related     = isEN ? [
      {label: 'Cloud & DevOps', href: '/services/cloud-devops'},
      {label: 'Mobile Apps', href: '/services/mobile-apps'},
      {label: 'Web Development', href: '/services/web-development'},
      {label: 'QA & Testing', href: '/services/qa-testing'}
    ] : [
      {label: 'Cloud & DevOps', href: '/services/cloud-devops'},
      {label: 'Mobile Apps', href: '/services/mobile-apps'},
      {label: 'Web Development', href: '/services/web-development'},
      {label: 'QA & Testing', href: '/services/qa-testing'}
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
      heroImg="/images/services/backend-api/hero.jpg"
      whyImg="/images/services/backend-api/why1.jpg"
      whyImg2="/images/services/backend-api/why2.jpg"
      featureImg="/images/services/backend-api/feature.jpg"
      processImg="/images/services/backend-api/process.jpg"
    />
  )
}
