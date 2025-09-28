export default function WhitepaperSection() {
  const handleSectionClick = () => {
    window.open('https://whitepaper.hickoryblockchain.com', '_blank', 'noopener')
  }

  const stopPropagation = (event) => {
    event.stopPropagation()
  }

  return (
    <section
      id="whitepaper"
      className="py-16 border-t border-white/5 reveal cursor-pointer group"
      role="link"
      aria-label="Open Hickory Whitepaper"
      onClick={handleSectionClick}
    >
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-semibold mb-4 tracking-tightish">Whitepaper (V1)</h2>
        <p className="text-white/75 leading-7 max-w-3xl">
          Hickory is a PoS blockchain (Cosmos SDK + IBC) introducing BMSSP for faster networking.
          Final supply is <strong>100M HIC Coin</strong>. A <strong>pre‑launch 13,6 HIC Token</strong> is available for angels and early supporters and
          will swap <strong>1:1</strong> into HIC Coin at mainnet. Allocation follows a detailed 10‑category model (Fundraising, Validator, Liquidity, Referral, Ambassador, Dev Grants, Governance, Partnerships, Team, Treasury).
        </p>
        <div className="mt-6 flex gap-3">
          <a
            href="#contact"
            className="px-5 py-3 rounded-xl bg-hic-blue hover:bg-sky-500 transition shadow-glow hover-glow font-medium"
            onClick={stopPropagation}
          >
            Contact
          </a>
          <a
            href="https://whitepaper.hickoryblockchain.com"
            target="_blank"
            rel="noreferrer noopener"
            className="px-5 py-3 rounded-xl bg-white/10 hover:bg-white/15 transition hover-glow"
            onClick={stopPropagation}
          >
            Read Whitepaper
          </a>
        </div>
      </div>
    </section>
  )
}
