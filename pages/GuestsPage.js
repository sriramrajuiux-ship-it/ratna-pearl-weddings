// GuestsPage.js
// A real add-guest form: a name field plus a Bride/Groom side toggle,
// with validation (name required) before the guest is actually added
// to the table — matching the same pattern as Onboarding's validation.

function GuestsPage() {
  const [guests, setGuests] = React.useState([
    { family: 'Perera family', side: 'Bride', seating: 'Table 4', rsvp: 'Confirmed' },
    { family: 'Fernando family', side: 'Groom', seating: 'Table 2', rsvp: 'Pending' },
  ]);
  const [newName, setNewName] = React.useState('');
  const [newSide, setNewSide] = React.useState('Bride');
  const [error, setError] = React.useState('');
  const [announcement, setAnnouncement] = React.useState('');

  function addGuest() {
    if (!newName.trim()) {
      setError('Please enter a guest or family name.');
      return;
    }
    setError('');
    setGuests([
      ...guests,
      { family: newName.trim(), side: newSide, seating: 'Unassigned', rsvp: 'Pending' },
    ]);
    setAnnouncement(`${newName.trim()} added to the guest list.`);
    setNewName('');
  }

  return (
    <div className="px-6 md:px-16 py-8 md:py-12">
      {/* Visually hidden, but announced by screen readers when a guest is added */}
      <p className="sr-only" role="status" aria-live="polite">{announcement}</p>

      <p className="font-quote italic text-gray-500 mb-2">Every guest, warmly accounted for</p>
      <h1 className="font-heading text-2xl md:text-3xl text-gray-800 mb-8">GUESTS · {guests.length}</h1>

      {/* Add guest form */}
      <div className="border border-gold/40 rounded-lg p-6 mb-8">
        <p className="text-xs tracking-widest text-gray-500 mb-4">ADD A GUEST</p>
        <div className="flex flex-col sm:flex-row sm:items-end gap-4">
          <div className="flex-1">
            <Input
              label="GUEST OR FAMILY NAME"
              placeholder="e.g. Silva family"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
              aria-invalid={!!error}
            />
          </div>

          <div>
            <p className="text-xs text-gray-500 mb-1">SIDE</p>
            <div className="flex gap-2" role="group" aria-label="Guest side">
              <button
                type="button"
                aria-pressed={newSide === 'Bride'}
                onClick={() => setNewSide('Bride')}
                className={`px-4 py-2 rounded-lg text-sm border transition-colors
                  ${newSide === 'Bride'
                    ? 'bg-gradient-to-r from-gold to-[#e0c88a] text-[#3a2a12] border-gold'
                    : 'border-gray-300 text-gray-600 hover:border-gold'}`}
              >
                Bride's side
              </button>
              <button
                type="button"
                aria-pressed={newSide === 'Groom'}
                onClick={() => setNewSide('Groom')}
                className={`px-4 py-2 rounded-lg text-sm border transition-colors
                  ${newSide === 'Groom'
                    ? 'bg-gradient-to-r from-gold to-[#e0c88a] text-[#3a2a12] border-gold'
                    : 'border-gray-300 text-gray-600 hover:border-gold'}`}
              >
                Groom's side
              </button>
            </div>
          </div>

          <Button variant="primary" onClick={addGuest}>+ Add Guest</Button>
        </div>

        {error && (
          <p role="alert" className="text-sm text-red-600 mt-3">{error}</p>
        )}
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
