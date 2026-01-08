import { Metadata } from 'next';
import Link from 'next/link';
import { Calendar, Clock, ArrowLeft, CheckCircle, AlertTriangle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'How to Sell Your Comic Book Collection: Complete 2024 Guide | VanesaSellingComics',
  description: 'The definitive guide to selling your comic book collection. Learn valuation, find buyers, avoid scams, and maximize your profits. Expert tips from a professional comic buyer.',
  keywords: ['how to sell comic books', 'sell comic collection', 'comic book selling guide', 'where to sell comics', 'selling comics for cash'],
};

export default function HowToSellComicCollection() {
  return (
    <article className="min-h-screen">
      {/* Hero */}
      <section className="py-16 bg-comic-cream">
        <div className="max-w-4xl mx-auto px-4">
          <Link href="/blog" className="inline-flex items-center gap-2 text-comic-blue hover:text-comic-red mb-6">
            <ArrowLeft size={16} />
            Back to Blog
          </Link>

          <span className="inline-block px-3 py-1 bg-comic-blue text-white text-xs font-comic uppercase border-2 border-black mb-4">
            Selling Guide
          </span>

          <h1 className="font-comic text-3xl md:text-5xl uppercase tracking-tight mb-4">
            How to Sell Your Comic Book Collection: The Complete Guide
          </h1>

          <div className="flex items-center gap-4 text-gray-600 mb-6">
            <span className="flex items-center gap-1">
              <Calendar size={16} />
              January 8, 2026
            </span>
            <span className="flex items-center gap-1">
              <Clock size={16} />
              12 min read
            </span>
          </div>

          <p className="text-xl text-gray-700">
            Whether you're downsizing, need cash, or inherited a collection you don't want,
            this guide covers everything you need to know about selling comic books for the best price.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 prose prose-lg max-w-none">

          <h2 className="font-comic text-2xl uppercase text-comic-blue">
            Step 1: Assess What You Have
          </h2>
          <p>
            Before selling anything, you need to understand what you're working with.
            Comic collections generally fall into these categories:
          </p>

          <div className="grid md:grid-cols-2 gap-4 my-6">
            <div className="p-4 bg-comic-cream border-4 border-black">
              <h4 className="font-comic uppercase text-lg mb-2">High-Value Keys</h4>
              <p className="text-sm text-gray-600">
                First appearances, origin stories, deaths of major characters.
                These deserve individual attention.
              </p>
            </div>
            <div className="p-4 bg-comic-cream border-4 border-black">
              <h4 className="font-comic uppercase text-lg mb-2">Mid-Range Issues</h4>
              <p className="text-sm text-gray-600">
                Notable issues worth $20-200 each. Worth selling individually or in small lots.
              </p>
            </div>
            <div className="p-4 bg-comic-cream border-4 border-black">
              <h4 className="font-comic uppercase text-lg mb-2">Reader Copies</h4>
              <p className="text-sm text-gray-600">
                Common issues in average condition. Best sold in bulk lots.
              </p>
            </div>
            <div className="p-4 bg-comic-cream border-4 border-black">
              <h4 className="font-comic uppercase text-lg mb-2">Dollar Bin Material</h4>
              <p className="text-sm text-gray-600">
                90s overprints, poor condition, common modern issues. Sell by the long box.
              </p>
            </div>
          </div>

          <h2 className="font-comic text-2xl uppercase text-comic-blue mt-12">
            Step 2: Know Your Selling Options
          </h2>

          <h3 className="font-comic text-xl uppercase">Option 1: Sell to a Professional Buyer (Like Us!)</h3>
          <div className="flex gap-2 flex-wrap my-4">
            <span className="flex items-center gap-1 px-3 py-1 bg-hero-green/20 text-hero-green text-sm rounded">
              <CheckCircle size={14} /> Fast and convenient
            </span>
            <span className="flex items-center gap-1 px-3 py-1 bg-hero-green/20 text-hero-green text-sm rounded">
              <CheckCircle size={14} /> No listing or shipping hassle
            </span>
            <span className="flex items-center gap-1 px-3 py-1 bg-hero-green/20 text-hero-green text-sm rounded">
              <CheckCircle size={14} /> Immediate cash
            </span>
            <span className="flex items-center gap-1 px-3 py-1 bg-comic-yellow/30 text-gray-700 text-sm rounded">
              <AlertTriangle size={14} /> 40-60% of retail value
            </span>
          </div>
          <p>
            <strong>Best for:</strong> Large collections, people who value convenience over maximum profit,
            estates, and those who need quick cash.
          </p>

          <h3 className="font-comic text-xl uppercase">Option 2: Sell on eBay</h3>
          <div className="flex gap-2 flex-wrap my-4">
            <span className="flex items-center gap-1 px-3 py-1 bg-hero-green/20 text-hero-green text-sm rounded">
              <CheckCircle size={14} /> Maximum exposure
            </span>
            <span className="flex items-center gap-1 px-3 py-1 bg-hero-green/20 text-hero-green text-sm rounded">
              <CheckCircle size={14} /> Best prices for keys
            </span>
            <span className="flex items-center gap-1 px-3 py-1 bg-comic-yellow/30 text-gray-700 text-sm rounded">
              <AlertTriangle size={14} /> Fees (13%+)
            </span>
            <span className="flex items-center gap-1 px-3 py-1 bg-comic-yellow/30 text-gray-700 text-sm rounded">
              <AlertTriangle size={14} /> Time consuming
            </span>
          </div>
          <p>
            <strong>Best for:</strong> High-value individual issues, people with time to list and ship,
            those comfortable with online selling.
          </p>

          <h3 className="font-comic text-xl uppercase">Option 3: Local Comic Shops</h3>
          <div className="flex gap-2 flex-wrap my-4">
            <span className="flex items-center gap-1 px-3 py-1 bg-hero-green/20 text-hero-green text-sm rounded">
              <CheckCircle size={14} /> In-person transaction
            </span>
            <span className="flex items-center gap-1 px-3 py-1 bg-hero-green/20 text-hero-green text-sm rounded">
              <CheckCircle size={14} /> Immediate cash
            </span>
            <span className="flex items-center gap-1 px-3 py-1 bg-comic-yellow/30 text-gray-700 text-sm rounded">
              <AlertTriangle size={14} /> Often lowball offers
            </span>
            <span className="flex items-center gap-1 px-3 py-1 bg-comic-yellow/30 text-gray-700 text-sm rounded">
              <AlertTriangle size={14} /> Limited buying capacity
            </span>
          </div>
          <p>
            <strong>Best for:</strong> Small collections, people who prefer in-person deals,
            quick sales of common material.
          </p>

          <h2 className="font-comic text-2xl uppercase text-comic-blue mt-12">
            Step 3: Price Research
          </h2>
          <p>
            Before accepting any offer, research current market values:
          </p>
          <ul className="list-none space-y-2">
            <li className="flex items-start gap-2">
              <CheckCircle className="text-hero-green mt-1 flex-shrink-0" size={18} />
              <span><strong>eBay Sold Listings:</strong> The gold standard for current prices. Check "Sold" items only, not active listings.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="text-hero-green mt-1 flex-shrink-0" size={18} />
              <span><strong>GoCollect:</strong> Excellent for graded comics (CGC/CBCS) price history.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="text-hero-green mt-1 flex-shrink-0" size={18} />
              <span><strong>ComicsPriceGuide.com:</strong> Good baseline for raw comics.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="text-hero-green mt-1 flex-shrink-0" size={18} />
              <span><strong>Key Collector Comics App:</strong> Identifies key issues in your collection.</span>
            </li>
          </ul>

          <h2 className="font-comic text-2xl uppercase text-comic-blue mt-12">
            Step 4: Avoid Common Mistakes
          </h2>

          <div className="bg-comic-red/10 border-4 border-comic-red p-6 my-6">
            <h4 className="font-comic text-xl text-comic-red uppercase mb-4">
              Red Flags When Selling Comics
            </h4>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <AlertTriangle className="text-comic-red mt-1 flex-shrink-0" size={18} />
                <span>Buyer won't give you a written offer</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertTriangle className="text-comic-red mt-1 flex-shrink-0" size={18} />
                <span>Pressure to decide immediately</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertTriangle className="text-comic-red mt-1 flex-shrink-0" size={18} />
                <span>Offer seems too low for valuable keys</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertTriangle className="text-comic-red mt-1 flex-shrink-0" size={18} />
                <span>No verifiable reputation or reviews</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertTriangle className="text-comic-red mt-1 flex-shrink-0" size={18} />
                <span>Payment in anything other than cash/check</span>
              </li>
            </ul>
          </div>

          <h2 className="font-comic text-2xl uppercase text-comic-blue mt-12">
            Step 5: Making the Sale
          </h2>
          <p>
            Once you've chosen your selling method and done your research:
          </p>
          <ol className="list-decimal pl-6 space-y-2">
            <li>Get multiple offers if selling to buyers</li>
            <li>Document everything with photos before the sale</li>
            <li>Get payment in your preferred method before releasing comics</li>
            <li>Keep records for tax purposes (large sales may be taxable)</li>
            <li>If shipping, use proper comic mailers and insurance</li>
          </ol>

          <div className="bg-comic-yellow border-4 border-black p-6 my-12">
            <h3 className="font-comic text-2xl uppercase mb-4">
              Ready to Sell? We're Here to Help!
            </h3>
            <p className="mb-4">
              At VanesaSellingComics, we make selling easy. We come to you, offer fair prices,
              and pay cash on the spot. Serving NY, NJ, PA, and MD.
            </p>
            <Link href="/sell" className="comic-button-primary">
              Get Your Free Quote
            </Link>
          </div>

        </div>
      </section>
    </article>
  );
}
