import React, { useMemo, useState, useRef, useEffect } from 'react';
import Spline from '@splinetool/react-spline';
import { MapPin, Search } from 'lucide-react';

const cities = [
  'New York',
  'San Francisco',
  'Los Angeles',
  'Seattle',
  'Austin',
  'Chicago',
  'Miami',
  'Boston',
  'Denver',
  'Portland',
  'Atlanta',
  'Dallas',
  'Houston',
  'Phoenix',
  'San Diego',
];

const Hero = () => {
  const [query, setQuery] = useState('');
  const [type, setType] = useState('Buy');
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const inputRef = useRef(null);
  const listboxId = 'search-suggestions';

  const suggestions = useMemo(() => {
    if (query.trim().length < 2) return [];
    const q = query.toLowerCase();
    return cities.filter((c) => c.toLowerCase().includes(q)).slice(0, 6);
  }, [query]);

  useEffect(() => {
    setOpen(suggestions.length > 0);
    setActiveIndex(-1);
  }, [suggestions.length]);

  const onKeyDown = (e) => {
    if (!open) return;
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActiveIndex((i) => (i + 1) % suggestions.length);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActiveIndex((i) => (i - 1 + suggestions.length) % suggestions.length);
    } else if (e.key === 'Enter' && activeIndex >= 0) {
      e.preventDefault();
      setQuery(suggestions[activeIndex]);
      setOpen(false);
    } else if (e.key === 'Escape') {
      setOpen(false);
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    // In a full app this would route to /listings with query params
    const anchor = document.getElementById('listings');
    if (anchor) anchor.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

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

        {/* Search Bar with typeahead */}
        <div className="mt-8 w-full max-w-3xl">
          <form onSubmit={onSubmit} className="relative grid grid-cols-1 gap-3 rounded-2xl border border-slate-200 bg-white p-3 shadow-sm sm:grid-cols-3" role="search" aria-label="Property search">
            <div className="relative sm:col-span-2">
              <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 focus-within:ring-2 focus-within:ring-slate-300">
                <Search size={16} className="text-slate-500" />
                <input
                  ref={inputRef}
                  type="search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyDown={onKeyDown}
                  placeholder="Search city, neighborhood, or address"
                  aria-autocomplete="list"
                  aria-controls={listboxId}
                  aria-expanded={open}
                  aria-haspopup="listbox"
                  className="w-full bg-transparent text-sm outline-none placeholder:text-slate-400"
                />
              </div>

              {open && (
                <ul
                  id={listboxId}
                  role="listbox"
                  className="absolute z-20 mt-2 w-full overflow-hidden rounded-xl border border-slate-200 bg-white shadow-xl"
                >
                  {suggestions.map((item, idx) => (
                    <li
                      key={item}
                      role="option"
                      aria-selected={idx === activeIndex}
                      onMouseDown={(e) => e.preventDefault()}
                      onClick={() => {
                        setQuery(item);
                        setOpen(false);
                        inputRef.current?.focus();
                      }}
                      className={`flex cursor-pointer items-center justify-between px-3 py-2 text-sm ${
                        idx === activeIndex ? 'bg-slate-50' : 'bg-white'
                      } hover:bg-slate-50`}
                    >
                      <span className="text-slate-700">{item}</span>
                      <span className="text-xs text-slate-400">City</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <select
              aria-label="Listing type"
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700 outline-none focus:ring-2 focus:ring-slate-300"
            >
              <option>Buy</option>
              <option>Rent</option>
            </select>
            <button type="submit" className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white outline-none ring-slate-300 hover:bg-slate-800 focus:ring-2">
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
