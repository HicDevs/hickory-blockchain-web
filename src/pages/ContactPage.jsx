import { useEffect } from 'react'
import ContactSection from '../components/ContactSection'

export default function ContactPage() {
  useEffect(() => {
    document.title = 'Contact — Hickory Blockchain'
  }, [])

  return (
    <div className="pt-24">
      <ContactSection />
    </div>
  )
}
