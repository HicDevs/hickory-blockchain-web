const year = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="py-10 border-t border-white/5 text-center text-white/55 text-sm">
      @ {year} Hickory Blockchain — Part of Hickory Intelligence · Cosmos SDK · IBC · BMSSP
    </footer>
  )
}
