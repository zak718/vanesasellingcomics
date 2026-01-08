'use client';

import { useState } from 'react';
import { Save, Key, Bell, Link as LinkIcon, User } from 'lucide-react';

export default function SettingsPage() {
  const [ebayConnected, setEbayConnected] = useState(false);
  const [notifications, setNotifications] = useState({
    email: true,
    priceAlerts: true,
    weeklyReport: false,
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="font-comic text-3xl uppercase">Settings</h1>
        <p className="text-gray-600">Configure your repricing tool</p>
      </div>

      {/* Profile Settings */}
      <div className="bg-white border-4 border-black shadow-comic">
        <div className="border-b-4 border-black p-4 flex items-center gap-3">
          <User size={24} />
          <h2 className="font-comic text-xl uppercase">Profile</h2>
        </div>
        <div className="p-6 space-y-4">
          <div>
            <label className="block font-comic uppercase text-sm mb-2">Name</label>
            <input
              type="text"
              defaultValue="Tony"
              className="w-full px-4 py-3 border-4 border-black focus:border-comic-blue focus:outline-none"
            />
          </div>
          <div>
            <label className="block font-comic uppercase text-sm mb-2">Email</label>
            <input
              type="email"
              defaultValue="vanesasellingcomics@gmail.com"
              className="w-full px-4 py-3 border-4 border-black focus:border-comic-blue focus:outline-none"
            />
          </div>
          <button className="flex items-center gap-2 bg-comic-yellow px-6 py-3 border-4 border-black shadow-comic font-comic uppercase hover:bg-yellow-400 transition-colors">
            <Save size={20} />
            Save Changes
          </button>
        </div>
      </div>

      {/* eBay Connection */}
      <div className="bg-white border-4 border-black shadow-comic">
        <div className="border-b-4 border-black p-4 flex items-center gap-3">
          <LinkIcon size={24} />
          <h2 className="font-comic text-xl uppercase">eBay Connection</h2>
        </div>
        <div className="p-6">
          {ebayConnected ? (
            <div className="flex items-center justify-between">
              <div>
                <p className="font-comic text-lg text-hero-green">Connected</p>
                <p className="text-sm text-gray-600">eBay account: vanesasellingcomics</p>
              </div>
              <button
                onClick={() => setEbayConnected(false)}
                className="px-4 py-2 bg-red-100 text-red-600 border-2 border-red-300 font-comic text-sm uppercase hover:bg-red-200"
              >
                Disconnect
              </button>
            </div>
          ) : (
            <div>
              <p className="text-gray-600 mb-4">
                Connect your eBay account to enable automatic listing sync and price updates.
              </p>
              <button
                onClick={() => {
                  alert('In production, this would redirect to eBay OAuth login.');
                  setEbayConnected(true);
                }}
                className="flex items-center gap-2 bg-comic-blue text-white px-6 py-3 border-4 border-black shadow-comic font-comic uppercase hover:bg-blue-600 transition-colors"
              >
                <LinkIcon size={20} />
                Connect eBay Account
              </button>
              <div className="mt-4 p-4 bg-comic-cream border-2 border-black">
                <h3 className="font-comic uppercase text-sm mb-2">Required eBay API Scopes:</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>- Read seller listings</li>
                  <li>- Read sold items</li>
                  <li>- Update listing prices</li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Notifications */}
      <div className="bg-white border-4 border-black shadow-comic">
        <div className="border-b-4 border-black p-4 flex items-center gap-3">
          <Bell size={24} />
          <h2 className="font-comic text-xl uppercase">Notifications</h2>
        </div>
        <div className="p-6 space-y-4">
          <label className="flex items-center justify-between p-4 bg-gray-50 border-2 border-black cursor-pointer hover:bg-gray-100">
            <div>
              <p className="font-medium">Email Notifications</p>
              <p className="text-sm text-gray-600">Receive alerts via email</p>
            </div>
            <input
              type="checkbox"
              checked={notifications.email}
              onChange={(e) => setNotifications({ ...notifications, email: e.target.checked })}
              className="w-6 h-6 border-2 border-black"
            />
          </label>
          <label className="flex items-center justify-between p-4 bg-gray-50 border-2 border-black cursor-pointer hover:bg-gray-100">
            <div>
              <p className="font-medium">Price Alerts</p>
              <p className="text-sm text-gray-600">Get notified when prices need attention</p>
            </div>
            <input
              type="checkbox"
              checked={notifications.priceAlerts}
              onChange={(e) => setNotifications({ ...notifications, priceAlerts: e.target.checked })}
              className="w-6 h-6 border-2 border-black"
            />
          </label>
          <label className="flex items-center justify-between p-4 bg-gray-50 border-2 border-black cursor-pointer hover:bg-gray-100">
            <div>
              <p className="font-medium">Weekly Report</p>
              <p className="text-sm text-gray-600">Summary of price changes and market trends</p>
            </div>
            <input
              type="checkbox"
              checked={notifications.weeklyReport}
              onChange={(e) => setNotifications({ ...notifications, weeklyReport: e.target.checked })}
              className="w-6 h-6 border-2 border-black"
            />
          </label>
        </div>
      </div>

      {/* API Keys (for advanced users) */}
      <div className="bg-white border-4 border-black shadow-comic">
        <div className="border-b-4 border-black p-4 flex items-center gap-3">
          <Key size={24} />
          <h2 className="font-comic text-xl uppercase">API Configuration</h2>
        </div>
        <div className="p-6 space-y-4">
          <p className="text-gray-600 mb-4">
            For advanced users: Configure direct API access.
          </p>
          <div>
            <label className="block font-comic uppercase text-sm mb-2">eBay App ID</label>
            <input
              type="password"
              placeholder="Enter eBay App ID..."
              className="w-full px-4 py-3 border-4 border-black focus:border-comic-blue focus:outline-none"
            />
          </div>
          <div>
            <label className="block font-comic uppercase text-sm mb-2">eBay Cert ID</label>
            <input
              type="password"
              placeholder="Enter eBay Cert ID..."
              className="w-full px-4 py-3 border-4 border-black focus:border-comic-blue focus:outline-none"
            />
          </div>
          <button className="flex items-center gap-2 bg-comic-yellow px-6 py-3 border-4 border-black shadow-comic font-comic uppercase hover:bg-yellow-400 transition-colors">
            <Save size={20} />
            Save API Keys
          </button>
        </div>
      </div>
    </div>
  );
}
