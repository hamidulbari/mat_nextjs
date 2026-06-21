import HeroSection from "./HeroSection";
import MATScorerTable from "./MATScorerTable";
import MAtScrorer from "./MATScrores";

const ParticipatingBSchool: React.FC = () => {
  return (
    <>
      <HeroSection />
      <MAtScrorer children={<MATScorerTable />} />
    </>
  );
};

export default ParticipatingBSchool;
