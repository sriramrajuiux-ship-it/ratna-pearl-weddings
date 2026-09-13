// app.js
// The root component. `selectedVendors` is lifted up here (not kept
// inside Vendor Marketplace) specifically so Budget Tracker can read
// the same data — this is what makes adding a vendor on one page
// show up live on another, matching our Task 1 interaction design.

function App() {
  const [page, setPage] = React.useState('landing');

  const [selectedVendors, setSelectedVendors] = React.useState([
    { id: 'venue', name: 'Venue - Kandy Heritage Hall', category: 'Venue', price: 350000, status: 'Approved' },
    { id: 'catering-serendib', name: 'Serendib Catering', category: 'Catering', price: 300000, status: 'Pending' },
    { id: 'decor-poruwa', name: 'Poruwa Decor Studio', category: 'Decor', price: 200000, status: 'Approved' },
  ]);

  function addVendor(vendor) {
    setSelectedVendors((prev) => [...prev, vendor]);
  }

  return (
    <div>
      {page === 'landing' && (
        <LandingPage onStart={() => setPage('onboarding')} />
      )}

      {page === 'onboarding' && (
        <OnboardingPage onComplete={() => setPage('home')} />
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

          <TopNav active={page} onNavigate={setPage} />

          <main id="main-content">
            {page === 'home' && <HomePage onNavigate={setPage} />}
            {page === 'venue' && <DateVenuePage />}
            {page === 'vendors' && (
              <VendorMarketplacePage
                selectedVendors={selectedVendors}
                onAdd={addVendor}
                onNavigate={setPage}
              />
            )}
            {page === 'budget' && (
              <BudgetTrackerPage selectedVendors={selectedVendors} />
            )}
            {page === 'design' && <DesignStudioPage />}
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
