'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Play, Clock, CheckCircle, ArrowRight } from 'lucide-react';

export default function HeroSection() {
  const heroRef = useRef(null);
  const statsRef = useRef(null);
  const appointmentRef = useRef(null);

  useEffect(() => {
    // Animate hero section
    gsap.fromTo(
      heroRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
      }
    );

    // Animate stats
    gsap.fromTo(
      '.stat-item',
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        delay: 0.5,
      }
    );

    // Animate appointment card
    gsap.fromTo(
      appointmentRef.current,
      { opacity: 0, x: 50 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        delay: 0.8,
        ease: 'back.out(1.7)',
      }
    );
  }, []);

  return (
    <section 
    id='h'
      ref={heroRef}
      className="relative overflow-hidden min-h-screen pt-24 pb-20 px-6"
      style={{
        background: 'linear-gradient(135deg, #f8fafc 0%, #f0fdf4 100%)',
      }}
    >
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full" style={{ backgroundColor: '#dcfce7' }}>
              <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: '#22C55E' }}></div>
              <span className="text-sm font-medium" style={{ color: '#14532D' }}>
                Available 24/7 for Your Healthcare Needs
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="block" style={{ color: '#14532D' }}>
                Healthcare
              </span>
              <span className="block" style={{ color: '#16A34A' }}>
                That Comes To You
              </span>
            </h1>

            {/* Description */}
            <p className="text-xl text-gray-600 max-w-2xl">
              Connect with experienced doctors instantly through secure video consultations. Get prescriptions, medical advice, and quality care from the comfort of your home.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <button 
                className="px-8 py-4 rounded-full text-white font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-2 group"
                style={{ backgroundColor: '#22C55E' }}
              >
                Book Your Consultation
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </button>
              
              <button 
                className="px-8 py-4 rounded-full font-bold text-lg border-2 transition-all duration-300 hover:shadow-lg flex items-center gap-2 group"
                style={{ 
                  borderColor: '#16A34A',
                  color: '#16A34A'
                }}
              >
                <Play size={20} />
                <span>Learn More</span>
              </button>
            </div>

            {/* Stats */}
            <div ref={statsRef} className="grid grid-cols-3 gap-6 pt-8">
              {[
                { value: '15,000+', label: 'Happy Patients', icon: '😊' },
                { value: '500+', label: 'Certified Doctors', icon: '👨‍⚕️' },
                { value: '98%', label: 'Satisfaction Rate', icon: '⭐' },
              ].map((stat, index) => (
                <div 
                  key={index}
                  className="stat-item p-6 rounded-2xl text-center shadow-lg bg-white/80 backdrop-blur-sm"
                >
                  <div className="text-4xl mb-2">{stat.icon}</div>
                  <div className="text-3xl font-bold mb-1" style={{ color: '#16A34A' }}>
                    {stat.value}
                  </div>
                  <div className="text-sm font-medium" style={{ color: '#14532D' }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Appointment Card */}
          <div className="relative">
            {/* Main Appointment Card */}
            <div 
              ref={appointmentRef}
              className="relative rounded-3xl p-8 shadow-2xl max-w-md mx-auto lg:mx-0 lg:ml-auto"
              style={{ 
                backgroundColor: '#FFFFFF',
                border: '1px solid #e5e7eb'
              }}
            >
              {/* Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#dcfce7' }}>
                  <CheckCircle size={24} style={{ color: '#16A34A' }} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold" style={{ color: '#14532D' }}>
                    Appointment Confirmed
                  </h3>
                  <p className="text-gray-600">Today at 3:00 PM</p>
                </div>
              </div>

              {/* Wait Time Card */}
              <div 
                className="rounded-2xl p-6 mb-6 relative overflow-hidden"
                style={{ backgroundColor: '#F0FDF4' }}
              >
                <div className="absolute top-0 right-0 w-24 h-24 opacity-10">
                  <Clock size={96} style={{ color: '#16A34A' }} />
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ backgroundColor: '#16A34A' }}>
                    <Clock size={32} className="text-white" />
                  </div>
                  <div>
                    <div className="text-4xl font-bold" style={{ color: '#14532D' }}>
                      5 minutes
                    </div>
                    <div className="text-gray-600">Avg. Wait Time</div>
                  </div>
                </div>
              </div>

              {/* Doctor Info */}
              <div className="space-y-4">
                <div className="flex items-center justify-between py-3 border-b">
                  <span className="text-gray-600">Doctor</span>
                  <span className="font-semibold" style={{ color: '#14532D' }}>Dr. Sarah Johnson</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b">
                  <span className="text-gray-600">Specialty</span>
                  <span className="font-semibold" style={{ color: '#16A34A' }}>General Physician</span>
                </div>
                <div className="flex items-center justify-between py-3">
                  <span className="text-gray-600">Consultation</span>
                  <span className="font-semibold" style={{ color: '#14532D' }}>Video Call</span>
                </div>
              </div>

              {/* Join Button */}
              <button 
                className="w-full py-4 rounded-xl text-white font-bold text-lg mt-8 shadow-lg hover:shadow-xl transition-all duration-300"
                style={{ backgroundColor: '#22C55E' }}
              >
                Join Consultation Now
              </button>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-6 -left-6 w-24 h-24 rounded-full opacity-10" style={{ backgroundColor: '#16A34A' }}></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full opacity-10" style={{ backgroundColor: '#16A34A' }}></div>
            
            {/* Decorative Pulse */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full border-2 border-dashed animate-pulse pointer-events-none opacity-20"
              style={{ borderColor: '#16A34A' }}
            ></div>
          </div>
        </div>
      </div>

      {/* Bottom Wave Decoration */}
      {/* <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
          <path 
            fill="#F0FDF4" 
            fillOpacity="1" 
            d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,154.7C960,171,1056,181,1152,165.3C1248,149,1344,107,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div> */}
    </section>
  );
}