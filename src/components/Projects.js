import './Projects.scss';

import ProjectItem from './ProjectItem';

// Project Thumbnails
import headshot from './../images/headshot.png';
import Brandguarde from './../images/Brandguarde.png';
import CopperCRM from './../images/CopperCRM.png';
import OhoEcommerce from './../images/OhoEcommerce.png';
import Trip101 from './../images/Trip101.png';
import VioletRails from './../images/VioletRails.png';

const projectsDetail = [
	{
		image: VioletRails, 
		name: 'Violet Rails',
		description: "An open source web engine powered by Ruby & javascript stack which provides out of the box support for Automation, CMS, blog, forum and email.",
		responsibilities: [
			"Develop and maintain CI/CD pipeline",
			"Implement recaptcha v2 and v3 in its API Data Pipeline",
			"Rectify in‐house email system’s threading logic by aligning it with Gmail and GitHub standards",
			"Reduce Analytics page's load time by optimizing database queries and reducing memory object allocations",
			"Technical scoping, time estimation, and development of an e-commerce project by integrating Printify's API"
		],
		techStacks: [
			'Ruby on Rails',
			'HTML',
			'CSS',
			'jQuery',
			'Heroku',
			'Dokku',
			'Bootstrap',
			'Github Actions',
			'API Integrations',
			'Unit Testing',
			'Integration Testing'
		],
		liveLink: "https://violet.restarone.solutions/",
		githubLink: "https://github.com/restarone/violet_rails"
	},
  ]
  

function Projects() {
	return (
		<section id='projects-content' className='scroll-item p-5 d-flex flex-column'>
			<h2 className='section-heading'>
				<span className='hover-underline-animation'>
					Projects
				</span>
			</h2>

			<div className='d-flex justify-content-center align-items-center flex-auto'>
				<div className="slider">
					<div className="slides">
						{projectsDetail.map((data, index) => {
							return <div className='slide-item'><ProjectItem projectData={data} /></div>
						})}
					</div>
				</div>
			</div>
		</section>
	);
}

export default Projects;
