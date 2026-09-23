import { useEffect } from 'react'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'

export default function Lightbox({ items, index, onClose, onPrev, onNext }) {
  const item = items[index]

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') onPrev()
      if (e.key === 'ArrowRight') onNext()
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose, onPrev, onNext])

  if (!item) return null

  return (
    <div
      className="fixed inset-0 z-[80] bg-ink-950/92 backdrop-blur-md flex flex-col"
      role="dialog"
      aria-modal="true"
      aria-label="Image lightbox"
    >
      <div className="flex items-center justify-between px-4 sm:px-8 py-4">
        <p className="eyebrow">
          {String(index + 1).padStart(2, '0')} / {String(items.length).padStart(2, '0')}
          <span className="ml-4 text-cream-50/80 tracking-normal normal-case font-sans">
            {item.caption}
          </span>
        </p>
        <button
          onClick={onClose}
          className="p-2 rounded-full border border-white/15 text-cream-50 hover:border-gold-400 hover:text-gold-300"
          aria-label="Close lightbox"
        >
          <X size={18} />
        </button>
      </div>

      <div className="relative flex-1 flex items-center justify-center px-4 sm:px-16 pb-8">
        <button
          onClick={onPrev}
          className="absolute left-3 sm:left-6 p-3 rounded-full glass text-cream-50 hover:text-gold-300"
          aria-label="Previous image"
        >
          <ChevronLeft />
        </button>
        <img
          src={item.src}
          alt={item.alt}
          className="max-h-[78vh] max-w-full object-contain rounded-lg shadow-2xl"
        />
        <button
          onClick={onNext}
          className="absolute right-3 sm:right-6 p-3 rounded-full glass text-cream-50 hover:text-gold-300"
          aria-label="Next image"
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  )
}
