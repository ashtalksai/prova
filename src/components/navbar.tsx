"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Pricing", href: "#pricing" },
  { label: "About", href: "/about" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-[#0a0e1a]/90 backdrop-blur-md border-b border-[#1e2d45]">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/logo-placeholder.png"
            alt="Prova"
            width={28}
            height={28}
            className="object-contain"
          />
          <span className="font-serif italic font-bold text-[#c9a84c] tracking-widest uppercase text-xl">
            Prova
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-sans text-[#a0a8b8] hover:text-[#f0ebe0] transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center">
          <Link
            href="/signup"
            className="bg-[#c9a84c] text-[#0a0e1a] font-sans font-semibold text-sm rounded-full px-6 py-2 hover:bg-[#d4b85c] transition-colors duration-200"
          >
            Start Free Trial
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-[#a0a8b8] hover:text-[#f0ebe0] transition-colors duration-200"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="md:hidden border-t border-[#1e2d45] bg-[#0a0e1a]">
          <nav className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm font-sans text-[#a0a8b8] hover:text-[#f0ebe0] transition-colors duration-200 py-1"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/signup"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center bg-[#c9a84c] text-[#0a0e1a] font-sans font-semibold text-sm rounded-full px-6 py-2.5 hover:bg-[#d4b85c] transition-colors duration-200"
            >
              Start Free Trial
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
