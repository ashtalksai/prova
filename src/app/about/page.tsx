import Image from "next/image";
import Link from "next/link";
import { Target, ScrollText, Crown, Lock } from "lucide-react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const values = [
  {
    icon: Target,
    title: "Precision",
    description:
      "Every measurement, every log, every detail — captured with the exactitude that million-dollar assets demand.",
  },
  {
    icon: ScrollText,
    title: "Provenance",
    description:
      "Complete vehicle history from day one. Documentation that protects value and builds owner confidence.",
  },
  {
    icon: Crown,
    title: "Premium",
    description:
      "Software that reflects the caliber of your facility. No compromise on design, performance, or experience.",
  },
  {
    icon: Lock,
    title: "Privacy",
    description:
      "Bank-grade encryption, SOC 2 compliance, and role-based access. Your clients' data is sacrosanct.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#0a0e1a]">
      <Navbar />

      {/* ── Hero ─────────────────────────────────────────────────────────────── */}
      <section className="relative py-32 min-h-[60vh] flex items-center justify-center">
        <Image
          src="/images/about-visual.png"
          alt="Luxury car storage facility"
          fill
          className="object-cover opacity-30"
          priority
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0e1a]/60 via-[#0a0e1a]/40 to-[#0a0e1a]" />

        <div className="relative z-10 px-4 max-w-7xl mx-auto text-center">
          <p className="font-serif text-3xl md:text-4xl text-[#c9a84c] italic text-center max-w-3xl mx-auto leading-relaxed">
            &ldquo;Storeganise is for self-storage. Prova is for car
            collections.&rdquo;
          </p>
        </div>
      </section>

      {/* ── Mission ──────────────────────────────────────────────────────────── */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="font-serif text-3xl text-[#f0ebe0] text-center mb-8">
            Our Mission
          </h2>
          <p className="font-sans text-[#a0a8b8] text-lg leading-relaxed max-w-3xl mx-auto">
            The luxury car storage industry has been underserved by generic
            software for too long. Facility managers running world-class
            collections of Ferraris, Porsches, and McLarens deserve tools that
            match the caliber of their work. Prova exists to bring purpose-built
            operations software to the high-end vehicle storage market — a
            platform designed from the ground up for the specific workflows,
            compliance needs, and client expectations of premium facilities.
            We believe that the same attention to detail that goes into storing
            a $3 million hypercar should go into the software that manages it.
          </p>
        </div>
      </section>

      {/* ── Values ───────────────────────────────────────────────────────────── */}
      <section className="py-24 px-4 bg-[#0a0e1a]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-[#0f1626] border border-[#1e2d45] rounded-xl p-8 hover:border-[#c9a84c]/50 transition-colors duration-300"
              >
                <value.icon
                  size={32}
                  className="text-[#c9a84c] mb-4"
                />
                <h3 className="font-serif text-xl text-[#f0ebe0] mb-3">
                  {value.title}
                </h3>
                <p className="font-sans text-[#a0a8b8] text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Market Gap ───────────────────────────────────────────────────────── */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-serif text-3xl text-[#f0ebe0] mb-6">
                Built for a Market That Deserved Better
              </h2>
              <p className="font-sans text-[#a0a8b8] leading-relaxed mb-4">
                The luxury vehicle storage market manages billions of dollars in
                collector assets with tools designed for public self-storage
                units. The gap between client expectations and operational
                reality was stark — and growing.
              </p>
              <p className="font-sans text-[#a0a8b8] leading-relaxed">
                We spent 18 months embedded with premium storage operators,
                understanding their workflows, their frustrations, and their
                vision for what great software could look like. Prova is the
                result: a platform where every feature reflects a real
                operational need, and every design decision reflects the
                standards of the industry it serves.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {[
                { number: "50+", label: "Facilities Onboarded" },
                { number: "$2B+", label: "Assets Under Management" },
                { number: "4,000+", label: "Vehicles Catalogued" },
                { number: "99.9%", label: "Platform Uptime" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="bg-[#0f1626] border border-[#1e2d45] rounded-xl p-6 text-center"
                >
                  <div className="font-serif text-3xl text-[#c9a84c] font-bold mb-1">
                    {stat.number}
                  </div>
                  <div className="font-sans text-[#a0a8b8] text-sm">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────────── */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-[#0f1626] to-[#162036] border border-[#c9a84c]/20 rounded-2xl p-8 md:p-12 text-center flex flex-col items-center gap-6">
            <h2 className="font-serif text-3xl md:text-4xl text-[#f0ebe0] max-w-2xl leading-tight">
              Ready to elevate your operations?
            </h2>
            <p className="font-sans text-[#a0a8b8] max-w-xl">
              Join the facilities that have already made the shift to
              purpose-built luxury storage management.
            </p>
            <Link
              href="/signup"
              className="font-sans font-semibold text-lg bg-[#c9a84c] text-[#0a0e1a] rounded-full px-8 py-3 hover:bg-[#d4b85c] transition-colors duration-200"
            >
              Start Your Free Trial
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
