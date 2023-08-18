import './FixedContent.scss';

function FixedContent() {
	return (
		<div className='fixed-container position-fixed h-100 top-0 start-0 d-flex flex-column justify-content-center px-5'>
			<h1 className='mb-5'>Hi. I'm a software engineer</h1>
			<div>My name's Prashant Khadka. I craft robust and scalable web applications using modern web technologies.</div>
			<button type='button' className='btn mt-5 w-50'>Let's work together</button>
		</div>
	);
}

export default FixedContent;
