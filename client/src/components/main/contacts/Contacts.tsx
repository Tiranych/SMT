import React from 'react';

import { Section } from '@components/shared/section';
import { Title } from '@components/shared/title';

type ContactsProps = {
	title: string;
};

export const Contacts = ({ title }: ContactsProps) => {
	return (
		<Section id='contacts'>
			<Title title={title} />
		</Section>
	);
};
