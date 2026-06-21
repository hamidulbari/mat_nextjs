"use client";
import { useState } from "react";
import { FaChevronUp } from "react-icons/fa6";
import parse from "html-react-parser";

const ApplicationFormFAQ: React.FC = () => {
  const CBTzones = [
    {
      title: "<strong>Step 1: </strong>Test Mode Details",
      content: `<p>Choose 1 or 2 modes (PBT/CBT/Combo)</p>
          <div className="grid grid-cols-2 gap-7">
            <div className="item">
              <div className="content rounded border-[var(--border-color)] border-2 lg:p-5 p-4 flex lg:flex-row flex-col lg:items-end  gap-2 lg:gap-5">
                <div className="lg:text-8xl text-3xl font-bold primary-color">₹2300</div>
                <div className="text-black lg:text-3xl">PBT/CBT</div>
              </div>
            </div>
            <div className="item">
              <div className="content rounded border-[var(--border-color)] border-2 lg:p-5 p-4 flex lg:flex-row flex-col lg:items-end  gap-2 lg:gap-5">
                <div className="lg:text-8xl text-3xl font-bold  primary-color">₹4000</div>
                <div className="text-black lg:text-3xl">PBT+CBT</div>
              </div>
            </div>
          </div>`,
    },
    {
      title: "<strong>Step 2:</strong> Upload Photo & Signature",
      content: "thsiakjaslkfd",
    },
    {
      title: "<strong>Step 3: </strong>Choose Management Institutes (MI)",
      content: "thsiakjaslkfd",
    },
    {
      title: "<strong>Step 4:</strong> Make Payment",
      content: "thsiakjaslkfd",
    },
    {
      title: "<strong>Step 6:</strong> Application Submission",
      content: "thsiakjaslkfd",
    },
  ];

  const [openCBTIndex, setOpenCBTIndex] = useState<number | null>(0);
  return (
    <>
      <section className="section-spacing">
        <div className="max-w-6xl mx-auto">
          <div className="title text-center">
            <h2>Steps to Fill Application Form</h2>
          </div>

          <div className="faq-section mt-10 ">
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
                      className={`flex w-full items-center justify-between p-4 text-left text-xl font-semibold primary-color cursor-pointer ${
                        open ? "border-b border-gray-300" : ""
                      }`}
                    >
                      <div dangerouslySetInnerHTML={{ __html: item.title }} />

                      <span
                        className={`transition-transform duration-800 ${
                          open ? "rotate-180" : ""
                        }`}
                      >
                        <FaChevronUp size={20} />
                      </span>
                    </button>

                    {open && (
                      <div className="lg:p-8 p-4">
                        <div className="accordian-data">
                          {parse(item.content)}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default ApplicationFormFAQ;
