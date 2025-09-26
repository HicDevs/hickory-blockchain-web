import Header from './components/Header'
import Hero from './components/Hero'
import WhySection from './components/WhySection'
import EcosystemSection from './components/EcosystemSection'
import TokenomicsSection from './components/TokenomicsSection'
import HowToBuySection from './components/HowToBuySection'
import WhitepaperSection from './components/WhitepaperSection'
import ResourcesSection from './components/ResourcesSection'
import RoadmapSection from './components/RoadmapSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'
import CookieBar from './components/CookieBar'
import SkipLink from './components/SkipLink'
import useScrollReveal from './hooks/useScrollReveal'
import useTokenomicsInteractions from './hooks/useTokenomicsInteractions'
import useExternalLinkHardening from './hooks/useExternalLinkHardening'

export default function App() {
  useScrollReveal()
  useTokenomicsInteractions()
  useExternalLinkHardening()

  return (
    <div className="min-h-screen bg-[#0b1119] text-white antialiased overflow-x-hidden">
      <SkipLink />
      <Header />
      <main>
        <Hero />
        <WhySection />
        <EcosystemSection />
        <TokenomicsSection />
        <HowToBuySection />
        <WhitepaperSection />
        <ResourcesSection />
        <RoadmapSection />
        <ContactSection />
      </main>
      <Footer />
      <CookieBar />
    </div>
  )
}
