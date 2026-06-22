import Image from "next/image";
import heroImg from "../../public/images/hero-img.webp";
import Marquee from "react-fast-marquee";
const Hero: React.FC = () => {
  return (
    <>
      <section className="bg-[var(--primary-color)] py-2 text-white">
        <div className="max-w-6xl  mx-auto">
          <Marquee pauseOnHover speed={30}>
            MAT February 2026 registrations are open | 200+ Participating
            B-Schools | 2 Test modes: Paper Based Test (PBT) & Computer Based
            Test (CBT) | 66 Test Cities | Avail concession in registration fee
            by applying for both test modes, PBT + CBT | Recent Additions:
            Acharya Bangalore B-School, Jain University (Bengaluru), Amrita
            School of Business (Coimbatore), PSG Institute of Management
            (Coimbatore), Shiv Nadar University (Chennai), XIME (Kochi), GITAM
            School of Business (Hyderabad), NIT Jalandhar, New Delhi Institute
            of Management, Delhi School of Business (VIPS-TC), BIMTECH (Greater
            Noida), IMS Ghaziabad, Jaipuria Institute of Management (Noida),
            Bharati Vidyapeeth (Deemed to be University – Navi Mumbai), IIEBM-
            Indus Business School (Pune), Dr D Y Patil B School (Pune), Gujarat
            Maritime University (Gandhinagar), ITM Vocational University
            (Vadodara), Manipal University (Jaipur), National Academy of Defense
            Production (NADP - Nagpur), NIT Silchar, Dibrugarh University, NERIM
            Group of Institutions (Guwahati), St. Xaviers University (Kolkata),
            Sikkim Manipal Institute of Technology (Sikkim Manipal University)
          </Marquee>
        </div>
      </section>
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
