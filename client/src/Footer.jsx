import { ExternalLink } from "lucide-react";
import React from "react";
import { useState } from "react";
import logo from "../src/assets/logo.png"
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";



const Footer = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  return (
    <div>
      <footer className="bg-black border-t border-amber-700/30 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <img src={logo} alt="" className="w-8"/>
                <div className="font-bold text-2xl tracking-wider text-amber-400">
                  ZERRA
                </div>
              </div>
              <p className="text-gray-400 text-sm">
                Purity distilled. Elegance bottled.
              </p>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Quick Links</h3>
              <div className="space-y-2">
                {["Home", "Products", "About", "Contact"].map((link) => (
                  <button
                    key={link}
                    onClick={() => scrollToSection(link.toLowerCase())}
                    className="block text-gray-400 hover:text-amber-400 transition-colors text-sm"
                  >
                    {link}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a
      href="https://www.instagram.com/zerra_official.025?igsh=cXpsbnlrMnd4aXNz"
      target="_blank"
      rel="noopener noreferrer"
      className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center border border-amber-700/30 hover:border-amber-500 transition-colors cursor-pointer"
    >
      <FaInstagram className="w-5 h-5 text-amber-400" />
    </a>

    <a
      href="https://www.linkedin.com/in/zerra-water-19667a39b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
      target="_blank"
      rel="noopener noreferrer"
      className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center border border-amber-700/30 hover:border-amber-500 transition-colors cursor-pointer"
    >
      <FaLinkedin className="w-5 h-5 text-amber-400" />
    </a>

    <a
      href="https://www.whatsapp.com/channel/0029Vb6EIo0InlqKZdczvU30"
      target="_blank"
      rel="noopener noreferrer"
      className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center border border-amber-700/30 hover:border-amber-500 transition-colors cursor-pointer"
    >
      <FaWhatsapp className="w-5 h-5 text-amber-400" />
    </a>
              </div>
            </div>
          </div>

          <div className="border-t border-amber-700/30 pt-8 text-center text-gray-500 text-sm">
            <p>
              © {new Date().getFullYear()} ORRLOW RO WATER CELEG
              rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
