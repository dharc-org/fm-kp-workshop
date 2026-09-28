// src/app/fonts.js
import { Roboto_Mono, Manrope } from 'next/font/google'

// Display/body font. Manrope (SIL Open Font License) replaces Satoshi so the fonts
// are self-hosted at build time with no licensing ambiguity. The export name and CSS
// variable (--font-satoshi) are intentionally kept so layout.js and globals.css need
// no changes.
// Variable font: do NOT pass a `weight` array — Turbopack's next/font/google
// loader requires a single query entry, and a variable font already covers the
// full weight range (200–800). Mirrors the Roboto_Mono config below.
export const satoshi = Manrope({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-satoshi',
})

export const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto-mono', // Creiamo una variabile CSS
})