import { useEffect, useRef, useState } from 'react'

export default function StatCounter({ value, suffix = '', duration = 1600 }) {
  const [n, setN] = useState(0)
  const ref = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started.current) return
        started.current = true
        const start = performance.now()
        const tick = (now) => {
          const t = Math.min(1, (now - start) / duration)
          const eased = 1 - Math.pow(1 - t, 3)
          setN(Math.round(eased * value))
          if (t < 1) requestAnimationFrame(tick)
        }
        requestAnimationFrame(tick)
      },
      { threshold: 0.4 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [value, duration])

  const formatted = n.toLocaleString('en-IN')

  return (
    <span ref={ref} className="tabular-nums">
      {formatted}
      {suffix}
    </span>
  )
}
