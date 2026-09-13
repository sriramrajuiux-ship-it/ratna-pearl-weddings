// TopNav.js
// Horizontal top navigation on desktop; collapses into a hamburger
// menu with a full stacked list on mobile (below Tailwind's `md`
// breakpoint, 768px). Both share the same `go()` navigation logic —
// only the layout differs.
//
// Accessibility: every clickable item is a real <button> (not a
// <span>/<div> with onClick), so keyboard users can Tab to it and
// activate it with Enter/Space — browsers give this to us for free
// on <button> but NOT on arbitrary elements. Dropdown toggles use
// aria-expanded/aria-haspopup, and the active page gets aria-current
// so screen readers announce "current page" the way they would for
// a real link.
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
    `text-sm font-medium bg-transparent border-0 p-0 cursor-pointer ${active === page ? 'text-gold' : 'text-gray-800'}`;

  return (
    <nav className="bg-ivory relative" aria-label="Main navigation">
      <div className="flex items-center justify-between px-6 md:px-10 py-5">
        <span className="font-heading text-xs md:text-sm tracking-wide text-gold">
          RATNA PEARL WEDDINGS
        </span>

        {/* Desktop nav — hidden below md */}
        <div className="hidden md:flex items-center gap-8">
          <button
            type="button"
            className={linkClass('home')}
            aria-current={active === 'home' ? 'page' : undefined}
            onClick={() => go('home')}
          >
            Home
          </button>

          <div className="relative">
            <button
              type="button"
              className={`${linkClass('wedding')} flex items-center gap-1`}
              aria-haspopup="true"
              aria-expanded={openMenu === 'wedding'}
              onClick={() => toggleMenu('wedding')}
            >
              My Wedding <span aria-hidden="true" className="text-xs">▾</span>
            </button>
            {openMenu === 'wedding' && (
              <div className="absolute top-8 left-0 bg-white border border-gray-200 rounded-lg shadow-md py-2 w-44 z-10">
                {weddingLinks.map((link) => (
                  <button
                    type="button"
                    key={link.key}
                    className="block w-full text-left bg-transparent border-0 px-4 py-2 text-sm text-gray-700 hover:bg-ivory cursor-pointer"
                    onClick={() => go(link.key)}
                  >
                    {link.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="relative">
            <button
              type="button"
              className={`${linkClass('vendors')} flex items-center gap-1`}
              aria-haspopup="true"
              aria-expanded={openMenu === 'vendors'}
              onClick={() => toggleMenu('vendors')}
            >
              Vendors <span aria-hidden="true" className="text-xs">▾</span>
            </button>
            {openMenu === 'vendors' && (
              <div className="absolute top-8 left-0 bg-white border border-gray-200 rounded-lg shadow-md py-2 w-44 z-10">
                {vendorLinks.map((link, i) => (
                  <button
                    type="button"
                    key={i}
                    className="block w-full text-left bg-transparent border-0 px-4 py-2 text-sm text-gray-700 hover:bg-ivory cursor-pointer"
                    onClick={() => go(link.key)}
                  >
                    {link.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          <button
            type="button"
            className={linkClass('timeline')}
            aria-current={active === 'timeline' ? 'page' : undefined}
            onClick={() => go('timeline')}
          >
            Timeline
          </button>

          <div className="relative">
            <button
              type="button"
              className="text-sm font-medium text-gray-800 bg-transparent border-0 p-0 flex items-center gap-1 cursor-pointer"
              aria-haspopup="true"
              aria-expanded={openMenu === 'contact'}
              onClick={() => toggleMenu('contact')}
            >
              Contact <span aria-hidden="true" className="text-xs">▾</span>
            </button>
            {openMenu === 'contact' && (
              <div className="absolute top-8 right-0 bg-white border border-gray-200 rounded-lg shadow-md py-2 w-36 z-10">
                {contactLinks.map((link, i) => (
                  <button
                    type="button"
                    key={i}
                    className="block w-full text-left bg-transparent border-0 px-4 py-2 text-sm text-gray-700 hover:bg-ivory cursor-pointer"
                  >
                    {link.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Hamburger button — visible only below md */}
        <button
          type="button"
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
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
          <button
            type="button"
            className={`text-left py-2 ${linkClass('home')}`}
            aria-current={active === 'home' ? 'page' : undefined}
            onClick={() => go('home')}
          >
            Home
          </button>

          <p className="text-xs tracking-widest text-gray-400 pt-3 pb-1">MY WEDDING</p>
          {weddingLinks.map((link) => (
            <button
              type="button"
              key={link.key}
              className="text-left bg-transparent border-0 py-2 pl-3 text-sm text-gray-700"
              onClick={() => go(link.key)}
            >
              {link.label}
            </button>
          ))}

          <p className="text-xs tracking-widest text-gray-400 pt-3 pb-1">VENDORS</p>
          {vendorLinks.map((link, i) => (
            <button
              type="button"
              key={i}
              className="text-left bg-transparent border-0 py-2 pl-3 text-sm text-gray-700"
              onClick={() => go(link.key)}
            >
              {link.label}
            </button>
          ))}

          <button
            type="button"
            className={`text-left py-2 pt-3 ${linkClass('timeline')}`}
            aria-current={active === 'timeline' ? 'page' : undefined}
            onClick={() => go('timeline')}
          >
            Timeline
          </button>

          <p className="text-xs tracking-widest text-gray-400 pt-3 pb-1">CONTACT</p>
          {contactLinks.map((link, i) => (
            <button
              type="button"
              key={i}
              className="text-left bg-transparent border-0 py-2 pl-3 text-sm text-gray-700"
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
