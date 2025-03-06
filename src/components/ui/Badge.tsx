import './Badge.css'

interface IProps {
    label: string;
}

export const Badge = (props: IProps) => {
    const {label} = props;
    return (
        <p className='badge'>{label}</p>
    );
};