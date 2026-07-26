import { useEffect, useRef, useState, type ReactNode } from "react";
import { Link } from "wouter";
import { ChevronRight, Star, Phone } from "lucide-react";
import { SITE } from "@/lib/siteData";

// FadeIn wrapper using IntersectionObserver
export function FadeIn({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-500 ease-out ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

export function SectionLabel({ children }: { children: string }) {
  return (
    <div className="section-label mb-3">{children}</div>
  );
}

export function GoldUnderlineHeading({
  children,
  className = "",
  center = false,
}: {
  children: ReactNode;
  className?: string;
  center?: boolean;
}) {
  return (
    <h2
      className={`font-serif text-3xl md:text-4xl font-bold text-white ${className}`}
    >
      <span className={`gold-underline ${center ? "gold-underline-center" : ""}`}>
        {children}
      </span>
    </h2>
  );
}

export function GoogleBadge({ size = "md" }: { size?: "sm" | "md" }) {
  const starSize = size === "sm" ? "w-3.5 h-3.5" : "w-4 h-4";
  const textSize = size === "sm" ? "text-xs" : "text-sm";
  return (
    <div className="inline-flex items-center gap-2.5 bg-white/5 border border-white/10 rounded-full px-4 py-2">
      <div className="flex items-center gap-1">
        {[1, 2, 3, 4, 5].map((i) => (
          <Star key={i} className={`${starSize} fill-[#C9A84C] text-[#C9A84C]`} />
        ))}
      </div>
      <span className={`${textSize} text-white/80 font-medium`}>
        {SITE.rating} · {SITE.reviewCount} Google reviews
      </span>
    </div>
  );
}

export function Breadcrumbs({ items }: { items: { label: string; href?: string }[] }) {
  return (
    <nav className="container pt-28 pb-4">
      <ol className="flex items-center gap-2 text-xs text-white/40 flex-wrap">
        <li>
          <Link href="/" className="hover:text-[#C9A84C] transition-colors">
            Home
          </Link>
        </li>
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-2">
            <ChevronRight className="w-3 h-3" />
            {item.href ? (
              <Link href={item.href} className="hover:text-[#C9A84C] transition-colors">
                {item.label}
              </Link>
            ) : (
              <span className="text-white/60">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function CTASection({
  title,
  subtitle,
  bgImage,
}: {
  title: string;
  subtitle: string;
  bgImage?: string;
}) {
  return (
    <section className="relative py-20 overflow-hidden">
      {bgImage && (
        <div className="absolute inset-0">
          <img src={bgImage} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/90 to-[#0a0a0a]/70" />
        </div>
      )}
      {!bgImage && <div className="absolute inset-0 bg-gradient-to-br from-[#111418] to-[#0a0a0a]" />}
      <div className="container relative z-10 text-center">
        <FadeIn>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-white mb-4 text-balance">
            {title}
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto mb-8 text-balance">
            {subtitle}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href={`tel:${SITE.phoneRaw}`} className="btn-gold">
              <Phone className="w-4 h-4" /> {SITE.phone}
            </a>
            <Link href="/contact" className="btn-outline-gold">
              Free Consultation
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

export function TrustBadges({ badges }: { badges?: string[] }) {
  const items = badges || ["Free Consultation", "Available 24/7", "Former Prosecutor Insight", "Thousands of Cases Handled"];
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {items.map((badge) => (
        <div
          key={badge}
          className="flex items-center justify-center text-center bg-white/5 border border-[#C9A84C]/20 rounded-lg py-4 px-3"
        >
          <span className="text-sm font-medium text-[#C9A84C]">{badge}</span>
        </div>
      ))}
    </div>
  );
}
