export default function ContactSection() {
  return (
    <section id="contact" className="py-16 border-t border-white/5 reveal">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tightish">Get in touch</h2>
        <p className="mt-3 text-white/75">Developer or investor? Email us — we’ll reply and share the early-investor guide.</p>
        <div className="mt-6 inline-flex items-center gap-3 chip px-4 py-2 rounded-xl bg-white/10 tag">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M4 6l8 6 8-6M4 6v12h16V6"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <a href="mailto:contact@hickoryblockchain.com" className="hover:underline">
            contact@hickoryblockchain.com
          </a>
        </div>
        <div className="mt-4 text-sm text-white/60">Early investor flow: USDC → TX hash → AI Ticket ID (coming soon)</div>
      </div>
    </section>
  )
}
