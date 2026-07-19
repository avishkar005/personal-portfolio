import Hero from "@/components/home/Hero";
import TechStack from "@/components/home/TechStack";
import ServicesAccordion from "@/components/home/ServicesAccordion";
import FeaturedProjects from "@/components/home/FeaturedProjects";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TechStack />
      <ServicesAccordion />
      <FeaturedProjects />
    </>
  );
}
