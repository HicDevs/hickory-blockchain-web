import { Link, NavLink } from 'react-router-dom'

const navItems = [
  { to: '/why', label: 'Why Hickory' },
  { to: '/ecosystem', label: 'Ecosystem' },
  { to: '/tokenomics', label: 'Tokenomics' },
  { to: '/whitepaper', label: 'Whitepaper' },
  { to: '/contact', label: 'Contact' },
  { to: '/documents', label: 'Documents' },
]

const linkClassName = ({ isActive }) =>
  `hover:text-white transition ${isActive ? 'text-white' : 'text-white/75'}`

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-[#0b1119]/70 backdrop-blur border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img
            src="/logos/HIC.png"
            alt="Hickory Logo"
            className="w-8 h-8 rounded-full"
            loading="eager"
            decoding="async"
          />
          <span className="font-semibold tracking-tightish">Hickory Blockchain</span>
        </Link>
        <nav aria-label="Primary" className="hidden md:flex items-center gap-7 text-sm text-white/75">
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to} className={linkClassName}>
              {item.label}
            </NavLink>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <span className="hidden sm:inline text-xs text-white/60 mr-2">
            Part of <strong>Hickory Intelligence</strong>
          </span>
          <Link
            to="/contact"
            className="chip px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/15 transition text-sm hover-glow"
          >
            Early Investor
          </Link>
        </div>
      </div>
    </header>
  )
}
