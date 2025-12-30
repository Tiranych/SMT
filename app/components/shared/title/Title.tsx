import { StyledTitle } from './Title.css';

type TitleProps = {
	title: string;
};

export const Title = ({ title }: TitleProps) => {
	return <h2 className={StyledTitle}>{title}</h2>;
};
