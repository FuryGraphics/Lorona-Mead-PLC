import { useState } from "react";
import { Plus, Minus } from "lucide-react";

type FAQ = { q: string; a: string };

export default function FAQAccordion({ faqs }: { faqs: FAQ[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {faqs.map((faq, i) => (
        <div
          key={i}
          className="bg-[#111418] border border-white/5 rounded-lg overflow-hidden transition-colors hover:border-[#C9A84C]/20"
        >
          <button
            className="w-full flex items-center justify-between gap-4 p-5 text-left"
            onClick={() => setOpen(open === i ? null : i)}
          >
            <span className="font-medium text-white text-sm md:text-base">
              {faq.q}
            </span>
            {open === i ? (
              <Minus className="w-5 h-5 text-[#C9A84C] shrink-0" />
            ) : (
              <Plus className="w-5 h-5 text-[#C9A84C] shrink-0" />
            )}
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ease-out ${
              open === i ? "max-h-96" : "max-h-0"
            }`}
          >
            <p className="px-5 pb-5 text-sm text-white/60 leading-relaxed">
              {faq.a}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
