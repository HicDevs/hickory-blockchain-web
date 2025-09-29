import { useEffect } from 'react'
import WhitepaperSection from '../components/WhitepaperSection'

export default function WhitepaperPage() {
  useEffect(() => {
    document.title = 'Whitepaper — Hickory Blockchain'
  }, [])

  return (
    <div className="pt-24">
      <WhitepaperSection />
    </div>
  )
}
