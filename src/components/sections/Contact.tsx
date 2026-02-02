"use client";

import { useState } from "react";
import { ArrowRight, MapPin, Phone, Mail } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Inquiry:", formData);
    alert("Thank you! We’ve received your message and will reply within 24 hours.");
  };

  const services = [
    { value: "", label: "Choose the service you're interested in" },
    { value: "residential-planning", label: "Residential Architecture & Planning" },
    { value: "commercial-planning", label: "Commercial Architecture & Planning" },
    { value: "residential-build", label: "Residential Construction" },
    { value: "commercial-build", label: "Commercial Construction" },
    { value: "renovation", label: "Renovation & Heritage Restoration" },
    { value: "interior-design", label: "Interior Architecture & Design" },
    { value: "interior-execution", label: "Full Interior Execution" },
    { value: "supervision", label: "Project Supervision & Management" },
    { value: "estimation", label: "Detailed Cost Estimation" },
    { value: "consultation", label: "Expert Technical Consultation" },
  ];

  return (
    <section id="contact" className="bg-white py-16 sm:py-20 md:py-24 lg:py-32 xl:py-4">
      <div className="max-w-[1680px] mx-auto px-5 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        {/* Headline */}
        <div className="text-center mb-16 sm:mb-20 md:mb-24 lg:mb-28 xl:mb-32">
          <h1 className="text-[clamp(2.5rem,6vw,5rem)] font-bold leading-tight text-[#4a3f35] mb-5">
            Let’s Create
            <br className="hidden sm:block" />
            <span className="text-[#c9a961] font-serif italic font-normal"> Something Exceptional</span>
          </h1>
          <p className="mt-6 sm:mt-8 text-base sm:text-lg md:text-xl lg:text-2xl font-light text-neutral-600 max-w-4xl mx-auto leading-relaxed px-2 sm:px-0">
            From concept sketches to lifelong homes — every great residence starts with a conversation.  
            Share your vision with us.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 md:gap-12 lg:gap-16 xl:gap-20">
          {/* Info column – no sticky on mobile/tablet */}
          <div className="lg:col-span-5 space-y-10 md:space-y-12 lg:space-y-16">
            <div className="bg-neutral-50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 border border-neutral-100 shadow-sm">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-neutral-900 mb-8 md:mb-10">
                Our Studio
              </h2>

              <div className="space-y-8 md:space-y-10">
                <div className="flex items-start gap-4 sm:gap-5 md:gap-6">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-amber-50 flex items-center justify-center flex-shrink-0 mt-1">
                    <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-amber-800" />
                  </div>
                  <div>
                    <p className="font-semibold text-neutral-900 text-base sm:text-lg">Location</p>
                    <p className="mt-1 text-sm sm:text-base text-neutral-700 leading-relaxed">
                      PR Constructions<br />
                     Thalassery – Nadapuram Road<br />
                     Kannur, Kerala, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 sm:gap-5 md:gap-6">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-amber-50 flex items-center justify-center flex-shrink-0 mt-1">
                    <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-amber-800" />
                  </div>
                  <div>
                    <p className="font-semibold text-neutral-900 text-base sm:text-lg">Phone</p>
                    <p className="mt-1 text-base sm:text-lg md:text-xl font-medium text-neutral-900">+91 98476 66191</p>
                    <p className="text-xs sm:text-sm text-neutral-600 mt-1">Monday – Saturday: 9 AM – 6 PM</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 sm:gap-5 md:gap-6">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-amber-50 flex items-center justify-center flex-shrink-0 mt-1">
                    <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-amber-800" />
                  </div>
                  <div>
                    <p className="font-semibold text-neutral-900 text-base sm:text-lg">Email</p>
                    <p className="mt-1 text-base sm:text-lg md:text-xl font-medium text-neutral-900">info@prconstructions.in</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map – responsive aspect */}
            <div className="rounded-2xl sm:rounded-3xl overflow-hidden border border-neutral-100 shadow-sm aspect-[4/3] sm:aspect-[5/4] md:aspect-video">
             <iframe
  title="PR Constructions Location – Thalassery, Kannur"
  width="100%"
  height="100%"
  style={{ border: 0 }}
  loading="lazy"
  allowFullScreen
  referrerPolicy="no-referrer-when-downgrade"
  src="https://www.google.com/maps?q=Thalassery+Nadapuram+Road+Kannur+Kerala&output=embed"
/>

            </div>
          </div>

          {/* Form column */}
          <div className="lg:col-span-7 bg-neutral-50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 xl:p-14 border border-neutral-100 shadow-sm">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-neutral-900 mb-8 md:mb-10 lg:mb-12">
              Send Your Inquiry
            </h2>

            <form onSubmit={handleSubmit} className="space-y-8 md:space-y-10 lg:space-y-12">
              <div className="grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-10">
                <FloatingField label="Full Name" name="name" value={formData.name} onChange={handleChange} required />
                <FloatingField label="Email Address" name="email" type="email" value={formData.email} onChange={handleChange} required />
              </div>

              <div className="grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-10">
                <FloatingField label="Phone Number" name="phone" type="tel" value={formData.phone} onChange={handleChange} required />

                <div className="relative">
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-4 sm:py-5 bg-white border border-neutral-300 rounded-xl text-neutral-900 text-base sm:text-lg focus:border-amber-600 focus:ring-1 focus:ring-amber-500 outline-none transition-all appearance-none cursor-pointer"
                  >
                    {services.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                  <label className="absolute left-4 -top-3 px-2 bg-neutral-50 text-xs sm:text-sm font-medium text-amber-700 pointer-events-none">
                    Service Interested In
                  </label>
                </div>
              </div>

              <div className="relative">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder=" "
                  className="w-full px-4 sm:px-5 py-4 sm:py-5 bg-white border border-neutral-300 rounded-xl text-neutral-900 text-base sm:text-lg focus:border-amber-600 focus:ring-1 focus:ring-amber-500 outline-none transition-all resize-none"
                />
                <label className="absolute left-4 sm:left-5 -top-3 px-2 bg-neutral-50 text-xs sm:text-sm font-medium text-amber-700 pointer-events-none">
                  Project Details / Message
                </label>
              </div>

              <button
                type="submit"
                className="group w-full mt-6 sm:mt-8 bg-amber-700 hover:bg-amber-800 text-white font-semibold text-base sm:text-lg py-4 sm:py-5 rounded-xl transition-all duration-300 flex items-center justify-center gap-3 shadow-md hover:shadow-lg hover:-translate-y-0.5"
              >
                Submit Your Message
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </button>

              <p className="text-center text-xs sm:text-sm text-neutral-500 mt-4">
                Your details are secure • We reply within 24 hours
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

// Reusable floating label field (unchanged but responsive-friendly)
function FloatingField({
  label,
  name,
  type = "text",
  value,
  onChange,
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}) {
  return (
    <div className="relative">
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        placeholder=" "
        className="w-full px-4 sm:px-5 py-4 sm:py-5 bg-white border border-neutral-300 rounded-xl text-neutral-900 text-base sm:text-lg placeholder-transparent focus:border-amber-600 focus:ring-1 focus:ring-amber-500 outline-none transition-all peer"
      />
      <label
        className="absolute left-4 sm:left-5 -top-3 px-2 bg-white text-xs sm:text-sm font-medium text-amber-700 pointer-events-none transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-neutral-500 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-focus:-top-3 peer-focus:text-amber-700 peer-focus:text-xs sm:peer-focus:text-sm"
      >
        {label}
      </label>
    </div>
  );
}