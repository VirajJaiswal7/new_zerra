import { Menu, X } from "lucide-react";
import React, { useState, useEffect } from "react";
import logo from "../src/assets/logo.png"

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ["home", "about", "products", "whyzerra", "faqs", "contact"];
      let currentActive = "";

      sections.forEach((id) => {
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            currentActive = id;
          }
        }
      });

      setActiveSection(currentActive);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-black/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center space-x-3">
         <img src={logo} alt="" className="w-8"/>
          <div className="font-bold text-2xl tracking-wider">
            <span className="text-amber-400">ZERRA</span>
          </div>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-8">
          {["Home", "About", "Products", "Why ZERRA", "FAQs", "Contact"].map(
            (item) => {
              const id = item.toLowerCase().replace(/\s+/g, "");
              return (
                <button
                  key={item}
                  onClick={() => scrollToSection(id)}
                  className={`text-sm uppercase tracking-wide transition-colors hover:text-amber-400 ${
                    activeSection === id ? "text-amber-400" : "text-gray-300"
                  }`}
                >
                  {item}
                </button>
              );
            }
          )}
        </nav>

        {/* CTA Button */}
        <button
          onClick={() => scrollToSection("contact")}
          className="hidden md:block bg-gradient-to-r from-amber-500 to-yellow-600 text-black px-6 py-2 rounded-full font-semibold hover:shadow-lg hover:shadow-amber-500/50 transition-all"
        >
          Order Now
        </button>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-amber-400"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-black/98 border-t border-amber-900/30">
          <nav className="flex flex-col px-6 py-4 space-y-4">
            {["Home", "About", "Products", "Why ZERRA", "FAQs", "Contact"].map(
              (item) => {
                const id = item.toLowerCase().replace(/\s+/g, "");
                return (
                  <button
                    key={item}
                    onClick={() => scrollToSection(id)}
                    className="text-left text-sm uppercase tracking-wide text-gray-300 hover:text-amber-400 transition-colors"
                  >
                    {item}
                  </button>
                );
              }
            )}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
