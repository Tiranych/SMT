import React from 'react';

import { Container } from '@components/shared/container';
import { Section } from '@components/shared/section';
import { Title } from '@components/shared/title';
import { SectionComponentProps } from '@components/shared/types';

import { Card } from './Card';
import { CardList } from './Technique.styled';
import { techniqueData } from './mock';

export const Technique = ({ title }: SectionComponentProps) => {
	return (
		<Section id='technique'>
			<Container>
				<Title title={title} />
				<CardList>
					{techniqueData.map((technique) => {
						return <Card key={technique.id} technique={technique} />;
					})}
				</CardList>
			</Container>
		</Section>
	);
};
