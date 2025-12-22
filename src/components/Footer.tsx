import { Linkedin, Facebook, Youtube, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

const quickLinks = [
  "Services",
  "Why Choose Us",
  "About Us",
  "Testimonials",
  "Pricing",
  "Privacy Policy",
  "Terms and Conditions",
];

function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Top section - Logo and Social Icons */}
        <div className="flex items-center justify-between pb-8 border-b border-gray-200">
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
              className="w-10 h-10 flex items-center justify-center hover:bg-gray-100 rounded transition-colors"
            >
              <Linkedin className="w-6 h-6 text-gray-900" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center hover:bg-gray-100 rounded transition-colors"
            >
              <Facebook className="w-6 h-6 text-gray-900" />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center hover:bg-gray-100 rounded transition-colors"
            >
              <Youtube className="w-6 h-6 text-gray-900" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center hover:bg-gray-100 rounded transition-colors"
            >
              <Twitter className="w-6 h-6 text-gray-900" />
            </a>
          </div>
        </div>

        {/* Middle section - Three columns */}
        <div className="grid md:grid-cols-3 gap-10 md:gap-16 py-10 md:py-12">
          {/* Left column - Description */}
          <div className="space-y-4">
            <p className="text-base text-gray-900 leading-relaxed">
              Building corporation power for visionary entrepreneurs. Structure, compliance, and captial-ready business formation.
            </p>
          </div>

          {/* Middle column - Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link}>
                  <Link to="/">
                    <span className="relative text-gray-900 group inline-block">
                      {link}
                      <span className="absolute left-0 -bottom-1 w-0 h-px bg-gray-900 transition-all duration-300 ease-in-out group-hover:w-full"></span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Right column - Contact Us */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact Us</h3>
            <div className="space-y-3 text-gray-900">
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
        <div className="pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-900">
            2025 Upscale Consulting. All rights reserved. Built for Corporate Excellence.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
