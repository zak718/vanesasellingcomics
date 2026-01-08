'use client';

import { motion } from 'framer-motion';
import { Calendar, Clock, Tv, Bell } from 'lucide-react';
import { SITE_CONFIG, PLACEHOLDER_SCHEDULE } from '@/lib/constants';

const categoryColors: Record<string, string> = {
  'Comics': 'bg-comic-red',
  'Vintage Toys': 'bg-vintage-gold',
  'LEGOs': 'bg-comic-blue',
  'Modern Toys': 'bg-hero-green',
};

export default function WhatnotSchedule() {
  return (
    <section id="schedule" className="py-20 bg-night-blue relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            transparent,
            transparent 10px,
            #FFD700 10px,
            #FFD700 11px
          )`
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-3 bg-comic-red px-6 py-2 border-4 border-black shadow-comic mb-6">
            <Tv className="text-white" size={24} />
            <span className="font-comic text-xl text-white uppercase">Live on Whatnot</span>
          </div>
          <h2 className="section-title text-white mb-4">
            Upcoming Shows
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Catch us live for exclusive deals, auctions, and fun! Follow on Whatnot to get notified.
          </p>
        </motion.div>

        {/* Schedule Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {PLACEHOLDER_SCHEDULE.map((show, index) => (
            <motion.div
              key={show.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="bg-white border-4 border-black shadow-comic-lg p-6 group hover:scale-[1.02] transition-transform"
            >
              {/* Category Badge */}
              <div className={`inline-block px-4 py-1 font-comic text-sm text-white uppercase border-2 border-black mb-4 ${categoryColors[show.category] || 'bg-gray-500'}`}>
                {show.category}
              </div>

              {/* Show Title */}
              <h3 className="font-comic text-2xl uppercase mb-4 group-hover:text-comic-red transition-colors">
                {show.title}
              </h3>

              {/* Date & Time */}
              <div className="flex flex-col gap-2 mb-4">
                <div className="flex items-center gap-2 text-gray-600">
                  <Calendar size={18} className="text-comic-blue" />
                  <span className="font-medium">{show.date}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Clock size={18} className="text-comic-red" />
                  <span className="font-medium">{show.time}</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-600 mb-4">
                {show.description}
              </p>

              {/* Reminder Button */}
              <button className="w-full flex items-center justify-center gap-2 py-2 bg-comic-yellow border-4 border-black font-comic uppercase tracking-wide hover:bg-yellow-400 transition-colors shadow-comic hover:translate-x-1 hover:translate-y-1 hover:shadow-none">
                <Bell size={18} />
                Set Reminder
              </button>
            </motion.div>
          ))}
        </div>

        {/* Follow CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <a
            href={SITE_CONFIG.whatnotProfile}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 comic-button-secondary text-xl"
          >
            <Tv size={24} />
            Follow on Whatnot
          </a>
          <p className="text-gray-400 mt-4">
            Get notified when we go live!
          </p>
        </motion.div>
      </div>
    </section>
  );
}
