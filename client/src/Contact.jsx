import { Mail, MapPin, Phone } from "lucide-react";
import React from "react";

const Contact = () => {
  const [formData, setFormData] = React.useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    sizeQty: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("https://new-zerra.vercel.app/send-mail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      alert("Mail sent successfully! We will contact you soon.");
      setFormData({
        name: "",
        company: "",
        phone: "",
        email: "",
        sizeQty: "",
        message: "",
      });
    } else {
      alert("Mail failed. Try again.");
    }
  };

  return (
    <div>
      <section
        id="contact"
        className="py-24 bg-gradient-to-b from-gray-900 to-black"
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-amber-400">
              Contact & Orders
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-yellow-600 mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    placeholder="Name *"
                    name="name"
                    onChange={handleChange}
                    required
                    className="bg-gray-900 border border-amber-700/30 rounded-lg px-4 py-3 text-white focus:border-amber-500"
                  />
                  <input
                    type="text"
                    placeholder="Company (optional)"
                    name="company"
                    onChange={handleChange}
                    className="bg-gray-900 border border-amber-700/30 rounded-lg px-4 py-3 text-white focus:border-amber-500"
                  />
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <input
                    type="tel"
                    placeholder="Phone *"
                    name="phone"
                    onChange={handleChange}
                    required
                    className="bg-gray-900 border border-amber-700/30 rounded-lg px-4 py-3 text-white focus:border-amber-500"
                  />
                  <input
                    type="email"
                    placeholder="Email *"
                    name="email"
                    onChange={handleChange}
                    required
                    className="bg-gray-900 border border-amber-700/30 rounded-lg px-4 py-3 text-white focus:border-amber-500"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Size & Quantity *"
                  name="sizeQty"
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-900 border border-amber-700/30 rounded-lg px-4 py-3 text-white focus:border-amber-500"
                />
                <textarea
                  rows={4}
                  placeholder="Message"
                  name="message"
                  onChange={handleChange}
                  className="w-full bg-gray-900 border border-amber-700/30 rounded-lg px-4 py-3 text-white focus:border-amber-500"
                ></textarea>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-amber-500 to-yellow-600 text-black py-4 rounded-full font-semibold hover:shadow-xl hover:shadow-amber-500/50 transition-all"
                >
                  Submit Inquiry
                </button>
              </form>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-r from-gray-900 to-black border border-amber-700/30 rounded-xl p-6">
                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-amber-400 mt-1" />
                  <div>
                    <p className="text-sm text-gray-400 uppercase tracking-wide mb-1">
                      Phone
                    </p>
                    <p className="text-white">+91 6391604034</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-gray-900 to-black border border-amber-700/30 rounded-xl p-6">
                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-amber-400 mt-1" />
                  <div>
                    <p className="text-sm text-gray-400 uppercase tracking-wide mb-1">
                      Email
                    </p>
                    <p className="text-white">zerrawater@gmail.com</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-gray-900 to-black border border-amber-700/30 rounded-xl p-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-amber-400 mt-1" />
                  <div>
                    <p className="text-sm text-gray-400 uppercase tracking-wide mb-2">
                      Address
                    </p>
                    <p className="text-white font-semibold mb-1">
                      VPR GROUP OF INDUSTRIES
                    </p>
                    <p className="text-gray-400 text-sm">
                      Saraswati Nagar Colony,
                      <br />
                      Near PAC Dakshini Gate,
                      <br />
                      Bhulanpur, Varanasi – 221010
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
