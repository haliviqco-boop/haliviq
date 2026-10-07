import ServiceLayout from '@/components/service/ServiceLayout'
import { type Lang } from '@/lib/i18n'

export async function generateStaticParams() {
  return [{ lang: 'th' }, { lang: 'en' }]
}

export default function Page({ params }: { params: { lang: Lang } }) {
  const isEN = params.lang === 'en'
  const badge    = isEN ? 'Strategy / Growth Strategy'  : 'กลยุทธ์ / Growth Strategy'
  const title    = isEN ? 'Grow Faster'  : 'เติบโตเร็วขึ้น'
  const subtitle = isEN ? 'With Real Data'    : 'ด้วยข้อมูลจริง'
  const heroDesc = isEN ? 'Growth without strategy is just spending. Haliviq builds data-driven growth frameworks that identify your highest-leverage channels and compound results over time.'  : 'การเติบโตที่ไม่มีกลยุทธ์ก็แค่การเสียเงิน Haliviq สร้างกรอบการเติบโตที่ใช้ข้อมูลเป็นตัวนำ หาช่องทางที่ได้ผลคุ้มที่สุด และทำให้ผลลัพธ์สะสมต่อเนื่อง'
  const whyTitle = isEN ? 'Why most growth efforts plateau'    : 'ทำไมการเติบโตของหลายบริษัทถึงตัน'
  const whyDesc  = isEN ? 'Most companies focus on acquisition while ignoring the leaking bucket of churn. Or they run experiments without statistical rigour. Or they optimise vanity metrics while revenue stagnates.'  : 'หลายบริษัทเน้นหาลูกค้าใหม่ แต่ไม่สนใจลูกค้าที่หลุดไปเรื่อยๆ หรือทดลองโดยไม่มีหลักสถิติรองรับ หรือเร่งตัวเลขที่ดูดีแต่ไม่สร้างรายได้ ขณะที่รายได้ไม่ขยับ'
  const ctaTitle = isEN ? 'Ready to grow with intention?'    : 'พร้อมเติบโตอย่างมีเป้าหมายไหม?'
  const ctaDesc  = isEN ? 'Start with a free Growth Audit. We will find your biggest leverage points in one session.'   : 'เริ่มด้วย Growth Audit ฟรี เราจะหาจุดที่ให้ผลมากที่สุดของคุณได้ในการคุยครั้งเดียว'
  const heroBullets = isEN ? [
      'Growth audit: funnel analysis, cohort analysis, and benchmarking',
      'Channel strategy: organic, paid, partnerships, and product-led growth',
      'Conversion rate optimisation and A/B testing programme',
      'Retention strategy: onboarding, lifecycle, and win-back campaigns',
      'Growth team structure, tooling, and experiment velocity',
    ] : [
      'Growth Audit: Funnel Analysis, Cohort Analysis และ Benchmarking',
      'วางกลยุทธ์ช่องทาง: Organic, Paid, พาร์ตเนอร์ และ Product-led Growth',
      'เพิ่ม Conversion Rate และทำ A/B Testing',
      'กลยุทธ์รักษาลูกค้า: Onboarding, Lifecycle และดึงลูกค้ากลับมา',
      'โครงสร้างทีม Growth เครื่องมือ และความเร็วในการทดลอง',
    ]
  const whyPoints   = isEN ? [
      'A 5% increase in retention has 25-95x the revenue impact of equivalent acquisition investment',
      'Companies with structured experimentation grow 2x faster than those without',
      'Product-led growth compounds organic growth without linear increases in marketing spend',
      'Cohort analysis reveals which user segments deliver LTV — often a surprisingly small group',
      'North Star Metric alignment ensures every team pulls in the same strategic direction',
    ] : [
      'Retention เพิ่ม 5% ส่งผลต่อรายได้ 25-95 เท่า เทียบกับการหาลูกค้าใหม่ในปริมาณเท่ากัน',
      'บริษัทที่ทดลองอย่างเป็นระบบเติบโตเร็วกว่า 2 เท่า',
      'Product-led Growth ทำให้ผู้ใช้เพิ่มขึ้นเองแบบทบต้น โดยไม่ต้องเพิ่มงบการตลาดเป็นเส้นตรง',
      'Cohort Analysis บอกว่ากลุ่มผู้ใช้ไหนสร้าง LTV ซึ่งมักเป็นกลุ่มเล็กที่สุด',
      'การตั้ง North Star Metric ร่วมกัน ทำให้ทุกทีมไปในทิศทางเดียวกัน',
    ]
  const outcomes    = isEN ? [
      {stat: '2x', label: 'Faster Growth Rate', desc: 'With structured experimentation'},
      {stat: '95x', label: 'Retention vs Acquisition ROI', desc: '5% retention improvement'},
      {stat: '30%', label: 'CAC Reduction', desc: 'With PLG and channel optimisation'},
      {stat: '3 months', label: 'To See Measurable Results', desc: 'From strategy to execution'}
    ] : [
      {stat: '2x', label: 'อัตราเติบโตเร็วขึ้น', desc: 'ด้วยการทดลองอย่างเป็นระบบ'},
      {stat: '95x', label: 'Retention vs Acquisition ROI', desc: 'จากการเพิ่ม Retention 5%'},
      {stat: '30%', label: 'ลด CAC', desc: 'ด้วย PLG และการปรับช่องทาง'},
      {stat: '3 เดือน', label: 'เห็นผลที่วัดได้', desc: 'จากกลยุทธ์สู่การลงมือทำ'}
    ]
  const features    = isEN ? [
      {icon: 'ti-funnel', title: 'Funnel Analysis & CRO', desc: 'Analyse every funnel stage, find drop-off points, and optimise with statistically powered A/B tests.'},
      {icon: 'ti-users-group', title: 'Cohort & Retention Analysis', desc: 'Segment users into cohorts by acquisition date to find which channels deliver the best retention.'},
      {icon: 'ti-ad', title: 'Paid & Organic Channel Strategy', desc: 'Design a channel mix suited to your business stage and budget.'},
      {icon: 'ti-star', title: 'Product-led Growth (PLG)', desc: 'Design your product to acquire, activate, and retain users on its own, reducing sales costs.'},
      {icon: 'ti-mail-forward', title: 'Lifecycle Marketing', desc: 'Send the right message at the right time via email, push, and in-app based on user behaviour.'},
      {icon: 'ti-flask', title: 'Growth Experimentation', desc: 'Build an experimentation culture with rigour — test hypotheses quickly and learn from every test.'}
    ] : [
      {icon: 'ti-funnel', title: 'Funnel Analysis & CRO', desc: 'วิเคราะห์ทุกขั้นของ Funnel หาจุดที่คนหลุด และปรับปรุงด้วย A/B Test ที่มีความน่าเชื่อถือทางสถิติ'},
      {icon: 'ti-users-group', title: 'Cohort & Retention Analysis', desc: 'แบ่งผู้ใช้เป็น Cohort ตามวันที่ได้มา แล้วดูว่าช่องทางไหนได้ผู้ใช้ที่อยู่กับเรานานที่สุด'},
      {icon: 'ti-ad', title: 'Paid & Organic Channel Strategy', desc: 'วางกลยุทธ์ผสมช่องทางให้เหมาะกับระยะของธุรกิจและงบประมาณ'},
      {icon: 'ti-star', title: 'Product-led Growth (PLG)', desc: 'ออกแบบผลิตภัณฑ์ให้ผู้ใช้เข้ามา เริ่มใช้ และอยู่ต่อได้เอง ลดต้นทุนการขาย'},
      {icon: 'ti-mail-forward', title: 'Lifecycle Marketing', desc: 'ส่งข้อความที่ใช่ในเวลาที่ใช่ ผ่านอีเมล Push และในแอป ตามพฤติกรรมของผู้ใช้'},
      {icon: 'ti-flask', title: 'Growth Experimentation', desc: 'สร้างวัฒนธรรมการทดลองที่เข้มงวด ทดสอบสมมติฐานอย่างรวดเร็ว และเรียนรู้จากทุกการทดสอบ'}
    ]
  const steps       = isEN ? [
      {no: '01', title: 'Growth Audit', desc: 'Analyse current funnel, cohorts, and channels to find the most important gaps and opportunities.'},
      {no: '02', title: 'Strategy Design', desc: 'Design growth strategy, North Star Metric, and OKRs that the whole team aligns to.'},
      {no: '03', title: 'Experiment Roadmap', desc: 'Build an experiment backlog prioritised by impact and evidence-based confidence.'},
      {no: '04', title: 'Execute & Measure', desc: 'Run experiments, measure results rigorously, and document learnings.'},
      {no: '05', title: 'Scale & Iterate', desc: 'Scale what works, stop what does not, and iterate based on data every quarter.'}
    ] : [
      {no: '01', title: 'Growth Audit', desc: 'วิเคราะห์ Funnel, Cohort และช่องทางปัจจุบัน หาช่องว่างและโอกาสที่สำคัญที่สุด'},
      {no: '02', title: 'Strategy Design', desc: 'วางกลยุทธ์การเติบโต, North Star Metric และ OKR ที่ทั้งทีมเห็นตรงกัน'},
      {no: '03', title: 'Experiment Roadmap', desc: 'สร้างรายการทดลองเรียงตามผลกระทบและความมั่นใจจากหลักฐาน'},
      {no: '04', title: 'Execute & Measure', desc: 'ลงมือทดลอง วัดผลอย่างเข้มงวด และจดสิ่งที่ได้เรียนรู้'},
      {no: '05', title: 'Scale & Iterate', desc: 'ขยายสิ่งที่ได้ผล หยุดสิ่งที่ไม่ได้ผล และปรับตามข้อมูลทุกไตรมาส'}
    ]
  const caseStudies = isEN ? [
      {tag: 'SaaS · Bangkok', title: 'PLG Strategy Grows MRR 3x in 9 Months', desc: 'Designed freemium model, viral loop, and high-converting in-product upsell.', result: 'MRR up 3x'},
      {tag: 'E-Commerce · Nationwide', title: 'CRO Lifts Conversion from 1.2% to 3.8%', desc: '24 A/B experiments in 3 months optimising checkout, PDP, and cart.', result: 'Conversion up 3.2x'},
      {tag: 'Mobile App · Bangkok', title: 'Retention Improvement Grows LTV 2.4x', desc: 'Onboarding redesign, push strategy, and tested lifecycle email.', result: 'Day-30 Retention up 85%'}
    ] : [
      {tag: 'SaaS · กรุงเทพฯ', title: 'PLG Strategy เพิ่ม MRR 3x ใน 9 เดือน', desc: 'ออกแบบโมเดล Freemium, Viral Loop และการขายเพิ่มในผลิตภัณฑ์ที่ Convert ได้สูง', result: 'MRR เพิ่ม 3x'},
      {tag: 'E-Commerce · ทั่วประเทศ', title: 'CRO เพิ่ม Conversion จาก 1.2% เป็น 3.8%', desc: 'A/B Test 24 การทดลองใน 3 เดือน ปรับ Checkout, PDP และตะกร้าสินค้า', result: 'Conversion เพิ่ม 3.2x'},
      {tag: 'Mobile App · กรุงเทพฯ', title: 'ปรับปรุง Retention เพิ่ม LTV 2.4x', desc: 'ปรับ Onboarding ใหม่ วางกลยุทธ์ Push และทดสอบ Lifecycle Email', result: 'Retention วันที่ 30 เพิ่ม 85%'}
    ]
  const faqs        = isEN ? [
      {q: 'Which channel should we start with?', a: 'It depends on your stage and ICP. Early stage often starts with content and community; add paid once product-market fit is established. We analyse this in the audit.'},
      {q: 'How much traffic do we need for A/B tests?', a: 'It depends on the effect size and baseline conversion. Typically you need at least 100-200 conversions per variant per week for statistical significance.'},
      {q: 'Does PLG work for B2B?', a: 'Very well. B2B SaaS like Slack, Notion, and Figma use PLG effectively. The key is short time-to-value and clearly visible value.'},
      {q: 'Who should be on a growth team?', a: 'The core team should have a Growth PM, Data Analyst, and Engineer. Designer, Marketer, and CRO Specialist are extended team members who collaborate closely.'}
    ] : [
      {q: 'เริ่มจากช่องทางไหนก่อนดี?', a: 'ขึ้นอยู่กับระยะของธุรกิจและกลุ่มลูกค้าเป้าหมาย (ICP) ครับ ธุรกิจช่วงเริ่มต้นมักเริ่มจาก Content และ Community ถ้ามี Product-market Fit แล้วค่อยเพิ่ม Paid เราวิเคราะห์ให้ใน Audit'},
      {q: 'A/B Test ต้องมี Traffic เท่าไหร่?', a: 'ขึ้นอยู่กับขนาดผลที่อยากวัดและ Conversion พื้นฐานครับ ปกติต้องมี Conversion อย่างน้อย 100-200 ต่อกลุ่มทดสอบต่อสัปดาห์'},
      {q: 'PLG เหมาะกับ B2B ไหม?', a: 'เหมาะมากครับ B2B SaaS เช่น Slack, Notion, Figma ใช้ PLG ได้ผลดี หัวใจคือให้ผู้ใช้เห็นประโยชน์เร็วและเห็นคุณค่าชัดเจน'},
      {q: 'ทีม Growth ควรมีใครบ้าง?', a: 'ทีมหลักควรมี Growth PM, Data Analyst และ Engineer ครับ ส่วน Designer, Marketer และ CRO Specialist เป็นทีมเสริมที่ทำงานร่วมกัน'}
    ]
  const related     = isEN ? [
      {label: 'Data & Analytics', href: '/services/data-analytics'},
      {label: 'User Research', href: '/services/user-research'},
      {label: 'Digital Transformation', href: '/services/digital-transformation'},
      {label: 'Product Discovery', href: '/services/product-discovery'}
    ] : [
      {label: 'Data & Analytics', href: '/services/data-analytics'},
      {label: 'User Research', href: '/services/user-research'},
      {label: 'Digital Transformation', href: '/services/digital-transformation'},
      {label: 'Product Discovery', href: '/services/product-discovery'}
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
      heroImg="/images/services/growth-strategy/hero.jpg"
      whyImg="/images/services/growth-strategy/why1.jpg"
      whyImg2="/images/services/growth-strategy/why2.jpg"
      featureImg="/images/services/growth-strategy/feature.jpg"
      processImg="/images/services/growth-strategy/process.jpg"
    />
  )
}
