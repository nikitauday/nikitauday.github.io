import { useCallback, useState } from 'react'

export const EMAIL = 'nikita.uday@nyu.edu'

// mailto: silently does nothing when the browser has no default mail app
// registered (common for webmail users), so every Email link also copies
// the address as a fallback the click always accomplishes something.
export default function useCopyEmail() {
  const [copied, setCopied] = useState(false)

  const copyEmail = useCallback(() => {
    navigator.clipboard
      ?.writeText(EMAIL)
      .then(() => {
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
      })
      .catch(() => {})
  }, [])

  return [copied, copyEmail]
}
