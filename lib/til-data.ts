import type { TilNote } from './til-types'
import { tilA } from './til/a'
import { tilB } from './til/b'
export type { TilNote }
export const tilNotes: TilNote[] = [...tilA, ...tilB].sort((a, b) => (a.date < b.date ? 1 : -1))
export const getTil = (slug: string) => tilNotes.find((n) => n.slug === slug)
