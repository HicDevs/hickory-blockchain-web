import { useEffect } from 'react'

export default function useExternalLinkHardening() {
  useEffect(() => {
    const anchors = Array.from(document.querySelectorAll('a[href^="http"], a[data-external="true"]'))

    anchors.forEach((anchor) => {
      try {
        const url = new URL(anchor.getAttribute('href'), window.location.href)
        if (url.origin !== window.location.origin) {
          anchor.target = '_blank'
          const existing = anchor.getAttribute('rel') || ''
          const parts = existing.split(/\s+/).filter(Boolean)
          if (!parts.includes('noopener')) parts.push('noopener')
          if (!parts.includes('noreferrer')) parts.push('noreferrer')
          anchor.setAttribute('rel', parts.join(' '))
        }
      } catch (error) {
        console.warn('External link hardening skipped for anchor', anchor, error)
      }
    })
  }, [])
}
