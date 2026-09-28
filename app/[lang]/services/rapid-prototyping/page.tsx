import ServiceLayout from '@/components/service/ServiceLayout'
import { type Lang } from '@/lib/i18n'

export async function generateStaticParams() {
  return [{ lang: 'th' }, { lang: 'en' }]
}

export default function Page({ params }: { params: { lang: Lang } }) {
  const isEN = params.lang === 'en'
  const badge    = isEN ? 'Design / Rapid Prototyping'  : 'ดีไซน์ / Rapid Prototyping'
  const title    = isEN ? 'Test Your Ideas'  : 'ทดสอบไอเดีย'
  const subtitle = isEN ? 'Before You Build Them'    : 'ก่อนสร้างจริง'
  const heroDesc = isEN ? 'The most expensive mistake in product development is building the wrong thing. Haliviq creates high-fidelity prototypes that let you validate ideas with real users before a line of code is written.'  : 'ความผิดพลาดที่แพงที่สุดใน Product Development คือการสร้างสิ่งที่ผิด Haliviq สร้าง Prototype ความละเอียดสูงที่ให้คุณ Validate ไอเดียกับผู้ใช้จริงก่อนเขียน Code บรรทัดแรก'
  const whyTitle = isEN ? 'Why prototyping is the smartest investment in product'    : 'ทำไม Prototyping ถึงเป็นการลงทุนที่ฉลาดที่สุดใน Product'
  const whyDesc  = isEN ? 'Changes made in design cost 10x less than changes made during development. Changes after launch cost 100x. Prototyping is not a luxury — it is the cheapest form of risk reduction available.'  : 'การเปลี่ยนแปลงในขั้นตอน Design มีต้นทุนต่ำกว่าการเปลี่ยนระหว่าง Development 10 เท่า และต่ำกว่าหลัง Launch 100 เท่า Prototyping ไม่ใช่ Luxury แต่คือการลดความเสี่ยงที่ถูกที่สุด'
  const ctaTitle = isEN ? 'Ready to test before you build?'    : 'พร้อมทดสอบก่อนสร้างไหม?'
  const ctaDesc  = isEN ? 'Book a free Design Sprint scoping session. We will plan your prototype in one conversation.'   : 'จอง Design Sprint Scoping Session ฟรี เราจะวางแผน Prototype ของคุณในบทสนทนาเดียว'
  const heroBullets = isEN ? [
      'Concept exploration and idea mapping in structured workshops',
      'Low-fidelity sketches to high-fidelity interactive prototypes',
      'Moderated and unmoderated usability testing sessions',
      'Synthesis of findings into actionable design decisions',
      'Handoff-ready designs and developer specifications',
    ] : [
      'Concept Exploration และ Idea Mapping ใน Workshop',
      'Sketch คร่าวๆ ถึง Interactive Prototype ความละเอียดสูง',
      'Moderated และ Unmoderated Usability Testing',
      'Synthesis Feedback เป็น Design Decision ที่ Actionable',
      'Handoff-ready Design พร้อม Developer Specification',
    ]
  const whyPoints   = isEN ? [
      'Prototyping surfaces assumptions that would otherwise survive all the way to production',
      'User testing with just 5 participants reveals 85% of usability problems',
      'Stakeholders give far more valuable feedback on interactive prototypes than on documents',
      'Rapid iteration on prototypes compresses months of back-and-forth into focused design sprints',
      'A validated prototype becomes the development team north star — reducing scope creep and ambiguity',
    ] : [
      'Prototype เผย Assumption ที่ซ่อนอยู่ที่มิฉะนั้นจะผ่านไปถึง Production',
      'Usability Test กับ User เพียง 5 คนพบ 85% ของ Usability Problem',
      'Stakeholder ให้ Feedback ที่มีคุณค่ากับ Prototype Interactive มากกว่า Document',
      'Rapid Iteration บน Prototype ย่น Back-and-forth หลายเดือนเป็น Design Sprint ที่โฟกัส',
      'Prototype ที่ Validate แล้วกลายเป็น North Star ของทีม Dev ลด Scope Creep และความคลุมเครือ',
    ]
  const outcomes    = isEN ? [
      {stat: '10x', label: 'Cheaper Than Dev Changes', desc: 'Design-stage fixes'},
      {stat: '5', label: 'Users to Find 85% of Issues', desc: 'Nielsen Norman research'},
      {stat: '2 weeks', label: 'From Brief to Prototype', desc: 'In a focused design sprint'},
      {stat: '0', label: 'Surprises at Launch', desc: 'Validated before build'}
    ] : [
      {stat: '10x', label: 'ถูกกว่าแก้ใน Dev', desc: 'Design Stage Fix'},
      {stat: '5 คน', label: 'พบ 85% ของ Issue', desc: 'Nielsen Norman Research'},
      {stat: '2 สัปดาห์', label: 'จาก Brief สู่ Prototype', desc: 'ใน Focused Design Sprint'},
      {stat: '0', label: 'เซอร์ไพรส์ตอน Launch', desc: 'Validate ก่อน Build'}
    ]
  const features    = isEN ? [
      {icon: 'ti-bulb', title: 'Concept Ideation', desc: 'Workshop with the team to generate and evaluate multiple concepts before choosing a direction.'},
      {icon: 'ti-pencil', title: 'Wireframing', desc: 'Create low-fidelity wireframes showing layout and flow without wasting time on visual detail.'},
      {icon: 'ti-device-desktop', title: 'High-fidelity Prototype', desc: 'Build an interactive prototype that looks and feels like the real product — ready to test with users immediately.'},
      {icon: 'ti-users', title: 'Usability Testing', desc: 'Test with real target users, record sessions, and synthesise actionable insights.'},
      {icon: 'ti-analyze', title: 'Iteration & Refinement', desc: 'Refine design based on testing feedback, iterating until confident the direction is right.'},
      {icon: 'ti-file-code', title: 'Developer Handoff', desc: 'Deliver design specs, assets, and annotations that developers can build from immediately.'}
    ] : [
      {icon: 'ti-bulb', title: 'Concept Ideation', desc: 'Workshop ร่วมกับทีมเพื่อ Generate และ Evaluate Concept หลากหลายก่อนเลือก Direction'},
      {icon: 'ti-pencil', title: 'Wireframing', desc: 'สร้าง Low-fidelity Wireframe ที่แสดง Layout และ Flow โดยไม่เสียเวลากับ Visual Detail'},
      {icon: 'ti-device-desktop', title: 'High-fidelity Prototype', desc: 'สร้าง Interactive Prototype ที่ดูและรู้สึกเหมือน Product จริง ทดสอบกับ User ได้ทันที'},
      {icon: 'ti-users', title: 'Usability Testing', desc: 'Test กับ Target User จริง บันทึก Session และ Synthesize Insight ที่ Actionable'},
      {icon: 'ti-analyze', title: 'Iteration & Refinement', desc: 'ปรับ Design ตาม Feedback จาก Testing วนซ้ำจนมั่นใจว่า Direction ถูกต้อง'},
      {icon: 'ti-file-code', title: 'Developer Handoff', desc: 'ส่งมอบ Design Spec, Asset และ Annotation ที่ Developer ใช้ Build ได้ทันที'}
    ]
  const steps       = isEN ? [
      {no: '01', title: 'Brief & Kick-off', desc: 'Understand the goal, constraints, and success criteria of the prototype.'},
      {no: '02', title: 'Ideation Workshop', desc: 'Generate multiple concepts, evaluate with the team, and choose the best direction.'},
      {no: '03', title: 'Wireframe', desc: 'Build wireframes showing flow and structure before investing in visual detail.'},
      {no: '04', title: 'High-fidelity Design', desc: 'Design an interactive prototype realistic enough to test with users.'},
      {no: '05', title: 'Test & Iterate', desc: 'Test with 5+ users, synthesise insights, and refine design based on findings.'},
      {no: '06', title: 'Handoff', desc: 'Deliver specs, assets, and prototype to the dev team ready to build immediately.'}
    ] : [
      {no: '01', title: 'Brief & Kick-off', desc: 'ทำความเข้าใจ Goal, Constraint และ Success Criteria ของ Prototype'},
      {no: '02', title: 'Ideation Workshop', desc: 'Generate Concept หลายทาง ประเมินร่วมกับทีมและเลือก Direction ที่ดีที่สุด'},
      {no: '03', title: 'Wireframe', desc: 'สร้าง Wireframe ที่แสดง Flow และ Structure ก่อนลงทุน Visual Detail'},
      {no: '04', title: 'High-fidelity Design', desc: 'ออกแบบ Interactive Prototype ที่สมจริงพร้อม Test กับ User'},
      {no: '05', title: 'Test & Iterate', desc: 'Test กับ User 5+ คน Synthesize Insight และปรับ Design ตาม Finding'},
      {no: '06', title: 'Handoff', desc: 'ส่งมอบ Spec, Asset และ Prototype ให้ทีม Dev พร้อม Build ทันที'}
    ]
  const caseStudies = isEN ? [
      {tag: 'FinTech · Bangkok', title: 'Prototype Prevents 6M THB Redesign', desc: 'User testing with a prototype revealed a wrong assumption — direction changed before dev started.', result: '6M THB saved'},
      {tag: 'Healthcare · Bangkok', title: '2-week Design Sprint Aligns 5 Stakeholders', desc: 'Interactive prototype gave everyone the same vision, reducing meetings and revisions.', result: '0 Major Revisions after kick-off'},
      {tag: 'SaaS · Bangkok', title: 'Prototype Test Finds 7 Critical Issues Before Launch', desc: 'Usability test with 8 users found and fixed issues before development started.', result: 'On-time launch with no rollback'}
    ] : [
      {tag: 'FinTech · กรุงเทพฯ', title: 'Prototype ป้องกัน Redesign มูลค่า 6 ล้านบาท', desc: 'User Test กับ Prototype เผย Assumption ผิด ปรับ Direction ก่อน Dev เริ่มงาน', result: 'ประหยัด 6 ล้านบาท'},
      {tag: 'Healthcare · กรุงเทพฯ', title: 'Design Sprint ใน 2 สัปดาห์ Align 5 Stakeholder', desc: 'Interactive Prototype ทำให้ทุกคนเห็นภาพเดียวกัน ลด Meeting และ Revision', result: '0 Major Revision หลัง Kickoff'},
      {tag: 'SaaS · กรุงเทพฯ', title: 'Prototype Test เผย 7 Critical Issue ก่อน Launch', desc: 'Usability Test กับ User 8 คน พบและแก้ Issue ก่อน Development เริ่ม', result: 'Launch ตรงเวลา ไม่มี Rollback'}
    ]
  const faqs        = isEN ? [
      {q: 'How is a prototype different from a mockup?', a: 'A mockup is a static image showing visual design. A prototype is interactive — users can click, navigate, and experience it like the real product.'},
      {q: 'How long does it take?', a: 'A lean prototype takes 1-2 weeks. A full design sprint including testing takes 3-4 weeks depending on size and complexity.'},
      {q: 'Do we need a clear spec before prototyping?', a: 'Not at all. Prototyping is ideal for exploring concepts that are still unclear. The more ambiguous, the more valuable the prototype.'},
      {q: 'Can the prototype be in Figma?', a: 'Yes. We use Figma as our primary tool and deliver a Figma file that the design and dev team can use immediately.'}
    ] : [
      {q: 'Prototype ต่างจาก Mockup ยังไง?', a: 'Mockup คือภาพนิ่งที่แสดง Visual Design Prototype คือ Interactive ที่ผู้ใช้คลิกได้ Navigate ได้ และ Test ประสบการณ์ได้เหมือน Product จริง'},
      {q: 'ใช้เวลานานแค่ไหน?', a: 'Lean Prototype ใช้ 1-2 สัปดาห์ Full Design Sprint รวม Testing ใช้ 3-4 สัปดาห์ ขึ้นอยู่กับขนาดและความซับซ้อน'},
      {q: 'ต้องมี Spec ชัดเจนก่อนทำ Prototype ไหม?', a: 'ไม่จำเป็นครับ Prototyping เหมาะมากกับการ Explore Concept ที่ยังไม่ชัด ยิ่ง Ambiguous ยิ่ง Valuable'},
      {q: 'Prototype เป็น Figma ได้ไหม?', a: 'ได้ครับ เราใช้ Figma เป็น Primary Tool และส่งมอบ Figma File ที่ทีม Design และ Dev ใช้ต่อได้ทันที'}
    ]
  const related     = isEN ? [
      {label: 'UX & UI Design', href: '/services/ux-ui-design'},
      {label: 'User Research', href: '/services/user-research'},
      {label: 'Product Discovery', href: '/services/product-discovery'},
      {label: 'Design Systems', href: '/services/design-systems'}
    ] : [
      {label: 'UX & UI Design', href: '/services/ux-ui-design'},
      {label: 'User Research', href: '/services/user-research'},
      {label: 'Product Discovery', href: '/services/product-discovery'},
      {label: 'Design Systems', href: '/services/design-systems'}
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
      heroImg="/images/services/rapid-prototyping/hero.jpg"
      whyImg="/images/services/rapid-prototyping/why1.jpg"
      whyImg2="/images/services/rapid-prototyping/why2.jpg"
      featureImg="/images/services/rapid-prototyping/feature.jpg"
      processImg="/images/services/rapid-prototyping/process.jpg"
    />
  )
}
