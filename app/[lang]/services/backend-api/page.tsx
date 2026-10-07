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
  const heroDesc = isEN ? 'The best frontend in the world cannot compensate for a fragile backend. Haliviq engineers reliable, secure server systems and APIs that handle whatever your product throws at them.'  : 'Frontend ที่ดีแค่ไหนก็ชดเชย Backend ที่เปราะบางไม่ได้ Haliviq สร้างระบบเซิร์ฟเวอร์และ API ที่เชื่อถือได้ ปลอดภัย และรองรับทุกอย่างที่ผลิตภัณฑ์ของคุณต้องการ'
  const whyTitle = isEN ? 'Why backend quality determines your ceiling'    : 'ทำไมคุณภาพ Backend ถึงเป็นเพดานของธุรกิจคุณ'
  const whyDesc  = isEN ? 'A poorly designed backend becomes the bottleneck that limits every feature, every user, and every new integration. Fixing it later costs ten times more than building it right the first time.'  : 'Backend ที่ออกแบบไม่ดีจะกลายเป็นคอขวดที่จำกัดทุกฟีเจอร์ ทุกผู้ใช้ และทุกการเชื่อมระบบใหม่ การแก้ทีหลังมีต้นทุนสูงกว่าสร้างให้ถูกตั้งแต่แรก 10 เท่า'
  const ctaTitle = isEN ? 'Ready to build a backend that lasts?'    : 'พร้อมสร้าง Backend ที่ทนทานหรือยัง?'
  const ctaDesc  = isEN ? 'Start with a free architecture review. We will identify bottlenecks and risks before they become problems.'   : 'เริ่มด้วยการรีวิวสถาปัตยกรรมฟรี เราจะระบุคอขวดและความเสี่ยงก่อนที่จะกลายเป็นปัญหา'

  const heroBullets = isEN ? [
      'RESTful and GraphQL API design and development',
      'Microservices and event-driven architecture',
      'Database design, optimisation, and migration',
      'Authentication, authorisation, and security hardening',
      'Load testing, performance profiling, and scalability planning',
    ] : [
      'ออกแบบและพัฒนา RESTful และ GraphQL API',
      'Microservices และ Event-driven Architecture',
      'ออกแบบฐานข้อมูล ปรับให้เร็ว และย้ายข้อมูล',
      'ระบบยืนยันตัวตน สิทธิ์การเข้าถึง และเสริมความปลอดภัย',
      'ทดสอบภาระงาน วัดประสิทธิภาพ และวางแผนการขยายระบบ',
    ]
  const whyPoints   = isEN ? [
      'API design following REST principles makes third-party integrations trivial and future-proof',
      'Database indexing and query optimisation can reduce response times 10-100x without hardware upgrades',
      'Zero-downtime deployments keep your service running during updates',
      'Rate limiting, input validation, and encryption protect against the most common attack vectors',
      'Event-driven architectures decouple services for independent scaling and deployment',
    ] : [
      'API ที่ออกแบบตามหลัก REST ทำให้เชื่อมกับระบบภายนอกได้ง่ายและรองรับอนาคต',
      'การทำ Index และปรับ Query ของฐานข้อมูลลดเวลาตอบสนองได้ 10-100 เท่าโดยไม่ต้องเพิ่มฮาร์ดแวร์',
      'Deploy แบบไม่มี Downtime ทำให้บริการไม่หยุดระหว่างอัปเดต',
      'การจำกัดจำนวนคำขอ ตรวจสอบข้อมูลขาเข้า และเข้ารหัส ช่วยป้องกันการโจมตีที่พบบ่อยที่สุด',
      'Event-driven Architecture แยกบริการออกจากกัน ทำให้ขยายและ Deploy ได้อิสระ',
    ]
  const outcomes    = isEN ? [
      {stat: '<100ms', label: 'API Response Time', desc: 'P95 under normal load'},
      {stat: '100x', label: 'Query Speedup', desc: 'With proper indexing'},
      {stat: '0', label: 'Planned Downtime', desc: 'Blue-green deployments'},
      {stat: 'SOC 2', label: 'Security Standard', desc: 'Ready architecture'}
    ] : [
      {stat: '<100ms', label: 'API Response Time', desc: 'P95 ภายใต้ภาระงานปกติ'},
      {stat: '100x', label: 'Query Speedup', desc: 'ด้วยการทำ Index ที่เหมาะสม'},
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
      {icon: 'ti-api', title: 'RESTful & GraphQL API', desc: 'ออกแบบ API ให้ชัดเจน มีเอกสารครบ และแยกเวอร์ชันได้ ทำให้ทุกทีมเชื่อมระบบได้ง่าย'},
      {icon: 'ti-database', title: 'Database Design & Optimization', desc: 'เลือกฐานข้อมูลที่เหมาะ ออกแบบ Schema ที่ขยายได้ และปรับ Query ให้เร็ว'},
      {icon: 'ti-shield-lock', title: 'Security & Authentication', desc: 'JWT, OAuth 2.0, Role-based Access Control และการเข้ารหัสทั้งตอนเก็บและตอนส่งข้อมูล'},
      {icon: 'ti-topology-star', title: 'Microservices Architecture', desc: 'แบ่งระบบเป็นบริการย่อยๆ ที่ Deploy และขยายได้อิสระต่อกัน'},
      {icon: 'ti-brand-kafka', title: 'Event-driven & Queue', desc: 'Kafka, RabbitMQ หรือ AWS SQS สำหรับประมวลผลแบบ Async และแยกบริการออกจากกัน'},
      {icon: 'ti-activity', title: 'Performance & Load Testing', desc: 'ทดสอบก่อนเปิดใช้งานด้วย k6 และ Locust เพื่อรู้ขีดความสามารถและคอขวดล่วงหน้า'}
    ]
  const steps       = isEN ? [
      {no: '01', title: 'Requirements & Architecture Design', desc: 'Analyse requirements and design architecture suited to your scale and budget.'},
      {no: '02', title: 'API Design & Documentation', desc: 'Design the API contract with OpenAPI spec before implementation.'},
      {no: '03', title: 'Development & Testing', desc: 'Build with TDD, comprehensive integration tests, and code review on every PR.'},
      {no: '04', title: 'Security Audit', desc: 'Check OWASP Top 10, run penetration tests, and fix vulnerabilities before launch.'},
      {no: '05', title: 'Deploy & Monitor', desc: 'Set up CI/CD, monitoring, alerting, and on-call runbooks.'}
    ] : [
      {no: '01', title: 'Requirements & Architecture Design', desc: 'วิเคราะห์ความต้องการและออกแบบสถาปัตยกรรมให้เหมาะกับขนาดงานและงบประมาณ'},
      {no: '02', title: 'API Design & Documentation', desc: 'ออกแบบ API Contract ด้วย OpenAPI Spec ก่อนลงมือพัฒนา'},
      {no: '03', title: 'Development & Testing', desc: 'พัฒนาด้วย TDD ทำ Integration Test ครอบคลุม และรีวิวโค้ดทุก PR'},
      {no: '04', title: 'Security Audit', desc: 'ตรวจตาม OWASP Top 10 ทำ Penetration Test และแก้ช่องโหว่ก่อนเปิดใช้งาน'},
      {no: '05', title: 'Deploy & Monitor', desc: 'ตั้งค่า CI/CD ระบบติดตามและแจ้งเตือน และคู่มือสำหรับทีมเวร (On-call Runbook)'}
    ]
  const caseStudies = isEN ? [
      {tag: 'FinTech · Bangkok', title: 'Payment API Handling 500K Transactions/Day', desc: 'Microservices architecture that scales with load, achieving 99.97% success rate.', result: '99.97% Transaction Success'},
      {tag: 'Healthcare · Bangkok', title: 'Healthcare API Connecting 15 Systems', desc: 'Integration layer standardising data from multiple legacy systems.', result: 'Integration Time reduced 80%'},
      {tag: 'E-Commerce · Nationwide', title: 'API That Never Drops During Flash Sales', desc: 'Auto-scaling + queue system handling 50x normal traffic spikes.', result: '0 Downtime for 12 months'}
    ] : [
      {tag: 'FinTech · กรุงเทพฯ', title: 'Payment API รองรับ 500K ธุรกรรม/วัน', desc: 'Microservices Architecture ที่ขยายตามภาระงานได้ และมีอัตราสำเร็จ 99.97%', result: '99.97% Transaction Success'},
      {tag: 'Healthcare · กรุงเทพฯ', title: 'Healthcare API เชื่อม 15 ระบบเข้าด้วยกัน', desc: 'ชั้นเชื่อมระบบที่ปรับข้อมูลจากหลายระบบเก่าให้เป็นรูปแบบเดียวกัน', result: 'เวลาเชื่อมระบบลด 80%'},
      {tag: 'E-Commerce · ทั่วประเทศ', title: 'API ที่ไม่ล่มแม้ช่วง Flash Sale', desc: 'Auto-scaling และระบบคิวรับ Traffic ที่พุ่งสูงกว่าปกติได้ 50 เท่า', result: '0 Downtime ตลอด 12 เดือน'}
    ]
  const faqs        = isEN ? [
      {q: 'Node.js or Python — which is better?', a: 'It depends on use case. Node.js suits real-time and high-throughput; Python suits data processing and ML. We choose based on context.'},
      {q: 'SQL or NoSQL?', a: 'No definitive answer. SQL suits relational data needing consistency; NoSQL suits flexible schemas and high-write loads.'},
      {q: 'Monolith or Microservices?', a: 'We recommend starting with a monolith and extracting services when necessary. Microservices have high overhead for small teams.'},
      {q: 'Can you migrate from our existing system?', a: 'Yes. We have migrated many systems using the Strangler Pattern — migrating piece by piece without downtime.'}
    ] : [
      {q: 'Node.js หรือ Python ดีกว่ากัน?', a: 'ขึ้นอยู่กับงาน Node.js เหมาะกับงาน Real-time และรับปริมาณสูง Python เหมาะกับการประมวลผลข้อมูลและ ML เราเลือกตามบริบทของงาน'},
      {q: 'SQL หรือ NoSQL?', a: 'ไม่มีคำตอบตายตัว SQL เหมาะกับข้อมูลเชิงความสัมพันธ์ที่ต้องการความสอดคล้อง NoSQL เหมาะกับ Schema ที่ยืดหยุ่นและงานเขียนข้อมูลปริมาณสูง'},
      {q: 'Monolith หรือ Microservices?', a: 'แนะนำให้เริ่มจาก Monolith แล้วค่อยแยกเป็นบริการเมื่อจำเป็น Microservices มีต้นทุนสูงถ้าทีมเล็กเกินไป'},
      {q: 'ย้ายจากระบบเก่าได้ไหม?', a: 'ได้ เรามีประสบการณ์ย้ายระบบหลายครั้ง ด้วย Strangler Pattern ที่ย้ายทีละส่วนโดยไม่ต้องมี Downtime'}
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
