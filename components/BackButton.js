// BackButton.js
// A small "‹ Back" control used at the top of every app page. Real
// browser back wouldn't work correctly here since we're not using
// URL-based routing — this calls a goBack() function that App.js
// manages via its own history stack instead.
//
// Usage: <BackButton onClick={goBack} />

function BackButton({ onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex items-center gap-1 text-sm text-gray-500 hover:text-gold transition-colors mb-4
                 focus:outline-none focus:ring-2 focus:ring-gold rounded"
    >
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      Back
    </button>
  );
}
