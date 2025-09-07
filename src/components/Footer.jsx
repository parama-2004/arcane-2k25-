import React from "react";
import logo from "../assets/LOGO.png";

export default function Footer() {
  return (
    <footer id="contact" className="py-12 px-6 bg-black/90 w-full">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
          {/* Logo + Desc */}
          <div>
            <img src={logo} alt="Arcane Logo" className="h-12 mx-auto md:mx-0 mb-4" />
            <p className="text-gray-400 text-sm">
              Arcane is the national-level technical symposium hosted by the
              Department of CSE at B.S. Abdur Rahman Crescent Institute.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Overview</h3>
            <ul className="space-y-2">
              {["About", "Events", "Glimpses"].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="text-gray-400 hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Contact</h3>
            <p className="text-gray-400 text-sm">Dept. of CSE</p>
            <p className="text-gray-400 text-sm">BSACIST</p>
            <a href="mailto:arcane2024@gmail.com" className="text-purple-400 hover:text-purple-300 text-sm">
              arcane2024@gmail.com
            </a>
          </div>

          {/* Socials */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Follow Us</h3>
            <div className="flex space-x-4 justify-center md:justify-start">
              {["#", "#", "#"].map((url, i) => (
                <a key={i} href={url} className="text-gray-400 hover:text-white transition-transform hover:scale-110">
                  🌐
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
          <p>© {new Date().getFullYear()} ARCANE. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
