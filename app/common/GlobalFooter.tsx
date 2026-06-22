import whidelogo from "../../public/images/whitelogo.avif";
import Image from "next/image";
import { MdFacebook } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaSnapchat } from "react-icons/fa6";
import { BsEnvelopeAt } from "react-icons/bs";
import { BsTelephone } from "react-icons/bs";
import { FiMapPin } from "react-icons/fi";

const GlobalFooter: React.FC = () => {
  return (
    <>
      <footer className="bg-[var(--primary-color)]  text-white">
        <div className="max-w-6xl mx-auto pb-[50px] section-spacing">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-15">
            <div className="item">
              <div className="content-wrapper flex flex-col justify-between gap-15">
                <Image src={whidelogo} alt="AIma Mat" className="w-full" />

                <div className="social-media">
                  <h3>Follow Us</h3>

                  <ul className="flex flex-row gap-5">
                    <li>
                      <a
                        className="w-[50px] h-[50px] flex justify-center items-center rounded  bg-[var(--box-bg-color)] hover:bg-white hover:text-blue-600 transition-[var(--global-transitions)]"
                        href="https://www.facebook.com/people/MAT-Management-Aptitude-Test-By-AIMA/61566927392724/"
                        target="_blank"
                      >
                        <MdFacebook size={30} color="inherit" />
                      </a>
                    </li>
                    <li>
                      <a
                        className="w-[50px] h-[50px] flex justify-center items-center rounded  bg-[var(--box-bg-color)] hover:bg-white hover:text-blue-600 transition-[var(--global-transitions)]"
                        href="https://www.instagram.com/mat_by_aima/"
                        target="_blank"
                      >
                        <FaInstagram size={30} color="inherit" />
                      </a>
                    </li>
                    <li>
                      <a
                        className="w-[50px] h-[50px] flex justify-center items-center rounded  bg-[var(--box-bg-color)] hover:bg-white hover:text-blue-600 transition-[var(--global-transitions)]"
                        href="https://www.linkedin.com/school/aimaindia/"
                        target="_blank"
                      >
                        <FaLinkedinIn size={30} color="inherit" />
                      </a>
                    </li>
                    <li>
                      <a
                        className="w-[50px] h-[50px] flex justify-center items-center rounded  bg-[var(--box-bg-color)] hover:bg-white hover:text-blue-600 transition-[var(--global-transitions)]"
                        href="#"
                        target="_blank"
                      >
                        <FaSnapchat size={30} color="inherit" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="content-wrapper">
                <h3>About MAT</h3>
                <p>
                  The Management Aptitude Test (MAT), conducted by AIMA since
                  1988, is one of India’s most trusted entrance exams for MBA
                  and PGDM programs. Recognized by the Government of India, MAT
                  connects aspirants to 600+ B-Schools nationwide.
                </p>
              </div>
            </div>
            <div className="item">
              <div className="content-wrapper">
                <h3> Quick Links</h3>

                <ul className="flex flex-col gap-3">
                  <li>
                    <a href="#">Refund Policy</a>
                  </li>
                  <li>
                    <a href="#">FAQ's</a>
                  </li>
                  <li>
                    <a href="#">Sample Questions</a>
                  </li>
                  <li>
                    <a href="#">MAT Score & Interpretation</a>
                  </li>
                  <li>
                    <a href="#">Disclaimer</a>
                  </li>
                  <li>
                    <a href="#">Terms & Conditions</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="item">
              <div className="content-wrapper">
                <h3>Contact Us</h3>
                <ul className="flex flex-col gap-3">
                  <li>
                    <a
                      href="mailto:mat@aima.in"
                      className="flex flex-row items-center gap-4"
                    >
                      {" "}
                      <BsEnvelopeAt size={25} />
                      <span>mat@aima.in</span>
                    </a>
                  </li>
                  <li>
                    <div className="flex flex-row items-center gap-4">
                      {" "}
                      <BsTelephone size={25} />
                      <div className="wrapper flex flex-col gap-0.5">
                        <a href="tel:+91 81303 38839"> +91 81303 38839</a>
                        <a href="tel:+91 95990 30586"> +91 95990 30586</a>
                        <span className="text-[10px]">(9:00 AM – 5:30 PM)</span>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="flex flex-row items-center gap-4">
                      <svg
                        className="ekit-svg-icon icon-phone"
                        width={25}
                        viewBox="0 0 32 32"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M28.631 14.235c-1.665 0-4.684-0.6-5.625-1.541-0.577-0.577-0.714-1.301-0.824-1.883-0.136-0.717-0.217-0.93-0.532-1.065-1.444-0.62-3.514-0.976-5.681-0.976-2.144 0-4.193 0.35-5.619 0.959-0.311 0.133-0.391 0.345-0.523 1.061-0.108 0.584-0.243 1.31-0.82 1.887-0.525 0.525-1.624 0.886-2.454 1.096-1.069 0.271-2.214 0.426-3.141 0.426-1.062 0-1.78-0.202-2.196-0.617-0.626-0.626-1.025-1.481-1.095-2.348-0.059-0.73 0.081-1.812 1.088-2.819 1.635-1.635 3.834-2.91 6.537-3.789 2.486-0.809 5.315-1.236 8.183-1.236 2.887 0 5.74 0.433 8.25 1.251 2.728 0.89 4.948 2.178 6.599 3.828 1.68 1.68 1.264 3.909 0.020 5.154-0.412 0.412-1.12 0.612-2.167 0.612zM15.968 7.169c2.411 0 4.653 0.393 6.313 1.106 1.141 0.49 1.332 1.5 1.472 2.237 0.084 0.441 0.156 0.821 0.384 1.050 0.404 0.404 2.73 1.073 4.494 1.073 0.77 0 1.012-0.132 1.044-0.151 0.495-0.502 1.117-1.738-0.028-2.883-2.887-2.887-8.015-4.611-13.718-4.611-5.655 0-10.735 1.703-13.588 4.557-0.461 0.461-0.671 0.985-0.625 1.558 0.039 0.483 0.272 0.983 0.625 1.338 0.030 0.019 0.276 0.156 1.072 0.156 1.758 0 4.066-0.658 4.463-1.054 0.226-0.226 0.296-0.606 0.378-1.047 0.137-0.739 0.325-1.752 1.468-2.24 1.642-0.702 3.861-1.088 6.248-1.088zM26.4 28.8h-20.8c-1.073 0-2.064-0.422-2.789-1.189s-1.092-1.779-1.032-2.851c0.007-0.123 0.188-3.041 2.032-5.983 1.091-1.74 2.537-3.128 4.298-4.123 2.177-1.23 4.832-1.854 7.891-1.854s5.714 0.624 7.891 1.854c1.761 0.996 3.207 2.383 4.298 4.123 1.844 2.942 2.025 5.86 2.032 5.983 0.059 1.072-0.307 2.084-1.032 2.851s-1.716 1.189-2.789 1.189zM16 14.4c-4.987 0-8.621 1.74-10.799 5.173-1.648 2.596-1.823 5.251-1.825 5.278-0.035 0.627 0.177 1.217 0.597 1.661s0.998 0.688 1.627 0.688h20.8c0.629 0 1.207-0.244 1.627-0.688s0.632-1.034 0.597-1.662c-0.001-0.025-0.177-2.68-1.825-5.276-2.179-3.433-5.812-5.173-10.799-5.173zM16 25.6c-2.647 0-4.8-2.153-4.8-4.8s2.153-4.8 4.8-4.8 4.8 2.153 4.8 4.8-2.153 4.8-4.8 4.8zM16 17.6c-1.764 0-3.2 1.436-3.2 3.2s1.435 3.2 3.2 3.2c1.764 0 3.2-1.436 3.2-3.2s-1.436-3.2-3.2-3.2z"
                          fill="#fff"
                        ></path>
                      </svg>
                      <div className="wrapper flex flex-col gap-0.5">
                        <a href="tel:011-47673020"> 011-47673020</a>
                        <span className="text-[10px]">
                          (Mon–Fri, 9:00 AM – 5:30 PM)
                        </span>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="flex flex-row items-center gap-4">
                      {" "}
                      <FiMapPin size={25} />
                      <span>
                        AIMA, 15, Link Road, Lajpat Nagar 3, New Delhi - 110024
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="border-top border-1 border-white text-white text-center py-2.5 ">
          <p className="!mb-0">
            © {new Date().getFullYear()} All Rights Reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default GlobalFooter;
