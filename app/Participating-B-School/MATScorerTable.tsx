"use client";

import { useState } from "react";

const ZONES = ["EAST", "WEST", "NORTH", "SOUTH", "INTERNATIONAL"] as const;
type Zone = (typeof ZONES)[number];

/* ---------------- DATA ---------------- */

const zoneData: Record<
  Zone,
  {
    code: string;
    institute: string;
    website: string;
    city: string;
  }[]
> = {
  NORTH: [
    {
      code: "2049",
      institute: "Accurate Institute of Management & Technology",
      website: "accurate.in",
      city: "Greater Noida",
    },
    {
      code: "1101",
      institute: "AIMA – Centre for Management Education",
      website: "aima.in",
      city: "New Delhi",
    },
    {
      code: "1121",
      institute: "Apeejay School of Management",
      website: "apeejay.edu/asm",
      city: "New Delhi",
    },
  ],

  EAST: [
    {
      code: "E101",
      institute: "Sample East Institute",
      website: "example.edu",
      city: "Kolkata",
    },
  ],

  WEST: [
    {
      code: "W101",
      institute: "Sample West Institute",
      website: "example.edu",
      city: "Mumbai",
    },
  ],

  SOUTH: [
    {
      code: "S101",
      institute: "Sample South Institute",
      website: "example.edu",
      city: "Chennai",
    },
  ],

  INTERNATIONAL: [
    {
      code: "I101",
      institute: "Sample International Institute",
      website: "example.edu",
      city: "London",
    },
  ],
};

/* ---------------- MAIN COMPONENT ---------------- */

const MATScorerTable = () => {
  const [activeTab, setActiveTab] = useState<Zone>("NORTH");

  return (
    <>
      {/* TABS */}
      <div className="flex flex-wrap flex-row lg:justify-center items-center gap-3 mb-6">
        {ZONES.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`block ${activeTab === tab ? "btn-primary" : "btn-outline"}`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* CONTENT */}
      <div className="bg-white shadow-sm border border-[var(--border-color)] rounded-lg p-4 overflow-x-auto">
        <Table data={zoneData[activeTab]} />
      </div>
    </>
  );
};

export default MATScorerTable;

/* ---------------- TABLE ---------------- */

function Table({
  data,
}: {
  data: {
    code: string;
    institute: string;
    website: string;
    city: string;
  }[];
}) {
  return (
    <table className="w-full border-collapse text-sm min-w-[700px]">
      <thead>
        <tr className="bg-[var(--primary-color)] text-white">
          <th className="p-3 text-left">MI Code</th>
          <th className="p-3 text-left">Institute</th>
          <th className="p-3 text-left">Website</th>
          <th className="p-3 text-left">City</th>
        </tr>
      </thead>

      <tbody>
        {data.map((row) => (
          <tr
            key={row.code}
            className="border-b border-[var(--border-color)] hover:bg-gray-50 transition"
          >
            <td className="p-3">{row.code}</td>
            <td className="p-3">{row.institute}</td>
            <td className="p-3 primary-color">
              <a
                href={`https://${row.website}`}
                target="_blank"
                rel="noopener noreferrer"
                className="primary-color hover:underline"
              >
                {row.website}
              </a>
            </td>
            <td className="p-3">{row.city}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
