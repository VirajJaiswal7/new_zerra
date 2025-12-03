import React from "react";
import { Shield, Award, Droplet, MapPin, Leaf } from "lucide-react";

const Zerra = () => {
  return (
    <section
      id="whyzerra"
      className="py-24 bg-gradient-to-b from-gray-900 to-black"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-amber-400">
            Why Choose ZERRA?
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-yellow-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: Shield,
              title: "Purity Guaranteed",
              desc: "Modern RO & UV purification ensures every drop is safe and pure.",
            },
            {
              icon: Award,
              title: "Luxurious Design",
              desc: "Black & gold packaging that reflects quality and sophistication.",
            },
            {
              icon: Droplet,
              title: "Multiple Sizes",
              desc: "From 200ML to 2L for every need — home, office, or on-the-go.",
            },
            {
              icon: MapPin,
              title: "Locally Made",
              desc: "Produced in Varanasi with stringent safety testing and quality controls.",
            },
            {
              icon: Leaf,
              title: "Responsible Packaging",
              desc: "Recyclable and responsibly sourced materials for a better tomorrow.",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="text-center p-8 rounded-2xl bg-gradient-to-br from-amber-900/10 to-yellow-900/10 border border-amber-700/20 hover:border-amber-500/40 transition-all"
            >
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-amber-500 to-yellow-600 rounded-full flex items-center justify-center">
                <item.icon className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                {item.title}
              </h3>
              <p className="text-gray-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Zerra;
