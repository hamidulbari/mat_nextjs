import { useMemo } from "react";
const PaymentOption: React.FC = () => {
  const citiesPBT = [
    "Aizawl",
    "Bengaluru",
    "Bhilai",
    "Chennai",
    "Coimbatore",
    "Cuttack",
    "Delhi",
    "Dibrugarh",
    "Durgapur",
    "Ernakulam - Kochi",
    "Gandhinagar",
    "Guwahati",
    "Gwalior",
    "Gurugram",
    "Hyderabad",
    "Jabalpur",
    "Jaipur",
    "Kanpur",
    "Kolkata",
    "Kottayam",
    "Lucknow",
    "Madurai",
    "Mangaluru",
    "Mumbai",
    "Nashik",
    "Noida",
    "Patna",
    "Prayagraj",
    "Pune",
    "Ranchi",
    "Silchar",
    "Surat",
    "Thiruvananthapuram",
    "Tiruchirappali (Trichy)",
    "Varanasi",
    "Visakhapatnam",
  ];

  const citiesCBT = [
    "Ahmedabad",
    "Agra",
    "Asansol",
    "Bareilly",
    "Belagavi (Belgaum)",
    "Bengaluru",
    "Bhopal",
    "Bhubaneswar",
    "Chandigarh",
    "Chennai",
    "Coimbatore",
    "Dehradun",
    "Delhi",
    "Ernakulam - Kochi",
    "Faridabad",
    "Ghaziabad",
    "Greater Noida",
    "Guwahati",
    "Gurugram",
    "Hubballi (Hubli)",
    "Hyderabad",
    "Indore",
    "Jaipur",
    "Jalandhar",
    "Jorhat",
    "Jammu",
    "Kozhikode",
    "Kolkata",
    "Lucknow",
    "Madurai",
    "Mangaluru",
    "Meerut",
    "Mumbai",
    "Mysuru (Mysore)",
    "Nagpur",
    "Navi Mumbai",
    "Noida",
    "Panjim",
    "Patna",
    "Pune",
    "Raipur",
    "Ranchi",
    "Rourkela",
    "Salem",
    "Shillong",
    "Shimla",
    "Siliguri",
    "Thiruvananthapuram",
    "Thrissur",
    "Udaipur",
    "Vadodara",
    "Vellore",
    "Vijayawada",
  ];

  const sortedCitiesPBT = useMemo(
    () => citiesPBT.toSorted((a, b) => a.localeCompare(b)),
    [citiesPBT],
  );
  const sortedCitiesCBT = useMemo(
    () => citiesCBT.toSorted((a, b) => a.localeCompare(b)),
    [citiesCBT],
  );

  return (
    <>
      <section className="section-spacing bg-[var(--light-background-color)]">
        <div className="max-w-6xl mx-auto">
          <div className="title-section text-center">
            <h2 className="primary-color">Secure & Flexible Payment Options</h2>
            <p>
              Pay your Registration fee easily through Debit / Credit Card, Net
              Banking, or UPI.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[50px] mt-10 text-white ">
            <div className="item rounded-lg bg-[var(--primary-color)] lg:p-7 p-4 ">
              <div className="title-row grid grid-cols-[30%_70%]  items-end">
                <div className="item">
                  <h3 className="!mb-0 !text-6xl">PBT</h3>
                </div>
                <div className="item !text-end">
                  <p className=" !mb-0">Paper Based Test</p>
                  <p className=" !mb-0">
                    <strong> Test Date:</strong> 31st May 2026
                  </p>
                </div>
              </div>
              <div className="list-wrapper flex flex-row flex-wrap gap-2 mt-5">
                {sortedCitiesPBT.map((city) => (
                  <div
                    key={city}
                    className="item-name bg-[#FFFFFF24] text-white px-4 py-1 rounded hover:bg-white hover:text-[var(--primary-color)] transition-all duration-300 cursor-pointer"
                  >
                    {city}
                  </div>
                ))}
              </div>
            </div>

            <div className="item rounded-lg bg-[var(--primary-color)] lg:p-7 p-4 ">
              <div className="title-row grid grid-cols-[30%_70%]  items-end">
                <div className="item">
                  <h3 className="!mb-0 !text-6xl">CBT</h3>
                </div>
                <div className="item !text-end">
                  <p className=" !mb-0">Computer Based Test</p>
                  <p className=" !mb-0">
                    <strong> Test Date:</strong> 31st May 2026
                  </p>
                </div>
              </div>
              <div className="list-wrapper flex flex-row flex-wrap gap-2 mt-5">
                {sortedCitiesCBT.map((city) => (
                  <div
                    key={city}
                    className="item-name bg-[#FFFFFF24] text-white px-4 py-1 rounded hover:bg-white hover:text-[var(--primary-color)] transition-all duration-300 cursor-pointer"
                  >
                    {city}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PaymentOption;
