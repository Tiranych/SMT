import React from 'react';

import { Container } from '@components/shared/container';
import { Section } from '@components/shared/section';
import { Title } from '@components/shared/title';
import { SectionComponentProps } from '@components/shared/types';

export const Technique = ({ title }: SectionComponentProps) => {
	return (
		<Section id='technique'>
			<Container>
				<Title title={title} />
			</Container>
		</Section>
	);
};
