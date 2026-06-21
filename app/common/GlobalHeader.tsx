import Image from "next/image";
import logo1 from "../../public/images/logo-1.png";
import Link from "next/link";
import logo2 from "../../public/images/logo-2.png";
const GlobalHeader: React.FC = () => {
  return (
    <>
      <header className="bg-white border-b shadow-sm py-[15px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="text-xl font-semibold tracking-tight text-gray-900">
              <div className="flex flex-row items-center gap-[20px]">
                <Link href="/">
                  <Image className="logo1" src={logo1} alt="Aima Logo" />
                </Link>

                <a href="#">
                  <Image className="logo2" src={logo2} alt="MAT Logo" />
                </a>
              </div>
            </div>

            {/* Navigation */}
            <nav
              aria-label="Primary navigation"
              className="menubar hidden md:flex items-center gap-[15px]"
            >
              <a href="#" className="nav-link">
                TEST DATES
              </a>

              <a href="#" className="nav-link">
                TEST CITIES
              </a>

              <div className="relative group">
                <button className="nav-link flex items-center gap-1">
                  B - Schools
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                <div
                  className="
                                            absolute left-0 mt-5 w-58   bg-white shadow-lg  
                                            opacity-0 invisible group-hover:opacity-100 group-hover:visible
                                            transition-all duration-200 z-20
                                        "
                >
                  <a href="#" className="  dropdown-menu">
                    Participating B-Schools
                  </a>

                  <a href="#" className="  dropdown-menu">
                    B-School Notifications
                  </a>
                </div>
              </div>

              <a href="#" className="nav-link">
                REGISTRATION PROCESS
              </a>
              <a href="#" className="nav-link">
                Testimonials
              </a>
            </nav>

            <div className="hidden md:flex items-center gap-3">
              <a className="btn-primary">Login</a>

              <a className="btn-outline">Sign Up</a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default GlobalHeader;
