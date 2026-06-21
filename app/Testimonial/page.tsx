// import { ReactNode } from "react";

// type Props = { children?: ReactNode };

// const Testimonial: React.FC<Props> = ({ children }) => {
//   return (
//     <section className="section-spacing">
//       <div className="max-w-6xl mx-auto">
//         <div className="title-wrapper lg:text-center">
//           <h2 className="primary-color">From Aspirant to Achiever</h2>

//           <p className="!mb-0">
//             Every MAT achiever starts as an aspirant — uncertain but determined.
//           </p>

//           <p className="!mb-0">
//             What makes their journey special is not just the score, but the
//             confidence they gain along the way.
//           </p>
//         </div>

//         {/* children inside section for better structure */}
//         {children && <div className="mt-10">{children}</div>}
//       </div>
//     </section>
//   );
// };

// export default Testimonial;

import { ReactNode } from "react";
// import Testimonial from "@/Testimonial";
import TestimonialSlider from "./TestimonialSlider";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa6";
type Props = {
  children?: ReactNode;
};

const achieverData = [
  {
    id: 1,
    url: `<iframe class="instagram-media instagram-media-rendered" id="instagram-embed-0"
      src="https://www.instagram.com/reel/DDeSBgOPrQ5/embed/?cr=1&v=14"
      allowtransparency="true"
      allowfullscreen="true"
      frameborder="0"
      height="556"
      scrolling="no"
      style="background:white;width:100%;border-radius:3px;border:1px solid #dbdbdb;">
    </iframe>`,
  },
  {
    id: 2,
    url: `<iframe class="instagram-media" id="instagram-embed-1"
      src="https://www.instagram.com/reel/DFC0XJFSnEN/embed/"
      allowtransparency="true"
      allowfullscreen="true"
      frameborder="0"
      height="556"
      scrolling="no"
      style="background:white;width:100%;border-radius:3px;border:1px solid #dbdbdb;">
    </iframe>`,
  },
  {
    id: 3,
    url: `<iframe class="instagram-media" id="instagram-embed-2"
      src="https://www.instagram.com/reel/DFVDaWDykB7/embed/"
      allowtransparency="true"
      allowfullscreen="true"
      frameborder="0"
      height="556"
      scrolling="no"
      style="background:white;width:100%;border-radius:3px;border:1px solid #dbdbdb;">
    </iframe>`,
  },
  {
    id: 4,
    url: `<iframe class="instagram-media" id="instagram-embed-3"
      src="https://www.instagram.com/reel/DG-bTTpMQKg/embed/"
      allowtransparency="true"
      allowfullscreen="true"
      frameborder="0"
      height="556"
      scrolling="no"
      style="background:white;width:100%;border-radius:3px;border:1px solid #dbdbdb;">
    </iframe>`,
  },
  {
    id: 5,
    url: `<iframe class="instagram-media" id="instagram-embed-4"
      src="https://www.instagram.com/reel/DG2rXeIPf61/embed/"
      allowtransparency="true"
      allowfullscreen="true"
      frameborder="0"
      height="556"
      scrolling="no"
      style="background:white;width:100%;border-radius:3px;border:1px solid #dbdbdb;">
    </iframe>`,
  },
];
const topBSchool = [
  {
    id: 1,
    url: '<iframe class="instagram-media instagram-media-rendered" id="instagram-embed-5" src="https://www.instagram.com/reel/DO2-AHykg7s/embed/?cr=1&amp;v=14&amp;wp=407&amp;rd=https%3A%2F%2Fwww.aima.sanntra.com&amp;rp=%2FMAT%2Ftestimonials#%7B%22ci%22%3A5%2C%22os%22%3A4322.5999999940395%2C%22ls%22%3A836.6999999880791%2C%22le%22%3A2111.4000000059605%7D" allowtransparency="true" allowfullscreen="true" frameborder="0" height="556" data-instgrm-payload-id="instagram-media-payload-5" scrolling="no" style="background: white; max-width: 540px; width: 100%; border-radius: 3px; border: 1px solid rgb(219, 219, 219); box-shadow: none; display: block; margin: 0px 0px 12px;  padding: 0px;"></iframe> ',
  },
  {
    id: 2,
    url: '<iframe class="instagram-media instagram-media-rendered" id="instagram-embed-6" src="https://www.instagram.com/reel/DOvR-dZkvP3/embed/?cr=1&amp;v=14&amp;wp=407&amp;rd=https%3A%2F%2Fwww.aima.sanntra.com&amp;rp=%2FMAT%2Ftestimonials#%7B%22ci%22%3A6%2C%22os%22%3A5775.5%2C%22ls%22%3A836.6999999880791%2C%22le%22%3A2111.4000000059605%7D" allowtransparency="true" allowfullscreen="true" frameborder="0" height="556" data-instgrm-payload-id="instagram-media-payload-6" scrolling="no" style="background: white; max-width: 540px; width: 100%; border-radius: 3px; border: 1px solid rgb(219, 219, 219); box-shadow: none; display: block; margin: 0px 0px 12px;  padding: 0px;"></iframe> ',
  },
  {
    id: 3,
    url: '<iframe class="instagram-media instagram-media-rendered" id="instagram-embed-7" src="https://www.instagram.com/reel/DOnVCNNkvmE/embed/?cr=1&amp;v=14&amp;wp=407&amp;rd=https%3A%2F%2Fwww.aima.sanntra.com&amp;rp=%2FMAT%2Ftestimonials#%7B%22ci%22%3A7%2C%22os%22%3A5949.0999999940395%2C%22ls%22%3A836.6999999880791%2C%22le%22%3A2111.4000000059605%7D" allowtransparency="true" allowfullscreen="true" frameborder="0" height="556" data-instgrm-payload-id="instagram-media-payload-7" scrolling="no" style="background: white; max-width: 540px; width: 100%; border-radius: 3px; border: 1px solid rgb(219, 219, 219); box-shadow: none; display: block; margin: 0px 0px 12px;   padding: 0px;"></iframe> ',
  },
  {
    id: 4,
    url: '<iframe class="instagram-media instagram-media-rendered" id="instagram-embed-8" src="https://www.instagram.com/reel/DOdcb1XkjHs/embed/?cr=1&amp;v=14&amp;wp=407&amp;rd=https%3A%2F%2Fwww.aima.sanntra.com&amp;rp=%2FMAT%2Ftestimonials#%7B%22ci%22%3A8%2C%22os%22%3A6389.799999982119%2C%22ls%22%3A836.6999999880791%2C%22le%22%3A2111.4000000059605%7D" allowtransparency="true" allowfullscreen="true" frameborder="0" height="556" data-instgrm-payload-id="instagram-media-payload-8" scrolling="no" style="background: white; max-width: 540px; width: 100%; border-radius: 3px; border: 1px solid rgb(219, 219, 219); box-shadow: none; display: block; margin: 0px 0px 12px;   padding: 0px;"></iframe> ',
  },
  {
    id: 5,
    url: '<iframe class="instagram-media instagram-media-rendered" id="instagram-embed-9" src="https://www.instagram.com/reel/DGfcdbWPk_J/embed/?cr=1&amp;v=14&amp;wp=407&amp;rd=https%3A%2F%2Fwww.aima.sanntra.com&amp;rp=%2FMAT%2Ftestimonials#%7B%22ci%22%3A9%2C%22os%22%3A7681.5999999940395%2C%22ls%22%3A836.6999999880791%2C%22le%22%3A2111.4000000059605%7D" allowtransparency="true" allowfullscreen="true" frameborder="0" height="556" data-instgrm-payload-id="instagram-media-payload-9" scrolling="no" style="background: white; max-width: 540px; width: 100%; border-radius: 3px; border: 1px solid rgb(219, 219, 219); box-shadow: none; display: block; margin: 0px 0px 12px;   padding: 0px;"></iframe> ',
  },
  {
    id: 6,
    url: '<iframe class="instagram-media instagram-media-rendered" id="instagram-embed-10" src="https://www.instagram.com/reel/DG4zP3Ov-NJ/embed/?cr=1&amp;v=14&amp;wp=407&amp;rd=https%3A%2F%2Fwww.aima.sanntra.com&amp;rp=%2FMAT%2Ftestimonials#%7B%22ci%22%3A10%2C%22os%22%3A7909.299999982119%2C%22ls%22%3A836.6999999880791%2C%22le%22%3A2111.4000000059605%7D" allowtransparency="true" allowfullscreen="true" frameborder="0" height="556" data-instgrm-payload-id="instagram-media-payload-10" scrolling="no" style="background: white; max-width: 540px; width: 100%; border-radius: 3px; border: 1px solid rgb(219, 219, 219); box-shadow: none; display: block; margin: 0px 0px 12px;  padding: 0px;"></iframe> ',
  },
];

const Testimonial: React.FC<Props> = ({ children }) => {
  return (
    <>
      <section className="section-spacing">
        <div className="max-w-6xl mx-auto">
          <div className="title-wrapper lg:text-center">
            <h1 className="primary-color">From Aspirant to Achiever</h1>

            <p className="!mb-0">
              Every MAT achiever starts as an aspirant — uncertain but
              determined.
            </p>

            <p className="!mb-0">
              What makes their journey special is not just the score, but the
              confidence they gain along the way.
            </p>
          </div>
          <div className="slider-wrappers mt-10 relative">
            <TestimonialSlider items={achieverData} />
            <div className="navigationButton text-heading ">
              <button
                className="prev-btn absolute  w-[40px] h-[40px] rounded-full flex items-center justify-center bg-[var(--primary-color)] top-[50%]  z-[2332] -translate-y-1/2 cursor-pointer
                   left-0"
              >
                <FaChevronLeft size={24} className="text-white" />
              </button>

              <button className="next-btn w-[40px] h-[40px] rounded-full flex items-center justify-center bg-[var(--primary-color)]  cursor-pointer absolute top-[50%]  z-[2332] -translate-y-1/2 right-0">
                <FaChevronRight size={24} className="text-white" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="section-spacing bg-[var(--light-background-color)]">
        <div className="max-w-6xl mx-auto">
          <div className="title-wrapper lg:text-center">
            <h2 className="primary-color">Why Top B-Schools Recommend MAT</h2>

            <p className="!mb-0">
              Hear from leading B-Schools who trust MAT for its credible legacy
              and its role in identifying and nurturing <br /> high-potential
              management aspirants through a fair, flexible, and effective
              evaluation process.
            </p>
          </div>

          <div className="slider-wrappers mt-10 relative">
            <TestimonialSlider items={topBSchool} />
            <div className="navigationButton text-heading ">
              <button
                className="prev-btn absolute  w-[40px] h-[40px] rounded-full flex items-center justify-center bg-[var(--primary-color)] top-[50%]  z-[2332] -translate-y-1/2 cursor-pointer
                   left-0"
              >
                <FaChevronLeft size={24} className="text-white" />
              </button>

              <button className="next-btn w-[40px] h-[40px] rounded-full flex items-center justify-center bg-[var(--primary-color)]  cursor-pointer absolute top-[50%]  z-[2332] -translate-y-1/2 right-0">
                <FaChevronRight size={24} className="text-white" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="section-spacing !pb-0 bg-[var(--primary-color)]">
        <div className="max-w-6xl mx-auto">
          <div className="title-wrapper text-white  lg:text-center">
            <h2>Got your Success Story that can inspire others?</h2>

            <p className="!mb-0">
              Hear from leading B-Schools who trust MAT for its credible legacy
              and its role in identifying and nurturing <br /> high-potential
              management aspirants through a fair, flexible, and effective
              evaluation process.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonial;
