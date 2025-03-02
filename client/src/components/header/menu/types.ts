import { Dispatch, SetStateAction } from 'react';

export type MenuProps = {
	isOpen: boolean;
	setIsOpen: Dispatch<SetStateAction<boolean>>;
};
