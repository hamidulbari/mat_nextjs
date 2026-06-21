"use client";
import { useState } from "react";
import { FaChevronUp } from "react-icons/fa6";

const ZoneWiseCity: React.FC = () => {
  const CBTzones = [
    {
      title: "East Zone",
      cities: [
        "Asansol",
        "Bhubaneswar",
        "Guwahati",
        "Jamshedpur",
        "Jorhat",
        "Kolkata",
        "Patna",
        "Raipur",
        "Ranchi",
        "Rourkela",
        "Shillong",
        "Siliguri",
      ],
    },
    {
      title: "West Zone",
      cities: [
        "Ahmedabad",
        "Jaipur",
        "Mumbai",
        "Nagpur",
        "Panjim",
        "Pune",
        "Udaipur",
        "Vadodara",
      ],
    },
    {
      title: "North Zone",
      cities: [
        "Agra",
        "Bareilly",
        "Chandigarh",
        "Dehradun",
        "Delhi",
        "Faridabad",
        "Ghaziabad",
        "Gurugram",
        "Jalandhar",
        "Jammu",
        "Lucknow",
        "Meerut",
        "Noida",
        "Shimla",
      ],
    },
    {
      title: "South Zone",
      cities: [
        "Belagavi (Belgaum)",
        "Bengaluru",
        "Chennai",
        "Coimbatore",
        "Ernakulam - Kochi",
        "Hubballi (Hubli)",
        "Hyderabad",
        "Kozhikode",
        "Madurai",
        "Mangaluru",
        "Mysuru (Mysore)",
        "Salem",
        "Thiruvananthapuram",
        "Thrissur",
        "Vellore",
        "Vijayawada",
      ],
    },
    {
      title: "Central Zone",
      cities: ["Bhopal", "Indore"],
    },
  ];

  const PBTzones = [
    {
      title: "East Zone",
      cities: [
        "Aizwal",
        "Bhilai",
        "Cuttack",
        "Dibrugarh",
        "Durgapur",
        "Guwahti",
        "Kolkata",
        "Patna",
        "Ranchi",
        "Silchar",
      ],
    },
    {
      title: "West Zone",
      cities: ["Ganshinagar", "Jaipur", "Mumbai", "Nashik", "Pune", "Surat"],
    },
    {
      title: "North Zone",
      cities: [
        "Delhi",
        "Gurugram",
        "Kanpur",
        "Lucknow",
        "Noida",
        "Prayagraj",
        "Varanasi",
      ],
    },
    {
      title: "South Zone",
      cities: [
        "Bengaluru",
        "Chennai",
        "Coimbatore",
        "Ernakulam - Kochi",
        "Hyderabad",
        "Kottayam",
        "Madurai",
        "Mangaluru",
        "Thiruvananthapuram",
        "Tiruchirappalli (Trichy)",
        "Visakhapatnam",
      ],
    },
    {
      title: "Central Zone",
      cities: ["Gwalior", "Jabalpur"],
    },
  ];

  // Separate state for both accordions
  const [openCBTIndex, setOpenCBTIndex] = useState<number | null>();
  const [openPBTIndex, setOpenPBTIndex] = useState<number | null>();

  return (
    <section className="section-spacing">
      <div className="max-w-6xl mx-auto">
        <div className="title-wrapper">
          <h2 className="text-center primary-color">Test Cities (Zone Wise)</h2>
        </div>

        <div className="grid mt-10 grid-cols-1 lg:grid-cols-2 gap-[50px]">
          {/* CBT */}
          <div>
            <h3 className="mb-4">Computer Based Test (CBT)</h3>

            <div className="space-y-3">
              {CBTzones.map((item, index) => {
                const open = openCBTIndex === index;

                return (
                  <div
                    key={index}
                    className="rounded border border-gray-200 bg-white shadow-sm"
                  >
                    <button
                      onClick={() => setOpenCBTIndex(open ? null : index)}
                      className={`flex w-full items-center justify-between p-4 text-left text-xl font-semibold primary-color cursor-pointer !font-(family-name:--heading-font) ${
                        open ? "border-b border-gray-300" : ""
                      }`}
                    >
                      {item.title}

                      <span
                        className={`transition-transform duration-300 ${
                          open ? "rotate-180" : ""
                        }`}
                      >
                        <FaChevronUp size={20} />
                      </span>
                    </button>

                    {open && (
                      <div className="p-4">
                        <div className="flex flex-wrap gap-2.5">
                          {item.cities.map((city) => (
                            <span
                              key={city}
                              className="rounded bg-[var(--border-color)] px-4 py-1 text-[var(--primary-color)]"
                            >
                              {city}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* PBT */}
          <div>
            <h3 className="mb-4">Paper Based Test (PBT)</h3>

            <div className="space-y-3">
              {PBTzones.map((item, index) => {
                const open = openPBTIndex === index;

                return (
                  <div
                    key={index}
                    className="rounded border border-gray-200 bg-white shadow-sm"
                  >
                    <button
                      onClick={() => setOpenPBTIndex(open ? null : index)}
                      className={`flex cursor-pointer w-full items-center justify-between p-4 text-left text-xl font-semibold primary-color !font-(family-name:--heading-font) ${
                        open ? "border-b border-gray-300" : ""
                      }`}
                    >
                      {item.title}

                      <span
                        className={`transition-transform duration-300 ${
                          open ? "rotate-180" : ""
                        }`}
                      >
                        <FaChevronUp size={20} />
                      </span>
                    </button>

                    {open && (
                      <div className="p-4">
                        <div className="flex flex-wrap gap-2.5">
                          {item.cities.map((city) => (
                            <span
                              key={city}
                              className="rounded bg-[var(--border-color)] px-4 py-1 text-[var(--primary-color)]"
                            >
                              {city}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ZoneWiseCity;
