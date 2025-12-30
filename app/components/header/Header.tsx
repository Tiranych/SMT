'use client';

import { useEffect, useState } from 'react';

import Image from 'next/image';

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
} from './Header.css';

import { Burger } from './burger';
import { Menu } from './menu';

export const Header = () => {
	const [isMobile, setIsMobile] = useState(false);
	const [isOpen, setIsOpen] = useState(false);

	useEffect(() => {
		window.innerWidth < 1000 && setIsMobile(true);
	}, []);

	return (
		<header className={Wrapper}>
			<Container>
				<div className={HeaderTop}>
					<a className={LogoBox} href='/'>
						<Image
							width={43}
							height={43}
							className={Img}
							src='/assets/icons/favicon-white.svg'
							alt='Logo'
						/>
						<span className={CompanyName}>Строймегатранс</span>
					</a>
					{isMobile && <Burger isOpen={isOpen} setIsOpen={setIsOpen} />}
					<Menu isMobile={isMobile} isOpen={isOpen} setIsOpen={setIsOpen} />
				</div>
				<div className={HeaderBody}>
					<h1 className={Title}>Аренда спецтехники по Москве и Моcковской области</h1>
					<div className={Advantages}>
						<p className={`${Subtitle({ display: 'black' })}`}>
							Cрочная подача спецтехники с самыми опытными водителями.
						</p>
						<p className={`${Subtitle({ display: 'black' })}`}>
							Собственный автопарк техники для любых работ: автокраны, экскаваторы и
							манипуляторы.
						</p>
						<p className={`${Subtitle({ display: 'none' })}`}>
							Мы на рынке уже 20 лет!
						</p>
					</div>
				</div>
			</Container>
		</header>
	);
};
