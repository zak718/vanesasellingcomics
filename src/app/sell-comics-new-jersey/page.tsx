import { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, Phone, CheckCircle, Star, Truck, DollarSign } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Sell Comic Books in New Jersey | We Buy Comics Newark, Jersey City, Trenton',
  description: 'Selling comic books in New Jersey? We buy comic collections throughout NJ. Newark, Jersey City, Trenton, Atlantic City. Free appraisals, same-day cash!',
  keywords: ['sell comics new jersey', 'sell comics NJ', 'comic book buyer newark', 'sell comic collection jersey city', 'we buy comics NJ'],
};

const NJ_AREAS = [
  { name: 'North Jersey', areas: ['Newark', 'Jersey City', 'Paterson', 'Elizabeth', 'Hoboken'] },
  { name: 'Central Jersey', areas: ['Trenton', 'New Brunswick', 'Edison', 'Princeton'] },
  { name: 'South Jersey', areas: ['Camden', 'Cherry Hill', 'Vineland', 'Atlantic City'] },
  { name: 'Shore', areas: ['Asbury Park', 'Long Branch', 'Toms River', 'Point Pleasant'] },
];

export default function SellComicsNewJersey() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-comic-yellow via-comic-cream to-comic-red/20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-comic-red text-white px-4 py-2 border-4 border-black shadow-comic mb-6">
            <MapPin size={20} />
            <span className="font-comic">NEW JERSEY</span>
          </div>

          <h1 className="font-comic text-4xl md:text-6xl uppercase tracking-tight mb-4">
            <span className="text-comic-red">Sell Your Comics</span>{' '}
            <span className="text-comic-blue">in New Jersey</span>
          </h1>

          <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
            The Garden State's go-to comic buyer. We cover <strong>all of New Jersey</strong> from
            the Shore to the Delaware Water Gap. Free pickups, fair prices, instant cash.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="flex items-center gap-2 bg-white px-4 py-2 border-4 border-black shadow-comic">
              <Star className="text-comic-yellow" fill="#FFD700" size={18} />
              <span className="font-comic text-sm">99.9% POSITIVE</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-4 py-2 border-4 border-black shadow-comic">
              <Truck className="text-comic-blue" size={18} />
              <span className="font-comic text-sm">ALL OF NJ</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-4 py-2 border-4 border-black shadow-comic">
              <DollarSign className="text-hero-green" size={18} />
              <span className="font-comic text-sm">CASH TODAY</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={SITE_CONFIG.phoneLink}
              className="flex items-center gap-3 bg-hero-green text-white px-8 py-4 border-4 border-black shadow-comic-lg font-comic text-xl sm:text-2xl uppercase hover:bg-green-600 transition-colors animate-pulse"
            >
              <Phone size={28} className="animate-bounce" />
              CALL TONY: {SITE_CONFIG.phoneDisplay}
            </a>
            <Link href="/sell#contact-form" className="comic-button-secondary text-xl">
              Get Free NJ Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Areas We Serve */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="section-title mb-12">
            <span className="text-comic-red">Areas We</span>{' '}
            <span className="text-comic-blue">Serve in NJ</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {NJ_AREAS.map((region) => (
              <div key={region.name} className="comic-card">
                <h3 className="font-comic text-xl uppercase mb-4 text-comic-red">{region.name}</h3>
                <ul className="space-y-2">
                  {region.areas.map((area) => (
                    <li key={area} className="flex items-center gap-2 text-gray-600">
                      <CheckCircle size={16} className="text-hero-green" />
                      {area}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NJ Specific Content */}
      <section className="py-16 bg-comic-cream">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="section-title mb-8">
            New Jersey Comic Buying Experts
          </h2>
          <div className="max-w-3xl mx-auto text-lg text-gray-700 space-y-4">
            <p>
              New Jersey has a rich comic collecting history. From the diners of North Jersey where
              collectors traded issues in the 80s, to the shore town comic shops that defined summers,
              we understand what NJ collections look like.
            </p>
            <p>
              Whether you're cleaning out a Newark basement, downsizing in Cherry Hill, or settling
              an estate in Princeton, we make selling easy. We handle the heavy lifting – literally.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-comic-blue text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-comic text-4xl uppercase mb-6">
            Jersey Strong, Fair Prices!
          </h2>
          <p className="text-xl mb-8">
            Don't let your comics collect dust. Get cash for your collection today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/sell#contact-form" className="comic-button-primary text-xl">
              Get Free NJ Quote
            </Link>
            <a href={SITE_CONFIG.phoneLink} className="comic-button bg-white text-black text-xl">
              <Phone size={20} className="inline mr-2" />
              {SITE_CONFIG.phoneDisplay}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
