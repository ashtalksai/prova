"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

// ─── Slide Data ───────────────────────────────────────────────────────────────

interface Slide {
  id: string;
  label: string;
}

const slides: Slide[] = [
  { id: "title", label: "Title" },
  { id: "problem", label: "Problem" },
  { id: "solution", label: "Solution" },
  { id: "product", label: "Product" },
  { id: "market", label: "Market" },
  { id: "model", label: "Business Model" },
  { id: "traction", label: "Traction" },
  { id: "team", label: "Team" },
  { id: "ask", label: "Ask" },
];

// ─── Slide Components ─────────────────────────────────────────────────────────

function TitleSlide() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-8">
      <div className="mb-6">
        <div className="w-16 h-px bg-[#c9a84c] mx-auto mb-8 opacity-60" />
        <h1 className="font-serif italic font-bold text-[#c9a84c] text-7xl md:text-8xl tracking-widest uppercase leading-none mb-6">
          Prova
        </h1>
        <div className="w-16 h-px bg-[#c9a84c] mx-auto mt-8 opacity-60" />
      </div>
      <p className="font-sans text-[#a0a8b8] text-xl md:text-2xl font-light tracking-wide mt-8 max-w-lg">
        Operations Software for Luxury Car Storage
      </p>
      <p className="font-sans text-[#5c6478] text-sm mt-12 tracking-wider">
        Press → to navigate
      </p>
    </div>
  );
}

function ProblemSlide() {
  const bullets = [
    "$50B+ luxury car storage market runs on spreadsheets",
    "Owners have zero visibility into vehicle conditions",
    "No purpose-built software exists for this vertical",
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-8 max-w-4xl mx-auto w-full">
      <p className="font-sans text-[#5c6478] text-xs uppercase tracking-widest mb-4">
        01 — Problem
      </p>
      <h2 className="font-serif text-[#f0ebe0] text-5xl md:text-6xl font-semibold mb-16 text-center">
        The Problem
      </h2>
      <div className="space-y-6 w-full max-w-2xl">
        {bullets.map((bullet, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 + i * 0.15, duration: 0.5 }}
            className="flex items-start gap-5"
          >
            <div className="w-0.5 self-stretch bg-[#c9a84c] flex-shrink-0 mt-1 rounded-full" />
            <p className="font-sans text-[#f0ebe0] text-lg md:text-xl leading-relaxed">
              {bullet}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function SolutionSlide() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-8 max-w-4xl mx-auto w-full text-center">
      <p className="font-sans text-[#5c6478] text-xs uppercase tracking-widest mb-4">
        02 — Solution
      </p>
      <h2 className="font-serif text-[#c9a84c] text-5xl md:text-6xl font-semibold mb-12">
        The Solution
      </h2>
      <div className="bg-[#0f1626] border border-[#1e2d45] rounded-2xl p-10 md:p-14 max-w-2xl">
        <p className="font-serif text-[#f0ebe0] text-2xl md:text-3xl leading-relaxed font-light">
          Prova is the{" "}
          <span className="text-[#c9a84c] italic">Bloomberg Terminal</span> for
          luxury car storage.
        </p>
        <p className="font-sans text-[#a0a8b8] text-base md:text-lg mt-6 leading-relaxed">
          One platform for vehicle management, climate monitoring, service
          coordination, and owner communication.
        </p>
      </div>
    </div>
  );
}

const features = [
  {
    icon: "◈",
    title: "Vehicle Profiles",
    desc: "Complete digital records for every asset in your facility.",
  },
  {
    icon: "◉",
    title: "Climate Monitoring",
    desc: "Real-time temperature and humidity tracking, 24/7.",
  },
  {
    icon: "◎",
    title: "Service Management",
    desc: "Schedule, track, and document every service event.",
  },
  {
    icon: "◍",
    title: "Owner Portal",
    desc: "Give clients white-glove visibility into their collections.",
  },
];

function ProductSlide() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-8 max-w-4xl mx-auto w-full">
      <p className="font-sans text-[#5c6478] text-xs uppercase tracking-widest mb-4">
        03 — Product
      </p>
      <h2 className="font-serif text-[#f0ebe0] text-5xl md:text-6xl font-semibold mb-12 text-center">
        The Product
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 w-full">
        {features.map((feature, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 + i * 0.1, duration: 0.5 }}
            className="bg-[#0f1626] border border-[#1e2d45] rounded-xl p-6 hover:border-[#c9a84c]/40 transition-colors duration-300"
          >
            <span className="text-[#c9a84c] text-2xl">{feature.icon}</span>
            <h3 className="font-serif text-[#f0ebe0] text-xl font-semibold mt-3 mb-2">
              {feature.title}
            </h3>
            <p className="font-sans text-[#a0a8b8] text-sm leading-relaxed">
              {feature.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

const marketTiers = [
  { label: "TAM", sublabel: "Luxury Vehicle Storage", value: "$50B", width: "w-full" },
  { label: "SAM", sublabel: "Managed Facilities", value: "$5B", width: "w-2/3" },
  { label: "SOM", sublabel: "North America Year 1", value: "$500M", width: "w-1/3" },
];

function MarketSlide() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-8 max-w-4xl mx-auto w-full">
      <p className="font-sans text-[#5c6478] text-xs uppercase tracking-widest mb-4">
        04 — Market
      </p>
      <h2 className="font-serif text-[#f0ebe0] text-5xl md:text-6xl font-semibold mb-14 text-center">
        Market Opportunity
      </h2>
      <div className="space-y-6 w-full max-w-2xl">
        {marketTiers.map((tier, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 + i * 0.15, duration: 0.5 }}
            className="flex items-center gap-6"
          >
            <div className="w-16 flex-shrink-0 text-right">
              <span className="font-sans text-[#5c6478] text-xs uppercase tracking-wider">
                {tier.label}
              </span>
            </div>
            <div className="flex-1 relative">
              <div className="h-12 bg-[#0f1626] border border-[#1e2d45] rounded-lg overflow-hidden">
                <motion.div
                  className={`h-full bg-gradient-to-r from-[#c9a84c]/30 to-[#c9a84c]/10 border-r border-[#c9a84c]/50 ${tier.width}`}
                  initial={{ width: 0 }}
                  animate={{ width: undefined }}
                  transition={{ delay: 0.4 + i * 0.15, duration: 0.8 }}
                />
              </div>
              <div className="absolute inset-0 flex items-center justify-between px-4">
                <span className="font-sans text-[#a0a8b8] text-sm">
                  {tier.sublabel}
                </span>
                <span className="font-serif text-[#c9a84c] text-xl font-bold">
                  {tier.value}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

const pricingTiers = [
  { name: "Starter", price: "$500", period: "/mo", desc: "Up to 30 vehicles" },
  { name: "Professional", price: "$1,000", period: "/mo", desc: "Up to 100 vehicles", featured: true },
  { name: "Enterprise", price: "$1,500", period: "/mo", desc: "Unlimited vehicles" },
];

function ModelSlide() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-8 max-w-4xl mx-auto w-full">
      <p className="font-sans text-[#5c6478] text-xs uppercase tracking-widest mb-4">
        05 — Business Model
      </p>
      <h2 className="font-serif text-[#f0ebe0] text-5xl md:text-6xl font-semibold mb-12 text-center">
        Business Model
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 w-full mb-10">
        {pricingTiers.map((tier, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 + i * 0.1, duration: 0.5 }}
            className={`rounded-xl p-6 text-center border ${
              tier.featured
                ? "bg-[#162036] border-[#c9a84c]/60"
                : "bg-[#0f1626] border-[#1e2d45]"
            }`}
          >
            {tier.featured && (
              <span className="font-sans text-[#0a0e1a] text-xs font-semibold bg-[#c9a84c] rounded-full px-3 py-0.5 mb-3 inline-block">
                Most Popular
              </span>
            )}
            <h3 className="font-serif text-[#f0ebe0] text-lg font-semibold mb-3">
              {tier.name}
            </h3>
            <p className="font-serif text-[#c9a84c] text-4xl font-bold">
              {tier.price}
              <span className="font-sans text-[#5c6478] text-sm font-normal">
                {tier.period}
              </span>
            </p>
            <p className="font-sans text-[#a0a8b8] text-sm mt-2">{tier.desc}</p>
          </motion.div>
        ))}
      </div>
      <div className="bg-[#0f1626] border border-[#1e2d45] rounded-xl px-8 py-4 text-center">
        <p className="font-sans text-[#a0a8b8] text-base">
          <span className="text-[#f0ebe0] font-semibold">100 facilities</span>{" "}
          ×{" "}
          <span className="text-[#f0ebe0] font-semibold">$1,000/mo</span>{" "}
          ={" "}
          <span className="text-[#c9a84c] font-bold text-lg">$1.2M ARR</span>
        </p>
      </div>
    </div>
  );
}

const tractionStats = [
  { value: "50+", label: "Facilities on waitlist" },
  { value: "$2B+", label: "Assets under potential management" },
  { value: "3", label: "LOIs signed" },
  { value: "Q2 2026", label: "Beta launching" },
];

function TractionSlide() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-8 max-w-4xl mx-auto w-full">
      <p className="font-sans text-[#5c6478] text-xs uppercase tracking-widest mb-4">
        06 — Traction
      </p>
      <h2 className="font-serif text-[#f0ebe0] text-5xl md:text-6xl font-semibold mb-14 text-center">
        Traction
      </h2>
      <div className="grid grid-cols-2 gap-5 w-full max-w-2xl">
        {tractionStats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.15 + i * 0.12, duration: 0.5 }}
            className="bg-[#0f1626] border border-[#1e2d45] rounded-xl p-7 text-center hover:border-[#c9a84c]/40 transition-colors duration-300"
          >
            <p className="font-serif text-[#c9a84c] text-4xl md:text-5xl font-bold leading-none">
              {stat.value}
            </p>
            <p className="font-sans text-[#a0a8b8] text-sm mt-3 leading-snug">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

const teamMembers = [
  {
    role: "CEO",
    name: "Alexandra Voss",
    bg: "Luxury Automotive",
    desc: "15 years in luxury vehicle sales and collection management. Former VP at RM Sotheby's.",
  },
  {
    role: "CTO",
    name: "Marcus Chen",
    bg: "Enterprise SaaS",
    desc: "Built and scaled two enterprise SaaS platforms to $50M ARR. Former Principal Engineer at Salesforce.",
  },
  {
    role: "COO",
    name: "Elena Reyes",
    bg: "Facility Management",
    desc: "Operated a network of 12 premium storage facilities across the US. MBA from Wharton.",
  },
];

function TeamSlide() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-8 max-w-4xl mx-auto w-full">
      <p className="font-sans text-[#5c6478] text-xs uppercase tracking-widest mb-4">
        07 — Team
      </p>
      <h2 className="font-serif text-[#f0ebe0] text-5xl md:text-6xl font-semibold mb-12 text-center">
        The Team
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 w-full">
        {teamMembers.map((member, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 + i * 0.12, duration: 0.5 }}
            className="bg-[#0f1626] border border-[#1e2d45] rounded-xl p-6 hover:border-[#c9a84c]/30 transition-colors duration-300"
          >
            <div className="w-10 h-10 rounded-full bg-[#162036] border border-[#c9a84c]/30 flex items-center justify-center mb-4">
              <span className="font-serif text-[#c9a84c] text-sm font-bold">
                {member.role[0]}
              </span>
            </div>
            <span className="font-sans text-[#c9a84c] text-xs uppercase tracking-wider font-semibold">
              {member.role}
            </span>
            <h3 className="font-serif text-[#f0ebe0] text-lg font-semibold mt-1 mb-1">
              {member.name}
            </h3>
            <p className="font-sans text-[#5c6478] text-xs mb-3">
              {member.bg} background
            </p>
            <p className="font-sans text-[#a0a8b8] text-sm leading-relaxed">
              {member.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

const fundAllocation = [
  { label: "Product", pct: 40, color: "#c9a84c" },
  { label: "Sales", pct: 30, color: "#a0a8b8" },
  { label: "Operations", pct: 20, color: "#5c6478" },
  { label: "Reserve", pct: 10, color: "#1e2d45" },
];

function AskSlide() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-8 max-w-4xl mx-auto w-full text-center">
      <p className="font-sans text-[#5c6478] text-xs uppercase tracking-widest mb-4">
        08 — Ask
      </p>
      <h2 className="font-serif text-[#c9a84c] text-5xl md:text-6xl font-semibold mb-4">
        The Ask
      </h2>
      <p className="font-serif text-[#f0ebe0] text-2xl md:text-3xl font-light mb-12">
        Raising{" "}
        <span className="text-[#c9a84c] font-semibold">$2M Seed Round</span>
      </p>

      <div className="w-full max-w-md mb-10">
        <div className="flex h-4 rounded-full overflow-hidden mb-4">
          {fundAllocation.map((item, i) => (
            <motion.div
              key={i}
              initial={{ width: 0 }}
              animate={{ width: `${item.pct}%` }}
              transition={{ delay: 0.3 + i * 0.1, duration: 0.6, ease: "easeOut" }}
              style={{ backgroundColor: item.color }}
              className="h-full"
            />
          ))}
        </div>
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
          {fundAllocation.map((item, i) => (
            <div key={i} className="flex items-center gap-2">
              <div
                className="w-2.5 h-2.5 rounded-sm flex-shrink-0"
                style={{ backgroundColor: item.color }}
              />
              <span className="font-sans text-[#a0a8b8] text-sm">
                {item.label}{" "}
                <span className="text-[#f0ebe0] font-medium">{item.pct}%</span>
              </span>
            </div>
          ))}
        </div>
      </div>

      <a
        href="mailto:hello@getprova.com"
        className="font-sans text-[#c9a84c] hover:text-[#d4b85c] transition-colors duration-200 text-lg underline underline-offset-4 decoration-[#c9a84c]/40"
      >
        hello@getprova.com
      </a>
    </div>
  );
}

// ─── Slide Renderer ───────────────────────────────────────────────────────────

function renderSlide(index: number) {
  switch (index) {
    case 0: return <TitleSlide />;
    case 1: return <ProblemSlide />;
    case 2: return <SolutionSlide />;
    case 3: return <ProductSlide />;
    case 4: return <MarketSlide />;
    case 5: return <ModelSlide />;
    case 6: return <TractionSlide />;
    case 7: return <TeamSlide />;
    case 8: return <AskSlide />;
    default: return null;
  }
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function DeckPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);

  const goTo = useCallback(
    (index: number) => {
      if (index < 0 || index >= slides.length) return;
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

  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({
      x: dir > 0 ? "-100%" : "100%",
      opacity: 0,
    }),
  };

  return (
    <div className="min-h-screen bg-[#0a0e1a] overflow-hidden relative select-none">
      {/* Subtle background texture */}
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
          transition={{ duration: 0.45, ease: [0.32, 0, 0.67, 0] }}
          className="absolute inset-0 flex items-center justify-center"
        >
          {renderSlide(currentSlide)}
        </motion.div>
      </AnimatePresence>

      {/* Navigation arrows */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3 z-50">
        <button
          onClick={prev}
          disabled={currentSlide === 0}
          className="w-9 h-9 rounded-full border border-[#1e2d45] bg-[#0f1626] flex items-center justify-center text-[#5c6478] hover:text-[#f0ebe0] hover:border-[#c9a84c]/40 transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed"
          aria-label="Previous slide"
        >
          <ChevronLeft size={16} />
        </button>

        {/* Navigation dots */}
        <div className="flex items-center gap-2 px-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              className="relative flex items-center justify-center"
            >
              <div
                className={`rounded-full transition-all duration-300 ${
                  i === currentSlide
                    ? "w-6 h-1.5 bg-[#c9a84c]"
                    : "w-1.5 h-1.5 bg-[#1e2d45] hover:bg-[#5c6478]"
                }`}
              />
            </button>
          ))}
        </div>

        <button
          onClick={next}
          disabled={currentSlide === slides.length - 1}
          className="w-9 h-9 rounded-full border border-[#1e2d45] bg-[#0f1626] flex items-center justify-center text-[#5c6478] hover:text-[#f0ebe0] hover:border-[#c9a84c]/40 transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed"
          aria-label="Next slide"
        >
          <ChevronRight size={16} />
        </button>
      </div>

      {/* Slide counter */}
      <div className="fixed bottom-8 right-8 z-50">
        <span className="font-sans text-[#5c6478] text-sm tabular-nums">
          {currentSlide + 1} / {slides.length}
        </span>
      </div>

      {/* Slide label — top left */}
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
            {slides[currentSlide].label}
          </motion.span>
        </AnimatePresence>
      </div>

      {/* PROVA wordmark — top right */}
      <div className="fixed top-8 right-8 z-50">
        <span className="font-serif italic font-bold text-[#c9a84c]/40 tracking-widest uppercase text-sm">
          Prova
        </span>
      </div>
    </div>
  );
}
