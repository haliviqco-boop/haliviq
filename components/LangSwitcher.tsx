'use client'
import { usePathname, useRouter } from 'next/navigation'
import { type Lang } from '@/lib/i18n'

export default function LangSwitcher() {
  const pathname = usePathname()
  const router = useRouter()
  const segments = pathname.split('/')
  const currentLang = (['th','en'].includes(segments[1]) ? segments[1] : 'en') as Lang

  const switchLang = (lang: Lang) => {
    if (lang === currentLang) return
    const rest = segments.slice(2).join('/')
    router.push(`/${lang}${rest ? '/' + rest : ''}`)
  }

  return (
    <div className="flex items-center gap-0.5 rounded-full p-0.5" style={{ border: '1px solid rgba(255,255,255,0.12)', background: 'rgba(255,255,255,0.04)' }}>
      {(['en', 'th'] as Lang[]).map(lang => (
        <button key={lang} onClick={() => switchLang(lang)}
          className="px-3 py-1.5 rounded-full text-xs transition-all"
          style={{ fontWeight:400, fontFamily:'var(--font-main)',
            background: currentLang===lang ? 'var(--purple)' : 'transparent',
            color: currentLang===lang ? '#fff' : 'rgba(255,255,255,0.55)' }}>
          {lang === 'th' ? 'ไทย' : 'EN'}
        </button>
      ))}
    </div>
  )
}
