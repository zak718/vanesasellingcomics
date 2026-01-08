'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, MessageSquare, CheckCircle } from 'lucide-react';

const subjectOptions = [
  { value: 'general', label: 'General Inquiry' },
  { value: 'item', label: 'Item Question' },
  { value: 'consignment', label: 'Consignment' },
  { value: 'other', label: 'Other' },
];

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'general',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    setIsLoading(false);
    setIsSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  if (isSubmitted) {
    return (
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-xl mx-auto px-4 text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="inline-block p-6 bg-hero-green rounded-full border-4 border-black shadow-comic mb-6"
          >
            <CheckCircle size={48} className="text-white" />
          </motion.div>
          <h2 className="font-comic text-4xl uppercase mb-4 text-hero-green">
            Message Sent!
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Thanks for reaching out! I&apos;ll get back to you as soon as possible.
          </p>
          <button
            onClick={() => {
              setIsSubmitted(false);
              setFormData({ name: '', email: '', subject: 'general', message: '' });
            }}
            className="comic-button-primary"
          >
            Send Another Message
          </button>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Info Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title text-left mb-6">
              <span className="text-comic-blue">Get in</span>{' '}
              <span className="text-comic-red">Touch</span>
            </h2>

            <p className="text-lg text-gray-600 mb-8">
              Have a question about an item? Want to consign your collection?
              Or just want to chat about comics? I&apos;d love to hear from you!
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="p-4 bg-comic-yellow border-4 border-black shadow-comic">
                  <Mail size={24} className="text-black" />
                </div>
                <div>
                  <h4 className="font-comic text-lg uppercase">Email</h4>
                  <p className="text-gray-600">Response within 24 hours</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-4 bg-comic-red border-4 border-black shadow-comic">
                  <MessageSquare size={24} className="text-white" />
                </div>
                <div>
                  <h4 className="font-comic text-lg uppercase">Whatnot Chat</h4>
                  <p className="text-gray-600">Message me during live shows</p>
                </div>
              </div>
            </div>

            {/* Comic Decoration */}
            <div className="hidden lg:block mt-12">
              <div className="inline-block bg-comic-blue text-white font-comic text-2xl px-6 py-4 border-4 border-black shadow-comic transform -rotate-3">
                LET&apos;S TALK!
              </div>
            </div>
          </motion.div>

          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="bg-comic-cream p-8 border-4 border-black shadow-comic-lg">
              {/* Name */}
              <div className="mb-6">
                <label htmlFor="name" className="block font-comic uppercase tracking-wide mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-4 border-black focus:border-comic-blue focus:outline-none bg-white"
                  placeholder="Your name"
                />
              </div>

              {/* Email */}
              <div className="mb-6">
                <label htmlFor="email" className="block font-comic uppercase tracking-wide mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-4 border-black focus:border-comic-blue focus:outline-none bg-white"
                  placeholder="your@email.com"
                />
              </div>

              {/* Subject */}
              <div className="mb-6">
                <label htmlFor="subject" className="block font-comic uppercase tracking-wide mb-2">
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-4 border-black focus:border-comic-blue focus:outline-none bg-white appearance-none cursor-pointer"
                >
                  {subjectOptions.map(option => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div className="mb-6">
                <label htmlFor="message" className="block font-comic uppercase tracking-wide mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border-4 border-black focus:border-comic-blue focus:outline-none bg-white resize-none"
                  placeholder="Your message..."
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full flex items-center justify-center gap-3 comic-button-primary text-xl disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <>
                    <div className="animate-spin w-6 h-6 border-4 border-black border-t-transparent rounded-full" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={24} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
