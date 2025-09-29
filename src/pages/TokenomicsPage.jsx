import { useEffect } from 'react'
import TokenomicsSection from '../components/TokenomicsSection'

export default function TokenomicsPage() {
  useEffect(() => {
    document.title = 'Tokenomics — Hickory Blockchain'
  }, [])

  return (
    <div className="pt-24">
      <TokenomicsSection />
    </div>
  )
}
