import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        page:    'var(--bg)',
        card:    'var(--bg-2)',
        muted:   'var(--bg-3)',
        accent:  'var(--accent)',
        line:    'var(--line)',
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      borderRadius: {
        card: '22px',
        band: '28px',
      },
      boxShadow: {
        card:     '0 1px 2px rgba(10,10,10,0.03), 0 8px 20px rgba(10,10,10,0.03)',
        'card-lg': '0 1px 2px rgba(10,10,10,0.05), 0 14px 32px rgba(10,10,10,0.08)',
        glass:    'inset 0 1px 0 rgba(255,255,255,0.95), inset 0 -1px 0 rgba(255,255,255,0.4), 0 1px 1px rgba(15,30,80,0.04), 0 8px 28px rgba(15,30,80,0.08)',
      },
      // Brand-matched `prose` for legal docs. Use: class="prose prose-cardsense"
      typography: {
        cardsense: {
          css: {
            '--tw-prose-body': '#27272a',
            '--tw-prose-headings': '#09090b',
            '--tw-prose-lead': '#71717a',
            '--tw-prose-links': 'var(--accent)',
            '--tw-prose-bold': '#09090b',
            '--tw-prose-counters': '#a1a1aa',
            '--tw-prose-bullets': '#a1a1aa',
            '--tw-prose-hr': 'var(--line)',
            '--tw-prose-quotes': '#71717a',
            '--tw-prose-quote-borders': 'var(--line)',
            '--tw-prose-captions': '#a1a1aa',
            '--tw-prose-code': '#09090b',
            '--tw-prose-th-borders': 'var(--line)',
            '--tw-prose-td-borders': 'var(--line)',

            maxWidth: 'none',
            fontSize: '16px',
            lineHeight: '1.7',

            // Prose h1 renders at ~2.25em (>= 2em) → display (opsz 32).
            h1: {
              fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif',
              fontVariationSettings: '"opsz" 32',
              fontWeight: '700',
              lineHeight: '1.1',
            },
            // h2–h4 render < 2em → regular Inter (small display looks off).
            h2: {
              fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif',
              fontVariationSettings: 'normal',
              fontWeight: '700',
              fontSize: '1.4em',
              lineHeight: '1.25',
              marginTop: '2.6em',
              scrollMarginTop: '110px',
            },
            h3: {
              fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif',
              fontVariationSettings: 'normal',
              fontWeight: '600',
              fontSize: '1.1em',
              scrollMarginTop: '110px',
            },
            h4: {
              fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif',
              fontVariationSettings: 'normal',
              fontWeight: '600',
              scrollMarginTop: '110px',
            },
            a: {
              fontWeight: '500',
              textDecorationColor: 'rgba(37,99,235,0.35)',
              textUnderlineOffset: '2px',
              transitionProperty: 'text-decoration-color',
              transitionDuration: '150ms',
            },
            'a:hover': {
              textDecorationColor: 'var(--accent)',
            },
            strong: { fontWeight: '600' },
            hr: {
              marginTop: '2.6em',
              marginBottom: '2.6em',
            },
            code: {
              backgroundColor: 'var(--bg-3)',
              border: '1px solid var(--line)',
              borderRadius: '6px',
              padding: '0.1em 0.4em',
              fontWeight: '500',
            },
            'code::before': { content: '""' },
            'code::after': { content: '""' },
            pre: {
              backgroundColor: 'var(--bg-3)',
              border: '1px solid var(--line)',
              color: '#09090b',
              borderRadius: '14px',
            },
            'pre code': {
              backgroundColor: 'transparent',
              border: '0',
              padding: '0',
            },
            thead: {
              borderBottomColor: 'var(--line)',
            },
            'thead th': {
              backgroundColor: 'var(--bg-3)',
              fontWeight: '600',
              color: '#09090b',
              padding: '0.65em 0.9em',
            },
            'tbody td': {
              padding: '0.65em 0.9em',
            },
            blockquote: {
              fontStyle: 'normal',
              fontWeight: '400',
              borderLeftWidth: '3px',
            },
            'blockquote p:first-of-type::before': { content: '""' },
            'blockquote p:last-of-type::after': { content: '""' },
          },
        },
      },
    },
  },
  plugins: [typography],
};
