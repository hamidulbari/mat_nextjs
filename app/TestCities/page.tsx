import HeroSection from "./HeroSection";
import PaymentOption from "./PaymentOptions";
import ZoneWiseCity from "./ZoneWiseCity";
import { getPbtCities, getCbtCities } from "../../actionCreator/actionCreator";

export const dynamic = "force-dynamic";



const ZONES = ["East Zone", "West Zone", "North Zone", "South Zone", "Central Zone"];

const mapAllCities = (apiResponse: any) => {
  const data = (apiResponse && apiResponse.success && Array.isArray(apiResponse.data)) ? apiResponse.data : [];

  return ZONES.map((zone) => {
    // Find matching zone in API data
    const matchedZone = data.find(
      (item: any) => item.zone?.toLowerCase().trim() === zone.toLowerCase().trim()
    );
    if (matchedZone) {
      if (matchedZone.city_names) {
        return {
          title: zone,
          cities: matchedZone.city_names
            .split(",")
            .map((c: string) => c.trim())
            .filter(Boolean),
        };
      } else {
        const val = matchedZone.city_name || matchedZone.city;
        return {
          title: zone,
          cities: val ? [val.trim()] : [],
        };
      }
    }
    return { title: zone, cities: [] };
  });
};

const formatTestDate = (dateStr: string): string => {
  if (!dateStr) return "";
  try {
    const date = new Date(dateStr);
    if (isNaN(date.getTime())) return dateStr;
    const day = date.getDate();
    const months = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
    const month = months[date.getMonth()];
    const year = date.getFullYear();

    let suffix = "th";
    if (day === 1 || day === 21 || day === 31) suffix = "st";
    else if (day === 2 || day === 22) suffix = "nd";
    else if (day === 3 || day === 23) suffix = "rd";

    return `${day}${suffix} ${month} ${year}`;
  } catch (e) {
    return dateStr;
  }
};

const TestCities = async () => {
  // Fetch PBT and CBT cities in parallel (only two requests total!)
  let pbtApiResponse = null;
  let cbtApiResponse = null;

  try {
    const [pbtRes, cbtRes] = await Promise.all([
      getPbtCities(),
      getCbtCities()
    ]);
    pbtApiResponse = pbtRes;
    cbtApiResponse = cbtRes;
  } catch (error) {
    console.error("Error fetching all test cities on server side:", error);
  }

  // Parse all cities and dates for PBT
  const pbtCities: string[] = [];
  let pbtTestDate = "";
  if (pbtApiResponse && pbtApiResponse.success && Array.isArray(pbtApiResponse.data)) {
    pbtApiResponse.data.forEach((item: any) => {
      if (item.city_names) {
        const split = item.city_names.split(",").map((c: string) => c.trim()).filter(Boolean);
        pbtCities.push(...split);
      }
      if (item.test_date && !pbtTestDate) {
        pbtTestDate = formatTestDate(item.test_date);
      }
    });
  }
  const uniquePbtCities = Array.from(new Set(pbtCities));

  // Parse all cities and dates for CBT
  const cbtCities: string[] = [];
  let cbtTestDate = "";
  if (cbtApiResponse && cbtApiResponse.success && Array.isArray(cbtApiResponse.data)) {
    cbtApiResponse.data.forEach((item: any) => {
      if (item.city_names) {
        const split = item.city_names.split(",").map((c: string) => c.trim()).filter(Boolean);
        cbtCities.push(...split);
      }
      if (item.test_date && !cbtTestDate) {
        cbtTestDate = formatTestDate(item.test_date);
      }
    });
  }
  const uniqueCbtCities = Array.from(new Set(cbtCities));

  const pbtZones = mapAllCities(pbtApiResponse);
  const cbtZones = mapAllCities(cbtApiResponse);

  return (
    <>
      <HeroSection />
      <PaymentOption
        pbtCities={uniquePbtCities.length > 0 ? uniquePbtCities : undefined}
        pbtTestDate={pbtTestDate || undefined}
        cbtCities={uniqueCbtCities.length > 0 ? uniqueCbtCities : undefined}
        cbtTestDate={cbtTestDate || undefined}
      />
      <ZoneWiseCity initialCbtData={cbtZones} initialPbtData={pbtZones} />
    </>
  );
};

export default TestCities;
