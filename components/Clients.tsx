'use client'
import { type Lang, type T } from '@/lib/i18n'
type Props = { lang: Lang; tr: T }

const clients = [
  { name: 'NFI สถาบันอาหาร', img: '/images/clients/nfi.png' },
  { name: 'กระทรวงพาณิชย์', img: '/images/clients/ministry-commerce.png' },
  { name: 'กระทรวงพลังงาน', img: '/images/clients/ministry-energy.png' },
  { name: 'กระทรวงแรงงาน', img: '/images/clients/ministry-labour.png' },
  { name: 'DITP', img: '/images/clients/ditp.png' },
]

export default function Clients({ tr }: Props) {
  return (
    <section className="py-16 border-y overflow-hidden" style={{ background: '#0B0918', borderColor: 'rgba(255,255,255,0.08)' }}>
      <div className="max-w-7xl mx-auto px-4 lg:px-10 mb-12 text-center">
        <p style={{
          fontFamily: 'var(--font-main)',
          fontWeight: 400,
          fontSize: 'clamp(1.2rem,2.5vw,1.6rem)',
          color: 'rgba(255,255,255,0.85)',
          letterSpacing: '-0.01em',
        }}>
          {tr.clients.label}
        </p>
      </div>

      <div className="marquee-wrap relative">
        <div className="absolute left-0 inset-y-0 w-24 z-10 pointer-events-none" style={{ background: 'linear-gradient(to right, #0B0918, transparent)' }}/>
        <div className="absolute right-0 inset-y-0 w-24 z-10 pointer-events-none" style={{ background: 'linear-gradient(to left, #0B0918, transparent)' }}/>
        <div className="marquee-inner marquee-slow">
          {[...clients, ...clients].map((c, i) => (
            <div key={i} className="flex items-center justify-center px-12 shrink-0">
              <img
                src={c.img}
                alt={c.name}
                className="h-14 w-auto object-contain client-logo"
                style={{ maxWidth: '180px' }}
              />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .client-logo {
          opacity: 0.75;
          filter: grayscale(1) brightness(1.8);
          transition: opacity 0.3s, filter 0.3s;
        }
        .client-logo:hover {
          opacity: 1;
          filter: grayscale(1) brightness(2);
        }
      `}</style>
    </section>
  )
}
