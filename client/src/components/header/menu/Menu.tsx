import React from 'react';

import { Anchor, Box, Button, Content, Icons, Inner, Item, Tel, Wrapper } from './Menu.styled';
import { MenuProps } from './types';

export const Menu = ({ isMobile, isOpen, setIsOpen }: MenuProps) => {
	const handleClick = () => {
		setIsOpen((prev) => !prev);
	};

	return (
		<Wrapper $isOpen={isOpen}>
			<Inner $isMobile={isMobile}>
				<Item>
					<Anchor href='#technique' onClick={handleClick}>
						Спецтехника
					</Anchor>
				</Item>
				<Item>
					<Anchor href='#about-us' onClick={handleClick}>
						О нас
					</Anchor>
				</Item>
				<Item>
					<Anchor href='#contacts' onClick={handleClick}>
						Контакты
					</Anchor>
				</Item>
			</Inner>
			<Box>
				<Content>
					<Tel href='tel:89255856361'>+7 (925) 585-63-61</Tel>
					<Tel href='tel:89266007707'>+7 (926) 600-77-07</Tel>
					<Icons>
						<a href='https://wa.me/+79255856361'>
							<img src='./assets/icons/whatsapp-icon.svg' alt='Whatsapp icon' />
						</a>
						<a href='https://t.me/susannakrimyan'>
							<img src='./assets/icons/telegram-icon.svg' alt='Telegram icon' />
						</a>
					</Icons>
				</Content>
				<Button
					href='https://yandex.ru/business/widget/request/company/46134038520'
					target='_blank'
				>
					Заказать звонок
				</Button>
			</Box>
		</Wrapper>
	);
};
