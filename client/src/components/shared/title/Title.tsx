import React from 'react';

import { StyledTitle } from './Title.styled';

type TitleProps = {
	title: string;
};

export const Title = ({ title }: TitleProps) => {
	return <StyledTitle>{title}</StyledTitle>;
};
