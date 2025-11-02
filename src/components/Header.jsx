import React from 'react';
import { Home, Search, User } from 'lucide-react';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2 font-semibold">
            <div className="grid h-8 w-8 place-items-center rounded-lg bg-slate-900 text-white">
              <Home size={18} />
            </div>
            <span className="text-slate-900">NestFinder</span>
          </a>

          <nav className="hidden md:flex items-center gap-6 text-sm text-slate-700">
            <a href="#listings" className="hover:text-slate-900">Listings</a>
            <a href="#about" className="hover:text-slate-900">About</a>
            <a href="#blog" className="hover:text-slate-900">Blog</a>
            <a href="#pricing" className="hover:text-slate-900">Pricing</a>
            <a href="#contact" className="hover:text-slate-900">Contact</a>
          </nav>

          <div className="flex items-center gap-3">
            <button className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50">
              <Search size={16} />
              <span className="hidden sm:inline">Search</span>
            </button>
            <button className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-3 py-2 text-sm font-medium text-white hover:bg-slate-800">
              <User size={16} />
              <span>Sign In</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
