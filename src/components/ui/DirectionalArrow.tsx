import { Direction } from '../Interfaces';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faArrowDown, faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

interface IProps {
    direction?: Direction;
}

export const DirectionalArrow = (props: IProps) => {
    const { direction } = props;
    
    switch(direction) {
        case Direction.Up:
            return <FontAwesomeIcon icon={faArrowUp} />;
        case Direction.Down:
            return <FontAwesomeIcon icon={faArrowDown} />;
        case Direction.Left:
            return <FontAwesomeIcon icon={faArrowLeft} />;      
        case Direction.Right:
            return <FontAwesomeIcon icon={faArrowRight} />;
        default:
            return null;
    }    
};