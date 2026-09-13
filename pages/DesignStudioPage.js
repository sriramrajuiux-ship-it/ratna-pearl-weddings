// DesignStudioPage.js
// Template selection is real state — clicking a template highlights it
// and updates which one is "active" (the live preview always shows the
// couple's names regardless, matching the reference design).

function DesignStudioPage() {
  const [activeTemplate, setActiveTemplate] = React.useState('Gold Leaf');
  const templates = ['Gold Leaf', 'Floral', 'Minimal', 'Kandyan'];

  const guestCards = [
    { family: 'Perera family', status: 'Approved' },
    { family: 'Fernando family', status: 'Pending' },
  ];

  return (
    <div className="px-6 md:px-16 py-8 md:py-12">
      <p className="font-quote italic text-gray-500 mb-2">Your wedding, beautifully designed</p>
      <h1 className="font-heading text-2xl md:text-3xl text-gray-800 mb-6 md:mb-10">DESIGN STUDIO</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Templates */}
        <div>
          <p className="text-xs tracking-widest text-gray-500 mb-4">TEMPLATES</p>
          <div className="grid grid-cols-2 gap-3 mb-4">
            {templates.map((t) => (
              <button
                type="button"
                key={t}
                onClick={() => setActiveTemplate(t)}
                aria-pressed={activeTemplate === t}
                className={`cursor-pointer border rounded-lg h-24 flex items-center justify-center text-sm
                  ${activeTemplate === t ? 'border-2 border-gold text-gold font-medium' : 'border-gray-300 text-gray-600 hover:border-gold'}`}
              >
                {t}
              </button>
            ))}
          </div>
          <Button variant="secondary">Request Custom Changes</Button>
        </div>

        {/* Live preview + guest cards */}
        <div className="md:col-span-2">
          <div className="border-2 border-gold rounded-lg p-10 text-center mb-6 bg-white/50">
            <p className="text-xs tracking-widest text-gold mb-3">TOGETHER WITH THEIR FAMILIES</p>
            <p className="font-heading text-2xl text-gray-800 mb-2">Shalini &amp; Ajith</p>
            <p className="text-sm text-gray-500">14th February · Kandy Heritage Hall</p>
            <p className="text-xs text-gray-400 mt-4">Template: {activeTemplate}</p>
          </div>

          <p className="text-xs tracking-widest text-gray-500 mb-3">GUEST-LINKED CARDS</p>
          <div className="border border-gold/40 rounded-lg overflow-hidden">
            {guestCards.map((g, i) => (
              <div
                key={g.family}
                className={`flex items-center justify-between px-5 py-4 ${i !== guestCards.length - 1 ? 'border-b border-gray-100' : ''}`}
              >
                <span className="text-gray-700">{g.family}</span>
                <Badge status={g.status === 'Approved' ? 'Approved' : 'Pending'} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
