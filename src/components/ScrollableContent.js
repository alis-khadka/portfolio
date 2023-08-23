import './ScrollableContent.scss';

import About from './About';
import Contact from './Contact';
import Introduction from './Introduction';
import Projects from './Projects';
import Skills from './Skills';

function ScrollableContent(props) {
	return (
		<main className="scroll-container">
			<span ref={props.introductionRef} className='h-0 opacity-0'/>
			<Introduction />

			<span ref={props.aboutRef} className='h-0 opacity-0'/>
			<About />

			<span ref={props.skillsRef} className='h-0 opacity-0'/>
			<Skills />

			<span ref={props.projectsRef} className='h-0 opacity-0'/>
			<Projects />

			<span ref={props.contactRef} className='h-0 opacity-0'/>
			<Contact />
		</main>
	);
}

export default ScrollableContent;
