import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';

function ProjectItem(props) {
    const project = props.projectData;

	return (
        <div className='slide-item'>
            <div className="card">
                <img className="card-img-top" src={project.image} alt="Card cap" />
                <div className="card-body d-flex flex-column pt-0">
                    <h5 className='card-title fw-bold'><span className=' hover-underline-animation'>{project.name}</span></h5>
                    <p className='card-text text-left mb-1'>{project.description}</p>
                    <p className='card-text text-left mb-0'><span className='hover-underline-animation'>Responsibilities:</span></p>
                    <ul>
                        {project.responsibilities.map((responsibility, index) => {
                            return <li key={index} dangerouslySetInnerHTML={{__html: responsibility}}></li>
                        })}
                    </ul>
                    <div className='tech-stacks text-left'>
                        {project.techStacks.map((techItem, index) => {
                            return <span className='tech-item px-2' key={index}>{techItem}</span>
                        })}
                    </div>
                    <div className='project-links d-flex flex-row'>
                        {
                            project.githubLinks &&
                            (
                                project.githubLinks.map((item, index) => {
                                    return <a className='hover-underline-animation' href={item.link} target='_blank' rel='noreferrer'>{item.label || 'View Code'}&nbsp;<FontAwesomeIcon icon={faGithub} /></a>
                                }) 
                            )
                        }
                        {
                            project.liveLinks &&
                            (
                                project.liveLinks.map((item, index) => {
                                    return <a className='hover-underline-animation' href={item.link} target='_blank' rel='noreferrer'>{item.label || 'View Code'}&nbsp;<FontAwesomeIcon icon={faLink} /></a>
                                }) 
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
	);
}

export default ProjectItem;
