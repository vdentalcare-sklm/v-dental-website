import AboutHero from "@/components/about/AboutHero";
import OurStory from "@/components/about/OurStory";
import OurPromise from "@/components/about/OurPromise";
import WhatMakesUsDifferent from "@/components/about/WhatMakesUsDifferent";
import ADayInside from "@/components/about/ADayInside";
import CoreValues from "@/components/about/CoreValues";
import TrustInNumbers from "@/components/about/TrustInNumbers";
import DoctorsPreview from "@/components/about/DoctorsPreview";
import JourneyOfExcellence from "@/components/about/JourneyOfExcellence";
import FinalCTA from "@/components/about/FinalCTA";

export const metadata = {
  title: "About V Dental | Luxury Cosmetic Dentistry",
  description: "Redefining modern dentistry through expertise, technology, and compassion.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full bg-background">
      <AboutHero />
      <OurStory />
      <OurPromise />
      <WhatMakesUsDifferent />
      <ADayInside />
      <CoreValues />
      <TrustInNumbers />
      <DoctorsPreview />
      <JourneyOfExcellence />
      <FinalCTA />
    </div>
  );
}
