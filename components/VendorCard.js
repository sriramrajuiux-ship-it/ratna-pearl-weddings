// VendorCard.js
// A single vendor listing card, showing name, category, description,
// rating, price, and either an "Add" button (not yet selected) or an
// Approved badge (already added). Extracted out of Vendor Marketplace
// as its own composite component — built from Badge + Button — so it
// matches the Tier 3 composite component plan from Task 1's design
// system strategy, and so any future page needing a vendor listing
// (not just the marketplace grid) can reuse it directly.
//
// Usage: <VendorCard vendor={v} isAdded={true} onAdd={(v) => ...} />

function VendorCard({ vendor, isAdded, onAdd }) {
  return (
    <div className="border border-gold/40 rounded-lg overflow-hidden">
      <div className="h-24 bg-gradient-to-br from-gold to-[#e0c88a]"></div>
      <div className="p-5">
        <p className="text-xs tracking-widest text-gray-500 mb-1">{vendor.category.toUpperCase()}</p>
        <p className="font-heading text-lg text-gray-800 mb-2">{vendor.name}</p>
        <p className="text-sm text-gray-500 mb-1">{vendor.desc}</p>
        <p className="text-sm text-gold mb-4">★ {vendor.rating}</p>
        <div className="flex items-center justify-between">
          <span className="font-heading text-lg text-gray-800">Rs.{(vendor.price / 1000).toFixed(0)}K</span>
          {isAdded ? (
            <Badge status="Approved" />
          ) : (
            <Button variant="primary" onClick={() => onAdd({ ...vendor, status: 'Pending' })}>
              Add
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
