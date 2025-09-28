export default function HowToBuySection() {
  return (
    <section id="buy" className="py-16 border-t border-white/5 reveal">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-semibold mb-4 tracking-tightish">How to Buy HIC Token</h2>
        <p className="text-white/75 leading-7 max-w-3xl">
          You are buying the <strong>pre‑launch HIC Token</strong> (total 100,000,000) — <em>Cosmos Tokenfactory, listed on Osmosis</em>. At mainnet, your tokens migrate <strong>1:1</strong> into <strong>HIC Coin</strong>. Follow these steps to participate.
        </p>
        <ol className="mt-6 space-y-3 list-decimal list-inside text-white/85">
          <li>
            Install a Cosmos wallet (e.g.,{' '}
            <a className="underline hover:text-white" href="https://www.keplr.app/" target="_blank" rel="noreferrer noopener">
              Keplr
            </a>
            ).
          </li>
          <li>
            Fund your wallet with <strong>ATOM or USDC</strong> on Osmosis (from CEX/bridges).
          </li>
          <li>
            Open the HIC/USDC market on <strong>Hickory DEX</strong> and swap for HIC.
          </li>
          <li>
            Keep your <strong>TX hash</strong> if you are joining the early investor flow (AI Ticket ID coming soon).
          </li>
        </ol>
        <div className="mt-4 text-sm text-white/70">
          Note: Early purchases are part of the <strong>13,6M HIC Token</strong> allocation for angels and early supporters. Mainnet swap is automatic (1:1).
          <span className="block text-white/60 text-xs mt-1">
            KYC/AML is required to participate. Jurisdictional restrictions may apply.
          </span>
        </div>
        <div className="mt-6 rounded-xl bg-white/5 border border-white/10 p-4">
          <div className="font-medium mb-2">FAQ — Early Purchase</div>
          <div className="space-y-2 text-sm">
            <details className="group">
              <summary className="cursor-pointer flex items-center justify-between">
                <span>Is there a refund?</span>
                <span className="text-white/40 transition group-open:rotate-180">▾</span>
              </summary>
              <div className="mt-1 text-white/70">
                Purchases are final. Please review the{' '}
                <a href="/docs/HIC_Simple_Token_Sale_Agreement_v2.pdf" className="underline hover:text-white">
                  SAFT
                </a>{' '}
                terms.
              </div>
            </details>
            <details className="group">
              <summary className="cursor-pointer flex items-center justify-between">
                <span>Who can participate?</span>
                <span className="text-white/40 transition group-open:rotate-180">▾</span>
              </summary>
              <div className="mt-1 text-white/70">KYC/AML is required; certain jurisdictions may be restricted.</div>
            </details>
            <details className="group">
              <summary className="cursor-pointer flex items-center justify-between">
                <span>Lockup and vesting?</span>
                <span className="text-white/40 transition group-open:rotate-180">▾</span>
              </summary>
              <div className="mt-1 text-white/70">
                Seed/Private/Public allocations are subject to lock and vesting as defined in the{' '}
                <a href="/docs/HIC_Simple_Token_Sale_Agreement_v2.pdf" className="underline hover:text-white">
                  SAFT
                </a>{' '}
                and the{' '}
                <a href="/docs/Hickory_Vesting_Matrix_v2.pdf" className="underline hover:text-white">
                  Vesting Matrix
                </a>
                .
              </div>
            </details>
            <details className="group">
              <summary className="cursor-pointer flex items-center justify-between">
                <span>When is the 1:1 swap?</span>
                <span className="text-white/40 transition group-open:rotate-180">▾</span>
              </summary>
              <div className="mt-1 text-white/70">At mainnet launch. Tokens migrate 1:1 into HIC Coin and the pre‑launch tokens are burned.</div>
            </details>
            <details className="group">
              <summary className="cursor-pointer flex items-center justify-between">
                <span>Minimum ticket size / maximum cap?</span>
                <span className="text-white/40 transition group-open:rotate-180">▾</span>
              </summary>
              <div className="mt-1 text-white/70">
                Minimum allocation may apply for angels/early investors; a per‑round hard cap can also apply. Please contact us for current thresholds and availability.
              </div>
            </details>
            <details className="group">
              <summary className="cursor-pointer flex items-center justify-between">
                <span>How do I claim my HIC Coin at mainnet?</span>
                <span className="text-white/40 transition group-open:rotate-180">▾</span>
              </summary>
              <div className="mt-1 text-white/70">
                Two supported paths: (1) <strong>Direct genesis allocation</strong> if you provided a HIC address in advance; or (2) a <strong>Claim Portal</strong> where you sign with your source wallet and submit your target HIC address to receive the 1:1 allocation.
              </div>
            </details>
          </div>
          <div className="mt-3 text-xs text-white/70">
            Docs:{' '}
            <a href="/docs/HIC_Simple_Token_Sale_Agreement_v2.pdf" className="underline hover:text-white">
              SAFT
            </a>{' '}
            ·{' '}
            <a href="/docs/Hickory_Vesting_Matrix_v2.pdf" className="underline hover:text-white">
              Vesting Matrix
            </a>{' '}
            ·{' '}
            <a href="/docs/HIC_Privacy_Policy.pdf" className="underline hover:text-white">
              Privacy
            </a>
          </div>
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href="https://hickorydex.com/swap/HIC-USDC"
            target="_blank"
            rel="noreferrer noopener"
            className="px-5 py-3 rounded-xl bg-hic-blue hover:bg-sky-500 transition shadow-glow hover-glow font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/60 active:translate-y-px"
          >
            Open DEX (HIC / ATOM · USDC)
          </a>
          <a
            href="https://hicscan.com"
            target="_blank"
            rel="noreferrer noopener"
            className="px-5 py-3 rounded-xl bg-white/10 hover:bg-white/15 transition font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/40 active:translate-y-px hover-glow"
          >
            View on HIC Scan
          </a>
          <a href="#" className="px-5 py-3 rounded-xl bg-white/5 hover:bg-white/10 transition hover-glow">
            PDF Guide (soon)
          </a>
        </div>
        <p className="mt-4 text-sm text-white/60">
          Need help?{' '}
          <a href="mailto:contact@hickoryblockchain.com" className="underline">
            Email us
          </a>{' '}
          and we’ll walk you through the process.
        </p>
      </div>
    </section>
  )
}
