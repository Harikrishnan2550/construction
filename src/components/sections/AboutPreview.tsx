"use client";

import { ArrowRight, ArrowUpRight } from "lucide-react";

const phoneNumber = "919847666191";
const message = "Hello PR Constructions, I’d like to discuss a new project.";
const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

export default function ArchitecturalAbout() {
  return (
    <section 
      id="about" 
      className="bg-white text-neutral-900 py-24 md:py-40 lg:py-56 relative overflow-hidden scroll-mt-28"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-white via-white to-neutral-50/20 pointer-events-none" />

      <div className="max-w-[1480px] mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        
        <div className="grid lg:grid-cols-12 gap-12 xl:gap-24 items-center">
          
          {/* Left Image */}
          <div className="lg:col-span-6 xl:col-span-5 order-2 lg:order-1">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-black/15 group">
              <img
                src="/about.jpg"
                alt="Signature residence by PR Constructions – timeless architecture in Kerala"
                className="w-full h-full object-cover aspect-[4/5] md:aspect-[3/4] scale-105 transition-transform duration-1000 group-hover:scale-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                <p className="text-xs md:text-sm font-medium tracking-[0.3em] uppercase text-amber-300/90 mb-2">
                  Our Approach
                </p>
                <p className="text-3xl md:text-4xl lg:text-5xl font-serif italic text-white leading-tight">
                  Crafted for Eternity
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="mt-12 md:mt-16 grid grid-cols-2 md:flex md:gap-16 lg:gap-24">
              {[
                { val: "100+", label: "Bespoke Residences", desc: "Across Kerala’s coastline to hill country" },
                { val: "0.5 mm", label: "Precision Tolerance", desc: "In structural execution & finishes" },
              ].map((stat, i) => (
                <div key={i} className="text-center md:text-left">
                  <div className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-neutral-900">
                    {stat.val}
                  </div>
                  <div className="mt-2 h-px w-12 mx-auto md:mx-0 bg-amber-800/50" />
                  <p className="mt-3 text-sm font-semibold uppercase tracking-wide text-neutral-600">
                    {stat.label}
                  </p>
                  <p className="mt-1 text-sm text-neutral-500">{stat.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content */}
          <div className="lg:col-span-6 xl:col-span-7 order-1 lg:order-2">
            <div className="max-w-3xl">
              <div className="flex items-center gap-6 mb-10 md:mb-16">
                <span className="text-xs font-semibold tracking-[0.35em] uppercase text-amber-800">
                  Master Builders
                </span>
                <div className="h-px flex-1 bg-neutral-200" />
              </div>

              <h1 className="text-[clamp(2.5rem,6vw,5rem)] font-bold leading-tight text-[#4a3f35] mb-5">
                Structural Stories,<br />
                <span className="text-[#c9a961] font-serif italic font-normal">Timeless Spaces.</span>
              </h1>

              <div className="space-y-8 md:space-y-10 text-lg md:text-xl font-light leading-relaxed text-neutral-700">
                <p>For over a decade, PR Constructions has been the trusted hand behind Kerala’s most distinctive residences.</p>
                <p>We approach every commission as a narrative in form and material — honoring concrete, stone, and timber with modern engineering precision.</p>
                <p className="text-neutral-600">Rooted in Kerala’s climate, we integrate passive cooling, natural ventilation, and local materials without compromising luxury.</p>
                <p>The result: monumental yet intimate homes designed for generations to cherish.</p>
              </div>

              <div className="mt-12 md:mt-16 flex flex-col sm:flex-row gap-6">
                <button className="group inline-flex items-center gap-4 text-base font-semibold tracking-wide uppercase text-neutral-900 hover:text-amber-900 transition-colors">
                  Discover Our Craft 
                  <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-2" />
                </button>
                
                <button className="group inline-flex items-center gap-4 text-base font-semibold tracking-wide uppercase text-neutral-900 hover:text-amber-900 transition-colors">
                  View Select Projects
                  <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-2" />
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Footer CTA — NOW WHATSAPP */}
        <div className="mt-32 pt-12 border-t border-neutral-200 flex flex-col sm:flex-row justify-between items-center gap-6 text-sm text-neutral-500">
          <div className="tracking-wider uppercase font-medium">
            PR Constructions  ·  Kerala  ·  Bespoke Residences
          </div>
          
          <a 
            href={whatsappURL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-neutral-50 hover:bg-neutral-100 border border-neutral-300 hover:border-amber-800/40 transition-all"
          >
            <span className="text-sm font-semibold tracking-widest uppercase text-neutral-800 group-hover:text-neutral-950">
              Start a Conversation
            </span>
            <ArrowUpRight className="w-5 h-5 text-amber-800 group-hover:rotate-12 transition-all" />
          </a>
        </div>
        
      </div>
    </section>
  );
}
