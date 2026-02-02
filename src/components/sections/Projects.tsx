"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Maximize2 } from "lucide-react";

type Project = {
  title: string;
  image: string;
  id: string;
  tag: string;
  detail: string;
};

const projects: Project[] = [
  {
    id: "01",
    tag: "RESIDENTIAL",
    title: "THE OBSIDIAN VILLA",
    image: "/projects/villa.jpeg",
    detail:
      "Monochromatic restraint fused with passive tropical ventilation and honest materiality.",
  },
{
  id: "02",
  tag: "INTERIOR",
  title: "HERITAGE COURTYARD INTERIOR",
  image: "/projects/office.jpeg",
  detail:
    "Exposed brick warmth, handcrafted wood elements, and daylight-driven spatial harmony.",
},

  {
    id: "03",
    tag: "INTERIOR",
    title: "ETHOS RESIDENCE",
    image: "/projects/interior.jpeg",
    detail:
      "Curated tactility, layered lighting, and serene coastal intimacy.",
  },
];

const sectionVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
};

const wordVariants = {
  hidden: { opacity: 0, x: -15 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" },
  }),
};

// WhatsApp CTA
const phoneNumber = "919847666191";
const message = "Hello PR Constructions, I’d like to discuss a new project.";
const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
  message
)}`;

// 🔹 Project Item Component (Correct hook usage)
function ProjectItem({ project, index }: { project: Project; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const isEven = index % 2 === 0;

  return (
    <motion.article
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={sectionVariants}
      className="group relative grid lg:grid-cols-2 border-b border-neutral-200 min-h-[80vh] lg:min-h-[100vh] overflow-hidden"
    >
      {/* Image */}
      <div
        className={`relative overflow-hidden order-1 lg:order-${
          isEven ? "2" : "1"
        } h-[60vh] lg:h-auto`}
      >
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-1000 ease-out"
          initial={{ scale: 1.08 }}
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      </div>

      {/* Content */}
      <div
        className={`p-8 lg:p-16 xl:p-24 flex flex-col justify-center bg-neutral-50 group-hover:bg-white transition-colors duration-700 order-2 lg:order-${
          isEven ? "1" : "2"
        }`}
      >
        <div className="space-y-10 lg:space-y-16 max-w-xl">
          <div className="flex items-center gap-6">
            <span className="text-6xl lg:text-8xl font-light italic text-amber-900/20">
              {project.id}
            </span>
            <div className="h-px flex-1 bg-neutral-300 max-w-20" />
            <span className="text-xs font-semibold tracking-[0.35em] uppercase text-amber-800">
              {project.tag}
            </span>
          </div>

          <h3 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold leading-[0.9] tracking-[-0.015em]">
            {project.title.split(" ").map((word, i) => (
              <motion.span
                key={i}
                custom={i}
                variants={wordVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="block"
              >
                {word}
              </motion.span>
            ))}
          </h3>

          <p className="text-lg lg:text-xl font-light leading-relaxed text-neutral-600 group-hover:text-neutral-800 transition-colors">
            {project.detail}
          </p>

          <button className="mt-6 flex items-center gap-5 group/btn text-base font-medium tracking-wide uppercase">
            <div className="w-14 h-14 rounded-full border border-neutral-400 flex items-center justify-center transition-all group-hover/btn:bg-amber-900 group-hover/btn:border-amber-900 group-hover/btn:scale-105">
              <Maximize2 className="w-5 h-5 text-neutral-700 group-hover/btn:text-white transition-colors" />
            </div>
            <span className="group-hover/btn:text-amber-900 transition-colors">
              Explore Project
            </span>
          </button>
        </div>
      </div>
    </motion.article>
  );
}

export default function ArchitecturalSplit() {
  return (
    <section id="projects" className="bg-white text-neutral-950">
      {/* Header */}
      <div className="px-6 lg:px-12 py-12 border-b border-neutral-200 flex justify-between items-center text-sm font-medium tracking-wider uppercase text-neutral-500">
        <span>Selected Projects</span>
        <span>PR Constructions</span>
      </div>

      {projects.map((project, index) => (
        <ProjectItem key={project.id} project={project} index={index} />
      ))}

      {/* CTA */}
      <div className="py-32 lg:py-48 px-6 lg:px-12 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-[clamp(2.5rem,6vw,5rem)] font-bold leading-tight text-[#4a3f35] mb-8"
        >
          Ready to Shape
          <br />
          <span className="text-[#c9a961] font-serif italic font-normal">Your Space?</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-xl lg:text-2xl font-light text-neutral-600 mb-12 max-w-3xl mx-auto"
        >
          Let's discuss your vision — from concept to enduring reality.
        </motion.p>

        <motion.a
          href={whatsappURL}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="group inline-flex items-center gap-6 px-4 lg:px-6 py-2 lg:py-3 bg-neutral-900 text-white rounded-full hover:bg-amber-900 transition-all duration-500 text-lg font-medium shadow-lg hover:shadow-xl"
        >
          Start the Conversation
          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center group-hover:rotate-45 transition-transform">
            <ArrowRight className="w-4 h-4 text-neutral-900" />
          </div>
        </motion.a>
      </div>
    </section>
  );
}
