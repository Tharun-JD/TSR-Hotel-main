import { useState } from 'react';
import { Play } from 'lucide-react';

// Image imports
import deluxeRoom from '../Rooms img/Deluxe room.jpg';
import familyRoom from '../Rooms img/Family room.jpg';
import meeting from '../Rooms img/Meeting.jpg';
import superiorRoom from '../Rooms img/Superior room.jpg';
import roomsHero from '../Rooms img/Rooms hero.jpg';
import standardRoom from '../Rooms img/Standard room.jpg';
import juniorSuite from '../Rooms img/Junior suite room.jpg';


import amenityArt from '../Amenities img/art.png';
import amenityBody1 from '../Amenities img/body1.jpg';
import amenityBody2 from '../Amenities img/body2.jpg';

import homeHero from '../Home img/Home hero.jpg';
import homeUtube from '../Home img/Home utube.jpg';

const categories = [
  { id: 'all', label: 'ALL GALLERIES' },
  { id: 'rooms', label: 'ROOMS & SUITES' },
  { id: 'amenities', label: 'AMENITIES' },
];

const galleryImages = [
  { id: 1, src: roomsHero, category: 'rooms', span: 'md:col-span-2 md:row-span-2' },
  { id: 3, src: homeUtube, category: 'all', span: 'md:col-span-1 md:row-span-1', isVideo: true },
  { id: 4, src: meeting, category: 'rooms', span: 'md:col-span-1 md:row-span-2' },
  { id: 5, src: amenityArt, category: 'amenities', span: 'md:col-span-1 md:row-span-1' },
  { id: 7, src: deluxeRoom, category: 'rooms', span: 'md:col-span-1 md:row-span-1' },
  { id: 8, src: amenityBody1, category: 'amenities', span: 'md:col-span-2 md:row-span-1' },
  { id: 9, src: familyRoom, category: 'rooms', span: 'md:col-span-1 md:row-span-1' },
  { id: 11, src: superiorRoom, category: 'rooms', span: 'md:col-span-1 md:row-span-1' },
  { id: 12, src: amenityBody2, category: 'amenities', span: 'md:col-span-1 md:row-span-1' },
  { id: 13, src: standardRoom, category: 'rooms', span: 'md:col-span-1 md:row-span-1' },
  { id: 14, src: juniorSuite, category: 'rooms', span: 'md:col-span-2 md:row-span-1' },
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredImages = activeCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  return (
    <div className="bg-white min-h-screen">
      
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[85vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${homeHero}')` }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="relative z-10 text-center px-6 animate-fade-in-up">
          <div className="flex items-center justify-center gap-4 text-[#7a9b3c] mb-6">
            <div className="w-12 md:w-16 h-[1px] bg-[#7a9b3c]"></div>
            <h1 className="text-white text-3xl md:text-5xl lg:text-7xl font-light tracking-widest uppercase mb-2">
              Gallery
            </h1>
            <div className="w-12 md:w-16 h-[1px] bg-[#7a9b3c]"></div>
          </div>
          <p className="text-gray-100 text-xs md:text-base tracking-widest uppercase italic max-w-2xl mx-auto leading-relaxed font-serif opacity-90">
            Capturing the timeless elegance of TSR Hotel
          </p>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="bg-[#7a9b3c] py-6 md:py-8 shadow-md relative z-10">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-6 md:gap-12 lg:gap-20 items-center">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`text-[11px] md:text-lg lg:text-xl tracking-widest transition-all duration-300 relative pb-1 md:pb-2 whitespace-nowrap ${
                  activeCategory === cat.id 
                    ? 'text-white font-bold' 
                    : 'text-black/60 hover:text-black font-medium'
                }`}
              >
                {cat.label}
                {activeCategory === cat.id && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] md:h-[3px] bg-white animate-scale-in"></span>
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 md:py-24 px-6 bg-white overflow-hidden">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 auto-rows-[250px] md:auto-rows-[300px]">
            {filteredImages.map((image, index) => (
              <div 
                key={image.id}
                className={`group relative overflow-hidden rounded-[2.5rem] premium-shadow cursor-pointer transition-all duration-700 animate-fade-in-up ${image.span}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <img 
                  src={image.src} 
                  alt={`Gallery ${image.id}`} 
                  className="w-full h-full object-cover transition-transform duration-[1500ms] group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/60 transition-all duration-500">
                  <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 scale-90 group-hover:scale-100 transform border border-white/20 m-6">
                    <p className="text-white text-[10px] md:text-xs tracking-[0.4em] uppercase mb-1">{image.category}</p>
                    <div className="w-10 h-[1px] bg-[#7a9b3c]"></div>
                  </div>
                </div>
                
                {image.isVideo && (
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-12 h-12 md:w-16 md:h-16 rounded-full border border-white/50 flex items-center justify-center bg-white/10 backdrop-blur-sm group-hover:bg-[#7a9b3c] group-hover:border-[#7a9b3c] transition-all duration-500">
                      <Play className="text-white fill-white w-5 h-5 md:w-6 md:h-6 ml-1" />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
