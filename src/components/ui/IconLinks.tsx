import './IconLinks.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faSquareGithub } from '@fortawesome/free-brands-svg-icons';
import { faSquareEnvelope} from '@fortawesome/free-solid-svg-icons';


export const IconLinks = () => {
    return (
        <div className='icon-links'>
            <a href="https://www.linkedin.com/in/sarah-collins-/">
                <FontAwesomeIcon icon={faLinkedin} className="icon"/>
            </a>
            <a href="mailto:saraha_collins@outlook.com">
                <FontAwesomeIcon icon={faSquareEnvelope} className="icon"/>
            </a>
            <a href="https://github.com/SarahACollins">
                <FontAwesomeIcon icon={faSquareGithub} className="icon"/>
            </a>
        </div>
    );
}; 