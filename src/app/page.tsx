import HeroSection from "@/components/home/HeroSection";
import TreatmentShowcase from "@/components/home/TreatmentShowcase";
import TestimonialCarousel from "@/components/home/TestimonialCarousel";
import CTASection from "@/components/home/CTASection";
import WhyChooseUs from "@/components/home/WhyChooseUs";

export default function Home() {
  return (
    <div className="flex flex-col gap-24 md:gap-32 pb-24">
      <HeroSection />
      <TreatmentShowcase />
      <WhyChooseUs />
      <TestimonialCarousel />
      <CTASection />
    </div>
  );
}
