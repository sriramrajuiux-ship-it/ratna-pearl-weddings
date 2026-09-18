// TimelinePage.js
// A vertical timeline with a connecting line and color-coded dots per
// status — approved items get a filled green dot, pending ones get a
// gold outline, matching the reference design.

function TimelinePage() {
  const items = [
    { title: 'Book ceremony & reception venue', note: 'Completed 3 weeks ago', status: 'Approved' },
    { title: 'Send wedding invitations', note: 'Due in 5 days', status: 'Pending' },
    { title: 'Finalize catering menu', note: 'Was due 2 days ago', status: 'Overdue' },
  ];

  return (
    <div className="px-6 md:px-16 py-8 md:py-12">
      <p className="font-quote italic text-gray-500 mb-2">Every milestone, on its way</p>
      <h1 className="font-heading text-2xl md:text-3xl text-gray-800 mb-6 md:mb-10">TIMELINE &amp; CHECKLIST</h1>

      <div className="relative pl-6 max-w-2xl">
        <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gold/40"></div>
        {items.map((item, i) => (
          <TimelineStatusItem key={i} item={item} isLast={i === items.length - 1} />
        ))}
      </div>
    </div>
  );
}
