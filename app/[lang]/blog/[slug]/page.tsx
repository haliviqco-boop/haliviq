import Link from 'next/link'
import Navbar from '@/components/Navbar'
import { t, type Lang } from '@/lib/i18n'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Design System for Growing Teams | Haliviq Blog',
  description: 'What a design system is, why growing product teams in Thailand need one, and a five-step way to start. A practical read from the Haliviq design team in Bangkok.',
}

const ImagePlaceholder = ({ label, h, color, bg }: { label: string; h: number; color: string; bg: string }) => (
  <div className="w-full rounded-2xl flex items-center justify-center"
    style={{ minHeight: h, background: bg, border: `2px dashed ${color}18` }}>
    <div className="text-center">
      <i className="ti ti-photo" style={{ fontSize: 28, color, opacity: 0.25 }} aria-hidden="true" />
      <p className="text-xs mt-2" style={{ color, opacity: 0.3, fontWeight: 400 }}>{label}</p>
    </div>
  </div>
)

const relatedPostsTH = [
  { slug: 'ux-research-methods', cat: 'Design', title: 'เปรียบเทียบวิธีทำ User Research 8 แบบ', readTime: '10 นาที', color: 'var(--purple)', bg: 'var(--purple-bg)' },
  { slug: 'product-discovery', cat: 'Product', title: 'กรอบทำ Product Discovery ที่เราใช้จริง', readTime: '11 นาที', color: 'var(--purple-light)', bg: 'var(--purple-bg)' },
  { slug: 'nextjs-performance', cat: 'Engineering', title: 'เร่งความเร็ว Next.js จาก 45 เป็น 98', readTime: '15 นาที', color: 'var(--purple)', bg: 'var(--purple-bg)' },
]
const relatedPostsEN = [
  { slug: 'ux-research-methods', cat: 'Design', title: 'Comparing 8 User Research Methods', readTime: '10 min', color: 'var(--purple)', bg: 'var(--purple-bg)' },
  { slug: 'product-discovery', cat: 'Product', title: 'The Product Discovery Framework We Use', readTime: '11 min', color: 'var(--purple-light)', bg: 'var(--purple-bg)' },
  { slug: 'nextjs-performance', cat: 'Engineering', title: 'Next.js Performance: From 45 to 98', readTime: '15 min', color: 'var(--purple)', bg: 'var(--purple-bg)' },
]

const articleTH = {
  crumb: 'บทความ', readTime: '8 นาที', date: '10 มิถุนายน 2025',
  title: 'ทำไมบริษัทที่กำลังเติบโตทุกแห่งควรมี Design System',
  excerpt: 'เมื่อทีมโตขึ้นและมีฟีเจอร์เพิ่ม UI ก็เริ่มไม่เป็นแบบเดียวกัน Design System ไม่ใช่แค่เรื่องความสวยงาม แต่เป็นพื้นฐานที่ช่วยให้ปล่อยงานได้เร็วขึ้นและผิดพลาดน้อยลง',
  s1: 'Design System คืออะไรกันแน่?',
  s1p: [
    'Design System คือชุด Component, Pattern, แนวทางการใช้ และเครื่องมือ ที่ทีมออกแบบและทีมพัฒนาใช้ร่วมกัน เพื่อสร้างผลิตภัณฑ์ที่หน้าตาเป็นแบบเดียวกันและขยายต่อได้ง่าย ไม่ใช่แค่ Style Guide หรือ Component Library แต่เป็นระบบทั้งหมดที่ทำงานร่วมกัน',
    'ลองนึกถึง Design System เหมือนตัวต่อเลโก้ องค์กรที่ไม่มีต้องหล่อตัวต่อใหม่ทุกครั้งที่จะสร้างอะไร ส่วนองค์กรที่มีก็หยิบตัวต่อที่มีอยู่มาประกอบเป็นของใหม่ได้เร็วกว่ามาก',
    'ถ้าแยกให้เห็นภาพ ระบบหนึ่งมักมีสามชั้น ชั้นล่างสุดคือ Design Token เช่น สี ขนาดตัวอักษร และระยะห่าง ชั้นกลางคือ Component เช่น ปุ่ม ช่องกรอก และการ์ด ที่สร้างจาก Token เหล่านั้น ส่วนชั้นบนคือ Pattern เช่น ฟอร์มสมัครสมาชิก หรือหน้าชำระเงิน ที่เอา Component หลายตัวมาประกอบกัน พอแก้ที่ชั้นล่าง ทุกอย่างที่อยู่ข้างบนก็ปรับตามไปเอง',
    'อีกส่วนที่คนมักลืมคือเอกสารและกติกาการใช้ Component ที่ดีควรบอกว่าใช้เมื่อไหร่ ไม่ควรใช้เมื่อไหร่ และมีสถานะอะไรบ้าง เช่น ปกติ เมื่อกดอยู่ หรือเมื่อมีข้อผิดพลาด ถ้าไม่มีส่วนนี้ ทีมก็จะตีความกันเองและกลับไปสู่ปัญหาเดิม',
  ],
  cap1: 'ภาพแสดงความสัมพันธ์ระหว่าง Design Token, Component และ Pattern',
  s2: 'ทำไมบริษัทส่วนใหญ่ยังไม่มี Design System?',
  s2p: [
    'มีสองเหตุผลหลัก คือไม่มีเวลาและมีเรื่องอื่นสำคัญกว่า ตอนเริ่มต้น Startup อยากปล่อยงานเร็ว จึงไม่มีเวลาสร้างระบบให้ครบ ซึ่งเข้าใจได้ แต่ถ้าไม่ลงทุนเรื่องนี้ให้เร็วพอ ปัญหาสะสมด้านดีไซน์ (Technical Debt) จะพอกจนยากจะรื้อแก้',
    'อีกเหตุผลคือหลายคนคิดว่า Design System เป็นโปรเจกต์ใหญ่ที่ต้องทำให้เสร็จก่อนค่อยใช้ ความจริงไม่จำเป็นต้องอย่างนั้น ทีมส่วนใหญ่เริ่มจากสิ่งเล็ก ๆ ที่ใช้ซ้ำบ่อยที่สุด แล้วค่อยขยายไปพร้อมกับงานจริง ปัญหาจะเห็นชัดเมื่อมีทีมใหม่เข้ามาหรือมีหลายผลิตภัณฑ์ ซึ่งตอนนั้นการแก้ย้อนหลังจะแพงกว่าเริ่มตั้งแต่แรกมาก',
  ],
  quote: '"ทุกครั้งที่ Designer ต้องสร้างปุ่มใหม่ หรือ Engineer ต้องเดารหัสสี คือเวลาที่เสียไปโดยเปล่าประโยชน์"',
  s3: 'ประโยชน์จริงที่วัดได้',
  s3p: 'จากที่ Haliviq ช่วยลูกค้าสร้าง Design System เราเห็นตัวเลขที่น่าสนใจ:',
  stats: [
    { n: '50%', l: 'ลดเวลาออกแบบและพัฒนา' },
    { n: '90%', l: 'UI ไม่ตรงกันน้อยลง' },
    { n: '3×', l: 'ทีมใหม่เริ่มงานได้เร็วขึ้น' },
  ],
  s3after: [
    'ตัวเลขพวกนี้มาจากเรื่องง่าย ๆ คือไม่ต้องทำซ้ำ และไม่ต้องถกกันซ้ำ เมื่อปุ่มหนึ่งแบบมีคำตอบเดียว Designer ก็ไม่ต้องออกแบบใหม่ Engineer ก็ไม่ต้องเขียนใหม่ และคนทดสอบก็รู้ว่าต้องเช็กอะไร',
    'ประโยชน์ที่ไม่ค่อยมีใครพูดถึงคือเรื่องการเข้าถึง (Accessibility) และภาษา ถ้าตั้งค่าไว้ใน Component ครั้งเดียว เช่น ขนาดพื้นที่กด ความต่างของสี หรือระยะบรรทัดที่เหมาะกับภาษาไทย ทุกหน้าจอก็ได้ตามนั้นโดยอัตโนมัติ ไม่ต้องไปไล่แก้ทีละหน้า',
  ],
  cap2: 'ตัวอย่าง UI ก่อนและหลังใช้ Design System',
  s4: 'เริ่มทำ Design System อย่างไร?',
  s4p: 'ไม่ต้องรอให้พร้อมทุกอย่าง เริ่มจากห้าขั้นตอนนี้ได้เลย:',
  steps: [
    { n: '01', t: 'ตรวจสิ่งที่มีอยู่', d: 'รวบรวม UI Component ทั้งหมดที่ใช้อยู่ จัดกลุ่ม และหา Pattern ที่ซ้ำกัน ลองแคปหน้าจอทุกแบบของปุ่มและช่องกรอกมาวางเรียงกัน แล้วจะเห็นเลยว่าตอนนี้มีกี่แบบที่ไม่ตรงกัน' },
    { n: '02', t: 'สร้าง Design Token', d: 'กำหนดสี ตัวอักษร และระยะห่าง ให้เป็นแหล่งข้อมูลกลางที่ทุกคนใช้ร่วมกัน ตั้งชื่อตามหน้าที่ เช่น สีหลัก สีแจ้งเตือน ไม่ใช่ตั้งตามค่าสี' },
    { n: '03', t: 'Build Core Components', d: 'เริ่มจาก Component ที่ใช้บ่อยที่สุด เช่น ปุ่ม ช่องกรอก การ์ด ทำให้ครบทุกสถานะก่อนค่อยไปตัวถัดไป' },
    { n: '04', t: 'จดบันทึกให้ครบ', d: 'เขียนวิธีใช้ ข้อควรทำและไม่ควรทำ และตัวอย่าง Code ให้ครบ เขียนให้คนที่เพิ่งเข้าทีมอ่านแล้วใช้ได้เลย' },
    { n: '05', t: 'ใช้งานและพัฒนาต่อ', d: 'นำไปใช้ในโปรเจกต์จริง เก็บความเห็น และปรับปรุงอย่างต่อเนื่อง ควรมีคนรับผิดชอบดูแลชัดเจน ไม่อย่างนั้นระบบจะเก่าเร็วกว่าที่คิด' },
  ],
  close: [
    'Design System ที่ดีไม่ได้เกิดในวันเดียว แต่ทุกอย่างที่ลงทุนไปจะให้ผลทบต้นตามเวลา ยิ่งทีมใหญ่ขึ้นและผลิตภัณฑ์ซับซ้อนขึ้น Design System ก็ยิ่งมีค่ามากขึ้น',
    'ถ้าคุณยังไม่มี Design System และอยากเริ่มทำ ทีม Haliviq ยินดีให้คำปรึกษาฟรี เราช่วยได้ทั้งตรวจสถานะปัจจุบัน ออกแบบ และสร้างให้องค์กรทุกขนาด',
  ],
  bio: 'Designer ที่สนใจการคิดเชิงระบบ (Systems Thinking) และการออกแบบที่ทุกคนใช้ได้ (Inclusive Design) มีประสบการณ์ 6 ปีในการสร้าง Design System ให้บริษัทชั้นนำในไทยและเอเชียตะวันออกเฉียงใต้',
  related: 'บทความที่เกี่ยวข้อง',
}

const articleEN = {
  crumb: 'Insights', readTime: '8 min', date: 'June 10, 2025',
  title: 'Why a Design System Matters for Every Company That Wants to Scale',
  excerpt: 'As teams grow and features multiply, UI inconsistency accumulates. A Design System is not just about aesthetics. It is the infrastructure that lets you ship faster and more accurately.',
  s1: 'What exactly is a design system?',
  s1p: [
    'A design system is the set of components, patterns, usage guidelines and tools that designers and developers share so a product looks consistent and is easy to extend. It is more than a style guide or a component library. It is the whole system working together.',
    'Think of it as a box of Lego bricks. A company without one has to mould a new brick every time it wants to build something. A company with one picks up bricks it already owns and puts together something new much faster.',
    'It helps to picture three layers. At the bottom are design tokens: colours, font sizes and spacing values. In the middle are components such as buttons, inputs and cards, built from those tokens. On top are patterns, like a sign-up form or a checkout page, which combine several components. Change something at the bottom and everything above it follows.',
    'The part people forget is documentation. A good component page says when to use it, when not to, and which states it has: default, pressed, disabled, error. Without that, each team interprets the component its own way and the inconsistency creeps back in.',
  ],
  cap1: 'How design tokens, components and patterns relate to each other',
  s2: 'Why do most companies still not have one?',
  s2p: [
    'There are two main reasons: no time, and something more urgent. In the early days a startup wants to ship quickly, so building a full system feels like a luxury. That is understandable, but if you wait too long the design debt piles up until it is hard to undo.',
    'The other reason is a belief that a design system is a huge project you must finish before anyone can use it. It does not have to be. Most teams start with the handful of elements they repeat most often and grow the system alongside real work. The pain shows up when a new team joins or a second product launches, and by then fixing things retroactively costs far more than starting early would have.',
  ],
  quote: '"Every time a designer rebuilds a button, or an engineer has to guess a colour code, that is time wasted."',
  s3: 'The benefits we can actually measure',
  s3p: 'Across the design systems Haliviq has helped clients build, we have seen some interesting numbers:',
  stats: [
    { n: '50%', l: 'Less design and development time' },
    { n: '90%', l: 'Fewer UI inconsistencies' },
    { n: '3×', l: 'Faster onboarding for new teams' },
  ],
  s3after: [
    'The numbers come from something simple: less repeating, and less re-debating. When a button style has one answer, the designer does not redraw it, the engineer does not rebuild it, and the tester knows what to check.',
    'A benefit that gets less attention is accessibility and language. Set once inside a component, things like tap-target size, colour contrast and line-height that suits Thai script apply to every screen automatically, with no page-by-page fixing.',
  ],
  cap2: 'A UI before and after adopting a design system',
  s4: 'How do you start a design system?',
  s4p: 'You do not need everything in place first. These five steps are enough to begin:',
  steps: [
    { n: '01', t: 'Audit what you have', d: 'Collect every UI component in use, group them and find the repeated patterns. Screenshot every variant of your buttons and inputs and lay them side by side. You will see right away how many versions do not match.' },
    { n: '02', t: 'Create design tokens', d: 'Define colours, type and spacing as a single source of truth everyone shares. Name them by purpose (primary, warning), not by colour value.' },
    { n: '03', t: 'Build core components', d: 'Start with the most-used pieces such as buttons, inputs and cards. Finish every state of one component before moving to the next.' },
    { n: '04', t: 'Document it properly', d: 'Write how to use each piece, the do and don\'t rules, and code examples. Write it so someone who just joined the team can use it on day one.' },
    { n: '05', t: 'Use it and keep improving', d: 'Apply it to real projects, collect feedback and refine continuously. Give someone clear ownership, otherwise the system ages faster than you expect.' },
  ],
  close: [
    'A good design system is not built in a day, but everything you invest in it compounds over time. The bigger the team and the more complex the product, the more it is worth.',
    'If you do not have a design system yet and want to start, the Haliviq team is happy to give you a free consultation. We can audit where you are, design it and build it, for organizations of any size.',
  ],
  bio: 'A designer interested in systems thinking and inclusive design, with 6 years of experience building design systems for leading companies in Thailand and Southeast Asia.',
  related: 'Related articles',
}

export default function Page({ params }: { params: { lang: Lang; slug: string } }) {
  const lang = (params.lang === 'en' ? 'en' : 'th') as Lang
  const isEN = lang === 'en'
  const tr = t[lang] as any
  const a = isEN ? articleEN : articleTH
  const relatedPosts = isEN ? relatedPostsEN : relatedPostsTH
  const h2 = { fontSize: '1.8rem', marginTop: '3rem' } as const
  return (
    <>
      <Navbar lang={lang} tr={tr} />
      <main>
        {/* Article Hero */}
        <section className="pt-[80px] bg-white">
          <div className="h-1 w-full" style={{ background: 'linear-gradient(90deg,var(--purple),var(--purple-light),var(--lime))' }} />
          <div className="max-w-4xl mx-auto px-6 lg:px-10 py-16 lg:py-24">
            <div className="flex items-center gap-2 text-xs text-[#AAAABC] mb-10" style={{ fontWeight: 400 }}>
              <Link href={`/${lang}/blog`} className="hover:text-[var(--purple)] transition-colors">{a.crumb}</Link>
              <i className="ti ti-chevron-right" style={{ fontSize: 12 }} aria-hidden="true" />
              <span>Design</span>
            </div>

            <div className="flex items-center gap-3 mb-8">
              <span className="px-3 py-1.5 rounded-full text-xs" style={{ background: 'var(--purple-bg)', color: 'var(--purple)', fontWeight: 400 }}>
                Design
              </span>
              <span className="text-xs text-[#AAAABC]" style={{ fontWeight: 400 }}>{a.readTime}</span>
              <span className="text-xs text-[#AAAABC]" style={{ fontWeight: 400 }}>·</span>
              <span className="text-xs text-[#AAAABC]" style={{ fontWeight: 400 }}>{a.date}</span>
            </div>

            <h1 className="t-display text-[clamp(2.2rem,5vw,4rem)] text-[#0A0A0F] leading-relaxed mb-8">
              {a.title}
            </h1>

            <p className="t-body text-lg leading-relaxed mb-10">
              {a.excerpt}
            </p>

            <div className="flex items-center gap-4 pb-10 border-b border-[#E4E4EC]">
              <div className="w-12 h-12 rounded-full flex items-center justify-center text-white text-sm" style={{ background: 'var(--purple)', fontWeight: 400 }}>P</div>
              <div>
                <p className="text-sm text-[#0A0A0F]" style={{ fontWeight: 400 }}>Ploy S.</p>
                <p className="text-xs text-[#AAAABC]" style={{ fontWeight: 400 }}>Lead Designer · Haliviq</p>
              </div>
              <div className="ml-auto flex gap-3">
                {['ti-brand-twitter', 'ti-brand-linkedin', 'ti-link'].map(icon => (
                  <button key={icon} className="w-9 h-9 rounded-full border border-[#E4E4EC] flex items-center justify-center hover:border-[var(--purple)] hover:text-[var(--purple)] text-[#AAAABC] transition-all">
                    <i className={`ti ${icon}`} style={{ fontSize: 15 }} aria-hidden="true" />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Cover image */}
        <div className="max-w-6xl mx-auto px-6 lg:px-10 mb-16">
          <ImagePlaceholder label="Article Cover Image — 1440 × 640px" h={480} color="var(--purple)" bg="var(--purple-bg)" />
        </div>

        {/* Article body */}
        <article className="max-w-3xl mx-auto px-6 lg:px-10 pb-20">
          <div className="prose" style={{ fontFamily: 'var(--font-main)', fontWeight: 400 }}>

            <h2 className="t-display text-[#0A0A0F] mb-6" style={h2}>{a.s1}</h2>
            {a.s1p.map((para, i) => (
              <p key={i} className="t-body text-base leading-relaxed mb-6">{para}</p>
            ))}

            <div className="my-10">
              <ImagePlaceholder label="Diagram: Design System Components" h={320} color="var(--purple)" bg="var(--purple-bg)" />
              <p className="text-xs text-[#AAAABC] text-center mt-3" style={{ fontWeight: 400 }}>{a.cap1}</p>
            </div>

            <h2 className="t-display text-[#0A0A0F] mb-6" style={h2}>{a.s2}</h2>
            {a.s2p.map((para, i) => (
              <p key={i} className="t-body text-base leading-relaxed mb-6">{para}</p>
            ))}

            <blockquote className="my-10 pl-6 border-l-4 py-4" style={{ borderColor: 'var(--purple)' }}>
              <p className="text-xl text-[#0A0A0F] leading-relaxed" style={{ fontWeight: 400 }}>
                {a.quote}
              </p>
            </blockquote>

            <h2 className="t-display text-[#0A0A0F] mb-6" style={h2}>{a.s3}</h2>
            <p className="t-body text-base leading-relaxed mb-6">{a.s3p}</p>

            <div className="grid sm:grid-cols-3 gap-4 my-8">
              {a.stats.map(s => (
                <div key={s.l} className="p-6 rounded-2xl text-center border border-[#E4E4EC]">
                  <div className="text-3xl mb-2" style={{ fontWeight: 400, color: 'var(--purple)' }}>{s.n}</div>
                  <p className="text-xs text-[#6E6E88]" style={{ fontWeight: 400 }}>{s.l}</p>
                </div>
              ))}
            </div>

            {a.s3after.map((para, i) => (
              <p key={i} className="t-body text-base leading-relaxed mb-6">{para}</p>
            ))}

            <div className="my-10">
              <ImagePlaceholder label="Before / After: UI Consistency" h={280} color="var(--purple-light)" bg="var(--purple-bg)" />
              <p className="text-xs text-[#AAAABC] text-center mt-3" style={{ fontWeight: 400 }}>{a.cap2}</p>
            </div>

            <h2 className="t-display text-[#0A0A0F] mb-6" style={h2}>{a.s4}</h2>
            <p className="t-body text-base leading-relaxed mb-6">{a.s4p}</p>
            <ol className="space-y-4 mb-8">
              {a.steps.map(step => (
                <li key={step.n} className="flex gap-4 p-5 rounded-2xl border border-[#E4E4EC]">
                  <span className="w-8 h-8 rounded-xl flex items-center justify-center shrink-0 text-xs font-mono" style={{ background: 'var(--purple-bg)', color: 'var(--purple)' }}>{step.n}</span>
                  <div>
                    <p className="text-[#0A0A0F] mb-1" style={{ fontWeight: 400 }}>{step.t}</p>
                    <p className="t-body text-sm">{step.d}</p>
                  </div>
                </li>
              ))}
            </ol>

            <div className="my-10">
              <ImagePlaceholder label="Screenshot: Design System Documentation" h={360} color="var(--purple)" bg="var(--purple-bg)" />
            </div>

            {a.close.map((para, i) => (
              <p key={i} className={`t-body text-base leading-relaxed${i === 0 ? ' mb-6' : ''}`}>{para}</p>
            ))}

          </div>

          <div className="flex flex-wrap gap-2 mt-12 pt-10 border-t border-[#E4E4EC]">
            {['Design System', 'UX/UI', 'Figma', 'Frontend', 'Component Library'].map(tag => (
              <span key={tag} className="px-4 py-2 rounded-full text-xs border border-[#E4E4EC] text-[#6E6E88] hover:border-[var(--purple)] hover:text-[var(--purple)] cursor-pointer transition-all" style={{ fontWeight: 400 }}>
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-10 p-8 rounded-2xl bg-[#F7F7FC] border border-[#E4E4EC]">
            <div className="flex items-start gap-5">
              <div className="w-14 h-14 rounded-full flex items-center justify-center text-white shrink-0" style={{ background: 'var(--purple)', fontWeight: 400 }}>P</div>
              <div>
                <p className="text-[#0A0A0F] mb-1" style={{ fontWeight: 400 }}>Ploy S.</p>
                <p className="text-xs text-[var(--purple)] mb-3" style={{ fontWeight: 400 }}>Lead Designer · Haliviq</p>
                <p className="t-body text-sm leading-relaxed">{a.bio}</p>
              </div>
            </div>
          </div>
        </article>

        {/* Related posts */}
        <section className="bg-[#F7F7FC] border-t border-[#E4E4EC] py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <p className="t-label mb-10">{a.related}</p>
            <div className="grid sm:grid-cols-3 gap-6">
              {relatedPosts.map(post => (
                <Link key={post.slug} href={`/${lang}/blog/${post.slug}`}
                  className="group border border-[#E4E4EC] bg-white rounded-3xl overflow-hidden hover:border-[var(--purple)]/30 hover:shadow-xl hover:shadow-[var(--purple)]/6 hover:-translate-y-1 transition-all duration-300 block">
                  <ImagePlaceholder label="Cover" h={180} color={post.color} bg={post.bg} />
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xs px-3 py-1 rounded-full" style={{ background: post.bg, color: post.color, fontWeight: 400 }}>{post.cat}</span>
                      <span className="text-xs text-[#AAAABC]" style={{ fontWeight: 400 }}>{post.readTime}</span>
                    </div>
                    <h4 className="text-[#0A0A0F] leading-snug group-hover:text-[var(--purple)] transition-colors" style={{ fontWeight: 400, fontSize: '1rem' }}>{post.title}</h4>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer lang={lang} tr={tr} />
    </>
  )
}
