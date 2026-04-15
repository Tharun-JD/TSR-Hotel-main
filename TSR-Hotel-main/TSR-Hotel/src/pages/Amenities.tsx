import { useEffect, useState, useRef } from 'react';
import { Music, Film, Waves } from 'lucide-react';

// Image imports - Amenities
import heroImg from '../Amenities img/Amenities hero.jpg';
import card1 from '../Amenities img/card1.png';
import card2 from '../Amenities img/card2.png';
import card3 from '../Amenities img/card3.png';
import card4 from '../Amenities img/card4.png';
import card5 from '../Amenities img/card5.png';
import body1 from '../Amenities img/body1.jpg';
import body2 from '../Amenities img/body2.jpg';
import comeSoon from '../Amenities img/Come soon.jpg';
import comeSoon1 from '../Amenities img/come soon1.jpg';
import comeSoon2 from '../Amenities img/come soon2.png';

export default function Amenities() {
  const [visibleSections, setVisibleSections] = useState<Record<string, boolean>>({});
  
  const observeSection = (id: string) => {
    const sectionRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
      const observer = new IntersectionObserver(([entry]) => {
        setVisibleSections(prev => ({ ...prev, [id]: entry.isIntersecting }));
      }, { threshold: 0.1 });
      if (sectionRef.current) observer.observe(sectionRef.current);
      return () => observer.disconnect();
    }, []);
    return sectionRef;
  };

  const s1Ref = observeSection('hero');
  const s2Ref = observeSection('art');
  const s3Ref = observeSection('moments');
  const s5Ref = observeSection('soon');

  return (
    <div className="bg-white min-h-screen">
      
      {/* 1. Hero Header */}
      <section ref={s1Ref} className={`relative h-[85vh] flex items-center justify-center overflow-hidden transition-all duration-1000 ${visibleSections['hero'] ? 'opacity-100' : 'opacity-0'}`}>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${heroImg}')` }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="relative z-10 text-center px-6 animate-fade-in-up">
          <div className="flex items-center justify-center gap-4 text-[#7a9b3c] mb-6">
            <div className="w-12 md:w-16 h-[1px] bg-[#7a9b3c]"></div>
            <h1 className="text-white text-3xl md:text-5xl lg:text-7xl font-light tracking-widest uppercase mb-2">
              AMENITIES
            </h1>
            <div className="w-12 md:w-16 h-[1px] bg-[#7a9b3c]"></div>
          </div>
          <p className="text-gray-100 text-xs md:text-base tracking-widest uppercase italic max-w-2xl mx-auto leading-relaxed font-serif opacity-90">
             Experience The Extraordinary Comfort Of TSR Hotel
          </p>
        </div>
      </section>

      {/* 2. The Art Of Living (5-Image Grid) */}
      <section ref={s2Ref} className={`py-24 px-6 bg-white transition-all duration-1000 ${visibleSections['art'] ? 'opacity-100' : 'opacity-0'}`}>
        <div className="container mx-auto max-w-6xl">
          <div className={`text-center mb-16 transition-all duration-1000 transform ${visibleSections['art'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="flex items-center justify-center gap-4 text-[#7a9b3c] mb-6">
              <div className="w-16 h-[1px] bg-[#7a9b3c]"></div>
              <h2 className="text-3xl font-light tracking-[0.2em] uppercase text-gray-800">The Art Of Living</h2>
              <div className="w-16 h-[1px] bg-[#7a9b3c]"></div>
            </div>
            <p className="text-[#7a9b3c] text-sm uppercase tracking-[0.3em] mb-8 font-bold">Experience The Extraordinary</p>
            <p className="text-gray-500 font-serif text-sm max-w-3xl mx-auto leading-relaxed italic tracking-wide">
              A celebration of relaxed comfort and thoughtful design. Experience a lifestyle where luxury, serenity, and impeccable hospitality come together in perfect harmony.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 h-auto md:h-[650px]">
             
             {/* Left Column: One Tall Image (Span 4) */}
             <div className={`md:col-span-4 relative overflow-hidden group rounded-[2.5rem] premium-shadow-lg h-[450px] md:h-full transition-all duration-1000 transform ${visibleSections['art'] ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
               <img src={card1} alt="Banquet Hall" className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110" />
               <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
             </div>
             
             {/* Middle Column: Two Stacked Images (Span 5) */}
             <div className="md:col-span-5 grid grid-rows-2 gap-4 md:gap-6 h-full">
                <div 
                  className={`relative overflow-hidden group rounded-[2.5rem] premium-shadow h-[250px] md:h-auto transition-all duration-1000 delay-150 transform ${visibleSections['art'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                >
                   <img src={card2} alt="Lobby" className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110" />
                   <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
                <div 
                  className={`relative overflow-hidden group rounded-[2.5rem] premium-shadow h-[250px] md:h-auto transition-all duration-1000 delay-300 transform ${visibleSections['art'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                >
                   <img src={card4} alt="Meeting" className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110" />
                   <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
             </div>

             {/* Right Column: Two Stacked Images (Span 3) */}
             <div className="md:col-span-3 grid grid-rows-2 gap-4 md:gap-6 h-full">
                <div 
                  className={`relative overflow-hidden group rounded-[2.5rem] premium-shadow h-[250px] md:h-auto transition-all duration-1000 delay-450 transform ${visibleSections['art'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                >
                   <img src={card3} alt="Hall" className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110" />
                   <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
                <div 
                  className={`relative overflow-hidden group rounded-[2.5rem] premium-shadow h-[250px] md:h-auto transition-all duration-1000 delay-600 transform ${visibleSections['art'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                >
                   <img src={card5} alt="Bedroom" className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110" />
                   <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* 3. A Stage for Exceptional Moments */}
      <section ref={s3Ref} className={`relative py-32 overflow-hidden bg-gray-900 text-white transition-all duration-1000 ${visibleSections['moments'] ? 'opacity-100' : 'opacity-0'}`}>
        {/* Background Overlay */}
        <div className="absolute inset-0 opacity-20 bg-cover bg-center grayscale" style={{ backgroundImage: `url('${card3}')` }}></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className={`text-center mb-16 transition-all duration-1000 transform ${visibleSections['moments'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
               <div className="flex items-center justify-center gap-4 text-[#7a9b3c] mb-6">
                <div className="w-16 h-[1px] bg-[#7a9b3c]"></div>
                <h2 className="text-3xl font-light tracking-[0.2em] uppercase text-white">A Stage for Exceptional Moments</h2>
                <div className="w-16 h-[1px] bg-[#7a9b3c]"></div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
               <div className={`lg:col-span-3 hidden lg:block transition-all duration-1000 delay-150 transform ${visibleSections['moments'] ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>
                  <img src={body1} alt="Reception" className="w-full h-[500px] object-cover rounded-[2.5rem] ring-8 ring-[#7a9b3c]/5 premium-shadow" />
               </div>

               <div className={`lg:col-span-6 text-center px-4 transition-all duration-1000 delay-500 transform ${visibleSections['moments'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                  <div className="flex items-center justify-center gap-4 text-[#7a9b3c] mb-8">
                    <div className="w-8 h-[1px] bg-[#7a9b3c]"></div>
                    <span className="text-xl italic font-serif">Giving The Best Just For You</span>
                    <div className="w-8 h-[1px] bg-[#7a9b3c]"></div>
                  </div>
                  <p className="text-sm text-gray-300 font-serif leading-relaxed mb-8 max-w-lg mx-auto tracking-wide">
                    TSR Boutique Hotel will soon home the first ever digital technology cinema experience together with family karaoke entertainment centre when the construction completes. When TSR Boutique Hotel opened its door on October 2018, our hotel facilities will have a Marrybrown Fast Food Restaurant located at ground floor and the beautiful Conference Hall located on top floor deck.
                  </p>
                  <p className="text-[#7a9b3c] text-xs uppercase tracking-[0.3em] font-bold mb-8">
                    The TSR Inflated Water Theme Park expected to be opened soon on the third quarter of 2020.
                  </p>
                  <p className="text-sm text-white/80 font-serif italic mb-10 max-w-lg mx-auto tracking-widest">
                    Come and check us out, see what TSR Boutique Hotel has to offer and have the exciting experience of a new life in Teluk Kemang, Port Dickson.
                  </p>
                  <button className="bg-[#7a9b3c] text-white px-10 py-4 rounded-sm text-xs uppercase tracking-[0.3em] font-bold hover:bg-[#5a7c29] transition-all transform hover:-translate-y-1 shadow-lg active:scale-95">
                    Discover More
                  </button>
               </div>

               <div className={`lg:col-span-3 hidden lg:block transition-all duration-1000 delay-150 transform ${visibleSections['moments'] ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}>
                  <img src={body2} alt="Corridor" className="w-full h-[500px] object-cover rounded-[2.5rem] ring-8 ring-[#7a9b3c]/5 premium-shadow" />
               </div>
            </div>
          </div>
        </div>
      </section>


      {/* 5. Coming Soon */}
      <section ref={s5Ref} className={`py-24 px-6 bg-gray-50/50 transition-all duration-1000 ${visibleSections['soon'] ? 'opacity-100' : 'opacity-0'}`}>
        <div className="container mx-auto max-w-6xl text-center">
           <div className={`mb-20 transition-all duration-1000 transform ${visibleSections['soon'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="flex items-center justify-center gap-4 text-[#7a9b3c] mb-8">
                <div className="w-24 h-[1px] bg-[#7a9b3c]"></div>
                <h2 className="text-3xl font-light tracking-[0.2em] uppercase text-gray-800 font-serif">Coming Soon</h2>
                <div className="w-24 h-[1px] bg-[#7a9b3c]"></div>
              </div>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Karaoke */}
              <div className={`bg-white rounded-sm shadow-lg overflow-hidden transition-all duration-1000 transform hover:-translate-y-2 group ${visibleSections['soon'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: '0.15s' }}>
                 <div className="h-64 overflow-hidden relative">
                    <img src={comeSoon} alt="Karaoke" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                       <Music className="text-white w-12 h-12 animate-kinetic-bob" />
                    </div>
                 </div>
                 <div className="p-8">
                    <h4 className="text-gray-800 text-lg mb-4 font-light uppercase tracking-[0.2em]">Karaoke & Family Entertainment</h4>
                    <p className="text-gray-400 text-xs font-serif leading-relaxed tracking-wide">
                       TSR Karaoke & Family Entertainment Center delivers a sophisticated entertainment experience with music, leisure, and family moments.
                    </p>
                 </div>
              </div>

              {/* Cinema */}
              <div className={`bg-white rounded-sm shadow-lg overflow-hidden transition-all duration-1000 transform hover:-translate-y-2 group ${visibleSections['soon'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: '0.3s' }}>
                 <div className="h-64 overflow-hidden relative">
                    <img src={comeSoon1} alt="TSR Cinemas" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                       <Film className="text-white w-12 h-12 animate-kinetic-bob" style={{ animationDelay: '0.2s' }} />
                    </div>
                 </div>
                 <div className="p-8">
                    <h4 className="text-gray-800 text-lg mb-4 font-light uppercase tracking-[0.2em]">TSR Cinemas</h4>
                    <p className="text-gray-400 text-xs font-serif leading-relaxed tracking-wide">
                       The region's inaugural digital cinema experience, enhanced by cutting-edge technology and a premium immersive sound system.
                    </p>
                 </div>
              </div>

              {/* Water Theme Park */}
              <div className={`bg-white rounded-sm shadow-lg overflow-hidden transition-all duration-1000 transform hover:-translate-y-2 group ${visibleSections['soon'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: '0.45s' }}>
                 <div className="h-64 overflow-hidden relative">
                    <img src={comeSoon2} alt="Water Park" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                       <Waves className="text-white w-12 h-12 animate-kinetic-bob" style={{ animationDelay: '0.4s' }} />
                    </div>
                 </div>
                 <div className="p-8">
                    <h4 className="text-gray-800 text-lg mb-4 font-light uppercase tracking-[0.2em]">TSR Inflated Water Theme Park</h4>
                    <p className="text-gray-400 text-xs font-serif leading-relaxed tracking-wide">
                       TSR Inflated Water Theme Park delivers a dynamic aquatic experience with modern inflatable attractions, creating joyful memories for guests.
                    </p>
                 </div>
              </div>
           </div>
        </div>
      </section>

    </div>
  );
}
