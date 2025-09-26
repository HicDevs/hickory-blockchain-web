import { useEffect, useState } from 'react'

const COOKIE_KEY = 'hic-cookie-ok'

export default function CookieBar() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    try {
      if (!localStorage.getItem(COOKIE_KEY)) {
        setVisible(true)
      }
    } catch (error) {
      console.error('Cookie bar initialization failed', error)
    }
  }, [])

  const acknowledge = () => {
    try {
      localStorage.setItem(COOKIE_KEY, '1')
    } catch (error) {
      console.error('Persisting cookie consent failed', error)
    }
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="fixed bottom-4 inset-x-4 md:right-6 md:left-auto z-50 max-w-xl mx-auto bg-white/10 text-white rounded-2xl p-4 shadow-glow">
      <div className="flex items-start gap-3">
        <div className="text-sm leading-6">
          <strong>Cookie &amp; Privacy</strong> — This site uses analytics cookies to improve your experience. By using it, you agree.
        </div>
        <button
          type="button"
          className="ml-auto px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 hover-glow"
          onClick={acknowledge}
        >
          OK
        </button>
      </div>
    </div>
  )
}
