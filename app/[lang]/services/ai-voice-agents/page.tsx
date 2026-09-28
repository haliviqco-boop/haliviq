import Link from 'next/link'
import ServiceLayout from '@/components/service/ServiceLayout'
import { type Lang } from '@/lib/i18n'

const BRAND_LOGOS: Record<string, { hex: string; path: string }> = {
  anthropic: { hex: '#FFFFFF', path: 'M17.3041 3.541h-3.6718l6.696 16.918H24Zm-10.6082 0L0 20.459h3.7442l1.3693-3.5527h7.0052l1.3693 3.5528h3.7442L10.5363 3.5409Zm-.3712 10.2232 2.2914-5.9456 2.2914 5.9456Z' },
  nodedotjs: { hex: '#5FA04E', path: 'M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383 c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076 c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0 L3.075,6.68C2.99,6.729,2.936,6.825,2.936,6.921v10.15c0,0.097,0.054,0.189,0.139,0.235l2.409,1.392 c1.307,0.654,2.108-0.116,2.108-0.89V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v10.021 c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,18.675c-0.57-0.329-0.922-0.945-0.922-1.604V6.921 c0-0.659,0.353-1.275,0.922-1.603l8.795-5.082c0.557-0.315,1.296-0.315,1.848,0l8.794,5.082c0.57,0.329,0.924,0.944,0.924,1.603 v10.15c0,0.659-0.354,1.273-0.924,1.604l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z M19.099,13.993 c0-1.9-1.284-2.406-3.987-2.763c-2.731-0.361-3.009-0.548-3.009-1.187c0-0.528,0.235-1.233,2.258-1.233 c1.807,0,2.473,0.389,2.747,1.607c0.024,0.115,0.129,0.199,0.247,0.199h1.141c0.071,0,0.138-0.031,0.186-0.081 c0.048-0.054,0.074-0.123,0.067-0.196c-0.177-2.098-1.571-3.076-4.388-3.076c-2.508,0-4.004,1.058-4.004,2.833 c0,1.925,1.488,2.457,3.895,2.695c2.88,0.282,3.103,0.703,3.103,1.269c0,0.983-0.789,1.402-2.642,1.402 c-2.327,0-2.839-0.584-3.011-1.742c-0.02-0.124-0.126-0.215-0.253-0.215h-1.137c-0.141,0-0.254,0.112-0.254,0.253 c0,1.482,0.806,3.248,4.655,3.248C17.501,17.007,19.099,15.91,19.099,13.993z' },
  python: { hex: '#3776AB', path: 'M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09zm13.09 3.95l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08z' },
}

function BrandLogo({ name, size = 15 }: { name: string; size?: number }) {
  const logo = BRAND_LOGOS[name]
  if (!logo) return null
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <path d={logo.path} fill={logo.hex} />
    </svg>
  )
}

export async function generateStaticParams() {
  return [{ lang: 'th' }, { lang: 'en' }]
}

export default function Page({ params }: { params: { lang: Lang } }) {
  const isEN = params.lang === 'en'
  const prefix = `/${params.lang}`

  const badge    = isEN ? 'AI / Voice Agents'  : 'AI / Voice Agents'
  const title    = isEN ? 'AI That Talks'  : 'AI ที่พูดคุยได้จริง'
  const subtitle = isEN ? 'Like a Human, Not a Menu'    : 'เหมือนคุยกับคนจริง ไม่ใช่กด Menu'
  const heroDesc = isEN ? 'Natural, low-latency voice agents that handle real phone calls — full telephony integration, 25+ languages including Thai, and deep integration into your existing systems.'  : 'Voice Agent ที่พูดคุยเป็นธรรมชาติ Latency ต่ำ รับสายโทรศัพท์จริงได้ พร้อม Telephony Integration เต็มรูปแบบ รองรับกว่า 25 ภาษารวมถึงภาษาไทย และเชื่อมต่อลึกเข้ากับระบบที่คุณมีอยู่'
  const whyTitle = isEN ? 'Why voice is the interface customers still prefer'    : 'ทำไมเสียงยังเป็น Interface ที่ลูกค้าชอบที่สุด'
  const whyDesc  = isEN ? 'Phone calls remain the fastest way for customers to get answers and the hardest channel to scale with humans alone. AI voice agents close that gap without making callers feel like they are talking to a machine.'  : 'โทรศัพท์ยังเป็นช่องทางที่ลูกค้าได้คำตอบเร็วที่สุด แต่เป็นช่องทางที่ Scale ด้วยคนล้วนๆ ยากที่สุด AI Voice Agent ช่วยปิดช่องว่างนี้ โดยที่ผู้โทรไม่รู้สึกเหมือนคุยกับเครื่องจักร'
  const ctaTitle = isEN ? 'Ready to let AI answer the phone?'    : 'พร้อมให้ AI รับสายแทนคุณหรือยัง?'
  const ctaDesc  = isEN ? 'Start with a working prototype on your real call flows, not a generic demo script.'   : 'เริ่มต้นด้วย Prototype ที่ใช้งานได้จริงบน Call Flow ของคุณ ไม่ใช่ Demo Script ทั่วไป'
  const overviewText = isEN
    ? 'We build production-grade AI voice agents that handle real phone calls end to end: full telephony integration over SIP and PSTN, natural low-latency conversation that does not feel like a bot, support for 25+ languages including Thai, and deep integration into the systems that power the actual answer — CRM, booking, order status, and internal APIs. The result is a voice agent that resolves calls, not one that reads a script and transfers everything hard to a human.'
    : 'เราสร้าง AI Voice Agent ระดับ Production ที่รับสายโทรศัพท์จริงได้ครบวงจร ตั้งแต่ Telephony Integration เต็มรูปแบบผ่าน SIP และ PSTN, การสนทนาที่เป็นธรรมชาติ Latency ต่ำ ไม่รู้สึกเหมือนคุยกับ Bot, รองรับกว่า 25 ภาษารวมถึงภาษาไทย และเชื่อมต่อลึกเข้ากับระบบที่ให้คำตอบจริง เช่น CRM, ระบบจอง, สถานะ Order และ API ภายใน ผลลัพธ์คือ Voice Agent ที่ปิดการโทรได้จริง ไม่ใช่แค่อ่าน Script แล้วโอนสายเรื่องยากทุกครั้ง'

  const heroBullets = isEN ? [
      'Full telephony integration over SIP and PSTN, ready for real call volume',
      'Natural, low-latency conversation with barge-in and interruption handling',
      '25+ languages including native-quality Thai',
      'Deep integration into CRM, booking, and internal systems for real answers',
      'Built to scale from pilot to full call-center volume',
    ] : [
      'Telephony Integration เต็มรูปแบบผ่าน SIP และ PSTN รองรับปริมาณสายจริง',
      'สนทนาเป็นธรรมชาติ Latency ต่ำ รองรับการพูดแทรกและตัดบท',
      'รองรับกว่า 25 ภาษา รวมถึงภาษาไทยคุณภาพระดับเจ้าของภาษา',
      'เชื่อมต่อลึกเข้ากับ CRM, ระบบจอง และระบบภายในเพื่อคำตอบที่ถูกต้องจริง',
      'ออกแบบให้ Scale ได้ตั้งแต่ Pilot จนถึงปริมาณ Call Center เต็มรูปแบบ',
    ]
  const whyPoints   = isEN ? [
      'Voice remains the channel customers reach for when something goes wrong and they want it fixed fast.',
      'Low-latency, natural-sounding agents keep callers engaged instead of hanging up in frustration.',
      'Multilingual support means one system serves every customer, not just English speakers.',
      'Deep system integration lets the agent actually resolve issues, not just collect information.',
      'A well-built voice agent absorbs volume spikes without hiring and training more staff.',
    ] : [
      'เสียงยังเป็นช่องทางที่ลูกค้าเลือกใช้เมื่อมีปัญหาและต้องการคำตอบเร็วที่สุด',
      'Agent ที่ Latency ต่ำและฟังเป็นธรรมชาติ ช่วยให้ลูกค้าไม่วางสายด้วยความหงุดหงิด',
      'รองรับหลายภาษาทำให้ระบบเดียวดูแลลูกค้าได้ทุกคน ไม่ใช่แค่คนพูดอังกฤษ',
      'การเชื่อมต่อระบบเชิงลึกทำให้ Agent แก้ปัญหาได้จริง ไม่ใช่แค่เก็บข้อมูลส่งต่อ',
      'Voice Agent ที่สร้างมาดี รองรับปริมาณสายที่พุ่งสูงได้โดยไม่ต้องจ้างและเทรนคนเพิ่ม',
    ]
  const outcomes    = isEN ? [
      {stat: '25+', label: 'Languages Supported', desc: 'Including native-quality Thai'},
      {stat: '<500ms', label: 'Response Latency', desc: 'Natural conversational pace'},
      {stat: '70%', label: 'Calls Fully Resolved', desc: 'Without human transfer'},
      {stat: '24/7', label: 'Availability', desc: 'No queue, no hold music'}
    ] : [
      {stat: '25+', label: 'ภาษาที่รองรับ', desc: 'รวมถึงภาษาไทยคุณภาพสูง'},
      {stat: '<500ms', label: 'Response Latency', desc: 'จังหวะสนทนาที่เป็นธรรมชาติ'},
      {stat: '70%', label: 'สายที่ปิดจบได้เอง', desc: 'ไม่ต้องโอนสายหาคน'},
      {stat: '24/7', label: 'พร้อมให้บริการ', desc: 'ไม่มีคิว ไม่มีเพลงรอสาย'}
    ]
  const features    = isEN ? [
      {icon: 'ti-phone-calling', title: 'Full Telephony Integration', desc: 'Native SIP and PSTN integration so the agent answers real phone lines, not just a web widget.'},
      {icon: 'ti-language', title: '25+ Languages Including Thai', desc: 'Natural, native-quality conversation across languages, not machine-translated responses.'},
      {icon: 'ti-message-2', title: 'Natural Low-Latency Conversation', desc: 'Sub-second response times with barge-in support so calls feel like talking to a person.'},
      {icon: 'ti-plug-connected', title: 'Deep System Integration', desc: 'Live connections into CRM, booking, and internal APIs so the agent gives real answers.'},
      {icon: 'ti-adjustments', title: 'Conversation Design', desc: 'Call flows engineered around your actual use cases, escalation paths, and edge cases.'},
      {icon: 'ti-chart-line', title: 'Monitoring & Improvement', desc: 'Call transcripts, analytics, and ongoing tuning to keep resolution rates climbing.'}
    ] : [
      {icon: 'ti-phone-calling', title: 'Full Telephony Integration', desc: 'เชื่อมต่อ SIP และ PSTN โดยตรง Agent รับสายโทรศัพท์จริง ไม่ใช่แค่ Web Widget'},
      {icon: 'ti-language', title: '25+ ภาษารวมถึงภาษาไทย', desc: 'สนทนาเป็นธรรมชาติคุณภาพระดับเจ้าของภาษา ไม่ใช่คำตอบจากการแปลด้วยเครื่อง'},
      {icon: 'ti-message-2', title: 'Natural Low-Latency Conversation', desc: 'Response Time ต่ำกว่า 1 วินาที รองรับการพูดแทรก ทำให้รู้สึกเหมือนคุยกับคนจริง'},
      {icon: 'ti-plug-connected', title: 'Deep System Integration', desc: 'เชื่อมต่อสด CRM, ระบบจอง และ API ภายใน เพื่อให้ Agent ตอบคำถามได้ถูกต้องจริง'},
      {icon: 'ti-adjustments', title: 'Conversation Design', desc: 'ออกแบบ Call Flow ตาม Use Case จริง เส้นทางการโอนสาย และกรณีขอบเขต'},
      {icon: 'ti-chart-line', title: 'Monitoring & Improvement', desc: 'Transcript การโทร, Analytics และปรับปรุงต่อเนื่องเพื่อเพิ่มอัตราปิดจบสาย'}
    ]
  const steps       = isEN ? [
      {no: '01', title: 'Discovery', desc: 'Understand call volume, intents, and existing systems.'},
      {no: '02', title: 'Conversation Design', desc: 'Map call flows, tone, and escalation paths.'},
      {no: '03', title: 'Development', desc: 'Build the agent with your voice, data, and integrations.'},
      {no: '04', title: 'Telephony Integration', desc: 'Connect SIP/PSTN lines for real call handling.'},
      {no: '05', title: 'Testing', desc: 'Stress-test edge cases and real caller scenarios.'},
      {no: '06', title: 'Monitoring', desc: 'Live analytics and continuous tuning post-launch.'}
    ] : [
      {no: '01', title: 'Discovery', desc: 'ทำความเข้าใจปริมาณสาย, Intent และระบบที่มีอยู่'},
      {no: '02', title: 'Conversation Design', desc: 'ออกแบบ Call Flow, น้ำเสียง และเส้นทางการโอนสาย'},
      {no: '03', title: 'Development', desc: 'สร้าง Agent ด้วยเสียง, ข้อมูล และการเชื่อมต่อของคุณ'},
      {no: '04', title: 'Telephony Integration', desc: 'เชื่อมต่อสาย SIP/PSTN สำหรับรับสายจริง'},
      {no: '05', title: 'Testing', desc: 'ทดสอบกรณีขอบเขตและสถานการณ์ผู้โทรจริง'},
      {no: '06', title: 'Monitoring', desc: 'Analytics แบบสดและปรับปรุงต่อเนื่องหลัง Launch'}
    ]
  const caseStudies = isEN ? [
      {tag: 'Retail · Bangkok', title: 'AI Agent Handles 70% of Support Calls', desc: 'Full telephony integration deployed across a national customer service line.', result: '70% resolved without transfer'},
      {tag: 'Healthcare · Bangkok', title: 'Bilingual Booking Line Built in 6 Weeks', desc: 'Thai and English voice agent connected directly to the clinic booking system.', result: 'Zero missed appointments from voicemail'},
      {tag: 'Logistics · Nationwide', title: 'Order Status Line Handles 24/7 Volume', desc: 'Voice agent integrated with live tracking API for instant status updates.', result: '24/7 coverage, zero hold time'}
    ] : [
      {tag: 'Retail · กรุงเทพฯ', title: 'AI Agent ปิดจบสาย Support ได้ 70%', desc: 'Telephony Integration เต็มรูปแบบสำหรับสาย Customer Service ทั่วประเทศ', result: 'ปิดจบได้ 70% โดยไม่ต้องโอนสาย'},
      {tag: 'Healthcare · กรุงเทพฯ', title: 'สายจองคิวสองภาษา สร้างเสร็จใน 6 สัปดาห์', desc: 'Voice Agent ไทย-อังกฤษ เชื่อมตรงกับระบบจองคิวของคลินิก', result: 'ไม่มีนัดหมายหลุดจาก Voicemail'},
      {tag: 'Logistics · ทั่วประเทศ', title: 'สายเช็คสถานะ Order รองรับ 24 ชั่วโมง', desc: 'Voice Agent เชื่อมต่อ API Tracking สดเพื่อแจ้งสถานะทันที', result: 'รองรับ 24/7 ไม่มีเวลารอสาย'}
    ]
  const faqs        = isEN ? [
      {q: 'What can your AI voice agents actually do?', a: 'Answer real phone calls end to end: understand natural speech, hold a conversation, and resolve requests by connecting into your CRM, booking, or internal systems.'},
      {q: 'Does it support Thai?', a: 'Yes. Thai is a first-class language in our voice stack, alongside 25+ other languages, with native-quality pronunciation and understanding.'},
      {q: 'Can it integrate with our existing phone system?', a: 'Yes. We integrate over SIP and PSTN with most existing telephony providers and PBX systems.'},
      {q: 'What happens when the agent cannot help?', a: 'It escalates cleanly to a human agent with full context passed along, so the caller never has to repeat themselves.'}
    ] : [
      {q: 'AI Voice Agent ของ Haliviq ทำอะไรได้บ้าง?', a: 'รับสายโทรศัพท์จริงได้ครบวงจร เข้าใจคำพูดธรรมชาติ สนทนาได้ และปิดจบคำขอโดยเชื่อมต่อกับ CRM, ระบบจอง หรือระบบภายในของคุณ'},
      {q: 'รองรับภาษาไทยไหม?', a: 'รองรับครับ ภาษาไทยเป็นภาษาหลักใน Voice Stack ของเรา ควบคู่กับอีกกว่า 25 ภาษา ด้วยการออกเสียงและความเข้าใจระดับเจ้าของภาษา'},
      {q: 'เชื่อมต่อกับระบบโทรศัพท์ที่มีอยู่ได้ไหม?', a: 'ได้ครับ เราเชื่อมต่อผ่าน SIP และ PSTN กับผู้ให้บริการ Telephony และระบบ PBX ส่วนใหญ่'},
      {q: 'ถ้า Agent ช่วยไม่ได้จะเกิดอะไรขึ้น?', a: 'จะโอนสายไปหาเจ้าหน้าที่อย่างราบรื่น พร้อมส่งบริบททั้งหมดไปด้วย ผู้โทรไม่ต้องพูดซ้ำ'}
    ]
  const related     = isEN ? [
      {label: 'Enterprise Solutions', href: '/services/enterprise-solutions'},
      {label: 'Cloud Services & Migration', href: '/services/cloud-services-migration'},
      {label: 'Cybersecurity', href: '/services/cybersecurity'},
      {label: 'Managed Services & Support', href: '/services/support-maintenance'}
    ] : [
      {label: 'Enterprise Solutions', href: '/services/enterprise-solutions'},
      {label: 'Cloud Services & Migration', href: '/services/cloud-services-migration'},
      {label: 'Cybersecurity', href: '/services/cybersecurity'},
      {label: 'บริการดูแลระบบ', href: '/services/support-maintenance'}
    ]

  const voiceLines = [
    { n: 1, jsx: <><span style={{ color: '#82AAFF' }}>{'>'}</span>&nbsp;<span style={{ color: '#C792EA' }}>voice-agent --connect sip://line-01</span></> },
    { n: 2, jsx: <><span style={{ color: 'var(--lime)' }}>✓</span>&nbsp;{isEN ? 'Telephony line connected' : 'เชื่อมต่อสายโทรศัพท์แล้ว'}</> },
    { n: 3, jsx: <>&nbsp;</> },
    { n: 4, jsx: <><span style={{ color: '#82AAFF' }}>{'>'}</span>&nbsp;<span style={{ color: '#C792EA' }}>call --lang th-TH --latency-target 400ms</span></> },
    { n: 5, jsx: <><span style={{ color: 'var(--lime)' }}>✓</span>&nbsp;{isEN ? 'Response latency: 380ms' : 'Response Latency: 380ms'}</> },
    { n: 6, jsx: <>&nbsp;</> },
    { n: 7, jsx: <><span style={{ color: '#82AAFF' }}>{'>'}</span>&nbsp;<span style={{ color: '#C792EA' }}>resolve --intent booking.status</span></> },
    { n: 8, jsx: <><span style={{ color: 'var(--lime)' }}>✓</span>&nbsp;{isEN ? 'Call resolved, no transfer needed' : 'ปิดจบสาย ไม่ต้องโอนสาย'}</> },
  ]

  const heroSlot = (
    <div className="relative pb-10 pr-6">
      <div className="rounded-2xl overflow-hidden" style={{ background: '#141329', border: '1px solid rgba(123,110,246,0.35)' }}>
        <div className="flex items-center gap-2 px-5 py-3.5" style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
          <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#F87171' }} />
          <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#FBBF24' }} />
          <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#34D399' }} />
          <span className="ml-3 text-xs" style={{ color: 'rgba(255,255,255,0.85)', fontFamily: 'monospace' }}>call-session.log</span>
        </div>
        <div className="px-6 py-6" style={{ fontFamily: 'monospace', fontSize: '0.9rem', lineHeight: 1.9, color: 'rgba(255,255,255,0.85)' }}>
          {voiceLines.map((l) => (
            <div key={l.n} className="flex gap-4">
              <span style={{ color: 'rgba(255,255,255,0.25)', width: 16, textAlign: 'right' }}>{l.n}</span>
              <span>{l.jsx}</span>
            </div>
          ))}
        </div>
      </div>

      <div
        className="absolute -bottom-2 -right-2 w-[220px] rounded-2xl p-4"
        style={{ background: '#1B1A33', border: '1px solid rgba(255,255,255,0.1)', boxShadow: '0 20px 50px -10px rgba(0,0,0,0.6)' }}
      >
        <div className="flex items-center justify-between mb-3">
          <span className="text-[10px] tracking-widest uppercase" style={{ color: 'rgba(255,255,255,0.85)' }}>{isEN ? 'Call Resolution' : 'Call Resolution'}</span>
          <span className="w-2 h-2 rounded-full" style={{ background: 'var(--lime)' }} />
        </div>
        <div className="flex items-center gap-3 mb-3">
          <div className="w-12 h-12 rounded-lg flex items-center justify-center shrink-0" style={{ background: 'linear-gradient(135deg,var(--purple),var(--purple-light))' }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M4 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L14 13l5 2v4a2 2 0 0 1-2 2C9.5 21 3 14.5 3 6a2 2 0 0 1 1-2Z" stroke="#fff" strokeWidth="1.6" strokeLinejoin="round" /></svg>
          </div>
          <div className="flex-1 space-y-1.5">
            <div className="h-1.5 rounded-full" style={{ background: 'rgba(255,255,255,0.15)', width: '90%' }} />
            <div className="h-1.5 rounded-full" style={{ background: 'rgba(255,255,255,0.15)', width: '65%' }} />
            <div className="h-3.5 rounded-full" style={{ background: 'linear-gradient(90deg,var(--purple),var(--lime))', width: '70%' }} />
          </div>
        </div>
        <div className="flex items-center gap-1.5 text-xs" style={{ color: 'var(--lime)' }}>
          <i className="ti ti-circle-check" style={{ fontSize: 13 }} aria-hidden="true" />
          {isEN ? '70% calls resolved without transfer' : 'ปิดจบสาย 70% โดยไม่โอนสาย'}
        </div>
      </div>
    </div>
  )

  const capabilities = isEN ? [
    { icon: 'ti-phone-calling', title: 'Full Telephony Integration', desc: 'Native SIP and PSTN integration so the agent answers real phone lines, not just a web widget.' },
    { icon: 'ti-language', title: '25+ Languages Including Thai', desc: 'Natural, native-quality conversation across languages, not machine-translated responses.' },
    { icon: 'ti-message-2', title: 'Natural Low-Latency Conversation', desc: 'Sub-second response times with barge-in support so calls feel like talking to a person.' },
    { icon: 'ti-plug-connected', title: 'Deep System Integration', desc: 'Live connections into CRM, booking, and internal APIs so the agent gives real answers.' },
  ] : [
    { icon: 'ti-phone-calling', title: 'Full Telephony Integration', desc: 'เชื่อมต่อ SIP และ PSTN โดยตรง Agent รับสายโทรศัพท์จริง ไม่ใช่แค่ Web Widget' },
    { icon: 'ti-language', title: '25+ ภาษารวมถึงภาษาไทย', desc: 'สนทนาเป็นธรรมชาติคุณภาพระดับเจ้าของภาษา ไม่ใช่คำตอบจากการแปลด้วยเครื่อง' },
    { icon: 'ti-message-2', title: 'Natural Low-Latency Conversation', desc: 'Response Time ต่ำกว่า 1 วินาที รองรับการพูดแทรก ทำให้รู้สึกเหมือนคุยกับคนจริง' },
    { icon: 'ti-plug-connected', title: 'Deep System Integration', desc: 'เชื่อมต่อสด CRM, ระบบจอง และ API ภายใน เพื่อให้ Agent ตอบคำถามได้ถูกต้องจริง' },
  ]

  const techStack = [
    { label: 'OpenAI Realtime API', icon: 'ti-brand-openai' },
    { label: 'Anthropic Claude', svg: 'anthropic' },
    { label: 'Twilio', icon: 'ti-brand-twilio' },
    { label: 'SIP / PSTN', icon: 'ti-phone' },
    { label: 'LiveKit', icon: 'ti-video' },
    { label: 'Deepgram', icon: 'ti-microphone-2' },
    { label: 'ElevenLabs', icon: 'ti-microphone' },
    { label: 'WebRTC', icon: 'ti-broadcast' },
    { label: 'Node.js', svg: 'nodedotjs' },
    { label: 'Python', svg: 'python' },
  ] as { label: string; icon?: string; svg?: string }[]

  const approachSteps = isEN ? [
    { no: '01', title: 'Discovery', desc: 'Call volume, intents, existing systems' },
    { no: '02', title: 'Conversation Design', desc: 'Call flows, tone, escalation paths' },
    { no: '03', title: 'Development', desc: 'Build the agent with your data' },
    { no: '04', title: 'Telephony Integration', desc: 'Connect SIP/PSTN for real calls' },
    { no: '05', title: 'Testing', desc: 'Stress-test edge cases and scenarios' },
    { no: '06', title: 'Monitoring', desc: 'Live analytics and continuous tuning' },
  ] : [
    { no: '01', title: 'Discovery', desc: 'ปริมาณสาย, Intent และระบบที่มีอยู่' },
    { no: '02', title: 'Conversation Design', desc: 'Call Flow, น้ำเสียง และการโอนสาย' },
    { no: '03', title: 'Development', desc: 'สร้าง Agent ด้วยข้อมูลของคุณ' },
    { no: '04', title: 'Telephony Integration', desc: 'เชื่อมต่อ SIP/PSTN สำหรับสายจริง' },
    { no: '05', title: 'Testing', desc: 'ทดสอบกรณีขอบเขตและสถานการณ์จริง' },
    { no: '06', title: 'Monitoring', desc: 'Analytics แบบสดและปรับปรุงต่อเนื่อง' },
  ]

  const darkFaqs = isEN ? [
    { q: 'What can Haliviq’s AI voice agents actually do?', a: 'They answer real phone calls end to end: understand natural speech, hold a genuine conversation with barge-in support, and resolve requests by connecting live into your CRM, booking system, or internal APIs — not just collect information and transfer.' },
    { q: 'Does it support Thai?', a: 'Yes. Thai is a first-class language in our voice stack alongside 25+ other languages, with native-quality pronunciation, tone, and understanding rather than a machine-translated experience.' },
    { q: 'Can it integrate with our existing phone system?', a: 'Yes. We integrate over SIP and PSTN with most existing telephony providers and PBX systems, so you keep your existing phone numbers and infrastructure while the agent handles the conversation layer.' },
    { q: 'What happens when the agent cannot help?', a: 'It escalates cleanly to a human agent with the full conversation context and any data gathered passed along, so the caller never has to repeat themselves from the start.' },
    { q: 'How long does it take to launch a voice agent?', a: 'A focused pilot on one call flow — such as booking or order status — typically launches in 4-6 weeks. Broader deployment across multiple call types and full production hardening usually takes 8-12 weeks depending on integration complexity.' },
    { q: 'How much does an AI voice agent project cost?', a: 'Pricing depends on call volume, number of languages, and depth of system integration required. A single-flow pilot typically starts in the low hundred-thousands (THB); full multi-flow production deployments are scoped after a discovery call.' },
    { q: 'Do we own the voice agent and its data after the project?', a: 'Yes. You own the conversation designs, integration code, and all call data and transcripts. We can host and operate the agent for you or hand over full deployment access, whichever fits your team.' },
    { q: 'Can the agent handle high call volume, like during a promotion or outage?', a: 'Yes, this is one of the core reasons to use a voice agent. It scales to handle simultaneous calls without hiring or training additional staff, and without hold queues or busy signals.' },
  ] : [
    { q: 'AI Voice Agent ของ Haliviq ทำอะไรได้บ้าง?', a: 'รับสายโทรศัพท์จริงได้ครบวงจร เข้าใจคำพูดธรรมชาติ สนทนาได้จริงพร้อมรองรับการพูดแทรก และปิดจบคำขอโดยเชื่อมต่อสดเข้ากับ CRM, ระบบจอง หรือ API ภายใน ไม่ใช่แค่เก็บข้อมูลแล้วโอนสาย' },
    { q: 'รองรับภาษาไทยไหม?', a: 'รองรับครับ ภาษาไทยเป็นภาษาหลักใน Voice Stack ของเรา ควบคู่กับอีกกว่า 25 ภาษา ด้วยการออกเสียง น้ำเสียง และความเข้าใจระดับเจ้าของภาษา ไม่ใช่ประสบการณ์จากการแปลด้วยเครื่อง' },
    { q: 'เชื่อมต่อกับระบบโทรศัพท์ที่มีอยู่ได้ไหม?', a: 'ได้ครับ เราเชื่อมต่อผ่าน SIP และ PSTN กับผู้ให้บริการ Telephony และระบบ PBX ส่วนใหญ่ คุณยังใช้เบอร์และโครงสร้างพื้นฐานเดิม ส่วน Agent จะดูแลชั้นการสนทนา' },
    { q: 'ถ้า Agent ช่วยไม่ได้จะเกิดอะไรขึ้น?', a: 'จะโอนสายไปหาเจ้าหน้าที่อย่างราบรื่น พร้อมส่งบริบทการสนทนาและข้อมูลที่เก็บมาทั้งหมดไปด้วย ผู้โทรไม่ต้องเริ่มพูดใหม่ตั้งแต่ต้น' },
    { q: 'ใช้เวลานานแค่ไหนกว่าจะ Launch Voice Agent?', a: 'Pilot แบบเจาะจงหนึ่ง Call Flow เช่น การจองคิวหรือเช็คสถานะ Order มักใช้เวลา 4-6 สัปดาห์ ส่วนการขยายไปหลาย Call Type พร้อม Harden สำหรับ Production เต็มรูปแบบ มักใช้เวลา 8-12 สัปดาห์ ขึ้นอยู่กับความซับซ้อนของการเชื่อมต่อ' },
    { q: 'โปรเจกต์ AI Voice Agent มีค่าใช้จ่ายเท่าไหร่?', a: 'ราคาขึ้นอยู่กับปริมาณสาย, จำนวนภาษา และความลึกของการเชื่อมต่อระบบ Pilot แบบ Flow เดียวมักเริ่มต้นที่หลักแสนต้นๆ (บาท) ส่วนการติดตั้ง Production แบบหลาย Flow จะเสนอราคาหลังคุย Discovery' },
    { q: 'เราเป็นเจ้าของ Voice Agent และข้อมูลหลังโปรเจกต์จบไหม?', a: 'ใช่ครับ คุณเป็นเจ้าของ Conversation Design, Code การเชื่อมต่อ และข้อมูล/Transcript การโทรทั้งหมด เราสามารถ Host และดูแลระบบให้ หรือส่งมอบสิทธิ์ Deploy เต็มรูปแบบ แล้วแต่ทีมคุณสะดวก' },
    { q: 'Agent รองรับปริมาณสายสูงๆ เช่นช่วงโปรโมชันหรือระบบล่มได้ไหม?', a: 'ได้ครับ นี่คือเหตุผลหลักที่ควรใช้ Voice Agent ระบบรองรับสายพร้อมกันจำนวนมากได้โดยไม่ต้องจ้างหรือเทรนคนเพิ่ม และไม่มีคิวรอสายหรือสัญญาณไม่ว่าง' },
  ]

  const postHeroSlot = (
    <>
    <section className="relative overflow-hidden" style={{ background: '#08070F' }}>
      <div className="relative max-w-7xl mx-auto px-4 lg:px-10 pb-24 lg:pb-32">
        <div className="rounded-2xl p-10 lg:p-16 mb-16 lg:mb-24" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}>
          <div className="w-12 h-[3px] rounded-full mb-8" style={{ background: 'linear-gradient(90deg, var(--purple-light), var(--lime))' }} />
          <p className="leading-relaxed" style={{ color: 'rgba(255,255,255,0.85)', fontSize: 'clamp(1.05rem,1.6vw,1.35rem)', fontWeight: 400, maxWidth: 900 }}>
            {overviewText}
          </p>
        </div>

        <p className="mb-5 text-xs tracking-widest uppercase" style={{ color: 'var(--lime)', fontWeight: 600 }}>
          {isEN ? 'Capabilities' : 'ความสามารถ'}
        </p>
        <h2 className="t-display mb-4" style={{ color: '#fff', fontSize: 'clamp(2.25rem,4.5vw,3.5rem)' }}>
          {isEN ? 'Key Capabilities' : 'ความสามารถหลัก'}
        </h2>
        <p className="mb-12" style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1.2rem', fontWeight: 400 }}>
          {isEN ? 'Concrete capabilities we bring to this engagement — not buzzwords.' : 'ความสามารถที่จับต้องได้จริงที่เรานำมาใช้ในทุกโปรเจกต์ ไม่ใช่แค่คำสวยหรู'}
        </p>

        <div className="grid sm:grid-cols-2 gap-5">
          {capabilities.map((c) => (
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

        <div className="mt-16 lg:mt-24">
          <p className="mb-5 text-xs tracking-widest uppercase" style={{ color: 'var(--lime)', fontWeight: 600 }}>
            {isEN ? 'Tools We Use' : 'เครื่องมือที่ใช้'}
          </p>
          <h2 className="t-display mb-4" style={{ color: '#fff', fontSize: 'clamp(2.25rem,4.5vw,3.5rem)' }}>
            {isEN ? 'Technologies We Use' : 'เทคโนโลยีที่เราใช้งาน'}
          </h2>
          <p className="mb-12" style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1.2rem', fontWeight: 400, maxWidth: 640 }}>
            {isEN
              ? 'A modern voice AI stack chosen for latency, accuracy, and reliability at call-center scale.'
              : 'Voice AI Stack สมัยใหม่ที่เลือกใช้เพื่อ Latency ต่ำ ความแม่นยำ และความน่าเชื่อถือระดับ Call Center'}
          </p>

          <div className="flex flex-wrap gap-3">
            {techStack.map((t) => (
              <span
                key={t.label}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-base"
                style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.85)', fontWeight: 400 }}
              >
                {t.label}
                {t.svg ? (
                  <BrandLogo name={t.svg} />
                ) : (
                  <i className={`ti ${t.icon}`} style={{ fontSize: 15, color: 'var(--purple-light)' }} aria-hidden="true" />
                )}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-16 lg:mt-24">
          <p className="mb-5 text-xs tracking-widest uppercase" style={{ color: 'var(--lime)', fontWeight: 600 }}>
            {isEN ? 'How We Work' : 'วิธีการทำงาน'}
          </p>
          <h2 className="t-display mb-4" style={{ color: '#fff', fontSize: 'clamp(2.25rem,4.5vw,3.5rem)' }}>
            {isEN ? 'Our Approach' : 'แนวทางการทำงานของเรา'}
          </h2>
          <p className="mb-16" style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1.2rem', fontWeight: 400, maxWidth: 640 }}>
            {isEN
              ? 'A clear path from discovery to a production voice agent — adjusted per call flow, never one-size-fits-all.'
              : 'เส้นทางที่ชัดเจนจาก Discovery สู่ Voice Agent ระดับ Production ปรับตามแต่ละ Call Flow ไม่ใช่สูตรสำเร็จตายตัว'}
          </p>

          <div className="relative">
            <div
              className="hidden lg:block absolute left-0 right-0"
              style={{ top: 32, height: 1, background: 'linear-gradient(90deg, rgba(123,110,246,0.5), rgba(83,195,215,0.5))' }}
            />
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-x-6 gap-y-14">
              {approachSteps.map((s) => (
                <div key={s.no} className="relative">
                  <div
                    className="relative z-10 w-16 h-16 rounded-full flex items-center justify-center mb-6 font-mono"
                    style={{
                      background: 'linear-gradient(135deg, var(--purple) 0%, var(--purple-dark) 100%)',
                      boxShadow: '0 8px 24px -8px rgba(123,110,246,0.6)',
                      color: '#fff',
                      fontSize: '1.05rem',
                      fontWeight: 600,
                    }}
                  >
                    {s.no}
                  </div>
                  <h3 className="mb-2" style={{ color: '#fff', fontWeight: 600, fontSize: '1.2rem' }}>{s.title}</h3>
                  <p className="leading-relaxed" style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1rem', fontWeight: 400 }}>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 lg:mt-24">
          <h2 className="t-display mb-4" style={{ color: '#fff', fontSize: 'clamp(2.25rem,4.5vw,3.5rem)' }}>
            {isEN ? 'Frequently Asked Questions' : 'คำถามที่พบบ่อย'}
          </h2>
          <p className="mb-4" style={{ color: 'var(--lime)', fontSize: '1.2rem', fontWeight: 600 }}>
            {isEN ? 'Straight answers about how our voice agents work.' : 'คำตอบตรงไปตรงมาเกี่ยวกับวิธีที่ Voice Agent ของเราทำงาน'}
          </p>

          <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}>
            {darkFaqs.map((f, i) => (
              <details key={f.q} className="group marker:hidden [&::-webkit-details-marker]:hidden" style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }} open={i === 0}>
                <summary className="flex items-center justify-between gap-6 cursor-pointer list-none py-6">
                  <span style={{ color: '#fff', fontSize: 'clamp(1.15rem,1.8vw,1.4rem)', fontWeight: 500 }}>{f.q}</span>
                  <i className="ti ti-chevron-down shrink-0 transition-transform duration-300 group-open:rotate-180" style={{ fontSize: 20, color: 'rgba(255,255,255,0.85)' }} aria-hidden="true" />
                </summary>
                <p className="pb-6 leading-relaxed" style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1.15rem', fontWeight: 400, maxWidth: 900 }}>
                  {f.a}
                </p>
              </details>
            ))}
          </div>
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
      <div className="relative max-w-7xl mx-auto px-4 lg:px-10 py-28 lg:py-36">
        <h2 className="t-display mb-5 leading-tight" style={{ color: '#fff', fontSize: 'clamp(2.5rem,5.5vw,4.2rem)' }}>
          {isEN ? 'Have a project in mind?' : 'มีโปรเจกต์ในใจแล้วใช่ไหม?'}
        </h2>
        <p className="mb-10" style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1.25rem', fontWeight: 400 }}>
          {isEN ? "We'd love to hear what you're building." : 'เรายินดีรับฟังสิ่งที่คุณกำลังสร้างครับ'}
        </p>
        <div className="flex flex-wrap items-center gap-6">
          <Link
            href={`${prefix}/contact`}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-base font-medium transition-opacity hover:opacity-90"
            style={{ background: 'linear-gradient(135deg, var(--purple) 0%, var(--purple-dark) 100%)', color: '#fff', fontWeight: 500 }}
          >
            {isEN ? 'Start a Conversation' : 'เริ่มบทสนทนา'}
            <i className="ti ti-arrow-right" style={{ fontSize: 17 }} aria-hidden="true" />
          </Link>
          <a href="mailto:wu@haliviq.com" style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1.1rem', fontWeight: 400 }}>
            wu@haliviq.com
          </a>
        </div>
      </div>
    </section>
    </>
  )

  return (
    <ServiceLayout
      lang={params.lang as Lang}
      badge={badge} title={title} subtitle={subtitle}
      heroDesc={heroDesc} heroBullets={heroBullets}
      heroDark heroSlot={heroSlot} heroShowSecondaryCta={false}
      heroCtaLabel={isEN ? 'Get Started' : 'เริ่มต้นเลย'}
      postHeroSlot={postHeroSlot}
      whyTitle={whyTitle} whyDesc={whyDesc} whyPoints={whyPoints}
      outcomes={outcomes} ctaTitle={ctaTitle} ctaDesc={ctaDesc}
      features={features} steps={steps} caseStudies={caseStudies}
      faqs={faqs} related={related}
      color="var(--purple)" bg="var(--purple-bg)"
      whyImg="/images/services/ai-voice-agents/why1.jpg"
      whyImg2="/images/services/ai-voice-agents/why2.jpg"
      featureImg="/images/services/ai-voice-agents/feature.jpg"
      processImg="/images/services/ai-voice-agents/process.jpg"
    />
  )
}
