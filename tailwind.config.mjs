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
        ink: {
          DEFAULT: 'var(--ink)',
          80: 'var(--ink-80)',
          70: 'var(--ink-70)',
          65: 'var(--ink-65)',
          60: 'var(--ink-60)',
          50: 'var(--ink-50)',
          40: 'var(--ink-40)',
        },
      },
      fontFamily: {
        sans:  ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        tight: ['"Inter Tight"', 'Inter', '-apple-system', 'sans-serif'],
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
    },
  },
  plugins: [],
};
