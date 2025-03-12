import React from 'react';

import { Container } from '@components/shared/container';

import {
	Anchor,
	CompanyName,
	Icons,
	Inner,
	Item,
	Logo,
	LogoBox,
	Menu,
	Wrapper,
} from './Footer.styled';

export const Footer = () => {
	return (
		<Inner>
			<Container>
				<Wrapper>
					<LogoBox href='/'>
						<Logo src='./assets/icons/favicon-white.svg' alt='Logo' />
						<CompanyName>Строймегатранс</CompanyName>
					</LogoBox>
					<div>
						<Menu>
							<Item>
								<Anchor href='#technique'>Спецтехника</Anchor>
							</Item>
							<Item>
								<Anchor href='#about-us'>О нас</Anchor>
							</Item>
							<Item>
								<Anchor href='#contacts'>Контакты</Anchor>
							</Item>
						</Menu>
						<Icons>
							<a href='https://wa.me/+79255856361'>
								<img src='./assets/icons/whatsapp-icon.svg' alt='Whatsapp icon' />
							</a>
							<a href='https://t.me/susannakrimyan'>
								<img src='./assets/icons/telegram-icon.svg' alt='Telegram icon' />
							</a>
						</Icons>
					</div>
				</Wrapper>
			</Container>
		</Inner>
	);
};
