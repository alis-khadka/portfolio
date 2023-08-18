import './Introduction.scss';
import headshot from './../headshot.png'

function Introduction() {
	return (
		<section id='introduction' className='d-flex justify-content-center align-items-center'>
			<img src={headshot} alt='hello' />
		</section>
	);
}

export default Introduction;
