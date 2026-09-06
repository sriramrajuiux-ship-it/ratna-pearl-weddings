// DateVenuePage.js
// Suggested nekatha dates (clickable — highlights the chosen one) plus
// ceremony/reception venue cards. A status bar at the bottom mirrors
// the confirmed state, matching the reference design.

function DateVenuePage() {
  const [selectedDate, setSelectedDate] = React.useState('14 FEB, 6:40 AM');
  const dates = ['14 FEB, 6:40 AM', '2 MAR, 7:10 AM', '18 MAR, 6:55 AM'];

  return (
    <div className="px-16 py-12">
      <p className="font-quote italic text-gray-500 mb-2">Let's lock in the details</p>
      <h1 className="font-heading text-3xl text-gray-800 mb-10">DATE &amp; VENUE</h1>

      <div className="grid grid-cols-3 gap-6 mb-10">
        {/* Suggested dates */}
        <div className="border border-gold/40 rounded-lg p-6">
          <p className="text-xs tracking-widest text-gray-500 mb-4">SUGGESTED NEKATHA DATES</p>
          <div className="flex flex-col gap-3">
            {dates.map((d) => (
              <div
                key={d}
                onClick={() => setSelectedDate(d)}
                className={`cursor-pointer rounded-lg px-4 py-3 text-sm border text-center
                  ${selectedDate === d
                    ? 'bg-gradient-to-r from-gold to-[#e0c88a] text-[#3a2a12] border-gold'
                    : 'border-gray-300 text-gray-600 hover:border-gold'}`}
              >
                {d}
              </div>
            ))}
          </div>
        </div>

        {/* Ceremony venue */}
        <div className="border border-gold/40 rounded-lg p-6">
          <p className="text-xs tracking-widest text-gray-500 mb-2">CEREMONY VENUE</p>
          <p className="font-heading text-xl text-gray-800 mb-1">Kandy Heritage Hall</p>
          <p className="text-sm text-gray-500 mb-6">Kandy · Up to 400 guests</p>
          <Button variant="primary">SELECT VENUE</Button>
        </div>

        {/* Reception venue */}
        <div className="border border-gold/40 rounded-lg p-6">
          <p className="text-xs tracking-widest text-gray-500 mb-2">RECEPTION VENUE</p>
          <p className="font-heading text-xl text-gray-800 mb-1">Cinnamon Grand Ballroom</p>
          <p className="text-sm text-gray-500 mb-6">Colombo · Up to 600 guests</p>
          <Button variant="primary">SELECT VENUE</Button>
        </div>
      </div>

      {/* Status bar */}
      <div className="border-t border-gold/30 pt-6 grid grid-cols-3 gap-6">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-green-500"></span>
          <div>
            <p className="text-xs text-gray-500">DATE</p>
            <p className="text-sm text-gray-800">{selectedDate} · Confirmed</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-green-500"></span>
          <div>
            <p className="text-xs text-gray-500">CEREMONY VENUE</p>
            <p className="text-sm text-gray-800">Kandy Heritage Hall · Pending</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-green-500"></span>
          <div>
            <p className="text-xs text-gray-500">RECEPTION VENUE</p>
            <p className="text-sm text-gray-800">Cinnamon Grand Ballroom · Pending</p>
          </div>
        </div>
      </div>
    </div>
  );
}
