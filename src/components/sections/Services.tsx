"use client";

import { useState } from "react";
import { ArrowRight, Plus, Minus } from "lucide-react";

type Service = {
  title: string;
  image: string;
  category: string;
  id: string;
};

const services: Service[] = [
  { id: "01", title: "Residential Planning", image: "/services/plan-residential.png", category: "Architecture" },
  { id: "02", title: "Commercial Planning", image: "/services/plan-commercial.png", category: "Architecture" },
  { id: "03", title: "Residential Construction", image: "/services/construction-residential.png", category: "Build" },
  { id: "04", title: "Commercial Construction", image: "/services/construction-commercial.png", category: "Build" },
  { id: "05", title: "Renovation & Restoration", image: "/services/renovation.png", category: "Restoration" },
  { id: "06", title: "Interior Design", image: "/services/interior-design.png", category: "Interior" },
  { id: "07", title: "Interior Execution", image: "/services/interior-work.png", category: "Interior" },
  { id: "08", title: "Project Supervision", image: "/services/supervision.png", category: "Management" },
  { id: "09", title: "Detailed Cost Estimation", image: "/services/estimation.png", category: "Consulting" },
  { id: "10", title: "Expert Technical Consultation", image: "/services/consultation.png", category: "Consulting" },
];

export default function PremiumServices() {
  const [showAll, setShowAll] = useState(false);
  const visibleServices = showAll ? services : services.slice(0, 6);

  return (
    <section id="services" className="bg-white text-neutral-900 py-5 md:py-32 lg:py-10 relative overflow-hidden">
      {/* Optional subtle grid background – uncomment if desired */}
      {/* <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e5e50a_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e50a_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" /> */}

      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        
        {/* Header */}
        <div className="max-w-4xl mb-20 md:mb-28">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-xs font-semibold tracking-[0.3em] uppercase text-amber-800/80">Our Expertise</span>
            <div className="h-px flex-1 bg-neutral-200" />
          </div>

          <h2 className="text-[clamp(2.5rem,6vw,5rem)] font-bold leading-tight text-[#4a3f35] mb-8">
            Precision Engineering<br />
            <span className="text-[#c9a961] font-serif italic font-normal">with Timeless Craft</span>
          </h2>

          <p className="text-xl md:text-2xl font-light leading-relaxed text-neutral-600 max-w-2xl">
            From concept to completion, we deliver architectural vision through structural excellence and meticulous execution.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12 lg:gap-16">
          {visibleServices.map((service) => (
            <div 
              key={service.id} 
              className="group relative cursor-pointer transition-all duration-500 hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative overflow-hidden rounded-xl shadow-lg shadow-neutral-200/40 aspect-[4/5] md:aspect-[3/4] bg-neutral-100">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                {/* Category badge */}
                <div className="absolute top-5 right-5">
                  <span className="text-xs font-medium tracking-wide uppercase bg-white/90 backdrop-blur-sm text-amber-900 px-4 py-2 rounded-full shadow-md">
                    {service.category}
                  </span>
                </div>
              </div>

              {/* Text */}
              <div className="mt-6 flex items-start justify-between">
                <div>
                  <p className="text-xs font-medium tracking-wider uppercase text-neutral-500 mb-1">
                    {service.id}
                  </p>
                  <h3 className="text-2xl md:text-3xl font-semibold text-neutral-900 group-hover:text-amber-900 transition-colors">
                    {service.title}
                  </h3>
                </div>
                <ArrowRight className="w-6 h-6 mt-2 text-neutral-400 group-hover:text-amber-800 group-hover:translate-x-1 transition-all" />
              </div>
            </div>
          ))}
        </div>

        {/* Show More Toggle */}
        <div className="mt-20 md:mt-28 flex justify-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="group flex items-center gap-4 px-10 py-5 border border-neutral-300 hover:border-amber-800 rounded-full transition-all duration-400 hover:bg-amber-50/50"
          >
            <span className="text-sm font-semibold tracking-wide uppercase text-neutral-800 group-hover:text-amber-900">
              {showAll ? "Show Less" : "View All Services"}
            </span>
            {showAll ? (
              <Minus className="w-5 h-5 text-amber-800" />
            ) : (
              <Plus className="w-5 h-5 text-amber-800 transition-transform group-hover:rotate-90" />
            )}
          </button>
        </div>

        {/* Feature Pillars */}
        <div className="mt-32 md:mt-40 grid md:grid-cols-3 gap-12 lg:gap-16 border-t border-neutral-200 pt-16">
          {[
            { title: "Vision to Blueprint", desc: "Detailed planning and structural validation at every stage for flawless execution." },
            { title: "Masterful Execution", desc: "Skilled craftsmanship combined with advanced techniques and quality materials." },
            { title: "Enduring Partnership", desc: "Long-term support, ensuring your space matures beautifully over decades." },
          ].map((item, i) => (
            <div key={i} className="space-y-4">
              <h4 className="text-2xl font-semibold text-neutral-900">{item.title}</h4>
              <p className="text-neutral-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Final CTA */}
        <div className="mt-28 md:mt-40 text-center">
          <div className="inline-block mb-10">
            <div className="w-px h-20 bg-gradient-to-b from-transparent via-amber-800/30 to-transparent mx-auto" />
          </div>
          
          <h3 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">
            Ready to build something<br />exceptional?
          </h3>
          
          <p className="text-xl text-neutral-600 mb-10 max-w-xl mx-auto">
            Let’s discuss your vision and how we can bring structural artistry to life.
          </p>

          <a 
            href="#contact" 
            className="inline-flex items-center gap-4 px-10 py-5 bg-amber-900 text-white rounded-full hover:bg-amber-950 transition-all group text-lg font-medium"
          >
            Initiate Project Discussion
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}