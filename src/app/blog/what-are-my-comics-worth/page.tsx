import { Metadata } from 'next';
import Link from 'next/link';
import { Calendar, Clock, ArrowLeft, CheckCircle, DollarSign, TrendingUp, AlertTriangle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'What Are My Comic Books Worth? Valuation Guide | VanesaSellingComics',
  description: 'Learn how to determine the value of your comic book collection. Expert guide covering grading, key issues, market trends, and getting accurate appraisals.',
  keywords: ['comic book value', 'what are my comics worth', 'comic book appraisal', 'comic grading', 'valuable comics'],
};

export default function WhatAreMyComicsWorth() {
  return (
    <article className="min-h-screen">
      {/* Hero */}
      <section className="py-16 bg-comic-cream">
        <div className="max-w-4xl mx-auto px-4">
          <Link href="/blog" className="inline-flex items-center gap-2 text-comic-blue hover:text-comic-red mb-6">
            <ArrowLeft size={16} />
            Back to Blog
          </Link>

          <span className="inline-block px-3 py-1 bg-comic-yellow text-black text-xs font-comic uppercase border-2 border-black mb-4">
            Valuation
          </span>

          <h1 className="font-comic text-3xl md:text-5xl uppercase tracking-tight mb-4">
            What Are My Comic Books Worth? A Collector's Valuation Guide
          </h1>

          <div className="flex items-center gap-4 text-gray-600 mb-6">
            <span className="flex items-center gap-1">
              <Calendar size={16} />
              January 6, 2026
            </span>
            <span className="flex items-center gap-1">
              <Clock size={16} />
              10 min read
            </span>
          </div>

          <p className="text-xl text-gray-700">
            Whether you found comics in grandpa's attic or you're looking to sell your childhood collection,
            understanding comic book values is the first step to getting a fair price.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 prose prose-lg max-w-none">

          <h2 className="font-comic text-2xl uppercase text-comic-blue">
            The Four Pillars of Comic Value
          </h2>

          <div className="grid md:grid-cols-2 gap-4 my-6">
            <div className="p-4 bg-comic-cream border-4 border-black">
              <div className="flex items-center gap-2 mb-2">
                <DollarSign className="text-hero-green" size={24} />
                <h4 className="font-comic uppercase text-lg m-0">1. Key Issue Status</h4>
              </div>
              <p className="text-sm text-gray-600 m-0">
                First appearances, origins, deaths, and significant storylines command premium prices.
                Amazing Fantasy #15, Action Comics #1, and Giant-Size X-Men #1 are legendary examples.
              </p>
            </div>
            <div className="p-4 bg-comic-cream border-4 border-black">
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle className="text-comic-blue" size={24} />
                <h4 className="font-comic uppercase text-lg m-0">2. Condition/Grade</h4>
              </div>
              <p className="text-sm text-gray-600 m-0">
                A comic's condition can mean the difference between $100 and $10,000.
                Professional grading (CGC, CBCS) provides standardized assessment.
              </p>
            </div>
            <div className="p-4 bg-comic-cream border-4 border-black">
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp className="text-comic-red" size={24} />
                <h4 className="font-comic uppercase text-lg m-0">3. Market Demand</h4>
              </div>
              <p className="text-sm text-gray-600 m-0">
                MCU movies, TV shows, and pop culture drive demand. Characters about to appear
                on screen often see price spikes.
              </p>
            </div>
            <div className="p-4 bg-comic-cream border-4 border-black">
              <div className="flex items-center gap-2 mb-2">
                <AlertTriangle className="text-vintage-gold" size={24} />
                <h4 className="font-comic uppercase text-lg m-0">4. Rarity/Age</h4>
              </div>
              <p className="text-sm text-gray-600 m-0">
                Older comics (Golden/Silver Age) are naturally rarer due to paper drives,
                poor storage, and simply being read to pieces.
              </p>
            </div>
          </div>

          <h2 className="font-comic text-2xl uppercase text-comic-blue mt-12">
            Comic Book Eras and Their Values
          </h2>

          <div className="overflow-x-auto my-6">
            <table className="w-full border-4 border-black">
              <thead className="bg-comic-yellow">
                <tr>
                  <th className="p-3 text-left font-comic uppercase">Era</th>
                  <th className="p-3 text-left font-comic uppercase">Years</th>
                  <th className="p-3 text-left font-comic uppercase">Value Range</th>
                  <th className="p-3 text-left font-comic uppercase">Notes</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t-2 border-black">
                  <td className="p-3 font-bold">Golden Age</td>
                  <td className="p-3">1938-1956</td>
                  <td className="p-3 text-hero-green font-bold">$$$$$</td>
                  <td className="p-3">Superman, Batman, Captain America debuts. Extremely valuable.</td>
                </tr>
                <tr className="border-t-2 border-black bg-gray-50">
                  <td className="p-3 font-bold">Silver Age</td>
                  <td className="p-3">1956-1970</td>
                  <td className="p-3 text-hero-green font-bold">$$$$</td>
                  <td className="p-3">Marvel revolution. Spider-Man, X-Men, Fantastic Four.</td>
                </tr>
                <tr className="border-t-2 border-black">
                  <td className="p-3 font-bold">Bronze Age</td>
                  <td className="p-3">1970-1984</td>
                  <td className="p-3 text-comic-blue font-bold">$$$</td>
                  <td className="p-3">Darker themes. Wolverine, Punisher first appearances.</td>
                </tr>
                <tr className="border-t-2 border-black bg-gray-50">
                  <td className="p-3 font-bold">Copper Age</td>
                  <td className="p-3">1984-1991</td>
                  <td className="p-3 text-comic-blue font-bold">$$</td>
                  <td className="p-3">TMNT, Watchmen, Dark Knight Returns.</td>
                </tr>
                <tr className="border-t-2 border-black">
                  <td className="p-3 font-bold">Modern Age</td>
                  <td className="p-3">1991-Present</td>
                  <td className="p-3 font-bold">$-$$</td>
                  <td className="p-3">High print runs. Select keys still valuable.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="font-comic text-2xl uppercase text-comic-blue mt-12">
            Understanding Comic Grading
          </h2>

          <p>
            Condition is king in comics. Here's a quick guide to grading terminology:
          </p>

          <div className="space-y-3 my-6">
            <div className="flex items-center gap-3 p-3 bg-hero-green/10 border-l-4 border-hero-green">
              <span className="font-comic text-xl">9.8-10.0</span>
              <span className="font-bold">Near Mint/Mint</span>
              <span className="text-gray-600">- Nearly perfect. Highest values.</span>
            </div>
            <div className="flex items-center gap-3 p-3 bg-comic-blue/10 border-l-4 border-comic-blue">
              <span className="font-comic text-xl">8.0-9.6</span>
              <span className="font-bold">Very Fine to Near Mint</span>
              <span className="text-gray-600">- Minor wear. Still commands strong prices.</span>
            </div>
            <div className="flex items-center gap-3 p-3 bg-comic-yellow/30 border-l-4 border-comic-yellow">
              <span className="font-comic text-xl">6.0-7.5</span>
              <span className="font-bold">Fine to Very Fine</span>
              <span className="text-gray-600">- Noticeable wear but still presentable.</span>
            </div>
            <div className="flex items-center gap-3 p-3 bg-vintage-gold/20 border-l-4 border-vintage-gold">
              <span className="font-comic text-xl">4.0-5.5</span>
              <span className="font-bold">Very Good to Fine</span>
              <span className="text-gray-600">- Obvious wear. Creases, minor tears.</span>
            </div>
            <div className="flex items-center gap-3 p-3 bg-comic-red/10 border-l-4 border-comic-red">
              <span className="font-comic text-xl">1.0-3.5</span>
              <span className="font-bold">Poor to Good</span>
              <span className="text-gray-600">- Heavy wear. Still valuable if key issue.</span>
            </div>
          </div>

          <h2 className="font-comic text-2xl uppercase text-comic-blue mt-12">
            Where to Check Comic Values
          </h2>

          <ul className="list-none space-y-3">
            <li className="flex items-start gap-2">
              <CheckCircle className="text-hero-green mt-1 flex-shrink-0" size={18} />
              <div>
                <strong>eBay Sold Listings</strong> - The most accurate real-time prices.
                Always check "Sold" items, not active listings.
              </div>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="text-hero-green mt-1 flex-shrink-0" size={18} />
              <div>
                <strong>GoCollect.com</strong> - Excellent for CGC/CBCS graded comics.
                Shows price history and trends.
              </div>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="text-hero-green mt-1 flex-shrink-0" size={18} />
              <div>
                <strong>ComicsPriceGuide.com</strong> - Good baseline for raw comics.
                Updated regularly.
              </div>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="text-hero-green mt-1 flex-shrink-0" size={18} />
              <div>
                <strong>Key Collector Comics App</strong> - Identifies keys and provides values.
                Great for scanning large collections.
              </div>
            </li>
          </ul>

          <h2 className="font-comic text-2xl uppercase text-comic-blue mt-12">
            Common Valuation Mistakes
          </h2>

          <div className="bg-comic-red/10 border-4 border-comic-red p-6 my-6">
            <h4 className="font-comic text-xl text-comic-red uppercase mb-4">
              Avoid These Errors
            </h4>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <AlertTriangle className="text-comic-red mt-1 flex-shrink-0" size={18} />
                <span><strong>Using cover price:</strong> A $0.12 cover price doesn't mean it's worth $0.12!</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertTriangle className="text-comic-red mt-1 flex-shrink-0" size={18} />
                <span><strong>Overgrading condition:</strong> Most people grade their comics 2-3 grades too high.</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertTriangle className="text-comic-red mt-1 flex-shrink-0" size={18} />
                <span><strong>Assuming age = value:</strong> A 1992 X-Men #1 isn't valuable despite being 30+ years old (9 million printed).</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertTriangle className="text-comic-red mt-1 flex-shrink-0" size={18} />
                <span><strong>Ignoring variants:</strong> Newsstand editions and price variants can be worth more than direct editions.</span>
              </li>
            </ul>
          </div>

          <div className="bg-comic-yellow border-4 border-black p-6 my-12">
            <h3 className="font-comic text-2xl uppercase mb-4">
              Want a Professional Appraisal?
            </h3>
            <p className="mb-4">
              Skip the guesswork. We provide free, no-obligation appraisals for comic collections
              in NY, NJ, PA, and MD. We'll tell you exactly what your comics are worth.
            </p>
            <Link href="/sell" className="comic-button-primary">
              Get Free Appraisal
            </Link>
          </div>

        </div>
      </section>
    </article>
  );
}
