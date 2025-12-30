import { Button, Span, parent } from './Burger.css';

import { BurgerProps } from './types';

export const Burger = ({ isOpen, setIsOpen }: BurgerProps) => {
	const handleClick = () => {
		setIsOpen((prev) => !prev);
	};

	return (
		<button
			title='Кнопка навигации'
			className={`${Button({
				position: isOpen ? 'fixed' : 'static',
				transformAfter: isOpen ? 'rotate' : 'no-rotate',
				transformBefore: isOpen ? 'rotate' : 'no-rotate',
			})} ${parent}`}
			onClick={handleClick}
		>
			<span className={`${Span({ display: isOpen ? 'none' : 'block' })}`}></span>
		</button>
	);
};
