import './ScrollableContent.scss';

import About from './About';
import Contact from './Contact';
import Introduction from './Introduction';
import Projects from './Projects';
import Skills from './Skills';

function ScrollableContent() {
	return (
		<main class="scroll-container w-50 ml-50">
			<span id='introduction' className='h-0 opacity-0'/>
			<Introduction />

			<span id='about' className='h-0 opacity-0'/>
			<About />

			<span id='projects' className='h-0 opacity-0'/>
			<Projects />

			<span id='skills' className='h-0 opacity-0'/>
			<Skills />

			<span id='contact' className='h-0 opacity-0'/>
			<Contact />
		</main>
	);
}

export default ScrollableContent;
