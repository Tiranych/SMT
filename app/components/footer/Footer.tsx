import { Container } from '@components/shared/container';

import { CompanyName, Icons, Inner, Logo, LogoBox, Menu, Wrapper } from './Footer.css';

export const Footer = () => {
	return (
		<footer className={Inner}>
			<Container>
				<div className={Wrapper}>
					<a className={LogoBox} href='/'>
						<img className={Logo} src='./assets/icons/favicon-white.svg' alt='Logo' />
						<span className={CompanyName}>Строймегатранс</span>
					</a>
					<div>
						<ul className={Menu}>
							<li>
								<a href='#technique'>Спецтехника</a>
							</li>
							<li>
								<a href='#about-us'>О нас</a>
							</li>
							<li>
								<a href='#contacts'>Контакты</a>
							</li>
						</ul>
						<div className={Icons}>
							<a href='https://wa.me/+79255856361'>
								<img src='/assets/icons/whatsapp-icon.svg' alt='Whatsapp icon' />
							</a>
							<a href='https://t.me/susannakrimyan'>
								<img src='/assets/icons/telegram-icon.svg' alt='Telegram icon' />
							</a>
						</div>
					</div>
				</div>
			</Container>
		</footer>
	);
};
