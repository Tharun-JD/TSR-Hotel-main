import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import SectionHeading from './SectionHeading';
import Button from './Button';
import sp1 from '../Home img/Home card1.jpg';
import sp2 from '../Home img/Home card2.jpg';
import sp3 from '../Home img/Home card3.jpg';

export default function SpecialOccasions() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const occasions = [
    {
      image: sp1,
      title: 'WEDDINGS',
    },
    {
      image: sp2,
      title: 'CELEBRATIONS',
    },
    {
      image: sp3,
      title: 'GATHERINGS',
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting);
    }, { threshold: 0.15 });

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-16 md:py-24 px-6 bg-white overflow-hidden">
      <div className={`container mx-auto max-w-7xl transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <SectionHeading
          subtitle="A Place Where Celebrations Come Alive, Details Are Cared For, And Memories Are Made To Last A Lifetime."
        >
          <span className="block text-2xl md:text-3xl tracking-[0.2em] font-light">WHERE SPECIAL OCCASIONS</span>
          <span className="block text-2xl md:text-3xl tracking-[0.2em] font-light">— TAKE SHAPE —</span>
        </SectionHeading>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-12 md:mt-16">
          {occasions.map((occasion, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-xl premium-shadow h-[350px] md:h-[500px] cursor-pointer transition-all duration-1000 transform ${
                isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-20 opacity-0 scale-95'
              }`}
              style={{
                transitionDelay: `${index * 0.15}s`,
              }}
            >
              <img
                src={occasion.image}
                alt={occasion.title}
                className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-700 brightness-95 group-hover:brightness-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent group-hover:from-black/95 transition-all duration-500"></div>
              <div className="absolute inset-0 flex flex-col items-center justify-end p-8 text-center transform translate-y-0 group-hover:-translate-y-6 transition-transform duration-500">
                <h3 className="text-white text-sm mb-6 tracking-wider uppercase font-semibold">{occasion.title}</h3>
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
