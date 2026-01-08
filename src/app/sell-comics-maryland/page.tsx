import { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, Phone, CheckCircle, Star, Truck, DollarSign } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Sell Comic Books in Maryland | We Buy Comics Baltimore, Bethesda, Silver Spring',
  description: 'Selling comic books in Maryland? We buy comic collections in Baltimore, Bethesda, Silver Spring, Annapolis. Free appraisals, same-day cash, we come to you!',
  keywords: ['sell comics maryland', 'sell comics MD', 'comic book buyer baltimore', 'sell comic collection bethesda', 'we buy comics MD'],
};

const MD_AREAS = [
  { name: 'Baltimore Area', areas: ['Baltimore City', 'Baltimore County', 'Towson', 'Dundalk'] },
  { name: 'DC Suburbs', areas: ['Bethesda', 'Silver Spring', 'Rockville', 'Gaithersburg'] },
  { name: 'Central MD', areas: ['Columbia', 'Ellicott City', 'Annapolis', 'Bowie'] },
  { name: 'Other Areas', areas: ['Frederick', 'Hagerstown', 'Ocean City', 'Salisbury'] },
];

export default function SellComicsMaryland() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-comic-red via-comic-cream to-comic-yellow">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-vintage-gold text-white px-4 py-2 border-4 border-black shadow-comic mb-6">
            <MapPin size={20} />
            <span className="font-comic">MARYLAND</span>
          </div>

          <h1 className="font-comic text-4xl md:text-6xl uppercase tracking-tight mb-4">
            <span className="text-comic-red">Sell Your Comics</span>{' '}
            <span className="text-comic-blue">in Maryland</span>
          </h1>

          <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
            Maryland's trusted comic buyer. We cover <strong>Baltimore, the DC suburbs,
            and all of Maryland</strong>. Free home visits, honest appraisals, immediate payment.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="flex items-center gap-2 bg-white px-4 py-2 border-4 border-black shadow-comic">
              <Star className="text-comic-yellow" fill="#FFD700" size={18} />
              <span className="font-comic text-sm">99.9% POSITIVE</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-4 py-2 border-4 border-black shadow-comic">
              <Truck className="text-comic-blue" size={18} />
              <span className="font-comic text-sm">ALL OF MD</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-4 py-2 border-4 border-black shadow-comic">
              <DollarSign className="text-hero-green" size={18} />
              <span className="font-comic text-sm">CASH NOW</span>
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
              Get Free MD Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Areas We Serve */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="section-title mb-12">
            <span className="text-comic-red">Areas We</span>{' '}
            <span className="text-comic-blue">Serve in MD</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {MD_AREAS.map((region) => (
              <div key={region.name} className="comic-card">
                <h3 className="font-comic text-xl uppercase mb-4 text-vintage-gold">{region.name}</h3>
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

      {/* MD Content */}
      <section className="py-16 bg-comic-cream">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="section-title mb-8">
            Maryland & DC Area Experts
          </h2>
          <div className="max-w-3xl mx-auto text-lg text-gray-700 space-y-4">
            <p>
              The Baltimore-Washington corridor is home to some of the most dedicated comic
              collectors in the country. With multiple legendary comic shops and a thriving
              convention scene, Maryland collections often contain hidden treasures.
            </p>
            <p>
              We're familiar with the area and regularly buy collections from Baltimore row homes,
              Bethesda estates, and everywhere in between. DC suburb collectors – we come to you too!
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-night-blue text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-comic text-4xl uppercase mb-6">
            Old Line State, Fair Prices!
          </h2>
          <p className="text-xl mb-8">
            From Baltimore to Bethesda, we're your Maryland comic buyer!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/sell#contact-form" className="comic-button-primary text-xl">
              Get Free MD Quote
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
