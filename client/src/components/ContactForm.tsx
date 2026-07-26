import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-[#111418] border border-[#C9A84C]/20 rounded-lg p-8 text-center">
        <CheckCircle className="w-12 h-12 text-[#C9A84C] mx-auto mb-4" />
        <h3 className="font-serif text-xl font-semibold text-white mb-2">
          Thank You
        </h3>
        <p className="text-sm text-white/60">
          Your message has been received. We will contact you within 2 hours. For urgent matters, please call (602) 385-6818.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-[#111418] border border-white/5 rounded-lg p-6 md:p-8 space-y-5">
      <div>
        <label className="block text-sm font-medium text-white/80 mb-1.5">
          Name <span className="text-[#C9A84C]">*</span>
        </label>
        <input
          type="text"
          required
          className="w-full bg-[#0a0a0a] border border-white/10 rounded-md px-4 py-3 text-white text-sm placeholder:text-white/30 focus:border-[#C9A84C] focus:outline-none transition-colors"
          placeholder="Your full name"
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-white/80 mb-1.5">
            Phone <span className="text-[#C9A84C]">*</span>
          </label>
          <input
            type="tel"
            required
            className="w-full bg-[#0a0a0a] border border-white/10 rounded-md px-4 py-3 text-white text-sm placeholder:text-white/30 focus:border-[#C9A84C] focus:outline-none transition-colors"
            placeholder="(602) 000-0000"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-white/80 mb-1.5">
            Email <span className="text-[#C9A84C]">*</span>
          </label>
          <input
            type="email"
            required
            className="w-full bg-[#0a0a0a] border border-white/10 rounded-md px-4 py-3 text-white text-sm placeholder:text-white/30 focus:border-[#C9A84C] focus:outline-none transition-colors"
            placeholder="you@email.com"
          />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-white/80 mb-1.5">
          Message <span className="text-[#C9A84C]">*</span>
        </label>
        <textarea
          required
          rows={5}
          className="w-full bg-[#0a0a0a] border border-white/10 rounded-md px-4 py-3 text-white text-sm placeholder:text-white/30 focus:border-[#C9A84C] focus:outline-none transition-colors resize-none"
          placeholder="Briefly describe your situation. All communications are confidential."
        />
      </div>
      <button type="submit" className="btn-gold w-full justify-center">
        <Send className="w-4 h-4" /> Send Confidential Message
      </button>
      <p className="text-xs text-white/40 text-center">
        Submitting this form does not create an attorney-client relationship.
      </p>
    </form>
  );
}
