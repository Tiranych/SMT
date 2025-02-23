import React, { ReactNode } from 'react';

import { StyledSection } from './Section.styled';

type SectionProps = {
	children: ReactNode;
	id: string;
};

export const Section = ({ children, id }: SectionProps) => {
	return <StyledSection id={id}>{children}</StyledSection>;
};
