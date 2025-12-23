import { Linkedin, Facebook, Youtube, Twitter } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";

const quickLinks = [
  "Services",
  "About Us",
  "Testimonials",
  "Pricing",
  "Privacy Policy",
  "Terms and Conditions",
];

const testimonials = [
  {
    name: "Yuri Demidov",
    location: "Moscow, Russia",
    image: "/backgroundImages/yuri_image1.jpg",
    featured: true,
    cta: "Play Video",
    height: "800px",
  },
  {
    name: "Yuri Demidov",
    location: "Moscow, Russia",
    image: "/backgroundImages/yuri_image2.jpg",
    featured: false,
    height: "800px",
  },
  {
    name: "Yuri Demidov",
    location: "Moscow, Russia",
    image: "/backgroundImages/yuri_image.jpg",
    featured: false,
    height: "800px",
  },
];

type Testimonial = {
  name: string;
  location: string;
  image: string;
  featured: boolean;
  cta?: string;
  height?: string;
};

function TestimonialsSection({ testimonials }: { testimonials: Testimonial[] }) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="max-w-[1425px] mx-auto px-6 md:px-8 mt-10 md:mt-12 flex gap-5 md:gap-6 items-start">
      {testimonials.map((item: Testimonial, index: number) => (
        <motion.div
          key={`${item.name}-${item.image}`}
          className="flex flex-col items-start text-left group/item"
          onHoverStart={() => setHoveredIndex(index)}
          onHoverEnd={() => setHoveredIndex(null)}
          animate={{
            flex: hoveredIndex === null ? 1 : hoveredIndex === index ? 1.5 : 0.75,
          }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
        >
          <div className="relative w-full rounded-2xl overflow-hidden border border-[#e5e8ef] shadow-[0_18px_50px_rgba(0,0,0,0.08)] group/card">
            <motion.div
              className="bg-center bg-cover"
              style={{ 
                backgroundImage: `url('${item.image}')`,
                height: item.height || '500px'
              }}
              animate={{
                filter: hoveredIndex === null ? "blur(0px)" : hoveredIndex === index ? "blur(0px)" : "blur(8px)",
                scale: hoveredIndex === index ? 1.05 : 1,
              }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
            />
       
          </div>
          <div className="mt-3">
            <p className="text-sm font-medium" style={{ color: 'var(--primary-navy)' }}>{item.name}</p>
            <p className="text-xs" style={{ color: 'var(--text-secondary)' }}>{item.location}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

function Footer() {
  return (
    <>
      {/* Testimonials Section */}
      <section className="bg-white py-16 md:py-24" style={{ color: 'var(--primary-navy)' }}>
        <div className="max-w-6xl mx-auto px-6 md:px-8 space-y-4 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold" style={{ color: 'var(--text-primary)' }}>
            Real Journey. Real People. Real Success
          </h2>
          <p className="text-sm md:text-base max-w-3xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
            Baseten delivers the infrastructure, tooling, and expertise needed
            to bring great AI <br /> products to market - fast.
          </p>
        </div>

        <TestimonialsSection testimonials={testimonials} />
      </section>

      {/* Footer */}
      <footer className="bg-white py-12 md:py-16" style={{ borderTop: '1px solid var(--primary-blue-light)', borderColor: 'rgba(24, 182, 227, 0.2)' }}>
        <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Top section - Logo and Social Icons */}
        <div 
          className="flex items-center justify-between pb-8"
          style={{ borderBottom: '1px solid rgba(24, 182, 227, 0.2)' }}
        >
          <Link to="/">
            <img
              src="/logo/logo.svg"
              alt="Euro Digital Technologies"
              className="h-10"
            />
          </Link>
          
          <div className="flex items-center gap-4">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded transition-colors"
              style={{ color: 'var(--primary-navy)' }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--bg-secondary)'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded transition-colors"
              style={{ color: 'var(--primary-navy)' }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--bg-secondary)'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
            >
              <Facebook className="w-6 h-6" />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded transition-colors"
              style={{ color: 'var(--primary-navy)' }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--bg-secondary)'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
            >
              <Youtube className="w-6 h-6" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded transition-colors"
              style={{ color: 'var(--primary-navy)' }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--bg-secondary)'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
            >
              <Twitter className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Middle section - Three columns */}
        <div className="grid md:grid-cols-3 gap-10 md:gap-16 py-10 md:py-12">
          {/* Left column - Description */}
          <div className="space-y-4">
            <p className="text-base leading-relaxed" style={{ color: 'var(--text-primary)' }}>
              Building corporation power for visionary entrepreneurs. Structure, compliance, and captial-ready business formation.
            </p>
          </div>

          {/* Middle column - Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4" style={{ color: 'var(--primary-navy)' }}>Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link}>
                  <Link to="/">
                    <span className="relative group inline-block" style={{ color: 'var(--text-primary)' }}>
                      {link}
                      <span 
                        className="absolute left-0 -bottom-1 w-0 h-px transition-all duration-300 ease-in-out group-hover:w-full"
                        style={{ backgroundColor: 'var(--primary-blue)' }}
                      ></span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Right column - Contact Us */}
          <div>
            <h3 className="text-lg font-semibold mb-4" style={{ color: 'var(--primary-navy)' }}>Contact Us</h3>
            <div className="space-y-3" style={{ color: 'var(--text-primary)' }}>
              <p>
                Moonshine St. 14/05 London,
                <br />
                United Kingdom
              </p>
              <p>contact@lumea.com</p>
              <p>00 (123) 456 78 90</p>
            </div>
          </div>
        </div>

        {/* Bottom section - Copyright */}
        <div 
          className="pt-8"
          style={{ borderTop: '1px solid rgba(24, 182, 227, 0.2)' }}
        >
          <p className="text-sm" style={{ color: 'var(--text-primary)' }}>
            2025 Upscale Consulting. All rights reserved. Built for Corporate Excellence.
          </p>
        </div>
      </div>
    </footer>
    </>
  );
}

export default Footer;
