"use client";

import { useState } from "react";
import Link from "next/link";
import { Plus, Search, Car } from "lucide-react";

const allVehicles = [
  {
    id: "1",
    name: "2019 Ferrari 488 Pista",
    vin: "ZFF92LLA5K0243567",
    owner: "Marcus Chen",
    bay: "14A",
    status: "Stored",
  },
  {
    id: "2",
    name: "2021 Porsche 911 GT3",
    vin: "WP0AC2A91MS270341",
    owner: "S. Blackwood",
    bay: "07B",
    status: "Stored",
  },
  {
    id: "3",
    name: "2020 McLaren 720S",
    vin: "SBM14DCA5LW006789",
    owner: "J. Thornton",
    bay: "22C",
    status: "In Service",
  },
  {
    id: "4",
    name: "2018 Lamborghini Aventador SVJ",
    vin: "ZHWUM6ZD3JLA12345",
    owner: "R. Nakamura",
    bay: "03A",
    status: "Stored",
  },
  {
    id: "5",
    name: "2022 Aston Martin DBS",
    vin: "SCFRMFAW5NGL12345",
    owner: "E. Dubois",
    bay: "19D",
    status: "Arriving",
  },
  {
    id: "6",
    name: "2023 Mercedes-AMG GT",
    vin: "W1KZF8KB0PA012345",
    owner: "A. Petrov",
    bay: "11B",
    status: "Stored",
  },
];

const filters = ["All", "Stored", "In Service", "Arriving"];

function StatusBadge({ status }: { status: string }) {
  const styles: Record<string, string> = {
    Stored: "bg-[#22c55e]/10 text-[#22c55e]",
    "In Service": "bg-[#eab308]/10 text-[#eab308]",
    Arriving: "bg-[#3b82f6]/10 text-[#3b82f6]",
  };

  return (
    <span
      className={[
        "rounded-full px-2.5 py-0.5 text-xs font-medium font-sans",
        styles[status] ?? "bg-[#a0a8b8]/10 text-[#a0a8b8]",
      ].join(" ")}
    >
      {status}
    </span>
  );
}

export default function VehiclesPage() {
  const [search, setSearch] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered = allVehicles.filter((v) => {
    const matchesFilter =
      activeFilter === "All" || v.status === activeFilter;
    const q = search.toLowerCase();
    const matchesSearch =
      q === "" ||
      v.name.toLowerCase().includes(q) ||
      v.vin.toLowerCase().includes(q) ||
      v.owner.toLowerCase().includes(q) ||
      v.bay.toLowerCase().includes(q);
    return matchesFilter && matchesSearch;
  });

  return (
    <div>
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <h2 className="font-serif text-2xl text-[#f0ebe0] font-semibold">
          Vehicles
        </h2>
        <Link
          href="/dashboard/vehicles/new"
          className="bg-[#c9a84c] text-[#0a0e1a] rounded-full px-6 py-2 font-semibold font-sans flex items-center gap-2 hover:bg-[#d4b85c] transition-colors duration-150 text-sm"
        >
          <Plus size={16} />
          Add Vehicle
        </Link>
      </div>

      {/* Search and filters */}
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        {/* Search */}
        <div className="relative w-full md:w-96">
          <Search
            size={16}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-[#5c6478] pointer-events-none"
          />
          <input
            type="text"
            placeholder="Search vehicles, VIN, owner…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-[#0f1626] border border-[#1e2d45] rounded-lg pl-10 pr-4 py-2.5 text-[#f0ebe0] placeholder-[#5c6478] font-sans text-sm focus:border-[#c9a84c] focus:outline-none transition-colors duration-150"
          />
        </div>

        {/* Filter pills */}
        <div className="flex items-center gap-2 flex-wrap">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={[
                "rounded-full px-4 py-1.5 text-sm font-sans border transition-colors duration-150",
                activeFilter === f
                  ? "bg-[#162036] text-[#c9a84c] border-[#c9a84c]"
                  : "bg-transparent text-[#a0a8b8] border-[#1e2d45] hover:border-[#a0a8b8]",
              ].join(" ")}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* Vehicle grid */}
      {filtered.length === 0 ? (
        <div className="text-center py-20 text-[#5c6478] font-sans text-sm">
          No vehicles match your search.
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((vehicle) => (
            <Link
              key={vehicle.id}
              href={`/dashboard/vehicles/${vehicle.id}`}
              className="block bg-[#0f1626] border border-[#1e2d45] rounded-xl overflow-hidden hover:border-[#c9a84c]/50 transition-colors duration-150 group"
            >
              {/* Image placeholder */}
              <div className="bg-[#162036] h-48 flex items-center justify-center">
                <Car size={48} className="text-[#5c6478] group-hover:text-[#c9a84c]/40 transition-colors duration-150" />
              </div>

              {/* Card body */}
              <div className="p-5">
                <p className="text-[#f0ebe0] font-serif text-lg font-semibold leading-snug">
                  {vehicle.name}
                </p>
                <p className="font-mono text-xs text-[#5c6478] mt-1">
                  {vehicle.vin}
                </p>
                <div className="flex items-center justify-between mt-3">
                  <span className="text-[#a0a8b8] text-sm font-sans">
                    {vehicle.owner}
                  </span>
                  <span className="bg-[#162036] text-[#a0a8b8] text-xs px-2 py-0.5 rounded font-sans">
                    Bay {vehicle.bay}
                  </span>
                </div>
                <div className="mt-3">
                  <StatusBadge status={vehicle.status} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
