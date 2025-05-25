'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector('header');
      if (header) {
        if (window.scrollY > 100) {
          header.classList.add('bg-white/98', 'shadow-lg');
          header.classList.remove('bg-white/95', 'shadow-md');
        } else {
          header.classList.add('bg-white/95', 'shadow-md');
          header.classList.remove('bg-white/98', 'shadow-lg');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-lg shadow-md transition-all duration-300">
      <nav className="container flex justify-between items-center py-4">
        <Link href="/" className="flex items-center gap-2">
          <img src="/aignit-logo.png" alt="Aignit Logo" className="h-10 w-auto" />
        </Link>

        <ul className={`nav-links hidden md:flex items-center gap-8 ${isMenuOpen ? 'flex' : ''}`}>
          <li>
            <Link href="/#home" className="font-medium text-gray-800 hover:text-[#d2691e] transition-colors">
              Home
            </Link>
          </li>
          <li>
            <Link href="/#demo" className="font-medium text-gray-800 hover:text-[#d2691e] transition-colors">
              Demo
            </Link>
          </li>
          <li>
            <Link href="/#products" className="font-medium text-gray-800 hover:text-[#d2691e] transition-colors">
              Products
            </Link>
          </li>
          <li>
            <Link href="/#advantages" className="font-medium text-gray-800 hover:text-[#d2691e] transition-colors">
              Benefits
            </Link>
          </li>
          <li>
            <Link href="/#contact" className="font-medium text-gray-800 hover:text-[#d2691e] transition-colors">
              Contact
            </Link>
          </li>
        </ul>

        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-gray-800 transition-transform ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-gray-800 transition-opacity ${isMenuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-gray-800 transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </nav>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t border-gray-100">
          <ul className="container py-4 space-y-4">
            <li>
              <Link
                href="/#home"
                className="block py-2 font-medium text-gray-800 hover:text-[#d2691e] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/#demo"
                className="block py-2 font-medium text-gray-800 hover:text-[#d2691e] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Demo
              </Link>
            </li>
            <li>
              <Link
                href="/#products"
                className="block py-2 font-medium text-gray-800 hover:text-[#d2691e] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                href="/#advantages"
                className="block py-2 font-medium text-gray-800 hover:text-[#d2691e] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Benefits
              </Link>
            </li>
            <li>
              <Link
                href="/#contact"
                className="block py-2 font-medium text-gray-800 hover:text-[#d2691e] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
} 