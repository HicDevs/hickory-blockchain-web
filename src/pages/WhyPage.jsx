import { useEffect } from 'react'
import WhySection from '../components/WhySection'

export default function WhyPage() {
  useEffect(() => {
    document.title = 'Why Hickory — Hickory Blockchain'
  }, [])

  return (
    <div className="pt-24">
      <WhySection />
    </div>
  )
}
