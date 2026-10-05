import Navbar from '@/components/Navbar'
import { t, type Lang } from '@/lib/i18n'
import Footer from '@/components/Footer'

export async function generateStaticParams() {
  return [{ lang: 'th' }, { lang: 'en' }]
}

export default function Page({ params }: { params: { lang: Lang } }) {
  const lang = (params.lang === 'en' ? 'en' : 'th') as Lang
  const isEN = lang === 'en'
  const tr = t[lang] as any

  const faqs = isEN ? [
    { q: 'How much does a project cost?', a: 'Pricing depends on scope, complexity, and team size. Small projects start around THB 300,000. Enterprise projects are quoted per scope. Contact us for a free estimate.' },
    { q: 'How long does a project take?', a: 'A simple website takes 4-8 weeks. A full product takes 3-6 months. We always start with a Discovery phase to set realistic timelines.' },
    { q: 'Do you work with startups?', a: 'Yes. We work with funded startups, SMEs, and enterprises. What matters is that you have a clear goal and are ready to commit.' },
    { q: 'Do you handle maintenance after launch?', a: 'Yes. We offer maintenance packages covering bug fixes, updates, performance monitoring, and feature development.' },
    { q: 'Can you work with our existing team?', a: 'Absolutely. We can embed as an extension of your team, taking on specific roles or the entire product build.' },
  ] : [
    { q: 'ราคาเริ่มต้นเท่าไหร่?', a: 'ขึ้นอยู่กับขอบเขต ความซับซ้อน และขนาดทีม โปรเจกต์เล็กเริ่มต้นราว 300,000 บาท โปรเจกต์ Enterprise ประเมินตาม Scope ติดต่อเราเพื่อขอ Quote ฟรี' },
    { q: 'ใช้เวลานานแค่ไหน?', a: 'เว็บไซต์เรียบง่าย 4-8 สัปดาห์ ผลิตภัณฑ์เต็มรูปแบบ 3-6 เดือน เราเริ่มด้วย Discovery Phase เพื่อกำหนด Timeline ที่ชัดเจน' },
    { q: 'รับงาน Startup ไหม?', a: 'รับครับ เราทำงานกับ Startup ที่ได้รับ Funding แล้ว SME และองค์กร สิ่งที่สำคัญคือเป้าหมายชัดเจนและพร้อม Commit' },
    { q: 'ดูแลหลัง Launch ด้วยไหม?', a: 'ดูแลครับ มีแพ็กเกจ Maintenance ครอบคลุม Bug Fix, Update, Performance Monitoring และพัฒนา Feature เพิ่ม' },
    { q: 'ทำงานร่วมกับทีมที่มีอยู่ได้ไหม?', a: 'ได้เลย เราสามารถเป็น Extension ของทีมคุณ รับบทบาทเฉพาะส่วน หรือดูแลทั้ง Product ก็ได้' },
  ]

  const channels = isEN ? [
    { icon: 'ti-phone', title: 'Call', value: '+66 90 918 9009', sub: 'Direct line', href: 'tel:+66909189009' },
    { icon: 'ti-mail', title: 'Sales', value: 'wu@haliviq.com', sub: 'New projects & partnerships', href: 'mailto:wu@haliviq.com' },
    { icon: 'ti-headset', title: 'Support', value: 'info@haliviq.com', sub: 'Existing clients & support', href: 'mailto:info@haliviq.com' },
    { icon: 'ti-brand-whatsapp', title: 'WhatsApp', value: '+1 (206) 849 6901', sub: 'US team', href: 'https://wa.me/12068496901' },
    { icon: 'ti-brand-line', title: 'LINE OA', value: '@haliviq', sub: 'Fastest response', href: 'https://lin.ee/zyTrkx4' },
    { icon: 'ti-map-pin', title: 'Office — Thailand', value: '111 Sukhumvit Rd, Bang Chak,', sub: 'Phra Khanong, Bangkok 10260', href: '#' },
    { icon: 'ti-map-pin', title: 'Office — USA', value: '2025 Olympic Hwy N Ste 105,', sub: 'Shelton, WA', href: '#' },
  ] : [
    { icon: 'ti-phone', title: 'โทร', value: '+66 90 918 9009', sub: 'ติดต่อโดยตรง', href: 'tel:+66909189009' },
    { icon: 'ti-mail', title: 'ฝ่ายขาย', value: 'wu@haliviq.com', sub: 'โปรเจกต์ใหม่และพาร์ทเนอร์', href: 'mailto:wu@haliviq.com' },
    { icon: 'ti-headset', title: 'ฝ่ายซัพพอร์ต', value: 'info@haliviq.com', sub: 'ลูกค้าเดิมและงานซัพพอร์ต', href: 'mailto:info@haliviq.com' },
    { icon: 'ti-brand-whatsapp', title: 'WhatsApp', value: '+1 (206) 849 6901', sub: 'ทีมสหรัฐฯ', href: 'https://wa.me/12068496901' },
    { icon: 'ti-brand-line', title: 'LINE OA', value: '@haliviq', sub: 'ตอบไวที่สุด', href: 'https://lin.ee/zyTrkx4' },
    { icon: 'ti-map-pin', title: 'ออฟฟิศ — ไทย', value: '111 ถนนสุขุมวิท แขวงบางจาก,', sub: 'เขตพระโขนง กรุงเทพฯ 10260', href: '#' },
    { icon: 'ti-map-pin', title: 'ออฟฟิศ — สหรัฐฯ', value: '2025 Olympic Hwy N Ste 105,', sub: 'Shelton, WA', href: '#' },
  ]

  return (
    <>
      <Navbar lang={lang} tr={tr} />
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
          <div className="relative max-w-7xl mx-auto px-6 lg:px-10 pt-20 lg:pt-28 pb-20">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
              <div>
                <p className="t-label mb-5">{isEN ? 'Get in Touch' : 'ติดต่อเรา'}</p>
                <h1 className="t-display text-[clamp(3rem,6vw,5.5rem)] leading-relaxed mb-8" style={{ color: '#fff' }}>
                  {isEN
                    ? <>Let&apos;s build<br /><span style={{ background: 'linear-gradient(135deg,var(--purple) 0%,var(--purple-light) 50%,#53C3D7 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>something great</span></>
                    : <>มาสร้าง<br /><span style={{ background: 'linear-gradient(135deg,var(--purple) 0%,var(--purple-light) 50%,#53C3D7 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>สิ่งที่ยิ่งใหญ่ด้วยกัน</span></>}
                </h1>
                <p className="leading-relaxed mb-12" style={{ fontSize: '1.15rem', color: 'rgba(255,255,255,0.85)', fontWeight: 400, maxWidth: 460 }}>
                  {isEN ? 'Tell us about your project. We will get back to you within 24 hours with initial thoughts and next steps.' : 'เล่าให้เราฟังเรื่องโปรเจกต์ของคุณ เราจะตอบกลับภายใน 24 ชั่วโมงพร้อมความคิดเห็นเบื้องต้นและขั้นตอนถัดไป'}
                </p>
                <div className="space-y-4 mb-12">
                  {channels.map(c => (
                    <a key={c.title} href={c.href}
                      className="flex items-center gap-5 p-5 rounded-2xl transition-all group"
                      style={{ border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.03)' }}>
                      <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-colors"
                        style={{ background: 'rgba(123,110,246,0.15)' }}>
                        <i className={`ti ${c.icon}`} style={{ fontSize: 22, color: 'var(--purple-light)' }} aria-hidden="true" />
                      </div>
                      <div>
                        <p className="text-sm mb-0.5" style={{ fontWeight: 400, color: 'rgba(255,255,255,0.5)' }}>{c.title}</p>
                        <p style={{ fontWeight: 500, fontSize: '1.15rem', color: '#fff' }}>{c.value}</p>
                        <p className="text-sm" style={{ fontWeight: 400, color: 'rgba(255,255,255,0.5)' }}>{c.sub}</p>
                      </div>
                    </a>
                  ))}
                </div>
                <div className="flex items-center gap-3 flex-wrap">
                  {(isEN ? ['Free first consultation', 'NDA on request', 'Response within 24 hours'] : ['ปรึกษาครั้งแรกฟรี', 'มี NDA พร้อมให้ลงนาม', 'ตอบกลับภายใน 24 ชั่วโมง']).map(txt => (
                    <div key={txt} className="flex items-center gap-1.5">
                      <i className="ti ti-circle-check" style={{ fontSize: 14, color: 'var(--lime)' }} aria-hidden="true" />
                      <span className="text-sm" style={{ fontWeight: 400, color: 'rgba(255,255,255,0.6)' }}>{txt}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-3xl p-8 lg:p-10 lg:sticky lg:top-24" style={{ background: '#141329', border: '1px solid rgba(255,255,255,0.08)' }}>
                <h2 className="mb-8" style={{ fontWeight: 500, fontSize: '1.3rem', color: '#fff' }}>{isEN ? 'Tell us about your project' : 'เล่าให้เราฟังเรื่องโปรเจกต์'}</h2>
                <div className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs mb-2" style={{ fontWeight: 400, color: 'rgba(255,255,255,0.5)' }}>
                        {isEN ? 'Name' : 'ชื่อ'} <span style={{ color: '#F87171' }}>*</span>
                      </label>
                      <input type="text" placeholder={isEN ? 'Your name' : 'ชื่อของคุณ'} required
                        className="w-full px-5 py-3.5 rounded-xl text-sm outline-none transition-colors"
                        style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.12)', color: '#fff', fontWeight: 400 }} />
                    </div>
                    <div>
                      <label className="block text-xs mb-2" style={{ fontWeight: 400, color: 'rgba(255,255,255,0.5)' }}>
                        Email <span style={{ color: '#F87171' }}>*</span>
                      </label>
                      <input type="email" placeholder="your@email.com" required
                        className="w-full px-5 py-3.5 rounded-xl text-sm outline-none transition-colors"
                        style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.12)', color: '#fff', fontWeight: 400 }} />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs mb-2" style={{ fontWeight: 400, color: 'rgba(255,255,255,0.5)' }}>
                      {isEN ? 'Phone Number' : 'เบอร์โทรศัพท์'} <span style={{ color: 'rgba(255,255,255,0.4)' }}>({isEN ? 'Optional' : 'ไม่บังคับ'})</span>
                    </label>
                    <div className="relative">
                      <i className="ti ti-phone absolute" style={{ left: 18, top: '50%', transform: 'translateY(-50%)', fontSize: 16, color: 'rgba(255,255,255,0.4)' }} aria-hidden="true" />
                      <input type="tel" placeholder="+66 8X XXX XXXX"
                        className="w-full pl-11 pr-5 py-3.5 rounded-xl text-sm outline-none transition-colors"
                        style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.12)', color: '#fff', fontWeight: 400 }} />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs mb-2" style={{ fontWeight: 400, color: 'rgba(255,255,255,0.5)' }}>
                      {isEN ? 'Message' : 'ข้อความ'} <span style={{ color: '#F87171' }}>*</span>
                    </label>
                    <textarea rows={5} placeholder={isEN ? 'Tell us about your project...' : 'เล่าให้เราฟังเรื่องโปรเจกต์ของคุณ...'} required
                      className="w-full px-5 py-3.5 rounded-xl text-sm outline-none transition-colors resize-none"
                      style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.12)', color: '#fff', fontWeight: 400 }} />
                  </div>

                  <div>
                    <label className="block text-xs mb-2" style={{ fontWeight: 400, color: 'rgba(255,255,255,0.5)' }}>
                      {isEN ? 'What is your budget?' : 'งบประมาณของคุณ'} <span style={{ color: 'rgba(255,255,255,0.4)' }}>({isEN ? 'Optional' : 'ไม่บังคับ'})</span>
                    </label>
                    <div className="grid grid-cols-[auto_1fr] gap-3">
                      <select
                        className="px-4 py-3.5 rounded-xl text-sm outline-none appearance-none"
                        style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.12)', color: '#fff', fontWeight: 400 }}
                        defaultValue="THB"
                      >
                        <option value="THB" style={{ color: '#000' }}>THB (฿)</option>
                        <option value="USD" style={{ color: '#000' }}>USD ($)</option>
                      </select>
                      <select
                        className="w-full px-5 py-3.5 rounded-xl text-sm outline-none appearance-none"
                        style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.12)', color: 'rgba(255,255,255,0.6)', fontWeight: 400 }}
                        defaultValue=""
                      >
                        <option value="" style={{ color: '#000' }}>{isEN ? 'Select a range...' : 'เลือกช่วงงบประมาณ...'}</option>
                        {(isEN ? [
                          'Under ฿300,000',
                          '฿300,000 – ฿1,000,000',
                          '฿1,000,000 – ฿3,000,000',
                          '฿3,000,000 – ฿10,000,000',
                          '฿10,000,000+',
                        ] : [
                          'ต่ำกว่า ฿300,000',
                          '฿300,000 – ฿1,000,000',
                          '฿1,000,000 – ฿3,000,000',
                          '฿3,000,000 – ฿10,000,000',
                          '฿10,000,000+',
                        ]).map(opt => <option key={opt} value={opt} style={{ color: '#000' }}>{opt}</option>)}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs mb-2" style={{ fontWeight: 400, color: 'rgba(255,255,255,0.5)' }}>
                      {isEN ? 'How did you hear about Haliviq?' : 'คุณรู้จัก Haliviq จากช่องทางไหน?'} <span style={{ color: 'rgba(255,255,255,0.4)' }}>({isEN ? 'Optional' : 'ไม่บังคับ'})</span>
                    </label>
                    <select
                      className="w-full px-5 py-3.5 rounded-xl text-sm outline-none appearance-none"
                      style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.12)', color: 'rgba(255,255,255,0.6)', fontWeight: 400 }}
                      defaultValue=""
                    >
                      <option value="" style={{ color: '#000' }}>{isEN ? 'Please select...' : 'กรุณาเลือก...'}</option>
                      {(isEN ? [
                        'Google Search', 'LinkedIn', 'AI Chatbot', 'Referral / Word of mouth', 'Social Media (Facebook, X, etc.)', 'Event / Conference', 'News / Press', 'Other',
                      ] : [
                        'ค้นหาจาก Google', 'LinkedIn', 'AI Chatbot', 'คนรู้จักแนะนำ', 'โซเชียลมีเดีย (Facebook, X ฯลฯ)', 'งานอีเวนต์ / สัมมนา', 'ข่าว / สื่อ', 'อื่นๆ',
                      ]).map(opt => <option key={opt} value={opt} style={{ color: '#000' }}>{opt}</option>)}
                    </select>
                  </div>

                  <label className="flex items-start gap-3 p-4 rounded-xl cursor-pointer" style={{ border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.02)' }}>
                    <input type="checkbox" defaultChecked
                      className="mt-0.5 shrink-0"
                      style={{ width: 18, height: 18, accentColor: 'var(--purple)' }} />
                    <span>
                      <span className="block text-sm mb-1" style={{ fontWeight: 500, color: '#fff' }}>{isEN ? 'Subscribe to our newsletter' : 'สมัครรับข่าวสารจากเรา'}</span>
                      <span className="block text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)', fontWeight: 400 }}>
                        {isEN ? 'Get the latest insights, articles, and updates about digital transformation and technology trends.' : 'รับข้อมูลเชิงลึก บทความ และอัปเดตล่าสุดเรื่อง Digital Transformation และเทคโนโลยี'}
                      </span>
                    </span>
                  </label>

                  <button className="w-full justify-center py-4 rounded-full inline-flex items-center gap-2 transition-transform hover:scale-[1.02]"
                    style={{ fontSize: '1rem', background: 'linear-gradient(135deg, var(--purple) 0%, var(--purple-dark) 100%)', color: '#fff', fontWeight: 500, boxShadow: '0 8px 28px rgba(123,110,246,0.35)' }}>
                    {isEN ? 'Send Message' : 'ส่งข้อความ'}
                    <i className="ti ti-arrow-right" style={{ fontSize: 15 }} aria-hidden="true" />
                  </button>

                  <p className="text-center text-xs" style={{ color: 'rgba(255,255,255,0.4)', fontWeight: 400 }}>
                    {isEN ? (
                      <>By submitting this form, you agree to our <a href={`/${lang}/privacy`} className="hover:text-white transition-colors" style={{ color: 'var(--lime)', textDecoration: 'underline' }}>Privacy Policy</a>.</>
                    ) : (
                      <>การส่งแบบฟอร์มนี้ถือว่าคุณยอมรับ<a href={`/${lang}/privacy`} className="hover:text-white transition-colors" style={{ color: 'var(--lime)', textDecoration: 'underline' }}>นโยบายความเป็นส่วนตัว</a>ของเรา</>
                    )}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24" style={{ background: '#0B0918' }}>
          <div className="max-w-4xl mx-auto px-6 lg:px-10">
            <div className="text-center mb-16">
              <p className="t-label mb-5">{isEN ? 'FAQ' : 'คำถามที่พบบ่อย'}</p>
              <h2 className="t-display text-[clamp(2rem,4vw,3.5rem)]" style={{ color: '#fff' }}>
                {isEN ? 'Common Questions' : 'คำถามที่พบบ่อย'}
              </h2>
            </div>
            <div className="space-y-4">
              {faqs.map(faq => (
                <div key={faq.q} className="rounded-2xl p-7" style={{ background: '#141329', border: '1px solid rgba(255,255,255,0.08)' }}>
                  <h3 className="mb-3" style={{ fontWeight: 500, fontSize: '1.3rem', color: '#fff' }}>{faq.q}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.75)' }}>{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer lang={lang} tr={tr} />
    </>
  )
}
