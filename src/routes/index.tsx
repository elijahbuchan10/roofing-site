import { createFileRoute } from "@tanstack/react-router";
import {
  Phone,
  Star,
  Wrench,
  Home,
  CloudRain,
  ShieldCheck,
  Clock,
  MapPin,
  ThumbsUp,
  CheckCircle2,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Martin & Sons Roof Repair | Fort Worth, TX Roofing" },
      {
        name: "description",
        content:
          "Family-owned Fort Worth roofers offering roof repair, replacement, and gutter installation. Call +1 (469) 460-6242 for a free estimate.",
      },
    ],
  }),
  component: Index,
});

const PHONE_DISPLAY = "(469) 460-6242";
const PHONE_HREF = "tel:+14694606242";

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <Trust />
        <Services />
        <Why />
        <Process />
        <Testimonials />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <a href="#top" className="flex items-center gap-2">
          <div className="grid h-9 w-9 place-items-center rounded-lg bg-navy text-orange">
            <Home className="h-5 w-5" strokeWidth={2.5} />
          </div>
          <div className="min-w-0 leading-tight">
            <div className="truncate text-sm font-extrabold text-navy sm:text-base">
              Martin &amp; Sons
            </div>
            <div className="truncate text-[10px] uppercase tracking-wider text-muted-foreground sm:text-xs">
              Roof Repair · Fort Worth
            </div>
          </div>
        </a>
        <a
          href={PHONE_HREF}
          className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-orange px-3 py-2 text-xs font-bold text-white shadow-[var(--shadow-cta)] transition-transform hover:scale-[1.03] sm:px-4 sm:text-sm"
        >
          <Phone className="h-4 w-4" />
          <span className="hidden sm:inline">{PHONE_DISPLAY}</span>
          <span className="sm:hidden">Call</span>
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden text-white"
      style={{ background: "var(--gradient-navy)" }}
    >
      {/* decorative grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(var(--orange) 1px, transparent 1px), linear-gradient(90deg, var(--orange) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      <div className="relative mx-auto max-w-6xl px-4 pb-16 pt-10 sm:pt-16 lg:pb-24 lg:pt-20">
        <span className="inline-flex items-center gap-2 rounded-full border border-orange/40 bg-orange/10 px-3 py-1 text-xs font-semibold text-orange-soft">
          <MapPin className="h-3.5 w-3.5" />
          Serving Fort Worth, TX
        </span>
        <h1 className="mt-5 text-4xl font-extrabold leading-[1.05] sm:text-5xl lg:text-6xl">
          Roofing You Can Trust in{" "}
          <span className="text-orange">Fort Worth, Texas</span>
        </h1>
        <p className="mt-5 max-w-xl text-base text-white/80 sm:text-lg">
          Family-owned. Honest pricing. Storm-tested craftsmanship. From a small
          leak to a full replacement — Martin &amp; Sons gets it done right the
          first time.
        </p>

        <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
          <a
            href={PHONE_HREF}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-orange px-6 py-4 text-base font-bold text-white shadow-[var(--shadow-cta)] transition-transform hover:scale-[1.02]"
          >
            <Phone className="h-5 w-5" />
            Call for a Free Estimate
          </a>
          <a
            href={PHONE_HREF}
            className="text-center text-sm font-semibold text-white/90 underline-offset-4 hover:underline sm:text-left"
          >
            {PHONE_DISPLAY}
          </a>
        </div>

        <div className="mt-8 inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur">
          <div className="flex items-center gap-0.5 text-orange">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-current" />
            ))}
          </div>
          <div className="text-sm">
            <span className="font-bold text-white">4.9 stars</span>{" "}
            <span className="text-white/70">· from local homeowners</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function Trust() {
  const items = [
    { icon: ShieldCheck, label: "Licensed & Insured" },
    { icon: Clock, label: "Same-Day Estimates" },
    { icon: ThumbsUp, label: "Family Owned" },
    { icon: CloudRain, label: "Storm Damage Experts" },
  ];
  return (
    <section className="border-b border-border bg-muted">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-3 px-4 py-6 sm:grid-cols-4 sm:gap-4 sm:py-8">
        {items.map(({ icon: Icon, label }) => (
          <div
            key={label}
            className="flex items-center gap-2 text-navy"
          >
            <Icon className="h-5 w-5 shrink-0 text-orange" strokeWidth={2.5} />
            <span className="text-xs font-semibold sm:text-sm">{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function Services() {
  const services = [
    {
      icon: Wrench,
      title: "Roof Repair",
      desc: "Leaks, missing shingles, flashing, hail damage. Fast, honest fixes that hold up to Texas weather.",
      points: ["Leak diagnosis", "Shingle replacement", "Storm repair"],
    },
    {
      icon: Home,
      title: "Roof Replacement",
      desc: "Full tear-offs and new installs with premium materials and a workmanship guarantee you can count on.",
      points: ["Asphalt & metal", "Insurance claims help", "Warranty backed"],
    },
    {
      icon: CloudRain,
      title: "Gutter Installation",
      desc: "Seamless gutters and downspouts custom-fit to your home — keeping water away from your foundation.",
      points: ["Seamless aluminum", "Leaf guards", "Free measurements"],
    },
  ];
  return (
    <section id="services" className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
      <div className="max-w-2xl">
        <div className="text-xs font-bold uppercase tracking-widest text-orange">
          What we do
        </div>
        <h2 className="mt-2 text-3xl font-extrabold text-navy sm:text-4xl">
          Roofing services built for North Texas homes
        </h2>
        <p className="mt-3 text-muted-foreground">
          Three core services, done right. No upsells, no surprises — just solid
          work from a team that lives and works here in Fort Worth.
        </p>
      </div>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => (
          <article
            key={s.title}
            className="group flex flex-col rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-orange/40"
            style={{ boxShadow: "var(--shadow-card)" }}
          >
            <div className="grid h-12 w-12 place-items-center rounded-xl bg-navy text-orange transition-colors group-hover:bg-orange group-hover:text-white">
              <s.icon className="h-6 w-6" strokeWidth={2.25} />
            </div>
            <h3 className="mt-5 text-xl font-bold text-navy">{s.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
            <ul className="mt-4 space-y-1.5">
              {s.points.map((p) => (
                <li
                  key={p}
                  className="flex items-center gap-2 text-sm text-foreground"
                >
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-orange" />
                  {p}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

function Why() {
  const stats = [
    { num: "20+", label: "Years experience" },
    { num: "1,200+", label: "Roofs completed" },
    { num: "4.9★", label: "Customer rating" },
    { num: "24h", label: "Emergency response" },
  ];
  return (
    <section className="bg-navy text-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
        <h2 className="max-w-2xl text-3xl font-extrabold sm:text-4xl">
          Why Fort Worth homeowners choose{" "}
          <span className="text-orange">Martin &amp; Sons</span>
        </h2>
        <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center backdrop-blur"
            >
              <div className="text-3xl font-extrabold text-orange sm:text-4xl">
                {s.num}
              </div>
              <div className="mt-1 text-xs font-medium text-white/75 sm:text-sm">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Process() {
  const steps = [
    { n: "01", t: "Call us", d: "Tell us what's going on. We'll book a free inspection that fits your schedule." },
    { n: "02", t: "Free estimate", d: "We inspect, document, and walk you through a clear, written quote — no pressure." },
    { n: "03", t: "Quality work", d: "Our crew shows up on time, cleans up after, and backs every job in writing." },
  ];
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
      <h2 className="max-w-2xl text-3xl font-extrabold text-navy sm:text-4xl">
        Simple, straight-forward process
      </h2>
      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {steps.map((s) => (
          <div
            key={s.n}
            className="relative rounded-2xl border border-border bg-card p-6"
            style={{ boxShadow: "var(--shadow-card)" }}
          >
            <div className="font-display text-5xl font-extrabold text-orange/20">
              {s.n}
            </div>
            <h3 className="mt-2 text-lg font-bold text-navy">{s.t}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Testimonials() {
  const reviews = [
    {
      name: "Jessica R.",
      city: "Fort Worth",
      quote:
        "After a hail storm, Martin & Sons had us back to normal in two days. Honest pricing and they handled the insurance paperwork.",
    },
    {
      name: "David M.",
      city: "Arlington",
      quote:
        "Full roof replacement done in a single day. Crew was respectful, cleaned up every nail. Couldn't ask for better.",
    },
    {
      name: "Brittany K.",
      city: "Keller",
      quote:
        "New gutters look amazing and finally no more overflow by the front door. Fair quote, easy to work with.",
    },
  ];
  return (
    <section className="bg-muted">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
        <div className="flex items-end justify-between gap-4">
          <h2 className="max-w-xl text-3xl font-extrabold text-navy sm:text-4xl">
            What our neighbors say
          </h2>
          <div className="hidden items-center gap-1 text-orange sm:flex">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-current" />
            ))}
          </div>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {reviews.map((r) => (
            <figure
              key={r.name}
              className="flex h-full flex-col rounded-2xl border border-border bg-card p-6"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <div className="flex items-center gap-0.5 text-orange">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-3 grow text-sm text-foreground">
                "{r.quote}"
              </blockquote>
              <figcaption className="mt-4 text-sm font-semibold text-navy">
                {r.name}{" "}
                <span className="font-normal text-muted-foreground">
                  · {r.city}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function CallToAction() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
      <div
        className="overflow-hidden rounded-3xl px-6 py-12 text-center text-white sm:px-12 sm:py-16"
        style={{ background: "var(--gradient-navy)" }}
      >
        <div className="mx-auto flex max-w-2xl flex-col items-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-orange/40 bg-orange/10 px-3 py-1 text-xs font-semibold text-orange-soft">
            <Star className="h-3.5 w-3.5 fill-current" />
            4.9 stars from Fort Worth homeowners
          </div>
          <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">
            Ready for a roof you don't have to worry about?
          </h2>
          <p className="mt-3 text-white/80">
            Free estimates. No pressure. Just honest answers from a local team.
          </p>
          <a
            href={PHONE_HREF}
            className="mt-7 inline-flex items-center gap-2 rounded-xl bg-orange px-6 py-4 text-base font-bold text-white shadow-[var(--shadow-cta)] transition-transform hover:scale-[1.02]"
          >
            <Phone className="h-5 w-5" />
            Call for a Free Estimate
          </a>
          <a
            href={PHONE_HREF}
            className="mt-3 text-sm font-semibold text-white/85 hover:underline"
          >
            {PHONE_DISPLAY}
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-navy text-white/80">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:grid-cols-3">
        <div>
          <div className="flex items-center gap-2">
            <div className="grid h-9 w-9 place-items-center rounded-lg bg-orange text-white">
              <Home className="h-5 w-5" strokeWidth={2.5} />
            </div>
            <div className="text-base font-extrabold text-white">
              Martin &amp; Sons Roof Repair
            </div>
          </div>
          <p className="mt-3 max-w-xs text-sm text-white/70">
            A family-owned roofing company proudly serving Fort Worth, TX and
            the surrounding metroplex.
          </p>
        </div>
        <div>
          <div className="text-sm font-bold uppercase tracking-wider text-orange">
            Services
          </div>
          <ul className="mt-3 space-y-2 text-sm">
            <li>Roof Repair</li>
            <li>Roof Replacement</li>
            <li>Gutter Installation</li>
          </ul>
        </div>
        <div>
          <div className="text-sm font-bold uppercase tracking-wider text-orange">
            Contact
          </div>
          <ul className="mt-3 space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-orange" />
              <a href={PHONE_HREF} className="hover:underline">
                {PHONE_DISPLAY}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-orange" />
              Fort Worth, Texas
            </li>
            <li className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-orange" />
              Mon–Sat · 7am – 7pm
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-5 text-xs text-white/60">
          © {new Date().getFullYear()} Martin &amp; Sons Roof Repair. All
          rights reserved.
        </div>
      </div>
    </footer>
  );
}
