import React from 'react';
import Spline from '@splinetool/react-spline';
import { MapPin, Search } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative w-full" style={{ minHeight: '70vh' }}>
      {/* Spline background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/8nsoLg1te84JZcE9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        {/* Soft gradient overlays that don't block interaction */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/40 to-white" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white to-transparent" />
      </div>

      {/* Content */}
      <div className="relative mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-4 py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-3 py-1 text-xs font-medium text-slate-700 backdrop-blur">
            <MapPin size={14} />
            Find your next home
          </span>
          <h1 className="mt-4 text-4xl font-bold leading-tight text-slate-900 sm:text-5xl md:text-6xl">
            Discover beautiful properties
            <span className="block text-slate-600">for rent and sale</span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-slate-600">
            Explore curated listings across neighborhoods. Book visits, chat with agents, and save favorites in one place.
          </p>
        </div>

        {/* Search Bar */}
        <div className="mt-8 w-full max-w-3xl">
          <form className="grid grid-cols-1 gap-3 rounded-2xl border border-slate-200 bg-white p-3 shadow-sm sm:grid-cols-3">
            <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2">
              <Search size={16} className="text-slate-500" />
              <input
                type="text"
                placeholder="Search city, neighborhood, or address"
                className="w-full bg-transparent text-sm outline-none placeholder:text-slate-400"
              />
            </div>
            <select className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700 outline-none">
              <option>Buy</option>
              <option>Rent</option>
            </select>
            <button type="submit" className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800">
              Search Homes
            </button>
          </form>
          <p className="mt-3 text-center text-xs text-slate-500">Advanced filters available on the listings page.</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
