"use client";

import { useState } from "react";
import Link from "next/link";
import { Check, ChevronDown } from "lucide-react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

// ─── Pricing Data ─────────────────────────────────────────────────────────────

const tiers = [
  {
    name: "Starter",
    monthlyPrice: 500,
    annualPrice: 416,
    subtitle: "Up to 30 vehicles",
    features: [
      "Basic climate logging",
      "Vehicle profiles & VIN tracking",
      "Owner directory",
      "Email support",
      "Monthly reports",
    ],
    highlighted: false,
    cta: "Get Started",
    ctaHref: "/signup",
  },
  {
    name: "Professional",
    monthlyPrice: 1000,
    annualPrice: 833,
    subtitle: "Up to 100 vehicles",
    features: [
      "Everything in Starter",
      "Advanced climate alerts",
      "Service management",
      "Owner portal access",
      "Priority phone support",
      "Custom reports",
      "API access",
    ],
    highlighted: true,
    cta: "Get Started",
    ctaHref: "/signup",
  },
  {
    name: "Enterprise",
    monthlyPrice: 1500,
    annualPrice: 1250,
    subtitle: "Unlimited vehicles",
    features: [
      "Everything in Professional",
      "Dedicated account manager",
      "Custom integrations",
      "Multi-facility support",
      "White-label portal",
      "SLA guarantee",
      "On-site training",
    ],
    highlighted: false,
    cta: "Contact Sales",
    ctaHref: "/contact",
  },
];

// ─── FAQ Data ─────────────────────────────────────────────────────────────────

const faqs = [
  {
    question: "Can I switch plans?",
    answer:
      "Yes, you can upgrade or downgrade at any time. When upgrading, the new rate takes effect immediately and we prorate the difference. When downgrading, the change takes effect at the start of your next billing cycle. There are no penalties or fees for switching.",
  },
  {
    question: "Is there a free trial?",
    answer:
      "Yes, all plans come with a 14-day free trial — no credit card required. You'll have access to the full feature set of your chosen plan during the trial period so you can evaluate Prova with real facility data.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards (Visa, Mastercard, American Express), ACH bank transfers, and wire transfer for Enterprise plans. All billing is processed securely through Stripe. We can also accommodate net-30 invoicing for qualified Enterprise accounts.",
  },
  {
    question: "Do you offer custom plans?",
    answer:
      "Yes, for facilities with unique needs — such as multiple locations, specialized integrations, or non-standard vehicle counts — we can build a custom plan. Contact our sales team to discuss your requirements and we'll design a solution that fits your operation.",
  },
  {
    question: "What happens if I exceed my vehicle limit?",
    answer:
      "We'll notify you when you reach 80% of your plan's vehicle limit so you have time to plan. If you exceed the limit, we won't cut off access — we'll reach out to discuss upgrading your plan. We want to support your growth, not block it.",
  },
];

// ─── FAQ Item ─────────────────────────────────────────────────────────────────

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-[#1e2d45]">
      <button
        className="w-full flex items-center justify-between py-5 text-left gap-4 group"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
      >
        <span className="font-sans font-medium text-[#f0ebe0] text-base leading-snug group-hover:text-white transition-colors duration-200">
          {question}
        </span>
        <ChevronDown
          size={18}
          className={`text-[#c9a84c] flex-shrink-0 transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? "max-h-96 pb-5" : "max-h-0"
        }`}
      >
        <p className="font-sans text-[#a0a8b8] text-sm leading-relaxed">
          {answer}
        </p>
      </div>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function PricingPage() {
  const [annual, setAnnual] = useState(false);

  return (
    <div className="min-h-screen bg-[#0a0e1a]">
      <Navbar />

      {/* ── Header ───────────────────────────────────────────────────────────── */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="font-serif text-4xl text-[#f0ebe0] text-center mb-4">
            Simple, Transparent Pricing
          </h1>
          <p className="font-sans text-[#a0a8b8] text-center max-w-xl mx-auto mb-10">
            No per-vehicle fees. No hidden costs. Choose the plan that fits your
            facility.
          </p>

          {/* Toggle */}
          <div className="inline-flex items-center gap-4 bg-[#0f1626] border border-[#1e2d45] rounded-full p-1.5">
            <button
              onClick={() => setAnnual(false)}
              className={`font-sans text-sm px-5 py-2 rounded-full transition-all duration-200 ${
                !annual
                  ? "bg-[#c9a84c] text-[#0a0e1a] font-semibold"
                  : "text-[#a0a8b8] hover:text-[#f0ebe0]"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={`font-sans text-sm px-5 py-2 rounded-full transition-all duration-200 flex items-center gap-2 ${
                annual
                  ? "bg-[#c9a84c] text-[#0a0e1a] font-semibold"
                  : "text-[#a0a8b8] hover:text-[#f0ebe0]"
              }`}
            >
              Annual
              <span
                className={`text-xs px-2 py-0.5 rounded-full font-bold transition-colors duration-200 ${
                  annual
                    ? "bg-[#0a0e1a]/20 text-[#0a0e1a]"
                    : "bg-[#c9a84c]/20 text-[#c9a84c]"
                }`}
              >
                Save 17%
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* ── Tier Cards ───────────────────────────────────────────────────────── */}
      <section className="pb-24 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative bg-[#0f1626] border rounded-xl p-8 flex flex-col gap-6 transition-transform duration-300 ${
                tier.highlighted
                  ? "border-[#c9a84c] md:scale-105"
                  : "border-[#1e2d45]"
              }`}
            >
              {/* Most Popular badge */}
              {tier.highlighted && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#c9a84c] text-[#0a0e1a] text-xs uppercase font-bold px-3 py-1 rounded-full tracking-wide whitespace-nowrap">
                  Most Popular
                </span>
              )}

              {/* Name + subtitle */}
              <div>
                <h3 className="font-serif text-xl text-[#f0ebe0] mb-1">
                  {tier.name}
                </h3>
                <p className="font-sans text-[#5c6478] text-sm">
                  {tier.subtitle}
                </p>
              </div>

              {/* Price */}
              <div className="flex items-end gap-1">
                <span className="font-serif text-5xl text-[#f0ebe0] font-bold">
                  ${annual ? tier.annualPrice : tier.monthlyPrice}
                </span>
                <span className="font-sans text-[#5c6478] text-lg mb-1.5">
                  /mo
                </span>
              </div>

              {annual && (
                <p className="font-sans text-xs text-[#c9a84c] -mt-4">
                  Billed annually — ${tier.annualPrice * 12}/yr
                </p>
              )}

              {/* Features */}
              <ul className="flex flex-col gap-2.5 flex-1">
                {tier.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2.5 font-sans text-sm text-[#a0a8b8]"
                  >
                    <Check
                      size={14}
                      className="text-[#c9a84c] flex-shrink-0 mt-0.5"
                    />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Link
                href={tier.ctaHref}
                className={`font-sans font-semibold text-sm rounded-full px-6 py-2.5 text-center transition-colors duration-200 ${
                  tier.highlighted
                    ? "bg-[#c9a84c] text-[#0a0e1a] hover:bg-[#d4b85c]"
                    : "border border-[#1e2d45] text-[#f0ebe0] hover:border-[#c9a84c]"
                }`}
              >
                {tier.cta}
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────────────── */}
      <section className="py-24 px-4 border-t border-[#1e2d45]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl text-[#f0ebe0] text-center mb-12">
            Frequently Asked Questions
          </h2>
          {faqs.map((faq) => (
            <FaqItem
              key={faq.question}
              question={faq.question}
              answer={faq.answer}
            />
          ))}
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────────── */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-[#0f1626] to-[#162036] border border-[#c9a84c]/20 rounded-2xl p-8 md:p-12 text-center flex flex-col items-center gap-6">
            <h2 className="font-serif text-3xl md:text-4xl text-[#f0ebe0] max-w-2xl leading-tight">
              Not sure which plan is right for you?
            </h2>
            <p className="font-sans text-[#a0a8b8] max-w-xl">
              Talk to our team and we&apos;ll help you find the best fit for
              your facility&apos;s size and needs.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/signup"
                className="font-sans font-semibold bg-[#c9a84c] text-[#0a0e1a] rounded-full px-8 py-3 hover:bg-[#d4b85c] transition-colors duration-200"
              >
                Start Free Trial
              </Link>
              <Link
                href="/contact"
                className="font-sans border border-[#1e2d45] text-[#f0ebe0] rounded-full px-8 py-3 hover:border-[#c9a84c] transition-colors duration-200"
              >
                Talk to Sales
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
