import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import heroImg from '../Contact us img/Contact hero img.jpg';
import bodyImg from '../Contact us img/Contact body.jpg';
import lastImg from '../Contact us img/Contact last.jpg';
import Button from '../components/Button';

export default function Contact() {
  return (
    <div className="bg-white min-h-screen pt-16">
      
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${heroImg}')` }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative z-10 text-center px-6 animate-fade-in-up">
          <div className="flex items-center justify-center gap-4 text-[#7a9b3c] mb-6">
            <div className="w-16 h-[1px] bg-[#7a9b3c]"></div>
            <h1 className="text-white text-3xl md:text-5xl font-light tracking-widest uppercase">
              Contact Us
            </h1>
            <div className="w-16 h-[1px] bg-[#7a9b3c]"></div>
          </div>
          <p className="text-gray-200 text-sm md:text-lg tracking-widest uppercase italic max-w-2xl mx-auto leading-relaxed font-serif">
            We are here to assist you with every detail of your stay
          </p>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            <div className="bg-white p-8 text-center rounded-sm shadow-lg border-b-4 border-[#7a9b3c] transition-transform duration-300 hover:-translate-y-2 animate-fade-in-up">
              <div className="bg-[#7a9b3c]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Phone className="text-[#7a9b3c] w-8 h-8" />
              </div>
              <h3 className="text-gray-800 font-bold text-sm mb-4 uppercase tracking-widest">Phone Number</h3>
              <p className="text-gray-600 text-sm font-serif">+1 234 567 8900</p>
              <p className="text-gray-600 text-sm font-serif">+1 234 567 8901</p>
            </div>

            <div className="bg-white p-8 text-center rounded-sm shadow-lg border-b-4 border-[#7a9b3c] transition-transform duration-300 hover:-translate-y-2 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <div className="bg-[#7a9b3c]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail className="text-[#7a9b3c] w-8 h-8" />
              </div>
              <h3 className="text-gray-800 font-bold text-sm mb-4 uppercase tracking-widest">Email Address</h3>
              <p className="text-gray-600 text-sm font-serif">info@tsrhotel.com</p>
              <p className="text-gray-600 text-sm font-serif">reservations@tsrhotel.com</p>
            </div>

            <div className="bg-white p-8 text-center rounded-sm shadow-lg border-b-4 border-[#7a9b3c] transition-transform duration-300 hover:-translate-y-2 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="bg-[#7a9b3c]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPin className="text-[#7a9b3c] w-8 h-8" />
              </div>
              <h3 className="text-gray-800 font-bold text-sm mb-4 uppercase tracking-widest">Our Location</h3>
              <p className="text-gray-600 text-sm font-serif">123 Luxury Avenue</p>
              <p className="text-gray-600 text-sm font-serif">Paradise City, PC 12345</p>
            </div>

            <div className="bg-white p-8 text-center rounded-sm shadow-lg border-b-4 border-[#7a9b3c] transition-transform duration-300 hover:-translate-y-2 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <div className="bg-[#7a9b3c]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="text-[#7a9b3c] w-8 h-8" />
              </div>
              <h3 className="text-gray-800 font-bold text-sm mb-4 uppercase tracking-widest">Working Hours</h3>
              <p className="text-gray-600 text-sm font-serif">24/7 Front Desk</p>
              <p className="text-gray-600 text-sm font-serif">Check-in: 2:00 PM</p>
            </div>

          </div>
        </div>
      </section>

      {/* Contact Form & Image Section */}
      <section className="py-24 px-6 bg-white overflow-hidden">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            
            {/* Form Side */}
            <div className="w-full lg:w-1/2 animate-fade-in-left">
              <div className="mb-12">
                <span className="text-[#7a9b3c] text-xs font-bold tracking-[0.3em] uppercase mb-4 block underline decoration-2 underline-offset-8">Get In Touch</span>
                <h2 className="text-3xl md:text-4xl text-gray-800 font-light mt-6 uppercase tracking-wide">Leave Us A Message</h2>
              </div>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input 
                    type="text" 
                    placeholder="First Name" 
                    className="w-full px-6 py-4 bg-gray-50 border border-transparent focus:border-[#7a9b3c] focus:bg-white outline-none transition-all rounded-sm text-sm"
                  />
                  <input 
                    type="text" 
                    placeholder="Last Name" 
                    className="w-full px-6 py-4 bg-gray-50 border border-transparent focus:border-[#7a9b3c] focus:bg-white outline-none transition-all rounded-sm text-sm"
                  />
                </div>
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  className="w-full px-6 py-4 bg-gray-50 border border-transparent focus:border-[#7a9b3c] focus:bg-white outline-none transition-all rounded-sm text-sm"
                />
                <textarea 
                  placeholder="Your Message" 
                  rows={6}
                  className="w-full px-6 py-4 bg-gray-50 border border-transparent focus:border-[#7a9b3c] focus:bg-white outline-none transition-all rounded-sm text-sm resize-none"
                ></textarea>
                <div className="pt-2">
                  <Button className="w-full py-4 uppercase tracking-widest font-bold">Send Message</Button>
                </div>
              </form>
            </div>

            {/* Image Side */}
            <div className="w-full lg:w-1/2 relative animate-fade-in-right">
              <div className="relative z-10 p-4 bg-white shadow-2xl rounded-sm">
                <img src={bodyImg} alt="Hotel Exterior" className="w-full h-auto rounded-sm" />
              </div>
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-[#7a9b3c]/5 rounded-full z-0"></div>
              <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-[#7a9b3c]/10 rounded-full z-0"></div>
            </div>

          </div>
        </div>
      </section>

      {/* Map Section Mockup */}
      <section className="h-[500px] relative overflow-hidden bg-gray-100">
        <div className="absolute inset-0 bg-cover bg-center transition-transform duration-[3000ms] hover:scale-110" style={{ backgroundImage: `url('${lastImg}')` }}>
           <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
              <div className="bg-white/95 backdrop-blur-md p-10 shadow-2xl rounded-sm text-center max-w-sm animate-fade-in-up">
                 <MapPin className="text-[#7a9b3c] w-12 h-12 mx-auto mb-6" />
                 <h3 className="text-xl text-gray-800 font-serif mb-4 uppercase tracking-wider">FIND US ON MAP</h3>
                 <p className="text-gray-600 text-sm font-serif leading-relaxed mb-8 italic">
                   "Experience the perfect sunset at our sea-view location in the heart of Paradise City."
                 </p>
                 <Button className="px-10 py-2.5 text-[10px] tracking-widest">Open Google Maps</Button>
              </div>
           </div>
        </div>
      </section>

    </div>
  );
}
