import { ReactNode } from 'react';

import { Wrapper } from './Container.css';

type ContainerProps = {
	children: ReactNode;
};

export const Container = ({ children }: ContainerProps) => {
	return <div className={Wrapper}>{children}</div>;
};
