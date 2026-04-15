import { useState, useEffect, useRef } from 'react';
import SectionHeading from './SectionHeading';
import legacyImg from '../Home img/Home utube.jpg';

export default function LegacySection() {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting);
    }, { threshold: 0.15 });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 px-6 bg-white overflow-hidden">
      <div className="container mx-auto">
        <div className={`transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <SectionHeading
            subtitle="More Than A Stay, It's An Experience, Crafted To Be Felt In Every Moment."
          >
            <span className="block text-2xl md:text-3xl tracking-[0.2em] font-light">— DISCOVER THE LEGACY OF TSR —</span>
          </SectionHeading>
        </div>

        <div
          className={`relative mt-12 rounded-xl overflow-hidden premium-shadow h-[600px] lg:h-[750px] cursor-pointer group transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-20 opacity-0 scale-95'}`}
          style={{ transitionDelay: '0.3s' }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <img
            src={legacyImg}
            alt="Resort pool"
            className={`w-full h-full object-cover transition-transform duration-700 ${
              isHovered ? 'scale-110' : 'scale-100'
            }`}
          />
          <div className={`absolute inset-0 bg-black transition-all duration-700 flex items-center justify-center ${
            isHovered ? 'bg-opacity-40' : 'bg-opacity-10'
          }`}></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <h3 className={`text-white text-4xl font-light mb-8 italic transition-all duration-500 transform ${
              isHovered ? 'translate-y-[-20px]' : 'translate-y-0'
            }`}>
              Welcome to Grand TSR Hotels
            </h3>
            <a 
              href="https://www.youtube.com/@tsrseafronthotel4386"
              target="_blank" 
              rel="noopener noreferrer"
              className={`bg-white hover:bg-gray-100 text-[#212121] px-8 py-3 rounded-full flex items-center gap-2 transition-all duration-500 transform ${
              isHovered ? 'scale-110 shadow-2xl shadow-black/20' : 'scale-100'
            } group-hover:shadow-lg active:scale-95`}>
              <svg viewBox="0 0 24 24" className="w-9 h-9 text-[#FF0000] fill-current" xmlns="http://www.w3.org/2000/svg">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
              <span className="font-bold text-2xl tracking-tighter" style={{ fontFamily: 'Arial, sans-serif' }}>YouTube</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
