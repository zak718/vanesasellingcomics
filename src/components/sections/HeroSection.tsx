'use client';

import { motion } from 'framer-motion';
import { ShoppingBag, Tv, Star, Package, Users } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/constants';

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/images/generated/hero-banner.png)' }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-comic-yellow/70 via-comic-cream/80 to-comic-blue/60" />
      <div className="absolute inset-0 halftone-overlay" />

      {/* Comic Burst Decorations */}
      <div className="absolute top-10 right-10 hidden lg:block">
        <motion.div
          initial={{ scale: 0, rotate: -20 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ delay: 0.5, type: 'spring' }}
          className="bg-comic-red text-white font-comic text-2xl px-6 py-4 border-4 border-black shadow-comic transform rotate-12"
        >
          POW!
        </motion.div>
      </div>
      <div className="absolute bottom-20 left-10 hidden lg:block">
        <motion.div
          initial={{ scale: 0, rotate: 20 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ delay: 0.7, type: 'spring' }}
          className="bg-comic-blue text-white font-comic text-xl px-5 py-3 border-4 border-black shadow-comic transform -rotate-6"
        >
          BOOM!
        </motion.div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 text-center">
        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="font-comic text-5xl md:text-7xl lg:text-8xl uppercase tracking-tight mb-4">
            <span className="text-shadow-comic gradient-text">
              {SITE_CONFIG.name}
            </span>
          </h1>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-comic text-xl md:text-2xl lg:text-3xl text-comic-black mb-8 uppercase tracking-wide"
        >
          {SITE_CONFIG.tagline}
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto mb-10"
        >
          Welcome to my page! New items added every day. Follow and check out the store!
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
        >
          <a
            href={SITE_CONFIG.ebayStore}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 comic-button-primary text-lg md:text-xl"
          >
            <ShoppingBag size={24} />
            Shop on eBay
          </a>
          <a
            href={SITE_CONFIG.whatnotProfile}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 comic-button-secondary text-lg md:text-xl"
          >
            <Tv size={24} />
            Watch Live on Whatnot
          </a>
        </motion.div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="inline-flex flex-wrap justify-center gap-6 md:gap-12 bg-white border-4 border-black shadow-comic-lg px-8 py-6"
        >
          <div className="flex items-center gap-3">
            <div className="bg-comic-yellow p-3 border-4 border-black">
              <Star className="text-black" size={24} />
            </div>
            <div className="text-left">
              <div className="font-comic text-2xl md:text-3xl text-comic-red">
                {SITE_CONFIG.stats.feedback}
              </div>
              <div className="text-sm text-gray-600 uppercase tracking-wide">
                Positive Feedback
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="bg-comic-red p-3 border-4 border-black">
              <Package className="text-white" size={24} />
            </div>
            <div className="text-left">
              <div className="font-comic text-2xl md:text-3xl text-comic-blue">
                {SITE_CONFIG.stats.itemsSold}
              </div>
              <div className="text-sm text-gray-600 uppercase tracking-wide">
                Items Sold
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="bg-comic-blue p-3 border-4 border-black">
              <Users className="text-white" size={24} />
            </div>
            <div className="text-left">
              <div className="font-comic text-2xl md:text-3xl text-vintage-gold">
                {SITE_CONFIG.stats.followers}
              </div>
              <div className="text-sm text-gray-600 uppercase tracking-wide">
                Followers
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-8 h-12 border-4 border-black rounded-full flex items-start justify-center p-2"
        >
          <div className="w-2 h-3 bg-comic-red rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
