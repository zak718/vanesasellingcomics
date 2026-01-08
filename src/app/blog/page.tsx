import { Metadata } from 'next';
import Link from 'next/link';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Comic Book Collecting Blog | VanesaSellingComics',
  description: 'Expert guides on selling comic books, valuation tips, market insights, and collector resources from VanesaSellingComics.',
};

const BLOG_POSTS = [
  {
    slug: 'how-to-sell-comic-book-collection',
    title: 'How to Sell Your Comic Book Collection: The Complete Guide',
    excerpt: 'Everything you need to know about selling your comics - from valuation to finding the right buyer. Learn the best strategies for maximizing your collection\'s value.',
    date: 'January 8, 2026',
    readTime: '12 min read',
    category: 'Selling Guide',
  },
  {
    slug: 'what-are-my-comics-worth',
    title: 'What Are My Comic Books Worth? A Collector\'s Valuation Guide',
    excerpt: 'Learn how to assess the value of your comic collection. We cover grading, key issues, market trends, and common mistakes that cost sellers money.',
    date: 'January 6, 2026',
    readTime: '10 min read',
    category: 'Valuation',
  },
  {
    slug: 'selling-inherited-comics',
    title: 'Selling Inherited Comic Books: What Estate Executors Need to Know',
    excerpt: 'Inherited a comic collection? This guide helps estate executors and family members understand how to properly value and sell inherited comics.',
    date: 'January 4, 2026',
    readTime: '8 min read',
    category: 'Estate Sales',
  },
  {
    slug: 'signs-your-comics-are-valuable',
    title: '10 Signs Your Old Comics Might Be Worth Serious Money',
    excerpt: 'Not sure if your old comics are valuable? Here are 10 telltale signs that your collection might contain hidden gems worth hundreds or thousands.',
    date: 'January 2, 2026',
    readTime: '7 min read',
    category: 'Valuation',
  },
];

const categoryColors: Record<string, string> = {
  'Selling Guide': 'bg-comic-blue text-white',
  'Valuation': 'bg-comic-yellow text-black',
  'Estate Sales': 'bg-vintage-gold text-white',
};

export default function BlogPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-16 bg-comic-cream">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="font-comic text-4xl md:text-6xl uppercase tracking-tight mb-4">
            <span className="text-comic-blue">Comic</span>{' '}
            <span className="text-comic-red">Collector Blog</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Expert guides on selling comics, valuation tips, and market insights from
            Northeast's trusted comic buyer.
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="space-y-8">
            {BLOG_POSTS.map((post, index) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="block comic-card hover:shadow-comic-lg transition-shadow group"
              >
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Placeholder Image */}
                  <div className="w-full md:w-48 h-32 bg-gradient-to-br from-gray-100 to-gray-200 border-4 border-black flex items-center justify-center flex-shrink-0">
                    <span className="font-comic text-4xl text-gray-400">
                      {index + 1}
                    </span>
                  </div>

                  <div className="flex-1">
                    {/* Category */}
                    <span className={`inline-block px-3 py-1 text-xs font-comic uppercase border-2 border-black mb-3 ${categoryColors[post.category] || 'bg-gray-200'}`}>
                      {post.category}
                    </span>

                    {/* Title */}
                    <h2 className="font-comic text-xl md:text-2xl uppercase mb-2 group-hover:text-comic-red transition-colors">
                      {post.title}
                    </h2>

                    {/* Excerpt */}
                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>

                    {/* Meta */}
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <span className="flex items-center gap-1">
                        <Calendar size={14} />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock size={14} />
                        {post.readTime}
                      </span>
                      <span className="flex items-center gap-1 text-comic-blue font-medium ml-auto group-hover:gap-2 transition-all">
                        Read More <ArrowRight size={14} />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-comic-red text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-comic text-3xl uppercase mb-4">
            Ready to Sell Your Collection?
          </h2>
          <p className="text-lg mb-6">
            Skip the research - get a free quote from the experts!
          </p>
          <Link href="/sell" className="comic-button-primary text-xl">
            Get Free Quote
          </Link>
        </div>
      </section>
    </div>
  );
}
