import React from "react";

const Faqs = () => {
  const faqs = [
    {
      q: "What purification process do you use?",
      a: "We use multi-stage RO (Reverse Osmosis) with UV sterilization and comprehensive mineral checks to ensure every drop meets the highest purity standards.",
    },
    {
      q: "Do you deliver locally?",
      a: "Yes, we offer local and bulk deliveries throughout Varanasi and surrounding areas. Contact our sales team for delivery rates and wholesale pricing.",
    },
    {
      q: "How should I store ZERRA bottles?",
      a: "Store bottles in a cool, dry place away from direct sunlight. Once opened, refrigerate and consume within the recommended timeframe printed on the label.",
    },
  ];
  return (
    <div>
      <section id="faqs" className="py-24 bg-black">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-amber-400">
              FAQs
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-yellow-600 mx-auto"></div>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-r from-gray-900 to-black border border-amber-700/30 rounded-xl p-6 hover:border-amber-500/50 transition-all"
              >
                <h3 className="text-xl font-semibold text-amber-400 mb-3">
                  {faq.q}
                </h3>
                <p className="text-gray-300 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Faqs;
