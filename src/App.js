import { useRef } from 'react';
import './App.scss';
import BurgerMenu from './components/BurgerMenu';
import PortfolioContent from './components/PortfolioContent';

function App() {
	const aboutRef = useRef(null);
	const contactRef = useRef(null);
	const projectsRef = useRef(null);
	const skillsRef = useRef(null);

	const handleClick = () => {
		contactRef.current.scrollIntoView({ behavior: 'smooth' });
	}

	return (
		<div className="main-container">
			<BurgerMenu
			aboutRef={aboutRef}
			contactRef={contactRef}
			projectsRef={projectsRef}
			skillsRef={skillsRef}
			/>

			<PortfolioContent
			aboutRef={aboutRef}
			contactRef={contactRef}
			projectsRef={projectsRef}
			skillsRef={skillsRef}
			/>

			<button type='button' className='btn px-5 contact-lg-btn' onClick={handleClick}>Let's work together</button>
		</div>
	);
}

export default App;
