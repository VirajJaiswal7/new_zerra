import React from 'react'
import bottle from "../src/assets/bottle.png"

const About = () => {
  return (
    <div>
        <section id="about" className="py-24 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-amber-400">About ZERRA</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-yellow-600 mx-auto mb-8"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                ZERRA is the flagship purified water brand of <span className="text-amber-400 font-semibold">ORRLOW RO WATER CELEG PVT LTD</span>. We blend advanced purification with meticulous packaging to deliver water that's pure, safe, and presented with the dignity it deserves.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Our production facility in Varanasi follows stringent quality controls to ensure every bottle meets the highest standards.
              </p>
              
              <div className="mt-8 p-6 bg-gradient-to-r from-amber-900/20 to-yellow-900/20 border border-amber-700/30 rounded-lg">
                <p className="text-sm text-gray-400 mb-2 uppercase tracking-wide">Company</p>
                <p className="text-white font-semibold mb-2">ORRLOW RO WATER CELEG PVT LTD</p>
                <p className="text-gray-400 text-sm">
                  Saraswati Nagar Colony, Near PAC Dakshini Gate,<br />
                  Bhulanpur, Varanasi – 221010
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="relative aspect-square max-w-md mx-auto flex items-center justify-center">
               <img src={bottle} alt="" />
                <div className="absolute inset-0 bg-gradient-to-br from-amber-900/20 to-yellow-900/20 rounded-3xl -z-10 blur-3xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
