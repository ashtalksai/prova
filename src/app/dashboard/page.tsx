import Link from "next/link";
import { Car, Users, Thermometer, Wrench } from "lucide-react";

const statCards = [
  {
    label: "Total Vehicles",
    value: "47",
    icon: Car,
    goldBorder: true,
  },
  {
    label: "Active Owners",
    value: "23",
    icon: Users,
    goldBorder: false,
  },
  {
    label: "Climate Alerts",
    value: "2",
    icon: Thermometer,
    goldBorder: false,
    warning: true,
  },
  {
    label: "Pending Services",
    value: "5",
    icon: Wrench,
    goldBorder: false,
  },
];

const vehicles = [
  {
    name: "2019 Ferrari 488 Pista",
    vin: "ZFF92LLA5K0243567",
    owner: "M. Chen",
    bay: "14A",
    status: "Stored",
    climate: "Optimal",
  },
  {
    name: "2021 Porsche 911 GT3",
    vin: "WP0AC2A91MS270341",
    owner: "S. Blackwood",
    bay: "07B",
    status: "Stored",
    climate: "Optimal",
  },
  {
    name: "2020 McLaren 720S",
    vin: "SBM14DCA5LW006789",
    owner: "J. Thornton",
    bay: "22C",
    status: "In Service",
    climate: "—",
  },
  {
    name: "2018 Lamborghini Aventador SVJ",
    vin: "ZHWUM6ZD3JLA12345",
    owner: "R. Nakamura",
    bay: "03A",
    status: "Stored",
    climate: "Alert",
  },
  {
    name: "2022 Aston Martin DBS",
    vin: "SCFRMFAW5NGL12345",
    owner: "E. Dubois",
    bay: "19D",
    status: "Arriving",
    climate: "—",
  },
  {
    name: "2023 Mercedes-AMG GT",
    vin: "W1KZF8KB0PA012345",
    owner: "A. Petrov",
    bay: "11B",
    status: "Stored",
    climate: "Optimal",
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

function ClimateCell({ value }: { value: string }) {
  if (value === "Optimal") {
    return (
      <span className="text-[#22c55e] text-sm font-sans">{value}</span>
    );
  }
  if (value === "Alert") {
    return (
      <span className="text-[#ef4444] text-sm font-sans">{value}</span>
    );
  }
  return <span className="text-[#5c6478] text-sm font-sans">{value}</span>;
}

export default function DashboardPage() {
  return (
    <div>
      {/* Page header */}
      <div>
        <h2 className="font-serif text-2xl text-[#f0ebe0] font-semibold">
          Dashboard
        </h2>
        <p className="text-[#a0a8b8] text-sm font-sans mt-1">
          Welcome back. Here&apos;s your facility overview.
        </p>
      </div>

      {/* Stat cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
        {statCards.map(({ label, value, icon: Icon, goldBorder, warning }) => (
          <div
            key={label}
            className={[
              "bg-[#0f1626] border border-[#1e2d45] rounded-xl p-6 flex flex-col gap-4",
              goldBorder ? "border-l-2 border-l-[#c9a84c]" : "",
            ].join(" ")}
          >
            <div className="flex items-center justify-between">
              <span className="text-[#a0a8b8] text-sm font-sans">
                {label}
              </span>
              <Icon size={18} className="text-[#c9a84c]" />
            </div>
            <span
              className={[
                "text-3xl font-serif font-bold",
                warning ? "text-[#eab308]" : "text-[#f0ebe0]",
              ].join(" ")}
            >
              {value}
            </span>
          </div>
        ))}
      </div>

      {/* Vehicle table */}
      <div className="mt-8">
        <h3 className="font-serif text-xl text-[#f0ebe0] font-semibold mb-4">
          Recent Vehicles
        </h3>

        <div className="bg-[#0f1626] border border-[#1e2d45] rounded-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[700px]">
              <thead>
                <tr className="bg-[#162036]">
                  {[
                    "Vehicle",
                    "VIN",
                    "Owner",
                    "Bay",
                    "Status",
                    "Climate",
                  ].map((col) => (
                    <th
                      key={col}
                      className="px-6 py-3 text-left text-xs font-semibold text-[#5c6478] uppercase tracking-wider font-sans"
                    >
                      {col}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {vehicles.map((vehicle, index) => (
                  <tr
                    key={vehicle.vin}
                    className="border-b border-[#1e2d45] last:border-0 hover:bg-[#162036] transition-colors duration-100"
                  >
                    <td className="px-6 py-4">
                      <Link
                        href={`/dashboard/vehicles/${index + 1}`}
                        className="text-[#f0ebe0] text-sm font-sans font-medium hover:text-[#c9a84c] transition-colors duration-150"
                      >
                        {vehicle.name}
                      </Link>
                    </td>
                    <td className="px-6 py-4">
                      <span className="font-mono text-xs text-[#a0a8b8]">
                        {vehicle.vin}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-[#a0a8b8] text-sm font-sans">
                        {vehicle.owner}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-[#f0ebe0] text-sm font-sans font-medium">
                        {vehicle.bay}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <StatusBadge status={vehicle.status} />
                    </td>
                    <td className="px-6 py-4">
                      <ClimateCell value={vehicle.climate} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
