
import { ReactNode } from "react";

type Props = {
    children?: ReactNode;
};


const MatAdvantage: React.FC<Props> = ({ children }) => {


    return (<>

        <section className="section-spacing  bg-[var(--primary-color)]">
            <div className="max-w-6xl mx-auto">
                <div className="text-white md:text-center md:mb-10 mb-15">
                    <h2>The MAT Advantage
                    </h2>
                    <p>
                        MAT is a national-level exam designed to evaluate aspiring business leaders. With 35+ years of credibility, multiple test formats, and affordable fees, MAT continues to empower graduates and final-year students across disciplines.
                    </p>
                </div>

                {children}


            </div>
        </section>

    </>);
}

export default MatAdvantage;