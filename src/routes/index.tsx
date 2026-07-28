import { createFileRoute, Link } from "@tanstack/react-router";
import heroPortrait from "@/assets/hero-portrait.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Abdulrahman Al-Shathry — Chairman, CEO, Entrepreneur & Investor" },
      {
        name: "description",
        content:
          "Executive profile of Abdulrahman Al-Shathry — Chairman & CEO of Saudi Controls Ltd., founder of The Al-Shathry Group, with 40+ years of leadership in engineering, technology, and international investment.",
      },
      {
        property: "og:title",
        content: "Abdulrahman Al-Shathry — Chairman, CEO, Entrepreneur & Investor",
      },
      {
        property: "og:description",
        content:
          "Executive profile of Abdulrahman Al-Shathry — Chairman & CEO of Saudi Controls Ltd., founder of The Al-Shathry Group, with 40+ years of leadership in engineering, technology, and international investment.",
      },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const pillars = [
  { k: "40+", v: "Years of executive leadership" },
  { k: "300+", v: "Projects delivered by Saudi Controls" },
  { k: "100+", v: "Engineers under leadership" },
  { k: "1997", v: "Saudi Controls Ltd. founded" },
];

const careerHighlights = [
  {
    year: "1997 — Present",
    title: "Chairman & CEO, Saudi Controls Ltd.",
    detail:
      "Built the company into one of the Kingdom's leading automation and control firms — 100+ engineers, 300+ completed projects across mission-critical infrastructure.",
  },
  {
    year: "Founder",
    title: "The Al-Shathry Group of Companies",
    detail:
      "Established and led multiple firms spanning engineering, construction, satellite communications, technology, and design services — a multidisciplinary enterprise built through disciplined expansion.",
  },
  {
    year: "Merger & Divestiture",
    title: "Al-Shathry Consulting Engineers → A&O",
    detail:
      "Merged Al-Shathry Consulting Engineers with Omrania to form A&O, scaling to 300+ professionals, later divested to Kingdom Holdings (HRH Prince Al-Waleed bin Talal).",
  },
  {
    year: "2000 — 2015",
    title: "Founder & Major Shareholder, Datastar International",
    detail:
      "Specialized in satellite data communication and remote asset management. USD 12M capitalization with a 35% personal stake.",
  },
];

const investments = [
  {
    group: "Food & Lifestyle",
    items: ["L'Olivo (Deli Group)", "Refinery (Men's Grooming)", "This Works (Skincare)"],
  },
  {
    group: "Technology & Sustainability",
    items: ["Connected Kerb (EV Charging Infrastructure)", "Algebra (Islamic Finance Technology)"],
  },
  {
    group: "Mining & Industry",
    items: ["Searchlight Minerals Corp (Metal Recovery)"],
  },
  {
    group: "Design & Retail",
    items: ["Nour Lighting", "House of Lights", "Baby Gift Company (London)"],
  },
];

const boardMemberships = [
  "Member — Children with Disability Association (CWDA)",
  "Member — CAFS · Council of Arab and Foreign Societies",
  "KIP Thales Network",
];

const expertise = [
  "Leadership in Engineering, Construction, and Technology",
  "Cross-border Strategic Investments & M&A",
  "Multidisciplinary Business Development",
  "Client-Centric, Sustainable Growth",
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground bg-noise">
      <Nav />
      <Hero />
      <Marquee />
      <About />
      <Career />
      <Investments />
      <Boards />
      <Contact />
      <Footer />
    </div>
  );
}

function Nav() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-background/70 border-b border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3">
          <span className="h-8 w-8 rounded-sm border-hairline flex items-center justify-center font-display text-gold text-lg">
            A
          </span>
          <span className="font-display text-lg tracking-wide">Al-Shathry</span>
        </a>
        <nav className="hidden md:flex items-center gap-9 text-sm text-muted-foreground">
          <a href="#about" className="hover:text-gold transition-colors">
            Profile
          </a>
          <a href="#career" className="hover:text-gold transition-colors">
            Career
          </a>
          <a href="#investments" className="hover:text-gold transition-colors">
            Investments
          </a>
          <a href="#boards" className="hover:text-gold transition-colors">
            Boards
          </a>
          <Link to="/blogs" className="hover:text-gold transition-colors">
            Insights
          </Link>
          <a href="#contact" className="hover:text-gold transition-colors">
            Contact
          </a>
        </nav>
        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-2 text-sm px-4 py-2 rounded-full border-hairline text-gold hover:bg-gold hover:text-primary-foreground transition-all"
        >
          Get in touch <span aria-hidden>→</span>
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(60% 60% at 20% 20%, color-mix(in oklab, var(--gold) 10%, transparent) 0%, transparent 60%), radial-gradient(50% 50% at 80% 80%, color-mix(in oklab, var(--gold) 6%, transparent) 0%, transparent 60%)",
        }}
      />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 pt-20 lg:pt-28 pb-24 lg:pb-32 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7">
          <div className="flex items-center gap-3 text-xs tracking-[0.3em] uppercase text-gold mb-8">
            <span className="h-px w-10 bg-gold/60" />
            Executive Profile · Riyadh
          </div>
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl leading-[1.02] tracking-tight">
            Abdulrahman
            <br />
            <span className="text-gradient-gold italic">Al-Shathry</span>
            {/* <span className="font-sans text-xl align-top text-muted-foreground ml-3">B.Sc.</span> */}
          </h1>
          <p className="mt-6 text-sm tracking-[0.25em] uppercase text-muted-foreground">
            Chairman &amp; Chief Executive Officer · Entrepreneur · Investor
          </p>
          <p className="mt-8 max-w-xl text-lg text-muted-foreground leading-relaxed">
            Visionary Saudi business leader with over four decades of experience in engineering,
            construction, technology, and international investment — recognized for founding,
            expanding, and restructuring organizations into multidisciplinary enterprises.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#career"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gold text-primary-foreground font-medium hover:bg-gold-soft transition-colors"
            >
              View Career Highlights
            </a>
            <a
              href="#about"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-hairline text-foreground hover:border-gold/60 transition-colors"
            >
              Executive Profile
            </a>
          </div>

          <dl className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-2xl">
            {pillars.map((p) => (
              <div key={p.v}>
                <dt className="font-display text-3xl text-gold">{p.k}</dt>
                <dd className="mt-1 text-xs text-muted-foreground leading-snug">{p.v}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="lg:col-span-5">
          <div className="relative">
            <div
              className="absolute -inset-4 rounded-2xl bg-gradient-to-br from-gold/20 via-transparent to-gold/10 blur-2xl"
              aria-hidden
            />
            <div className="relative rounded-xl overflow-hidden border-hairline shadow-2xl">
              <img
                src={heroPortrait}
                alt="Editorial portrait of Abdulrahman Al-Shathry"
                width={1280}
                height={1600}
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden sm:block bg-card border-hairline rounded-lg px-5 py-4 shadow-xl">
              <p className="text-xs uppercase tracking-[0.25em] text-gold">Est. 1997</p>
              <p className="mt-1 font-display text-lg">Building enterprises of consequence.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  const items = [
    "Engineering",
    "Construction",
    "Automation & Controls",
    "Technology",
    "Satellite Communications",
    "Cross-border Investment",
  ];
  return (
    <div className="border-y border-border py-6 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-wrap justify-center gap-x-10 gap-y-3 items-center text-sm text-muted-foreground">
        {items.map((i, idx) => (
          <span key={i} className="flex items-center gap-6">
            <span className="tracking-[0.2em] uppercase text-xs">{i}</span>
            {idx < items.length - 1 && <span className="text-gold/50">◆</span>}
          </span>
        ))}
      </div>
    </div>
  );
}

function About() {
  return (
    <section id="about" className="relative py-28 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-16">
        <div className="lg:col-span-4">
          <p className="text-xs tracking-[0.3em] uppercase text-gold">01 · Profile</p>
          <h2 className="mt-6 font-display text-4xl lg:text-5xl leading-tight">
            A life in <span className="italic text-gradient-gold">enterprise</span>.
          </h2>
          <div className="mt-10 space-y-6">
            <FactRow label="Date of Birth" value="22 January 1958" />
            <FactRow label="Nationality" value="Saudi" />
            <FactRow
              label="Education"
              value="B.Sc. Civil Engineering — University of Southern California, USA"
            />
            <FactRow label="Secondary" value="Choueifat, Lebanon" />
          </div>
        </div>

        <div className="lg:col-span-8 space-y-6 text-lg leading-relaxed text-muted-foreground">
          <p>
            For more than forty years, Abdulrahman Al-Shathry has stood at the intersection of
            engineering discipline and executive vision — founding, scaling, and restructuring
            enterprises that helped define Saudi Arabia's modern industrial and technological
            landscape.
          </p>
          <p>
            His career spans engineering and construction, automation and controls, satellite
            communications, and a portfolio of international investments across food, lifestyle,
            sustainable technology, mining, and design. The through-line is consistent: disciplined
            capital, multidisciplinary thinking, and enterprises built to endure.
          </p>
          <div className="rule-gold my-10" />
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-gold mb-4">Core Expertise</p>
            <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-3">
              {expertise.map((e) => (
                <li key={e} className="flex items-start gap-3 text-foreground/90">
                  <span className="text-gold mt-2">◆</span>
                  <span>{e}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function FactRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="pb-4 border-b border-border">
      <p className="text-xs tracking-[0.25em] uppercase text-gold mb-1">{label}</p>
      <p className="text-foreground">{value}</p>
    </div>
  );
}

function Career() {
  return (
    <section id="career" className="relative py-28 lg:py-36 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-gold">02 · Career Highlights</p>
            <h2 className="mt-6 font-display text-4xl lg:text-5xl leading-tight">
              Four decades of <span className="italic text-gradient-gold">building</span>.
            </h2>
          </div>
          <p className="max-w-md text-muted-foreground">
            From founding Saudi Controls to shaping cross-continental partnerships — a record
            measured in enterprises created, scaled, and stewarded.
          </p>
        </div>

        <div className="relative">
          <div
            className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2"
            aria-hidden
          />
          <div className="space-y-12">
            {careerHighlights.map((c, i) => (
              <div
                key={c.title}
                className={`relative md:grid md:grid-cols-2 md:gap-16 ${
                  i % 2 === 1 ? "md:[&>*:first-child]:col-start-2" : ""
                }`}
              >
                <article className="relative pl-8 md:pl-0 md:pr-10">
                  <span
                    className="absolute left-0 md:left-auto md:right-[-45px] top-2 h-3 w-3 rounded-full bg-gold ring-4 ring-background md:right-auto md:left-1/2"
                    style={{ left: "-4px" }}
                    aria-hidden
                  />
                  <p className="text-xs tracking-[0.25em] uppercase text-gold mb-3">{c.year}</p>
                  <h3 className="font-display text-2xl lg:text-3xl mb-3">{c.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{c.detail}</p>
                </article>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Investments() {
  return (
    <section id="investments" className="relative py-28 lg:py-36 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-gold">03 · Business Interests</p>
            <h2 className="mt-6 font-display text-4xl lg:text-5xl leading-tight">
              A portfolio of <span className="italic text-gradient-gold">conviction</span>.
            </h2>
          </div>
          <p className="max-w-md text-muted-foreground">
            Selected investments spanning food, technology, sustainability, mining, and design —
            each chosen for durable value and category leadership.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {investments.map((g, i) => (
            <article
              key={g.group}
              className="group relative overflow-hidden rounded-xl border-hairline bg-card p-8 lg:p-10 hover:border-gold/50 transition-all duration-500"
            >
              <div className="flex items-start justify-between mb-8">
                <span className="font-display text-5xl text-gold/30 group-hover:text-gold/60 transition-colors">
                  0{i + 1}
                </span>
                <span className="text-xs tracking-[0.25em] text-muted-foreground">SECTOR</span>
              </div>
              <h3 className="font-display text-2xl lg:text-3xl mb-5">{g.group}</h3>
              <ul className="space-y-2">
                {g.items.map((it) => (
                  <li key={it} className="flex items-start gap-3 text-foreground/85">
                    <span className="text-gold mt-2 text-xs">◆</span>
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
              <div
                className="absolute inset-x-0 bottom-0 h-px opacity-0 group-hover:opacity-100 transition-opacity"
                style={{
                  background: "linear-gradient(90deg, transparent, var(--gold), transparent)",
                }}
                aria-hidden
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Boards() {
  return (
    <section id="boards" className="relative py-28 lg:py-36 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-16">
        <div className="lg:col-span-5">
          <p className="text-xs tracking-[0.3em] uppercase text-gold">04 · Boards & Affiliations</p>
          <h2 className="mt-6 font-display text-4xl lg:text-5xl leading-tight">
            Service
            <br />
            <span className="italic text-gradient-gold">& stewardship</span>.
          </h2>
          <p className="mt-8 text-muted-foreground max-w-md">
            Beyond enterprise, a continuing commitment to institutions that advance civic, cultural,
            and technological progress.
          </p>
        </div>
        <ul className="lg:col-span-7 space-y-6">
          {boardMemberships.map((a, i) => (
            <li key={a} className="flex gap-6 pb-6 border-b border-border last:border-0 last:pb-0">
              <span className="font-display text-2xl text-gold shrink-0 w-10">0{i + 1}</span>
              <p className="text-lg text-foreground/90 leading-relaxed">{a}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="relative py-28 lg:py-36 border-t border-border">
      <div className="max-w-4xl mx-auto px-6 lg:px-10 text-center">
        <p className="text-xs tracking-[0.3em] uppercase text-gold">05 · Contact</p>
        <h2 className="mt-6 font-display text-5xl lg:text-6xl leading-tight">
          Begin a <span className="italic text-gradient-gold">conversation</span>.
        </h2>
        <p className="mt-8 text-lg text-muted-foreground max-w-xl mx-auto">
          For board appointments, partnerships, investment introductions, or press inquiries —
          correspondence is welcomed from Riyadh and abroad.
        </p>
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="mailto:info@alshathryce.com"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gold text-primary-foreground font-medium hover:bg-gold-soft transition-colors"
          >
            info@alshathryce.com
          </a>
          <a
            href="https://www.linkedin.com/in/abdulrahman-a-z-alshathry-66990484/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full border-hairline hover:border-gold/60 transition-colors"
          >
            LinkedIn →
          </a>
        </div>
        <p className="mt-16 text-sm text-muted-foreground">
          5682 Makkah Al Mukarramah Br Rd, Umm Al Hamam Al Sharqi · Riyadh 12321 · Saudi Arabia
        </p>
      </div>
    </section>
  );
}

function Footer() {
  return (
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
  );
}
