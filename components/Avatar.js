// Avatar.js
// Shows a person's initials in a small circle with the gold-to-maroon
// gradient. Used on ApprovalTag, Budget line items, and the Dashboard's
// family activity feed — anywhere we need to show "who" did something.
//
// Usage: <Avatar initials="AM" />

function Avatar({ initials, size = 'md' }) {
  const sizes = {
    sm: 'w-6 h-6 text-[10px]',
    md: 'w-8 h-8 text-xs',
  };

  return (
    <div
      className={`${sizes[size]} rounded-full bg-gradient-to-br from-gold to-maroon
                  flex items-center justify-center text-white font-medium flex-shrink-0`}
    >
      {initials}
    </div>
  );
}
