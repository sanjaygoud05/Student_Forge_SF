"use client";

import Footer from "@/components/Footer";
import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    phone: '',
    reason: '',
    comments: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    
    const subject = `Contact Us Inquiry: ${formData.reason} - ${formData.name}`;
    const body = `Name: ${formData.name}
Email: ${formData.email}
Address: ${formData.address}
Phone: ${formData.phone || 'N/A'}
Reason for Contact: ${formData.reason}

Message / Comments:
${formData.comments || 'N/A'}`;

    window.location.href = `mailto:info@studentforge.in?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <main className="flex-1 bg-white">
      <section className="relative pt-32 pb-20 px-6 bg-[#1a3646]">
        <div className="relative z-10 w-full max-w-[1200px] mx-auto">
          <h1 className="text-4xl lg:text-5xl font-light text-white mb-4 tracking-tight">
            Contact Us
          </h1>
          <p className="text-base lg:text-lg text-white/60 max-w-2xl leading-relaxed">
            We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="w-full max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-[#1a3646] mb-6">Contact Information</h3>
                <p className="text-[#1a3646]/60 text-sm leading-relaxed mb-8">
                  Fill out the form and our team will get back to you within 24 hours.
                </p>
              </div>

              <div className="space-y-6">
                <a
                  href="mailto:info@studentforge.in"
                  className="flex items-start gap-4 group text-left"
                >
                  <div className="w-12 h-12 bg-[#fbb03b]/10 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-[#fbb03b]/20 transition-colors">
                    <Mail size={20} className="text-[#fbb03b]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-[#1a3646] mb-1 group-hover:text-[#fbb03b] transition-colors">Email</h4>
                    <p className="text-sm text-[#1a3646]/60">info@studentforge.in</p>
                  </div>
                </a>

                <a
                  href="tel:+916304218064"
                  className="flex items-start gap-4 group text-left"
                >
                  <div className="w-12 h-12 bg-[#fbb03b]/10 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-[#fbb03b]/20 transition-colors">
                    <Phone size={20} className="text-[#fbb03b]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-[#1a3646] mb-1 group-hover:text-[#fbb03b] transition-colors">Phone</h4>
                    <p className="text-sm text-[#1a3646]/60">+91 6304218064</p>
                  </div>
                </a>

                <a
                  href="https://maps.google.com/?q=HF2R%2BCCV,+Devender+Colony,+Kompally,+Hyderabad,+Telangana+500100"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 group text-left"
                >
                  <div className="w-12 h-12 bg-[#fbb03b]/10 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-[#fbb03b]/20 transition-colors">
                    <MapPin size={20} className="text-[#fbb03b]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-[#1a3646] mb-1 group-hover:text-[#fbb03b] transition-colors">Office</h4>
                    <p className="text-sm text-[#1a3646]/60 leading-relaxed">
                      HF2R+CCV, Devender Colony,<br />
                      Kompally, Hyderabad,<br />
                      Telangana 500100
                    </p>
                  </div>
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white border border-[#1a3646]/10 rounded-2xl p-8 lg:p-10">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-[#1a3646]">
                        Name <span className="text-[#fbb03b]">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-[#1a3646]/20 focus:border-[#fbb03b] focus:outline-none focus:ring-1 focus:ring-[#fbb03b] transition-all text-sm"
                        placeholder="Your name"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-[#1a3646]">
                        Email <span className="text-[#fbb03b]">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-[#1a3646]/20 focus:border-[#fbb03b] focus:outline-none focus:ring-1 focus:ring-[#fbb03b] transition-all text-sm"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-[#1a3646]">
                        Address <span className="text-[#fbb03b]">*</span>
                      </label>
                      <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-[#1a3646]/20 focus:border-[#fbb03b] focus:outline-none focus:ring-1 focus:ring-[#fbb03b] transition-all text-sm"
                        placeholder="Your address"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-[#1a3646]">
                        Phone
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-[#1a3646]/20 focus:border-[#fbb03b] focus:outline-none focus:ring-1 focus:ring-[#fbb03b] transition-all text-sm"
                        placeholder="+91 XXXXX XXXXX"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-[#1a3646]">
                      Reason for contacting <span className="text-[#fbb03b]">*</span>
                    </label>
                    <input
                      type="text"
                      name="reason"
                      value={formData.reason}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-[#1a3646]/20 focus:border-[#fbb03b] focus:outline-none focus:ring-1 focus:ring-[#fbb03b] transition-all text-sm"
                      placeholder="How can we help you?"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-[#1a3646]">
                      Comments
                    </label>
                    <textarea
                      name="comments"
                      value={formData.comments}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg border border-[#1a3646]/20 focus:border-[#fbb03b] focus:outline-none focus:ring-1 focus:ring-[#fbb03b] transition-all text-sm resize-none"
                      placeholder="Your message..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full px-8 py-3 bg-[#1a3646] text-white rounded-lg font-medium text-sm hover:bg-[#2d414e] transition-colors flex items-center justify-center gap-2"
                  >
                    <Send size={16} />
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
