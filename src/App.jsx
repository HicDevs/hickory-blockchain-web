import { Navigate, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import CookieBar from './components/CookieBar'
import SkipLink from './components/SkipLink'
import ScrollToTop from './components/ScrollToTop'
import useScrollReveal from './hooks/useScrollReveal'
import useTokenomicsInteractions from './hooks/useTokenomicsInteractions'
import useExternalLinkHardening from './hooks/useExternalLinkHardening'
import HomePage from './pages/HomePage'
import WhyPage from './pages/WhyPage'
import EcosystemPage from './pages/EcosystemPage'
import TokenomicsPage from './pages/TokenomicsPage'
import WhitepaperPage from './pages/WhitepaperPage'
import ContactPage from './pages/ContactPage'
import DocumentsPage from './pages/DocumentsPage'

export default function App() {
  useScrollReveal()
  useTokenomicsInteractions()
  useExternalLinkHardening()

  return (
    <div className="min-h-screen bg-[#0b1119] text-white antialiased overflow-x-hidden">
      <SkipLink />
      <Header />
      <ScrollToTop />
      <main id="top">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/why" element={<WhyPage />} />
          <Route path="/ecosystem" element={<EcosystemPage />} />
          <Route path="/tokenomics" element={<TokenomicsPage />} />
          <Route path="/whitepaper" element={<WhitepaperPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/documents" element={<DocumentsPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
      <CookieBar />
    </div>
  )
}
