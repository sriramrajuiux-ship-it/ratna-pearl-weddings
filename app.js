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
          <TopNav active={page} onNavigate={setPage} />

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
        </div>
      )}
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
