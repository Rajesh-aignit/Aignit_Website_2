'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <img src="/aignit-logo.png" alt="Aignit Logo" className="h-10 w-auto" />
            </Link>
            <p className="text-gray-400">
              Empowering educators with AI-driven solutions for personalized learning experiences.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/company/99301108/admin/dashboard/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#d2691e] transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/#home" className="text-gray-400 hover:text-[#d2691e] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/#demo" className="text-gray-400 hover:text-[#d2691e] transition-colors">
                  Demo
                </Link>
              </li>
              <li>
                <Link href="/#products" className="text-gray-400 hover:text-[#d2691e] transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/#advantages" className="text-gray-400 hover:text-[#d2691e] transition-colors">
                  Benefits
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Products</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/#products" className="text-gray-400 hover:text-[#d2691e] transition-colors">
                  Smart Doubt Clearance Bot
                </Link>
              </li>
              <li>
                <Link href="/#products" className="text-gray-400 hover:text-[#d2691e] transition-colors">
                  AI-Powered Learning Analytics
                </Link>
              </li>
              <li>
                <Link href="/#products" className="text-gray-400 hover:text-[#d2691e] transition-colors">
                  Personalized Learning Paths
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2 text-gray-400">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:founder@aignit.com" className="hover:text-[#d2691e] transition-colors">
                  founder@aignit.com
                </a>
              </li>
              <li className="flex items-center space-x-2 text-gray-400">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+918056221822" className="hover:text-[#d2691e] transition-colors">
                  +91 8056221822
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Aignit. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
} 