import './Projects.scss';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import ProjectItem from './ProjectItem';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

// Project Details
import Brandguarde from './../images/Brandguarde.png';
import BrBytes from './../images/BrBytes.png';
import CopperCRM from './../images/CopperCRM.png';
import OhoEcommerce from './../images/OhoEcommerce.png';
import PlanAnalytics from './../images/PlanAnalytics.png';
import RestaroneDesign from './../images/RestaroneDesign.png';
import SpotifySearch from './../images/SpotifySearch.png';
import Trip101 from './../images/Trip101.png';
import VioletRails from './../images/VioletRails.png';

const projectsDetail = [
	{
		image: BrBytes, 
		name: 'BrBytes',
		description: `
					<strong>BRBYTES:</strong> <strong>B</strong>uilding <strong>R</strong>esearch to <strong>B</strong>oost <strong>Y</strong>outh <strong>T</strong>echnology <strong>E</strong>ducation and <strong>S</strong>kills
					<br>A partnership between <a class='hover-underline-animation text-decoration-none' href='https://ebrschools.org/about/' target='_blank' rel='noreferrer'><strong>EBRPSS</strong></a> and <a class='hover-underline-animation text-decoration-none' href='https://www.lsu.edu/' target='_blank' rel='noreferrer'><strong>Louisiana State University</strong></a> dedicated to creating and implementing
					a 7-12th grade computer science pathway and training new CS teachers.
				`,
		responsibilities: [
			"Implement new design for the BrBytes' website in accordance with WCAG compliance.",
			"Shell script to create the production build of the website.",
			"Implement new features, API endpoints, and design for BrBytes' teacher portal.",
			"Mentor and onboard two undergraduate students in the BrBytes project.",
			"Review pull requests."
		],
		techStacks: [
			'HTML',
			'Bootstrap',
			'Alpine.js',
			'dhall'
		],
		liveLinks: [
			{
				link: "https://www.brbytes.org/"
			}
		]
	},
	{
		image: VioletRails, 
		name: 'Violet Rails',
		description: "An <strong>open source</strong> web engine powered by Ruby & javascript stack which provides out of the box support for Automation, CMS, blog, forum and email.",
		responsibilities: [
			"Develop and maintain CI/CD pipeline. <a class=\"inline-links\" href=\"https://github.com/restarone/violet_rails/pull/624\" target='_blank' rel='noreferrer'>PR Link 1</a>, <a class=\"inline-links\" href=\"https://github.com/restarone/violet_rails/pull/1157\" target='_blank' rel='noreferrer'>PR Link 2</a>",
			"Rectify in‐house email system’s threading logic by aligning it with Gmail and GitHub standards. <a class=\"inline-links\" href=\"https://github.com/restarone/violet_rails/pull/1295\" target='_blank' rel='noreferrer'>PR Link</a>",
			"Reduce Analytics page's load time by optimizing database queries and reducing memory object allocations. <a class=\"inline-links\" href=\"https://github.com/restarone/violet_rails/pull/1418\" target='_blank' rel='noreferrer'>PR Link</a>",
			"Technical scoping, time estimation, and development of an e-commerce project by integrating Printify's API. <a class=\"inline-links\" href=\" https://github.com/restarone/violet_rails/pull/1557\" target='_blank' rel='noreferrer'>PR Link</a>",
			"<a class=\"inline-links\" href=\"https://github.com/restarone/violet_rails/pulls?q=is%3Apr+author%3Aalis-khadka+is%3Amerged+\" target='_blank' rel='noreferrer'>Merged PRs</a>, <a class=\"inline-links\" href=\"https://github.com/restarone/violet_rails/issues?q=is%3Aissue+author%3Aalis-khadka+\" target='_blank' rel='noreferrer'>Issues, Root Cause Analysis(RCA) of events, and Documentations</a>"
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
		liveLinks: [
			{
				link: "https://violet.restarone.solutions/"
			}
		],
		githubLinks: [
			{
				link: "https://github.com/restarone/violet_rails"
			}
		]
	},
	{
		image: SpotifySearch, 
		name: "Spotify Search",
		description: "An application that displays the search results from Spotify's API using spotify-graphql-server. The spotify-graphql-server was forked to add some extra search functionality.",
		responsibilities: [
			"Add extra functionality to search by Playlist's name and by Playlist's id in spotify-graphql-server",
			"Design and develop the client side from scratch using NextJS and ant design"
		],
		techStacks: [
			'NextJS',
			'HTML',
			'CSS',
			'Ant Design',
			'GraphQL',
			'NodeJS',
			'API Integration',
			'Jest'
		],
		liveLinks: [
			{
				link: "https://spotify-graphql-client.vercel.app/",
				label: 'Client Live'
			},
			{
				link: "https://spotify-graphql-server.fly.dev/",
				label: 'Server Live'
			}
		],
		githubLinks: [
			{
				link: "https://github.com/alis-khadka/spotify-graphql-client",
				label: 'Client Code'
			},
			{
				link: "https://github.com/alis-khadka/spotify-graphql-server",
				label: 'Server Code'
			}
		]
	},
	{
		image: RestaroneDesign, 
		name: "Restarone's Page Design",
		description: "This was a part of assessment from Restarone Solutions Inc. to implement the design of its <a class=\"inline-links\" href=\"https://restarone.com/about\" target='_blank' rel='noreferrer'>about</a> page.",
		responsibilities: [
			"Implement the provided design of the about page of restarone.com"
		],
		techStacks: [
			'HTML',
			'CSS',
			'vanillaJS'
		],
		liveLinks: [
			{
				link: "https://restarone-design.vercel.app/"
			}
		],
		githubLinks: [
			{
				link: "https://github.com/alis-khadka/Restarone-Design"
			}
		]
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
		liveLinks: [
			{
				link: "https://www.copper.com/"
			}
		]
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
			'API Integration',
			'Rspec',
			'Jasmine',
			'Jest'
		],
		liveLinks: [
			{
				link: "https://trip101.com/"
			}
		]
	},
	{
		image: PlanAnalytics, 
		name: 'Plan Analytics',
		description: "Plan Analytics is an application that provides insights on healthcare related data.",
		responsibilities: [
			"Develop a SQL stored procedure to delete 30+ million old records that efficiently extracted and deleted such records in small batches.",
			"Debug and fix session related issue after integration of Central Authentication Service(CAS) with its project management platform, forked from <a class=\"inline-links\" href=\"https://www.redmine.org/\" target='_blank' rel='noreferrer'>Redmine</a>."
		],
		techStacks: [
			'Ruby on Rails',
			'SQL'
		],
		liveLinks: [
			{
				link: "https://www.cedargate.com/healthcare-benefits-analytics/"
			}
		]
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
		liveLinks: [
			{
				link: "https://oho.bajratechnologies.com/service/mall"
			}
		]
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
		liveLinks: [
			{
				link: "https://www.brandguarde.com/"
			}
		]
	}
  ]
  

function Projects() {
	return (
		<section id='projects-content' className='scroll-item px-3 px-sm-5 py-5 d-flex flex-column'>
			<h2 className='section-heading'>
				<span className='hover-underline-animation'>
					Projects
				</span>
			</h2>

			<div className='d-flex justify-content-center align-items-center flex-auto'>
				<Swiper
					cssMode={true}
					navigation={true}
					pagination={true}
					mousewheel={true}
					keyboard={true}
					rewind={true}
					modules={[Navigation, Pagination, Mousewheel, Keyboard]}
					spaceBetween={50}
					slidesPerView={1}
				>
					{projectsDetail.map((data, index) => {
						return <SwiperSlide key={index} ><ProjectItem projectData={data} /></SwiperSlide>
					})}
				</Swiper>
			</div>
		</section>
	);
}

export default Projects;
