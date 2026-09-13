// Input.js
// A labeled text input, used on Onboarding (names, guest count, budget),
// Guest List (search), and Design Studio (template text customization).
//
// Usage: <Input label="Bride's name" placeholder="e.g. Amaya" value={...} onChange={...} />

function Input({ label, placeholder, value, onChange, type = 'text', 'aria-invalid': ariaInvalid }) {
  const id = React.useId();

  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label htmlFor={id} className="text-xs text-gray-500">{label}</label>
      )}
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        aria-invalid={ariaInvalid || undefined}
        className={`border rounded-lg px-3 py-2 text-sm
                   focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent
                   ${ariaInvalid ? 'border-red-400' : 'border-gray-300'}`}
      />
    </div>
  );
}
