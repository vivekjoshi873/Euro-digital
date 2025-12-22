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
            <span className="relative text-[#0f1f38] font-medium tracking-wide group">
              Home
              <span className="absolute left-0 -bottom-1 w-0 h-px bg-[#0f1f38] transition-all duration-300 ease-in-out group-hover:w-full"></span>
            </span>
          </Link>
          <Link to="/services">
            <span className="relative text-[#0f1f38] font-medium tracking-wide group">
              Services
              <span className="absolute left-0 -bottom-1 w-0 h-px bg-[#0f1f38] transition-all duration-300 ease-in-out group-hover:w-full"></span>
            </span>
          </Link>
          <Link to="/why-choose-us">
            <span className="relative text-[#0f1f38] font-medium tracking-wide group">
              Why Choose Us
              <span className="absolute left-0 -bottom-1 w-0 h-px bg-[#0f1f38] transition-all duration-300 ease-in-out group-hover:w-full"></span>
            </span>
          </Link>
          <Link to="/contact">
            <span className="relative text-[#0f1f38] font-medium tracking-wide group">
              Contact
              <span className="absolute left-0 -bottom-1 w-0 h-px bg-[#0f1f38] transition-all duration-300 ease-in-out group-hover:w-full"></span>
            </span>
          </Link>
        </nav>

        <Link to="/">
          <button className="rounded-md bg-[#18b6e3] hover:bg-[#129ec6] text-slate-800 font-semibold px-5 py-2.5 shadow-[0_10px_25px_rgba(0,0,0,0.12)] border border-[#0ea5d9] transition-colors cursor-pointer">
            Book Consultation
          </button>
        </Link>
      </div>
    </header>
  );
}

export default Header;
