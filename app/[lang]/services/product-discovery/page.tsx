import ServiceLayout from '@/components/service/ServiceLayout'
import { type Lang } from '@/lib/i18n'

export async function generateStaticParams() {
  return [{ lang: 'th' }, { lang: 'en' }]
}

export default function Page({ params }: { params: { lang: Lang } }) {
  const isEN = params.lang === 'en'
  const badge    = isEN ? 'Strategy / Product Discovery'  : 'กลยุทธ์ / Product Discovery'
  const title    = isEN ? 'Find the Right Answer'  : 'หาคำตอบที่ถูกต้อง'
  const subtitle = isEN ? 'Before You Invest in Building'    : 'ก่อนลงทุนสร้าง'
  const heroDesc = isEN ? 'Product discovery is the process of ensuring you build the right thing before committing to building it right. Haliviq runs structured discovery that de-risks investment and aligns stakeholders.'  : 'Product Discovery คือกระบวนการที่มั่นใจว่าคุณกำลังสร้างสิ่งที่ถูกต้องก่อนที่จะมุ่งมั่นสร้างให้ถูกวิธี Haliviq ทำ Structured Discovery ที่ลด Risk และ Align Stakeholder'
  const whyTitle = isEN ? 'Why building without discovery is gambling'    : 'ทำไมการสร้างโดยไม่มี Discovery ถึงเหมือนการ Gamble'
  const whyDesc  = isEN ? 'The number-one reason products fail is not technical failure — it is building something nobody wants. Discovery is the process of finding out what people actually need before the expensive part begins.'  : 'สาเหตุอันดับหนึ่งที่ Product ล้มเหลวไม่ใช่ Technical Failure แต่คือการสร้างสิ่งที่ไม่มีใครต้องการ Discovery คือกระบวนการค้นหาสิ่งที่คนต้องการจริงๆ ก่อนที่ส่วนที่แพงจะเริ่มต้น'
  const ctaTitle = isEN ? 'Ready to discover before you build?'    : 'พร้อม Discover ก่อนสร้างไหม?'
  const ctaDesc  = isEN ? 'Book a free Discovery Sprint scoping call. We will scope the right process for your stage.'   : 'จอง Discovery Sprint Scoping Call ฟรี เราจะ Scope กระบวนการที่เหมาะกับ Stage ของคุณ'
  const heroBullets = isEN ? [
      'Problem framing and opportunity sizing',
      'Competitive landscape and market positioning analysis',
      'User interviews and Jobs-To-Be-Done research',
      'Solution ideation, prioritisation, and feasibility assessment',
      'Business case, MVP definition, and go-to-market planning',
    ] : [
      'Problem Framing และ Opportunity Sizing',
      'Competitive Landscape และ Market Positioning',
      'User Interview และ Jobs-To-Be-Done Research',
      'Solution Ideation, Prioritization และ Feasibility',
      'Business Case, MVP Definition และ Go-to-market Planning',
    ]
  const whyPoints   = isEN ? [
      '42% of startups fail because there is no market need. Discovery surfaces this before you build',
      'A clearly defined problem statement aligns the whole team and prevents scope creep throughout development',
      'Jobs-To-Be-Done research reveals the functional, social, and emotional needs behind feature requests',
      'Prioritisation frameworks like RICE, ICE, or Kano ensure you build the highest-value features first',
      'A well-run discovery process typically cuts MVP scope by 40% while improving outcome probability',
    ] : [
      '42% ของ Startup ล้มเหลวเพราะไม่มี Market Need Discovery เผย Reality นี้ก่อนที่คุณจะ Build',
      'Problem Statement ที่ชัดเจน Align ทีมทั้งหมดและป้องกัน Scope Creep ตลอดการพัฒนา',
      'Jobs-To-Be-Done Research เผย Functional, Social และ Emotional Need เบื้องหลัง Feature Request',
      'Prioritization Framework เช่น RICE, ICE หรือ Kano ทำให้สร้าง Feature ที่มีคุณค่าสูงสุดก่อน',
      'Discovery ที่ดีมักลด MVP Scope 40% ในขณะที่เพิ่ม Probability of Success',
    ]
  const outcomes    = isEN ? [
      {stat: '40%', label: 'Smaller MVP Scope', desc: 'With clear discovery output'},
      {stat: '2x', label: 'Launch Success Rate', desc: 'Discovery-led vs assumption-led'},
      {stat: '3 weeks', label: 'Discovery Sprint', desc: 'From brief to validated concept'},
      {stat: '100%', label: 'Stakeholder Alignment', desc: 'Before development begins'}
    ] : [
      {stat: '40%', label: 'ลด MVP Scope', desc: 'ด้วย Clear Discovery Output'},
      {stat: '2x', label: 'Launch Success Rate', desc: 'Discovery-led vs Assumption-led'},
      {stat: '3 สัปดาห์', label: 'Discovery Sprint', desc: 'จาก Brief สู่ Validated Concept'},
      {stat: '100%', label: 'Stakeholder Alignment', desc: 'ก่อนการพัฒนาเริ่มต้น'}
    ]
  const features    = isEN ? [
      {icon: 'ti-bulb', title: 'Problem Framing', desc: 'Define a clear problem statement, scope the opportunity, and size the addressable market.'},
      {icon: 'ti-world', title: 'Market & Competitive Analysis', desc: 'Analyse the competitive landscape, find white space, and establish a strong positioning.'},
      {icon: 'ti-user-question', title: 'User Research & JTBD', desc: 'Interview target users using the Jobs-To-Be-Done framework to understand true underlying needs.'},
      {icon: 'ti-device-gamepad-2', title: 'Ideation & Concept Testing', desc: 'Generate multiple solution concepts, test with real users, and choose the best direction.'},
      {icon: 'ti-list-check', title: 'Prioritisation & Roadmap', desc: 'Use frameworks to prioritise features and initiatives to maximise value in the MVP.'},
      {icon: 'ti-presentation', title: 'Business Case & GTM', desc: 'Build a business case, financial model, and go-to-market plan for stakeholders.'}
    ] : [
      {icon: 'ti-bulb', title: 'Problem Framing', desc: 'กำหนด Problem Statement ที่ชัดเจน Scope Opportunity และวัดขนาดตลาดที่จะได้รับประโยชน์'},
      {icon: 'ti-world', title: 'Market & Competitive Analysis', desc: 'วิเคราะห์ Competitive Landscape หา White Space และ Positioning ที่แข็งแกร่ง'},
      {icon: 'ti-user-question', title: 'User Research & JTBD', desc: 'สัมภาษณ์ Target User ด้วย Jobs-To-Be-Done Framework เพื่อเข้าใจ Need ที่แท้จริง'},
      {icon: 'ti-device-gamepad-2', title: 'Ideation & Concept Testing', desc: 'สร้าง Solution Concept หลายแบบ Test กับ User จริง และเลือก Direction ที่ดีที่สุด'},
      {icon: 'ti-list-check', title: 'Prioritization & Roadmap', desc: 'ใช้ Framework ลำดับ Feature และ Initiative เพื่อ Maximize Value ใน MVP'},
      {icon: 'ti-presentation', title: 'Business Case & GTM', desc: 'สร้าง Business Case, Financial Model และ Go-to-market Plan สำหรับ Stakeholder'}
    ]
  const steps       = isEN ? [
      {no: '01', title: 'Kick-off & Framing', desc: 'Understand business context, define success criteria, and scope the discovery.'},
      {no: '02', title: 'Research & Learn', desc: 'Interview users, analyse competitors, and gather necessary data.'},
      {no: '03', title: 'Synthesise & Ideate', desc: 'Summarise insights, create HMW questions, and generate solution concepts.'},
      {no: '04', title: 'Validate & Decide', desc: 'Test concepts with users, assess feasibility, and choose a direction.'},
      {no: '05', title: 'Define & Plan', desc: 'Define MVP scope, build a roadmap, and create a business case for stakeholders.'}
    ] : [
      {no: '01', title: 'Kick-off & Framing', desc: 'ทำความเข้าใจ Business Context, กำหนด Success Criteria และ Scope Discovery'},
      {no: '02', title: 'Research & Learn', desc: 'สัมภาษณ์ User, วิเคราะห์ Competitor และเก็บ Data ที่จำเป็น'},
      {no: '03', title: 'Synthesize & Ideate', desc: 'สรุป Insight, สร้าง HMW Question และ Generate Solution Concept'},
      {no: '04', title: 'Validate & Decide', desc: 'Test Concept กับ User, ประเมิน Feasibility และเลือก Direction'},
      {no: '05', title: 'Define & Plan', desc: 'กำหนด MVP Scope, วาง Roadmap และสร้าง Business Case สำหรับ Stakeholder'}
    ]
  const caseStudies = isEN ? [
      {tag: 'SaaS · Bangkok', title: 'Discovery Changes Direction Before Wasting 12 Months', desc: '3-week discovery revealed the core assumption was wrong — pivoted before building.', result: '12 months of development saved'},
      {tag: 'Healthcare · Bangkok', title: 'MVP Scope Reduced 60% While Achieving Business Goals', desc: 'Discovery identified 3 core jobs to be done and cut everything else.', result: 'Launched 6 months earlier'},
      {tag: 'FinTech · Bangkok', title: 'Discovery Aligns 5 Stakeholders in 3 Weeks', desc: 'Structured workshops and evidence-based decisions got everyone committed to one direction.', result: '0 Scope Changes throughout the project'}
    ] : [
      {tag: 'SaaS · กรุงเทพฯ', title: 'Discovery เปลี่ยน Direction ก่อนเสีย 12 เดือน', desc: '3 สัปดาห์ Discovery เผยว่า Assumption หลักผิด ปรับ Direction ก่อน Build', result: 'ประหยัด 12 เดือน Development'},
      {tag: 'Healthcare · กรุงเทพฯ', title: 'MVP Scope ลด 60% ยัง Achieve Business Goal', desc: 'Discovery ระบุ Core Job-to-be-done 3 ข้อที่ต้องสร้าง ตัดที่เหลือออก', result: 'Launch เร็วขึ้น 6 เดือน'},
      {tag: 'FinTech · กรุงเทพฯ', title: 'Discovery Align 5 Stakeholder ใน 3 สัปดาห์', desc: 'Structured Workshop และ Evidence-based Decision ทำให้ทุกคน Commit ใน Direction เดียว', result: '0 Scope Change ตลอดโปรเจกต์'}
    ]
  const faqs        = isEN ? [
      {q: 'How long does discovery take?', a: 'An initial discovery sprint takes 2-3 weeks. A full discovery including deep research may take 4-6 weeks, depending on problem size and complexity.'},
      {q: 'Do we need an idea before starting discovery?', a: 'Not necessarily. Discovery works best starting from a problem, not a solution. If you already have an idea, discovery validates whether it is the right direction.'},
      {q: 'What are the discovery outputs?', a: 'A problem statement, validated insights, solution concept, MVP scope, roadmap, and a business case for stakeholders.'},
      {q: 'Is discovery necessary for every project?', a: 'Recommended for high-investment projects, when the problem or market is unclear, or when multiple stakeholders need alignment.'}
    ] : [
      {q: 'Discovery ใช้เวลานานแค่ไหน?', a: 'Discovery Sprint ขั้นต้น 2-3 สัปดาห์ Full Discovery รวม Research ลึกๆ อาจใช้ 4-6 สัปดาห์ ขึ้นอยู่กับขนาดและความซับซ้อนของ Problem'},
      {q: 'ต้องมี Idea แล้วถึงทำ Discovery ได้ไหม?', a: 'ไม่จำเป็นครับ Discovery ดีที่สุดเมื่อเริ่มจาก Problem ไม่ใช่ Solution ถ้ามี Idea แล้วก็ช่วย Validate ว่าถูก Direction ไหม'},
      {q: 'Output ของ Discovery คืออะไร?', a: 'Problem Statement, Validated Insights, Solution Concept, MVP Scope, Roadmap และ Business Case สำหรับ Stakeholder'},
      {q: 'Discovery จำเป็นสำหรับทุกโปรเจกต์ไหม?', a: 'แนะนำสำหรับโปรเจกต์ที่มี Investment สูง ไม่แน่ใจใน Problem หรือ Market หรือต้องการ Align Stakeholder หลายคน'}
    ]
  const related     = isEN ? [
      {label: 'User Research', href: '/services/user-research'},
      {label: 'Rapid Prototyping', href: '/services/rapid-prototyping'},
      {label: 'Growth Strategy', href: '/services/growth-strategy'},
      {label: 'UX & UI Design', href: '/services/ux-ui-design'}
    ] : [
      {label: 'User Research', href: '/services/user-research'},
      {label: 'Rapid Prototyping', href: '/services/rapid-prototyping'},
      {label: 'Growth Strategy', href: '/services/growth-strategy'},
      {label: 'UX & UI Design', href: '/services/ux-ui-design'}
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
      heroImg="/images/services/product-discovery/hero.jpg"
      whyImg="/images/services/product-discovery/why1.jpg"
      whyImg2="/images/services/product-discovery/why2.jpg"
      featureImg="/images/services/product-discovery/feature.jpg"
      processImg="/images/services/product-discovery/process.jpg"
    />
  )
}
