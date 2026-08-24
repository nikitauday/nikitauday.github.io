import { useEffect } from 'react'

// Re-corrects scroll position toward a #hash target while fonts/images
// finish loading and shift layout after the initial jump.
export default function useHashScroll() {
  useEffect(() => {
    const jump = () => {
      const id = decodeURIComponent((window.location.hash || '').slice(1))
      if (!id) return
      const el = document.getElementById(id)
      if (!el) return
      window.scrollBy(0, el.getBoundingClientRect().top - 90)
    }
    let n = 0
    const timer = setInterval(() => {
      jump()
      if (++n > 18) clearInterval(timer)
    }, 120)
    window.addEventListener('hashchange', jump)
    return () => {
      clearInterval(timer)
      window.removeEventListener('hashchange', jump)
    }
  }, [])
}
