'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-zinc-900 text-white shadow-md sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo and Title */}
        <div className="flex items-center space-x-2">
          <Image src="/assets/logo.png" alt="Logo" width={40} height={40} />
          <span className="text-cyan-400 text-2xl font-bold">TechAuthority</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-sm uppercase tracking-wide">
          <li><Link href="/" className="hover:text-cyan-400 transition">Home</Link></li>
          <li><Link href="/about" className="hover:text-cyan-400 transition">About</Link></li>
          <li><Link href="/services" className="hover:text-cyan-400 transition">Services</Link></li>
          <li><Link href="/projects" className="hover:text-cyan-400 transition">Projects</Link></li>
          <li><Link href="/contact" className="hover:text-cyan-400 transition">Contact</Link></li>
        </ul>

        {/* Hamburger Button */}
        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-zinc-800 text-white px-6 pb-4 space-y-4">
          <Link href="/" className="block hover:text-cyan-400" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link href="/about" className="block hover:text-cyan-400" onClick={() => setMenuOpen(false)}>About</Link>
          <Link href="/services" className="block hover:text-cyan-400" onClick={() => setMenuOpen(false)}>Services</Link>
          <Link href="/projects" className="block hover:text-cyan-400" onClick={() => setMenuOpen(false)}>Projects</Link>
          <Link href="/contact" className="block hover:text-cyan-400" onClick={() => setMenuOpen(false)}>Contact</Link>
        </div>
      )}
    </header>
  );
}
