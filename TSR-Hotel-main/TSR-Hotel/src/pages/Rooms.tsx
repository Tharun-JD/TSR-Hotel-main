import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SectionHeading from '../components/SectionHeading';

import roomsHero from '../Rooms img/Rooms hero.jpg';
import standardRoom from '../Rooms img/Standard room.jpg';
import superiorRoom from '../Rooms img/Superior room.jpg';
import deluxeRoom from '../Rooms img/Deluxe room.jpg';
import juniorSuite from '../Rooms img/Junior suite room.jpg';
import familyRoom from '../Rooms img/Family room.jpg';
import CelebrationsSection from '../components/CelebrationsSection';

export default function Rooms() {
  const [visibleItems, setVisibleItems] = useState<Record<number, boolean>>({});
  
  const roomTypes = [
    {
      title: 'STANDARD ROOM',
      image: standardRoom,
      description: 'Comfortable Space Designed For A Pleasant Stay, Thoughtfully Equipped With Essential Amenities That Ensure Everyday Comfort, Making It An Ideal Choice For Guests Who Seek Great Value Without Compromise.',
      features: ['Modern Amenities', 'Premium Bedding', 'Compact Comfort']
    },
    {
      title: 'SUPERIOR ROOM',
      image: superiorRoom,
      description: 'Enhanced Comfort And Refined Interiors, Designed To Make Your Stay More Relaxing And Enjoyable. Ideal For Guests Who Appreciate Extra Space, Better Amenities, And A Touch Of Elegance.',
      features: ['City View', 'Executive Desk', 'Spacious Layout']
    },
    {
      title: 'DELUXE ROOM',
      image: deluxeRoom,
      description: 'A Comfortable And Thoughtfully Designed Space For Everyday Stays, Featuring Soft Interiors And Essential Amenities That Ensure A Relaxed And Pleasant Experience.',
      features: ['Garden View', 'Mini Bar', 'Premium Bath']
    },
    {
      title: 'JUNIOR SUITE ROOM',
      image: juniorSuite,
      description: 'An Elegant Space Offering Extra Room And Elevated Comfort. Thoughtfully Designed To Enhance Your Stay. Refined Interiors And Perfect For Guests Seeking A More Indulgent And Relaxing Experience.',
      features: ['Living Area', 'Luxury Decor', 'Coffee Station']
    },
    {
      title: 'FAMILY ROOM',
      image: familyRoom,
      description: 'Spacious Rooms Thoughtfully Designed To Bring Families Together, Featuring Comfortable Sleeping Areas And Plenty Of Space To Move And Relax, Making Them Perfect For Creating Memorable Moments.',
      features: ['Kids Area', 'Multiple Beds', 'Safety Features']
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute('data-index'));
          setVisibleItems((prev) => ({ ...prev, [index]: entry.isIntersecting }));
        });
      },
      { threshold: 0.2 }
    );

    const elements = document.querySelectorAll('.scroll-reveal-item');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${roomsHero}')` }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="relative z-10 text-center px-6 animate-fade-in-up">
          <div className="flex items-center justify-center gap-4 text-[#7a9b3c] mb-6">
            <div className="w-12 md:w-16 h-[1px] bg-[#7a9b3c]"></div>
            <h1 className="text-white text-3xl md:text-5xl lg:text-7xl font-light mb-4 tracking-widest uppercase mb-0">
              Rooms & Suites
            </h1>
            <div className="w-12 md:w-16 h-[1px] bg-[#7a9b3c]"></div>
          </div>
          <p className="text-gray-200 text-xs md:text-base tracking-widest uppercase italic max-w-2xl mx-auto leading-relaxed font-serif opacity-90">
            Thoughtfully designed spaces balancing comfort and refined luxury.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 px-6 max-w-7xl mx-auto overflow-hidden">
        <div className="text-center mb-20 animate-fade-in-up">
          <SectionHeading subtitle="Each room type offers a perfect blend of comfort, elegance, and functionality.">
            <span className="block text-[#7a9b3c]">EXPLORE EVERY KIND</span>
            <span className="block text-[#7a9b3c]">— OF STAY WE OFFER —</span>
          </SectionHeading>
        </div>

        <div className="space-y-24 md:space-y-32">
          {roomTypes.map((room, index) => {
            const isEven = index % 2 === 1;
            const isVisible = visibleItems[index];
            
            return (
              <div 
                key={index} 
                data-index={index}
                className={`scroll-reveal-item flex flex-col ${isEven ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 lg:gap-20 items-center transition-all duration-1000 transform`}
              >
                {/* Image Card */}
                <div 
                  className={`w-full md:w-1/2 relative group overflow-hidden rounded-[2.5rem] premium-shadow-lg transition-all duration-1000 transform 
                    ${isVisible 
                      ? 'translate-x-0 opacity-100' 
                      : (isEven ? 'translate-x-20 opacity-0' : '-translate-x-20 opacity-0')}`}
                >
                  {/* Subtle Corner Light Glow */}
                  <div className="absolute -top-20 -left-20 w-48 h-48 bg-[#7a9b3c]/20 blur-[80px] rounded-full z-10 pointer-events-none group-hover:bg-[#7a9b3c]/30 transition-colors duration-700"></div>
                  
                  <div className="overflow-hidden aspect-[4/3] md:aspect-auto md:h-[450px]">
                    <img 
                      src={room.image} 
                      alt={room.title} 
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                  </div>
                  
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-500"></div>
                  
                  {/* Floating Title Decoration */}
                  <div className={`absolute bottom-8 ${isEven ? 'left-8' : 'right-8'} flex items-center gap-3 bg-black/80 backdrop-blur-md px-6 py-3 border border-white/10 rounded-full z-20`}>
                     <div className="w-8 h-[1px] bg-[#7a9b3c]"></div>
                     <span className="text-white text-[10px] tracking-[0.3em] font-medium uppercase">{room.title}</span>
                  </div>
                </div>
                
                {/* Content Side */}
                <div 
                  className={`w-full md:w-1/2 text-left transition-all duration-1000 delay-300 transform
                    ${isVisible 
                      ? 'translate-x-0 opacity-100' 
                      : (isEven ? '-translate-x-20 opacity-0' : 'translate-x-20 opacity-0')}`}
                >
                  <div className="inline-flex items-center gap-4 text-[#7a9b3c] mb-6">
                    <span className="text-xl font-serif">0{index + 1}</span>
                    <div className="w-12 h-[1px] bg-[#7a9b3c]/50"></div>
                  </div>
                  
                  <h2 className="text-3xl lg:text-4xl font-light text-[#7a9b3c] mb-8 tracking-wider uppercase leading-tight font-serif">
                    {room.title}
                  </h2>
                  
                  <p className="text-gray-600 text-sm lg:text-base leading-relaxed mb-10 font-serif italic max-w-lg">
                    "{room.description}"
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
                    {room.features.map((feature, fIndex) => (
                      <div key={fIndex} className="flex items-center gap-4 group">
                         <div className="w-2 h-2 rotate-45 border border-[#7a9b3c] group-hover:bg-[#7a9b3c] transition-colors"></div>
                         <span className="text-xs lg:text-sm text-gray-800 tracking-widest uppercase font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Link to="/contact">
                    <button className="relative group overflow-hidden border border-[#7a9b3c] px-12 py-4 text-xs font-bold tracking-[0.2em] uppercase text-gray-900 transition-all duration-500 hover:text-white">
                      <div className="absolute inset-0 bg-[#7a9b3c] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></div>
                      <span className="relative z-10 font-serif">Reserve Your Date</span>
                    </button>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Celebrations Section */}
      <CelebrationsSection />
    </div>
  );
}
