import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        // Comic book primary colors
        'comic-yellow': '#FFD700',
        'comic-red': '#E31C23',
        'comic-blue': '#0072CE',
        // Secondary
        'comic-black': '#1a1a1a',
        'comic-cream': '#FDF5E6',
        // Accent
        'vintage-gold': '#B8860B',
        'pop-pink': '#FF1493',
        'hero-green': '#228B22',
        // Background
        'paper': '#F5F5DC',
        'night-blue': '#0B1426',
      },
      fontFamily: {
        'comic': ['Bangers', 'Impact', 'sans-serif'],
        'body': ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 2s infinite',
      },
      boxShadow: {
        'comic': '4px 4px 0 0 #000',
        'comic-lg': '6px 6px 0 0 #000',
        'comic-yellow': '4px 4px 0 0 #FFD700',
      },
    },
  },
  plugins: [],
};
export default config;
