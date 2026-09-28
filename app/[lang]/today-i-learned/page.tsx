'use client'
import { useMemo, useState } from 'react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import { t, type Lang } from '@/lib/i18n'
import Footer from '@/components/Footer'

const notesEN = [
  { topic: 'React', date: 'Feb 16, 2026', title: 'Wrap heavy list re-renders with useDeferredValue instead of debouncing', excerpt: 'Debounce delays the update. useDeferredValue lets React interrupt the render instead, so typing stays smooth even on a 5,000-row table.' },
  { topic: 'React', date: 'Jan 20, 2026', title: 'key={index} silently breaks Framer Motion exit animations', excerpt: 'Reordering a list with an index key confuses the reconciler into reusing the wrong node, so exit animations fire on the wrong item.' },
  { topic: 'React', date: 'Nov 3, 2025', title: "useEffect cleanup running twice in Strict Mode isn't a bug to fix", excerpt: "It's catching effects that aren't idempotent. If double-invoking breaks something, the effect was already unsafe under React 18." },
  { topic: 'Next.js', date: 'Sep 22, 2025', title: 'Server Components re-render on every navigation, not just mount', excerpt: 'We assumed RSC output was cached across route changes. Next.js re-fetches on every soft navigation unless you opt into a caching strategy.' },
  { topic: 'Next.js', date: 'Aug 4, 2025', title: "revalidatePath doesn't bust the client-side router cache", excerpt: 'The server data was fresh, but users still saw stale content for up to 30 seconds because the client router cache ignores it.' },
  { topic: 'TypeScript', date: 'Jul 12, 2025', title: 'satisfies keeps literal types AND checks the shape', excerpt: "Annotating with a type widens it; satisfies validates against the type but keeps the narrow literal inference intact." },
  { topic: 'TypeScript', date: 'May 28, 2025', title: 'Optional chaining hides typos in property names from the compiler', excerpt: 'user?.emial silently returns undefined instead of erroring, so a typo ships straight to production without a peep.' },
  { topic: 'PostgreSQL', date: 'Sep 10, 2025', title: 'Partial indexes made our soft-delete queries 40x faster', excerpt: 'We indexed 2M soft-deleted rows the app never queries. A partial index with WHERE deleted_at IS NULL cut query time from 800ms to 20ms.' },
  { topic: 'PostgreSQL', date: 'Jun 30, 2025', title: 'EXPLAIN ANALYZE lies about buffer cache on the first run', excerpt: 'The first execution pulls cold pages from disk. Always run it twice — the second pass shows the number production will actually see.' },
  { topic: 'Docker', date: 'Sep 18, 2025', title: 'Multi-stage builds cut our image size by 71%', excerpt: 'Copying node_modules straight from the build stage dragged in tools nobody needed at runtime. A clean COPY --from cut 1.2GB to 340MB.' },
  { topic: 'Docker', date: 'Apr 2, 2025', title: ".dockerignore doesn't apply to COPY --from another stage", excerpt: 'We kept seeing .env leak into the final image because the ignore file only filters the build context, not inter-stage copies.' },
  { topic: 'Figma', date: 'Sep 15, 2025', title: 'Color contrast checkers lie about gradient text', excerpt: 'Most WCAG tools sample a single color, so gradient headings pass the tool but fail real users at the lighter end of the gradient.' },
  { topic: 'Figma', date: 'Mar 11, 2025', title: "Auto layout 'hug contents' breaks silently on empty strings", excerpt: 'A frame set to hug collapses to zero width when its bound text is empty, and there is no warning in the layer panel.' },
  { topic: 'CLI', date: 'Aug 29, 2025', title: "Debouncing search input isn't enough — you need request cancellation too", excerpt: 'Slow responses can still resolve out of order. An AbortController per keystroke fixed stale results flashing for fast typers.' },
  { topic: 'CLI', date: 'Feb 2, 2025', title: 'fzf + ripgrep beats grep -r for anything in a monorepo', excerpt: 'rg --files | fzf for fuzzy file jumps, and an fzf wrapper around rg for live-preview content search, cut our search time to nearly zero.' },
  { topic: 'macOS', date: 'Aug 25, 2025', title: 'Quick Look caches a stale thumbnail after a file gets overwritten', excerpt: "qlmanage -r resets the cache. Without it, a re-exported PNG keeps showing yesterday's preview in Finder for hours." },
  { topic: 'Design', date: 'Jun 20, 2025', title: 'Thai line-height needs ~1.7, not the 1.5 that works for Latin text', excerpt: 'Thai script stacks tone marks and vowels above and below the baseline. Bumping to 1.7 fixed clipped vowels across the whole site.' },
  { topic: 'Security', date: 'Aug 19, 2025', title: 'Rotating a leaked API key is not the same as revoking its sessions', excerpt: 'Existing signed sessions issued with the old key stayed valid for 24 hours after rotation. Our checklist now always revokes sessions too.' },
]

const notesTH = [
  { topic: 'React', date: '16 ก.พ. 2026', title: 'ห่อ List ที่ Re-render หนักๆ ด้วย useDeferredValue แทน Debounce', excerpt: 'Debounce แค่หน่วงการอัปเดต แต่ useDeferredValue ให้ React แทรก Render ได้ พิมพ์ลื่นแม้บนตาราง 5,000 แถว' },
  { topic: 'React', date: '20 ม.ค. 2026', title: 'key={index} ทำให้ Animation ตอนลบ Element ของ Framer Motion พังแบบไม่รู้ตัว', excerpt: 'การเรียง List ใหม่โดยใช้ Index เป็น Key ทำให้ Reconciler สับสนและใช้ Node ผิดตัว Animation ตอนลบเลยเล่นผิด Item' },
  { topic: 'React', date: '3 พ.ย. 2025', title: 'useEffect Cleanup ทำงาน 2 รอบใน Strict Mode ไม่ใช่บั๊กที่ต้องแก้', excerpt: 'มันช่วยจับ Effect ที่ไม่ Idempotent ถ้า Double-invoke แล้วพัง แสดงว่า Effect นั้นไม่ปลอดภัยตั้งแต่ React 18 อยู่แล้ว' },
  { topic: 'Next.js', date: '22 ก.ย. 2025', title: 'React Server Components Re-render ทุกครั้งที่เปลี่ยนหน้า ไม่ใช่แค่ตอน Mount', excerpt: 'เราเข้าใจผิดว่า RSC จะถูก Cache ข้ามการเปลี่ยนหน้า แต่ Next.js จะ Fetch ใหม่ทุกครั้งที่ Navigate เว้นแต่ตั้งค่า Caching เอง' },
  { topic: 'Next.js', date: '4 ส.ค. 2025', title: 'revalidatePath ไม่ได้ล้าง Client-side Router Cache', excerpt: 'ข้อมูลบน Server สดใหม่แล้ว แต่ผู้ใช้ยังเห็นข้อมูลเก่าอยู่นานถึง 30 วินาที เพราะ Router Cache ฝั่ง Client ไม่รับรู้' },
  { topic: 'TypeScript', date: '12 ก.ค. 2025', title: 'satisfies เก็บ Literal Type ไว้ พร้อมเช็ค Shape ไปด้วย', excerpt: 'การใส่ Type ตรงๆ ทำให้ Type กว้างขึ้น แต่ satisfies ตรวจสอบตาม Type แล้วยังคง Literal Inference ที่แคบไว้เหมือนเดิม' },
  { topic: 'TypeScript', date: '28 พ.ค. 2025', title: 'Optional Chaining ซ่อน Typo ในชื่อ Property จาก Compiler', excerpt: 'user?.emial คืนค่า undefined เงียบๆ แทนที่จะ Error ทำให้ Typo หลุดไปถึง Production โดยไม่มีใครรู้' },
  { topic: 'PostgreSQL', date: '10 ก.ย. 2025', title: 'Partial Index ใน Postgres ทำให้ Query Soft-delete เร็วขึ้น 40 เท่า', excerpt: 'เรา Index แถว Soft-delete กว่า 2 ล้านแถวที่แอปไม่เคย Query ถึง Partial Index ด้วย WHERE deleted_at IS NULL ลดเวลา Query จาก 800ms เหลือ 20ms' },
  { topic: 'PostgreSQL', date: '30 มิ.ย. 2025', title: 'EXPLAIN ANALYZE โกหกเรื่อง Buffer Cache ในการรันครั้งแรก', excerpt: 'การรันครั้งแรกดึงหน้าข้อมูลเย็นจาก Disk ต้องรัน 2 ครั้งเสมอ ครั้งที่สองถึงจะเห็นตัวเลขที่ใกล้เคียง Production จริง' },
  { topic: 'Docker', date: '18 ก.ย. 2025', title: 'Multi-stage Docker Build ลดขนาด Image ลง 71%', excerpt: 'การ Copy node_modules ตรงจาก Build Stage ทำให้ติดเครื่องมือที่ไม่จำเป็นมาด้วย ใช้ COPY --from แบบสะอาด ลด Image จาก 1.2GB เหลือ 340MB' },
  { topic: 'Docker', date: '2 เม.ย. 2025', title: '.dockerignore ไม่มีผลกับ COPY --from จาก Stage อื่น', excerpt: 'เราเจอ .env หลุดเข้า Image สุดท้ายซ้ำๆ เพราะไฟล์ Ignore กรองแค่ Build Context ไม่ได้กรองการ Copy ข้าม Stage' },
  { topic: 'Figma', date: '15 ก.ย. 2025', title: 'เครื่องมือเช็ค Color Contrast โกหกเรื่อง Gradient Text', excerpt: 'เครื่องมือ WCAG ส่วนใหญ่สุ่มเช็คแค่สีเดียว หัวข้อที่ใช้ Gradient เลยผ่านเครื่องมือ แต่ผู้ใช้จริงมองไม่เห็นฝั่งสีอ่อนของ Gradient' },
  { topic: 'Figma', date: '11 มี.ค. 2025', title: "Auto Layout 'Hug Contents' พังเงียบๆ เมื่อข้อความว่าง", excerpt: 'Frame ที่ตั้งเป็น Hug จะยุบเหลือความกว้าง 0 ทันทีที่ข้อความที่ผูกไว้ว่างเปล่า และไม่มี Warning ใน Layer Panel เลย' },
  { topic: 'CLI', date: '29 ส.ค. 2025', title: 'Debounce Search Input อย่างเดียวไม่พอ ต้องมี Request Cancellation ด้วย', excerpt: 'Response ที่ช้าอาจกลับมาไม่เรียงลำดับ การเพิ่ม AbortController ต่อการพิมพ์แต่ละครั้งแก้บั๊กผล Search ค้างของคนพิมพ์เร็ว' },
  { topic: 'CLI', date: '2 ก.พ. 2025', title: 'fzf + ripgrep เร็วกว่า grep -r สำหรับงานใน Monorepo', excerpt: 'rg --files | fzf สำหรับกระโดดไปไฟล์แบบ Fuzzy และห่อ rg ด้วย fzf สำหรับค้นเนื้อหาพร้อม Preview ลดเวลาค้นหาลงเกือบเป็นศูนย์' },
  { topic: 'macOS', date: '25 ส.ค. 2025', title: 'Quick Look ค้าง Thumbnail เก่าหลังไฟล์ถูกเขียนทับ', excerpt: 'ใช้ qlmanage -r เพื่อ Reset Cache ไม่งั้น PNG ที่ Export ใหม่จะโชว์ Preview เดิมค้างใน Finder อยู่หลายชั่วโมง' },
  { topic: 'Design', date: '20 มิ.ย. 2025', title: 'Line-height ภาษาไทยต้องการ ~1.7 ไม่ใช่ 1.5 แบบภาษาอังกฤษ', excerpt: 'ตัวอักษรไทยมีวรรณยุกต์และสระซ้อนทั้งบนและล่างบรรทัด การปรับเป็น 1.7 แก้ปัญหาสระถูกตัดทั้งเว็บไซต์' },
  { topic: 'Security', date: '19 ส.ค. 2025', title: 'Rotate API Key ที่รั่วไหล ไม่เหมือนกับการ Revoke Session', excerpt: 'Session ที่เซ็นด้วย Key เก่ายังใช้ได้อีก 24 ชั่วโมงหลัง Rotate Checklist รับมือ Incident ของเราเลยมีขั้นตอน Revoke Session เสมอ' },
]

const topicColors: Record<string, string> = {
  React: 'var(--purple-light)',
  'Next.js': 'var(--purple)',
  TypeScript: 'var(--purple-light)',
  PostgreSQL: 'var(--lime)',
  Docker: 'var(--purple)',
  Figma: 'var(--lime)',
  CLI: 'var(--purple-light)',
  macOS: 'var(--lime)',
  Design: 'var(--purple)',
  Security: 'var(--lime)',
}

export default function Page({ params }: { params: { lang: Lang } }) {
  const lang = (params.lang === 'en' ? 'en' : 'th') as Lang
  const isEN = lang === 'en'
  const tr = t[lang] as any
  const notes = isEN ? notesEN : notesTH
  const [active, setActive] = useState<string>('all')

  const topics = useMemo(() => {
    const counts: Record<string, number> = {}
    notes.forEach(n => { counts[n.topic] = (counts[n.topic] || 0) + 1 })
    return Object.entries(counts).sort((a, b) => b[1] - a[1]).map(([label, count]) => ({ label, count }))
  }, [notes])

  const visibleNotes = active === 'all' ? notes : notes.filter(n => n.topic === active)

  return (
    <>
      <Navbar lang={lang} tr={tr} />
      <main>
        <section className="pt-[112px] pb-16 lg:pb-24" style={{ background: '#08070F' }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <p className="text-xs tracking-widest uppercase mb-5" style={{ color: 'var(--purple-light)', fontWeight: 400, letterSpacing: '0.2em' }}>{isEN ? 'Insights' : 'Insights'}</p>
            <h1 className="t-display text-[clamp(2.6rem,6vw,4.5rem)] leading-normal mb-6" style={{ color: '#fff' }}>
              {isEN ? 'Today I Learned' : 'Today I Learned'}
            </h1>
            <p className="max-w-xl mb-10" style={{ color: 'rgba(255,255,255,0.55)', fontWeight: 400, fontSize: '1rem', lineHeight: 1.6 }}>
              {isEN ? 'Short, practical notes from the Haliviq team: quick lessons from daily engineering and design work.' : 'บันทึกสั้นๆ เชิงปฏิบัติจากทีม Haliviq — บทเรียนเล็กๆ จากงานวิศวกรรมและดีไซน์ในแต่ละวัน'}
            </p>

            {/* Topic filter pills */}
            <div className="flex flex-wrap gap-2.5 mb-14">
              <button
                onClick={() => setActive('all')}
                className="px-4 py-2 rounded-lg text-sm transition-colors"
                style={active === 'all'
                  ? { border: '1px solid var(--purple-light)', color: 'var(--purple-light)', fontWeight: 400 }
                  : { border: '1px solid rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.7)', fontWeight: 400 }}
              >
                {isEN ? 'All Topics' : 'ทั้งหมด'}
              </button>
              {topics.map(tp => (
                <button
                  key={tp.label}
                  onClick={() => setActive(tp.label)}
                  className="px-4 py-2 rounded-lg text-sm transition-colors"
                  style={active === tp.label
                    ? { border: '1px solid var(--purple-light)', color: 'var(--purple-light)', fontWeight: 400 }
                    : { border: '1px solid rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.7)', fontWeight: 400 }}
                >
                  {tp.label} <span style={{ color: 'rgba(255,255,255,0.35)' }}>{tp.count}</span>
                </button>
              ))}
            </div>

            {/* Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {visibleNotes.map((n, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1"
                  style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs tracking-widest uppercase" style={{ color: topicColors[n.topic] || 'var(--purple-light)', fontWeight: 500, letterSpacing: '0.08em' }}>{n.topic}</span>
                    <span className="text-xs" style={{ color: 'rgba(255,255,255,0.4)', fontWeight: 400 }}>{n.date}</span>
                  </div>
                  <h3 className="leading-snug mb-3" style={{ color: '#fff', fontWeight: 500, fontSize: '1.05rem' }}>{n.title}</h3>
                  <p style={{ color: 'rgba(255,255,255,0.55)', fontWeight: 400, fontSize: '0.85rem', lineHeight: 1.6 }}>{n.excerpt}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 relative overflow-hidden" style={{ background: 'linear-gradient(135deg,var(--purple) 0%,var(--purple-light) 50%,var(--lime) 100%)' }}>
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle,#fff 1px,transparent 1px)', backgroundSize: '28px 28px' }} />
          <div className="relative max-w-3xl mx-auto px-6 lg:px-10 text-center">
            <p className="text-white/60 text-xs tracking-widest uppercase mb-6 font-mono">{isEN ? 'Have a project in mind?' : 'มีโปรเจกต์ในใจแล้วใช่ไหม?'}</p>
            <h2 className="t-display text-white text-[clamp(2rem,4vw,3.5rem)] mb-6 leading-tight">
              {isEN ? "We'd love to hear what you're building." : 'เราอยากได้ยินสิ่งที่คุณกำลังสร้าง'}
            </h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href={`/${lang}/contact`} className="inline-flex items-center gap-2 px-8 py-3.5 bg-white rounded-full text-sm hover:bg-[var(--purple-bg)] transition-colors" style={{ color: 'var(--purple)', fontWeight: 400 }}>
                {isEN ? 'Start a Conversation' : 'เริ่มบทสนทนา'}
                <i className="ti ti-arrow-right" style={{ fontSize: 14 }} aria-hidden="true" />
              </Link>
              <a href="mailto:wu@haliviq.com" className="text-sm text-white/85 hover:text-white transition-colors" style={{ fontWeight: 400 }}>wu@haliviq.com</a>
            </div>
          </div>
        </section>
      </main>
      <Footer lang={lang} tr={tr} />
    </>
  )
}
