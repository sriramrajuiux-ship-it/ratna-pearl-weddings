/*
  tokens.js
  ---------
  Our design tokens, pulled out of index.html into their own file so
  the design system is a visible, standalone artifact rather than
  buried in a script tag.

  This still has to be loaded BEFORE the Tailwind CDN script reads
  `tailwind.config` in index.html, so index.html includes it directly
  as a plain <script src="styles/tokens.js"> tag ahead of the config
  block. Keeping it here means every color/font decision in the whole
  app traces back to one file — change a value here and it updates
  everywhere those classes are used (bg-gold, font-heading, etc.)
*/

const designTokens = {
  colors: {
    gold: '#B8935A',      // Primary brand color — buttons, active states, accents
    maroon: '#6B1F2A',    // Secondary brand color — gradients, headings
    ivory: '#FAF7F2',     // Background color used across every page
  },
  fontFamily: {
    heading: ['"Cinzel Decorative"', 'serif'],  // Page titles, couple's names
    quote: ['"Libre Bodoni"', 'serif'],         // Italic taglines, quotes
    body: ['"Jost"', 'sans-serif'],             // Default body text
  },
  // Status colors are handled directly in Badge.js via Tailwind's
  // built-in green/amber/red palette, since those are semantic
  // (success/warning/danger) rather than brand-specific.
};
