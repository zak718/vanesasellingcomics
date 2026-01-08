'use client';

import { useState } from 'react';
import {
  Plus,
  Search,
  ExternalLink,
  Edit2,
  Trash2,
  Package,
  Filter
} from 'lucide-react';

// Mock listings data
const mockListings = [
  {
    id: '1',
    ebayItemId: '123456789',
    title: 'Amazing Spider-Man #300 First Venom VF+ Newsstand',
    currentPrice: 299.99,
    condition: 'VF+',
    status: 'active',
    imageUrl: '/images/generated/comic-collection.png',
    listedAt: '2025-12-15',
  },
  {
    id: '2',
    ebayItemId: '234567890',
    title: 'X-Men #1 1991 Jim Lee Cover NM Multiple Copies',
    currentPrice: 59.99,
    condition: 'NM',
    status: 'active',
    imageUrl: '/images/generated/comic-collection.png',
    listedAt: '2025-12-20',
  },
  {
    id: '3',
    ebayItemId: '345678901',
    title: 'Batman #423 Todd McFarlane Cover VF',
    currentPrice: 89.99,
    condition: 'VF',
    status: 'active',
    imageUrl: '/images/generated/comic-collection.png',
    listedAt: '2025-12-22',
  },
  {
    id: '4',
    ebayItemId: '456789012',
    title: 'Spawn #1 First Print NM- Image Comics',
    currentPrice: 45.99,
    condition: 'NM-',
    status: 'active',
    imageUrl: '/images/generated/comic-collection.png',
    listedAt: '2025-12-28',
  },
  {
    id: '5',
    ebayItemId: '567890123',
    title: 'Wolverine #1 1988 Ongoing Series VF+',
    currentPrice: 125.00,
    condition: 'VF+',
    status: 'active',
    imageUrl: '/images/generated/comic-collection.png',
    listedAt: '2026-01-02',
  },
];

export default function ListingsPage() {
  const [listings] = useState(mockListings);
  const [searchQuery, setSearchQuery] = useState('');
  const [showAddModal, setShowAddModal] = useState(false);

  const filteredListings = listings.filter(listing =>
    listing.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalValue = listings.reduce((sum, l) => sum + l.currentPrice, 0);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="font-comic text-3xl uppercase">My Listings</h1>
          <p className="text-gray-600">
            {listings.length} active listings | Total value: ${totalValue.toFixed(2)}
          </p>
        </div>
        <button
          onClick={() => setShowAddModal(true)}
          className="flex items-center gap-2 bg-comic-yellow px-6 py-3 border-4 border-black shadow-comic font-comic uppercase hover:bg-yellow-400 transition-colors"
        >
          <Plus size={20} />
          Import from eBay
        </button>
      </div>

      {/* Search */}
      <div className="relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search listings..."
          className="w-full pl-12 pr-4 py-3 border-4 border-black focus:border-comic-blue focus:outline-none"
        />
      </div>

      {/* Listings Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredListings.map((listing) => (
          <div
            key={listing.id}
            className="bg-white border-4 border-black shadow-comic overflow-hidden hover:shadow-comic-lg transition-shadow"
          >
            {/* Image */}
            <div className="aspect-square bg-gray-200 relative overflow-hidden">
              <img
                src={listing.imageUrl}
                alt={listing.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-2 right-2 bg-hero-green text-white px-2 py-1 border-2 border-black text-xs font-comic uppercase">
                {listing.status}
              </div>
            </div>

            {/* Content */}
            <div className="p-4">
              <h3 className="font-medium line-clamp-2 mb-2" title={listing.title}>
                {listing.title}
              </h3>
              <div className="flex items-center justify-between">
                <span className="font-comic text-xl">${listing.currentPrice}</span>
                <span className="text-sm text-gray-500 px-2 py-1 bg-gray-100 border border-gray-200">
                  {listing.condition}
                </span>
              </div>
              <p className="text-xs text-gray-500 mt-2">
                Listed: {listing.listedAt}
              </p>

              {/* Actions */}
              <div className="flex gap-2 mt-4">
                <a
                  href={`https://www.ebay.com/itm/${listing.ebayItemId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-1 py-2 bg-comic-blue text-white border-2 border-black text-sm hover:bg-blue-600"
                >
                  <ExternalLink size={14} />
                  eBay
                </a>
                <button className="p-2 bg-gray-100 border-2 border-black hover:bg-gray-200">
                  <Edit2 size={16} />
                </button>
                <button className="p-2 bg-red-100 border-2 border-black hover:bg-red-200 text-red-600">
                  <Trash2 size={16} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredListings.length === 0 && (
        <div className="text-center py-12 text-gray-500">
          <Package size={48} className="mx-auto mb-4 opacity-50" />
          <p className="font-comic text-xl">No listings found</p>
          <p className="text-sm">Import your eBay listings to get started</p>
        </div>
      )}

      {/* Import Modal (simplified) */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white border-4 border-black shadow-comic-lg max-w-md w-full p-6">
            <h2 className="font-comic text-2xl uppercase mb-4">Import from eBay</h2>
            <p className="text-gray-600 mb-4">
              Connect your eBay account to automatically import your active listings.
            </p>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="eBay Seller Username"
                className="w-full px-4 py-3 border-4 border-black"
              />
              <p className="text-sm text-gray-500">
                Note: In the full version, this will use the eBay API to sync your listings automatically.
              </p>
            </div>
            <div className="flex gap-2 mt-6">
              <button
                onClick={() => setShowAddModal(false)}
                className="flex-1 py-3 bg-gray-200 border-4 border-black font-comic uppercase hover:bg-gray-300"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  alert('In the full version, this will connect to eBay API and import listings!');
                  setShowAddModal(false);
                }}
                className="flex-1 py-3 bg-comic-yellow border-4 border-black font-comic uppercase hover:bg-yellow-400"
              >
                Connect
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
