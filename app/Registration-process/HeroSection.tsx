import Image from "next/image";
import heroImg from "../../public/images/adfk.avif";
import sectionImg from "../../public/images/asdf.avif";
const HeroSection: React.FC = () => {
  return (
    <>
      <section className="section-spacing">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-[50px] items-center grid-cols-1">
            <div className="item lg:order-1 order-2">
              <div className="conten-wrapper">
                <h1 className="primary-color">MAT Registration Process</h1>
                <p>
                  Follow these simple steps to complete your MAT application
                  online.
                </p>
                <a href="#" className="btn-secondary">
                  Register Now
                </a>
              </div>
            </div>
            <div className="item lg:order-2 order-1">
              <Image
                src={heroImg}
                alt="Registration Process of MAT Exam"
                className="w-full h-[250px] object-cover rounded-lg shadow"
              />
            </div>
          </div>
        </div>
        <div className="max-w-6xl mx-auto mt-20">
          <Image
            src={sectionImg}
            alt=""
            className="w-full h-[260px] lg:h-[600px] object-cover rounded-lg shadow"
          />
        </div>
      </section>
    </>
  );
};

export default HeroSection;
