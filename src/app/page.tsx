import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Equipments from "@/components/Equipments";
import GetInTouch from "@/components/GetInTouch";
import Careers from "@/components/Careers";
import Safety from "@/components/Safety";
import Footer from "@/components/Footer";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Projects />
      <Equipments />
      <Safety />
      <Careers />
      <GetInTouch />
      <Footer />
    </>
  );
}
