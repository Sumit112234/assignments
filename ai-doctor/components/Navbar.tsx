'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  onCTAClick?: () => void;
}

export default function Navbar({ onCTAClick }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeItem, setActiveItem] = useState('Home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#h', color: '#16A34A' },
    { label: 'Services', href: '#services', color: '#10B981' },
    { label: 'How It Works', href: '#how-it-works', color: '#059669' },
    { label: 'AI Features', href: '#ai-features', color: '#047857' },
    { label: 'Testimonials', href: '#testimonials', color: '#065F46' },
    { label: 'For Doctors', href: '#doctors', color: '#134E4A' },
  ];

  

  const handleCTAClick = () => {
    if (onCTAClick) {
      onCTAClick();
    }
    const ctaSection = document.querySelector('.final-cta');
    if (ctaSection) {
      ctaSection.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  const handleNavClick = (href: string, label: string) => {
    setActiveItem(label);
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex items-center justify-between">
          {/* Logo with animation */}
          <div className="flex items-center space-x-3 group cursor-pointer">
            <div className="relative">
              <div className="w-10 h-10 rounded-full flex items-center justify-center animate-pulse-slow" 
                style={{ backgroundColor: '#16A34A' }}>
                <span className="text-white font-bold text-lg">TP</span>
              </div>
              <div className="absolute -inset-2 bg-green-400/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
            <div className="relative">
              <h1 className="text-xl font-bold" style={{ color: '#14532D' }}>
                Telehealth<span className="font-normal">Platform</span>
              </h1>
              <div className="absolute -bottom-1 left-0 h-1 w-0 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full group-hover:w-full transition-all duration-700"></div>
            </div>
          </div>

          {/* Desktop Navigation with animated underline */}
  <div className="hidden md:flex items-center space-x-1">
  {navItems.map((item) => (
    <button
      key={item.label}
      onClick={() => handleNavClick(item.href, item.label)}
      className="relative px-5 py-2.5 font-medium transition-all duration-300 group"
      style={{ 
        color: activeItem === item.label ? '#059669' : '#374151',
        fontWeight: activeItem === item.label ? '600' : '500'
      }}
    >
      {/* Main text */}
      <span className="relative z-10">
        {item.label}
      </span>
      
      {/* Animated underline - appears from left */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 overflow-hidden">
        <div className="absolute bottom-0 left-0 w-0 h-full bg-gradient-to-r from-green-500 to-emerald-600 group-hover:w-full transition-all duration-500 ease-out"></div>
      </div>
      
      {/* Active state indicator */}
      {activeItem === item.label && (
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-green-500 to-emerald-600"></div>
      )}
    </button>
  ))}
</div>

          {/* CTA Button with enhanced animation */}
          <div className="relative group/cta">
            <div className="absolute -inset-1 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full blur-md opacity-0 group-hover/cta:opacity-30 transition-opacity duration-500"></div>
            <button
              onClick={handleCTAClick}
              className="relative hidden sm:block px-6 py-2.5 rounded-full text-white font-semibold transition-all duration-300 hover:shadow-xl transform hover:-translate-y-0.5 group-hover/cta:scale-105"
              style={{ 
                background: 'linear-gradient(135deg, #22C55E 0%, #16A34A 100%)',
                boxShadow: '0 4px 20px -5px rgba(34, 197, 94, 0.3)'
              }}
            >
              <span className="relative flex items-center">
                <span className="mr-2">Get Started</span>
                <span className="inline-block transform group-hover/cta:translate-x-1 transition-transform duration-300">
                  →
                </span>
              </span>
              {/* Ripple effect */}
              <div className="absolute inset-0 rounded-full overflow-hidden">
                <div className="absolute inset-0 ripple-light"></div>
              </div>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg group relative"
            style={{ color: '#14532D' }}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
            <div className="absolute inset-0 bg-green-100 rounded-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
          </button>
        </div>

        {/* Mobile Menu with animations */}
        {isOpen && (
          <div 
            className="md:hidden mt-4 py-4 rounded-2xl shadow-2xl animate-in slide-in-from-top-5 duration-300 overflow-hidden"
            style={{ 
              backgroundColor: '#F0FDF4',
              border: '1px solid rgba(34, 197, 94, 0.2)'
            }}
          >
            <div className="flex flex-col space-y-1 px-2">
              {navItems.map((item, index) => (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item.href, item.label)}
                  className="relative py-4 px-4 text-left rounded-xl font-medium transition-all duration-300 group hover:bg-white/70"
                  style={{ 
                    color: activeItem === item.label ? item.color : '#14532D',
                    animationDelay: `${index * 50}ms`,
                    animationFillMode: 'both'
                  }}
                >
                  {/* Animated background on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-green-50 to-emerald-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                  
                  {/* Content */}
                  <div className="relative flex items-center">
                    {/* Left indicator dot */}
                    <div className="w-2 h-2 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ backgroundColor: item.color }}>
                    </div>
                    
                    <span className="text-lg">{item.label}</span>
                    
                    {/* Arrow indicator */}
                    <div className="ml-auto transform translate-x-[-10px] opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
                      <div className="w-1.5 h-1.5 rounded-full animate-pulse"
                        style={{ backgroundColor: item.color }}>
                      </div>
                    </div>
                  </div>
                  
                  {/* Animated underline for mobile */}
                  <div className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full w-0 group-hover:w-full transition-all duration-700"></div>
                  
                  {/* Active indicator for mobile */}
                  {activeItem === item.label && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full animate-pulse"></div>
                  )}
                </button>
              ))}
              
              {/* Mobile CTA Button */}
              <div className="mt-4 px-2">
                <button
                  onClick={handleCTAClick}
                  className="relative w-full py-4 rounded-xl text-white font-semibold text-center overflow-hidden group/cta-mobile transform transition-all duration-300 hover:scale-105"
                  style={{ 
                    background: 'linear-gradient(135deg, #22C55E 0%, #16A34A 100%)',
                    boxShadow: '0 4px 20px -5px rgba(34, 197, 94, 0.3)'
                  }}
                >
                  <span className="relative flex items-center justify-center">
                    <span className="mr-2">Get Started Free</span>
                    <span className="inline-block transform group-hover/cta-mobile:translate-x-2 transition-transform duration-300">
                      →
                    </span>
                  </span>
                  {/* Shimmer effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
                </button>
              </div>
            </div>
            
            {/* Decorative elements for mobile menu */}
            <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-green-200/30 to-emerald-200/20 rounded-full blur-xl"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-green-100/20 to-emerald-100/20 rounded-full blur-xl"></div>
          </div>
        )}
      </div>
      
      {/* Progress bar indicator */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-green-100 overflow-hidden">
        <div className="h-full bg-gradient-to-r from-green-400 to-emerald-500 animate-progress-bar"></div>
      </div>
    </nav>
  );
}

// 'use client';

// import React, { useState, useEffect } from 'react';
// import { Menu, X, ChevronDown } from 'lucide-react';

// interface NavbarProps {
//   theme: 'light' | 'dark';
//   onThemeToggle: () => void;
// }

// interface ColorScheme {
//   primary: string;
//   background: string;
//   card: string;
//   textPrimary: string;
//   textSecondary: string;
//   accent: string;
//   border: string;
// }

// const Navbar: React.FC<NavbarProps> = ({ theme, onThemeToggle }) => {
//   const [isScrolled, setIsScrolled] = useState<boolean>(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

//   useEffect(() => {
//     const handleScroll = (): void => {
//       setIsScrolled(window.scrollY > 20);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const colors: Record<'light' | 'dark', ColorScheme> = {
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

//   const navLinks = [
//     { label: 'Services', href: '#services' },
//     { label: 'How It Works', href: '#how-it-works' },
//     { label: 'About', href: '#about' },
//     { label: 'Contact', href: '#contact' }
//   ];

//   return (
//     <nav
//       style={{
//         position: 'fixed',
//         top: 0,
//         left: 0,
//         right: 0,
//         zIndex: 1000,
//         backgroundColor: isScrolled ? c.background : 'transparent',
//         borderBottom: isScrolled ? `1px solid ${c.border}` : 'none',
//         backdropFilter: isScrolled ? 'blur(10px)' : 'none',
//         transition: 'all 0.3s ease',
//         boxShadow: isScrolled ? '0 2px 8px rgba(0, 0, 0, 0.05)' : 'none'
//       }}
//     >
//       <div
//         style={{
//           maxWidth: '1200px',
//           margin: '0 auto',
//           padding: '16px 20px',
//           display: 'flex',
//           alignItems: 'center',
//           justifyContent: 'space-between'
//         }}
//       >
//         {/* Logo */}
//         <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
//           <div
//             style={{
//               width: '40px',
//               height: '40px',
//               borderRadius: '8px',
//               backgroundColor: c.primary,
//               display: 'flex',
//               alignItems: 'center',
//               justifyContent: 'center',
//               fontWeight: '700',
//               fontSize: '20px',
//               color: '#FFFFFF'
//             }}
//           >
//             T
//           </div>
//           <span
//             style={{
//               fontSize: '20px',
//               fontWeight: '700',
//               color: c.textPrimary
//             }}
//           >
//             TeleHealth
//           </span>
//         </div>

//         {/* Desktop Navigation */}
//         <div
//           style={{
//             display: 'flex',
//             alignItems: 'center',
//             gap: '32px'
//           }}
//           className="desktop-nav"
//         >
//           {navLinks.map((link, index) => (
//             <a
//               key={index}
//               href={link.href}
//               style={{
//                 fontSize: '15px',
//                 fontWeight: '500',
//                 color: c.textSecondary,
//                 textDecoration: 'none',
//                 transition: 'color 0.3s ease',
//                 cursor: 'pointer'
//               }}
//               onMouseOver={(e: React.MouseEvent<HTMLAnchorElement>) => {
//                 (e.target as HTMLAnchorElement).style.color = c.primary;
//               }}
//               onMouseOut={(e: React.MouseEvent<HTMLAnchorElement>) => {
//                 (e.target as HTMLAnchorElement).style.color = c.textSecondary;
//               }}
//             >
//               {link.label}
//             </a>
//           ))}

//           {/* Theme Toggle */}
//           <button
//             onClick={onThemeToggle}
//             style={{
//               padding: '8px 16px',
//               backgroundColor: c.card,
//               color: c.textPrimary,
//               border: `1px solid ${c.border}`,
//               borderRadius: '6px',
//               cursor: 'pointer',
//               fontSize: '14px',
//               fontWeight: '500',
//               transition: 'all 0.3s ease'
//             }}
//           >
//             {theme === 'light' ? '🌙' : '☀️'}
//           </button>

//           {/* CTA Button */}
//           <button
//             style={{
//               padding: '10px 24px',
//               backgroundColor: c.accent,
//               color: '#FFFFFF',
//               border: 'none',
//               borderRadius: '6px',
//               cursor: 'pointer',
//               fontSize: '15px',
//               fontWeight: '600',
//               transition: 'all 0.3s ease'
//             }}
//             onMouseOver={(e: React.MouseEvent<HTMLButtonElement>) => {
//               (e.target as HTMLButtonElement).style.transform = 'translateY(-2px)';
//               (e.target as HTMLButtonElement).style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
//             }}
//             onMouseOut={(e: React.MouseEvent<HTMLButtonElement>) => {
//               (e.target as HTMLButtonElement).style.transform = 'translateY(0)';
//               (e.target as HTMLButtonElement).style.boxShadow = 'none';
//             }}
//           >
//             Book Now
//           </button>
//         </div>

//         {/* Mobile Menu Button */}
//         <button
//           onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//           style={{
//             display: 'none',
//             padding: '8px',
//             backgroundColor: 'transparent',
//             border: 'none',
//             cursor: 'pointer',
//             color: c.textPrimary
//           }}
//           className="mobile-menu-btn"
//         >
//           {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       {isMobileMenuOpen && (
//         <div
//           style={{
//             backgroundColor: c.background,
//             borderTop: `1px solid ${c.border}`,
//             padding: '20px',
//             display: 'none'
//           }}
//           className="mobile-menu"
//         >
//           {navLinks.map((link, index) => (
//             <a
//               key={index}
//               href={link.href}
//               style={{
//                 display: 'block',
//                 padding: '12px 0',
//                 fontSize: '16px',
//                 fontWeight: '500',
//                 color: c.textPrimary,
//                 textDecoration: 'none',
//                 borderBottom: `1px solid ${c.border}`
//               }}
//               onClick={() => setIsMobileMenuOpen(false)}
//             >
//               {link.label}
//             </a>
//           ))}
//           <button
//             style={{
//               width: '100%',
//               marginTop: '16px',
//               padding: '12px 24px',
//               backgroundColor: c.accent,
//               color: '#FFFFFF',
//               border: 'none',
//               borderRadius: '6px',
//               cursor: 'pointer',
//               fontSize: '15px',
//               fontWeight: '600'
//             }}
//           >
//             Book Now
//           </button>
//         </div>
//       )}

//       <style jsx>{`
//         @media (max-width: 768px) {
//           .desktop-nav {
//             display: none !important;
//           }
//           .mobile-menu-btn {
//             display: block !important;
//           }
//           .mobile-menu {
//             display: block !important;
//           }
//         }
//       `}</style>
//     </nav>
//   );
// };

// export default Navbar;