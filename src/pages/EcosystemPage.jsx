import { useEffect } from 'react'
import EcosystemSection from '../components/EcosystemSection'

export default function EcosystemPage() {
  useEffect(() => {
    document.title = 'Ecosystem — Hickory Blockchain'
  }, [])

  return (
    <div className="pt-24">
      <EcosystemSection />
    </div>
  )
}
