import { Phone } from "lucide-react";
import { SITE } from "@/lib/siteData";

export default function FloatingCallButton() {
  return (
    <a
      href={`tel:${SITE.phoneRaw}`}
      className="lg:hidden fixed bottom-5 right-5 z-40 flex items-center gap-2 bg-gradient-to-br from-[#C9A84C] to-[#B8973E] text-[#0a0a0a] font-semibold px-5 py-3.5 rounded-full shadow-lg shadow-[#C9A84C]/30 active:scale-95 transition-transform"
    >
      <Phone className="w-5 h-5" />
      <span className="text-sm">Call Now</span>
    </a>
  );
}
