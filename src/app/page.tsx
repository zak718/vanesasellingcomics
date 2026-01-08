import HeroSection from "@/components/sections/HeroSection";
import FeaturedProducts from "@/components/sections/FeaturedProducts";
import WhatnotSchedule from "@/components/sections/WhatnotSchedule";
import AboutSection from "@/components/sections/AboutSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturedProducts />
      <WhatnotSchedule />
      <AboutSection />
      <ContactSection />
    </>
  );
}
