'use client'
import { useRef, useState } from 'react'
import Link from 'next/link'
import { type Lang, type T } from '@/lib/i18n'

type Props = { lang: Lang; tr: T }

const gradients = [
  'linear-gradient(135deg, #7B6EF6 0%, #A99CF8 100%)',
  'linear-gradient(135deg, #5A4ED4 0%, #7B6EF6 100%)',
  'linear-gradient(135deg, #A99CF8 0%, #A8D832 100%)',
  'linear-gradient(135deg, #7B6EF6 0%, #A8D832 100%)',
  'linear-gradient(135deg, #5A4ED4 0%, #A8D832 100%)',
]

function ArticleImage({ src, i }: { src: string; i: number }) {
  const [broken, setBroken] = useState(false)
  return (
    <div className="relative w-full rounded-2xl overflow-hidden" style={{ aspectRatio: '16/10' }}>
      {!broken ? (
        <img
          src={src}
          alt=""
          onError={() => setBroken(true)}
          className="absolute inset-0 w-full h-full object-cover"
        />
      ) : (
        <div className="absolute inset-0" style={{ background: gradients[i % gradients.length] }}>
          <svg
            className="absolute inset-0 m-auto opacity-30"
            width="40" height="40" viewBox="0 0 24 24" fill="none"
          >
            <rect x="3" y="4" width="18" height="14" rx="2" stroke="#fff" strokeWidth="1.5" />
            <circle cx="8" cy="9" r="1.6" stroke="#fff" strokeWidth="1.5" />
            <path d="M3 15l5-4 4 3 4-5 5 6" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      )}
    </div>
  )
}

export default function LatestThinking({ lang, tr }: Props) {
  const lt = (tr as any).latestThinking
  const items = lt.items as { slug: string; img: string; title: string; excerpt: string }[]
  const prefix = `/${lang}`
  const scrollerRef = useRef<HTMLDivElement>(null)

  const scrollByCard = (dir: 1 | -1) => {
    const el = scrollerRef.current
    if (!el) return
    const card = el.querySelector<HTMLElement>('[data-card]')
    const step = card ? card.offsetWidth + 20 : el.clientWidth * 0.8
    el.scrollBy({ left: dir * step, behavior: 'smooth' })
  }

  return (
    <section className="relative overflow-hidden py-24 lg:py-32" style={{ background: '#0B0A16' }}>
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.05]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />
      <div
        className="absolute pointer-events-none"
        style={{
          top: '-15%', left: '-10%', width: '50%', aspectRatio: '1/1',
          background: 'radial-gradient(circle, rgba(168,216,50,0.12) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />

      <div className="relative max-w-[1600px] mx-auto px-4 lg:px-10">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-10 lg:mb-12">
          <div>
            <h2 className="t-display mb-3" style={{ color: '#fff', fontSize: 'clamp(2.25rem,4.5vw,3.5rem)' }}>
              {lt.h2}
            </h2>
            <p
              className="t-display"
              style={{
                fontSize: '1.15rem',
                fontWeight: 500,
                background: 'linear-gradient(90deg, var(--purple-light) 0%, var(--lime) 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              {lt.subtitle}
            </p>
          </div>

          {/* scroll controls */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              type="button"
              aria-label="Previous"
              onClick={() => scrollByCard(-1)}
              className="w-11 h-11 rounded-full flex items-center justify-center border border-white/15 hover:border-[var(--purple)]/60 hover:bg-white/5 transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M15 6l-6 6 6 6" stroke="#fff" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </button>
            <button
              type="button"
              aria-label="Next"
              onClick={() => scrollByCard(1)}
              className="w-11 h-11 rounded-full flex items-center justify-center border border-white/15 hover:border-[var(--purple)]/60 hover:bg-white/5 transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M9 6l6 6-6 6" stroke="#fff" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </button>
          </div>
        </div>

        <div
          ref={scrollerRef}
          className="no-scrollbar flex gap-5 overflow-x-auto snap-x snap-mandatory pb-2"
          style={{ scrollBehavior: 'smooth' }}
        >
          {items.map((post, i) => (
            <Link
              key={post.slug}
              data-card
              href={`${prefix}/blog/${post.slug}`}
              className="group flex-none snap-start flex flex-col gap-5 p-5 rounded-3xl border border-white/10 hover:border-[var(--purple)]/50 transition-colors duration-300"
              style={{ width: 'clamp(210px, calc((100% - 4*1.25rem)/5), 280px)' }}
            >
              <ArticleImage src={post.img} i={i} />
              <div className="flex flex-col gap-3 px-1 pb-1">
                <h3
                  className="t-display leading-snug transition-colors duration-300"
                  style={{ color: '#fff', fontSize: '0.95rem' }}
                >
                  <span className="group-hover:opacity-80 transition-opacity">{post.title}</span>
                </h3>
                <p className="t-body" style={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.88rem', lineHeight: 1.6 }}>
                  {post.excerpt}
                </p>
                <span
                  className="inline-flex items-center gap-1.5 text-sm mt-1"
                  style={{ color: 'rgba(255,255,255,0.85)', fontWeight: 400 }}
                >
                  {lt.readArticle}
                  <svg width="13" height="13" viewBox="0 0 12 12" fill="none" className="transition-transform duration-300 group-hover:translate-x-1">
                    <path d="M2 10L10 2M10 2H4M10 2v6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-10 lg:mt-12">
          <Link
            href={`${prefix}/blog`}
            className="inline-flex items-center gap-2 text-base"
            style={{ color: 'rgba(255,255,255,0.85)', fontWeight: 400 }}
          >
            {lt.readMore}
            <svg width="15" height="15" viewBox="0 0 12 12" fill="none"><path d="M2 10L10 2M10 2H4M10 2v6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
