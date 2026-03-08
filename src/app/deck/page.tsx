"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Car, Thermometer, Wrench, Users, Calendar, CreditCard, Check, X as XIcon, ExternalLink } from "lucide-react";

// ─── Slide Data ───────────────────────────────────────────────────────────────

const slideLabels = [
  "Title",
  "Problem",
  "Market",
  "Solution",
  "Product",
  "Competition",
  "Business Model",
  "Go-To-Market",
  "Roadmap",
  "Traction",
  "Team",
  "Ask",
];

// ─── Slide Components ─────────────────────────────────────────────────────────

function TitleSlide() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="w-16 h-px bg-[#c9a84c] mx-auto mb-8 opacity-60" />
        <h1 className="font-serif italic font-bold text-[#c9a84c] text-7xl md:text-8xl tracking-widest uppercase leading-none mb-6">
          Prova
        </h1>
        <div className="w-16 h-px bg-[#c9a84c] mx-auto mt-8 opacity-60" />
      </motion.div>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="font-serif text-[#f0ebe0] text-2xl md:text-3xl font-light tracking-wide mt-8 max-w-2xl italic"
      >
        Where Precision Meets Provenance
      </motion.p>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.6 }}
        className="font-sans text-[#a0a8b8] text-base md:text-lg mt-4 max-w-lg"
      >
        Operations software for luxury car storage facilities
      </motion.p>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="mt-16"
      >
        <p className="font-sans text-[#5c6478] text-sm tracking-wider">
          Press → to navigate
        </p>
      </motion.div>
    </div>
  );
}

function ProblemSlide() {
  const points = [
    { icon: "📊", title: "Spreadsheet Chaos", desc: "Vehicle tracking in Excel. Owner updates via text message. Service history scattered across invoices and memory." },
    { icon: "📞", title: "Blind Owners", desc: "Clients with $50M in stored assets have zero visibility into their vehicles without picking up the phone." },
    { icon: "🔧", title: "Zero Provenance", desc: "No documentation trail. Climate logs don't exist. Service records are lost. Resale value suffers." },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-8 max-w-5xl mx-auto w-full">
      <p className="font-sans text-[#5c6478] text-xs uppercase tracking-widest mb-4">01 — The Problem</p>
      <h2 className="font-serif text-[#f0ebe0] text-4xl md:text-5xl font-semibold mb-4 text-center">
        $50M in assets.<br />
        <span className="text-[#c9a84c] italic">Managed by spreadsheets.</span>
      </h2>
      <p className="font-sans text-[#a0a8b8] text-base md:text-lg text-center mb-12 max-w-2xl">
        Luxury car storage facilities manage collections worth tens of millions — Ferraris, Porsches, vintage Aston Martins that appreciate every year. Their current tools were never built for that level of value.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
        {points.map((point, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + i * 0.15, duration: 0.5 }}
            className="bg-[#0f1626] border border-[#1e2d45] rounded-xl p-6 hover:border-[#c9a84c]/30 transition-colors duration-300"
          >
            <span className="text-2xl mb-3 block">{point.icon}</span>
            <h3 className="font-serif text-[#f0ebe0] text-lg font-semibold mb-2">{point.title}</h3>
            <p className="font-sans text-[#a0a8b8] text-sm leading-relaxed">{point.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function MarketSlide() {
  const stats = [
    { label: "Search Growth", value: "+1,995%", desc: '"Auto storage facilities near me"' },
    { label: "Luxury Vehicle CAGR", value: "7.3%", desc: "Market growing steadily" },
    { label: "Collection Storage CAGR", value: "12.4%", desc: "Fastest-growing segment" },
    { label: "Purpose-Built Software", value: "$0", desc: "Nobody has built for this" },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-8 max-w-5xl mx-auto w-full">
      <p className="font-sans text-[#5c6478] text-xs uppercase tracking-widest mb-4">02 — Market</p>
      <h2 className="font-serif text-[#f0ebe0] text-4xl md:text-5xl font-semibold mb-4 text-center">
        A growing market with<br />
        <span className="text-[#c9a84c] italic">zero purpose-built software</span>
      </h2>
      <p className="font-sans text-[#a0a8b8] text-base text-center mb-12 max-w-2xl">
        500–2,000 dedicated luxury car storage facilities in the US alone. They use Storeganise, SiteLink, or spreadsheets — none built for vehicles worth millions.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-5 w-full mb-10">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.15 + i * 0.1, duration: 0.5 }}
            className="bg-[#0f1626] border border-[#1e2d45] rounded-xl p-5 text-center"
          >
            <p className="font-mono text-[#c9a84c] text-3xl md:text-4xl font-bold leading-none">{stat.value}</p>
            <p className="font-sans text-[#f0ebe0] text-sm font-semibold mt-2">{stat.label}</p>
            <p className="font-sans text-[#5c6478] text-xs mt-1">{stat.desc}</p>
          </motion.div>
        ))}
      </div>

      <div className="flex flex-wrap justify-center gap-6">
        {[
          { label: "TAM (US)", value: "$3M–$36M ARR" },
          { label: "TAM (Global)", value: "$9M–$180M ARR" },
        ].map((tier, i) => (
          <div key={i} className="flex items-center gap-3">
            <span className="font-sans text-[#5c6478] text-xs uppercase tracking-wider">{tier.label}</span>
            <span className="font-serif text-[#c9a84c] text-xl font-bold">{tier.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function SolutionSlide() {
  const features = [
    { icon: <Car size={20} />, title: "Vehicle Profiles", desc: "Make, model, year, VIN, photos, owner contact, insurance — every detail in one record." },
    { icon: <Thermometer size={20} />, title: "Climate Logging", desc: "Temperature and humidity tracking per bay. Documentation that protects assets." },
    { icon: <Wrench size={20} />, title: "Service History", desc: "Full provenance chain: every detail job, maintenance, transport — logged and timestamped." },
    { icon: <Users size={20} />, title: "Owner Portal", desc: "Clients see their car's status, climate data, photos — without calling you." },
    { icon: <Calendar size={20} />, title: "Scheduling", desc: "Calendar view for services, pickups, and deliveries." },
    { icon: <CreditCard size={20} />, title: "Billing", desc: "Stripe-powered subscription billing built in." },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-8 max-w-5xl mx-auto w-full">
      <p className="font-sans text-[#5c6478] text-xs uppercase tracking-widest mb-4">03 — The Solution</p>
      <h2 className="font-serif text-[#f0ebe0] text-4xl md:text-5xl font-semibold mb-3 text-center">
        One dashboard. Every vehicle.<br />
        <span className="text-[#c9a84c] italic">Total control.</span>
      </h2>
      <p className="font-sans text-[#a0a8b8] text-base text-center mb-10 max-w-xl">
        Prova is the first operations platform built exclusively for high-end vehicle storage facilities.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 w-full">
        {features.map((f, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 + i * 0.08, duration: 0.5 }}
            className="bg-[#0f1626] border border-[#1e2d45] rounded-xl p-5 hover:border-[#c9a84c]/40 transition-colors duration-300"
          >
            <div className="text-[#c9a84c] mb-3">{f.icon}</div>
            <h3 className="font-serif text-[#f0ebe0] text-base font-semibold mb-1">{f.title}</h3>
            <p className="font-sans text-[#a0a8b8] text-sm leading-relaxed">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function ProductSlide() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-8 max-w-5xl mx-auto w-full text-center">
      <p className="font-sans text-[#5c6478] text-xs uppercase tracking-widest mb-4">04 — Product</p>
      <h2 className="font-serif text-[#c9a84c] text-4xl md:text-5xl font-semibold mb-8">See It Live</h2>

      <div className="bg-[#0f1626] border border-[#1e2d45] rounded-2xl p-8 md:p-12 max-w-2xl w-full mb-8">
        <div className="aspect-video bg-[#162036] rounded-xl border border-[#1e2d45] flex items-center justify-center mb-6">
          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-[#c9a84c]/10 border border-[#c9a84c]/30 flex items-center justify-center mx-auto mb-3">
              <span className="text-[#c9a84c] text-2xl">▶</span>
            </div>
            <p className="font-sans text-[#5c6478] text-sm">Dashboard Overview</p>
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex items-center justify-between bg-[#162036] rounded-lg px-4 py-3 border border-[#1e2d45]">
            <span className="font-sans text-[#a0a8b8] text-sm">Live product</span>
            <a href="https://prova.ashketing.com" target="_blank" rel="noopener noreferrer" className="font-mono text-[#c9a84c] text-sm hover:text-[#d4b85c] flex items-center gap-1">
              prova.ashketing.com <ExternalLink size={12} />
            </a>
          </div>
          <div className="flex items-center justify-between bg-[#162036] rounded-lg px-4 py-3 border border-[#1e2d45]">
            <span className="font-sans text-[#a0a8b8] text-sm">Demo login</span>
            <span className="font-mono text-[#f0ebe0] text-sm">demo@getprova.com / demo1234</span>
          </div>
        </div>
      </div>

      <p className="font-sans text-[#5c6478] text-sm max-w-md">
        Pre-loaded with 5 vehicles, climate data, and service history.
      </p>
    </div>
  );
}

function CompetitionSlide() {
  const rows = [
    { feature: "Built for", them1: "Self-storage units", them2: "Self-storage chains", us: "Luxury car collections" },
    { feature: "Price", them1: "$90/mo", them2: "$50–200/mo", us: "$500–1,500/mo" },
    { feature: "Vehicle profiles", them1: false, them2: false, us: true },
    { feature: "Climate logging", them1: false, them2: false, us: true },
    { feature: "Service history", them1: false, them2: false, us: true },
    { feature: "Provenance docs", them1: false, them2: false, us: true },
    { feature: "Owner portal", them1: "Basic", them2: "Basic", us: "Premium" },
    { feature: "Marketplace", them1: false, them2: false, us: "Phase 3" },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-8 max-w-5xl mx-auto w-full">
      <p className="font-sans text-[#5c6478] text-xs uppercase tracking-widest mb-4">05 — Competition</p>
      <h2 className="font-serif text-[#f0ebe0] text-4xl md:text-5xl font-semibold mb-3 text-center">
        Built for car collections,<br />
        <span className="text-[#c9a84c] italic">not storage units</span>
      </h2>
      <p className="font-serif text-[#a0a8b8] text-lg italic text-center mb-10">
        &ldquo;Storeganise is for self-storage. Prova is for car collections.&rdquo;
      </p>

      <div className="w-full overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-[#1e2d45]">
              <th className="font-sans text-[#5c6478] text-xs uppercase tracking-wider py-3 pr-4 w-1/4"></th>
              <th className="font-sans text-[#5c6478] text-xs uppercase tracking-wider py-3 px-3 text-center">Storeganise</th>
              <th className="font-sans text-[#5c6478] text-xs uppercase tracking-wider py-3 px-3 text-center">SiteLink</th>
              <th className="font-sans text-[#c9a84c] text-xs uppercase tracking-wider py-3 px-3 text-center font-bold">Prova</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr key={i} className="border-b border-[#1e2d45]/50">
                <td className="font-sans text-[#f0ebe0] text-sm py-3 pr-4">{row.feature}</td>
                <td className="text-center py-3 px-3">
                  {typeof row.them1 === "boolean" ? (
                    row.them1 ? <Check size={16} className="text-[#4caf7d] mx-auto" /> : <XIcon size={16} className="text-[#c94c4c] mx-auto" />
                  ) : (
                    <span className="font-sans text-[#a0a8b8] text-sm">{row.them1}</span>
                  )}
                </td>
                <td className="text-center py-3 px-3">
                  {typeof row.them2 === "boolean" ? (
                    row.them2 ? <Check size={16} className="text-[#4caf7d] mx-auto" /> : <XIcon size={16} className="text-[#c94c4c] mx-auto" />
                  ) : (
                    <span className="font-sans text-[#a0a8b8] text-sm">{row.them2}</span>
                  )}
                </td>
                <td className="text-center py-3 px-3">
                  {typeof row.us === "boolean" ? (
                    row.us ? <Check size={16} className="text-[#c9a84c] mx-auto" /> : <XIcon size={16} className="text-[#c94c4c] mx-auto" />
                  ) : (
                    <span className="font-sans text-[#c9a84c] text-sm font-semibold">{row.us}</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function BusinessModelSlide() {
  const tiers = [
    { name: "Starter", price: "$500", features: ["Up to 30 vehicles", "Basic climate logging", "Email support"] },
    { name: "Professional", price: "$1,000", featured: true, features: ["Up to 100 vehicles", "Advanced climate", "Owner portal", "Priority support"] },
    { name: "Enterprise", price: "$1,500", features: ["Unlimited vehicles", "API access", "Dedicated support", "Multi-facility"] },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-8 max-w-5xl mx-auto w-full">
      <p className="font-sans text-[#5c6478] text-xs uppercase tracking-widest mb-4">06 — Business Model</p>
      <h2 className="font-serif text-[#f0ebe0] text-4xl md:text-5xl font-semibold mb-3 text-center">
        SaaS + <span className="text-[#c9a84c] italic">Marketplace</span>
      </h2>
      <p className="font-sans text-[#a0a8b8] text-base text-center mb-10 max-w-lg">
        Subscription tiers + 10–20% commission on service marketplace jobs (Phase 3)
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 w-full mb-10">
        {tiers.map((tier, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 + i * 0.1, duration: 0.5 }}
            className={`rounded-xl p-6 text-center border ${
              tier.featured ? "bg-[#162036] border-[#c9a84c]/60 relative" : "bg-[#0f1626] border-[#1e2d45]"
            }`}
          >
            {tier.featured && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 font-sans text-[#0a0e1a] text-xs font-semibold bg-[#c9a84c] rounded-full px-3 py-0.5">
                Most Popular
              </span>
            )}
            <h3 className="font-serif text-[#f0ebe0] text-lg font-semibold mb-2">{tier.name}</h3>
            <p className="font-serif text-[#c9a84c] text-4xl font-bold mb-4">
              {tier.price}<span className="font-sans text-[#5c6478] text-sm font-normal">/mo</span>
            </p>
            <ul className="space-y-1.5 text-left">
              {tier.features.map((f, j) => (
                <li key={j} className="font-sans text-[#a0a8b8] text-sm flex items-center gap-2">
                  <span className="text-[#c9a84c]">•</span> {f}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      <div className="flex flex-wrap justify-center gap-8">
        {[
          { label: "LTV", value: "$18,000+" },
          { label: "CAC Target", value: "<$500" },
          { label: "LTV:CAC", value: ">36:1" },
          { label: "Churn", value: "Near Zero" },
        ].map((m, i) => (
          <div key={i} className="text-center">
            <div className="font-mono text-[#c9a84c] text-xl font-bold">{m.value}</div>
            <div className="font-sans text-[#5c6478] text-xs mt-1">{m.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function GTMSlide() {
  const channels = [
    { name: "Direct Outbound", tag: "PRIMARY", desc: "500 identified facility operators across 20 US metros. Personalized cold email + LinkedIn." },
    { name: "Community Infiltration", tag: "PRIMARY", desc: "Reddit, Bring a Trailer, PCA, Ferrari Chat — value-first content in collector car communities." },
    { name: "Content / SEO", tag: "SECONDARY", desc: '"Car storage near me" gets 110K/mo searches. Zero purpose-built competitors ranking.' },
    { name: "Partnerships", tag: "SECONDARY", desc: "Hagerty Insurance, Bring a Trailer, classic car transport companies." },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-8 max-w-5xl mx-auto w-full">
      <p className="font-sans text-[#5c6478] text-xs uppercase tracking-widest mb-4">07 — Go-To-Market</p>
      <h2 className="font-serif text-[#f0ebe0] text-4xl md:text-5xl font-semibold mb-3 text-center">
        Small market. Big opportunity.<br />
        <span className="text-[#c9a84c] italic">Direct approach.</span>
      </h2>
      <p className="font-sans text-[#a0a8b8] text-base text-center mb-10 max-w-xl">
        In a market this niche, you don&apos;t need 10,000 visitors. You need 50 facility operators to see the product.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full mb-10">
        {channels.map((ch, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.15 + i * 0.1, duration: 0.5 }}
            className="bg-[#0f1626] border border-[#1e2d45] rounded-xl p-5"
          >
            <div className="flex items-center gap-2 mb-2">
              <h3 className="font-serif text-[#f0ebe0] text-base font-semibold">{ch.name}</h3>
              <span className={`font-mono text-xs px-2 py-0.5 rounded-full ${
                ch.tag === "PRIMARY" ? "bg-[#c9a84c]/20 text-[#c9a84c]" : "bg-[#1e2d45] text-[#5c6478]"
              }`}>
                {ch.tag}
              </span>
            </div>
            <p className="font-sans text-[#a0a8b8] text-sm leading-relaxed">{ch.desc}</p>
          </motion.div>
        ))}
      </div>

      <div className="bg-[#0f1626] border border-[#1e2d45] rounded-xl px-6 py-4 text-center">
        <p className="font-sans text-[#a0a8b8] text-sm">
          Month 1–3: <span className="text-[#f0ebe0] font-semibold">500 outreach emails</span> → <span className="text-[#f0ebe0] font-semibold">50 demos</span> → <span className="text-[#f0ebe0] font-semibold">10 paying customers</span> → <span className="text-[#c9a84c] font-bold">$5K–$15K MRR</span>
        </p>
        <p className="font-sans text-[#5c6478] text-xs mt-2">Total Q1 budget: ~$835 (bootstrapped GTM)</p>
      </div>
    </div>
  );
}

function RoadmapSlide() {
  const phases = [
    {
      phase: "Phase 1",
      timing: "NOW",
      title: "Operator Dashboard",
      active: true,
      items: ["Vehicle profiles & climate logs", "Service history & scheduling", "Owner directory & billing"],
    },
    {
      phase: "Phase 2",
      timing: "Month 3–4",
      title: "Owner Portal",
      items: ["Owners see vehicle status & photos", "Schedule services directly", 'Triggers word-of-mouth'],
    },
    {
      phase: "Phase 3",
      timing: "Month 6+",
      title: "Service Marketplace",
      items: ["Vetted detailers & mechanics", "10–20% commission per job", "Creates the moat"],
    },
    {
      phase: "Phase 4",
      timing: "Year 2",
      title: "IoT Integration",
      items: ["Direct climate sensors", "Automated alerts", "Real-time monitoring"],
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-8 max-w-5xl mx-auto w-full">
      <p className="font-sans text-[#5c6478] text-xs uppercase tracking-widest mb-4">08 — Roadmap</p>
      <h2 className="font-serif text-[#f0ebe0] text-4xl md:text-5xl font-semibold mb-3 text-center">
        From dashboard to <span className="text-[#c9a84c] italic">ecosystem</span>
      </h2>
      <p className="font-sans text-[#a0a8b8] text-base text-center mb-12 max-w-lg">
        Start with operations. Expand to the full vehicle lifecycle.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 w-full">
        {phases.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 + i * 0.12, duration: 0.5 }}
            className={`rounded-xl p-5 border ${
              p.active
                ? "bg-[#162036] border-[#c9a84c]/50"
                : "bg-[#0f1626] border-[#1e2d45]"
            }`}
          >
            <div className="flex items-center gap-2 mb-3">
              <span className={`font-mono text-xs px-2 py-0.5 rounded-full ${
                p.active ? "bg-[#c9a84c] text-[#0a0e1a]" : "bg-[#1e2d45] text-[#5c6478]"
              }`}>
                {p.timing}
              </span>
            </div>
            <h3 className="font-serif text-[#f0ebe0] text-base font-semibold mb-3">{p.title}</h3>
            <ul className="space-y-1.5">
              {p.items.map((item, j) => (
                <li key={j} className="font-sans text-[#a0a8b8] text-xs leading-relaxed flex items-start gap-2">
                  {p.active ? (
                    <Check size={12} className="text-[#c9a84c] mt-0.5 flex-shrink-0" />
                  ) : (
                    <span className="text-[#5c6478] mt-0.5 flex-shrink-0">○</span>
                  )}
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function TractionSlide() {
  const stats = [
    { value: "9/10", label: "Opportunity Score", sub: "IdeaBrowser" },
    { value: "81/100", label: "Idea Score", sub: "Verdict: GO" },
    { value: "+1,995%", label: "Search Growth", sub: '"Auto storage near me"' },
    { value: "0", label: "Competitors", sub: "Purpose-built software" },
  ];

  const signals = [
    "r/fatFIRE users calling storage companies 'a pain in the ass'",
    "110K/mo search volume for car storage — zero SaaS targeting it",
    "Product live and functional at prova.ashketing.com",
    "IoT sensor costs dropped 90%+ — climate monitoring now affordable",
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-8 max-w-5xl mx-auto w-full">
      <p className="font-sans text-[#5c6478] text-xs uppercase tracking-widest mb-4">09 — Traction</p>
      <h2 className="font-serif text-[#f0ebe0] text-4xl md:text-5xl font-semibold mb-10 text-center">
        Built from <span className="text-[#c9a84c] italic">real market signals</span>
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full mb-10">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 + i * 0.1, duration: 0.5 }}
            className="bg-[#0f1626] border border-[#1e2d45] rounded-xl p-5 text-center"
          >
            <p className="font-mono text-[#c9a84c] text-2xl md:text-3xl font-bold leading-none">{stat.value}</p>
            <p className="font-sans text-[#f0ebe0] text-sm font-semibold mt-2">{stat.label}</p>
            <p className="font-sans text-[#5c6478] text-xs mt-1">{stat.sub}</p>
          </motion.div>
        ))}
      </div>

      <div className="w-full max-w-2xl space-y-3">
        {signals.map((signal, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 + i * 0.1, duration: 0.4 }}
            className="flex items-start gap-3"
          >
            <div className="w-0.5 self-stretch bg-[#c9a84c] flex-shrink-0 mt-1 rounded-full" />
            <p className="font-sans text-[#a0a8b8] text-sm leading-relaxed">{signal}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function TeamSlide() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-8 max-w-4xl mx-auto w-full text-center">
      <p className="font-sans text-[#5c6478] text-xs uppercase tracking-widest mb-4">10 — Team</p>
      <h2 className="font-serif text-[#f0ebe0] text-4xl md:text-5xl font-semibold mb-4">
        <span className="text-[#c9a84c] italic">ChimeStream</span> Portfolio
      </h2>
      <p className="font-sans text-[#a0a8b8] text-base mb-12 max-w-xl">
        A product studio that identifies underserved B2B niches and ships purpose-built software.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 w-full max-w-2xl">
        {[
          { icon: "⚡", title: "AI/Automation Expertise", desc: "Serial founder, AI automation specialist" },
          { icon: "🛠", title: "Full-Stack Development", desc: "Next.js, PostgreSQL, Coolify — ship fast" },
          { icon: "📣", title: "Marketing & Distribution", desc: "Content marketing, community-led growth" },
          { icon: "🚀", title: "Ship Fast, Iterate Live", desc: "Idea → live product in days, not months" },
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 + i * 0.1, duration: 0.5 }}
            className="bg-[#0f1626] border border-[#1e2d45] rounded-xl p-5 text-left"
          >
            <span className="text-xl mb-2 block">{item.icon}</span>
            <h3 className="font-serif text-[#f0ebe0] text-base font-semibold mb-1">{item.title}</h3>
            <p className="font-sans text-[#a0a8b8] text-sm">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function AskSlide() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-8 max-w-4xl mx-auto w-full text-center">
      <p className="font-sans text-[#5c6478] text-xs uppercase tracking-widest mb-4">11 — The Ask</p>
      <h2 className="font-serif text-[#c9a84c] text-4xl md:text-6xl font-semibold mb-8">
        Try Prova Today
      </h2>

      <div className="space-y-4 w-full max-w-lg mb-12">
        <motion.a
          href="https://prova.ashketing.com/signup"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="block bg-[#c9a84c] text-[#0a0e1a] font-sans font-semibold text-base py-4 px-8 rounded-full hover:bg-[#d4b85c] transition-colors duration-200"
        >
          Start Your 14-Day Free Trial →
        </motion.a>
        <motion.a
          href="https://prova.ashketing.com/contact"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.5 }}
          className="block border border-[#1e2d45] text-[#f0ebe0] font-sans text-base py-4 px-8 rounded-full hover:border-[#c9a84c]/40 transition-colors duration-200"
        >
          Partnership Inquiries
        </motion.a>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="bg-[#0f1626] border border-[#1e2d45] rounded-xl px-6 py-4 mb-8"
      >
        <p className="font-sans text-[#a0a8b8] text-sm">
          Demo: <span className="font-mono text-[#f0ebe0]">demo@getprova.com</span> / <span className="font-mono text-[#f0ebe0]">demo1234</span>
        </p>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.6 }}
        className="font-serif text-[#f0ebe0] text-xl md:text-2xl italic max-w-lg"
      >
        &ldquo;The cars your clients trust you with deserve better tools.&rdquo;
      </motion.p>
    </div>
  );
}

// ─── Slide Renderer ───────────────────────────────────────────────────────────

function renderSlide(index: number) {
  switch (index) {
    case 0: return <TitleSlide />;
    case 1: return <ProblemSlide />;
    case 2: return <MarketSlide />;
    case 3: return <SolutionSlide />;
    case 4: return <ProductSlide />;
    case 5: return <CompetitionSlide />;
    case 6: return <BusinessModelSlide />;
    case 7: return <GTMSlide />;
    case 8: return <RoadmapSlide />;
    case 9: return <TractionSlide />;
    case 10: return <TeamSlide />;
    case 11: return <AskSlide />;
    default: return null;
  }
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function DeckPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);

  const goTo = useCallback(
    (index: number) => {
      if (index < 0 || index >= slideLabels.length) return;
      setDirection(index > currentSlide ? 1 : -1);
      setCurrentSlide(index);
    },
    [currentSlide]
  );

  const next = useCallback(() => goTo(currentSlide + 1), [currentSlide, goTo]);
  const prev = useCallback(() => goTo(currentSlide - 1), [currentSlide, goTo]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "ArrowDown" || e.key === " ") {
        e.preventDefault();
        next();
      } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        e.preventDefault();
        prev();
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [next, prev]);

  // Touch/swipe support
  useEffect(() => {
    let startX = 0;
    const handleTouchStart = (e: TouchEvent) => { startX = e.touches[0].clientX; };
    const handleTouchEnd = (e: TouchEvent) => {
      const diff = startX - e.changedTouches[0].clientX;
      if (Math.abs(diff) > 50) {
        if (diff > 0) next();
        else prev();
      }
    };
    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchend", handleTouchEnd);
    return () => {
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [next, prev]);

  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? "100%" : "-100%", opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? "-100%" : "100%", opacity: 0 }),
  };

  return (
    <div className="min-h-screen bg-[#0a0e1a] overflow-hidden relative select-none">
      {/* Background texture */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 25% 25%, #c9a84c 0%, transparent 50%), radial-gradient(circle at 75% 75%, #1e2d45 0%, transparent 50%)",
        }}
      />

      {/* Slide area */}
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={currentSlide}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.4, ease: [0.32, 0, 0.67, 0] }}
          className="absolute inset-0 flex items-center justify-center"
        >
          {renderSlide(currentSlide)}
        </motion.div>
      </AnimatePresence>

      {/* Navigation */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3 z-50">
        <button
          onClick={prev}
          disabled={currentSlide === 0}
          className="w-9 h-9 rounded-full border border-[#1e2d45] bg-[#0f1626] flex items-center justify-center text-[#5c6478] hover:text-[#f0ebe0] hover:border-[#c9a84c]/40 transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed"
          aria-label="Previous slide"
        >
          <ChevronLeft size={16} />
        </button>

        <div className="flex items-center gap-1.5 px-2">
          {slideLabels.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
            >
              <div
                className={`rounded-full transition-all duration-300 ${
                  i === currentSlide
                    ? "w-5 h-1.5 bg-[#c9a84c]"
                    : "w-1.5 h-1.5 bg-[#1e2d45] hover:bg-[#5c6478]"
                }`}
              />
            </button>
          ))}
        </div>

        <button
          onClick={next}
          disabled={currentSlide === slideLabels.length - 1}
          className="w-9 h-9 rounded-full border border-[#1e2d45] bg-[#0f1626] flex items-center justify-center text-[#5c6478] hover:text-[#f0ebe0] hover:border-[#c9a84c]/40 transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed"
          aria-label="Next slide"
        >
          <ChevronRight size={16} />
        </button>
      </div>

      {/* Slide counter */}
      <div className="fixed bottom-8 right-8 z-50">
        <span className="font-sans text-[#5c6478] text-sm tabular-nums">
          {currentSlide + 1} / {slideLabels.length}
        </span>
      </div>

      {/* Slide label */}
      <div className="fixed top-8 left-8 z-50">
        <AnimatePresence mode="wait">
          <motion.span
            key={currentSlide}
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 4 }}
            transition={{ duration: 0.25 }}
            className="font-sans text-[#5c6478] text-xs uppercase tracking-wider"
          >
            {slideLabels[currentSlide]}
          </motion.span>
        </AnimatePresence>
      </div>

      {/* Wordmark */}
      <div className="fixed top-8 right-8 z-50">
        <span className="font-serif italic font-bold text-[#c9a84c]/40 tracking-widest uppercase text-sm">
          Prova
        </span>
      </div>
    </div>
  );
}
