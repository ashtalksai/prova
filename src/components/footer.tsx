import Link from "next/link";

const columns = [
  {
    heading: "Product",
    links: [
      { label: "Features", href: "#features" },
      { label: "Pricing", href: "/pricing" },
      { label: "Demo", href: "/login?demo=true" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { label: "Documentation", href: "/docs" },
      { label: "Pitch Deck", href: "/deck" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#0a0e1a] border-t border-[#1e2d45]">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Column grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
          {/* Link columns */}
          {columns.map((col) => (
            <div key={col.heading}>
              <h4 className="font-serif text-[#f0ebe0] font-semibold text-base mb-4 tracking-wide">
                {col.heading}
              </h4>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="font-sans text-sm text-[#5c6478] hover:text-[#a0a8b8] transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact column */}
          <div>
            <h4 className="font-serif text-[#f0ebe0] font-semibold text-base mb-4 tracking-wide">
              Contact
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="mailto:hello@getprova.com"
                  className="font-sans text-sm text-[#5c6478] hover:text-[#a0a8b8] transition-colors duration-200"
                >
                  hello@getprova.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+15550000000"
                  className="font-sans text-sm text-[#5c6478] hover:text-[#a0a8b8] transition-colors duration-200"
                >
                  (555) 000-0000
                </a>
              </li>
              <li>
                <span className="font-sans text-sm text-[#5c6478]">
                  New York, NY
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#1e2d45] pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          {/* Logo + copyright */}
          <div className="flex items-center gap-3">
            <span className="font-serif italic font-bold text-[#c9a84c] tracking-widest uppercase text-lg">
              Prova
            </span>
            <span className="font-sans text-xs text-[#5c6478]">
              &copy; 2026 Prova Technologies. All rights reserved.
            </span>
          </div>

          {/* Legal links */}
          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="font-sans text-xs text-[#5c6478] hover:text-[#a0a8b8] transition-colors duration-200"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="font-sans text-xs text-[#5c6478] hover:text-[#a0a8b8] transition-colors duration-200"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
