import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-amber-900 text-white py-14 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12">

        {/* Company Info */}
        <div>
          <div className="flex items-center gap-3">
            <Image
              src="/logo/logo2.png"
              alt="PR Constructions Logo"
              width={180}
              height={80}
              className="object-contain"
            />
          </div>

          <p className="mt-4 text-gray-200 text-sm leading-relaxed">
            PR Constructions delivers premium residential, commercial, and interior
            construction services with precision engineering, modern techniques,
            and a commitment to long-lasting quality.
          </p>
        </div>

        {/* Services Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-[#7CE8C5]">
            Our Services
          </h4>
          <ul className="space-y-2 text-gray-200 text-sm">
            <li>Building Planning</li>
            <li>Residential & Commercial Construction</li>
            <li>Renovation & Remodeling</li>
            <li>Interior Design & Work</li>
            <li>Supervision & Estimation</li>
            <li>Consultation</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-[#7CE8C5]">
            Contact Info
          </h4>
          <ul className="space-y-3 text-gray-200 text-sm">
            <li>📞 +91 98476 66191</li>
            <li>📧 hello@prconstructions.in</li>
            <li>
              📍 Thalassery, Nadapuram Road,<br />
              Kannur, Kerala, India
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="text-center text-gray-300 text-sm mt-12 border-t border-amber-800 pt-6">
        © {new Date().getFullYear()} PR Constructions. All rights reserved.  
        <span className="block mt-2 text-gray-400">
          Developed by Winshine Infotech
        </span>
      </div>
    </footer>
  );
}
 