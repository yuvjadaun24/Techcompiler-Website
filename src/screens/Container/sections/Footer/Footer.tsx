import logo from "@/assets/TC-Logo-Main.png";
import { Separator } from "../../../../components/ui/separator";
import { useDropdown } from "@/context/DropdownContext";
import { Link, useNavigate } from "react-router-dom";

export const FooterByAnima = (): JSX.Element => {
  const { openServices, openTechnologies } = useDropdown();
  const navigate = useNavigate();

  const handleLinkClick = (link: string) => {
    const homeUrl = new URL(window.location.href);
    homeUrl.pathname = "/";
    navigate(homeUrl.pathname);
    window.scrollTo(0, 0);

    if (link === "Services") {
      setTimeout(() => openServices(), 100);
    } else if (link === "Technologies") {
      setTimeout(() => openTechnologies(), 100);
    }
  };

  const getLinkPath = (link: string) => {
    switch (link) {
      case "Home":
        return "/";
      case "Clients":
        return "/Our-Clients";
      case "Careers":
        return "/Careers";
      case "Contact Us":
        return "/Contact-Us";
      default:
        return "/";
    }
  };

  const footerLinks = {
    links: ["Home", "Services", "Technologies", "Clients", "Careers", "Contact Us"],
    utility: ["Styleguide", "Changelog", "Instructions", "Licensing"],
    socials: ["Twitter (X)", "Linkedin", "Instagram", "Dribbble"],
  };

  return (
    <footer className="flex flex-col w-full items-start bg-black">
      <div className="flex flex-col items-center px-4 sm:px-8 py-0 relative self-stretch w-full">
        <div className="flex flex-col max-w-screen-xl w-full items-start pt-12 sm:pt-24 pb-0 px-0 relative">
          <div className="flex flex-col items-start relative self-stretch w-full">
            <div className="flex flex-col items-center justify-center gap-4 sm:gap-6 relative self-stretch w-full">

              {/* Scrolling contact section */}
              <Link to="/Contact-Us" className="relative max-w-screen-xl w-full h-24 sm:h-32 overflow-hidden border-r-[0.8px] border-l-[0.8px] border-white">
                <div className="flex animate-conveyor-belt whitespace-nowrap">
                  {[...Array(2)].map((_, groupIndex) => (
                    <div key={groupIndex} className="flex space-x-6 sm:space-x-10">
                      {[...Array(4)].map((_, itemIndex) => (
                        <div key={itemIndex} className="inline-flex h-24 sm:h-32 items-center py-0">
                          <div className="inline-flex flex-col items-start pl-0 pr-1 sm:pr-[1.28px] py-0 relative flex-[0_0_auto]">
                            <div className="text-white text-6xl sm:text-9xl tracking-[-1.5px] sm:tracking-[-3.00px] leading-[80px] sm:leading-[128px] relative w-fit mt-[-1.00px] font-normal whitespace-nowrap">
                              Contact
                            </div>
                          </div>
                          <div className="flex flex-col w-24 sm:w-[184px] items-start px-6 sm:px-14 py-0 relative h-16 sm:h-[72px]">
                            <div className="flex w-16 h-16 sm:w-[72px] sm:h-[72px] items-center justify-center bg-white rounded-full overflow-hidden group hover:bg-transparent hover:border-2 hover:border-white transition-all duration-300">
                              <svg
                                className="w-6 h-6 sm:w-7 sm:h-7"
                                viewBox="0 0 27 28"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M5.95124 0.760255L25.4744 0.760254C25.7731 0.760254 26.0596 0.878922 26.2708 1.09016C26.4821 1.30138 26.6007 1.58787 26.6007 1.8866V21.4098C26.6007 21.7085 26.4821 21.995 26.2708 22.2062C26.0596 22.4175 25.7731 22.5361 25.4744 22.5361C25.1757 22.5361 24.8892 22.4175 24.678 22.2062C24.4667 21.995 24.3481 21.7085 24.3481 21.4098V4.60482L2.24184 26.7111C2.02832 26.91 1.74592 27.0184 1.45412 27.0132C1.16233 27.0081 0.883917 26.8899 0.677552 26.6835C0.471188 26.4771 0.35298 26.1987 0.347832 25.9069C0.342683 25.6151 0.450996 25.3327 0.649952 25.1192L22.7562 3.01293H5.95124C5.65252 3.01293 5.36603 2.89427 5.1548 2.68304C4.94357 2.47181 4.8249 2.18532 4.8249 1.8866C4.8249 1.58787 4.94357 1.30138 5.1548 1.09016C5.36603 0.878923 5.65252 0.760255 5.95124 0.760255Z"
                                  fill="black"
                                  className="group-hover:fill-white transition-all duration-300"
                                />
                              </svg>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </Link>
            </div>

            {/* Main footer content */}
            <div className="flex flex-col md:flex-row items-start justify-between px-0 py-16 sm:py-28 relative self-stretch w-full gap-12 md:gap-0">
              {/* Logo and tagline */}
              <div className="inline-flex flex-col max-w-xs sm:max-w-64 items-start gap-4 relative">
                <div className="flex flex-col max-w-64 w-[104px] items-start relative">
                  <div className="flex flex-col max-w-[104px] items-start relative w-full">
                    <div className="flex flex-col w-full max-w-[150px] sm:max-w-[200px] p-4 sm:p-5 items-center justify-center relative bg-white rounded-lg sm:rounded-xl">
                      <img
                        className="relative w-full max-w-[150px] sm:max-w-[200px]" 
                        alt="Logo"
                        src={logo}
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start relative self-stretch w-full opacity-70">
                  <div className="relative w-fit mt-[-1.00px] font-normal text-white text-sm sm:text-base tracking-[0] leading-[18.2px] sm:leading-[20.8px]">
                    Creating bold digital experiences
                    <br />
                    that redefine brands
                  </div>
                </div>
              </div>

              {/* Footer navigation links */}
              <div className="inline-flex items-start gap-12 sm:gap-24 relative">
                {/* Links column */}
                <div className="inline-flex flex-col items-start gap-4 relative">
                  <div className="flex flex-col items-start relative self-stretch w-full opacity-70">
                    <div className="relative w-fit mt-[-1.00px] font-normal text-white text-sm sm:text-base tracking-[0] leading-[18.2px] sm:leading-[20.8px] whitespace-nowrap">
                      Links
                    </div>
                  </div>
                  {footerLinks.links.map((link, index) => (
                    <div
                      key={index}
                      className="flex flex-col items-start relative self-stretch w-full"
                      onClick={() => {
                        if (link === "Services" || link === "Technologies") {
                          handleLinkClick(link);
                        } else {
                          navigate(getLinkPath(link));
                        }
                      }}
                    >
                      <div className="text-white text-sm sm:text-base tracking-[0] leading-[18.2px] sm:leading-[20.8px] relative w-fit mt-[-1.00px] font-normal whitespace-nowrap cursor-pointer">
                        {link}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer bottom bar */}
            <Separator className="w-full h-[0.8px] bg-[#ffffff1a]" />
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pt-6 sm:pt-[24.31px] pb-6 sm:pb-[23.83px] px-0 relative self-stretch w-full gap-4 sm:gap-0">
              <div className="inline-flex flex-col items-start relative">
                <div className="relative w-fit mt-[-1.00px] font-normal text-white text-xs sm:text-[12.8px] tracking-[0] leading-[15.6px] sm:leading-[16.6px] whitespace-nowrap">
                  TechCompiler Data Systems Pvt. Ltd.
                </div>
              </div>

              <div className="inline-flex items-start relative">
                <div className="relative w-fit mt-[-1.00px] mr-2 sm:mr-4 font-normal text-white text-xs sm:text-[12.8px] tracking-[0] leading-[15.6px] sm:leading-[16.6px] whitespace-nowrap">
                  © 2024
                </div>
                <div className="inline-flex items-start pt-0 pb-[0.8px] px-0 relative ml-0 sm:ml-[-1.42e-13px] border-b-[0.8px] border-white">
                  <div className="relative w-fit mt-[-0.80px] font-normal text-white text-xs sm:text-[12.8px] tracking-[0] leading-[15.6px] sm:leading-[16.6px] whitespace-nowrap">
                    All Rights Reserved
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
