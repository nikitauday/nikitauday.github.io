import { motion } from 'framer-motion'

// Delays passed in by callers were tuned for a snappier 0.6s reveal;
// scale them up so cascades stay spread out at the slower duration below.
const DELAY_SCALE = 1.6

export default function Reveal({ children, as: Component = 'div', delay = 0, y = 44, className, style, ...rest }) {
  const MotionComponent = motion[Component] ?? motion.div
  return (
    <MotionComponent
      className={className}
      style={style}
      initial={{ opacity: 0, y, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 1.1, delay: delay * DELAY_SCALE, ease: [0.16, 1, 0.3, 1] }}
      {...rest}
    >
      {children}
    </MotionComponent>
  )
}
