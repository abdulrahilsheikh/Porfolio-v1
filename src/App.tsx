import "./App.css";
import AboutSection from "./sections/about-page copy/AboutSection";
import LandingSection from "./sections/landing-page/LandingSection";

function App() {
	return (
		<>
			<LandingSection />
			<AboutSection />
			<div className="h-screen bg-red-200"></div>
		</>
	);
}

export default App;
