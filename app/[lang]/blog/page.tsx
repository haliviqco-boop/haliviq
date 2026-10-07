'use client'
import { useRef } from 'react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import { t, type Lang } from '@/lib/i18n'
import Footer from '@/components/Footer'

const featuredEN = {
  slug: 'why-design-system-matters', cat: 'Design', date: 'Jun 10, 2025', readTime: '8 min',
  title: 'Why a Design System Matters for Every Company That Wants to Scale',
  excerpt: 'As teams grow and features multiply, UI inconsistency accumulates. A Design System is not just about aesthetics. It is the infrastructure that lets you ship faster and more accurately. We cover what it contains, why growing teams hit the wall without one, and five steps to start.',
  author: 'Ploy S.', role: 'Lead Designer',
}
const featuredTH = {
  slug: 'why-design-system-matters', cat: 'Design', date: '10 มิ.ย. 2025', readTime: '8 นาที',
  title: 'ทำไมบริษัทที่กำลังเติบโตทุกแห่งควรมี Design System',
  excerpt: 'เมื่อทีมโตขึ้นและมีฟีเจอร์เพิ่ม UI ก็เริ่มไม่เป็นแบบเดียวกัน Design System ไม่ใช่แค่เรื่องความสวยงาม แต่เป็นพื้นฐานที่ช่วยให้ปล่อยงานได้เร็วขึ้นและผิดพลาดน้อยลง บทความนี้เล่าว่าในระบบมีอะไรบ้าง ทำไมทีมที่โตแล้วถึงติดปัญหาถ้าไม่มี และห้าขั้นตอนที่เริ่มได้เลย',
  author: 'Ploy S.', role: 'Lead Designer',
}

const postsEN = [
  // Product
  { slug:'product-discovery', cat:'Product', date:'May 10, 2025', readTime:'11 min', title:'The Product Discovery Framework Haliviq Uses on Every Project', excerpt:'Before the first line of code, we always spend 2-4 weeks on Discovery. This is how we turn a rough brief into agreed goals, real user insight and a scope the whole team believes in.', author:'Tarn W.' },
  { slug:'roadmap-prioritization', cat:'Product', date:'Apr 22, 2025', readTime:'9 min', title:'A Prioritization Framework That Survives Contact With Stakeholders', excerpt:'RICE and MoSCoW look great on a slide. Here is what we actually use when stakeholders disagree, and how we keep the conversation about trade-offs instead of opinions.', author:'Mark T.' },
  { slug:'mvp-scope', cat:'Product', date:'Apr 8, 2025', readTime:'7 min', title:'How to Cut MVP Scope Without Cutting the Thing That Matters', excerpt:'Most MVPs fail because teams trim the wrong 80%. A practical way to decide what stays, what waits, and how to protect the one thing users came for.', author:'Tarn W.' },
  // Design
  { slug:'ux-research', cat:'Design', date:'Jun 1, 2025', readTime:'10 min', title:'Comparing 8 User Research Methods — When to Use Each', excerpt:'Interviews, surveys, usability tests: each method has different strengths. A plain guide to what each one answers, what it cannot, and which to pick for your question and budget.', author:'Nook P.' },
  { slug:'design-tokens', cat:'Design', date:'May 24, 2025', readTime:'8 min', title:'Design Tokens 101: One Source of Truth for Every Platform', excerpt:'How we sync color, spacing, and type across Figma, iOS, and web, so a change made once shows up everywhere instead of being redrawn by hand on each platform.', author:'Ploy S.' },
  { slug:'thai-typography', cat:'Design', date:'Apr 30, 2025', readTime:'6 min', title:'Designing for Thai Script: What Latin-First Design Systems Get Wrong', excerpt:'Line-height, vowel stacking, and why most UI kits break on Thai text. Concrete fixes for spacing, font choice and truncation when your product has to read well in Thai.', author:'Ploy S.' },
  // Engineering
  { slug:'nextjs-perf', cat:'Engineering', date:'May 28, 2025', readTime:'15 min', title:'Next.js Performance: From PageSpeed 45 to 98 in 3 Weeks', excerpt:'Image optimization, code splitting, edge caching that actually work in production. We walk through what we measured, what we changed first, and what turned out not to matter.', author:'Arm K.' },
  { slug:'api-versioning', cat:'Engineering', date:'May 12, 2025', readTime:'10 min', title:'API Versioning Strategies That Do Not Break Your Mobile Clients', excerpt:'What we learned shipping breaking changes to apps we cannot force-update. Versioning options, deprecation timelines and how to keep old app versions working.', author:'Arm K.' },
  { slug:'ci-cd-monorepo', cat:'Engineering', date:'Apr 18, 2025', readTime:'13 min', title:'CI/CD for a Monorepo: Cutting Build Time by 68%', excerpt:'Caching, affected-graph builds, and the pipeline mistakes we fixed along the way. A look at how to make a monorepo pipeline fast without making it fragile.', author:'Tarn W.' },
  // AI
  { slug:'ai-product-2025', cat:'AI', date:'Jun 5, 2025', readTime:'12 min', title:'The 2025 Guide to Building AI Products That Actually Work', excerpt:'AI product development is not as hard as you think if you start with a clear use case. How to pick the first use case, check your data and decide who reviews the output.', author:'Mark T.' },
  { slug:'rag-in-production', cat:'AI', date:'May 18, 2025', readTime:'14 min', title:'RAG in Production: What Breaks After the Demo Works', excerpt:'Chunking, retrieval quality, and the eval loop most teams skip. Why a RAG demo that impresses in a meeting can still fail on real questions, and how to catch it early.', author:'Mark T.' },
  { slug:'ai-agent-guardrails', cat:'AI', date:'Apr 26, 2025', readTime:'9 min', title:'Guardrails for AI Agents That Take Real Actions', excerpt:'How we design approval steps for agents that touch production data: what an agent may do alone, what needs a human click, and how every action is logged.', author:'Arm K.' },
  // Strategy
  { slug:'dx-mistakes', cat:'Strategy', date:'May 20, 2025', readTime:'9 min', title:'7 Mistakes That Make Digital Transformation Fail', excerpt:'70% of DX initiatives miss their targets. Most of the time it is not a technology problem. These are the seven patterns we see most, and what to do differently.', author:'Tarn W.' },
  { slug:'build-vs-buy', cat:'Strategy', date:'May 2, 2025', readTime:'8 min', title:'Build vs. Buy: A Decision Framework for Enterprise Software', excerpt:'The real cost of "just buy the SaaS" nobody puts in the business case. A simple way to compare building, buying and mixing the two for enterprise software.', author:'Mark T.' },
  { slug:'vendor-lockin', cat:'Strategy', date:'Apr 14, 2025', readTime:'7 min', title:'How to Modernize Legacy Systems Without a Big-Bang Rewrite', excerpt:'The strangler-fig approach we use on decade-old enterprise platforms: replace one piece at a time, keep the business running, and avoid a risky switch-over weekend.', author:'Tarn W.' },
  // Case Study
  { slug:'banking-case', cat:'Case Study', date:'May 15, 2025', readTime:'18 min', title:'Case Study: How We Grew Banking App DAU by 62%', excerpt:'The story behind a mobile banking redesign serving 4 million users: what we learned from research, what we changed, and how the team measured the result.', author:'Ploy S.' },
  { slug:'retail-omnichannel-case', cat:'Case Study', date:'Apr 27, 2025', readTime:'16 min', title:'Case Study: Unifying Commerce Across 2,000+ Retail Branches', excerpt:'How a single platform tripled conversion for a national retail group, and what it took to connect online, in-store and inventory data across the branches.', author:'Nook P.' },
  { slug:'healthcare-portal-case', cat:'Case Study', date:'Apr 3, 2025', readTime:'14 min', title:'Case Study: Cutting Patient No-Shows by 40% With a Digital Portal', excerpt:'Rebuilding the patient journey end-to-end for a hospital group: booking, reminders and follow-up, and the design choices that helped patients show up.', author:'Ploy S.' },
]

const postsTH = [
  // Product
  { slug:'product-discovery', cat:'Product', date:'10 พ.ค. 2025', readTime:'11 นาที', title:'กรอบทำ Product Discovery ที่ Haliviq ใช้ในทุกโปรเจกต์', excerpt:'ก่อนเขียน Code บรรทัดแรก เราใช้เวลา 2-4 สัปดาห์ทำ Discovery ทุกครั้ง บทความนี้เล่าว่าเราเปลี่ยนโจทย์คร่าว ๆ ให้เป็นเป้าหมายที่ตกลงกัน ความเข้าใจผู้ใช้จริง และขอบเขตที่ทั้งทีมเห็นตรงกันได้อย่างไร', author:'Tarn W.' },
  { slug:'roadmap-prioritization', cat:'Product', date:'22 เม.ย. 2025', readTime:'9 นาที', title:'วิธีจัดลำดับความสำคัญที่ใช้ได้จริงกับผู้มีส่วนได้ส่วนเสีย', excerpt:'RICE กับ MoSCoW ดูดีบนสไลด์ แต่นี่คือวิธีที่เราใช้จริงตอนที่ผู้มีส่วนได้ส่วนเสียเห็นไม่ตรงกัน และวิธีทำให้คุยกันเรื่องข้อแลกเปลี่ยน ไม่ใช่เถียงกันด้วยความเห็น', author:'Mark T.' },
  { slug:'mvp-scope', cat:'Product', date:'8 เม.ย. 2025', readTime:'7 นาที', title:'วิธีตัดขอบเขต MVP โดยไม่ตัดส่วนสำคัญ', excerpt:'MVP ส่วนใหญ่ล้มเหลวเพราะทีมตัด 80% ผิดจุด บทความนี้มีวิธีตัดสินว่าอะไรเก็บไว้ อะไรรอก่อน และจะรักษาสิ่งเดียวที่ผู้ใช้มาหาได้อย่างไร', author:'Tarn W.' },
  // Design
  { slug:'ux-research', cat:'Design', date:'1 มิ.ย. 2025', readTime:'10 นาที', title:'เปรียบเทียบวิธีทำ User Research 8 แบบ ใช้แบบไหนเมื่อไหร่', excerpt:'สัมภาษณ์ แบบสำรวจ ทดสอบการใช้งาน แต่ละวิธีมีจุดแข็งต่างกัน คู่มือสั้น ๆ ที่บอกว่าแต่ละวิธีตอบคำถามอะไรได้ ตอบอะไรไม่ได้ และควรเลือกแบบไหนตามคำถามและงบของคุณ', author:'Nook P.' },
  { slug:'design-tokens', cat:'Design', date:'24 พ.ค. 2025', readTime:'8 นาที', title:'Design Tokens เบื้องต้น: แหล่งข้อมูลกลางเดียวสำหรับทุกแพลตฟอร์ม', excerpt:'วิธีที่เราทำให้สี ระยะห่าง และตัวอักษรตรงกันระหว่าง Figma, iOS และเว็บ แก้ครั้งเดียวแล้วเปลี่ยนทุกที่ ไม่ต้องไปวาดซ้ำทีละแพลตฟอร์ม', author:'Ploy S.' },
  { slug:'thai-typography', cat:'Design', date:'30 เม.ย. 2025', readTime:'6 นาที', title:'ออกแบบให้เหมาะกับตัวอักษรไทย: จุดที่ Design System แบบภาษาอังกฤษพลาด', excerpt:'ระยะบรรทัด การซ้อนสระ และเหตุผลที่ UI Kit ส่วนใหญ่ใช้กับข้อความไทยแล้วพัง พร้อมวิธีแก้เรื่องระยะห่าง การเลือกฟอนต์ และการตัดข้อความ เมื่อผลิตภัณฑ์ต้องอ่านง่ายในภาษาไทย', author:'Ploy S.' },
  // Engineering
  { slug:'nextjs-perf', cat:'Engineering', date:'28 พ.ค. 2025', readTime:'15 นาที', title:'เร่งความเร็ว Next.js จาก PageSpeed 45 เป็น 98 ใน 3 สัปดาห์', excerpt:'การจัดการรูปภาพ การแบ่ง Code และ Edge Caching ที่ได้ผลจริงบนระบบใช้งานจริง เราเล่าว่าวัดอะไร แก้อะไรก่อน และอะไรที่สุดท้ายไม่ได้ช่วยเท่าที่คิด', author:'Arm K.' },
  { slug:'api-versioning', cat:'Engineering', date:'12 พ.ค. 2025', readTime:'10 นาที', title:'วิธีทำ API Versioning ไม่ให้แอปมือถือของคุณพัง', excerpt:'สิ่งที่เราเรียนรู้จากการปล่อยการเปลี่ยนแปลงที่ทำให้ของเดิมใช้ไม่ได้ ให้แอปที่บังคับอัปเดตไม่ได้ ทั้งตัวเลือกการทำ versioning การกำหนดช่วงเลิกใช้ และวิธีให้แอปเวอร์ชันเก่ายังใช้ได้', author:'Arm K.' },
  { slug:'ci-cd-monorepo', cat:'Engineering', date:'18 เม.ย. 2025', readTime:'13 นาที', title:'CI/CD สำหรับ Monorepo: ลดเวลา Build ลง 68%', excerpt:'Caching การ Build เฉพาะส่วนที่ได้รับผลกระทบ และข้อผิดพลาดของ Pipeline ที่เราแก้ไประหว่างทาง เล่าให้เห็นว่าทำ pipeline ของ monorepo ให้เร็วโดยไม่เปราะได้อย่างไร', author:'Tarn W.' },
  // AI
  { slug:'ai-product-2025', cat:'AI', date:'5 มิ.ย. 2025', readTime:'12 นาที', title:'คู่มือสร้างผลิตภัณฑ์ AI ในปี 2025 ให้ใช้งานได้จริง', excerpt:'การพัฒนาผลิตภัณฑ์ AI ไม่ยากอย่างที่คิด ถ้าเริ่มจากกรณีใช้งานที่ชัดเจน บทความนี้ช่วยเลือกกรณีใช้งานแรก เช็กข้อมูลที่มี และกำหนดว่าใครเป็นคนตรวจผลลัพธ์', author:'Mark T.' },
  { slug:'rag-in-production', cat:'AI', date:'18 พ.ค. 2025', readTime:'14 นาที', title:'RAG บนระบบจริง: สิ่งที่พังหลังจาก Demo ใช้ได้แล้ว', excerpt:'การแบ่งเอกสาร คุณภาพการดึงข้อมูล และการประเมินผลซ้ำ ๆ ที่หลายทีมมองข้าม ทำไม RAG ที่ Demo แล้วน่าประทับใจในที่ประชุมยังพลาดกับคำถามจริงได้ และจะจับให้ได้เร็วอย่างไร', author:'Mark T.' },
  { slug:'ai-agent-guardrails', cat:'AI', date:'26 เม.ย. 2025', readTime:'9 นาที', title:'กรอบป้องกันสำหรับ AI Agent ที่ลงมือทำงานจริง', excerpt:'วิธีที่เราออกแบบขั้นตอนอนุมัติสำหรับ Agent ที่เข้าถึงข้อมูลบนระบบจริง งานไหนให้ Agent ทำเองได้ งานไหนต้องให้คนกดยืนยัน และบันทึกทุกการกระทำอย่างไร', author:'Arm K.' },
  // Strategy
  { slug:'dx-mistakes', cat:'Strategy', date:'20 พ.ค. 2025', readTime:'9 นาที', title:'7 ข้อผิดพลาดที่ทำให้การปรับธุรกิจสู่ดิจิทัล (Digital Transformation) ล้มเหลว', excerpt:'โครงการ DX 70% ไม่ถึงเป้า สาเหตุส่วนใหญ่ไม่ใช่เรื่องเทคโนโลยี นี่คือเจ็ดรูปแบบที่เราเจอบ่อยที่สุด และวิธีที่ควรทำต่างออกไป', author:'Tarn W.' },
  { slug:'build-vs-buy', cat:'Strategy', date:'2 พ.ค. 2025', readTime:'8 นาที', title:'สร้างเองหรือซื้อ (Build vs. Buy): วิธีตัดสินใจสำหรับซอฟต์แวร์องค์กร', excerpt:'ต้นทุนจริงของการ "ซื้อ SaaS ไปเลย" ที่ไม่มีใครใส่ไว้ในแผนธุรกิจ พร้อมวิธีเปรียบเทียบง่าย ๆ ระหว่างสร้างเอง ซื้อ และผสมกัน สำหรับซอฟต์แวร์องค์กร', author:'Mark T.' },
  { slug:'vendor-lockin', cat:'Strategy', date:'14 เม.ย. 2025', readTime:'7 นาที', title:'วิธีปรับปรุงระบบเก่าโดยไม่ต้องเขียนใหม่ทั้งหมด', excerpt:'แนวทาง Strangler-fig ที่เราใช้กับระบบองค์กรอายุนับสิบปี ค่อย ๆ เปลี่ยนทีละส่วน ให้ธุรกิจเดินต่อได้ และไม่ต้องเสี่ยงกับการสลับระบบทั้งก้อนในวันเดียว', author:'Tarn W.' },
  // Case Study
  { slug:'banking-case', cat:'Case Study', date:'15 พ.ค. 2025', readTime:'18 นาที', title:'กรณีศึกษา: แอปธนาคารเพิ่มผู้ใช้ประจำวัน (DAU) 62% ได้อย่างไร', excerpt:'เบื้องหลังการออกแบบ Mobile Banking ใหม่ที่มีผู้ใช้ 4 ล้านคน ทั้งสิ่งที่ได้จากการวิจัย สิ่งที่เปลี่ยน และวิธีที่ทีมวัดผล', author:'Ploy S.' },
  { slug:'retail-omnichannel-case', cat:'Case Study', date:'27 เม.ย. 2025', readTime:'16 นาที', title:'กรณีศึกษา: รวมช่องทางขายให้เป็นหนึ่งเดียวใน 2,000+ สาขาค้าปลีก', excerpt:'แพลตฟอร์มเดียวที่ทำให้อัตราปิดการขาย (Conversion) ของกลุ่มค้าปลีกระดับประเทศเพิ่มขึ้น 3 เท่า และสิ่งที่ต้องทำเพื่อเชื่อมข้อมูลออนไลน์ หน้าร้าน และสต็อกของทุกสาขา', author:'Nook P.' },
  { slug:'healthcare-portal-case', cat:'Case Study', date:'3 เม.ย. 2025', readTime:'14 นาที', title:'กรณีศึกษา: ลดผู้ป่วยที่ไม่มาตามนัดลง 40% ด้วยพอร์ทัลดิจิทัล', excerpt:'ออกแบบประสบการณ์ผู้ป่วยใหม่ตั้งแต่ต้นจนจบให้กลุ่มโรงพยาบาล ตั้งแต่การนัดหมาย การแจ้งเตือน ไปจนถึงการติดตามผล และการตัดสินใจด้านดีไซน์ที่ช่วยให้ผู้ป่วยมาตามนัด', author:'Ploy S.' },
]

const topicsEN = [
  { label:'Product' },{ label:'Design' },{ label:'Engineering' },
  { label:'AI' },{ label:'Strategy' },{ label:'Case Study' },
]
const topicsTH = [
  { label:'Product' },{ label:'Design' },{ label:'Engineering' },
  { label:'AI' },{ label:'Strategy' },{ label:'Case Study' },
]

const gradients = [
  'linear-gradient(135deg, var(--purple) 0%, var(--purple-light) 100%)',
  'linear-gradient(135deg, var(--purple-light) 0%, var(--lime) 100%)',
  'linear-gradient(135deg, var(--purple-dark) 0%, var(--purple) 100%)',
  'linear-gradient(135deg, var(--purple) 0%, var(--lime) 100%)',
]

export default function Page({ params }: { params: { lang: Lang } }) {
  const lang = (params.lang === 'en' ? 'en' : 'th') as Lang
  const isEN = lang === 'en'
  const tr = t[lang] as any
  const featured = isEN ? featuredEN : featuredTH
  const posts = isEN ? postsEN : postsTH
  const topics = isEN ? topicsEN : topicsTH
  const rowRefs = useRef<Record<string, HTMLDivElement | null>>({})

  const scrollRow = (label: string, dir: 1 | -1) => {
    const el = rowRefs.current[label]
    if (el) el.scrollBy({ left: dir * 360, behavior: 'smooth' })
  }

  return (
    <>
      <Navbar lang={lang} tr={tr} transparent />
      <main>
        <section className="relative overflow-hidden pt-[80px]" style={{ background: '#08070F' }}>
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.35]"
            style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.14) 1px, transparent 1px)', backgroundSize: '22px 22px' }}
          />
          <div
            className="absolute -top-40 -left-32 w-[560px] h-[560px] rounded-full pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgba(123,110,246,0.28) 0%, transparent 70%)', filter: 'blur(20px)' }}
          />
          <div className="relative max-w-7xl mx-auto px-6 lg:px-10 pt-20 lg:pt-28 pb-16">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
              <div>
                <p className="t-label mb-5">{isEN ? 'Insights' : 'บทความ'}</p>
                <h1 className="t-display text-[clamp(3rem,7vw,6.5rem)] leading-relaxed" style={{ color: '#fff' }}>
                  {isEN ? <>Ideas &<br /><span style={{ background:'linear-gradient(135deg,var(--purple) 0%,var(--purple-light) 50%,var(--lime) 100%)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' }}>Perspectives</span></> : <>ไอเดียและ<br /><span style={{ background:'linear-gradient(135deg,var(--purple) 0%,var(--purple-light) 50%,var(--lime) 100%)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' }}>มุมมอง</span></>}
                </h1>
              </div>
              <p className="text-sm max-w-md" style={{ color: 'rgba(255,255,255,0.75)', fontWeight: 400 }}>
                {isEN ? 'Practical writing on digital product, UX design, engineering and AI from the Haliviq team in Bangkok. Each article explains how we approach a real problem, what we tried, and what you can borrow for your own project, from design systems and Thai typography to RAG, API versioning and case studies.' : 'บทความจากทีม Haliviq ในกรุงเทพฯ เรื่องผลิตภัณฑ์ดิจิทัล ออกแบบ UX วิศวกรรมซอฟต์แวร์ และ AI แต่ละเรื่องเล่าว่าเราคิดและแก้โจทย์จริงอย่างไร ลองอะไรมาแล้วบ้าง และคุณเอาไปใช้กับโปรเจกต์ของตัวเองได้อย่างไร ตั้งแต่ Design System ตัวอักษรไทย ไปจนถึง RAG, API versioning และกรณีศึกษา'}
              </p>
            </div>

            {/* Featured — 1 big cover */}
            <Link href={`/${lang}/blog/${featured.slug}`} className="group block rounded-3xl overflow-hidden transition-all duration-500" style={{ border: '1px solid rgba(255,255,255,0.1)' }}>
              <div className="grid lg:grid-cols-2">
                <div className="min-h-[320px] flex items-center justify-center" style={{ background: gradients[0] }}>
                  <div className="text-center">
                    <i className="ti ti-photo" style={{ fontSize:40, color:'#fff', opacity:0.35 }} aria-hidden="true" />
                    <p className="text-sm mt-3" style={{ color:'#fff', opacity:0.55, fontWeight:400 }}>{isEN ? 'Featured Article Cover' : 'ภาพปกบทความเด่น'}</p>
                  </div>
                </div>
                <div className="p-10 lg:p-14 flex flex-col justify-center" style={{ background: '#141329' }}>
                  <div className="flex items-center gap-3 mb-6">
                    <span className="px-3 py-1 rounded-full text-xs" style={{ background:'rgba(123,110,246,0.15)', color:'var(--purple-light)', fontWeight:400 }}>{featured.cat}</span>
                    <span className="text-sm" style={{ color: 'rgba(255,255,255,0.5)', fontWeight:400 }}>{featured.date} · {featured.readTime}</span>
                  </div>
                  <h2 className="t-display text-[clamp(1.5rem,2.5vw,2.2rem)] leading-tight mb-5 transition-colors" style={{ color: '#fff' }}>{featured.title}</h2>
                  <p className="text-sm leading-relaxed mb-8" style={{ color: 'rgba(255,255,255,0.7)' }}>{featured.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full flex items-center justify-center" style={{ background: 'rgba(123,110,246,0.18)', fontSize:14, color:'var(--purple-light)' }}>{featured.author[0]}</div>
                      <div>
                        <p className="text-base" style={{ color: '#fff', fontWeight:400 }}>{featured.author}</p>
                        <p className="text-sm" style={{ color: 'rgba(255,255,255,0.5)', fontWeight:400 }}>{featured.role}</p>
                      </div>
                    </div>
                    <span className="text-base flex items-center gap-1.5 group-hover:gap-3 transition-all" style={{ color: 'var(--purple-light)', fontWeight:400 }}>
                      {isEN ? 'Read Article' : 'อ่านบทความ'} <i className="ti ti-arrow-right" style={{ fontSize:14 }} aria-hidden="true" />
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </section>

        {/* Dark "Latest Thinking" section — grouped by category, horizontal scroll rows */}
        <section className="py-20 lg:py-28" style={{ background: '#08070F' }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col gap-16">
            {topics.map((tp) => {
              const items = posts.filter(p => p.cat === tp.label)
              if (!items.length) return null
              return (
                <div key={tp.label}>
                  <div className="flex items-end justify-between mb-8">
                    <div>
                      <h2 className="t-display text-[clamp(1.8rem,3vw,2.6rem)] leading-none mb-2" style={{ color:'#fff' }}>{tp.label}</h2>
                      <p className="text-sm" style={{ color:'var(--lime)', fontWeight:400 }}>
                        {isEN ? 'Insights and perspectives from our team.' : 'บทความและมุมมองจากทีมของเรา'}
                      </p>
                    </div>
                    <div className="hidden sm:flex items-center gap-2 shrink-0">
                      <button
                        aria-label={isEN ? 'Scroll left' : 'เลื่อนซ้าย'}
                        onClick={() => scrollRow(tp.label, -1)}
                        className="w-9 h-9 rounded-full flex items-center justify-center transition-colors hover:bg-white/10"
                        style={{ border:'1px solid rgba(255,255,255,0.15)' }}
                      >
                        <i className="ti ti-chevron-left" style={{ fontSize:16, color:'#fff' }} aria-hidden="true" />
                      </button>
                      <button
                        aria-label={isEN ? 'Scroll right' : 'เลื่อนขวา'}
                        onClick={() => scrollRow(tp.label, 1)}
                        className="w-9 h-9 rounded-full flex items-center justify-center transition-colors hover:bg-white/10"
                        style={{ border:'1px solid rgba(255,255,255,0.15)' }}
                      >
                        <i className="ti ti-chevron-right" style={{ fontSize:16, color:'#fff' }} aria-hidden="true" />
                      </button>
                    </div>
                  </div>

                  <div
                    ref={(el) => { rowRefs.current[tp.label] = el }}
                    className="no-scrollbar flex gap-5 overflow-x-auto scroll-smooth snap-x snap-mandatory"
                  >
                    {items.map((p, i) => (
                      <Link
                        key={p.slug}
                        href={`/${lang}/blog/${p.slug}`}
                        className="group shrink-0 w-[260px] snap-start rounded-2xl p-4 transition-all duration-300 hover:-translate-y-1"
                        style={{ background:'rgba(255,255,255,0.03)', border:'1px solid rgba(255,255,255,0.08)' }}
                      >
                        <div className="h-32 rounded-xl flex items-center justify-center mb-4" style={{ background: gradients[i % gradients.length] }}>
                          <i className="ti ti-photo" style={{ fontSize:22, color:'#fff', opacity:0.45 }} aria-hidden="true" />
                        </div>
                        <h3 className="text-white leading-snug mb-2 group-hover:text-[var(--purple-light)] transition-colors" style={{ fontWeight:500, fontSize:'0.98rem' }}>{p.title}</h3>
                        <p style={{ color:'rgba(255,255,255,0.55)', fontWeight:400, fontSize:'0.8rem', lineHeight:1.5 }} className="mb-4 line-clamp-2">{p.excerpt}</p>
                        <span className="text-sm flex items-center gap-1.5 group-hover:gap-2.5 transition-all" style={{ color:'var(--purple-light)', fontWeight:400 }}>
                          {isEN ? 'Read article' : 'อ่านบทความ'} <i className="ti ti-arrow-up-right" style={{ fontSize:13 }} aria-hidden="true" />
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        <section className="relative overflow-hidden" style={{ background: '#050308' }}>
          <div
            className="absolute inset-0 pointer-events-none opacity-40"
            style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), radial-gradient(rgba(255,255,255,0.3) 1px, transparent 1px)', backgroundSize: '180px 180px, 260px 260px', backgroundPosition: '0 0, 90px 130px' }}
          />
          <div
            className="absolute left-0 right-0 bottom-0 pointer-events-none"
            style={{ height: 260, background: 'radial-gradient(ellipse 70% 100% at 50% 100%, rgba(123,110,246,0.35) 0%, rgba(83,195,215,0.08) 45%, transparent 75%)' }}
          />
          <div className="relative max-w-4xl mx-auto px-6 lg:px-10 py-24 text-center">
            <p className="text-sm tracking-widest uppercase mb-6" style={{ color: '#fff', fontWeight: 500 }}>{isEN ? 'Newsletter' : 'จดหมายข่าว'}</p>
            <h2 className="t-display text-[clamp(1.75rem,4vw,3rem)] mb-6 leading-normal md:whitespace-nowrap" style={{ background: 'linear-gradient(135deg, var(--purple-light) 0%, #53C3D7 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              {isEN ? <>Get Insights Every Two Weeks</> : <>รับบทความใหม่ทุกสองสัปดาห์</>}
            </h2>
            <p className="mb-10 max-w-md mx-auto" style={{ color: '#fff', fontWeight:400 }}>
              {isEN ? 'One email every two weeks with new articles, case studies and practical tools from the Haliviq team. No spam, and you can unsubscribe anytime.' : 'ส่งอีเมลทุกสองสัปดาห์ รวมบทความใหม่ กรณีศึกษา และเครื่องมือที่เอาไปใช้ได้จริงจากทีม Haliviq ไม่ส่งสแปม และยกเลิกได้ตลอด'}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input type="email" placeholder={isEN ? 'your@email.com' : 'อีเมลของคุณ'} className="flex-1 px-5 py-3.5 rounded-full text-sm outline-none transition-colors" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.15)', color: '#fff', fontWeight:400 }} />
              <button className="px-8 py-3.5 rounded-full text-sm transition-opacity hover:opacity-90" style={{ background: 'linear-gradient(135deg, var(--purple) 0%, var(--purple-dark) 100%)', color: '#fff', fontWeight:500 }}>
                {isEN ? 'Subscribe' : 'สมัครรับ'}
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer lang={lang} tr={tr} />
    </>
  )
}
