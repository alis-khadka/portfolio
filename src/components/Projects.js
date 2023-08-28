import './Projects.scss';

import ProjectItem from './ProjectItem';

// Project Details
import Brandguarde from './../images/Brandguarde.png';
import CopperCRM from './../images/CopperCRM.png';
import OhoEcommerce from './../images/OhoEcommerce.png';
import RestaroneDesign from './../images/RestaroneDesign.png';
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
			'SQL',
			'jQuery',
			'Heroku',
			'Dokku',
			'Bootstrap',
			'Github Actions',
			'API Integrations',
			'Minitest'
		],
		liveLink: "https://violet.restarone.solutions/",
		githubLink: "https://github.com/restarone/violet_rails"
	},
	{
		image: CopperCRM, 
		name: 'Copper CRM',
		description: "A CRM application that provides integration with Google Workspace and helps clients to cultivate enduring relationships with clients.",
		responsibilities: [
			"Technical scoping, time estimation, and development of \"Pipeline\" entity's creation-template pages",
			"Develop new features and pages for user's onboarding"
		],
		techStacks: [
			'Ruby on Rails',
			'EmberJS',
			'Jasmine'
		],
		liveLink: "https://www.copper.com/"
	},
	{
		image: RestaroneDesign, 
		name: "Restarone's Page Design",
		description: "This was a part of assessment from Restarone Solutions Inc. to implement the design of its 'about' page.",
		responsibilities: [
			"Implement the provided design of the about page of restarone.com"
		],
		techStacks: [
			'HTML',
			'CSS',
			'vanillaJS'
		],
		liveLink: "https://restarone-design.vercel.app/",
		githubLink: "https://github.com/alis-khadka/Restarone-Design"
	},
	{
		image: Trip101, 
		name: 'Trip101',
		description: "Trip101 is tourism-centric website that presents articles catered to travelers worldwide, offering insightful suggestions on exciting activities and a wide selection of accommodation properties.",
		responsibilities: [
			"Develop Trip101 CMS from scratch using Angular 2+",
			"Migrate a micro service written in vanillaJS and jquery to React.js",
			"Third party API integrations of Expedia, Sonder, and The Apartment Network",
			"Develop features for admin panel"
		],
		techStacks: [
			'Ruby on Rails',
			'SQL',
			'jquery',
			'vanillaJS',
			'Angular 2+',
			'React.js',
			'Rspec',
			'Jasmine',
			'Jest'
		],
		liveLink: "https://trip101.com/"
	},
	{
		image: OhoEcommerce, 
		name: 'OHO E-commerce',
		description: "E-commerce site operating within the context of Nepal which offers a diverse range of  services including general merchandise, food delivery, and ride sharing",
		responsibilities: [
			"Categorization and sub-categorization of products",
			"Implement banner placement throughout the website for advertise purpose",
			"Implement Elasticsearch for searching using fuzzy search and filters using aggregations"
		],
		techStacks: [
			'Ruby on Rails',
			'SQL',
			'Angular 2+',
			'Elasticsearch',
			'Rspec'
		],
		liveLink: "https://oho.bajratechnologies.com/service/mall"
	},
	{
		image: Brandguarde, 
		name: 'Brandguarde',
		description: "A SAAS product that informs product distributors against unwanted resellers in distribution channels like Amazon and Walmart",
		responsibilities: [
			"Write SQL queries to fetch required result",
			"Develop UI features from provided design file"
		],
		techStacks: [
			'Ruby on Rails',
			'SQL',
			'Angular 2+',
			'Rspec'
		],
		liveLink: "https://www.brandguarde.com/"
	}
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
							return <ProjectItem projectData={data} key={index} />
						})}
					</div>
				</div>
			</div>
		</section>
	);
}

export default Projects;
