import { Anchor, Box, Button, Content, Icons, Inner, Item, Tel, Wrapper } from './Menu.css';

import { MenuProps } from './types';

export const Menu = ({ isMobile, isOpen, setIsOpen }: MenuProps) => {
	const handleClick = () => {
		setIsOpen((prev) => !prev);
	};

	return (
		<nav className={`${Wrapper({ transform: isOpen ? 'none' : 'full' })}`}>
			<ul className={`${Inner({ flexDirection: isMobile ? 'column' : 'row' })}`}>
				<li className={Item}>
					<a className={Anchor} href='#technique' onClick={handleClick}>
						Спецтехника
					</a>
				</li>
				<li className={Item}>
					<a className={Anchor} href='#about-us' onClick={handleClick}>
						О нас
					</a>
				</li>
				<li className={Item}>
					<a className={Anchor} href='#contacts' onClick={handleClick}>
						Контакты
					</a>
				</li>
			</ul>
			<div className={Box}>
				<div className={Content}>
					<a className={`${Anchor} ${Tel}`} href='tel:89255856361'>
						+7 (925) 585-63-61
					</a>
					<a className={`${Anchor} ${Tel}`} href='tel:89266007707'>
						+7 (926) 600-77-07
					</a>
					<div className={Icons}>
						<a href='https://wa.me/+79255856361'>
							<img src='/assets/icons/whatsapp-icon.svg' alt='Whatsapp icon' />
						</a>
						<a href='https://t.me/susannakrimyan'>
							<img src='/assets/icons/telegram-icon.svg' alt='Telegram icon' />
						</a>
					</div>
				</div>
				<a
					className={Button}
					href='https://yandex.ru/business/widget/request/company/46134038520'
					target='_blank'
				>
					Заказать звонок
				</a>
			</div>
		</nav>
	);
};
