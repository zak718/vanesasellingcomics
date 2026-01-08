import Link from 'next/link';
import { ShoppingBag, Tv, Mail, Phone } from 'lucide-react';
import { SITE_CONFIG, NAV_LINKS } from '@/lib/constants';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-night-blue text-white border-t-4 border-comic-yellow">
      {/* BIG CALL TONY SECTION */}
      <div className="bg-comic-red py-8 border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h3 className="font-comic text-2xl sm:text-3xl uppercase mb-4 text-white">
            Got Comics? Call Tony!
          </h3>
          <a
            href={SITE_CONFIG.phoneLink}
            className="inline-flex items-center gap-4 bg-white text-comic-red px-8 py-4 border-4 border-black shadow-comic-lg font-comic text-2xl sm:text-4xl uppercase hover:bg-comic-yellow hover:text-black transition-colors"
          >
            <Phone size={36} className="animate-pulse" />
            {SITE_CONFIG.phoneDisplay}
          </a>
          <p className="text-white/80 mt-4 text-lg">
            Comics, Toys, Collectibles - Let's Chat! No Pressure, Just Fun.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="inline-block bg-comic-yellow border-4 border-black px-4 py-2 shadow-comic mb-4">
              <span className="font-comic text-2xl text-black">
                VANESA SELLING COMICS
              </span>
            </div>
            <p className="text-gray-300 mt-4">
              {SITE_CONFIG.description}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-comic text-xl text-comic-yellow mb-4 uppercase">
              Quick Links
            </h3>
            <nav className="flex flex-col gap-2">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-gray-300 hover:text-comic-yellow transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Shop With Us */}
          <div>
            <h3 className="font-comic text-xl text-comic-yellow mb-4 uppercase">
              Shop With Us
            </h3>
            <div className="flex flex-col gap-3">
              <a
                href={SITE_CONFIG.ebayStore}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-300 hover:text-comic-yellow transition-colors"
              >
                <ShoppingBag size={20} />
                eBay Store
              </a>
              <a
                href={SITE_CONFIG.whatnotProfile}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-300 hover:text-comic-yellow transition-colors"
              >
                <Tv size={20} />
                Watch Live on Whatnot
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-comic text-xl text-comic-yellow mb-4 uppercase">
              Contact Tony
            </h3>
            <div className="flex flex-col gap-3">
              <a
                href={SITE_CONFIG.phoneLink}
                className="flex items-center gap-2 text-white hover:text-comic-yellow transition-colors font-bold text-lg"
              >
                <Phone size={20} className="text-hero-green" />
                {SITE_CONFIG.phoneDisplay}
              </a>
              <a
                href={`mailto:${SITE_CONFIG.email}`}
                className="flex items-center gap-2 text-gray-300 hover:text-comic-yellow transition-colors"
              >
                <Mail size={20} />
                {SITE_CONFIG.email}
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} VanesaSellingComics. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-comic-yellow font-comic">
              {SITE_CONFIG.stats.feedback}
            </span>
            <span className="text-gray-400">Positive Feedback</span>
            <span className="text-gray-600">|</span>
            <a href={SITE_CONFIG.phoneLink} className="text-hero-green font-comic hover:text-comic-yellow">
              {SITE_CONFIG.phoneDisplay}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
