"use client";

import { useState } from "react";
import { UserPlus, CreditCard } from "lucide-react";

type TeamMember = {
  name: string;
  role: "Admin" | "Manager" | "Technician";
  email: string;
};

const teamMembers: TeamMember[] = [
  { name: "Alex Morgan", role: "Admin", email: "alex@vaultautomotive.com" },
  { name: "Jordan Lee", role: "Manager", email: "jordan@vaultautomotive.com" },
  { name: "Casey Rivera", role: "Technician", email: "casey@vaultautomotive.com" },
];

const ROLE_BADGE_STYLES: Record<TeamMember["role"], string> = {
  Admin: "bg-[#c9a84c]/15 text-[#c9a84c]",
  Manager: "bg-[#3b82f6]/15 text-[#3b82f6]",
  Technician: "bg-[#162036] text-[#a0a8b8]",
};

const inputClass =
  "w-full bg-[#0a0e1a] border border-[#1e2d45] rounded-lg px-4 py-3 text-[#f0ebe0] placeholder-[#5c6478] focus:border-[#c9a84c] focus:outline-none font-sans text-sm transition-colors duration-150";

const labelClass = "block text-[#a0a8b8] text-xs font-sans uppercase tracking-wider mb-1.5";

export default function SettingsPage() {
  const [facilityName, setFacilityName] = useState("Vault Automotive - Manhattan");
  const [address, setAddress] = useState("450 W 33rd St, New York, NY 10001");
  const [phone, setPhone] = useState("(555) 000-0000");
  const [email, setEmail] = useState("ops@vaultautomotive.com");

  return (
    <div>
      {/* Page header */}
      <div className="mb-8">
        <h2 className="font-serif text-2xl text-[#f0ebe0] font-semibold">
          Settings
        </h2>
        <p className="text-[#a0a8b8] text-sm font-sans mt-1">
          Manage your facility configuration and account preferences.
        </p>
      </div>

      <div className="flex flex-col gap-6">

        {/* ── Facility Information ── */}
        <div className="bg-[#0f1626] border border-[#1e2d45] rounded-xl p-6">
          <div className="mb-6">
            <h3 className="font-serif text-lg text-[#f0ebe0] font-semibold">
              Facility Information
            </h3>
            <p className="text-[#5c6478] text-xs font-sans mt-0.5">
              Your facility details as displayed to clients and in reports.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className={labelClass}>Facility Name</label>
              <input
                type="text"
                value={facilityName}
                onChange={(e) => setFacilityName(e.target.value)}
                className={inputClass}
              />
            </div>
            <div>
              <label className={labelClass}>Address</label>
              <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className={inputClass}
              />
            </div>
            <div>
              <label className={labelClass}>Phone</label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className={inputClass}
              />
            </div>
            <div>
              <label className={labelClass}>Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={inputClass}
              />
            </div>
          </div>

          <div className="mt-6 flex justify-end">
            <button className="bg-[#c9a84c] text-[#0a0e1a] text-sm font-sans font-semibold px-6 py-2.5 rounded-full hover:bg-[#d4b85c] transition-colors duration-150">
              Save Changes
            </button>
          </div>
        </div>

        {/* ── Subscription & Billing ── */}
        <div className="bg-[#0f1626] border border-[#1e2d45] rounded-xl p-6">
          <div className="flex items-start justify-between mb-6">
            <div>
              <h3 className="font-serif text-lg text-[#f0ebe0] font-semibold">
                Subscription &amp; Billing
              </h3>
              <p className="text-[#5c6478] text-xs font-sans mt-0.5">
                Manage your plan and billing information.
              </p>
            </div>
            <CreditCard size={18} className="text-[#c9a84c] flex-shrink-0 mt-0.5" />
          </div>

          <div className="bg-[#162036] rounded-lg p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex items-center gap-3">
              <div>
                <div className="flex items-center gap-2 mb-0.5">
                  <span className="text-[#f0ebe0] font-sans font-semibold text-base">
                    Professional
                  </span>
                  <span className="bg-[#c9a84c]/20 text-[#c9a84c] text-xs font-sans font-semibold px-2 py-0.5 rounded-full">
                    Current Plan
                  </span>
                </div>
                <span className="text-[#a0a8b8] text-sm font-sans">
                  Up to 100 vehicles · Advanced climate monitoring · Priority support
                </span>
              </div>
            </div>
            <div className="text-right flex-shrink-0">
              <p className="text-[#f0ebe0] font-serif text-xl font-semibold leading-none">
                $1,000
              </p>
              <p className="text-[#5c6478] text-xs font-sans mt-0.5">per month</p>
            </div>
          </div>

          <div className="mt-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <p className="text-[#a0a8b8] text-sm font-sans">
              Next billing date:{" "}
              <span className="text-[#f0ebe0] font-medium">April 1, 2026</span>
            </p>
            <button className="border border-[#1e2d45] text-[#f0ebe0] text-sm font-sans px-5 py-2.5 rounded-full hover:border-[#c9a84c]/50 hover:text-[#c9a84c] transition-colors duration-150 self-start sm:self-auto">
              Manage Subscription
            </button>
          </div>
        </div>

        {/* ── Team Members ── */}
        <div className="bg-[#0f1626] border border-[#1e2d45] rounded-xl p-6">
          <div className="mb-6">
            <h3 className="font-serif text-lg text-[#f0ebe0] font-semibold">
              Team Members
            </h3>
            <p className="text-[#5c6478] text-xs font-sans mt-0.5">
              Manage who has access to your facility dashboard.
            </p>
          </div>

          <div className="flex flex-col divide-y divide-[#1e2d45]">
            {teamMembers.map((member) => {
              const initial = member.name.charAt(0);
              return (
                <div
                  key={member.email}
                  className="flex items-center gap-4 py-4 first:pt-0 last:pb-0"
                >
                  {/* Avatar */}
                  <div className="w-9 h-9 rounded-full bg-[#162036] border border-[#1e2d45] flex items-center justify-center flex-shrink-0">
                    <span className="font-serif font-bold text-[#c9a84c] text-sm leading-none">
                      {initial}
                    </span>
                  </div>

                  {/* Name + email */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-[#f0ebe0] font-sans font-medium text-sm">
                        {member.name}
                      </span>
                      <span
                        className={[
                          "text-xs font-sans px-2 py-0.5 rounded-full",
                          ROLE_BADGE_STYLES[member.role],
                        ].join(" ")}
                      >
                        {member.role}
                      </span>
                    </div>
                    <span className="text-[#5c6478] text-xs font-sans mt-0.5 block truncate">
                      {member.email}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-6 pt-4 border-t border-[#1e2d45]">
            <button className="flex items-center gap-2 border border-[#1e2d45] text-[#a0a8b8] text-sm font-sans px-5 py-2.5 rounded-full hover:border-[#c9a84c]/50 hover:text-[#c9a84c] transition-colors duration-150">
              <UserPlus size={14} />
              Invite Team Member
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
