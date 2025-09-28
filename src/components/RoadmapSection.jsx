const phases = [
  {
    phase: '2025 Q4',
    title: 'Early Investor Campaign (Fundraising)',
    items: [
      'SAFT-based private round (13.6% allocation)',
      'Finalize legal docs & Term Sheet',
      'Ambassador & Referral KPIs'
    ],
  },
  {
    phase: '2026 Q1',
    title: 'MiCA Registration & Chain Launch',
    items: [
      'MiCA registration (Ireland)',
      'Mainnet launch (Cosmos SDK PoS)',
      'HIC Token → HIC Coin swap (1:1)'
    ],
  },
  {
    phase: '2026 Q2',
    title: 'BMSSP Protocol Release',
    items: [
      'BMSSP networking (production)',
      'IBC integrations & relayers',
      'Dev grants • Ecosystem onboarding'
    ],
  },
  {
    phase: '2026 Q3',
    title: 'AI & IoT Modules',
    items: [
      'Device attestation & data rails',
      'Automation & settlements',
      'Partner pilots (industry)'
    ],
  },
  {
    phase: '2026 Q4',
    title: 'Hickory DEX Launch',
    items: [
      'Liquidity pools (HIC/USDC, HIC/ATOM)',
      'Staking, delegation & governance',
      'Liquidity mining incentives'
    ],
  },
  {
    phase: '2027 Q1',
    title: 'Treasury Expansion (Dubai)',
    items: [
      'Corporate treasury setup',
      'Market making & risk framework',
      'Quarterly governance reporting'
    ],
  },
]

export default function RoadmapSection() {
  return (
    <section id="roadmap" className="py-16 border-t border-white/5 reveal">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-semibold mb-8 tracking-tightish">Roadmap (V3)</h2>
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
