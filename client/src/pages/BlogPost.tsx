import { Link } from "wouter";
import { Clock, ArrowLeft, Phone, ChevronRight } from "lucide-react";
import { BLOG_POSTS, SITE } from "@/lib/siteData";
import {
  FadeIn,
  SectionLabel,
  Breadcrumbs,
  CTASection,
} from "@/components/Shared";
import SEO from "@/components/SEO";

export default function BlogPost({ slug }: { slug: string }) {
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) return null;

  const otherPosts = BLOG_POSTS.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <>
    <SEO
      title={`${post.title} | Lorona Mead, PLC Blog`}
      description={post.excerpt}
      canonical={`https://arizonatrialattorneys.com/blog/${post.slug}`}
    />
      <section className="relative pt-40 pb-16 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/manus-storage/law-library-dark_61c38fa6.jpg" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/90 to-[#0a0a0a]/60" />
        </div>
        <div className="container relative z-10">
          <FadeIn>
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 text-xs text-white/40 mb-4">
                <span>{post.date}</span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3" /> {post.readTime}
                </span>
              </div>
              <h1 className="font-serif text-3xl md:text-4xl font-bold text-white mb-6 text-balance">
                {post.title}
              </h1>
              <div className="w-20 h-1 bg-gradient-to-r from-[#C9A84C] to-transparent" />
            </div>
          </FadeIn>
        </div>
      </section>

      <Breadcrumbs items={[{ label: "Blog", href: "/blog" }, { label: post.title }]} />

      <section className="py-16 bg-[#0a0a0a]">
        <div className="container max-w-3xl">
          <FadeIn>
            <article className="space-y-6">
              {post.content.map((block, i) => {
                if (block.type === "h2") {
                  return (
                    <h2 key={i} className="font-serif text-2xl font-bold text-white mt-8">
                      {block.text}
                    </h2>
                  );
                }
                return (
                  <p key={i} className="text-white/70 leading-relaxed text-lg">
                    {block.text}
                  </p>
                );
              })}
            </article>
          </FadeIn>

          {/* CTA within post */}
          <FadeIn className="mt-12">
            <div className="bg-[#111418] border border-[#C9A84C]/20 rounded-lg p-8 text-center">
              <h3 className="font-serif text-xl font-semibold text-white mb-3">
                Need Help With Your Case?
              </h3>
              <p className="text-sm text-white/60 mb-6">
                This article is for informational purposes only and is not legal advice. Call us for a free consultation about your specific situation.
              </p>
              <a href={`tel:${SITE.phoneRaw}`} className="btn-gold">
                <Phone className="w-4 h-4" /> {SITE.phone}
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Related posts */}
      <section className="py-16 bg-[#0d0d0d]">
        <div className="container">
          <FadeIn className="mb-8">
            <SectionLabel>Keep Reading</SectionLabel>
            <h2 className="font-serif text-2xl font-bold text-white">
              More Articles
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {otherPosts.map((p, i) => (
              <FadeIn key={p.slug} delay={i * 60}>
                <Link
                  href={`/blog/${p.slug}`}
                  className="group block bg-[#111418] border border-white/5 rounded-lg p-6 hover:border-[#C9A84C]/30 transition-all h-full"
                >
                  <div className="text-xs text-white/40 mb-3">{p.date}</div>
                  <h3 className="font-serif text-lg font-semibold text-white mb-2 group-hover:text-[#C9A84C] transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-sm text-white/50 line-clamp-2">{p.excerpt}</p>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Facing Criminal Charges?"
        subtitle="Do not wait. The sooner you call, the sooner we can start building your defense."
        bgImage="/manus-storage/final-cta-bg_26217376.jpg"
      />
    </>
  );
}
