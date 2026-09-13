// TraditionIcon.js
// Inline SVG (not an <img> to a static file) specifically so the icon
// color can inherit from its parent via `currentColor`. This is what
// lets the same icon look right both on the plain white card (dark
// gold) AND on the gold gradient background when selected (dark
// maroon) — a static image file can't do that, only inline SVG can.
//
// Usage: <TraditionIcon type="Tamil" className="w-8 h-8" />

function TraditionIcon({ type, className }) {
  const stem = (
    <>
      <line x1="32" y1="40" x2="32" y2="47" stroke="currentColor" strokeWidth="1.8" />
      <line x1="22" y1="47" x2="42" y2="47" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </>
  );

  const icons = {
    Tamil: (
      <>
        <path d="M20 40 Q20 15 32 15 Q44 15 44 40 Z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        <line x1="20" y1="40" x2="44" y2="40" stroke="currentColor" strokeWidth="1.8" />
        {stem}
      </>
    ),
    Sinhala: (
      <>
        <path d="M32 15 C40 24 40 34 32 40 C24 34 24 24 32 15 Z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        {stem}
      </>
    ),
    Christian: (
      <>
        <line x1="32" y1="13" x2="32" y2="40" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <line x1="22" y1="22" x2="42" y2="22" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        {stem}
      </>
    ),
    Muslim: (
      <>
        <path d="M36 16 A12 12 0 1 0 36 39 A9.5 9.5 0 1 1 36 16 Z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        <path d="M43 17 L44.5 20.5 L48 22 L44.5 23.5 L43 27 L41.5 23.5 L38 22 L41.5 20.5 Z" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
        {stem}
      </>
    ),
  };

  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      {icons[type]}
    </svg>
  );
}
