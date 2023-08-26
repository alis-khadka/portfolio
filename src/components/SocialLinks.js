import './SocialLinks.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faLinkedinIn,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import cv from './../Prashant-CV.pdf';

const emailAddress = "mailto:prashant.khadka052@gmail.com";
const linkedInUrl = "https://www.linkedin.com/in/prashant-khadka-650a3a136/";
const instagramUrl = "https://www.instagram.com/alis_khadka";
const githubLink = "https://github.com/alis-khadka";

function SocialLinks() {
	return (
    <>
      <div className='social-links-container d-flex flex-row gap-3'>
        <a className='social-link' href={emailAddress} target='_blank' rel='noreferrer'>
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
        <a className='social-link' href={linkedInUrl} target='_blank' rel='noreferrer'>
          <FontAwesomeIcon icon={faLinkedinIn} />
        </a>
        <a className='social-link' href={instagramUrl} target='_blank' rel='noreferrer'>
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a className='social-link' href={githubLink} target='_blank' rel='noreferrer'>
          <FontAwesomeIcon icon={faGithub} />
        </a>
        </div>
      <div className='cv-link'>
        <a className='social-link' href={cv} target='_blank' rel='noreferrer'>
          Resume
        </a>
      </div>
    </>
  );
}

export default SocialLinks;
