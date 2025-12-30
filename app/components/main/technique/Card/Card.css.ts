import { recipe } from '@vanilla-extract/recipes';

import { style } from '@vanilla-extract/css';

export const Item = style({
	width: '100%',
	minHeight: '415px',

	'@media': {
		'(max-width: 1200px)': {
			minHeight: '510px',
		},

		'(max-width: 1000px)': {
			minHeight: '415px',
		},

		'(max-width: 700px)': {
			minHeight: '565px',
		},
	},
});

export const Img = style({
	width: '100%',
	height: '100%',
	maxHeight: '300px',
	objectFit: 'cover',
	borderRadius: '12px',
	transition: 'transform 0.4s',

	':hover': {
		transform: 'scale(1.025)',
	},

	'@media': {
		'(max-width: 1200px)': {
			maxHeight: '400px',
		},

		'(max-width: 1000px)': {
			maxHeight: '300px',
		},

		'(max-width: 700px)': {
			maxHeight: '450px',
		},
	},
});

export const Subtitle = style({
	padding: '10px 0 5px',
	fontSize: '32px',

	'@media': {
		'(max-width: 400px)': {
			fontSize: '28px',
		},
	},
});

export const Text = recipe({
	base: {
		padding: '5px 0',
	},
	variants: {
		fontSize: {
			'24px': {
				fontSize: '24px',
			},
			'20px': {
				fontSize: '20px',
			},
		},
		fontWeight: {
			'700': {
				fontWeight: 700,
			},
			'400': {
				fontWeight: 400,
			},
		},
	},
});
