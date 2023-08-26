import './PortfolioContent.scss';
import FixedContent from './FixedContent';
import ScrollableContent from './ScrollableContent';
import About from './About';
import Contact from './Contact';
import Projects from './Projects';
import Skills from './Skills';
import { useMediaQuery } from "@uidotdev/usehooks";

function PortfolioContent(props) {
	const isLargeScreen = useMediaQuery("(min-width : 992px)");

	return (
		<div className='portfolio-content'>
			<FixedContent contactRef={props.contactRef} />

			{ isLargeScreen ? (
				<ScrollableContent {...props} />
			) : (
				<>
					<span ref={props.aboutRef} className='h-0 opacity-0'/>
					<About />

					<span ref={props.skillsRef} className='h-0 opacity-0'/>
					<Skills />

					<span ref={props.projectsRef} className='h-0 opacity-0'/>
					<Projects />

					<span ref={props.contactRef} className='h-0 opacity-0'/>
					<Contact />
				</>
			)}
		</div>
	);
}

export default PortfolioContent;
