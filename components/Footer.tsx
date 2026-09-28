'use client'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { type Lang, type T } from '@/lib/i18n'
type Props = { lang: Lang; tr: T }

export default function Footer({ lang, tr }: Props) {
  const f = tr.footer as any
  const prefix = `/${lang}`
  const year = new Date().getFullYear()
  const pathname = usePathname()
  const router = useRouter()

  const switchLang = (target: Lang) => {
    if (target === lang) return
    const segments = pathname.split('/')
    const rest = segments.slice(2).join('/')
    router.push(`/${target}${rest ? '/' + rest : ''}`)
  }

  return (
    <footer style={{ background: '#08070F' }}>
      <div className="max-w-7xl mx-auto px-4 lg:px-10">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-6 py-16 lg:py-20">
          {/* Brand column */}
          <div className="col-span-2">
            <img src="/haliviq-logo-light.svg" alt="Haliviq" className="h-9 w-auto mb-4" />
            <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.9rem', fontWeight: 400 }}>
              {f.locations}
            </p>

            <div className="flex gap-3 mt-5 mb-8">
              {[
                { name: 'Facebook', url: 'https://www.facebook.com/profile.php?id=61588746437485', svg: <svg width="16" height="16" viewBox="0 0 24 24" fill="rgba(255,255,255,0.7)"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg> },
                { name: 'Instagram', url: '#', svg: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg> },
                { name: 'LinkedIn', url: '#', svg: <svg width="16" height="16" viewBox="0 0 24 24" fill="rgba(255,255,255,0.7)"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45z" /></svg> },
                { name: 'Line', url: 'https://lin.ee/x74YsJH', svg: <svg width="16" height="16" viewBox="0 0 24 24" fill="rgba(255,255,255,0.7)"><path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.281.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" /></svg> },
              ].map(({ name, url, svg }) => (
                <a key={name} href={url} target="_blank" rel="noopener noreferrer" aria-label={name}
                  className="w-9 h-9 rounded-full flex items-center justify-center transition-all hover:scale-110"
                  style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}>
                  {svg}
                </a>
              ))}
            </div>

            <p style={{ color: '#fff', fontSize: '0.95rem', fontWeight: 500, marginBottom: 4 }}>
              {f.legalName}
            </p>
            <div style={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.85rem', fontWeight: 400, lineHeight: 1.7 }}>
              {(f.addressLines as string[]).map((line: string) => <p key={line}>{line}</p>)}
            </div>
            <div className="mt-3" style={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.85rem', fontWeight: 400, lineHeight: 1.8 }}>
              <p>{f.phone}</p>
              <p>{f.salesLabel}: wu@haliviq.com</p>
              <p>{f.supportLabel}: info@haliviq.com</p>
            </div>
          </div>

          {Object.entries(f.sections).map(([heading, items]) => (
            <div key={heading}>
              <p className="mb-4" style={{ fontSize: '1rem', fontWeight: 500, color: '#fff' }}>{heading}</p>
              <ul className="space-y-0">
                {(items as { l: string; h: string }[]).map(i => (
                  <li key={i.h}>
                    <Link href={`${prefix}${i.h}`}
                      className="block py-1.5 hover:text-[var(--purple-light)] transition-colors"
                      style={{ fontWeight: 400, fontSize: '0.9rem', color: 'rgba(255,255,255,0.85)' }}>{i.l}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Language switcher row */}
        <div className="flex items-center gap-3 pb-8" style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: 28 }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.45)" strokeWidth="1.6">
            <circle cx="12" cy="12" r="9.5" />
            <path d="M2.5 12h19M12 2.5c2.5 2.7 3.8 6 3.8 9.5s-1.3 6.8-3.8 9.5c-2.5-2.7-3.8-6-3.8-9.5S9.5 5.2 12 2.5z" />
          </svg>
          {(['th', 'en'] as Lang[]).map(l => (
            <button
              key={l}
              onClick={() => switchLang(l)}
              className="text-xs transition-colors"
              style={{
                fontWeight: lang === l ? 500 : 300,
                color: lang === l ? '#fff' : 'rgba(255,255,255,0.45)',
              }}
            >
              {l === 'th' ? 'ไทย' : 'English'}
            </button>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-6" style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
          <p className="text-xs" style={{ color: 'rgba(255,255,255,0.4)', fontWeight: 400 }}>© {year} {f.rights}</p>
          <div className="flex gap-6">
            <Link href="#" className="text-xs hover:text-white transition-colors" style={{ color: 'rgba(255,255,255,0.4)', fontWeight: 400 }}>{f.privacy}</Link>
            <Link href="#" className="text-xs hover:text-white transition-colors" style={{ color: 'rgba(255,255,255,0.4)', fontWeight: 400 }}>{f.terms}</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
