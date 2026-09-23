import { motion, useReducedMotion } from 'framer-motion'

const variants = {
  hidden: { opacity: 0, y: 36 },
  show: { opacity: 1, y: 0 },
}

export default function Reveal({
  children,
  className = '',
  delay = 0,
  y = 36,
  once = true,
}) {
  const reduce = useReducedMotion()
  if (reduce) return <div className={className}>{children}</div>

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView="show"
      viewport={{ once, margin: '-80px' }}
      variants={variants}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}
