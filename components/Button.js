// Button.js
// A reusable button with two variants: primary (filled, gold-to-maroon)
// and secondary (outlined). Used across Vendor Marketplace ("Add"),
// Guest List ("Add guest"), Design Studio ("Request changes"), etc.
//
// Usage: <Button variant="primary" onClick={...}>Add</Button>

function Button({ variant = 'primary', type = 'button', children, onClick }) {
  const base = 'text-sm font-medium px-4 py-2 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-1';

  const variants = {
    primary: 'text-white bg-gradient-to-r from-gold to-maroon hover:opacity-90',
    secondary: 'text-gray-700 border border-gray-300 bg-white hover:bg-gray-50',
  };

  return (
    <button
      type={type}
      className={`${base} ${variants[variant]}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
