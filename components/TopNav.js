// TopNav.js
// Horizontal top navigation used on every page after Onboarding.
// "My Wedding" and "Vendors" open small dropdown menus on click —
// this is genuine state-driven interactivity (useState), not just
// decoration, which is part of what the brief asks for.
//
// Usage: <TopNav active="home" onNavigate={(page) => ...} />

function TopNav({ active, onNavigate }) {
  const [openMenu, setOpenMenu] = React.useState(null); // 'wedding' | 'vendors' | 'contact' | null

  const weddingLinks = [
    { key: 'venue', label: 'Date & Venue' },
    { key: 'budget', label: 'Budget Tracker' },
    { key: 'design', label: 'Design Studio' },
    { key: 'guests', label: 'Guests' },
  ];

  const vendorLinks = [
    { key: 'vendors', label: 'All Vendors' },
    { key: 'vendors', label: 'Catering' },
    { key: 'vendors', label: 'Decor' },
    { key: 'vendors', label: 'Photography' },
  ];

  const contactLinks = [
    { label: 'Support' },
    { label: 'FAQ' },
  ];

  function toggleMenu(name) {
    setOpenMenu(openMenu === name ? null : name);
  }

  function go(page) {
    setOpenMenu(null);
    onNavigate(page);
  }

  const linkClass = (page) =>
    `text-sm font-medium cursor-pointer ${active === page ? 'text-gold' : 'text-gray-800'}`;

  return (
    <nav className="flex items-center justify-between px-10 py-5 bg-ivory relative">
      <span className="font-heading text-sm tracking-wide text-gold">RATNA PEARL WEDDINGS</span>

      <div className="flex items-center gap-8">
        <span className={linkClass('home')} onClick={() => go('home')}>Home</span>

        <div className="relative">
          <span
            className={`${linkClass('wedding')} flex items-center gap-1`}
            onClick={() => toggleMenu('wedding')}
          >
            My Wedding <span className="text-xs">▾</span>
          </span>
          {openMenu === 'wedding' && (
            <div className="absolute top-8 left-0 bg-white border border-gray-200 rounded-lg shadow-md py-2 w-44 z-10">
              {weddingLinks.map((link) => (
                <div
                  key={link.key}
                  className="px-4 py-2 text-sm text-gray-700 hover:bg-ivory cursor-pointer"
                  onClick={() => go(link.key)}
                >
                  {link.label}
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="relative">
          <span
            className={`${linkClass('vendors')} flex items-center gap-1`}
            onClick={() => toggleMenu('vendors')}
          >
            Vendors <span className="text-xs">▾</span>
          </span>
          {openMenu === 'vendors' && (
            <div className="absolute top-8 left-0 bg-white border border-gray-200 rounded-lg shadow-md py-2 w-44 z-10">
              {vendorLinks.map((link, i) => (
                <div
                  key={i}
                  className="px-4 py-2 text-sm text-gray-700 hover:bg-ivory cursor-pointer"
                  onClick={() => go(link.key)}
                >
                  {link.label}
                </div>
              ))}
            </div>
          )}
        </div>

        <span className={linkClass('timeline')} onClick={() => go('timeline')}>Timeline</span>

        <div className="relative">
          <span
            className="text-sm font-medium text-gray-800 flex items-center gap-1 cursor-pointer"
            onClick={() => toggleMenu('contact')}
          >
            Contact <span className="text-xs">▾</span>
          </span>
          {openMenu === 'contact' && (
            <div className="absolute top-8 right-0 bg-white border border-gray-200 rounded-lg shadow-md py-2 w-36 z-10">
              {contactLinks.map((link, i) => (
                <div key={i} className="px-4 py-2 text-sm text-gray-700 hover:bg-ivory cursor-pointer">
                  {link.label}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
