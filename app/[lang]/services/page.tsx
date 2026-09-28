import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { t, type Lang } from '@/lib/i18n'

export async function generateStaticParams() {
  return [{ lang: 'th' }, { lang: 'en' }]
}

// Shared visual tokens for the service illustrations
const glass = 'rgba(255,255,255,0.05)'
const glassBorder = '1px solid rgba(255,255,255,0.1)'
const dim = 'rgba(255,255,255,0.35)'

function Panel({ children, style, className }: { children: any; style?: any; className?: string }) {
  return (
    <div className={`rounded-lg px-3 py-2.5 ${className || ''}`} style={{ background: glass, border: glassBorder, backdropFilter: 'blur(2px)', ...style }}>
      {children}
    </div>
  )
}

function Bar({ w, color = 'var(--purple-light)' }: { w: number; color?: string }) {
  return <div className="h-1.5 rounded-full" style={{ width: `${w}%`, background: color }} />
}

function Check({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-1.5">
      <i className="ti ti-check" style={{ color: 'var(--lime)', fontSize: 11 }} aria-hidden="true" />
      <span style={{ fontSize: 10, color: 'rgba(255,255,255,0.85)' }}>{label}</span>
    </div>
  )
}

// One bespoke mini-illustration per service, in Haliviq's dark / purple / lime visual language
function ServiceVisual({ slug }: { slug: string }) {
  switch (slug) {
    case 'digital-transformation':
      return (
        <div className="absolute inset-0 flex items-center justify-center gap-2 px-6">
          <Panel style={{ width: 74 }}>
            <div style={{ fontSize: 9, color: dim, marginBottom: 6 }}>MANUAL</div>
            <Bar w={70} color="rgba(255,255,255,0.2)" />
            <div className="h-1.5" />
            <Bar w={45} color="rgba(255,255,255,0.2)" />
          </Panel>
          <div className="flex-1 h-px" style={{ background: 'repeating-linear-gradient(90deg,var(--lime) 0 4px,transparent 4px 9px)' }} />
          <div className="w-9 h-9 rounded-full flex items-center justify-center shrink-0" style={{ background: 'rgba(155,107,255,0.25)', border: '1px solid var(--purple-light)' }}>
            <i className="ti ti-bolt" style={{ color: 'var(--lime)', fontSize: 16 }} aria-hidden="true" />
          </div>
          <div className="flex-1 h-px" style={{ background: 'repeating-linear-gradient(90deg,var(--lime) 0 4px,transparent 4px 9px)' }} />
          <Panel style={{ width: 74 }} className="flex flex-col gap-2">
            <Check label="Approvals" />
            <Check label="Operations" />
          </Panel>
        </div>
      )
    case 'ux-ui-design':
      return (
        <div className="absolute inset-0 flex items-center justify-center">
          <Panel style={{ width: 190 }}>
            <div style={{ fontSize: 9, color: dim, marginBottom: 8 }}>DESIGN CANVAS</div>
            <div className="flex gap-1.5 mb-2">
              {['var(--purple)', 'var(--purple-light)', 'var(--lime)', '#fff'].map((c, i) => (
                <span key={i} className="w-3.5 h-3.5 rounded-full" style={{ background: c }} />
              ))}
            </div>
            <div className="h-10 rounded-md mb-2" style={{ background: 'linear-gradient(135deg,var(--purple) 0%,var(--purple-light) 100%)', opacity: 0.6 }} />
            <Bar w={80} color="rgba(255,255,255,0.2)" />
          </Panel>
        </div>
      )
    case 'web-development':
      return (
        <div className="absolute inset-0 flex items-center justify-center gap-3 px-5">
          <Panel style={{ width: 120 }}>
            <div style={{ fontSize: 9, color: dim, marginBottom: 6 }}>product.tsx</div>
            {[60, 85, 40, 70].map((w, i) => (
              <div key={i} className="mb-1.5"><Bar w={w} color="rgba(255,255,255,0.18)" /></div>
            ))}
          </Panel>
          <Panel style={{ width: 88 }} className="self-end">
            <div className="flex items-center gap-1 mb-2">
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--lime)' }} />
              <span style={{ fontSize: 9, color: dim }}>LIVE PREVIEW</span>
            </div>
            <div className="h-6 rounded flex items-end gap-0.5 px-1" style={{ background: 'rgba(155,107,255,0.15)' }}>
              {[40, 70, 50, 90, 60].map((h, i) => (
                <div key={i} style={{ height: `${h}%`, width: 4, background: 'var(--lime)', borderRadius: 2 }} />
              ))}
            </div>
          </Panel>
        </div>
      )
    case 'mobile-apps':
      return (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="rounded-2xl relative" style={{ width: 92, height: 150, background: 'rgba(255,255,255,0.06)', border: glassBorder, padding: 8 }}>
            <div className="w-8 h-1 rounded-full mx-auto mb-3" style={{ background: 'rgba(255,255,255,0.25)' }} />
            <div style={{ fontSize: 9, color: '#fff', marginBottom: 6 }}>Your app</div>
            <div className="rounded-lg mb-2" style={{ height: 34, background: 'linear-gradient(135deg,var(--purple) 0%,var(--purple-light) 100%)', opacity: 0.55 }} />
            <div className="grid grid-cols-2 gap-1.5">
              <div className="rounded-md h-8" style={{ background: 'rgba(255,255,255,0.08)' }} />
              <div className="rounded-md h-8" style={{ background: 'rgba(255,255,255,0.08)' }} />
            </div>
            <div className="absolute rounded-full flex items-center justify-center" style={{ width: 20, height: 20, background: 'var(--lime)', bottom: -8, right: -8 }}>
              <i className="ti ti-check" style={{ fontSize: 12, color: '#0A0A0F' }} aria-hidden="true" />
            </div>
          </div>
        </div>
      )
    case 'application-modernization':
      return (
        <div className="absolute inset-0 flex items-center justify-center gap-3 px-6">
          <Panel style={{ width: 76 }}>
            <div style={{ fontSize: 9, color: dim, marginBottom: 6 }}>MONOLITH</div>
            <div className="space-y-1.5">
              <Bar w={90} color="rgba(255,255,255,0.18)" />
              <Bar w={65} color="rgba(255,255,255,0.18)" />
              <Bar w={80} color="rgba(255,255,255,0.18)" />
            </div>
          </Panel>
          <i className="ti ti-arrow-right" style={{ color: 'var(--lime)', fontSize: 16 }} aria-hidden="true" />
          <div className="flex flex-col gap-1.5">
            {['UI', 'API', 'Data'].map((s) => (
              <div key={s} className="rounded px-2 py-1 flex items-center gap-1.5" style={{ background: glass, border: glassBorder }}>
                <span className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--lime)' }} />
                <span style={{ fontSize: 9, color: 'rgba(255,255,255,0.85)' }}>{s} service</span>
              </div>
            ))}
          </div>
        </div>
      )
    case 'cloud-services-migration':
      return (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
          <i className="ti ti-cloud" style={{ color: 'var(--purple-light)', fontSize: 42 }} aria-hidden="true" />
          <div className="flex gap-2">
            {[0, 1, 2].map((i) => (
              <div key={i} className="rounded-md flex flex-col items-center justify-center gap-1" style={{ width: 34, height: 26, background: glass, border: glassBorder }}>
                <span className="w-3.5 h-0.5 rounded-full" style={{ background: 'var(--lime)' }} />
                <span className="w-3.5 h-0.5 rounded-full" style={{ background: 'rgba(255,255,255,0.25)' }} />
              </div>
            ))}
          </div>
        </div>
      )
    case 'quality-assurance-testing':
      return (
        <div className="absolute inset-0 flex items-center justify-center">
          <Panel style={{ width: 150 }}>
            <div style={{ fontSize: 9, color: dim, marginBottom: 8 }}>TEST SUITE</div>
            <div className="space-y-2">
              <Check label="Unit tests" />
              <Check label="API integration" />
              <Check label="End-to-end" />
              <Check label="Performance" />
            </div>
          </Panel>
        </div>
      )
    case 'finish-your-vibe-coded-app':
      return (
        <div className="absolute inset-0 flex items-center justify-center gap-3 px-5">
          <Panel style={{ width: 96 }}>
            <div style={{ fontSize: 9, color: dim, marginBottom: 6 }}>AI PROTOTYPE</div>
            <div style={{ fontSize: 9, color: 'rgba(255,255,255,0.4)' }} className="font-mono">const app = build()</div>
            <div className="mt-2 rounded px-1.5 py-1" style={{ background: 'rgba(155,107,255,0.15)' }}>
              <span style={{ fontSize: 9, color: 'var(--purple-light)' }}>3 issues found</span>
            </div>
          </Panel>
          <i className="ti ti-arrow-right" style={{ color: 'var(--lime)', fontSize: 16 }} aria-hidden="true" />
          <Panel style={{ width: 96 }}>
            <div style={{ fontSize: 9, color: dim, marginBottom: 6 }}>PRODUCTION</div>
            <Check label="Tests passing" />
            <div className="h-1.5" />
            <Check label="Secured" />
          </Panel>
        </div>
      )
    case 'forward-deployed-engineering':
      return (
        <div className="absolute inset-0 flex items-center justify-center gap-3 px-5">
          <Panel style={{ width: 72 }}>
            <div style={{ fontSize: 9, color: dim, marginBottom: 6 }}>YOUR SYSTEMS</div>
            <div className="space-y-1.5">
              <Bar w={70} color="rgba(255,255,255,0.18)" />
              <Bar w={55} color="rgba(255,255,255,0.18)" />
            </div>
          </Panel>
          <div className="w-11 h-11 rounded-full flex items-center justify-center shrink-0" style={{ background: 'rgba(155,107,255,0.25)', border: '1px solid var(--purple-light)' }}>
            <i className="ti ti-user-code" style={{ color: 'var(--lime)', fontSize: 18 }} aria-hidden="true" />
          </div>
          <Panel style={{ width: 72 }}>
            <div style={{ fontSize: 9, color: dim, marginBottom: 6 }}>PRODUCTION</div>
            <Check label="Pilot live" />
          </Panel>
        </div>
      )
    case 'ai':
      return (
        <div className="absolute inset-0 flex items-center justify-center gap-3 px-6">
          <div className="grid grid-rows-3 gap-2">
            {[0, 1, 2].map((i) => (
              <span key={i} className="w-2.5 h-2.5 rounded-full" style={{ background: 'rgba(155,107,255,0.4)', border: '1px solid var(--purple-light)' }} />
            ))}
          </div>
          <div className="flex-1 h-px" style={{ background: 'repeating-linear-gradient(90deg,rgba(255,255,255,0.2) 0 3px,transparent 3px 7px)' }} />
          <Panel style={{ width: 118 }}>
            <div style={{ fontSize: 9, color: dim, marginBottom: 6 }}>ASSISTANT</div>
            <div className="rounded px-1.5 py-1 mb-1.5" style={{ background: 'rgba(255,255,255,0.08)' }}>
              <span style={{ fontSize: 9, color: 'rgba(255,255,255,0.85)' }}>Check Q4 numbers?</span>
            </div>
            <div className="rounded px-1.5 py-1" style={{ background: 'rgba(155,107,255,0.2)' }}>
              <span style={{ fontSize: 9, color: 'var(--lime)' }}>Revenue up 18%</span>
            </div>
          </Panel>
        </div>
      )
    case 'ai-voice-agents':
      return (
        <div className="absolute inset-0 flex items-center justify-center">
          <Panel style={{ width: 170 }}>
            <div className="flex items-center gap-1.5 mb-3">
              <i className="ti ti-microphone" style={{ color: 'var(--lime)', fontSize: 13 }} aria-hidden="true" />
              <span style={{ fontSize: 9, color: dim }}>LISTENING &amp; RESPONDING</span>
            </div>
            <div className="flex items-end gap-[3px] h-8">
              {[40, 70, 30, 90, 55, 75, 35, 60, 45, 80, 30, 65].map((h, i) => (
                <div key={i} style={{ height: `${h}%`, width: 3, background: i % 2 ? 'var(--purple-light)' : 'var(--lime)', borderRadius: 2, opacity: 0.85 }} />
              ))}
            </div>
          </Panel>
        </div>
      )
    case 'data-analytics':
      return (
        <div className="absolute inset-0 flex items-center justify-center">
          <Panel style={{ width: 168 }}>
            <div style={{ fontSize: 9, color: dim, marginBottom: 8 }}>SALES BY REGION</div>
            <div className="space-y-1.5">
              {[{ l: 'APAC', w: 82 }, { l: 'EMEA', w: 55 }, { l: 'NA', w: 91 }, { l: 'LATAM', w: 38 }].map((r) => (
                <div key={r.l} className="flex items-center gap-2">
                  <span style={{ fontSize: 8, color: dim, width: 30 }}>{r.l}</span>
                  <div className="flex-1"><Bar w={r.w} color="var(--lime)" /></div>
                </div>
              ))}
            </div>
          </Panel>
        </div>
      )
    case 'ecommerce':
      return (
        <div className="absolute inset-0 flex items-center justify-center">
          <Panel style={{ width: 180 }}>
            <div style={{ fontSize: 9, color: dim, marginBottom: 8 }}>THE EVERYDAY STORE</div>
            <div className="grid grid-cols-3 gap-2">
              {['ti-shopping-bag', 'ti-bottle', 'ti-shirt'].map((ic) => (
                <div key={ic} className="rounded-md flex items-center justify-center" style={{ height: 32, background: 'rgba(155,107,255,0.18)' }}>
                  <i className={`ti ${ic}`} style={{ color: 'var(--lime)', fontSize: 15 }} aria-hidden="true" />
                </div>
              ))}
            </div>
          </Panel>
        </div>
      )
    case 'line-mini-apps':
      return (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="rounded-2xl" style={{ width: 96, height: 130, background: 'rgba(255,255,255,0.06)', border: glassBorder, padding: 9 }}>
            <div style={{ fontSize: 9, color: '#fff', marginBottom: 8 }}>LINE / Mini App</div>
            <div className="rounded-lg flex items-center justify-center mb-2" style={{ height: 40, background: 'rgba(0,180,90,0.18)', border: '1px solid rgba(0,200,100,0.35)' }}>
              <i className="ti ti-brand-line" style={{ color: 'var(--lime)', fontSize: 20 }} aria-hidden="true" />
            </div>
            <div className="rounded-md px-2 py-1.5 flex items-center gap-1.5" style={{ background: 'rgba(155,107,255,0.2)' }}>
              <i className="ti ti-check" style={{ color: 'var(--lime)', fontSize: 11 }} aria-hidden="true" />
              <span style={{ fontSize: 9, color: '#fff' }}>Booked!</span>
            </div>
          </div>
        </div>
      )
    case 'enterprise-solutions':
      return (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative" style={{ width: 190, height: 130 }}>
            <div className="absolute rounded-lg flex flex-col items-center justify-center gap-1" style={{ width: 50, top: '38%', left: '50%', transform: 'translate(-50%,-50%)', height: 44, background: 'rgba(155,107,255,0.25)', border: '1px solid var(--purple-light)' }}>
              <i className="ti ti-building-factory" style={{ color: 'var(--lime)', fontSize: 16 }} aria-hidden="true" />
              <span style={{ fontSize: 8, color: '#fff' }}>ERP</span>
            </div>
            {[
              { l: 'CRM', top: 0, left: 0 },
              { l: 'POS', top: 0, right: 0 },
              { l: 'FINANCE', bottom: 0, left: 0 },
              { l: 'INVENTORY', bottom: 0, right: 0 },
            ].map((b: any) => (
              <div key={b.l} className="absolute rounded-md px-2 py-1" style={{ ...b, background: glass, border: glassBorder }}>
                <span style={{ fontSize: 8, color: 'rgba(255,255,255,0.85)' }}>{b.l}</span>
              </div>
            ))}
          </div>
        </div>
      )
    case 'cybersecurity':
      return (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative flex items-center justify-center" style={{ width: 80, height: 80 }}>
            <div className="absolute rounded-full" style={{ width: 80, height: 80, border: '1px dashed rgba(255,255,255,0.15)' }} />
            <i className="ti ti-shield-check" style={{ color: 'var(--purple-light)', fontSize: 44 }} aria-hidden="true" />
            <div className="absolute rounded-md px-1.5 py-1 flex items-center gap-1" style={{ bottom: -6, right: -14, background: 'rgba(0,0,0,0.4)', border: glassBorder }}>
              <i className="ti ti-check" style={{ color: 'var(--lime)', fontSize: 10 }} aria-hidden="true" />
              <span style={{ fontSize: 8, color: '#fff' }}>Protected</span>
            </div>
          </div>
        </div>
      )
    case 'pdpa-compliance':
      return (
        <div className="absolute inset-0 flex items-center justify-center">
          <Panel style={{ width: 168 }}>
            <div style={{ fontSize: 9, color: dim, marginBottom: 8 }}>YOUR DATA. YOUR CHOICE.</div>
            <div className="space-y-2">
              {[{ l: 'Essential services', on: true }, { l: 'Analytics', on: false }, { l: 'Personalization', on: false }].map((r) => (
                <div key={r.l} className="flex items-center justify-between">
                  <span style={{ fontSize: 9, color: 'rgba(255,255,255,0.85)' }}>{r.l}</span>
                  <span className="rounded-full relative" style={{ width: 22, height: 12, background: r.on ? 'var(--lime)' : 'rgba(255,255,255,0.15)' }}>
                    <span className="absolute rounded-full bg-white" style={{ width: 9, height: 9, top: 1.5, left: r.on ? 11 : 2 }} />
                  </span>
                </div>
              ))}
            </div>
          </Panel>
        </div>
      )
    case 'support-maintenance':
      return (
        <div className="absolute inset-0 flex items-center justify-center">
          <Panel style={{ width: 178 }}>
            <div className="flex justify-between mb-3">
              {[{ l: 'UPTIME', v: '99.99%' }, { l: 'LATENCY', v: '42ms' }, { l: 'ERRORS', v: '0' }].map((s) => (
                <div key={s.l}>
                  <div style={{ fontSize: 7, color: dim }}>{s.l}</div>
                  <div style={{ fontSize: 11, color: '#fff', fontWeight: 500 }}>{s.v}</div>
                </div>
              ))}
            </div>
            <div className="flex items-end gap-[2px] h-6">
              {[30, 55, 40, 70, 45, 85, 50, 65, 35, 60].map((h, i) => (
                <div key={i} style={{ height: `${h}%`, width: 3, background: 'var(--lime)', borderRadius: 1, opacity: 0.8 }} />
              ))}
            </div>
          </Panel>
        </div>
      )
    default:
      return (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: 'rgba(155,107,255,0.2)', border: glassBorder }}>
            <i className="ti ti-sparkles" style={{ color: 'var(--lime)', fontSize: 20 }} aria-hidden="true" />
          </div>
        </div>
      )
  }
}

export default function Page({ params }: { params: { lang: Lang } }) {
  const lang = (params.lang === 'en' ? 'en' : 'th') as Lang
  const isEN = lang === 'en'
  const tr = t[lang] as any
  const prefix = `/${lang}`

  const categories = [
    {
      key: 'strategy-design',
      label: isEN ? 'Strategy & Design' : 'กลยุทธ์และดีไซน์',
      items: [
        { icon: 'ti-map', title: isEN ? 'Digital Transformation' : 'การเปลี่ยนแปลงสู่ดิจิทัล', href: '/services/digital-transformation', desc: isEN ? 'Modernize technology, process, and teams around outcomes that matter.' : 'ปรับองค์กรสู่ดิจิทัล เชื่อมเทคโนโลยี กระบวนการ และทีมเข้าด้วยกัน' },
        { icon: 'ti-user-search', title: isEN ? 'UI/UX & Product Design' : 'ออกแบบ UI/UX & Product', href: '/services/ux-ui-design', desc: isEN ? 'Interfaces and design systems that make complex products feel simple.' : 'ออกแบบหน้าตาและระบบดีไซน์ที่ทำให้ผลิตภัณฑ์ซับซ้อนใช้งานง่าย' },
      ],
    },
    {
      key: 'engineering',
      label: isEN ? 'Engineering' : 'พัฒนาซอฟต์แวร์',
      items: [
        { icon: 'ti-code', title: isEN ? 'Web Development' : 'พัฒนาเว็บไซต์', href: '/services/web-development', desc: isEN ? 'Production-grade web apps built for performance and maintainability.' : 'เว็บแอปพลิเคชันระดับ Production ที่เสถียร ปลอดภัย ดูแลง่าย' },
        { icon: 'ti-device-mobile', title: isEN ? 'Mobile App Development' : 'พัฒนาแอปมือถือ', href: '/services/mobile-apps', desc: isEN ? 'Native and cross-platform apps with the polish users expect.' : 'แอป Native และ Cross-platform ที่ลื่นไหลตามมาตรฐานผู้ใช้ปัจจุบัน' },
        { icon: 'ti-refresh-dot', title: isEN ? 'Application Modernization' : 'ปรับปรุงระบบเดิม', href: '/services/application-modernization', desc: isEN ? 'Incrementally modernize legacy systems without stopping the business.' : 'ปรับปรุงระบบเดิมทีละส่วน โดยไม่หยุดการทำงานของธุรกิจ' },
        { icon: 'ti-cloud-cog', title: isEN ? 'Cloud Services & Migration' : 'Cloud Services & Migration', href: '/services/cloud-services-migration', desc: isEN ? 'Migrate, modernize, and optimize cloud infrastructure and spend.' : 'ย้าย ปรับปรุง และเพิ่มประสิทธิภาพ Cloud Infrastructure และค่าใช้จ่าย' },
        { icon: 'ti-checklist', title: isEN ? 'Quality Assurance & Testing' : 'ทดสอบระบบ QA', href: '/services/quality-assurance-testing', desc: isEN ? 'Manual, exploratory, and automated testing that catches edge cases.' : 'ทดสอบระบบทั้งแบบ Manual และอัตโนมัติ ครอบคลุมทุก Edge Case' },
        { icon: 'ti-code-dots', title: isEN ? 'Finish Your Vibe-Coded App' : 'ช่วยจบ App ที่สร้างด้วย AI', href: '/services/finish-your-vibe-coded-app', desc: isEN ? 'Security hardening and production infrastructure for AI-built apps.' : 'Security Hardening และ Production Infrastructure สำหรับ App ที่สร้างด้วย AI' },
        { icon: 'ti-users', title: isEN ? 'Forward Deployed Engineering' : 'Forward Deployed Engineering', href: '/services/forward-deployed-engineering', desc: isEN ? 'Senior engineers embedded directly in your team to ship AI to production.' : 'Senior Engineer ที่ฝังตัวในทีมคุณ เพื่อส่งมอบ AI ถึง Production จริง' },
      ],
    },
    {
      key: 'ai-data',
      label: isEN ? 'AI & Data' : 'AI & ข้อมูล',
      items: [
        { icon: 'ti-robot', title: isEN ? 'AI Agents & Generative AI' : 'AI Agent และ Generative AI', href: '/services/ai', desc: isEN ? 'AI agents, RAG systems, and LLM products that automate real work.' : 'AI Agent และระบบ RAG ที่ทำงานได้จริง ไม่ใช่แค่ Demo' },
        { icon: 'ti-phone-calling', title: isEN ? 'AI Voice Agents' : 'AI Voice Agents', href: '/services/ai-voice-agents', desc: isEN ? 'Natural, low-latency voice agents that handle real phone calls.' : 'Voice Agent ที่พูดคุยเป็นธรรมชาติ Latency ต่ำ รับสายโทรศัพท์จริงได้' },
        { icon: 'ti-layout-dashboard', title: isEN ? 'Data Analytics & Engineering' : 'ข้อมูลและการวิเคราะห์', href: '/services/data-analytics', desc: isEN ? 'Dashboards and pipelines every team can understand and act on.' : 'Dashboard และ Pipeline ที่ทุกทีมเข้าใจและนำไปใช้ตัดสินใจได้ทันที' },
      ],
    },
    {
      key: 'commerce',
      label: isEN ? 'Commerce' : 'Commerce',
      items: [
        { icon: 'ti-shopping-cart', title: isEN ? 'E-Commerce Development' : 'พัฒนา E-Commerce', href: '/services/ecommerce', desc: isEN ? 'Headless, API-first commerce with a storefront built for your brand.' : 'Commerce แบบ Headless API-First พร้อม Storefront ที่สร้างเพื่อแบรนด์คุณ' },
        { icon: 'ti-brand-line', title: isEN ? 'LINE Mini App Development' : 'พัฒนา LINE Mini App', href: '/services/line-mini-apps', desc: isEN ? 'Mini Apps, chat commerce, and payments inside LINE.' : 'Mini App, Chat Commerce และ Payment ภายใน LINE' },
      ],
    },
    {
      key: 'enterprise-security',
      label: isEN ? 'Enterprise & Security' : 'องค์กรและความปลอดภัย',
      items: [
        { icon: 'ti-building-factory', title: isEN ? 'Enterprise Solutions (ERP / CRM / POS)' : 'ระบบองค์กร (ERP / CRM / POS)', href: '/services/enterprise-solutions', desc: isEN ? 'Implement and configure ERP, CRM, and POS systems to your requirements.' : 'ติดตั้งและปรับแต่งระบบ ERP, CRM และ POS ให้ตรงกับความต้องการธุรกิจ' },
        { icon: 'ti-shield-search', title: isEN ? 'Cybersecurity' : 'Cybersecurity', href: '/services/cybersecurity', desc: isEN ? 'Security assessments, secure-by-design engineering, and compliance support.' : 'Security Assessment, วิศวกรรมแบบ Secure-by-design และการสนับสนุน Compliance' },
        { icon: 'ti-shield-lock', title: isEN ? 'PDPA Compliance' : 'PDPA Compliance', href: '/services/pdpa-compliance', desc: isEN ? 'PDPA audit, consent management, and privacy engineering built in.' : 'PDPA Audit, จัดการ Consent และ Privacy Engineering ที่ฝังเข้าไปจริง' },
      ],
    },
    {
      key: 'support',
      label: isEN ? 'Support' : 'ดูแลและซัพพอร์ต',
      items: [
        { icon: 'ti-headset', title: isEN ? 'Managed Services & Support' : 'บำรุงรักษาและซัพพอร์ต', href: '/services/support-maintenance', desc: isEN ? '24/7 monitoring, alerting, and ongoing support after launch.' : 'Monitor ระบบตลอด 24 ชม. พร้อมซัพพอร์ตต่อเนื่องหลัง Launch' },
      ],
    },
  ]

  const segments = isEN ? [
    { icon: 'ti-building-skyscraper', title: 'Enterprise', desc: 'Full delivery teams for complex platforms, with the security, compliance, and process rigor large organizations expect.' },
    { icon: 'ti-rocket', title: 'Small Business & Startups', desc: 'Lean, focused builds that get the essentials right. We help you trim scope, not quality, so a modest budget still ships a solid product.' },
  ] : [
    { icon: 'ti-building-skyscraper', title: 'Enterprise', desc: 'ทีมงานครบวงจรสำหรับแพลตฟอร์มซับซ้อน พร้อมมาตรฐานความปลอดภัยและกระบวนการที่องค์กรใหญ่ต้องการ' },
    { icon: 'ti-rocket', title: 'ธุรกิจขนาดเล็ก & Startup', desc: 'งานที่กระชับตรงจุด เราช่วยตัดสิ่งที่ไม่จำเป็นออก ไม่ใช่คุณภาพ งบไม่มากก็ได้โปรดักต์ที่แข็งแรง' },
  ]

  return (
    <>
      <Navbar lang={lang} tr={tr} />
      <main>
        {/* Hero */}
        <section className="pt-[80px] bg-white">
          <div className="h-1 w-full" style={{ background: 'linear-gradient(90deg,var(--purple),var(--purple-light),var(--lime))' }} />
          <div className="max-w-5xl mx-auto px-6 lg:px-10 pt-20 lg:pt-28 pb-16 text-center">
            <p className="t-label mb-5">{isEN ? 'Services' : 'บริการ'}</p>
            <h1 className="t-display text-[clamp(2.6rem,5.5vw,4.8rem)] text-[#0A0A0F] leading-normal mb-6">
              {isEN ? (
                <>Everything You Need,<br /><span style={{ background: 'linear-gradient(135deg,var(--purple) 0%,var(--purple-light) 50%,var(--lime) 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>In One Studio</span></>
              ) : (
                <>ทุกความสามารถที่คุณต้องการ<br /><span style={{ background: 'linear-gradient(135deg,var(--purple) 0%,var(--purple-light) 50%,var(--lime) 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>ในสตูดิโอเดียว</span></>
              )}
            </h1>
            <p className="t-body text-lg leading-relaxed max-w-2xl mx-auto">
              {isEN
                ? 'From strategy to design, engineering, and AI — we cover every discipline a digital product needs, under one roof.'
                : 'ตั้งแต่กลยุทธ์ ดีไซน์ พัฒนาระบบ ไปจนถึง AI เราครอบคลุมทุกศาสตร์ที่ผลิตภัณฑ์ดิจิทัลต้องการ ในทีมเดียว'}
            </p>
          </div>
        </section>

        {/* Category sections */}
        <section className="pb-24 pt-4" style={{ background: '#08070E' }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            {categories.map((cat, ci) => (
              <div key={cat.key} className={`py-12 ${ci !== 0 ? 'border-t' : ''}`} style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
                <h2 className="mb-8" style={{ fontWeight: 500, fontSize: '1.4rem', color: 'var(--lime)' }}>{cat.label}</h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14">
                  {cat.items.map((it) => {
                    const slug = it.href.split('/').pop() as string
                    return (
                      <Link key={it.href} href={`${prefix}${it.href}`} className="group flex flex-col">
                        {/* Visual mockup thumbnail */}
                        <div
                          className="relative h-56 rounded-2xl overflow-hidden mb-6 group-hover:border-[var(--purple-light)]/40 transition-colors"
                          style={{ background: 'linear-gradient(160deg,#171025 0%,#0B0813 100%)', border: '1px solid rgba(255,255,255,0.07)' }}
                        >
                          <div className="absolute inset-0 opacity-[0.08] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle,#fff 1px,transparent 1px)', backgroundSize: '18px 18px' }} />
                          <ServiceVisual slug={slug} />
                        </div>
                        {/* Content */}
                        <h3 className="text-white mb-2.5" style={{ fontWeight: 500, fontSize: '1.2rem' }}>{it.title}</h3>
                        <p className="text-sm leading-relaxed mb-4" style={{ color: 'rgba(255,255,255,0.85)', fontWeight: 400 }}>{it.desc}</p>
                        <span className="inline-flex items-center gap-1.5 text-sm mt-auto" style={{ color: 'var(--lime)', fontWeight: 500 }}>
                          {isEN ? 'Learn more' : 'ดูเพิ่มเติม'}
                          <i className="ti ti-arrow-right text-sm group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                        </span>
                      </Link>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Segments */}
        <section className="py-20" style={{ background: '#F7F7FC' }}>
          <div className="max-w-5xl mx-auto px-6 lg:px-10">
            <div className="text-center mb-12">
              <p className="t-label mb-5">{isEN ? 'Who We Work With' : 'เราทำงานกับใคร'}</p>
              <h2 className="t-display text-[clamp(2rem,4vw,3rem)] text-[#0A0A0F]">
                {isEN ? 'Built for Your Scale' : 'ออกแบบให้เหมาะกับขนาดธุรกิจคุณ'}
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              {segments.map((seg) => (
                <div key={seg.title} className="bg-white border border-[#E4E4EC] rounded-2xl p-8">
                  <div className="w-12 h-12 rounded-xl bg-[var(--purple-bg)] flex items-center justify-center mb-6">
                    <i className={`ti ${seg.icon}`} style={{ fontSize: 22, color: 'var(--purple)' }} aria-hidden="true" />
                  </div>
                  <h3 className="text-[#0A0A0F] mb-3" style={{ fontWeight: 500, fontSize: '1.3rem' }}>{seg.title}</h3>
                  <p className="t-body text-sm leading-relaxed">{seg.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 lg:py-32 relative overflow-hidden" style={{ background: 'linear-gradient(135deg,#2D1B69 0%,var(--purple) 40%,var(--purple-light) 100%)' }}>
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle,#fff 1px,transparent 1px)', backgroundSize: '28px 28px' }} />
          <div className="relative max-w-4xl mx-auto px-4 lg:px-10 text-center">
            <p className="mb-6" style={{ color: '#ffffff', fontSize: '0.85rem', fontWeight: 400 }}>{isEN ? 'Start Today' : 'เริ่มต้นวันนี้'}</p>
            <h2 className="t-display mb-4 leading-tight" style={{ color: '#ffffff', fontSize: 'clamp(2rem,4vw,4rem)', fontWeight: 500 }}>
              {isEN ? 'Not Sure Where to Start?' : 'ไม่แน่ใจว่าจะเริ่มจากตรงไหน?'}
            </h2>
            <p className="text-white text-base mb-10 max-w-lg mx-auto" style={{ fontWeight: 400 }}>
              {isEN ? 'Tell us about your project and we will point you to the right service.' : 'เล่าให้เราฟังเรื่องโปรเจกต์ของคุณ แล้วเราจะแนะนำบริการที่ใช่ที่สุด'}
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href={`${prefix}/contact`} className="inline-flex items-center gap-2 px-10 py-4 bg-white rounded-full text-sm font-medium hover:bg-[var(--purple-bg)] transition-colors" style={{ color: 'var(--purple)', fontWeight: 400 }}>
                {isEN ? 'Talk to Us' : 'คุยกับเรา'}
                <i className="ti ti-arrow-right" style={{ fontSize: 15 }} aria-hidden="true" />
              </Link>
              <Link href="mailto:wu@haliviq.com" className="inline-flex items-center gap-2 px-10 py-4 border border-white/30 text-white rounded-full text-sm hover:border-white/60 transition-colors" style={{ fontWeight: 400 }}>
                wu@haliviq.com
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer lang={lang} tr={tr} />
    </>
  )
}
