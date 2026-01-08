'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  MapPin, Phone, Mail, Camera, Package, DollarSign,
  Truck, Clock, Shield, CheckCircle, Star, Upload,
  ChevronDown
} from 'lucide-react';
import { SITE_CONFIG } from '@/lib/constants';

const SERVICE_AREAS = [
  { state: 'New York', cities: ['NYC', 'Long Island', 'Westchester', 'Buffalo', 'Albany'] },
  { state: 'New Jersey', cities: ['Newark', 'Jersey City', 'Trenton', 'Atlantic City'] },
  { state: 'Pennsylvania', cities: ['Philadelphia', 'Pittsburgh', 'Allentown', 'Reading'] },
  { state: 'Maryland', cities: ['Baltimore', 'Bethesda', 'Silver Spring', 'Annapolis'] },
];

const WHAT_WE_BUY = [
  { title: 'Long Boxes', desc: 'Any quantity, any condition' },
  { title: 'Complete Collections', desc: 'Golden Age to Modern' },
  { title: 'Estate Collections', desc: 'We handle everything' },
  { title: 'Storage Units', desc: 'Full cleanouts welcome' },
  { title: 'Graded Comics', desc: 'CGC, CBCS slabs' },
  { title: 'Key Issues', desc: 'First appearances, origins' },
];

const PROCESS_STEPS = [
  { icon: Phone, title: 'Call Tony', desc: 'Call (646) 460-5596 or fill out the form' },
  { icon: Camera, title: 'Send Photos', desc: 'Share pics of what you have' },
  { icon: DollarSign, title: 'Get Quote', desc: 'We provide a fair offer' },
  { icon: Truck, title: 'We Come To You', desc: 'Free pickup anywhere in our service area' },
  { icon: CheckCircle, title: 'Get Paid', desc: 'Cash or check, same day' },
];

const FAQ = [
  {
    q: 'How do I know if my comics are valuable?',
    a: 'Key factors include age (pre-1980 especially), condition, first appearances of characters, and rarity. Send us photos and we\'ll give you a free assessment!'
  },
  {
    q: 'Do you buy comics in poor condition?',
    a: 'Yes! We buy comics in ALL conditions. Even damaged comics can have value, especially older issues.'
  },
  {
    q: 'How far will you travel?',
    a: 'We service all of New York, New Jersey, Pennsylvania, and Maryland. For large collections, we\'ll travel even further.'
  },
  {
    q: 'How fast can you come?',
    a: 'Often within 24-48 hours for local pickups. We work around your schedule.'
  },
  {
    q: 'What about inherited collections?',
    a: 'We specialize in estate collections. We\'re respectful, thorough, and can work with attorneys or executors directly.'
  },
];

export default function SellPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    zip: '',
    collectionSize: '',
    description: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsLoading(false);
    setIsSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-comic-yellow via-comic-cream to-comic-blue/20 overflow-hidden">
        <div className="absolute inset-0 halftone-overlay" />

        {/* Comic Bursts */}
        <div className="absolute top-10 left-10 hidden lg:block">
          <div className="bg-hero-green text-white font-comic text-xl px-5 py-3 border-4 border-black shadow-comic transform -rotate-12">
            CA$H!
          </div>
        </div>
        <div className="absolute bottom-20 right-10 hidden lg:block">
          <div className="bg-comic-red text-white font-comic text-2xl px-6 py-4 border-4 border-black shadow-comic transform rotate-6">
            WE BUY!
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-comic text-4xl md:text-6xl lg:text-7xl uppercase tracking-tight mb-4">
              <span className="text-comic-red">Sell Your</span>{' '}
              <span className="text-comic-blue">Comic Collection</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto mb-8"
          >
            We come to YOU! Free appraisals, fair prices, and same-day cash for your comics.
            Serving <strong>New York, New Jersey, Pennsylvania, and Maryland</strong>.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap justify-center gap-6 mb-8"
          >
            <div className="flex items-center gap-2 bg-white px-4 py-2 border-4 border-black shadow-comic">
              <Star className="text-comic-yellow" fill="#FFD700" size={20} />
              <span className="font-comic">99.9% POSITIVE</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-4 py-2 border-4 border-black shadow-comic">
              <Package className="text-comic-blue" size={20} />
              <span className="font-comic">2,900+ DEALS</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-4 py-2 border-4 border-black shadow-comic">
              <Truck className="text-comic-red" size={20} />
              <span className="font-comic">FREE PICKUP</span>
            </div>
          </motion.div>

          {/* BIG CALL TONY BUTTON */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a
              href={SITE_CONFIG.phoneLink}
              className="flex items-center gap-3 bg-hero-green text-white px-8 py-5 border-4 border-black shadow-comic-lg font-comic text-2xl sm:text-3xl uppercase hover:bg-green-600 transition-colors animate-pulse"
            >
              <Phone size={32} className="animate-bounce" />
              CALL TONY: {SITE_CONFIG.phoneDisplay}
            </a>
            <span className="text-gray-600 font-comic">OR</span>
            <a
              href="#contact-form"
              className="comic-button-primary text-xl"
            >
              Fill Out Form Below
            </a>
          </motion.div>
        </div>
      </section>

      {/* What We Buy */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="section-title mb-12">
            <span className="text-comic-blue">What We</span>{' '}
            <span className="text-comic-red">Buy</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHAT_WE_BUY.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="comic-card text-center"
              >
                <h3 className="font-comic text-2xl uppercase mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-comic-cream">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="section-title mb-12">
            <span className="text-comic-red">How It</span>{' '}
            <span className="text-comic-blue">Works</span>
          </h2>

          <div className="flex flex-wrap justify-center gap-4">
            {PROCESS_STEPS.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="flex flex-col items-center w-40 text-center"
              >
                <div className="w-16 h-16 bg-comic-yellow border-4 border-black shadow-comic flex items-center justify-center mb-3">
                  <step.icon size={28} className="text-black" />
                </div>
                <div className="font-comic text-lg uppercase mb-1">{step.title}</div>
                <p className="text-sm text-gray-600">{step.desc}</p>
                {index < PROCESS_STEPS.length - 1 && (
                  <div className="hidden lg:block absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2">
                    →
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-night-blue text-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="section-title text-white mb-4">
            <span className="text-comic-yellow">Service</span>{' '}
            <span className="text-white">Areas</span>
          </h2>
          <p className="text-center text-gray-300 mb-12 max-w-2xl mx-auto">
            We travel throughout the Northeast to buy collections. No collection is too far!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICE_AREAS.map((area, index) => (
              <motion.div
                key={area.state}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur border-2 border-comic-yellow p-6 rounded"
              >
                <div className="flex items-center gap-2 mb-4">
                  <MapPin className="text-comic-yellow" size={24} />
                  <h3 className="font-comic text-xl text-comic-yellow uppercase">{area.state}</h3>
                </div>
                <ul className="space-y-1">
                  {area.cities.map(city => (
                    <li key={city} className="text-gray-300 flex items-center gap-2">
                      <CheckCircle size={14} className="text-hero-green" />
                      {city}
                    </li>
                  ))}
                  <li className="text-gray-400 italic">+ surrounding areas</li>
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact-form" className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="section-title mb-4">
            <span className="text-comic-blue">Get Your</span>{' '}
            <span className="text-comic-red">Free Quote</span>
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Tell us about your collection and we'll get back to you within 24 hours with a no-obligation quote.
          </p>

          {isSubmitted ? (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-center py-12"
            >
              <div className="inline-block p-6 bg-hero-green rounded-full border-4 border-black shadow-comic mb-6">
                <CheckCircle size={48} className="text-white" />
              </div>
              <h3 className="font-comic text-3xl uppercase mb-4 text-hero-green">
                Quote Request Received!
              </h3>
              <p className="text-lg text-gray-600 mb-4">
                We'll review your collection details and get back to you within 24 hours.
              </p>
              <p className="text-gray-500">
                For faster response, call Tony directly at{' '}
                <a href={SITE_CONFIG.phoneLink} className="text-hero-green font-bold hover:underline">
                  {SITE_CONFIG.phoneDisplay}
                </a>
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-comic-cream p-8 border-4 border-black shadow-comic-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block font-comic uppercase tracking-wide mb-2">Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-4 border-black focus:border-comic-blue focus:outline-none bg-white"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block font-comic uppercase tracking-wide mb-2">Phone *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-4 border-black focus:border-comic-blue focus:outline-none bg-white"
                    placeholder="(555) 123-4567"
                  />
                </div>
                <div>
                  <label className="block font-comic uppercase tracking-wide mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-4 border-black focus:border-comic-blue focus:outline-none bg-white"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block font-comic uppercase tracking-wide mb-2">Zip Code *</label>
                  <input
                    type="text"
                    name="zip"
                    value={formData.zip}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-4 border-black focus:border-comic-blue focus:outline-none bg-white"
                    placeholder="12345"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className="block font-comic uppercase tracking-wide mb-2">Collection Size</label>
                <select
                  name="collectionSize"
                  value={formData.collectionSize}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-4 border-black focus:border-comic-blue focus:outline-none bg-white"
                >
                  <option value="">Select approximate size...</option>
                  <option value="small">Small (Under 100 comics)</option>
                  <option value="medium">Medium (100-500 comics)</option>
                  <option value="large">Large (500-2000 comics)</option>
                  <option value="xlarge">Very Large (2000+ comics)</option>
                  <option value="boxes">Multiple Long Boxes</option>
                  <option value="estate">Full Estate/Storage Unit</option>
                </select>
              </div>

              <div className="mb-6">
                <label className="block font-comic uppercase tracking-wide mb-2">
                  Tell Us About Your Collection
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 border-4 border-black focus:border-comic-blue focus:outline-none bg-white resize-none"
                  placeholder="What types of comics do you have? Any notable issues? Approximate age range? Any details help us give you a better quote..."
                />
              </div>

              <div className="mb-6 p-4 bg-white border-4 border-dashed border-gray-400">
                <div className="flex items-center justify-center gap-3 text-gray-500">
                  <Upload size={24} />
                  <span>Photo upload coming soon! For now, email photos to contact@vanesasellingcomics.online</span>
                </div>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full comic-button-primary text-xl disabled:opacity-50"
              >
                {isLoading ? (
                  <span className="flex items-center justify-center gap-2">
                    <div className="animate-spin w-6 h-6 border-4 border-black border-t-transparent rounded-full" />
                    Sending...
                  </span>
                ) : (
                  'Get My Free Quote'
                )}
              </button>

              <p className="text-center text-sm text-gray-500 mt-4">
                <Shield size={14} className="inline mr-1" />
                Your information is secure and will never be shared.
              </p>
            </form>
          )}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-comic-cream">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="section-title mb-12">
            <span className="text-comic-red">Common</span>{' '}
            <span className="text-comic-blue">Questions</span>
          </h2>

          <div className="space-y-4">
            {FAQ.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white border-4 border-black shadow-comic"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-4 text-left font-comic uppercase"
                >
                  {item.q}
                  <ChevronDown
                    size={24}
                    className={`transform transition-transform ${openFaq === index ? 'rotate-180' : ''}`}
                  />
                </button>
                {openFaq === index && (
                  <div className="px-4 pb-4 text-gray-600 border-t-2 border-gray-200 pt-4">
                    {item.a}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-comic-red text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-comic text-4xl md:text-5xl uppercase mb-6 text-shadow-comic">
            Ready to Sell Your Comics?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Don't let your collection sit in boxes. Turn it into cash today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact-form" className="comic-button-primary text-xl">
              Get Free Quote
            </a>
            <a href={SITE_CONFIG.phoneLink} className="comic-button bg-white text-black text-xl">
              <Phone size={20} className="inline mr-2" />
              {SITE_CONFIG.phoneDisplay}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
