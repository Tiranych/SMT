import { Container } from '@components/shared/container';
import { Section } from '@components/shared/section';
import { Title } from '@components/shared/title';
import { SectionComponentProps } from '@components/shared/types';

import { Requisites } from './requisites';
import { YandexMap } from './yandex-map';

export const Contacts = ({ title }: SectionComponentProps) => {
	return (
		<Section id='contacts'>
			<Container>
				<Title title={title} />
			</Container>
			<YandexMap />
			<Container>
				<Requisites />
			</Container>
		</Section>
	);
};
