"use client";

export default function Hero() {
  return (
    <section id="home" className="w-full bg-[#f6f4ef] pt-32 text-center">

      {/* ===== TEXT AREA ===== */}
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-[clamp(2.5rem,6vw,5rem)] font-bold leading-tight text-[#4a3f35]">
          Building with{" "}
          <span className="text-[#c9a961] font-serif italic font-normal">
            Integrity & Precision
          </span>
        </h1>

        <p className="mt-6 text-lg md:text-xl text-[#4a3f35]/80 max-w-3xl mx-auto">
          Creating timeless Kerala homes through masterful craftsmanship,
          uncompromising excellence and uncompromising attention to detail.
        </p>
      </div>

      {/* ===== IMAGE AREA ===== */}
      <div className="mt-16 flex justify-center">
        <div className="w-full max-w-[1100px] rounded-t-[2.5rem] overflow-hidden shadow-2xl">
          <img
            src="/banner2.png"
            alt="Premium Kerala residence – PR Constructions"
            className="w-full h-[500px] object-cover"
          />
        </div>
      </div>

      {/* ===== FONTS ===== */}
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=Inter:wght@300;400;500;600&display=swap');

        .font-serif {
          font-family: 'Cormorant Garamond', serif;
        }

        * {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
        }
      `}</style>
    </section>
  );
}
