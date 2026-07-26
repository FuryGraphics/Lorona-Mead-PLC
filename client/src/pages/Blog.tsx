import { Link } from "wouter";
import { Clock, ArrowRight, BookOpen } from "lucide-react";
import { BLOG_POSTS } from "@/lib/siteData";
import {
  FadeIn,
  SectionLabel,
  GoldUnderlineHeading,
  Breadcrumbs,
  CTASection,
} from "@/components/Shared";
import SEO from "@/components/SEO";

export default function Blog() {
  return (
    <>
    <SEO
      title="Criminal Defense Blog | Lorona Mead, PLC | Phoenix, AZ"
      description="Legal insights and articles on Arizona criminal defense law from Jess A. Lorona. DUI, drug charges, expungements, and more. Free consultation."
      canonical="https://arizonatrialattorneys.com/blog"
    />
      <section className="relative pt-40 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/manus-storage/law-library-dark_61c38fa6.jpg" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/90 to-[#0a0a0a]/60" />
        </div>
        <div className="container relative z-10">
          <FadeIn>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6 text-balance">
              Legal Insights & Blog
            </h1>
            <div className="w-20 h-1 bg-gradient-to-r from-[#C9A84C] to-transparent mb-6" />
            <p className="text-lg text-white/70 max-w-2xl text-balance">
              Articles and insights on Arizona criminal defense law from Jess A. Lorona.
            </p>
          </FadeIn>
        </div>
      </section>

      <Breadcrumbs items={[{ label: "Blog" }]} />

      <section className="py-16 bg-[#0a0a0a]">
        <div className="container">
          <FadeIn className="mb-12">
            <SectionLabel>Recent Posts</SectionLabel>
            <GoldUnderlineHeading>
              Latest Articles
            </GoldUnderlineHeading>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {BLOG_POSTS.map((post, i) => (
              <FadeIn key={post.slug} delay={i * 60}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group block bg-[#111418] border border-white/5 rounded-lg overflow-hidden hover:border-[#C9A84C]/30 transition-all h-full"
                >
                  <div className="p-6">
                    <div className="flex items-center gap-3 text-xs text-white/40 mb-4">
                      <span>{post.date}</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" /> {post.readTime}
                      </span>
                    </div>
                    <h2 className="font-serif text-xl font-semibold text-white mb-3 group-hover:text-[#C9A84C] transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-sm text-white/50 leading-relaxed mb-4">
                      {post.excerpt}
                    </p>
                    <span className="inline-flex items-center gap-1 text-sm font-medium text-[#C9A84C] group-hover:gap-2 transition-all">
                      Read More <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Have Questions About Your Case?"
        subtitle="The blog is informational, not legal advice. For specific guidance on your situation, call for a free consultation."
        bgImage="/manus-storage/final-cta-bg_26217376.jpg"
      />
    </>
  );
}
