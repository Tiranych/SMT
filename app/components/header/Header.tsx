'use client';

import { useEffect, useState } from 'react';

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
import { Anchor, Button, Content, Tel } from './menu/Menu.css';

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
						<img className={Img} src='/assets/icons/favicon-white.svg' alt='Logo' />
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
						{isMobile && (
							<>
								<div className={Content}>
									<a className={`${Anchor} ${Tel}`} href='tel:89255856361'>
										+7 (925) 585-63-61
									</a>
									<a className={`${Anchor} ${Tel}`} href='tel:89266007707'>
										+7 (926) 600-77-07
									</a>
								</div>
								<a
									className={Button}
									href='https://yandex.ru/business/widget/request/company/46134038520'
									target='_blank'
								>
									Заказать звонок
								</a>
							</>
						)}
					</div>
				</div>
			</Container>
		</header>
	);
};
