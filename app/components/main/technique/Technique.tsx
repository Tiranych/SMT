import { Container } from '@components/shared/container';
import { Section } from '@components/shared/section';
import { Title } from '@components/shared/title';
import { SectionComponentProps } from '@components/shared/types';

import { CardList } from './Technique.css';

import { Card } from './Card';
import { techniqueData } from './mock';

export const Technique = ({ title }: SectionComponentProps) => {
	return (
		<Section id='technique'>
			<Container>
				<Title title={title} />
				<ul className={CardList}>
					{techniqueData.map((technique) => {
						return <Card key={technique.id} technique={technique} />;
					})}
				</ul>
			</Container>
		</Section>
	);
};
