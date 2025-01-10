import   { useState } from 'react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white fixed inset-x-0 z-50">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        {/* Logo Section */}
        <div className="flex items-center space-x-2">
          <img src="./src/assets/logo-e.png" alt="Logo" className="h-16 w-16" />
          <span className="text-xl font-semibold">Enver</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-6">
          <li>
            <a href="#hero" className="text-blue-500 hover:text-blue-400">
              Home
            </a>
          </li>
          <li>
            <a href="#services" className="hover:text-gray-300">
              Services
            </a>
          </li>
          <li>
            <a href="#porto" className="hover:text-gray-300">
              Our Project
            </a>
          </li>
          <li>
            <a href="#why" className="hover:text-gray-300">
              About us
            </a>
          </li>
        </ul>

        {/* Contact Button */}
        <div className="hidden md:block">
          <a
            href="#contact"
            className="px-4 py-2 border border-white rounded-full hover:bg-white hover:text-black transition"
          >
            Contact us
          </a>
        </div>

        {/* Hamburger Button (Mobile/Tablet) */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-gray-800 text-white space-y-4 px-4 py-6">
          <a href="#hero" className="block hover:text-gray-400">
            Home
          </a>
          <a href="#services" className="block hover:text-gray-400">
            Services
          </a>
          <a href="#porto" className="block hover:text-gray-400">
            Our Project
          </a>
          <a href="#why" className="block hover:text-gray-400">
            About us
          </a>
          <a
            href="#contact"
            className="block w-full text-center py-2 border border-white rounded-full hover:bg-white hover:text-black transition"
          >
            Contact us
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
