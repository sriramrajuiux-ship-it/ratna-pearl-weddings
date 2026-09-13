// TopNav.js
// Horizontal top navigation on desktop; collapses into a hamburger
// menu with a full stacked list on mobile (below Tailwind's `md`
// breakpoint, 768px). Both share the same `go()` navigation logic —
// only the layout differs.
//
// Usage: <TopNav active="home" onNavigate={(page) => ...} />

function TopNav({ active, onNavigate }) {
  const [openMenu, setOpenMenu] = React.useState(null); // 'wedding' | 'vendors' | 'contact' | null
  const [mobileOpen, setMobileOpen] = React.useState(false);

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
    setMobileOpen(false);
    onNavigate(page);
  }

  const linkClass = (page) =>
    `text-sm font-medium cursor-pointer ${active === page ? 'text-gold' : 'text-gray-800'}`;

  return (
    <nav className="bg-ivory relative">
      <div className="flex items-center justify-between px-6 md:px-10 py-5">
        <span className="font-heading text-xs md:text-sm tracking-wide text-gold">
          RATNA PEARL WEDDINGS
        </span>

        {/* Desktop nav — hidden below md */}
        <div className="hidden md:flex items-center gap-8">
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

        {/* Hamburger button — visible only below md */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Open menu"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <span className="w-6 h-0.5 bg-gray-800"></span>
          <span className="w-6 h-0.5 bg-gray-800"></span>
          <span className="w-6 h-0.5 bg-gray-800"></span>
        </button>
      </div>

      {/* Mobile menu — stacked list, shown only when toggled open */}
      {mobileOpen && (
        <div className="md:hidden flex flex-col border-t border-gold/30 px-6 py-4 gap-1 bg-ivory">
          <div className={`py-2 ${linkClass('home')}`} onClick={() => go('home')}>Home</div>

          <p className="text-xs tracking-widest text-gray-400 pt-3 pb-1">MY WEDDING</p>
          {weddingLinks.map((link) => (
            <div
              key={link.key}
              className="py-2 pl-3 text-sm text-gray-700"
              onClick={() => go(link.key)}
            >
              {link.label}
            </div>
          ))}

          <p className="text-xs tracking-widest text-gray-400 pt-3 pb-1">VENDORS</p>
          {vendorLinks.map((link, i) => (
            <div
              key={i}
              className="py-2 pl-3 text-sm text-gray-700"
              onClick={() => go(link.key)}
            >
              {link.label}
            </div>
          ))}

          <div className={`py-2 pt-3 ${linkClass('timeline')}`} onClick={() => go('timeline')}>Timeline</div>

          <p className="text-xs tracking-widest text-gray-400 pt-3 pb-1">CONTACT</p>
          {contactLinks.map((link, i) => (
            <div key={i} className="py-2 pl-3 text-sm text-gray-700">{link.label}</div>
          ))}
        </div>
      )}
    </nav>
  );
}
