import React, { useEffect, useState } from 'react';

import { Container } from '@components/shared/container';

import {
	Advantages,
	CompanyName,
	HeaderBody,
	HeaderTop,
	Img,
	LogoBox,
	Subtitle,
	Title,
	Wrapper,
} from './Header.styled';
import { Burger } from './burger';
import { Menu } from './menu';

export const Header = () => {
	const [isMobile, setIsMobile] = useState(false);
	const [isOpen, setIsOpen] = useState(false);

	useEffect(() => {
		window.innerWidth < 1000 && setIsMobile(true);
	}, []);

	return (
		<Wrapper>
			<Container>
				<HeaderTop>
					<LogoBox href='/'>
						<Img src='./assets/icons/favicon_white.svg' alt='Logo' />
						<CompanyName>Строймегатранс</CompanyName>
					</LogoBox>
					{isMobile && <Burger isOpen={isOpen} setIsOpen={setIsOpen} />}
					<Menu isOpen={isOpen} setIsOpen={setIsOpen} />
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
						<Subtitle $hide>Мы на рынке уже 20 лет!</Subtitle>
					</Advantages>
				</HeaderBody>
			</Container>
		</Wrapper>
	);
};
