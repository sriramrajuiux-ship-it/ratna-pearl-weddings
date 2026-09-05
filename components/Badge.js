// Badge.js
// A small reusable status pill, used across Vendor Marketplace, Budget Tracker,
// Guest List, and Timeline to show the same "state" language everywhere.
//
// Usage: <Badge status="Approved" />

function Badge({ status }) {
  // Each status maps to a background + text color pair.
  // Keeping this map in one place means changing a color here
  // updates every Badge in the app — this is the whole point of
  // building it as a shared component instead of copy-pasting spans.
  const statusStyles = {
    Approved: 'bg-green-100 text-green-700',
    Confirmed: 'bg-green-100 text-green-700',
    Pending: 'bg-amber-100 text-amber-700',
    Overdue: 'bg-red-100 text-red-700',
    Upcoming: 'bg-gray-100 text-gray-500',
  };

  const style = statusStyles[status] || statusStyles.Upcoming;

  return (
    <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${style}`}>
      {status}
    </span>
  );
}
