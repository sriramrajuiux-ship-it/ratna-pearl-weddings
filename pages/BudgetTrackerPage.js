// BudgetTrackerPage.js
// Reads the same `selectedVendors` state that Vendor Marketplace writes
// to — so anything added there appears here immediately, with the
// total and progress bar recalculating automatically. This is the
// live, cross-view budget propagation from our Task 1 design.
//
// Usage: <BudgetTrackerPage selectedVendors={...} />

function BudgetTrackerPage({ selectedVendors }) {
  const ceiling = 1200000;
  const total = selectedVendors.reduce((sum, v) => sum + v.price, 0);
  const percent = Math.min(100, Math.round((total / ceiling) * 100));

  return (
    <div className="px-6 md:px-16 py-8 md:py-12">
      <p className="font-quote italic text-gray-500 mb-2">Tracking every rupee, gracefully</p>
      <h1 className="font-heading text-2xl md:text-3xl text-gray-800 mb-6 md:mb-10">BUDGET TRACKER</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Summary card */}
        <div className="border border-gold/40 rounded-lg overflow-hidden h-fit">
          <div className="h-3 bg-gradient-to-r from-gold to-[#e0c88a]"></div>
          <div className="p-6 text-center">
            <p className="text-xs tracking-widest text-gray-500 mb-2">TOTAL SPENT</p>
            <p className="font-heading text-3xl text-gray-800 mb-4">
              Rs. {total.toLocaleString()}
            </p>
            <div className="h-2 bg-gray-100 rounded-full overflow-hidden mb-2">
              <div
                className="h-full bg-gradient-to-r from-gold to-maroon"
                style={{ width: `${percent}%` }}
              ></div>
            </div>
            <p className="text-xs text-gray-400">{percent}% of Rs. {(ceiling / 1000000).toFixed(1)}M ceiling</p>
          </div>
        </div>

        {/* Line items */}
        <div className="md:col-span-2 border border-gold/40 rounded-lg p-6">
          {selectedVendors.map((v, i) => (
            <BudgetLineItem key={v.id || i} item={v} isLast={i === selectedVendors.length - 1} />
          ))}
          {selectedVendors.length === 0 && (
            <p className="text-sm text-gray-400 text-center py-6">No budget items yet.</p>
          )}
        </div>
      </div>
    </div>
  );
}
