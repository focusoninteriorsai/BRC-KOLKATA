import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { executor, nav } from '../data/project.js'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const go = (id) => {
    setOpen(false)
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled || open ? 'py-3' : 'py-5'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div
          className={`flex items-center justify-between gap-4 rounded-2xl px-4 sm:px-5 py-2.5 transition-all duration-500 ${
            scrolled || open
              ? 'glass-strong'
              : 'bg-transparent border border-transparent'
          }`}
        >
          <a href="#hero" className="flex items-center gap-3 min-w-0" onClick={() => setOpen(false)}>
            <img
              src={executor.logo}
              alt="FocusOn Interiors"
              className="h-8 sm:h-9 w-auto object-contain"
            />
            <span className="hidden md:block text-[10px] tracking-[0.22em] uppercase text-cream-200/70 border-l border-white/15 pl-3 leading-tight">
              Case Study
              <br />
              <span className="text-gold-300">BRC Group</span>
            </span>
          </a>

          <nav className="hidden lg:flex items-center gap-0.5">
            {nav.map((item) => (
              <button
                key={item.id}
                onClick={() => go(item.id)}
                className="px-3 py-2 text-[12px] tracking-[0.14em] uppercase text-cream-100/70 hover:text-gold-300 transition-colors"
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={executor.website}
              target="_blank"
              rel="noreferrer"
              className="hidden sm:inline-flex items-center rounded-full border border-gold-500/40 bg-gold-500/10 px-4 py-2 text-[11px] tracking-[0.18em] uppercase text-gold-200 hover:bg-gold-500 hover:text-ink-950 transition-colors"
            >
              Enquire
            </a>
            <button
              className="lg:hidden p-2 text-cream-50"
              aria-label={open ? 'Close menu' : 'Open menu'}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div className="lg:hidden mx-auto max-w-7xl px-4 sm:px-6 mt-2">
          <div className="glass-strong rounded-2xl p-4 flex flex-col">
            {nav.map((item) => (
              <button
                key={item.id}
                onClick={() => go(item.id)}
                className="text-left px-3 py-3 text-sm tracking-[0.16em] uppercase text-cream-50/90 hover:text-gold-300 border-b border-white/5 last:border-0"
              >
                {item.label}
              </button>
            ))}
            <a
              href={executor.website}
              target="_blank"
              rel="noreferrer"
              className="mt-3 text-center rounded-full bg-gold-500 text-ink-950 py-3 text-[12px] tracking-[0.2em] uppercase font-semibold"
            >
              Visit FocusOn Interiors
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
