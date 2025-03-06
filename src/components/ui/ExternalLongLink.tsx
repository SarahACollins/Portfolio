import './ExternalLongLink.css'
import { Direction } from '../Interfaces';
import { DirectionalArrow } from './DirectionalArrow';

interface IProps {
    title: string;
    url?: string;
    target?: string;
    arrowDirection?: Direction;
}

export const ExternalLongLink = (props: IProps) => {
    const {title, url, target, arrowDirection = Direction.Right} = props;
    return (
        <a href={url} target={target} className='external-long-link'>
             <span className='external-long-link-text'>
                 <p>{title}</p>
                 <span className='external-long-link-arrow'>
                    <DirectionalArrow direction={arrowDirection} />
                 </span>
             </span>
        </a>
    );
};