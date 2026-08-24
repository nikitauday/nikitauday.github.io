import { motion } from 'framer-motion'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import StatSilhouette from '../components/StatSilhouette'
import MethodTags from '../components/MethodTags'
import useHashScroll from '../hooks/useHashScroll'
import guardianPosterFull from '../assets/projects/guardian-poster-full.png'
import guardianPosterPortrait from '../assets/projects/guardian-poster-portrait.jpeg'
import guardianTeamPoster from '../assets/projects/guardian-team-poster.jpeg'

const panelCream = {
  background: 'var(--color-surface)',
  borderRadius: 'var(--radius-md)',
  padding: 34,
  boxShadow: 'var(--shadow-sm)',
  display: 'flex',
  flexDirection: 'column',
  gap: 'var(--leading)',
}
const panelSageTint = { background: 'var(--sage-tint)', borderRadius: 'var(--radius-md)', padding: 34 }
const h3Style = { fontFamily: 'var(--font-heading)', fontWeight: 400, fontSize: 27, margin: '0 0 var(--space-2)' }
const pStyle = { fontSize: 15.5, lineHeight: 'var(--leading)', margin: 0, color: 'var(--ink)' }

function Aurora() {
  return (
    <section id="aurora" style={{ padding: 'calc(2*var(--leading)) 0 calc(1.5*var(--leading))', scrollMarginTop: 90 }}>
      <SectionHeading
        title="Smart Schedule App"
        subtitle="An AI calendar that learns how long tasks actually take"
        meta="Design Thinking, NYU Tandon  ·  Product Manager  ·  Jan – May 2026"
        eyebrowColor="var(--sage-dark)"
      />
      <Reveal
        delay={0.05}
        style={{ display: 'grid', gridTemplateColumns: 'minmax(0,7fr) minmax(0,5fr)', gap: 20, marginTop: 'calc(1.5*var(--leading))', alignItems: 'stretch' }}
        className="story-grid"
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <div style={panelCream}>
            <div>
              <h3 style={h3Style}>Problem</h3>
              <p style={pStyle}>
                People with time-blindness can't feel how long things take, so plans fall apart before they start. Calendar
                tools assume you already know when to leave, when to start getting ready, and how much time a task needs.
                Aurora learns the user's actual pace and behaviour, then does that estimating and prompting for them.
              </p>
            </div>
            <div>
              <h3 style={h3Style}>Approach</h3>
              <p style={{ ...pStyle, marginBottom: 'var(--space-2)' }}>
                Desk research and interviews found that 72% of students underestimate how long academic tasks take, and
                that students with stronger time-management skills score 53% higher on academic assessments. An early
                prototype showed people wanted action before analytics — a clear "what to do next," not an accuracy score.
                We rebuilt around three pillars:
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {[
                  ['Priority-first dashboard', ' — surfaces what to do next, not an accuracy score.'],
                  ['Adaptive calendar', ' — reshuffles flexible tasks around fixed commitments.'],
                  ['Conversational AI planning', ' — every suggestion left to accept, edit, or ignore.'],
                ].map(([strong, rest], i) => (
                  <div key={strong} style={{ display: 'flex', gap: 12 }}>
                    <span style={{ fontFamily: 'var(--font-heading)', fontSize: 19, color: 'var(--terracotta-dark)', flex: 'none', width: '1.4em' }}>{i + 1}</span>
                    <p style={pStyle}><strong>{strong}</strong>{rest}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div style={panelSageTint}>
            <h3 style={h3Style}>Methods</h3>
            <MethodTags items={['User interviews', 'Desk research', 'Prototyping', 'Usability testing']} />
            <p style={{ font: "600 12px var(--font-body)", letterSpacing: '.05em', textTransform: 'uppercase', margin: 'var(--leading) 0 10px', color: 'var(--sage-dark)' }}>
              Double Diamond process
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 10 }}>
              {[
                ['Discover', 'User interviews and desk research on academic time-management'],
                ['Define', 'Framed the problem as time-blindness, not a scheduling gap'],
                ['Develop', 'Prototyped the dashboard, adaptive calendar, and AI planning'],
                ['Deliver', 'Usability testing to validate and refine the prototype'],
              ].map(([label, desc]) => (
                <div key={label}>
                  <p style={{ fontSize: 12, color: 'var(--ink-muted)', margin: '0 0 2px' }}>{label}</p>
                  <p style={{ fontSize: 13.5, lineHeight: 1.35, margin: 0, color: 'var(--ink)' }}>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <div style={{ position: 'relative', overflow: 'hidden', background: 'var(--sage)', color: '#fff', borderRadius: 'var(--radius-md)', padding: '34px 34px 100px' }}>
            <h3 style={{ ...h3Style, position: 'relative' }}>Outcome</h3>
            <p style={{ fontSize: 15.5, lineHeight: 'var(--leading)', margin: 0, maxWidth: '26ch', position: 'relative' }}>
              A prototype addressing a gap no existing calendar tool closes: learning actual task duration per user and per
              task type, accounting for non-working time as a planning input, and closing the feedback loop between
              estimated and actual time, for a market projected to grow from $21.4B in 2025 to $78.1B by 2030.
            </p>
            <span style={{ position: 'absolute', right: 14, bottom: 34, fontFamily: 'var(--font-heading)', fontSize: 80, lineHeight: 0.85, color: 'transparent', WebkitTextStroke: '1.5px rgba(255,255,255,.5)', pointerEvents: 'none' }}>3.6x</span>
            <span style={{ position: 'absolute', right: 16, bottom: 14, font: "600 11.5px var(--font-body)", letterSpacing: '.08em', textTransform: 'uppercase', color: 'rgba(255,255,255,.75)' }}>market growth by 2030</span>
          </div>
          <figure style={{ margin: 0 }}>
            <div style={{ borderRadius: 14, overflow: 'hidden', border: '1px solid rgba(23,60,74,.14)', background: '#fff' }}>
              <a
                href="https://auroraforschedules.lovable.app"
                target="_blank"
                rel="noopener"
                style={{ display: 'flex', alignItems: 'center', gap: 7, padding: '10px 14px', background: '#f2ece0', borderBottom: '1px solid rgba(23,60,74,.1)', textDecoration: 'none', color: 'inherit' }}
              >
                <span style={{ width: 9, height: 9, borderRadius: '50%', background: 'rgba(23,60,74,.22)', display: 'inline-block' }} />
                <span style={{ width: 9, height: 9, borderRadius: '50%', background: 'rgba(23,60,74,.22)', display: 'inline-block' }} />
                <span style={{ width: 9, height: 9, borderRadius: '50%', background: 'rgba(23,60,74,.22)', display: 'inline-block' }} />
                <span style={{ font: "500 12px var(--font-body)", color: 'var(--ink-muted)', marginLeft: 8 }}>auroraforschedules.lovable.app</span>
                <span style={{ font: "600 12px var(--font-body)", color: 'var(--sage-dark)', marginLeft: 'auto' }}>Open ↗</span>
              </a>
              <iframe
                src="https://auroraforschedules.lovable.app"
                title="Smart Schedule App live prototype"
                loading="lazy"
                style={{ display: 'block', width: '100%', height: 280, border: 0, background: '#fff' }}
              />
            </div>
            <figcaption style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 12, marginTop: 12 }}>
              <span style={{ fontSize: 13, color: 'var(--ink-muted)' }}>Prototype built in Lovable</span>
              <motion.a
                href="https://auroraforschedules.lovable.app"
                target="_blank"
                rel="noopener"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.15 }}
                style={{ font: "600 13.5px var(--font-body)", color: '#fff', background: 'var(--sage-dark)', borderRadius: 100, padding: '9px 18px', textDecoration: 'none' }}
              >
                Open the prototype
              </motion.a>
            </figcaption>
          </figure>
        </div>
      </Reveal>
    </section>
  )
}

function Guardian() {
  return (
    <section id="guardian" style={{ padding: 'calc(2*var(--leading)) 0 calc(1.5*var(--leading))', scrollMarginTop: 90 }}>
      <SectionHeading
        title="GUARDIAN"
        subtitle="Go-to-market for a multi-model AI governance platform"
        meta="Cyber Institute  ·  Technical PM Intern  ·  Sep 2025 – May 2026"
        eyebrowColor="var(--terracotta-dark)"
      />
      <Reveal
        delay={0.05}
        className="story-grid"
        style={{ display: 'grid', gridTemplateColumns: 'minmax(0,8fr) minmax(0,12fr)', gap: 20, marginTop: 'calc(1.5*var(--leading))', alignItems: 'stretch' }}
      >
        <div style={panelCream}>
          <div>
            <h3 style={h3Style}>Problem</h3>
            <p style={pStyle}>
              GUARDIAN runs on a multi-model consensus engine orchestrating 12 leading LLMs with quantum-enhanced routing.
              Its buyers sit in complex B2G sectors, including UN, NATO, and national security, where trust and risk
              reduction outweigh feature lists. The platform needed a go-to-market strategy and a roadmap for initial
              adoption.
            </p>
          </div>
          <div>
            <h3 style={h3Style}>Approach</h3>
            <p style={pStyle}>
              Managed the technical scoping and refinement of the consensus engine, keeping product decisions tied to the
              system's 95% accuracy in policy analysis. Conducted market research across UN, NATO, and national security
              buyers and built a detailed customer journey map to guide GTM and feature prioritization. Synthesized
              competitor analysis and initial product-state findings with customer insights to define the scope of UX/UI
              enhancements.
            </p>
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <div style={{ background: 'var(--terracotta)', color: '#fff', borderRadius: 'var(--radius-md)', padding: 34, display: 'flex', flexDirection: 'column' }}>
            <h3 style={h3Style}>Outcome</h3>
            <p style={{ fontSize: 15.5, lineHeight: 'var(--leading)', margin: 0, maxWidth: '46ch' }}>
              A comparative policy analysis across the US, EU, and Gulf region, mapped into Gulf-specific scoring criteria
              and a GUARDIAN project lifecycle with policy-to-practice checks at every stage, plus a reusable template for
              localizing GUARDIAN to other high-risk regions.
            </p>
            <div style={{ marginTop: 'auto', paddingTop: 32, display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end', gap: 14, textAlign: 'right' }}>
              <StatSilhouette value="3" label="Regions compared" size={70} />
              <span style={{ width: 1, height: 50, background: 'rgba(255,255,255,.28)' }} />
              <StatSilhouette value="12" label="LLMs orchestrated" size={70} />
              <span style={{ width: 1, height: 50, background: 'rgba(255,255,255,.28)' }} />
              <StatSilhouette value="95%" label="Policy accuracy" size={70} />
            </div>
          </div>
          <div style={{ background: 'var(--sage-tint)', borderRadius: 'var(--radius-md)', padding: 34, flex: 1, display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
            <h3 style={{ ...h3Style, marginBottom: 0 }}>Methods</h3>
            <MethodTags items={['Market research', 'Customer journey mapping', 'Competitor analysis', 'Technical scoping', 'GTM strategy']} />
          </div>
        </div>
      </Reveal>
      <Reveal delay={0.1} style={{ display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: 14, marginTop: 20 }}>
        <img
          src={guardianPosterFull}
          alt="GUARDIAN research poster: positioning GUARDIAN across US, EU, and Gulf AI governance"
          style={{ width: '100%', height: 340, objectFit: 'contain', background: '#fff', border: '1px solid rgba(23,60,74,.1)', borderRadius: 14 }}
        />
        <div style={{ display: 'grid', gridTemplateRows: '1fr 1fr', gap: 14 }}>
          <img src={guardianPosterPortrait} alt="Nikita presenting the GUARDIAN poster" style={{ width: '100%', height: 163, objectFit: 'cover', borderRadius: 14 }} />
          <img src={guardianTeamPoster} alt="The GUARDIAN team presenting the research poster at NYU Tandon" style={{ width: '100%', height: 163, objectFit: 'cover', borderRadius: 14 }} />
        </div>
      </Reveal>
    </section>
  )
}

function Covid() {
  return (
    <section id="covid" style={{ padding: 'calc(2*var(--leading)) 0 calc(1.5*var(--leading))', scrollMarginTop: 90 }}>
      <SectionHeading
        title="COVID Monitoring System"
        subtitle="Real-time outbreak detection built into existing healthcare operations"
        meta="Product Manager  ·  Aug 2021 – Oct 2021"
        eyebrowColor="var(--citrus-dark)"
      />
      <Reveal
        delay={0.05}
        className="story-grid"
        style={{ display: 'grid', gridTemplateColumns: 'minmax(0,8fr) minmax(0,12fr)', gap: 20, marginTop: 'calc(1.5*var(--leading))', alignItems: 'stretch' }}
      >
        <div style={panelCream}>
          <div>
            <h3 style={h3Style}>Problem</h3>
            <p style={pStyle}>
              Keeping employees safe during COVID-19 depended on catching outbreaks early, but provider reporting ran
              through workflows that were never built for real-time data. Detection lagged, and contact tracing depended
              on manual handoffs to HR.
            </p>
          </div>
          <div>
            <h3 style={h3Style}>Approach</h3>
            <p style={pStyle}>
              Collaborated with clinicians and public health stakeholders to conduct user research and map provider
              reporting workflows. Integrated real-time data collection into existing healthcare operations rather than
              around them, and built automated reporting into HR systems so contact tracing could run on current data.
            </p>
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <div style={{ background: 'var(--citrus)', color: '#fff', borderRadius: 'var(--radius-md)', padding: 34, display: 'flex', flexDirection: 'column' }}>
            <h3 style={h3Style}>Outcome</h3>
            <p style={{ fontSize: 15.5, lineHeight: 'var(--leading)', margin: 0, maxWidth: '46ch' }}>
              A machine-learning monitoring system that increased employee safety and accelerated outbreak detection, with
              automated reporting enabling timely contact tracing across the organization.
            </p>
            <div style={{ marginTop: 'auto', paddingTop: 32, display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end', gap: 14, textAlign: 'right' }}>
              <StatSilhouette value="40%" label="Faster detection" size={70} />
              <span style={{ width: 1, height: 50, background: 'rgba(255,255,255,.28)' }} />
              <StatSilhouette value="35%" label="Safer employees" size={70} />
            </div>
          </div>
          <div style={{ background: 'var(--sage-tint)', borderRadius: 'var(--radius-md)', padding: 34, flex: 1, display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
            <h3 style={{ ...h3Style, marginBottom: 0 }}>Methods</h3>
            <MethodTags items={['User research', 'Workflow mapping', 'Stakeholder collaboration', 'ML model integration', 'Systems integration']} />
          </div>
        </div>
      </Reveal>
    </section>
  )
}

function ShoulderSeason() {
  return (
    <section id="shoulder-season" style={{ padding: 'calc(2*var(--leading)) 0 calc(1.5*var(--leading))', scrollMarginTop: 90 }}>
      <SectionHeading
        title="Shoulder Season"
        subtitle="A verified community platform for solo travelers"
        meta="Product Manager  ·  Sep – Dec 2024"
        eyebrowColor="var(--sage-dark)"
      />
      <Reveal
        delay={0.05}
        className="story-grid"
        style={{ display: 'grid', gridTemplateColumns: 'minmax(0,8fr) minmax(0,12fr)', gap: 20, marginTop: 'calc(1.5*var(--leading))', alignItems: 'stretch' }}
      >
        <div style={panelCream}>
          <div>
            <h3 style={h3Style}>Problem</h3>
            <p style={pStyle}>
              Solo travelers need a way to find and trust each other, particularly outside peak travel season, when
              existing platforms have the thinnest supply of verified, like-minded companions.
            </p>
          </div>
          <div>
            <h3 style={h3Style}>Approach</h3>
            <p style={pStyle}>
              Designed the end-to-end product strategy and go-to-market execution: market research to size and segment
              the audience, user journey mapping for trust and verification touchpoints, and a business model canvas to
              test how the platform would acquire and retain users.
            </p>
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <div style={{ background: 'var(--sage)', color: '#fff', borderRadius: 'var(--radius-md)', padding: 34, display: 'flex', flexDirection: 'column' }}>
            <h3 style={h3Style}>Outcome</h3>
            <p style={{ fontSize: 15.5, lineHeight: 'var(--leading)', margin: 0, maxWidth: '46ch' }}>
              A go-to-market plan and business model built around adoption and retention, grounded in research into how
              solo travelers evaluate trust and plan trips.
            </p>
            <div style={{ marginTop: 'auto', paddingTop: 30, display: 'flex', alignItems: 'stretch', gap: 20 }}>
              {[
                ['01', 'Discover', 'Off-peak trips surfaced to travelers already looking'],
                ['02', 'Verify', 'Identity checks and shared history before contact'],
                ['03', 'Match', 'Companions paired on route, pace and travel style'],
              ].flatMap(([num, title, desc], i) => {
                const step = (
                  <div key={num} style={{ flex: 1, minWidth: 0 }}>
                    <span style={{ display: 'block', fontFamily: 'var(--font-heading)', fontSize: 34, lineHeight: 1, color: 'transparent', WebkitTextStroke: '1.2px rgba(255,255,255,.55)' }}>{num}</span>
                    <span style={{ display: 'block', font: "700 13.5px var(--font-body)", color: '#fff', marginTop: 10 }}>{title}</span>
                    <span style={{ display: 'block', fontSize: 13, lineHeight: 1.45, color: 'rgba(255,255,255,.8)', marginTop: 3 }}>{desc}</span>
                  </div>
                )
                return i > 0
                  ? [<span key={`div-${num}`} style={{ width: 1, alignSelf: 'stretch', background: 'rgba(255,255,255,.28)' }} />, step]
                  : [step]
              })}
            </div>
          </div>
          <div style={{ background: 'var(--sage-tint)', borderRadius: 'var(--radius-md)', padding: 34, flex: 1, display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
            <h3 style={{ ...h3Style, marginBottom: 0 }}>Methods</h3>
            <MethodTags items={['Market research', 'Journey mapping', 'Business model canvas', 'GTM execution']} />
          </div>
        </div>
      </Reveal>
    </section>
  )
}

export default function ProjectsPage() {
  useHashScroll()
  return (
    <div style={{ background: 'var(--color-bg)', color: 'var(--color-text)' }}>
      <Nav active="projects" />
      <div className="wrap">
        <section style={{ padding: 'calc(3*var(--leading)) 0 calc(1.5*var(--leading))' }}>
          <Reveal className="eyebrow-dot">
            <span className="dot" />
            <span>Product portfolio</span>
          </Reveal>
          <Reveal as="h1" delay={0.05} style={{ fontSize: 'clamp(34px,4.4vw,50px)', margin: 0 }}>
            Projects
          </Reveal>
          <Reveal
            as="p"
            delay={0.1}
            style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(19px,2vw,23px)', lineHeight: 1.35, maxWidth: 'var(--measure)', margin: 'var(--space-2) 0 0', color: 'var(--ink-muted)', fontStyle: 'italic' }}
          >
            Products built end to end, from the first user problem to what shipped.
          </Reveal>
        </section>

        <Aurora />
        <Guardian />
        <Covid />
        <ShoulderSeason />

        <section style={{ padding: '0 0 calc(3*var(--leading))' }}>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <motion.a
              href="/research.html"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.15 }}
              style={{ display: 'inline-flex', alignItems: 'center', gap: 10, font: "600 14px var(--font-body)", color: '#fff', background: 'var(--terracotta)', padding: '13px 26px', borderRadius: 100, textDecoration: 'none' }}
            >
              See the research work
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h13" />
                <path d="M12 6l6 6-6 6" />
              </svg>
            </motion.a>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  )
}
