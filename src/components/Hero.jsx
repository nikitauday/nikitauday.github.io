import { motion } from 'framer-motion'
import Reveal from './Reveal'

export default function Hero() {
  return (
    <section style={{ padding: 'calc(4*var(--leading)) 0 calc(2.5*var(--leading))' }}>
      <Reveal as="h1" style={{ margin: 0 }}>
        Getting AI products from what engineers can build to what customers will trust.
      </Reveal>
      <Reveal
        as="p"
        delay={0.05}
        style={{ fontSize: 17, lineHeight: 'var(--leading)', maxWidth: 'var(--measure)', margin: 'calc(1.5*var(--leading) - 1cap) 0 0' }}
      >
        Engineer turned product manager. I've delivered measurable performance gains at Microsoft, led a
        four-person team at Boston Strategies, and defined the go-to-market for an AI governance tool sold to
        UN and NATO stakeholders.
      </Reveal>
      <Reveal
        delay={0.1}
        style={{ display: 'flex', gap: 'var(--space-3)', flexWrap: 'wrap', marginTop: 'var(--leading)' }}
      >
        <motion.a href="#experience" className="btn btn-primary" whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.98 }} transition={{ duration: 0.15 }}>
          Background
        </motion.a>
        <motion.a href="#about" className="btn btn-ghost" whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.98 }} transition={{ duration: 0.15 }}>
          About me
        </motion.a>
      </Reveal>
    </section>
  )
}
