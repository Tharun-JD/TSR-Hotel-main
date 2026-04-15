import weddingImg from '../Events img/wedding_hero.png';
import meetingImg from '../Events img/business_hero.png';
import partyImg from '../Events img/birthday_hero.png';
import { Link } from 'react-router-dom';

const celebrations = [
  {
    title: 'The Grand Wedding Celebration',
    description: 'Celebrate your special day in an elegant hall designed for timeless weddings, where beautiful interiors, thoughtful décor, and seamless service set the perfect stage. From intimate ceremonies to grand celebrations, every detail is carefully managed to create unforgettable moments for you and your loved ones.',
    image: weddingImg,
    quote: 'Where timeless love meets elegant celebrations',
    hasSwoosh: true
  },
  {
    title: 'Imperial Business Gathering',
    description: 'A refined and professional space ideal for meetings, conferences, and corporate gatherings. Equipped with modern facilities to ensure smooth presentations and discussions. Designed to support productivity while maintaining a sophisticated atmosphere. Perfect for events that leave a lasting professional impression.',
    image: meetingImg,
    quote: 'Where vision turns into impactful gatherings',
    hasSwoosh: true
  },
  {
    title: 'Signature Birthday Celebration',
    description: 'Celebrate birthdays in a beautifully designed space where elegance meets joy. Thoughtfully arranged settings, attentive service, and a welcoming atmosphere make every celebration special, whether it\'s an intimate gathering or a grand party. Creating cherished memories for you and your loved ones.',
    image: partyImg,
    quote: 'Where your special day becomes unforgettable',
    hasSwoosh: true
  }
];

export default function CelebrationsSection() {
  return (
    <section className="py-24 px-6 bg-white overflow-hidden">
      <div className="container mx-auto max-w-6xl space-y-24">
        {celebrations.map((event, index) => (
          <div key={index} className="text-center animate-fade-in-up">
            <div className="mb-6 flex items-center justify-center gap-4 text-[#5a7c29]">
              <div className="w-16 h-[1px] bg-[#5a7c29]"></div>
              <span className="w-2 h-2 rotate-45 bg-[#5a7c29]"></span>
              <h2 className="text-2xl md:text-3xl font-light tracking-wide uppercase">{event.title}</h2>
              <span className="w-2 h-2 rotate-45 bg-[#5a7c29]"></span>
              <div className="w-16 h-[1px] bg-[#5a7c29]"></div>
            </div>
            
            <p className="text-gray-900 text-[13px] md:text-sm max-w-3xl mx-auto mb-12 leading-relaxed font-serif translate-y-[-10px]">
              {event.description}
            </p>
            
            <div className="relative h-[400px] md:h-[550px] w-full overflow-hidden rounded-[2.5rem] premium-shadow group">
               <img src={event.image} alt={event.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
               <div className="absolute inset-0 bg-black/40 transition-colors duration-500 group-hover:bg-black/50"></div>
               
               <div className="absolute inset-0 flex flex-col items-center justify-center px-4">
                 <div className="relative mb-12">
                   {/* Custom SVG Swoosh for Wedding */}
                   {event.hasSwoosh && (
                     <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-48 pointer-events-none opacity-80" viewBox="0 0 600 200" fill="none">
                       <path 
                         d="M20 100 C 150 0, 250 200, 450 100 C 500 70, 550 80, 580 120" 
                         stroke="#ccac00" 
                         strokeWidth="2.5" 
                         strokeLinecap="round"
                         className="animate-dash"
                         style={{ strokeDasharray: 1000, strokeDashoffset: 1000, animation: 'dash 3s forwards ease-in-out' }}
                       />
                       {/* Arrow head */}
                       <path d="M575 105 L 582 122 L 565 118" stroke="#ccac00" strokeWidth="2" fill="none" />
                     </svg>
                   )}
                   
                   <p className="text-white text-2xl md:text-5xl font-light italic tracking-wide font-serif drop-shadow-2xl relative z-10 whitespace-nowrap px-4" style={{ textShadow: '2px 2px 10px rgba(0,0,0,0.8)' }}>
                     {event.quote}.
                   </p>
                 </div>

                 <Link to="/contact"><button className="relative z-10 border border-[#7a9b3c] text-white bg-transparent hover:bg-[#7a9b3c] hover:text-white px-12 py-3.5 text-xs font-bold tracking-[0.3em] uppercase transition-all duration-300 backdrop-blur-sm active:scale-95">
                   Reserve Your Date
                 </button></Link>
               </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
