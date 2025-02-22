import React from 'react';

import { Container } from '@components/shared/container';

import {
	Anchor,
	Box,
	Button,
	Content,
	Icons,
	Img,
	Inner,
	Item,
	LogoBox,
	Menu,
	Tel,
	Title,
	Wrapper,
} from './Header.styled';

export const Header = () => {
	return (
		<Wrapper>
			<Container>
				<Inner>
					<LogoBox href='/'>
						<Img src='../../assets/icons/favicon_white.svg' alt='Logo' />
						<Title>Строймегатранс</Title>
					</LogoBox>
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
					<Box>
						<Content>
							<Tel href='tel:89255856361'>+7 (925) 585-63-61</Tel>
							<Tel href='tel:89266007707'>+7 (926) 600-77-07</Tel>
							<Icons>
								<a href='https://wa.me/89255856361'>
									<img
										src='../../assets/icons/whatsapp-icon.svg'
										alt='Whatsapp icon'
									/>
								</a>
								<a href='https://t.me/susannakrimyan'>
									<img
										src='../../assets/icons/telegram-icon.svg'
										alt='Telegram icon'
									/>
								</a>
							</Icons>
						</Content>
						<Button href='#contacts'>Свяжитесь с нами</Button>
					</Box>
				</Inner>
			</Container>
		</Wrapper>
	);
};
