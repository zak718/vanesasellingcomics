'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Mail, Lock, User, Eye, EyeOff } from 'lucide-react';

export default function AdminLoginPage() {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const endpoint = isLogin ? '/api/auth/login' : '/api/auth/register';
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Authentication failed');
      }

      router.push('/admin/dashboard');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-night-blue to-comic-blue flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="inline-block bg-comic-yellow border-4 border-black px-6 py-3 shadow-comic mb-4">
            <span className="font-comic text-3xl text-black">VSC ADMIN</span>
          </div>
          <p className="text-white/80">Comic Repricing Tool</p>
        </div>

        {/* Form Card */}
        <div className="bg-white border-4 border-black shadow-comic-lg p-8">
          <h2 className="font-comic text-2xl uppercase text-center mb-6">
            {isLogin ? 'Login' : 'Create Account'}
          </h2>

          {error && (
            <div className="bg-red-100 border-2 border-red-500 text-red-700 px-4 py-3 mb-6 font-comic">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            {!isLogin && (
              <div>
                <label className="block font-comic uppercase text-sm mb-2">
                  Name
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full pl-10 pr-4 py-3 border-4 border-black focus:border-comic-blue focus:outline-none"
                    placeholder="Tony"
                  />
                </div>
              </div>
            )}

            <div>
              <label className="block font-comic uppercase text-sm mb-2">
                Email
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full pl-10 pr-4 py-3 border-4 border-black focus:border-comic-blue focus:outline-none"
                  placeholder="tony@vanesasellingcomics.com"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block font-comic uppercase text-sm mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  className="w-full pl-10 pr-12 py-3 border-4 border-black focus:border-comic-blue focus:outline-none"
                  placeholder="Enter password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-comic-yellow border-4 border-black py-3 font-comic text-xl uppercase hover:bg-yellow-400 transition-colors disabled:opacity-50 shadow-comic hover:shadow-none hover:translate-x-1 hover:translate-y-1"
            >
              {loading ? 'Loading...' : isLogin ? 'Login' : 'Create Account'}
            </button>
          </form>

          <div className="mt-6 text-center">
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="text-comic-blue hover:underline font-medium"
            >
              {isLogin ? 'Need an account? Register' : 'Already have an account? Login'}
            </button>
          </div>
        </div>

        <p className="text-center text-white/60 text-sm mt-6">
          VanesaSellingComics Admin Panel
        </p>
      </div>
    </div>
  );
}
