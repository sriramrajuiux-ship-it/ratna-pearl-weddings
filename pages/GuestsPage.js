// GuestsPage.js
// "+ Add Guest" actually appends a new row via useState — a small,
// concrete demonstration of dynamic list behavior rather than a
// static table.

function GuestsPage() {
  const [guests, setGuests] = React.useState([
    { family: 'Perera family', side: 'Bride', seating: 'Table 4', rsvp: 'Confirmed' },
    { family: 'Fernando family', side: 'Groom', seating: 'Table 2', rsvp: 'Pending' },
  ]);

  function addGuest() {
    setGuests([
      ...guests,
      { family: 'New family', side: '—', seating: 'Unassigned', rsvp: 'Pending' },
    ]);
  }

  return (
    <div className="px-16 py-12">
      <p className="font-quote italic text-gray-500 mb-2">Every guest, warmly accounted for</p>
      <div className="flex items-center justify-between mb-8">
        <h1 className="font-heading text-3xl text-gray-800">GUESTS · {guests.length}</h1>
        <Button variant="primary" onClick={addGuest}>+ Add Guest</Button>
      </div>

      <div className="border border-gold/40 rounded-lg overflow-hidden">
        <div className="grid grid-cols-4 px-6 py-3 text-xs tracking-widest text-gray-500 border-b border-gold/30">
          <span>GUEST / FAMILY</span>
          <span>SIDE</span>
          <span>SEATING</span>
          <span>RSVP</span>
        </div>
        {guests.map((g, i) => (
          <div
            key={i}
            className={`grid grid-cols-4 px-6 py-4 items-center ${i !== guests.length - 1 ? 'border-b border-gray-100' : ''}`}
          >
            <span className="text-gray-800">{g.family}</span>
            <span className="text-gray-500 text-sm">{g.side}</span>
            <span className="text-gray-500 text-sm">{g.seating}</span>
            <Badge status={g.rsvp} />
          </div>
        ))}
      </div>
    </div>
  );
}
