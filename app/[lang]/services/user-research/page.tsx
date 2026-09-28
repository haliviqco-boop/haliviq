import ServiceLayout from '@/components/service/ServiceLayout'
import { type Lang } from '@/lib/i18n'

export async function generateStaticParams() {
  return [{ lang: 'th' }, { lang: 'en' }]
}

export default function Page({ params }: { params: { lang: Lang } }) {
  const isEN = params.lang === 'en'
  const badge    = isEN ? 'Strategy / User Research'  : 'กลยุทธ์ / User Research'
  const title    = isEN ? 'Understand Your Users'  : 'เข้าใจผู้ใช้งาน'
  const subtitle = isEN ? 'At a Deep Level'    : 'ในระดับลึก'
  const heroDesc = isEN ? 'The best products are built by teams who deeply understand the people they serve. Haliviq conducts rigorous user research that replaces assumptions with evidence and opinions with insight.'  : 'Product ที่ดีที่สุดสร้างโดยทีมที่เข้าใจคนที่ตัวเองรับใช้อย่างลึกซึ้ง Haliviq ทำ User Research ที่เข้มงวดเพื่อแทนที่ Assumption ด้วย Evidence และแทนที่ Opinion ด้วย Insight'
  const whyTitle = isEN ? 'Why assumptions are the most expensive thing in product'    : 'ทำไม Assumption ถึงเป็นสิ่งที่แพงที่สุดใน Product'
  const whyDesc  = isEN ? 'Every product decision made without user evidence is a bet. Some bets pay off. Most do not. Organisations that win consistently make evidence a prerequisite for investment.'  : 'ทุกการตัดสินใจ Product ที่ไม่มีหลักฐานจาก User คือการ Bet บาง Bet ได้ผล ส่วนใหญ่ไม่ได้ผล องค์กรที่ชนะอย่างสม่ำเสมอคือที่ทำให้ Evidence เป็น Prerequisite ของการลงทุน'
  const ctaTitle = isEN ? 'Ready to truly understand your users?'    : 'พร้อมเข้าใจผู้ใช้อย่างแท้จริงไหม?'
  const ctaDesc  = isEN ? 'Start with a free Research Planning session. We will scope the right study for your questions.'   : 'เริ่มด้วย Research Planning Session ฟรี เราจะ Scope การศึกษาที่เหมาะกับคำถามของคุณ'
  const heroBullets = isEN ? [
      'Research planning, recruitment, and moderation',
      'Interviews, surveys, diary studies, and contextual inquiry',
      'Usability testing: moderated, unmoderated, and remote',
      'Synthesis, affinity mapping, and insight generation',
      'Personas, journey maps, and opportunity frameworks',
    ] : [
      'วางแผน Research, Recruit ผู้เข้าร่วม และ Moderate Session',
      'Interview, Survey, Diary Study และ Contextual Inquiry',
      'Usability Testing: Moderated, Unmoderated และ Remote',
      'Synthesis, Affinity Mapping และ Insight Generation',
      'Persona, Journey Map และ Opportunity Framework',
    ]
  const whyPoints   = isEN ? [
      'Products built with user research have 2x the success rate of those built on assumptions',
      'Early-stage research costs less than 1% of total budget but prevents the most expensive mistakes',
      'Qualitative interviews reveal the WHY behind behaviour that quantitative data cannot explain',
      'Journey mapping exposes friction points invisible to internal stakeholders who are too close to the product',
      'Continuous discovery keeps teams aligned with evolving user needs',
    ] : [
      'Product ที่สร้างจาก User Research มี Success Rate 2 เท่าเทียบกับที่สร้างจาก Assumption',
      'Research ในช่วง Early Stage ใช้ต้นทุนน้อยกว่า 1% ของ Budget แต่ป้องกัน Mistake ที่แพงที่สุด',
      'Qualitative Interview เผย WHY ของพฤติกรรมที่ Quantitative Data อธิบายไม่ได้',
      'Journey Mapping เผย Friction Point ที่ Stakeholder ภายในมองไม่เห็นเพราะใกล้ชิด Product เกินไป',
      'Continuous Discovery ทำให้ทีม Align กับ User Need ที่เปลี่ยนตลอดเวลา',
    ]
  const outcomes    = isEN ? [
      {stat: '2x', label: 'Product Success Rate', desc: 'Research-led vs assumption-led'},
      {stat: '<1%', label: 'Of Total Budget', desc: 'Prevents the biggest mistakes'},
      {stat: '5', label: 'Interviews to Find Core Insights', desc: 'Efficient qualitative research'},
      {stat: '100%', label: 'Evidence-Based Decisions', desc: 'After a research programme'}
    ] : [
      {stat: '2x', label: 'Product Success Rate', desc: 'Research-led vs Assumption-led'},
      {stat: '<1%', label: 'ของ Total Budget', desc: 'ป้องกัน Mistake ที่แพงที่สุด'},
      {stat: '5', label: 'Interview เพื่อหา Core Insight', desc: 'Efficient Qualitative Research'},
      {stat: '100%', label: 'Evidence-based Decision', desc: 'หลังมี Research Programme'}
    ]
  const features    = isEN ? [
      {icon: 'ti-messages', title: 'User Interviews', desc: 'In-depth interviews with real users to understand their goals, pain points, context, and mental models.'},
      {icon: 'ti-clipboard-list', title: 'Surveys & Quantitative Research', desc: 'Collect data from many users to validate hypotheses and measure the prevalence of issues.'},
      {icon: 'ti-device-desktop-analytics', title: 'Usability Testing', desc: 'Watch users interact with your product in real time to identify friction and confusion directly.'},
      {icon: 'ti-book', title: 'Diary Studies', desc: 'Have users log real-life experiences over time, revealing behaviour that interviews might miss.'},
      {icon: 'ti-map-pin', title: 'Contextual Inquiry', desc: 'Observe users in their real environment to see workarounds and context never mentioned in interviews.'},
      {icon: 'ti-layout-kanban', title: 'Synthesis & Insight', desc: 'Transform raw data into insights through affinity mapping, thematic analysis, and journey maps.'}
    ] : [
      {icon: 'ti-messages', title: 'User Interviews', desc: 'สัมภาษณ์เชิงลึกกับผู้ใช้จริง เพื่อเข้าใจ Goal, Pain Point, Context และ Mental Model ของพวกเขา'},
      {icon: 'ti-clipboard-list', title: 'Surveys & Quantitative Research', desc: 'เก็บข้อมูลจาก User จำนวนมากเพื่อ Validate Hypothesis และวัด Prevalence ของ Issue'},
      {icon: 'ti-device-desktop-analytics', title: 'Usability Testing', desc: 'ดู User ใช้งาน Product จริง ระบุ Friction Point และ Confusion โดยตรง'},
      {icon: 'ti-book', title: 'Diary Studies', desc: 'ให้ User บันทึกประสบการณ์ในชีวิตจริงตามเวลา เผย Behavior ที่ Interview อาจพลาด'},
      {icon: 'ti-map-pin', title: 'Contextual Inquiry', desc: 'ไปสังเกต User ในสภาพแวดล้อมจริง เห็น Workaround และ Context ที่ไม่ได้พูดถึง'},
      {icon: 'ti-layout-kanban', title: 'Synthesis & Insight', desc: 'แปลง Raw Data เป็น Insight ด้วย Affinity Mapping, Thematic Analysis และ Journey Map'}
    ]
  const steps       = isEN ? [
      {no: '01', title: 'Research Planning', desc: 'Define research questions, select appropriate methods, and plan recruitment.'},
      {no: '02', title: 'Participant Recruitment', desc: 'Recruit participants matching your target user with a well-designed screener.'},
      {no: '03', title: 'Data Collection', desc: 'Conduct sessions using the chosen method, recording everything systematically.'},
      {no: '04', title: 'Analysis & Synthesis', desc: 'Analyse data, find patterns, and synthesise into actionable insights.'},
      {no: '05', title: 'Share & Action', desc: 'Present insights to the team, make recommendations, and prioritise next steps.'}
    ] : [
      {no: '01', title: 'Research Planning', desc: 'กำหนด Research Question, เลือก Method ที่เหมาะสม และวางแผน Recruitment'},
      {no: '02', title: 'Participant Recruitment', desc: 'Recruit ผู้เข้าร่วมที่ตรงกับ Target User ด้วย Screener ที่ออกแบบมาอย่างดี'},
      {no: '03', title: 'Data Collection', desc: 'ทำ Session ตาม Method ที่เลือก บันทึกทุกอย่างอย่างเป็นระบบ'},
      {no: '04', title: 'Analysis & Synthesis', desc: 'วิเคราะห์ข้อมูล หา Pattern และ Synthesize เป็น Insight ที่ Actionable'},
      {no: '05', title: 'Share & Action', desc: 'Present Insight ต่อทีม วาง Recommendation และ Prioritize Next Step'}
    ]
  const caseStudies = isEN ? [
      {tag: 'FinTech · Bangkok', title: 'Research Reveals Pain Point Cutting Conversion 40%', desc: '5 user interviews uncovered friction in the verification flow the team had never noticed.', result: 'Conversion up 40% after fix'},
      {tag: 'Healthcare · Bangkok', title: 'Diary Study Reveals Hidden Workarounds', desc: 'Users were using WhatsApp instead of the hospital app because it was faster. Insight led to an app redesign.', result: 'App Usage up 3x'},
      {tag: 'E-Commerce · Nationwide', title: 'Usability Test Cuts Cart Abandonment 45%', desc: 'Testing with 8 users revealed 3 immediately fixable points of confusion in checkout.', result: 'Cart Abandonment down 45%'}
    ] : [
      {tag: 'FinTech · กรุงเทพฯ', title: 'Research เผย Pain Point ที่ลด Conversion 40%', desc: '5 User Interview เผย Friction ใน Verification Flow ที่ทีมไม่เคยรู้มาก่อน', result: 'Conversion เพิ่ม 40% หลังแก้ไข'},
      {tag: 'Healthcare · กรุงเทพฯ', title: 'Diary Study เผย Workaround ที่ซ่อนอยู่', desc: 'User ใช้ WhatsApp แทน App ของโรงพยาบาล เพราะ Faster Insight นำไปสู่ App Redesign', result: 'App Usage เพิ่ม 3x'},
      {tag: 'E-Commerce · ทั่วประเทศ', title: 'Usability Test ลด Cart Abandonment 45%', desc: 'Test กับ User 8 คน เผย Confusion ใน Checkout 3 จุด ที่แก้ได้ทันที', result: 'Cart Abandonment ลด 45%'}
    ]
  const faqs        = isEN ? [
      {q: 'How many users do we need?', a: 'It depends on the method. Qualitative interviews need 5-8 for saturation. Usability tests need 5 to find 85% of issues. Surveys need hundreds or more.'},
      {q: 'How long does research take?', a: 'Lean research like 5 interviews takes 2-3 weeks. A full programme including synthesis may take 6-8 weeks.'},
      {q: 'How do you recruit users?', a: 'We recruit through our panel, your customer database, or social recruitment based on agreed screening criteria.'},
      {q: 'What are the deliverables?', a: 'A research report with key insights, personas, journey maps, opportunity areas, and prioritised recommendations.'}
    ] : [
      {q: 'ต้องใช้ User กี่คน?', a: 'ขึ้นอยู่กับ Method ครับ Qualitative Interview ใช้ 5-8 คนเพื่อ Saturation ส่วน Usability Test ใช้ 5 คนเพื่อเจอ 85% ของ Issue Survey ใช้หลักร้อยขึ้นไป'},
      {q: 'Research ใช้เวลานานแค่ไหน?', a: 'Lean Research เช่น 5 Interview ใช้ 2-3 สัปดาห์ Full Research Programme รวม Synthesis อาจใช้ 6-8 สัปดาห์'},
      {q: 'Recruit User ยังไง?', a: 'เราช่วย Recruit ผ่าน Panel ของเรา, Database ของลูกค้า หรือ Social Recruit ตาม Screening Criteria ที่กำหนด'},
      {q: 'Output ได้อะไรบ้าง?', a: 'Research Report พร้อม Key Insight, Persona, Journey Map, Opportunity Area และ Recommendation ที่ลำดับความสำคัญแล้ว'}
    ]
  const related     = isEN ? [
      {label: 'Product Discovery', href: '/services/product-discovery'},
      {label: 'UX & UI Design', href: '/services/ux-ui-design'},
      {label: 'Rapid Prototyping', href: '/services/rapid-prototyping'},
      {label: 'Growth Strategy', href: '/services/growth-strategy'}
    ] : [
      {label: 'Product Discovery', href: '/services/product-discovery'},
      {label: 'UX & UI Design', href: '/services/ux-ui-design'},
      {label: 'Rapid Prototyping', href: '/services/rapid-prototyping'},
      {label: 'Growth Strategy', href: '/services/growth-strategy'}
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
      heroImg="/images/services/user-research/hero.jpg"
      whyImg="/images/services/user-research/why1.jpg"
      whyImg2="/images/services/user-research/why2.jpg"
      featureImg="/images/services/user-research/feature.jpg"
      processImg="/images/services/user-research/process.jpg"
    />
  )
}
