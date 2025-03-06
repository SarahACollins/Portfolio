import { useMemo } from "react";
import { TitleStack } from "../ui/TitleStack";
import { Badge } from "../ui/Badge";
import { Direction } from '../Interfaces';
import { DirectionalArrow } from '../ui/DirectionalArrow';

import './ProjectCard.css';

interface IProps {
    title: string;
    date: string;
    label: string;
    detail: string;
    badges?: string[];
    onClick?: () => void;
}

export const ProjectCard = (props: IProps) => {
    const {title, date, label, detail, badges, onClick} = props;
    const isLinkDefined = onClick !== undefined;
    const cardClass = `prj-card ${isLinkDefined ? 'prj-card-clickable' : ''}`;

    const badgeComponents = useMemo(() =>
        badges?.map((badge, index) => (
            <Badge
                key={index}
                label={badge}
            />
        )),
        [badges]
    );

    return (
        <div className={cardClass} onClick={isLinkDefined ? onClick: undefined}>
            <div className='prj-header'>
                <TitleStack title={title} aboveText={date} className={'prj-card-title-stack'} />
                {isLinkDefined ? (
                    <span className='link-arrow'>
                        <DirectionalArrow direction={Direction.Up} />
                    </span>
                ) : null}
            </div>
            <p className='prj-label'>{label}</p>
            <p className='prj-detail'>{detail}</p>
            <div className='badge-container'>
                {badges ? badgeComponents : null}
            </div>
        </div>
    );
};
