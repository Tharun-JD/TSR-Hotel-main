import React from 'react';
import { User, Mail, Phone, Calendar, Users, Home, MessageSquare, MapPin, ChevronDown, Check } from 'lucide-react';
import heroImg from '../Rooms img/Rooms hero.jpg';
import mapImg from '../map.png';

export default function Enquiry() {
  return (
    <div className="bg-white min-h-screen pt-20">

      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${heroImg}')` }}
        >
          <div className="absolute inset-0 bg-black/55"></div>
        </div>
        <div className="relative z-10 text-center px-6">
          <h1 className="text-white text-3xl md:text-5xl font-light tracking-[0.2em] uppercase mb-3 font-serif">
            Your Comfort Begins Here
          </h1>
          <p className="text-gray-300 text-xs tracking-[0.3em] uppercase mx-auto font-light">
            Send us your enquiry today and our hospitality team will take care of the rest.
          </p>
        </div>
      </section>

      {/* Enquire Now + Contact Section */}
      <section className="py-14 px-6 md:px-12 bg-white">
        <div className="container mx-auto max-w-5xl">

          {/* Enquire Now heading */}
          <div className="mb-2">
            <h2 style={{ color: '#7a9b3c' }} className="text-lg font-bold uppercase tracking-widest">Enquire Now</h2>
            <p className="text-gray-500 text-sm italic mt-1">Tell us your requirements and we'll get back to you shortly.</p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 mt-8">

            {/* ===== LEFT: Form ===== */}
            <div style={{ flex: '0 0 52%' }}>

              {/* ← ENTER YOUR DETAILS → */}
              <div className="flex items-center gap-3 mb-6">
                <div style={{ height: '1px', backgroundColor: '#7a9b3c', flex: 1 }}></div>
                <span style={{ color: '#7a9b3c', fontSize: '11px', letterSpacing: '0.25em', fontWeight: 500, whiteSpace: 'nowrap' }}>
                  ← &nbsp; ENTER YOUR DETAILS &nbsp; →
                </span>
                <div style={{ height: '1px', backgroundColor: '#7a9b3c', flex: 1 }}></div>
              </div>

              <form style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>

                {/* Full Name */}
                <div style={{ display: 'flex', alignItems: 'center', border: '1px solid #ccc', background: '#fff', padding: '10px 14px', gap: '10px' }}>
                  <User style={{ width: 16, height: 16, color: '#aaa', flexShrink: 0 }} />
                  <input
                    type="text"
                    placeholder="Enter Your Full Name"
                    style={{ border: 'none', outline: 'none', flex: 1, fontSize: '13px', fontFamily: 'Georgia, serif', color: '#555', background: 'transparent', lineHeight: 1.5 }}
                  />
                </div>

                {/* Email */}
                <div style={{ display: 'flex', alignItems: 'center', border: '1px solid #ccc', background: '#fff', padding: '10px 14px', gap: '10px' }}>
                  <Mail style={{ width: 16, height: 16, color: '#aaa', flexShrink: 0 }} />
                  <input
                    type="email"
                    placeholder="Email Address"
                    style={{ border: 'none', outline: 'none', flex: 1, fontSize: '13px', fontFamily: 'Georgia, serif', color: '#555', background: 'transparent', lineHeight: 1.5 }}
                  />
                </div>

                {/* Phone */}
                <div style={{ display: 'flex', alignItems: 'center', border: '1px solid #ccc', background: '#fff', padding: '10px 14px', gap: '10px' }}>
                  <Phone style={{ width: 16, height: 16, color: '#aaa', flexShrink: 0 }} />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    style={{ border: 'none', outline: 'none', flex: 1, fontSize: '13px', fontFamily: 'Georgia, serif', color: '#555', background: 'transparent', lineHeight: 1.5 }}
                  />
                </div>

                {/* Check in / Check out */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 6 }}>
                      <Calendar style={{ width: 15, height: 15, color: '#333' }} />
                      <span style={{ fontSize: '13px', fontFamily: 'Georgia, serif', color: '#222' }}>Check in date</span>
                    </div>
                    <div style={{ position: 'relative', display: 'flex', alignItems: 'center', border: '1px solid #ccc', background: '#fff' }}>
                      <input
                        type="text"
                        placeholder="Feb 3, 2026"
                        onFocus={(e) => (e.target.type = 'date')}
                        onBlur={(e) => { if (!e.target.value) e.target.type = 'text'; }}
                        style={{ border: 'none', outline: 'none', flex: 1, padding: '9px 30px 9px 12px', fontSize: '13px', fontFamily: 'Georgia, serif', color: '#555', background: 'transparent', appearance: 'none' }}
                      />
                      <ChevronDown style={{ position: 'absolute', right: 8, width: 15, height: 15, color: '#555', pointerEvents: 'none' }} />
                    </div>
                  </div>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 6 }}>
                      <Calendar style={{ width: 15, height: 15, color: '#333' }} />
                      <span style={{ fontSize: '13px', fontFamily: 'Georgia, serif', color: '#222' }}>Check out date</span>
                    </div>
                    <div style={{ position: 'relative', display: 'flex', alignItems: 'center', border: '1px solid #ccc', background: '#fff' }}>
                      <input
                        type="text"
                        placeholder="Feb 3, 2026"
                        onFocus={(e) => (e.target.type = 'date')}
                        onBlur={(e) => { if (!e.target.value) e.target.type = 'text'; }}
                        style={{ border: 'none', outline: 'none', flex: 1, padding: '9px 30px 9px 12px', fontSize: '13px', fontFamily: 'Georgia, serif', color: '#555', background: 'transparent', appearance: 'none' }}
                      />
                      <ChevronDown style={{ position: 'absolute', right: 8, width: 15, height: 15, color: '#555', pointerEvents: 'none' }} />
                    </div>
                  </div>
                </div>

                {/* Guests / Suite Type */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 6 }}>
                      <Users style={{ width: 15, height: 15, color: '#333' }} />
                      <span style={{ fontSize: '13px', fontFamily: 'Georgia, serif', color: '#222' }}>Guests</span>
                    </div>
                    <div style={{ position: 'relative', display: 'flex', alignItems: 'center', border: '1px solid #ccc', background: '#fff' }}>
                      <select style={{ border: 'none', outline: 'none', flex: 1, padding: '9px 30px 9px 12px', fontSize: '13px', fontFamily: 'Georgia, serif', color: '#555', background: 'transparent', appearance: 'none' }}>
                        <option>- 2 Adult, 1 child +</option>
                        <option>1 Adult</option>
                        <option>2 Adults</option>
                        <option>2 Adults, 2 Children</option>
                      </select>
                      <ChevronDown style={{ position: 'absolute', right: 8, width: 15, height: 15, color: '#555', pointerEvents: 'none' }} />
                    </div>
                  </div>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 6 }}>
                      <Home style={{ width: 15, height: 15, color: '#333' }} />
                      <span style={{ fontSize: '13px', fontFamily: 'Georgia, serif', color: '#222' }}>Suits type</span>
                    </div>
                    <div style={{ position: 'relative', display: 'flex', alignItems: 'center', border: '1px solid #ccc', background: '#fff' }}>
                      <select style={{ border: 'none', outline: 'none', flex: 1, padding: '9px 30px 9px 12px', fontSize: '13px', fontFamily: 'Georgia, serif', color: '#555', background: 'transparent', appearance: 'none' }}>
                        <option>Superior room</option>
                        <option>Standard room</option>
                        <option>Deluxe room</option>
                        <option>Junior Suite</option>
                      </select>
                      <ChevronDown style={{ position: 'absolute', right: 8, width: 15, height: 15, color: '#555', pointerEvents: 'none' }} />
                    </div>
                  </div>
                </div>

                {/* Message */}
                <div style={{ display: 'flex', alignItems: 'flex-start', border: '1px solid #ccc', background: '#fff', padding: '10px 14px', gap: '10px' }}>
                  <MessageSquare style={{ width: 16, height: 16, color: '#aaa', flexShrink: 0, marginTop: 2 }} />
                  <textarea
                    placeholder="Your Message"
                    rows={5}
                    style={{ border: 'none', outline: 'none', flex: 1, fontSize: '13px', fontFamily: 'Georgia, serif', color: '#555', background: 'transparent', resize: 'none', lineHeight: 1.6 }}
                  ></textarea>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  style={{ width: '100%', padding: '14px', backgroundColor: '#7a9b3c', color: '#fff', border: 'none', cursor: 'pointer', letterSpacing: '0.2em', fontSize: '12px', fontWeight: 600, textTransform: 'uppercase', marginTop: 4 }}
                >
                  Send Enquiry
                </button>
              </form>
            </div>

            {/* ===== RIGHT: Contact Details ===== */}
            <div style={{ flex: 1 }}>
              <div style={{ border: '1px solid #ddd', padding: '24px', background: '#fff' }}>
                <h3 style={{ color: '#7a9b3c', fontSize: '18px', fontFamily: 'Georgia, serif', fontWeight: 400, marginBottom: '16px' }}>Contact Details</h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '16px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <Phone style={{ width: 15, height: 15, color: '#333' }} />
                    <span style={{ fontSize: '13px', fontFamily: 'Georgia, serif', color: '#333' }}>+1 234 567 8900</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <Mail style={{ width: 15, height: 15, color: '#333' }} />
                    <span style={{ fontSize: '13px', fontFamily: 'Georgia, serif', color: '#333' }}>info@tsrhotels.com</span>
                  </div>
                </div>

                {/* Green Divider with dot */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 0, marginBottom: '16px' }}>
                  <div style={{ height: '2px', backgroundColor: '#7a9b3c', flex: 1 }}></div>
                  <div style={{ width: 8, height: 8, backgroundColor: '#7a9b3c', transform: 'rotate(45deg)', flexShrink: 0 }}></div>
                  <div style={{ height: '2px', backgroundColor: '#7a9b3c', flex: 1 }}></div>
                </div>

                {/* Address */}
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', marginBottom: '16px' }}>
                  <MapPin style={{ width: 16, height: 16, color: '#333', marginTop: 2, flexShrink: 0 }} />
                  <span style={{ fontSize: '12px', fontFamily: 'Georgia, serif', color: '#333', lineHeight: 1.6, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    Tsr hotels, Port Dickson,<br />Malaysia, 71050
                  </span>
                </div>

                {/* Map */}
                <div style={{ width: '100%', marginBottom: '16px', overflow: 'hidden' }}>
                  <img src={mapImg} alt="Hotel Map" style={{ width: '100%', height: 'auto', display: 'block' }} />
                </div>

                {/* Call Us Now */}
                <button
                  style={{ width: '100%', padding: '13px', backgroundColor: '#7a9b3c', color: '#fff', border: 'none', cursor: 'pointer', letterSpacing: '0.2em', fontSize: '12px', fontWeight: 600, textTransform: 'uppercase', marginBottom: '14px' }}
                >
                  Call Us Now
                </button>

                {/* Checkmarks */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Check style={{ width: 14, height: 14, color: '#7a9b3c', strokeWidth: 3 }} />
                    <span style={{ fontSize: '12px', fontFamily: 'Georgia, serif', color: '#444' }}>we respond within 24 hours</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Check style={{ width: 14, height: 14, color: '#7a9b3c', strokeWidth: 3 }} />
                    <span style={{ fontSize: '12px', fontFamily: 'Georgia, serif', color: '#444' }}>Best price guaranteed</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
