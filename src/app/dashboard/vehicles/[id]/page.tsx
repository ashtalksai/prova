import Link from "next/link";
import { ArrowLeft, Thermometer, Wrench, Calendar, FileText, Phone } from "lucide-react";

type Vehicle = {
  name: string;
  make: string;
  model: string;
  year: string;
  color: string;
  vin: string;
  owner: string;
  bay: string;
  status: string;
};

const vehicleData: Record<string, Vehicle> = {
  "1": {
    name: "2019 Ferrari 488 Pista",
    make: "Ferrari",
    model: "488 Pista",
    year: "2019",
    color: "Rosso Corsa",
    vin: "ZFF92LLA5K0243567",
    owner: "Marcus Chen",
    bay: "14A",
    status: "Stored",
  },
  "2": {
    name: "2021 Porsche 911 GT3",
    make: "Porsche",
    model: "911 GT3",
    year: "2021",
    color: "Guards Red",
    vin: "WP0AC2A91MS270341",
    owner: "S. Blackwood",
    bay: "07B",
    status: "Stored",
  },
  "3": {
    name: "2020 McLaren 720S",
    make: "McLaren",
    model: "720S",
    year: "2020",
    color: "Papaya Spark",
    vin: "SBM14DCA5LW006789",
    owner: "J. Thornton",
    bay: "22C",
    status: "In Service",
  },
  "4": {
    name: "2018 Lamborghini Aventador SVJ",
    make: "Lamborghini",
    model: "Aventador SVJ",
    year: "2018",
    color: "Verde Mantis",
    vin: "ZHWUM6ZD3JLA12345",
    owner: "R. Nakamura",
    bay: "03A",
    status: "Stored",
  },
  "5": {
    name: "2022 Aston Martin DBS",
    make: "Aston Martin",
    model: "DBS Superleggera",
    year: "2022",
    color: "Magnetic Silver",
    vin: "SCFRMFAW5NGL12345",
    owner: "E. Dubois",
    bay: "19D",
    status: "Arriving",
  },
  "6": {
    name: "2023 Mercedes-AMG GT",
    make: "Mercedes-AMG",
    model: "GT 63 S",
    year: "2023",
    color: "Obsidian Black",
    vin: "W1KZF8KB0PA012345",
    owner: "A. Petrov",
    bay: "11B",
    status: "Stored",
  },
};

const climateReadings = [
  { date: "Mar 7", temp: "72°F", rh: "45%" },
  { date: "Mar 6", temp: "71°F", rh: "44%" },
  { date: "Mar 5", temp: "73°F", rh: "46%" },
  { date: "Mar 4", temp: "72°F", rh: "45%" },
  { date: "Mar 3", temp: "71°F", rh: "43%" },
];

const serviceHistory = [
  {
    title: "Full Detail & Ceramic Coating",
    date: "Mar 1, 2026",
    cost: "$2,500",
    provider: "Prestige Auto Spa",
  },
  {
    title: "Tire Pressure Check",
    date: "Feb 15, 2026",
    cost: "$0",
    provider: "In-house",
  },
  {
    title: "Battery Tender Installation",
    date: "Jan 20, 2026",
    cost: "$350",
    provider: "EuroTech",
  },
];

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

export default async function VehicleDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const vehicle = vehicleData[id];

  if (!vehicle) {
    return (
      <div className="text-center py-20">
        <p className="text-[#5c6478] font-sans text-sm">Vehicle not found.</p>
        <Link
          href="/dashboard/vehicles"
          className="mt-4 inline-block text-[#c9a84c] text-sm font-sans hover:underline"
        >
          Back to Vehicles
        </Link>
      </div>
    );
  }

  return (
    <div>
      {/* Back link */}
      <Link
        href="/dashboard/vehicles"
        className="inline-flex items-center gap-2 text-[#a0a8b8] hover:text-[#f0ebe0] font-sans text-sm transition-colors duration-150 mb-6"
      >
        <ArrowLeft size={16} />
        Back to Vehicles
      </Link>

      {/* Hero */}
      <div className="bg-[#0f1626] rounded-xl p-8 border border-[#1e2d45]">
        <h2 className="font-serif text-2xl md:text-3xl text-[#c9a84c] italic font-semibold leading-tight">
          {vehicle.name} — Bay {vehicle.bay}
        </h2>
        <p className="text-[#a0a8b8] font-sans text-sm mt-2">
          Owned by {vehicle.owner}
        </p>
        <div className="flex flex-wrap items-center gap-3 mt-4">
          <StatusBadge status={vehicle.status} />
          <span className="font-mono text-xs text-[#5c6478]">{vehicle.vin}</span>
        </div>
      </div>

      {/* Three-column grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
        {/* Card 1: Vehicle Details */}
        <div className="bg-[#0f1626] border border-[#1e2d45] rounded-xl p-6">
          <h3 className="font-serif text-lg text-[#f0ebe0] font-semibold mb-5">
            Vehicle Details
          </h3>
          <dl className="space-y-3">
            {[
              { label: "Make", value: vehicle.make },
              { label: "Model", value: vehicle.model },
              { label: "Year", value: vehicle.year },
              { label: "Color", value: vehicle.color },
              { label: "VIN", value: vehicle.vin, mono: true },
              { label: "Bay", value: vehicle.bay },
              { label: "Status", value: vehicle.status },
            ].map(({ label, value, mono }) => (
              <div key={label} className="flex justify-between items-start gap-4">
                <dt className="text-[#5c6478] text-sm font-sans flex-shrink-0">
                  {label}
                </dt>
                <dd
                  className={[
                    "text-[#f0ebe0] text-sm text-right",
                    mono ? "font-mono text-xs" : "font-sans",
                  ].join(" ")}
                >
                  {value}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Card 2: Climate History */}
        <div className="bg-[#0f1626] border border-[#1e2d45] rounded-xl p-6">
          <div className="flex items-center gap-2 mb-5">
            <Thermometer size={16} className="text-[#c9a84c]" />
            <h3 className="font-serif text-lg text-[#f0ebe0] font-semibold">
              Climate History
            </h3>
          </div>

          {/* Current reading */}
          <div className="bg-[#162036] rounded-lg px-4 py-3 mb-5">
            <p className="text-[#5c6478] text-xs font-sans uppercase tracking-wider mb-1">
              Current Reading
            </p>
            <p className="text-[#f0ebe0] font-serif text-2xl font-semibold">
              72°F{" "}
              <span className="text-[#a0a8b8] text-base font-sans font-normal">
                / 45% RH
              </span>
            </p>
            <p className="text-[#22c55e] text-xs font-sans mt-1">Optimal</p>
          </div>

          {/* Readings list */}
          <p className="text-[#5c6478] text-xs font-sans uppercase tracking-wider mb-3">
            Last 7 Days
          </p>
          <div className="space-y-2">
            {climateReadings.map(({ date, temp, rh }) => (
              <div key={date} className="flex justify-between items-center">
                <span className="text-[#5c6478] text-sm font-sans">{date}</span>
                <span className="text-[#a0a8b8] text-sm font-sans font-mono">
                  {temp} / {rh}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Card 3: Service History */}
        <div className="bg-[#0f1626] border border-[#1e2d45] rounded-xl p-6">
          <div className="flex items-center gap-2 mb-5">
            <Wrench size={16} className="text-[#c9a84c]" />
            <h3 className="font-serif text-lg text-[#f0ebe0] font-semibold">
              Service History
            </h3>
          </div>
          <div>
            {serviceHistory.map(({ title, date, cost, provider }, i) => (
              <div
                key={i}
                className={[
                  "py-4",
                  i < serviceHistory.length - 1
                    ? "border-b border-[#1e2d45]"
                    : "",
                ].join(" ")}
              >
                <p className="text-[#f0ebe0] font-sans font-medium text-sm">
                  {title}
                </p>
                <p className="text-[#5c6478] text-xs font-sans mt-0.5">
                  {date} · {provider}
                </p>
                <p className="text-[#c9a84c] font-mono text-sm mt-1">{cost}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Action buttons */}
      <div className="flex flex-wrap gap-4 mt-6">
        <button className="bg-[#c9a84c] text-[#0a0e1a] rounded-full px-6 py-2 font-semibold font-sans text-sm hover:bg-[#d4b85c] transition-colors duration-150 flex items-center gap-2">
          <Calendar size={15} />
          Schedule Service
        </button>
        <button className="border border-[#1e2d45] rounded-full px-6 py-2 text-[#f0ebe0] font-sans text-sm hover:border-[#c9a84c] transition-colors duration-150 flex items-center gap-2">
          <FileText size={15} />
          Generate Report
        </button>
        <button className="border border-[#1e2d45] rounded-full px-6 py-2 text-[#f0ebe0] font-sans text-sm hover:border-[#c9a84c] transition-colors duration-150 flex items-center gap-2">
          <Phone size={15} />
          Contact Owner
        </button>
      </div>
    </div>
  );
}
