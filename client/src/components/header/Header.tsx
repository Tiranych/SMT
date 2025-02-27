import React from 'react';

import { Container } from '@components/shared/container';

import {
	Advantages,
	Anchor,
	Box,
	Button,
	CompanyName,
	Content,
	HeaderBody,
	HeaderTop,
	Icons,
	Img,
	Item,
	LogoBox,
	Menu,
	Subtitle,
	Tel,
	Title,
	Wrapper,
} from './Header.styled';

export const Header = () => {
	return (
		<Wrapper>
			<Container>
				<HeaderTop>
					<LogoBox href='/'>
						<Img src='../../assets/icons/favicon_white.svg' alt='Logo' />
						<CompanyName>Строймегатранс</CompanyName>
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
						<div>
							<Button
								href='https://yandex.ru/business/widget/request/company/46134038520'
								target='_blank'
							>
								Заказать звонок
							</Button>
						</div>
					</Box>
				</HeaderTop>
				<HeaderBody>
					<Title>Аренда спецтехники по Москве и Моcковской области</Title>
					<Advantages>
						<Subtitle>
							Cрочная подача спецтехники с самыми опытными водителями.
						</Subtitle>
						<Subtitle>
							Собственный автопарк техники для любых работ: автокраны, экскаваторы и
							манипуляторы.
						</Subtitle>
						<Subtitle>Мы на рынке уже 20 лет!</Subtitle>
					</Advantages>
				</HeaderBody>
			</Container>
		</Wrapper>
	);
};
