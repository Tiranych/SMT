import { Wrapper } from './Main.css';

import { AboutUs } from './about-us';
import { Contacts } from './contacts';
import { Reviews } from './reviews';
import { Technique } from './technique';

export const Main = () => {
	return (
		<main className={Wrapper}>
			<Technique title='Спецтехника' />
			<AboutUs title='О нас' />
			<Reviews title='Отзывы' />
			<Contacts title='Контакты' />
		</main>
	);
};
