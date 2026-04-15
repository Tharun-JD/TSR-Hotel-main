import { useEffect, useState, useRef } from 'react';
import SectionHeading from './SectionHeading';
import storyImg from '../Home img/Home1.jpg';

export default function StorySection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 px-6 bg-white overflow-hidden">
      <div className="container mx-auto">
        <div className={`transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <SectionHeading
            subtitle="THE STANDS AS A SYMBOL OF REFINED HOSPITALITY, EARNING WIDE RECOGNITION FOR ITS COMMITMENT TO LUXURY, SERVICE EXCELLENCE, AND GUEST SATISFACTION."
          >
            <span className="block text-2xl md:text-3xl tracking-[0.2em] font-light">WHERE EVERY STAY</span>
            <span className="block text-2xl md:text-3xl tracking-[0.2em] font-light">— TELLS A STORY —</span>
          </SectionHeading>
        </div>

        <div className={`relative mt-16 rounded-lg overflow-hidden shadow-2xl premium-shadow group cursor-pointer transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-20 opacity-0 scale-[0.98]'}`}>
          <img
            src={storyImg}
            alt="Hotel at night"
            className="w-full h-[400px] md:h-[600px] lg:h-[700px] object-cover group-hover:brightness-110 transition-all duration-1000"
          />
          <div className="absolute top-4 md:top-10 left-4 md:left-10 glass-effect p-4 md:p-8 max-w-[280px] md:max-w-md rounded backdrop-blur-xl transform transition-all duration-500 hover:translate-y-[-8px] hover:shadow-2xl animate-kinetic-bob">
            <div className="text-[#7a9b3c] text-3xl md:text-5xl font-light mb-2 md:mb-4 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>30</div>
            <div className="text-white space-y-1 md:space-y-2 text-[10px] md:text-sm">
              <p className="uppercase tracking-wider animate-fade-in-up" style={{ animationDelay: '0.3s' }}>A Luxury Built On A 3-Decade Standing Timeless</p>
              <p className="uppercase tracking-wider animate-fade-in-up" style={{ animationDelay: '0.4s' }}>Grandeur</p>
              <p className="flex items-center gap-2 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
                <span className="text-[#7a9b3c]">◆</span>
                <span className="uppercase tracking-wider">Premier Accommodations</span>
              </p>
              <p className="flex items-center gap-2 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                <span className="text-[#7a9b3c]">◆</span>
                <span className="uppercase tracking-wider">World-Class Dining</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
