const phases = [
  {
    phase: 'Phase I',
    title: 'Core & BMSSP',
    items: ['Cosmos SDK PoS core', 'BMSSP networking (production)', 'IBC integrations'],
  },
  {
    phase: 'Phase II',
    title: 'DEX & Token',
    items: ['HIC Token → HIC Coin swap (1:1)', 'Osmosis liquidity (HIC/USDC)', 'Governance launch'],
  },
  {
    phase: 'Phase III',
    title: 'AI & IoT',
    items: ['Device attestation & data rails', 'Automation & settlements', 'Grants • Ecosystem growth'],
  },
]

export default function RoadmapSection() {
  return (
    <section id="roadmap" className="py-16 border-t border-white/5 reveal">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-semibold mb-8 tracking-tightish">Roadmap</h2>
        <div className="grid md:grid-cols-3 gap-5">
          {phases.map((phase) => (
            <div
              key={phase.phase}
              className="p-6 rounded-2xl bg-white/[.04] border border-white/10 transition hover:bg-white/10 hover:translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/40 hover-glow"
              tabIndex={0}
            >
              <div className="text-white/70 text-sm">{phase.phase}</div>
              <div className="font-medium">{phase.title}</div>
              <ul className="mt-3 space-y-2 text-white/75 text-sm">
                {phase.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
