import { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import SectionHeading from './SectionHeading';
import Button from './Button';
import lm1 from '../Home img/last card1.jpg';
import lm2 from '../Home img/last card2.jpg';
import lm3 from '../Home img/last card3.jpg';

export default function LuxuryMoments() {

  const moments = [
    {
      image: lm1,
      title: 'ELEGANT BANQ & CONFERENCE HALL',
    },
    {
      image: lm2,
      title: 'PREMIUM ACCOMMODATION',
    },
    {
      image: lm3,
      title: 'COURTEOUS BAR LOUNGE & FINE BARS',
    },
  ];

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
    <section ref={sectionRef} className="py-16 md:py-24 px-6 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      <div className={`container mx-auto max-w-7xl transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <SectionHeading
          subtitle="Where Comfort Feels Natural And Every Detail Is Designed With Care, Creating Memories You'll Carry With You Long After You Leave."
        >
          <span className="block text-2xl md:text-4xl tracking-[0.2em] font-light">LUXURY IN EVERY</span>
          <span className="block text-2xl md:text-4xl tracking-[0.2em] font-light">— MOMENTS —</span>
        </SectionHeading>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-12 md:mt-16">
          {moments.map((moment, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-xl premium-shadow h-[320px] md:h-[450px] cursor-pointer transition-all duration-1000 transform ${
                isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-20 opacity-0 scale-95'
              }`}
              style={{
                transitionDelay: `${index * 0.15}s`,
              }}
            >
              <img
                src={moment.image}
                alt={moment.title}
                className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-700 brightness-95 group-hover:brightness-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent group-hover:from-black/95 transition-all duration-500"></div>
              <div className="absolute inset-0 flex flex-col items-center justify-end p-8 text-center transform translate-y-0 group-hover:-translate-y-4 transition-transform duration-500">
                <h3 className="text-white text-sm mb-6 tracking-wider font-medium">{moment.title}</h3>
                <Link to="/rooms">
                  <Button variant="secondary">Explore More</Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
