import { Metadata } from 'next';
import Link from 'next/link';
import { Calendar, Clock, ArrowLeft, Sparkles, DollarSign } from 'lucide-react';

export const metadata: Metadata = {
  title: '10 Signs Your Old Comics Might Be Worth Serious Money | VanesaSellingComics',
  description: 'Not sure if your old comics are valuable? Here are 10 telltale signs that your collection might contain hidden gems worth hundreds or thousands.',
  keywords: ['valuable comics', 'signs comics are valuable', 'rare comic books', 'expensive comics', 'comic book worth money'],
};

const SIGNS = [
  {
    number: 1,
    title: 'First Appearance of a Major Character',
    description: 'Comics introducing Spider-Man, Wolverine, Venom, Deadpool, or other popular characters are almost always valuable. Look for "1st appearance" or "origin" in guides.',
    examples: ['Amazing Fantasy #15 (Spider-Man)', 'Incredible Hulk #181 (Wolverine)', 'New Mutants #98 (Deadpool)'],
    valueRange: '$500 - $500,000+',
  },
  {
    number: 2,
    title: 'Cover Price is 12 Cents or Less',
    description: 'Comics with 10¢ or 12¢ cover prices are from the Silver Age (1956-1970) or earlier. These are automatically worth investigating.',
    examples: ['Any Marvel or DC from this era', 'Early Amazing Spider-Man', 'Fantastic Four #1-50'],
    valueRange: '$50 - $100,000+',
  },
  {
    number: 3,
    title: 'Issue Number is Very Low',
    description: 'Issue #1s are obviously collectible, but issues #2-10 of popular series are often valuable too. Early issues establish key characters and storylines.',
    examples: ['X-Men #1', 'Avengers #4 (Cap revival)', 'Iron Man #1'],
    valueRange: '$100 - $50,000+',
  },
  {
    number: 4,
    title: 'It\'s a "Newsstand" Edition from the 80s-90s',
    description: 'Comics sold at newsstands have a barcode. Direct editions have a small image. Newsstand editions are rarer and worth 2-10x more for many issues.',
    examples: ['Any newsstand variant from 1985-1999', 'Particularly valuable for key issues'],
    valueRange: '2-10x direct edition price',
  },
  {
    number: 5,
    title: 'Death or Major Event Story',
    description: 'Deaths of major characters, weddings, costume changes, and major storyline conclusions are collector favorites.',
    examples: ['Death of Superman', 'Death of Gwen Stacy (ASM #121)', 'Batman #497 (Bane breaks Batman)'],
    valueRange: '$50 - $5,000+',
  },
  {
    number: 6,
    title: 'Pre-Code Horror or Crime Comics',
    description: 'Horror and crime comics from before 1955 (pre-Comics Code) are highly collectible. EC Comics especially (Tales from the Crypt, Vault of Horror).',
    examples: ['Tales from the Crypt', 'Crime SuspenStories', 'Vault of Horror'],
    valueRange: '$100 - $10,000+',
  },
  {
    number: 7,
    title: 'It\'s Signed or Has Original Art',
    description: 'Signatures from famous creators add value, especially with verification. Original sketches on covers or inside can be worth thousands.',
    examples: ['Stan Lee signed comics', 'Creator sketches', 'Convention exclusives'],
    valueRange: '$50 - $5,000+ added value',
  },
  {
    number: 8,
    title: 'Canadian or UK Price Variant',
    description: 'Some comics have higher Canadian or UK prices printed on the cover. These variants are much rarer and can be worth significantly more.',
    examples: ['75¢ Canadian variants', 'UK pence variants', '1980s Marvel Canadian editions'],
    valueRange: '2-20x regular edition',
  },
  {
    number: 9,
    title: 'It\'s in Amazing Condition',
    description: 'Even common comics become valuable in pristine condition. If it looks like it was never read, stored flat, no spine stress - it could grade high.',
    examples: ['Any comic grading 9.6+ by CGC', 'Unread newsstand copies', 'Properly stored since purchase'],
    valueRange: '5-50x low grade price',
  },
  {
    number: 10,
    title: 'It Features a Character Coming to Screen',
    description: 'When a character is announced for an MCU movie or TV show, their first appearance can skyrocket. Stay informed about upcoming productions.',
    examples: ['Ms. Marvel before Disney+ show', 'Shang-Chi before movie', 'Thunderbolts keys currently rising'],
    valueRange: 'Highly variable - can 10x overnight',
  },
];

export default function SignsYourComicsAreValuable() {
  return (
    <article className="min-h-screen">
      {/* Hero */}
      <section className="py-16 bg-gradient-to-br from-comic-yellow via-comic-cream to-comic-blue/20">
        <div className="max-w-4xl mx-auto px-4">
          <Link href="/blog" className="inline-flex items-center gap-2 text-comic-blue hover:text-comic-red mb-6">
            <ArrowLeft size={16} />
            Back to Blog
          </Link>

          <span className="inline-block px-3 py-1 bg-comic-yellow text-black text-xs font-comic uppercase border-2 border-black mb-4">
            Valuation
          </span>

          <h1 className="font-comic text-3xl md:text-5xl uppercase tracking-tight mb-4">
            10 Signs Your Old Comics Might Be Worth Serious Money
          </h1>

          <div className="flex items-center gap-4 text-gray-600 mb-6">
            <span className="flex items-center gap-1">
              <Calendar size={16} />
              January 2, 2026
            </span>
            <span className="flex items-center gap-1">
              <Clock size={16} />
              7 min read
            </span>
          </div>

          <p className="text-xl text-gray-700">
            That box of comics in your closet could be hiding a fortune. Here are the
            telltale signs that your old comics might be more valuable than you think.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4">

          <div className="space-y-8">
            {SIGNS.map((sign) => (
              <div key={sign.number} className="border-4 border-black shadow-comic overflow-hidden">
                {/* Header */}
                <div className="bg-comic-cream p-4 border-b-4 border-black flex items-center gap-4">
                  <div className="w-12 h-12 bg-comic-red text-white font-comic text-2xl flex items-center justify-center border-4 border-black">
                    {sign.number}
                  </div>
                  <h2 className="font-comic text-xl uppercase m-0 flex-1">{sign.title}</h2>
                </div>

                {/* Body */}
                <div className="p-4 bg-white">
                  <p className="text-gray-700 mb-4">{sign.description}</p>

                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex-1">
                      <h4 className="font-comic text-sm uppercase text-gray-500 mb-2">Examples:</h4>
                      <ul className="text-sm space-y-1">
                        {sign.examples.map((example, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <Sparkles size={12} className="text-comic-yellow" />
                            {example}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="md:w-48 p-3 bg-hero-green/10 border-2 border-hero-green">
                      <h4 className="font-comic text-sm uppercase text-gray-500 mb-1">Value Range:</h4>
                      <div className="flex items-center gap-2">
                        <DollarSign size={16} className="text-hero-green" />
                        <span className="font-bold text-hero-green">{sign.valueRange}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-comic-yellow border-4 border-black p-6 mt-12">
            <h3 className="font-comic text-2xl uppercase mb-4">
              Think You Have Something Valuable?
            </h3>
            <p className="mb-4">
              Don't guess - get a professional opinion. We provide free appraisals for
              comic collections throughout the Northeast. No obligation, just honest answers.
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
