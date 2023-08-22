import './Skills.scss';

import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBurger } from '@fortawesome/free-solid-svg-icons';
import { faRubyIcon, faRubyOnRailsIcon } from './../custom_icons';

library.add(faRubyIcon);
library.add(faRubyOnRailsIcon);

dom.watch();

function Skills() {
	return (
		<section id='skills-content' className='scroll-item p-5'>
			<h2 className='hover-underline-animation'>Skills</h2>

			<ul className='mb-4 px-3'>
				<li className='d-flex flex-column justify-content-center align-items-center'>
					<FontAwesomeIcon icon={faRubyIcon} className='skill-icon' />
					<span className='hover-underline-animation mt-1'>
						Ruby
					</span>
				</li>
				<li className='d-flex flex-column justify-content-center align-items-center'>
					<FontAwesomeIcon icon={faRubyOnRailsIcon} className='skill-icon' />
					<span className='hover-underline-animation mt-1'>
						Ruby on Rails
					</span>
				</li>
				<li className='d-flex flex-column justify-content-center align-items-center'>
					<span className='hover-underline-animation mt-1'>
						JavaScript
					</span>
				</li>
				<li className='d-flex flex-column justify-content-center align-items-center'>
					<span className='hover-underline-animation mt-1'>
						jQuery
					</span>
				</li>
				<li className='d-flex flex-column justify-content-center align-items-center'>
					<span className='hover-underline-animation mt-1'>
						ReactJS
					</span>
				</li>
				<li className='d-flex flex-column justify-content-center align-items-center'>
					<span className='hover-underline-animation mt-1'>
						NextJS
					</span>
				</li>
				<li className='d-flex flex-column justify-content-center align-items-center'>
					<span className='hover-underline-animation mt-1'>
						Angular 2+
					</span>
				</li>
				<li className='d-flex flex-column justify-content-center align-items-center'>
					<span className='hover-underline-animation mt-1'>
						EmberJS
					</span>
				</li>
				<li className='d-flex flex-column justify-content-center align-items-center'>
					<span className='hover-underline-animation mt-1'>
						Ember
					</span>
				</li>
				<li className='d-flex flex-column justify-content-center align-items-center'>
					<span className='hover-underline-animation mt-1'>
						Ember
					</span>
				</li>
				<li className='d-flex flex-column justify-content-center align-items-center'>
					<span className='hover-underline-animation mt-1'>
						Ember
					</span>
				</li>
			</ul>
		</section>
	);
}

export default Skills;
