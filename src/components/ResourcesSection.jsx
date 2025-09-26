const resources = [
  {
    title: 'Investor Brief (Pre‑launch Token Sale)',
    description: 'Overview of 100M HIC Token private sale (SAFT) and 1:1 migration into HIC Coin at mainnet.',
    href: '/docs/Hickory_Investor_Brief.pdf',
  },
  {
    title: 'Investor Factsheet',
    description: '1‑page overview for investors',
    href: '/docs/HIC_Investor_Factsheet.pdf',
  },
  {
    title: 'Tokenomics',
    description: 'Supply, allocation, and design',
    href: '/docs/Hickory_Tokenomics_v2.pdf',
  },
  {
    title: 'Vesting Matrix',
    description: 'Cliff and release schedule',
    href: '/docs/Hickory_Vesting_Matrix_v2.pdf',
  },
  {
    title: 'SAFT (Token Sale Agreement)',
    description: 'Seed / Private / Public terms',
    href: '/docs/HIC_Simple_Token_Sale_Agreement_v2.pdf',
  },
  {
    title: 'Ambassador Agreement',
    description: 'KPI‑based rewards',
    href: '/docs/Ambassador_Agreement_HIC_v2.pdf',
  },
  {
    title: 'Angel / Referral Agreement',
    description: '5–10% rewards from referral pool',
    href: '/docs/Angel_Referral_Agreement_HIC_v2.pdf',
  },
  {
    title: 'Governance Litepaper',
    description: 'Cosmos‑style parameters',
    href: '/docs/HIC_Governance_Litepaper_v2.pdf',
  },
  {
    title: 'Validator Policy',
    description: 'Active set, slashing, hardware',
    href: '/docs/HIC_Validator_Policy_v2.pdf',
  },
  {
    title: 'Liquidity Bootstrapping Plan',
    description: 'DEX pools & incentives',
    href: '/docs/HIC_Liquidity_Bootstrapping_Plan_v2.pdf',
  },
  {
    title: 'Migration Handbook',
    description: '100M Token → 100M Coin (1:1)',
    href: '/docs/HIC_Migration_Handbook.pdf',
  },
  {
    title: 'Comparative Model Audit (BNB/Cosmos)',
    description: 'Comparative analysis & risks',
    href: '/docs/HIC_Model_Audit_BNB_Cosmos.pdf',
  },
  {
    title: 'Terms & Conditions',
    description: 'Website & service terms',
    href: '/docs/HIC_Terms_and_Conditions.pdf',
  },
  {
    title: 'Privacy Policy',
    description: 'GDPR compliant',
    href: '/docs/HIC_Privacy_Policy.pdf',
  },
  {
    title: 'Treasury Management',
    description: '5/9 multisig, reporting',
    href: '/docs/HIC_Treasury_Management_Guidelines.pdf',
  },
  {
    title: 'Emission & Unlock Schedule',
    description: 'TGE %, cliffs and vesting unlocks by allocation',
    href: '/docs/HIC_Emission_Unlock_Schedule.pdf',
  },
  {
    title: 'Risk Factors & Legal Disclaimer',
    description: 'Market, regulatory, and technical risks · Not an offer of securities',
    href: '/docs/HIC_Risk_Factors_Disclaimer.pdf',
  },
  {
    title: 'KYC/AML & Jurisdiction Policy',
    description: 'Compliance requirements, restricted regions, ID verification',
    href: '/docs/HIC_KYC_AML_Jurisdiction_Policy.pdf',
  },
]

export default function ResourcesSection() {
  return (
    <section id="resources" className="py-16 border-t border-white/5 reveal">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-semibold mb-8 tracking-tightish">Resources &amp; Documents</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {resources.map((item) => (
            <a
              key={item.title}
              href={item.href}
              target="_blank"
              rel="noreferrer noopener"
              className="block p-5 rounded-2xl bg-white/[.04] border border-white/10 transition hover:bg-white/10 hover:translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/40"
            >
              <div className="font-medium">{item.title}</div>
              <div className="text-sm text-white/70 mt-1">{item.description}</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
