import './FixedContent.scss';
import headshot from './../images/headshot.png'
import SocialLinks from './SocialLinks';
import Notice from './Notice';


function FixedContent(props) {
	const handleClick = () => {
		props.contactRef.current.scrollIntoView({ behavior: 'smooth' });
	}

	return (
		<div className='fixed-container d-flex flex-column justify-content-center px-5'>
			<img src={headshot} alt='Prashant pic' className='self-image' />
			<Notice />
			<h1 className='mb-3 mb-sm-5'>Hi. I'm a Software Engineer.</h1>
			<div className='introduction-text'>My name's Prashant Khadka and I craft robust and scalable web applications using modern web technologies.</div>
			<button type='button' className='contact-button btn mt-5 d-lg-none' onClick={handleClick}>Let's work together</button>
			<div className='links-container'>
				<SocialLinks />
			</div>
		</div>
	);
}

export default FixedContent;
