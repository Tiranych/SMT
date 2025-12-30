import { Footer } from '@components/footer';
import { Header } from '@components/header';
import { Main } from '@components/main';

import { Wrapper } from './page.css';

const Page = () => {
	return (
		<>
			<div className={Wrapper}>
				<Header />
				<Main />
				<Footer />
			</div>
		</>
	);
};

export default Page;
