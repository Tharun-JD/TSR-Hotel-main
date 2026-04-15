import { useEffect, useState, useRef } from 'react';
import SectionHeading from '../components/SectionHeading';
import Button from '../components/Button';
import meetingImg from '../Rooms img/Meeting.jpg';
import weddingImg from '../Rooms img/Wedding.jpg';
import partyImg from '../Rooms img/Party.jpg';
import heroImg from '../Rooms img/Rooms hero.jpg';
import { Calendar, Users, Music, Utensils, Heart } from 'lucide-react';

export default function Events() {
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
  const s2Ref = observeSection('intro');
  const s3Ref = observeSection('types');

  const eventTypes = [
    {
      id: 'corp',
      title: 'CORPORATE MEETINGS',
      subtitle: 'Where Vision Meets Strategy',
      image: meetingImg,
      description: 'Host your next conference, seminar, or board meeting in our state-of-the-art facilities. Our meeting rooms are equipped with the latest audiovisual technology and offer a professional atmosphere that inspires productivity.',
      features: ['High-speed Wi-Fi', 'Modern AV Equipment', 'Business Concierge', 'Custom Catering'],
      icon: <Users className="w-6 h-6" />
    },
    {
      id: 'wedding',
      title: 'ROYAL WEDDINGS',
      subtitle: 'A Fairytale Beginning',
      image: weddingImg,
      description: 'Your dream wedding deserves a grand setting. Our elegant banquet halls and picturesque outdoor venues provide the perfect backdrop for your special day. From intimate ceremonies to lavish receptions, we handle every detail with royal care.',
      features: ['Floral Arrangements', 'Professional Planning', 'Bridal Suites', 'Fine Dining Menus'],
      icon: <Heart className="w-6 h-6" />
    },
    {
      id: 'party',
      title: 'GRAND PARTIES',
      subtitle: 'Celebrate Life\'s Moments',
      image: partyImg,
      description: 'Whether it\'s a milestone birthday, an anniversary, or a gala dinner, our versatile event spaces can be transformed to match your theme. Experience vibrant celebrations with exceptional service and a festive ambience.',
      features: ['Live Entertainment', 'Theme Decor', 'Premium Bar Service', 'Guest Accommodation'],
      icon: <Music className="w-6 h-6" />
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      
      {/* Hero Section */}
      <section ref={s1Ref} className={`relative h-[85vh] flex items-center justify-center overflow-hidden transition-all duration-1000 ${visibleSections['hero'] ? 'opacity-100' : 'opacity-0'}`}>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${heroImg}')` }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        <div className="relative z-10 text-center px-6 animate-fade-in-up">
          <div className="flex items-center justify-center gap-4 text-[#7a9b3c] mb-6">
            <div className="w-12 md:w-16 h-[1px] bg-[#7a9b3c]"></div>
            <h1 className="text-white text-3xl md:text-5xl lg:text-7xl font-light tracking-widest uppercase mb-0 font-serif">
              MEETINGS & EVENTS
            </h1>
            <div className="w-12 md:w-16 h-[1px] bg-[#7a9b3c]"></div>
          </div>
          <p className="text-gray-100 text-xs md:text-base tracking-widest uppercase italic max-w-3xl mx-auto leading-relaxed font-serif opacity-90">
            Elegant spaces for unforgettable celebrations and professional gatherings
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section ref={s2Ref} className={`py-24 px-6 bg-white transition-all duration-1000 ${visibleSections['intro'] ? 'opacity-100' : 'opacity-0'}`}>
        <div className={`container mx-auto max-w-5xl text-center transition-all duration-1000 transform ${visibleSections['intro'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <SectionHeading subtitle="Exceptional Venues for Exceptional People">
            <span className="text-gray-800 uppercase tracking-[0.2em] font-light">A Venue For Every</span>
            <span className="block text-[#7a9b3c] tracking-[0.2em]">— OCCASION —</span>
          </SectionHeading>
          <p className="text-gray-600 font-serif text-[15px] leading-relaxed max-w-3xl mx-auto mt-12 mb-10 tracking-wide">
            From the intimate to the grand, TSR Boutique Hotel offers a range of sophisticated venues meticulously designed to host your most important events. Our commitment to excellence ensures that every detail, from planning to execution, is handled with absolute precision.
          </p>
          <div className="flex flex-wrap justify-center gap-12 mt-16 text-[#7a9b3c]">
            {[
              { icon: <Calendar className="w-8 h-8 mb-3" />, label: "Date Planning" },
              { icon: <Users className="w-8 h-8 mb-3" />, label: "Guest List" },
              { icon: <Utensils className="w-8 h-8 mb-3" />, label: "Gourmet Food" },
              { icon: <Music className="w-8 h-8 mb-3" />, label: "Entertainment" },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center animate-kinetic-bob" style={{ animationDelay: `${i * 0.2}s` }}>
                {item.icon}
                <span className="text-[10px] font-bold tracking-widest uppercase text-gray-800">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Types Staggered Grid */}
      <section ref={s3Ref} className={`pb-24 px-6 transition-all duration-1000 ${visibleSections['types'] ? 'opacity-100' : 'opacity-0'}`}>
        <div className="container mx-auto max-w-6xl">
          <div className="space-y-32">
            {eventTypes.map((event, index) => (
              <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-16 items-center transition-all duration-1000 transform ${visibleSections['types'] ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`} style={{ transitionDelay: `${index * 0.2}s` }}>
                
                {/* Image Side */}
                <div className="w-full lg:w-[55%] relative group">
                  <div className="relative overflow-hidden rounded-sm premium-shadow shadow-2xl">
                    <img 
                      src={event.image} 
                      alt={event.title} 
                      className="w-full h-[500px] object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-all"></div>
                  </div>
                  {/* Decorative element */}
                  <div className={`absolute -bottom-10 ${index % 2 === 0 ? '-right-10' : '-left-10'} w-40 h-40 bg-gray-50 -z-10 rounded-sm animate-pulse`}></div>
                </div>

                {/* Content Side */}
                <div className="w-full lg:w-[45%] text-left">
                  <div className="flex items-center gap-4 text-[#7a9b3c] mb-6">
                    <div className="w-8 h-[1px] bg-[#7a9b3c]"></div>
                    <span className="text-xs font-bold tracking-[0.3em] uppercase">{event.subtitle}</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-light text-gray-800 mb-8 tracking-[0.1em] uppercase font-serif">{event.title}</h2>
                  <p className="text-gray-600 font-serif text-[15px] leading-relaxed mb-10 tracking-wide">
                    {event.description}
                  </p>
                  <ul className="grid grid-cols-2 gap-4 mb-12">
                    {event.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center gap-3 text-sm text-gray-700 font-serif hover:translate-x-1 transition-transform cursor-default">
                        <span className="w-1.5 h-1.5 bg-[#7a9b3c] rounded-full"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="px-12 py-3.5 uppercase tracking-[0.4em] text-[10px] font-bold shadow-lg hover:shadow-2xl active:scale-95 transition-all">Enquire Today</Button>
                </div>

              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 px-6 bg-gray-900 overflow-hidden relative">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')]"></div>
        <div className="container mx-auto max-w-4xl relative z-10 text-center">
           <h2 className="text-white text-3xl md:text-4xl font-light mb-8 font-serif leading-tight uppercase tracking-[0.2em] animate-fade-in-up">
             Planning a Special Event?
           </h2>
           <p className="text-gray-400 font-serif text-lg mb-12 max-w-2xl mx-auto italic animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
             "Your vision, our expertise — creating moments that resonate for a lifetime."
           </p>
           <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
             <Button className="px-12 py-4 uppercase tracking-[0.3em] font-bold text-xs bg-white text-black hover:bg-[#7a9b3c] hover:text-white transition-all">Get a Quote</Button>
             <button className="px-12 py-4 border border-white/30 text-white uppercase tracking-[0.3em] font-bold text-xs hover:border-[#7a9b3c] hover:text-[#7a9b3c] transition-all">View Brochure</button>
           </div>
        </div>
      </section>

    </div>
  );
}

