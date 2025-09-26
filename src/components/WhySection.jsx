export default function WhySection() {
  return (
    <section id="why" className="py-16 reveal">
      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-start">
        <div>
          <h2 className="text-3xl sm:text-4xl font-semibold mb-4 tracking-tightish">Why Hickory</h2>
          <p className="text-white/75 leading-7">
            The market needs reliable, easy-to-use Web3 infrastructure. Hickory combines
            the stability of the <strong>Cosmos SDK + IBC</strong> with <strong>BMSSP</strong> networking
            to accelerate block and transaction propagation while reducing overhead.
            Native <strong>AI &amp; IoT</strong> integration unlocks real-time, data-driven applications.
          </p>
          <ul className="mt-6 space-y-3 text-white/85">
            <li className="flex items-start gap-3">
              <span className="mt-1 w-2 h-2 bg-cyan-400 rounded-full" />
              Modular Proof-of-Stake chain (Cosmos SDK)
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 w-2 h-2 bg-cyan-400 rounded-full" />
              IBC interoperability across Cosmos
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 w-2 h-2 bg-cyan-400 rounded-full" />
              BMSSP for faster P2P propagation
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 w-2 h-2 bg-cyan-400 rounded-full" />
              Native AI &amp; IoT integrations
            </li>
          </ul>
        </div>
        <div className="rounded-3xl border border-white/10 bg-white/[.03] p-6">
          <h3 className="font-medium mb-3">Key Metrics</h3>
          <div className="grid sm:grid-cols-2 gap-3">
            <div className="p-4 rounded-xl bg-white/5">
              <div className="text-sm text-white/60">Total Supply</div>
              <div className="text-2xl font-semibold">100,000,000 HIC</div>
            </div>
            <div className="p-4 rounded-xl bg-white/5">
              <div className="text-sm text-white/60">Consensus</div>
              <div className="text-2xl font-semibold">PoS</div>
            </div>
            <div className="p-4 rounded-xl bg-white/5">
              <div className="text-sm text-white/60">Interoperability</div>
              <div className="text-2xl font-semibold">IBC</div>
            </div>
            <div className="p-4 rounded-xl bg-white/5">
              <div className="text-sm text-white/60">Networking</div>
              <div className="text-2xl font-semibold">BMSSP</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
