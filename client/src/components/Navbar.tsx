import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Phone, ChevronDown, ChevronRight } from "lucide-react";
import { SITE, PRACTICE_AREAS, LOCATIONS } from "@/lib/siteData";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [practiceOpen, setPracticeOpen] = useState(false);
  const [locationsOpen, setLocationsOpen] = useState(false);
  const [mobilePracticeOpen, setMobilePracticeOpen] = useState(false);
  const [mobileLocationsOpen, setMobileLocationsOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setPracticeOpen(false);
    setLocationsOpen(false);
  }, [location]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#0a0a0a]/95 backdrop-blur-md border-b border-white/5 py-3"
            : "bg-transparent py-5"
        }`}
      >
        <nav className="container flex items-center justify-between gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <img
              src="/manus-storage/logo-lm-gold_73de6277.png"
              alt="Lorona Mead PLC logo"
              className="w-10 h-10 object-contain"
            />
            <div className="hidden sm:block">
              <div className="font-serif text-xl font-bold text-white leading-none">
                LORONA MEAD
              </div>
              <div className="text-[0.65rem] tracking-[0.2em] text-[#C9A84C] mt-1">
                PLC · CRIMINAL DEFENSE
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {/* Practice Areas Mega Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setPracticeOpen(true)}
              onMouseLeave={() => setPracticeOpen(false)}
            >
              <button className="flex items-center gap-1 text-sm font-medium text-white/90 hover:text-[#C9A84C] transition-colors">
                Practice Areas
                <ChevronDown className="w-4 h-4" />
              </button>
              {practiceOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[640px] bg-[#111418] border border-white/10 rounded-lg shadow-2xl p-6 grid grid-cols-2 gap-x-6 gap-y-3">
                  {PRACTICE_AREAS.map((area) => (
                    <Link
                      key={area.slug}
                      href={`/criminal-defense/${area.slug}`}
                      className="group flex items-start gap-3 p-3 rounded-md hover:bg-white/5 transition-colors"
                    >
                      <ChevronRight className="w-4 h-4 text-[#C9A84C] mt-0.5 shrink-0" />
                      <div>
                        <div className="text-sm font-medium text-white group-hover:text-[#C9A84C] transition-colors">
                          {area.title}
                        </div>
                        <div className="text-xs text-white/50 mt-0.5 line-clamp-1">
                          {area.subAreas.slice(0, 3).join(" · ")}
                        </div>
                      </div>
                    </Link>
                  ))}
                  <Link
                    href="/practice-areas"
                    className="col-span-2 mt-2 pt-4 border-t border-white/10 text-center text-sm font-medium text-[#C9A84C] hover:text-[#D4B85E] transition-colors"
                  >
                    Show All Practice Areas →
                  </Link>
                </div>
              )}
            </div>

            <Link href="/attorney" className="text-sm font-medium text-white/90 hover:text-[#C9A84C] transition-colors">
              About
            </Link>

            {/* Service Areas Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setLocationsOpen(true)}
              onMouseLeave={() => setLocationsOpen(false)}
            >
              <button className="flex items-center gap-1 text-sm font-medium text-white/90 hover:text-[#C9A84C] transition-colors">
                Service Areas
                <ChevronDown className="w-4 h-4" />
              </button>
              {locationsOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-56 bg-[#111418] border border-white/10 rounded-lg shadow-2xl p-3">
                  {LOCATIONS.map((loc) => (
                    <Link
                      key={loc.slug}
                      href={`/${loc.slug}`}
                      className="block px-3 py-2 text-sm text-white/80 hover:text-[#C9A84C] hover:bg-white/5 rounded-md transition-colors"
                    >
                      {loc.city}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/testimonials" className="text-sm font-medium text-white/90 hover:text-[#C9A84C] transition-colors">
              Reviews
            </Link>

            <Link href="/blog" className="text-sm font-medium text-white/90 hover:text-[#C9A84C] transition-colors">
              Blog
            </Link>

            <Link href="/contact" className="text-sm font-medium text-white/90 hover:text-[#C9A84C] transition-colors">
              Contact
            </Link>
          </div>

          {/* Right side: phone + CTA */}
          <div className="hidden lg:flex items-center gap-4 shrink-0">
            <a
              href={`tel:${SITE.phoneRaw}`}
              className="flex items-center gap-2 text-sm font-medium text-white hover:text-[#C9A84C] transition-colors"
            >
              <Phone className="w-4 h-4 text-[#C9A84C]" />
              {SITE.phone}
            </a>
            <a href={`tel:${SITE.phoneRaw}`} className="btn-gold text-sm">
              Free Consultation
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>
      </header>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div className="absolute inset-0 bg-[#0a0a0a]/98 backdrop-blur-md pt-20 overflow-y-auto">
            <div className="container py-6 space-y-1">
              {/* Practice Areas */}
              <button
                className="w-full flex items-center justify-between py-3 text-white font-medium border-b border-white/5"
                onClick={() => setMobilePracticeOpen(!mobilePracticeOpen)}
              >
                Practice Areas
                <ChevronDown className={`w-5 h-5 transition-transform ${mobilePracticeOpen ? "rotate-180" : ""}`} />
              </button>
              {mobilePracticeOpen && (
                <div className="pl-4 pb-2 space-y-1">
                  {PRACTICE_AREAS.map((area) => (
                    <Link
                      key={area.slug}
                      href={`/criminal-defense/${area.slug}`}
                      className="block py-2 text-sm text-white/70 hover:text-[#C9A84C]"
                    >
                      {area.title}
                    </Link>
                  ))}
                  <Link href="/practice-areas" className="block py-2 text-sm text-[#C9A84C] font-medium">
                    Show All Practice Areas →
                  </Link>
                </div>
              )}

              <Link href="/attorney" className="block py-3 text-white font-medium border-b border-white/5">
                About
              </Link>

              {/* Service Areas */}
              <button
                className="w-full flex items-center justify-between py-3 text-white font-medium border-b border-white/5"
                onClick={() => setMobileLocationsOpen(!mobileLocationsOpen)}
              >
                Service Areas
                <ChevronDown className={`w-5 h-5 transition-transform ${mobileLocationsOpen ? "rotate-180" : ""}`} />
              </button>
              {mobileLocationsOpen && (
                <div className="pl-4 pb-2 space-y-1">
                  {LOCATIONS.map((loc) => (
                    <Link
                      key={loc.slug}
                      href={`/${loc.slug}`}
                      className="block py-2 text-sm text-white/70 hover:text-[#C9A84C]"
                    >
                      {loc.city}
                    </Link>
                  ))}
                </div>
              )}

              <Link href="/testimonials" className="block py-3 text-white font-medium border-b border-white/5">
                Reviews
              </Link>
              <Link href="/blog" className="block py-3 text-white font-medium border-b border-white/5">
                Blog
              </Link>
              <Link href="/contact" className="block py-3 text-white font-medium border-b border-white/5">
                Contact
              </Link>

              <div className="pt-6 space-y-3">
                <a href={`tel:${SITE.phoneRaw}`} className="btn-gold w-full justify-center">
                  <Phone className="w-4 h-4" /> {SITE.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
