'use client'
import { useEffect, useState } from 'react'

type Theme = 'dark' | 'light'

// Cute sun / moon pill. The knob slides, the moon swaps for a sun, stars twinkle
// at night and a little cloud drifts in by day. Dark is the default theme.
export default function ThemeToggle({ lang = 'th' }: { lang?: 'th' | 'en' }) {
  const [theme, setTheme] = useState<Theme>('dark')

  // Re-assert the saved theme on mount: if React ever re-renders <html> (e.g. recovering
  // from a hydration mismatch on a page), it would otherwise drop the attribute.
  useEffect(() => {
    let saved: string | null = null
    try { saved = localStorage.getItem('haliviq-theme') } catch {}
    const t: Theme = saved === 'light' ? 'light' : 'dark'
    document.documentElement.setAttribute('data-theme', t)
    setTheme(t)
  }, [])

  const toggle = () => {
    const next: Theme = theme === 'dark' ? 'light' : 'dark'
    setTheme(next)
    document.documentElement.setAttribute('data-theme', next)
    try { localStorage.setItem('haliviq-theme', next) } catch {}
  }

  const isLight = theme === 'light'
  const label = lang === 'en'
    ? (isLight ? 'Switch to dark mode' : 'Switch to light mode')
    : (isLight ? 'เปลี่ยนเป็นโหมดมืด' : 'เปลี่ยนเป็นโหมดสว่าง')

  return (
    <button type="button" className="theme-toggle" onClick={toggle} role="switch" aria-checked={isLight} aria-label={label} title={label}>
      <span className="tt-star" style={{ top: 8, left: 32 }} />
      <span className="tt-star" style={{ top: 18, left: 38, width: 2, height: 2, animationDelay: '.6s' }} />
      <span className="tt-star" style={{ top: 11, left: 44, width: 2, height: 2, animationDelay: '1.2s' }} />
      <span className="tt-cloud" style={{ top: 15, left: 9 }} />
      <span className="tt-knob">
        <svg className="tt-moon" width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M20.5 14.2A8.5 8.5 0 0 1 9.8 3.5a8.5 8.5 0 1 0 10.7 10.7Z" fill="#FFF3C4" />
          <circle cx="9" cy="12" r="1.1" fill="#D9C98A" /><circle cx="13.5" cy="16.5" r="0.8" fill="#D9C98A" />
        </svg>
        <svg className="tt-sun" width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <circle cx="12" cy="12" r="4.6" fill="#fff" />
          <g stroke="#fff" strokeWidth="2" strokeLinecap="round">
            <path d="M12 2.5v2.4M12 19.1v2.4M2.5 12h2.4M19.1 12h2.4M5.3 5.3l1.7 1.7M17 17l1.7 1.7M5.3 18.7 7 17M17 7l1.7-1.7" />
          </g>
        </svg>
      </span>
    </button>
  )
}
