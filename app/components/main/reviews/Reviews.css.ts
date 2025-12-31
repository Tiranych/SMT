import { buttonBorderColor, footerBackgroundColor, mainColor } from '@utils/variables';

import { style } from '@vanilla-extract/css';

export const SliderWrapper = style({
	overflow: 'hidden',
});

export const List = style({
	display: 'grid',
	gridTemplateColumns: 'repeat(3, 1fr)',
	gap: '20px',
	marginTop: '15px',

	'@media': {
		'(max-width: 768px)': {
			gridTemplateColumns: 'repeat(2, 1fr)',
		},
		'(max-width: 580px)': {
			gridTemplateColumns: 'repeat(1, 1fr)',
		},
	},
});

export const Item = style({
	display: 'flex',
	flexDirection: 'column',
	gap: '20px',
	backgroundColor: mainColor,
	boxShadow: `0px 0px 5px ${footerBackgroundColor}`,
	padding: '20px',
	borderRadius: '10px',
	fontSize: '20px',
	lineHeight: '22px',
});

export const Comment = style({
	fontWeight: '700',
});

export const Rate = style({
	fontWeight: '700',
});

export const Details = style({
	display: 'flex',
	justifyContent: 'space-between',
	alignItems: 'center',
	marginTop: '15px',
});

export const Star = style({
	selectors: {
		'& + &': {
			marginLeft: '5px',
		},
	},
	'::before': {
		content: '★',
		display: 'inline-block',
		fontSize: '25px', // На самом деле тут увеличиваем размер звездочек
		lineHeight: '25px', // На самом деле тут увеличиваем размер звездочек
		color: buttonBorderColor,
	},
});
