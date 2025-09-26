const items = [
  {
    title: 'HIC Coin',
    description: 'Native asset for staking, governance, fees, and liquidity provisioning.',
    href: 'https://hicscan.com',
  },
  {
    title: 'HIC Scan',
    description: 'Explorer & staking dashboard with multi-chain insights.',
    href: 'https://hicscan.com',
  },
  {
    title: 'Hickory DEX',
    description: 'Decentralized exchange: spot, futures, NFT pairs, liquidity incentives.',
    href: 'https://hickorydex.com',
  },
  {
    title: 'Blockchain',
    description: 'Cosmos SDK + CometBFT PoS core with BMSSP optimization.',
    href: 'https://hickoryblockchain.com/hicnet',
  },
  {
    title: 'Developer SDKs',
    description: 'Rapid module & dApp toolkit, templates, CI/CD integrations.',
    href: 'https://github.com/HicDevs',
  },
  {
    title: 'AI & IoT',
    description: 'Real-time device data, analytics, automation, and settlements.',
    href: 'https://hickoryblockchain.com/ai',
  },
]

export default function EcosystemSection() {
  return (
    <section id="ecosystem" className="py-16 border-t border-white/5 reveal">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-semibold mb-8 tracking-tightish">Ecosystem</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((item) => (
            <a
              key={item.title}
              href={item.href}
              target="_blank"
              rel="noreferrer noopener"
              className="block p-6 rounded-2xl bg-white/[.04] border border-white/10 hover:bg-white/[.06] transition hover-glow"
            >
              <div className="font-medium">{item.title}</div>
              <p className="text-white/75 mt-2 text-sm">{item.description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
