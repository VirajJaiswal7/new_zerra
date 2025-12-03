import { ChevronDown } from "lucide-react";
import React from "react";
import { useState } from "react";
import bottle from "../src/assets/bottle.png"


const Hero = () => {
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
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(251,191,36,0.1)_0%,transparent_70%)]"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="mb-6 inline-block">
              <div className="text-xs uppercase tracking-widest text-amber-400 mb-2">
                Premium Purified Water
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600 bg-clip-text text-transparent">
                THE EYES OF TRUTH
              </h1>
            </div>

            <h2 className="text-2xl md:text-4xl font-light mb-6 text-gray-200">
              ZERRA — Purity distilled. Elegance bottled.
            </h2>

            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto lg:mx-0 mb-12">
              Experience premium purified water housed in a signature black &
              gold bottle. Available in 2L, 1L, 500ML, 250ML and 200ML.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
              <button
                onClick={() => scrollToSection("products")}
                className="bg-gradient-to-r from-amber-500 to-yellow-600 text-black px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl hover:shadow-amber-500/50 transition-all transform hover:scale-105"
              >
                Shop Sizes
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="border-2 border-amber-500 text-amber-400 px-8 py-4 rounded-full font-semibold text-lg hover:bg-amber-500/10 transition-all"
              >
                Contact Sales
              </button>
            </div>
          </div>

          <div className="hidden lg:flex items-center justify-center">
            <div className="relative w-96 h-[70vh] flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-900/20 to-yellow-900/20 rounded-3xl blur-3xl"></div>
              <img src={bottle} alt="" />
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <div className="flex justify-center mb-8 animate-bounce">
            <ChevronDown className="w-8 h-8 text-amber-400" />
          </div>
          <div className="h-32 bg-gradient-to-t from-black to-transparent"></div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
