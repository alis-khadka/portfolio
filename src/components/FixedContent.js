import './FixedContent.scss';
import headshot from './../headshot.png'


function FixedContent() {
	return (
		<div className='fixed-container d-flex flex-column justify-content-center px-5'>
			<img src={headshot} alt='Prashant pic' />
			<h1 className='mb-5'>Hi. I'm a Software Engineer.</h1>
			<div>My name's Prashant Khadka and I craft robust and scalable web applications using modern web technologies.</div>
			<button type='button' className='btn mt-5 w-50'>Let's work together</button>
		</div>
	);
}

export default FixedContent;
