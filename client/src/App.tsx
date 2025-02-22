import React from 'react';

import { Footer } from '@components/footer';
import { Header } from '@components/header';
import { Main } from '@components/main';

import { Global, Wrapper } from './App.styled';

const App = () => {
	return (
		<>
			<Global />
			<Wrapper>
				<Header />
				<Main />
				<Footer />
			</Wrapper>
		</>
	);
};

export default App;
