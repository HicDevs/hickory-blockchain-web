const allocation = [
  { key: 'fundraising', label: 'Fundraising', percent: '13.6%', color: 'bg-amber-400' },
  { key: 'referral', label: 'Referral', percent: '9.1%', color: 'bg-sky-400' },
  { key: 'ambassador', label: 'Ambassador', percent: '9.1%', color: 'bg-emerald-400' },
  { key: 'validator', label: 'Validator Incentives', percent: '13.6%', color: 'bg-cyan-300' },
  { key: 'dev-grants', label: 'Dev Grants', percent: '9.1%', color: 'bg-fuchsia-400' },
  { key: 'liquidity', label: 'Liquidity Mining', percent: '13.6%', color: 'bg-orange-400' },
  { key: 'governance', label: 'Governance (Vote2Earn)', percent: '4.5%', color: 'bg-pink-400' },
  { key: 'partnerships', label: 'Partnerships', percent: '9.1%', color: 'bg-indigo-400' },
  { key: 'team', label: 'Team & Advisors', percent: '9.1%', color: 'bg-white/80' },
  { key: 'treasury', label: 'Reserve / Treasury', percent: '9.1%', color: 'bg-teal-300' },
]

export default function TokenomicsSection() {
  return (
    <section id="tokenomics" className="py-16 border-t border-white/5 reveal">
      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl sm:text-4xl font-semibold mb-4 tracking-tightish">Tokenomics</h2>
          <p className="text-white/75 mb-6 leading-7">
            HIC is the native asset of the network: staking, governance, fees, and liquidity. Supply and allocation are transparent.
          </p>
          <div className="mt-4 p-4 rounded-xl bg-white/5 border border-white/10 text-sm">
            <div className="font-medium mb-1">Pre‑launch Phase (Now)</div>
            <div className="text-white/80">
              <strong>100,000,000 HIC Tokens</strong> constitute the pre‑launch supply via <strong>Cosmos Tokenfactory</strong>, distributed per the allocation model. At mainnet,
              all tokens migrate at a <strong>1:1</strong> ratio into the final <strong>100,000,000 HIC Coin</strong> supply, and the pre‑launch tokens are burned.
            </div>
            <div className="mt-2 text-xs text-white/70">
              Learn more:
              {' '}
              <a href="/docs/HIC_Simple_Token_Sale_Agreement_v2.pdf" className="underline hover:text-white">
                SAFT
              </a>
              {' '}
              ·
              {' '}
              <a href="/docs/Angel_Referral_Agreement_HIC_v2.pdf" className="underline hover:text-white">
                Angel / Referral terms
              </a>
            </div>
            <div className="mt-3 flex flex-wrap gap-2">
              <a
                href="mailto:contact@hickoryblockchain.com?subject=Angel%20Investment%20Inquiry"
                className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/15 transition text-xs hover-glow"
              >
                Contact sales
              </a>
              <a
                href="#contact"
                className="px-3 py-1.5 rounded-lg bg-hic-blue hover:bg-sky-500 transition text-xs text-slate-900 font-medium hover-glow"
              >
                Apply as Angel
              </a>
            </div>
            <div className="mt-2 text-[11px] text-white/60">
              KYC/AML required for early investors. Jurisdictional restrictions may apply.
              <a href="/docs/HIC_Privacy_Policy.pdf" className="underline hover:text-white ml-1">
                Learn more
              </a>
            </div>
          </div>
          <ul className="space-y-2 mt-4">
            <li className="flex items-center gap-3 rounded-lg px-2 py-1 transition hover:bg-white/5 hover:translate-x-0.5">
              <span className="w-3 h-3 rounded-full bg-cyan-400" />
              <strong>Total Supply:</strong>
              {' '}
              100,000,000 HIC
            </li>
          </ul>
          <div className="mt-5 text-white/85">
            <div className="font-medium mb-2">Allocation</div>
            <ul className="space-y-2">
              {allocation.map((item) => (
                <li
                  key={item.key}
                  data-key={item.key}
                  className="alloc-legend flex items-center gap-3 rounded-lg px-2 py-1 transition hover:bg-white/5 hover:translate-x-0.5 hover-glow"
                >
                  <span className={`w-2.5 h-2.5 rounded-full ${item.color}`} />
                  {item.percent}
                  {' '}
                  <strong>{item.label}</strong>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-6 grid sm:grid-cols-2 gap-3">
            <div className="p-4 rounded-xl bg-white/5">
              <div className="text-sm text-white/60">Utility</div>
              <div className="font-medium">Staking • Governance • Fees • LP</div>
            </div>
            <a href="#buy" className="block p-4 rounded-xl bg-white/5 hover:bg-white/10 transition hover-glow">
              <div className="text-sm text-white/60">Swap</div>
              <div className="font-medium">HIC Token → HIC Coin 1:1 at mainnet launch</div>
              <div className="mt-2 text-sm underline text-hic-blue/90">Buy HIC Token · How to buy</div>
            </a>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-6 blur-2xl bg-cyan-400/10 rounded-3xl" />
          <div className="relative p-6 rounded-3xl border border-white/10 bg-white/[.03]">
            <div className="font-medium mb-4">Allocation</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {allocation.map((item) => (
                <div
                  key={item.key}
                  data-key={item.key}
                  className="alloc-legend p-3 rounded-lg bg-white/5 flex items-center gap-2 transition hover:bg-white/10 hover:translate-y-0.5 hover-glow"
                >
                  <span className={`w-2.5 h-2.5 rounded-full ${item.color}`} />
                  <span>{item.label}</span>
                  <span className="ml-auto font-semibold">{item.percent}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
