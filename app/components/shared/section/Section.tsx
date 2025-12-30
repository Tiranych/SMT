import { ReactNode } from 'react';

import { StyledSection } from './Section.css';

type SectionProps = {
	children: ReactNode;
	id: string;
};

export const Section = ({ children, id }: SectionProps) => {
	return (
		<section className={StyledSection} id={id}>
			{children}
		</section>
	);
};
