import { useRef } from 'react';
import './App.scss';
import BurgerMenu from './components/BurgerMenu';
import PortfolioContent from './components/PortfolioContent';

function App() {
	const aboutRef = useRef(null);
	const contactRef = useRef(null);
	const introductionRef = useRef(null);
	const projectsRef = useRef(null);
	const skillsRef = useRef(null);

	return (
		<div className="main-container">
			<BurgerMenu
			aboutRef={aboutRef}
			contactRef={contactRef}
			introductionRef={introductionRef}
			projectsRef={projectsRef}
			skillsRef={skillsRef}
			/>

			<PortfolioContent
			aboutRef={aboutRef}
			contactRef={contactRef}
			introductionRef={introductionRef}
			projectsRef={projectsRef}
			skillsRef={skillsRef}
			/>
		</div>
	);
}

export default App;
