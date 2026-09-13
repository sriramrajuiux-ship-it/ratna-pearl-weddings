// OnboardingPage.js
// Second screen: tradition selection + names. Uses our Input component
// for the name fields, and simple state to track which tradition card
// is selected (this is the "guided onboarding, not a blank form"
// interaction pattern from our Task 1 write-up).
//
// Usage: <OnboardingPage onComplete={() => setPage('home')} />

function OnboardingPage({ onComplete }) {
  const [tradition, setTradition] = React.useState('Tamil');
  const [brideName, setBrideName] = React.useState('');
  const [groomName, setGroomName] = React.useState('');

  const traditions = [
    { key: 'Tamil', icon: 'assets/images/tradition-tamil.svg' },
    { key: 'Sinhala', icon: 'assets/images/tradition-sinhala.svg' },
    { key: 'Christian', icon: 'assets/images/tradition-christian.svg' },
    { key: 'Muslim', icon: 'assets/images/tradition-muslim.svg' },
  ];

  return (
    <div className="min-h-screen bg-ivory flex items-center justify-center px-6 py-20 relative overflow-hidden">

      {/* Floral border images — full width, top and bottom */}
      <img
        src="assets/images/floral-top.png"
        alt=""
        className="absolute top-0 left-0 w-full pointer-events-none select-none"
      />
      <img
        src="assets/images/floral-bottom.png"
        alt=""
        className="absolute bottom-0 left-0 w-full pointer-events-none select-none"
      />

      <div className="max-w-xl w-full text-center relative z-10">
        <h1 className="font-heading text-gold text-4xl mb-3">RATNA PEARL WEDDINGS</h1>
        <p className="font-quote italic text-gray-600 mb-6">
          Step through, and let's begin planning your wedding together
        </p>

        <div className="flex items-center gap-3 mb-10 justify-center">
          <div className="flex-1 h-px bg-gold max-w-[100px]"></div>
          <div className="w-2 h-2 bg-gold rotate-45"></div>
          <div className="flex-1 h-px bg-gold max-w-[100px]"></div>
        </div>

        <p className="text-xs tracking-widest text-gray-500 mb-3 text-left">CHOOSE YOUR TRADITION</p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
          {traditions.map((t) => (
            <button
              type="button"
              key={t.key}
              onClick={() => setTradition(t.key)}
              aria-pressed={tradition === t.key}
              className={`cursor-pointer border rounded-lg py-6 flex flex-col items-center gap-2 transition-colors
                ${tradition === t.key
                  ? 'bg-gradient-to-b from-gold to-[#e0c88a] border-gold text-[#3a2a12]'
                  : 'border-gray-300 text-gray-600 hover:border-gold'}`}
            >
              <img src={t.icon} alt="" className="w-8 h-8" />
              <span className="text-sm font-medium">{t.key}</span>
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10 text-left">
          <Input
            label="BRIDE'S NAME"
            placeholder="e.g. Shalini"
            value={brideName}
            onChange={(e) => setBrideName(e.target.value)}
          />
          <Input
            label="GROOM'S NAME"
            placeholder="e.g. Ajith"
            value={groomName}
            onChange={(e) => setGroomName(e.target.value)}
          />
        </div>

        <Button variant="primary" onClick={onComplete}>
          ENTER YOUR JOURNEY →
        </Button>
      </div>
    </div>
  );
}
