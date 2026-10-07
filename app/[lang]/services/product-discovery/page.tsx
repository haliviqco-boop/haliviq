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
  const heroDesc = isEN ? 'Product discovery is the process of ensuring you build the right thing before committing to building it right. Haliviq runs structured discovery that de-risks investment and aligns stakeholders.'  : 'Product Discovery คือการตรวจให้แน่ใจว่าเรากำลังสร้างสิ่งที่ถูกต้อง ก่อนจะลงมือสร้างให้ถูกวิธี Haliviq ทำ Discovery อย่างเป็นขั้นตอน ลดความเสี่ยง และทำให้ผู้มีส่วนได้ส่วนเสียเห็นตรงกัน'
  const whyTitle = isEN ? 'Why building without discovery is gambling'    : 'ทำไมการสร้างโดยไม่ทำ Discovery ก่อนถึงเหมือนเสี่ยงโชค'
  const whyDesc  = isEN ? 'The number-one reason products fail is not technical failure — it is building something nobody wants. Discovery is the process of finding out what people actually need before the expensive part begins.'  : 'สาเหตุอันดับหนึ่งที่ผลิตภัณฑ์ล้มเหลวไม่ใช่เรื่องเทคนิค แต่คือการสร้างสิ่งที่ไม่มีใครต้องการ Discovery คือการหาว่าคนต้องการอะไรจริงๆ ก่อนจะเริ่มส่วนที่ต้องลงทุนสูง'
  const ctaTitle = isEN ? 'Ready to discover before you build?'    : 'พร้อมทำ Discovery ก่อนสร้างหรือยัง?'
  const ctaDesc  = isEN ? 'Book a free Discovery Sprint scoping call. We will scope the right process for your stage.'   : 'จองคุยกำหนดขอบเขต Discovery Sprint ฟรี เราจะวางขั้นตอนให้เหมาะกับช่วงที่ธุรกิจคุณอยู่'
  const heroBullets = isEN ? [
      'Problem framing and opportunity sizing',
      'Competitive landscape and market positioning analysis',
      'User interviews and Jobs-To-Be-Done research',
      'Solution ideation, prioritisation, and feasibility assessment',
      'Business case, MVP definition, and go-to-market planning',
    ] : [
      'กำหนดโจทย์ปัญหาและประเมินขนาดโอกาส',
      'ดูภาพรวมคู่แข่งและวางตำแหน่งในตลาด',
      'สัมภาษณ์ผู้ใช้และวิจัยแบบ Jobs-To-Be-Done',
      'คิดแนวทางแก้ปัญหา จัดลำดับความสำคัญ และประเมินความเป็นไปได้',
      'วางแผนธุรกิจ กำหนด MVP และวางแผนเข้าสู่ตลาด',
    ]
  const whyPoints   = isEN ? [
      '42% of startups fail because there is no market need. Discovery surfaces this before you build',
      'A clearly defined problem statement aligns the whole team and prevents scope creep throughout development',
      'Jobs-To-Be-Done research reveals the functional, social, and emotional needs behind feature requests',
      'Prioritisation frameworks like RICE, ICE, or Kano ensure you build the highest-value features first',
      'A well-run discovery process typically cuts MVP scope by 40% while improving outcome probability',
    ] : [
      'Startup 42% ล้มเหลวเพราะไม่มีความต้องการในตลาด Discovery ช่วยให้เห็นความจริงนี้ก่อนลงมือสร้าง',
      'โจทย์ปัญหาที่ชัดเจนทำให้ทั้งทีมเห็นตรงกัน และกันไม่ให้ขอบเขตงานบานปลายระหว่างพัฒนา',
      'วิจัยแบบ Jobs-To-Be-Done เผยความต้องการด้านการใช้งาน สังคม และอารมณ์ ที่อยู่เบื้องหลังฟีเจอร์ที่ลูกค้าขอ',
      'กรอบจัดลำดับความสำคัญอย่าง RICE, ICE หรือ Kano ช่วยให้สร้างฟีเจอร์ที่มีคุณค่าสูงสุดก่อน',
      'Discovery ที่ดีมักลดขอบเขต MVP ได้ 40% และเพิ่มโอกาสสำเร็จ',
    ]
  const outcomes    = isEN ? [
      {stat: '40%', label: 'Smaller MVP Scope', desc: 'With clear discovery output'},
      {stat: '2x', label: 'Launch Success Rate', desc: 'Discovery-led vs assumption-led'},
      {stat: '3 weeks', label: 'Discovery Sprint', desc: 'From brief to validated concept'},
      {stat: '100%', label: 'Stakeholder Alignment', desc: 'Before development begins'}
    ] : [
      {stat: '40%', label: 'ลดขอบเขต MVP', desc: 'ด้วยผลลัพธ์ Discovery ที่ชัดเจน'},
      {stat: '2x', label: 'Launch Success Rate', desc: 'Discovery-led vs Assumption-led'},
      {stat: '3 สัปดาห์', label: 'Discovery Sprint', desc: 'จากบรีฟสู่แนวคิดที่ผ่านการพิสูจน์'},
      {stat: '100%', label: 'Stakeholder Alignment', desc: 'ก่อนเริ่มพัฒนา'}
    ]
  const features    = isEN ? [
      {icon: 'ti-bulb', title: 'Problem Framing', desc: 'Define a clear problem statement, scope the opportunity, and size the addressable market.'},
      {icon: 'ti-world', title: 'Market & Competitive Analysis', desc: 'Analyse the competitive landscape, find white space, and establish a strong positioning.'},
      {icon: 'ti-user-question', title: 'User Research & JTBD', desc: 'Interview target users using the Jobs-To-Be-Done framework to understand true underlying needs.'},
      {icon: 'ti-device-gamepad-2', title: 'Ideation & Concept Testing', desc: 'Generate multiple solution concepts, test with real users, and choose the best direction.'},
      {icon: 'ti-list-check', title: 'Prioritisation & Roadmap', desc: 'Use frameworks to prioritise features and initiatives to maximise value in the MVP.'},
      {icon: 'ti-presentation', title: 'Business Case & GTM', desc: 'Build a business case, financial model, and go-to-market plan for stakeholders.'}
    ] : [
      {icon: 'ti-bulb', title: 'Problem Framing', desc: 'กำหนดโจทย์ปัญหาให้ชัด ระบุโอกาส และประเมินขนาดตลาดที่จะได้ประโยชน์'},
      {icon: 'ti-world', title: 'Market & Competitive Analysis', desc: 'วิเคราะห์ภาพรวมคู่แข่ง หาช่องว่างในตลาด และตำแหน่งที่แข็งแรง'},
      {icon: 'ti-user-question', title: 'User Research & JTBD', desc: 'สัมภาษณ์ผู้ใช้กลุ่มเป้าหมายด้วยกรอบ Jobs-To-Be-Done เพื่อเข้าใจความต้องการที่แท้จริง'},
      {icon: 'ti-device-gamepad-2', title: 'Ideation & Concept Testing', desc: 'สร้างแนวคิดหลายแบบ ทดสอบกับผู้ใช้จริง และเลือกทางที่ดีที่สุด'},
      {icon: 'ti-list-check', title: 'Prioritization & Roadmap', desc: 'ใช้กรอบจัดลำดับฟีเจอร์และโครงการ เพื่อให้ MVP ได้คุณค่าสูงสุด'},
      {icon: 'ti-presentation', title: 'Business Case & GTM', desc: 'จัดทำแผนธุรกิจ แบบจำลองการเงิน และแผนเข้าสู่ตลาดสำหรับผู้มีส่วนได้ส่วนเสีย'}
    ]
  const steps       = isEN ? [
      {no: '01', title: 'Kick-off & Framing', desc: 'Understand business context, define success criteria, and scope the discovery.'},
      {no: '02', title: 'Research & Learn', desc: 'Interview users, analyse competitors, and gather necessary data.'},
      {no: '03', title: 'Synthesise & Ideate', desc: 'Summarise insights, create HMW questions, and generate solution concepts.'},
      {no: '04', title: 'Validate & Decide', desc: 'Test concepts with users, assess feasibility, and choose a direction.'},
      {no: '05', title: 'Define & Plan', desc: 'Define MVP scope, build a roadmap, and create a business case for stakeholders.'}
    ] : [
      {no: '01', title: 'Kick-off & Framing', desc: 'ทำความเข้าใจบริบทธุรกิจ กำหนดเกณฑ์ความสำเร็จ และกำหนดขอบเขต Discovery'},
      {no: '02', title: 'Research & Learn', desc: 'สัมภาษณ์ผู้ใช้ วิเคราะห์คู่แข่ง และเก็บข้อมูลที่จำเป็น'},
      {no: '03', title: 'Synthesize & Ideate', desc: 'สรุปข้อค้นพบ ตั้งคำถาม HMW และคิดแนวทางแก้ปัญหา'},
      {no: '04', title: 'Validate & Decide', desc: 'ทดสอบแนวคิดกับผู้ใช้ ประเมินความเป็นไปได้ และเลือกทิศทาง'},
      {no: '05', title: 'Define & Plan', desc: 'กำหนดขอบเขต MVP วางโรดแมป และทำแผนธุรกิจสำหรับผู้มีส่วนได้ส่วนเสีย'}
    ]
  const caseStudies = isEN ? [
      {tag: 'SaaS · Bangkok', title: 'Discovery Changes Direction Before Wasting 12 Months', desc: '3-week discovery revealed the core assumption was wrong — pivoted before building.', result: '12 months of development saved'},
      {tag: 'Healthcare · Bangkok', title: 'MVP Scope Reduced 60% While Achieving Business Goals', desc: 'Discovery identified 3 core jobs to be done and cut everything else.', result: 'Launched 6 months earlier'},
      {tag: 'FinTech · Bangkok', title: 'Discovery Aligns 5 Stakeholders in 3 Weeks', desc: 'Structured workshops and evidence-based decisions got everyone committed to one direction.', result: '0 Scope Changes throughout the project'}
    ] : [
      {tag: 'SaaS · กรุงเทพฯ', title: 'Discovery เปลี่ยนทิศทางก่อนเสียเวลา 12 เดือน', desc: 'Discovery 3 สัปดาห์ชี้ว่าสมมติฐานหลักผิด จึงปรับทิศทางก่อนลงมือสร้าง', result: 'ประหยัดเวลาพัฒนา 12 เดือน'},
      {tag: 'Healthcare · กรุงเทพฯ', title: 'ลดขอบเขต MVP 60% แต่ยังได้ตามเป้าธุรกิจ', desc: 'Discovery ระบุงานหลักที่ผู้ใช้ต้องการ 3 ข้อที่ต้องสร้าง ส่วนที่เหลือตัดออก', result: 'เปิดตัวเร็วขึ้น 6 เดือน'},
      {tag: 'FinTech · กรุงเทพฯ', title: 'Discovery ทำให้ผู้เกี่ยวข้อง 5 ฝ่ายเห็นตรงกันใน 3 สัปดาห์', desc: 'เวิร์กช็อปที่เป็นระบบและการตัดสินใจจากหลักฐาน ทำให้ทุกคนเดินไปทางเดียวกัน', result: 'ไม่มีการเปลี่ยนขอบเขตตลอดโปรเจกต์'}
    ]
  const faqs        = isEN ? [
      {q: 'How long does discovery take?', a: 'An initial discovery sprint takes 2-3 weeks. A full discovery including deep research may take 4-6 weeks, depending on problem size and complexity.'},
      {q: 'Do we need an idea before starting discovery?', a: 'Not necessarily. Discovery works best starting from a problem, not a solution. If you already have an idea, discovery validates whether it is the right direction.'},
      {q: 'What are the discovery outputs?', a: 'A problem statement, validated insights, solution concept, MVP scope, roadmap, and a business case for stakeholders.'},
      {q: 'Is discovery necessary for every project?', a: 'Recommended for high-investment projects, when the problem or market is unclear, or when multiple stakeholders need alignment.'}
    ] : [
      {q: 'Discovery ใช้เวลานานแค่ไหน?', a: 'Discovery Sprint เบื้องต้นใช้ 2-3 สัปดาห์ ส่วน Discovery เต็มรูปแบบที่วิจัยลึกอาจใช้ 4-6 สัปดาห์ ขึ้นกับขนาดและความซับซ้อนของปัญหา'},
      {q: 'ต้องมีไอเดียก่อนถึงทำ Discovery ได้ไหม?', a: 'ไม่จำเป็นครับ Discovery ได้ผลดีที่สุดเมื่อเริ่มจากปัญหา ไม่ใช่คำตอบ ถ้ามีไอเดียอยู่แล้ว เราก็ช่วยตรวจว่ามาถูกทางไหม'},
      {q: 'Discovery ส่งมอบอะไรบ้าง?', a: 'โจทย์ปัญหา ข้อค้นพบที่ผ่านการพิสูจน์ แนวคิดการแก้ปัญหา ขอบเขต MVP โรดแมป และแผนธุรกิจสำหรับผู้มีส่วนได้ส่วนเสีย'},
      {q: 'Discovery จำเป็นกับทุกโปรเจกต์ไหม?', a: 'แนะนำสำหรับโปรเจกต์ที่ลงทุนสูง ยังไม่แน่ใจเรื่องปัญหาหรือตลาด หรือต้องทำให้หลายฝ่ายเห็นตรงกัน'}
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
