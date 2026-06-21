import FormSection from "./FormSection";
import Hero from "./Hero";
import MatAdvantage from "./MatAdvantage";
import MatAdvantageSlider from "./MatAdvantageSlider";
import MatExamStructure from "./MATExamStructure";
import MBADream from "./MBADream";
import MBADreamSlider from "./MBADreamSlider";
import YourMat from "./YourMat";


const HomePage: React.FC = () => {
    return (<>

        <Hero />
        <FormSection />
        <MatAdvantage children={<MatAdvantageSlider />} />
        <MBADream children={<MBADreamSlider />} />
        <MatExamStructure />
        <YourMat />
    </>);
}

export default HomePage;