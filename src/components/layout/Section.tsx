import './Section.css';

interface IProps {
    sectionTitle: string;
    sectionContent: React.ReactNode;
    className?: string;
}

export const Section = (props: IProps) => {
    const {sectionTitle, sectionContent, className} = props;

    const starVectorSVG = `${process.env.PUBLIC_URL}/images/StarVector.svg`;
    const starDividerSVG = `${process.env.PUBLIC_URL}/images/StarDivider.svg`;

    return (
        <div className={'section-container ' + className}>
            <div className='section-title'>
                <img src={starVectorSVG} className='section-star' />
                <h2>{sectionTitle}</h2>
                <img src={starVectorSVG} className='section-star' />
            </div>
            <div className='section'>
                {sectionContent}
            </div>
            <div className='section-divider'>
                <img src={starDividerSVG}/>
            </div>
        </div>
    )
};