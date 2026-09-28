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
  const heroDesc = isEN ? 'Growth without strategy is just spending. Haliviq builds data-driven growth frameworks that identify your highest-leverage channels and compound results over time.'  : 'การเติบโตที่ไม่มีกลยุทธ์คือแค่การใช้จ่าย Haliviq สร้าง Growth Framework ที่ขับเคลื่อนด้วยข้อมูล ระบุ Channel ที่คุ้มค่าที่สุด และสร้างผลลัพธ์แบบ Compound'
  const whyTitle = isEN ? 'Why most growth efforts plateau'    : 'ทำไม Growth Effort ส่วนใหญ่ถึง Plateau'
  const whyDesc  = isEN ? 'Most companies focus on acquisition while ignoring the leaking bucket of churn. Or they run experiments without statistical rigour. Or they optimise vanity metrics while revenue stagnates.'  : 'บริษัทส่วนใหญ่โฟกัส Acquisition โดยไม่สนใจ Churn ที่รั่ว หรือทำ Experiment โดยไม่มี Statistical Rigour หรือ Optimize Vanity Metric ในขณะที่ Revenue ไม่ขยับ'
  const ctaTitle = isEN ? 'Ready to grow with intention?'    : 'พร้อมเติบโตอย่างมีเป้าหมายไหม?'
  const ctaDesc  = isEN ? 'Start with a free Growth Audit. We will find your biggest leverage points in one session.'   : 'เริ่มด้วย Growth Audit ฟรี เราจะหา Leverage Point ที่ใหญ่ที่สุดของคุณในเซสชันเดียว'
  const heroBullets = isEN ? [
      'Growth audit: funnel analysis, cohort analysis, and benchmarking',
      'Channel strategy: organic, paid, partnerships, and product-led growth',
      'Conversion rate optimisation and A/B testing programme',
      'Retention strategy: onboarding, lifecycle, and win-back campaigns',
      'Growth team structure, tooling, and experiment velocity',
    ] : [
      'Growth Audit: Funnel Analysis, Cohort Analysis และ Benchmarking',
      'Channel Strategy: Organic, Paid, Partnership และ Product-led Growth',
      'Conversion Rate Optimization และ A/B Testing',
      'Retention Strategy: Onboarding, Lifecycle และ Win-back',
      'Growth Team Structure, Tooling และ Experiment Velocity',
    ]
  const whyPoints   = isEN ? [
      'A 5% increase in retention has 25-95x the revenue impact of equivalent acquisition investment',
      'Companies with structured experimentation grow 2x faster than those without',
      'Product-led growth compounds organic growth without linear increases in marketing spend',
      'Cohort analysis reveals which user segments deliver LTV — often a surprisingly small group',
      'North Star Metric alignment ensures every team pulls in the same strategic direction',
    ] : [
      'Retention เพิ่ม 5% มี Impact ต่อ Revenue 25-95 เท่าเทียบกับ Acquisition ที่เท่ากัน',
      'บริษัทที่มี Structured Experimentation Programme เติบโตเร็วกว่า 2 เท่า',
      'Product-led Growth สร้าง Organic Growth แบบ Compound โดยไม่เพิ่ม Marketing Spend เชิงเส้น',
      'Cohort Analysis เผยว่า User Segment ไหนที่ให้ LTV ซึ่งมักเป็นกลุ่มเล็กที่สุด',
      'North Star Metric Alignment ทำให้ทุกทีมดึงไปในทิศทางเดียวกัน',
    ]
  const outcomes    = isEN ? [
      {stat: '2x', label: 'Faster Growth Rate', desc: 'With structured experimentation'},
      {stat: '95x', label: 'Retention vs Acquisition ROI', desc: '5% retention improvement'},
      {stat: '30%', label: 'CAC Reduction', desc: 'With PLG and channel optimisation'},
      {stat: '3 months', label: 'To See Measurable Results', desc: 'From strategy to execution'}
    ] : [
      {stat: '2x', label: 'Growth Rate เร็วขึ้น', desc: 'ด้วย Structured Experimentation'},
      {stat: '95x', label: 'Retention vs Acquisition ROI', desc: 'จาก 5% Retention Improvement'},
      {stat: '30%', label: 'ลด CAC', desc: 'ด้วย PLG และ Channel Optimization'},
      {stat: '3 เดือน', label: 'เห็นผลลัพธ์ที่วัดได้', desc: 'จากกลยุทธ์สู่การ Execute'}
    ]
  const features    = isEN ? [
      {icon: 'ti-funnel', title: 'Funnel Analysis & CRO', desc: 'Analyse every funnel stage, find drop-off points, and optimise with statistically powered A/B tests.'},
      {icon: 'ti-users-group', title: 'Cohort & Retention Analysis', desc: 'Segment users into cohorts by acquisition date to find which channels deliver the best retention.'},
      {icon: 'ti-ad', title: 'Paid & Organic Channel Strategy', desc: 'Design a channel mix suited to your business stage and budget.'},
      {icon: 'ti-star', title: 'Product-led Growth (PLG)', desc: 'Design your product to acquire, activate, and retain users on its own, reducing sales costs.'},
      {icon: 'ti-mail-forward', title: 'Lifecycle Marketing', desc: 'Send the right message at the right time via email, push, and in-app based on user behaviour.'},
      {icon: 'ti-flask', title: 'Growth Experimentation', desc: 'Build an experimentation culture with rigour — test hypotheses quickly and learn from every test.'}
    ] : [
      {icon: 'ti-funnel', title: 'Funnel Analysis & CRO', desc: 'วิเคราะห์ทุกขั้นตอน Funnel หา Drop-off Point และ Optimize ด้วย A/B Test ที่มี Statistical Power'},
      {icon: 'ti-users-group', title: 'Cohort & Retention Analysis', desc: 'แบ่ง User เป็น Cohort ตาม Acquisition Date หาว่า Channel ไหนให้ User ที่ Retain ดีที่สุด'},
      {icon: 'ti-ad', title: 'Paid & Organic Channel Strategy', desc: 'วางกลยุทธ์ Channel Mix ที่เหมาะกับ Stage และ Budget ของธุรกิจ'},
      {icon: 'ti-star', title: 'Product-led Growth (PLG)', desc: 'ออกแบบ Product ให้ Acquire, Activate และ Retain User ด้วยตัวเอง ลด Sales Cost'},
      {icon: 'ti-mail-forward', title: 'Lifecycle Marketing', desc: 'ส่ง Message ที่ถูกต้องในเวลาที่ถูกต้อง ผ่าน Email, Push และ In-app ตาม User Behavior'},
      {icon: 'ti-flask', title: 'Growth Experimentation', desc: 'สร้าง Experiment Culture ที่มี Rigour ทดสอบ Hypothesis อย่างรวดเร็วและเรียนรู้จากทุก Test'}
    ]
  const steps       = isEN ? [
      {no: '01', title: 'Growth Audit', desc: 'Analyse current funnel, cohorts, and channels to find the most important gaps and opportunities.'},
      {no: '02', title: 'Strategy Design', desc: 'Design growth strategy, North Star Metric, and OKRs that the whole team aligns to.'},
      {no: '03', title: 'Experiment Roadmap', desc: 'Build an experiment backlog prioritised by impact and evidence-based confidence.'},
      {no: '04', title: 'Execute & Measure', desc: 'Run experiments, measure results rigorously, and document learnings.'},
      {no: '05', title: 'Scale & Iterate', desc: 'Scale what works, stop what does not, and iterate based on data every quarter.'}
    ] : [
      {no: '01', title: 'Growth Audit', desc: 'วิเคราะห์ Funnel, Cohort และ Channel ปัจจุบัน หา Gap และ Opportunity ที่สำคัญที่สุด'},
      {no: '02', title: 'Strategy Design', desc: 'วาง Growth Strategy, North Star Metric และ OKR ที่ทีมทั้งหมด Align'},
      {no: '03', title: 'Experiment Roadmap', desc: 'สร้าง Experiment Backlog ที่ลำดับตาม Impact และ Confidence จาก Evidence'},
      {no: '04', title: 'Execute & Measure', desc: 'Run Experiment, Measure Result อย่าง Rigorous และ Document Learning'},
      {no: '05', title: 'Scale & Iterate', desc: 'Scale สิ่งที่ได้ผล หยุดสิ่งที่ไม่ได้ผล และ Iterate ตาม Data ทุกไตรมาส'}
    ]
  const caseStudies = isEN ? [
      {tag: 'SaaS · Bangkok', title: 'PLG Strategy Grows MRR 3x in 9 Months', desc: 'Designed freemium model, viral loop, and high-converting in-product upsell.', result: 'MRR up 3x'},
      {tag: 'E-Commerce · Nationwide', title: 'CRO Lifts Conversion from 1.2% to 3.8%', desc: '24 A/B experiments in 3 months optimising checkout, PDP, and cart.', result: 'Conversion up 3.2x'},
      {tag: 'Mobile App · Bangkok', title: 'Retention Improvement Grows LTV 2.4x', desc: 'Onboarding redesign, push strategy, and tested lifecycle email.', result: 'Day-30 Retention up 85%'}
    ] : [
      {tag: 'SaaS · กรุงเทพฯ', title: 'PLG Strategy เพิ่ม MRR 3x ใน 9 เดือน', desc: 'ออกแบบ Freemium Model, Viral Loop และ In-product Upsell ที่ Convert ได้สูง', result: 'MRR เพิ่ม 3x'},
      {tag: 'E-Commerce · ทั่วประเทศ', title: 'CRO เพิ่ม Conversion จาก 1.2% เป็น 3.8%', desc: 'A/B Test 24 Experiment ใน 3 เดือน Optimize Checkout, PDP และ Cart', result: 'Conversion เพิ่ม 3.2x'},
      {tag: 'Mobile App · กรุงเทพฯ', title: 'Retention Improvement เพิ่ม LTV 2.4x', desc: 'Onboarding Redesign, Push Strategy และ Lifecycle Email ที่ทดสอบแล้ว', result: 'Day-30 Retention เพิ่ม 85%'}
    ]
  const faqs        = isEN ? [
      {q: 'Which channel should we start with?', a: 'It depends on your stage and ICP. Early stage often starts with content and community; add paid once product-market fit is established. We analyse this in the audit.'},
      {q: 'How much traffic do we need for A/B tests?', a: 'It depends on the effect size and baseline conversion. Typically you need at least 100-200 conversions per variant per week for statistical significance.'},
      {q: 'Does PLG work for B2B?', a: 'Very well. B2B SaaS like Slack, Notion, and Figma use PLG effectively. The key is short time-to-value and clearly visible value.'},
      {q: 'Who should be on a growth team?', a: 'The core team should have a Growth PM, Data Analyst, and Engineer. Designer, Marketer, and CRO Specialist are extended team members who collaborate closely.'}
    ] : [
      {q: 'เริ่มจาก Channel ไหนก่อนดี?', a: 'ขึ้นอยู่กับ Stage และ ICP ครับ Early Stage มักเริ่มจาก Content + Community ถ้ามี Product-market Fit แล้วค่อยเพิ่ม Paid เราวิเคราะห์ให้ใน Audit'},
      {q: 'A/B Test ต้องมี Traffic เท่าไหร่?', a: 'ขึ้นอยู่กับ Effect Size ที่ต้องการและ Baseline Conversion ครับ ปกติต้องการ Conversion อย่างน้อย 100-200 ต่อ Variant ต่อสัปดาห์'},
      {q: 'PLG เหมาะกับ B2B ไหม?', a: 'เหมาะมากครับ B2B SaaS เช่น Slack, Notion, Figma ใช้ PLG ได้ผลดีมาก Key คือ Time-to-value ที่สั้นและ Value ที่เห็นชัด'},
      {q: 'Growth Team ควรมีใครบ้าง?', a: 'Core Team ควรมี Growth PM, Data Analyst และ Engineer ครับ ส่วน Designer, Marketer และ CRO Specialist เป็น Extended Team ที่ทำงานร่วมกัน'}
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
