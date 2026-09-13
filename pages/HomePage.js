// HomePage.js
// The main dashboard — first real page after Onboarding. Shows a
// welcome message, three metric cards (days remaining, budget used,
// next task), and a quick-access grid linking to every other module.
//
// Usage: <HomePage onNavigate={(page) => setPage(page)} />

function HomePage({ coupleInfo, onNavigate }) {
  const quickAccess = [
    { key: 'venue', label: 'Venue', icon: 'assets/images/icon-venue.svg' },
    { key: 'vendors', label: 'Vendors', icon: 'assets/images/icon-vendors.svg' },
    { key: 'design', label: 'Card Design', icon: 'assets/images/icon-design.svg' },
    { key: 'guests', label: 'Guests', icon: 'assets/images/icon-guests.svg' },
    { key: 'timeline', label: 'Timeline', icon: 'assets/images/icon-timeline.svg' },
    { key: 'budget', label: 'Budget', icon: 'assets/images/icon-budget.svg' },
  ];

  return (
    <div className="px-6 md:px-16 py-8 md:py-12">
      <p className="font-quote italic text-gray-500 mb-2">Warm Welcome!</p>
      <h1 className="font-heading text-gold text-2xl md:text-4xl mb-6 md:mb-10">
        {coupleInfo.bride.toUpperCase()} &amp; {coupleInfo.groom.toUpperCase()}
      </h1>

      {/* Metric cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
        <div className="border border-gold/40 rounded-lg p-6 bg-white/40">
          <p className="text-xs tracking-widest text-gray-500 mb-2">DAYS REMAINING</p>
          <p className="font-heading text-3xl text-gray-800">110</p>
        </div>
        <div className="border border-gold/40 rounded-lg p-6 bg-white/40">
          <p className="text-xs tracking-widest text-gray-500 mb-2">BUDGET USED</p>
          <p className="font-heading text-3xl text-gray-800">Rs. 850K / 1.2M</p>
        </div>
        <div className="border border-gold/40 rounded-lg p-6 bg-white/60">
          <p className="text-xs tracking-widest text-gray-500 mb-2">NEXT TASK</p>
          <p className="font-heading text-lg text-gray-800 mb-2">Confirm Caterer</p>
          <Badge status="Pending" />
        </div>
      </div>

      {/* Quick access */}
      <p className="text-xs tracking-widest text-gray-500 mb-4">QUICK ACCESS</p>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
        {quickAccess.map((item) => (
          <button
            type="button"
            key={item.key}
            onClick={() => onNavigate(item.key)}
            className="border border-gold/40 rounded-lg py-10 flex flex-col items-center gap-3 cursor-pointer hover:bg-white/50 transition-colors"
          >
            <img src={item.icon} alt="" className="w-8 h-8" />
            <span className="text-sm text-gray-700">{item.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
