import React from 'react';

import { Section } from '@components/shared/section';
import { Title } from '@components/shared/title';

type TechniqueProps = {
	title: string;
};

export const Technique = ({ title }: TechniqueProps) => {
	return (
		<Section id='technique'>
			<Title title={title} />
		</Section>
	);
};
