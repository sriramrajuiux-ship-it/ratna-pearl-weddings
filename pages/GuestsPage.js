// GuestsPage.js
// "+ Add Guest" actually appends a new row via useState — a small,
// concrete demonstration of dynamic list behavior rather than a
// static table.

function GuestsPage() {
  const [guests, setGuests] = React.useState([
    { family: 'Perera family', side: 'Bride', seating: 'Table 4', rsvp: 'Confirmed' },
    { family: 'Fernando family', side: 'Groom', seating: 'Table 2', rsvp: 'Pending' },
  ]);
  const [announcement, setAnnouncement] = React.useState('');

  function addGuest() {
    setGuests([
      ...guests,
      { family: 'New family', side: '—', seating: 'Unassigned', rsvp: 'Pending' },
    ]);
    setAnnouncement('New guest added to the list.');
  }

  return (
    <div className="px-6 md:px-16 py-8 md:py-12">
      {/* Visually hidden, but announced by screen readers when guests.length changes */}
      <p className="sr-only" role="status" aria-live="polite">{announcement}</p>

      <p className="font-quote italic text-gray-500 mb-2">Every guest, warmly accounted for</p>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <h1 className="font-heading text-3xl text-gray-800">GUESTS · {guests.length}</h1>
        <Button variant="primary" onClick={addGuest}>+ Add Guest</Button>
      </div>

      {/* Horizontal scroll on narrow screens instead of squishing the table.
          role="table"/"row"/"columnheader"/"cell" gives screen readers real
          table semantics even though we're using CSS grid, not a <table>
          element (grid was simpler to make responsive with Tailwind). */}
      <div className="border border-gold/40 rounded-lg overflow-x-auto">
        <div className="min-w-[600px]" role="table" aria-label="Guest list">
          <div role="row" className="grid grid-cols-4 px-6 py-3 text-xs tracking-widest text-gray-500 border-b border-gold/30">
            <span role="columnheader">GUEST / FAMILY</span>
            <span role="columnheader">SIDE</span>
            <span role="columnheader">SEATING</span>
            <span role="columnheader">RSVP</span>
          </div>
          {guests.map((g, i) => (
            <div
              key={i}
              role="row"
              className={`grid grid-cols-4 px-6 py-4 items-center ${i !== guests.length - 1 ? 'border-b border-gray-100' : ''}`}
            >
              <span role="cell" className="text-gray-800">{g.family}</span>
              <span role="cell" className="text-gray-500 text-sm">{g.side}</span>
              <span role="cell" className="text-gray-500 text-sm">{g.seating}</span>
              <span role="cell"><Badge status={g.rsvp} /></span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
