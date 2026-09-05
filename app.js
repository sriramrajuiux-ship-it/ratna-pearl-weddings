// app.js
// This is our starting point — just enough to prove Badge and Button
// work and render correctly. We'll build this out page by page
// (Onboarding, Dashboard, Vendor Marketplace, etc.) in the commits
// that follow.

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4 p-8">
      <h1 className="font-heading text-2xl text-maroon">Ratna Pearl Weddings</h1>
      <p className="text-gray-500 text-sm">Component test — Badge and Button</p>

      <div className="flex gap-2">
        <Badge status="Approved" />
        <Badge status="Pending" />
        <Badge status="Overdue" />
      </div>

      <div className="flex gap-2">
        <Button variant="primary">Add vendor</Button>
        <Button variant="secondary">Cancel</Button>
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
