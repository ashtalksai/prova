import { Mail, Phone, ChevronRight } from "lucide-react";

type Owner = {
  name: string;
  vehicles: number;
  email: string;
  phone: string;
};

const owners: Owner[] = [
  {
    name: "Marcus Chen",
    vehicles: 3,
    email: "marcus.chen@email.com",
    phone: "+1 (555) 100-2000",
  },
  {
    name: "Sarah Blackwood",
    vehicles: 2,
    email: "sarah@heritagemotor.com",
    phone: "+1 (555) 200-3000",
  },
  {
    name: "James Thornton",
    vehicles: 4,
    email: "j.thornton@email.com",
    phone: "+1 (555) 300-4000",
  },
  {
    name: "Riku Nakamura",
    vehicles: 1,
    email: "riku.n@email.com",
    phone: "+1 (555) 400-5000",
  },
  {
    name: "Elena Dubois",
    vehicles: 2,
    email: "elena.dubois@email.com",
    phone: "+1 (555) 500-6000",
  },
  {
    name: "Alexander Petrov",
    vehicles: 3,
    email: "a.petrov@email.com",
    phone: "+1 (555) 600-7000",
  },
];

function OwnerCard({ owner }: { owner: Owner }) {
  const initial = owner.name.charAt(0);

  return (
    <div className="bg-[#0f1626] border border-[#1e2d45] rounded-xl p-6 hover:border-[#c9a84c]/50 transition-colors duration-150 flex flex-col gap-4">
      {/* Avatar + name */}
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-[#162036] border border-[#1e2d45] flex items-center justify-center flex-shrink-0">
          <span className="font-serif font-bold text-[#c9a84c] text-lg leading-none">
            {initial}
          </span>
        </div>
        <div>
          <h3 className="text-[#f0ebe0] font-semibold text-lg font-sans leading-tight">
            {owner.name}
          </h3>
          <span className="text-[#c9a84c] text-sm font-sans">
            {owner.vehicles} {owner.vehicles === 1 ? "vehicle" : "vehicles"}
          </span>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-[#1e2d45]" />

      {/* Contact */}
      <div className="flex flex-col gap-2.5">
        <div className="flex items-center gap-2 min-w-0">
          <Mail size={13} className="text-[#5c6478] flex-shrink-0" />
          <span className="text-[#a0a8b8] text-sm font-sans truncate">
            {owner.email}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <Phone size={13} className="text-[#5c6478] flex-shrink-0" />
          <span className="text-[#a0a8b8] text-sm font-sans">
            {owner.phone}
          </span>
        </div>
      </div>

      {/* View profile */}
      <div className="mt-auto pt-2">
        <button className="flex items-center gap-1 text-[#c9a84c] text-sm font-sans hover:underline transition-all duration-150">
          View Profile
          <ChevronRight size={13} />
        </button>
      </div>
    </div>
  );
}

export default function OwnersPage() {
  return (
    <div>
      {/* Page header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
        <div>
          <h2 className="font-serif text-2xl text-[#f0ebe0] font-semibold">
            Owner Directory
          </h2>
          <p className="text-[#a0a8b8] text-sm font-sans mt-1">
            {owners.length} registered owners across your facility.
          </p>
        </div>

        {/* Search */}
        <div className="relative sm:w-64">
          <input
            type="search"
            placeholder="Search owners..."
            className="w-full bg-[#0a0e1a] border border-[#1e2d45] rounded-lg px-4 py-2.5 text-sm text-[#f0ebe0] placeholder-[#5c6478] focus:border-[#c9a84c] focus:outline-none font-sans transition-colors duration-150"
          />
        </div>
      </div>

      {/* Owner grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {owners.map((owner) => (
          <OwnerCard key={owner.email} owner={owner} />
        ))}
      </div>
    </div>
  );
}
