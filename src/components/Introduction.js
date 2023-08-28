import './Introduction.scss';
import headshot from './../images/headshot.png'

function Introduction() {
	return (
		<section id='introduction-content' className='scroll-item d-flex justify-content-center align-items-center'>
			<img src={headshot} alt='Prashant pic' className='self-image' />
		</section>
	);
}

export default Introduction;
