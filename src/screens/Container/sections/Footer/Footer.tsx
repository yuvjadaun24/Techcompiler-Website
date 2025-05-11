import logo from "@/assets/TC-Logo-Main.png"
import { Separator } from "../../../../components/ui/separator";

export const FooterByAnima = (): JSX.Element => {
  // Footer navigation links data
  const footerLinks = {
    links: ["Home", "About", "Work", "Contact"],
    utility: ["Styleguide", "Changelog", "Instructions", "Licensing"],
    socials: ["Twitter (X)", "Linkedin", "Instagram", "Dribbble"],
  };

  return (
    <footer className="flex flex-col w-full items-start bg-black">
      <div className="flex flex-col items-center px-8 py-0 relative self-stretch w-full">
        <div className="flex flex-col max-w-screen-xl w-full items-start pt-24 pb-0 px-0 relative">
          <div className="flex flex-col items-start relative self-stretch w-full">
            <div className="flex flex-col items-center justify-center gap-[16px] relative self-stretch w-full">

              {/* Scrolling contact section */}
              <div className="relative max-w-screen-xl w-full h-32 overflow-hidden border-r-[0.8px] border-l-[0.8px] border-white">
                <div className="flex animate-conveyor-belt whitespace-nowrap">
                  {[...Array(2)].map((_, groupIndex) => (
                    <div key={groupIndex} className="flex space-x-10">
                      {[...Array(4)].map((_, itemIndex) => (
                        <div key={itemIndex} className="inline-flex h-32 items-center py-0">
                          <div className="inline-flex flex-col items-start pl-0 pr-[1.28px] py-0 relative flex-[0_0_auto]">
                            <div className="text-white text-9xl tracking-[-3.00px] leading-[128px] relative w-fit mt-[-1.00px] font-normal whitespace-nowrap">
                              Contact
                            </div>
                          </div>
                          <div className="flex flex-col w-[184px] items-start px-14 py-0 relative h-[72px]">
                            <div className="flex w-[72px] h-[72px] items-center justify-center pl-[28.32px] pr-[22.88px] py-0 bg-white rounded-[72px] overflow-hidden">
                              <div className="relative flex-1 grow h-7">
                                <img
                                  className="absolute w-[27px] h-7 top-0 -left-1"
                                  alt="Svg"
                                  src="/svg.svg"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Main footer content */}
            <div className="flex items-start justify-between px-0 py-28 relative self-stretch w-full">
              {/* Logo and tagline */}
              <div className="inline-flex flex-col max-w-64 items-start gap-4 relative">
                <div className="flex flex-col max-w-64 w-[104px] items-start relative">
                  <div className="flex flex-col max-w-[104px] items-start relative w-full">
                    <div className="flex flex-col w-full max-w-[200px] p-5 items-center justify-center relative bg-white rounded-xl">
                      <img
                        className="relative w-full max-w-[200px]" 
                        alt="Logo"
                        src={logo}
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start relative self-stretch w-full opacity-70">
                  <div className="relative w-fit mt-[-1.00px] font-normal text-white text-base tracking-[0] leading-[20.8px]">
                    Creating bold digital experiences
                    <br />
                    that redefine brands
                  </div>
                </div>
              </div>

              {/* Footer navigation links */}
              <div className="inline-flex items-start gap-24 relative">
                {/* Links column */}
                <div className="inline-flex flex-col items-start gap-4 relative">
                  <div className="flex flex-col items-start relative self-stretch w-full opacity-70">
                    <div className="relative w-fit mt-[-1.00px] font-normal text-white text-base tracking-[0] leading-[20.8px] whitespace-nowrap">
                      Links
                    </div>
                  </div>
                  {footerLinks.links.map((link, index) => (
                    <div
                      key={index}
                      className="flex flex-col items-start relative self-stretch w-full"
                    >
                      <div className="text-white text-base tracking-[0] leading-[20.8px] relative w-fit mt-[-1.00px] font-normal whitespace-nowrap">
                        {link}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Utility column */}
                <div className="inline-flex flex-col items-start gap-4 relative">
                  <div className="flex flex-col items-start relative self-stretch w-full opacity-70">
                    <div className="relative w-fit mt-[-1.00px] font-normal text-white text-base tracking-[0] leading-[20.8px] whitespace-nowrap">
                      Utility
                    </div>
                  </div>
                  {footerLinks.utility.map((link, index) => (
                    <div
                      key={index}
                      className="flex flex-col items-start relative self-stretch w-full"
                    >
                      <div className="relative w-fit mt-[-1.00px] font-normal text-white text-base tracking-[0] leading-[20.8px] whitespace-nowrap">
                        {link}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Socials column */}
                <div className="inline-flex flex-col items-start gap-4 relative">
                  <div className="flex flex-col items-start relative self-stretch w-full opacity-70">
                    <div className="relative w-fit mt-[-1.00px] font-normal text-white text-base tracking-[0] leading-[20.8px] whitespace-nowrap">
                      Socials
                    </div>
                  </div>
                  {footerLinks.socials.map((link, index) => (
                    <div
                      key={index}
                      className="flex flex-col items-start relative self-stretch w-full"
                    >
                      <div className="relative w-fit mt-[-1.00px] font-normal text-white text-base tracking-[0] leading-[20.8px] whitespace-nowrap">
                        {link}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer bottom bar */}
            <Separator className="w-full h-[0.8px] bg-[#ffffff1a]" />
            <div className="flex items-center justify-between pt-[24.31px] pb-[23.83px] px-0 relative self-stretch w-full">
              <div className="inline-flex flex-col items-start relative">
                <div className="relative w-fit mt-[-1.00px] font-normal text-white text-[12.8px] tracking-[0] leading-[16.6px] whitespace-nowrap">
                  TechCompiler Data Systems Pvt. Ltd.
                </div>
              </div>

              <div className="inline-flex items-start relative">
                <div className="relative w-fit mt-[-1.00px] mr-4 font-normal text-white text-[12.8px] tracking-[0] leading-[16.6px] whitespace-nowrap">
                  © 2024
                </div>
                <div className="inline-flex items-start pt-0 pb-[0.8px] px-0 relative ml-[-1.42e-13px] border-b-[0.8px] border-white">
                  <div className="relative w-fit mt-[-0.80px] font-normal text-white text-[12.8px] tracking-[0] leading-[16.6px] whitespace-nowrap">
                    All Rights Reserved
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer >
  );
};
