import Hero from "@/components/sections/Hero";
import AboutPreview from "@/components/sections/AboutPreview";
import Services from "@/components/sections/Services";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";


export default function Home() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <Services />
      <Projects/>
      <Contact />
    </>
  );
}
