import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 md:px-10 py-4 bg-white shadow-sm border-b border-black/5">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center cursor-pointer">
          <Link to="/">
            <img
              src="/logo/logo.svg"
              alt="Euro Digital Technologies"
              className="h-10"
            />
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
          <Link to="/services">
            <span className="relative font-medium tracking-wide group" style={{ color: 'var(--primary-navy)' }}>
              Services
              <span className="absolute left-0 -bottom-1 w-0 h-px transition-all duration-300 ease-in-out group-hover:w-full" style={{ backgroundColor: 'var(--primary-navy)' }}></span>
            </span>
          </Link>
          <Link to="/contact">
            <span className="relative font-medium tracking-wide group" style={{ color: 'var(--primary-navy)' }}>
              Contact
              <span className="absolute left-0 -bottom-1 w-0 h-px transition-all duration-300 ease-in-out group-hover:w-full" style={{ backgroundColor: 'var(--primary-navy)' }}></span>
            </span>
          </Link>
        </nav>

        <Link to="/">
          <button 
            className="rounded-md text-slate-800 font-semibold px-5 py-2.5 shadow-[0_10px_25px_rgba(0,0,0,0.12)] transition-colors cursor-pointer"
            style={{ 
              backgroundColor: 'var(--primary-blue)', 
              borderColor: 'var(--primary-blue-dark)',
              borderWidth: '1px'
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--primary-blue-dark)'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--primary-blue)'}
          >
            Book Consultation
          </button>
        </Link>
      </div>
    </header>
  );
}

export default Header;
