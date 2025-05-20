import Link from "next/link"

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link href="/" className="navbar-logo">
          Mimic.css
        </Link>
        <div className="navbar-links">
          <Link href="/" className="navbar-link">
            Home
          </Link>
          <Link href="/animations" className="navbar-link">
            All Animations
          </Link>
          <Link href="/categories" className="navbar-link">
            Categories
          </Link>
          <Link href="/playground" className="navbar-link">
            Playground
          </Link>
        </div>
      </div>
    </nav>
  )
}
