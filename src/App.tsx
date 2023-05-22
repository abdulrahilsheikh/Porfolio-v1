import { useState } from "react";
import "./App.css";
import AboutMe from "./sections/about-me/AboutMe";
import JourneySection from "./sections/journey-page/JourneySection";
import LandingSection from "./sections/landing-page/LandingSection";
import Project from "./sections/projects/Project";
import SkillsSection from "./sections/skills-page/SkillsSection";
import PopUp from "./components/popup/PopUp";

function App() {
	const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
	return (
		<div>
			{isMobile && <PopUp hidePopUp={() => setIsMobile(false)} />}
			<LandingSection />
			<AboutMe />
			<SkillsSection />
			<Project />
			<JourneySection />
		</div>
	);
}

export default App;
