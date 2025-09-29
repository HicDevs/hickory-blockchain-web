import { useEffect } from 'react'

const documents = [
  {
    title: 'Investor Pitch Deck',
    description: 'Overview of the Hickory network, investor highlights, and go-to-market flywheel.',
    href: '/docs/Hickory_Investor_Brief.pdf',
    meta: 'PDF'
  },
  {
    title: 'Term Sheet',
    description: 'Key terms for early investors participating in the SAFT round.',
    href: '/docs/Hickory_Term_Sheet.pdf',
    meta: 'PDF'
  },
  {
    title: 'SAFT Agreement',
    description: 'Simple Agreement for Future Tokens governing the pre-launch sale.',
    href: '/docs/HIC_Simple_Token_Sale_Agreement_v2.pdf',
    meta: 'PDF'
  },
  {
    title: 'Vesting Matrix',
    description: 'Detailed unlock schedule across angels, private, validator, and ecosystem pools.',
    href: '/docs/Hickory_Vesting_Matrix_v2.pdf',
    meta: 'PDF'
  },
  {
    title: 'Governance Litepaper',
    description: 'Cosmos-aligned parameters for on-chain voting, treasury, and validator policies.',
    href: '/docs/HIC_Governance_Litepaper_v2.pdf',
    meta: 'PDF'
  },
  {
    title: 'Angel / Referral Terms',
    description: 'KPI-based referral allocations and angels participation guidelines.',
    href: '/docs/Angel_Referral_Agreement_HIC_v2.pdf',
    meta: 'PDF'
  },
  {
    title: 'Tokenomics',
    description: 'Supply, allocation, and migration design for HIC Tokens → HIC Coins.',
    href: '/docs/Hickory_Tokenomics_v2.pdf',
    meta: 'PDF'
  },
  {
    title: 'Risk Factors & Legal Disclaimer',
    description: 'Regulatory, market, and technical risk disclosures for stakeholders.',
    href: '/docs/HIC_Risk_Factors_Disclaimer.pdf',
    meta: 'PDF'
  },
]

export default function DocumentsPage() {
  useEffect(() => {
    document.title = 'Documents — Hickory Blockchain'
  }, [])

  return (
    <div className="pt-24">
      <section className="py-16 border-t border-white/5">
        <div className="max-w-5xl mx-auto px-4">
          <h1 className="text-3xl sm:text-4xl font-semibold mb-4 tracking-tightish">Documents</h1>
          <p className="text-white/75 max-w-3xl leading-7 mb-8">
            Download investor and compliance documentation for Hickory Blockchain. All files are provided as PDFs for
            straightforward sharing with partners, counsel, and internal teams.
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            {documents.map((doc) => (
              <a
                key={doc.title}
                href={doc.href}
                className="block rounded-2xl border border-white/10 bg-white/[.04] p-5 transition hover:bg-white/[.08] hover:translate-y-0.5 hover-glow"
                target="_blank"
                rel="noreferrer noopener"
              >
                <div className="font-medium text-lg">{doc.title}</div>
                <p className="text-sm text-white/70 mt-2 leading-6">{doc.description}</p>
                <div className="text-xs text-white/55 mt-3 uppercase tracking-wide">{doc.meta}</div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
