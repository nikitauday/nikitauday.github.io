import { motion } from 'framer-motion'
import Reveal from './Reveal'

export default function Contact() {
  return (
    <section id="contact" style={{ padding: 'calc(2*var(--leading)) 0 calc(2.5*var(--leading))', scrollMarginTop: 90, textAlign: 'center' }}>
      <Reveal as="h3" style={{ margin: '0 0 var(--space-2)' }}>Hi! Thanks for being here.</Reveal>
      <Reveal as="p" delay={0.05} style={{ fontSize: '15.5px', lineHeight: 'var(--leading)', maxWidth: '36ch', margin: '0 auto var(--leading)' }}>
        Based in New York, NY. Reach me directly.
      </Reveal>
      <Reveal delay={0.1} style={{ display: 'flex', gap: 'var(--space-3)', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center' }}>
        <motion.a href="mailto:nikita.uday@nyu.edu" className="btn btn-primary" whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.98 }} transition={{ duration: 0.15 }}>
          Email
        </motion.a>
        <motion.a
          href="https://www.linkedin.com/in/nikitauday/"
          className="btn btn-secondary"
          target="_blank"
          rel="noopener"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.98 }}
          transition={{ duration: 0.15 }}
        >
          LinkedIn
        </motion.a>
      </Reveal>
    </section>
  )
}
