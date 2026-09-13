// app.js
// The root component. `selectedVendors` is lifted up here (not kept
// inside Vendor Marketplace) specifically so Budget Tracker can read
// the same data — this is what makes adding a vendor on one page
// show up live on another, matching our Task 1 interaction design.
//
// Navigation history: since we're using simple state-based routing
// (no URL/React Router), the browser's real Back button doesn't know
// about our "pages" at all. `navigate()` pushes the page we're
// leaving onto a history stack every time it's called, so `goBack()`
// can pop it and return there — this is what makes our own on-screen
// Back button actually work correctly, including remembering exactly
// where you came from (e.g. Budget -> Vendors -> Budget).

function App() {
  const [page, setPage] = React.useState('landing');
  const [history, setHistory] = React.useState([]);

  const [coupleInfo, setCoupleInfo] = React.useState({
    bride: 'Shalini',
    groom: 'Ajith',
    tradition: 'Tamil',
  });

  const [selectedVendors, setSelectedVendors] = React.useState([
    { id: 'venue', name: 'Venue - Kandy Heritage Hall', category: 'Venue', price: 350000, status: 'Approved' },
    { id: 'catering-serendib', name: 'Serendib Catering', category: 'Catering', price: 300000, status: 'Pending' },
    { id: 'decor-poruwa', name: 'Poruwa Decor Studio', category: 'Decor', price: 200000, status: 'Approved' },
  ]);

  function navigate(nextPage) {
    setHistory((prev) => [...prev, page]);
    setPage(nextPage);
  }

  function goBack() {
    setHistory((prev) => {
      if (prev.length === 0) {
        setPage('home'); // safe fallback if there's nowhere to go back to
        return prev;
      }
      const newHistory = prev.slice(0, -1);
      setPage(prev[prev.length - 1]);
      return newHistory;
    });
  }

  function addVendor(vendor) {
    setSelectedVendors((prev) => [...prev, vendor]);
  }

  return (
    <div>
      {page === 'landing' && (
        <LandingPage onStart={() => navigate('onboarding')} />
      )}

      {page === 'onboarding' && (
        <OnboardingPage
          onBack={() => navigate('landing')}
          onComplete={(info) => {
            setCoupleInfo(info);
            navigate('home');
          }}
        />
      )}

      {page !== 'landing' && page !== 'onboarding' && (
        <div className="min-h-screen bg-ivory">
          {/* Skip link: invisible until focused (Tab from page load), lets
              keyboard users jump past the nav instead of tabbing through
              Home / My Wedding / Vendors / Timeline / Contact every time. */}
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:bg-white focus:text-gray-800 focus:px-4 focus:py-2 focus:rounded-lg focus:shadow-md"
          >
            Skip to main content
          </a>

          <TopNav active={page} onNavigate={navigate} />

          <main id="main-content">
            {page !== 'home' && (
              <div className="px-6 md:px-16 pt-6">
                <BackButton onClick={goBack} />
              </div>
            )}
            {page === 'home' && <HomePage coupleInfo={coupleInfo} onNavigate={navigate} />}
            {page === 'venue' && <DateVenuePage />}
            {page === 'vendors' && (
              <VendorMarketplacePage
                selectedVendors={selectedVendors}
                onAdd={addVendor}
                onNavigate={navigate}
              />
            )}
            {page === 'budget' && (
              <BudgetTrackerPage selectedVendors={selectedVendors} />
            )}
            {page === 'design' && <DesignStudioPage coupleInfo={coupleInfo} />}
            {page === 'guests' && <GuestsPage />}
            {page === 'timeline' && <TimelinePage />}
          </main>
        </div>
      )}
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
