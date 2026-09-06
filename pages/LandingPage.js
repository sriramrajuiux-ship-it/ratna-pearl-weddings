// LandingPage.js
// The very first screen — a full-bleed hero with a "Start Planning" CTA
// that takes the user into the Onboarding form. No nav bar here on
// purpose: this is the "front door," before the app itself begins.
//
// Usage: <LandingPage onStart={() => setPage('onboarding')} />

function LandingPage({ onStart }) {
  return (
    <div
      className="min-h-screen flex flex-col justify-center px-16 relative"
      style={{
        backgroundImage:
          'linear-gradient(rgba(20,10,10,0.55), rgba(20,10,10,0.35)), url(https://images.unsplash.com/photo-1519741497674-611481863552?w=1600&q=80)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Small mark, top-left */}
      <div className="absolute top-10 left-16 w-8 h-8 border border-gold rounded-full flex items-center justify-center">
        <div className="w-2 h-2 bg-gold rounded-full"></div>
      </div>

      <p className="text-gold text-sm tracking-widest uppercase mb-4">
        Curated Wedding Planning · Sri Lanka
      </p>

      <h1 className="font-heading text-white text-6xl leading-tight mb-2">
        Ratna Pearl
      </h1>
      <h1 className="font-heading text-gold text-6xl leading-tight mb-6">
        Weddings
      </h1>

      <div className="w-24 h-px bg-gold mb-6"></div>

      <p className="font-quote italic text-white text-lg mb-10 max-w-md">
        "Welcome to Ratna Pearl Weddings. Where your love story meets thoughtful planning."
      </p>

      <div className="flex items-center gap-8">
        <button
          onClick={onStart}
          className="bg-gradient-to-r from-gold to-[#e0c88a] text-[#3a2a12] font-semibold text-sm tracking-wide px-8 py-4 rounded"
        >
          START PLANNING
        </button>
        <div>
          <p className="text-white text-sm tracking-wide">EXPLORE RATNA PEARL</p>
          <div className="w-32 h-px bg-white mt-2"></div>
        </div>
      </div>
    </div>
  );
}
