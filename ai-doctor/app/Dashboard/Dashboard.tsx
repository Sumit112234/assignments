'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import HeroSection from '@/components/Hero';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export default function TelehealthLandingPage() {
  const heroRef = useRef(null);
  const statsRef = useRef(null);
  const servicesRef = useRef(null);
  const howItWorksRef = useRef(null);
  const aiFeaturesRef = useRef(null);
  const testimonialsRef = useRef(null);

  const sectionRefs = [
    heroRef,
    statsRef,
    servicesRef,
    howItWorksRef,
    aiFeaturesRef,
    testimonialsRef,
  ];

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

    // Animate stats cards
    gsap.fromTo(
      '.stat-card',
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: statsRef.current,
          start: 'top 80%',
        },
      }
    );

    // Animate service cards
    gsap.fromTo(
      '.service-card',
      { opacity: 0, scale: 0.9 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.6,
        stagger: 0.1,
        scrollTrigger: {
          trigger: servicesRef.current,
          start: 'top 75%',
        },
      }
    );

    // Animate how-it-works steps
    gsap.fromTo(
      '.step-card',
      { opacity: 0, x: -30 },
      {
        opacity: 1,
        x: 0,
        duration: 0.7,
        stagger: 0.2,
        scrollTrigger: {
          trigger: howItWorksRef.current,
          start: 'top 75%',
        },
      }
    );

    // Animate AI features
    gsap.fromTo(
      '.ai-feature',
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.3,
        scrollTrigger: {
          trigger: aiFeaturesRef.current,
          start: 'top 75%',
        },
      }
    );

    // Animate testimonials
    gsap.fromTo(
      '.testimonial-card',
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.3,
        scrollTrigger: {
          trigger: testimonialsRef.current,
          start: 'top 75%',
        },
      }
    );

    // Animate final CTA
    gsap.fromTo(
      '.final-cta',
      { opacity: 0, scale: 0.95 },
      {
        opacity: 1,
        scale: 1,
        duration: 1,
        scrollTrigger: {
          trigger: '.final-cta',
          start: 'top 85%',
        },
      }
    );

    // Clean up
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans">

      <Navbar />

      <HeroSection />

      {/* ===== SECTION 2: STATS ===== */}

      <section
        ref={statsRef}
        className="relative py-20 px-4 md:px-6 overflow-hidden"
      >
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-green-300/20 to-emerald-400/10 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-l from-green-400/15 to-teal-300/10 rounded-full blur-3xl animate-pulse-slower"></div>
          <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-gradient-to-br from-emerald-200/10 to-green-300/5 rounded-full blur-3xl animate-float"></div>
        </div>

        <div className="container mx-auto max-w-6xl relative z-10">
          {/* Section title with animation */}
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-600 animate-gradient-shift">
                Trusted by Thousands
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto animate-fade-in-up">
              Delivering exceptional healthcare services with cutting-edge technology
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
            {[
              { value: '10K+', label: 'Verified Doctors', icon: '👨‍⚕️', delay: 0 },
              { value: '99.9%', label: 'Uptime', icon: '⚡', delay: 100 },
              { value: '50K+', label: 'Consultations', icon: '💬', delay: 200 },
              { value: '24/7', label: 'Support', icon: '🛡️', delay: 300 },
            ].map((stat, index) => (
              <div
                key={index}
                className="group relative"
                style={{ animationDelay: `${stat.delay}ms` }}
              >
                {/* Floating particle effect */}
                <div className="absolute -inset-2">
                  <div className="absolute top-0 left-1/4 w-2 h-2 bg-green-400 rounded-full animate-float-particle"></div>
                  <div className="absolute bottom-1/3 right-1/4 w-1.5 h-1.5 bg-emerald-400 rounded-full animate-float-particle-delayed"></div>
                </div>

                <div
                  className="stat-card relative p-6 md:p-8 rounded-3xl text-center transform transition-all duration-500 hover:scale-105 hover:-translate-y-2 animate-fade-in-up"
                  style={{
                    backgroundColor: 'rgba(240, 253, 244, 0.9)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(34, 197, 94, 0.2)',
                    animationFillMode: 'both'
                  }}
                >
                  {/* Glowing border effect */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-green-400/0 via-green-400/30 to-emerald-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl"></div>

                  {/* Icon with animation */}
                  <div className="text-4xl mb-4 animate-bounce-slow" style={{ animationDelay: `${stat.delay + 200}ms` }}>
                    {stat.icon}
                  </div>

                  {/* Animated number counter */}
                  <div
                    className="text-4xl md:text-5xl font-bold mb-3 relative"
                    style={{ color: '#16A34A' }}
                  >
                    <div className="inline-block">
                      {stat.value.endsWith('+') || stat.value.endsWith('%') ? (
                        <>
                          <span className="inline-block animate-count-up">
                            {stat.value.replace(/[+%]/g, '')}
                          </span>
                          {stat.value.endsWith('+') ? '+' : '%'}
                        </>
                      ) : (
                        stat.value
                      )}
                    </div>
                    <div className="absolute -right-2 top-0 text-green-500 animate-pulse">
                      {stat.value.endsWith('+') ? '↑' : stat.value.endsWith('%') ? '●' : ''}
                    </div>
                  </div>

                  {/* Label with gradient animation */}
                  <div className="text-lg md:text-xl font-semibold">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-emerald-800 animate-gradient-subtle">
                      {stat.label}
                    </span>
                  </div>

                  {/* Progress bar for uptime */}
                  {stat.label === 'Uptime' && (
                    <div className="mt-6 h-2 bg-green-100 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-green-400 to-emerald-500 rounded-full animate-progress-grow"
                        style={{ width: '99.9%' }}
                      ></div>
                    </div>
                  )}

                  {/* Subtle pulse effect */}
                  <div className="absolute inset-0 rounded-3xl border-2 border-green-300/30 group-hover:border-green-400/50 transition-all duration-500 animate-pulse-border"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Animated divider */}
          <div className="mt-16 flex justify-center">
            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-green-400 to-transparent animate-width-pulse"></div>
          </div>
        </div>
      </section>
    
      {/* ===== SECTION 3: CORE SERVICES ===== */}

      <section
        id='services'
        ref={servicesRef}
        className="relative py-24 px-4 md:px-6 overflow-hidden"
      >
        {/* Animated background grid */}
        <div className="absolute inset-0 overflow-hidden opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(to right, #10b981 1px, transparent 1px),
                        linear-gradient(to bottom, #10b981 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
            animation: 'gridMove 20s linear infinite'
          }}></div>
        </div>

        {/* Floating particles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-gradient-to-r from-green-300 to-emerald-400 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `floatRandom ${8 + Math.random() * 10}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 5}s`
              }}
            ></div>
          ))}
        </div>

        <div className="container mx-auto max-w-6xl relative z-10">
          {/* Animated title with gradient trail */}
          <div className="text-center mb-16 relative">
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-48 h-1 bg-gradient-to-r from-transparent via-green-400 to-transparent animate-width-pulse"></div>

            <h2 className="text-5xl md:text-6xl font-bold mb-6 relative">
              <span className="relative">
                <span className="absolute -inset-1 bg-gradient-to-r from-green-400 to-emerald-600 blur-2xl opacity-30 animate-pulse-slow"></span>
                <span className="relative bg-clip-text text-transparent bg-gradient-to-r from-green-600 via-emerald-500 to-green-600 bg-[length:200%_auto] animate-gradient-shift">
                  Core Services
                </span>
              </span>
            </h2>

            <p className="text-xl text-gray-600 max-w-2xl mx-auto animate-fade-in-up">
              Experience healthcare reimagined with our comprehensive suite of digital solutions
            </p>

            {/* Animated underline */}
            <div className="mt-4 relative inline-block">
              <div className="h-1 w-24 bg-gradient-to-r from-green-300 to-emerald-500 rounded-full mx-auto animate-width-grow"></div>
              <div className="h-1 w-16 bg-green-400 rounded-full mx-auto absolute top-0 left-1/2 transform -translate-x-1/2 animate-slide"></div>
            </div>
          </div>

          {/* Interactive service cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 relative">
            {/* Connecting lines on hover - SVG */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none hidden lg:block">
              <defs>
                <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#10b981" stopOpacity="0">
                    <animate attributeName="stop-opacity" values="0;0.5;0" dur="2s" repeatCount="indefinite" />
                  </stop>
                  <stop offset="50%" stopColor="#34d399" stopOpacity="0.5">
                    <animate attributeName="stop-opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite" />
                  </stop>
                  <stop offset="100%" stopColor="#059669" stopOpacity="0">
                    <animate attributeName="stop-opacity" values="0;0.5;0" dur="2s" repeatCount="indefinite" />
                  </stop>
                </linearGradient>
              </defs>
            </svg>

            {[
              {
                title: 'Video Consultations',
                desc: 'Face-to-face doctor meetings via secure video',
                icon: '🎥',
                gradient: 'from-green-400 to-cyan-400',
                features: ['HD Quality', 'Secure', 'Record Option'],
                delay: 0
              },
              {
                title: 'Digital Prescriptions',
                desc: 'Electronically signed prescriptions delivered instantly',
                icon: '📄',
                gradient: 'from-emerald-400 to-green-500',
                features: ['Instant Delivery', 'E-Signature', 'Pharmacy Ready'],
                delay: 100
              },
              {
                title: 'Medical Records',
                desc: 'Centralized storage for health documents',
                icon: '📁',
                gradient: 'from-teal-400 to-emerald-500',
                features: ['Cloud Storage', 'Easy Access', 'Share Securely'],
                delay: 200
              },
              {
                title: 'Easy Booking',
                desc: 'Search doctors and book in real-time',
                icon: '📅',
                gradient: 'from-green-300 to-emerald-400',
                features: ['Real-time Slots', 'Smart Search', 'Reminders'],
                delay: 300
              },
              {
                title: 'Drug Interaction Checker',
                desc: 'Automated safety alerts for medications',
                icon: '⚠️',
                gradient: 'from-yellow-400 to-green-500',
                features: ['Real-time Alerts', 'Comprehensive DB', 'Safety Score'],
                delay: 400
              },
              {
                title: 'HIPAA-Grade Security',
                desc: 'Military-grade encryption for data protection',
                icon: '🔒',
                gradient: 'from-green-500 to-emerald-600',
                features: ['256-bit Encryption', 'GDPR Compliant', 'Audit Logs'],
                delay: 500
              },
            ].map((service, index) => (
              <div
                key={index}
                className="relative group"
                style={{ animationDelay: `${service.delay}ms` }}
              >
                {/* Glowing orb behind card */}
                <div className={`absolute -inset-4 bg-gradient-to-r ${service.gradient} rounded-3xl blur-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 animate-pulse`}></div>

                {/* Card container */}
                <div className="service-card relative h-full p-6 md:p-8 rounded-3xl transform transition-all duration-500 hover:scale-105 group-hover:-translate-y-2 animate-fade-in-up"
                  style={{
                    backgroundColor: 'rgba(240, 253, 244, 0.9)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(34, 197, 94, 0.1)',
                    animationFillMode: 'both'
                  }}
                >
                  {/* Animated corner accents */}
                  <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-green-300 rounded-tl-2xl"></div>
                  <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-green-300 rounded-tr-2xl"></div>
                  <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-green-300 rounded-bl-2xl"></div>
                  <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-green-300 rounded-br-2xl"></div>

                  {/* Icon with floating animation */}
                  <div className="relative mb-6">
                    <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} rounded-2xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-500`}></div>
                    <div className="relative text-5xl transform group-hover:scale-110 transition-transform duration-300 animate-bounce-slow"
                      style={{ animationDelay: `${service.delay + 300}ms` }}>
                      {service.icon}
                    </div>
                  </div>

                  {/* Title with gradient */}
                  <h3 className="text-2xl font-bold mb-4 relative">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-700 to-emerald-800">
                      {service.title}
                    </span>
                    <div className="absolute -bottom-2 left-0 w-0 h-0.5 bg-gradient-to-r from-green-400 to-emerald-500 group-hover:w-full transition-all duration-500"></div>
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.desc}
                  </p>

                  {/* Features list with checkmarks */}
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-center text-sm text-gray-700">
                        <div className="w-4 h-4 mr-2 bg-green-100 rounded-full flex items-center justify-center group-hover:bg-green-200 transition-colors duration-300">
                          <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
                        </div>
                        {feature}
                      </div>
                    ))}
                  </div>

                  {/* Animated "Learn More" button */}
                  <button className="relative w-full py-3 px-4 rounded-xl overflow-hidden group/btn">
                    <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500`}></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                    <span className="relative text-green-700 font-semibold group-hover/btn:text-white transition-colors duration-300">
                      Learn More
                      <span className="inline-block ml-2 transform group-hover/btn:translate-x-2 transition-transform duration-300">
                        →
                      </span>
                    </span>
                  </button>

                  {/* Hover effect lines */}
                  <div className="absolute -z-10 inset-4 rounded-2xl border-2 border-green-200/0 group-hover:border-green-300/50 transition-all duration-700"></div>
                </div>

                {/* Floating indicator */}
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg transform group-hover:rotate-180 transition-transform duration-500">
                  {index + 1}
                </div>
              </div>
            ))}
          </div>

          {/* Animated CTA at bottom */}
          <div className="mt-16 text-center animate-fade-in-up" style={{ animationDelay: '600ms' }}>
            <button className="relative px-8 py-4 rounded-2xl overflow-hidden group/cta">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500 via-emerald-500 to-green-500 bg-[length:200%_auto] animate-gradient-shift"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover/cta:opacity-100 transition-opacity duration-500"></div>
              <span className="relative text-white font-bold text-lg flex items-center justify-center">
                <span className="mr-2">Explore All Features</span>
                <span className="inline-block transform group-hover/cta:translate-x-2 transition-transform duration-300">
                  ↗
                </span>
              </span>
            </button>
          </div>
        </div>
      </section>
   
      {/* ===== SECTION 4: HOW IT WORKS ===== */}

      <section
        id="how-it-works"
        ref={howItWorksRef}
        className="relative py-24 px-4 md:px-6 overflow-hidden"
      >
        {/* Animated background with moving elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-50/30 via-emerald-50/20 to-teal-50/30">
          {/* Moving background patterns */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(12)].map((_, i) => (
              <div
                key={i}
                className="absolute rounded-full bg-gradient-to-r from-green-200/20 to-emerald-200/10"
                style={{
                  width: `${100 + Math.random() * 200}px`,
                  height: `${100 + Math.random() * 200}px`,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animation: `orbit ${20 + Math.random() * 20}s linear infinite`,
                  animationDelay: `${Math.random() * 5}s`
                }}
              ></div>
            ))}
          </div>

          {/* Animated path line connecting steps */}
          <div className="absolute top-1/2 left-8 right-8 h-1 hidden lg:block">
            <div className="relative h-full">
              <div className="absolute inset-0 bg-gradient-to-r from-green-300 via-emerald-400 to-green-300 rounded-full opacity-30"></div>
              <div
                className="absolute top-0 left-0 h-full bg-gradient-to-r from-green-400 to-emerald-500 rounded-full animate-progress-line"
                style={{ width: '0%' }}
              ></div>

              {/* Moving dots along the path */}
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="absolute top-1/2 w-3 h-3 bg-white border-2 border-green-500 rounded-full transform -translate-y-1/2 animate-moving-dot"
                  style={{
                    left: `${25 * (i + 1)}%`,
                    animationDelay: `${i * 0.5}s`
                  }}
                ></div>
              ))}
            </div>
          </div>
        </div>

        <div className="container mx-auto max-w-6xl relative z-10">
          {/* Animated header */}
          <div className="text-center mb-20 relative">
            <div className="inline-block relative">
              <h2 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="relative">
                  {/* Text glow effect */}
                  <span className="absolute -inset-4 bg-gradient-to-r from-green-400/30 to-emerald-600/30 blur-3xl opacity-50 animate-pulse-slow"></span>
                  <span className="relative bg-clip-text text-transparent bg-gradient-to-r from-green-700 via-emerald-600 to-green-700 bg-[length:200%_auto] animate-gradient-shift">
                    How It Works
                  </span>
                </span>
              </h2>

              {/* Animated underline */}
              <div className="relative h-2 mx-auto w-48 overflow-hidden rounded-full">
                <div className="absolute inset-0 bg-gradient-to-r from-green-200 to-emerald-200"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-500 animate-shimmer"></div>
              </div>
            </div>

            <p className="text-xl text-gray-600 mt-6 max-w-2xl mx-auto animate-fade-in-up">
              Get started in minutes with our simple 4-step process
            </p>
          </div>

          {/* Interactive steps with timeline */}
          <div className="relative">
            {/* Mobile timeline (vertical) */}
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-green-300 to-emerald-400 rounded-full opacity-30 md:hidden"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 relative">
              {[
                {
                  step: '1',
                  title: 'Register',
                  desc: 'Quick sign-up with phone verification (under 2 minutes)',
                  icon: '📱',
                  color: '#10B981',
                  features: ['Phone Verification', '2-Minute Setup', 'Secure Login'],
                  animationDelay: 0
                },
                {
                  step: '2',
                  title: 'Find a Doctor',
                  desc: 'Browse by specialty, location, language, ratings',
                  icon: '👨‍⚕️',
                  color: '#059669',
                  features: ['Specialty Filter', 'Ratings & Reviews', 'Availability'],
                  animationDelay: 200
                },
                {
                  step: '3',
                  title: 'Book & Pay',
                  desc: 'Select time slot, complete secure payment',
                  icon: '💳',
                  color: '#047857',
                  features: ['Real-time Slots', 'Secure Payment', 'Instant Confirmation'],
                  animationDelay: 400
                },
                {
                  step: '4',
                  title: 'Consult',
                  desc: 'Join video call, chat, share files, receive prescription',
                  icon: '🎬',
                  color: '#065F46',
                  features: ['Video Call', 'File Sharing', 'Digital Prescription'],
                  animationDelay: 600
                },
              ].map((step, index) => (
                <div
                  key={index}
                  className="relative group"
                  style={{ animationDelay: `${step.animationDelay}ms` }}
                >
                  {/* Connecting lines between steps */}
                  {index < 3 && (
                    <>
                      {/* Mobile connector (vertical) */}
                      <div className="absolute -bottom-4 left-8 h-4 w-1 bg-gradient-to-b from-green-300 to-emerald-400 rounded-b-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 md:hidden"></div>

                      {/* Desktop connector (horizontal) */}
                      <div className="absolute top-1/2 -right-4 w-8 h-1 bg-gradient-to-r from-green-300 to-emerald-400 rounded-r-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 hidden lg:block"></div>
                      <div className="absolute top-1/2 -right-3 w-2 h-2 bg-green-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse hidden lg:block"></div>
                    </>
                  )}

                  {/* Step card */}
                  <div className="step-card relative h-full p-6 md:p-8 rounded-3xl transform transition-all duration-500 hover:scale-105 animate-fade-in-up bg-white/90 backdrop-blur-sm border border-green-100 shadow-xl hover:shadow-2xl hover:border-green-200"
                    style={{
                      animationFillMode: 'both'
                    }}
                  >
                    {/* Animated step number circle */}
                    <div className="relative mb-8">
                      <div className="absolute -ins-4 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>

                      <div className="relative w-20 h-20 rounded-full flex items-center justify-center mx-auto"
                        style={{
                          background: `linear-gradient(135deg, ${step.color}20, ${step.color}40)`,
                          border: `2px solid ${step.color}40`
                        }}
                      >
                        {/* Animated ring */}
                        <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-green-400 border-r-emerald-500 animate-spin-slow"></div>

                        {/* Step number */}
                        <div className="relative text-3xl font-bold"
                          style={{ color: step.color }}
                        >
                          {step.step}

                          {/* Icon badge */}
                          <div className="absolute -top-2 -right-2 text-2xl">
                            {step.icon}
                          </div>
                        </div>

                        {/* Progress ring for animation */}
                        <svg className="absolute inset-0 w-full h-full transform -rotate-90">
                          <circle
                            cx="40"
                            cy="40"
                            r="38"
                            fill="transparent"
                            stroke={step.color}
                            strokeWidth="2"
                            strokeDasharray="240"
                            strokeDashoffset="240"
                            className="animate-draw-circle"
                            style={{ animationDelay: `${index * 0.3}s` }}
                          />
                        </svg>
                      </div>
                    </div>

                    {/* Step content */}
                    <div className="text-center">
                      {/* Title with animated underline */}
                      <h3 className="text-2xl font-bold mb-4 relative inline-block">
                        <span className="relative">
                          <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-700 to-emerald-800">
                            {step.title}
                          </span>
                          <div className="absolute -bottom-2 left-0 w-0 h-1 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full group-hover:w-full transition-all duration-700"></div>
                        </span>
                      </h3>

                      {/* Description */}
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {step.desc}
                      </p>

                      {/* Features list */}
                      <div className="space-y-3">
                        {step.features.map((feature, i) => (
                          <div
                            key={i}
                            className="flex items-center justify-center text-sm text-gray-700 opacity-0 animate-slide-in-left"
                            style={{
                              animationDelay: `${step.animationDelay + (i * 100)}ms`,
                              animationFillMode: 'forwards'
                            }}
                          >
                            <div className="w-2 h-2 bg-green-400 rounded-full mr-3 animate-pulse"
                              style={{ animationDelay: `${i * 0.2}s` }}
                            ></div>
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Time indicator */}
                    <div className="mt-6 pt-4 border-t border-green-100 text-center">
                      <div className="inline-flex items-center px-3 py-1 rounded-full bg-green-50 text-green-700 text-sm font-medium">
                        <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                        {index === 0 ? '2 min' : index === 1 ? 'Instant' : index === 2 ? '1 min' : '15-30 min'}
                      </div>
                    </div>

                    {/* Hover effect overlay */}
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-green-500/0 to-emerald-500/0 group-hover:from-green-500/5 group-hover:to-emerald-500/5 transition-all duration-500 pointer-events-none"></div>
                  </div>

                  {/* Step connector arrow for mobile */}
                  {index < 3 && (
                    <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-green-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500 md:hidden">
                      <div className="animate-bounce">↓</div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Interactive CTA with progress tracking */}
          <div className="mt-20 text-center animate-fade-in-up" style={{ animationDelay: '800ms' }}>
            <div className="mb-8">
              <div className="flex items-center justify-center mb-4">
                <div className="text-sm text-gray-600 mr-4">Ready to start?</div>
                <div className="flex space-x-1">
                  {[...Array(4)].map((_, i) => (
                    <div
                      key={i}
                      className="w-2 h-2 bg-green-300 rounded-full animate-pulse"
                      style={{ animationDelay: `${i * 0.2}s` }}
                    ></div>
                  ))}
                </div>
              </div>

              <button className="relative px-10 py-5 rounded-2xl overflow-hidden group/cta transform transition-all duration-300 hover:scale-105">
                {/* Animated background */}
                <div className="absolute inset-0 bg-gradient-to-r from-green-500 via-emerald-500 to-green-500 bg-[length:200%_auto] animate-gradient-shift"></div>

                {/* Shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-white/0 group-hover/cta:bg-white/10 transition-colors duration-300"></div>

                <span className="relative text-white font-bold text-lg flex items-center justify-center">
                  <span className="mr-3">Begin Your Journey</span>
                  <span className="inline-block transform group-hover/cta:translate-x-2 transition-transform duration-300">
                    <div className="animate-bounce-right">→</div>
                  </span>
                </span>

                {/* Ripple effect on click */}
                <div className="absolute inset-0 rounded-2xl overflow-hidden">
                  <div className="absolute inset-0 ripple"></div>
                </div>
              </button>

              {/* Progress indicator */}
              <div className="mt-6 text-sm text-gray-500">
                <div className="inline-flex items-center">
                  <div className="w-32 h-1 bg-green-100 rounded-full overflow-hidden mr-3">
                    <div className="h-full bg-gradient-to-r from-green-400 to-emerald-500 rounded-full animate-progress-grow"></div>
                  </div>
                  <span>4 simple steps • Less than 5 minutes</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
     

      {/* ===== SECTION 5: AI-POWERED FEATURES ===== */}
      <section
      id='ai-features'
        ref={aiFeaturesRef}
        className="py-20 px-6"
      >
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4" style={{ color: '#14532D' }}>
            AI-Powered Features
          </h2>
          <p className="text-center text-xl mb-16 max-w-3xl mx-auto" style={{ color: '#4D7C0F' }}>
            Our advanced technology sets us apart from competitors
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                title: 'Symptom Checker',
                desc: 'Natural language input → Instant triage & risk assessment',
                icon: '🤖'
              },
              {
                title: 'Doctor AI Assistant',
                desc: 'Case summaries + differential diagnosis suggestions',
                icon: '🧠'
              },
              {
                title: 'Smart Alerts',
                desc: 'Real-time drug interaction warnings and allergy alerts',
                icon: '🔔'
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="ai-feature p-10 rounded-2xl text-center shadow-lg"
                style={{ backgroundColor: '#F0FDF4' }}
              >
                <div className="text-5xl mb-6">{feature.icon}</div>
                <h3 className="text-2xl font-bold mb-4" style={{ color: '#14532D' }}>
                  {feature.title}
                </h3>
                <p style={{ color: '#4D7C0F' }}>
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SECTION 6: TESTIMONIALS ===== */}
      <section
      id='testimonials'
        ref={testimonialsRef}
        className="relative py-24 px-4 md:px-6 overflow-hidden"
        style={{ backgroundColor: '#F0FDF4' }}
      >
        {/* Animated floating elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full opacity-10 animate-float-random"
              style={{
                width: `${20 + Math.random() * 60}px`,
                height: `${20 + Math.random() * 60}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                background: `radial-gradient(circle, #10b981 0%, transparent 70%)`,
                animationDuration: `${15 + Math.random() * 20}s`,
                animationDelay: `${Math.random() * 5}s`
              }}
            ></div>
          ))}
        </div>

        {/* Decorative corner elements */}
        <div className="absolute top-10 left-10 w-24 h-24 border-t-2 border-l-2 border-green-300 rounded-tl-3xl opacity-20"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 border-b-2 border-r-2 border-green-300 rounded-br-3xl opacity-20"></div>

        <div className="container mx-auto max-w-6xl relative z-10">
          {/* Animated header */}
          <div className="text-center mb-20">
            <div className="inline-block relative">
              {/* Animated quote icon */}
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-6xl opacity-20 animate-bounce-slow">"</div>

              <h2 className="text-4xl md:text-5xl font-bold mb-4 relative">
                <span className="relative">
                  <span className="absolute -inset-2 bg-gradient-to-r from-green-200 to-emerald-200 blur-xl opacity-50 animate-pulse-slow"></span>
                  <span className="relative bg-clip-text text-transparent bg-gradient-to-r from-green-700 via-emerald-700 to-green-700 bg-[length:200%_auto] animate-gradient-shift">
                    What Our Users Say
                  </span>
                </span>
              </h2>

              {/* Animated rating stars */}
              <div className="flex justify-center items-center mt-6 space-x-2">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className="text-2xl animate-pulse"
                    style={{
                      color: '#fbbf24',
                      animationDelay: `${i * 0.2}s`
                    }}
                  >
                    ⭐
                  </div>
                ))}
                <span className="ml-3 text-lg font-semibold" style={{ color: '#14532D' }}>
                  4.9/5 from 2,500+ reviews
                </span>
              </div>
            </div>

            <p className="text-xl text-gray-600 mt-8 max-w-2xl mx-auto animate-fade-in-up">
              Join thousands of satisfied patients and doctors who trust our platform
            </p>
          </div>

          {/* Interactive testimonial cards with carousel effect */}
          <div className="relative">
            {/* Navigation arrows for desktop */}
            <button className="hidden md:flex absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-12 w-12 h-12 bg-white rounded-full shadow-lg items-center justify-center hover:scale-110 transition-transform duration-300 z-20 border border-green-200">
              <span className="text-2xl" style={{ color: '#16A34A' }}>←</span>
            </button>
            <button className="hidden md:flex absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-12 w-12 h-12 bg-white rounded-full shadow-lg items-center justify-center hover:scale-110 transition-transform duration-300 z-20 border border-green-200">
              <span className="text-2xl" style={{ color: '#16A34A' }}>→</span>
            </button>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {[
                {
                  name: 'Priya S.',
                  role: 'Patient',
                  review: 'Fast service, excellent video quality. The doctor was very attentive and my prescription arrived instantly.',
                  avatar: '👩‍⚕️',
                  rating: 5,
                  color: '#10B981',
                  delay: 0
                },
                {
                  name: 'Dr. Rajesh Kumar',
                  role: 'Doctor',
                  review: 'Streamlined workflow, time-saving platform. The AI assistant helps with case summaries.',
                  avatar: '👨‍⚕️',
                  rating: 5,
                  color: '#059669',
                  delay: 200
                },
                {
                  name: 'Amit P.',
                  role: 'Patient',
                  review: 'The symptom checker provided peace of mind before my consultation. Highly recommended!',
                  avatar: '👨‍💼',
                  rating: 5,
                  color: '#047857',
                  delay: 400
                },
              ].map((testimonial, index) => (
                <div
                  key={index}
                  className="relative group"
                  style={{ animationDelay: `${testimonial.delay}ms` }}
                >
                  {/* Glow effect on hover */}
                  <div className="absolute -inset-4 bg-gradient-to-r from-green-200 to-emerald-200 rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>

                  {/* Main testimonial card */}
                  <div className="testimonial-card relative h-full p-6 md:p-8 rounded-3xl bg-white transform transition-all duration-500 group-hover:scale-105 animate-fade-in-up shadow-xl hover:shadow-2xl border border-green-100"
                    style={{ animationFillMode: 'both' }}
                  >
                    {/* Animated quote icon */}
                    <div className="absolute -top-4 -left-4 w-12 h-12 bg-green-50 rounded-full flex items-center justify-center text-3xl animate-bounce-slow"
                      style={{ color: testimonial.color }}>
                      "
                    </div>

                    {/* Avatar with floating animation */}
                    <div className="relative mb-6">
                      <div className="w-20 h-20 rounded-full mx-auto flex items-center justify-center text-4xl transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-6"
                        style={{
                          background: `linear-gradient(135deg, ${testimonial.color}20, ${testimonial.color}40)`,
                          border: `2px solid ${testimonial.color}40`
                        }}>
                        {testimonial.avatar}
                      </div>

                      {/* Pulsing ring around avatar */}
                      <div className="absolute inset-0 w-20 h-20 mx-auto rounded-full border-2 border-transparent border-t-green-300 border-r-emerald-300 animate-spin-slow"></div>
                    </div>

                    {/* Review text */}
                    <div className="relative mb-8">
                      <p className="text-lg mb-6 italic leading-relaxed min-h-[120px]"
                        style={{ color: '#4D7C0F' }}>
                        "{testimonial.review}"
                      </p>

                      {/* Rating stars */}
                      <div className="flex justify-center space-x-1 mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <span
                            key={i}
                            className="text-xl animate-pulse"
                            style={{
                              color: '#fbbf24',
                              animationDelay: `${i * 0.1}s`
                            }}
                          >
                            ⭐
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* User info */}
                    <div className="text-center pt-6 border-t border-green-100">
                      <div className="font-bold text-xl mb-1"
                        style={{ color: '#14532D' }}>
                        {testimonial.name}
                      </div>
                      <div className="text-gray-600 mb-4">{testimonial.role}</div>

                      {/* Verified badge */}
                      <div className="inline-flex items-center px-3 py-1 rounded-full text-sm"
                        style={{
                          backgroundColor: `${testimonial.color}15`,
                          color: testimonial.color
                        }}>
                        <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                        Verified User
                      </div>
                    </div>

                    {/* Decorative corner accents */}
                    <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-green-200 rounded-tr-xl"></div>
                    <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-green-200 rounded-bl-xl"></div>
                  </div>

                  {/* Hover indicator */}
                  <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 text-green-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="animate-bounce">↓</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Dots indicator */}
            <div className="flex justify-center space-x-2 mt-12">
              {[...Array(3)].map((_, i) => (
                <button
                  key={i}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${i === 0 ? 'w-8 bg-green-500' : 'bg-green-300 hover:bg-green-400'}`}
                ></button>
              ))}
            </div>
          </div>

         
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
     
      <section id='doctors' className="relative py-24 px-4 md:px-6 overflow-hidden">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
          {/* Floating leaves/circles */}
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full opacity-20 animate-float-random"
              style={{
                width: `${40 + Math.random() * 80}px`,
                height: `${40 + Math.random() * 80}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                background: `radial-gradient(circle, #10B981 0%, transparent 70%)`,
                animationDuration: `${15 + Math.random() * 15}s`,
                animationDelay: `${Math.random() * 3}s`
              }}
            ></div>
          ))}

          {/* Subtle grid pattern */}
          <div className="absolute inset-0 opacity-5" style={{
            backgroundImage: `linear-gradient(to right, #10B981 1px, transparent 1px),
                        linear-gradient(to bottom, #10B981 1px, transparent 1px)`,
            backgroundSize: '30px 30px'
          }}></div>
        </div>

        {/* Animated corner decorations */}
        <div className="absolute top-8 left-8 w-16 h-16 border-t-2 border-l-2 border-green-300 rounded-tl-3xl opacity-20"></div>
        <div className="absolute bottom-8 right-8 w-16 h-16 border-b-2 border-r-2 border-green-300 rounded-br-3xl opacity-20"></div>

        <div className="container mx-auto max-w-6xl relative z-10">
          {/* Main CTA card */}
          <div className="relative p-8 md:p-12 rounded-3xl text-center transform transition-all duration-500 hover:scale-105 animate-fade-in-up"
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.9)',
              backdropFilter: 'blur(10px)',
              boxShadow: `
          0 20px 60px -15px rgba(34, 197, 94, 0.15),
          0 10px 40px -20px rgba(34, 197, 94, 0.1),
          inset 0 1px 0 0 rgba(255, 255, 255, 0.8)
        `,
              border: '1px solid rgba(34, 197, 94, 0.15)'
            }}
          >
            {/* Glowing border effect */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-green-200/30 via-emerald-200/20 to-green-200/30 animate-pulse-slow"></div>

            {/* Animated corner accents */}
            <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-green-400 rounded-tl-xl animate-corner-pulse"></div>
            <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-green-400 rounded-tr-xl animate-corner-pulse" style={{ animationDelay: '0.5s' }}></div>
            <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-green-400 rounded-bl-xl animate-corner-pulse" style={{ animationDelay: '1s' }}></div>
            <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-green-400 rounded-br-xl animate-corner-pulse" style={{ animationDelay: '1.5s' }}></div>

            {/* Main content */}
            <div className="relative">
              {/* Animated icon with floating effect */}
              {/* <div className="relative mb-8">
                <div className="inline-block p-4 rounded-2xl bg-gradient-to-br from-green-100 to-emerald-100 border border-green-200 shadow-lg animate-float">
                  <div className="text-5xl">✨</div>
                </div>
                <div className="absolute -inset-4 bg-gradient-to-r from-green-200 to-emerald-200 rounded-full blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
              </div> */}

              {/* Title with gradient */}
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-700 via-emerald-600 to-green-700 bg-[length:200%_auto] animate-gradient-shift">
                  Ready to Transform Your Healthcare?
                </span>
              </h2>

              {/* Description */}
              <p className="text-xl mb-10 text-gray-600 max-w-2xl mx-auto leading-relaxed animate-fade-in-up">
                Join thousands of doctors and patients using our platform daily for secure, reliable, and AI-powered healthcare solutions.
              </p>

             

              {/* Main CTA button */}
              <div className="relative inline-block group/cta">
                {/* Glow effect */}
                <div className="absolute -inset-4 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full blur-xl opacity-0 group-hover/cta:opacity-20 transition-opacity duration-500"></div>

                <button
                  className="relative px-12 py-5 rounded-full text-white font-bold text-xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                  style={{
                    backgroundColor: '#10B981',
                    backgroundImage: 'linear-gradient(135deg, #10B981 0%, #059669 100%)',
                    boxShadow: '0 10px 30px -5px rgba(16, 185, 129, 0.4)'
                  }}
                >
                  {/* Shimmer effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-green-500 opacity-0 group-hover/cta:opacity-100 transition-opacity duration-500"></div>

                  {/* Button content */}
                  <span className="relative flex items-center justify-center">
                    <span className="mr-3">Get Started Today</span>
                    <span className="inline-block transform group-hover/cta:translate-x-2 transition-transform duration-300">
                      <div className="animate-bounce-right">→</div>
                    </span>
                  </span>

                  {/* Ripple effect */}
                  <div className="absolute inset-0 overflow-hidden rounded-full">
                    <div className="absolute inset-0 ripple-light"></div>
                  </div>
                </button>

                {/* Arrow trail effect */}
                <div className="absolute -right-6 top-1/2 transform -translate-y-1/2 opacity-0 group-hover/cta:opacity-100 transition-opacity duration-500">
                  <div className="flex space-x-1">
                    {[...Array(3)].map((_, i) => (
                      <div
                        key={i}
                        className="w-1 h-1 bg-green-400 rounded-full animate-pulse"
                        style={{ animationDelay: `${i * 0.1}s` }}
                      ></div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Trust badges */}
              <div className="mt-10 flex flex-wrap justify-center items-center gap-4 text-sm text-gray-500 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
                <div className="flex items-center px-3 py-2 rounded-lg bg-green-50 border border-green-100">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                  No credit card required
                </div>
                <div className="hidden md:block w-px h-4 bg-green-200"></div>
                <div className="flex items-center px-3 py-2 rounded-lg bg-green-50 border border-green-100">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                  30-day free trial
                </div>
                <div className="hidden md:block w-px h-4 bg-green-200"></div>
                <div className="flex items-center px-3 py-2 rounded-lg bg-green-50 border border-green-100">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                  HIPAA compliant
                </div>
              </div>

              {/* Secure badge */}
              <div className="mt-8 inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200">
                <div className="text-lg mr-2">🔒</div>
                <div className="text-sm">
                  <span className="font-semibold" style={{ color: '#047857' }}>256-bit encryption</span>
                  <span className="text-gray-500 ml-2">• Enterprise-grade security</span>
                </div>
              </div>
            </div>
          </div>

          {/* Floating decorative elements */}
          <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-br from-green-200 to-emerald-200 rounded-full blur-sm animate-float"></div>
          <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-gradient-to-br from-emerald-200 to-green-200 rounded-full blur-sm animate-float" style={{ animationDelay: '1s' }}></div>
        </div>
      </section>

      {/* ===== SECTION 8: FOOTER ===== */}
      <Footer />
    </div>
  );
}




// import React, { useState, useEffect } from 'react';
// import { Video, FileText, FolderOpen, Calendar, Shield, Pill, Activity, Users, Clock, LucideIcon } from 'lucide-react';
// import Navbar from '@/components/Navbar';
// import Footer from '@/components/Footer';

// // Type Definitions
// type Theme = 'light' | 'dark';

// interface ColorScheme {
//   primary: string;
//   background: string;
//   card: string;
//   textPrimary: string;
//   textSecondary: string;
//   accent: string;
//   border: string;
// }

// interface Colors {
//   light: ColorScheme;
//   dark: ColorScheme;
// }

// interface Feature {
//   icon: LucideIcon;
//   title: string;
//   desc: string;
// }

// interface Stat {
//   value: string;
//   label: string;
// }

// interface Step {
//   number: string;
//   title: string;
//   desc: string;
// }

// interface AIFeature {
//   icon: LucideIcon;
//   title: string;
//   desc: string;
// }

// interface Testimonial {
//   name: string;
//   role: string;
//   text: string;
// }

// interface VisibilityState {
//   [key: string]: boolean;
// }

// // Main Component
// const Dashboard: React.FC = () => {
//   const [theme, setTheme] = useState<Theme>('light');
//   const [isVisible, setIsVisible] = useState<VisibilityState>({});

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));
//           }
//         });
//       },
//       { threshold: 0.1 }
//     );

//     document.querySelectorAll('[id^="section-"]').forEach((el) => {
//       observer.observe(el);
//     });

//     return () => observer.disconnect();
//   }, []);

//   const colors: Colors = {
//     light: {
//       primary: '#0D6EFD',
//       background: '#FFFFFF',
//       card: '#F8FAFC',
//       textPrimary: '#1F2937',
//       textSecondary: '#6B7280',
//       accent: '#22C55E',
//       border: '#E5E7EB'
//     },
//     dark: {
//       primary: '#60A5FA',
//       background: '#0F172A',
//       card: '#1E293B',
//       textPrimary: '#E5E7EB',
//       textSecondary: '#9CA3AF',
//       accent: '#4ADE80',
//       border: '#334155'
//     }
//   };

//   const c: ColorScheme = colors[theme];

//   const features: Feature[] = [
//     { icon: Video, title: 'Video Consultations', desc: 'Connect with doctors through secure, high-quality video calls from anywhere.' },
//     { icon: FileText, title: 'Digital Prescriptions', desc: 'Receive and manage your prescriptions electronically with full medication history.' },
//     { icon: FolderOpen, title: 'Medical Records', desc: 'Access your complete health records securely in one centralized location.' },
//     { icon: Calendar, title: 'Easy Booking', desc: 'Schedule appointments instantly with real-time availability and automated reminders.' },
//     { icon: Pill, title: 'Drug Interaction Checker', desc: 'Verify medication safety with our comprehensive drug interaction database.' },
//     { icon: Shield, title: 'HIPAA-Grade Security', desc: 'Enterprise-level encryption and compliance for complete data protection.' }
//   ];

//   const stats: Stat[] = [
//     { value: '10K+', label: 'Verified Doctors' },
//     { value: '99.9%', label: 'Platform Uptime' },
//     { value: '50K+', label: 'Consultations Completed' },
//     { value: '24/7', label: 'Support Availability' }
//   ];

//   const steps: Step[] = [
//     { number: '1', title: 'Register', desc: 'Quick phone verification in under 2 minutes' },
//     { number: '2', title: 'Find a Doctor', desc: 'Search by specialty, ratings, and language' },
//     { number: '3', title: 'Book & Pay', desc: 'Secure checkout with multiple payment options' },
//     { number: '4', title: 'Consult', desc: 'Video call with prescription delivery' }
//   ];

//   const aiFeatures: AIFeature[] = [
//     { icon: Activity, title: 'Symptom Checker', desc: 'Clinical-grade assessment to guide your care decisions' },
//     { icon: Users, title: 'Doctor AI Assistant', desc: 'Enhanced diagnostic support for medical professionals' },
//     { icon: Clock, title: 'Smart Medical Alerts', desc: 'Proactive monitoring and health reminders' }
//   ];

//   const testimonials: Testimonial[] = [
//     { name: 'Sarah Mitchell', role: 'Patient', text: 'The platform made it incredibly easy to consult with a specialist during a health concern. Professional and efficient.' },
//     { name: 'Dr. James Chen', role: 'Cardiologist', text: 'As a physician, I appreciate the clinical-grade tools and secure infrastructure. It enhances patient care significantly.' },
//     { name: 'Michael Roberts', role: 'Patient', text: 'Accessing my medical records and prescriptions in one place has simplified my healthcare management completely.' }
//   ];

//   const handleThemeToggle = (): void => {
//     setTheme(prev => prev === 'light' ? 'dark' : 'light');
//   };

//   return (
//     <div style={{
//       backgroundColor: c.background,
//       color: c.textPrimary,
//       minHeight: '100vh',
//       transition: 'background-color 0.3s ease, color 0.3s ease'
//     }}>
//       {/* Navbar */}
//       <Navbar theme={theme} onThemeToggle={handleThemeToggle} />

//       {/* Hero Section */}
//       <section id="section-hero" style={{
//         padding: '160px 20px 80px',
//         maxWidth: '1200px',
//         margin: '0 auto',
//         opacity: isVisible['section-hero'] ? 1 : 0,
//         transform: isVisible['section-hero'] ? 'translateY(0)' : 'translateY(20px)',
//         transition: 'all 0.8s ease'
//       }}>
//         <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
//           <h1 style={{
//             fontSize: '56px',
//             fontWeight: '700',
//             marginBottom: '24px',
//             lineHeight: '1.2',
//             letterSpacing: '-0.02em'
//           }}>
//             Quality Healthcare at Your Fingertips
//           </h1>
//           <p style={{
//             fontSize: '20px',
//             color: c.textSecondary,
//             marginBottom: '40px',
//             lineHeight: '1.6'
//           }}>
//             Secure video consultations, AI-powered insights, and digital prescriptions from verified doctors.
//           </p>
//           <button style={{
//             backgroundColor: c.accent,
//             color: '#FFFFFF',
//             padding: '16px 40px',
//             fontSize: '18px',
//             fontWeight: '600',
//             border: 'none',
//             borderRadius: '8px',
//             cursor: 'pointer',
//             transition: 'all 0.3s ease',
//             boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
//           }}
//           onMouseOver={(e: React.MouseEvent<HTMLButtonElement>) => {
//             (e.target as HTMLButtonElement).style.transform = 'translateY(-2px)';
//           }}
//           onMouseOut={(e: React.MouseEvent<HTMLButtonElement>) => {
//             (e.target as HTMLButtonElement).style.transform = 'translateY(0)';
//           }}
//           >
//             Book Consultation Now
//           </button>
//         </div>

//         {/* Hero Visual */}
//         <div style={{
//           marginTop: '60px',
//           padding: '60px',
//           backgroundColor: c.card,
//           borderRadius: '16px',
//           border: `1px solid ${c.border}`,
//           display: 'flex',
//           alignItems: 'center',
//           justifyContent: 'center',
//           minHeight: '300px'
//         }}>
//           <div style={{ textAlign: 'center' }}>
//             <Shield size={80} color={c.primary} style={{ opacity: 0.9, marginBottom: '20px' }} />
//             <p style={{ fontSize: '18px', color: c.textSecondary, maxWidth: '500px' }}>
//               Enterprise-grade security and clinical precision for your health journey
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Trust Stats */}
//       <section id="section-stats" style={{
//         padding: '60px 20px',
//         backgroundColor: c.card,
//         borderTop: `1px solid ${c.border}`,
//         borderBottom: `1px solid ${c.border}`,
//         opacity: isVisible['section-stats'] ? 1 : 0,
//         transform: isVisible['section-stats'] ? 'translateY(0)' : 'translateY(20px)',
//         transition: 'all 0.8s ease 0.2s'
//       }}>
//         <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
//           <div style={{
//             display: 'grid',
//             gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
//             gap: '40px'
//           }}>
//             {stats.map((stat: Stat, i: number) => (
//               <div key={i} style={{ textAlign: 'center' }}>
//                 <div style={{
//                   fontSize: '48px',
//                   fontWeight: '700',
//                   color: c.primary,
//                   marginBottom: '8px'
//                 }}>
//                   {stat.value}
//                 </div>
//                 <div style={{ fontSize: '16px', color: c.textSecondary }}>
//                   {stat.label}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Core Services */}
//       <section id="section-features" style={{
//         padding: '100px 20px',
//         maxWidth: '1200px',
//         margin: '0 auto',
//         opacity: isVisible['section-features'] ? 1 : 0,
//         transform: isVisible['section-features'] ? 'translateY(0)' : 'translateY(20px)',
//         transition: 'all 0.8s ease 0.3s'
//       }}>
//         <h2 style={{
//           fontSize: '42px',
//           fontWeight: '700',
//           textAlign: 'center',
//           marginBottom: '60px'
//         }}>
//           Core Services
//         </h2>
//         <div style={{
//           display: 'grid',
//           gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
//           gap: '32px'
//         }}>
//           {features.map((feature: Feature, i: number) => {
//             const IconComponent = feature.icon;
//             return (
//               <div key={i} style={{
//                 padding: '32px',
//                 backgroundColor: c.card,
//                 borderRadius: '12px',
//                 border: `1px solid ${c.border}`,
//                 transition: 'all 0.3s ease',
//                 cursor: 'pointer'
//               }}
//               onMouseOver={(e: React.MouseEvent<HTMLDivElement>) => {
//                 (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-4px)';
//                 (e.currentTarget as HTMLDivElement).style.boxShadow = '0 12px 24px rgba(0, 0, 0, 0.08)';
//               }}
//               onMouseOut={(e: React.MouseEvent<HTMLDivElement>) => {
//                 (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)';
//                 (e.currentTarget as HTMLDivElement).style.boxShadow = 'none';
//               }}
//               >
//                 <IconComponent size={40} color={c.primary} style={{ marginBottom: '20px' }} />
//                 <h3 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '12px' }}>
//                   {feature.title}
//                 </h3>
//                 <p style={{ fontSize: '15px', color: c.textSecondary, lineHeight: '1.6' }}>
//                   {feature.desc}
//                 </p>
//               </div>
//             );
//           })}
//         </div>
//       </section>

//       {/* How It Works */}
//       <section id="section-steps" style={{
//         padding: '100px 20px',
//         backgroundColor: c.card,
//         borderTop: `1px solid ${c.border}`,
//         opacity: isVisible['section-steps'] ? 1 : 0,
//         transform: isVisible['section-steps'] ? 'translateY(0)' : 'translateY(20px)',
//         transition: 'all 0.8s ease 0.4s'
//       }}>
//         <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
//           <h2 style={{
//             fontSize: '42px',
//             fontWeight: '700',
//             textAlign: 'center',
//             marginBottom: '60px'
//           }}>
//             How It Works
//           </h2>
//           <div style={{
//             display: 'grid',
//             gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
//             gap: '40px'
//           }}>
//             {steps.map((step: Step, i: number) => (
//               <div key={i} style={{ textAlign: 'center' }}>
//                 <div style={{
//                   width: '64px',
//                   height: '64px',
//                   borderRadius: '50%',
//                   backgroundColor: c.primary,
//                   color: '#FFFFFF',
//                   display: 'flex',
//                   alignItems: 'center',
//                   justifyContent: 'center',
//                   fontSize: '28px',
//                   fontWeight: '700',
//                   margin: '0 auto 24px'
//                 }}>
//                   {step.number}
//                 </div>
//                 <h3 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '12px' }}>
//                   {step.title}
//                 </h3>
//                 <p style={{ fontSize: '15px', color: c.textSecondary, lineHeight: '1.6' }}>
//                   {step.desc}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* AI Features */}
//       <section id="section-ai" style={{
//         padding: '100px 20px',
//         maxWidth: '1200px',
//         margin: '0 auto',
//         opacity: isVisible['section-ai'] ? 1 : 0,
//         transform: isVisible['section-ai'] ? 'translateY(0)' : 'translateY(20px)',
//         transition: 'all 0.8s ease 0.5s'
//       }}>
//         <h2 style={{
//           fontSize: '42px',
//           fontWeight: '700',
//           textAlign: 'center',
//           marginBottom: '60px'
//         }}>
//           AI-Powered Features
//         </h2>
//         <div style={{
//           display: 'grid',
//           gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
//           gap: '32px'
//         }}>
//           {aiFeatures.map((feature: AIFeature, i: number) => {
//             const IconComponent = feature.icon;
//             return (
//               <div key={i} style={{
//                 padding: '40px',
//                 backgroundColor: c.card,
//                 borderRadius: '12px',
//                 border: `1px solid ${c.border}`,
//                 textAlign: 'center'
//               }}>
//                 <IconComponent size={48} color={c.primary} style={{ margin: '0 auto 24px' }} />
//                 <h3 style={{ fontSize: '22px', fontWeight: '600', marginBottom: '16px' }}>
//                   {feature.title}
//                 </h3>
//                 <p style={{ fontSize: '15px', color: c.textSecondary, lineHeight: '1.6' }}>
//                   {feature.desc}
//                 </p>
//               </div>
//             );
//           })}
//         </div>
//       </section>

//       {/* Testimonials */}
//       <section id="section-testimonials" style={{
//         padding: '100px 20px',
//         backgroundColor: c.card,
//         borderTop: `1px solid ${c.border}`,
//         opacity: isVisible['section-testimonials'] ? 1 : 0,
//         transform: isVisible['section-testimonials'] ? 'translateY(0)' : 'translateY(20px)',
//         transition: 'all 0.8s ease 0.6s'
//       }}>
//         <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
//           <h2 style={{
//             fontSize: '42px',
//             fontWeight: '700',
//             textAlign: 'center',
//             marginBottom: '60px'
//           }}>
//             Trusted by Patients and Providers
//           </h2>
//           <div style={{
//             display: 'grid',
//             gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
//             gap: '32px'
//           }}>
//             {testimonials.map((test: Testimonial, i: number) => (
//               <div key={i} style={{
//                 padding: '32px',
//                 backgroundColor: c.background,
//                 borderRadius: '12px',
//                 border: `1px solid ${c.border}`
//               }}>
//                 <p style={{
//                   fontSize: '16px',
//                   lineHeight: '1.7',
//                   marginBottom: '24px',
//                   color: c.textPrimary
//                 }}>
//                   "{test.text}"
//                 </p>
//                 <div>
//                   <div style={{ fontWeight: '600', fontSize: '16px' }}>{test.name}</div>
//                   <div style={{ fontSize: '14px', color: c.textSecondary }}>{test.role}</div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Final CTA */}
//       <section id="section-cta" style={{
//         padding: '100px 20px',
//         backgroundColor: c.primary,
//         color: '#FFFFFF',
//         textAlign: 'center',
//         opacity: isVisible['section-cta'] ? 1 : 0,
//         transform: isVisible['section-cta'] ? 'translateY(0)' : 'translateY(20px)',
//         transition: 'all 0.8s ease 0.7s'
//       }}>
//         <div style={{ maxWidth: '800px', margin: '0 auto' }}>
//           <h2 style={{ fontSize: '48px', fontWeight: '700', marginBottom: '24px' }}>
//             Ready to Transform Your Healthcare?
//           </h2>
//           <p style={{ fontSize: '20px', marginBottom: '40px', opacity: 0.9 }}>
//             Join thousands who trust our platform daily.
//           </p>
//           <button style={{
//             backgroundColor: c.accent,
//             color: '#FFFFFF',
//             padding: '16px 48px',
//             fontSize: '18px',
//             fontWeight: '600',
//             border: 'none',
//             borderRadius: '8px',
//             cursor: 'pointer',
//             transition: 'all 0.3s ease',
//             boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)'
//           }}
//           onMouseOver={(e: React.MouseEvent<HTMLButtonElement>) => {
//             (e.target as HTMLButtonElement).style.transform = 'translateY(-2px)';
//           }}
//           onMouseOut={(e: React.MouseEvent<HTMLButtonElement>) => {
//             (e.target as HTMLButtonElement).style.transform = 'translateY(0)';
//           }}
//           >
//             Get Started Today
//           </button>
//         </div>
//       </section>

//       {/* Footer */}
//       <Footer theme={theme} />
//     </div>
//   );
// };

// export default Dashboard;

// 'use client';

// import React, { useState, useEffect } from 'react';
// import { Video, FileText, FolderOpen, Calendar, Shield, Pill, Activity, Users, Clock, LucideIcon } from 'lucide-react';

// type Theme = 'light' | 'dark';

// interface ColorScheme {
//   primary: string;
//   background: string;
//   card: string;
//   textPrimary: string;
//   textSecondary: string;
//   accent: string;
//   border: string;
// }

// interface Colors {
//   light: ColorScheme;
//   dark: ColorScheme;
// }

// interface Feature {
//   icon: LucideIcon;
//   title: string;
//   desc: string;
// }

// interface Stat {
//   value: string;
//   label: string;
// }

// interface Step {
//   number: string;
//   title: string;
//   desc: string;
// }

// interface AIFeature {
//   icon: LucideIcon;
//   title: string;
//   desc: string;
// }

// interface Testimonial {
//   name: string;
//   role: string;
//   text: string;
// }

// interface VisibilityState {
//   [key: string]: boolean;
// }


// const Dashboard: React.FC = () => {
//   const [theme, setTheme] = useState<Theme>('light');
//   const [isVisible, setIsVisible] = useState<VisibilityState>({});

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));
//           }
//         });
//       },
//       { threshold: 0.1 }
//     );

//     document.querySelectorAll('[id^="section-"]').forEach((el) => {
//       observer.observe(el);
//     });

//     return () => observer.disconnect();
//   }, []);

//   const colors: Colors = {
//     light: {
//       primary: '#0D6EFD',
//       background: '#FFFFFF',
//       card: '#F8FAFC',
//       textPrimary: '#1F2937',
//       textSecondary: '#6B7280',
//       accent: '#22C55E',
//       border: '#E5E7EB'
//     },
//     dark: {
//       primary: '#60A5FA',
//       background: '#0F172A',
//       card: '#1E293B',
//       textPrimary: '#E5E7EB',
//       textSecondary: '#9CA3AF',
//       accent: '#4ADE80',
//       border: '#334155'
//     }
//   };

//   const c: ColorScheme = colors[theme];

//   const features: Feature[] = [
//     { icon: Video, title: 'Video Consultations', desc: 'Connect with doctors through secure, high-quality video calls from anywhere.' },
//     { icon: FileText, title: 'Digital Prescriptions', desc: 'Receive and manage your prescriptions electronically with full medication history.' },
//     { icon: FolderOpen, title: 'Medical Records', desc: 'Access your complete health records securely in one centralized location.' },
//     { icon: Calendar, title: 'Easy Booking', desc: 'Schedule appointments instantly with real-time availability and automated reminders.' },
//     { icon: Pill, title: 'Drug Interaction Checker', desc: 'Verify medication safety with our comprehensive drug interaction database.' },
//     { icon: Shield, title: 'HIPAA-Grade Security', desc: 'Enterprise-level encryption and compliance for complete data protection.' }
//   ];

//   const stats: Stat[] = [
//     { value: '10K+', label: 'Verified Doctors' },
//     { value: '99.9%', label: 'Platform Uptime' },
//     { value: '50K+', label: 'Consultations Completed' },
//     { value: '24/7', label: 'Support Availability' }
//   ];

//   const steps: Step[] = [
//     { number: '1', title: 'Register', desc: 'Quick phone verification in under 2 minutes' },
//     { number: '2', title: 'Find a Doctor', desc: 'Search by specialty, ratings, and language' },
//     { number: '3', title: 'Book & Pay', desc: 'Secure checkout with multiple payment options' },
//     { number: '4', title: 'Consult', desc: 'Video call with prescription delivery' }
//   ];

//   const aiFeatures: AIFeature[] = [
//     { icon: Activity, title: 'Symptom Checker', desc: 'Clinical-grade assessment to guide your care decisions' },
//     { icon: Users, title: 'Doctor AI Assistant', desc: 'Enhanced diagnostic support for medical professionals' },
//     { icon: Clock, title: 'Smart Medical Alerts', desc: 'Proactive monitoring and health reminders' }
//   ];

//   const testimonials: Testimonial[] = [
//     { name: 'Sarah Mitchell', role: 'Patient', text: 'The platform made it incredibly easy to consult with a specialist during a health concern. Professional and efficient.' },
//     { name: 'Dr. James Chen', role: 'Cardiologist', text: 'As a physician, I appreciate the clinical-grade tools and secure infrastructure. It enhances patient care significantly.' },
//     { name: 'Michael Roberts', role: 'Patient', text: 'Accessing my medical records and prescriptions in one place has simplified my healthcare management completely.' }
//   ];

//   const handleThemeToggle = (): void => {
//     setTheme(prev => prev === 'light' ? 'dark' : 'light');
//   };

//   return (
//     <div style={{
//       backgroundColor: c.background,
//       color: c.textPrimary,
//       minHeight: '100vh',
//       transition: 'background-color 0.3s ease, color 0.3s ease'
//     }}>
//       {/* Theme Toggle */}
//       <div style={{ position: 'fixed', top: '20px', right: '20px', zIndex: 1000 }}>
//         <button
//           onClick={handleThemeToggle}
//           style={{
//             padding: '10px 20px',
//             backgroundColor: c.card,
//             color: c.textPrimary,
//             border: `1px solid ${c.border}`,
//             borderRadius: '8px',
//             cursor: 'pointer',
//             fontSize: '14px',
//             fontWeight: '500',
//             transition: 'all 0.3s ease'
//           }}
//         >
//           {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
//         </button>
//       </div>

//       {/* Hero Section */}
//       <section id="section-hero" style={{
//         padding: '120px 20px 80px',
//         maxWidth: '1200px',
//         margin: '0 auto',
//         opacity: isVisible['section-hero'] ? 1 : 0,
//         transform: isVisible['section-hero'] ? 'translateY(0)' : 'translateY(20px)',
//         transition: 'all 0.8s ease'
//       }}>
//         <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
//           <h1 style={{
//             fontSize: '56px',
//             fontWeight: '700',
//             marginBottom: '24px',
//             lineHeight: '1.2',
//             letterSpacing: '-0.02em'
//           }}>
//             Quality Healthcare at Your Fingertips
//           </h1>
//           <p style={{
//             fontSize: '20px',
//             color: c.textSecondary,
//             marginBottom: '40px',
//             lineHeight: '1.6'
//           }}>
//             Secure video consultations, AI-powered insights, and digital prescriptions from verified doctors.
//           </p>
//           <button style={{
//             backgroundColor: c.accent,
//             color: '#FFFFFF',
//             padding: '16px 40px',
//             fontSize: '18px',
//             fontWeight: '600',
//             border: 'none',
//             borderRadius: '8px',
//             cursor: 'pointer',
//             transition: 'all 0.3s ease',
//             boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
//           }}
//           onMouseOver={(e: React.MouseEvent<HTMLButtonElement>) => {
//             (e.target as HTMLButtonElement).style.transform = 'translateY(-2px)';
//           }}
//           onMouseOut={(e: React.MouseEvent<HTMLButtonElement>) => {
//             (e.target as HTMLButtonElement).style.transform = 'translateY(0)';
//           }}
//           >
//             Book Consultation Now
//           </button>
//         </div>

//         {/* Hero Visual */}
//         <div style={{
//           marginTop: '60px',
//           padding: '60px',
//           backgroundColor: c.card,
//           borderRadius: '16px',
//           border: `1px solid ${c.border}`,
//           display: 'flex',
//           alignItems: 'center',
//           justifyContent: 'center',
//           minHeight: '300px'
//         }}>
//           <div style={{ textAlign: 'center' }}>
//             <Shield size={80} color={c.primary} style={{ opacity: 0.9, marginBottom: '20px' }} />
//             <p style={{ fontSize: '18px', color: c.textSecondary, maxWidth: '500px' }}>
//               Enterprise-grade security and clinical precision for your health journey
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Trust Stats */}
//       <section id="section-stats" style={{
//         padding: '60px 20px',
//         backgroundColor: c.card,
//         borderTop: `1px solid ${c.border}`,
//         borderBottom: `1px solid ${c.border}`,
//         opacity: isVisible['section-stats'] ? 1 : 0,
//         transform: isVisible['section-stats'] ? 'translateY(0)' : 'translateY(20px)',
//         transition: 'all 0.8s ease 0.2s'
//       }}>
//         <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
//           <div style={{
//             display: 'grid',
//             gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
//             gap: '40px'
//           }}>
//             {stats.map((stat: Stat, i: number) => (
//               <div key={i} style={{ textAlign: 'center' }}>
//                 <div style={{
//                   fontSize: '48px',
//                   fontWeight: '700',
//                   color: c.primary,
//                   marginBottom: '8px'
//                 }}>
//                   {stat.value}
//                 </div>
//                 <div style={{ fontSize: '16px', color: c.textSecondary }}>
//                   {stat.label}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Core Services */}
//       <section id="section-features" style={{
//         padding: '100px 20px',
//         maxWidth: '1200px',
//         margin: '0 auto',
//         opacity: isVisible['section-features'] ? 1 : 0,
//         transform: isVisible['section-features'] ? 'translateY(0)' : 'translateY(20px)',
//         transition: 'all 0.8s ease 0.3s'
//       }}>
//         <h2 style={{
//           fontSize: '42px',
//           fontWeight: '700',
//           textAlign: 'center',
//           marginBottom: '60px'
//         }}>
//           Core Services
//         </h2>
//         <div style={{
//           display: 'grid',
//           gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
//           gap: '32px'
//         }}>
//           {features.map((feature: Feature, i: number) => {
//             const IconComponent = feature.icon;
//             return (
//               <div key={i} style={{
//                 padding: '32px',
//                 backgroundColor: c.card,
//                 borderRadius: '12px',
//                 border: `1px solid ${c.border}`,
//                 transition: 'all 0.3s ease',
//                 cursor: 'pointer'
//               }}
//               onMouseOver={(e: React.MouseEvent<HTMLDivElement>) => {
//                 (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-4px)';
//                 (e.currentTarget as HTMLDivElement).style.boxShadow = '0 12px 24px rgba(0, 0, 0, 0.08)';
//               }}
//               onMouseOut={(e: React.MouseEvent<HTMLDivElement>) => {
//                 (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)';
//                 (e.currentTarget as HTMLDivElement).style.boxShadow = 'none';
//               }}
//               >
//                 <IconComponent size={40} color={c.primary} style={{ marginBottom: '20px' }} />
//                 <h3 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '12px' }}>
//                   {feature.title}
//                 </h3>
//                 <p style={{ fontSize: '15px', color: c.textSecondary, lineHeight: '1.6' }}>
//                   {feature.desc}
//                 </p>
//               </div>
//             );
//           })}
//         </div>
//       </section>

//       {/* How It Works */}
//       <section id="section-steps" style={{
//         padding: '100px 20px',
//         backgroundColor: c.card,
//         borderTop: `1px solid ${c.border}`,
//         opacity: isVisible['section-steps'] ? 1 : 0,
//         transform: isVisible['section-steps'] ? 'translateY(0)' : 'translateY(20px)',
//         transition: 'all 0.8s ease 0.4s'
//       }}>
//         <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
//           <h2 style={{
//             fontSize: '42px',
//             fontWeight: '700',
//             textAlign: 'center',
//             marginBottom: '60px'
//           }}>
//             How It Works
//           </h2>
//           <div style={{
//             display: 'grid',
//             gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
//             gap: '40px'
//           }}>
//             {steps.map((step: Step, i: number) => (
//               <div key={i} style={{ textAlign: 'center' }}>
//                 <div style={{
//                   width: '64px',
//                   height: '64px',
//                   borderRadius: '50%',
//                   backgroundColor: c.primary,
//                   color: '#FFFFFF',
//                   display: 'flex',
//                   alignItems: 'center',
//                   justifyContent: 'center',
//                   fontSize: '28px',
//                   fontWeight: '700',
//                   margin: '0 auto 24px'
//                 }}>
//                   {step.number}
//                 </div>
//                 <h3 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '12px' }}>
//                   {step.title}
//                 </h3>
//                 <p style={{ fontSize: '15px', color: c.textSecondary, lineHeight: '1.6' }}>
//                   {step.desc}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* AI Features */}
//       <section id="section-ai" style={{
//         padding: '100px 20px',
//         maxWidth: '1200px',
//         margin: '0 auto',
//         opacity: isVisible['section-ai'] ? 1 : 0,
//         transform: isVisible['section-ai'] ? 'translateY(0)' : 'translateY(20px)',
//         transition: 'all 0.8s ease 0.5s'
//       }}>
//         <h2 style={{
//           fontSize: '42px',
//           fontWeight: '700',
//           textAlign: 'center',
//           marginBottom: '60px'
//         }}>
//           AI-Powered Features
//         </h2>
//         <div style={{
//           display: 'grid',
//           gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
//           gap: '32px'
//         }}>
//           {aiFeatures.map((feature: AIFeature, i: number) => {
//             const IconComponent = feature.icon;
//             return (
//               <div key={i} style={{
//                 padding: '40px',
//                 backgroundColor: c.card,
//                 borderRadius: '12px',
//                 border: `1px solid ${c.border}`,
//                 textAlign: 'center'
//               }}>
//                 <IconComponent size={48} color={c.primary} style={{ margin: '0 auto 24px' }} />
//                 <h3 style={{ fontSize: '22px', fontWeight: '600', marginBottom: '16px' }}>
//                   {feature.title}
//                 </h3>
//                 <p style={{ fontSize: '15px', color: c.textSecondary, lineHeight: '1.6' }}>
//                   {feature.desc}
//                 </p>
//               </div>
//             );
//           })}
//         </div>
//       </section>

//       {/* Testimonials */}
//       <section id="section-testimonials" style={{
//         padding: '100px 20px',
//         backgroundColor: c.card,
//         borderTop: `1px solid ${c.border}`,
//         opacity: isVisible['section-testimonials'] ? 1 : 0,
//         transform: isVisible['section-testimonials'] ? 'translateY(0)' : 'translateY(20px)',
//         transition: 'all 0.8s ease 0.6s'
//       }}>
//         <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
//           <h2 style={{
//             fontSize: '42px',
//             fontWeight: '700',
//             textAlign: 'center',
//             marginBottom: '60px'
//           }}>
//             Trusted by Patients and Providers
//           </h2>
//           <div style={{
//             display: 'grid',
//             gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
//             gap: '32px'
//           }}>
//             {testimonials.map((test: Testimonial, i: number) => (
//               <div key={i} style={{
//                 padding: '32px',
//                 backgroundColor: c.background,
//                 borderRadius: '12px',
//                 border: `1px solid ${c.border}`
//               }}>
//                 <p style={{
//                   fontSize: '16px',
//                   lineHeight: '1.7',
//                   marginBottom: '24px',
//                   color: c.textPrimary
//                 }}>
//                   "{test.text}"
//                 </p>
//                 <div>
//                   <div style={{ fontWeight: '600', fontSize: '16px' }}>{test.name}</div>
//                   <div style={{ fontSize: '14px', color: c.textSecondary }}>{test.role}</div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Final CTA */}
//       <section id="section-cta" style={{
//         padding: '100px 20px',
//         backgroundColor: c.primary,
//         color: '#FFFFFF',
//         textAlign: 'center',
//         opacity: isVisible['section-cta'] ? 1 : 0,
//         transform: isVisible['section-cta'] ? 'translateY(0)' : 'translateY(20px)',
//         transition: 'all 0.8s ease 0.7s'
//       }}>
//         <div style={{ maxWidth: '800px', margin: '0 auto' }}>
//           <h2 style={{ fontSize: '48px', fontWeight: '700', marginBottom: '24px' }}>
//             Ready to Transform Your Healthcare?
//           </h2>
//           <p style={{ fontSize: '20px', marginBottom: '40px', opacity: 0.9 }}>
//             Join thousands who trust our platform daily.
//           </p>
//           <button style={{
//             backgroundColor: c.accent,
//             color: '#FFFFFF',
//             padding: '16px 48px',
//             fontSize: '18px',
//             fontWeight: '600',
//             border: 'none',
//             borderRadius: '8px',
//             cursor: 'pointer',
//             transition: 'all 0.3s ease',
//             boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)'
//           }}
//           onMouseOver={(e: React.MouseEvent<HTMLButtonElement>) => {
//             (e.target as HTMLButtonElement).style.transform = 'translateY(-2px)';
//           }}
//           onMouseOut={(e: React.MouseEvent<HTMLButtonElement>) => {
//             (e.target as HTMLButtonElement).style.transform = 'translateY(0)';
//           }}
//           >
//             Get Started Today
//           </button>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer style={{
//         padding: '60px 20px',
//         backgroundColor: c.card,
//         borderTop: `1px solid ${c.border}`,
//         textAlign: 'center'
//       }}>
//         <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
//           <p style={{
//             fontSize: '18px',
//             fontWeight: '600',
//             marginBottom: '16px',
//             color: c.textPrimary
//           }}>
//             Secure • Reliable • AI-Powered Healthcare
//           </p>
//           <p style={{ fontSize: '14px', color: c.textSecondary }}>
//             © 2025 TeleHealth Platform. All rights reserved.
//           </p>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default Dashboard;