"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  FileSpreadsheet,
  EyeOff,
  Shield,
  Car,
  Thermometer,
  Wrench,
  Users,
  Calendar,
  CreditCard,
  ChevronDown,
  Check,
} from "lucide-react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

// ─── Pain Points ─────────────────────────────────────────────────────────────

const painPoints = [
  {
    icon: FileSpreadsheet,
    title: "Scattered Data & Spreadsheets",
    description:
      "Vehicle records scattered across Excel files, sticky notes, and memory. One misplaced document can cost thousands.",
  },
  {
    icon: EyeOff,
    title: "Blind Owners, Zero Transparency",
    description:
      "Owners entrust you with million-dollar assets but have no visibility into storage conditions or service history.",
  },
  {
    icon: Shield,
    title: "Zero Provenance Documentation",
    description:
      "Without proper documentation, vehicle provenance suffers — reducing resale value and owner confidence.",
  },
];

// ─── Features ─────────────────────────────────────────────────────────────────

const features = [
  {
    icon: Car,
    title: "Vehicle Profiles",
    description:
      "Comprehensive digital records for every vehicle. Make, model, VIN, photos, condition notes, and complete history at your fingertips.",
  },
  {
    icon: Thermometer,
    title: "Climate Monitoring",
    description:
      "Real-time temperature and humidity tracking. Automated alerts when conditions drift outside optimal ranges for each vehicle type.",
  },
  {
    icon: Wrench,
    title: "Service Management",
    description:
      "Schedule and track maintenance, detailing, and repairs. Full service history with costs, providers, and photo documentation.",
  },
  {
    icon: Users,
    title: "Owner Directory",
    description:
      "Centralized owner profiles with contact info, preferences, and their complete vehicle portfolio. White-glove communication tools.",
  },
  {
    icon: Calendar,
    title: "Scheduling",
    description:
      "Drag-and-drop calendar for vehicle movements, services, and facility events. Automated reminders for upcoming tasks.",
  },
  {
    icon: CreditCard,
    title: "Billing & Invoicing",
    description:
      "Automated billing through Stripe. Generate professional invoices, track payments, and manage subscriptions effortlessly.",
  },
];

// ─── Pricing ──────────────────────────────────────────────────────────────────

const pricingTiers = [
  {
    name: "Starter",
    price: "$500",
    period: "/mo",
    subtitle: "Up to 30 vehicles",
    features: [
      "Basic climate logging",
      "Vehicle profiles",
      "Owner directory",
      "Email support",
    ],
    highlighted: false,
    cta: "View Details",
  },
  {
    name: "Professional",
    price: "$1,000",
    period: "/mo",
    subtitle: "Up to 100 vehicles",
    features: [
      "Advanced climate alerts",
      "Service management",
      "Owner portal access",
      "Priority support",
      "Custom reports",
    ],
    highlighted: true,
    cta: "View Details",
  },
  {
    name: "Enterprise",
    price: "$1,500",
    period: "/mo",
    subtitle: "Unlimited vehicles",
    features: [
      "Dedicated account manager",
      "Custom integrations",
      "Multi-facility support",
      "API access",
      "SLA guarantee",
    ],
    highlighted: false,
    cta: "View Details",
  },
];

// ─── Stats ────────────────────────────────────────────────────────────────────

const stats = [
  { number: "50+", label: "Facilities Worldwide" },
  { number: "$2B+", label: "Assets Under Management" },
  { number: "99.9%", label: "Platform Uptime" },
  { number: "<2hr", label: "Response Time" },
];

const testimonials = [
  {
    quote:
      "Prova transformed how we manage our 40-car collection storage. The climate monitoring alone has prevented potential damage worth hundreds of thousands.",
    name: "Marcus Chen",
    title: "Director of Operations, Vault Automotive",
  },
  {
    quote:
      "Finally, software that understands the luxury car storage business. Our clients love the transparency and we love the efficiency.",
    name: "Sarah Blackwood",
    title: "CEO, Heritage Motor Holdings",
  },
  {
    quote:
      "The owner portal is a game-changer. Our clients can check on their vehicles anytime, which has dramatically reduced inquiry calls.",
    name: "James Thornton",
    title: "Facility Manager, Concours Storage",
  },
];

// ─── FAQ ──────────────────────────────────────────────────────────────────────

const faqs = [
  {
    question: "Is Prova compatible with existing facility management systems?",
    answer:
      "Yes, Prova is designed to integrate with your existing workflows. We offer CSV import for vehicle data, API access on Professional and Enterprise plans, and can work alongside your current tools during transition.",
  },
  {
    question: "How secure is our data?",
    answer:
      "Security is paramount. Prova uses bank-grade AES-256 encryption, SOC 2 Type II compliant infrastructure, and role-based access controls. Your data is hosted on AWS with automated backups and 99.99% uptime SLA.",
  },
  {
    question: "Can we customize the platform for our facility?",
    answer:
      "Absolutely. Enterprise plans include custom branding, tailored reporting, and bespoke integrations. Even on Professional plans, you can configure climate alert thresholds, service categories, and owner communication templates.",
  },
  {
    question: "How long does implementation take?",
    answer:
      "Most facilities are fully operational within 48 hours. Our onboarding team handles data migration, staff training, and initial configuration. We offer white-glove setup at no additional cost.",
  },
  {
    question: "Does Prova support IoT climate sensors?",
    answer:
      "Yes, we integrate with major IoT sensor platforms including SensorPush, Govee, and custom solutions. Real-time data feeds directly into vehicle climate logs with automated alerting.",
  },
  {
    question: "What training and support do you provide?",
    answer:
      "All plans include comprehensive onboarding, video tutorials, and email support. Professional and Enterprise plans add priority phone support, dedicated account managers, and on-site training sessions.",
  },
];

// ─── FAQ Item Component ────────────────────────────────────────────────────────

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

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0e1a]">
      <Navbar />

      {/* ── 1. Hero ────────────────────────────────────────────────────────── */}
      <section className="min-h-screen flex items-center bg-[#0a0e1a] px-4 md:px-8 py-20">
        <div className="max-w-7xl mx-auto w-full">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
          >
            {/* Left column */}
            <motion.div variants={fadeIn} className="flex flex-col gap-6">
              <h1 className="font-serif text-5xl md:text-6xl text-[#f0ebe0] font-bold leading-tight tracking-tight">
                Your clients store{" "}
                <span className="border-b-2 border-[#c9a84c]">icons</span>.
                <br />
                Manage them like it.
              </h1>
              <p className="font-sans text-[#a0a8b8] text-lg leading-relaxed max-w-lg">
                Prova is purpose-built operations software for high-end car
                storage facilities. Climate monitoring, service history, owner
                portals — unified in one elegant platform.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <Link
                  href="/signup"
                  className="font-sans font-semibold bg-[#c9a84c] text-[#0a0e1a] rounded-full px-8 py-3 hover:bg-[#d4b85c] transition-colors duration-200"
                >
                  Get Started
                </Link>
                <button className="font-sans border border-[#1e2d45] text-[#f0ebe0] rounded-full px-8 py-3 hover:border-[#c9a84c] transition-colors duration-200">
                  Watch Demo
                </button>
              </div>
            </motion.div>

            {/* Right column — hero image */}
            <motion.div variants={fadeIn}>
              <Image
                src="/images/hero-illustration.png"
                alt="Prova Dashboard"
                width={600}
                height={400}
                className="rounded-lg border border-[#1e2d45] w-full h-auto"
                priority
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── 2. Pain Points ────────────────────────────────────────────────── */}
      <section className="py-24 px-4 md:px-8 bg-[#0a0e1a]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="text-center mb-14"
          >
            <h2 className="font-serif text-3xl md:text-4xl text-[#f0ebe0]">
              The Industry Runs on Guesswork
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {painPoints.map((point) => (
              <motion.div
                key={point.title}
                variants={fadeIn}
                className="bg-[#0f1626] border border-[#1e2d45] rounded-xl p-8 hover:border-[#c9a84c]/50 transition-colors duration-300"
              >
                <point.icon
                  size={32}
                  className="text-[#c9a84c] mb-5"
                />
                <h3 className="font-serif text-xl text-[#f0ebe0] font-semibold mb-3">
                  {point.title}
                </h3>
                <p className="font-sans text-[#a0a8b8] text-sm leading-relaxed">
                  {point.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── 3. Solution / Elevate ─────────────────────────────────────────── */}
      <section className="py-24 px-4 md:px-8 bg-[#0a0e1a]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="bg-[#0f1626] border border-[#c9a84c]/30 rounded-2xl p-8 md:p-12"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div className="flex flex-col gap-5">
                <h2 className="font-serif text-3xl md:text-4xl text-[#c9a84c] italic">
                  Elevate Your Operations
                </h2>
                <p className="font-sans text-[#a0a8b8] text-base leading-relaxed">
                  One platform to manage vehicles, monitor environments,
                  coordinate services, and keep owners informed — all with the
                  sophistication your clients expect.
                </p>
                <Link
                  href="/signup"
                  className="font-sans font-semibold bg-[#c9a84c] text-[#0a0e1a] rounded-full px-8 py-3 hover:bg-[#d4b85c] transition-colors duration-200 self-start"
                >
                  See It in Action
                </Link>
              </div>
              <div className="relative rounded-lg overflow-hidden h-64 md:h-80">
                <Image
                  src="/images/problem-illustration.png"
                  alt="Before and after: chaos vs Prova dashboard"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── 4. Features Bento Grid ────────────────────────────────────────── */}
      <section id="features" className="py-24 px-4 md:px-8 bg-[#0a0e1a]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="text-center mb-14"
          >
            <h2 className="font-serif text-3xl md:text-4xl text-[#f0ebe0]">
              Everything You Need
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {features.map((feature) => (
              <motion.div
                key={feature.title}
                variants={fadeIn}
                className="bg-[#0f1626] border border-[#1e2d45] rounded-xl p-6 hover:border-[#c9a84c]/50 transition-all duration-300"
              >
                <feature.icon
                  size={32}
                  className="text-[#c9a84c] mb-4"
                />
                <h3 className="font-serif text-lg text-[#f0ebe0] font-semibold mb-2">
                  {feature.title}
                </h3>
                <p className="font-sans text-[#a0a8b8] text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── 5. How It Works ───────────────────────────────────────────────── */}
      <section id="how-it-works" className="py-24 px-4 md:px-8 bg-[#0a0e1a]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-3xl text-[#f0ebe0]">
              Get Started in Three Steps
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="relative"
          >
            {/* Connecting line — desktop only */}
            <div className="hidden md:block absolute top-6 left-0 right-0 h-px bg-[#c9a84c]/30 mx-auto"
              style={{ width: "calc(100% - 96px)", left: "48px" }}
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 relative">
              {[
                {
                  step: "1",
                  title: "Onboard Your Facility",
                  description:
                    "Set up your bays, import vehicle data, and configure monitoring preferences. We'll help migrate your existing records.",
                },
                {
                  step: "2",
                  title: "Centralize Vehicle Data",
                  description:
                    "Every vehicle gets a comprehensive digital profile. Climate logs, service records, and owner details — all in one place.",
                },
                {
                  step: "3",
                  title: "Delight Your Clients",
                  description:
                    "Give owners real-time visibility into their vehicles. Automated reports, proactive maintenance alerts, and white-glove service.",
                },
              ].map((item) => (
                <motion.div
                  key={item.step}
                  variants={fadeIn}
                  className="flex flex-col items-center text-center gap-5"
                >
                  <div className="w-12 h-12 rounded-full bg-[#c9a84c] text-[#0a0e1a] flex items-center justify-center font-bold text-xl font-serif relative z-10">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="font-serif text-xl text-[#f0ebe0] font-semibold mb-2">
                      {item.title}
                    </h3>
                    <p className="font-sans text-[#a0a8b8] text-sm leading-relaxed max-w-xs mx-auto">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── 6. Pricing Preview ────────────────────────────────────────────── */}
      <section id="pricing" className="py-24 px-4 md:px-8 bg-[#0a0e1a]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="text-center mb-4"
          >
            <h2 className="font-serif text-3xl text-[#f0ebe0]">
              Simple, Transparent Pricing
            </h2>
          </motion.div>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="font-sans text-[#a0a8b8] text-center mb-14 max-w-xl mx-auto"
          >
            No hidden fees. No per-vehicle charges. Just one flat rate for your
            facility.
          </motion.p>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {pricingTiers.map((tier) => (
              <motion.div
                key={tier.name}
                variants={fadeIn}
                className={`relative rounded-xl p-8 flex flex-col gap-6 ${
                  tier.highlighted
                    ? "bg-[#0f1626] border border-[#c9a84c]"
                    : "bg-[#0f1626] border border-[#1e2d45]"
                }`}
              >
                {tier.highlighted && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#c9a84c] text-[#0a0e1a] text-xs font-bold uppercase px-3 py-1 rounded-full tracking-wide">
                    Most Popular
                  </span>
                )}

                <div>
                  <h3 className="font-serif text-xl text-[#f0ebe0] font-semibold mb-1">
                    {tier.name}
                  </h3>
                  <p className="font-sans text-[#5c6478] text-sm">
                    {tier.subtitle}
                  </p>
                </div>

                <div className="flex items-end gap-1">
                  <span className="font-serif text-4xl text-[#f0ebe0] font-bold">
                    {tier.price}
                  </span>
                  <span className="font-sans text-[#5c6478] text-sm mb-1.5">
                    {tier.period}
                  </span>
                </div>

                <ul className="flex flex-col gap-2.5 flex-1">
                  {tier.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2.5 font-sans text-sm text-[#a0a8b8]"
                    >
                      <Check
                        size={14}
                        className="text-[#c9a84c] flex-shrink-0"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  href="/pricing"
                  className={`font-sans font-semibold text-sm rounded-full px-6 py-2.5 text-center transition-colors duration-200 ${
                    tier.highlighted
                      ? "bg-[#c9a84c] text-[#0a0e1a] hover:bg-[#d4b85c]"
                      : "border border-[#1e2d45] text-[#f0ebe0] hover:border-[#c9a84c]"
                  }`}
                >
                  {tier.cta}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── 7. Social Proof / Stats ───────────────────────────────────────── */}
      <section className="py-24 px-4 md:px-8 bg-[#0a0e1a]">
        <div className="max-w-7xl mx-auto">
          {/* Stats row */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
          >
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                variants={fadeIn}
                className="text-center"
              >
                <div className="font-serif text-4xl text-[#c9a84c] font-bold mb-1">
                  {stat.number}
                </div>
                <div className="font-sans text-[#a0a8b8] text-sm">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Testimonials */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {testimonials.map((t) => (
              <motion.div
                key={t.name}
                variants={fadeIn}
                className="bg-[#0f1626] border border-[#1e2d45] rounded-xl p-6 flex flex-col gap-4"
              >
                <p className="font-sans text-[#a0a8b8] text-sm leading-relaxed italic flex-1">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div>
                  <div className="font-sans font-semibold text-[#f0ebe0] text-sm">
                    {t.name}
                  </div>
                  <div className="font-sans text-[#5c6478] text-xs mt-0.5">
                    {t.title}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── 8. FAQ ────────────────────────────────────────────────────────── */}
      <section className="py-24 px-4 md:px-8 bg-[#0a0e1a]">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="text-center mb-12"
          >
            <h2 className="font-serif text-3xl text-[#f0ebe0]">
              Frequently Asked Questions
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
          >
            {faqs.map((faq) => (
              <FaqItem
                key={faq.question}
                question={faq.question}
                answer={faq.answer}
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── 9. CTA Banner ─────────────────────────────────────────────────── */}
      <section className="py-24 px-4 md:px-8 bg-[#0a0e1a]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="bg-gradient-to-r from-[#0f1626] to-[#162036] border border-[#c9a84c]/20 rounded-2xl p-8 md:p-12 text-center flex flex-col items-center gap-6"
          >
            <h2 className="font-serif text-3xl md:text-4xl text-[#f0ebe0] max-w-2xl leading-tight">
              Ready to transform your luxury car storage business?
            </h2>
            <p className="font-sans text-[#a0a8b8] max-w-xl">
              Join 50+ premium facilities already using Prova to deliver
              exceptional storage experiences.
            </p>
            <Link
              href="/signup"
              className="font-sans font-semibold text-lg bg-[#c9a84c] text-[#0a0e1a] rounded-full px-8 py-3 hover:bg-[#d4b85c] transition-colors duration-200"
            >
              Start Your Free Trial
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
