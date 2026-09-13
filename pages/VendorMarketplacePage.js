// VendorMarketplacePage.js
// Category filter pills and a search box actually filter the vendor
// grid (real state-driven behavior, not decoration). Clicking "Add"
// pushes that vendor into the shared `selectedVendors` state lifted up
// in App.js — this is what makes Budget Tracker update live when you
// add a vendor here, matching the "live cross-view budget propagation"
// pattern from our Task 1 interaction design.
//
// Usage: <VendorMarketplacePage selectedVendors={...} onAdd={...} onNavigate={...} />

function VendorMarketplacePage({ selectedVendors, onAdd, onNavigate }) {
  const [activeCategory, setActiveCategory] = React.useState('All');
  const [search, setSearch] = React.useState('');

  const catalog = [
    { id: 'catering-serendib', name: 'Serendib Catering', category: 'Catering', desc: 'Halal & local menus', rating: '4.9 (86)', price: 300000 },
    { id: 'decor-poruwa', name: 'Poruwa Decor Studio', category: 'Decor', desc: 'Traditional altar setups', rating: '4.8 (54)', price: 200000 },
    { id: 'photo-lumen', name: 'Lumen Photography', category: 'Photography', desc: 'Ceremony + Reception', rating: '5.0 (112)', price: 180000 },
  ];

  const categories = ['All', 'Catering', 'Decor', 'Photography'];

  const isAdded = (id) => selectedVendors.some((v) => v.id === id);

  const filtered = catalog.filter((v) => {
    const matchesCategory = activeCategory === 'All' || v.category === activeCategory;
    const matchesSearch = v.name.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const shortlist = selectedVendors.filter((v) => v.category !== 'Venue');
  const shortlistTotal = shortlist.reduce((sum, v) => sum + v.price, 0);

  return (
    <div className="px-6 md:px-16 py-8 md:py-12">
      <p className="font-quote italic text-gray-500 mb-2">Curated for your celebration</p>
      <h1 className="font-heading text-2xl md:text-3xl text-gray-800 mb-6 md:mb-8">VENDOR MARKETPLACE</h1>

      {/* Filters + search */}
      <div className="flex items-center gap-3 mb-8 flex-wrap">
        {categories.map((c) => (
          <button
            type="button"
            key={c}
            onClick={() => setActiveCategory(c)}
            aria-pressed={activeCategory === c}
            className={`text-sm px-4 py-2 rounded-full border
              ${activeCategory === c
                ? 'bg-gradient-to-r from-gold to-[#e0c88a] text-[#3a2a12] border-gold'
                : 'border-gray-300 text-gray-600 hover:border-gold'}`}
          >
            {c}
          </button>
        ))}
        <input
          type="text"
          aria-label="Search vendors"
          placeholder="Search vendors..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full sm:w-56 sm:ml-auto border border-gray-300 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gold"
        />
      </div>

      {/* Vendor grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-10">
        {filtered.map((v) => (
          <div key={v.id} className="border border-gold/40 rounded-lg overflow-hidden">
            <div className="h-24 bg-gradient-to-br from-gold to-[#e0c88a]"></div>
            <div className="p-5">
              <p className="text-xs tracking-widest text-gray-500 mb-1">{v.category.toUpperCase()}</p>
              <p className="font-heading text-lg text-gray-800 mb-2">{v.name}</p>
              <p className="text-sm text-gray-500 mb-1">{v.desc}</p>
              <p className="text-sm text-gold mb-4">★ {v.rating}</p>
              <div className="flex items-center justify-between">
                <span className="font-heading text-lg text-gray-800">Rs.{(v.price / 1000).toFixed(0)}K</span>
                {isAdded(v.id) ? (
                  <Badge status="Approved" />
                ) : (
                  <Button variant="primary" onClick={() => onAdd({ ...v, status: 'Pending' })}>
                    Add
                  </Button>
                )}
              </div>
            </div>
          </div>
        ))}
        {filtered.length === 0 && (
          <p className="text-gray-400 text-sm col-span-3 text-center py-10">No vendors match that search.</p>
        )}
      </div>

      {/* Shortlist */}
      <div className="border border-gold/40 rounded-lg p-6">
        <p className="text-xs tracking-widest text-gray-500 mb-4">YOUR SHORTLIST</p>
        {shortlist.length === 0 && (
          <p className="text-sm text-gray-400 mb-4">No vendors added yet — click "Add" on a card above.</p>
        )}
        {shortlist.map((v) => (
          <div key={v.id} className="flex justify-between text-sm py-2 border-b border-gray-100">
            <span className="text-gray-700">{v.name}</span>
            <span className="text-gray-500">Rs.{(v.price / 1000).toFixed(0)}K</span>
          </div>
        ))}
        <div className="flex items-center justify-between mt-6">
          <p className="text-sm text-gray-500">{shortlist.length} vendors · Total <span className="font-heading text-lg text-gold ml-1">Rs.{(shortlistTotal / 1000).toFixed(0)}K</span></p>
          <Button variant="primary" onClick={() => onNavigate('budget')}>Review in Budget</Button>
        </div>
      </div>
    </div>
  );
}
