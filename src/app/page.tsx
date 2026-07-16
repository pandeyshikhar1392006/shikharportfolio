import Navbar from "@/components/Navbar";
import Marquee from "@/components/Marquee";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import ShortFormReels from "@/components/sections/ShortFormReels";
import LongFormFilms from "@/components/sections/LongFormFilms";
import SocialGallery from "@/components/sections/SocialGallery";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Interests from "@/components/sections/Interests";
import EnactusCaseStudy from "@/components/sections/EnactusCaseStudy";
import Resume from "@/components/sections/Resume";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />

      <div className="py-8 border-y border-line bg-cream">
        <Marquee text={["Video Editor", "Designer"]} />
      </div>

      <About />

      <div id="work">
        <ShortFormReels />
        <LongFormFilms />
        <SocialGallery />
      </div>

      <EnactusCaseStudy />
      <Skills />
      <Experience />
      <Interests />
      <Resume />
      <Contact />
      <Footer />
    </>
  );
}
