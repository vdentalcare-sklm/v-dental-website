import SchemesHero from "@/components/healthcare-schemes/SchemesHero";
import NoCostEmi from "@/components/healthcare-schemes/NoCostEmi";
import EhsScheme from "@/components/healthcare-schemes/EhsScheme";
import WhyVDentalSchemes from "@/components/healthcare-schemes/WhyVDentalSchemes";
import SchemesCTA from "@/components/healthcare-schemes/SchemesCTA";

export const metadata = {
  title: "Affordable Dental Care & Healthcare Schemes | V Dental",
  description: "Explore flexible payment solutions and healthcare support programs like 0% No Cost EMI and EHS at V Dental Care.",
};

export default function HealthcareSchemesPage() {
  return (
    <div className="flex flex-col w-full bg-[#F2FBF7]">
      <SchemesHero />
      <NoCostEmi />
      <EhsScheme />
      <WhyVDentalSchemes />
      <SchemesCTA />
    </div>
  );
}
