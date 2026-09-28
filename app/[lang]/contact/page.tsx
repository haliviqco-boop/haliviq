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
    { icon:'ti-mail', title:'Sales', value:'wu@haliviq.com', sub:'New projects & partnerships', href:'mailto:wu@haliviq.com' },
    { icon:'ti-headset', title:'Support', value:'info@haliviq.com', sub:'Existing clients & support', href:'mailto:info@haliviq.com' },
    { icon:'ti-brand-line', title:'LINE OA', value:'@haliviq', sub:'Fastest response', href:'https://line.me/R/ti/p/@haliviq' },
    { icon:'ti-map-pin', title:'Office', value:'Bangkok, Thailand', sub:'BTS Asok / Sukhumvit', href:'#' },
  ] : [
    { icon:'ti-mail', title:'ฝ่ายขาย', value:'wu@haliviq.com', sub:'โปรเจกต์ใหม่และพาร์ทเนอร์', href:'mailto:wu@haliviq.com' },
    { icon:'ti-headset', title:'ฝ่ายซัพพอร์ต', value:'info@haliviq.com', sub:'ลูกค้าเดิมและงานซัพพอร์ต', href:'mailto:info@haliviq.com' },
    { icon:'ti-brand-line', title:'LINE OA', value:'@haliviq', sub:'ตอบไวที่สุด', href:'https://line.me/R/ti/p/@haliviq' },
    { icon:'ti-map-pin', title:'ออฟฟิศ', value:'กรุงเทพฯ, ไทย', sub:'BTS อโศก / สุขุมวิท', href:'#' },
  ]

  return (
    <>
      <Navbar lang={lang} tr={tr} />
      <main>
        <section className="pt-[80px] bg-white">
          <div className="h-1 w-full" style={{ background:'linear-gradient(90deg,var(--purple),var(--purple-light),var(--lime))' }} />
          <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-20 lg:pt-28 pb-20">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
              <div>
                <p className="t-label mb-5">{isEN ? 'Get in Touch' : 'ติดต่อเรา'}</p>
                <h1 className="t-display text-[clamp(3rem,6vw,5.5rem)] text-[#0A0A0F] leading-none mb-8">
                  {isEN ? <>Let&apos;s build<br /><span style={{ background:'linear-gradient(135deg,var(--purple) 0%,var(--purple-light) 50%,var(--lime) 100%)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' }}>something great</span></> : <>มาสร้าง<br /><span style={{ background:'linear-gradient(135deg,var(--purple) 0%,var(--purple-light) 50%,var(--lime) 100%)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' }}>สิ่งที่ยิ่งใหญ่</span><br />ด้วยกัน</>}
                </h1>
                <p className="t-body text-lg leading-relaxed mb-12 max-w-md">
                  {isEN ? 'Tell us about your project. We will get back to you within 24 hours with initial thoughts and next steps.' : 'เล่าให้เราฟังเรื่องโปรเจกต์ของคุณ เราจะตอบกลับภายใน 24 ชั่วโมงพร้อมความคิดเห็นเบื้องต้นและขั้นตอนถัดไป'}
                </p>
                <div className="space-y-5 mb-12">
                  {channels.map(c => (
                    <a key={c.title} href={c.href} className="flex items-center gap-5 p-5 border border-[#E4E4EC] rounded-2xl hover:border-[var(--purple)]/30 hover:bg-[var(--purple-bg)] transition-all group">
                      <div className="w-12 h-12 rounded-xl bg-[var(--purple-bg)] flex items-center justify-center shrink-0 group-hover:bg-white transition-colors">
                        <i className={`ti ${c.icon}`} style={{ fontSize:22, color:'var(--purple)' }} aria-hidden="true" />
                      </div>
                      <div>
                        <p className="text-sm text-[#AAAABC] mb-0.5" style={{ fontWeight:400 }}>{c.title}</p>
                        <p className="text-[#0A0A0F]" style={{ fontWeight:500, fontSize:'1.25rem' }}>{c.value}</p>
                        <p className="text-sm text-[#AAAABC]" style={{ fontWeight:400 }}>{c.sub}</p>
                      </div>
                    </a>
                  ))}
                </div>
                <div className="flex items-center gap-3 flex-wrap">
                  {(isEN ? ['Free first consultation','NDA on request','Response within 24 hours'] : ['ปรึกษาครั้งแรกฟรี','มี NDA พร้อมให้ลงนาม','ตอบกลับภายใน 24 ชั่วโมง']).map(txt => (
                    <div key={txt} className="flex items-center gap-1.5">
                      <i className="ti ti-circle-check" style={{ fontSize:14, color:'var(--lime)' }} aria-hidden="true" />
                      <span className="text-sm text-[#6E6E88]" style={{ fontWeight:400 }}>{txt}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-[#F7F7FC] rounded-3xl p-8 lg:p-10">
                <h2 className="text-[#0A0A0F] mb-8" style={{ fontWeight:500, fontSize:'1.3rem' }}>{isEN ? 'Tell us about your project' : 'เล่าให้เราฟังเรื่องโปรเจกต์'}</h2>
                <div className="space-y-5">
                  {[
                    { label: isEN ? 'Name / Company' : 'ชื่อ / บริษัท', type:'text', placeholder: isEN ? 'John Smith / Acme Co.' : 'คุณสมชาย / บริษัท ABC' },
                    { label: 'Email', type:'email', placeholder:'hello@company.com' },
                    { label: isEN ? 'Phone (optional)' : 'เบอร์โทร (ถ้ามี)', type:'tel', placeholder:'+66 8X XXX XXXX' },
                  ].map(field => (
                    <div key={field.label}>
                      <label className="block text-xs text-[#6E6E88] mb-2" style={{ fontWeight:400 }}>{field.label}</label>
                      <input type={field.type} placeholder={field.placeholder}
                        className="w-full px-5 py-3.5 bg-white border border-[#E4E4EC] rounded-xl text-sm text-[#0A0A0F] placeholder:text-[#CCCCDA] outline-none focus:border-[var(--purple)] transition-colors"
                        style={{ fontWeight:400 }} />
                    </div>
                  ))}
                  <div>
                    <label className="block text-xs text-[#6E6E88] mb-2" style={{ fontWeight:400 }}>{isEN ? 'Project type' : 'ประเภทโปรเจกต์'}</label>
                    <div className="flex flex-wrap gap-2">
                      {(isEN ? ['Web App','Mobile App','Strategy','Design','AI/Data','Other'] : ['Web App','Mobile App','กลยุทธ์','ดีไซน์','AI/Data','อื่นๆ']).map(opt => (
                        <button key={opt} className="px-4 py-2 rounded-full text-xs border border-[#E4E4EC] bg-white text-[#6E6E88] hover:border-[var(--purple)] hover:text-[var(--purple)] transition-all" style={{ fontWeight:400 }}>{opt}</button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs text-[#6E6E88] mb-2" style={{ fontWeight:400 }}>{isEN ? 'Tell us more' : 'รายละเอียดเพิ่มเติม'}</label>
                    <textarea rows={4} placeholder={isEN ? 'What are you trying to build? What problem does it solve?' : 'อยากสร้างอะไร? แก้ปัญหาอะไร? มี Timeline หรือ Budget คร่าวๆ?'}
                      className="w-full px-5 py-3.5 bg-white border border-[#E4E4EC] rounded-xl text-sm text-[#0A0A0F] placeholder:text-[#CCCCDA] outline-none focus:border-[var(--purple)] transition-colors resize-none"
                      style={{ fontWeight:400 }} />
                  </div>
                  <button className="w-full btn-primary justify-center py-4" style={{ fontSize:'1rem' }}>
                    {isEN ? 'Send Message' : 'ส่งข้อความ'}
                    <i className="ti ti-arrow-right" style={{ fontSize:15 }} aria-hidden="true" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#F7F7FC] py-24">
          <div className="max-w-4xl mx-auto px-6 lg:px-10">
            <div className="text-center mb-16">
              <p className="t-label mb-5">{isEN ? 'FAQ' : 'คำถามที่พบบ่อย'}</p>
              <h2 className="t-display text-[clamp(2rem,4vw,3.5rem)] text-[#0A0A0F]">
                {isEN ? 'Common Questions' : 'คำถามที่พบบ่อย'}
              </h2>
            </div>
            <div className="space-y-4">
              {faqs.map(faq => (
                <div key={faq.q} className="bg-white border border-[#E4E4EC] rounded-2xl p-7">
                  <h3 className="text-[#0A0A0F] mb-3" style={{ fontWeight:500, fontSize:'1.3rem' }}>{faq.q}</h3>
                  <p className="t-body text-sm leading-relaxed">{faq.a}</p>
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
