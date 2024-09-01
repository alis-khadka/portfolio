import './LinksPage.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faFile, faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const portfolioAddress = 'https://prashantkhadka.com';
const resumeAddress = 'https://prashantkhadka.com/resume';
const linkedinAddress = 'https://www.linkedin.com/in/prashantkhadka/';
const githubAddress = 'https://github.com/alis-khadka';
const emailAddress = 'mailto: prashant.khadka052@gmail.com';

function LinksPage() {
    return (
        <div className='links-page-container d-flex flex-column justify-content-center align-items-center px-5'>
            <a className='link-btn btn fs-5 px-5 position-relative mb-5' href={portfolioAddress} target='_blank' rel='noreferrer'>
                <span className='link-logo ms-3 mt-2'>
                    <FontAwesomeIcon icon={faGlobe} />
                </span>
                Portfolio Website
            </a>
            <a className='link-btn two btn fs-5 px-5 position-relative mb-5' href={resumeAddress} target='_blank' rel='noreferrer'>
                <span className='link-logo ms-3 mt-2'>
                    <FontAwesomeIcon icon={faFile} />
                </span>
                View my Resume
            </a>
            <a className='link-btn three btn fs-5 px-5 position-relative mb-5' href={linkedinAddress} target='_blank' rel='noreferrer'>
                <span className='link-logo ms-3 mt-2'>
                    <FontAwesomeIcon icon={faLinkedinIn} />
                </span>
                LinkedIn Profile
            </a>
            <a className='link-btn four btn fs-5 px-5 position-relative mb-5' href={githubAddress} target='_blank' rel='noreferrer'>
                <span className='link-logo ms-3 mt-2'>
                    <FontAwesomeIcon icon={faGithub} />
                </span>
                Github Profile
            </a>
            <a className='link-btn five btn fs-5 px-5 position-relative mb-5' href={emailAddress} target='_blank' rel='noreferrer'>
                <span className='link-logo ms-3 mt-2'>
                    <FontAwesomeIcon icon={faEnvelope} />
                </span>
                Email Me
            </a>
        </div>
    );
}

export default LinksPage;
