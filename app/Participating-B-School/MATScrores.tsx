/* ---------------- MAIN COMPONENT ---------------- */

// import MATScorerTable from "./MATScorerTable";
import { ReactNode } from "react";
type Props = {
  children?: ReactNode;
};

const MAtScrorer: React.FC<Props> = ({ children }) => {
  return (
    <section className="section-spacing bg-[var(--light-background-color)] py-10">
      <div className="max-w-6xl mx-auto px-4">
        {/* TITLE */}
        <div className="lg:text-center mb-8">
          <h1 className="text-2xl md:text-3xl font-bold primary-color">
            Explore B-Schools That Accept MAT Scores
          </h1>
          <p className="text-gray-600 mt-2">
            Browse zone-wise to find the B-Schools closest to you and begin
            planning your MBA journey.
          </p>
        </div>

        {/* tabs */}
        {children}
      </div>

      {/* TABS */}
    </section>
  );
};

export default MAtScrorer;
