import { ArrowUpRight, Instagram, Mail, MapPin, Phone, Youtube } from 'lucide-react'
import { executor } from '../data/project.js'
import Reveal from './Reveal.jsx'

export default function Footer() {
  return (
    <footer id="contact" className="relative pt-24 sm:pt-32 pb-10 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <Reveal>
          <div className="glass-strong rounded-[2rem] p-8 sm:p-14 overflow-hidden relative">
            <div className="absolute -bottom-20 -right-10 w-80 h-80 rounded-full bg-gold-500/10 blur-3xl" />
            <p className="eyebrow mb-4">10  —  Next brief</p>
            <h2 className="display text-3xl sm:text-5xl text-cream-50 max-w-3xl leading-tight">
              Want a project like this for your company?
            </h2>
            <p className="mt-5 text-cream-200/75 text-lg font-light max-w-xl">
              FocusOn Interiors designs and executes commercial interiors end-to-end — from the first
              layout to the last snag.
            </p>
            <a
              href={executor.website}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-gold-500 text-ink-950 px-6 py-3 text-sm tracking-[0.16em] uppercase font-semibold hover:bg-gold-300 transition-colors"
            >
              Start a conversation
              <ArrowUpRight size={16} />
            </a>

            <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-8 text-sm text-cream-200/80">
              <p className="flex items-start gap-3">
                <Mail size={16} className="mt-0.5 text-gold-300 shrink-0" />
                <a href={`mailto:${executor.email}`} className="hover:text-gold-300">
                  {executor.email}
                </a>
              </p>
              <p className="flex items-start gap-3">
                <Phone size={16} className="mt-0.5 text-gold-300 shrink-0" />
                <span>
                  {executor.phones.map((p) => (
                    <a key={p} href={`tel:${p.replace(/\s/g, '')}`} className="block hover:text-gold-300">
                      {p}
                    </a>
                  ))}
                </span>
              </p>
              <p className="flex items-start gap-3">
                <MapPin size={16} className="mt-0.5 text-gold-300 shrink-0" />
                {executor.address}
              </p>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href={executor.socials.instagram}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-full border border-white/15 hover:border-gold-400 hover:text-gold-300"
                aria-label="Instagram"
              >
                <Instagram size={16} />
              </a>
              <a
                href={executor.socials.youtube}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-full border border-white/15 hover:border-gold-400 hover:text-gold-300"
                aria-label="YouTube"
              >
                <Youtube size={16} />
              </a>
              <a
                href={executor.website}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-full border border-white/15 hover:border-gold-400 hover:text-gold-300 text-[11px] tracking-[0.16em] uppercase px-4"
              >
                Website
              </a>
            </div>
          </div>
        </Reveal>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-cream-200/40 tracking-[0.14em] uppercase">
          <p>© {new Date().getFullYear()} FocusOn Interior Decorators Pvt. Ltd.</p>
          <p>BRC Group Kolkata · Case Study</p>
        </div>
      </div>
    </footer>
  )
}
