'use client';

import { motion } from 'framer-motion';
import { Award, Shield, Heart, Zap } from 'lucide-react';

const features = [
  {
    icon: Award,
    title: '99.9% Positive',
    description: 'Trusted by collectors with near-perfect feedback rating',
    color: 'bg-comic-yellow',
  },
  {
    icon: Shield,
    title: 'Authentic Items',
    description: 'Every item carefully verified and accurately described',
    color: 'bg-comic-blue',
  },
  {
    icon: Heart,
    title: 'Collector Passion',
    description: 'Fellow collector who understands what matters to you',
    color: 'bg-comic-red',
  },
  {
    icon: Zap,
    title: 'Fast Shipping',
    description: 'Quick turnaround with secure packaging',
    color: 'bg-hero-green',
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-comic-cream">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Comic Collection Image */}
            <div className="relative aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-comic-yellow border-4 border-black shadow-comic-lg transform rotate-3" />
              <div className="absolute inset-0 bg-comic-red border-4 border-black shadow-comic transform -rotate-3" />
              <div className="relative border-4 border-black aspect-square overflow-hidden">
                <img
                  src="/images/generated/comic-collection.png"
                  alt="Comic book collection"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Decorative Burst */}
            <div className="absolute -top-4 -right-4 bg-comic-red text-white font-comic text-lg px-4 py-2 border-4 border-black shadow-comic transform rotate-12 hidden md:block">
              LEGEND!
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title text-left mb-6">
              <span className="text-comic-red">Meet</span>{' '}
              <span className="text-comic-blue">Tony</span>
            </h2>

            <div className="space-y-4 text-lg text-gray-700 mb-8">
              <p>
                Welcome to VanesaSellingComics! I&apos;m Tony, a lifelong collector and
                passionate seller of comics, vintage toys, modern collectibles, and LEGOs.
              </p>
              <p>
                What started as a personal collection has grown into a thriving community
                of fellow collectors. Whether you&apos;re hunting for that key issue, a
                nostalgic toy from your childhood, or the latest LEGO set, I&apos;ve got
                you covered.
              </p>
              <p>
                I take pride in accurate grading, detailed descriptions, and treating
                every item with the care it deserves. When you buy from me, you&apos;re
                not just getting a product &mdash; you&apos;re getting a fellow collector
                who understands the value of what you&apos;re adding to your collection.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3 p-4 bg-white border-4 border-black shadow-comic"
                >
                  <div className={`p-2 ${feature.color} border-2 border-black flex-shrink-0`}>
                    <feature.icon size={20} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-comic text-sm uppercase">{feature.title}</h4>
                    <p className="text-xs text-gray-600">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
