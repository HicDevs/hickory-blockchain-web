export default function Hero() {
  return (
    <section id="top" className="relative">
      <div className="noise" />
      <div className="max-w-7xl mx-auto px-4 pt-20 md:pt-24 pb-12 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <div className="inline-flex items-center gap-2 chip px-3 py-1 rounded-full bg-white/5 mb-4 text-white/80 text-xs tag">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            Cosmos SDK • IBC • BMSSP • <span className="opacity-75">Part of Hickory Intelligence</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-semibold leading-tight tracking-tightish">
            Reliable. Scalable.{' '}
            <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-400 to-cyan-300">
              Intelligent.
            </span>
          </h1>
          <p className="mt-4 text-white/75 text-[1.08rem] leading-7 max-w-xl">
            A next-generation Proof-of-Stake blockchain with <strong>Cosmos SDK + IBC</strong>,
            <strong> BMSSP networking</strong>, and native <strong>AI &amp; IoT</strong> integration.
            Designed for Web3 applications, cross-chain DeFi, and real-world automation.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="#tokenomics"
              className="px-5 py-3 rounded-xl bg-hic-blue hover:bg-sky-500 transition shadow-glow hover-glow font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/60 active:translate-y-px"
            >
              HIC Tokenomics
            </a>
            <a
              href="#ecosystem"
              className="px-5 py-3 rounded-xl bg-white/10 hover:bg-white/15 transition font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/40 active:translate-y-px hover-glow"
            >
              Ecosystem
            </a>
            <a
              href="https://whitepaper.hickoryblockchain.com"
              target="_blank"
              rel="noreferrer noopener"
              className="px-5 py-3 rounded-xl bg-white/5 hover:bg-white/10 transition font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/30 active:translate-y-px hover-glow"
            >
              Whitepaper
            </a>
          </div>
          <div className="mt-7 grid grid-cols-3 gap-4 text-center">
            <div className="chip py-3 rounded-xl bg-white/5">
              <div className="text-2xl font-semibold">100M</div>
              <div className="text-xs text-white/60">HIC Total Supply</div>
            </div>
            <div className="chip py-3 rounded-xl bg-white/5">
              <div className="text-2xl font-semibold">PoS</div>
              <div className="text-xs text-white/60">Cosmos SDK • IBC</div>
            </div>
            <div className="chip py-3 rounded-xl bg-white/5">
              <div className="text-2xl font-semibold">BMSSP</div>
              <div className="text-xs text-white/60">Faster Networking</div>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-8 rounded-3xl bg-gradient-to-br from-cyan-400/20 to-sky-500/10 blur-2xl" />
          <div className="relative rounded-3xl border border-white/10 bg-white/[.03] p-6">
            <div className="flex items-center gap-3">
              <img
                src="/logos/HIC.png"
                alt="Hickory Logo"
                className="w-14 h-14 rounded-full"
                loading="eager"
                decoding="async"
              />
              <div>
                <div className="font-medium">HIC Coin</div>
                <div className="text-sm text-white/70">Staking • Governance • Fees</div>
              </div>
            </div>
            <div className="mt-6 grid sm:grid-cols-3 gap-3">
              <div className="p-4 rounded-xl bg-white/5">
                <div className="text-sm text-white/60 mb-1">Throughput</div>
                <div className="text-xl font-semibold">High</div>
              </div>
              <div className="p-4 rounded-xl bg-white/5">
                <div className="text-sm text-white/60 mb-1">Finality</div>
                <div className="text-xl font-semibold">Fast</div>
              </div>
              <div className="p-4 rounded-xl bg-white/5">
                <div className="text-sm text-white/60 mb-1">IBC</div>
                <div className="text-xl font-semibold">Enabled</div>
              </div>
            </div>
            <p className="mt-6 text-white/75 text-sm">
              Built for developers, investors, and operators who need reliability at scale.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
