import React from 'react';

import { Container } from '@components/shared/container';

import { Wrapper } from './Main.styled';
import { AboutUs } from './about-us';
import { Contacts } from './contacts';
import { Technique } from './technique';

export const Main = () => {
	return (
		<Wrapper>
			<Container>
				<Technique title='Спецтехника' />
				<AboutUs title='О нас' />
				<Contacts title='Контакты' />
			</Container>
		</Wrapper>
	);
};
