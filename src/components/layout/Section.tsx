import './Section.css';
import StarVector from '../../images/StarVector.svg';
import StarDivider from '../../images/StarDivider.svg';

interface IProps {
    sectionTitle: string;
    sectionContent: React.ReactNode;
    className?: string;
}

export const Section = (props: IProps) => {
    const {sectionTitle, sectionContent, className} = props;

    return (
        <div className={'section-container ' + className}>
            <div className='section-title'>
                <img src={StarVector} className='section-star' />
                <h2>{sectionTitle}</h2>
                <img src={StarVector} className='section-star' />
            </div>
            <div className='section'>
                {sectionContent}
            </div>
            <div className='section-divider'>
                <img src={StarDivider}/>
            </div>
        </div>
    )
};