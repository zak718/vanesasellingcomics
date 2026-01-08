'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ShoppingBag, Tv, Phone } from 'lucide-react';
import { SITE_CONFIG, NAV_LINKS } from '@/lib/constants';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* CALL TONY BANNER - TOP OF PAGE */}
      <div className="bg-comic-red text-white py-2 text-center border-b-4 border-black">
        <a
          href={SITE_CONFIG.phoneLink}
          className="inline-flex items-center gap-2 hover:scale-105 transition-transform"
        >
          <Phone size={20} className="animate-pulse" />
          <span className="font-comic text-lg sm:text-xl">
            CALL TONY: <span className="underline font-bold">{SITE_CONFIG.phoneDisplay}</span>
          </span>
          <span className="hidden sm:inline text-sm ml-2 bg-comic-yellow text-black px-2 py-0.5 border-2 border-black">
            Let's Talk Comics!
          </span>
        </a>
      </div>

      <header className="sticky top-0 z-50 bg-comic-cream border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <div className="bg-comic-yellow border-4 border-black px-3 py-1 shadow-comic">
                <span className="font-comic text-2xl md:text-3xl text-black">
                  VANESA
                </span>
              </div>
              <span className="hidden sm:block font-comic text-lg text-comic-red">
                SELLING COMICS
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-6">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-comic text-lg uppercase tracking-wide hover:text-comic-red transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* CTA Buttons - Desktop */}
            <div className="hidden md:flex items-center gap-3">
              {/* BIG CALL BUTTON */}
              <a
                href={SITE_CONFIG.phoneLink}
                className="flex items-center gap-2 bg-hero-green text-white px-4 py-2 border-4 border-black shadow-comic font-comic uppercase hover:bg-green-600 transition-colors animate-pulse"
              >
                <Phone size={20} />
                <span className="hidden lg:inline">Call Now!</span>
              </a>
              <a
                href={SITE_CONFIG.ebayStore}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 comic-button-primary text-sm"
              >
                <ShoppingBag size={18} />
                eBay
              </a>
              <a
                href={SITE_CONFIG.whatnotProfile}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 comic-button-secondary text-sm"
              >
                <Tv size={18} />
                Whatnot
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 border-4 border-black bg-comic-yellow shadow-comic"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t-4 border-black">
              <nav className="flex flex-col gap-4">
                {/* MOBILE CALL BUTTON - BIG AND PROMINENT */}
                <a
                  href={SITE_CONFIG.phoneLink}
                  className="flex items-center justify-center gap-3 bg-hero-green text-white py-4 border-4 border-black shadow-comic font-comic text-xl uppercase"
                >
                  <Phone size={24} className="animate-bounce" />
                  CALL TONY: {SITE_CONFIG.phoneDisplay}
                </a>

                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="font-comic text-xl uppercase tracking-wide hover:text-comic-red transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="flex gap-3 mt-4">
                  <a
                    href={SITE_CONFIG.ebayStore}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 comic-button-primary text-sm"
                  >
                    <ShoppingBag size={18} />
                    eBay Store
                  </a>
                  <a
                    href={SITE_CONFIG.whatnotProfile}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 comic-button-secondary text-sm"
                  >
                    <Tv size={18} />
                    Whatnot
                  </a>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  );
}
