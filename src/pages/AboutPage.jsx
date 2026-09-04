import Nav from '../components/Nav'
import Reveal from '../components/Reveal'
import './about.css'
import headshotPhoto from '../assets/about/headshot.jpeg'
import nyuGraduation from '../assets/about/about-nyu-graduation.jpeg'
import washingtonSquareBlossoms from '../assets/about/about-washington-square-blossoms.jpeg'
import nyuCapToss from '../assets/about/about-nyu-cap-toss.jpeg'
import lowerManhattan from '../assets/about/about-lower-manhattan.jpeg'
import keralaBackwaters from '../assets/about/about-kerala-backwaters.jpeg'

const bio = [
  "I started as a computer science engineer and spent two and a half years at Microsoft as an Azure cloud consultant, building data sync APIs and authentication flows on a platform serving 100,000 users. That work taught me how software actually gets built, and how much of a product's fate is decided in conversations engineers have with each other.",
  "I moved into product to be in those conversations from the other side. At the Cyber Institute I led GTM strategy, market research, and customer journey mapping for GUARDIAN, an AI governance platform sold to B2G buyers including UN and NATO stakeholders, where the hard part was never the technology but earning institutional trust. Before that I led a four-person team at Boston Strategies International and built a COVID monitoring system that cut outbreak detection time by 40%.",
  "I believe products should be useful, functional, accessible, and simple, and I'm drawn to work with real stakes: institutional trust, safety, systems people depend on. I hold an MS in Management of Technology from NYU and I'm based in New York.",
  'Outside work I shoot photography, sing Indian classical music, and travel as often as I can manage.',
]

const interests = ['Photography', 'Classical singing', 'Travelling']

const gallery = [
  { id: 'about-nyu-graduation', src: nyuGraduation, label: 'In cap and gown outside NYU Tandon' },
  { id: 'about-washington-square-blossoms', src: washingtonSquareBlossoms, label: 'Cherry blossoms on Washington Square' },
  { id: 'about-nyu-cap-toss', src: nyuCapToss, label: 'Cap toss outside the Wunsch Student Center at NYU' },
  { id: 'about-lower-manhattan', src: lowerManhattan, label: 'Lower Manhattan across the harbour from Governors Island' },
  { id: 'about-kerala-backwaters', src: keralaBackwaters, label: 'Backwaters and coconut palms in Kerala' },
]

export default function AboutPage() {
  return (
    <div className="about-page">
      <Nav active="about" />

      <main className="about-main">
        <Reveal as="h1" className="about-title">About</Reveal>

        <Reveal delay={0.05} className="about-headshot-wrap">
          <div className="about-headshot">
            <img src={headshotPhoto} alt="Headshot photo of Nikita Uday" />
          </div>
        </Reveal>

        <Reveal as="h2" delay={0.1} className="about-name">Nikita Uday</Reveal>
        <Reveal as="p" delay={0.12} className="about-role">Product Manager · New York, NY</Reveal>

        <Reveal delay={0.15} className="about-social">
          <a href="mailto:nikita.uday@nyu.edu" aria-label="Email Nikita" className="email">
            <svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
              <rect x="2.5" y="4.5" width="19" height="15" rx="2" />
              <path d="M3 6l9 7 9-7" />
            </svg>
          </a>
          <a href="https://www.linkedin.com/in/nikitauday/" target="_blank" rel="noopener" aria-label="LinkedIn profile" className="linkedin">
            <svg width="21" height="21" viewBox="0 0 24 24" fill="currentColor">
              <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm6.5 0h3.8v1.7h.05c.53-.95 1.83-1.95 3.77-1.95 4.03 0 4.78 2.5 4.78 5.76V21h-4v-5.7c0-1.36-.03-3.1-1.9-3.1-1.9 0-2.2 1.47-2.2 3v5.8h-4V9Z" />
            </svg>
          </a>
        </Reveal>

        <div className="about-bio">
          {bio.map((p, i) => (
            <Reveal as="p" key={i} delay={0.05 * (i + 1)}>{p}</Reveal>
          ))}
        </div>

        <Reveal delay={0.1} className="about-tags">
          {interests.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </Reveal>

        <Reveal delay={0.15} className="about-gallery">
          {gallery.map((img) => (
            <img key={img.id} src={img.src} alt={img.label} />
          ))}
        </Reveal>

        <footer className="about-footer">Nikita Uday · Product Manager · New York, NY</footer>
      </main>
    </div>
  )
}
