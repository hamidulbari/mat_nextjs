
import HeroSection from "./HeroSection";
import MATScorerTable from "./MATScorerTable";
import MAtScrorer from "./MATScrores";
import { getBSchoolsByZone } from "../../actionCreator/actionCreator";

export const dynamic = 'force-dynamic'

const staticFallbackData = {
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

const mapZoneData = async (zone: string) => {
  try {
    const response = await getBSchoolsByZone(zone);
    if (response && response.success && Array.isArray(response.data)) {
      return response.data.map((item) => ({
        code: item.mi_code,
        institute: item.institute_name,
        website: item.website ? item.website.replace(/^https?:\/\//i, "") : "",
        city: item.city,
      }));
    }
  } catch (error) {
    console.error(`Error fetching/mapping B-Schools for zone ${zone}:`, error);
  }
  return null;
};

const ParticipatingBSchool = async () => {
  // Parallel fetch on the server side
  const [eastApi, westApi, northApi, southApi, internationalApi] = await Promise.all([
    mapZoneData("EAST"),
    mapZoneData("WEST"),
    mapZoneData("NORTH"),
    mapZoneData("SOUTH"),
    mapZoneData("INTERNATIONAL"),
  ]);

  const resolvedData = {
    NORTH: northApi || staticFallbackData.NORTH,
    EAST: eastApi || staticFallbackData.EAST,
    WEST: westApi || staticFallbackData.WEST,
    SOUTH: southApi || staticFallbackData.SOUTH,
    INTERNATIONAL: internationalApi || staticFallbackData.INTERNATIONAL,
  };

  return (
    <>
      <HeroSection />
      <MAtScrorer>
        <MATScorerTable initialData={resolvedData} />
      </MAtScrorer>
    </>
  );
};

export default ParticipatingBSchool;

