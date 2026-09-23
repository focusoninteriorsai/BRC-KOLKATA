/**
 * Clearly marked swap-in slot for missing people photos.
 * Replace `initials` block by setting the corresponding `photo` field in src/data/project.js
 */
export default function PlaceholderPortrait({ initials, label, className = '' }) {
  return (
    <div
      className={`relative overflow-hidden bg-gradient-to-br from-ink-700 to-ink-950 flex items-center justify-center ${className}`}
    >
      <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_30%_20%,rgba(201,162,39,0.35),transparent_55%)]" />
      <span className="relative z-10 font-display text-4xl sm:text-5xl text-gold-300/90 tracking-widest">
        {initials}
      </span>
      <span className="absolute bottom-0 inset-x-0 z-10 bg-gold-500/90 text-ink-950 text-[10px] font-semibold tracking-[0.18em] uppercase text-center py-1.5">
        {label}
      </span>
    </div>
  )
}
