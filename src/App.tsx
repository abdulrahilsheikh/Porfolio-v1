import "./App.css";
import AboutMe from "./sections/about-me/AboutMe";
import JourneySection from "./sections/journey-page/JourneySection";
import LandingSection from "./sections/landing-page/LandingSection";
import SkillsSection from "./sections/skills-page/SkillsSection";

function App() {
  return (
    <>
      <LandingSection />
      <AboutMe />
      <SkillsSection />
      <JourneySection />
    </>
  );
}

export default App;
