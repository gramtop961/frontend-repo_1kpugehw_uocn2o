import React from 'react';
import { BedDouble, Bath, MapPin, Star } from 'lucide-react';

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

const PropertyCard = ({ listing }) => {
  return (
    <a
      href="#"
      className="group block overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:shadow-md"
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <img
          src={listing.image}
          alt={listing.title}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute left-3 top-3 rounded-full bg-white/90 px-2 py-1 text-xs font-medium text-slate-700 backdrop-blur">
          {listing.price}
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
    </a>
  );
};

const FeaturedListings = () => {
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
          {sampleListings.map((l) => (
            <PropertyCard key={l.id} listing={l} />
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
    </section>
  );
};

export default FeaturedListings;
