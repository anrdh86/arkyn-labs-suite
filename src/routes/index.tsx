import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Plus } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Arkyn Labs — A studio for precise software" },
      {
        name: "description",
        content:
          "Arkyn Labs is an independent studio building Reelcast Studio and Config-Engine — focused tools for creators and game developers.",
      },
      { property: "og:title", content: "Arkyn Labs — A studio for precise software" },
      {
        property: "og:description",
        content:
          "Independent studio. Two products: Reelcast Studio turns URLs and screenshots into motion graphics. Config-Engine tests games across cloud configurations.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Landing,
});

function MonoLabel({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <span className={`font-mono-label text-ink/60 ${className}`}>{children}</span>;
}

function SectionHeader({
  index,
  kicker,
  title,
}: {
  index: string;
  kicker: string;
  title: string;
}) {
  return (
    <div className="grid grid-cols-12 gap-6 border-t border-rule pt-6">
      <div className="col-span-12 md:col-span-3 flex items-start gap-4">
        <MonoLabel>{index}</MonoLabel>
        <MonoLabel>{kicker}</MonoLabel>
      </div>
      <h2 className="display col-span-12 md:col-span-9 text-[clamp(2rem,5vw,4.5rem)]">
        {title}
      </h2>
    </div>
  );
}

function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-rule bg-paper/85 backdrop-blur">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-4 md:px-10">
        <a href="#top" className="flex items-center gap-3">
          <div className="grid h-7 w-7 place-items-center bg-ink text-paper">
            <span className="font-mono text-[13px] font-semibold">A</span>
          </div>
          <span className="font-mono-label text-ink">Arkyn Labs</span>
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          <a href="#products" className="font-mono-label hover:text-signal">01 / Products</a>
          <a href="#manifesto" className="font-mono-label hover:text-signal">02 / Manifesto</a>
          <a href="#approach" className="font-mono-label hover:text-signal">03 / Approach</a>
          <a href="#contact" className="font-mono-label hover:text-signal">04 / Contact</a>
        </nav>
        <a
          href="#contact"
          className="group inline-flex items-center gap-2 border border-ink bg-ink px-4 py-2 text-paper transition-colors hover:bg-signal hover:border-signal"
        >
          <span className="font-mono-label !text-paper">Get in touch</span>
          <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2.5} />
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative border-b border-rule">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        {/* meta strip */}
        <div className="grid grid-cols-12 gap-6 border-b border-rule py-4">
          <MonoLabel className="col-span-6 md:col-span-3">Stockholm · Remote</MonoLabel>
          <MonoLabel className="col-span-6 md:col-span-3">Est. 2025</MonoLabel>
          <MonoLabel className="col-span-6 md:col-span-3">Independent Studio</MonoLabel>
          <MonoLabel className="col-span-6 md:col-span-3 md:text-right">
            <span className="mr-2 inline-block h-1.5 w-1.5 translate-y-[-2px] bg-signal" />
            Currently shipping
          </MonoLabel>
        </div>

        {/* headline */}
        <div className="grid grid-cols-12 gap-6 py-16 md:py-28">
          <div className="col-span-12 md:col-span-2">
            <MonoLabel>00 / Index</MonoLabel>
          </div>
          <div className="col-span-12 md:col-span-10">
            <h1 className="display text-[clamp(2.75rem,9vw,9rem)]">
              A studio for<br />
              <span className="relative inline-block">
                precise
                <span className="absolute -right-3 top-2 h-3 w-3 bg-signal md:-right-5 md:top-4 md:h-4 md:w-4" />
              </span>{" "}
              software.
            </h1>
            <div className="mt-10 grid grid-cols-12 gap-6">
              <p className="col-span-12 max-w-2xl text-lg leading-relaxed text-ink/75 md:col-span-7 md:text-xl">
                Arkyn Labs is an independent studio founded by Anirudh Singh
                Rathore. We design and ship focused tools for the people who
                make the internet — creators, engineers, and game developers.
              </p>
              <div className="col-span-12 flex flex-col gap-3 md:col-span-5 md:items-end md:justify-end">
                <MonoLabel>Two products. One standard.</MonoLabel>
                <div className="flex items-center gap-3">
                  <a
                    href="#products"
                    className="inline-flex items-center gap-2 border border-ink bg-ink px-5 py-3 text-paper transition-colors hover:bg-signal hover:border-signal"
                  >
                    <span className="font-mono-label !text-paper">View products</span>
                    <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2.5} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* corner crosses (Swiss grid markers) */}
      <Plus className="absolute left-6 top-[58%] hidden h-3 w-3 text-ink/30 md:block" strokeWidth={1.5} />
      <Plus className="absolute right-6 top-[58%] hidden h-3 w-3 text-ink/30 md:block" strokeWidth={1.5} />
    </section>
  );
}

function Marquee() {
  const items = [
    "Motion Graphics",
    "Cloud Testing",
    "Developer Tools",
    "AI Powered",
    "Made by Arkyn",
    "Stockholm",
  ];
  const loop = [...items, ...items, ...items, ...items];
  return (
    <div className="overflow-hidden border-b border-rule bg-ink py-5 text-paper">
      <div className="flex w-max animate-marquee gap-12 whitespace-nowrap">
        {loop.map((t, i) => (
          <div key={i} className="flex items-center gap-12">
            <span className="font-mono text-sm tracking-widest">{t}</span>
            <Plus className="h-3 w-3" strokeWidth={1.5} />
          </div>
        ))}
      </div>
    </div>
  );
}

type Product = {
  num: string;
  name: string;
  domain: string;
  status: string;
  statusTone: "live" | "soon";
  tagline: string;
  description: string;
  bullets: string[];
  href: string;
  cta: string;
};

const products: Product[] = [
  {
    num: "P/01",
    name: "Reelcast Studio",
    domain: "reelcast.studio",
    status: "Live",
    statusTone: "live",
    tagline: "URLs and screenshots,\nturned into motion.",
    description:
      "Drop a link or an image. Reelcast composes broadcast-quality motion graphics videos in minutes — no timeline, no editor, no friction.",
    bullets: [
      "AI-directed scene composition",
      "Brand-aware typography & color",
      "Export-ready 1080p / 4K",
      "Built for marketers & founders",
    ],
    href: "https://reelcast-studio.vercel.app/",
    cta: "Open Reelcast",
  },
  {
    num: "P/02",
    name: "Config-Engine",
    domain: "config-engine",
    status: "In development",
    statusTone: "soon",
    tagline: "Test your game across\nevery configuration.",
    description:
      "An AI-powered cloud lab for game developers. Spin up matrices of devices, drivers, and specs — find the regression before your players do.",
    bullets: [
      "Cloud-based hardware matrices",
      "Automated stress & perf runs",
      "AI failure triage",
      "Made for indie & mid-core teams",
    ],
    href: "#contact",
    cta: "Join the waitlist",
  },
];

function Products() {
  return (
    <section id="products" className="border-b border-rule">
      <div className="mx-auto max-w-[1400px] px-6 py-20 md:px-10 md:py-28">
        <SectionHeader index="01 / Products" kicker="What we ship" title="Two tools. Built with intent." />

        <div className="mt-16 flex flex-col gap-px bg-rule">
          {products.map((p) => (
            <article key={p.num} className="bg-paper">
              <div className="grid grid-cols-12 gap-6 py-10 md:py-14">
                {/* left meta */}
                <div className="col-span-12 flex flex-col gap-3 md:col-span-3">
                  <MonoLabel>{p.num}</MonoLabel>
                  <div className="flex items-center gap-2">
                    <span
                      className={`h-1.5 w-1.5 ${p.statusTone === "live" ? "bg-signal" : "bg-ink/40"}`}
                    />
                    <MonoLabel>{p.status}</MonoLabel>
                  </div>
                  <MonoLabel className="!text-ink/40">{p.domain}</MonoLabel>
                </div>

                {/* center headline */}
                <div className="col-span-12 md:col-span-6">
                  <h3 className="display whitespace-pre-line text-[clamp(1.75rem,4vw,3.25rem)]">
                    {p.tagline}
                  </h3>
                  <p className="mt-6 max-w-xl text-base leading-relaxed text-ink/70 md:text-lg">
                    {p.description}
                  </p>
                  <a
                    href={p.href}
                    target={p.href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                    className="mt-8 inline-flex items-center gap-2 border-b-2 border-ink pb-1 transition-colors hover:border-signal hover:text-signal"
                  >
                    <span className="font-mono-label">{p.cta}</span>
                    <ArrowUpRight className="h-4 w-4" strokeWidth={2.5} />
                  </a>
                </div>

                {/* right bullets */}
                <ul className="col-span-12 flex flex-col gap-3 md:col-span-3">
                  {p.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-3 border-t border-rule pt-3">
                      <Plus className="mt-1 h-3 w-3 text-signal" strokeWidth={2.5} />
                      <span className="text-sm text-ink/80">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Manifesto() {
  return (
    <section id="manifesto" className="border-b border-rule bg-ink text-paper">
      <div className="mx-auto max-w-[1400px] px-6 py-20 md:px-10 md:py-28">
        <div className="grid grid-cols-12 gap-6 border-t border-paper/15 pt-6">
          <div className="col-span-12 flex items-start gap-4 md:col-span-3">
            <span className="font-mono-label !text-paper/60">02 / Manifesto</span>
            <span className="font-mono-label !text-paper/60">From the founder</span>
          </div>
          <h2 className="display col-span-12 text-[clamp(2rem,5vw,4.5rem)] md:col-span-9">
            Software should feel like<br />a sharpened tool.
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-3">
            <MonoLabel className="!text-paper/50">Signed</MonoLabel>
            <p className="mt-2 font-mono text-sm text-paper">Anirudh Singh Rathore</p>
            <p className="mt-1 font-mono text-xs text-paper/50">Founder, Arkyn Labs</p>
          </div>
          <div className="col-span-12 space-y-6 text-lg leading-relaxed text-paper/80 md:col-span-7 md:text-xl">
            <p>
              Most software today is loud. It interrupts, it sprawls, it asks
              for your attention before earning it. We started Arkyn Labs to
              build the opposite — quiet tools that do one thing exceptionally
              well and then get out of the way.
            </p>
            <p>
              Reelcast and Config-Engine come from the same belief: creators
              and developers deserve interfaces that respect their craft. We
              ship slowly, in small teams, with care for every pixel and every
              millisecond.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

const steps = [
  { n: "01", t: "Listen", d: "We embed with the people who'll actually use the tool. Real workflows over invented ones." },
  { n: "02", t: "Reduce", d: "We strip away features until only the essential remains. Constraints sharpen the product." },
  { n: "03", t: "Compose", d: "We design with type, grid, and motion as first-class primitives — not decoration." },
  { n: "04", t: "Ship", d: "We release small, often, and own the outcome. No theater, just working software." },
];

function Approach() {
  return (
    <section id="approach" className="border-b border-rule">
      <div className="mx-auto max-w-[1400px] px-6 py-20 md:px-10 md:py-28">
        <SectionHeader index="03 / Approach" kicker="How we work" title="Four steps. No theatrics." />
        <div className="mt-16 grid grid-cols-1 gap-px bg-rule md:grid-cols-4">
          {steps.map((s) => (
            <div key={s.n} className="bg-paper p-8 md:p-10">
              <div className="flex items-center justify-between">
                <span className="font-mono-label">{s.n}</span>
                <Plus className="h-3 w-3 text-signal" strokeWidth={2.5} />
              </div>
              <h3 className="mt-12 text-3xl font-semibold tracking-tight">{s.t}</h3>
              <p className="mt-4 text-sm leading-relaxed text-ink/70">{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="border-b border-rule">
      <div className="mx-auto max-w-[1400px] px-6 py-20 md:px-10 md:py-28">
        <SectionHeader index="04 / Contact" kicker="Say hello" title="Let's build something precise." />
        <div className="mt-16 grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-7">
            <a
              href="mailto:hello@arkynlabs.com"
              className="group block"
            >
              <span className="display block text-[clamp(2rem,7vw,6rem)] transition-colors group-hover:text-signal">
                hello@arkynlabs.com
                <ArrowUpRight className="ml-2 inline h-8 w-8 align-top md:h-12 md:w-12" strokeWidth={2} />
              </span>
            </a>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-ink/70">
              Partnerships, press, or product feedback — write directly. We
              read every email and reply within two business days.
            </p>
          </div>
          <div className="col-span-12 grid grid-cols-2 gap-px self-start bg-rule md:col-span-5">
            {[
              { k: "Founder", v: "Anirudh Singh Rathore" },
              { k: "Studio", v: "Arkyn Labs" },
              { k: "Reelcast", v: "reelcast.studio" },
              { k: "Config-Engine", v: "Coming 2026" },
              { k: "Twitter / X", v: "@arkynlabs" },
              { k: "GitHub", v: "/arkynlabs" },
            ].map((row) => (
              <div key={row.k} className="bg-paper p-5">
                <MonoLabel>{row.k}</MonoLabel>
                <p className="mt-2 font-mono text-sm text-ink">{row.v}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-paper">
      <div className="mx-auto max-w-[1400px] px-6 py-10 md:px-10">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 flex items-center gap-3 md:col-span-4">
            <div className="grid h-6 w-6 place-items-center bg-ink text-paper">
              <span className="font-mono text-xs font-semibold">A</span>
            </div>
            <MonoLabel>© 2025 Arkyn Labs</MonoLabel>
          </div>
          <MonoLabel className="col-span-6 md:col-span-4 md:text-center">
            Designed in the open.
          </MonoLabel>
          <MonoLabel className="col-span-6 md:col-span-4 md:text-right">
            v1.0 — Hello, world.
          </MonoLabel>
        </div>
      </div>
    </footer>
  );
}

function Landing() {
  return (
    <main className="min-h-screen bg-paper text-ink">
      <Nav />
      <Hero />
      <Marquee />
      <Products />
      <Manifesto />
      <Approach />
      <Contact />
      <Footer />
    </main>
  );
}
