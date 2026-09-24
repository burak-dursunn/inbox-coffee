'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className={`header${scrolled ? ' scrolled' : ''}`} id="header">
      <nav className="nav container">
        <Link href="/" className="nav__logo" aria-label="CoffeeVar Ana Sayfa" onClick={closeMenu}>
          <Image
            src="/images/logo.webp"
            alt="CoffeeVar Logo"
            width={140}
            height={55}
            priority
            style={{ height: '44px', width: 'auto' }}
          />
        </Link>

        <ul className={`nav__links${menuOpen ? ' open' : ''}`} id="navLinks">
          {[
            { href: '#urun',       label: 'Ürün' },
            { href: '#ozellikler', label: 'Özellikler' },
            { href: '#icecekler',  label: 'İçecekler' },
            { href: '#galeri',     label: 'Galeri' },
            { href: '#faq',        label: 'SSS' },
          ].map(({ href, label }) => (
            <li key={href}>
              <a href={href} className="nav__link" onClick={closeMenu}>{label}</a>
            </li>
          ))}
          <li>
            <a href="#iletisim" className="nav__link nav__link--cta" onClick={closeMenu}>
              İletişim
            </a>
          </li>
        </ul>

        <button
          className={`hamburger${menuOpen ? ' open' : ''}`}
          id="hamburger"
          aria-label="Menüyü aç/kapat"
          aria-expanded={menuOpen}
          aria-controls="navLinks"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>
    </header>
  )
}
