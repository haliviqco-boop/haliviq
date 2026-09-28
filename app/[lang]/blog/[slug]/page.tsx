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
  { slug: 'ux-research-methods', cat: 'Design', title: 'เปรียบ User Research Methods 8 วิธี', readTime: '10 นาที', color: 'var(--purple)', bg: 'var(--purple-bg)' },
  { slug: 'product-discovery', cat: 'Product', title: 'Product Discovery Framework ที่เราใช้จริง', readTime: '11 นาที', color: 'var(--purple-light)', bg: 'var(--purple-bg)' },
  { slug: 'nextjs-performance', cat: 'Engineering', title: 'Next.js Performance จาก 45 ขึ้น 98', readTime: '15 นาที', color: 'var(--purple)', bg: 'var(--purple-bg)' },
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
            <h1 className="t-display text-[clamp(2.2rem,5vw,4rem)] text-[#0A0A0F] leading-tight mb-8">
              ทำไม Design System ถึงสำคัญกับทุกบริษัทที่ต้องการ Scale
            </h1>

            {/* Excerpt */}
            <p className="t-body text-lg leading-relaxed mb-10">
              เมื่อทีมขยายและ Feature เพิ่มขึ้น ความไม่สม่ำเสมอของ UI เริ่มสะสม Design System ไม่ใช่แค่เรื่องของความสวยงาม แต่คือ Infrastructure ที่ช่วยให้ Ship ได้เร็วขึ้น ถูกต้องมากขึ้น
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
              Design System คือชุดของ Component, Pattern, Guideline และ Tool ที่ทีม Design และ Engineering ใช้ร่วมกันเพื่อสร้าง Product ที่มีความสม่ำเสมอและ Scale ได้ง่าย มันไม่ใช่แค่ Style Guide หรือ Component Library แต่คือระบบทั้งหมดที่ทำงานร่วมกัน
            </p>
            <p className="t-body text-base leading-relaxed mb-8">
              ลองนึกถึง Design System เหมือน Lego Bricks องค์กรที่ไม่มีจะเหมือนต้องหล่อ Brick ใหม่ทุกครั้งที่ต้องการสร้างอะไร ส่วนองค์กรที่มีจะสามารถ Mix and Match Brick ที่มีอยู่แล้วเพื่อสร้างสิ่งใหม่ได้เร็วกว่ามาก
            </p>

            {/* Inline image */}
            <div className="my-10">
              <ImagePlaceholder label="Diagram: Design System Components" h={320} color="var(--purple)" bg="var(--purple-bg)" />
              <p className="text-xs text-[#AAAABC] text-center mt-3" style={{ fontWeight: 400 }}>ภาพแสดงความสัมพันธ์ระหว่าง Design Token, Component และ Pattern</p>
            </div>

            <h2 className="t-display text-[#0A0A0F] mb-6" style={{ fontSize: '1.8rem', marginTop: '3rem' }}>
              ทำไมบริษัทส่วนใหญ่ถึงยังไม่มี Design System?
            </h2>
            <p className="t-body text-base leading-relaxed mb-6">
              มีสองเหตุผลหลัก: เวลาและ Priority ตอนเริ่มต้น Startup ต้องการ Ship เร็ว ไม่มีเวลาสร้าง System ที่ครบถ้วน ซึ่งเป็นเรื่องที่เข้าใจได้ แต่ปัญหาคือถ้าไม่ลงทุนในจุดนี้เร็วพอ Technical Debt ด้าน Design จะสะสมจนยากที่จะ Refactor
            </p>

            {/* Pull quote */}
            <blockquote className="my-10 pl-6 border-l-4 py-4" style={{ borderColor: 'var(--purple)' }}>
              <p className="text-xl text-[#0A0A0F] leading-relaxed" style={{ fontWeight: 400 }}>
                "ทุกครั้งที่ Designer ต้องสร้าง Button ใหม่ หรือ Engineer ต้องเดา Color Code คือเวลาที่สูญเสียไปโดยไม่จำเป็น"
              </p>
            </blockquote>

            <h2 className="t-display text-[#0A0A0F] mb-6" style={{ fontSize: '1.8rem', marginTop: '3rem' }}>
              ประโยชน์จริงๆ ที่วัดได้
            </h2>
            <p className="t-body text-base leading-relaxed mb-6">
              จากประสบการณ์ที่ Haliviq ช่วยสร้าง Design System ให้กับลูกค้า เราพบตัวเลขที่น่าสนใจ:
            </p>

            {/* Stats highlight */}
            <div className="grid sm:grid-cols-3 gap-4 my-8">
              {[
                { n: '50%', l: 'ลดเวลา Design & Dev' },
                { n: '90%', l: 'ลด UI Inconsistency' },
                { n: '3×', l: 'Onboard ทีมใหม่เร็วขึ้น' },
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
              เริ่มต้น Design System ยังไง?
            </h2>
            <p className="t-body text-base leading-relaxed mb-6">
              ไม่ต้องรอให้ Perfect ก่อน เริ่มจาก Foundation ก่อนเลย:
            </p>
            <ol className="space-y-4 mb-8">
              {[
                { n: '01', t: 'Audit สิ่งที่มีอยู่', d: 'รวบรวม UI Component ทั้งหมดที่ใช้อยู่ จัดกลุ่มและหา Pattern ที่ซ้ำๆ' },
                { n: '02', t: 'สร้าง Design Token', d: 'กำหนด Color, Typography, Spacing ที่เป็น Source of Truth ร่วมกัน' },
                { n: '03', t: 'Build Core Components', d: 'เริ่มจาก Component ที่ใช้บ่อยที่สุด เช่น Button, Input, Card' },
                { n: '04', t: 'Document ทุกอย่าง', d: 'เขียน Usage Guide, Do/Don\'t และ Code Example ให้ครบ' },
                { n: '05', t: 'Adopt และ Evolve', d: 'นำไปใช้ใน Project จริง เก็บ Feedback และ Iterate อย่างต่อเนื่อง' },
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
              Design System ที่ดีไม่ได้เกิดขึ้นในวันเดียว แต่ทุก Investment ที่ใส่ลงไปจะ Compound ตามเวลา ยิ่งทีมใหญ่ขึ้น Product ซับซ้อนขึ้น มูลค่าของ Design System ยิ่งเพิ่มขึ้นเรื่อยๆ
            </p>
            <p className="t-body text-base leading-relaxed">
              ถ้าคุณยังไม่มี Design System และสนใจจะเริ่ม ทีม Haliviq ยินดีให้คำปรึกษาฟรี เราช่วยทั้ง Audit, Design และ Build ให้กับองค์กรทุกขนาด
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
                <p className="t-body text-sm leading-relaxed">Designer ที่หลงใหลใน Systems Thinking และ Inclusive Design มีประสบการณ์ 6 ปีในการสร้าง Design System ให้กับบริษัทชั้นนำในไทยและ SEA</p>
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
