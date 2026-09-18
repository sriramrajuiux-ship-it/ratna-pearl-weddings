// TimelineStatusItem.js
// A single row in the Timeline & Checklist: a status-colored dot, the
// task title and note, and a matching Badge. Extracted out of
// TimelinePage as its own composite component — built from Badge —
// matching Task 1's Tier 3 component plan.
//
// Usage: <TimelineStatusItem item={{ title, note, status }} isLast={false} />

function TimelineStatusItem({ item, isLast }) {
  const dotColor = {
    Approved: 'bg-green-500 border-green-500',
    Pending: 'bg-white border-gold',
    Overdue: 'bg-white border-red-400',
  };

  return (
    <div className={`relative flex items-start gap-6 ${isLast ? '' : 'pb-10'}`}>
      <span className={`w-4 h-4 rounded-full border-2 mt-1 z-10 ${dotColor[item.status]}`}></span>
      <div className="flex-1 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <div>
          <p className="font-heading text-lg text-gray-800">{item.title}</p>
          <p className="text-sm text-gray-500">{item.note}</p>
        </div>
        <Badge status={item.status} />
      </div>
    </div>
  );
}
