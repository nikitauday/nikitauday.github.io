import { motion } from 'framer-motion'

export default function Reveal({ children, as: Component = 'div', delay = 0, y = 24, className, style, ...rest }) {
  const MotionComponent = motion[Component] ?? motion.div
  return (
    <MotionComponent
      className={className}
      style={style}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      {...rest}
    >
      {children}
    </MotionComponent>
  )
}
