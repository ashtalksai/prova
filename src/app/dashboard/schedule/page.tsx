"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Plus } from "lucide-react";

type CalendarEvent = {
  day: number;
  label: string;
  color: "gold" | "blue" | "green";
};

const EVENTS: CalendarEvent[] = [
  { day: 3, label: "488 Pista — Detail", color: "gold" },
  { day: 8, label: "GT3 — Tire Rotation", color: "gold" },
  { day: 12, label: "720S — Return to Owner", color: "blue" },
  { day: 15, label: "Aventador — Battery Check", color: "gold" },
  { day: 20, label: "Facility Inspection", color: "green" },
  { day: 25, label: "DBS — Full Detail", color: "gold" },
];

const COLOR_STYLES: Record<CalendarEvent["color"], string> = {
  gold: "bg-[#c9a84c]/20 text-[#c9a84c]",
  blue: "bg-[#3b82f6]/20 text-[#3b82f6]",
  green: "bg-[#22c55e]/20 text-[#22c55e]",
};

// March 2026: starts on Sunday (day index 0)
const MONTH_NAME = "March 2026";
const MONTH_START_DOW = 0; // Sunday
const MONTH_DAYS = 31;
const TODAY = 8; // March 8, 2026 per current date context

const WEEK_DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function buildCalendarGrid(): (number | null)[] {
  const cells: (number | null)[] = [];
  // Leading empty cells
  for (let i = 0; i < MONTH_START_DOW; i++) {
    cells.push(null);
  }
  for (let d = 1; d <= MONTH_DAYS; d++) {
    cells.push(d);
  }
  // Pad to complete last row
  while (cells.length % 7 !== 0) {
    cells.push(null);
  }
  return cells;
}

export default function SchedulePage() {
  const [_month] = useState(MONTH_NAME);
  const cells = buildCalendarGrid();
  const rows = [];
  for (let i = 0; i < cells.length; i += 7) {
    rows.push(cells.slice(i, i + 7));
  }

  return (
    <div>
      {/* Page header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="font-serif text-2xl text-[#f0ebe0] font-semibold">
            Schedule
          </h2>
          <p className="text-[#a0a8b8] text-sm font-sans mt-1">
            Monthly view of facility events and services.
          </p>
        </div>
        <button className="flex items-center gap-2 bg-[#c9a84c] text-[#0a0e1a] text-sm font-sans font-semibold px-4 py-2 rounded-full hover:bg-[#d4b85c] transition-colors duration-150 flex-shrink-0">
          <Plus size={15} />
          Add Event
        </button>
      </div>

      {/* Month navigation */}
      <div className="flex items-center gap-4 mb-6">
        <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-[#0f1626] border border-[#1e2d45] text-[#a0a8b8] hover:border-[#c9a84c]/50 hover:text-[#f0ebe0] transition-colors duration-150">
          <ChevronLeft size={16} />
        </button>
        <h3 className="font-serif text-xl text-[#f0ebe0] min-w-[160px] text-center">
          {MONTH_NAME}
        </h3>
        <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-[#0f1626] border border-[#1e2d45] text-[#a0a8b8] hover:border-[#c9a84c]/50 hover:text-[#f0ebe0] transition-colors duration-150">
          <ChevronRight size={16} />
        </button>
      </div>

      {/* Calendar */}
      <div className="bg-[#0f1626] border border-[#1e2d45] rounded-xl overflow-hidden">
        {/* Day headers */}
        <div className="grid grid-cols-7 border-b border-[#1e2d45]">
          {WEEK_DAYS.map((day) => (
            <div
              key={day}
              className="px-2 py-3 text-center text-[#5c6478] text-xs uppercase tracking-wider font-sans font-medium"
            >
              {day}
            </div>
          ))}
        </div>

        {/* Calendar rows */}
        <div className="overflow-x-auto">
          <div className="min-w-[560px]">
            {rows.map((row, rowIdx) => (
              <div
                key={rowIdx}
                className="grid grid-cols-7 border-b border-[#1e2d45] last:border-0"
              >
                {row.map((day, colIdx) => {
                  const isToday = day === TODAY;
                  const eventsForDay = day
                    ? EVENTS.filter((e) => e.day === day)
                    : [];

                  return (
                    <div
                      key={colIdx}
                      className={[
                        "min-h-[100px] p-2 border-r border-[#1e2d45] last:border-r-0 transition-colors duration-100",
                        day ? "hover:bg-[#162036]/50" : "",
                        isToday ? "border border-[#c9a84c]/50 rounded-none" : "",
                      ].join(" ")}
                    >
                      {day && (
                        <>
                          <span
                            className={[
                              "text-sm font-sans inline-block leading-none mb-2",
                              isToday
                                ? "text-[#c9a84c] font-semibold"
                                : "text-[#f0ebe0]",
                            ].join(" ")}
                          >
                            {day}
                          </span>
                          <div className="flex flex-col gap-1">
                            {eventsForDay.map((ev, i) => (
                              <span
                                key={i}
                                className={[
                                  "text-xs px-2 py-0.5 rounded font-sans leading-snug truncate block cursor-default",
                                  COLOR_STYLES[ev.color],
                                ].join(" ")}
                                title={ev.label}
                              >
                                {ev.label}
                              </span>
                            ))}
                          </div>
                        </>
                      )}
                      {!day && (
                        <span className="text-[#5c6478]/50 text-sm font-sans">
                          &nbsp;
                        </span>
                      )}
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Legend */}
      <div className="flex items-center gap-6 mt-4">
        <span className="text-[#5c6478] text-xs font-sans uppercase tracking-wider">
          Legend
        </span>
        {[
          { color: "gold" as const, label: "Service / Detail" },
          { color: "blue" as const, label: "Owner Interaction" },
          { color: "green" as const, label: "Facility" },
        ].map(({ color, label }) => (
          <div key={color} className="flex items-center gap-1.5">
            <span
              className={[
                "inline-block w-2.5 h-2.5 rounded-sm",
                color === "gold"
                  ? "bg-[#c9a84c]/40"
                  : color === "blue"
                  ? "bg-[#3b82f6]/40"
                  : "bg-[#22c55e]/40",
              ].join(" ")}
            />
            <span className="text-[#a0a8b8] text-xs font-sans">{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
