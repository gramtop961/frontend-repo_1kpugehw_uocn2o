import React from 'react';
import { Home, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="mb-3 flex items-center gap-2 font-semibold text-slate-900">
              <div className="grid h-8 w-8 place-items-center rounded-lg bg-slate-900 text-white"><Home size={18} /></div>
              NestFinder
            </div>
            <p className="text-sm text-slate-600">
              A modern platform to discover, shortlist, and book viewings for homes you love.
            </p>
          </div>
          <div>
            <h4 className="mb-3 text-sm font-semibold text-slate-900">Company</h4>
            <ul className="space-y-2 text-sm text-slate-600">
              <li><a href="#about" className="hover:text-slate-900">About</a></li>
              <li><a href="#blog" className="hover:text-slate-900">Blog</a></li>
              <li><a href="#pricing" className="hover:text-slate-900">Pricing</a></li>
              <li><a href="#terms" className="hover:text-slate-900">Terms & Privacy</a></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-3 text-sm font-semibold text-slate-900">For Users</h4>
            <ul className="space-y-2 text-sm text-slate-600">
              <li><a href="#login" className="hover:text-slate-900">Login</a></li>
              <li><a href="#signup" className="hover:text-slate-900">Signup</a></li>
              <li><a href="#agents" className="hover:text-slate-900">Find an Agent</a></li>
              <li><a href="#help" className="hover:text-slate-900">Help Center</a></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-3 text-sm font-semibold text-slate-900">Contact</h4>
            <ul className="space-y-2 text-sm text-slate-600">
              <li className="flex items-center gap-2"><Mail size={16} /> hello@nestfinder.app</li>
              <li className="flex items-center gap-2"><Phone size={16} /> +1 (555) 123-4567</li>
            </ul>
          </div>
        </div>
        <div className="mt-10 border-t border-slate-200 pt-6 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} NestFinder. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
