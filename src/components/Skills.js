import './Skills.scss';

import dokku from './../custom_icons/dokku.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAngular,
  faBootstrap,
  faCss3,
  faDocker,
  faEmber,
  faHtml5,
  faJs,
  faPython,
  faReact,
  faSass,
} from '@fortawesome/free-brands-svg-icons';
import {
  faAntdesignIcon,
  faJqueryIcon,
  faMysqlIcon,
  faNextjsIcon,
  faPostgresqlIcon,
  faRubyIcon,
  faRubyOnRailsIcon,
  faSqlIcon,
} from './../custom_icons';

function Skills() {
	return (
    <section id='skills-content' className='scroll-item p-5'>
      <h2 className='section-heading'>
				<span className='hover-underline-animation'>
					Skills
				</span>
			</h2>

      <ul className='mt-5 p-0'>
        <li className='hover-underline-animation d-flex flex-column justify-content-center align-items-center'>
          <FontAwesomeIcon icon={faRubyIcon} className='skill-icon' />
          <span className='text-small mt-1'>Ruby</span>
        </li>
        <li className='hover-underline-animation d-flex flex-column justify-content-center align-items-center'>
          <FontAwesomeIcon icon={faRubyOnRailsIcon} className='skill-icon' />
          <span className='text-small mt-1'>Ruby on Rails</span>
        </li>
        <li className='hover-underline-animation d-flex flex-column justify-content-center align-items-center'>
          <FontAwesomeIcon icon={faSqlIcon} className='skill-icon' />
          <span className='text-small mt-1'>SQL</span>
        </li>
        <li className='hover-underline-animation d-flex flex-column justify-content-center align-items-center'>
          <FontAwesomeIcon icon={faPostgresqlIcon} className='skill-icon' />
          <span className='text-small mt-1'>PostgreSQL</span>
        </li>
        <li className='hover-underline-animation d-flex flex-column justify-content-center align-items-center'>
          <FontAwesomeIcon icon={faMysqlIcon} className='skill-icon' />
          <span className='text-small mt-1'>MySQL</span>
        </li>
        <li className='hover-underline-animation d-flex flex-column justify-content-center align-items-center'>
          <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAABOklEQVR4nLXWSytFURjG8R+RMpCx3BmayDdgZCiRSOaKpIhvYKhkIAMpIhMTty9hbupyxsrtlDhHu7baHWfbp2156hnswfo/rffd612LbHViHRe4RzF2AVdYRZccihYd4xPlDH/gEO21wqfxUgO40k+YyIKv5ACXEy5hMQ0++0d4ORHyYyd9eA4UUMZuZcBRIPA1ZlCXhEcfwxjBUE4PoDWt9qPYwBZ2cngbC2hJC7gMVJ5b9FQLeAjY3PNqAW8BA4porAwoBgx4RUNlwF3AgNP/bPJN2sCbwknsvRy/6Sbm0OwXdaM34cEch60f9WkBh4HKVIgvqKZqO3gK2OzLtIumFABewnhaqZYCwOdlaDJnuR4xlgX/VgcO4gs9C/yOfbTVCk8qOjhr8RCLni3R3IocTc4zLP/2mvgCCy1j4IL+xMsAAAAASUVORK5CYII=' />
          <span className='text-small mt-1'>Elasticsearch</span>
        </li>
        <li className='hover-underline-animation d-flex flex-column justify-content-center align-items-center'>
          <FontAwesomeIcon icon={faJs} className='skill-icon' />
          <span className='text-small mt-1'>JavaScript</span>
        </li>
        <li className='hover-underline-animation d-flex flex-column justify-content-center align-items-center'>
          <FontAwesomeIcon icon={faJqueryIcon} className='skill-icon' />
          <span className='text-small mt-1'>jQuery</span>
        </li>
        <li className='hover-underline-animation d-flex flex-column justify-content-center align-items-center'>
          <FontAwesomeIcon icon={faReact} className='skill-icon' />
          <span className='text-small mt-1'>ReactJS</span>
        </li>
        <li className='hover-underline-animation d-flex flex-column justify-content-center align-items-center'>
          <FontAwesomeIcon icon={faNextjsIcon} className='skill-icon' />
          <span className='text-small mt-1'>NextJS</span>
        </li>
        <li className='hover-underline-animation d-flex flex-column justify-content-center align-items-center'>
          <FontAwesomeIcon icon={faAngular} className='skill-icon' />
          <span className='text-small mt-1'>Angular 2+</span>
        </li>
        <li className='hover-underline-animation d-flex flex-column justify-content-center align-items-center'>
          <FontAwesomeIcon icon={faEmber} className='skill-icon' />
          <span className='text-small mt-1'>EmberJS</span>
        </li>
        <li className='hover-underline-animation d-flex flex-column justify-content-center align-items-center'>
          <FontAwesomeIcon icon={faHtml5} className='skill-icon' />
          <span className='text-small mt-1'>HTML</span>
        </li>
        <li className='hover-underline-animation d-flex flex-column justify-content-center align-items-center'>
          <FontAwesomeIcon icon={faCss3} className='skill-icon' />
          <span className='text-small mt-1'>CSS</span>
        </li>
        <li className='hover-underline-animation d-flex flex-column justify-content-center align-items-center'>
          <FontAwesomeIcon icon={faSass} className='skill-icon' />
          <span className='text-small mt-1'>Sass</span>
        </li>
        <li className='hover-underline-animation d-flex flex-column justify-content-center align-items-center'>
          <FontAwesomeIcon icon={faBootstrap} className='skill-icon' />
          <span className='text-small mt-1'>Bootstrap</span>
        </li>
        <li className='hover-underline-animation d-flex flex-column justify-content-center align-items-center'>
          <FontAwesomeIcon icon={faAntdesignIcon} className='skill-icon' />
          <span className='text-small mt-1'>Ant Design</span>
        </li>
        <li className='hover-underline-animation d-flex flex-column justify-content-center align-items-center'>
          <FontAwesomeIcon icon={faDocker} className='skill-icon' />
          <span className='text-small mt-1'>Docker</span>
        </li>
        <li className='hover-underline-animation d-flex flex-column justify-content-center align-items-center'>
		      <img alt='dokku icon' src={dokku} height={25} width={30}/>
          <span className='text-small mt-1'>Dokku</span>
        </li>
        <li className='hover-underline-animation d-flex flex-column justify-content-center align-items-center'>
		  <FontAwesomeIcon icon={faPython} className='skill-icon' />
          <span className='text-small mt-1'>Python</span>
        </li>
      </ul>
    </section>
  );
}

export default Skills;
