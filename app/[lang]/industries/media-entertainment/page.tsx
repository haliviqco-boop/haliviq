import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { t, type Lang } from '@/lib/i18n'

export async function generateStaticParams() {
  return [{ lang: 'th' }, { lang: 'en' }]
}

export default function Page({ params }: { params: { lang: Lang } }) {
  const lang = params.lang
  const isEN = lang === 'en'
  const prefix = `/${lang}`
  const tr = t[lang] as any

  const badge = isEN ? 'Industry / Media & Entertainment' : 'อุตสาหกรรม / สื่อและบันเทิง'
  const heroSubhead = isEN
    ? 'Digital platforms for content creation and distribution.'
    : 'แพลตฟอร์มสำหรับสร้างและเผยแพร่คอนเทนต์'

  const challenges = isEN ? [
    { icon: 'ti-server-2', title: 'Streaming Infrastructure & Scaling Costs', desc: 'Delivering smooth, low-latency video to millions of concurrent viewers requires elastic transcoding, CDN, and storage infrastructure that can balloon in cost as audiences grow.' },
    { icon: 'ti-users', title: 'Audience-Retention Pressure', desc: 'With countless platforms competing for the same attention, keeping viewers engaged and subscribed requires constant investment in content discovery and personalization.' },
    { icon: 'ti-shield-lock', title: 'Content-Rights & DRM Complexity', desc: 'Licensing content across territories and devices while enforcing digital rights management and anti-piracy controls adds significant technical and legal overhead.' },
    { icon: 'ti-coin', title: 'Monetization Beyond Subscriptions', desc: 'Subscription fatigue is pushing platforms toward ad-supported tiers, pay-per-view, and creator payouts, all of which demand new billing and analytics infrastructure.' },
  ] : [
    { icon: 'ti-server-2', title: 'ระบบ Streaming และต้นทุนเมื่อผู้ชมเพิ่ม', desc: 'การส่งวิดีโอคุณภาพสูงแบบหน่วงน้อยให้ผู้ชมหลายล้านคนพร้อมกัน ต้องมีระบบ Transcoding, CDN และ Storage ที่ยืดหยุ่น และต้นทุนอาจพุ่งสูงเมื่อผู้ชมเพิ่มขึ้น' },
    { icon: 'ti-users', title: 'แรงกดดันในการรักษาผู้ชม', desc: 'เมื่อมีแพลตฟอร์มมากมายแย่งความสนใจผู้ชม การทำให้ผู้ชมอยู่ต่อและสมัครสมาชิกต่อเนื่องต้องลงทุนกับระบบแนะนำคอนเทนต์และการปรับให้ตรงใจผู้ชมอยู่เสมอ' },
    { icon: 'ti-shield-lock', title: 'ความซับซ้อนของลิขสิทธิ์คอนเทนต์และ DRM', desc: 'การขอลิขสิทธิ์คอนเทนต์หลายภูมิภาคและหลายอุปกรณ์ พร้อมบังคับใช้ DRM และมาตรการกันละเมิดลิขสิทธิ์ เป็นภาระทั้งด้านเทคนิคและกฎหมายอย่างมาก' },
    { icon: 'ti-coin', title: 'หารายได้นอกเหนือจากค่าสมาชิก', desc: 'ผู้ใช้เริ่มเบื่อการจ่ายค่าสมาชิก แพลตฟอร์มจึงหันไปใช้แพ็กเกจที่มีโฆษณา Pay-per-view และการจ่ายเงินให้ Creator ซึ่งต้องมีระบบ Billing และ Analytics แบบใหม่' },
  ]

  const metrics = [
    { value: '$332B', label: isEN ? 'Global Streaming/OTT Market Size by 2030' : 'ขนาดตลาด Streaming/OTT ทั่วโลกภายในปี 2030', source: 'Grand View Research OTT Market Report, 2024' },
    { value: '41%', label: isEN ? 'Average Annual Subscriber Churn Rate' : 'อัตราสมาชิกยกเลิกเฉลี่ยต่อปี', source: 'Deloitte Digital Media Trends, 2024' },
    { value: '22%', label: isEN ? 'Ad-Revenue Growth from Targeted, Programmatic Ads' : 'การเติบโตของรายได้โฆษณาแบบเจาะกลุ่มและ Programmatic', source: 'PwC Global Entertainment & Media Outlook, 2024' },
  ]

  const capabilities = isEN ? [
    { icon: 'ti-device-tv', title: 'Streaming & OTT Platforms', desc: 'Scalable video-on-demand and live-streaming platforms with adaptive bitrate playback, multi-device support, and resilient CDN delivery.' },
    { icon: 'ti-folders', title: 'Content Management Systems', desc: 'Flexible CMS platforms for ingesting, tagging, and publishing video, audio, and editorial content across web, mobile, and connected-TV apps.' },
    { icon: 'ti-chart-bar', title: 'Audience Analytics Dashboards', desc: 'Real-time viewership and engagement dashboards that surface watch-time, drop-off points, and cohort trends to guide content decisions.' },
    { icon: 'ti-ticket', title: 'Ticketing & Event Platforms', desc: 'End-to-end ticketing systems for live events and virtual screenings, with seat mapping, dynamic pricing, and fraud-resistant checkout.' },
    { icon: 'ti-coin', title: 'Creator-Monetization Tools', desc: 'Payout, tipping, and subscription infrastructure that lets creators earn directly from their audience with transparent revenue splits.' },
    { icon: 'ti-sparkles', title: 'Recommendation Engines', desc: 'AI-driven content-recommendation systems that personalize discovery, increase watch-time, and reduce subscriber churn.' },
  ] : [
    { icon: 'ti-device-tv', title: 'Streaming & OTT Platforms', desc: 'แพลตฟอร์ม Video-on-demand และ Live Streaming ที่ขยายได้ ปรับคุณภาพภาพตามความเร็วเน็ต รองรับหลายอุปกรณ์ และส่งข้อมูลผ่าน CDN ได้เสถียร' },
    { icon: 'ti-folders', title: 'Content Management Systems', desc: 'ระบบ CMS ยืดหยุ่น สำหรับนำเข้า ติดแท็ก และเผยแพร่วิดีโอ เสียง และบทความ ทั้งบนเว็บ มือถือ และแอป Connected-TV' },
    { icon: 'ti-chart-bar', title: 'Audience Analytics Dashboards', desc: 'Dashboard วิเคราะห์ผู้ชมแบบเรียลไทม์ แสดงเวลารับชม จุดที่ผู้ชมเลิกดู และแนวโน้มของกลุ่มผู้ชม เพื่อช่วยตัดสินใจเรื่องคอนเทนต์' },
    { icon: 'ti-ticket', title: 'Ticketing & Event Platforms', desc: 'ระบบขายบัตรครบวงจรสำหรับอีเวนต์สดและการฉายออนไลน์ มีผังที่นั่ง ราคาปรับตามช่วง และ Checkout ที่ป้องกันการทุจริต' },
    { icon: 'ti-coin', title: 'Creator-Monetization Tools', desc: 'ระบบจ่ายเงิน ทิป และสมาชิก ให้ Creator หารายได้จากผู้ชมโดยตรง พร้อมแบ่งรายได้อย่างโปร่งใส' },
    { icon: 'ti-sparkles', title: 'Recommendation Engines', desc: 'ระบบแนะนำคอนเทนต์ด้วย AI ให้ผู้ชมเจอเนื้อหาที่ตรงใจ ดูนานขึ้น และลดการยกเลิกสมาชิก' },
  ]

  const techStack = ['React', 'Next.js', 'Node.js', 'WebRTC', 'HLS/DASH', 'AWS Media Services', 'Redis', 'PostgreSQL', 'Machine Learning', 'GraphQL', 'Stripe', 'CDN', 'Elasticsearch']

  const useCases = isEN ? [
    { no: '01', title: 'Streaming/OTT Platform', desc: 'Full video-on-demand and live-streaming service with adaptive bitrate delivery, multi-device apps, and subscription and ad-tier billing.' },
    { no: '02', title: 'Creator-Monetization App', desc: 'Platform enabling creators to publish content, sell subscriptions, and receive tips and payouts directly from their audience.' },
    { no: '03', title: 'Audience-Analytics Dashboard', desc: 'Real-time analytics suite tracking watch-time, engagement, and churn signals to help content and marketing teams make data-driven decisions.' },
  ] : [
    { no: '01', title: 'Streaming/OTT Platform', desc: 'บริการ Video-on-demand และ Live Streaming ครบชุด ปรับคุณภาพภาพตามความเร็วเน็ต มีแอปรองรับหลายอุปกรณ์ และ Billing ทั้งแบบสมาชิกและแบบมีโฆษณา' },
    { no: '02', title: 'Creator-Monetization App', desc: 'แพลตฟอร์มให้ Creator เผยแพร่คอนเทนต์ ขายสมาชิก และรับทิป พร้อมรับเงินตรงจากผู้ชม' },
    { no: '03', title: 'Audience-Analytics Dashboard', desc: 'ชุด Analytics แบบเรียลไทม์ ติดตามเวลารับชม การมีส่วนร่วม และสัญญาณที่ผู้ชมจะยกเลิก ช่วยทีมคอนเทนต์และการตลาดตัดสินใจจากข้อมูล' },
  ]

  const heroVisual = (
    <div className="relative pb-10 pr-6">
      <div className="rounded-2xl overflow-hidden" style={{ background: '#141329', border: '1px solid rgba(123,110,246,0.35)' }}>
        <div className="flex items-center justify-between px-5 py-3.5" style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
          <span className="text-xs tracking-widest uppercase" style={{ color: 'rgba(255,255,255,0.85)', fontFamily: 'monospace' }}>{isEN ? 'Studio / Stream' : 'Studio / Stream'}</span>
          <div className="flex gap-1">
            <span className="w-3 h-[2px] rounded-full" style={{ background: 'rgba(255,255,255,0.3)' }} />
            <span className="w-3 h-[2px] rounded-full" style={{ background: 'rgba(255,255,255,0.3)' }} />
          </div>
        </div>
        <div className="p-5">
          <div className="aspect-[16/9] rounded-xl mb-4 flex items-center justify-center relative overflow-hidden" style={{ background: 'linear-gradient(135deg, rgba(123,110,246,0.18), rgba(83,195,215,0.1))' }}>
            <svg width="130" height="70" viewBox="0 0 130 70" fill="none" style={{ animation: 'iconFloat 3s ease-in-out infinite' }}>
              <rect x="10" y="10" width="110" height="50" rx="8" stroke="var(--purple-light)" strokeWidth="2" fill="rgba(123,110,246,0.12)" />
              <path d="M55 25 L80 35 L55 45 Z" fill="var(--lime)" />
            </svg>
            <span
              className="absolute top-3 left-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] tracking-widest uppercase"
              style={{ background: 'rgba(83,195,215,0.14)', color: 'var(--lime)' }}
            >
              <span className="w-1.5 h-1.5 rounded-full inline-block" style={{ background: 'var(--lime)', animation: 'blinkDot 1.6s ease-in-out infinite' }} />
              {isEN ? 'Live' : 'ถ่ายทอดสด'}
            </span>
          </div>
          <p className="mb-1" style={{ color: '#fff', fontWeight: 500, fontSize: '1.05rem' }}>{isEN ? 'Season Finale Premiere' : 'รอบปฐมทัศน์ตอนจบซีซัน'}</p>
          <p className="text-xs mb-3" style={{ color: 'rgba(255,255,255,0.5)' }}>{isEN ? '128K watching now' : 'มีผู้ชม 128K คนขณะนี้'}</p>
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full" style={{ background: 'var(--lime)' }} />
            <span className="w-2.5 h-2.5 rounded-full" style={{ background: 'rgba(255,255,255,0.3)' }} />
            <span className="w-2.5 h-2.5 rounded-full" style={{ background: 'var(--purple-light)' }} />
          </div>
        </div>
      </div>

      <div
        className="absolute -bottom-2 -right-2 w-[180px] rounded-2xl p-4"
        style={{ background: '#1B1A33', border: '1px solid rgba(255,255,255,0.1)', boxShadow: '0 20px 50px -10px rgba(0,0,0,0.6)', animation: 'badgeFloat 3.4s ease-in-out infinite' }}
      >
        <div className="flex items-center justify-between mb-2.5">
          <span className="text-[10px] tracking-widest uppercase" style={{ color: 'rgba(255,255,255,0.85)' }}>{isEN ? 'Viewers' : 'ผู้ชม'}</span>
          <i className="ti ti-broadcast" style={{ fontSize: 14, color: 'var(--lime)' }} aria-hidden="true" />
        </div>
        <div className="w-9 h-9 rounded-lg flex items-center justify-center mb-2" style={{ background: 'rgba(123,110,246,0.15)' }}>
          <i className="ti ti-device-tv" style={{ fontSize: 16, color: 'var(--purple-light)' }} aria-hidden="true" />
        </div>
        <p className="text-xs mb-3" style={{ color: 'rgba(255,255,255,0.5)' }}>{isEN ? '+12% vs last week' : '+12% เทียบสัปดาห์ก่อน'}</p>
        <div
          className="rounded-lg text-center py-1.5 text-xs"
          style={{ background: 'linear-gradient(90deg, var(--purple), var(--purple-light))', color: '#fff' }}
        >
          {isEN ? 'Watch Now →' : 'ชมเลย →'}
        </div>
      </div>
    </div>
  )

  return (
    <>
      <Navbar lang={lang} tr={tr} transparent />
      <main>

        {/* Hero */}
        <section className="relative overflow-hidden pt-[80px]" style={{ background: '#08070F' }}>
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.35]"
            style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.14) 1px, transparent 1px)', backgroundSize: '22px 22px' }}
          />
          <div
            className="absolute -top-40 -left-32 w-[560px] h-[560px] rounded-full pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgba(123,110,246,0.28) 0%, transparent 70%)', filter: 'blur(20px)' }}
          />
          <div className="relative max-w-7xl mx-auto px-4 lg:px-10 py-24 lg:py-32">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 text-xs tracking-widest uppercase" style={{ background: 'rgba(123,110,246,0.15)', color: 'var(--purple-light)' }}>
                  <span className="w-1.5 h-1.5 rounded-full inline-block" style={{ background: 'var(--lime)', animation: 'blinkDot 1.6s ease-in-out infinite' }} />
                  {badge}
                </div>
                <h1 className="t-display mb-6 leading-relaxed" style={{ fontSize: 'clamp(2.8rem,6vw,5.5rem)', background: 'linear-gradient(135deg, var(--purple-light) 0%, #53C3D7 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                  {isEN ? 'Media &' : 'สื่อและ'}<br />{isEN ? 'Entertainment' : 'บันเทิง'}
                </h1>
                <p className="leading-relaxed mb-10" style={{ fontSize: '1.15rem', color: 'rgba(255,255,255,0.85)', fontWeight: 400, maxWidth: 560 }}>
                  {heroSubhead}
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href={`${prefix}/work`}
                    className="inline-flex items-center gap-2 rounded-full transition-transform hover:scale-[1.03]"
                    style={{ fontSize: '1rem', padding: '14px 32px', background: 'linear-gradient(135deg, var(--purple) 0%, var(--purple-dark) 100%)', color: '#fff', fontWeight: 500, boxShadow: '0 8px 28px rgba(123,110,246,0.35)' }}
                  >
                    {isEN ? 'View Case Studies' : 'ดูผลงานของเรา'}
                    <svg width="15" height="15" viewBox="0 0 14 14" fill="none"><path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </Link>
                  <Link href={`${prefix}/contact`} className="inline-flex items-center gap-2 rounded-full border transition-colors" style={{ fontSize: '1rem', padding: '14px 32px', borderColor: 'rgba(255,255,255,0.2)', color: '#fff', fontWeight: 400 }}>
                    {isEN ? 'Free Consultation' : 'ปรึกษาฟรี'}
                  </Link>
                </div>
              </div>
              <div className="relative">
                {heroVisual}
              </div>
            </div>
          </div>
        </section>

        {/* Intro */}
        <section className="relative overflow-hidden" style={{ background: '#08070F' }}>
          <div className="relative max-w-7xl mx-auto px-4 lg:px-10 pb-20 lg:pb-28">
            <div className="rounded-2xl p-10 lg:p-14" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}>
              <div className="w-12 h-[3px] rounded-full mb-8" style={{ background: 'linear-gradient(90deg, var(--purple-light), var(--lime))' }} />
              <p className="leading-relaxed" style={{ color: 'rgba(255,255,255,0.85)', fontSize: 'clamp(1.05rem,1.6vw,1.35rem)', fontWeight: 400, maxWidth: 900 }}>
                {isEN
                  ? 'We help media and entertainment companies build streaming and OTT platforms, content management systems, audience analytics dashboards, and creator-monetization tools that turn viewers into loyal, paying audiences. Our solutions scale reliably through viral spikes and live events, combining resilient streaming infrastructure with the personalization and analytics that keep audiences coming back.'
                  : 'เราช่วยบริษัทสื่อและบันเทิงสร้างแพลตฟอร์ม Streaming และ OTT ระบบจัดการคอนเทนต์ Dashboard วิเคราะห์ผู้ชม และเครื่องมือหารายได้ให้ Creator เพื่อให้ผู้ชมกลายเป็นแฟนประจำที่ยอมจ่าย ระบบของเรารองรับได้เสถียรแม้ช่วงคอนเทนต์ไวรัลหรืออีเวนต์สด เราผสมโครงสร้าง Streaming ที่แข็งแรงกับระบบแนะนำและ Analytics ที่ทำให้ผู้ชมกลับมาดูซ้ำ'}
              </p>
            </div>
          </div>
        </section>

        {/* Key Challenges */}
        <section className="relative overflow-hidden" style={{ background: '#050308' }}>
          <div className="relative max-w-7xl mx-auto px-4 lg:px-10 py-20 lg:py-28">
            <p className="mb-5 text-xs tracking-widest uppercase" style={{ color: 'var(--lime)', fontWeight: 600 }}>
              {isEN ? 'Challenges' : 'ความท้าทาย'}
            </p>
            <h2 className="t-display mb-4" style={{ color: '#fff', fontSize: 'clamp(2.25rem,4.5vw,3.5rem)' }}>
              {isEN ? 'Key Challenges' : 'ความท้าทายหลัก'}
            </h2>
            <p className="mb-14" style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1.2rem', fontWeight: 400, maxWidth: 640 }}>
              {isEN
                ? 'Understanding the critical obstacles that drive digital transformation in this industry.'
                : 'ปัญหาหลักที่ธุรกิจในอุตสาหกรรมนี้ต้องเจอ'}
            </p>
            <div className="grid sm:grid-cols-2 gap-5">
              {challenges.map((c) => (
                <div key={c.title} className="p-8 rounded-2xl" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}>
                  <div className="flex items-start gap-5">
                    <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0" style={{ background: 'rgba(123,110,246,0.15)' }}>
                      <i className={`ti ${c.icon}`} style={{ fontSize: 20, color: 'var(--purple-light)' }} aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="mb-2" style={{ color: '#fff', fontWeight: 600, fontSize: '1.35rem' }}>{c.title}</h3>
                      <p className="leading-relaxed" style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1.1rem', fontWeight: 400 }}>{c.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industry at a Glance */}
        <div className="border-y" style={{ borderColor: 'rgba(255,255,255,0.08)', background: '#0C0A17' }}>
          <div className="max-w-7xl mx-auto px-4 lg:px-10">
            <div className="grid sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x" style={{ borderColor: 'rgba(255,255,255,0.08)' } as any}>
              {metrics.map((m) => (
                <div key={m.label} className="px-4 lg:px-10 py-10">
                  <p className="mb-3 text-xs tracking-widest uppercase" style={{ color: 'var(--lime)', fontWeight: 600 }}>
                    {isEN ? 'Industry at a Glance' : 'ภาพรวมอุตสาหกรรม'}
                  </p>
                  <div className="mb-3 leading-none" style={{ fontFamily: 'var(--font-main)', fontWeight: 400, fontSize: 'clamp(2.2rem,4vw,3.2rem)', background: 'linear-gradient(135deg,var(--purple-light),var(--lime))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                    {m.value}
                  </div>
                  <p className="mb-3 leading-snug" style={{ color: '#fff', fontWeight: 500, fontSize: '1.05rem' }}>{m.label}</p>
                  <p className="text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>{m.source}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Our Capabilities */}
        <section className="relative overflow-hidden" style={{ background: '#08070F' }}>
          <div className="relative max-w-7xl mx-auto px-4 lg:px-10 py-20 lg:py-28">
            <p className="mb-5 text-xs tracking-widest uppercase" style={{ color: 'var(--lime)', fontWeight: 600 }}>
              {isEN ? 'Capabilities' : 'ความสามารถ'}
            </p>
            <h2 className="t-display mb-4" style={{ color: '#fff', fontSize: 'clamp(2.25rem,4.5vw,3.5rem)' }}>
              {isEN ? 'Our Capabilities' : 'ความสามารถของเรา'}
            </h2>
            <p className="mb-14" style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1.2rem', fontWeight: 400, maxWidth: 640 }}>
              {isEN ? "Proven solutions we build to address your industry's most pressing needs." : 'ระบบที่เราสร้างและใช้งานได้จริง เพื่อแก้ปัญหาสำคัญของอุตสาหกรรมคุณ'}
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {capabilities.map((c) => (
                <div key={c.title} className="p-8 rounded-2xl" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}>
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6" style={{ background: 'rgba(83,195,215,0.12)' }}>
                    <i className={`ti ${c.icon}`} style={{ fontSize: 24, color: 'var(--lime)' }} aria-hidden="true" />
                  </div>
                  <h3 className="mb-3" style={{ color: '#fff', fontWeight: 600, fontSize: '1.3rem' }}>{c.title}</h3>
                  <p className="leading-relaxed" style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1.1rem', fontWeight: 400 }}>{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technology We Use */}
        <section className="relative overflow-hidden" style={{ background: '#050308' }}>
          <div className="relative max-w-7xl mx-auto px-4 lg:px-10 py-20 lg:py-28">
            <p className="mb-5 text-xs tracking-widest uppercase" style={{ color: 'var(--lime)', fontWeight: 600 }}>
              {isEN ? 'Tech Stack' : 'เทคโนโลยีที่ใช้'}
            </p>
            <h2 className="t-display mb-4" style={{ color: '#fff', fontSize: 'clamp(2.25rem,4.5vw,3.5rem)' }}>
              {isEN ? 'Technologies We Use' : 'เทคโนโลยีที่เราใช้'}
            </h2>
            <p className="mb-12" style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1.2rem', fontWeight: 400, maxWidth: 640 }}>
              {isEN
                ? 'Industry-proven tools and frameworks we leverage to build robust solutions.'
                : 'เครื่องมือและ Framework ที่เราเลือกใช้ เพราะมั่นคงและเชื่อถือได้'}
            </p>
            <div className="flex flex-wrap gap-3">
              {techStack.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-base"
                  style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.85)', fontWeight: 400 }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="relative overflow-hidden" style={{ background: '#08070F' }}>
          <div className="relative max-w-7xl mx-auto px-4 lg:px-10 py-20 lg:py-28">
            <p className="mb-5 text-xs tracking-widest uppercase" style={{ color: 'var(--lime)', fontWeight: 600 }}>
              {isEN ? 'Use Cases' : 'ตัวอย่างการใช้งาน'}
            </p>
            <h2 className="t-display mb-4" style={{ color: '#fff', fontSize: 'clamp(2.25rem,4.5vw,3.5rem)' }}>
              {isEN ? 'Use Cases' : 'ตัวอย่างการใช้งาน'}
            </h2>
            <p className="mb-14" style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1.2rem', fontWeight: 400, maxWidth: 640 }}>
              {isEN ? 'Concrete project types we deliver for clients in this industry.' : 'ตัวอย่างงานที่เราทำให้ลูกค้าในอุตสาหกรรมนี้'}
            </p>
            <div className="grid lg:grid-cols-3 gap-6">
              {useCases.map((u) => (
                <div key={u.no} className="p-8 rounded-2xl" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}>
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center mb-6 font-mono"
                    style={{
                      background: 'linear-gradient(135deg, var(--purple) 0%, var(--purple-dark) 100%)',
                      boxShadow: '0 8px 24px -8px rgba(123,110,246,0.6)',
                      color: '#fff',
                      fontSize: '1.05rem',
                      fontWeight: 600,
                    }}
                  >
                    {u.no}
                  </div>
                  <h3 className="mb-3" style={{ color: '#fff', fontWeight: 600, fontSize: '1.3rem' }}>{u.title}</h3>
                  <p className="leading-relaxed" style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1.1rem', fontWeight: 400 }}>{u.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="relative overflow-hidden" style={{ background: '#050308' }}>
          <div
            className="absolute inset-0 pointer-events-none opacity-40"
            style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), radial-gradient(rgba(255,255,255,0.3) 1px, transparent 1px)', backgroundSize: '180px 180px, 260px 260px', backgroundPosition: '0 0, 90px 130px' }}
          />
          <div
            className="absolute left-0 right-0 bottom-0 pointer-events-none"
            style={{ height: 260, background: 'radial-gradient(ellipse 70% 100% at 50% 100%, rgba(123,110,246,0.35) 0%, rgba(83,195,215,0.08) 45%, transparent 75%)' }}
          />
          <div className="relative max-w-7xl mx-auto px-4 lg:px-10 py-28 lg:py-36">
            <h2 className="t-display mb-5 leading-tight" style={{ background: 'linear-gradient(135deg, #fff 0%, #53C3D7 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', fontSize: 'clamp(2.5rem,5.5vw,4.2rem)' }}>
              {isEN ? 'Have a project in mind?' : 'มีโปรเจกต์ในใจแล้วใช่ไหม?'}
            </h2>
            <p className="mb-10" style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1.25rem', fontWeight: 400 }}>
              {isEN ? "We'd love to hear what you're building." : 'เล่าให้เราฟังได้ครับว่าคุณกำลังทำอะไรอยู่'}
            </p>
            <div className="flex flex-wrap items-center gap-6">
              <Link
                href={`${prefix}/contact`}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-base font-medium transition-opacity hover:opacity-90"
                style={{ background: 'linear-gradient(135deg, var(--purple) 0%, var(--purple-dark) 100%)', color: '#fff', fontWeight: 500 }}
              >
                {isEN ? 'Talk to Us' : 'คุยกับเรา'}
                <i className="ti ti-arrow-right" style={{ fontSize: 17 }} aria-hidden="true" />
              </Link>
              <a href="mailto:wu@haliviq.com" style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1.1rem', fontWeight: 400 }}>
                wu@haliviq.com
              </a>
            </div>
          </div>
        </section>

      </main>
      <Footer lang={lang} tr={tr} />
    </>
  )
}
