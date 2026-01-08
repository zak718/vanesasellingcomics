import { Metadata } from 'next';
import Link from 'next/link';
import { Calendar, Clock, ArrowLeft, CheckCircle, Heart, FileText, Users } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Selling Inherited Comic Books: Estate Guide | VanesaSellingComics',
  description: 'Inherited a comic book collection? This guide helps estate executors and family members understand how to properly value and sell inherited comics.',
  keywords: ['inherited comics', 'estate comic books', 'selling inherited collection', 'comic book estate sale', 'executor comic books'],
};

export default function SellingInheritedComics() {
  return (
    <article className="min-h-screen">
      {/* Hero */}
      <section className="py-16 bg-comic-cream">
        <div className="max-w-4xl mx-auto px-4">
          <Link href="/blog" className="inline-flex items-center gap-2 text-comic-blue hover:text-comic-red mb-6">
            <ArrowLeft size={16} />
            Back to Blog
          </Link>

          <span className="inline-block px-3 py-1 bg-vintage-gold text-white text-xs font-comic uppercase border-2 border-black mb-4">
            Estate Sales
          </span>

          <h1 className="font-comic text-3xl md:text-5xl uppercase tracking-tight mb-4">
            Selling Inherited Comic Books: What You Need to Know
          </h1>

          <div className="flex items-center gap-4 text-gray-600 mb-6">
            <span className="flex items-center gap-1">
              <Calendar size={16} />
              January 4, 2026
            </span>
            <span className="flex items-center gap-1">
              <Clock size={16} />
              8 min read
            </span>
          </div>

          <p className="text-xl text-gray-700">
            Losing a loved one is never easy, and dealing with their belongings can be overwhelming.
            If you've inherited a comic book collection, this guide will help you navigate the process
            with respect and get fair value.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 prose prose-lg max-w-none">

          <div className="bg-comic-cream border-4 border-black p-6 my-6">
            <div className="flex items-center gap-3 mb-4">
              <Heart className="text-comic-red" size={28} />
              <h3 className="font-comic text-xl uppercase m-0">A Note on Sentiment</h3>
            </div>
            <p className="m-0 text-gray-700">
              Comics often represent decades of someone's passion and memories. Take your time
              with this process. There's no rush, and it's okay to feel conflicted about selling.
              Many buyers, including us, understand the emotional weight of these decisions.
            </p>
          </div>

          <h2 className="font-comic text-2xl uppercase text-comic-blue">
            Step 1: Don't Throw Anything Away
          </h2>

          <p>
            This is the most important advice we can give. Before you assume something is worthless:
          </p>

          <ul className="list-none space-y-2">
            <li className="flex items-start gap-2">
              <CheckCircle className="text-hero-green mt-1 flex-shrink-0" size={18} />
              <span>Even damaged, incomplete comics can have value</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="text-hero-green mt-1 flex-shrink-0" size={18} />
              <span>Comic-related items (posters, toys, magazines) may be collectible</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="text-hero-green mt-1 flex-shrink-0" size={18} />
              <span>Original art, sketches, or signed items could be extremely valuable</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="text-hero-green mt-1 flex-shrink-0" size={18} />
              <span>Storage boxes themselves might contain surprises</span>
            </li>
          </ul>

          <h2 className="font-comic text-2xl uppercase text-comic-blue mt-12">
            Step 2: Document Everything
          </h2>

          <p>
            Before moving or selling anything, create a record:
          </p>

          <div className="grid md:grid-cols-2 gap-4 my-6">
            <div className="p-4 bg-comic-cream border-4 border-black">
              <div className="flex items-center gap-2 mb-2">
                <FileText className="text-comic-blue" size={24} />
                <h4 className="font-comic uppercase m-0">Photos</h4>
              </div>
              <p className="text-sm text-gray-600 m-0">
                Take photos of boxes, stacks, and individual notable issues.
                This helps with insurance and getting quotes.
              </p>
            </div>
            <div className="p-4 bg-comic-cream border-4 border-black">
              <div className="flex items-center gap-2 mb-2">
                <FileText className="text-comic-blue" size={24} />
                <h4 className="font-comic uppercase m-0">Inventory List</h4>
              </div>
              <p className="text-sm text-gray-600 m-0">
                Even a rough count helps: "Approximately 500 comics, mostly Marvel 1980s-1990s"
              </p>
            </div>
          </div>

          <h2 className="font-comic text-2xl uppercase text-comic-blue mt-12">
            Step 3: Understand Your Options
          </h2>

          <h3 className="font-comic text-xl uppercase">Option A: Sell to a Professional Buyer</h3>
          <p>
            <strong>Best for:</strong> Large collections, estates that need to be settled quickly,
            people who don't want to deal with individual sales.
          </p>
          <p>
            A professional buyer (like us) will:
          </p>
          <ul>
            <li>Come to the location</li>
            <li>Assess everything on-site</li>
            <li>Make an offer for the entire collection</li>
            <li>Handle all the heavy lifting</li>
            <li>Pay immediately</li>
          </ul>

          <h3 className="font-comic text-xl uppercase">Option B: Consignment</h3>
          <p>
            <strong>Best for:</strong> High-value individual items when you have time to wait
            for maximum returns.
          </p>
          <p>
            Auction houses like Heritage or ComicLink can sell valuable keys for top dollar,
            but take 10-20% commission and may take months to sell.
          </p>

          <h3 className="font-comic text-xl uppercase">Option C: DIY Sales</h3>
          <p>
            <strong>Best for:</strong> Those with time, knowledge, and patience to list
            items individually on eBay or at conventions.
          </p>

          <h2 className="font-comic text-2xl uppercase text-comic-blue mt-12">
            Step 4: Working with Estate Attorneys
          </h2>

          <p>
            If you're an executor handling an estate:
          </p>

          <ul className="list-none space-y-2">
            <li className="flex items-start gap-2">
              <CheckCircle className="text-hero-green mt-1 flex-shrink-0" size={18} />
              <span><strong>Get a written appraisal</strong> for estate tax purposes if the collection may be valuable</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="text-hero-green mt-1 flex-shrink-0" size={18} />
              <span><strong>Document all sales</strong> with receipts for probate records</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="text-hero-green mt-1 flex-shrink-0" size={18} />
              <span><strong>Consult the attorney</strong> before distributing or selling if there are multiple heirs</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="text-hero-green mt-1 flex-shrink-0" size={18} />
              <span><strong>Keep records for 7 years</strong> minimum for tax purposes</span>
            </li>
          </ul>

          <h2 className="font-comic text-2xl uppercase text-comic-blue mt-12">
            What Makes Estate Collections Special
          </h2>

          <p>
            Long-held collections often contain treasures that newer collectors don't have:
          </p>

          <div className="grid md:grid-cols-3 gap-4 my-6">
            <div className="p-4 bg-hero-green/10 border-4 border-hero-green text-center">
              <h4 className="font-comic uppercase">Pre-1980 Comics</h4>
              <p className="text-sm text-gray-600 m-0">
                Silver and Bronze Age issues that are increasingly rare
              </p>
            </div>
            <div className="p-4 bg-comic-blue/10 border-4 border-comic-blue text-center">
              <h4 className="font-comic uppercase">Complete Runs</h4>
              <p className="text-sm text-gray-600 m-0">
                Full series that collectors spent years assembling
              </p>
            </div>
            <div className="p-4 bg-vintage-gold/20 border-4 border-vintage-gold text-center">
              <h4 className="font-comic uppercase">Original Storage</h4>
              <p className="text-sm text-gray-600 m-0">
                Comics stored properly for decades, often in great condition
              </p>
            </div>
          </div>

          <div className="bg-comic-yellow border-4 border-black p-6 my-12">
            <div className="flex items-center gap-3 mb-4">
              <Users className="text-black" size={28} />
              <h3 className="font-comic text-2xl uppercase m-0">We Specialize in Estate Collections</h3>
            </div>
            <p className="mb-4">
              We work with families and estate executors throughout NY, NJ, PA, and MD.
              We're respectful, thorough, and can work directly with attorneys when needed.
              Free, no-obligation consultations.
            </p>
            <Link href="/sell" className="comic-button-primary">
              Get Estate Consultation
            </Link>
          </div>

        </div>
      </section>
    </article>
  );
}
