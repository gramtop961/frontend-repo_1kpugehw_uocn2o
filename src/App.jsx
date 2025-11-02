import React from 'react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import FeaturedListings from './components/FeaturedListings.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <FeaturedListings />
      </main>
      <Footer />
    </div>
  );
}

export default App;
