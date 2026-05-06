import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Plus } from "lucide-react";

export const Route = createFileRoute("/")(({
  head: () => ({
    meta: [
      { title: "Arkyn Labs — A studio for precise software" },
    ],
  }),
  component: Landing,
}) as any);

// ── TRIANGULAR LOGO MARK ─────────────────────────────────────────────────────
function ArkynMark({ size = 28 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Arkyn Labs"
    >
      {/* Black outer triangle */}
      <polygon points="14,3 27,25 1,25" fill="currentColor" />
      {/* Cutout inner triangle in paper colour */}
      <polygon points="14,9 22.2,23 5.8,23" fill="var(--paper, #FAFAF8)" />
      {/* Horizontal cross-bar */}
      <line x1="9.2" y1="19" x2="18.8" y2="19" stroke="currentColor" strokeWidth="2.4" />
    </svg>
  );
}

function MonoLabel({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <span className={`font-mono-label text-ink/60 ${className}`}>{children}</span>;
}

function SectionHeader({ index, kicker, title }: { index: string; kicker: string; title: string }) {
  return (
    <div className="grid grid-cols-12 gap-6 border-t border-rule pt-6">
      <div className="col-span-12 md:col-span-3 flex items-start gap-4">
        <MonoLabel>{index}</MonoLabel>
        <MonoLabel>{kicker}</MonoLabel>
      </div>
      <h2 className="display col-span-12 md:col-span-9 text-[clamp(2rem,5vw,4.5rem)]">{title}</h2>
    </div>
  );
}

// ── NAV ──────────────────────────────────────────────────────────────────────
function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-rule bg-paper/85 backdrop-blur">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-4 md:px-10">
        <a href="#top" className="flex items-center gap-3 text-ink hover:text-signal transition-colors">
          <ArkynMark size={28} />
          <span className="font-mono-label text-ink">Arkyn Labs</span>
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          <a href="#products" className="font-mono-label hover:text-signal">01 / Products</a>
          <a href="#manifesto" className="font-mono-label hover:text-signal">02 / Manifesto</a>
          <a href="#approach" className="font-mono-label hover:text-signal">03 / Approach</a>
          <a href="#contact" className="font-mono-label hover:text-signal">04 / Contact</a>
        </nav>
        <a
          href="mailto:anrdh86@gmail.com"
          className="group inline-flex items-center gap-2 border border-ink bg-ink px-4 py-2 text-paper transition-colors hover:bg-signal hover:border-signal"
        >
          <span className="font-mono-label !text-paper">Get in touch</span>
          <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2.5} />
        </a>
      </div>
    </header>
  );
}

// ── HERO ─────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section id="top" className="relative border-b border-rule">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="grid grid-cols-12 gap-6 border-b border-rule py-4">
          <MonoLabel className="col-span-6 md:col-span-3">India · Remote</MonoLabel>
          <MonoLabel className="col-span-6 md:col-span-3">Est. 2025</MonoLabel>
          <MonoLabel className="col-span-6 md:col-span-3">Independent Studio</MonoLabel>
          <MonoLabel className="col-span-6 md:col-span-3 md:text-right">
            <span className="mr-2 inline-block h-1.5 w-1.5 translate-y-[-2px] bg-signal" />
            Currently shipping
          </MonoLabel>
        </div>
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
                Arkyn Labs is an independent studio founded by Anirudh Singh Rathore. We design and ship focused tools for the people who make the internet — creators, engineers, and game developers.
              </p>
              <div className="col-span-12 flex flex-col gap-3 md:col-span-5 md:items-end md:justify-end">
                <MonoLabel>Two products. One standard.</MonoLabel>
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
      <Plus className="absolute left-6 top-[58%] hidden h-3 w-3 text-ink/30 md:block" strokeWidth={1.5} />
      <Plus className="absolute right-6 top-[58%] hidden h-3 w-3 text-ink/30 md:block" strokeWidth={1.5} />
    </section>
  );
}

// ── MARQUEE ───────────────────────────────────────────────────────────────────
function Marquee() {
  const items = ["Motion Graphics", "Cloud Testing", "Developer Tools", "AI Powered", "Made by Arkyn", "Anirudh Singh Rathore"];
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

// ── REELCAST CARD ─────────────────────────────────────────────────────────────
// Styled to match reelcast-studio.vercel.app exactly:
// off-white bg, lime green accent dot + italic headline, pill badge, dark CTA
function ReelcastCard() {
  return (
    <article style={{ background: "#F5F5F0" }} className="border-b border-rule overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* LEFT — identity + CTA */}
        <div
          className="flex flex-col justify-between p-10 md:p-14"
          style={{ borderRight: "1px solid rgba(0,0,0,0.08)" }}
        >
          <div>
            {/* Live badge */}
            <div
              style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                borderRadius: 100, border: "1px solid rgba(0,0,0,0.1)",
                padding: "7px 16px", marginBottom: 36,
              }}
            >
              <span
                style={{
                  width: 7, height: 7, borderRadius: "50%",
                  background: "#AAFF00", boxShadow: "0 0 7px #AAFF00",
                  display: "inline-block", flexShrink: 0,
                  animation: "rcpulse 2s ease-in-out infinite",
                }}
              />
              <span className="font-mono-label" style={{ color: "#666" }}>Live — P/01</span>
            </div>

            {/* Name */}
            <h3
              className="display"
              style={{
                fontSize: "clamp(2.2rem,4.5vw,3.8rem)",
                lineHeight: 0.93, letterSpacing: "-0.04em",
                color: "#0A0A0A", marginBottom: 10,
              }}
            >
              reelcast<span style={{ color: "#AAFF00" }}>.</span>studio
            </h3>
            <p className="font-mono-label" style={{ color: "#999", marginBottom: 24 }}>
              Video Automation Platform
            </p>
            <p style={{ fontSize: 15, lineHeight: 1.75, color: "#666", maxWidth: 360, fontWeight: 300 }}>
              Drop a URL. We read the brand, extract the signal, and render a 30-second kinetic motion-graphics promo — instantly, in your browser. No editors. No timelines. No waiting.
            </p>
          </div>

          <a
            href="https://reelcast-studio.vercel.app/"
            target="_blank"
            rel="noreferrer"
            className="group mt-10 inline-flex items-center gap-2 w-fit"
            style={{
              background: "#0A0A0A", color: "#FAFAF8",
              padding: "13px 24px",
              fontFamily: "JetBrains Mono, monospace",
              fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase",
              textDecoration: "none", transition: "background 0.2s",
            }}
            onMouseEnter={e => (e.currentTarget.style.background = "#1A4BFF")}
            onMouseLeave={e => (e.currentTarget.style.background = "#0A0A0A")}
          >
            Open reelcast.studio
            <ArrowUpRight style={{ width: 14, height: 14 }} strokeWidth={2.5} />
          </a>
        </div>

        {/* RIGHT — kinetic hero panel, mirrors the site */}
        <div
          className="flex flex-col justify-between p-10 md:p-14 relative overflow-hidden"
          style={{ background: "#EDECEA" }}
        >
          {/* Lime dot-grid decoration */}
          <div
            style={{
              position: "absolute", inset: 0,
              backgroundImage: "radial-gradient(circle, rgba(170,255,0,0.38) 1px, transparent 1px)",
              backgroundSize: "28px 28px",
              maskImage: "linear-gradient(to bottom, black 30%, transparent 100%)",
              WebkitMaskImage: "linear-gradient(to bottom, black 30%, transparent 100%)",
              pointerEvents: "none",
            }}
          />

          {/* Pill badge — matches site header pill */}
          <div
            style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              borderRadius: 100, border: "1px solid rgba(0,0,0,0.1)",
              padding: "8px 18px", width: "fit-content", position: "relative",
            }}
          >
            <span style={{ fontSize: 12 }}>✦</span>
            <span className="font-mono-label" style={{ color: "#888" }}>Paste · Analyze · Watch</span>
          </div>

          {/* Big headline mirroring reelcast.studio hero exactly */}
          <div style={{ position: "relative" }}>
            <p
              className="display"
              style={{
                fontSize: "clamp(1.7rem,3vw,2.7rem)",
                lineHeight: 1.06, letterSpacing: "-0.035em",
                color: "#0A0A0A", marginBottom: 18,
              }}
            >
              Turn any website<br />
              into a{" "}
              <em style={{ color: "#557700", fontStyle: "italic", fontWeight: 700 }}>
                motion graphics
              </em>{" "}
              promo.
            </p>
            <p style={{ fontSize: 13, color: "#888", lineHeight: 1.7, fontWeight: 300, maxWidth: 340 }}>
              Drop in a URL. We read the site, extract its brand, and animate a 30-second kinetic promo — instantly, in your browser.
            </p>
          </div>
        </div>
      </div>
      <style>{`@keyframes rcpulse{0%,100%{opacity:1}50%{opacity:0.3}}`}</style>
    </article>
  );
}

// ── CONFIG-ENGINE CARD ────────────────────────────────────────────────────────
function ConfigCard() {
  const bullets = ["Cloud-based hardware matrices", "Automated stress & perf runs", "AI failure triage", "Made for indie & mid-core teams"];
  return (
    <article className="bg-paper">
      <div className="grid grid-cols-12 gap-6 py-10 md:py-14">
        <div className="col-span-12 flex flex-col gap-3 md:col-span-3">
          <MonoLabel>P/02</MonoLabel>
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 bg-ink/40" />
            <MonoLabel>In development</MonoLabel>
          </div>
          <MonoLabel className="!text-ink/40">config-engine</MonoLabel>
        </div>
        <div className="col-span-12 md:col-span-6">
          <h3 className="display whitespace-pre-line text-[clamp(1.75rem,4vw,3.25rem)]">
            {"Test your game across\nevery configuration."}
          </h3>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-ink/70 md:text-lg">
            An AI-powered cloud lab for game developers. Spin up matrices of devices, drivers, and specs — find the regression before your players do.
          </p>
          <a
            href="#contact"
            className="mt-8 inline-flex items-center gap-2 border-b-2 border-ink pb-1 transition-colors hover:border-signal hover:text-signal"
          >
            <span className="font-mono-label">Join the waitlist</span>
            <ArrowUpRight className="h-4 w-4" strokeWidth={2.5} />
          </a>
        </div>
        <ul className="col-span-12 flex flex-col gap-3 md:col-span-3">
          {bullets.map((b) => (
            <li key={b} className="flex items-start gap-3 border-t border-rule pt-3">
              <Plus className="mt-1 h-3 w-3 text-signal" strokeWidth={2.5} />
              <span className="text-sm text-ink/80">{b}</span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

function Products() {
  return (
    <section id="products" className="border-b border-rule">
      <div className="mx-auto max-w-[1400px] px-6 py-20 md:px-10 md:py-28">
        <SectionHeader index="01 / Products" kicker="What we ship" title="Two tools. Built with intent." />
        <div className="mt-16 flex flex-col gap-px bg-rule">
          <ReelcastCard />
          <ConfigCard />
        </div>
      </div>
    </section>
  );
}

// ── MANIFESTO ─────────────────────────────────────────────────────────────────
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
              Most software today is loud. It interrupts, it sprawls, it asks for your attention before earning it. We started Arkyn Labs to build the opposite — quiet tools that do one thing exceptionally well and then get out of the way.
            </p>
            <p>
              Reelcast and Config-Engine come from the same belief: creators and developers deserve interfaces that respect their craft. We ship slowly, in small teams, with care for every pixel and every millisecond.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── APPROACH ──────────────────────────────────────────────────────────────────
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

// ── CONTACT ───────────────────────────────────────────────────────────────────
function Contact() {
  const rows = [
    { k: "Founder", v: "Anirudh Singh Rathore", href: null },
    { k: "Email", v: "anrdh86@gmail.com", href: "mailto:anrdh86@gmail.com" },
    { k: "Instagram", v: "@anrdh86", href: "https://instagram.com/anrdh86" },
    { k: "GitHub", v: "@anrdh86", href: "https://github.com/anrdh86" },
    { k: "X / Twitter", v: "@anrdh86", href: "https://x.com/anrdh86" },
    { k: "Reelcast", v: "reelcast-studio.vercel.app", href: "https://reelcast-studio.vercel.app/" },
  ];
  return (
    <section id="contact" className="border-b border-rule">
      <div className="mx-auto max-w-[1400px] px-6 py-20 md:px-10 md:py-28">
        <SectionHeader index="04 / Contact" kicker="Say hello" title="Let's build something precise." />
        <div className="mt-16 grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-7">
            <a href="mailto:anrdh86@gmail.com" className="group block">
              <span className="display block text-[clamp(1.5rem,5vw,4.5rem)] transition-colors group-hover:text-signal break-all">
                anrdh86@gmail.com
                <ArrowUpRight className="ml-2 inline h-7 w-7 align-top md:h-10 md:w-10" strokeWidth={2} />
              </span>
            </a>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-ink/70">
              Partnerships, press, or product feedback — write directly. We read every message and reply fast.
            </p>
          </div>
          <div className="col-span-12 grid grid-cols-2 gap-px self-start bg-rule md:col-span-5">
            {rows.map((row) => (
              <div key={row.k} className="bg-paper p-5">
                <MonoLabel>{row.k}</MonoLabel>
                {row.href ? (
                  <a
                    href={row.href}
                    target={row.href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                    className="mt-2 block font-mono text-sm text-ink hover:text-signal transition-colors"
                  >
                    {row.v}
                  </a>
                ) : (
                  <p className="mt-2 font-mono text-sm text-ink">{row.v}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ──import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Plus } from "lucide-react";

export const Route = createFileRoute("/")(({
  head: () => ({
    meta: [
      { title: "Arkyn Labs — A studio for precise software" },
    ],
  }),
  component: Landing,
}) as any);

// ── TRIANGULAR LOGO MARK ─────────────────────────────────────────────────────
function ArkynMark({ size = 28 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Arkyn Labs"
    >
      {/* Black outer triangle */}
      <polygon points="14,3 27,25 1,25" fill="currentColor" />
      {/* Cutout inner triangle in paper colour */}
      <polygon points="14,9 22.2,23 5.8,23" fill="var(--paper, #FAFAF8)" />
      {/* Horizontal cross-bar */}
      <line x1="9.2" y1="19" x2="18.8" y2="19" stroke="currentColor" strokeWidth="2.4" />
    </svg>
  );
}

function MonoLabel({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <span className={`font-mono-label text-ink/60 ${className}`}>{children}</span>;
}

function SectionHeader({ index, kicker, title }: { index: string; kicker: string; title: string }) {
  return (
    <div className="grid grid-cols-12 gap-6 border-t border-rule pt-6">
      <div className="col-span-12 md:col-span-3 flex items-start gap-4">
        <MonoLabel>{index}</MonoLabel>
        <MonoLabel>{kicker}</MonoLabel>
      </div>
      <h2 className="display col-span-12 md:col-span-9 text-[clamp(2rem,5vw,4.5rem)]">{title}</h2>
    </div>
  );
}

// ── NAV ──────────────────────────────────────────────────────────────────────
function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-rule bg-paper/85 backdrop-blur">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-4 md:px-10">
        <a href="#top" className="flex items-center gap-3 text-ink hover:text-signal transition-colors">
          <ArkynMark size={28} />
          <span className="font-mono-label text-ink">Arkyn Labs</span>
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          <a href="#products" className="font-mono-label hover:text-signal">01 / Products</a>
          <a href="#manifesto" className="font-mono-label hover:text-signal">02 / Manifesto</a>
          <a href="#approach" className="font-mono-label hover:text-signal">03 / Approach</a>
          <a href="#contact" className="font-mono-label hover:text-signal">04 / Contact</a>
        </nav>
        <a
          href="mailto:anrdh86@gmail.com"
          className="group inline-flex items-center gap-2 border border-ink bg-ink px-4 py-2 text-paper transition-colors hover:bg-signal hover:border-signal"
        >
          <span className="font-mono-label !text-paper">Get in touch</span>
          <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2.5} />
        </a>
      </div>
    </header>
  );
}

// ── HERO ─────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section id="top" className="relative border-b border-rule">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="grid grid-cols-12 gap-6 border-b border-rule py-4">
          <MonoLabel className="col-span-6 md:col-span-3">India · Remote</MonoLabel>
          <MonoLabel className="col-span-6 md:col-span-3">Est. 2025</MonoLabel>
          <MonoLabel className="col-span-6 md:col-span-3">Independent Studio</MonoLabel>
          <MonoLabel className="col-span-6 md:col-span-3 md:text-right">
            <span className="mr-2 inline-block h-1.5 w-1.5 translate-y-[-2px] bg-signal" />
            Currently shipping
          </MonoLabel>
        </div>
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
                Arkyn Labs is an independent studio founded by Anirudh Singh Rathore. We design and ship focused tools for the people who make the internet — creators, engineers, and game developers.
              </p>
              <div className="col-span-12 flex flex-col gap-3 md:col-span-5 md:items-end md:justify-end">
                <MonoLabel>Two products. One standard.</MonoLabel>
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
      <Plus className="absolute left-6 top-[58%] hidden h-3 w-3 text-ink/30 md:block" strokeWidth={1.5} />
      <Plus className="absolute right-6 top-[58%] hidden h-3 w-3 text-ink/30 md:block" strokeWidth={1.5} />
    </section>
  );
}

// ── MARQUEE ───────────────────────────────────────────────────────────────────
function Marquee() {
  const items = ["Motion Graphics", "Cloud Testing", "Developer Tools", "AI Powered", "Made by Arkyn", "Anirudh Singh Rathore"];
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

// ── REELCAST CARD ─────────────────────────────────────────────────────────────
// Styled to match reelcast-studio.vercel.app exactly:
// off-white bg, lime green accent dot + italic headline, pill badge, dark CTA
function ReelcastCard() {
  return (
    <article style={{ background: "#F5F5F0" }} className="border-b border-rule overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* LEFT — identity + CTA */}
        <div
          className="flex flex-col justify-between p-10 md:p-14"
          style={{ borderRight: "1px solid rgba(0,0,0,0.08)" }}
        >
          <div>
            {/* Live badge */}
            <div
              style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                borderRadius: 100, border: "1px solid rgba(0,0,0,0.1)",
                padding: "7px 16px", marginBottom: 36,
              }}
            >
              <span
                style={{
                  width: 7, height: 7, borderRadius: "50%",
                  background: "#AAFF00", boxShadow: "0 0 7px #AAFF00",
                  display: "inline-block", flexShrink: 0,
                  animation: "rcpulse 2s ease-in-out infinite",
                }}
              />
              <span className="font-mono-label" style={{ color: "#666" }}>Live — P/01</span>
            </div>

            {/* Name */}
            <h3
              className="display"
              style={{
                fontSize: "clamp(2.2rem,4.5vw,3.8rem)",
                lineHeight: 0.93, letterSpacing: "-0.04em",
                color: "#0A0A0A", marginBottom: 10,
              }}
            >
              reelcast<span style={{ color: "#AAFF00" }}>.</span>studio
            </h3>
            <p className="font-mono-label" style={{ color: "#999", marginBottom: 24 }}>
              Video Automation Platform
            </p>
            <p style={{ fontSize: 15, lineHeight: 1.75, color: "#666", maxWidth: 360, fontWeight: 300 }}>
              Drop a URL. We read the brand, extract the signal, and render a 30-second kinetic motion-graphics promo — instantly, in your browser. No editors. No timelines. No waiting.
            </p>
          </div>

          <a
            href="https://reelcast-studio.vercel.app/"
            target="_blank"
            rel="noreferrer"
            className="group mt-10 inline-flex items-center gap-2 w-fit"
            style={{
              background: "#0A0A0A", color: "#FAFAF8",
              padding: "13px 24px",
              fontFamily: "JetBrains Mono, monospace",
              fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase",
              textDecoration: "none", transition: "background 0.2s",
            }}
            onMouseEnter={e => (e.currentTarget.style.background = "#1A4BFF")}
            onMouseLeave={e => (e.currentTarget.style.background = "#0A0A0A")}
          >
            Open reelcast.studio
            <ArrowUpRight style={{ width: 14, height: 14 }} strokeWidth={2.5} />
          </a>
        </div>

        {/* RIGHT — kinetic hero panel, mirrors the site */}
        <div
          className="flex flex-col justify-between p-10 md:p-14 relative overflow-hidden"
          style={{ background: "#EDECEA" }}
        >
          {/* Lime dot-grid decoration */}
          <div
            style={{
              position: "absolute", inset: 0,
              backgroundImage: "radial-gradient(circle, rgba(170,255,0,0.38) 1px, transparent 1px)",
              backgroundSize: "28px 28px",
              maskImage: "linear-gradient(to bottom, black 30%, transparent 100%)",
              WebkitMaskImage: "linear-gradient(to bottom, black 30%, transparent 100%)",
              pointerEvents: "none",
            }}
          />

          {/* Pill badge — matches site header pill */}
          <div
            style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              borderRadius: 100, border: "1px solid rgba(0,0,0,0.1)",
              padding: "8px 18px", width: "fit-content", position: "relative",
            }}
          >
            <span style={{ fontSize: 12 }}>✦</span>
            <span className="font-mono-label" style={{ color: "#888" }}>Paste · Analyze · Watch</span>
          </div>

          {/* Big headline mirroring reelcast.studio hero exactly */}
          <div style={{ position: "relative" }}>
            <p
              className="display"
              style={{
                fontSize: "clamp(1.7rem,3vw,2.7rem)",
                lineHeight: 1.06, letterSpacing: "-0.035em",
                color: "#0A0A0A", marginBottom: 18,
              }}
            >
              Turn any website<br />
              into a{" "}
              <em style={{ color: "#557700", fontStyle: "italic", fontWeight: 700 }}>
                motion graphics
              </em>{" "}
              promo.
            </p>
            <p style={{ fontSize: 13, color: "#888", lineHeight: 1.7, fontWeight: 300, maxWidth: 340 }}>
              Drop in a URL. We read the site, extract its brand, and animate a 30-second kinetic promo — instantly, in your browser.
            </p>
          </div>
        </div>
      </div>
      <style>{`@keyframes rcpulse{0%,100%{opacity:1}50%{opacity:0.3}}`}</style>
    </article>
  );
}

// ── CONFIG-ENGINE CARD ────────────────────────────────────────────────────────
function ConfigCard() {
  const bullets = ["Cloud-based hardware matrices", "Automated stress & perf runs", "AI failure triage", "Made for indie & mid-core teams"];
  return (
    <article className="bg-paper">
      <div className="grid grid-cols-12 gap-6 py-10 md:py-14">
        <div className="col-span-12 flex flex-col gap-3 md:col-span-3">
          <MonoLabel>P/02</MonoLabel>
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 bg-ink/40" />
            <MonoLabel>In development</MonoLabel>
          </div>
          <MonoLabel className="!text-ink/40">config-engine</MonoLabel>
        </div>
        <div className="col-span-12 md:col-span-6">
          <h3 className="display whitespace-pre-line text-[clamp(1.75rem,4vw,3.25rem)]">
            {"Test your game across\nevery configuration."}
          </h3>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-ink/70 md:text-lg">
            An AI-powered cloud lab for game developers. Spin up matrices of devices, drivers, and specs — find the regression before your players do.
          </p>
          <a
            href="#contact"
            className="mt-8 inline-flex items-center gap-2 border-b-2 border-ink pb-1 transition-colors hover:border-signal hover:text-signal"
          >
            <span className="font-mono-label">Join the waitlist</span>
            <ArrowUpRight className="h-4 w-4" strokeWidth={2.5} />
          </a>
        </div>
        <ul className="col-span-12 flex flex-col gap-3 md:col-span-3">
          {bullets.map((b) => (
            <li key={b} className="flex items-start gap-3 border-t border-rule pt-3">
              <Plus className="mt-1 h-3 w-3 text-signal" strokeWidth={2.5} />
              <span className="text-sm text-ink/80">{b}</span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

function Products() {
  return (
    <section id="products" className="border-b border-rule">
      <div className="mx-auto max-w-[1400px] px-6 py-20 md:px-10 md:py-28">
        <SectionHeader index="01 / Products" kicker="What we ship" title="Two tools. Built with intent." />
        <div className="mt-16 flex flex-col gap-px bg-rule">
          <ReelcastCard />
          <ConfigCard />
        </div>
      </div>
    </section>
  );
}

// ── MANIFESTO ─────────────────────────────────────────────────────────────────
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
              Most software today is loud. It interrupts, it sprawls, it asks for your attention before earning it. We started Arkyn Labs to build the opposite — quiet tools that do one thing exceptionally well and then get out of the way.
            </p>
            <p>
              Reelcast and Config-Engine come from the same belief: creators and developers deserve interfaces that respect their craft. We ship slowly, in small teams, with care for every pixel and every millisecond.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── APPROACH ──────────────────────────────────────────────────────────────────
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

// ── CONTACT ───────────────────────────────────────────────────────────────────
function Contact() {
  const rows = [
    { k: "Founder", v: "Anirudh Singh Rathore", href: null },
    { k: "Email", v: "anrdh86@gmail.com", href: "mailto:anrdh86@gmail.com" },
    { k: "Instagram", v: "@anrdh86", href: "https://instagram.com/anrdh86" },
    { k: "GitHub", v: "@anrdh86", href: "https://github.com/anrdh86" },
    { k: "X / Twitter", v: "@anrdh86", href: "https://x.com/anrdh86" },
    { k: "Reelcast", v: "reelcast-studio.vercel.app", href: "https://reelcast-studio.vercel.app/" },
  ];
  return (
    <section id="contact" className="border-b border-rule">
      <div className="mx-auto max-w-[1400px] px-6 py-20 md:px-10 md:py-28">
        <SectionHeader index="04 / Contact" kicker="Say hello" title="Let's build something precise." />
        <div className="mt-16 grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-7">
            <a href="mailto:anrdh86@gmail.com" className="group block">
              <span className="display block text-[clamp(1.5rem,5vw,4.5rem)] transition-colors group-hover:text-signal break-all">
                anrdh86@gmail.com
                <ArrowUpRight className="ml-2 inline h-7 w-7 align-top md:h-10 md:w-10" strokeWidth={2} />
              </span>
            </a>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-ink/70">
              Partnerships, press, or product feedback — write directly. We read every message and reply fast.
            </p>
          </div>
          <div className="col-span-12 grid grid-cols-2 gap-px self-start bg-rule md:col-span-5">
            {rows.map((row) => (
              <div key={row.k} className="bg-paper p-5">
                <MonoLabel>{row.k}</MonoLabel>
                {row.href ? (
                  <a
                    href={row.href}
                    target={row.href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                    className="mt-2 block font-mono text-sm text-ink hover:text-signal transition-colors"
                  >
                    {row.v}
                  </a>
                ) : (
                  <p className="mt-2 font-mono text-sm text-ink">{row.v}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ──
