export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-[#0b1119]/70 backdrop-blur border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="/" className="flex items-center gap-3">
          <img
            src="/logos/HIC.png"
            alt="Hickory Logo"
            className="w-8 h-8 rounded-full"
            loading="eager"
            decoding="async"
          />
          <span className="font-semibold tracking-tightish">Hickory Blockchain</span>
        </a>
        <nav aria-label="Primary" className="hidden md:flex items-center gap-7 text-sm text-white/75">
          <a href="#why" className="hover:text-white">
            Why Hickory
          </a>
          <a href="#ecosystem" className="hover:text-white">
            Ecosystem
          </a>
          <a href="#tokenomics" className="hover:text-white">
            Tokenomics
          </a>
          <a
            href="https://whitepaper.hickoryblockchain.com"
            target="_blank"
            rel="noreferrer noopener"
            className="hover:text-white"
          >
            Whitepaper
          </a>
          <a href="#contact" className="hover:text-white">
            Contact
          </a>
        </nav>
        <div className="flex items-center gap-2">
          <span className="hidden sm:inline text-xs text-white/60 mr-2">
            Part of <strong>Hickory Intelligence</strong>
          </span>
          <a
            href="#contact"
            className="chip px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/15 transition text-sm hover-glow"
          >
            Early Investor
          </a>
        </div>
      </div>
    </header>
  )
}
