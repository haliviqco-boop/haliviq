'use client'
import { usePathname, useRouter } from 'next/navigation'
import { type Lang } from '@/lib/i18n'

export default function LangSwitcher() {
  const pathname = usePathname()
  const router = useRouter()
  const segments = pathname.split('/')
  const currentLang = (['th','en'].includes(segments[1]) ? segments[1] : 'th') as Lang

  const switchLang = (lang: Lang) => {
    if (lang === currentLang) return
    const rest = segments.slice(2).join('/')
    router.push(`/${lang}${rest ? '/' + rest : ''}`)
  }

  return (
    <div className="flex items-center gap-0.5 border border-[#E4E4EC] rounded-full p-0.5 bg-[#F7F7FC]">
      {(['th', 'en'] as Lang[]).map(lang => (
        <button key={lang} onClick={() => switchLang(lang)}
          className="px-3 py-1.5 rounded-full text-xs transition-all"
          style={{ fontWeight:400, fontFamily:'var(--font-main)',
            background: currentLang===lang ? 'var(--purple)' : 'transparent',
            color: currentLang===lang ? '#fff' : '#70708A' }}>
          {lang === 'th' ? 'ไทย' : 'EN'}
        </button>
      ))}
    </div>
  )
}
