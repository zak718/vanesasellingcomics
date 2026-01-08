'use client';

import { motion } from 'framer-motion';
import { ExternalLink, BookOpen, Gamepad2, Sparkles, Blocks } from 'lucide-react';
import { SITE_CONFIG, PLACEHOLDER_PRODUCTS, CATEGORIES } from '@/lib/constants';

const iconMap: Record<string, React.ElementType> = {
  BookOpen,
  Gamepad2,
  Sparkles,
  Blocks,
};

const badgeColors: Record<string, string> = {
  HOT: 'bg-comic-red text-white',
  RARE: 'bg-vintage-gold text-white',
  NEW: 'bg-hero-green text-white',
  CLASSIC: 'bg-comic-blue text-white',
  VINTAGE: 'bg-purple-600 text-white',
};

export default function FeaturedProducts() {
  return (
    <section id="shop" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="section-title mb-4">
            <span className="text-comic-red">Featured</span>{' '}
            <span className="text-comic-blue">Products</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Check out some of our hottest items! New inventory added daily.
          </p>
        </motion.div>

        {/* Category Pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {CATEGORIES.map((category) => {
            const Icon = iconMap[category.icon];
            return (
              <button
                key={category.id}
                className="flex items-center gap-2 px-5 py-2 bg-comic-cream border-4 border-black shadow-comic font-comic uppercase tracking-wide hover:bg-comic-yellow transition-colors"
              >
                {Icon && <Icon size={18} />}
                {category.label}
              </button>
            );
          })}
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PLACEHOLDER_PRODUCTS.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="comic-card group"
            >
              {/* Image Placeholder */}
              <div className="relative aspect-square bg-gradient-to-br from-gray-100 to-gray-200 border-4 border-black mb-4 overflow-hidden">
                {/* Placeholder Icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-gray-400">
                    <svg className="w-20 h-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>

                {/* Badge */}
                {product.badge && (
                  <div className={`absolute top-2 right-2 px-3 py-1 font-comic text-sm border-2 border-black ${badgeColors[product.badge] || 'bg-gray-500 text-white'}`}>
                    {product.badge}
                  </div>
                )}

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
              </div>

              {/* Product Info */}
              <h3 className="font-comic text-lg uppercase mb-2 group-hover:text-comic-red transition-colors">
                {product.title}
              </h3>
              <div className="flex items-center justify-between">
                <span className="font-comic text-2xl text-comic-blue">
                  {product.price}
                </span>
                <span className="text-sm text-gray-500 uppercase">
                  {product.category.replace('-', ' ')}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href={SITE_CONFIG.ebayStore}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 comic-button-primary text-xl"
          >
            View All on eBay
            <ExternalLink size={20} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
