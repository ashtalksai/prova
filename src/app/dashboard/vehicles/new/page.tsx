"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Upload } from "lucide-react";

const owners = [
  "Marcus Chen",
  "S. Blackwood",
  "J. Thornton",
  "R. Nakamura",
  "E. Dubois",
  "A. Petrov",
];

const bays = [
  "03A", "07B", "11B", "14A", "19D", "22C",
  "01A", "02B", "04C", "05D", "06A", "08B",
];

export default function NewVehiclePage() {
  const [form, setForm] = useState({
    make: "",
    model: "",
    year: "",
    color: "",
    vin: "",
    owner: "",
    bay: "",
    notes: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("New vehicle:", form);
  };

  const inputClass =
    "w-full bg-[#0a0e1a] border border-[#1e2d45] rounded-lg px-4 py-3 text-[#f0ebe0] placeholder-[#5c6478] font-sans text-sm focus:border-[#c9a84c] focus:outline-none transition-colors duration-150";
  const labelClass = "text-[#a0a8b8] text-sm font-medium font-sans mb-1.5 block";

  return (
    <div>
      {/* Header */}
      <div className="flex items-center gap-4 mb-8">
        <Link
          href="/dashboard/vehicles"
          className="flex items-center gap-2 text-[#a0a8b8] hover:text-[#f0ebe0] font-sans text-sm transition-colors duration-150"
        >
          <ArrowLeft size={16} />
          Back
        </Link>
        <h2 className="font-serif text-2xl text-[#f0ebe0] font-semibold">
          Add Vehicle
        </h2>
      </div>

      {/* Form card */}
      <div className="bg-[#0f1626] border border-[#1e2d45] rounded-xl p-8 max-w-2xl">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Make + Model */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="make" className={labelClass}>
                Make
              </label>
              <input
                id="make"
                name="make"
                type="text"
                placeholder="e.g. Ferrari"
                value={form.make}
                onChange={handleChange}
                className={inputClass}
              />
            </div>
            <div>
              <label htmlFor="model" className={labelClass}>
                Model
              </label>
              <input
                id="model"
                name="model"
                type="text"
                placeholder="e.g. 488 Pista"
                value={form.model}
                onChange={handleChange}
                className={inputClass}
              />
            </div>
          </div>

          {/* Year + Color */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="year" className={labelClass}>
                Year
              </label>
              <input
                id="year"
                name="year"
                type="number"
                placeholder="e.g. 2019"
                min="1900"
                max="2099"
                value={form.year}
                onChange={handleChange}
                className={inputClass}
              />
            </div>
            <div>
              <label htmlFor="color" className={labelClass}>
                Color
              </label>
              <input
                id="color"
                name="color"
                type="text"
                placeholder="e.g. Rosso Corsa"
                value={form.color}
                onChange={handleChange}
                className={inputClass}
              />
            </div>
          </div>

          {/* VIN */}
          <div>
            <label htmlFor="vin" className={labelClass}>
              VIN
            </label>
            <input
              id="vin"
              name="vin"
              type="text"
              placeholder="17-character VIN"
              maxLength={17}
              value={form.vin}
              onChange={handleChange}
              className={[inputClass, "font-mono uppercase tracking-wider"].join(" ")}
            />
          </div>

          {/* Owner + Bay */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="owner" className={labelClass}>
                Owner
              </label>
              <select
                id="owner"
                name="owner"
                value={form.owner}
                onChange={handleChange}
                className={[inputClass, "cursor-pointer"].join(" ")}
              >
                <option value="" disabled>
                  Select owner…
                </option>
                {owners.map((o) => (
                  <option key={o} value={o}>
                    {o}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="bay" className={labelClass}>
                Bay Assignment
              </label>
              <select
                id="bay"
                name="bay"
                value={form.bay}
                onChange={handleChange}
                className={[inputClass, "cursor-pointer"].join(" ")}
              >
                <option value="" disabled>
                  Select bay…
                </option>
                {bays.map((b) => (
                  <option key={b} value={b}>
                    Bay {b}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Notes */}
          <div>
            <label htmlFor="notes" className={labelClass}>
              Notes
            </label>
            <textarea
              id="notes"
              name="notes"
              rows={4}
              placeholder="Optional notes about this vehicle…"
              value={form.notes}
              onChange={handleChange}
              className={[inputClass, "resize-none"].join(" ")}
            />
          </div>

          {/* Image upload */}
          <div>
            <label className={labelClass}>Vehicle Photo</label>
            <div className="border border-dashed border-[#1e2d45] rounded-lg h-36 flex flex-col items-center justify-center gap-2 cursor-pointer hover:border-[#c9a84c]/50 transition-colors duration-150 bg-[#0a0e1a]">
              <Upload size={20} className="text-[#5c6478]" />
              <p className="text-[#5c6478] text-sm font-sans">
                Drag and drop or click to upload
              </p>
              <p className="text-[#5c6478] text-xs font-sans">
                PNG, JPG up to 10MB
              </p>
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-[#c9a84c] text-[#0a0e1a] rounded-full py-3 font-semibold font-sans text-sm hover:bg-[#d4b85c] transition-colors duration-150"
          >
            Add Vehicle
          </button>
        </form>
      </div>
    </div>
  );
}
