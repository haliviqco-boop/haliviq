export type BlogCat = 'Technology' | 'AI' | 'Design' | 'Business' | 'Case Study'

export type BlogSection = {
  h: string            // section heading
  p: string[]          // paragraphs (2-3 each)
  list?: string[]      // optional bullet list shown after paragraphs
  quote?: string       // optional pull quote shown after the section
}

export type BlogLang = {
  title: string
  excerpt: string          // 1-2 sentences, shown on cards (<= 190 chars)
  metaTitle: string        // <= 60 chars
  metaDescription: string  // 140-160 chars
  intro: string            // lead paragraph, 2-4 sentences
  sections: BlogSection[]  // 5-6 sections
  takeaways: string[]      // 4-5 short bullets
  figCaption: string       // caption for the inline illustration
  faq?: { q: string; a: string }[]  // 2-3 items
}

export type Article = {
  slug: string
  cat: BlogCat
  date: string        // ISO yyyy-mm-dd
  readMin: number
  tags: string[]      // English keywords
  related: string[]   // 3 other slugs
  caseSlug?: string   // for case-study articles: slug in lib/case-studies-data.ts
  th: BlogLang
  en: BlogLang
}
