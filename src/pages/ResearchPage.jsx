import { motion } from 'framer-motion'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import StatSilhouette from '../components/StatSilhouette'
import MethodTags from '../components/MethodTags'
import useHashScroll from '../hooks/useHashScroll'

const panelCream = {
  background: 'var(--color-surface)',
  borderRadius: 'var(--radius-md)',
  padding: 34,
  boxShadow: 'var(--shadow-sm)',
}
const panelCreamCol = { ...panelCream, display: 'flex', flexDirection: 'column', gap: 'var(--leading)' }
const panelSageTint = { background: 'var(--sage-tint)', borderRadius: 'var(--radius-md)', padding: 34 }
const h3Style = { fontFamily: 'var(--font-heading)', fontWeight: 400, fontSize: 27, margin: '0 0 var(--space-2)' }
const pStyle = { fontSize: 15.5, lineHeight: 'var(--leading)', margin: 0, color: 'var(--ink)' }

function Warehouse() {
  return (
    <section id="warehouse" style={{ padding: 'calc(2*var(--leading)) 0 calc(1.5*var(--leading))', scrollMarginTop: 90 }}>
      <SectionHeading
        title="Warehouse Clubs Go Digital"
        subtitle="How Sam's Club closed a $1.4B digital gap on Costco"
        meta="NYU Stern  ·  Digital Strategy  ·  Market Researcher  ·  Jan – Mar 2026"
        eyebrowColor="var(--sage-dark)"
      />

      <Reveal delay={0.05} style={{ ...panelCream, marginTop: 'calc(1.5*var(--leading))' }}>
        <h3 style={h3Style}>Situation</h3>
        <p style={{ fontSize: 15.5, lineHeight: 1.6, margin: '0 0 20px', maxWidth: '70ch', color: 'var(--ink)' }}>
          Automation and AI are modernizing warehouse-club operations, and omnichannel strategies are turning stores into
          fulfillment hubs. Both Sam's Club and Costco are digitalizing, but differently:
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: 20, margin: '0 0 var(--space-3)' }}>
          <div>
            <span style={{ display: 'block', font: "600 12px var(--font-body)", letterSpacing: '.04em', textTransform: 'uppercase', color: 'var(--terracotta-dark)', margin: '0 0 6px' }}>Sam's Club</span>
            <p style={{ fontSize: 14.5, lineHeight: 1.55, margin: 0, color: 'var(--ink-muted)' }}>Member Access Platform, Scan &amp; Go technology, AI automation, and a broad digital revamp of the shopping experience.</p>
          </div>
          <div>
            <span style={{ display: 'block', font: "600 12px var(--font-body)", letterSpacing: '.04em', textTransform: 'uppercase', color: 'var(--terracotta-dark)', margin: '0 0 6px' }}>Costco</span>
            <p style={{ fontSize: 14.5, lineHeight: 1.55, margin: 0, color: 'var(--ink-muted)' }}>AI-driven inventory management, distribution and fulfillment upgrades, and targeted M&amp;A and strategic partnerships.</p>
          </div>
        </div>
        <div style={{ margin: '0 0 var(--space-3)' }}>
          <h3 style={h3Style}>Complication</h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'baseline', justifyContent: 'space-between', gap: 12 }}>
            <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 400, fontStyle: 'italic', fontSize: 19, margin: 0, color: 'var(--ink-muted)' }}>
              Gross merchandise value, 2014–2026
            </h3>
            <div style={{ display: 'flex', alignItems: 'center', gap: 18, font: "500 13px var(--font-body)", color: 'var(--ink-muted)' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: 7 }}><span style={{ width: 22, height: 3, background: 'var(--sage)', borderRadius: 2 }} />Costco.com</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: 7 }}><span style={{ width: 22, height: 3, background: 'var(--terracotta)', borderRadius: 2 }} />Samsclub.com</span>
            </div>
          </div>
        </div>
        <svg viewBox="0 0 1000 300" style={{ display: 'block', width: '100%', height: 'auto' }} role="img" aria-label="Line chart: Samsclub.com GMV converging with Costco.com GMV between 2014 and 2026">
          <line x1="60" y1="255" x2="960" y2="255" stroke="rgba(23,60,74,.2)" strokeWidth="1" />
          <line x1="368" y1="30" x2="368" y2="255" stroke="rgba(23,60,74,.12)" strokeWidth="1" strokeDasharray="4 6" />
          <line x1="600" y1="30" x2="600" y2="255" stroke="rgba(23,60,74,.12)" strokeWidth="1" strokeDasharray="4 6" />
          <path d="M60 205 C 180 195, 260 180, 368 150 S 500 92, 600 74 S 820 52, 960 44" fill="none" stroke="#2aa298" strokeWidth="3.5" strokeLinecap="round" />
          <path d="M60 240 C 180 234, 260 224, 368 200 S 500 130, 600 104 S 820 60, 960 46" fill="none" stroke="#c91f6e" strokeWidth="3.5" strokeLinecap="round" />
          <line x1="60" y1="205" x2="60" y2="240" stroke="rgba(23,60,74,.45)" strokeWidth="1.5" />
          <text x="74" y="228" fontFamily="Instrument Sans, sans-serif" fontSize="15" fontWeight="600" fill="#5f7a82">$1.4B gap</text>
          <circle cx="960" cy="45" r="6" fill="none" stroke="rgba(23,60,74,.5)" strokeWidth="1.5" />
          <text x="924" y="26" textAnchor="end" fontFamily="Instrument Sans, sans-serif" fontSize="15" fontWeight="600" fill="#173c4a">parity</text>
          <text x="60" y="282" fontFamily="Instrument Sans, sans-serif" fontSize="14" fill="#5f7a82">2014</text>
          <text x="368" y="282" textAnchor="middle" fontFamily="Instrument Sans, sans-serif" fontSize="14" fill="#5f7a82">2020</text>
          <text x="600" y="282" textAnchor="middle" fontFamily="Instrument Sans, sans-serif" fontSize="14" fill="#5f7a82">2023</text>
          <text x="960" y="282" textAnchor="end" fontFamily="Instrument Sans, sans-serif" fontSize="14" fill="#5f7a82">2026</text>
        </svg>
        <p style={{ fontSize: 13, lineHeight: 1.5, margin: 'var(--space-2) 0 0', color: 'var(--ink-muted)' }}>
          GMV modelled as purchase frequency × buyers × average order value. Sources: IBISWorld 45291, EMARKETER, Factiva.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: 24, marginTop: 'calc(1.5*var(--leading))' }}>
          {[
            ['Phase 01 · 2014–2019', 'Digital as a side channel', 'Two pipeline businesses treating e-commerce as supplementary to their warehouses.'],
            ['Phase 02 · 2020–2022', 'The pandemic surge', "Costco grows faster in absolute terms; its scale advantage shows up digitally."],
            ['Phase 03 · 2023–2026', 'Convergence', "Sam's Club essentially matches Costco's GMV, closing the gap on a larger competitor."],
          ].map(([phase, title, desc]) => (
            <div key={phase}>
              <span style={{ display: 'block', font: "600 12px var(--font-body)", letterSpacing: '.06em', textTransform: 'uppercase', color: 'var(--sage-dark)', margin: '0 0 4px' }}>{phase}</span>
              <h4 style={{ fontFamily: 'var(--font-heading)', fontWeight: 400, fontSize: 20, margin: '0 0 6px', color: 'var(--ink)' }}>{title}</h4>
              <p style={{ fontSize: 14.5, lineHeight: 1.55, margin: 0, color: 'var(--ink-muted)' }}>{desc}</p>
            </div>
          ))}
        </div>
      </Reveal>

      <Reveal
        as="blockquote"
        delay={0.08}
        style={{ margin: 'calc(1.5*var(--leading)) auto 0', maxWidth: '56ch', textAlign: 'center', fontFamily: 'var(--font-heading)', fontStyle: 'italic', fontSize: 22, lineHeight: 1.4, color: 'var(--ink)' }}
      >
        "Digital is not supplementing the store — it's replacing transactions that once required physical presence."
      </Reveal>

      <Reveal
        delay={0.1}
        className="story-grid"
        style={{ display: 'grid', gridTemplateColumns: 'minmax(0,5fr) minmax(0,7fr)', gap: 20, marginTop: 'calc(1.5*var(--leading))', alignItems: 'stretch' }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <div style={{ ...panelCream, flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <h3 style={h3Style}>Question</h3>
            <p style={{ fontSize: 17, lineHeight: 'var(--leading)', margin: 0, color: 'var(--ink)' }}>
              As Sam's Club closes the digital gap, is Costco's slower e-commerce investment a rational bet on its
              membership model, or a risk it is underpricing?
            </p>
          </div>
          <div style={panelSageTint}>
            <h3 style={h3Style}>Methods</h3>
            <MethodTags items={['SCQA framework', 'GMV modeling', 'Comparative analysis', 'Desk research']} />
          </div>
        </div>
        <div style={{ background: 'var(--sage)', color: '#fff', borderRadius: 'var(--radius-md)', padding: 34, display: 'flex', flexDirection: 'column' }}>
          <h3 style={{ ...h3Style, color: '#fff' }}>Answer</h3>
          <p style={{ fontSize: 15.5, lineHeight: 'var(--leading)', margin: '0 0 var(--space-3)', maxWidth: '46ch', color: 'rgba(255,255,255,.92)' }}>
            Costco's slower digital build is a bet, not a failure to innovate. Member loyalty, service breadth, and value
            make it resistant to disruption in ways e-commerce metrics miss:
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14, maxWidth: '52ch' }}>
            {[
              ['Member trust as an unquantifiable moat', 'A renewal rate above 90%, built over decades, plus an employee-first reputation no competitor can buy.'],
              ['The fanbase money can’t buy', 'The treasure-hunt experience earns billions of unpaid impressions across Reddit, TikTok, and YouTube.'],
              ['The most diversified member-services business in America', 'Auto, Travel, Pharmacy & Optical, Tire, Insurance, Business Services. Members buy into an ecosystem, not a warehouse.'],
              ['A product line built on radical curation', 'About 4,000 SKUs, so every listing reads as a quality signal. Kirkland Signature is the clearest case.'],
            ].map(([title, desc]) => (
              <div key={title}>
                <p style={{ font: "700 14.5px var(--font-body)", color: '#fff', margin: '0 0 3px' }}>{title}</p>
                <p style={{ fontSize: 14, lineHeight: 1.5, margin: 0, color: 'rgba(255,255,255,.88)' }}>{desc}</p>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 'auto', paddingTop: 36, display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end', gap: 14, textAlign: 'right' }}>
            <StatSilhouette value="90%+" label="Member renewal rate" size={74} />
            <span style={{ width: 1, height: 52, background: 'rgba(255,255,255,.28)' }} />
            <StatSilhouette value="4k" label="SKUs carried" size={74} />
          </div>
        </div>
      </Reveal>

      <p style={{ fontSize: 12.5, lineHeight: 1.6, margin: 'calc(1.5*var(--leading)) 0 0', color: 'var(--ink-muted)' }}>
        <strong style={{ color: 'var(--ink)' }}>References:</strong> Matt Britton, "Retail Reloaded: Sam's Club Is
        Redefining Membership Experience in the AI Era," ADWEEK, Mar 2026 | A. Feger, "Sam's Club launches new tool to
        tackle retail media measurement challenges," EMARKETER, Jun 2025 | "45291 — Warehouse Clubs & Supercenters in the
        US," IBISWorld | "Costco's Traffic Growth Signals Strong Member Engagement Trends," LexisNexis, Dec 2025.
      </p>
    </section>
  )
}

function PDD() {
  return (
    <section id="pdd" style={{ padding: 'calc(2*var(--leading)) 0 calc(2.5*var(--leading))', scrollMarginTop: 90 }}>
      <SectionHeading
        title="Personal Delivery Devices"
        subtitle="The data moat behind the sidewalk robot"
        meta="NYU Stern  ·  Digital Strategy  ·  Mar – May 2026"
        eyebrowColor="var(--citrus-dark)"
      />
      <Reveal
        delay={0.05}
        className="story-grid"
        style={{ display: 'grid', gridTemplateColumns: 'minmax(0,8fr) minmax(0,12fr)', gap: 20, marginTop: 'calc(1.5*var(--leading))', alignItems: 'stretch' }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <div style={panelCreamCol}>
            <div>
              <h3 style={h3Style}>Situation</h3>
              <p style={{ ...pStyle, marginBottom: 'var(--space-2)' }}>
                Last-mile delivery is logistics' largest and least efficient leg, and e-commerce is outgrowing the
                infrastructure carrying it.
              </p>
              <p style={{ ...pStyle, marginBottom: 'var(--space-2)' }}>
                The final leg stays the most expensive: short trips, single drops, a courier paid for time rather than
                distance.
              </p>
              <p style={pStyle}>
                Personal delivery devices enter here, running at pedestrian speed on sidewalks and regulated as
                pedestrians rather than vehicles.
              </p>
            </div>
            <div>
              <h3 style={h3Style}>Complication</h3>
              <p style={{ ...pStyle, marginBottom: 'var(--space-2)' }}>
                Labor dominates that cost, leaving the human model a trilemma it can only ever satisfy two-thirds of:
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
                {['Fair driver pay', 'Affordable prices', 'Profitability'].map((t) => (
                  <span key={t} style={{ font: "600 13px var(--font-body)", color: 'var(--ink)', background: '#fff', padding: '7px 15px', borderRadius: 100 }}>{t}</span>
                ))}
              </div>
              <p style={{ ...pStyle, marginTop: 'var(--space-2)' }}>
                Raising pay compresses margin. Cutting fees pushes cost onto drivers. Holding both steady leaves the
                operator unprofitable. Automation is the only lever that moves all three.
              </p>
            </div>
          </div>
          <div style={{ background: 'var(--sage-tint)', borderRadius: 'var(--radius-md)', padding: 34, flex: 1, display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
            <h3 style={{ ...h3Style, marginBottom: 0 }}>Methods</h3>
            <MethodTags items={['Disruption theory', "Porter's value chain", 'Platform strategy', 'Market analysis']} />
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <div style={panelCream}>
            <h3 style={h3Style}>Question</h3>
            <p style={{ ...pStyle, marginBottom: 18 }}>
              Personal delivery devices (autonomous sidewalk robots) are moving upmarket:
            </p>
            <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: 10, margin: '0 0 18px' }}>
              <span style={{ font: "600 12.5px var(--font-body)", letterSpacing: '.03em', color: 'var(--ink)', background: '#fff', borderRadius: 100, padding: '7px 15px' }}>Campus food</span>
              {['Urban & healthcare', 'Warehouse & industrial'].map((label) => (
                <span key={label} style={{ display: 'inline-flex', alignItems: 'center', gap: 10, whiteSpace: 'nowrap' }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(23,60,74,.4)" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" style={{ flex: 'none' }}>
                    <path d="M5 12h13" /><path d="M12 6l6 6-6 6" />
                  </svg>
                  <span style={{ font: "600 12.5px var(--font-body)", letterSpacing: '.03em', color: 'var(--ink)', background: '#fff', borderRadius: 100, padding: '7px 15px' }}>{label}</span>
                </span>
              ))}
            </div>
            <p style={{ fontFamily: 'var(--font-heading)', fontSize: 24, lineHeight: 1.3, margin: 0, color: 'var(--ink)', fontStyle: 'italic' }}>
              As personal delivery devices scale, where does the real, defensible advantage sit?
            </p>
          </div>
          <div style={{ position: 'relative', overflow: 'hidden', background: 'var(--terracotta)', color: '#fff', borderRadius: 'var(--radius-md)', padding: '34px 34px 92px', flex: 1 }}>
            <h3 style={{ ...h3Style, position: 'relative' }}>Answer</h3>
            <p style={{ fontSize: 15.5, lineHeight: 'var(--leading)', margin: '0 0 var(--space-3)', maxWidth: '44ch', position: 'relative' }}>
              The advantage sits in the data, not the robots.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 22, position: 'relative', maxWidth: '46ch' }}>
              {[
                ['Hardware scales linearly, data compounds', 'More deliveries require proportionally more robots, but every mile driven adds to a navigation dataset that costs nothing to reuse.'],
                ['Depth of dataset is the lever', "Starship leads with over 10 million autonomous miles. That depth lets an operator license mapping layers, negotiate better platform terms, and build switching costs competitors can't match."],
                ['Infrastructure, not platform', "Porter's value chain places PDDs inside platforms like Uber Eats and DoorDash: value moves hub to door, linearly, never networked."],
              ].map(([title, desc]) => (
                <div key={title}>
                  <p style={{ font: "700 14.5px var(--font-body)", color: '#fff', margin: '0 0 5px' }}>{title}</p>
                  <p style={{ fontSize: 14, lineHeight: 1.5, margin: 0, color: 'rgba(255,255,255,.88)' }}>{desc}</p>
                </div>
              ))}
            </div>
            <span style={{ position: 'absolute', right: 14, bottom: 6, fontFamily: 'var(--font-heading)', fontSize: 104, lineHeight: 0.85, color: 'transparent', WebkitTextStroke: '1.5px rgba(255,255,255,.5)', pointerEvents: 'none' }}>10M</span>
          </div>
        </div>
      </Reveal>
      <p style={{ fontSize: 12.5, lineHeight: 1.6, margin: 'var(--space-3) 0 0', color: 'var(--ink-muted)' }}>
        <strong style={{ color: 'var(--ink)' }}>References:</strong> C. M. Christensen, <em>The Innovator's Dilemma</em>,
        Harvard Business Review Press, 1997 | M. E. Porter, <em>Competitive Advantage</em>, Free Press, 1985 | G. Parker,
        M. Van Alstyne &amp; S. P. Choudary, <em>Platform Revolution</em>, W. W. Norton, 2016 | Starship Technologies,
        "9.6 million deliveries across 270 locations in 7 countries," 2025 | Pitney Bowes, "Parcel Shipping Index," 2025 |
        Mordor Intelligence, "Autonomous Delivery Robots Market Report 2026–2031," 2026 | Micromobility.io, "Personal
        delivery device regulation and pedestrian classification," 2025 | E. Alverhed et al., "Autonomous last-mile
        delivery robots: A literature review," <em>European Transport Research Review</em> 16:4, 2024.
      </p>
    </section>
  )
}

function BSI() {
  return (
    <section id="bsi" style={{ padding: 'calc(2*var(--leading)) 0 calc(1.5*var(--leading))', scrollMarginTop: 90 }}>
      <SectionHeading
        title="The Guide to Supply Chain Management"
        subtitle="Modernizing an industry reference book with financial benchmarking"
        meta="Boston Strategies International  ·  Summer Associate  ·  Jun – Aug 2025"
        eyebrowColor="var(--citrus-dark)"
      />
      <Reveal
        delay={0.05}
        className="story-grid"
        style={{ display: 'grid', gridTemplateColumns: 'minmax(0,5fr) minmax(0,7fr)', gap: 20, marginTop: 'calc(1.5*var(--leading))', alignItems: 'stretch' }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <div style={panelCreamCol}>
            <div>
              <h3 style={h3Style}>Problem</h3>
              <p style={pStyle}>
                Senior leadership needed a revised edition of the firm's industry reference book:{' '}
                <strong>modernized chapters</strong>, plus evidence connecting supply-chain strategy to{' '}
                <strong>financial performance</strong>.
              </p>
            </div>
            <div>
              <h3 style={h3Style}>Approach</h3>
              <p style={pStyle}>
                <strong>Supervised a four-member team</strong> on Kanban, and presented prioritized insights to senior
                leadership to keep the revision aligned with strategic objectives. Used{' '}
                <strong>Capital IQ across 10+ companies</strong> to identify supply-chain performance trends and set
                industry benchmarks.
              </p>
            </div>
          </div>
          <div style={{ ...panelCream, flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div style={{ fontSize: 15, letterSpacing: '.14em', color: 'var(--terracotta)', margin: '0 0 10px' }}>★★★★★</div>
            <blockquote style={{ fontFamily: 'var(--font-heading)', fontStyle: 'italic', fontSize: 19, lineHeight: 1.45, margin: '0 0 10px', color: 'var(--ink)' }}>
              "An exceptionally clear layout that successfully bridges high-level strategy with actionable financial
              metrics."
            </blockquote>
            <p style={{ font: "600 11px var(--font-body)", letterSpacing: '.09em', textTransform: 'uppercase', margin: 0, color: 'var(--citrus-dark)' }}>
              Verified purchase review  ·  Amazon
            </p>
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <div style={{ background: 'var(--sage)', color: '#fff', borderRadius: 'var(--radius-md)', padding: 34 }}>
            <h3 style={{ ...h3Style, color: '#fff' }}>Outcome</h3>
            <p style={{ fontSize: 15.5, lineHeight: 'var(--leading)', margin: '0 0 var(--space-2)', maxWidth: '46ch' }}>
              Modernized chapters backed by cross-company benchmarks, and a documented correlation between strategic
              supply-chain choices and company financial growth over multiple years.
            </p>
            <p style={{ fontSize: 15.5, lineHeight: 'var(--leading)', margin: '0 0 var(--space-3)', maxWidth: '46ch' }}>
              The second edition now ranks top-tier among professional supply chain reference manuals on Amazon.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,minmax(0,1fr))', gap: 20, paddingTop: 'var(--space-3)', borderTop: '1px solid rgba(255,255,255,.28)' }}>
              {[
                ['340+', 'Pages', 'Dense technical logistics literature restructured into an accessible, flowable format.'],
                ['52', 'Visualizations', 'Predictive charts, graphs, and system flow matrices integrated on a uniform layout.'],
                ['100', 'Benchmarks', 'Corporate data pillars formatted for rapid comprehension and real-world utility.'],
              ].map(([num, label, desc]) => (
                <div key={label}>
                  <p style={{ fontFamily: 'var(--font-heading)', fontSize: 38, lineHeight: 1, margin: '0 0 4px', color: '#fff' }}>{num}</p>
                  <p style={{ font: "700 12px var(--font-body)", letterSpacing: '.06em', textTransform: 'uppercase', margin: '0 0 6px', color: 'rgba(255,255,255,.75)' }}>{label}</p>
                  <p style={{ fontSize: 13.5, lineHeight: 1.45, margin: 0, color: 'rgba(255,255,255,.88)' }}>{desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div style={{ background: 'var(--sage-tint)', borderRadius: 'var(--radius-md)', padding: 34, flex: 1 }}>
            <h3 style={h3Style}>Methods</h3>
            <MethodTags items={['Kanban', 'Project Management', 'Stakeholder management', 'Capital IQ', 'Financial benchmarking']} />
          </div>
        </div>
      </Reveal>
    </section>
  )
}

function RideShield() {
  return (
    <section id="rideshield" style={{ padding: 'calc(2*var(--leading)) 0 calc(1.5*var(--leading))', scrollMarginTop: 90 }}>
      <SectionHeading
        title="RideShield"
        subtitle="An AI-powered safety ecosystem for ride-sharing platforms"
        meta="PMC Case Competition  ·  Product Manager  ·  Apr 2025"
        eyebrowColor="var(--terracotta-dark)"
      />
      <Reveal
        delay={0.05}
        className="story-grid"
        style={{ display: 'grid', gridTemplateColumns: 'minmax(0,8fr) minmax(0,12fr)', gap: 20, marginTop: 'calc(1.5*var(--leading))', alignItems: 'stretch' }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <div style={panelCreamCol}>
            <div>
              <h3 style={h3Style}>Situation</h3>
              <p style={{ ...pStyle, marginBottom: 'var(--space-2)' }}>
                <strong>Crashes spike between 12 AM and 4 AM</strong>, where fatigue, poor visibility and dense urban
                traffic compound each other.
              </p>
              <p style={pStyle}>
                Long, irregular shifts leave late-night drivers most exposed, and passengers feel least safe in exactly
                the same window.
              </p>
            </div>
            <div>
              <h3 style={h3Style}>Complication</h3>
              <p style={{ ...pStyle, marginBottom: 'var(--space-2)' }}>Every incident costs the platform three ways at once:</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
                {['Reputation', 'Liability', 'Driver churn'].map((t) => (
                  <span key={t} style={{ font: "600 13px var(--font-body)", color: 'var(--ink)', background: '#fff', padding: '7px 15px', borderRadius: 100 }}>{t}</span>
                ))}
              </div>
              <p style={{ ...pStyle, marginTop: 'var(--space-2)' }}>
                Existing safety tools are fragmented and reactive: monitoring reads the aftermath, passenger tools thin
                out at night, and ratings are too generic to capture safety at all.
              </p>
            </div>
          </div>
          <div style={{ background: 'var(--sage-tint)', borderRadius: 'var(--radius-md)', padding: 34, flex: 1, display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
            <h3 style={{ ...h3Style, marginBottom: 0 }}>Methods</h3>
            <MethodTags items={['Product ecosystem design', 'Risk modeling', 'Behavioral design', 'Success-metric definition']} />
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <div style={panelCream}>
            <h3 style={h3Style}>Question</h3>
            <p style={{ ...pStyle, marginBottom: 18 }}>Safety has three moments, and today's tools only reach the last one:</p>
            <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: 10, margin: '0 0 18px' }}>
              <span style={{ font: "600 12.5px var(--font-body)", letterSpacing: '.03em', color: 'var(--ink)', background: '#fff', borderRadius: 100, padding: '7px 15px' }}>Before the ride</span>
              {['During the ride', 'After an incident'].map((label) => (
                <span key={label} style={{ display: 'inline-flex', alignItems: 'center', gap: 10, whiteSpace: 'nowrap' }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(23,60,74,.4)" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" style={{ flex: 'none' }}>
                    <path d="M5 12h13" /><path d="M12 6l6 6-6 6" />
                  </svg>
                  <span style={{ font: "600 12.5px var(--font-body)", letterSpacing: '.03em', color: 'var(--ink)', background: '#fff', borderRadius: 100, padding: '7px 15px' }}>{label}</span>
                </span>
              ))}
            </div>
            <p style={{ fontFamily: 'var(--font-heading)', fontSize: 24, lineHeight: 1.3, margin: 0, color: 'var(--ink)', fontStyle: 'italic' }}>
              What would late-night safety look like if it acted before the incident, not after it?
            </p>
          </div>
          <div style={{ position: 'relative', overflow: 'hidden', background: 'var(--terracotta)', color: '#fff', borderRadius: 'var(--radius-md)', padding: 34, flex: 1, display: 'flex', flexDirection: 'column' }}>
            <h3 style={{ ...h3Style, position: 'relative' }}>Answer</h3>
            <p style={{ fontSize: 15.5, lineHeight: 'var(--leading)', margin: '0 0 var(--space-3)', maxWidth: '44ch', position: 'relative' }}>
              Three layers, one ecosystem: predict the risk, prevent the fatigue, protect both parties.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14, position: 'relative', maxWidth: '48ch' }}>
              {[
                ['Predict', "A live risk map grades accident-prone zones from crash history, lighting and weather. A 0–100 score reads each driver's reaction speed, hours and breaks."],
                ['Prevent', 'DriveFlow keeps drivers alert with voice-only trivia, dialled up as the fatigue score rises. NightShield badges reward safe shifts with priority requests.'],
                ['Protect', 'Either party can trigger Guardian Mode: recording, live location, safety-team alert. PulseLink escalates unanswered check-ins.'],
              ].map(([title, desc]) => (
                <div key={title}>
                  <p style={{ font: "700 14.5px var(--font-body)", color: '#fff', margin: '0 0 3px' }}>{title}</p>
                  <p style={{ fontSize: 14, lineHeight: 1.5, margin: 0, color: 'rgba(255,255,255,.88)' }}>{desc}</p>
                </div>
              ))}
            </div>
            <div style={{ marginTop: 'auto', paddingTop: 36, display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end', gap: 14, textAlign: 'right' }}>
              <StatSilhouette value="12–4 AM" label="Peak risk window" size={62} />
              <span style={{ width: 1, height: 46, background: 'rgba(255,255,255,.28)' }} />
              <StatSilhouette value="0–100" label="Fatigue score" size={62} />
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  )
}

export default function ResearchPage() {
  useHashScroll()
  return (
    <div style={{ background: 'var(--color-bg)', color: 'var(--color-text)' }}>
      <Nav active="research" />
      <div className="wrap">
        <section style={{ padding: 'calc(3*var(--leading)) 0 calc(1.5*var(--leading))' }}>
          <Reveal className="eyebrow-dot">
            <span className="dot" />
            <span>Market and industry research</span>
          </Reveal>
          <Reveal as="h1" delay={0.05} style={{ fontSize: 'clamp(34px,4.4vw,50px)', margin: 0 }}>
            Research
          </Reveal>
          <Reveal
            as="p"
            delay={0.1}
            style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(19px,2vw,23px)', lineHeight: 1.35, maxWidth: 'var(--measure)', margin: 'var(--space-2) 0 0', color: 'var(--ink-muted)', fontStyle: 'italic' }}
          >
            Market sizing, competitive strategy, and where the next advantage sits.
          </Reveal>
        </section>

        <Warehouse />
        <PDD />
        <BSI />
        <RideShield />

        <section style={{ padding: '0 0 calc(3*var(--leading))' }}>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <motion.a
              href="/projects.html"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.15 }}
              style={{ display: 'inline-flex', alignItems: 'center', gap: 10, font: "600 14px var(--font-body)", color: '#fff', background: 'var(--terracotta)', padding: '13px 26px', borderRadius: 100, textDecoration: 'none' }}
            >
              See the product work
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
