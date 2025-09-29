import { useEffect } from 'react'
import Hero from '../components/Hero'
import WhySection from '../components/WhySection'
import EcosystemSection from '../components/EcosystemSection'
import TokenomicsSection from '../components/TokenomicsSection'
import HowToBuySection from '../components/HowToBuySection'
import WhitepaperSection from '../components/WhitepaperSection'
import ResourcesSection from '../components/ResourcesSection'
import RoadmapSection from '../components/RoadmapSection'
import ContactSection from '../components/ContactSection'

export default function HomePage() {
  useEffect(() => {
    document.title = 'Hickory Blockchain — Reliable. Scalable. Intelligent.'
  }, [])

  return (
    <>
      <Hero />
      <WhySection />
      <EcosystemSection />
      <TokenomicsSection />
      <HowToBuySection />
      <WhitepaperSection />
      <ResourcesSection />
      <RoadmapSection />
      <ContactSection />
    </>
  )
}
