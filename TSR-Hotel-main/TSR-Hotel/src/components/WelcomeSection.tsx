import { useEffect, useRef, useState } from 'react';
import watermarkLogo from '../logo.png';

export default function WelcomeSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-24 md:py-32 px-6 overflow-hidden bg-white">
      {/* Background Watermark */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-[0.03] pointer-events-none select-none">
        <img src={watermarkLogo} alt="TSR Watermark" className="w-[400px] md:w-[600px] h-auto grayscale" />
      </div>

      <div className={`container mx-auto max-w-4xl text-center relative z-10 transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="w-12 h-[1px] bg-[#7a9b3c]"></div>
          <span className="text-[#7a9b3c] text-xs font-bold tracking-[0.4em] uppercase">The Art of Hospitality</span>
          <div className="w-12 h-[1px] bg-[#7a9b3c]"></div>
        </div>

        <h2 className="text-3xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-10 tracking-wide uppercase leading-tight font-serif">
          WELCOME TO<br />
          <span className="text-[#5a7c29] font-medium">TSR BOUTIQUE HOTEL</span>
        </h2>

        <div className="space-y-6 text-gray-600 text-sm md:text-[15px] leading-relaxed font-serif max-w-3xl mx-auto">
          <p>
            Experience a sanctuary where timeless elegance meets unparalleled luxury. At TSR Boutique Hotel, we believe hospitality is an art form, meticulously crafting every detail to ensure your stay is a masterpiece of comfort and refinement.
          </p>
          <p>
            From our exquisitely designed rooms to our world-class dining, discover a destination where every moment is curated for the discerning traveler. Welcome to a legacy of excellence that redefine the standards of boutique hospitality.
          </p>
        </div>

        <div className="mt-12 flex justify-center">
          <div className="w-24 h-[1px] bg-[#7a9b3c]/30"></div>
        </div>
      </div>
    </section>
  );
}
