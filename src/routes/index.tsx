import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Plus } from "lucide-react";

export const Route = createFileRoute("/")(({
  head: () => ({
    meta: [
      { title: "Arkyn Labs — A studio for precise software" },
      { name: "description", content: "Arkyn Labs is an independent studio by Anirudh Singh Rathore, building Reelcast Studio (URL→motion graphics) and Config-Engine (AI cloud game testing)." },
      { property: "og:type", content: "website" },
      { property: "og:title", content: "Arkyn Labs — A studio for precise software" },
      { property: "og:description", content: "Independent studio shipping Reelcast Studio and Config-Engine. Quiet tools, sharp execution." },
      { property: "og:site_name", content: "Arkyn Labs" },
      { property: "og:url", content: "https://arkynlabs.com" },
      { property: "og:image", content: "https://arkynlabs.com/og.png" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@anrdh86" },
      { name: "twitter:creator", content: "@anrdh86" },
      { name: "twitter:title", content: "Arkyn Labs — A studio for precise software" },
      { name: "twitter:description", content: "Reelcast Studio turns URLs into motion graphics. Config-Engine is AI cloud game testing. By Anirudh Singh Rathore." },
      { name: "twitter:image", content: "https://arkynlabs.com/og.png" },
    ],
  }),
  component: Landing,
}) as any);

// ── TRIANGULAR LOGO MARK ─────────────────────────────────────────────────────
// Two interlocking triangles forming a subtle "A" — apex marked with a signal dot.
function ArkynMark({ size = 28 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Arkyn Labs"
    >
      {/* outer triangle outline */}
      <polygon
        points="16,3 30,28 2,28"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="miter"
      />
      {/* inner inverted triangle — solid */}
      <polygon points="16,28 23,16 9,16" fill="currentColor" />
      {/* signal dot at apex */}
      <circle cx="16" cy="3" r="1.6" fill="var(--signal, #FF3B1F)" />
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
function ReelcastCard() {
  return (
    <article style={{ background: "#F5F5F0", position: "relative" }} className="border-b border-rule overflow-hidden rc-card">
      <div className="rc-scan" aria-hidden />
      <div className="flex flex-col justify-between p-10 md:p-16 relative">
        <div>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, borderRadius: 100, border: "1px solid rgba(0,0,0,0.1)", padding: "7px 16px", marginBottom: 36 }}>
            <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#E8FF00", boxShadow: "0 0 10px #E8FF00, 0 0 18px rgba(232,255,0,0.6)", display: "inline-block", flexShrink: 0, animation: "rcpulse 2s ease-in-out infinite" }} />
            <span className="font-mono-label" style={{ color: "#666" }}>Live — P/01</span>
          </div>
          <h3 className="display rc-title" style={{ fontSize: "clamp(2.2rem,5vw,4.5rem)", lineHeight: 0.93, letterSpacing: "-0.04em", color: "#0A0A0A", marginBottom: 14 }}>
            reelcast<span className="rc-dot">.</span>studio
          </h3>
          <p className="font-mono-label" style={{ color: "#999", marginBottom: 28 }}>Video Automation Platform</p>
          <p className="display" style={{ fontSize: "clamp(1.4rem,2.6vw,2.2rem)", lineHeight: 1.08, letterSpacing: "-0.035em", color: "#0A0A0A", marginBottom: 22, maxWidth: 640 }}>
            Turn any website into a <em className="rc-em" style={{ fontStyle: "italic", fontWeight: 700 }}>motion graphics</em> promo.
          </p>
          <p style={{ fontSize: 15, lineHeight: 1.75, color: "#666", maxWidth: 520, fontWeight: 300 }}>
            Drop a URL. We read the brand, extract the signal, and render a 30-second kinetic motion-graphics promo — instantly.
          </p>
        </div>
        <a href="https://reelcast-studio.vercel.app/" target="_blank" rel="noreferrer" className="group mt-10 inline-flex items-center gap-2 w-fit rc-cta"
          style={{ background: "#0A0A0A", color: "#FAFAF8", padding: "13px 24px", fontFamily: "JetBrains Mono, monospace", fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase", textDecoration: "none" }}>
          Open reelcast.studio <ArrowUpRight style={{ width: 14, height: 14 }} strokeWidth={2.5} />
        </a>
      </div>
      <style>{`
        @keyframes rcpulse{0%,100%{opacity:1}50%{opacity:0.35}}
        @keyframes rcsweep{
          0%{transform:translateX(-100%);opacity:0}
          15%{opacity:1}85%{opacity:1}
          100%{transform:translateX(100%);opacity:0}
        }
        @keyframes rcshine{
          0%,100%{color:#0A0A0A;text-shadow:none}
          50%{color:#0A0A0A;text-shadow:0 0 14px rgba(232,255,0,0.55), 0 0 2px rgba(255,255,255,0.9)}
        }
        @keyframes rcdotglow{
          0%,100%{color:#C9DD00;text-shadow:0 0 6px rgba(232,255,0,0.6)}
          50%{color:#FFFFFF;text-shadow:0 0 18px #E8FF00, 0 0 32px rgba(232,255,0,0.8)}
        }
        .rc-scan{
          position:absolute;top:0;bottom:0;left:0;width:36%;
          background:linear-gradient(90deg,transparent 0%,rgba(232,255,0,0.18) 45%,rgba(255,255,255,0.55) 50%,rgba(232,255,0,0.18) 55%,transparent 100%);
          mix-blend-mode:screen;pointer-events:none;
          animation:rcsweep 6.5s ease-in-out infinite;
        }
        .rc-title{animation:rcshine 5s ease-in-out infinite}
        .rc-dot{animation:rcdotglow 2.4s ease-in-out infinite;display:inline-block}
        .rc-em{
          background:linear-gradient(90deg,#557700 0%,#9BB800 50%,#557700 100%);
          background-size:200% 100%;
          -webkit-background-clip:text;background-clip:text;color:transparent;
          animation:rcgrad 6s linear infinite;
        }
        @keyframes rcgrad{0%{background-position:0% 50%}100%{background-position:200% 50%}}
        .rc-cta{transition:background .25s, box-shadow .25s, color .25s}
        .rc-cta:hover{background:#E8FF00 !important;color:#0A0A0A !important;box-shadow:0 0 0 1px #E8FF00, 0 0 24px rgba(232,255,0,0.55)}
      `}</style>
    </article>
  );
}

// ── CONFIG-ENGINE CARD ────────────────────────────────────────────────────────
function ConfigCard() {
  const bullets = ["Cloud-based hardware matrices", "Automated stress & perf runs", "AI failure triage", "Made for indie & mid-core teams"];
  return (
    <article className="relative overflow-hidden ce-card" style={{ background: "#0A0A0A", color: "#FAFAF8" }}>
      <div className="ce-grid" aria-hidden />
      <div className="grid grid-cols-12 gap-6 px-10 py-14 md:px-14 md:py-16 relative">
        <div className="col-span-12 flex flex-col gap-3 md:col-span-3">
          <span className="font-mono-label" style={{ color: "rgba(250,250,248,0.5)" }}>P/02</span>
          <div className="flex items-center gap-2">
            <span style={{ display: "inline-block", width: 7, height: 7, borderRadius: "50%", background: "#3B82F6", boxShadow: "0 0 10px #3B82F6, 0 0 22px rgba(59,130,246,0.6)", animation: "cepulse 2.4s ease-in-out infinite" }} />
            <span className="font-mono-label" style={{ color: "rgba(250,250,248,0.7)" }}>In development</span>
          </div>
          <span className="font-mono-label" style={{ color: "rgba(250,250,248,0.3)" }}>config-engine</span>
        </div>
        <div className="col-span-12 md:col-span-6">
          <h3 className="display whitespace-pre-line" style={{ fontSize: "clamp(1.75rem,4vw,3.25rem)", lineHeight: 1, letterSpacing: "-0.04em" }}>
            {"Test your game across\nevery "}<em style={{ fontStyle: "italic", fontWeight: 700, background: "linear-gradient(90deg,#3B82F6,#9DC4FF,#3B82F6)", backgroundSize: "200% 100%", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent", animation: "cegrad 6s linear infinite" }}>configuration.</em>
          </h3>
          <p className="mt-6 max-w-xl text-base leading-relaxed md:text-lg" style={{ color: "rgba(250,250,248,0.7)" }}>
            An AI-powered cloud lab for game developers. Find the regression before your players do.
          </p>
          <a href="#contact" className="mt-8 inline-flex items-center gap-2 ce-cta">
            <span className="font-mono-label">Join the waitlist</span> <ArrowUpRight className="h-4 w-4" strokeWidth={2.5} />
          </a>
        </div>
        <ul className="col-span-12 flex flex-col gap-3 md:col-span-3">
          {bullets.map((b) => (
            <li key={b} className="flex items-start gap-3 pt-3" style={{ borderTop: "1px solid rgba(250,250,248,0.15)" }}>
              <Plus className="mt-1 h-3 w-3" strokeWidth={2.5} style={{ color: "#3B82F6" }} />
              <span className="text-sm" style={{ color: "rgba(250,250,248,0.85)" }}>{b}</span>
            </li>
          ))}
        </ul>
      </div>
      <style>{`
        @keyframes cepulse{0%,100%{opacity:1}50%{opacity:0.35}}
        @keyframes cegrad{0%{background-position:0% 50%}100%{background-position:200% 50%}}
        .ce-grid{
          position:absolute;inset:0;pointer-events:none;
          background-image:
            linear-gradient(rgba(59,130,246,0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59,130,246,0.08) 1px, transparent 1px);
          background-size: 48px 48px;
          mask-image: radial-gradient(ellipse at 70% 50%, black 0%, transparent 75%);
          -webkit-mask-image: radial-gradient(ellipse at 70% 50%, black 0%, transparent 75%);
        }
        .ce-cta{
          border-bottom:2px solid #FAFAF8;padding-bottom:4px;color:#FAFAF8;
          transition:border-color .25s,color .25s;
        }
        .ce-cta:hover{border-color:#3B82F6;color:#3B82F6}
      `}</style>
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
          <h2 className="display col-span-12 text-[clamp(2rem,5vw,4.5rem)] md:col-span-9">Software should feel like<br />a sharpened tool.</h2>
        </div>
        <div className="mt-16 grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-3">
            <MonoLabel className="!text-paper/50">Signed</MonoLabel>
            <p className="mt-2 font-mono text-sm text-paper">Anirudh Singh Rathore</p>
            <p className="mt-1 font-mono text-xs text-paper/50">Founder, Arkyn Labs</p>
          </div>
          <div className="col-span-12 space-y-6 text-lg leading-relaxed text-paper/80 md:col-span-7 md:text-xl">
            <p>Most software today is loud. We build quiet tools that do one thing exceptionally well and then get out of the way.</p>
            <p>We ship slowly, in small teams, with care for every pixel and every millisecond.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── APPROACH ──────────────────────────────────────────────────────────────────
const steps = [
  { n: "01", t: "Listen", d: "We embed with the people who'll actually use the tool." },
  { n: "02", t: "Reduce", d: "We strip away features until only the essential remains." },
  { n: "03", t: "Compose", d: "We design with type, grid, and motion as first-class primitives." },
  { n: "04", t: "Ship", d: "We release small, often, and own the outcome." },
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
  return (
    <section id="contact" className="border-b border-rule">
      <div className="mx-auto max-w-[1400px] px-6 py-20 md:px-10 md:py-28">
        <SectionHeader index="04 / Contact" kicker="Say hello" title="Let's build something precise." />
        <div className="mt-16 grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-2">
            <MonoLabel>Direct</MonoLabel>
          </div>
          <div className="col-span-12 md:col-span-10">
            <a href="mailto:anrdh86@gmail.com" className="group block">
              <span className="display block text-[clamp(1.75rem,6vw,5rem)] transition-colors group-hover:text-signal break-all">anrdh86@gmail.com<ArrowUpRight className="ml-2 inline h-7 w-7 align-top" strokeWidth={2} /></span>
            </a>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-ink/70 md:text-lg">
              For collaborations, product enquiries, or to join the Config-Engine waitlist — write directly. Replies in 24–48h.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── FOOTER ────────────────────────────────────────────────────────────────────
function Footer() {
  const socials = [
    { label: "Instagram", handle: "@anrdh86", href: "https://instagram.com/anrdh86" },
    { label: "X / Twitter", handle: "@anrdh86", href: "https://x.com/anrdh86" },
    { label: "GitHub", handle: "@anrdh86", href: "https://github.com/anrdh86" },
    { label: "Email", handle: "anrdh86@gmail.com", href: "mailto:anrdh86@gmail.com" },
  ];
  return (
    <footer className="bg-ink text-paper">
      <div className="mx-auto max-w-[1400px] px-6 py-16 md:px-10 md:py-20">
        <div className="grid grid-cols-12 gap-6 border-t border-paper/15 pt-6">
          <div className="col-span-12 md:col-span-3">
            <span className="font-mono-label !text-paper/60">05 / Social</span>
          </div>
          <h2 className="display col-span-12 text-[clamp(1.75rem,4vw,3.5rem)] md:col-span-9">Follow the signal.</h2>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-px bg-paper/15 md:grid-cols-4">
          {socials.map((s) => (
            <a key={s.label} href={s.href} target="_blank" rel="noreferrer" className="group flex flex-col gap-3 bg-ink p-6 transition-colors hover:bg-signal">
              <span className="font-mono-label !text-paper/60 group-hover:!text-paper">{s.label}</span>
              <div className="flex items-center justify-between">
                <span className="font-mono text-sm text-paper">{s.handle}</span>
                <ArrowUpRight className="h-4 w-4 text-paper/60 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-paper" strokeWidth={2.5} />
              </div>
            </a>
          ))}
        </div>
        <div className="mt-12 grid grid-cols-12 gap-6 items-center border-t border-paper/15 pt-6">
          <div className="col-span-12 flex items-center gap-3 md:col-span-4">
            <span className="text-paper"><ArkynMark size={20} /></span>
            <span className="font-mono-label !text-paper/60">© 2025 Arkyn Labs</span>
          </div>
          <span className="font-mono-label col-span-6 !text-paper/60 md:col-span-4 md:text-center">Designed in the open.</span>
          <div className="col-span-6 md:col-span-4 flex items-center justify-end gap-5">
            <a href="https://reelcast-studio.vercel.app/" target="_blank" rel="noreferrer" className="font-mono-label !text-paper/60 hover:!text-signal">Reelcast ↗</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

// ── PAGE ──────────────────────────────────────────────────────────────────────
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
    
