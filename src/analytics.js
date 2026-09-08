// Google Analytics 4 (gtag.js).
//
// The measurement ID comes from VITE_GA_ID — see .env.production. Analytics stays
// off when that is unset or when the page is served locally, so `npm run dev` and
// `npm run preview` traffic never lands in the property.

const MEASUREMENT_ID = import.meta.env.VITE_GA_ID

const LOCAL_HOSTNAMES = ['localhost', '127.0.0.1', '[::1]', '']

export function initAnalytics() {
  if (!MEASUREMENT_ID) return
  if (LOCAL_HOSTNAMES.includes(window.location.hostname)) return

  window.dataLayer = window.dataLayer || []
  // gtag forwards its raw `arguments` object, so this cannot be an arrow function.
  function gtag() {
    window.dataLayer.push(arguments)
  }
  window.gtag = gtag

  gtag('js', new Date())
  // Sends the page_view for this page. Each .html entry is its own document load,
  // so every page reports itself without any extra routing hooks.
  gtag('config', MEASUREMENT_ID)

  const script = document.createElement('script')
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${MEASUREMENT_ID}`
  document.head.appendChild(script)
}

// For anything worth measuring beyond page views — resume downloads, contact clicks.
export function trackEvent(name, params = {}) {
  if (typeof window.gtag !== 'function') return
  window.gtag('event', name, params)
}
