import React from 'react';

import { Button } from './Burger.styled';
import { BurgerProps } from './types';

export const Burger = ({ isOpen, setIsOpen }: BurgerProps) => {
	const handleClick = () => {
		setIsOpen((prev) => !prev);
	};

	return (
		<Button $isClose={isOpen} onClick={handleClick}>
			<span></span>
		</Button>
	);
};
