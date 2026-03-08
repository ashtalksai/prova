"use client";

import { useState, useEffect, useRef } from "react";
import { Menu, X, BarChart2, Target, Megaphone, Palette, Presentation, ExternalLink, Github, Check, ChevronDown } from "lucide-react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

// ─── Types ────────────────────────────────────────────────────────────────────

interface Section {
  id: string;
  label: string;
  icon: React.ReactNode;
}

const sections: Section[] = [
  { id: "research", label: "Research", icon: <BarChart2 size={14} /> },
  { id: "gtm", label: "GTM Plan", icon: <Target size={14} /> },
  { id: "marketing", label: "Marketing", icon: <Megaphone size={14} /> },
  { id: "brand", label: "Brand", icon: <Palette size={14} /> },
  { id: "pitch", label: "Pitch Deck", icon: <Presentation size={14} /> },
];

// ─── Sidebar ──────────────────────────────────────────────────────────────────

function SidebarContent({ activeSection, onSelect }: { activeSection: string; onSelect: (id: string) => void }) {
  return (
    <div className="p-6">
      <div className="mb-8">
        <h2 className="font-serif text-lg text-[#c9a84c] font-semibold tracking-wide">Documentation</h2>
        <p className="font-sans text-[#5c6478] text-xs mt-1">Strategy, research & brand</p>
      </div>

      <nav className="space-y-1">
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => onSelect(section.id)}
            className={`w-full text-left flex items-center gap-2.5 px-3 py-2.5 rounded-lg font-sans text-sm transition-all duration-150 ${
              activeSection === section.id
                ? "bg-[#162036] text-[#c9a84c] font-medium"
                : "text-[#a0a8b8] hover:text-[#f0ebe0] hover:bg-[#0f1626]"
            }`}
          >
            <span className={activeSection === section.id ? "text-[#c9a84c]" : "text-[#5c6478]"}>
              {section.icon}
            </span>
            {section.label}
          </button>
        ))}
      </nav>

      <div className="mt-8 pt-6 border-t border-[#1e2d45] space-y-2">
        <a
          href="https://prova.ashketing.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-3 py-2 rounded-lg font-sans text-sm text-[#a0a8b8] hover:text-[#f0ebe0] hover:bg-[#0f1626] transition-all duration-150"
        >
          <ExternalLink size={14} className="text-[#5c6478]" /> Live Site
        </a>
        <a
          href="https://github.com/ashtalksai/prova"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-3 py-2 rounded-lg font-sans text-sm text-[#a0a8b8] hover:text-[#f0ebe0] hover:bg-[#0f1626] transition-all duration-150"
        >
          <Github size={14} className="text-[#5c6478]" /> GitHub
        </a>
        <a
          href="/deck"
          className="flex items-center gap-2 px-3 py-2 rounded-lg font-sans text-sm text-[#a0a8b8] hover:text-[#f0ebe0] hover:bg-[#0f1626] transition-all duration-150"
        >
          <Presentation size={14} className="text-[#5c6478]" /> View Deck
        </a>
      </div>
    </div>
  );
}

// ─── Section Components ───────────────────────────────────────────────────────

function ResearchSection() {
  return (
    <div className="space-y-10">
      {/* Executive Summary */}
      <div>
        <div className="flex items-center gap-2 mb-2">
          <span className="text-[#c9a84c]"><BarChart2 size={16} /></span>
          <span className="font-sans text-[#5c6478] text-xs uppercase tracking-wider">Research Brief</span>
        </div>
        <h1 className="font-serif text-[#f0ebe0] text-3xl md:text-4xl font-semibold mb-4">Market Research & Validation</h1>
        <p className="font-sans text-[#a0a8b8] text-base leading-relaxed max-w-2xl">
          Prova addresses the luxury/collector car storage vertical — a growing market with zero purpose-built software. Source: IdeaBrowser analysis + community validation.
        </p>
      </div>

      {/* Scores */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: "Opportunity", value: "9/10", desc: "Exceptional" },
          { label: "Problem Pain", value: "8/10", desc: "High" },
          { label: "Idea Score", value: "81/100", desc: "GO" },
          { label: "Why Now", value: "9/10", desc: "Perfect timing" },
        ].map((s, i) => (
          <div key={i} className="bg-[#0f1626] border border-[#1e2d45] rounded-xl p-5 text-center">
            <div className="font-mono text-[#c9a84c] text-2xl font-bold">{s.value}</div>
            <div className="font-sans text-[#f0ebe0] text-sm font-medium mt-1">{s.label}</div>
            <div className="font-sans text-[#5c6478] text-xs mt-0.5">{s.desc}</div>
          </div>
        ))}
      </div>

      {/* Market Size */}
      <div>
        <h2 className="font-serif text-[#f0ebe0] text-xl font-semibold mb-4">Market Opportunity</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-[#c9a84c] rounded-xl p-5">
            <span className="font-mono text-[#0a0e1a] text-xs uppercase tracking-wider">TAM (US)</span>
            <div className="font-serif text-[#0a0e1a] text-3xl font-bold mt-1">$3M–$36M</div>
            <div className="font-sans text-[#0a0e1a]/70 text-sm mt-1">500–2,000 facilities × $500–$1,500/mo</div>
          </div>
          <div className="bg-[#0f1626] border border-[#1e2d45] rounded-xl p-5">
            <span className="font-mono text-[#5c6478] text-xs uppercase tracking-wider">TAM (Global)</span>
            <div className="font-serif text-[#f0ebe0] text-3xl font-bold mt-1">$9M–$180M</div>
            <div className="font-sans text-[#a0a8b8] text-sm mt-1">US + EU + Middle East + Asia</div>
          </div>
          <div className="bg-[#0f1626] border border-[#1e2d45] rounded-xl p-5">
            <span className="font-mono text-[#5c6478] text-xs uppercase tracking-wider">Revenue Potential</span>
            <div className="font-serif text-[#f0ebe0] text-3xl font-bold mt-1">$1M–$10M</div>
            <div className="font-sans text-[#a0a8b8] text-sm mt-1">SaaS + marketplace commission</div>
          </div>
        </div>
      </div>

      {/* Search Demand */}
      <div>
        <h2 className="font-serif text-[#f0ebe0] text-xl font-semibold mb-4">Search Demand</h2>
        <div className="bg-[#0f1626] border border-[#1e2d45] rounded-xl overflow-hidden">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-[#1e2d45]">
                <th className="font-sans text-[#5c6478] text-xs uppercase tracking-wider py-3 px-4">Keyword</th>
                <th className="font-sans text-[#5c6478] text-xs uppercase tracking-wider py-3 px-4">Volume</th>
                <th className="font-sans text-[#5c6478] text-xs uppercase tracking-wider py-3 px-4">Competition</th>
              </tr>
            </thead>
            <tbody>
              {[
                { keyword: "car storage near me", vol: "110K/mo", comp: "LOW" },
                { keyword: "auto storage facilities near me", vol: "4,400/mo", comp: "LOW", growth: "+1,995%" },
                { keyword: "climate controlled car storage", vol: "2,400/mo", comp: "MEDIUM" },
                { keyword: "collector car storage", vol: "1,000/mo", comp: "LOW" },
                { keyword: "luxury car storage software", vol: "<100", comp: "NONE" },
              ].map((row, i) => (
                <tr key={i} className="border-b border-[#1e2d45]/50">
                  <td className="font-sans text-[#f0ebe0] text-sm py-3 px-4">
                    {row.keyword}
                    {row.growth && <span className="ml-2 text-[#4caf7d] text-xs font-mono">{row.growth}</span>}
                  </td>
                  <td className="font-mono text-[#c9a84c] text-sm py-3 px-4">{row.vol}</td>
                  <td className="font-sans text-[#a0a8b8] text-sm py-3 px-4">{row.comp}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Competitors */}
      <div>
        <h2 className="font-serif text-[#f0ebe0] text-xl font-semibold mb-4">Competitive Landscape</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { name: "Storeganise", type: "Self-storage SaaS", price: "$90/mo", gap: "Built for storage units, not vehicles. No climate logs, no service history, no provenance." },
            { name: "Auto Concierge", type: "White-glove service", price: "Custom", gap: "Service business, not software product. Prova makes their capabilities available to any facility." },
            { name: "CarStorageSoftware.com", type: "Newer entrant", price: "Unknown", gap: "Basic photo docs & payments. Missing climate sensors, provenance documentation, marketplace." },
          ].map((c, i) => (
            <div key={i} className="bg-[#0f1626] border border-[#1e2d45] rounded-xl p-5">
              <h3 className="font-serif text-[#f0ebe0] text-base font-semibold">{c.name}</h3>
              <p className="font-sans text-[#5c6478] text-xs mt-0.5">{c.type} · {c.price}</p>
              <p className="font-sans text-[#a0a8b8] text-sm mt-3 leading-relaxed">{c.gap}</p>
            </div>
          ))}
        </div>
        <div className="bg-[#162036] border border-[#c9a84c]/20 rounded-xl p-4 mt-4">
          <p className="font-serif text-[#c9a84c] text-sm italic">
            &ldquo;Storeganise is for self-storage. Prova is for car collections.&rdquo;
          </p>
        </div>
      </div>

      {/* Validation */}
      <div>
        <h2 className="font-serif text-[#f0ebe0] text-xl font-semibold mb-4">Community Validation</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { platform: "Reddit", score: "8/10", members: "2.5M+", detail: "r/Entrepreneur, r/fatFIRE, r/cars, r/selfstorage — active threads about storage pain" },
            { platform: "Facebook", score: "7/10", members: "150K+", detail: "Luxury car collector groups, storage business owner groups" },
            { platform: "YouTube", score: "7/10", members: "14 channels", detail: "Luxury car maintenance, storage tours, collection management content" },
            { platform: "Niche Forums", score: "8/10", members: "Active", detail: "Bring a Trailer, Hagerty, PCA, Ferrari Chat — tight-knit collector communities" },
          ].map((v, i) => (
            <div key={i} className="bg-[#0f1626] border border-[#1e2d45] rounded-xl p-5">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-sans text-[#f0ebe0] text-sm font-semibold">{v.platform}</h3>
                <span className="font-mono text-[#c9a84c] text-xs">{v.score}</span>
              </div>
              <p className="font-sans text-[#5c6478] text-xs mb-2">{v.members} members</p>
              <p className="font-sans text-[#a0a8b8] text-sm leading-relaxed">{v.detail}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Recommendation */}
      <div className="bg-[#162036] border border-[#c9a84c]/30 rounded-xl p-6">
        <h2 className="font-serif text-[#c9a84c] text-xl font-semibold mb-3">Recommendation: GO</h2>
        <p className="font-sans text-[#a0a8b8] text-base leading-relaxed">
          Score 81/100. High problem severity, clear monetization ($500–$1,500/mo SaaS + marketplace), zero direct competition, 
          explosive search growth (+1,995%), and strong community signals. MVP (operator dashboard) buildable in 2–4 weeks.
          Near-zero churn expected once operational = exceptional LTV.
        </p>
      </div>
    </div>
  );
}

function GTMSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="space-y-10">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2 mb-2">
          <span className="text-[#c9a84c]"><Target size={16} /></span>
          <span className="font-sans text-[#5c6478] text-xs uppercase tracking-wider">Go-To-Market Plan</span>
        </div>
        <h1 className="font-serif text-[#f0ebe0] text-3xl md:text-4xl font-semibold mb-4">Go-To-Market Strategy</h1>
        <p className="font-sans text-[#a0a8b8] text-base leading-relaxed max-w-2xl">
          Outbound-led with community support. In a market this niche, you don&apos;t need 10,000 visitors. You need 50 facility operators to see the product.
        </p>
      </div>

      {/* ICP */}
      <div>
        <h2 className="font-serif text-[#f0ebe0] text-xl font-semibold mb-4">Ideal Customer Profile</h2>
        <div className="bg-[#0f1626] border border-[#1e2d45] rounded-xl p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { label: "Company", value: "Dedicated luxury/collector car storage facility" },
              { label: "Size", value: "20–200 vehicles stored, 1–5 staff" },
              { label: "Revenue", value: "$200K–$2M/year in storage fees" },
              { label: "Current Tools", value: "Spreadsheets, texts, maybe Storeganise" },
              { label: "Decision Maker", value: "Owner-operator or operations manager" },
              { label: "Geography", value: "CA, FL, TX, Northeast corridor (Phase 1)" },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="text-[#c9a84c] text-xs mt-1">●</span>
                <div>
                  <span className="font-sans text-[#5c6478] text-xs uppercase tracking-wider">{item.label}</span>
                  <p className="font-sans text-[#f0ebe0] text-sm">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Channels */}
      <div>
        <h2 className="font-serif text-[#f0ebe0] text-xl font-semibold mb-4">Channel Strategy (Ranked)</h2>
        <div className="space-y-4">
          {[
            {
              rank: 1, name: "Direct Outbound", tag: "PRIMARY",
              desc: "Build prospect list of 500 facilities across 20 US metros. Personalized 3-email sequence + LinkedIn outreach.",
              metrics: "500 emails → 50 demos → 10 trials → 5 paying customers",
            },
            {
              rank: 2, name: "Community Infiltration", tag: "PRIMARY",
              desc: "Value-first content in collector car communities: Reddit, Bring a Trailer, Hagerty, PCA, Ferrari Chat forums.",
              metrics: "Credibility through expertise, not pitching",
            },
            {
              rank: 3, name: "Content / SEO", tag: "SECONDARY",
              desc: '110K/mo searches for "car storage near me". Blog posts targeting luxury car storage keywords with zero competitors.',
              metrics: "1 post/week, 3 posts ranking page 1 by Month 6",
            },
            {
              rank: 4, name: "Industry Partnerships", tag: "SECONDARY",
              desc: "Hagerty Insurance, Bring a Trailer, classic car transport companies — businesses serving the same customer.",
              metrics: "1 partnership signed by Month 3",
            },
            {
              rank: 5, name: "Product-Led Growth", tag: "TERTIARY",
              desc: "14-day free trial with pre-loaded demo data. The demo itself sells — spreadsheet vs purpose-built dashboard.",
              metrics: "PLG works for retention, outbound for acquisition",
            },
          ].map((ch, i) => (
            <div key={i} className="bg-[#0f1626] border border-[#1e2d45] rounded-xl p-5">
              <div className="flex items-center gap-3 mb-2">
                <span className="font-mono text-[#c9a84c] text-lg font-bold">#{ch.rank}</span>
                <h3 className="font-serif text-[#f0ebe0] text-base font-semibold">{ch.name}</h3>
                <span className={`font-mono text-xs px-2 py-0.5 rounded-full ${
                  ch.tag === "PRIMARY" ? "bg-[#c9a84c]/20 text-[#c9a84c]" : ch.tag === "SECONDARY" ? "bg-[#1e2d45] text-[#a0a8b8]" : "bg-[#1e2d45] text-[#5c6478]"
                }`}>{ch.tag}</span>
              </div>
              <p className="font-sans text-[#a0a8b8] text-sm leading-relaxed mb-2">{ch.desc}</p>
              <p className="font-mono text-[#5c6478] text-xs">{ch.metrics}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Timeline */}
      <div>
        <h2 className="font-serif text-[#f0ebe0] text-xl font-semibold mb-4">90-Day Timeline</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            {
              phase: "Month 1", title: "Foundation + First Outreach",
              items: ["Build 500-facility prospect list", "Send 200 outreach emails", "Join 5 communities", "Publish 4 blog posts", "Create lead magnet PDF"],
              targets: ["20 demo requests", "10 trial signups", "3 paying customers", "$1.5K–$4.5K MRR"],
            },
            {
              phase: "Month 2", title: "Scale Outreach + Content",
              items: ["Complete 500-email outreach", "LinkedIn campaign launch", "First customer case study", "Reach out to 3 partnership targets"],
              targets: ["25 total trials", "8 paying customers", "$4K–$12K MRR", "1 partnership in talks"],
            },
            {
              phase: "Month 3", title: "Optimize + Expand",
              items: ["Analyze full outreach results", "Expand to EU market", "Sign first partnership", "8–10 blog articles live"],
              targets: ["10 paying customers", "$5K–$15K MRR", "1 partnership signed", "3 posts ranking page 1"],
            },
          ].map((m, i) => (
            <div key={i} className="bg-[#0f1626] border border-[#1e2d45] rounded-xl p-5">
              <span className="font-mono text-[#c9a84c] text-xs">{m.phase}</span>
              <h3 className="font-serif text-[#f0ebe0] text-base font-semibold mt-1 mb-3">{m.title}</h3>
              <ul className="space-y-1.5 mb-4">
                {m.items.map((item, j) => (
                  <li key={j} className="font-sans text-[#a0a8b8] text-sm flex items-start gap-2">
                    <span className="text-[#5c6478] mt-0.5">○</span> {item}
                  </li>
                ))}
              </ul>
              <div className="border-t border-[#1e2d45] pt-3 space-y-1">
                {m.targets.map((t, j) => (
                  <p key={j} className="font-mono text-[#c9a84c] text-xs flex items-center gap-1.5">
                    <Check size={10} /> {t}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Budget */}
      <div>
        <h2 className="font-serif text-[#f0ebe0] text-xl font-semibold mb-4">Budget (Q1)</h2>
        <div className="bg-[#0f1626] border border-[#1e2d45] rounded-xl p-5">
          <div className="flex items-center justify-between mb-4">
            <span className="font-sans text-[#a0a8b8] text-sm">Total Q1 Budget</span>
            <span className="font-mono text-[#c9a84c] text-xl font-bold">~$835</span>
          </div>
          <div className="space-y-2">
            {[
              { item: "Email infrastructure (Resend)", cost: "$30/mo" },
              { item: "LinkedIn Sales Navigator", cost: "$80/mo" },
              { item: "Loom Pro", cost: "$15/mo" },
              { item: "Google Ads (Month 2–3)", cost: "$100–200/mo" },
              { item: "Domain + warmup", cost: "$20" },
            ].map((b, i) => (
              <div key={i} className="flex items-center justify-between py-1.5 border-b border-[#1e2d45]/50">
                <span className="font-sans text-[#a0a8b8] text-sm">{b.item}</span>
                <span className="font-mono text-[#f0ebe0] text-sm">{b.cost}</span>
              </div>
            ))}
          </div>
          <p className="font-sans text-[#5c6478] text-xs mt-3 italic">
            Bootstrapped GTM — the market is small enough that manual outreach is the optimal strategy.
          </p>
        </div>
      </div>

      {/* KPIs */}
      <div>
        <h2 className="font-serif text-[#f0ebe0] text-xl font-semibold mb-4">Key KPIs</h2>
        <div className="bg-[#0f1626] border border-[#1e2d45] rounded-xl overflow-hidden">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-[#1e2d45]">
                <th className="font-sans text-[#5c6478] text-xs uppercase tracking-wider py-3 px-4">Metric</th>
                <th className="font-sans text-[#5c6478] text-xs uppercase tracking-wider py-3 px-4">Target</th>
              </tr>
            </thead>
            <tbody>
              {[
                { metric: "Email open rate", target: ">40%" },
                { metric: "Demo conversion rate", target: ">10% of opens" },
                { metric: "Trial → Paid conversion", target: ">30%" },
                { metric: "Monthly churn", target: "<2%" },
                { metric: "CAC", target: "<$500" },
                { metric: "LTV", target: ">$18,000" },
                { metric: "LTV:CAC ratio", target: ">36:1" },
              ].map((row, i) => (
                <tr key={i} className="border-b border-[#1e2d45]/50">
                  <td className="font-sans text-[#f0ebe0] text-sm py-3 px-4">{row.metric}</td>
                  <td className="font-mono text-[#c9a84c] text-sm py-3 px-4">{row.target}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Risk */}
      <div>
        <h2 className="font-serif text-[#f0ebe0] text-xl font-semibold mb-4">Risk Factors</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { risk: "Market too small", mitigation: "Expand to adjacent: classic car dealerships, museums, race teams" },
            { risk: "Operators resist new software", mitigation: "Demo shows immediate time savings; white-glove onboarding" },
            { risk: "Long B2B sales cycles", mitigation: "Free trial removes friction; target owner-operators who decide fast" },
            { risk: "Competition emerges", mitigation: "First-mover + marketplace moat (Phase 3) creates switching costs" },
          ].map((r, i) => (
            <div key={i} className="bg-[#0f1626] border border-[#1e2d45] rounded-xl p-4">
              <p className="font-sans text-[#c94c4c] text-sm font-semibold mb-1">{r.risk}</p>
              <p className="font-sans text-[#a0a8b8] text-sm leading-relaxed">{r.mitigation}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function MarketingSection() {
  return (
    <div className="space-y-10">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2 mb-2">
          <span className="text-[#c9a84c]"><Megaphone size={16} /></span>
          <span className="font-sans text-[#5c6478] text-xs uppercase tracking-wider">Marketing Plan</span>
        </div>
        <h1 className="font-serif text-[#f0ebe0] text-3xl md:text-4xl font-semibold mb-4">Marketing Strategy</h1>
        <p className="font-sans text-[#a0a8b8] text-base leading-relaxed max-w-2xl">
          7 Growth Motions analysis for Prova. Primary motions: Outbound/Sales + Community-Led. Bootstrapped execution with near-zero budget.
        </p>
      </div>

      {/* Positioning */}
      <div className="bg-[#162036] border border-[#c9a84c]/20 rounded-xl p-6">
        <h2 className="font-serif text-[#c9a84c] text-lg font-semibold mb-4">Positioning Statement</h2>
        <div className="space-y-2 font-sans text-base leading-relaxed">
          <p><span className="text-[#5c6478]">For</span> <span className="text-[#f0ebe0]">luxury car storage facilities that manage collections worth millions</span></p>
          <p><span className="text-[#5c6478]">Who</span> <span className="text-[#f0ebe0]">are stuck with spreadsheets and generic self-storage software</span></p>
          <p><span className="text-[#5c6478]">Prova is</span> <span className="text-[#f0ebe0]">the operations platform</span></p>
          <p><span className="text-[#5c6478]">That</span> <span className="text-[#f0ebe0]">replaces chaos with vehicle-centric management</span></p>
          <p><span className="text-[#5c6478]">Unlike</span> <span className="text-[#f0ebe0]">Storeganise or SiteLink, built for $50/mo storage units</span></p>
          <p><span className="text-[#5c6478]">We</span> <span className="text-[#f0ebe0]">are built for $50M car collections</span></p>
        </div>
      </div>

      {/* Key Messages */}
      <div>
        <h2 className="font-serif text-[#f0ebe0] text-xl font-semibold mb-4">Core Messages</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-[#c9a84c] rounded-xl p-5">
            <h3 className="font-serif text-[#0a0e1a] text-base font-bold mb-2">Primary</h3>
            <p className="font-serif text-[#0a0e1a] text-lg italic">&ldquo;Storeganise is for self-storage. Prova is for car collections.&rdquo;</p>
          </div>
          <div className="bg-[#0f1626] border border-[#1e2d45] rounded-xl p-5">
            <h3 className="font-sans text-[#c9a84c] text-sm font-semibold mb-2">Supporting</h3>
            <p className="font-sans text-[#f0ebe0] text-sm italic">&ldquo;The cars your clients trust you with deserve better tools than spreadsheets.&rdquo;</p>
          </div>
          <div className="bg-[#0f1626] border border-[#1e2d45] rounded-xl p-5">
            <h3 className="font-sans text-[#c9a84c] text-sm font-semibold mb-2">Supporting</h3>
            <p className="font-sans text-[#f0ebe0] text-sm italic">&ldquo;Vehicle-centric, not unit-centric — the car is the record, not the parking space.&rdquo;</p>
          </div>
        </div>
      </div>

      {/* 7 Growth Motions */}
      <div>
        <h2 className="font-serif text-[#f0ebe0] text-xl font-semibold mb-4">7 Growth Motions</h2>
        <div className="space-y-3">
          {[
            { motion: "Outbound / Sales", priority: "PRIMARY", fit: "Market is small (500–2,000) and identifiable. Personalized outreach to 500 operators is optimal." },
            { motion: "Community-Led", priority: "PRIMARY", fit: "Collector car communities are tight-knit. A rec from PCA or BaT forums carries more weight than any ad." },
            { motion: "Inbound / SEO", priority: "SECONDARY", fit: "110K/mo search volume with zero SaaS targeting it. Plant seeds now — SEO compounds in 3–6 months." },
            { motion: "Product-Led Growth", priority: "SECONDARY", fit: "Demo sells itself. But PLG works for retention/expansion, not initial acquisition in niche B2B." },
            { motion: "Partner / Channel-Led", priority: "SECONDARY", fit: "Hagerty Insurance, Bring a Trailer, transport companies — serve same customer without competing." },
            { motion: "Viral / Word-of-Mouth", priority: "PHASE 2", fit: "Owner portal triggers WoM: 'My storage uses Prova — I can see climate data from my phone.'" },
            { motion: "Sales-Led Growth", priority: "FUTURE", fit: "At $500–$1,500/mo, product sells through demos. Dedicated sales for enterprise (200+ vehicles) at Month 6+." },
          ].map((m, i) => (
            <div key={i} className="bg-[#0f1626] border border-[#1e2d45] rounded-xl p-4 flex items-start gap-4">
              <span className={`font-mono text-xs px-2 py-0.5 rounded-full flex-shrink-0 mt-0.5 ${
                m.priority === "PRIMARY" ? "bg-[#c9a84c]/20 text-[#c9a84c]" :
                m.priority === "SECONDARY" ? "bg-[#1e2d45] text-[#a0a8b8]" :
                "bg-[#1e2d45] text-[#5c6478]"
              }`}>{m.priority}</span>
              <div>
                <h3 className="font-sans text-[#f0ebe0] text-sm font-semibold">{m.motion}</h3>
                <p className="font-sans text-[#a0a8b8] text-sm leading-relaxed mt-1">{m.fit}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Content Calendar */}
      <div>
        <h2 className="font-serif text-[#f0ebe0] text-xl font-semibold mb-4">Content Calendar (Month 1)</h2>
        <div className="bg-[#0f1626] border border-[#1e2d45] rounded-xl overflow-hidden">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-[#1e2d45]">
                <th className="font-sans text-[#5c6478] text-xs uppercase tracking-wider py-3 px-4">Week</th>
                <th className="font-sans text-[#5c6478] text-xs uppercase tracking-wider py-3 px-4">Blog Post</th>
                <th className="font-sans text-[#5c6478] text-xs uppercase tracking-wider py-3 px-4">Community</th>
                <th className="font-sans text-[#5c6478] text-xs uppercase tracking-wider py-3 px-4">Email Batch</th>
              </tr>
            </thead>
            <tbody>
              {[
                { week: "1", blog: "Prova vs Storeganise (comparison)", community: "Introduce in r/selfstorage", email: "Setup + warmup" },
                { week: "2", blog: "Climate-Controlled Car Storage Guide", community: "Value post on BaT forums", email: "Batch 1 (50)" },
                { week: "3", blog: "Why Spreadsheets Cost You Clients", community: "r/selfstorage AMA", email: "Batch 2 (50)" },
                { week: "4", blog: "Car Provenance Documentation Guide", community: "Engage 3 threads", email: "Batch 3 (100)" },
              ].map((row, i) => (
                <tr key={i} className="border-b border-[#1e2d45]/50">
                  <td className="font-mono text-[#c9a84c] text-sm py-3 px-4">{row.week}</td>
                  <td className="font-sans text-[#f0ebe0] text-sm py-3 px-4">{row.blog}</td>
                  <td className="font-sans text-[#a0a8b8] text-sm py-3 px-4">{row.community}</td>
                  <td className="font-sans text-[#a0a8b8] text-sm py-3 px-4">{row.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Email Sequence */}
      <div>
        <h2 className="font-serif text-[#f0ebe0] text-xl font-semibold mb-4">Email Outreach Sequence</h2>
        <div className="space-y-4">
          {[
            { day: "Day 1", subject: "The Hook", preview: '[Facility Name] — managing {count} cars in spreadsheets?', desc: "Introduce Prova, share live demo link, highlight purpose-built vs generic." },
            { day: "Day 4", subject: "Value Add", preview: "Climate monitoring for stored collector cars", desc: "Share PDF guide on climate best practices. Position as industry expert." },
            { day: "Day 10", subject: "Personalized Demo", preview: "What [Facility Name] would look like in Prova", desc: "60-second Loom walkthrough customized to their facility. Free trial link." },
          ].map((e, i) => (
            <div key={i} className="bg-[#0f1626] border border-[#1e2d45] rounded-xl p-5 flex items-start gap-4">
              <span className="font-mono text-[#c9a84c] text-xs flex-shrink-0 mt-1">{e.day}</span>
              <div>
                <h3 className="font-sans text-[#f0ebe0] text-sm font-semibold">{e.subject}</h3>
                <p className="font-mono text-[#5c6478] text-xs mt-1">{e.preview}</p>
                <p className="font-sans text-[#a0a8b8] text-sm mt-2 leading-relaxed">{e.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Social Strategy */}
      <div>
        <h2 className="font-serif text-[#f0ebe0] text-xl font-semibold mb-4">Social Media Strategy</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-[#0f1626] border border-[#1e2d45] rounded-xl p-5">
            <h3 className="font-sans text-[#f0ebe0] text-sm font-semibold mb-2">LinkedIn (Primary)</h3>
            <p className="font-sans text-[#a0a8b8] text-sm mb-3">2x/week from founder profile</p>
            <div className="space-y-1.5">
              {["40% Industry insights", "30% Product updates", "20% Behind-the-scenes", "10% Engagement/reposts"].map((item, j) => (
                <p key={j} className="font-sans text-[#5c6478] text-xs">{item}</p>
              ))}
            </div>
          </div>
          <div className="bg-[#0f1626] border border-[#1e2d45] rounded-xl p-5">
            <h3 className="font-sans text-[#f0ebe0] text-sm font-semibold mb-2">Messaging Framework</h3>
            <div className="space-y-3">
              <div>
                <span className="font-sans text-[#5c6478] text-xs uppercase tracking-wider">10-Second Pitch</span>
                <p className="font-sans text-[#f0ebe0] text-sm mt-1">&ldquo;Prova is operations software for luxury car storage — vehicle profiles, climate logs, service history in one dashboard.&rdquo;</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function BrandSection() {
  return (
    <div className="space-y-10">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2 mb-2">
          <span className="text-[#c9a84c]"><Palette size={16} /></span>
          <span className="font-sans text-[#5c6478] text-xs uppercase tracking-wider">Brand & Design Spec</span>
        </div>
        <h1 className="font-serif text-[#f0ebe0] text-3xl md:text-4xl font-semibold mb-4">Brand Identity</h1>
        <p className="font-sans text-[#a0a8b8] text-base leading-relaxed max-w-2xl">
          Bloomberg Terminal × Porsche Design Center × RM Sotheby&apos;s. Premium, data-dense, precise. Dark theme with warm gold accents.
        </p>
      </div>

      {/* Color Palette */}
      <div>
        <h2 className="font-serif text-[#f0ebe0] text-xl font-semibold mb-4">Color Palette</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { name: "Background", hex: "#0a0e1a", desc: "Deep navy", text: "#f0ebe0" },
            { name: "Surface", hex: "#0f1626", desc: "Card/panel", text: "#f0ebe0" },
            { name: "Accent", hex: "#c9a84c", desc: "Warm gold", text: "#0a0e1a" },
            { name: "Text Primary", hex: "#f0ebe0", desc: "Warm white", text: "#0a0e1a" },
            { name: "Text Secondary", hex: "#9da8b7", desc: "Muted blue-grey", text: "#0a0e1a" },
            { name: "Border", hex: "#1e2d45", desc: "Subtle border", text: "#f0ebe0" },
            { name: "Destructive", hex: "#c94c4c", desc: "Error states", text: "#f0ebe0" },
            { name: "Success", hex: "#4caf7d", desc: "Success states", text: "#0a0e1a" },
          ].map((c, i) => (
            <div key={i} className="rounded-xl overflow-hidden border border-[#1e2d45]">
              <div className="h-20" style={{ backgroundColor: c.hex }} />
              <div className="bg-[#0f1626] p-3">
                <p className="font-sans text-[#f0ebe0] text-sm font-medium">{c.name}</p>
                <p className="font-mono text-[#c9a84c] text-xs mt-0.5">{c.hex}</p>
                <p className="font-sans text-[#5c6478] text-xs">{c.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Typography */}
      <div>
        <h2 className="font-serif text-[#f0ebe0] text-xl font-semibold mb-4">Typography</h2>
        <div className="space-y-6">
          <div className="bg-[#0f1626] border border-[#1e2d45] rounded-xl p-6">
            <span className="font-sans text-[#5c6478] text-xs uppercase tracking-wider">Display Font</span>
            <h3 className="font-serif text-[#f0ebe0] text-4xl font-semibold mt-2 mb-1">Cormorant Garamond</h3>
            <p className="font-serif text-[#a0a8b8] text-xl italic">Headlines, hero text, section titles</p>
            <div className="mt-4 space-y-1">
              <p className="font-serif text-[#f0ebe0] text-5xl font-bold tracking-tight">Aa Bb Cc</p>
              <p className="font-serif text-[#a0a8b8] text-3xl font-light italic">The quick brown fox</p>
            </div>
          </div>

          <div className="bg-[#0f1626] border border-[#1e2d45] rounded-xl p-6">
            <span className="font-sans text-[#5c6478] text-xs uppercase tracking-wider">Body Font</span>
            <h3 className="font-sans text-[#f0ebe0] text-2xl font-semibold mt-2 mb-1">DM Sans</h3>
            <p className="font-sans text-[#a0a8b8] text-base">Body text, UI labels, navigation, buttons</p>
            <div className="mt-4">
              <p className="font-sans text-[#f0ebe0] text-lg">ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
              <p className="font-sans text-[#a0a8b8] text-base">abcdefghijklmnopqrstuvwxyz 0123456789</p>
            </div>
          </div>

          <div className="bg-[#0f1626] border border-[#1e2d45] rounded-xl p-6">
            <span className="font-sans text-[#5c6478] text-xs uppercase tracking-wider">Mono Font</span>
            <h3 className="font-mono text-[#f0ebe0] text-2xl font-medium mt-2 mb-1">JetBrains Mono</h3>
            <p className="font-sans text-[#a0a8b8] text-base">VINs, data, stats, code</p>
            <div className="mt-4">
              <p className="font-mono text-[#c9a84c] text-xl">WBA5J5C58LWW12345</p>
              <p className="font-mono text-[#a0a8b8] text-base">$1,500/mo · 47 vehicles · 99.9% uptime</p>
            </div>
          </div>
        </div>
      </div>

      {/* Design Tokens */}
      <div>
        <h2 className="font-serif text-[#f0ebe0] text-xl font-semibold mb-4">Design Tokens</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-[#0f1626] border border-[#1e2d45] rounded-xl p-5">
            <h3 className="font-sans text-[#f0ebe0] text-sm font-semibold mb-3">Border Radius</h3>
            <div className="space-y-2">
              {[
                { name: "Small", value: "4px", usage: "Tags, inline" },
                { name: "Medium", value: "8px", usage: "Buttons, inputs" },
                { name: "Large", value: "12px", usage: "Cards" },
                { name: "XL", value: "16px", usage: "Modals, large cards" },
                { name: "Full", value: "9999px", usage: "Badges, pills" },
              ].map((t, i) => (
                <div key={i} className="flex items-center justify-between py-1">
                  <span className="font-sans text-[#a0a8b8] text-sm">{t.name}</span>
                  <div className="flex items-center gap-3">
                    <span className="font-sans text-[#5c6478] text-xs">{t.usage}</span>
                    <span className="font-mono text-[#c9a84c] text-xs">{t.value}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#0f1626] border border-[#1e2d45] rounded-xl p-5">
            <h3 className="font-sans text-[#f0ebe0] text-sm font-semibold mb-3">Shadows</h3>
            <div className="space-y-3">
              <div className="bg-[#162036] rounded-lg p-4 shadow-[0_1px_3px_rgba(0,0,0,0.4),0_4px_16px_rgba(0,0,0,0.3)]">
                <span className="font-sans text-[#a0a8b8] text-sm">Card Shadow</span>
              </div>
              <div className="bg-[#162036] rounded-lg p-4 shadow-[0_4px_24px_rgba(0,0,0,0.5),0_0_0_1px_rgba(201,168,76,0.15)]">
                <span className="font-sans text-[#a0a8b8] text-sm">Card Hover (gold glow)</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Components */}
      <div>
        <h2 className="font-serif text-[#f0ebe0] text-xl font-semibold mb-4">Component Examples</h2>
        <div className="bg-[#0f1626] border border-[#1e2d45] rounded-xl p-6 space-y-6">
          {/* Buttons */}
          <div>
            <span className="font-sans text-[#5c6478] text-xs uppercase tracking-wider">Buttons</span>
            <div className="flex flex-wrap gap-3 mt-3">
              <button className="bg-[#c9a84c] text-[#0a0e1a] font-sans text-sm font-semibold px-5 py-2.5 rounded-full">
                Primary CTA
              </button>
              <button className="border border-[#1e2d45] text-[#f0ebe0] font-sans text-sm px-5 py-2.5 rounded-full hover:border-[#c9a84c]/40">
                Ghost Button
              </button>
              <button className="text-[#c9a84c] font-sans text-sm px-5 py-2.5 underline underline-offset-4 decoration-[#c9a84c]/40">
                Text Link
              </button>
            </div>
          </div>

          {/* Cards */}
          <div>
            <span className="font-sans text-[#5c6478] text-xs uppercase tracking-wider">Card States</span>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3">
              <div className="bg-[#162036] border border-[#1e2d45] rounded-xl p-4">
                <span className="font-sans text-[#a0a8b8] text-sm">Default card</span>
              </div>
              <div className="bg-[#162036] border border-[#c9a84c]/40 rounded-xl p-4 shadow-[0_0_24px_rgba(201,168,76,0.1)]">
                <span className="font-sans text-[#f0ebe0] text-sm">Hover / Active card</span>
              </div>
            </div>
          </div>

          {/* Status Badges */}
          <div>
            <span className="font-sans text-[#5c6478] text-xs uppercase tracking-wider">Status Badges</span>
            <div className="flex flex-wrap gap-2 mt-3">
              <span className="bg-[#4caf7d]/20 text-[#4caf7d] font-sans text-xs px-2.5 py-1 rounded-full">Active</span>
              <span className="bg-[#c9944c]/20 text-[#c9944c] font-sans text-xs px-2.5 py-1 rounded-full">Pending</span>
              <span className="bg-[#c94c4c]/20 text-[#c94c4c] font-sans text-xs px-2.5 py-1 rounded-full">Alert</span>
              <span className="bg-[#1e2d45] text-[#a0a8b8] font-sans text-xs px-2.5 py-1 rounded-full">Default</span>
            </div>
          </div>
        </div>
      </div>

      {/* Brand Voice */}
      <div>
        <h2 className="font-serif text-[#f0ebe0] text-xl font-semibold mb-4">Brand Voice</h2>
        <div className="bg-[#162036] border border-[#c9a84c]/20 rounded-xl p-6">
          <p className="font-sans text-[#a0a8b8] text-base leading-relaxed mb-4">
            Authoritative yet approachable. Precise. Understated luxury. For operators managing portfolios worth $10M–$100M+.
            Language should imply expertise and refinement.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="font-sans text-[#4caf7d] text-sm font-semibold mb-2">✓ Do</h3>
              <ul className="space-y-1.5">
                {[
                  "Speak with authority about the industry",
                  "Use precise, specific language",
                  "Show, don't tell — data over adjectives",
                  "Understated confidence",
                ].map((item, i) => (
                  <li key={i} className="font-sans text-[#a0a8b8] text-sm">{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-sans text-[#c94c4c] text-sm font-semibold mb-2">✗ Don&apos;t</h3>
              <ul className="space-y-1.5">
                {[
                  "Use startup jargon or hype",
                  "Be overly casual or trendy",
                  "Overclaim without data",
                  "Generic SaaS marketing speak",
                ].map((item, i) => (
                  <li key={i} className="font-sans text-[#a0a8b8] text-sm">{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function PitchSection() {
  const slides = [
    { num: 1, title: "Title", content: "PROVA — Where Precision Meets Provenance. Operations software for luxury car storage facilities." },
    { num: 2, title: "Problem", content: "$50M in assets, managed by spreadsheets. No purpose-built software for luxury car storage." },
    { num: 3, title: "Market", content: "+1,995% search growth, 7.3% CAGR luxury vehicles, 12.4% CAGR collection storage. TAM: $3M–$36M (US)." },
    { num: 4, title: "Solution", content: "One dashboard: vehicle profiles, climate logging, service history, owner portal, scheduling, billing." },
    { num: 5, title: "Product Demo", content: "Live at prova.ashketing.com. Demo: demo@getprova.com / demo1234." },
    { num: 6, title: "Competition", content: "Storeganise/SiteLink built for units. Prova built for car collections. Zero direct competitors." },
    { num: 7, title: "Business Model", content: "SaaS $500–$1,500/mo + marketplace commission. LTV >$18K, CAC <$500, LTV:CAC >36:1." },
    { num: 8, title: "Go-To-Market", content: "Direct outbound to 500 facilities. Community infiltration. SEO + partnerships. Q1 budget: ~$835." },
    { num: 9, title: "Roadmap", content: "Phase 1: Dashboard (NOW). Phase 2: Owner Portal. Phase 3: Marketplace. Phase 4: IoT." },
    { num: 10, title: "Traction", content: "Opportunity 9/10, Idea Score 81/100. Product live. Community validation strong." },
    { num: 11, title: "Team", content: "ChimeStream Portfolio — AI/automation, full-stack dev, marketing, ship fast." },
    { num: 12, title: "Ask / CTA", content: "14-day free trial. No credit card required. Partnership inquiries welcome." },
  ];

  return (
    <div className="space-y-10">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2 mb-2">
          <span className="text-[#c9a84c]"><Presentation size={16} /></span>
          <span className="font-sans text-[#5c6478] text-xs uppercase tracking-wider">Pitch Deck</span>
        </div>
        <h1 className="font-serif text-[#f0ebe0] text-3xl md:text-4xl font-semibold mb-4">Investor Pitch Deck</h1>
        <p className="font-sans text-[#a0a8b8] text-base leading-relaxed max-w-2xl mb-4">
          12-slide interactive pitch deck. Arrow key navigation, mobile swipe support, Framer Motion animations.
        </p>
        <a
          href="/deck"
          className="inline-flex items-center gap-2 bg-[#c9a84c] text-[#0a0e1a] font-sans text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-[#d4b85c] transition-colors duration-200"
        >
          <Presentation size={14} /> View Full Deck →
        </a>
      </div>

      {/* Slide Overview */}
      <div>
        <h2 className="font-serif text-[#f0ebe0] text-xl font-semibold mb-4">Slide Overview</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {slides.map((slide) => (
            <div key={slide.num} className="bg-[#0f1626] border border-[#1e2d45] rounded-xl p-4 flex items-start gap-3">
              <span className="font-mono text-[#c9a84c] text-sm font-bold flex-shrink-0 w-6 text-right">{slide.num}</span>
              <div>
                <h3 className="font-serif text-[#f0ebe0] text-sm font-semibold">{slide.title}</h3>
                <p className="font-sans text-[#a0a8b8] text-xs leading-relaxed mt-1">{slide.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Google Drive Links */}
      <div>
        <h2 className="font-serif text-[#f0ebe0] text-xl font-semibold mb-4">Source Documents</h2>
        <div className="space-y-2">
          {[
            { name: "Pitch Deck Content", url: "https://docs.google.com/document/d/1a5fnz9P7ctg9X5soBpsuDtdvWKn1tKYG_8WL_3oNcsg" },
            { name: "GTM Plan", url: "https://docs.google.com/document/d/12flrdn-QxL5yrgNYLf_TwRiBC25ooi0huIx56RP3mLk" },
            { name: "Marketing Plan", url: "https://docs.google.com/document/d/1WXAs91m4L2_OldPIhrorQJjPJhxEgdmt7mpSRoQ-NGo" },
          ].map((doc, i) => (
            <a
              key={i}
              href={doc.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between bg-[#0f1626] border border-[#1e2d45] rounded-xl p-4 hover:border-[#c9a84c]/30 transition-colors duration-200"
            >
              <span className="font-sans text-[#f0ebe0] text-sm">{doc.name}</span>
              <ExternalLink size={14} className="text-[#5c6478]" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Section Renderer ─────────────────────────────────────────────────────────

function renderSection(id: string) {
  switch (id) {
    case "research": return <ResearchSection />;
    case "gtm": return <GTMSection />;
    case "marketing": return <MarketingSection />;
    case "brand": return <BrandSection />;
    case "pitch": return <PitchSection />;
    default: return <ResearchSection />;
  }
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function DocsPage() {
  const [activeSection, setActiveSection] = useState("research");
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleSelect = (id: string) => {
    setActiveSection(id);
    setMobileOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#0a0e1a] flex flex-col">
      <Navbar />

      <div className="flex flex-1 relative">
        {/* Desktop sidebar */}
        <aside className="hidden md:block w-64 bg-[#0f1626] border-r border-[#1e2d45] min-h-full fixed top-16 bottom-0 overflow-y-auto z-30">
          <SidebarContent activeSection={activeSection} onSelect={handleSelect} />
        </aside>

        {/* Mobile sidebar overlay */}
        {mobileOpen && (
          <div className="md:hidden fixed inset-0 z-50 flex">
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setMobileOpen(false)} />
            <aside className="relative z-10 w-72 bg-[#0f1626] border-r border-[#1e2d45] overflow-y-auto">
              <div className="flex items-center justify-end p-4 border-b border-[#1e2d45]">
                <button
                  onClick={() => setMobileOpen(false)}
                  className="text-[#5c6478] hover:text-[#f0ebe0] transition-colors duration-200"
                  aria-label="Close menu"
                >
                  <X size={20} />
                </button>
              </div>
              <SidebarContent activeSection={activeSection} onSelect={handleSelect} />
            </aside>
          </div>
        )}

        {/* Main content */}
        <main className="flex-1 ml-0 md:ml-64 p-6 md:p-10 min-h-full">
          {/* Mobile header */}
          <div className="md:hidden flex items-center justify-between mb-6">
            <button
              onClick={() => setMobileOpen(true)}
              className="flex items-center gap-2 font-sans text-sm text-[#a0a8b8] hover:text-[#f0ebe0] transition-colors duration-200"
              aria-label="Open documentation menu"
            >
              <Menu size={18} />
              <span>Menu</span>
            </button>
            <span className="font-sans text-[#5c6478] text-xs uppercase tracking-wider">
              {sections.find(s => s.id === activeSection)?.label}
            </span>
          </div>

          {/* Content */}
          <div className="max-w-4xl">
            {renderSection(activeSection)}
          </div>

          <div className="h-16" />
        </main>
      </div>

      <div className="md:pl-64">
        <Footer />
      </div>
    </div>
  );
}
