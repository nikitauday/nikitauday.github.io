import { motion } from 'framer-motion'
import Reveal from './Reveal'
import aboutPortrait from '../assets/home/about-portrait-tight.jpeg'

export default function Hero() {
  return (
    <section
      id="about"
      className="about-grid"
      style={{
        padding: 'calc(4*var(--leading)) 0 calc(2.5*var(--leading))',
        scrollMarginTop: 90,
        gap: 'var(--leading) clamp(24px,5vw,80px)',
        alignItems: 'start',
      }}
    >
      <Reveal as="figure" style={{ margin: 0 }}>
        <img
          src={aboutPortrait}
          alt="Nikita at an observation deck above Manhattan at night"
          style={{ width: '100%', aspectRatio: '4/5', objectFit: 'cover', objectPosition: '50% 50%', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-lg)', display: 'block' }}
        />
      </Reveal>
      <div>
        <Reveal as="h1" style={{ margin: 0 }}>
          Hi, I am Nikita, a software engineer turned product manager.
        </Reveal>
        <Reveal
          as="p"
          delay={0.05}
          style={{ fontSize: '15.5px', lineHeight: 'var(--leading)', maxWidth: 'var(--measure)', margin: 'calc(1.5*var(--leading) - 1cap) 0 0', color: 'var(--ink)' }}
        >
          I come from Kochi, Kerala, and I've got a background in technical consulting (previously at Microsoft)
          plus a master's in Technology Management from NYU Tandon. These days I'm figuring out how to combine
          the "how it works" mindset of engineering with the "why it matters" mindset of product.
        </Reveal>
        <Reveal
          delay={0.1}
          style={{ display: 'flex', gap: 'var(--space-3)', flexWrap: 'wrap', marginTop: 'var(--leading)' }}
        >
          <motion.a href="#experience" className="btn btn-primary" whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.98 }} transition={{ duration: 0.15 }}>
            Background
          </motion.a>
          <motion.a href="/about.html" className="btn btn-ghost" whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.98 }} transition={{ duration: 0.15 }}>
            More about me →
          </motion.a>
        </Reveal>
      </div>
    </section>
  )
}
