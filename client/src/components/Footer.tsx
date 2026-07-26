import { Link } from "wouter";
import { Phone, Mail, MapPin, Clock, Star } from "lucide-react";
import { SITE, PRACTICE_AREAS, LOCATIONS } from "@/lib/siteData";

export default function Footer() {
  return (
    <footer className="bg-[#060606] border-t border-white/5 pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/manus-storage/logo-lm-gold_73de6277.png"
                alt="Lorona Mead PLC"
                className="w-10 h-10 object-contain"
              />
              <div>
                <div className="font-serif text-lg font-bold text-white leading-none">
                  LORONA MEAD
                </div>
                <div className="text-[0.65rem] tracking-[0.2em] text-[#C9A84C] mt-1">
                  PLC · CRIMINAL DEFENSE
                </div>
              </div>
            </div>
            <p className="text-sm text-white/50 leading-relaxed mb-4">
              Aggressive, experienced criminal defense across all of Arizona. Led by Jess A. Lorona, with decades of courtroom experience.
            </p>
            <div className="flex flex-wrap gap-2">
              {["Free Consultation", "Available 24/7", "Former Prosecutor"].map((badge) => (
                <span
                  key={badge}
                  className="text-[0.7rem] px-2.5 py-1 rounded border border-[#C9A84C]/30 text-[#C9A84C]/80"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>

          {/* Practice Areas */}
          <div>
            <h3 className="font-serif text-base font-semibold text-white mb-4">Practice Areas</h3>
            <ul className="space-y-2">
              {PRACTICE_AREAS.map((area) => (
                <li key={area.slug}>
                  <Link
                    href={`/criminal-defense/${area.slug}`}
                    className="text-sm text-white/50 hover:text-[#C9A84C] transition-colors"
                  >
                    {area.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/criminal-defense" className="text-sm text-white/50 hover:text-[#C9A84C] transition-colors">
                  Criminal Defense Overview
                </Link>
              </li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="font-serif text-base font-semibold text-white mb-4">Service Areas</h3>
            <ul className="space-y-2">
              {LOCATIONS.map((loc) => (
                <li key={loc.slug}>
                  <Link
                    href={`/${loc.slug}`}
                    className="text-sm text-white/50 hover:text-[#C9A84C] transition-colors"
                  >
                    {loc.city} Criminal Defense
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/contact" className="text-sm text-white/50 hover:text-[#C9A84C] transition-colors">
                  All Arizona
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-serif text-base font-semibold text-white mb-4">Contact</h3>
            <ul className="space-y-3">
              <li>
                <a href={`tel:${SITE.phoneRaw}`} className="flex items-start gap-2 text-sm text-white/50 hover:text-[#C9A84C] transition-colors">
                  <Phone className="w-4 h-4 text-[#C9A84C] mt-0.5 shrink-0" />
                  {SITE.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${SITE.email}`} className="flex items-start gap-2 text-sm text-white/50 hover:text-[#C9A84C] transition-colors">
                  <Mail className="w-4 h-4 text-[#C9A84C] mt-0.5 shrink-0" />
                  {SITE.email}
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-white/50">
                <MapPin className="w-4 h-4 text-[#C9A84C] mt-0.5 shrink-0" />
                {SITE.address}
              </li>
              <li className="flex items-start gap-2 text-sm text-white/50">
                <Clock className="w-4 h-4 text-[#C9A84C] mt-0.5 shrink-0" />
                Mon-Fri 8AM-6PM · Sat by Appt
              </li>
            </ul>
            <div className="flex items-center gap-2 mt-4">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="w-4 h-4 fill-[#C9A84C] text-[#C9A84C]" />
                ))}
              </div>
              <span className="text-xs text-white/50">{SITE.rating} · {SITE.reviewCount} Google reviews</span>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40 text-center md:text-left">
            © {new Date().getFullYear()} {SITE.legalName}. All rights reserved. The information on this website is for general information purposes only and is not legal advice.
          </p>
          <div className="flex gap-5">
            <Link href="/disclaimer" className="text-xs text-white/40 hover:text-[#C9A84C] transition-colors">
              Disclaimer
            </Link>
            <Link href="/privacy-policy" className="text-xs text-white/40 hover:text-[#C9A84C] transition-colors">
              Privacy Policy
            </Link>
            <Link href="/sitemap" className="text-xs text-white/40 hover:text-[#C9A84C] transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
