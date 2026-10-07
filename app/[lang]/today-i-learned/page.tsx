'use client'
import { useMemo, useState } from 'react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import { t, type Lang } from '@/lib/i18n'
import Footer from '@/components/Footer'

const notesEN = [
  { topic: 'React', date: 'Feb 16, 2026', title: 'Wrap heavy list re-renders with useDeferredValue instead of debouncing', excerpt: 'Debounce only delays the update, so the expensive render still blocks the page once it fires. useDeferredValue lets React interrupt that render when a new keystroke arrives, so typing stays smooth even on a 5,000-row table. Reach for it when a filter box drives a big list and you do not want to add arbitrary wait times.' },
  { topic: 'React', date: 'Jan 20, 2026', title: 'key={index} silently breaks Framer Motion exit animations', excerpt: 'When you reorder or remove items in a list keyed by index, React matches the wrong old node to the new item, so the exit animation plays on the wrong element. Use a stable id from your data as the key. It costs nothing and also fixes odd input-focus and state bugs in the same list.' },
  { topic: 'React', date: 'Nov 3, 2025', title: 'useEffect cleanup running twice in Strict Mode isn\'t a bug to fix', excerpt: 'In development, React 18 mounts, unmounts and re-mounts your component on purpose to surface effects that are not idempotent. If running it twice breaks something, such as a duplicate subscription or a double request, the effect was already unsafe. Fix the cleanup rather than turning Strict Mode off.' },
  { topic: 'Next.js', date: 'Sep 22, 2025', title: 'Server Components re-render on every navigation, not just mount', excerpt: 'We assumed the output of a Server Component was cached across route changes. In practice Next.js fetches it again on every soft navigation unless you opt into a caching strategy. If a page feels slow after a client-side link click, check what the server component is fetching and decide explicitly what should be cached and for how long.' },
  { topic: 'Next.js', date: 'Aug 4, 2025', title: 'revalidatePath doesn\'t bust the client-side router cache', excerpt: 'The server data was fresh, but users still saw stale content for up to 30 seconds because the browser keeps its own router cache that revalidatePath does not touch. When freshness matters, such as after a form submit, trigger a router refresh on the client as well, and test the flow by clicking around rather than only reloading.' },
  { topic: 'TypeScript', date: 'Jul 12, 2025', title: 'satisfies keeps literal types AND checks the shape', excerpt: 'Annotating a variable with a type widens it, so you lose the exact literal values. The satisfies operator validates the object against the type but keeps the narrow inference, which is handy for config objects and route maps where you want both autocomplete on the real keys and a safety net on the shape.' },
  { topic: 'TypeScript', date: 'May 28, 2025', title: 'Optional chaining hides typos in property names from the compiler', excerpt: 'If the type is loose or any, user?.emial quietly returns undefined instead of raising an error, and the typo ships to production unnoticed. Keep the object properly typed so the compiler can flag the misspelling, and treat a lot of optional chaining as a hint that the data model is not well defined.' },
  { topic: 'PostgreSQL', date: 'Sep 10, 2025', title: 'Partial indexes made our soft-delete queries 40x faster', excerpt: 'We were indexing 2M soft-deleted rows that the app never queries. A partial index with WHERE deleted_at IS NULL covers only live rows, so it is smaller and fits in memory, and it cut query time from 800ms to 20ms. Any table where most queries hit a small, well-defined slice of rows is a good candidate.' },
  { topic: 'PostgreSQL', date: 'Jun 30, 2025', title: 'EXPLAIN ANALYZE lies about buffer cache on the first run', excerpt: 'The first execution pulls cold pages from disk, so the timing looks worse than what users will normally see. Always run it twice and read the second pass, and add BUFFERS to see how much came from cache. Comparing a cold run with a warm one is a common way to misjudge whether an index helped.' },
  { topic: 'Docker', date: 'Sep 18, 2025', title: 'Multi-stage builds cut our image size by 71%', excerpt: 'Copying node_modules straight from the build stage dragged in compilers and dev tools that nobody needs at runtime. A clean multi-stage build with COPY --from, copying only the built output and production dependencies, cut the image from 1.2GB to 340MB. Smaller images pull faster and have fewer packages to patch.' },
  { topic: 'Docker', date: 'Apr 2, 2025', title: '.dockerignore doesn\'t apply to COPY --from another stage', excerpt: 'We kept finding .env in the final image because .dockerignore only filters the build context sent to Docker, not files copied between stages. Be explicit about what you copy in later stages, never copy the whole directory, and inspect the final image to confirm no secrets are inside.' },
  { topic: 'Figma', date: 'Sep 15, 2025', title: 'Color contrast checkers lie about gradient text', excerpt: 'Most WCAG tools sample a single color, so a gradient heading can pass the check while the lighter end is hard to read for real people. Test the lightest and darkest points of the gradient against the background, or avoid gradients on small and important text altogether.' },
  { topic: 'Figma', date: 'Mar 11, 2025', title: 'Auto layout \'hug contents\' breaks silently on empty strings', excerpt: 'A frame set to hug its contents collapses to zero width when the bound text is empty, and the layers panel gives no warning. Give components a minimum width, or design an explicit empty state, so a missing value in real data does not make an element disappear.' },
  { topic: 'CLI', date: 'Aug 29, 2025', title: 'Debouncing search input isn\'t enough — you need request cancellation too', excerpt: 'Even with debounce, a slow response can arrive after a newer one and overwrite it with stale results. Creating an AbortController per request and aborting the previous one fixed the old results flashing in for fast typists. Cancelling also saves the server from finishing work nobody will see.' },
  { topic: 'CLI', date: 'Feb 2, 2025', title: 'fzf + ripgrep beats grep -r for anything in a monorepo', excerpt: 'rg --files | fzf gives fuzzy file jumping, and wrapping rg in fzf with a preview window gives live content search. In a big monorepo this brought our search time down to almost nothing, mostly because ripgrep respects .gitignore and skips build folders by default.' },
  { topic: 'macOS', date: 'Aug 25, 2025', title: 'Quick Look caches a stale thumbnail after a file gets overwritten', excerpt: 'Run qlmanage -r to reset the cache. Without it, a re-exported PNG can keep showing yesterday\'s preview in Finder for hours, which is confusing when you are checking design exports or handing off assets.' },
  { topic: 'Design', date: 'Jun 20, 2025', title: 'Thai line-height needs ~1.7, not the 1.5 that works for Latin text', excerpt: 'Thai script stacks vowels and tone marks above and below the baseline, so a Latin-friendly line-height of 1.5 clips them or makes them touch the next line. Bumping body text to about 1.7 fixed clipped vowels across the whole site. Test with words that carry stacked marks, and check headings separately since they usually need less.' },
  { topic: 'Security', date: 'Aug 19, 2025', title: 'Rotating a leaked API key is not the same as revoking its sessions', excerpt: 'Signed sessions that were issued with the old key stayed valid for 24 hours after we rotated it, so an attacker could still use them. Our incident checklist now always revokes active sessions and tokens as well as replacing the key, and then checks the logs for use of the old one.' },
]

const notesTH = [
  { topic: 'React', date: '16 ก.พ. 2026', title: 'ใช้ useDeferredValue แทน debounce กับ list ที่ re-render หนัก', excerpt: 'debounce แค่หน่วงเวลาอัปเดต พอถึงเวลา render หนัก ๆ ก็ยังทำให้หน้าค้างอยู่ดี แต่ useDeferredValue ให้ React หยุด render ตรงกลางได้เมื่อมีการพิมพ์ตัวใหม่เข้ามา พิมพ์เลยลื่นแม้บนตาราง 5,000 แถว เหมาะกับกรณีที่ช่องค้นหาคุม list ใหญ่ ๆ และเราไม่อยากตั้งเวลารอแบบเดาเอา' },
  { topic: 'React', date: '20 ม.ค. 2026', title: 'key={index} ทำให้ exit animation ของ Framer Motion พังโดยไม่รู้ตัว', excerpt: 'เวลาเรียงลำดับหรือลบ item ใน list ที่ใช้ index เป็น key React จะจับคู่ node เก่ากับ item ใหม่ผิดตัว animation ตอนลบเลยไปเล่นที่ element ผิดอัน ให้ใช้ id ที่คงที่จากข้อมูลเป็น key แทน ไม่เสียอะไรเลย และช่วยแก้บั๊กแปลก ๆ เรื่อง focus ของช่องกรอกและ state ใน list เดียวกันด้วย' },
  { topic: 'React', date: '3 พ.ย. 2025', title: 'useEffect cleanup ทำงาน 2 รอบใน Strict Mode ไม่ใช่บั๊กที่ต้องแก้', excerpt: 'ตอนพัฒนา React 18 จะ mount, unmount แล้ว mount ซ้ำให้ตั้งใจ เพื่อจับ effect ที่รันซ้ำแล้วให้ผลไม่เหมือนเดิม ถ้ารันสองรอบแล้วพัง เช่น subscribe ซ้ำหรือยิง request สองครั้ง แสดงว่า effect นั้นไม่ปลอดภัยอยู่แล้ว ให้แก้ cleanup ไม่ใช่ปิด Strict Mode' },
  { topic: 'Next.js', date: '22 ก.ย. 2025', title: 'Server Components render ใหม่ทุกครั้งที่เปลี่ยนหน้า ไม่ใช่แค่ตอน mount', excerpt: 'เราเคยเข้าใจว่าผลลัพธ์ของ Server Component ถูก cache ข้ามหน้า แต่จริง ๆ Next.js ดึงใหม่ทุกครั้งที่กดลิงก์เปลี่ยนหน้า เว้นแต่เราตั้งค่า caching เอง ถ้าหน้าไหนช้าหลังกดลิงก์ ให้ดูว่า server component ดึงอะไรอยู่ แล้วตัดสินใจให้ชัดว่าอะไรควร cache และนานแค่ไหน' },
  { topic: 'Next.js', date: '4 ส.ค. 2025', title: 'revalidatePath ไม่ได้ล้าง router cache ฝั่ง client', excerpt: 'ข้อมูลบน server ใหม่แล้ว แต่ผู้ใช้ยังเห็นข้อมูลเก่านานถึง 30 วินาที เพราะ browser มี router cache ของตัวเอง ซึ่ง revalidatePath ไปไม่ถึง ถ้าความสดของข้อมูลสำคัญ เช่น หลังส่งฟอร์ม ให้สั่ง refresh router ฝั่ง client ด้วย และทดสอบโดยคลิกเปลี่ยนหน้าจริง ๆ ไม่ใช่แค่ reload' },
  { topic: 'TypeScript', date: '12 ก.ค. 2025', title: 'satisfies เก็บ literal type ไว้ และตรวจ shape ไปพร้อมกัน', excerpt: 'ถ้าเราระบุ type ให้ตัวแปรตรง ๆ type จะกว้างขึ้นและเสีย literal value จริงไป ส่วน satisfies ตรวจ object ตาม type แต่ยังเก็บ inference แบบแคบไว้ เหมาะกับ config หรือ route map ที่อยากได้ทั้ง autocomplete ของ key จริงและการตรวจ shape ให้ถูกต้อง' },
  { topic: 'TypeScript', date: '28 พ.ค. 2025', title: 'Optional chaining ซ่อนคำสะกดผิดของชื่อ property จาก compiler', excerpt: 'ถ้า type หลวมหรือเป็น any คำว่า user?.emial จะคืนค่า undefined เงียบ ๆ แทนที่จะ error คำสะกดผิดเลยหลุดไปถึงระบบจริงโดยไม่มีใครเห็น ให้ type ข้อมูลให้ถูกต้องเพื่อให้ compiler เตือนได้ และถ้าเจอ optional chaining เต็มโค้ดไปหมด อาจแปลว่าโครงข้อมูลยังไม่ชัด' },
  { topic: 'PostgreSQL', date: '10 ก.ย. 2025', title: 'Partial index ทำให้ query ที่ใช้ soft-delete เร็วขึ้น 40 เท่า', excerpt: 'เรา index แถวที่ถูก soft-delete ไว้กว่า 2 ล้านแถว ทั้งที่แอปไม่เคย query ถึง พอใช้ partial index แบบ WHERE deleted_at IS NULL มันครอบคลุมเฉพาะแถวที่ยังใช้งาน index เลยเล็กลงและอยู่ใน memory ได้ เวลา query ลดจาก 800ms เหลือ 20ms ตารางไหนที่ query ส่วนใหญ่ไปแตะแค่แถวกลุ่มเล็ก ๆ ที่ระบุได้ชัด ก็น่าลองวิธีนี้' },
  { topic: 'PostgreSQL', date: '30 มิ.ย. 2025', title: 'EXPLAIN ANALYZE ให้ตัวเลขไม่ตรงเรื่อง buffer cache ในการรันครั้งแรก', excerpt: 'การรันครั้งแรกต้องดึงข้อมูลที่ยังไม่อยู่ใน cache จาก disk ตัวเลขเลยดูช้ากว่าที่ผู้ใช้จริงจะเจอ ให้รันสองรอบเสมอแล้วดูรอบที่สอง และใส่ BUFFERS เพื่อดูว่าอ่านจาก cache เท่าไร การเอาผลรันแรกมาเทียบกับรันหลังเป็นสาเหตุที่ทำให้คนประเมินผิดว่า index ช่วยหรือไม่' },
  { topic: 'Docker', date: '18 ก.ย. 2025', title: 'Multi-stage build ลดขนาด Docker image ลง 71%', excerpt: 'การ copy node_modules จาก build stage ตรง ๆ ทำให้ compiler และเครื่องมือสำหรับพัฒนาติดมาด้วย ทั้งที่ตอนรันจริงไม่มีใครใช้ พอเปลี่ยนเป็น multi-stage build ที่ใช้ COPY --from เอาเฉพาะไฟล์ที่ build แล้วกับ dependency สำหรับ production image ก็ลดจาก 1.2GB เหลือ 340MB image เล็กลงจึง pull เร็วขึ้นและมีแพ็กเกจให้ต้องอัปเดตแพตช์น้อยลง' },
  { topic: 'Docker', date: '2 เม.ย. 2025', title: '.dockerignore ไม่มีผลกับ COPY --from จาก stage อื่น', excerpt: 'เราเจอไฟล์ .env หลุดเข้า image สุดท้ายซ้ำ ๆ เพราะ .dockerignore กรองแค่ build context ที่ส่งให้ Docker ไม่ได้กรองไฟล์ที่ copy ข้าม stage ให้ระบุชัดว่าจะ copy อะไรใน stage หลัง ๆ อย่า copy ทั้งโฟลเดอร์ และเปิดดู image สุดท้ายเพื่อเช็กว่าไม่มี secret ติดอยู่' },
  { topic: 'Figma', date: '15 ก.ย. 2025', title: 'เครื่องมือเช็ก color contrast ให้ผลไม่ตรงกับข้อความที่ใช้ gradient', excerpt: 'เครื่องมือ WCAG ส่วนใหญ่เช็กแค่สีเดียว หัวข้อที่ใช้ gradient จึงผ่านการตรวจ แต่ปลายฝั่งสีอ่อนอ่านยากสำหรับคนจริง ๆ ให้ทดสอบทั้งจุดที่อ่อนที่สุดและเข้มที่สุดของ gradient กับสีพื้นหลัง หรือเลี่ยง gradient กับข้อความเล็กและข้อความสำคัญไปเลย' },
  { topic: 'Figma', date: '11 มี.ค. 2025', title: 'Auto layout แบบ \'Hug contents\' พังเงียบ ๆ เมื่อข้อความว่าง', excerpt: 'frame ที่ตั้งเป็น hug จะหดเหลือความกว้าง 0 ทันทีที่ข้อความที่ผูกไว้ว่างเปล่า และ layers panel ไม่เตือนอะไรเลย ให้ตั้งความกว้างขั้นต่ำให้ component หรือออกแบบ empty state ไว้ชัด ๆ เวลาข้อมูลจริงขาดค่าไป element จะได้ไม่หายไปเฉย ๆ' },
  { topic: 'CLI', date: '29 ส.ค. 2025', title: 'debounce ช่องค้นหาอย่างเดียวไม่พอ ต้องยกเลิก request ด้วย', excerpt: 'ต่อให้ debounce แล้ว response ที่ช้าอาจมาถึงหลัง response ใหม่กว่า แล้วเขียนทับด้วยผลเก่า การสร้าง AbortController ต่อ request และยกเลิกอันก่อนหน้า ช่วยแก้บั๊กผลค้นหาเก่ากะพริบขึ้นมาของคนที่พิมพ์เร็ว และยังช่วยให้ server ไม่ต้องทำงานที่ไม่มีใครเห็นผลจนจบ' },
  { topic: 'CLI', date: '2 ก.พ. 2025', title: 'fzf + ripgrep เร็วกว่า grep -r เมื่อทำงานใน monorepo', excerpt: 'rg --files | fzf ใช้กระโดดไปไฟล์แบบ fuzzy และเอา rg ไปครอบด้วย fzf ที่มี preview จะได้การค้นเนื้อหาแบบเห็นผลทันที ใน monorepo ใหญ่ ๆ การค้นหาของเราเร็วจนแทบไม่ต้องรอ เหตุผลหลักคือ ripgrep เคารพ .gitignore และข้ามโฟลเดอร์ build ให้เองตั้งแต่ต้น' },
  { topic: 'macOS', date: '25 ส.ค. 2025', title: 'Quick Look ยังโชว์ thumbnail เก่าหลังไฟล์ถูกเขียนทับ', excerpt: 'ใช้ qlmanage -r เพื่อล้าง cache ถ้าไม่ล้าง PNG ที่ export ใหม่อาจยังโชว์ preview ของเมื่อวานใน Finder อยู่หลายชั่วโมง ซึ่งทำให้งงตอนตรวจไฟล์ดีไซน์หรือส่งมอบ asset' },
  { topic: 'Design', date: '20 มิ.ย. 2025', title: 'line-height ภาษาไทยควรอยู่ที่ราว 1.7 ไม่ใช่ 1.5 แบบภาษาอังกฤษ', excerpt: 'ตัวอักษรไทยมีสระและวรรณยุกต์ซ้อนทั้งบนและล่างบรรทัด line-height 1.5 ที่ใช้ได้กับภาษาอังกฤษจึงทำให้สระโดนตัดหรือไปชนบรรทัดถัดไป พอปรับ body text เป็นราว 1.7 ปัญหาสระโดนตัดก็หายไปทั้งเว็บไซต์ ให้ทดสอบกับคำที่มีสระและวรรณยุกต์ซ้อนกัน และเช็กหัวข้อแยกต่างหาก เพราะหัวข้อมักใช้ค่าน้อยกว่าได้' },
  { topic: 'Security', date: '19 ส.ค. 2025', title: 'การเปลี่ยน API key ที่รั่วไม่เท่ากับการยกเลิก session', excerpt: 'session ที่เซ็นด้วย key เก่ายังใช้ได้อีก 24 ชั่วโมงหลังเราเปลี่ยน key ผู้ไม่หวังดีจึงยังใช้ได้อยู่ เช็กลิสต์รับมือเหตุการณ์ของเรามีขั้นตอนยกเลิก session และ token ที่ยังเปิดอยู่เสมอ นอกจากเปลี่ยน key แล้ว ยังไล่ดู log ด้วยว่ามีใครใช้ key เก่าอยู่หรือไม่' },
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
      <Navbar lang={lang} tr={tr} transparent />
      <main>
        <section className="pt-[112px] pb-16 lg:pb-24" style={{ background: '#08070F' }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <p className="text-xs tracking-widest uppercase mb-5" style={{ color: 'var(--purple-light)', fontWeight: 400, letterSpacing: '0.2em' }}>{isEN ? 'Insights' : 'Insights'}</p>
            <h1 className="t-display text-[clamp(2.6rem,6vw,4.5rem)] leading-relaxed mb-6" style={{ color: '#fff' }}>
              {isEN ? 'Today I Learned' : 'Today I Learned'}
            </h1>
            <p className="max-w-2xl mb-10" style={{ color: 'rgba(255,255,255,0.6)', fontWeight: 400, fontSize: '1rem', lineHeight: 1.6 }}>
              {isEN ? 'Short, practical notes from the Haliviq team: quick lessons from daily engineering and design work. Each one is something we ran into while building, with the reason it happens and what we do about it now. Filter by topic to find notes on React, Next.js, PostgreSQL, Docker, Figma, security and more.' : 'บันทึกสั้น ๆ ที่ใช้ได้จริงจากทีม Haliviq เป็นบทเรียนเล็ก ๆ จากงานวิศวกรรมและดีไซน์ในแต่ละวัน แต่ละเรื่องคือสิ่งที่เราเจอระหว่างลงมือทำ พร้อมอธิบายว่าทำไมถึงเกิดขึ้น และตอนนี้เราแก้อย่างไร เลือกกรองตามหัวข้อได้ ทั้ง React, Next.js, PostgreSQL, Docker, Figma, security และอื่น ๆ'}
            </p>

            {/* Topic filter pills — horizontal slider instead of wrapping into many rows */}
            <div className="flex flex-nowrap gap-2.5 mb-14 overflow-x-auto no-scrollbar -mx-1 px-1" style={{ scrollSnapType: 'x proximity' }}>
              <button
                onClick={() => setActive('all')}
                className="shrink-0 whitespace-nowrap px-4 py-2 rounded-lg text-sm transition-colors"
                style={active === 'all'
                  ? { border: '1px solid var(--purple-light)', color: 'var(--purple-light)', fontWeight: 400, scrollSnapAlign: 'start' }
                  : { border: '1px solid rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.7)', fontWeight: 400, scrollSnapAlign: 'start' }}
              >
                {isEN ? 'All Topics' : 'ทั้งหมด'}
              </button>
              {topics.map(tp => (
                <button
                  key={tp.label}
                  onClick={() => setActive(tp.label)}
                  className="shrink-0 whitespace-nowrap px-4 py-2 rounded-lg text-sm transition-colors"
                  style={active === tp.label
                    ? { border: '1px solid var(--purple-light)', color: 'var(--purple-light)', fontWeight: 400, scrollSnapAlign: 'start' }
                    : { border: '1px solid rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.7)', fontWeight: 400, scrollSnapAlign: 'start' }}
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
            <p className="text-sm tracking-widest uppercase mb-6" style={{ color: '#fff', fontWeight: 500 }}>{isEN ? 'Have a project in mind?' : 'มีโปรเจกต์ในใจแล้วใช่ไหม?'}</p>
            <h2 className="t-display text-[clamp(1.75rem,4vw,3rem)] mb-6 leading-normal md:whitespace-nowrap" style={{ background: 'linear-gradient(135deg, var(--purple-light) 0%, #53C3D7 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              {isEN ? "We'd love to hear what you're building." : 'เราอยากฟังว่าคุณกำลังสร้างอะไรอยู่'}
            </h2>
            <p className="mb-10 max-w-xl mx-auto" style={{ color: 'rgba(255,255,255,0.75)', fontWeight: 400 }}>
              {isEN ? 'These notes come from our daily design and engineering work in Bangkok. If you are planning a website, app or AI tool and want a team that pays attention to details like these, tell us about it.' : 'บันทึกเหล่านี้มาจากงานออกแบบและพัฒนาที่ทีมเราทำกันทุกวันในกรุงเทพฯ ถ้าคุณกำลังวางแผนทำ website แอป หรือระบบ AI และอยากได้ทีมที่ใส่ใจรายละเอียดแบบนี้ เล่าให้เราฟังได้เลย'}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href={`/${lang}/contact`} className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm transition-opacity hover:opacity-90" style={{ background: 'linear-gradient(135deg, var(--purple) 0%, var(--purple-dark) 100%)', color: '#fff', fontWeight: 500 }}>
                {isEN ? 'Start a Conversation' : 'เริ่มคุยกับเรา'}
                <i className="ti ti-arrow-right" style={{ fontSize: 14 }} aria-hidden="true" />
              </Link>
              <a href="mailto:wu@haliviq.com" className="text-sm transition-colors" style={{ color: '#fff', fontWeight: 400 }}>wu@haliviq.com</a>
            </div>
          </div>
        </section>
      </main>
      <Footer lang={lang} tr={tr} />
    </>
  )
}
