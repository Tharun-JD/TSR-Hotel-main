import { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import SectionHeading from './SectionHeading';
import Button from './Button';
import everyStay1 from '../Home img/card1.jpg';
import everyStay2 from '../Home img/card2.jpg';

export default function EveryStaySection() {
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
    <section ref={sectionRef} className="py-20 px-6 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="container mx-auto">
        <div className={`transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <SectionHeading
            subtitle="Whether For Couples Or Families, Our Accommodation Offer A Seamless Blend Of Comfort And Elegance."
          >
            <span className="block text-2xl md:text-3xl tracking-[0.2em] font-light">— EVERY STAY, EVERY BOND —</span>
          </SectionHeading>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-12">
          <div className={`relative overflow-hidden rounded-xl premium-shadow h-[450px] group cursor-pointer transition-all duration-1000 transform hover:shadow-2xl ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
            <img
              src={everyStay1}
              alt="Family enjoying"
              className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-700 brightness-95 group-hover:brightness-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent group-hover:from-black/95 transition-all duration-500"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-end p-8 text-center transform translate-y-0 group-hover:-translate-y-6 transition-transform duration-500">
              <h3 className="text-white text-sm mb-6 tracking-wider uppercase font-medium">
                Unforgettable Moments For Families
              </h3>
              <Link to="/rooms">
                <Button variant="secondary">Explore More</Button>
              </Link>
            </div>
          </div>

          <div className={`relative overflow-hidden rounded-xl premium-shadow h-[450px] group cursor-pointer transition-all duration-1000 transform hover:shadow-2xl ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`} style={{ transitionDelay: '0.2s' }}>
            <img
              src={everyStay2}
              alt="Couple relaxing"
              className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-700 brightness-95 group-hover:brightness-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent group-hover:from-black/95 transition-all duration-500"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-end p-8 text-center transform translate-y-0 group-hover:-translate-y-6 transition-transform duration-500">
              <h3 className="text-white text-sm mb-6 tracking-wider uppercase font-medium">
                Perfect Escape For Couples
              </h3>
              <Link to="/rooms">
                <Button variant="secondary">Explore More</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
