// BudgetLineItem.js
// A single row in the Budget Tracker: who added it (Avatar), what
// category it's for, its price, and its approval status (Badge).
// Extracted out of Budget Tracker as its own composite component —
// built from Avatar + Badge — matching Task 1's Tier 3 component plan.
//
// Usage: <BudgetLineItem item={{ category, price, status }} isLast={false} />

function BudgetLineItem({ item, isLast }) {
  return (
    <div
      className={`flex flex-wrap items-center justify-between gap-2 py-4 ${isLast ? '' : 'border-b border-gray-100'}`}
    >
      <div className="flex items-center gap-3">
        <Avatar initials="AM" />
        <span className="text-gray-800">{item.category}</span>
      </div>
      <span className="font-heading text-gray-800">Rs. {item.price.toLocaleString()}</span>
      <Badge status={item.status} />
    </div>
  );
}
