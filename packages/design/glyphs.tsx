import type { SVGProps } from 'react'

// Shared line-icon set (24-unit viewBox, stroke = currentColor).
// Package: @vuslife/design — shared across every VUS.Life surface.
const P = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.7, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const }

export type GlyphName = 'pdf' | 'shield' | 'dna' | 'freq' | 'clinvar' | 'score' | 'paper' | 'gene' | 'scale' | 'wiki'

export interface GlyphProps extends Omit<SVGProps<SVGSVGElement>, 'viewBox' | 'width' | 'height'> {
  name: GlyphName
  size?: number
}

// Every use is paired with a word/tier code per the design system's own rule
// (color never carries meaning alone) — decorative by default, so screen
// readers skip it instead of announcing a redundant icon name.
export function Glyph({ name, size = 26, ...rest }: GlyphProps) {
  const c = { width: size, height: size, viewBox: '0 0 24 24', 'aria-hidden': true, focusable: false, ...P, ...rest }
  switch (name) {
    case 'pdf': return <svg {...c}><path d="M7 3h7l4 4v14H7z" /><path d="M14 3v4h4" /><path d="M9.5 13h5M9.5 16h3" /></svg>
    case 'shield': return <svg {...c}><path d="M12 3l7 3v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6z" /><path d="M9 12l2 2 4-4" /></svg>
    case 'dna': return <svg {...c}><path d="M8 3c0 4 8 5 8 9s-8 5-8 9" /><path d="M16 3c0 4-8 5-8 9s8 5 8 9" /><path d="M9 7h6M9 17h6M10 12h4" /></svg>
    case 'freq': return <svg {...c}><path d="M4 20V10M9 20V5M14 20v-8M19 20V8" /></svg>
    case 'clinvar': return <svg {...c}><circle cx="12" cy="12" r="8" /><path d="M12 7v5l3 2" /></svg>
    case 'score': return <svg {...c}><path d="M4 14l4-4 4 3 5-7" /><path d="M4 20h16" /></svg>
    case 'paper': return <svg {...c}><path d="M6 3h9l3 3v15H6z" /><path d="M9 9h6M9 12h6M9 15h4" /></svg>
    case 'gene': return <svg {...c}><circle cx="7" cy="7" r="2.4" /><circle cx="17" cy="17" r="2.4" /><path d="M9 9l6 6M14 7h3v3M10 17H7v-3" /></svg>
    case 'scale': return <svg {...c}><path d="M12 3v18M5 7h14" /><path d="M5 7l-2.5 5h5zM19 7l-2.5 5h5z" /><path d="M8 20h8" /></svg>
    case 'wiki': return <svg {...c}><circle cx="12" cy="6" r="2.2" /><circle cx="5.5" cy="17" r="2.2" /><circle cx="18.5" cy="17" r="2.2" /><path d="M10.5 7.6L7 15M13.5 7.6L17 15M7.6 17h8.8" /></svg>
    default: return <svg {...c}><circle cx="12" cy="12" r="8" /></svg>
  }
}
