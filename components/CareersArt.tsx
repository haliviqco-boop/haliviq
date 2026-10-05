// Original abstract illustrations for the Careers page (dark theme, purple + cyan)
const P = '#7B6EF6', PL = '#A99CF8', C = '#53C3D7', INK = '#0E0C1C'

function Frame({ children, id, viewBox = '0 0 400 300' }: { children: React.ReactNode; id: string; viewBox?: string }) {
  return (
    <svg viewBox={viewBox} className="w-full h-full block" preserveAspectRatio="xMidYMid slice" role="img" aria-hidden="true">
      <defs>
        <linearGradient id={`${id}-bg`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#15112B" /><stop offset="1" stopColor="#0A0817" />
        </linearGradient>
        <radialGradient id={`${id}-glow`} cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor={P} stopOpacity="0.45" /><stop offset="1" stopColor={P} stopOpacity="0" />
        </radialGradient>
        <linearGradient id={`${id}-g`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor={P} /><stop offset="1" stopColor={C} />
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id}-bg)`} />
      {children}
    </svg>
  )
}

const Person = ({ x, y, s = 1, skin = '#F2C9A8', top = P, hair = '#2A2140' }: { x: number; y: number; s?: number; skin?: string; top?: string; hair?: string }) => (
  <g transform={`translate(${x} ${y}) scale(${s})`}>
    <path d="M-26 70 Q-26 28 0 28 Q26 28 26 70 Z" fill={top} />
    <circle cx="0" cy="8" r="15" fill={skin} />
    <path d="M-16 6 Q-14 -10 2 -10 Q16 -9 16 6 Q8 -2 -16 6Z" fill={hair} />
  </g>
)

/** Hero: team around a big shared screen */
export function HeroArt() {
  return (
    <Frame id="hero" viewBox="0 0 560 560">
      <circle cx="280" cy="250" r="230" fill="url(#hero-glow)" />
      <g fill="none" stroke="rgba(255,255,255,0.08)">
        <circle cx="280" cy="270" r="200" /><circle cx="280" cy="270" r="140" strokeDasharray="4 8" />
      </g>
      {/* big screen */}
      <rect x="110" y="90" width="340" height="220" rx="18" fill="#0F0C20" stroke="rgba(255,255,255,0.18)" />
      <rect x="110" y="90" width="340" height="30" rx="18" fill="#1A1633" />
      <circle cx="132" cy="105" r="4.5" fill="#FF6B7A" /><circle cx="148" cy="105" r="4.5" fill="#FFC857" /><circle cx="164" cy="105" r="4.5" fill="#5BE0A1" />
      <rect x="132" y="140" width="130" height="14" rx="7" fill="url(#hero-g)" />
      <rect x="132" y="164" width="190" height="8" rx="4" fill="rgba(255,255,255,0.25)" />
      <rect x="132" y="180" width="160" height="8" rx="4" fill="rgba(255,255,255,0.15)" />
      <rect x="132" y="218" width="96" height="60" rx="10" fill="rgba(123,110,246,0.25)" stroke={P} />
      <rect x="240" y="218" width="96" height="60" rx="10" fill="rgba(83,195,215,0.18)" stroke={C} />
      <rect x="348" y="140" width="84" height="138" rx="10" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.15)" />
      <path d="M358 255 L376 228 L392 244 L410 206 L424 222" fill="none" stroke={C} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      {/* stand + desk */}
      <rect x="262" y="310" width="36" height="22" fill="#1A1633" />
      <rect x="70" y="440" width="420" height="14" rx="7" fill="#1A1633" />
      {/* people */}
      <Person x={150} y={350} s={1.15} top={P} />
      <Person x={280} y={340} s={1.25} top={C} skin="#D9A37E" hair="#161226" />
      <Person x={410} y={350} s={1.15} top={PL} skin="#F5D4B8" hair="#4A2F1F" />
      {/* floating chips */}
      <g>
        <rect x="52" y="150" width="86" height="34" rx="17" fill="#15112B" stroke={P} />
        <text x="95" y="172" textAnchor="middle" fontSize="13" fill="#fff" fontFamily="sans-serif">Design</text>
        <rect x="430" y="110" width="90" height="34" rx="17" fill="#15112B" stroke={C} />
        <text x="475" y="132" textAnchor="middle" fontSize="13" fill="#fff" fontFamily="sans-serif">Code</text>
        <rect x="446" y="340" width="82" height="34" rx="17" fill="#15112B" stroke={PL} />
        <text x="487" y="362" textAnchor="middle" fontSize="13" fill="#fff" fontFamily="sans-serif">AI</text>
      </g>
      <g fill="#fff" opacity="0.7">
        <circle cx="70" cy="70" r="2" /><circle cx="500" cy="60" r="2.5" /><circle cx="520" cy="250" r="1.8" /><circle cx="40" cy="300" r="2" />
      </g>
    </Frame>
  )
}

/** Culture: autonomy / trust network */
export function CultureArt() {
  const nodes = [[100, 70], [300, 60], [340, 190], [210, 250], [60, 190]]
  return (
    <Frame id="cult">
      <circle cx="200" cy="150" r="130" fill="url(#cult-glow)" />
      <g stroke="rgba(169,156,248,0.45)" strokeWidth="1.5">
        {nodes.map(([x, y], i) => <line key={i} x1="200" y1="150" x2={x} y2={y} />)}
        {nodes.map(([x, y], i) => { const [x2, y2] = nodes[(i + 1) % nodes.length]; return <line key={`r${i}`} x1={x} y1={y} x2={x2} y2={y2} strokeDasharray="3 6" /> })}
      </g>
      {nodes.map(([x, y], i) => (
        <g key={i}>
          <circle cx={x} cy={y} r="26" fill="#15112B" stroke={i % 2 ? C : P} strokeWidth="2" />
          <circle cx={x} cy={y - 5} r="7" fill={i % 2 ? C : PL} />
          <path d={`M${x - 12} ${y + 14} Q${x} ${y} ${x + 12} ${y + 14}`} fill={i % 2 ? C : PL} />
        </g>
      ))}
      <circle cx="200" cy="150" r="38" fill="url(#cult-g)" />
      <path d="M200 128 L206 145 L224 145 L210 156 L215 173 L200 163 L185 173 L190 156 L176 145 L194 145 Z" fill="#fff" />
    </Frame>
  )
}

/** Gallery tiles */
export function OfficeArt() {
  return (
    <Frame id="off" viewBox="0 0 520 440">
      <circle cx="400" cy="90" r="120" fill="url(#off-glow)" />
      {/* skyline window */}
      <rect x="40" y="40" width="440" height="230" rx="14" fill="#0F0C20" stroke="rgba(255,255,255,0.15)" />
      <g fill="#1B1736">
        <rect x="70" y="150" width="46" height="120" /><rect x="124" y="110" width="58" height="160" /><rect x="190" y="170" width="40" height="100" />
        <rect x="240" y="90" width="64" height="180" /><rect x="312" y="140" width="50" height="130" /><rect x="370" y="120" width="60" height="150" />
      </g>
      <g fill={C} opacity="0.7">
        <rect x="134" y="125" width="8" height="8" /><rect x="150" y="125" width="8" height="8" /><rect x="250" y="108" width="8" height="8" /><rect x="268" y="130" width="8" height="8" /><rect x="380" y="140" width="8" height="8" />
      </g>
      <circle cx="420" cy="80" r="16" fill={PL} opacity="0.9" />
      {/* desk & team */}
      <rect x="30" y="360" width="460" height="16" rx="8" fill="#1A1633" />
      <Person x={130} y={290} s={1.2} top={P} />
      <Person x={260} y={282} s={1.3} top={C} skin="#D9A37E" hair="#161226" />
      <Person x={390} y={290} s={1.2} top={PL} skin="#F5D4B8" hair="#4A2F1F" />
      <rect x="95" y="330" width="70" height="30" rx="4" fill="#241E44" stroke={P} />
      <rect x="350" y="330" width="70" height="30" rx="4" fill="#241E44" stroke={C} />
    </Frame>
  )
}

export function ActivityArt() {
  return (
    <Frame id="act">
      <circle cx="200" cy="150" r="120" fill="url(#act-glow)" />
      <ellipse cx="200" cy="215" rx="120" ry="30" fill="#1A1633" />
      <Person x={110} y={110} s={1.05} top={P} />
      <Person x={200} y={95} s={1.1} top={C} skin="#D9A37E" hair="#161226" />
      <Person x={290} y={110} s={1.05} top={PL} skin="#F5D4B8" hair="#4A2F1F" />
      <g fill="none" stroke={C} strokeWidth="3" strokeLinecap="round">
        <path d="M60 70 L72 56 M70 80 L88 72" /><path d="M330 60 L344 50 M326 74 L348 70" />
      </g>
    </Frame>
  )
}

export function WorkspaceArt() {
  return (
    <Frame id="ws">
      <circle cx="260" cy="130" r="110" fill="url(#ws-glow)" />
      <rect x="110" y="70" width="180" height="116" rx="10" fill="#0F0C20" stroke="rgba(255,255,255,0.2)" />
      <rect x="126" y="88" width="70" height="8" rx="4" fill="url(#ws-g)" />
      <rect x="126" y="106" width="130" height="6" rx="3" fill="rgba(255,255,255,0.25)" />
      <rect x="126" y="120" width="104" height="6" rx="3" fill="rgba(255,255,255,0.15)" />
      <rect x="126" y="140" width="52" height="30" rx="6" fill="rgba(123,110,246,0.3)" />
      <rect x="190" y="140" width="52" height="30" rx="6" fill="rgba(83,195,215,0.25)" />
      <rect x="188" y="186" width="24" height="26" fill="#1A1633" />
      <rect x="90" y="236" width="220" height="12" rx="6" fill="#1A1633" />
      {/* plant + lamp */}
      <rect x="320" y="206" width="26" height="30" rx="4" fill="#241E44" />
      <path d="M333 206 Q312 170 318 150 Q336 168 333 206 Z M333 206 Q354 176 350 150 Q330 172 333 206Z" fill={C} opacity="0.85" />
      <path d="M62 236 L84 150 L108 150" fill="none" stroke={PL} strokeWidth="4" strokeLinecap="round" />
      <path d="M96 150 L120 150 L112 130 Z" fill={PL} opacity="0.9" />
    </Frame>
  )
}

export function DrinksArt() {
  return (
    <Frame id="dr">
      <circle cx="200" cy="140" r="110" fill="url(#dr-glow)" />
      <g transform="rotate(-14 150 170)">
        <path d="M120 90 H180 L172 190 Q150 204 128 190 Z" fill="rgba(83,195,215,0.25)" stroke={C} strokeWidth="2" />
        <path d="M123 120 H177 L172 190 Q150 204 128 190 Z" fill={C} opacity="0.55" />
      </g>
      <g transform="rotate(14 250 170)">
        <path d="M220 90 H280 L272 190 Q250 204 228 190 Z" fill="rgba(169,156,248,0.25)" stroke={PL} strokeWidth="2" />
        <path d="M223 120 H277 L272 190 Q250 204 228 190 Z" fill={P} opacity="0.65" />
      </g>
      <g fill="#fff" opacity="0.85"><circle cx="200" cy="70" r="3" /><circle cx="176" cy="52" r="2" /><circle cx="226" cy="54" r="2.5" /><circle cx="200" cy="38" r="1.8" /></g>
      <rect x="70" y="236" width="260" height="10" rx="5" fill="#1A1633" />
    </Frame>
  )
}

export function HackathonArt() {
  return (
    <Frame id="hk">
      <circle cx="200" cy="140" r="120" fill="url(#hk-glow)" />
      <rect x="95" y="70" width="210" height="130" rx="10" fill="#0B0918" stroke="rgba(255,255,255,0.2)" />
      <g fontFamily="monospace" fontSize="11">
        <text x="110" y="95" fill={C}>{'const idea ='}</text>
        <text x="125" y="113" fill={PL}>{'build(fast)'}</text>
        <text x="110" y="131" fill={C}>{'ship(it) →'}</text>
        <text x="125" y="149" fill="rgba(255,255,255,0.55)">{'// 24h'}</text>
      </g>
      <path d="M262 100 L240 144 H258 L246 178 L282 130 H262 Z" fill="url(#hk-g)" />
      <path d="M70 210 H330 L318 226 H82 Z" fill="#1A1633" />
    </Frame>
  )
}
