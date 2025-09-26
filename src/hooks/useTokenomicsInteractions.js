import { useEffect } from 'react'

export default function useTokenomicsInteractions() {
  useEffect(() => {
    const segments = Array.from(document.querySelectorAll('.alloc-seg'))
    const legends = Array.from(document.querySelectorAll('.alloc-legend'))

    if (!segments.length && !legends.length) {
      return undefined
    }

    const segmentByKey = new Map(
      segments.map((segment) => [segment.dataset.key, segment])
    )

    const dimOthers = (activeKey) => {
      segments.forEach((segment) => {
        const isActive = segment.dataset.key === activeKey
        segment.classList.toggle('alloc-pop', isActive)
        segment.classList.toggle('alloc-dim', !!activeKey && !isActive)
      })

      legends.forEach((legend) => {
        const isActive = legend.dataset.key === activeKey
        legend.classList.toggle('ring-2', isActive)
        legend.classList.toggle('ring-cyan-400/40', isActive)
      })
    }

    const clear = () => dimOthers(null)

    const removeListeners = []

    segments.forEach((segment) => {
      const { key } = segment.dataset
      if (!key) return

      const handleEnter = () => dimOthers(key)
      const handleLeave = clear
      const handleFocus = () => dimOthers(key)
      const handleBlur = clear

      segment.addEventListener('mouseenter', handleEnter)
      segment.addEventListener('mouseleave', handleLeave)
      segment.addEventListener('focus', handleFocus)
      segment.addEventListener('blur', handleBlur)

      removeListeners.push(() => {
        segment.removeEventListener('mouseenter', handleEnter)
        segment.removeEventListener('mouseleave', handleLeave)
        segment.removeEventListener('focus', handleFocus)
        segment.removeEventListener('blur', handleBlur)
      })
    })

    legends.forEach((legend) => {
      const { key } = legend.dataset
      if (!key) return
      const segment = segmentByKey.get(key)

      const handleEnter = () => dimOthers(key)
      const handleLeave = clear
      const handleFocus = () => dimOthers(key)
      const handleBlur = clear
      const handleClick = () => {
        if (!segment) return
        segment.classList.add('alloc-pop')
        window.setTimeout(() => segment.classList.remove('alloc-pop'), 180)
      }

      legend.addEventListener('mouseenter', handleEnter)
      legend.addEventListener('mouseleave', handleLeave)
      legend.addEventListener('focus', handleFocus)
      legend.addEventListener('blur', handleBlur)
      legend.addEventListener('click', handleClick)

      removeListeners.push(() => {
        legend.removeEventListener('mouseenter', handleEnter)
        legend.removeEventListener('mouseleave', handleLeave)
        legend.removeEventListener('focus', handleFocus)
        legend.removeEventListener('blur', handleBlur)
        legend.removeEventListener('click', handleClick)
      })
    })

    return () => {
      removeListeners.forEach((teardown) => teardown())
    }
  }, [])
}
