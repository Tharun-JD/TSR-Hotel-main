import { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Sofa, Wifi, Gem, Sparkles, Building2, Utensils, Leaf, Bell, Waves } from 'lucide-react';

// Image imports
import aboutHeroImg from '../About img/About hero.jpg';
import aboutWelcomeImg from '../About img/About1.png';
import founderImg from '../About img/Founder.png';
import watermarkLogo from '../logo.png';
import card1Img from '../Amenities img/card3.png'; // VIP Lounges
import card2Img from '../Rooms img/Standard room.jpg'; // Free WIFI
import card3Img from '../Rooms img/Superior room.jpg';   // Elite Rewards
import card4Img from '../About img/About card1.png';  // 24/7 Concierge
import card5Img from '../About img/About card2.png';  // Fine Dining
import card6Img from '../About img/About card3.png';  // Infinity Pool
import storyImg from '../About img/about Our story.jpg';
import servicesBg from '../About img/About Services.jpg';
import readyBg from '../About img/About ready.jpg';

// Shared Card Component for Excellence Slider
function Card({ card, i, visibleSections }: { card: any, i: number, visibleSections: any }) {
  return (
    <div 
      className={`relative h-96 group overflow-hidden rounded-[2.5rem] premium-shadow transition-all duration-1000 transform ${visibleSections['excellence'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} 
      style={{ transitionDelay: `${i * 0.15}s` }}
    >
      <img src={card.img} alt={card.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-500"></div>
      
      {/* Decorative Card Header */}
      <div className="absolute top-8 left-0 right-0 px-8 flex items-center justify-center gap-4">
        <div className="flex-grow h-[1px] bg-[#7a9b3c]/50 relative">
           <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-1 rotate-45 bg-[#7a9b3c]"></div>
        </div>
        <div className="bg-white/10 backdrop-blur-md p-2 rounded-sm border border-white/20">
          {card.icon}
        </div>
        <div className="flex-grow h-[1px] bg-[#7a9b3c]/50 relative">
           <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-1 rotate-45 bg-[#7a9b3c]"></div>
        </div>
      </div>

      {/* Title */}
      <div className="absolute inset-0 flex items-center justify-center">
        <h3 className="text-white text-3xl font-serif tracking-widest drop-shadow-lg text-center px-4">{card.title}</h3>
      </div>

      {/* Bottom Description Bar */}
      <div className="absolute bottom-0 left-0 right-0 bg-black/80 backdrop-blur-md p-6 transform translate-y-0 transition-transform duration-500">
        <p className="text-gray-200 text-sm font-serif leading-relaxed text-center tracking-wide italic">
          {card.desc}
        </p>
      </div>
    </div>
  );
}

export default function About() {
  const [visibleSections, setVisibleSections] = useState<Record<string, boolean>>({});
  
  const observeSection = (id: string) => {
    const sectionRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
      const observer = new IntersectionObserver(([entry]) => {
        setVisibleSections(prev => ({ ...prev, [id]: entry.isIntersecting }));
      }, { threshold: 0.2 });
      if (sectionRef.current) observer.observe(sectionRef.current);
      return () => observer.disconnect();
    }, []);
    return sectionRef;
  };

  const s1Ref = observeSection('hero');
  const s2Ref = observeSection('welcome');
  const s3Ref = observeSection('founder');
  const s4Ref = observeSection('excellence');
  const s5Ref = observeSection('story');
  const s6Ref = observeSection('services');
  const s7Ref = observeSection('cta');

  const [excellenceIndex, setExcellenceIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const excellenceData = [
    { 
      img: card1Img, 
      icon: <Sofa className="w-8 h-8 text-[#7a9b3c]" />, 
      title: 'VIP Lounges', 
      desc: 'Private executive spaces designed for both relaxation and business.' 
    },
    { 
      img: card2Img, 
      icon: <Wifi className="w-8 h-8 text-[#7a9b3c]" />, 
      title: 'Free WIFI', 
      desc: 'Fast, secure internet access available anytime across the entire property.' 
    },
    { 
      img: card3Img, 
      icon: <Gem className="w-8 h-8 text-[#7a9b3c]" />, 
      title: 'Elite Rewards', 
      desc: 'Exclusive membership benefits that elevate every single stay.' 
    },
    { 
      img: card4Img, 
      icon: <Bell className="w-8 h-8 text-[#7a9b3c]" />, 
      title: '24/7 Concierge', 
      desc: 'Dedicated staff ready to fulfill your every request, any time of the day.' 
    },
    { 
      img: card5Img, 
      icon: <Utensils className="w-8 h-8 text-[#7a9b3c]" />, 
      title: 'Fine Dining', 
      desc: 'Michelin-star experiences curated by world-renowned executive chefs.' 
    },
    { 
      img: card6Img, 
      icon: <Waves className="w-8 h-8 text-[#7a9b3c]" />, 
      title: 'Infinity Pool', 
      desc: 'Breathtaking views from our temperature-controlled rooftop infinity pool.' 
    }
  ];

  const nextExcellence = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setExcellenceIndex((prev) => (prev + 3 >= excellenceData.length ? 0 : prev + 3));
      setIsTransitioning(false);
    }, 500); // Wait for fade out
  };

  const prevExcellence = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setExcellenceIndex((prev) => (prev - 3 < 0 ? 3 : prev - 3));
      setIsTransitioning(false);
    }, 500);
  };

  return (
    <div className="bg-white min-h-screen">
      
      {/* 1. Hero Header & Floating Stats */}
      <section ref={s1Ref} className={`relative h-[85vh] flex items-center justify-center transition-all duration-1000 ${visibleSections['hero'] ? 'opacity-100' : 'opacity-0'}`}>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${aboutHeroImg}')` }}
        >
          {/* Subtle dark gradient for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/20 to-transparent"></div>
        </div>

        <div className={`relative z-10 w-full container mx-auto px-6 lg:px-16 transition-all duration-1000 delay-300 transform ${visibleSections['hero'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="max-w-xl text-left">
            <h1 className="text-white text-3xl md:text-5xl font-light mb-4 font-serif tracking-[0.1em] drop-shadow-md">
              ABOUT OUR HOTEL
            </h1>
            <p className="text-gray-100 text-sm md:text-base leading-relaxed tracking-[0.2em] drop-shadow-sm uppercase">
              COMFORT, QUALITY, AND CARE — CREATING<br />
              MEMORABLE STAYS AND DINING<br />
              EXPERIENCES EVERY DAY.
            </p>
          </div>
        </div>

        {/* Floating Stats Bar */}
        <div className={`absolute -bottom-16 left-1/2 transform -translate-x-1/2 w-11/12 max-w-5xl z-20 transition-all duration-1000 delay-500 ${visibleSections['hero'] ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
          <div className="bg-white px-8 py-8 shadow-2xl rounded-sm premium-shadow">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-gray-200">
              
              <div className="flex flex-col justify-center animate-kinetic-bob" style={{ animationDelay: '0.1s' }}>
                <span className="text-3xl font-serif text-[#5a7c29] mb-1">1988</span>
                <span className="text-xs font-semibold text-gray-600 uppercase tracking-widest">FOUNDED</span>
              </div>
              
              <div className="flex flex-col justify-center animate-kinetic-bob" style={{ animationDelay: '0.2s' }}>
                <span className="text-3xl font-serif text-[#5a7c29] mb-1">92+</span>
                <span className="text-xs font-semibold text-gray-600 uppercase tracking-widest">ROOMS</span>
              </div>
              
              <div className="flex flex-col justify-center animate-kinetic-bob" style={{ animationDelay: '0.3s' }}>
                <span className="text-3xl font-serif text-[#5a7c29] mb-1">30+</span>
                <span className="text-xs font-semibold text-gray-600 uppercase tracking-widest">EXPERIENCE</span>
              </div>
              
              <div className="flex flex-col justify-center animate-kinetic-bob" style={{ animationDelay: '0.4s' }}>
                <span className="text-2xl text-[#5a7c29] tracking-widest mb-2">★★★★</span>
                <span className="text-xs font-semibold text-gray-600 uppercase tracking-widest">HOTEL</span>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 2. Welcome Block with Watermark */}
      <section ref={s2Ref} className={`pt-32 pb-24 px-6 relative overflow-hidden transition-all duration-1000 ${visibleSections['welcome'] ? 'opacity-100' : 'opacity-0'}`}>
        <div className="container mx-auto max-w-5xl text-center relative z-10">
          
          <div className={`mb-10 transition-all duration-1000 transform ${visibleSections['welcome'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="flex items-center justify-center gap-4 text-[#5a7c29]">
              <div className="w-16 h-[1px] bg-[#5a7c29]"></div>
              <h2 className="text-2xl md:text-3xl font-light tracking-[0.2em] uppercase">WELCOME TO TSR HOTEL</h2>
              <div className="w-16 h-[1px] bg-[#5a7c29]"></div>
            </div>
          </div>

          <div className={`relative mb-16 transition-all duration-1000 delay-300 transform ${visibleSections['welcome'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            {/* Watermark Logo */}
            <div className="absolute top-1/2 left-1/2 justify-center flex transform -translate-x-1/2 -translate-y-1/2 opacity-[0.05] pointer-events-none z-[-1]">
              <img src={watermarkLogo} alt="Background Watermark Logo" className="h-48 md:h-96 w-auto grayscale" />
            </div>

            <p className="text-gray-800 text-sm md:text-[15px] leading-relaxed max-w-4xl mx-auto font-serif mb-6 tracking-wide">
              TSR Hotels Group has been dynamically involved in the luxury hospitality and property development industry since 1988. The Group has over 30 years of experience in creating vibrant, quality and beautiful experiences both residential and commercials.
            </p>
            <p className="text-gray-800 text-sm md:text-[15px] leading-relaxed max-w-4xl mx-auto font-serif tracking-wide">
              Driven by passion of construction and services, The Group embarked into entertainment and hospitality business. The first, being TSR Mall which house the state-of-the-art multi-level cinemax, family karaoke center, food court, fast food, gaming, Virtual Reality (VR), 9D game and arcade center, the luxuries and the innovative banquet conference hall that house 2000 people.
            </p>
          </div>

          <div className={`w-full shadow-2xl premium-shadow transition-all duration-1000 delay-500 overflow-hidden rounded-[2.5rem] transform ${visibleSections['welcome'] ? 'translate-y-0 scale-100 opacity-100' : 'translate-y-10 scale-95 opacity-0'}`}>
            <img 
              src={aboutWelcomeImg} 
              alt="Exterior view of TSR Hotel" 
              className="w-full h-auto max-h-[600px] object-cover rounded-sm transition-transform duration-1000 hover:scale-105"
            />
          </div>

        </div>
      </section>

      {/* 3. Our Founder Section */}
      <section ref={s3Ref} className={`py-24 px-6 bg-white overflow-hidden transition-all duration-1000 ${visibleSections['founder'] ? 'opacity-100' : 'opacity-0'}`}>
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center gap-16">
            
            {/* Left: Portrait with Green Name Bar */}
            <div className={`w-full md:w-2/5 transition-all duration-1000 transform ${visibleSections['founder'] ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
               <div className="relative group rounded-[2.5rem] overflow-hidden">
                 <img 
                   src={founderImg} 
                   alt="Founder Tan Sri M Ramasamy" 
                   className="w-full h-auto object-cover shadow-lg mb-0" 
                 />
                 <div className="bg-[#5a7c29] text-white py-4 px-6 text-center transform -translate-y-1">
                   <h3 className="text-xl md:text-2xl font-serif tracking-wide">Tan Sri M Ramasamy</h3>
                 </div>
               </div>
            </div>

            {/* Right: Content with Decorative Heading */}
            <div className={`w-full md:w-3/5 text-center transition-all duration-1000 delay-300 transform ${visibleSections['founder'] ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
              
              <div className="mb-12 flex items-center justify-center gap-6">
                <div className="flex-grow h-[1px] bg-[#5a7c29]/30 relative">
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rotate-45 bg-[#5a7c29]"></div>
                </div>
                <h2 className="text-2xl md:text-3xl font-light tracking-[0.3em] uppercase text-[#5a7c29] font-serif shrink-0">OUR FOUNDER</h2>
                <div className="flex-grow h-[1px] bg-[#5a7c29]/30 relative">
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rotate-45 bg-[#5a7c29]"></div>
                </div>
              </div>

              <div className="relative text-center px-4">
                {/* Background Watermark for this section */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-[0.05] pointer-events-none z-0">
                  <img src={watermarkLogo} alt="" className="h-48 md:h-64 grayscale" />
                </div>

                <div className="relative z-10 space-y-8">
                  <p className="text-gray-800 text-base md:text-lg leading-relaxed font-serif tracking-wide">
                    At Grand Palace Hotel, our vision has always been to create more than just a place to stay — we aim to deliver unforgettable experiences filled with comfort, elegance, and heartfelt hospitality. Every guest is welcomed with warmth, and every detail is thoughtfully crafted to ensure a truly luxurious stay.
                  </p>
                  <p className="text-gray-800 text-base md:text-lg leading-relaxed font-serif tracking-wide">
                    We thank you for choosing us and look forward to serving you with excellence.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Excellence That Defines Us */}
      <section ref={s4Ref} className={`py-24 px-6 bg-gray-50/50 transition-all duration-1000 ${visibleSections['excellence'] ? 'opacity-100' : 'opacity-0'}`}>
        <div className="container mx-auto max-w-6xl">
          <div className={`text-center mb-16 transition-all duration-1000 transform ${visibleSections['excellence'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="flex items-center justify-center gap-4 text-[#5a7c29] mb-4">
              <div className="w-16 h-[1px] bg-[#5a7c29]"></div>
              <span className="w-1.5 h-1.5 rotate-45 bg-[#5a7c29]"></span>
              <h2 className="text-3xl font-light tracking-[0.2em] uppercase">EXCELLENCE THAT DEFINES US</h2>
              <span className="w-1.5 h-1.5 rotate-45 bg-[#5a7c29]"></span>
              <div className="w-16 h-[1px] bg-[#5a7c29]"></div>
            </div>
          </div>

          <div className="relative overflow-hidden mb-12">
             <div className="overflow-hidden">
                 <div 
                    className={`flex w-[200%] transition-all duration-1000 ease-in-out transform ${isTransitioning ? 'opacity-0 scale-[0.98]' : 'opacity-100 scale-100'}`} 
                    style={{ transform: `translateX(-${(excellenceIndex / 3) * 50}%)` }}
                 >
                    {/* Page 1 (Cards 1-3) */}
                    <div className="w-1/2 grid grid-cols-1 md:grid-cols-3 gap-6 px-1">
                      {excellenceData.slice(0, 3).map((card, i) => (
                        <div 
                          key={i} 
                          className={`transition-all duration-1000 transform ${excellenceIndex === 0 ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                          style={{ transitionDelay: `${i * 0.1}s` }}
                        >
                          <Card card={card} i={i} visibleSections={visibleSections} />
                        </div>
                      ))}
                    </div>
                    {/* Page 2 (Cards 4-6) */}
                    <div className="w-1/2 grid grid-cols-1 md:grid-cols-3 gap-6 px-1">
                      {excellenceData.slice(3, 6).map((card, i) => (
                        <div 
                          key={i+3} 
                          className={`transition-all duration-1000 transform ${excellenceIndex === 3 ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                          style={{ transitionDelay: `${i * 0.1}s` }}
                        >
                          <Card card={card} i={i+3} visibleSections={visibleSections} />
                        </div>
                      ))}
                    </div>
                 </div>
             </div>
          </div>

          <div className="flex justify-center gap-6">
            <button 
              onClick={prevExcellence}
              className="w-12 h-12 flex items-center justify-center bg-white hover:bg-[#7a9b3c] hover:text-white text-[#7a9b3c] transition-all duration-300 shadow-xl rounded-full active:scale-90 border border-gray-100"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={nextExcellence}
              className="w-12 h-12 flex items-center justify-center bg-[#7a9b3c] text-white hover:bg-[#5a7c29] transition-all duration-300 shadow-xl rounded-full active:scale-90"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </section>

      {/* 5. Our Story Section */}
      <section ref={s5Ref} className={`py-24 px-6 bg-white overflow-hidden transition-all duration-1000 ${visibleSections['story'] ? 'opacity-100' : 'opacity-0'}`}>
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            
            <div className={`w-full md:w-1/2 relative pb-16 md:pb-0 pr-0 md:pr-16 transition-all duration-1000 transform ${visibleSections['story'] ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
              <img src={storyImg} alt="Our Heritage Story" className="w-full h-[600px] object-cover premium-shadow shadow-xl rounded-sm" />
              <div className="absolute -bottom-8 md:bottom-12 -right-4 md:-right-8 w-64 h-80 bg-white p-4 shadow-2xl z-10 hidden md:flex items-center justify-center">
                <div className="border border-gray-100 w-full h-full flex items-center justify-center bg-gray-50/10">
                  <img src={watermarkLogo} alt="TSR Label" className="h-20 opacity-80 animate-kinetic-bob" />
                </div>
              </div>
            </div>

            <div className={`w-full md:w-1/2 transition-all duration-1000 delay-300 transform ${visibleSections['story'] ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
              <div className="flex items-center gap-4 text-[#5a7c29] mb-8">
                <div className="w-12 h-[1px] bg-[#5a7c29]"></div>
                <h2 className="text-2xl font-light tracking-[0.2em] uppercase">OUR STORY</h2>
                <div className="w-12 h-[1px] bg-[#5a7c29]"></div>
              </div>

              <h3 className="text-2xl md:text-3xl text-[#5a7c29] font-serif leading-relaxed mb-8 pr-4">
                "History is not found in books, but in the very walls that have witnessed the turn of centuries."
              </h3>

              <div className="space-y-6 text-gray-700 font-serif text-sm leading-relaxed mb-12 tracking-wide">
                <p>
                  Founded at the dawn of the 20th century, our estate was conceived as a landmark of resilience and Indian pride. Every archway, hand-carved jali, and sprawling courtyard narrates a story of a nation's soul and a family's vision to define luxury on their own terms.
                </p>
                <p>
                  From beautifully designed rooms to premium lifestyle amenities, we provide everything you need for a comfortable stay. Enjoy relaxing spa sessions, refreshing swims, delicious dining experiences, and modern business facilities — all under one roof.
                </p>
              </div>

              <div className="flex gap-16 border-t border-gray-100 pt-8">
                <div className="text-center group cursor-pointer">
                  <div className="text-4xl text-[#5a7c29] font-serif mb-2 group-hover:scale-105 transition-transform">120+</div>
                  <div className="text-[10px] font-bold text-gray-800 tracking-widest uppercase">YEARS OF HERITAGE</div>
                </div>
                <div className="text-center group cursor-pointer">
                  <div className="text-4xl text-[#5a7c29] font-serif mb-2 group-hover:scale-105 transition-transform">50+</div>
                  <div className="text-[10px] font-bold text-gray-800 tracking-widest uppercase">PALATIAL ESTATES</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6. Service Beyond Sovereignty */}
      <section ref={s6Ref} className={`py-24 px-6 relative bg-black transition-all duration-1000 ${visibleSections['services'] ? 'opacity-100' : 'opacity-0'}`}>
        <div className="absolute inset-0 bg-cover bg-center opacity-40 grayscale" style={{ backgroundImage: `url('${servicesBg}')` }}></div>
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className={`text-center mb-16 transition-all duration-1000 transform ${visibleSections['services'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="flex items-center justify-center gap-4 text-[#5a7c29] mb-4">
              <div className="w-16 h-[1px] bg-[#5a7c29]"></div>
              <span className="w-1.5 h-1.5 rotate-45 bg-[#5a7c29]"></span>
              <h2 className="text-2xl md:text-3xl font-light tracking-[0.2em] uppercase text-[#88a946]">SERVICE BEYOND SOVEREIGNTY</h2>
              <span className="w-1.5 h-1.5 rotate-45 bg-[#5a7c29]"></span>
              <div className="w-16 h-[1px] bg-[#5a7c29]"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <Sparkles className="w-8 h-8 mx-auto mb-4 text-[#5a7c29]" />, title: "Royal Welcome", text: "The traditional 'Aarti' and garland greeting awaits every esteemed guest, offering a warm and graceful arrival experience." },
              { icon: <Building2 className="w-8 h-8 mx-auto mb-4 text-[#5a7c29]" />, title: "Palace Butlers", text: "Personalized white-glove service dedicated to your every need, ensuring comfort and care day or night." },
              { icon: <Utensils className="w-8 h-8 mx-auto mb-4 text-[#5a7c29]" />, title: "Royal Dining", text: "Authentic recipes inspired by imperial kitchens, crafted by expert chefs and served in breathtaking settings." },
              { icon: <Leaf className="w-8 h-8 mx-auto mb-4 text-[#5a7c29]" />, title: "Ancient Healing", text: "Holistic wellness rituals rooted in centuries-old traditions, offering complete relaxation for mind and body." },
            ].map((service, i) => (
              <div key={i} className={`bg-[#eef3eb] p-8 text-center rounded-sm transition-all duration-1000 transform hover:-translate-y-2 premium-shadow ${visibleSections['services'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: `${i * 0.15}s` }}>
                <div className="animate-kinetic-bob" style={{ animationDelay: `${i * 0.2}s` }}>{service.icon}</div>
                <h3 className="text-[#5a7c29] text-xl font-serif mb-4">{service.title}</h3>
                <p className="text-gray-700 text-xs leading-relaxed font-serif tracking-wide">
                  {service.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Ready for an Unforgettable CTA */}
      <section ref={s7Ref} className={`py-32 px-6 relative bg-black flex items-center justify-center transition-all duration-1000 ${visibleSections['cta'] ? 'opacity-100' : 'opacity-0'}`}>
        <div className="absolute inset-0 bg-cover bg-center bg-fixed opacity-50 grayscale" style={{ backgroundImage: `url('${readyBg}')` }}></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/80"></div>
        
        <div className={`container mx-auto max-w-4xl relative z-10 text-center transition-all duration-1000 transform ${visibleSections['cta'] ? 'translate-y-0 scale-100' : 'translate-y-10 scale-95'}`}>
          <div className="flex items-center justify-center gap-4 text-[#5a7c29] mb-8">
            <div className="w-12 h-[1px] bg-[#5a7c29]"></div>
            <h2 className="text-2xl md:text-3xl font-light tracking-[0.2em] text-[#88a946]">READY FOR AN UNFORGETTABLE EXPERIENCE?</h2>
            <div className="w-12 h-[1px] bg-[#5a7c29]"></div>
          </div>
          
          <p className="text-white text-lg md:text-2xl font-serif mb-10 tracking-[0.1em] drop-shadow-md">
            Join us at the intersection of heritage and modern<br />
            luxury. Your grand stay awaits.<br />
            <span className="italic mt-4 block text-[#88a946]">Book Your Stay Now</span>
          </p>

          <Link to="/rooms">
            <button className="bg-[#5a7c29] hover:bg-[#4a6c19] text-white px-10 py-3 uppercase tracking-[0.3em] font-bold text-xs transition-all shadow-lg hover:shadow-2xl active:scale-95">
              BOOK NOW
            </button>
          </Link>
        </div>
      </section>

    </div>
  );
}
