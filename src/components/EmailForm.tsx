import { useState } from 'react';

interface Props {
  placeholder?: string;
  btn?: string;
  dark?: boolean;
  size?: 'md' | 'lg';
  style?: React.CSSProperties;
  className?: string;
}

export default function EmailForm({
  placeholder = 'you@email.com',
  btn = 'Join waitlist',
  dark = false,
  size = 'md',
  style = {},
  className = '',
}: Props) {
  const [email, setEmail] = useState('');
  const [done, setDone] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.includes('@')) return;
    setDone(true);
    setTimeout(() => { setEmail(''); setDone(false); }, 2400);
  };

  const h = size === 'lg' ? 56 : 52;
  const padR = size === 'lg' ? 8 : 6;
  const btnH = h - padR * 2;

  return (
    <form onSubmit={onSubmit} style={style} className={className}>
      <div style={{
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        height: h,
        background: dark ? 'rgba(255,255,255,0.06)' : 'var(--bg-2)',
        border: dark ? '1px solid rgba(255,255,255,0.14)' : '1px solid var(--line)',
        borderRadius: 999,
        boxShadow: dark ? 'none' : '0 1px 2px rgba(10,10,10,0.03), 0 8px 20px rgba(10,10,10,0.03)',
        transition: 'border-color 0.15s, box-shadow 0.15s',
      }}>
        <input
          type="email"
          required
          autoComplete="email"
          placeholder={placeholder}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{
            flex: 1,
            minWidth: 0,
            height: '100%',
            padding: `0 ${btnH + padR + 16}px 0 22px`,
            background: 'transparent',
            border: 'none',
            outline: 'none',
            fontFamily: 'inherit',
            fontSize: 15.5,
            letterSpacing: '-0.005em',
            color: dark ? 'white' : 'var(--ink)',
          }}
        />
        <button
          type="submit"
          disabled={done}
          style={{
            position: 'absolute',
            right: padR,
            top: padR,
            height: btnH,
            padding: '0 18px',
            border: 'none',
            borderRadius: 999,
            background: dark ? 'white' : 'var(--ink)',
            color: dark ? 'var(--ink)' : 'white',
            fontFamily: 'inherit',
            fontSize: 14,
            fontWeight: 600,
            letterSpacing: '-0.005em',
            cursor: 'pointer',
            display: 'inline-flex',
            alignItems: 'center',
            gap: 6,
            transition: 'transform 0.15s',
            whiteSpace: 'nowrap',
          }}
        >
          {done ? (
            <>
              <svg width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12l5 5L20 7" />
              </svg>
              You're in
            </>
          ) : (
            <>
              {btn}
              <svg width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </>
          )}
        </button>
      </div>
    </form>
  );
}
