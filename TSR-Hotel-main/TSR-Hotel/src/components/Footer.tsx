import { Link } from 'react-router-dom';
import { Facebook, Instagram, Youtube, Mail, Phone, MapPin, Home, Image, Calendar, Bed, MessageSquare } from 'lucide-react';
import logoImg from '../logo.png';

export default function Footer() {
  return (
    <footer className="bg-[#0a0f1a] text-gray-300">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <img src={logoImg} alt="TSR Hotels Logo" className="h-12 w-auto" />
              <span className="text-white text-xl font-medium tracking-wider uppercase">TSR HOTEL</span>
            </div>
            <p className="text-sm leading-relaxed mb-6">
              Experience luxury and comfort where every detail is designed to create unforgettable memories.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-[#7a9b3c] hover:bg-[#6a8b2c] rounded flex items-center justify-center transition-colors">
                <Facebook className="w-5 h-5 text-white" />
              </a>
              <a href="#" className="w-10 h-10 bg-[#7a9b3c] hover:bg-[#6a8b2c] rounded flex items-center justify-center transition-colors">
                <Instagram className="w-5 h-5 text-white" />
              </a>
              <a href="#" className="w-10 h-10 bg-[#7a9b3c] hover:bg-[#6a8b2c] rounded flex items-center justify-center transition-colors">
                <Youtube className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white text-lg mb-6 uppercase tracking-wider">Rooms & Suites</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Bed className="w-4 h-4 text-[#7a9b3c]" />
                <Link to="/rooms" className="hover:text-[#7a9b3c] transition-colors">Deluxe Rooms</Link>
              </li>
              <li className="flex items-center gap-2">
                <Bed className="w-4 h-4 text-[#7a9b3c]" />
                <Link to="/rooms" className="hover:text-[#7a9b3c] transition-colors">Executive Suites</Link>
              </li>
              <li className="flex items-center gap-2">
                <Bed className="w-4 h-4 text-[#7a9b3c]" />
                <Link to="/rooms" className="hover:text-[#7a9b3c] transition-colors">Presidential Suite</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white text-lg mb-6 uppercase tracking-wider">About Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Home className="w-4 h-4 text-[#7a9b3c]" />
                <Link to="/" className="hover:text-[#7a9b3c] transition-colors">Hotel</Link>
              </li>
              <li className="flex items-center gap-2">
                <Image className="w-4 h-4 text-[#7a9b3c]" />
                <Link to="/gallery" className="hover:text-[#7a9b3c] transition-colors">Gallery</Link>
              </li>
              <li className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-[#7a9b3c]" />
                <Link to="/events" className="hover:text-[#7a9b3c] transition-colors">Events</Link>
              </li>
              <li className="flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-[#7a9b3c]" />
                <Link to="/contact" className="hover:text-[#7a9b3c] transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white text-lg mb-6 uppercase tracking-wider">Newsletter Sign Up</h3>
            <p className="text-sm mb-4">Subscribe to receive updates and special offers</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-2 bg-white/10 border border-gray-700 text-white text-sm focus:outline-none focus:border-[#7a9b3c]"
              />
              <button className="bg-[#7a9b3c] hover:bg-[#6a8b2c] px-6 py-2 transition-colors">
                <Mail className="w-5 h-5 text-white" />
              </button>
            </div>
            <div className="mt-6 space-y-2 text-sm">
              <div className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-[#7a9b3c] mt-1" />
                <span>+1 234 567 8900</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#7a9b3c] mt-1" />
                <span>123 Luxury Avenue, Paradise City</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-sm">
          <p>&copy; Copyright 2025 by TSR Boutique Hotel</p>
        </div>
      </div>
    </footer>
  );
}
