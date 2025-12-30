import { Wrapper } from './Main.css';

import { AboutUs } from './about-us';
import { Contacts } from './contacts';
import { Technique } from './technique';

export const Main = () => {
	return (
		<main className={Wrapper}>
			<Technique title='Спецтехника' />
			<AboutUs title='О нас' />
			<Contacts title='Контакты' />
		</main>
	);
};
