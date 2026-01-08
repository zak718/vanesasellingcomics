'use client';

import { useState } from 'react';
import {
  TrendingDown,
  Check,
  X,
  ExternalLink,
  Filter,
  DollarSign,
  AlertTriangle,
  ArrowDown,
  ArrowUp
} from 'lucide-react';

// Mock data for MVP demo
const mockAlerts = [
  {
    id: '1',
    title: 'Amazing Spider-Man #300',
    issue: '#300',
    condition: 'VF+',
    ebayItemId: '123456789',
    currentPrice: 299.99,
    soldPrice: 245.00,
    soldDate: '2026-01-07',
    priceDiff: 54.99,
    percentDiff: 18.3,
    suggestedPrice: 259.99,
    imageUrl: '/images/generated/comic-collection.png',
    status: 'pending',
  },
  {
    id: '2',
    title: 'X-Men #1 (1991)',
    issue: '#1',
    condition: 'NM',
    ebayItemId: '234567890',
    currentPrice: 59.99,
    soldPrice: 42.00,
    soldDate: '2026-01-06',
    priceDiff: 17.99,
    percentDiff: 30.0,
    suggestedPrice: 49.99,
    imageUrl: '/images/generated/comic-collection.png',
    status: 'pending',
  },
  {
    id: '3',
    title: 'Batman #423',
    issue: '#423',
    condition: 'VF',
    ebayItemId: '345678901',
    currentPrice: 89.99,
    soldPrice: 75.00,
    soldDate: '2026-01-05',
    priceDiff: 14.99,
    percentDiff: 16.7,
    suggestedPrice: 79.99,
    imageUrl: '/images/generated/comic-collection.png',
    status: 'pending',
  },
  {
    id: '4',
    title: 'Spawn #1',
    issue: '#1',
    condition: 'NM-',
    ebayItemId: '456789012',
    currentPrice: 45.99,
    soldPrice: 38.00,
    soldDate: '2026-01-04',
    priceDiff: 7.99,
    percentDiff: 17.4,
    suggestedPrice: 39.99,
    imageUrl: '/images/generated/comic-collection.png',
    status: 'confirmed',
    newPrice: 39.99,
  },
  {
    id: '5',
    title: 'Wolverine #1 (1988)',
    issue: '#1',
    condition: 'VF+',
    ebayItemId: '567890123',
    currentPrice: 125.00,
    soldPrice: 95.00,
    soldDate: '2026-01-03',
    priceDiff: 30.00,
    percentDiff: 24.0,
    suggestedPrice: 109.99,
    imageUrl: '/images/generated/comic-collection.png',
    status: 'dismissed',
  },
];

type AlertStatus = 'all' | 'pending' | 'confirmed' | 'dismissed';

export default function RepricingPage() {
  const [alerts, setAlerts] = useState(mockAlerts);
  const [filter, setFilter] = useState<AlertStatus>('all');
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editPrice, setEditPrice] = useState<number>(0);

  const filteredAlerts = alerts.filter(alert => {
    if (filter === 'all') return true;
    return alert.status === filter;
  });

  const handleConfirm = (id: string, newPrice: number) => {
    setAlerts(alerts.map(alert =>
      alert.id === id
        ? { ...alert, status: 'confirmed', newPrice }
        : alert
    ));
    setEditingId(null);
  };

  const handleDismiss = (id: string) => {
    setAlerts(alerts.map(alert =>
      alert.id === id
        ? { ...alert, status: 'dismissed' }
        : alert
    ));
  };

  const handleApplyAll = () => {
    const confirmedAlerts = alerts.filter(a => a.status === 'confirmed');
    alert(`Applying ${confirmedAlerts.length} price updates to eBay...`);
    // In production, this would call the eBay API
  };

  const pendingCount = alerts.filter(a => a.status === 'pending').length;
  const confirmedCount = alerts.filter(a => a.status === 'confirmed').length;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="font-comic text-3xl uppercase">Repricing Alerts</h1>
          <p className="text-gray-600">
            {pendingCount} pending | {confirmedCount} ready to apply
          </p>
        </div>
        {confirmedCount > 0 && (
          <button
            onClick={handleApplyAll}
            className="flex items-center gap-2 bg-hero-green text-white px-6 py-3 border-4 border-black shadow-comic font-comic uppercase hover:bg-green-600 transition-colors"
          >
            <Check size={20} />
            Apply {confirmedCount} Updates to eBay
          </button>
        )}
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-2">
        {(['all', 'pending', 'confirmed', 'dismissed'] as AlertStatus[]).map((status) => (
          <button
            key={status}
            onClick={() => setFilter(status)}
            className={`px-4 py-2 border-2 border-black font-comic uppercase text-sm ${
              filter === status
                ? 'bg-comic-yellow'
                : 'bg-white hover:bg-gray-100'
            }`}
          >
            {status}
            {status === 'pending' && ` (${pendingCount})`}
            {status === 'confirmed' && ` (${confirmedCount})`}
          </button>
        ))}
      </div>

      {/* Alerts List */}
      <div className="space-y-4">
        {filteredAlerts.map((alert) => (
          <div
            key={alert.id}
            className={`bg-white border-4 border-black shadow-comic overflow-hidden ${
              alert.status === 'dismissed' ? 'opacity-50' : ''
            }`}
          >
            <div className="p-4 sm:p-6">
              <div className="flex flex-col lg:flex-row gap-4">
                {/* Comic Image */}
                <div className="w-24 h-32 bg-gray-200 border-2 border-black flex-shrink-0 overflow-hidden">
                  <img
                    src={alert.imageUrl}
                    alt={alert.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Comic Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h3 className="font-comic text-xl">{alert.title}</h3>
                      <p className="text-sm text-gray-600">
                        Condition: {alert.condition} | eBay ID: {alert.ebayItemId}
                      </p>
                    </div>
                    <div className={`px-3 py-1 border-2 border-black text-xs font-comic uppercase ${
                      alert.status === 'pending' ? 'bg-comic-yellow' :
                      alert.status === 'confirmed' ? 'bg-hero-green text-white' :
                      'bg-gray-300'
                    }`}>
                      {alert.status}
                    </div>
                  </div>

                  {/* Price Comparison */}
                  <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-4">
                    <div>
                      <p className="text-xs text-gray-500 uppercase">Your Price</p>
                      <p className="font-comic text-lg">${alert.currentPrice}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 uppercase">Sold For</p>
                      <p className="font-comic text-lg text-comic-red">${alert.soldPrice}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 uppercase">Difference</p>
                      <p className="font-comic text-lg flex items-center gap-1 text-comic-red">
                        <TrendingDown size={16} />
                        ${alert.priceDiff.toFixed(2)} ({alert.percentDiff}%)
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 uppercase">Suggested</p>
                      <p className="font-comic text-lg text-hero-green">${alert.suggestedPrice}</p>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  {alert.status === 'pending' && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {editingId === alert.id ? (
                        <div className="flex items-center gap-2">
                          <span className="text-sm">New Price: $</span>
                          <input
                            type="number"
                            value={editPrice}
                            onChange={(e) => setEditPrice(Number(e.target.value))}
                            className="w-24 px-2 py-1 border-2 border-black"
                            step="0.01"
                          />
                          <button
                            onClick={() => handleConfirm(alert.id, editPrice)}
                            className="p-2 bg-hero-green text-white border-2 border-black"
                          >
                            <Check size={16} />
                          </button>
                          <button
                            onClick={() => setEditingId(null)}
                            className="p-2 bg-gray-200 border-2 border-black"
                          >
                            <X size={16} />
                          </button>
                        </div>
                      ) : (
                        <>
                          <button
                            onClick={() => {
                              setEditingId(alert.id);
                              setEditPrice(alert.suggestedPrice);
                            }}
                            className="flex items-center gap-1 px-4 py-2 bg-hero-green text-white border-2 border-black font-comic text-sm uppercase hover:bg-green-600"
                          >
                            <Check size={16} />
                            Accept ${alert.suggestedPrice}
                          </button>
                          <button
                            onClick={() => {
                              setEditingId(alert.id);
                              setEditPrice(alert.currentPrice);
                            }}
                            className="flex items-center gap-1 px-4 py-2 bg-comic-yellow border-2 border-black font-comic text-sm uppercase hover:bg-yellow-400"
                          >
                            <DollarSign size={16} />
                            Custom Price
                          </button>
                          <button
                            onClick={() => handleDismiss(alert.id)}
                            className="flex items-center gap-1 px-4 py-2 bg-gray-200 border-2 border-black font-comic text-sm uppercase hover:bg-gray-300"
                          >
                            <X size={16} />
                            Dismiss
                          </button>
                        </>
                      )}
                    </div>
                  )}

                  {alert.status === 'confirmed' && (
                    <div className="mt-4">
                      <p className="text-sm text-hero-green font-medium">
                        <Check size={14} className="inline mr-1" />
                        New price confirmed: ${alert.newPrice}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Sold Listing Reference */}
            <div className="bg-gray-50 border-t-2 border-black px-4 py-2 flex items-center justify-between text-sm">
              <span className="text-gray-600">
                Sold on {alert.soldDate}
              </span>
              <a
                href={`https://www.ebay.com/itm/${alert.ebayItemId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-comic-blue hover:underline"
              >
                View on eBay <ExternalLink size={14} />
              </a>
            </div>
          </div>
        ))}

        {filteredAlerts.length === 0 && (
          <div className="text-center py-12 text-gray-500">
            <AlertTriangle size={48} className="mx-auto mb-4 opacity-50" />
            <p className="font-comic text-xl">No alerts found</p>
            <p className="text-sm">Run a scan to check for price differences</p>
          </div>
        )}
      </div>
    </div>
  );
}
