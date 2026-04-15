import { Link } from 'react-router-dom';
import Button from './Button';
import homeHero from '../Home img/Home hero.jpg';

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-start overflow-hidden px-6 md:px-20 lg:px-32">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('${homeHero}')` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40"></div>
      </div>

      <div className="relative z-10 text-left max-w-2xl animate-fade-in-up bg-white/30 backdrop-blur-[2px] border border-white/40 p-6 md:p-10 rounded-sm shadow-xl ml-6 md:ml-12 transition-all duration-700 hover:bg-black/60 hover:backdrop-blur-md hover:border-white/30 hover:scale-[1.02] hover:shadow-2xl cursor-default group" style={{ animationDelay: '0.3s' }}>
        <h1 className="text-white text-3xl md:text-5xl lg:text-7xl font-light mb-8 md:mb-12 leading-[1.1] tracking-widest uppercase">
          <span className="block animate-fade-in-up mb-2" style={{ animationDelay: '0.4s' }}>
            A PLACE WHERE
          </span>
          <span className="block animate-fade-in-up mb-2" style={{ animationDelay: '0.5s' }}>
            COMFORT
          </span>
          <span className="block animate-fade-in-up mb-2 font-medium" style={{ animationDelay: '0.6s' }}>
            FEELS LIKE HOME
          </span>
          <span className="text-xl md:text-2xl lg:text-3xl block animate-fade-in-up italic font-serif opacity-90 lowercase mb-8" style={{ animationDelay: '0.7s' }}>
            and every stay becomes a memory
          </span>
        </h1>
        <div className="animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          <Link to="/contact">
            <Button className="px-10 py-4 text-xs font-bold tracking-[0.3em]">Get In Touch</Button>
          </Link>
        </div>
      </div>

      <div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-3 cursor-pointer z-20 group" 
        onClick={() => window.scrollTo({top: window.innerHeight, behavior: 'smooth'})}
      >
        <span className="text-white text-[13px] uppercase tracking-[0.4em] font-medium group-hover:text-[#7a9b3c] transition-all duration-500">
          Explore more
        </span>
        <div className="animate-floating">
          <svg className="w-6 h-6 text-white/80 group-hover:text-[#7a9b3c] transition-all duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}
