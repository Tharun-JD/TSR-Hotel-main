import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Button from './Button';
import logoImg from '../logo.png';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About Us', href: '/about', delay: '0.2s' },
    { label: 'Rooms & Suites', href: '/rooms', delay: '0.3s' },
    { label: 'Amenities', href: '/amenities', delay: '0.4s' },
    { label: 'Gallery', href: '/gallery', delay: '0.6s' },
  ];

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-smooth ${
        isScrolled
          ? 'bg-black/80 backdrop-blur-lg shadow-lg py-2'
          : 'bg-black/30 backdrop-blur-sm py-3'
      }`}>
        <div className="container mx-auto px-6 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 animate-fade-in-down" style={{ animationDelay: '0.1s' }}>
            <img src={logoImg} alt="TSR Hotels Logo" className={`w-auto transition-all duration-300 ${isScrolled ? 'h-8' : 'h-11'}`} />
            <span className={`text-white font-medium tracking-wide uppercase transition-all duration-300 ${isScrolled ? 'text-sm' : 'text-base'}`}>TSR Hotel</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-10">
            {navLinks.map((item) => {
              const isActive = location.pathname === item.href;
              return (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`text-xs hover:text-[#7a9b3c] transition-colors uppercase tracking-widest relative group animate-fade-in-down ${isActive ? 'text-[#7a9b3c]' : 'text-white'}`}
                  style={{ animationDelay: item.delay }}
                >
                  {item.label}
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-[#7a9b3c] group-hover:w-full transition-all duration-300 ${isActive ? 'w-full' : 'w-0'}`}></span>
                </Link>
              )
            })}
          </nav>

          <div className="flex items-center gap-4">
            <div className="hidden sm:block animate-fade-in-down" style={{ animationDelay: '0.7s' }}>
              <Link to="/enquiry">
                <Button>Book Now</Button>
              </Link>
            </div>
            
            {/* Mobile Toggle */}
            <button 
              className="lg:hidden text-white p-2 hover:text-[#7a9b3c] transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-[60] bg-black/95 backdrop-blur-xl transition-all duration-500 lg:hidden ${isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}>
        <div className="flex flex-col h-full p-10">
          <div className="flex justify-between items-center mb-16">
            <div className="flex items-center gap-2">
              <img src={logoImg} alt="TSR Hotels Logo" className="h-12 w-auto" />
              <span className="text-white text-xl font-medium tracking-wide uppercase">TSR Hotel</span>
            </div>
            <button onClick={() => setIsMenuOpen(false)} className="text-white">
              <X size={32} />
            </button>
          </div>

          <nav className="flex flex-col gap-8">
            {navLinks.map((item, i) => (
              <Link
                key={item.href}
                to={item.href}
                onClick={() => setIsMenuOpen(false)}
                className={`text-2xl uppercase tracking-[0.2em] font-light transition-all duration-500 ${
                  location.pathname === item.href ? 'text-[#7a9b3c] pl-4 border-l border-[#7a9b3c]' : 'text-white'
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="mt-auto">
            <Link to="/enquiry">
              <Button className="w-full py-4 text-lg">Book Now</Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
