import './ExperienceCard.css';
import { Direction } from '../Interfaces';
import { DirectionalArrow } from '../ui/DirectionalArrow';

interface IProps {
    title: string;
    label: string;
    detail?: string;
    date: string;
    onClick?: () => void;
}

export const ExperienceCard = (props: IProps) => {
    const {title, label, detail, date, onClick} = props;

    const isLinkDefined = onClick !== undefined;

    return (
        <div className='exp-card' onClick={isLinkDefined ? onClick: undefined}>
            <div className='exp-header'>
                <h3 className='exp-title'>{title}</h3>
                {isLinkDefined ? (
                    <span className='link-arrow'>
                        <DirectionalArrow direction={Direction.Up} />
                    </span>
                ) : null}
            </div>
            <p className='exp-label'>{label}</p>
            <p className='exp-detail'>{detail}</p>
            <p className='exp-date'>{date}</p>
        </div>
    );
};