import { Img, Item, Subtitle, Text } from './Card.css';

import { CardProps } from './types';

export const Card = ({ technique }: CardProps) => {
	return (
		<li className={Item}>
			<img className={Img} src={technique.image} alt='Фотография спецтехники' />
			<p className={Subtitle}>{technique.type}</p>
			<p
				className={`${Text({
					fontSize: '20px',
					fontWeight: '400',
				})}`}
			>
				{technique.name}
			</p>
			<p
				className={`${Text({
					fontSize: '24px',
					fontWeight: '700',
				})}`}
			>
				{technique.price}
			</p>
		</li>
	);
};
