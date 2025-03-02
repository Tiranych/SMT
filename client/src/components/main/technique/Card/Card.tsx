import React from 'react';

import { Img, Item, Subtitle, Text } from './Card.styled';
import { CardProps } from './types';

export const Card = ({ technique }: CardProps) => {
	return (
		<Item>
			<Img src={technique.image} alt='Фотография спецтехники' />
			<Subtitle>{technique.type}</Subtitle>
			<Text $isStrong={false} $isBig={true}>
				{technique.name}
			</Text>
			<Text $isStrong={true} $isBig={false}>
				{technique.price}
			</Text>
		</Item>
	);
};
