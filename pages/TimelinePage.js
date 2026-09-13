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

  const dotColor = {
    Approved: 'bg-green-500 border-green-500',
    Pending: 'bg-white border-gold',
    Overdue: 'bg-white border-red-400',
  };

  return (
    <div className="px-6 md:px-16 py-8 md:py-12">
      <p className="font-quote italic text-gray-500 mb-2">Every milestone, on its way</p>
      <h1 className="font-heading text-2xl md:text-3xl text-gray-800 mb-6 md:mb-10">TIMELINE &amp; CHECKLIST</h1>

      <div className="relative pl-6 max-w-2xl">
        <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gold/40"></div>
        {items.map((item, i) => (
          <div key={i} className="relative flex items-start gap-6 pb-10">
            <span className={`w-4 h-4 rounded-full border-2 mt-1 z-10 ${dotColor[item.status]}`}></span>
            <div className="flex-1 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <p className="font-heading text-lg text-gray-800">{item.title}</p>
                <p className="text-sm text-gray-500">{item.note}</p>
              </div>
              <Badge status={item.status} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
