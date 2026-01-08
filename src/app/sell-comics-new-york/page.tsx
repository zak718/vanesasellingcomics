import { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, Phone, CheckCircle, Star, Truck, DollarSign } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Sell Comic Books in New York | We Buy Comics NYC, Long Island, Westchester',
  description: 'Selling comic books in New York? We buy comic collections in NYC, Long Island, Westchester, Buffalo, Albany. Free appraisals, same-day cash, we come to you!',
  keywords: ['sell comics new york', 'sell comics NYC', 'comic book buyer long island', 'sell comic collection westchester', 'we buy comics NY'],
};

const NY_AREAS = [
  { name: 'New York City', areas: ['Manhattan', 'Brooklyn', 'Queens', 'Bronx', 'Staten Island'] },
  { name: 'Long Island', areas: ['Nassau County', 'Suffolk County', 'Hempstead', 'Huntington'] },
  { name: 'Westchester', areas: ['White Plains', 'Yonkers', 'New Rochelle', 'Mount Vernon'] },
  { name: 'Upstate', areas: ['Albany', 'Buffalo', 'Rochester', 'Syracuse'] },
];

export default function SellComicsNewYork() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-comic-blue via-comic-cream to-comic-yellow">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-comic-yellow px-4 py-2 border-4 border-black shadow-comic mb-6">
            <MapPin size={20} />
            <span className="font-comic">NEW YORK</span>
          </div>

          <h1 className="font-comic text-4xl md:text-6xl uppercase tracking-tight mb-4">
            <span className="text-comic-blue">Sell Your Comics</span>{' '}
            <span className="text-comic-red">in New York</span>
          </h1>

          <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
            New York's trusted comic book buyer. We travel to <strong>NYC, Long Island, Westchester,
            and all of Upstate New York</strong> to buy collections. Free appraisals, fair prices, same-day cash.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="flex items-center gap-2 bg-white px-4 py-2 border-4 border-black shadow-comic">
              <Star className="text-comic-yellow" fill="#FFD700" size={18} />
              <span className="font-comic text-sm">99.9% POSITIVE</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-4 py-2 border-4 border-black shadow-comic">
              <Truck className="text-comic-blue" size={18} />
              <span className="font-comic text-sm">FREE PICKUP NY</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-4 py-2 border-4 border-black shadow-comic">
              <DollarSign className="text-hero-green" size={18} />
              <span className="font-comic text-sm">CASH SAME DAY</span>
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
            <Link href="/sell#contact-form" className="comic-button-primary text-xl">
              Get Free NY Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Areas We Serve */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="section-title mb-12">
            <span className="text-comic-blue">Areas We</span>{' '}
            <span className="text-comic-red">Serve in NY</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {NY_AREAS.map((region) => (
              <div key={region.name} className="comic-card">
                <h3 className="font-comic text-xl uppercase mb-4 text-comic-blue">{region.name}</h3>
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

      {/* Why NY Collectors Choose Us */}
      <section className="py-16 bg-comic-cream">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="section-title mb-12">
            Why NY Collectors Choose Us
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-comic-yellow border-4 border-black shadow-comic mx-auto mb-4 flex items-center justify-center">
                <Truck size={36} />
              </div>
              <h3 className="font-comic text-xl uppercase mb-2">We Come to You</h3>
              <p className="text-gray-600">
                NYC traffic? No problem. We'll travel to your location anywhere in New York State.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-comic-red border-4 border-black shadow-comic mx-auto mb-4 flex items-center justify-center">
                <DollarSign size={36} className="text-white" />
              </div>
              <h3 className="font-comic text-xl uppercase mb-2">Fair NY Prices</h3>
              <p className="text-gray-600">
                We know the New York market. Get competitive offers based on current values.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-comic-blue border-4 border-black shadow-comic mx-auto mb-4 flex items-center justify-center">
                <Star size={36} className="text-white" />
              </div>
              <h3 className="font-comic text-xl uppercase mb-2">Trusted Reputation</h3>
              <p className="text-gray-600">
                99.9% positive feedback from thousands of satisfied New York sellers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-comic-red text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-comic text-4xl uppercase mb-6">
            Ready to Sell Your Comics in New York?
          </h2>
          <p className="text-xl mb-8">
            From Manhattan penthouses to Long Island basements, we buy comics everywhere in NY!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/sell#contact-form" className="comic-button-primary text-xl">
              Get Free NY Quote
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
