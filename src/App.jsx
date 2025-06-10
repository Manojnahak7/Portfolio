import { Hero } from "./Components/Hero/Hero";
import { Navbar } from "./Components/Nav/Navbar";
import { Skills } from "./Components/Skills/Skills";
import { VideoBackground } from "./Components/Videobg/VideoBackground";
import About from "./Components/About/About";
import Certification from "./Components/Certifications/Certification";
import Projects from "./Components/Projects/Projects.jsx";
import Achievements from "./Components/Achievements/Achievements.jsx";
import Contact from "./Components/Contact/Contact.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop.jsx";
export const App = () => {
  return (
    <div className="app-wrapper">
      <VideoBackground />
      <Navbar />
      <Hero />

      <section
        style={{
          height: "100vh",
          paddingTop: "100px",
          color: "white",
          textAlign: "center",
        }}
      >
        <About />
        <Skills />
        <Certification />
        <Projects />
        <Achievements />
        <Contact />
        <Footer />
        <ScrollToTop />
      </section>

      <section
        style={{
          height: "100vh",
          paddingTop: "100px",
          color: "white",
          textAlign: "center",
        }}
      ></section>
    </div>
  );
};
