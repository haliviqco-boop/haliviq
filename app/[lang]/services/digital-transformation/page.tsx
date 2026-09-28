import Link from 'next/link'
import ServiceLayout from '@/components/service/ServiceLayout'
import { type Lang } from '@/lib/i18n'

export async function generateStaticParams() {
  return [{ lang: 'th' }, { lang: 'en' }]
}

export default function Page({ params }: { params: { lang: Lang } }) {
  const isEN = params.lang === 'en'
  const prefix = `/${params.lang}`

  const badge    = isEN ? 'Strategy / Digital Transformation'  : 'กลยุทธ์ / Digital Transformation'
  const title    = isEN ? 'Transform Your Business'  : 'ปรับธุรกิจสู่'
  const subtitle = isEN ? 'Into the Digital Age'    : 'ยุคดิจิทัลอย่างมีกลยุทธ์'
  const heroDesc = isEN ? 'Practical modernization programs that align technology, process, and teams around outcomes that matter — not a slide deck.'  : 'โปรแกรม Modernization ที่จับต้องได้จริง จัดวางเทคโนโลยี กระบวนการ และทีมงานให้มุ่งสู่ผลลัพธ์ที่สำคัญ ไม่ใช่แค่ Slide สวยๆ'
  const whyTitle = isEN ? 'Why businesses that resist change fall behind'    : 'ทำไมธุรกิจที่ต่อต้านการเปลี่ยนแปลงถึงตามหลัง'
  const whyDesc  = isEN ? 'Businesses relying on manual processes and gut-feel decisions lose market share daily. Customers expect fast, seamless, personalised experiences while competitors use Data and AI to decide faster.'  : 'ในยุคที่เทคโนโลยีเร่งตัวขึ้น ธุรกิจที่ยังพึ่งกระบวนการ Manual กำลังเสียส่วนแบ่งตลาดทุกวัน ลูกค้าคาดหวังประสบการณ์ที่รวดเร็วและ Personalized ในขณะที่คู่แข่งใช้ Data ตัดสินใจเร็วกว่า'
  const ctaTitle = isEN ? 'Ready to transform your business?'    : 'พร้อม Transform ธุรกิจของคุณไหม?'
  const ctaDesc  = isEN ? 'Every transformation begins with a conversation. Consult our experts for free — no commitment required.'   : 'ทุกการเปลี่ยนแปลงเริ่มจากบทสนทนา ปรึกษาผู้เชี่ยวชาญของเราฟรี ไม่มีข้อผูกมัด'
  const overviewText = isEN
    ? "We help organizations modernize by replacing outdated processes and systems with working digital products — not theoretical recommendations. Our approach combines strategy workshops, capability roadmaps, and process redesign with hands-on delivery, integrating product thinking with engineering expertise so transformation work actually reaches production, with change management and training built in from the start."
    : 'เราช่วยองค์กรปรับตัวสู่ยุคดิจิทัลด้วยการแทนที่กระบวนการและระบบเดิมที่ล้าสมัยด้วย Digital Product ที่ใช้งานได้จริง ไม่ใช่แค่ข้อเสนอแนะเชิงทฤษฎี แนวทางของเราผสาน Strategy Workshop, Capability Roadmap และการ Redesign กระบวนการเข้ากับการลงมือทำจริง โดยรวม Product Thinking เข้ากับความเชี่ยวชาญด้าน Engineering เพื่อให้งาน Transformation ไปถึง Production จริง พร้อม Change Management และ Training ตั้งแต่ต้น'

  const heroBullets = isEN ? [
      'Assess your digital maturity and identify critical gaps',
      'Build a 1-3 year Digital Roadmap with actionable Quick Wins',
      'Align Process, Technology, and Culture simultaneously',
      'Measure progress with clear KPIs and regular reporting',
      'Transfer knowledge so your team can sustain the journey',
    ] : [
      'ประเมินสถานะดิจิทัลองค์กรและหา Gap ที่สำคัญที่สุด',
      'วาง Digital Roadmap ระยะ 1-3 ปีพร้อม Quick Wins',
      'ปรับ Process เทคโนโลยี และวัฒนธรรมองค์กรพร้อมกัน',
      'วัดผลด้วย KPI ที่ชัดเจนและรายงานความคืบหน้าสม่ำเสมอ',
      'Transfer Knowledge ให้ทีมดูแลต่อได้เอง',
    ]
  const whyPoints   = isEN ? [
      '70% of DX initiatives fail due to unclear strategy and poor change management. Haliviq helps you avoid these traps.',
      'Data-driven organisations grow 23x faster than competitors.',
      'The cost of delay is higher than you think. Every month of inaction gives competitors more ground.',
      'Good transformation starts with People before Technology.',
      'Phased approaches outperform big-bang change. We prioritise high-impact, low-risk initiatives first.',
    ] : [
      '70% ของ DX Initiative ล้มเหลวเพราะกลยุทธ์ไม่ชัดและ Change Management ไม่ดี Haliviq ช่วยหลีกเลี่ยงกับดักเหล่านี้',
      'องค์กรที่ขับเคลื่อนด้วยข้อมูลเติบโตเร็วกว่าคู่แข่ง 23 เท่า',
      'ต้นทุนของการรอคอยสูงกว่าที่คิด ทุกเดือนที่ไม่ลงมือทำ คู่แข่งได้เปรียบมากขึ้น',
      'การ Transform ที่ดีเริ่มจากคนก่อนเทคโนโลยี',
      'Phased Approach ได้ผลดีกว่า Big-bang Change เสมอ',
    ]
  const outcomes    = isEN ? [
      {stat: '3x', label: 'Operational Efficiency', desc: 'Average across all client segments'},
      {stat: '60%', label: 'Process Cost Reduction', desc: 'Through automating manual work'},
      {stat: '8 weeks', label: 'First Quick Win', desc: 'From project kick-off'},
      {stat: '95%', label: 'Client Referral Rate', desc: 'Net Promoter Score'}
    ] : [
      {stat: '3x', label: 'ประสิทธิภาพการดำเนินงาน', desc: 'เฉลี่ยทุก Segment ลูกค้า'},
      {stat: '60%', label: 'ลดต้นทุนกระบวนการ', desc: 'ผ่านการ Automate งาน Manual'},
      {stat: '8 สัปดาห์', label: 'Quick Win แรก', desc: 'นับจากวันเริ่มโปรเจกต์'},
      {stat: '95%', label: 'ลูกค้าแนะนำต่อ', desc: 'Net Promoter Score'}
    ]
  const features    = isEN ? [
      {icon: 'ti-map', title: 'Digital Maturity Assessment', desc: 'Assess readiness across 6 dimensions to identify the most critical gaps and opportunities.'},
      {icon: 'ti-road', title: 'Digital Roadmap & Strategy', desc: 'Build a 1-3 year roadmap with clear milestones, prioritised by impact vs effort.'},
      {icon: 'ti-settings-2', title: 'Process Redesign & Automation', desc: 'Analyse current processes and redesign with appropriate automation technology.'},
      {icon: 'ti-database', title: 'Data Strategy & Analytics', desc: 'End-to-end data strategy from collection and storage to visualisation and AI/ML.'},
      {icon: 'ti-users', title: 'Change Management', desc: 'Systematic change management covering stakeholder alignment, communication, and training.'},
      {icon: 'ti-cloud', title: 'Technology Modernization', desc: 'Assess and upgrade your tech stack — cloud migration and legacy modernisation.'}
    ] : [
      {icon: 'ti-map', title: 'Digital Maturity Assessment', desc: 'ประเมินระดับความพร้อมดิจิทัลขององค์กรใน 6 มิติ เพื่อระบุ Gap และโอกาสที่สำคัญที่สุด'},
      {icon: 'ti-road', title: 'Digital Roadmap & Strategy', desc: 'วาง Roadmap ระยะ 1-3 ปีที่มี Milestone ชัดเจน จัดลำดับ Initiative ตาม Impact vs Effort'},
      {icon: 'ti-settings-2', title: 'Process Redesign & Automation', desc: 'วิเคราะห์ As-Is Process และออกแบบ To-Be Process พร้อม Automate ด้วยเทคโนโลยีที่เหมาะสม'},
      {icon: 'ti-database', title: 'Data Strategy & Analytics', desc: 'วางกลยุทธ์ข้อมูลองค์กรครบวงจร ตั้งแต่ Collection จนถึง Visualization และ AI/ML'},
      {icon: 'ti-users', title: 'Change Management', desc: 'บริหารการเปลี่ยนแปลงอย่างเป็นระบบ ทั้ง Stakeholder Management, Communication และ Training'},
      {icon: 'ti-cloud', title: 'Technology Modernization', desc: 'ประเมินและ Upgrade Tech Stack ให้ทันสมัย ทั้ง Cloud Migration และ Legacy Modernization'}
    ]
  const steps       = isEN ? [
      {no: '01', title: 'Digital Audit & Discovery', desc: 'Interview stakeholders, study processes, and assess current technology landscape.'},
      {no: '02', title: 'Strategy & Roadmap Workshop', desc: 'Workshop with leadership to define vision, priorities, and quick wins.'},
      {no: '03', title: 'Pilot & Prove', desc: 'Select high-impact, low-risk initiatives to pilot and prove value before scaling.'},
      {no: '04', title: 'Scale & Integrate', desc: 'Roll out proven initiatives and integrate all systems seamlessly.'},
      {no: '05', title: 'Measure & Optimize', desc: 'Track KPIs continuously and optimise based on real data each quarter.'},
      {no: '06', title: 'Sustain & Evolve', desc: 'Transfer knowledge to internal teams and build governance for continuous growth.'}
    ] : [
      {no: '01', title: 'Digital Audit & Discovery', desc: 'สัมภาษณ์ Stakeholder ทุกระดับ ศึกษากระบวนการ และประเมิน Technology ปัจจุบัน'},
      {no: '02', title: 'Strategy & Roadmap Workshop', desc: 'Workshop กับ Leadership Team เพื่อกำหนด Vision, Priority และ Quick Wins'},
      {no: '03', title: 'Pilot & Prove', desc: 'เลือก Initiative ที่ Impact สูง Risk ต่ำมาทำ Pilot เพื่อ Prove Value ก่อน Scale'},
      {no: '04', title: 'Scale & Integrate', desc: 'ขยาย Initiative ที่ได้ผลไปทั่วองค์กร พร้อม Integrate ระบบต่างๆ ให้ทำงานร่วมกัน'},
      {no: '05', title: 'Measure & Optimize', desc: 'ติดตาม KPI อย่างต่อเนื่อง ทำ Retrospective รายไตรมาส และ Optimize ตาม Data จริง'},
      {no: '06', title: 'Sustain & Evolve', desc: 'Transfer Knowledge ให้ทีมภายใน วาง Governance สำหรับการ Evolve Capability'}
    ]
  const caseStudies = isEN ? [
      {tag: 'Banking · Bangkok', title: 'Loan Approval from 7 Days to 4 Hours', desc: 'AI OCR document verification, reducing manual work 80%.', result: 'Processing Time down 93%'},
      {tag: 'Retail · Nationwide', title: 'Unified Commerce connecting 500 branches', desc: 'Single source of truth for inventory, customer data, and orders.', result: 'Revenue up 2.4× in 12 months'},
      {tag: 'Healthcare · Bangkok', title: 'End-to-end Digital Patient Journey', desc: 'Fully paperless from appointment booking through to billing.', result: 'No-show Rate down 40%'}
    ] : [
      {tag: 'ธนาคาร · กรุงเทพฯ', title: 'ปรับ Loan Approval จาก 7 วันเหลือ 4 ชั่วโมง', desc: 'Automate Document Verification ด้วย AI OCR ลด Manual Work 80%', result: 'Processing Time ลดลง 93%'},
      {tag: 'Retail · ทั่วประเทศ', title: 'Unified Commerce Platform เชื่อม 500 สาขา', desc: 'Single Source of Truth สำหรับ Inventory, Customer Data และ Order Management', result: 'Revenue เพิ่ม 2.4× ใน 12 เดือน'},
      {tag: 'Healthcare · กรุงเทพฯ', title: 'Digital Patient Journey ครบวงจร', desc: 'เปลี่ยนจาก Paper-based เป็น Digital ทั้งหมด ตั้งแต่ Appointment ถึง Billing', result: 'No-show Rate ลดลง 40%'}
    ]
  const faqs        = isEN ? [
      {q: 'How long does it take?', a: 'We build 1-3 year roadmaps but deliver Quick Wins within the first 8-12 weeks.'},
      {q: 'Do we need to change everything at once?', a: 'No. We recommend phased approach — highest impact, lowest risk initiatives first.'},
      {q: 'Do we need an internal IT team?', a: 'Not necessarily. We can work with a small team or none at all, with full knowledge transfer.'},
      {q: 'Do you work with SMEs and enterprises?', a: 'Yes — from SMEs just starting their digital journey to enterprises modernising legacy systems.'}
    ] : [
      {q: 'ใช้เวลานานแค่ไหน?', a: 'วาง Roadmap 1-3 ปี แต่มี Quick Wins ที่เห็นผลใน 8-12 สัปดาห์แรก'},
      {q: 'ต้องเปลี่ยนระบบทั้งหมดพร้อมกันไหม?', a: 'ไม่จำเป็น เราแนะนำ Phased Approach เริ่มจากจุดที่ Impact สูง Risk ต่ำก่อน'},
      {q: 'ต้องมี IT Team ไหม?', a: 'ไม่จำเป็น เราทำงานกับทีม IT ขนาดเล็กหรือไม่มีทีม IT เลยก็ได้'},
      {q: 'รับทั้ง SME และ Enterprise ไหม?', a: 'รับครับ ทั้ง SME ที่เพิ่งเริ่มและ Enterprise ที่ต้องการ Modernize'}
    ]
  const related     = isEN ? [
      {label: 'User Research', href: '/services/user-research'},
      {label: 'Data & Analytics', href: '/services/data-analytics'},
      {label: 'Growth Strategy', href: '/services/growth-strategy'},
      {label: 'ERP & CRM', href: '/services/erp-crm'}
    ] : [
      {label: 'วิจัยผู้ใช้งาน', href: '/services/user-research'},
      {label: 'ข้อมูลและการวิเคราะห์', href: '/services/data-analytics'},
      {label: 'กลยุทธ์การเติบโต', href: '/services/growth-strategy'},
      {label: 'ระบบ ERP / CRM', href: '/services/erp-crm'}
    ]

  const roadmapLines = [
    { n: 1, jsx: <><span style={{ color: '#82AAFF' }}>{'>'}</span>&nbsp;<span style={{ color: '#C792EA' }}>{isEN ? 'assess --current-state' : 'assess --current-state'}</span></> },
    { n: 2, jsx: <><span style={{ color: 'var(--lime)' }}>✓</span>&nbsp;{isEN ? '6 dimensions scanned · 14 gaps found' : 'สแกน 6 มิติ · พบ 14 Gap'}</> },
    { n: 3, jsx: <>&nbsp;</> },
    { n: 4, jsx: <><span style={{ color: '#82AAFF' }}>{'>'}</span>&nbsp;<span style={{ color: '#C792EA' }}>{isEN ? 'roadmap --build --range 3y' : 'roadmap --build --range 3y'}</span></> },
    { n: 5, jsx: <><span style={{ color: 'var(--lime)' }}>✓</span>&nbsp;{isEN ? '3 phases · 9 initiatives prioritised' : '3 Phase · จัดลำดับ 9 Initiative'}</> },
    { n: 6, jsx: <>&nbsp;</> },
    { n: 7, jsx: <><span style={{ color: '#82AAFF' }}>{'>'}</span>&nbsp;<span style={{ color: '#C792EA' }}>{isEN ? 'deploy --quick-win phase-1' : 'deploy --quick-win phase-1'}</span></> },
    { n: 8, jsx: <><span style={{ color: 'var(--lime)' }}>✓</span>&nbsp;{isEN ? 'Live in production · week 8' : 'Live บน Production · สัปดาห์ที่ 8'}</> },
  ]

  const heroSlot = (
    <div className="relative pb-10 pr-6">
      <div className="rounded-2xl overflow-hidden" style={{ background: '#141329', border: '1px solid rgba(123,110,246,0.35)' }}>
        <div className="flex items-center gap-2 px-5 py-3.5" style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
          <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#F87171' }} />
          <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#FBBF24' }} />
          <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#34D399' }} />
          <span className="ml-3 text-xs" style={{ color: 'rgba(255,255,255,0.85)', fontFamily: 'monospace' }}>roadmap.log</span>
        </div>
        <div className="px-6 py-6" style={{ fontFamily: 'monospace', fontSize: '0.9rem', lineHeight: 1.9, color: 'rgba(255,255,255,0.85)' }}>
          {roadmapLines.map((l) => (
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
          <span className="text-[10px] tracking-widest uppercase" style={{ color: 'rgba(255,255,255,0.85)' }}>{isEN ? 'Maturity Score' : 'คะแนน Maturity'}</span>
          <span className="w-2 h-2 rounded-full" style={{ background: 'var(--lime)' }} />
        </div>
        <div className="flex items-center gap-3 mb-3">
          <div className="w-12 h-12 rounded-lg flex items-center justify-center shrink-0" style={{ background: 'linear-gradient(135deg,var(--purple),var(--purple-light))' }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M4 20V10M12 20V4M20 20v-7" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </div>
          <div className="flex-1 space-y-1.5">
            <div className="h-1.5 rounded-full" style={{ background: 'rgba(255,255,255,0.15)', width: '85%' }} />
            <div className="h-1.5 rounded-full" style={{ background: 'rgba(255,255,255,0.15)', width: '60%' }} />
            <div className="h-3.5 rounded-full" style={{ background: 'linear-gradient(90deg,var(--purple),var(--lime))', width: '90%' }} />
          </div>
        </div>
        <div className="flex items-center gap-1.5 text-xs" style={{ color: 'var(--lime)' }}>
          <i className="ti ti-circle-check" style={{ fontSize: 13 }} aria-hidden="true" />
          {isEN ? 'First win in 8 weeks' : 'Quick Win แรกใน 8 สัปดาห์'}
        </div>
      </div>
    </div>
  )

  const capabilities = isEN ? [
    { icon: 'ti-route', title: 'Strategy & Roadmapping', desc: 'Prioritised digital roadmaps tied to business outcomes, not technology for its own sake.' },
    { icon: 'ti-settings-2', title: 'Process Redesign', desc: 'Map and simplify workflows before automating them, so software does not cement bad process.' },
    { icon: 'ti-users', title: 'Change & Adoption', desc: 'Training, communication, and rollout plans so new systems stick with the people who use them.' },
    { icon: 'ti-adjustments', title: 'Technology Selection', desc: 'Pragmatic build-vs-buy and vendor choices with architecture that stays flexible.' },
  ] : [
    { icon: 'ti-route', title: 'Strategy & Roadmapping', desc: 'จัดลำดับความสำคัญ Digital Roadmap ให้ผูกกับผลลัพธ์ทางธุรกิจจริง ไม่ใช่เทคโนโลยีเพื่อตัวมันเอง' },
    { icon: 'ti-settings-2', title: 'Process Redesign', desc: 'จับ Flow งานปัจจุบันและทำให้เรียบง่ายก่อน Automate เพื่อไม่ให้ Software มาตอกย้ำ Process ที่ไม่ดี' },
    { icon: 'ti-users', title: 'Change & Adoption', desc: 'วาง Training, Communication และ Rollout Plan ให้ระบบใหม่ถูกใช้จริงโดยคนที่ต้องใช้งาน' },
    { icon: 'ti-adjustments', title: 'Technology Selection', desc: 'ตัดสินใจ Build-vs-Buy และเลือก Vendor อย่างมีเหตุผล พร้อม Architecture ที่ยืดหยุ่นในระยะยาว' },
  ]

  const techStack = [
    { label: 'Agile', icon: 'ti-refresh' },
    { label: 'DevOps', icon: 'ti-infinity' },
    { label: isEN ? 'Cloud Platforms' : 'Cloud Platforms', icon: 'ti-cloud' },
    { label: 'Enterprise Architecture', icon: 'ti-building-skyscraper' },
    { label: 'API Management', icon: 'ti-api' },
    { label: 'Microservices', icon: 'ti-topology-star' },
    { label: 'Product Operating Model', icon: 'ti-layout-grid' },
  ] as { label: string; icon?: string; svg?: string }[]

  const approachSteps = isEN ? [
    { no: '01', title: 'Assessment', desc: 'Current state and opportunity map' },
    { no: '02', title: 'Strategy', desc: 'Vision, principles, and priorities' },
    { no: '03', title: 'Roadmap', desc: 'Phased initiatives with owners' },
    { no: '04', title: 'Delivery', desc: 'Ship products and process change' },
    { no: '05', title: 'Adoption', desc: 'Training, rollout, and support' },
    { no: '06', title: 'Optimize', desc: 'Measure outcomes and adjust' },
  ] : [
    { no: '01', title: 'Assessment', desc: 'ประเมินสถานะปัจจุบันและแผนที่โอกาส' },
    { no: '02', title: 'Strategy', desc: 'กำหนด Vision, หลักการ และลำดับความสำคัญ' },
    { no: '03', title: 'Roadmap', desc: 'วาง Initiative เป็น Phase พร้อมผู้รับผิดชอบ' },
    { no: '04', title: 'Delivery', desc: 'ส่งมอบ Product และการเปลี่ยนแปลง Process จริง' },
    { no: '05', title: 'Adoption', desc: 'Training, Rollout และการสนับสนุนทีมงาน' },
    { no: '06', title: 'Optimize', desc: 'วัดผลลัพธ์และปรับปรุงอย่างต่อเนื่อง' },
  ]

  const darkFaqs = isEN ? [
    { q: 'What does a digital transformation engagement with Haliviq look like?', a: 'A practical modernization program that aligns technology, process, and teams around outcomes that matter — not a slide deck. We combine strategy with delivery, with the same team planning the roadmap and building the software, so recommendations never sit disconnected from what actually ships.' },
    { q: 'How is Haliviq different from a large consulting firm?', a: 'We build recommendations rather than hand off plans. Strategy work is grounded in what our engineers and designers ship every week, so recommendations come with working software and delivery dates rather than a handover to someone else to implement months later.' },
    { q: 'Where should we start with digital transformation?', a: 'Start with the outcome that matters most, then modernize just enough to reach it. We typically begin with a digital maturity assessment, select one high-impact workflow, and deliver visible improvements within the first 8-12 weeks rather than a multi-year plan with no early wins.' },
    { q: 'Has Haliviq delivered transformation work for large enterprises?', a: 'Yes. We have delivered digital transformation programs for banks, retailers, and healthcare providers across telecom, financial services, retail, and energy sectors — from loan-approval automation to unified commerce platforms connecting hundreds of branches.' },
    { q: 'How long does a transformation program take?', a: 'We build 1-3 year roadmaps, but the point is never to wait three years to see value. Quick Wins are typically live within the first 8-12 weeks, with subsequent phases scaling what has already proven to work rather than a single big-bang rollout at the end.' },
    { q: 'How much does a digital transformation program cost?', a: 'Cost depends on the number of workflows in scope, the depth of process redesign required, and whether new systems need to be built or existing ones modernised. We typically start with a fixed-price Digital Maturity Assessment, then quote each roadmap phase separately so you invest incrementally as value is proven, not all upfront.' },
    { q: 'Do we need an internal IT or transformation team?', a: 'Not necessarily. We can work alongside a small internal team or with none at all, and knowledge transfer is built into every phase — documentation, training sessions, and pairing with your staff — so your organisation can sustain and extend the transformation after we hand it over.' },
    { q: 'What if our organisation resists change?', a: 'This is normal, and it is exactly why change management is one of our four core capabilities, not an afterthought. We run stakeholder alignment, clear communication, and hands-on training alongside every technical rollout, because a system nobody adopts delivers zero return regardless of how well it was built.' },
  ] : [
    { q: 'การทำงานร่วมกับ Haliviq ด้าน Digital Transformation เป็นอย่างไร?', a: 'เป็นโปรแกรม Modernization ที่จับต้องได้จริง จัดวางเทคโนโลยี กระบวนการ และทีมงานให้มุ่งสู่ผลลัพธ์ที่สำคัญ ไม่ใช่แค่ Slide สวยๆ เรารวม Strategy เข้ากับการลงมือทำจริง โดยทีมเดียวกันทั้งวาง Roadmap และสร้างซอฟต์แวร์ เพื่อให้ข้อเสนอแนะไม่หลุดออกจากสิ่งที่ถูกส่งมอบจริง' },
    { q: 'Haliviq ต่างจากบริษัทที่ปรึกษาขนาดใหญ่อย่างไร?', a: 'เราลงมือสร้างข้อเสนอแนะเอง ไม่ใช่แค่ส่งมอบแผนแล้วจบ งานด้าน Strategy ของเราอิงจากสิ่งที่ทีม Engineer และ Designer ส่งมอบจริงทุกสัปดาห์ ข้อเสนอแนะจึงมาพร้อมซอฟต์แวร์ที่ใช้งานได้จริงและกำหนดวันส่งมอบชัดเจน ไม่ใช่การส่งต่อให้คนอื่นไปทำต่อในอีกหลายเดือนข้างหน้า' },
    { q: 'ควรเริ่มต้น Digital Transformation จากตรงไหน?', a: 'เริ่มจากผลลัพธ์ที่สำคัญที่สุดก่อน แล้วปรับให้ทันสมัยเท่าที่จำเป็นเพื่อไปถึงจุดนั้น โดยทั่วไปเราเริ่มด้วยการประเมิน Digital Maturity เลือก Workflow ที่มี Impact สูงหนึ่งจุด และส่งมอบผลลัพธ์ที่เห็นได้จริงภายใน 8-12 สัปดาห์แรก แทนที่จะเป็นแผนหลายปีที่ไม่มี Quick Win ในช่วงแรก' },
    { q: 'Haliviq เคยทำงาน Transformation ให้องค์กรขนาดใหญ่หรือไม่?', a: 'เคยครับ เราส่งมอบโปรแกรม Digital Transformation ให้ธนาคาร ธุรกิจ Retail และผู้ให้บริการด้าน Healthcare ครอบคลุม Telecom, Financial Services, Retail และ Energy ตั้งแต่การ Automate การอนุมัติสินเชื่อไปจนถึง Unified Commerce Platform ที่เชื่อมหลายร้อยสาขาเข้าด้วยกัน' },
    { q: 'โปรแกรม Transformation ใช้เวลานานแค่ไหน?', a: 'เราวาง Roadmap ระยะ 1-3 ปี แต่จุดสำคัญคือไม่ต้องรอถึง 3 ปีเพื่อเห็นผล Quick Win มักเห็นผลจริงภายใน 8-12 สัปดาห์แรก ส่วน Phase ต่อไปคือการขยาย Initiative ที่พิสูจน์แล้วว่าได้ผล ไม่ใช่การเปลี่ยนทั้งหมดพร้อมกันครั้งเดียวตอนท้าย' },
    { q: 'โปรแกรม Digital Transformation มีค่าใช้จ่ายเท่าไหร่?', a: 'ต้นทุนขึ้นอยู่กับจำนวน Workflow ที่อยู่ในขอบเขต ความลึกของการ Redesign Process ที่ต้องทำ และต้องสร้างระบบใหม่หรือ Modernize ระบบเดิม โดยทั่วไปเราเริ่มจาก Digital Maturity Assessment ราคาคงที่ก่อน แล้วจึงเสนอราคาแต่ละ Phase ของ Roadmap แยกกัน เพื่อให้คุณลงทุนเพิ่มขึ้นตามผลลัพธ์ที่พิสูจน์แล้ว ไม่ใช่จ่ายทั้งหมดล่วงหน้า' },
    { q: 'ต้องมีทีม IT หรือทีม Transformation ภายในไหม?', a: 'ไม่จำเป็นครับ เราทำงานร่วมกับทีมภายในขนาดเล็ก หรือไม่มีทีมเลยก็ได้ และมี Knowledge Transfer อยู่ในทุก Phase ทั้งเอกสาร, Training และการทำงานคู่กับทีมของคุณ เพื่อให้องค์กรดูแลและต่อยอด Transformation ได้เองหลังจากเราส่งมอบงาน' },
    { q: 'ถ้าองค์กรของเราต่อต้านการเปลี่ยนแปลงจะทำอย่างไร?', a: 'เป็นเรื่องปกติครับ และนี่คือเหตุผลที่ Change Management เป็นหนึ่งใน 4 ความสามารถหลักของเรา ไม่ใช่เรื่องรอง เราทำ Stakeholder Alignment, การสื่อสารที่ชัดเจน และ Training ควบคู่ไปกับทุก Technical Rollout เพราะระบบที่ไม่มีใครใช้จริงให้ผลตอบแทนเป็นศูนย์ ไม่ว่าจะสร้างมาดีแค่ไหนก็ตาม' },
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
            {isEN ? 'Frameworks We Use' : 'แนวทางที่เราใช้'}
          </p>
          <h2 className="t-display mb-4" style={{ color: '#fff', fontSize: 'clamp(2.25rem,4.5vw,3.5rem)' }}>
            {isEN ? 'Technologies & Frameworks' : 'เทคโนโลยีและแนวทางที่เราใช้งาน'}
          </h2>
          <p className="mb-12" style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1.2rem', fontWeight: 400, maxWidth: 640 }}>
            {isEN
              ? 'Proven operating models and architecture patterns we apply where they fit — chosen for the problem, not the trend cycle.'
              : 'Operating Model และรูปแบบ Architecture ที่พิสูจน์แล้ว เลือกใช้ตามโจทย์งานจริง ไม่ใช่ตามกระแส'}
          </p>

          <div className="flex flex-wrap gap-3">
            {techStack.map((t) => (
              <span
                key={t.label}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-base"
                style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.85)', fontWeight: 400 }}
              >
                {t.label}
                <i className={`ti ${t.icon}`} style={{ fontSize: 15, color: 'var(--purple-light)' }} aria-hidden="true" />
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
              ? 'A clear path from assessment to sustained change — adjusted per organisation, never one-size-fits-all.'
              : 'เส้นทางที่ชัดเจนจากการประเมินสู่การเปลี่ยนแปลงที่ยั่งยืน ปรับตามแต่ละองค์กร ไม่ใช่สูตรสำเร็จตายตัว'}
          </p>

          <div className="relative">
            <div
              className="hidden lg:block absolute left-0 right-0"
              style={{ top: 32, height: 1, background: 'linear-gradient(90deg, rgba(123,110,246,0.5), rgba(196,255,92,0.5))' }}
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
            {isEN ? 'Straight answers about how we run transformation programs.' : 'คำตอบตรงไปตรงมาเกี่ยวกับวิธีที่เราทำ Digital Transformation'}
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
        style={{ height: 260, background: 'radial-gradient(ellipse 70% 100% at 50% 100%, rgba(123,110,246,0.35) 0%, rgba(196,255,92,0.08) 45%, transparent 75%)' }}
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
      whyTitle={whyTitle} whyDesc={whyDesc} whyPoints={whyPoints}
      outcomes={outcomes} ctaTitle={ctaTitle} ctaDesc={ctaDesc}
      features={features} steps={steps} caseStudies={caseStudies}
      faqs={faqs} related={related}
      color="var(--purple)" bg="var(--purple-bg)"
      whyImg="/images/services/digital-transformation/why1.jpg"
      whyImg2="/images/services/digital-transformation/why2.jpg"
      featureImg="/images/services/digital-transformation/feature.jpg"
      processImg="/images/services/digital-transformation/process.jpg"
    />
  )
}
