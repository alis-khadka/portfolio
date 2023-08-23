import './About.scss';

function About() {
	return (
		<section id='about-content' className='scroll-item p-5'>
			<h2 className='section-heading'>
				<span className='hover-underline-animation'>
					About me
				</span>
			</h2>

			<p className='mt-5 mb-4'>
				Back in 2014, I decided to try my hand at creating simple calculator app 
				for my android smartphone which got me into coding and web development.
			</p>

			<p className='mb-2'>
				Fast-forward to today, with over 3.5 years of professional experience in software 
				engineering, I’ve had the privilege of building softwares in domains 
				like:
			</p>

			<ul className='mb-4 px-3'>
				<li>
					<a className='paragraph-highlights hover-underline-animation d-inline' href='https://oho.bajratechnologies.com/service/mall' target='_blank' rel='noreferrer'>
						E-commerce
					</a>
				</li>
				<li>
					<a className='paragraph-highlights hover-underline-animation d-inline' href='https://www.copper.com/' target='_blank' rel='noreferrer'>
						Customer Relationship Management (CRM)
					</a>
				</li>
				<li>
					<a className='paragraph-highlights hover-underline-animation d-inline' href='https://trip101.com/' target='_blank' rel='noreferrer'>
						Travel & Tourism Centric Blogging Platform
					</a>
				</li>
			</ul>

			<p>
				My main focus these days has been in building and contributing 
				to <a className='paragraph-highlights hover-underline-animation d-inline' href='https://violet.restarone.solutions/' target='_blank' rel='noreferrer'>
					Violet Rails
				</a>, an 
				open source project, 
				at <a className='paragraph-highlights hover-underline-animation d-inline' href='https://restarone.com/' target='_blank' rel='noreferrer'>Restarone Solutions Inc.</a>
			</p>
		</section>
	);
}

export default About;
