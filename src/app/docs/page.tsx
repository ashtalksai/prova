"use client";

import { useState } from "react";
import { Menu, X, FileText, BarChart2, Megaphone, Palette, Presentation } from "lucide-react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

// ─── Types ────────────────────────────────────────────────────────────────────

interface DocCard {
  title: string;
  summary: string;
}

interface DocSection {
  id: string;
  label: string;
  icon: React.ReactNode;
  cards: DocCard[];
}

// ─── Content ──────────────────────────────────────────────────────────────────

const sections: DocSection[] = [
  {
    id: "research",
    label: "Research",
    icon: <BarChart2 size={14} />,
    cards: [
      {
        title: "Market Analysis",
        summary:
          "Deep-dive into the $50B+ luxury vehicle storage market: key segments, geographic concentration, pricing benchmarks, and growth projections through 2030.",
      },
      {
        title: "Competitive Landscape",
        summary:
          "Review of existing solutions — from generic facility management software to manual spreadsheet workflows — and the whitespace Prova addresses.",
      },
      {
        title: "Customer Interviews",
        summary:
          "Synthesis of 40+ interviews with facility operators and high-net-worth vehicle owners, covering pain points, willingness to pay, and feature priorities.",
      },
    ],
  },
  {
    id: "gtm",
    label: "GTM",
    icon: <Megaphone size={14} />,
    cards: [
      {
        title: "Launch Strategy",
        summary:
          "Phase-by-phase go-to-market plan covering private beta, limited launch, and general availability. Includes milestone targets and success metrics.",
      },
      {
        title: "Channel Plan",
        summary:
          "Analysis of direct sales, luxury auto show partnerships, concierge network referrals, and digital acquisition channels with projected CAC by channel.",
      },
      {
        title: "Partnership Framework",
        summary:
          "Structure for co-marketing and referral partnerships with luxury dealerships, auction houses, insurance providers, and storage facility networks.",
      },
    ],
  },
  {
    id: "marketing",
    label: "Marketing",
    icon: <FileText size={14} />,
    cards: [
      {
        title: "Brand Guidelines",
        summary:
          "Complete brand standards: logo usage, color palette, typography hierarchy, photography direction, and tone-of-voice principles for all communications.",
      },
      {
        title: "Content Calendar",
        summary:
          "12-month editorial calendar covering owned content, thought leadership, email sequences, social cadence, and seasonal campaign planning.",
      },
      {
        title: "Campaign Playbook",
        summary:
          "Repeatable campaign templates for facility acquisition, owner engagement, and seasonal re-activation — with copy frameworks and performance benchmarks.",
      },
    ],
  },
  {
    id: "brand",
    label: "Brand",
    icon: <Palette size={14} />,
    cards: [
      {
        title: "Visual Identity",
        summary:
          "Comprehensive design system: Cormorant Garamond + DM Sans type pairing, navy and gold color system, card components, iconography, and grid specifications.",
      },
      {
        title: "Tone of Voice",
        summary:
          "Editorial voice guide for Prova: authoritative yet approachable, precise, and understated luxury. Includes dos/don'ts and real copy examples.",
      },
      {
        title: "Asset Library",
        summary:
          "Centralized repository of approved brand assets: logo files, icon set, photography templates, deck themes, and email signature specifications.",
      },
    ],
  },
  {
    id: "pitch",
    label: "Pitch",
    icon: <Presentation size={14} />,
    cards: [
      {
        title: "Investor Deck",
        summary:
          "Full 9-slide investor presentation covering problem, solution, product, market opportunity, business model, traction, team, and the ask.",
      },
      {
        title: "One-Pager",
        summary:
          "Single-page executive summary for warm introductions: company overview, key metrics, differentiation, and contact information.",
      },
      {
        title: "Financial Model",
        summary:
          "Three-year financial model with revenue projections by tier, CAC/LTV analysis, unit economics, and scenario planning (base, bull, bear).",
      },
    ],
  },
];

// ─── Sidebar ──────────────────────────────────────────────────────────────────

interface SidebarProps {
  activeSection: string;
  onSelect: (id: string) => void;
}

function SidebarContent({ activeSection, onSelect }: SidebarProps) {
  return (
    <div className="p-6">
      <div className="mb-8">
        <h2 className="font-serif text-lg text-[#c9a84c] font-semibold tracking-wide">
          Documentation
        </h2>
        <p className="font-sans text-[#5c6478] text-xs mt-1">
          Internal resources & strategy
        </p>
      </div>

      <nav className="space-y-6">
        {sections.map((section) => (
          <div key={section.id}>
            <p className="font-sans text-[#5c6478] text-xs uppercase tracking-wider font-semibold mb-2 flex items-center gap-1.5">
              {section.icon}
              {section.label}
            </p>
            <ul className="space-y-0.5">
              {section.cards.map((card) => (
                <li key={card.title}>
                  <button
                    onClick={() => onSelect(section.id)}
                    className={`block w-full text-left font-sans text-sm py-1.5 rounded transition-all duration-150 ${
                      activeSection === section.id
                        ? "text-[#c9a84c] bg-[#162036] px-2 -mx-2"
                        : "text-[#a0a8b8] hover:text-[#f0ebe0] px-0"
                    }`}
                  >
                    {card.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>
    </div>
  );
}

// ─── Card ─────────────────────────────────────────────────────────────────────

function DocCardItem({ card }: { card: DocCard }) {
  return (
    <div className="bg-[#0f1626] border border-[#1e2d45] rounded-xl p-6 hover:border-[#c9a84c]/50 transition-colors duration-200 group">
      <h3 className="font-serif text-lg text-[#f0ebe0] font-semibold group-hover:text-[#c9a84c] transition-colors duration-200">
        {card.title}
      </h3>
      <p className="font-sans text-[#a0a8b8] text-sm mt-2 leading-relaxed">
        {card.summary}
      </p>
      <span className="font-sans bg-[#162036] text-[#5c6478] text-xs px-2 py-1 rounded mt-4 inline-block">
        Coming Soon
      </span>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function DocsPage() {
  const [activeSection, setActiveSection] = useState("research");
  const [mobileOpen, setMobileOpen] = useState(false);

  const currentSection = sections.find((s) => s.id === activeSection) ?? sections[0];

  const handleSelect = (id: string) => {
    setActiveSection(id);
    setMobileOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#0a0e1a] flex flex-col">
      <Navbar />

      <div className="flex flex-1 relative">
        {/* Desktop sidebar */}
        <aside className="hidden md:block w-64 bg-[#0f1626] border-r border-[#1e2d45] min-h-full fixed top-16 bottom-0 overflow-y-auto z-30">
          <SidebarContent
            activeSection={activeSection}
            onSelect={handleSelect}
          />
        </aside>

        {/* Mobile sidebar overlay */}
        {mobileOpen && (
          <div className="md:hidden fixed inset-0 z-50 flex">
            <div
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setMobileOpen(false)}
            />
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
              <SidebarContent
                activeSection={activeSection}
                onSelect={handleSelect}
              />
            </aside>
          </div>
        )}

        {/* Main content */}
        <main className="flex-1 ml-0 md:ml-64 p-6 md:p-8 min-h-full">
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
              {currentSection.label}
            </span>
          </div>

          {/* Section header */}
          <div className="mb-8 pb-6 border-b border-[#1e2d45]">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-[#c9a84c]">{currentSection.icon}</span>
              <span className="font-sans text-[#5c6478] text-xs uppercase tracking-wider">
                {currentSection.label}
              </span>
            </div>
            <h1 className="font-serif text-[#f0ebe0] text-3xl md:text-4xl font-semibold">
              {currentSection.label}
            </h1>
            <p className="font-sans text-[#a0a8b8] text-sm mt-2">
              {currentSection.cards.length} documents in this section
            </p>
          </div>

          {/* Section tabs — desktop quick-nav */}
          <div className="hidden md:flex gap-2 mb-8 flex-wrap">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`font-sans text-xs px-3 py-1.5 rounded-full border transition-all duration-150 flex items-center gap-1.5 ${
                  activeSection === section.id
                    ? "bg-[#c9a84c] text-[#0a0e1a] border-[#c9a84c] font-semibold"
                    : "text-[#a0a8b8] border-[#1e2d45] hover:border-[#c9a84c]/40 hover:text-[#f0ebe0]"
                }`}
              >
                {section.icon}
                {section.label}
              </button>
            ))}
          </div>

          {/* Cards grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {currentSection.cards.map((card) => (
              <DocCardItem key={card.title} card={card} />
            ))}
          </div>

          {/* Bottom spacer for footer */}
          <div className="h-16" />
        </main>
      </div>

      <div className="md:pl-64">
        <Footer />
      </div>
    </div>
  );
}
