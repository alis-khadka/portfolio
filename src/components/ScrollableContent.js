import './ScrollableContent.scss';

import About from './About';
import Contact from './Contact';
import Introduction from './Introduction';
import Projects from './Projects';
import Skills from './Skills';

function ScrollableContent() {
	return (
		<div className='w-50 ml-50'>
			<Introduction />
			<About />
			<Projects />
			<Skills />
			<Contact />
		</div>
	);
}

export default ScrollableContent;
