import { useEffect, useRef, useState } from 'react'
import { Maximize, Pause, Play, Minimize } from 'lucide-react'
import { film } from '../data/project.js'

/**
 * Custom project-film player.
 * If `film.videoSrc` is set, a real <video> with custom controls is used.
 * Otherwise a Ken-Burns still sequence stands in — drop Drive videos into
 * public/videos/ and update src/data/project.js.
 */
export default function FilmPlayer() {
  const videoRef = useRef(null)
  const wrapRef = useRef(null)
  const [playing, setPlaying] = useState(true)
  const [idx, setIdx] = useState(0)
  const [progress, setProgress] = useState(0)
  const [fs, setFs] = useState(false)
  const hasVideo = Boolean(film.videoSrc)

  useEffect(() => {
    if (hasVideo) return
    if (!playing) return
    const total = film.durationPerStill * 1000
    const start = Date.now() - progress * total
    const id = setInterval(() => {
      const t = (Date.now() - start) / total
      if (t >= 1) {
        setIdx((i) => (i + 1) % film.stills.length)
        setProgress(0)
      } else {
        setProgress(t)
      }
    }, 80)
    return () => clearInterval(id)
  }, [playing, idx, hasVideo]) // eslint-disable-line

  const toggle = () => {
    if (hasVideo) {
      const v = videoRef.current
      if (!v) return
      if (v.paused) {
        v.play()
        setPlaying(true)
      } else {
        v.pause()
        setPlaying(false)
      }
    } else {
      setPlaying((p) => !p)
    }
  }

  const toggleFs = async () => {
    const el = wrapRef.current
    if (!el) return
    if (!document.fullscreenElement) {
      await el.requestFullscreen?.()
      setFs(true)
    } else {
      await document.exitFullscreen?.()
      setFs(false)
    }
  }

  const onVideoTime = () => {
    const v = videoRef.current
    if (!v || !v.duration) return
    setProgress(v.currentTime / v.duration)
  }

  const seek = (e) => {
    const val = Number(e.target.value)
    if (hasVideo) {
      const v = videoRef.current
      if (v?.duration) v.currentTime = val * v.duration
    }
    setProgress(val)
  }

  return (
    <div
      ref={wrapRef}
      className="relative overflow-hidden rounded-[1.6rem] bg-ink-950 aspect-video group"
    >
      {hasVideo ? (
        <video
          ref={videoRef}
          src={film.videoSrc}
          poster={film.poster}
          muted
          playsInline
          autoPlay
          loop
          onTimeUpdate={onVideoTime}
          className="absolute inset-0 h-full w-full object-cover"
        />
      ) : (
        film.stills.map((src, i) => (
          <img
            key={src}
            src={src}
            alt=""
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
              i === idx ? 'opacity-100 animate-ken-burns' : 'opacity-0'
            }`}
            loading="lazy"
          />
        ))
      )}

      <div className="absolute inset-0 bg-gradient-to-t from-ink-950/80 via-transparent to-transparent" />

      {!hasVideo && (
        <p className="absolute top-4 left-4 glass rounded-full px-3 py-1 text-[10px] tracking-[0.2em] uppercase text-gold-200">
          Photo film · ADD PROJECT VIDEO
        </p>
      )}

      <div className="absolute bottom-0 inset-x-0 p-4 sm:p-5 flex items-center gap-3 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity">
        <button
          onClick={toggle}
          className="p-2.5 rounded-full bg-gold-500 text-ink-950"
          aria-label={playing ? 'Pause' : 'Play'}
        >
          {playing ? <Pause size={16} fill="currentColor" /> : <Play size={16} fill="currentColor" />}
        </button>
        <input
          className="film-range flex-1"
          type="range"
          min="0"
          max="1"
          step="0.001"
          value={progress}
          onChange={seek}
          aria-label="Seek"
        />
        <button
          onClick={toggleFs}
          className="p-2 text-cream-50/80 hover:text-gold-300"
          aria-label="Fullscreen"
        >
          {fs ? <Minimize size={18} /> : <Maximize size={18} />}
        </button>
      </div>
    </div>
  )
}
