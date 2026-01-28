import { Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { ChevronDown, Menu, X } from "lucide-react";

const services = [
  { id: "ai-business-automation", title: "AI Business Automation", path: "/services/ai-business-automation" },
  { id: "ai-business-promotion", title: "AI Business Promotion", path: "/services/ai-business-promotion" },
  { id: "ai-agent-talk-time", title: "AI Agent Talk Time", path: "/services/ai-agent-talk-time" },
  { id: "ai-automated-chatbot", title: "AI Automated Chatbot", path: "/services/ai-automated-chatbot" },
  { id: "ai-addon-services", title: "AI add-on Services", path: "/services/ai-addon-services" },
  { id: "industry-specific", title: "Industry Specific AI Use Cases", path: "/services/industry-specific" },
];

function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const timeoutRef = useRef<number | null>(null);

  // Close mobile menu when window is resized to desktop width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const handleMouseEnter = () => {
    // Clear any pending close timers so it doesn't close while we're entering
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    // Start the 150ms "Grace Period" timer
    timeoutRef.current = setTimeout(() => {
      setIsDropdownOpen(false);
    }, 150);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 md:px-10 py-3 md:py-4 bg-white shadow-sm border-b border-black/5">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center cursor-pointer z-50">
          <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>
            <img src="/logo/logo.svg" alt="Logo" className="h-12 md:h-18 transition-all" />
          </Link>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-10">
          <Link to="/">
            <span className="relative font-medium tracking-wide group" style={{ color: 'var(--primary-navy)' }}>
              Home
              <span className="absolute left-0 -bottom-1 w-0 h-px transition-all duration-300 ease-in-out group-hover:w-full" style={{ backgroundColor: 'var(--primary-navy)' }}></span>
            </span>
          </Link>

          {/* Services Dropdown */}
          <div
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button className="flex items-center gap-1 py-2 font-medium tracking-wide outline-none" style={{ color: 'var(--primary-navy)' }}>
              Services
              <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} />
              {/* Highlight line under 'Services' when open */}
              <span className={`absolute left-0 bottom-1 h-px transition-all duration-300 ${isDropdownOpen ? 'w-full' : 'w-0'}`} style={{ backgroundColor: 'var(--primary-navy)' }}></span>
            </button>

            {/* Dropdown Menu */}
            <div className={`absolute left-0 w-72 pt-3 transition-all duration-300 ${isDropdownOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 translate-y-2 invisible pointer-events-none'}`}>
              <div className="bg-white border border-gray-100 shadow-2xl rounded-xl py-2 overflow-hidden">
                {services.map((service) => (
                  <Link
                    key={service.id}
                    to={service.path}
                    onClick={() => setIsDropdownOpen(false)}
                    className="group flex items-center px-5 py-3 text-[14px] font-medium transition-all duration-200 hover:bg-slate-50"
                  >
                    {/* Highlighter Dot */}
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mr-3 opacity-0 -ml-2 transition-all duration-300 group-hover:opacity-100 group-hover:ml-0" />

                    <span className="text-slate-700 group-hover:text-blue-600 transition-colors">
                      {service.title}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link to="/contact">
            <span className="relative font-medium tracking-wide group" style={{ color: 'var(--primary-navy)' }}>
              Contact
              <span className="absolute left-0 -bottom-1 w-0 h-px transition-all duration-300 ease-in-out group-hover:w-full" style={{ backgroundColor: 'var(--primary-navy)' }}></span>
            </span>
          </Link>
        </nav>

        <div className="hidden md:block">
          <a href="https://link.quickadpro.com/widget/booking/56bGknArJkPUj93VXRrj" target="_blank" rel="noopener noreferrer">
            <button className="rounded-md text-white font-semibold px-6 py-2.5 shadow-lg transition-all hover:brightness-110 active:scale-95 cursor-pointer"
              style={{ backgroundColor: 'var(--primary-blue)' }}>
              Book Consultation
            </button>
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 z-50 transition-colors text-slate-700"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      {/* Mobile Menu Sidebar */}
      <div className={`fixed inset-0 bg-white z-40 transition-transform duration-300 ease-in-out md:hidden ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col h-full pt-24 px-6 overflow-y-auto">
          <nav className="flex flex-col gap-6 text-lg font-medium">
            <Link
              to="/"
              onClick={() => setIsMobileMenuOpen(false)}
              className="py-2 border-b border-gray-100"
              style={{ color: 'var(--primary-navy)' }}
            >
              Home
            </Link>

            <div className="flex flex-col">
              <button
                className="flex items-center justify-between py-2 border-b border-gray-100 outline-none"
                style={{ color: 'var(--primary-navy)' }}
                onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
              >
                <span>Services</span>
                <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isMobileServicesOpen ? 'rotate-180' : ''}`} />
              </button>

              <div className={`flex flex-col gap-4 mt-4 pl-4 overflow-hidden transition-all duration-300 ${isMobileServicesOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                {services.map((service) => (
                  <Link
                    key={service.id}
                    to={service.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-slate-600 hover:text-blue-600 font-medium py-1"
                  >
                    {service.title}
                  </Link>
                ))}
              </div>
            </div>

            <Link
              to="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="py-2 border-b border-gray-100"
              style={{ color: 'var(--primary-navy)' }}
            >
              Contact
            </Link>
          </nav>

          <div className="mt-10 mb-8">
            <a href="https://link.quickadpro.com/widget/booking/56bGknArJkPUj93VXRrj" target="_blank" rel="noopener noreferrer">
              <button
                className="w-full rounded-xl text-white font-semibold py-4 shadow-lg transition-all"
                style={{ backgroundColor: 'var(--primary-blue)' }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Book Consultation
              </button>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;