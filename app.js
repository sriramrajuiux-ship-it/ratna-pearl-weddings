// app.js
// The root component. Instead of React Router, we use a simple state
// variable to decide which "page" is showing — this keeps things simple
// while still giving us genuine multi-view navigation, matching the
// confirmed screen order:
// Landing -> Onboarding -> Home -> Date & Venue -> Vendor Marketplace
// -> Budget Tracker -> Design Studio -> Guests -> Timeline & Checklist

function App() {
  const [page, setPage] = React.useState('landing');

  return (
    <div>
      {page === 'landing' && (
        <LandingPage onStart={() => setPage('onboarding')} />
      )}

      {page === 'onboarding' && (
        <OnboardingPage onComplete={() => setPage('home')} />
      )}

      {/* Every page from here on shares the same top navigation */}
      {page !== 'landing' && page !== 'onboarding' && (
        <div className="min-h-screen bg-ivory">
          <TopNav active={page} onNavigate={setPage} />

          {page === 'home' && (
            <HomePage onNavigate={setPage} />
          )}
          {page === 'venue' && (
            <div className="p-10 text-center text-gray-400">
              Date & Venue — coming next
            </div>
          )}
          {page === 'vendors' && (
            <div className="p-10 text-center text-gray-400">
              Vendor Marketplace — coming next
            </div>
          )}
          {page === 'budget' && (
            <div className="p-10 text-center text-gray-400">
              Budget Tracker — coming next
            </div>
          )}
          {page === 'design' && (
            <div className="p-10 text-center text-gray-400">
              Design Studio — coming next
            </div>
          )}
          {page === 'guests' && (
            <div className="p-10 text-center text-gray-400">
              Guests — coming next
            </div>
          )}
          {page === 'timeline' && (
            <div className="p-10 text-center text-gray-400">
              Timeline & Checklist — coming next
            </div>
          )}
        </div>
      )}
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
