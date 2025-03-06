import { IconLinks } from '../ui/IconLinks';
import './ProfileCard.css'

interface IProps {
    name: string;
    title: string;
}

export const ProfileCard = (props: IProps) => {
    const {name, title} = props;

    return (
        <div className='profile-card'>
            <h1>{name}</h1>
            <p>{title}</p>
            <IconLinks />
        </div>
    );
};