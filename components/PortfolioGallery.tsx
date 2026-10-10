'use client'
import Link from 'next/link'
import { type Lang, type T } from '@/lib/i18n'

type Props = { lang: Lang; tr: T }
type Item = { tag: string; title: string; img: string }

const gradients = [
  'linear-gradient(135deg, var(--purple) 0%, var(--purple-light) 100%)',
  'linear-gradient(135deg, var(--purple-light) 0%, var(--lime) 100%)',
  'linear-gradient(135deg, var(--purple-dark) 0%, var(--purple) 100%)',
  'linear-gradient(135deg, var(--purple) 0%, var(--lime) 100%)',
]

function GalleryCard({ it, prefix, height, index }: { it: Item; prefix: string; height: number; index: number }) {
  return (
    <Link
      href={`${prefix}/work`}
      className="group relative rounded-2xl overflow-hidden block"
      style={{ height, background: '#141329', border: '1px solid rgb(var(--fg) / 0.08)' }}
    >
      {it.img ? (
        <img
          src={it.img}
          alt={it.title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center transition-transform duration-500 group-hover:scale-105" style={{ background: gradients[index % gradients.length] }}>
          <i className="ti ti-photo" style={{ fontSize: 28, color: 'var(--ink)', opacity: 0.35 }} aria-hidden="true" />
        </div>
      )}
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(180deg, transparent 45%, rgba(8,7,15,0.9) 100%)' }}
      />
      <div className="theme-dark absolute left-0 right-0 bottom-0 p-4 lg:p-5" style={{ background: 'transparent' }}>
        <p
          className="mb-1"
          style={{
            fontSize: '0.7rem',
            fontWeight: 600,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            background: 'linear-gradient(90deg, var(--purple-light) 0%, var(--lime) 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          {it.tag}
        </p>
        <h3 style={{ color: 'var(--ink)', fontWeight: 500, fontSize: '0.95rem', lineHeight: 1.3 }}>{it.title}</h3>
      </div>
    </Link>
  )
}

export default function PortfolioGallery({ lang, tr }: Props) {
  const pg = (tr as any).portfolioGallery
  const items = pg.items as { tag: string; title: string; img: string }[]
  const prefix = `/${lang}`

  return (
    <section className="relative overflow-hidden pb-24 lg:pb-32" style={{ background: 'var(--bg)' }}>
      <div className="relative max-w-7xl mx-auto px-4 lg:px-10">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-10 lg:mb-12">
          <h2 className="t-display" style={{ color: 'var(--ink)', fontSize: 'clamp(1.75rem,3.2vw,2.5rem)' }}>
            {pg.h2}
          </h2>
        </div>

        {/* Row 1: narrow / narrow / wide */}
        <div
          className="grid gap-4 lg:gap-5 mb-4 lg:mb-5"
          style={{ gridTemplateColumns: '1fr' }}
        >
          <div
            className="hidden lg:grid gap-5"
            style={{ gridTemplateColumns: '0.85fr 0.65fr 1.7fr' }}
          >
            {items.slice(0, 3).map((it, i) => (
              <GalleryCard key={it.title} it={it} prefix={prefix} height={440} index={i} />
            ))}
          </div>
          <div className="grid grid-cols-2 gap-4 lg:hidden">
            {items.slice(0, 3).map((it, i) => (
              <div key={it.title} className={i === 2 ? 'col-span-2' : ''}>
                <GalleryCard it={it} prefix={prefix} height={280} index={i} />
              </div>
            ))}
          </div>
        </div>

        {/* Row 2: wide / narrow / narrow */}
        <div style={{ gridTemplateColumns: '1fr' }} className="grid">
          <div
            className="hidden lg:grid gap-5"
            style={{ gridTemplateColumns: '1.15fr 0.6fr 1.55fr' }}
          >
            {items.slice(3, 6).map((it, i) => (
              <GalleryCard key={it.title} it={it} prefix={prefix} height={320} index={i + 3} />
            ))}
          </div>
          <div className="grid grid-cols-2 gap-4 lg:hidden">
            {items.slice(3, 6).map((it, i) => (
              <div key={it.title} className={i === 2 ? 'col-span-2' : ''}>
                <GalleryCard it={it} prefix={prefix} height={280} index={i + 3} />
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-10 lg:mt-14">
          <Link
            href={`${prefix}/work`}
            className="inline-flex items-center gap-2 text-sm"
            style={{ color: 'rgb(var(--fg) / 0.85)', fontWeight: 400 }}
          >
            {pg.viewAll}
            <svg width="14" height="14" viewBox="0 0 12 12" fill="none"><path d="M2 10L10 2M10 2H4M10 2v6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
