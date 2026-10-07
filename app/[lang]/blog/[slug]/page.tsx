import Link from 'next/link'
import Navbar from '@/components/Navbar'
import { t, type Lang } from '@/lib/i18n'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'บทความ — Haliviq',
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

const relatedPosts = [
  { slug: 'ux-research-methods', cat: 'Design', title: 'เปรียบเทียบวิธีทำ User Research 8 แบบ', readTime: '10 นาที', color: 'var(--purple)', bg: 'var(--purple-bg)' },
  { slug: 'product-discovery', cat: 'Product', title: 'กรอบทำ Product Discovery ที่เราใช้จริง', readTime: '11 นาที', color: 'var(--purple-light)', bg: 'var(--purple-bg)' },
  { slug: 'nextjs-performance', cat: 'Engineering', title: 'เร่งความเร็ว Next.js จาก 45 เป็น 98', readTime: '15 นาที', color: 'var(--purple)', bg: 'var(--purple-bg)' },
]

export default function Page({ params }: { params: { lang: Lang; slug: string } }) {
  const lang = (params.lang === 'en' ? 'en' : 'th') as Lang
  const tr = t[lang] as any
  return (
    <>
      <Navbar lang={lang} tr={tr} />
      <main>
        {/* Article Hero */}
        <section className="pt-[80px] bg-white">
          <div className="h-1 w-full" style={{ background: 'linear-gradient(90deg,var(--purple),var(--purple-light),var(--lime))' }} />
          <div className="max-w-4xl mx-auto px-6 lg:px-10 py-16 lg:py-24">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-xs text-[#AAAABC] mb-10" style={{ fontWeight: 400 }}>
              <Link href="/blog" className="hover:text-[var(--purple)] transition-colors">บทความ</Link>
              <i className="ti ti-chevron-right" style={{ fontSize: 12 }} aria-hidden="true" />
              <span>Design</span>
            </div>

            {/* Category + read time */}
            <div className="flex items-center gap-3 mb-8">
              <span className="px-3 py-1.5 rounded-full text-xs" style={{ background: 'var(--purple-bg)', color: 'var(--purple)', fontWeight: 400 }}>
                Design
              </span>
              <span className="text-xs text-[#AAAABC]" style={{ fontWeight: 400 }}>8 นาที</span>
              <span className="text-xs text-[#AAAABC]" style={{ fontWeight: 400 }}>·</span>
              <span className="text-xs text-[#AAAABC]" style={{ fontWeight: 400 }}>10 มิถุนายน 2025</span>
            </div>

            {/* Title */}
            <h1 className="t-display text-[clamp(2.2rem,5vw,4rem)] text-[#0A0A0F] leading-relaxed mb-8">
              ทำไมบริษัทที่กำลังเติบโตทุกแห่งควรมี Design System
            </h1>

            {/* Excerpt */}
            <p className="t-body text-lg leading-relaxed mb-10">
              เมื่อทีมโตขึ้นและมีฟีเจอร์เพิ่ม UI ก็เริ่มไม่เป็นแบบเดียวกัน Design System ไม่ใช่แค่เรื่องความสวยงาม แต่เป็นพื้นฐานที่ช่วยให้ปล่อยงานได้เร็วขึ้นและผิดพลาดน้อยลง
            </p>

            {/* Author */}
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

            {/* Section 1 */}
            <h2 className="t-display text-[#0A0A0F] mb-6" style={{ fontSize: '1.8rem', marginTop: '3rem' }}>
              Design System คืออะไรกันแน่?
            </h2>
            <p className="t-body text-base leading-relaxed mb-6">
              Design System คือชุด Component, Pattern, แนวทางการใช้ และเครื่องมือ ที่ทีมออกแบบและทีมพัฒนาใช้ร่วมกัน เพื่อสร้างผลิตภัณฑ์ที่หน้าตาเป็นแบบเดียวกันและขยายต่อได้ง่าย ไม่ใช่แค่ Style Guide หรือ Component Library แต่เป็นระบบทั้งหมดที่ทำงานร่วมกัน
            </p>
            <p className="t-body text-base leading-relaxed mb-8">
              ลองนึกถึง Design System เหมือนตัวต่อเลโก้ องค์กรที่ไม่มีต้องหล่อตัวต่อใหม่ทุกครั้งที่จะสร้างอะไร ส่วนองค์กรที่มีก็หยิบตัวต่อที่มีอยู่มาประกอบเป็นของใหม่ได้เร็วกว่ามาก
            </p>

            {/* Inline image */}
            <div className="my-10">
              <ImagePlaceholder label="Diagram: Design System Components" h={320} color="var(--purple)" bg="var(--purple-bg)" />
              <p className="text-xs text-[#AAAABC] text-center mt-3" style={{ fontWeight: 400 }}>ภาพแสดงความสัมพันธ์ระหว่าง Design Token, Component และ Pattern</p>
            </div>

            <h2 className="t-display text-[#0A0A0F] mb-6" style={{ fontSize: '1.8rem', marginTop: '3rem' }}>
              ทำไมบริษัทส่วนใหญ่ยังไม่มี Design System?
            </h2>
            <p className="t-body text-base leading-relaxed mb-6">
              มีสองเหตุผลหลัก คือไม่มีเวลาและมีเรื่องอื่นสำคัญกว่า ตอนเริ่มต้น Startup อยากปล่อยงานเร็ว จึงไม่มีเวลาสร้างระบบให้ครบ ซึ่งเข้าใจได้ แต่ถ้าไม่ลงทุนเรื่องนี้ให้เร็วพอ ปัญหาสะสมด้านดีไซน์ (Technical Debt) จะพอกจนยากจะรื้อแก้
            </p>

            {/* Pull quote */}
            <blockquote className="my-10 pl-6 border-l-4 py-4" style={{ borderColor: 'var(--purple)' }}>
              <p className="text-xl text-[#0A0A0F] leading-relaxed" style={{ fontWeight: 400 }}>
                "ทุกครั้งที่ Designer ต้องสร้างปุ่มใหม่ หรือ Engineer ต้องเดารหัสสี คือเวลาที่เสียไปโดยเปล่าประโยชน์"
              </p>
            </blockquote>

            <h2 className="t-display text-[#0A0A0F] mb-6" style={{ fontSize: '1.8rem', marginTop: '3rem' }}>
              ประโยชน์จริงที่วัดได้
            </h2>
            <p className="t-body text-base leading-relaxed mb-6">
              จากที่ Haliviq ช่วยลูกค้าสร้าง Design System เราเห็นตัวเลขที่น่าสนใจ:
            </p>

            {/* Stats highlight */}
            <div className="grid sm:grid-cols-3 gap-4 my-8">
              {[
                { n: '50%', l: 'ลดเวลาออกแบบและพัฒนา' },
                { n: '90%', l: 'UI ไม่ตรงกันน้อยลง' },
                { n: '3×', l: 'ทีมใหม่เริ่มงานได้เร็วขึ้น' },
              ].map(s => (
                <div key={s.l} className="p-6 rounded-2xl text-center border border-[#E4E4EC]">
                  <div className="text-3xl mb-2" style={{ fontWeight: 400, color: 'var(--purple)' }}>{s.n}</div>
                  <p className="text-xs text-[#6E6E88]" style={{ fontWeight: 400 }}>{s.l}</p>
                </div>
              ))}
            </div>

            {/* Another image */}
            <div className="my-10">
              <ImagePlaceholder label="Before / After: UI Consistency" h={280} color="var(--purple-light)" bg="var(--purple-bg)" />
              <p className="text-xs text-[#AAAABC] text-center mt-3" style={{ fontWeight: 400 }}>ตัวอย่าง UI ก่อนและหลังใช้ Design System</p>
            </div>

            <h2 className="t-display text-[#0A0A0F] mb-6" style={{ fontSize: '1.8rem', marginTop: '3rem' }}>
              เริ่มทำ Design System อย่างไร?
            </h2>
            <p className="t-body text-base leading-relaxed mb-6">
              ไม่ต้องรอให้สมบูรณ์แบบ เริ่มจากพื้นฐานก่อนเลย:
            </p>
            <ol className="space-y-4 mb-8">
              {[
                { n: '01', t: 'ตรวจสิ่งที่มีอยู่', d: 'รวบรวม UI Component ทั้งหมดที่ใช้อยู่ จัดกลุ่ม และหา Pattern ที่ซ้ำกัน' },
                { n: '02', t: 'สร้าง Design Token', d: 'กำหนดสี ตัวอักษร และระยะห่าง ให้เป็นแหล่งข้อมูลกลางที่ทุกคนใช้ร่วมกัน' },
                { n: '03', t: 'Build Core Components', d: 'เริ่มจาก Component ที่ใช้บ่อยที่สุด เช่น ปุ่ม ช่องกรอก การ์ด' },
                { n: '04', t: 'จดบันทึกให้ครบ', d: 'เขียนวิธีใช้ ข้อควรทำและไม่ควรทำ และตัวอย่าง Code ให้ครบ' },
                { n: '05', t: 'ใช้งานและพัฒนาต่อ', d: 'นำไปใช้ในโปรเจกต์จริง เก็บความเห็น และปรับปรุงอย่างต่อเนื่อง' },
              ].map(step => (
                <li key={step.n} className="flex gap-4 p-5 rounded-2xl border border-[#E4E4EC]">
                  <span className="w-8 h-8 rounded-xl flex items-center justify-center shrink-0 text-xs font-mono" style={{ background: 'var(--purple-bg)', color: 'var(--purple)' }}>{step.n}</span>
                  <div>
                    <p className="text-[#0A0A0F] mb-1" style={{ fontWeight: 400 }}>{step.t}</p>
                    <p className="t-body text-sm">{step.d}</p>
                  </div>
                </li>
              ))}
            </ol>

            {/* Final image */}
            <div className="my-10">
              <ImagePlaceholder label="Screenshot: Design System Documentation" h={360} color="var(--purple)" bg="var(--purple-bg)" />
            </div>

            <p className="t-body text-base leading-relaxed mb-6">
              Design System ที่ดีไม่ได้เกิดในวันเดียว แต่ทุกอย่างที่ลงทุนไปจะให้ผลทบต้นตามเวลา ยิ่งทีมใหญ่ขึ้นและผลิตภัณฑ์ซับซ้อนขึ้น Design System ก็ยิ่งมีค่ามากขึ้น
            </p>
            <p className="t-body text-base leading-relaxed">
              ถ้าคุณยังไม่มี Design System และอยากเริ่มทำ ทีม Haliviq ยินดีให้คำปรึกษาฟรี เราช่วยได้ทั้งตรวจสถานะปัจจุบัน ออกแบบ และสร้างให้องค์กรทุกขนาด
            </p>

          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-12 pt-10 border-t border-[#E4E4EC]">
            {['Design System', 'UX/UI', 'Figma', 'Frontend', 'Component Library'].map(tag => (
              <span key={tag} className="px-4 py-2 rounded-full text-xs border border-[#E4E4EC] text-[#6E6E88] hover:border-[var(--purple)] hover:text-[var(--purple)] cursor-pointer transition-all" style={{ fontWeight: 400 }}>
                {tag}
              </span>
            ))}
          </div>

          {/* Author bio */}
          <div className="mt-10 p-8 rounded-2xl bg-[#F7F7FC] border border-[#E4E4EC]">
            <div className="flex items-start gap-5">
              <div className="w-14 h-14 rounded-full flex items-center justify-center text-white shrink-0" style={{ background: 'var(--purple)', fontWeight: 400 }}>P</div>
              <div>
                <p className="text-[#0A0A0F] mb-1" style={{ fontWeight: 400 }}>Ploy S.</p>
                <p className="text-xs text-[var(--purple)] mb-3" style={{ fontWeight: 400 }}>Lead Designer · Haliviq</p>
                <p className="t-body text-sm leading-relaxed">Designer ที่สนใจการคิดเชิงระบบ (Systems Thinking) และการออกแบบที่ทุกคนใช้ได้ (Inclusive Design) มีประสบการณ์ 6 ปีในการสร้าง Design System ให้บริษัทชั้นนำในไทยและเอเชียตะวันออกเฉียงใต้</p>
              </div>
            </div>
          </div>
        </article>

        {/* Related posts */}
        <section className="bg-[#F7F7FC] border-t border-[#E4E4EC] py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <p className="t-label mb-10">บทความที่เกี่ยวข้อง</p>
            <div className="grid sm:grid-cols-3 gap-6">
              {relatedPosts.map(post => (
                <Link key={post.slug} href={`/blog/${post.slug}`}
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
