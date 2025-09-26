import { useEffect } from 'react'

export default function useScrollReveal() {
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll('.reveal'))
    if (!elements.length) return

    const prefersReducedMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)')
    if (prefersReducedMotion?.matches || !('IntersectionObserver' in window)) {
      elements.forEach((element) => element.classList.add('show'))
      return
    }

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show')
          obs.unobserve(entry.target)
        }
      })
    }, { threshold: 0.14 })

    elements.forEach((element) => observer.observe(element))

    return () => observer.disconnect()
  }, [])
}
