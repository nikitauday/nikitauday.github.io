import { motion } from 'framer-motion'

const links = [
  { key: 'home', href: '/', label: 'Home' },
  { key: 'projects', href: '/projects.html', label: 'Projects' },
  { key: 'research', href: '/research.html', label: 'Research' },
  { key: 'about', href: '/about.html', label: 'About' },
]

export default function Nav({ active = 'home' }) {
  const contactHref = active === 'home' ? '#contact' : '/#contact'
  return (
    <nav
      className="nav"
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 10,
        background: 'var(--color-bg)',
        paddingInline: 'max(var(--edge), calc((100% - 1200px) / 2 + var(--edge)))',
      }}
    >
      <motion.a
        href="/"
        className="nav-brand"
        whileHover={{ y: -1, color: '#12554e' }}
        transition={{ duration: 0.18, ease: 'easeOut' }}
        style={{ textDecoration: 'none' }}
      >
        Nikita Uday
      </motion.a>
      {links.map((link) => {
        const isActive = link.key === active
        return (
          <motion.a
            key={link.key}
            href={link.href}
            whileHover={isActive ? { y: -1 } : { y: -1, color: '#12554e' }}
            transition={{ duration: 0.18, ease: 'easeOut' }}
            style={{ fontWeight: 600, color: isActive ? 'var(--terracotta-dark)' : 'var(--sage-dark)' }}
          >
            {link.label}
          </motion.a>
        )
      })}
      <motion.a
        href={contactHref}
        className="btn btn-primary"
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.15 }}
      >
        Contact
      </motion.a>
    </nav>
  )
}
