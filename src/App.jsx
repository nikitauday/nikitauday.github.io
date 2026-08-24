import Nav from './components/Nav'
import Hero from './components/Hero'
import CredentialsBar from './components/CredentialsBar'
import WorkGrid from './components/WorkGrid'
import Experience from './components/Experience'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div style={{ background: 'var(--color-bg)', color: 'var(--color-text)' }}>
      <Nav />
      <div className="wrap">
        <Hero />
        <CredentialsBar />
        <WorkGrid />
        <Experience />
        <About />
        <Contact />
        <Footer />
      </div>
    </div>
  )
}
