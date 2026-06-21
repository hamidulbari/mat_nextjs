import Image from "next/image";
import heroImg from "../../public/images/hero-img.webp";
const Hero: React.FC = () => {
  return (
    <>
      <section className="section-spacing">
        <div className="max-w-6xl mx-auto ">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[20px]  md:gap-[50px]">
            <div className="rightside  order-2 lg:order-1">
              <div className="content-wrapper">
                <h1 className="primary-color">
                  Clear the path to your MBA with Management Aptitude Test (MAT)
                </h1>
                <p>
                  The Management Aptitude Test (MAT), conducted by AIMA since
                  1988, is one of the largest MBA/PGDM entrance tests in India.
                  Nationally recognized by the Government of India since 2003,
                  MAT serves as a gateway to 600+ leading B-Schools across the
                  country.
                </p>
                <p>
                  With a legacy of over 35 years, MAT has been the preferred
                  choice for over 30 lakh management aspirants. It offers the
                  flexibility of Paper-Based and Computer-Based test modes, to
                  suit candidate convenience. Conducted four times a year, MAT
                  provides multiple opportunities for admission success.
                </p>
                <p>
                  Recognized for its reliability and reach, MAT continues to be
                  the most preferred gateway to management education in India.
                </p>
              </div>
            </div>
            <div className="left-side order-1 lg:order-2">
              <Image
                src={heroImg}
                className="w-full h-full object-cover rounded-lg shadow-lg"
                alt="MBA with Management Aptitude Test"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
