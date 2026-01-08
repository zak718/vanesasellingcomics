'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import {
  TrendingDown,
  Package,
  AlertTriangle,
  DollarSign,
  ArrowRight,
  RefreshCw,
  CheckCircle,
  Clock
} from 'lucide-react';

// Mock data for MVP demo
const mockStats = {
  activeListings: 47,
  pendingAlerts: 8,
  priceUpdates: 3,
  potentialSavings: 124.50,
};

const mockRecentAlerts = [
  {
    id: '1',
    title: 'Amazing Spider-Man #300',
    currentPrice: 299.99,
    soldPrice: 245.00,
    priceDiff: 54.99,
    status: 'pending',
  },
  {
    id: '2',
    title: 'X-Men #1 (1991)',
    currentPrice: 59.99,
    soldPrice: 42.00,
    priceDiff: 17.99,
    status: 'pending',
  },
  {
    id: '3',
    title: 'Batman #423',
    currentPrice: 89.99,
    soldPrice: 75.00,
    priceDiff: 14.99,
    status: 'confirmed',
  },
];

export default function AdminDashboard() {
  const [loading, setLoading] = useState(false);

  const runScan = async () => {
    setLoading(true);
    // Simulate scan
    await new Promise(resolve => setTimeout(resolve, 2000));
    setLoading(false);
    alert('Scan complete! Found 3 new price alerts.');
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="font-comic text-3xl uppercase">Dashboard</h1>
          <p className="text-gray-600">Comic Repricing Tool Overview</p>
        </div>
        <button
          onClick={runScan}
          disabled={loading}
          className="flex items-center gap-2 bg-comic-blue text-white px-6 py-3 border-4 border-black shadow-comic font-comic uppercase hover:bg-blue-600 transition-colors disabled:opacity-50"
        >
          <RefreshCw size={20} className={loading ? 'animate-spin' : ''} />
          {loading ? 'Scanning...' : 'Run Price Scan'}
        </button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white border-4 border-black shadow-comic p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm uppercase">Active Listings</p>
              <p className="font-comic text-3xl">{mockStats.activeListings}</p>
            </div>
            <div className="bg-comic-blue p-3 border-2 border-black">
              <Package className="text-white" size={24} />
            </div>
          </div>
        </div>

        <div className="bg-white border-4 border-black shadow-comic p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm uppercase">Pending Alerts</p>
              <p className="font-comic text-3xl text-comic-red">{mockStats.pendingAlerts}</p>
            </div>
            <div className="bg-comic-red p-3 border-2 border-black">
              <AlertTriangle className="text-white" size={24} />
            </div>
          </div>
        </div>

        <div className="bg-white border-4 border-black shadow-comic p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm uppercase">Price Updates</p>
              <p className="font-comic text-3xl text-hero-green">{mockStats.priceUpdates}</p>
            </div>
            <div className="bg-hero-green p-3 border-2 border-black">
              <CheckCircle className="text-white" size={24} />
            </div>
          </div>
        </div>

        <div className="bg-white border-4 border-black shadow-comic p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm uppercase">Potential Savings</p>
              <p className="font-comic text-3xl">${mockStats.potentialSavings}</p>
            </div>
            <div className="bg-comic-yellow p-3 border-2 border-black">
              <DollarSign className="text-black" size={24} />
            </div>
          </div>
        </div>
      </div>

      {/* Recent Price Alerts */}
      <div className="bg-white border-4 border-black shadow-comic">
        <div className="border-b-4 border-black p-4 flex justify-between items-center">
          <h2 className="font-comic text-xl uppercase">Recent Price Alerts</h2>
          <Link
            href="/admin/repricing"
            className="flex items-center gap-1 text-comic-blue hover:underline text-sm"
          >
            View All <ArrowRight size={16} />
          </Link>
        </div>
        <div className="divide-y-2 divide-gray-200">
          {mockRecentAlerts.map((alert) => (
            <div key={alert.id} className="p-4 flex items-center justify-between hover:bg-gray-50">
              <div className="flex items-center gap-4">
                <div className={`p-2 border-2 border-black ${
                  alert.status === 'pending' ? 'bg-comic-yellow' : 'bg-hero-green'
                }`}>
                  {alert.status === 'pending' ? (
                    <Clock size={20} className="text-black" />
                  ) : (
                    <CheckCircle size={20} className="text-white" />
                  )}
                </div>
                <div>
                  <h3 className="font-medium">{alert.title}</h3>
                  <p className="text-sm text-gray-600">
                    Your price: ${alert.currentPrice} | Sold for: ${alert.soldPrice}
                  </p>
                </div>
              </div>
              <div className="text-right">
                <div className="flex items-center gap-1 text-comic-red font-comic">
                  <TrendingDown size={16} />
                  -${alert.priceDiff.toFixed(2)}
                </div>
                {alert.status === 'pending' && (
                  <button className="text-xs text-comic-blue hover:underline mt-1">
                    Review
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* How It Works */}
      <div className="bg-comic-cream border-4 border-black shadow-comic p-6">
        <h2 className="font-comic text-xl uppercase mb-4">How the Repricing Tool Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="text-center">
            <div className="bg-comic-yellow w-12 h-12 mx-auto mb-3 border-2 border-black flex items-center justify-center font-comic text-xl">
              1
            </div>
            <p className="text-sm">We scan your eBay listings</p>
          </div>
          <div className="text-center">
            <div className="bg-comic-yellow w-12 h-12 mx-auto mb-3 border-2 border-black flex items-center justify-center font-comic text-xl">
              2
            </div>
            <p className="text-sm">Compare to recent sold items</p>
          </div>
          <div className="text-center">
            <div className="bg-comic-yellow w-12 h-12 mx-auto mb-3 border-2 border-black flex items-center justify-center font-comic text-xl">
              3
            </div>
            <p className="text-sm">Alert when market price is lower</p>
          </div>
          <div className="text-center">
            <div className="bg-comic-yellow w-12 h-12 mx-auto mb-3 border-2 border-black flex items-center justify-center font-comic text-xl">
              4
            </div>
            <p className="text-sm">You confirm and we update eBay</p>
          </div>
        </div>
      </div>
    </div>
  );
}
