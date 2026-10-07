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
  const heroDesc = isEN ? 'The most expensive mistake in product development is building the wrong thing. Haliviq creates high-fidelity prototypes that let you validate ideas with real users before a line of code is written.'  : 'ความผิดพลาดที่แพงที่สุดในการพัฒนาผลิตภัณฑ์คือการสร้างสิ่งที่ผิด Haliviq ทำต้นแบบแบบละเอียดสูง ให้คุณทดสอบไอเดียกับผู้ใช้จริงก่อนเขียนโค้ดบรรทัดแรก'
  const whyTitle = isEN ? 'Why prototyping is the smartest investment in product'    : 'ทำไมการทำต้นแบบถึงเป็นการลงทุนที่คุ้มที่สุด'
  const whyDesc  = isEN ? 'Changes made in design cost 10x less than changes made during development. Changes after launch cost 100x. Prototyping is not a luxury — it is the cheapest form of risk reduction available.'  : 'การแก้ในขั้นออกแบบถูกกว่าแก้ระหว่างพัฒนา 10 เท่า และถูกกว่าแก้หลังเปิดตัว 100 เท่า ต้นแบบไม่ใช่ของฟุ่มเฟือย แต่เป็นวิธีลดความเสี่ยงที่ถูกที่สุด'
  const ctaTitle = isEN ? 'Ready to test before you build?'    : 'พร้อมทดสอบก่อนสร้างหรือยัง?'
  const ctaDesc  = isEN ? 'Book a free Design Sprint scoping session. We will plan your prototype in one conversation.'   : 'จองคุยกำหนดขอบเขต Design Sprint ฟรี เราจะวางแผนต้นแบบของคุณให้จบในการคุยครั้งเดียว'
  const heroBullets = isEN ? [
      'Concept exploration and idea mapping in structured workshops',
      'Low-fidelity sketches to high-fidelity interactive prototypes',
      'Moderated and unmoderated usability testing sessions',
      'Synthesis of findings into actionable design decisions',
      'Handoff-ready designs and developer specifications',
    ] : [
      'สำรวจแนวคิดและวางแผนผังไอเดียในเวิร์กช็อป',
      'ตั้งแต่ร่างคร่าวๆ ไปจนถึงต้นแบบที่กดใช้ได้แบบละเอียดสูง',
      'ทดสอบการใช้งานทั้งแบบมีผู้ดำเนินการและไม่มีผู้ดำเนินการ',
      'สรุปความเห็นเป็นการตัดสินใจด้านดีไซน์ที่นำไปทำต่อได้',
      'งานดีไซน์พร้อมส่งต่อ พร้อมสเปกสำหรับนักพัฒนา',
    ]
  const whyPoints   = isEN ? [
      'Prototyping surfaces assumptions that would otherwise survive all the way to production',
      'User testing with just 5 participants reveals 85% of usability problems',
      'Stakeholders give far more valuable feedback on interactive prototypes than on documents',
      'Rapid iteration on prototypes compresses months of back-and-forth into focused design sprints',
      'A validated prototype becomes the development team north star — reducing scope creep and ambiguity',
    ] : [
      'ต้นแบบเผยสมมติฐานที่ซ่อนอยู่ ซึ่งถ้าไม่เจอก็จะหลุดไปถึงระบบจริง',
      'ทดสอบการใช้งานกับผู้ใช้เพียง 5 คนก็พบปัญหาได้ถึง 85%',
      'ผู้มีส่วนได้ส่วนเสียให้ความเห็นที่มีประโยชน์กับต้นแบบที่กดใช้ได้มากกว่าเอกสาร',
      'ปรับต้นแบบซ้ำๆ อย่างรวดเร็ว ย่นการคุยไปมาหลายเดือนให้เหลือ Design Sprint ที่โฟกัส',
      'ต้นแบบที่ผ่านการพิสูจน์แล้วเป็นแนวทางให้ทีมพัฒนา ลดขอบเขตที่บานปลายและความคลุมเครือ',
    ]
  const outcomes    = isEN ? [
      {stat: '10x', label: 'Cheaper Than Dev Changes', desc: 'Design-stage fixes'},
      {stat: '5', label: 'Users to Find 85% of Issues', desc: 'Nielsen Norman research'},
      {stat: '2 weeks', label: 'From Brief to Prototype', desc: 'In a focused design sprint'},
      {stat: '0', label: 'Surprises at Launch', desc: 'Validated before build'}
    ] : [
      {stat: '10x', label: 'ถูกกว่าแก้ตอนพัฒนา', desc: 'Design Stage Fix'},
      {stat: '5 คน', label: 'พบปัญหา 85%', desc: 'Nielsen Norman Research'},
      {stat: '2 สัปดาห์', label: 'จากบรีฟสู่ต้นแบบ', desc: 'ใน Design Sprint ที่โฟกัส'},
      {stat: '0', label: 'เซอร์ไพรส์ตอนเปิดตัว', desc: 'ทดสอบก่อนสร้าง'}
    ]
  const features    = isEN ? [
      {icon: 'ti-bulb', title: 'Concept Ideation', desc: 'Workshop with the team to generate and evaluate multiple concepts before choosing a direction.'},
      {icon: 'ti-pencil', title: 'Wireframing', desc: 'Create low-fidelity wireframes showing layout and flow without wasting time on visual detail.'},
      {icon: 'ti-device-desktop', title: 'High-fidelity Prototype', desc: 'Build an interactive prototype that looks and feels like the real product — ready to test with users immediately.'},
      {icon: 'ti-users', title: 'Usability Testing', desc: 'Test with real target users, record sessions, and synthesise actionable insights.'},
      {icon: 'ti-analyze', title: 'Iteration & Refinement', desc: 'Refine design based on testing feedback, iterating until confident the direction is right.'},
      {icon: 'ti-file-code', title: 'Developer Handoff', desc: 'Deliver design specs, assets, and annotations that developers can build from immediately.'}
    ] : [
      {icon: 'ti-bulb', title: 'Concept Ideation', desc: 'เวิร์กช็อปร่วมกับทีมเพื่อคิดและประเมินแนวคิดหลายแบบ ก่อนเลือกทิศทาง'},
      {icon: 'ti-pencil', title: 'Wireframing', desc: 'ทำ Wireframe แบบหยาบที่แสดงโครงหน้าและลำดับการใช้งาน โดยไม่เสียเวลากับรายละเอียดภาพ'},
      {icon: 'ti-device-desktop', title: 'High-fidelity Prototype', desc: 'สร้างต้นแบบที่กดใช้ได้ ดูและรู้สึกเหมือนผลิตภัณฑ์จริง ทดสอบกับผู้ใช้ได้ทันที'},
      {icon: 'ti-users', title: 'Usability Testing', desc: 'ทดสอบกับกลุ่มเป้าหมายจริง บันทึกการใช้งาน และสรุปข้อค้นพบที่นำไปทำต่อได้'},
      {icon: 'ti-analyze', title: 'Iteration & Refinement', desc: 'ปรับดีไซน์ตามผลทดสอบ ทำซ้ำจนมั่นใจว่าทิศทางถูกต้อง'},
      {icon: 'ti-file-code', title: 'Developer Handoff', desc: 'ส่งมอบสเปกดีไซน์ ไฟล์ภาพ และคำอธิบายประกอบ ที่นักพัฒนาใช้สร้างต่อได้ทันที'}
    ]
  const steps       = isEN ? [
      {no: '01', title: 'Brief & Kick-off', desc: 'Understand the goal, constraints, and success criteria of the prototype.'},
      {no: '02', title: 'Ideation Workshop', desc: 'Generate multiple concepts, evaluate with the team, and choose the best direction.'},
      {no: '03', title: 'Wireframe', desc: 'Build wireframes showing flow and structure before investing in visual detail.'},
      {no: '04', title: 'High-fidelity Design', desc: 'Design an interactive prototype realistic enough to test with users.'},
      {no: '05', title: 'Test & Iterate', desc: 'Test with 5+ users, synthesise insights, and refine design based on findings.'},
      {no: '06', title: 'Handoff', desc: 'Deliver specs, assets, and prototype to the dev team ready to build immediately.'}
    ] : [
      {no: '01', title: 'Brief & Kick-off', desc: 'ทำความเข้าใจเป้าหมาย ข้อจำกัด และเกณฑ์ความสำเร็จของต้นแบบ'},
      {no: '02', title: 'Ideation Workshop', desc: 'คิดแนวคิดหลายทาง ประเมินร่วมกับทีม และเลือกทิศทางที่ดีที่สุด'},
      {no: '03', title: 'Wireframe', desc: 'ทำ Wireframe ที่แสดงลำดับการใช้งานและโครงสร้าง ก่อนลงทุนกับรายละเอียดภาพ'},
      {no: '04', title: 'High-fidelity Design', desc: 'ออกแบบต้นแบบที่กดใช้ได้เหมือนจริง พร้อมทดสอบกับผู้ใช้'},
      {no: '05', title: 'Test & Iterate', desc: 'ทดสอบกับผู้ใช้ 5 คนขึ้นไป สรุปข้อค้นพบ และปรับดีไซน์ตามผล'},
      {no: '06', title: 'Handoff', desc: 'ส่งมอบสเปก ไฟล์ภาพ และต้นแบบให้ทีมพัฒนา พร้อมสร้างต่อได้ทันที'}
    ]
  const caseStudies = isEN ? [
      {tag: 'FinTech · Bangkok', title: 'Prototype Prevents 6M THB Redesign', desc: 'User testing with a prototype revealed a wrong assumption — direction changed before dev started.', result: '6M THB saved'},
      {tag: 'Healthcare · Bangkok', title: '2-week Design Sprint Aligns 5 Stakeholders', desc: 'Interactive prototype gave everyone the same vision, reducing meetings and revisions.', result: '0 Major Revisions after kick-off'},
      {tag: 'SaaS · Bangkok', title: 'Prototype Test Finds 7 Critical Issues Before Launch', desc: 'Usability test with 8 users found and fixed issues before development started.', result: 'On-time launch with no rollback'}
    ] : [
      {tag: 'FinTech · กรุงเทพฯ', title: 'ต้นแบบช่วยกันการออกแบบใหม่มูลค่า 6 ล้านบาท', desc: 'ทดสอบต้นแบบกับผู้ใช้พบว่าสมมติฐานผิด จึงปรับทิศทางก่อนทีมพัฒนาเริ่มงาน', result: 'ประหยัด 6 ล้านบาท'},
      {tag: 'Healthcare · กรุงเทพฯ', title: 'Design Sprint 2 สัปดาห์ ทำให้ผู้เกี่ยวข้อง 5 ฝ่ายเห็นตรงกัน', desc: 'ต้นแบบที่กดใช้ได้ทำให้ทุกคนเห็นภาพเดียวกัน ลดการประชุมและการแก้งาน', result: 'ไม่มีการแก้ใหญ่หลังเริ่มโปรเจกต์'},
      {tag: 'SaaS · กรุงเทพฯ', title: 'ทดสอบต้นแบบพบปัญหาร้ายแรง 7 ข้อก่อนเปิดตัว', desc: 'ทดสอบการใช้งานกับผู้ใช้ 8 คน พบและแก้ปัญหาก่อนเริ่มพัฒนา', result: 'เปิดตัวตรงเวลา ไม่ต้องย้อนเวอร์ชัน'}
    ]
  const faqs        = isEN ? [
      {q: 'How is a prototype different from a mockup?', a: 'A mockup is a static image showing visual design. A prototype is interactive — users can click, navigate, and experience it like the real product.'},
      {q: 'How long does it take?', a: 'A lean prototype takes 1-2 weeks. A full design sprint including testing takes 3-4 weeks depending on size and complexity.'},
      {q: 'Do we need a clear spec before prototyping?', a: 'Not at all. Prototyping is ideal for exploring concepts that are still unclear. The more ambiguous, the more valuable the prototype.'},
      {q: 'Can the prototype be in Figma?', a: 'Yes. We use Figma as our primary tool and deliver a Figma file that the design and dev team can use immediately.'}
    ] : [
      {q: 'ต้นแบบต่างจาก Mockup อย่างไร?', a: 'Mockup คือภาพนิ่งที่แสดงหน้าตา ส่วนต้นแบบกดใช้ได้ เปิดดูหน้าต่างๆ ได้ และทดสอบประสบการณ์ได้เหมือนผลิตภัณฑ์จริง'},
      {q: 'ใช้เวลานานแค่ไหน?', a: 'ต้นแบบแบบกระชับใช้ 1-2 สัปดาห์ Design Sprint เต็มรูปแบบรวมการทดสอบใช้ 3-4 สัปดาห์ ขึ้นกับขนาดและความซับซ้อน'},
      {q: 'ต้องมีสเปกชัดเจนก่อนทำต้นแบบไหม?', a: 'ไม่จำเป็นครับ การทำต้นแบบเหมาะมากกับการสำรวจแนวคิดที่ยังไม่ชัด ยิ่งไม่ชัดยิ่งได้ประโยชน์'},
      {q: 'ทำต้นแบบด้วย Figma ได้ไหม?', a: 'ได้ครับ เราใช้ Figma เป็นเครื่องมือหลัก และส่งมอบไฟล์ Figma ที่ทีมดีไซน์และทีมพัฒนาใช้ต่อได้ทันที'}
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
