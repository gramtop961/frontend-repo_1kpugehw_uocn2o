import React, { useMemo, useState } from 'react';
import { BedDouble, Bath, MapPin, Star, Heart, Eye, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

const sampleListings = [
  {
    id: '1',
    title: 'Modern Loft with Skyline Views',
    location: 'Downtown, Metropolis',
    price: '$2,450/mo',
    beds: 2,
    baths: 2,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1501183638710-841dd1904471?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: '2',
    title: 'Cozy Scandinavian Apartment',
    location: 'River Park, Greenfield',
    price: '$389,000',
    beds: 3,
    baths: 2,
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: '3',
    title: 'Sunlit Family Home with Garden',
    location: 'Willow Creek, Brookside',
    price: '$3,150/mo',
    beds: 4,
    baths: 3,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&w=1600&auto=format&fit=crop',
  },
];

const PropertyCard = ({ listing, onQuickView, onToggleSave, saved }) => {
  return (
    <div
      className="group relative block overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:shadow-md focus-within:ring-2 focus-within:ring-slate-300"
      tabIndex={0}
      aria-label={`${listing.title} in ${listing.location}`}
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <img
          src={listing.image}
          alt="Property"
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute left-3 top-3 rounded-full bg-white/95 px-2 py-1 text-xs font-medium text-slate-700 backdrop-blur">
          {listing.price}
        </div>

        {/* Quick actions */}
        <div className="pointer-events-none absolute inset-0 flex items-start justify-end p-3 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
          <div className="pointer-events-auto grid gap-2">
            <button
              aria-label={saved ? 'Unsave property' : 'Save property'}
              onClick={(e) => {
                e.stopPropagation();
                onToggleSave(listing.id);
              }}
              className={`grid h-9 w-9 place-items-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:bg-slate-50 ${saved ? 'text-rose-600' : ''}`}
            >
              <Heart size={18} fill={saved ? 'currentColor' : 'none'} />
            </button>
            <button
              aria-label="Quick view"
              onClick={(e) => {
                e.stopPropagation();
                onQuickView(listing);
              }}
              className="grid h-9 w-9 place-items-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:bg-slate-50"
            >
              <Eye size={18} />
            </button>
          </div>
        </div>
      </div>
      <div className="space-y-2 p-4">
        <div className="flex items-start justify-between gap-2">
          <h3 className="line-clamp-1 text-base font-semibold text-slate-900">{listing.title}</h3>
          <div className="flex items-center gap-1 text-amber-500">
            <Star size={16} fill="currentColor" />
            <span className="text-xs font-medium text-slate-700">{listing.rating}</span>
          </div>
        </div>
        <div className="flex items-center gap-2 text-sm text-slate-600">
          <MapPin size={16} className="text-slate-400" />
          <span className="line-clamp-1">{listing.location}</span>
        </div>
        <div className="mt-2 flex items-center gap-4 text-sm text-slate-700">
          <span className="inline-flex items-center gap-1"><BedDouble size={16} /> {listing.beds} beds</span>
          <span className="inline-flex items-center gap-1"><Bath size={16} /> {listing.baths} baths</span>
        </div>
      </div>
    </div>
  );
};

const QuickViewModal = ({ open, onClose, listing }) => {
  return (
    <AnimatePresence>
      {open && listing ? (
        <motion.div
          className="fixed inset-0 z-50 grid place-items-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          aria-modal="true"
          role="dialog"
        >
          <div className="absolute inset-0 bg-slate-900/50" onClick={onClose} />
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
            className="relative z-10 w-full max-w-2xl overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl"
          >
            <button
              aria-label="Close"
              onClick={onClose}
              className="absolute right-3 top-3 z-10 grid h-9 w-9 place-items-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm hover:bg-slate-50"
            >
              <X size={18} />
            </button>
            <div className="grid gap-0 sm:grid-cols-2">
              <div className="relative aspect-[4/3] w-full overflow-hidden sm:aspect-auto">
                <img src={listing.image} alt="Preview" className="h-full w-full object-cover" />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-slate-900">{listing.title}</h3>
                <div className="mt-1 flex items-center gap-2 text-sm text-slate-600">
                  <MapPin size={16} className="text-slate-400" /> {listing.location}
                </div>
                <div className="mt-3 text-2xl font-bold text-slate-900">{listing.price}</div>
                <div className="mt-4 flex items-center gap-4 text-sm text-slate-700">
                  <span className="inline-flex items-center gap-1"><BedDouble size={16} /> {listing.beds} beds</span>
                  <span className="inline-flex items-center gap-1"><Bath size={16} /> {listing.baths} baths</span>
                </div>
                <p className="mt-4 text-sm text-slate-600">
                  Bright, airy interiors with modern finishes. Close to transit, parks, and cafes. Book a visit or contact the agent for more details.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <button className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800">Book a Visit</button>
                  <button className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50">Contact Agent</button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
};

const FeaturedListings = () => {
  const [savedIds, setSavedIds] = useState(() => new Set());
  const [toast, setToast] = useState(null);
  const [quickView, setQuickView] = useState({ open: false, listing: null });

  const listings = useMemo(() => sampleListings, []);

  const toggleSave = (id) => {
    setSavedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
        setToast({ type: 'info', message: 'Removed from saved' });
      } else {
        next.add(id);
        setToast({ type: 'success', message: 'Added to saved' });
      }
      return next;
    });
    // Auto-clear toast
    setTimeout(() => setToast(null), 1800);
  };

  return (
    <section id="listings" className="relative py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">Featured Listings</h2>
            <p className="mt-1 text-slate-600">Handpicked homes and apartments you might like</p>
          </div>
          <a
            href="#"
            className="hidden rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 sm:inline-flex"
          >
            View all listings
          </a>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {listings.map((l) => (
            <PropertyCard
              key={l.id}
              listing={l}
              onQuickView={(listing) => setQuickView({ open: true, listing })}
              onToggleSave={toggleSave}
              saved={savedIds.has(l.id)}
            />
          ))}
        </div>
        <div className="mt-8 text-center sm:hidden">
          <a
            href="#"
            className="inline-flex rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
          >
            View all listings
          </a>
        </div>
      </div>

      {/* Toast */}
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 10, opacity: 0 }}
            className={`fixed bottom-6 left-1/2 z-50 -translate-x-1/2 rounded-xl px-4 py-2 text-sm shadow-lg ${
              toast.type === 'success' ? 'bg-emerald-600 text-white' : 'bg-slate-800 text-white'
            }`}
            role="status"
            aria-live="polite"
          >
            {toast.message}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Quick view modal */}
      <QuickViewModal
        open={quickView.open}
        listing={quickView.listing}
        onClose={() => setQuickView({ open: false, listing: null })}
      />
    </section>
  );
};

export default FeaturedListings;
