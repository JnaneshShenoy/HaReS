import "./App.css";
import HeroWithNavbar from "./sections/HeroxNav/HeroWithNavbar";
import Contact from "./sections/Contact/Contact";
import Footer from "./sections/Footer/Footer";
import Features from "./sections/Features/Features";
import Skills from "./sections/Skills/Skills";

function Home() {
  return (
    <>
      <HeroWithNavbar />
      <Features />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;
