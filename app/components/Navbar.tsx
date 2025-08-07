import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="bg-black text-white p-4 flex gap-6">
      <Link href="/" className="hover:underline">Accueil</Link>
      <Link href="/jeux" className="hover:underline">Jeux</Link>
      <Link href="/contact" className="hover:underline">Contact</Link>
    </nav>
  )
}
