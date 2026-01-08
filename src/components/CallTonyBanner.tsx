'use client';

import { Phone, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { SITE_CONFIG } from '@/lib/constants';

interface CallTonyBannerProps {
  variant?: 'header' | 'floating' | 'inline' | 'hero';
}

export default function CallTonyBanner({ variant = 'inline' }: CallTonyBannerProps) {
  if (variant === 'header') {
    return (
      <div className="bg-comic-red text-white py-2 text-center">
        <a
          href={SITE_CONFIG.phoneLink}
          className="inline-flex items-center gap-2 hover:scale-105 transition-transform"
        >
          <Phone size={18} className="animate-pulse" />
          <span className="font-comic text-lg">
            CALL TONY NOW: <span className="underline">{SITE_CONFIG.phoneDisplay}</span>
          </span>
          <span className="hidden sm:inline text-sm ml-2">
            - Let's Talk Comics!
          </span>
        </a>
      </div>
    );
  }

  if (variant === 'floating') {
    return (
      <motion.a
        href={SITE_CONFIG.phoneLink}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 right-6 z-50 hidden sm:flex items-center gap-3 bg-comic-red text-white px-6 py-4 border-4 border-black shadow-comic-lg font-comic text-xl uppercase hover:bg-red-600 transition-colors"
      >
        <div className="relative">
          <img
            src="/images/generated/call-tony.png"
            alt="Call"
            className="w-12 h-12 object-contain"
          />
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-comic-yellow rounded-full animate-ping" />
        </div>
        <div>
          <div className="text-sm">Call Tony!</div>
          <div className="font-bold">{SITE_CONFIG.phoneDisplay}</div>
        </div>
      </motion.a>
    );
  }

  if (variant === 'hero') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="my-8"
      >
        <a
          href={SITE_CONFIG.phoneLink}
          className="inline-flex flex-col sm:flex-row items-center gap-4 bg-comic-red text-white px-8 py-6 border-4 border-black shadow-comic-lg hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all group"
        >
          <div className="relative">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center border-4 border-black">
              <Phone size={32} className="text-comic-red group-hover:animate-bounce" />
            </div>
            <span className="absolute -top-2 -right-2 bg-comic-yellow text-black text-xs font-comic px-2 py-1 border-2 border-black transform rotate-12">
              CALL!
            </span>
          </div>
          <div className="text-center sm:text-left">
            <div className="font-comic text-2xl sm:text-3xl uppercase">
              Call Tony Now!
            </div>
            <div className="font-comic text-3xl sm:text-4xl font-bold tracking-wide">
              {SITE_CONFIG.phoneDisplay}
            </div>
            <div className="text-sm mt-1 text-white/80">
              Comics, Toys, Collectibles - Let's Chat!
            </div>
          </div>
        </a>
      </motion.div>
    );
  }

  // Default inline variant
  return (
    <a
      href={SITE_CONFIG.phoneLink}
      className="inline-flex items-center gap-2 bg-comic-red text-white px-4 py-2 border-4 border-black shadow-comic font-comic uppercase hover:bg-red-600 transition-colors"
    >
      <Phone size={20} />
      <span>{SITE_CONFIG.phoneDisplay}</span>
    </a>
  );
}

// Sticky mobile call bar
export function MobileCallBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 sm:hidden bg-comic-red border-t-4 border-black">
      <a
        href={SITE_CONFIG.phoneLink}
        className="flex items-center justify-center gap-3 py-4 text-white"
      >
        <Phone size={24} className="animate-pulse" />
        <span className="font-comic text-xl uppercase">
          Call Tony: {SITE_CONFIG.phoneDisplay}
        </span>
      </a>
    </div>
  );
}
