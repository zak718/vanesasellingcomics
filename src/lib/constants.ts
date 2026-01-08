export const SITE_CONFIG = {
  name: 'VanesaSellingComics',
  tagline: 'Comics | Vintage Toys | LEGOs | Collectibles',
  description: 'Your destination for comics, vintage toys, modern toys, LEGOs, and collectibles. 99.9% positive feedback with over 2.9K items sold!',
  ebayStore: 'https://www.ebay.com/str/vanesasellingcomics',
  whatnotProfile: 'https://www.whatnot.com/user/vanesasellingcomics',
  // CONTACT INFO - CALL TONY!
  phone: '646-460-5596',
  phoneLink: 'tel:+16464605596',
  phoneDisplay: '(646) 460-5596',
  email: 'vanesasellingcomics@gmail.com',
  stats: {
    feedback: '99.9%',
    itemsSold: '2.9K+',
    followers: '455',
  },
};

export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Sell Comics', href: '/sell' },
  { label: 'Shop', href: '/#shop' },
  { label: 'Schedule', href: '/#schedule' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/#contact' },
];

export const SERVICE_AREA_LINKS = [
  { label: 'New York', href: '/sell-comics-new-york' },
  { label: 'New Jersey', href: '/sell-comics-new-jersey' },
  { label: 'Pennsylvania', href: '/sell-comics-pennsylvania' },
  { label: 'Maryland', href: '/sell-comics-maryland' },
];

export const CATEGORIES = [
  { id: 'comics', label: 'Comics', icon: 'BookOpen' },
  { id: 'vintage-toys', label: 'Vintage Toys', icon: 'Gamepad2' },
  { id: 'modern-toys', label: 'Modern Toys', icon: 'Sparkles' },
  { id: 'lego', label: 'LEGOs', icon: 'Blocks' },
];

export const PLACEHOLDER_PRODUCTS = [
  {
    id: '1',
    title: 'Amazing Spider-Man #300',
    category: 'comics',
    price: '$299.99',
    image: '/images/placeholder-comic.svg',
    badge: 'HOT',
  },
  {
    id: '2',
    title: 'Vintage Star Wars Figure',
    category: 'vintage-toys',
    price: '$149.99',
    image: '/images/placeholder-toy.svg',
    badge: 'RARE',
  },
  {
    id: '3',
    title: 'LEGO Star Wars Set',
    category: 'lego',
    price: '$89.99',
    image: '/images/placeholder-lego.svg',
    badge: 'NEW',
  },
  {
    id: '4',
    title: 'X-Men #1 (1991)',
    category: 'comics',
    price: '$59.99',
    image: '/images/placeholder-comic.svg',
    badge: 'CLASSIC',
  },
  {
    id: '5',
    title: 'Transformers G1 Optimus',
    category: 'vintage-toys',
    price: '$199.99',
    image: '/images/placeholder-toy.svg',
    badge: 'VINTAGE',
  },
  {
    id: '6',
    title: 'Marvel Legends Figure',
    category: 'modern-toys',
    price: '$34.99',
    image: '/images/placeholder-toy.svg',
    badge: 'NEW',
  },
];

export const PLACEHOLDER_SCHEDULE = [
  {
    id: '1',
    title: 'Comic Book Bonanza',
    date: 'Friday, Jan 10',
    time: '7:00 PM EST',
    category: 'Comics',
    description: 'Huge selection of key issues and first appearances!',
  },
  {
    id: '2',
    title: 'Vintage Toy Night',
    date: 'Saturday, Jan 11',
    time: '8:00 PM EST',
    category: 'Vintage Toys',
    description: 'Star Wars, Transformers, GI Joe and more!',
  },
  {
    id: '3',
    title: 'LEGO Madness',
    date: 'Sunday, Jan 12',
    time: '6:00 PM EST',
    category: 'LEGOs',
    description: 'Sealed sets and rare minifigures!',
  },
];
