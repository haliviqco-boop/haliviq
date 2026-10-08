export type TilLang = {
  title: string
  excerpt: string
  problem: string[]   // "What happened" — 1-2 paragraphs
  why: string[]       // "Why it happens" — 1-2 paragraphs
  fix: string[]       // "What we do now" — 1-2 paragraphs
  steps?: string[]    // optional short checklist (3-5 items)
  code?: { label: string; lang: string; text: string }  // one short snippet, same in th/en except label/comments
  takeaway: string    // one-sentence rule of thumb
}
export type TilNote = {
  slug: string
  topic: string       // React | Next.js | TypeScript | PostgreSQL | Docker | Figma | CLI | macOS | Design | Security
  date: string        // ISO
  th: TilLang
  en: TilLang
}
