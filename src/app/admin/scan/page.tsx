'use client';

import { useState } from 'react';
import {
  RefreshCw,
  Play,
  CheckCircle,
  XCircle,
  Clock,
  AlertTriangle,
  TrendingDown
} from 'lucide-react';

// Mock scan history
const mockScanHistory = [
  {
    id: '1',
    startedAt: '2026-01-08 04:30:00',
    completedAt: '2026-01-08 04:32:15',
    status: 'completed',
    listingsScanned: 47,
    soldItemsFound: 156,
    alertsCreated: 8,
  },
  {
    id: '2',
    startedAt: '2026-01-07 04:30:00',
    completedAt: '2026-01-07 04:31:45',
    status: 'completed',
    listingsScanned: 45,
    soldItemsFound: 142,
    alertsCreated: 3,
  },
  {
    id: '3',
    startedAt: '2026-01-06 04:30:00',
    completedAt: '2026-01-06 04:33:00',
    status: 'completed',
    listingsScanned: 44,
    soldItemsFound: 138,
    alertsCreated: 5,
  },
];

export default function ScanPage() {
  const [isScanning, setIsScanning] = useState(false);
  const [scanProgress, setScanProgress] = useState(0);
  const [scanStatus, setScanStatus] = useState<string | null>(null);

  const runScan = async () => {
    setIsScanning(true);
    setScanProgress(0);
    setScanStatus('Fetching your eBay listings...');

    // Simulate scan progress
    for (let i = 0; i <= 100; i += 10) {
      await new Promise(resolve => setTimeout(resolve, 500));
      setScanProgress(i);

      if (i === 30) setScanStatus('Searching for sold items...');
      if (i === 60) setScanStatus('Comparing prices...');
      if (i === 90) setScanStatus('Generating alerts...');
    }

    setScanStatus('Scan complete! Found 5 new price alerts.');
    setIsScanning(false);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="font-comic text-3xl uppercase">Run Price Scan</h1>
        <p className="text-gray-600">
          Scan eBay sold listings to find pricing opportunities
        </p>
      </div>

      {/* Scan Control Panel */}
      <div className="bg-white border-4 border-black shadow-comic p-6">
        <div className="max-w-xl mx-auto text-center">
          {!isScanning && !scanStatus && (
            <>
              <div className="w-24 h-24 mx-auto mb-6 bg-comic-yellow border-4 border-black rounded-full flex items-center justify-center">
                <RefreshCw size={48} />
              </div>
              <h2 className="font-comic text-2xl mb-4">Ready to Scan</h2>
              <p className="text-gray-600 mb-6">
                Click the button below to scan eBay sold listings and compare them to your current prices.
                This will identify any items where the market price has dropped below your listing price.
              </p>
              <button
                onClick={runScan}
                className="inline-flex items-center gap-3 bg-hero-green text-white px-8 py-4 border-4 border-black shadow-comic font-comic text-xl uppercase hover:bg-green-600 transition-colors"
              >
                <Play size={24} />
                Start Price Scan
              </button>
            </>
          )}

          {isScanning && (
            <>
              <div className="w-24 h-24 mx-auto mb-6 bg-comic-blue border-4 border-black rounded-full flex items-center justify-center">
                <RefreshCw size={48} className="text-white animate-spin" />
              </div>
              <h2 className="font-comic text-2xl mb-4">Scanning...</h2>
              <p className="text-gray-600 mb-4">{scanStatus}</p>
              <div className="w-full bg-gray-200 border-2 border-black h-8 mb-2">
                <div
                  className="bg-comic-yellow h-full transition-all duration-500"
                  style={{ width: `${scanProgress}%` }}
                />
              </div>
              <p className="text-sm text-gray-500">{scanProgress}% complete</p>
            </>
          )}

          {!isScanning && scanStatus && (
            <>
              <div className="w-24 h-24 mx-auto mb-6 bg-hero-green border-4 border-black rounded-full flex items-center justify-center">
                <CheckCircle size={48} className="text-white" />
              </div>
              <h2 className="font-comic text-2xl mb-4">Scan Complete!</h2>
              <p className="text-gray-600 mb-6">{scanStatus}</p>
              <div className="flex gap-4 justify-center">
                <a
                  href="/admin/repricing"
                  className="inline-flex items-center gap-2 bg-comic-yellow px-6 py-3 border-4 border-black shadow-comic font-comic uppercase hover:bg-yellow-400 transition-colors"
                >
                  <TrendingDown size={20} />
                  View Alerts
                </a>
                <button
                  onClick={() => {
                    setScanStatus(null);
                    setScanProgress(0);
                  }}
                  className="inline-flex items-center gap-2 bg-white px-6 py-3 border-4 border-black shadow-comic font-comic uppercase hover:bg-gray-100 transition-colors"
                >
                  <RefreshCw size={20} />
                  Scan Again
                </button>
              </div>
            </>
          )}
        </div>
      </div>

      {/* How It Works */}
      <div className="bg-comic-cream border-4 border-black shadow-comic p-6">
        <h2 className="font-comic text-xl uppercase mb-4">How the Scan Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex gap-4">
            <div className="w-10 h-10 bg-comic-blue text-white border-2 border-black flex items-center justify-center font-comic flex-shrink-0">
              1
            </div>
            <div>
              <h3 className="font-comic uppercase mb-1">Fetch Your Listings</h3>
              <p className="text-sm text-gray-600">
                We pull all your active eBay listings and their current prices.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-10 h-10 bg-comic-blue text-white border-2 border-black flex items-center justify-center font-comic flex-shrink-0">
              2
            </div>
            <div>
              <h3 className="font-comic uppercase mb-1">Search Sold Items</h3>
              <p className="text-sm text-gray-600">
                For each listing, we search eBay sold items to find recent sale prices.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-10 h-10 bg-comic-blue text-white border-2 border-black flex items-center justify-center font-comic flex-shrink-0">
              3
            </div>
            <div>
              <h3 className="font-comic uppercase mb-1">Create Alerts</h3>
              <p className="text-sm text-gray-600">
                If sold items are cheaper than your price, we create an alert for review.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Scan History */}
      <div className="bg-white border-4 border-black shadow-comic">
        <div className="border-b-4 border-black p-4">
          <h2 className="font-comic text-xl uppercase">Scan History</h2>
        </div>
        <div className="divide-y-2 divide-gray-200">
          {mockScanHistory.map((scan) => (
            <div key={scan.id} className="p-4 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className={`p-2 border-2 border-black ${
                  scan.status === 'completed' ? 'bg-hero-green' : 'bg-comic-yellow'
                }`}>
                  {scan.status === 'completed' ? (
                    <CheckCircle size={20} className="text-white" />
                  ) : (
                    <Clock size={20} />
                  )}
                </div>
                <div>
                  <p className="font-medium">{scan.startedAt}</p>
                  <p className="text-sm text-gray-600">
                    {scan.listingsScanned} listings scanned | {scan.soldItemsFound} sold items found
                  </p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-comic text-lg">
                  {scan.alertsCreated} <span className="text-sm font-normal">alerts</span>
                </p>
                <p className="text-xs text-gray-500">
                  Duration: {Math.round((new Date(scan.completedAt).getTime() - new Date(scan.startedAt).getTime()) / 1000)}s
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
