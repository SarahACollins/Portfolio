import './TitleStack.css'

interface IProps {
    title: string;
    aboveText: string;
    className?: string | undefined;
}

export const TitleStack = (props: IProps) => {
    const {title, aboveText: label, className=''} = props;
    return (
        <div className={`title-stack ${className}`}>
            <h3>{title}</h3>
            <p>{label}</p>
        </div>
    );
};