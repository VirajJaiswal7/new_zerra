import React from "react";
import { useState } from "react";

const Product = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
  };
  const products = [
    {
      size: "2L",
      desc: "Perfect for families and offices",
      features: [
        "Multi-stage RO + UV + UF",
        "Food-grade recyclable PET",
        "pH balanced & mineral-checked",
        "Hygienically sealed",
      ],
    },
    {
      size: "1L",
      desc: "Ideal for daily hydration",
      features: [
        "Multi-stage RO + UV + UF",
        "Food-grade recyclable PET",
        "pH balanced & mineral-checked",
        "Hygienically sealed",
      ],
    },
    {
      size: "500ML",
      desc: "Convenient on-the-go solution",
      features: [
        "Multi-stage RO + UV + UF",
        "Food-grade recyclable PET",
        "pH balanced & mineral-checked",
        "Hygienically sealed",
      ],
    },
    {
      size: "250ML",
      desc: "Perfect for meetings & events",
      features: [
        "Multi-stage RO + UV + UF",
        "Food-grade recyclable PET",
        "pH balanced & mineral-checked",
        "Hygienically sealed",
      ],
    },
    {
      size: "200ML",
      desc: "Premium mini bottle",
      features: [
        "Multi-stage RO + UV + UF",
        "Food-grade recyclable PET",
        "pH balanced & mineral-checked",
        "Hygienically sealed",
      ],
    },
  ];
  return (
    <div>
      <section id="products" className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-amber-400">
              Our Sizes
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-yellow-600 mx-auto mb-8"></div>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Perfect for home, office, and events — ZERRA bottles combine
              hygienic quality with a premium presentation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-gray-900 to-black border border-amber-700/30 rounded-2xl p-8 hover:border-amber-500/50 transition-all hover:shadow-xl hover:shadow-amber-500/20 group"
              >
                <div className="mb-6">
                  <div className="text-5xl font-bold text-amber-400 mb-2">
                    ZERRA
                  </div>
                  <div className="text-3xl font-light text-white">
                    {product.size}
                  </div>
                  <p className="text-gray-400 mt-2">{product.desc}</p>
                </div>

                <div className="mb-6">
                  <p className="text-sm text-gray-500 mb-3 uppercase tracking-wide">
                    Features
                  </p>
                  <ul className="space-y-2">
                    {product.features.map((feature, i) => (
                      <li
                        key={i}
                        className="flex items-start text-sm text-gray-300"
                      >
                        <span className="text-amber-400 mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={() => scrollToSection("contact")}
                  className="w-full bg-gradient-to-r from-amber-500 to-yellow-600 text-black py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-amber-500/50 transition-all group-hover:scale-105"
                >
                  Order {product.size}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Product;
