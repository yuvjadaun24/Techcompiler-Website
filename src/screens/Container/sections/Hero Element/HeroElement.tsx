import "../../../../components/ui/accordion";
import "../../../../components/ui/card";
import "../../../../components/animations/FadeIn";
import "../../../../components/animations/ParallaxImage";
import "./Main.css";
import HeroSection from "../../../../components/HeroSection";
import SolutionsSection from "../../../../components/SolutionsSection";
import WorkSection from "../../../../components/WorkSection";
import AISectionCube from "../../../../components/AISectionCube";
import AboutAccordion from "../../../../components/sections/AboutAccordion";
import TeamPhotoSection from "../../../../components/sections/TeamPhotoSection";
import OurProcess from "../../../../components/sections/OurProcess";

export const MainByAnima = (): JSX.Element => {

  

  // const statistics = [
  //   { label: "Client satisfaction", value: "99%" },
  //   { label: "Industries served", value: "15+" },
  //   { label: "Projects completed", value: "100+" },
  // ];

  

  return (
    <div className="flex flex-col w-full items-start">
      {/* ── New AI Agent Hero Section ─────────────────────── */}
      <HeroSection />

      {/* ── Optimal Solutions — Deck animation ─────────── */}
      <SolutionsSection />

      {/* ── Our Work — Horizontal cinematic showcase ─── */}
      <WorkSection />

      {/* AI Services — Mirror Cube Section */}
      <AISectionCube />

      {/* About / Accordion Section */}
      <AboutAccordion />

      {/* Team Photo Section */}
      <TeamPhotoSection />

      {/* Our Process Section */}
      <OurProcess />
    </div>
  );
};

