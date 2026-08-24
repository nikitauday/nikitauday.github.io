import Reveal from './Reveal'
import aboutPortrait from '../assets/home/about-portrait-tight.jpeg'

export default function About() {
  return (
    <section
      id="about"
      className="about-grid"
      style={{
        padding: 'calc(3*var(--leading)) 0', scrollMarginTop: 90,
        gap: 'var(--leading) clamp(24px,5vw,80px)', alignItems: 'start',
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
        <Reveal className="eyebrow-dot">
          <span className="dot" />
          <span>About</span>
        </Reveal>
        <Reveal as="h2" delay={0.05} style={{ margin: '0 0 var(--space-2)' }}>
          An engineer's eye for how it works, a PM's eye for why it matters.
        </Reveal>
        <Reveal as="p" delay={0.1} style={{ fontSize: '15.5px', lineHeight: 'var(--leading)', maxWidth: 'var(--measure)', margin: '0 0 var(--leading)' }}>
          Hi, I'm Nikita, an engineer turned product manager. I come from Kochi, Kerala, and I've got a
          background in technical consulting (previously at Microsoft) plus a master's in Technology
          Management from NYU Tandon. These days I'm figuring out how to combine the "how it works" mindset
          of engineering with the "why it matters" mindset of product.
        </Reveal>
        <Reveal delay={0.15}>
          <a href="/about.html" style={{ fontWeight: 600, color: 'var(--sage-dark)' }}>More about me →</a>
        </Reveal>
      </div>
    </section>
  )
}
