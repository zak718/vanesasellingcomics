import { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, Phone, CheckCircle, Star, Truck, DollarSign } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Sell Comic Books in Pennsylvania | We Buy Comics Philadelphia, Pittsburgh, Allentown',
  description: 'Selling comic books in Pennsylvania? We buy comic collections in Philadelphia, Pittsburgh, Allentown, Reading. Free appraisals, same-day cash, we come to you!',
  keywords: ['sell comics pennsylvania', 'sell comics PA', 'comic book buyer philadelphia', 'sell comic collection pittsburgh', 'we buy comics PA'],
};

const PA_AREAS = [
  { name: 'Philadelphia Area', areas: ['Philadelphia', 'Bucks County', 'Montgomery County', 'Delaware County'] },
  { name: 'Lehigh Valley', areas: ['Allentown', 'Bethlehem', 'Easton', 'Reading'] },
  { name: 'Central PA', areas: ['Harrisburg', 'Lancaster', 'York', 'State College'] },
  { name: 'Western PA', areas: ['Pittsburgh', 'Erie', 'Scranton', 'Wilkes-Barre'] },
];

export default function SellComicsPennsylvania() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-comic-blue via-comic-cream to-comic-yellow">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-comic-blue text-white px-4 py-2 border-4 border-black shadow-comic mb-6">
            <MapPin size={20} />
            <span className="font-comic">PENNSYLVANIA</span>
          </div>

          <h1 className="font-comic text-4xl md:text-6xl uppercase tracking-tight mb-4">
            <span className="text-comic-blue">Sell Your Comics</span>{' '}
            <span className="text-comic-red">in Pennsylvania</span>
          </h1>

          <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
            From Philly to Pittsburgh and everywhere in between. We buy comic collections
            across <strong>all of Pennsylvania</strong>. Free appraisals, competitive offers, cash on the spot.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="flex items-center gap-2 bg-white px-4 py-2 border-4 border-black shadow-comic">
              <Star className="text-comic-yellow" fill="#FFD700" size={18} />
              <span className="font-comic text-sm">99.9% POSITIVE</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-4 py-2 border-4 border-black shadow-comic">
              <Truck className="text-comic-blue" size={18} />
              <span className="font-comic text-sm">STATEWIDE PA</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-4 py-2 border-4 border-black shadow-comic">
              <DollarSign className="text-hero-green" size={18} />
              <span className="font-comic text-sm">INSTANT CASH</span>
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
              Get Free PA Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Areas We Serve */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="section-title mb-12">
            <span className="text-comic-blue">Areas We</span>{' '}
            <span className="text-comic-red">Serve in PA</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PA_AREAS.map((region) => (
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

      {/* PA Content */}
      <section className="py-16 bg-comic-cream">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="section-title mb-8">
            Pennsylvania's Comic Buying Specialists
          </h2>
          <div className="max-w-3xl mx-auto text-lg text-gray-700 space-y-4">
            <p>
              Pennsylvania collectors have been building amazing collections for decades.
              From the legendary comic shops of Philadelphia to Pittsburgh's collector communities,
              PA has some of the best collections in the Northeast.
            </p>
            <p>
              We regularly travel the PA Turnpike to buy collections. Whether you have a few
              valuable keys or a warehouse full of long boxes, we're interested.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-comic-red text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-comic text-4xl uppercase mb-6">
            Keystone State, Top Dollar!
          </h2>
          <p className="text-xl mb-8">
            Your Pennsylvania comics deserve fair prices. Let's talk!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/sell#contact-form" className="comic-button-primary text-xl">
              Get Free PA Quote
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
