import { Dispatch, SetStateAction } from 'react';

export type MenuProps = {
	isMobile: boolean;
	isOpen: boolean;
	setIsOpen: Dispatch<SetStateAction<boolean>>;
};
