import ServiceLayout from '@/components/service/ServiceLayout'
import { type Lang } from '@/lib/i18n'

export async function generateStaticParams() {
  return [{ lang: 'th' }, { lang: 'en' }]
}

export default function Page({ params }: { params: { lang: Lang } }) {
  const isEN = params.lang === 'en'
  const badge    = isEN ? 'Strategy / User Research'  : 'กลยุทธ์ / User Research'
  const title    = isEN ? 'Understand Your Users'  : 'เข้าใจผู้ใช้'
  const subtitle = isEN ? 'At a Deep Level'    : 'อย่างลึกซึ้ง'
  const heroDesc = isEN ? 'The best products are built by teams who deeply understand the people they serve. Haliviq conducts rigorous user research that replaces assumptions with evidence and opinions with insight.'  : 'ผลิตภัณฑ์ที่ดีที่สุดมาจากทีมที่เข้าใจคนที่ตัวเองให้บริการอย่างลึกซึ้ง Haliviq ทำ User Research อย่างจริงจัง เพื่อใช้หลักฐานแทนการเดา และใช้ข้อค้นพบแทนความเห็นส่วนตัว'
  const whyTitle = isEN ? 'Why assumptions are the most expensive thing in product'    : 'ทำไมการเดาถึงแพงที่สุดในการทำผลิตภัณฑ์'
  const whyDesc  = isEN ? 'Every product decision made without user evidence is a bet. Some bets pay off. Most do not. Organisations that win consistently make evidence a prerequisite for investment.'  : 'ทุกการตัดสินใจที่ไม่มีหลักฐานจากผู้ใช้คือการเดิมพัน บางครั้งก็ได้ผล แต่ส่วนใหญ่ไม่ องค์กรที่ชนะสม่ำเสมอคือองค์กรที่ถือว่าต้องมีหลักฐานก่อนลงทุน'
  const ctaTitle = isEN ? 'Ready to truly understand your users?'    : 'พร้อมเข้าใจผู้ใช้อย่างแท้จริงหรือยัง?'
  const ctaDesc  = isEN ? 'Start with a free Research Planning session. We will scope the right study for your questions.'   : 'เริ่มด้วยการคุยวางแผนวิจัยฟรี เราจะกำหนดขอบเขตการศึกษาให้ตรงกับคำถามของคุณ'
  const heroBullets = isEN ? [
      'Research planning, recruitment, and moderation',
      'Interviews, surveys, diary studies, and contextual inquiry',
      'Usability testing: moderated, unmoderated, and remote',
      'Synthesis, affinity mapping, and insight generation',
      'Personas, journey maps, and opportunity frameworks',
    ] : [
      'วางแผนวิจัย รับสมัครผู้เข้าร่วม และดำเนินการสัมภาษณ์',
      'สัมภาษณ์ แบบสำรวจ บันทึกประจำวันของผู้ใช้ และสังเกตการใช้งานในสถานที่จริง',
      'ทดสอบการใช้งาน ทั้งแบบมีผู้ดำเนินการ ไม่มีผู้ดำเนินการ และทางไกล',
      'สรุปผล จัดกลุ่มข้อมูลแบบ Affinity Mapping และสกัดข้อค้นพบ',
      'Persona, Journey Map และกรอบโอกาส',
    ]
  const whyPoints   = isEN ? [
      'Products built with user research have 2x the success rate of those built on assumptions',
      'Early-stage research costs less than 1% of total budget but prevents the most expensive mistakes',
      'Qualitative interviews reveal the WHY behind behaviour that quantitative data cannot explain',
      'Journey mapping exposes friction points invisible to internal stakeholders who are too close to the product',
      'Continuous discovery keeps teams aligned with evolving user needs',
    ] : [
      'ผลิตภัณฑ์ที่สร้างจาก User Research มีอัตราสำเร็จเป็น 2 เท่าของผลิตภัณฑ์ที่สร้างจากการเดา',
      'การวิจัยตั้งแต่ต้นใช้งบน้อยกว่า 1% แต่ป้องกันความผิดพลาดที่แพงที่สุดได้',
      'การสัมภาษณ์เชิงคุณภาพเผย "ทำไม" ของพฤติกรรม ซึ่งข้อมูลเชิงตัวเลขอธิบายไม่ได้',
      'Journey Map เผยจุดติดขัดที่คนในองค์กรมองไม่เห็น เพราะใกล้ชิดผลิตภัณฑ์เกินไป',
      'การทำ Discovery ต่อเนื่องช่วยให้ทีมตามความต้องการของผู้ใช้ที่เปลี่ยนไปตลอดเวลาได้ทัน',
    ]
  const outcomes    = isEN ? [
      {stat: '2x', label: 'Product Success Rate', desc: 'Research-led vs assumption-led'},
      {stat: '<1%', label: 'Of Total Budget', desc: 'Prevents the biggest mistakes'},
      {stat: '5', label: 'Interviews to Find Core Insights', desc: 'Efficient qualitative research'},
      {stat: '100%', label: 'Evidence-Based Decisions', desc: 'After a research programme'}
    ] : [
      {stat: '2x', label: 'Product Success Rate', desc: 'Research-led vs Assumption-led'},
      {stat: '<1%', label: 'ของงบทั้งหมด', desc: 'ป้องกันความผิดพลาดที่แพงที่สุด'},
      {stat: '5', label: 'สัมภาษณ์เพื่อหาข้อค้นพบหลัก', desc: 'Efficient Qualitative Research'},
      {stat: '100%', label: 'Evidence-based Decision', desc: 'หลังมีโปรแกรมวิจัย'}
    ]
  const features    = isEN ? [
      {icon: 'ti-messages', title: 'User Interviews', desc: 'In-depth interviews with real users to understand their goals, pain points, context, and mental models.'},
      {icon: 'ti-clipboard-list', title: 'Surveys & Quantitative Research', desc: 'Collect data from many users to validate hypotheses and measure the prevalence of issues.'},
      {icon: 'ti-device-desktop-analytics', title: 'Usability Testing', desc: 'Watch users interact with your product in real time to identify friction and confusion directly.'},
      {icon: 'ti-book', title: 'Diary Studies', desc: 'Have users log real-life experiences over time, revealing behaviour that interviews might miss.'},
      {icon: 'ti-map-pin', title: 'Contextual Inquiry', desc: 'Observe users in their real environment to see workarounds and context never mentioned in interviews.'},
      {icon: 'ti-layout-kanban', title: 'Synthesis & Insight', desc: 'Transform raw data into insights through affinity mapping, thematic analysis, and journey maps.'}
    ] : [
      {icon: 'ti-messages', title: 'User Interviews', desc: 'สัมภาษณ์เชิงลึกกับผู้ใช้จริง เพื่อเข้าใจเป้าหมาย ปัญหา บริบท และวิธีคิดของพวกเขา'},
      {icon: 'ti-clipboard-list', title: 'Surveys & Quantitative Research', desc: 'เก็บข้อมูลจากผู้ใช้จำนวนมากเพื่อตรวจสมมติฐานและวัดว่าปัญหาเกิดบ่อยแค่ไหน'},
      {icon: 'ti-device-desktop-analytics', title: 'Usability Testing', desc: 'ดูผู้ใช้ใช้ผลิตภัณฑ์จริง เพื่อหาจุดติดขัดและความสับสนโดยตรง'},
      {icon: 'ti-book', title: 'Diary Studies', desc: 'ให้ผู้ใช้บันทึกประสบการณ์ในชีวิตจริงตามช่วงเวลา เผยพฤติกรรมที่การสัมภาษณ์อาจพลาด'},
      {icon: 'ti-map-pin', title: 'Contextual Inquiry', desc: 'ไปสังเกตผู้ใช้ในสภาพแวดล้อมจริง เห็นวิธีแก้ขัดและบริบทที่ไม่มีใครพูดถึง'},
      {icon: 'ti-layout-kanban', title: 'Synthesis & Insight', desc: 'เปลี่ยนข้อมูลดิบเป็นข้อค้นพบด้วย Affinity Mapping การวิเคราะห์ตามธีม และ Journey Map'}
    ]
  const steps       = isEN ? [
      {no: '01', title: 'Research Planning', desc: 'Define research questions, select appropriate methods, and plan recruitment.'},
      {no: '02', title: 'Participant Recruitment', desc: 'Recruit participants matching your target user with a well-designed screener.'},
      {no: '03', title: 'Data Collection', desc: 'Conduct sessions using the chosen method, recording everything systematically.'},
      {no: '04', title: 'Analysis & Synthesis', desc: 'Analyse data, find patterns, and synthesise into actionable insights.'},
      {no: '05', title: 'Share & Action', desc: 'Present insights to the team, make recommendations, and prioritise next steps.'}
    ] : [
      {no: '01', title: 'Research Planning', desc: 'กำหนดคำถามวิจัย เลือกวิธีที่เหมาะสม และวางแผนการหาผู้เข้าร่วม'},
      {no: '02', title: 'Participant Recruitment', desc: 'หาผู้เข้าร่วมที่ตรงกลุ่มเป้าหมาย ด้วยแบบคัดกรองที่ออกแบบมาอย่างดี'},
      {no: '03', title: 'Data Collection', desc: 'ดำเนินการตามวิธีที่เลือก และบันทึกทุกอย่างอย่างเป็นระบบ'},
      {no: '04', title: 'Analysis & Synthesis', desc: 'วิเคราะห์ข้อมูล หารูปแบบ และสรุปเป็นข้อค้นพบที่นำไปทำต่อได้'},
      {no: '05', title: 'Share & Action', desc: 'นำเสนอข้อค้นพบต่อทีม ให้คำแนะนำ และจัดลำดับขั้นตอนถัดไป'}
    ]
  const caseStudies = isEN ? [
      {tag: 'FinTech · Bangkok', title: 'Research Reveals Pain Point Cutting Conversion 40%', desc: '5 user interviews uncovered friction in the verification flow the team had never noticed.', result: 'Conversion up 40% after fix'},
      {tag: 'Healthcare · Bangkok', title: 'Diary Study Reveals Hidden Workarounds', desc: 'Users were using WhatsApp instead of the hospital app because it was faster. Insight led to an app redesign.', result: 'App Usage up 3x'},
      {tag: 'E-Commerce · Nationwide', title: 'Usability Test Cuts Cart Abandonment 45%', desc: 'Testing with 8 users revealed 3 immediately fixable points of confusion in checkout.', result: 'Cart Abandonment down 45%'}
    ] : [
      {tag: 'FinTech · กรุงเทพฯ', title: 'งานวิจัยเผยปัญหาที่ทำให้ Conversion ตก 40%', desc: 'สัมภาษณ์ผู้ใช้ 5 คน พบจุดติดขัดในขั้นตอนยืนยันตัวตนที่ทีมไม่เคยรู้มาก่อน', result: 'Conversion เพิ่ม 40% หลังแก้ไข'},
      {tag: 'Healthcare · กรุงเทพฯ', title: 'บันทึกประจำวันของผู้ใช้เผยวิธีแก้ขัดที่ซ่อนอยู่', desc: 'ผู้ใช้ใช้ WhatsApp แทนแอปของโรงพยาบาล เพราะเร็วกว่า ข้อค้นพบนี้นำไปสู่การออกแบบแอปใหม่', result: 'การใช้แอปเพิ่ม 3 เท่า'},
      {tag: 'E-Commerce · ทั่วประเทศ', title: 'ทดสอบการใช้งานลดการทิ้งตะกร้า 45%', desc: 'ทดสอบกับผู้ใช้ 8 คน พบจุดสับสนในหน้า Checkout 3 จุด ที่แก้ได้ทันที', result: 'ทิ้งตะกร้าลด 45%'}
    ]
  const faqs        = isEN ? [
      {q: 'How many users do we need?', a: 'It depends on the method. Qualitative interviews need 5-8 for saturation. Usability tests need 5 to find 85% of issues. Surveys need hundreds or more.'},
      {q: 'How long does research take?', a: 'Lean research like 5 interviews takes 2-3 weeks. A full programme including synthesis may take 6-8 weeks.'},
      {q: 'How do you recruit users?', a: 'We recruit through our panel, your customer database, or social recruitment based on agreed screening criteria.'},
      {q: 'What are the deliverables?', a: 'A research report with key insights, personas, journey maps, opportunity areas, and prioritised recommendations.'}
    ] : [
      {q: 'ต้องใช้ผู้ใช้กี่คน?', a: 'ขึ้นกับวิธีครับ สัมภาษณ์เชิงคุณภาพใช้ 5-8 คนจนได้คำตอบซ้ำๆ ส่วนทดสอบการใช้งานใช้ 5 คนก็เจอปัญหา 85% แบบสำรวจต้องใช้หลักร้อยขึ้นไป'},
      {q: 'วิจัยใช้เวลานานแค่ไหน?', a: 'วิจัยแบบกระชับ เช่น สัมภาษณ์ 5 คน ใช้ 2-3 สัปดาห์ โปรแกรมวิจัยเต็มรูปแบบรวมการสรุปผลอาจใช้ 6-8 สัปดาห์'},
      {q: 'หาผู้ใช้มาร่วมวิจัยอย่างไร?', a: 'เราช่วยหาผ่านกลุ่มผู้ร่วมวิจัยของเรา ฐานข้อมูลลูกค้า หรือโซเชียล ตามเกณฑ์คัดกรองที่กำหนด'},
      {q: 'ได้อะไรบ้าง?', a: 'รายงานวิจัยพร้อมข้อค้นพบหลัก Persona, Journey Map, โอกาสที่พบ และข้อเสนอแนะที่จัดลำดับความสำคัญแล้ว'}
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
