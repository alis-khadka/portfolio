import './Introduction.scss';
import headshot from './../headshot.png'

function Introduction() {
	return (
		<section id='introduction-content' className='scroll-item is-visible d-flex justify-content-center align-items-center'>
			<img src={headshot} alt='hello' />
		</section>
	);
}

export default Introduction;
