import { 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram, 
  Mail, 
  Phone, 
  MapPin,
  Shield,
  Heart,
  Stethoscope
} from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  const quickLinks = [
    { label: 'Home', href: '#' },
    { label: 'Services', href: '#services' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'AI Features', href: '#ai-features' },
    { label: 'Pricing', href: '#' },
    { label: 'About Us', href: '#' },
  ];

  const services = [
    { label: 'Video Consultations', href: '#' },
    { label: 'Digital Prescriptions', href: '#' },
    { label: 'Medical Records', href: '#' },
    { label: 'Drug Interaction Checker', href: '#' },
    { label: 'Symptom Checker', href: '#' },
    { label: 'Doctor AI Assistant', href: '#' },
  ];

  const legalLinks = [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
    { label: 'HIPAA Compliance', href: '#' },
    { label: 'Cookie Policy', href: '#' },
  ];

  const socialLinks = [
    { icon: Facebook, label: 'Facebook', href: '#' },
    { icon: Twitter, label: 'Twitter', href: '#' },
    { icon: Linkedin, label: 'LinkedIn', href: '#' },
    { icon: Instagram, label: 'Instagram', href: '#' },
  ];

  const contactInfo = [
    { icon: Phone, text: '+1 (555) 123-4567' },
    { icon: Mail, text: 'support@telehealthplatform.com' },
    { icon: MapPin, text: '123 Health St, Medical City, HC 12345' },
  ];

  const features = [
    { icon: Shield, text: 'HIPAA Compliant' },
    { icon: Heart, text: '24/7 Support' },
    { icon: Stethoscope, text: 'Licensed Doctors' },
  ];

  return (
    <footer className="bg-white border-t">
      {/* Main Footer */}
      <div className="container mx-auto px-6 py-12 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#16A34A' }}>
                <span className="text-white font-bold text-xl">TP</span>
              </div>
              <div>
                <h2 className="text-2xl font-bold" style={{ color: '#14532D' }}>
                  Telehealth<span className="font-normal">Platform</span>
                </h2>
                <p className="text-sm" style={{ color: '#4D7C0F' }}>
                  AI-Powered Healthcare
                </p>
              </div>
            </div>
            
            <p className="text-gray-600">
              Bringing quality healthcare to your fingertips with secure, reliable, and innovative telemedicine solutions.
            </p>
            
            <div className="space-y-3">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="p-2 rounded-lg" style={{ backgroundColor: '#F0FDF4' }}>
                    <feature.icon size={18} style={{ color: '#16A34A' }} />
                  </div>
                  <span className="font-medium" style={{ color: '#14532D' }}>
                    {feature.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 pb-2 border-b" style={{ color: '#14532D', borderColor: '#F0FDF4' }}>
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-600 hover:text-green-700 transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-6 pb-2 border-b" style={{ color: '#14532D', borderColor: '#F0FDF4' }}>
              Our Services
            </h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.label}>
                  <Link
                    href={service.href}
                    className="text-gray-600 hover:text-green-700 transition-colors duration-200"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="text-xl font-bold mb-6 pb-2 border-b" style={{ color: '#14532D', borderColor: '#F0FDF4' }}>
              Contact Us
            </h3>
            <div className="space-y-4 mb-8">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <info.icon size={20} style={{ color: '#16A34A' }} />
                  <span className="text-gray-600">{info.text}</span>
                </div>
              ))}
            </div>
            
            <div>
              <h4 className="font-bold mb-4" style={{ color: '#14532D' }}>
                Follow Us
              </h4>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="p-3 rounded-full hover:scale-110 transition-all duration-200"
                    style={{ backgroundColor: '#F0FDF4' }}
                    aria-label={social.label}
                  >
                    <social.icon size={20} style={{ color: '#16A34A' }} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-10 border-t" style={{ borderColor: '#F0FDF4' }}></div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <div className="text-center md:text-left">
            <p className="text-gray-600">
              © {new Date().getFullYear()} Telehealth Platform. All rights reserved.
            </p>
            <p className="text-sm text-gray-500 mt-2">
              Version 1.0 | December 2025
            </p>
          </div>

          {/* Legal Links */}
          <div className="flex flex-wrap justify-center gap-6">
            {legalLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm text-gray-600 hover:text-green-700 transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Tagline */}
          <div className="text-center md:text-right">
            <p className="text-lg font-semibold" style={{ color: '#14532D' }}>
              Secure • Reliable • AI-Powered Healthcare
            </p>
          </div>
        </div>

        {/* Badges */}
        <div className="mt-10 flex flex-wrap justify-center gap-6">
          <div className="px-4 py-2 rounded-full text-sm font-medium" style={{ backgroundColor: '#F0FDF4', color: '#14532D' }}>
            🔒 HIPAA Compliant
          </div>
          <div className="px-4 py-2 rounded-full text-sm font-medium" style={{ backgroundColor: '#F0FDF4', color: '#14532D' }}>
            ⭐ 4.9/5 Patient Rating
          </div>
          <div className="px-4 py-2 rounded-full text-sm font-medium" style={{ backgroundColor: '#F0FDF4', color: '#14532D' }}>
            🏆 Award Winning Platform
          </div>
        </div>
      </div>
    </footer>
  );
}


// 'use client';

// import React from 'react';
// import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

// interface FooterProps {
//   theme: 'light' | 'dark';
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

// interface FooterLink {
//   label: string;
//   href: string;
// }

// interface FooterSection {
//   title: string;
//   links: FooterLink[];
// }

// const Footer: React.FC<FooterProps> = ({ theme }) => {
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

//   const footerSections: FooterSection[] = [
//     {
//       title: 'Services',
//       links: [
//         { label: 'Video Consultations', href: '#video' },
//         { label: 'Digital Prescriptions', href: '#prescriptions' },
//         { label: 'Medical Records', href: '#records' },
//         { label: 'Drug Interaction Checker', href: '#drug-checker' }
//       ]
//     },
//     {
//       title: 'Company',
//       links: [
//         { label: 'About Us', href: '#about' },
//         { label: 'Careers', href: '#careers' },
//         { label: 'Press', href: '#press' },
//         { label: 'Blog', href: '#blog' }
//       ]
//     },
//     {
//       title: 'Resources',
//       links: [
//         { label: 'Help Center', href: '#help' },
//         { label: 'Patient Guide', href: '#guide' },
//         { label: 'Provider Portal', href: '#portal' },
//         { label: 'API Documentation', href: '#api' }
//       ]
//     },
//     {
//       title: 'Legal',
//       links: [
//         { label: 'Privacy Policy', href: '#privacy' },
//         { label: 'Terms of Service', href: '#terms' },
//         { label: 'HIPAA Compliance', href: '#hipaa' },
//         { label: 'Cookie Policy', href: '#cookies' }
//       ]
//     }
//   ];

//   const contactInfo = [
//     { icon: Phone, text: '+1 (555) 123-4567' },
//     { icon: Mail, text: 'support@telehealth.com' },
//     { icon: MapPin, text: '123 Medical Plaza, Healthcare City, HC 12345' }
//   ];

//   const socialLinks = [
//     { icon: Facebook, href: '#facebook', label: 'Facebook' },
//     { icon: Twitter, href: '#twitter', label: 'Twitter' },
//     { icon: Linkedin, href: '#linkedin', label: 'LinkedIn' },
//     { icon: Instagram, href: '#instagram', label: 'Instagram' }
//   ];

//   return (
//     <footer
//       style={{
//         backgroundColor: c.card,
//         borderTop: `1px solid ${c.border}`,
//         color: c.textPrimary
//       }}
//     >
//       {/* Main Footer Content */}
//       <div
//         style={{
//           maxWidth: '1200px',
//           margin: '0 auto',
//           padding: '60px 20px 40px'
//         }}
//       >
//         <div
//           style={{
//             display: 'grid',
//             gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
//             gap: '40px',
//             marginBottom: '40px'
//           }}
//         >
//           {/* Brand Section */}
//           <div style={{ gridColumn: 'span 1' }}>
//             <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
//               <div
//                 style={{
//                   width: '40px',
//                   height: '40px',
//                   borderRadius: '8px',
//                   backgroundColor: c.primary,
//                   display: 'flex',
//                   alignItems: 'center',
//                   justifyContent: 'center',
//                   fontWeight: '700',
//                   fontSize: '20px',
//                   color: '#FFFFFF'
//                 }}
//               >
//                 T
//               </div>
//               <span
//                 style={{
//                   fontSize: '20px',
//                   fontWeight: '700',
//                   color: c.textPrimary
//                 }}
//               >
//                 TeleHealth
//               </span>
//             </div>
//             <p
//               style={{
//                 fontSize: '14px',
//                 color: c.textSecondary,
//                 lineHeight: '1.6',
//                 marginBottom: '20px'
//               }}
//             >
//               Secure • Reliable • AI-Powered Healthcare
//             </p>

//             {/* Contact Info */}
//             <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
//               {contactInfo.map((contact, index) => {
//                 const IconComponent = contact.icon;
//                 return (
//                   <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
//                     <IconComponent size={16} color={c.textSecondary} />
//                     <span style={{ fontSize: '14px', color: c.textSecondary }}>
//                       {contact.text}
//                     </span>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>

//           {/* Footer Links Sections */}
//           {footerSections.map((section, index) => (
//             <div key={index}>
//               <h3
//                 style={{
//                   fontSize: '16px',
//                   fontWeight: '600',
//                   color: c.textPrimary,
//                   marginBottom: '16px'
//                 }}
//               >
//                 {section.title}
//               </h3>
//               <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
//                 {section.links.map((link, linkIndex) => (
//                   <li key={linkIndex} style={{ marginBottom: '10px' }}>
//                     <a
//                       href={link.href}
//                       style={{
//                         fontSize: '14px',
//                         color: c.textSecondary,
//                         textDecoration: 'none',
//                         transition: 'color 0.3s ease'
//                       }}
//                       onMouseOver={(e: React.MouseEvent<HTMLAnchorElement>) => {
//                         (e.target as HTMLAnchorElement).style.color = c.primary;
//                       }}
//                       onMouseOut={(e: React.MouseEvent<HTMLAnchorElement>) => {
//                         (e.target as HTMLAnchorElement).style.color = c.textSecondary;
//                       }}
//                     >
//                       {link.label}
//                     </a>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//         </div>

//         {/* Divider */}
//         <div
//           style={{
//             height: '1px',
//             backgroundColor: c.border,
//             margin: '40px 0'
//           }}
//         />

//         {/* Bottom Footer */}
//         <div
//           style={{
//             display: 'flex',
//             justifyContent: 'space-between',
//             alignItems: 'center',
//             flexWrap: 'wrap',
//             gap: '20px'
//           }}
//         >
//           {/* Copyright */}
//           <p style={{ fontSize: '14px', color: c.textSecondary, margin: 0 }}>
//             © {new Date().getFullYear()} TeleHealth Platform. All rights reserved.
//           </p>

//           {/* Social Links */}
//           <div style={{ display: 'flex', gap: '16px' }}>
//             {socialLinks.map((social, index) => {
//               const IconComponent = social.icon;
//               return (
//                 <a
//                   key={index}
//                   href={social.href}
//                   aria-label={social.label}
//                   style={{
//                     width: '36px',
//                     height: '36px',
//                     borderRadius: '50%',
//                     backgroundColor: c.background,
//                     border: `1px solid ${c.border}`,
//                     display: 'flex',
//                     alignItems: 'center',
//                     justifyContent: 'center',
//                     transition: 'all 0.3s ease',
//                     cursor: 'pointer'
//                   }}
//                   onMouseOver={(e: React.MouseEvent<HTMLAnchorElement>) => {
//                     (e.currentTarget as HTMLAnchorElement).style.backgroundColor = c.primary;
//                     (e.currentTarget as HTMLAnchorElement).style.borderColor = c.primary;
//                     const icon = (e.currentTarget as HTMLAnchorElement).querySelector('svg');
//                     if (icon) (icon as SVGElement).style.color = '#FFFFFF';
//                   }}
//                   onMouseOut={(e: React.MouseEvent<HTMLAnchorElement>) => {
//                     (e.currentTarget as HTMLAnchorElement).style.backgroundColor = c.background;
//                     (e.currentTarget as HTMLAnchorElement).style.borderColor = c.border;
//                     const icon = (e.currentTarget as HTMLAnchorElement).querySelector('svg');
//                     if (icon) (icon as SVGElement).style.color = c.textSecondary;
//                   }}
//                 >
//                   <IconComponent size={18} color={c.textSecondary} />
//                 </a>
//               );
//             })}
//           </div>
//         </div>

//         {/* Certifications */}
//         <div
//           style={{
//             marginTop: '32px',
//             padding: '20px',
//             backgroundColor: c.background,
//             borderRadius: '8px',
//             border: `1px solid ${c.border}`,
//             textAlign: 'center'
//           }}
//         >
//           <p style={{ fontSize: '13px', color: c.textSecondary, margin: 0 }}>
//             🔒 HIPAA Compliant • SOC 2 Type II Certified • ISO 27001 Certified
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;