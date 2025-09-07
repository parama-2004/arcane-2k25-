import React, { useState } from "react";
import { Link } from "react-router-dom"; // ✅ use Link for routing
import logo from "../assets/LOGO.png";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Only keep routing paths where needed
  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Events", path: "/events" },
    { name: "Glimpses", path: "#glimpses" },
    { name: "Clubs", path: "/clubs" },
    { name: "Register", path: "/register" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      <header className="sticky top-0 z-50 bg-black/40 backdrop-blur-lg px-6 py-4 shadow-lg shadow-purple-500/10">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <img src={logo} alt="Arcane Logo" className="h-16" />
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) =>
              item.path.startsWith("#") ? (
                // for in-page sections use anchor
                <a
                  key={item.name}
                  href={item.path}
                  className="text-gray-300 hover:text-purple-400 transition-colors duration-300"
                >
                  {item.name}
                </a>
              ) : (
                // for routes use Link
                <Link
                  key={item.name}
                  to={item.path}
                  className="text-gray-300 hover:text-purple-400 transition-colors duration-300"
                >
                  {item.name}
                </Link>
              )
            )}
          </nav>

          {/* CTA */}
          <Link
            to="/register"
            className="hidden md:block bg-purple-600 hover:bg-purple-700 text-white px-5 py-2 rounded-md font-tftheme font-medium transition-transform hover:scale-105 shadow-md"
          >
            Register Now
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white"
          >
            {isMenuOpen ? (
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            )}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed top-0 left-0 w-full h-full bg-black/95 flex flex-col items-center justify-center space-y-8 z-40">
          {menuItems.map((item) =>
            item.path.startsWith("#") ? (
              <a
                key={item.name}
                href={item.path}
                onClick={() => setIsMenuOpen(false)}
                className="text-2xl text-gray-300 hover:text-purple-400 transition-colors"
              >
                {item.name}
              </a>
            ) : (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className="text-2xl text-gray-300 hover:text-purple-400 transition-colors"
              >
                {item.name}
              </Link>
            )
          )}
          <a
            href="#register"
            className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-md font-tftheme font-medium text-lg transition-transform hover:scale-105"
          >
            Register Now
          </a>
        </div>
      )}
    </>
  );
}
