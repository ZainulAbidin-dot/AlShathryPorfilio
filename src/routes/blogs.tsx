import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/blogs")({
  head: () => ({
    meta: [
      { title: "Insights & Perspectives — Abdulrahman Al-Shathry" },
      {
        name: "description",
        content:
          "Essays on leadership, digital transformation, AI, smart infrastructure, and sustainable growth by Abdulrahman Al-Shathry.",
      },
      { property: "og:title", content: "Insights & Perspectives — Abdulrahman Al-Shathry" },
      {
        property: "og:description",
        content:
          "Leadership, digital transformation, AI, infrastructure & sustainable growth — from four decades of building enterprises.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: BlogsPage,
});

type Post = {
  title: string;
  tag: string;
  excerpt: string;
  read: string;
  href: string;
};

type Section = { title: string; posts: Post[] };

const sections: Section[] = [
  {
    title: "Smart Infrastructure in Saudi Arabia",
    posts: [
      {
        title: "The Evolution of Building Automation: My Journey in Shaping a Smarter Kingdom",
        tag: "Building Automation & Smart Infrastructure",
        excerpt:
          "The evolution of building automation in Saudi Arabia — from early HVAC controls to today's smart, sustainable buildings.",
        read: "7 min read",
        href: "https://al-shathry-portfolio-blogs.vercel.app/blogs/building-automation-evolution-saudi-arabia.html",
      },
      {
        title: "From Vision to Reality: How Saudi Controls Ltd. Pioneered Smart Infrastructure",
        tag: "Smart Cities & Infrastructure",
        excerpt:
          "How Saudi Controls transformed a vision into reality, leading smart infrastructure and automation engineering in the Kingdom.",
        read: "5 min read",
        href: "https://al-shathry-portfolio-blogs.vercel.app/blogs/saudi-controls-pioneering-smart-infrastructure.html",
      },
      {
        title: "From Vision to Value: The Human Element in IoT Building Management Systems",
        tag: "IoT & Smart Buildings",
        excerpt:
          "True IoT building management goes beyond connected devices — it focuses on the people behind the technology.",
        read: "7 min read",
        href: "https://al-shathry-portfolio-blogs.vercel.app/blogs/iot-building-management-systems-people-first.html",
      },
      {
        title: "Energy Efficiency Engineering: A New Take",
        tag: "Energy & Innovation",
        excerpt:
          "How energy efficiency engineering and advanced control technology are revolutionizing industries — a contrarian take.",
        read: "4 min read",
        href: "https://al-shathry-portfolio-blogs.vercel.app/blogs/energy-efficiency-engineering-advanced-control-technology.html",
      },
      {
        title: "Beyond Smart Cities: My Journey in Automation",
        tag: "Automation & Smart Cities",
        excerpt:
          "Automation in urban infrastructure is about more than tech — a personal story on building lasting progress in our cities.",
        read: "7 min read",
        href: "https://al-shathry-portfolio-blogs.vercel.app/blogs/how-automation-is-transforming-urban-infrastructure-a-personal-story.html",
      },
      {
        title: "Smart Cities in Saudi Arabia",
        tag: "Smart Cities",
        excerpt:
          "The future of smart cities in Saudi Arabia — connected control systems and human-centric leadership building our digital infrastructure.",
        read: "7 min read",
        href: "https://al-shathry-portfolio-blogs.vercel.app/blogs/smart-cities-saudi-arabia.html",
      },
    ],
  },
  {
    title: "Digital Transformation Leadership",
    posts: [
      {
        title: "Datastar International's Digital Connectivity Mission",
        tag: "Digital Connectivity & Innovation",
        excerpt:
          "Connecting tomorrow's world through people-first leadership and sustainable innovation.",
        read: "6 min read",
        href: "https://al-shathry-portfolio-blogs.vercel.app/blogs/datastar-international-digital-connectivity-mission.html",
      },
      {
        title: "AI and Data Transformation: Why People Drive Real Change",
        tag: "AI & Data Transformation",
        excerpt:
          "Lessons from 30+ years building technology in emerging markets — why leadership and collaboration matter most.",
        read: "7 min read",
        href: "https://al-shathry-portfolio-blogs.vercel.app/blogs/ai-data-transformation-people-drive-digital-growth.html",
      },
      {
        title: "Digital Infrastructure Saudi Arabia: Build It Right",
        tag: "Digital Infrastructure",
        excerpt:
          "Real insights from three decades in automation and tech leadership on creating infrastructure that lasts.",
        read: "6 min read",
        href: "https://al-shathry-portfolio-blogs.vercel.app/blogs/digital-infrastructure-saudi-arabia-connected-economy.html",
      },
      {
        title: "Digital Connectivity: The Future of Sustainable Development",
        tag: "Sustainable Development",
        excerpt:
          "How digital connectivity is transforming how we live, work, and interact — and driving sustainable development.",
        read: "6 min read",
        href: "https://al-shathry-portfolio-blogs.vercel.app/blogs/digital-connectivity-sustainable-development.html",
      },
      {
        title: "Cloud Migration Saudi Arabia: Build It Right",
        tag: "Cloud & Modernization",
        excerpt:
          "Legacy modernization done right — hard-won insights on migrating to the cloud without losing the enterprise.",
        read: "8 min read",
        href: "https://al-shathry-portfolio-blogs.vercel.app/blogs/cloud-migration-saudi-arabia-legacy-modernization.html",
      },
      {
        title: "Bridging Technology and Business: Lessons from Datastar's Evolution",
        tag: "Technology & Business",
        excerpt: "Why real digital transformation starts with people, not platforms.",
        read: "3 min read",
        href: "https://al-shathry-portfolio-blogs.vercel.app/blogs/bridging-technology-and-business.html",
      },
    ],
  },
  {
    title: "Leadership, Vision & National Progress",
    posts: [
      {
        title: "Vision 2030: Engineering Innovation for a Sustainable Future",
        tag: "Vision 2030",
        excerpt:
          "How engineering innovation is driving sustainable development and shaping the future of Saudi Arabia.",
        read: "6 min read",
        href: "https://al-shathry-portfolio-blogs.vercel.app/blogs/vision-2030-engineering-innovation.html",
      },
      {
        title: "A Journey Through Technology Brilliance",
        tag: "Technology & Society",
        excerpt: "A journey through the history of technology and its impact on society.",
        read: "5 min read",
        href: "https://al-shathry-portfolio-blogs.vercel.app/blogs/a-journey-through-technology-brilliance.html",
      },
      {
        title: "Sustainable Innovation: Saudi Arabia's National Progress",
        tag: "Sustainable Innovation",
        excerpt:
          "How sustainable innovation is driving national progress and shaping the future of the Kingdom.",
        read: "6 min read",
        href: "https://al-shathry-portfolio-blogs.vercel.app/blogs/sustainable-innovation-saudi-arabia-national-progress.html",
      },
      {
        title: "Leadership Engineering Lessons: Three Decades of Experience",
        tag: "Leadership",
        excerpt: "Lessons learned from three decades of engineering leadership.",
        read: "5 min read",
        href: "https://al-shathry-portfolio-blogs.vercel.app/blogs/leadership-engineering-lessons-three-decades.html",
      },
      {
        title: "Empowering the Next Generation of Saudi Engineers",
        tag: "Mentorship",
        excerpt:
          "On stewardship, mentorship, and preparing the next generation of Saudi engineers.",
        read: "5 min read",
        href: "https://al-shathry-portfolio-blogs.vercel.app/blogs/saudi-engineering-mentorship-next-generation.html",
      },
      {
        title: "Leadership Technology: Saudi Arabia's National Growth",
        tag: "Leadership & Growth",
        excerpt:
          "How leadership in technology is driving national growth and shaping the future of the Kingdom.",
        read: "6 min read",
        href: "https://al-shathry-portfolio-blogs.vercel.app/blogs/leadership-technology-saudi-arabia-national-growth.html",
      },
    ],
  },
  {
    title: "International Events & Perspectives",
    posts: [
      {
        title: "Eng. Abdulrahman A Z Al-Shathry at ICE Riyadh 2025",
        tag: "Saudi–Italian Partnerships",
        excerpt:
          "ICE Riyadh 2025 — Saudi Italian Investment and Business Forum · Mandarin Oriental Al Faisaliah, Riyadh.",
        read: "Event",
        href: "https://al-shathry-portfolio-blogs.vercel.app/industry-news/alshathry-ice-riyadh-2025.html",
      },
    ],
  },
];

function BlogsPage() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground bg-noise">
      <header className="sticky top-0 z-50 backdrop-blur-md bg-background/70 border-b border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between gap-4">
          <Link to="/" className="flex items-center gap-3">
            <span className="h-8 w-8 rounded-sm border-hairline flex items-center justify-center font-display text-gold text-lg">
              A
            </span>
            <span className="font-display text-lg tracking-wide">Al-Shathry</span>
          </Link>
          <nav className="hidden md:flex items-center gap-9 text-sm text-muted-foreground">
            <Link to="/" hash="about" className="hover:text-gold transition-colors">
              Profile
            </Link>
            <Link to="/" hash="career" className="hover:text-gold transition-colors">
              Career
            </Link>
            <Link to="/" hash="investments" className="hover:text-gold transition-colors">
              Investments
            </Link>
            <Link to="/blogs" className="text-gold">
              Insights
            </Link>
            <Link to="/" hash="contact" className="hover:text-gold transition-colors">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-2">
            <Link
              to="/"
              className="hidden md:inline-flex items-center gap-2 text-sm px-4 py-2 rounded-full border-hairline text-gold hover:bg-gold hover:text-primary-foreground transition-all"
            >
              <span aria-hidden>←</span> Back to profile
            </Link>
            <button
              type="button"
              onClick={() => setMobileOpen((open) => !open)}
              aria-expanded={mobileOpen}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:border-gold hover:text-gold md:hidden"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-5 w-5">
                {mobileOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        <div
          className={`${mobileOpen ? "block" : "hidden"} md:hidden border-t border-border bg-background/95 backdrop-blur-sm`}
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-10 py-4 space-y-3 text-sm text-foreground">
            <Link
              to="/"
              hash="about"
              onClick={() => setMobileOpen(false)}
              className="block rounded-xl px-4 py-3 hover:bg-gold/10 transition-colors"
            >
              Profile
            </Link>
            <Link
              to="/"
              hash="career"
              onClick={() => setMobileOpen(false)}
              className="block rounded-xl px-4 py-3 hover:bg-gold/10 transition-colors"
            >
              Career
            </Link>
            <Link
              to="/"
              hash="investments"
              onClick={() => setMobileOpen(false)}
              className="block rounded-xl px-4 py-3 hover:bg-gold/10 transition-colors"
            >
              Investments
            </Link>
            <Link
              to="/blogs"
              onClick={() => setMobileOpen(false)}
              className="block rounded-xl px-4 py-3 hover:bg-gold/10 transition-colors"
            >
              Insights
            </Link>
            <Link
              to="/"
              hash="contact"
              onClick={() => setMobileOpen(false)}
              className="block rounded-xl px-4 py-3 hover:bg-gold/10 transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden border-b border-border">
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(60% 60% at 20% 20%, color-mix(in oklab, var(--gold) 10%, transparent) 0%, transparent 60%), radial-gradient(50% 50% at 80% 80%, color-mix(in oklab, var(--gold) 6%, transparent) 0%, transparent 60%)",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-10 pt-24 pb-20 text-center">
          <div className="inline-flex items-center gap-3 text-xs tracking-[0.3em] uppercase text-gold mb-8">
            <span className="h-px w-10 bg-gold/60" />
            Journal · Essays & Perspectives
            <span className="h-px w-10 bg-gold/60" />
          </div>
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl leading-[1.02] tracking-tight">
            Insights &amp; <span className="italic text-gradient-gold">Perspectives</span>
          </h1>
          <p className="mt-8 max-w-2xl mx-auto text-lg text-muted-foreground leading-relaxed">
            Essays on leadership, digital transformation, AI, smart infrastructure, and sustainable
            growth — drawn from four decades of building enterprises in the Kingdom and abroad.
          </p>
        </div>
      </section>

      {sections.map((section, si) => (
        <section
          key={section.title}
          className={`py-24 lg:py-28 ${si > 0 ? "border-t border-border" : ""}`}
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="flex items-end justify-between gap-6 mb-14">
              <div>
                <p className="text-xs tracking-[0.3em] uppercase text-gold">
                  0{si + 1} · Collection
                </p>
                <h2 className="mt-6 font-display text-4xl lg:text-5xl leading-tight">
                  {section.title}
                </h2>
              </div>
              <div className="hidden md:block h-px flex-1 bg-border ml-10" />
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {section.posts.map((p) => (
                <a
                  key={p.href}
                  href={p.href}
                  onClick={(e) => {
                    e.preventDefault();
                    const targetUrl = p.href.startsWith("http") ? p.href : `${p.href}`;
                    window.open(targetUrl, "_blank", "noopener,noreferrer");
                  }}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex flex-col overflow-hidden rounded-xl border-hairline bg-card p-8 hover:border-gold/50 transition-all duration-500"
                >
                  <span className="text-[10px] tracking-[0.25em] uppercase text-gold mb-6">
                    {p.tag}
                  </span>
                  <h3 className="font-display text-2xl leading-snug mb-4 group-hover:text-gradient-gold transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-8">{p.excerpt}</p>
                  <div className="mt-auto flex items-center justify-between pt-6 border-t border-border">
                    <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                      {p.read}
                    </span>
                    <span className="text-sm text-gold group-hover:translate-x-1 transition-transform">
                      Read →
                    </span>
                  </div>
                  <div
                    className="absolute inset-x-0 bottom-0 h-px opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{
                      background: "linear-gradient(90deg, transparent, var(--gold), transparent)",
                    }}
                    aria-hidden
                  />
                </a>
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="border-t border-border py-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-xs tracking-[0.3em] uppercase text-gold">Continue</p>
          <h2 className="mt-6 font-display text-4xl lg:text-5xl leading-tight">
            Return to the <span className="italic text-gradient-gold">profile</span>.
          </h2>
          <div className="mt-10">
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gold text-primary-foreground font-medium hover:bg-gold-soft transition-colors"
            >
              ← Executive Profile
            </Link>
          </div>
        </div>
      </section>

      <footer className="border-t border-border py-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p className="font-display tracking-wide">
            © {new Date().getFullYear()} Abdulrahman Al-Shathry
          </p>
          <p className="tracking-[0.25em] uppercase text-xs text-gold">
            Vision · Discipline · Legacy
          </p>
        </div>
      </footer>
    </div>
  );
}
