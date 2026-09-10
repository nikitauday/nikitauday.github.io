import { motion } from 'framer-motion'
import Reveal from './Reveal'
import useCopyEmail, { EMAIL } from '../hooks/useCopyEmail'

export default function Contact() {
  const [copied, copyEmail] = useCopyEmail()
  return (
    <section id="contact" style={{ padding: 'calc(2*var(--leading)) 0 calc(2.5*var(--leading))', scrollMarginTop: 90, textAlign: 'center' }}>
      <Reveal as="h3" style={{ margin: '0 0 var(--space-2)' }}>Hi! Thanks for being here.</Reveal>
      <Reveal as="p" delay={0.05} style={{ fontSize: '15.5px', lineHeight: 'var(--leading)', maxWidth: '36ch', margin: '0 auto var(--leading)' }}>
        Based in New York, NY. Reach me directly.
      </Reveal>
      <Reveal delay={0.1} style={{ display: 'flex', gap: 'var(--space-3)', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center' }}>
        <span style={{ position: 'relative', display: 'inline-flex' }}>
          <motion.a href={`mailto:${EMAIL}`} className="btn btn-primary" onClick={copyEmail} whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.98 }} transition={{ duration: 0.15 }}>
            Email
          </motion.a>
          <span
            role="status"
            aria-live="polite"
            style={{
              position: 'absolute',
              bottom: 'calc(100% + 8px)',
              left: '50%',
              transform: `translateX(-50%) translateY(${copied ? '0' : '4px'})`,
              opacity: copied ? 1 : 0,
              transition: 'opacity 0.15s ease, transform 0.15s ease',
              pointerEvents: 'none',
              background: 'var(--ink)',
              color: '#fff',
              fontSize: '12.5px',
              fontWeight: 600,
              padding: '5px 10px',
              borderRadius: 'var(--radius-sm)',
              whiteSpace: 'nowrap',
            }}
          >
            Copied {EMAIL}
          </span>
        </span>
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
