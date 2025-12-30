import { recipe } from '@vanilla-extract/recipes';

import { buttonBackgroundColor, buttonBorderColor, footerBackgroundColor } from '@utils/variables';

import { style } from '@vanilla-extract/css';

export const Wrapper = recipe({
	base: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		gap: '50px',

		'@media': {
			'(max-width: 1000px)': {
				position: 'fixed',
				top: 0,
				bottom: 0,
				right: 0,
				zIndex: 150,
				justifyContent: 'center',
				flexDirection: 'column',
				background: '#fff',
				minWidth: '250px',
				backgroundColor: footerBackgroundColor,
				transition: 'transform 0.3s',
				marginBottom: 0,
			},
			'(max-width: 400px)': {
				width: '100%',
			},
		},
	},
	variants: {
		transform: {
			none: {
				'@media': {
					'(max-width: 1000px)': {
						transform: 'translateX(0%)',
					},
				},
			},
			full: {
				'@media': {
					'(max-width: 1000px)': {
						transform: 'translateX(100%)',
					},
				},
			},
		},
	},
});

export const Inner = recipe({
	base: {
		display: 'flex',
		gap: '30px 20px',
		alignItems: 'center',
	},
	variants: {
		flexDirection: {
			column: {
				flexDirection: 'column',
			},
			row: {
				flexDirection: 'row',
			},
		},
	},
});

export const Item = style({
	fontSize: '22px',
});

export const Anchor = style({
	transition: 'background 0.5s, border-color 0.5s, color 0.5s',
	padding: '5px 10px',
	borderRadius: '12px',
	border: '2px solid transparent',

	':hover': {
		borderColor: buttonBorderColor,
		background: buttonBackgroundColor,
		color: buttonBorderColor,
	},
});

export const Box = style({
	display: 'flex',
	gap: '20px 40px',
	fontSize: '20px',

	'@media': {
		'(max-width: 1200px)': {
			flexDirection: 'column',
		},
	},
});

export const Content = style({
	display: 'flex',
	flexDirection: 'column',
	gap: '5px 0',
});

export const Tel = style({
	textAlign: 'center',
	padding: '10px',
});

export const Icons = style({
	display: 'flex',
	alignItems: 'center',
	padding: '5px 10px',
	gap: '0 5px',

	'@media': {
		'(max-width: 1000px)': {
			justifyContent: 'center',
		},
	},
});

export const Button = style({
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	maxWidth: '240px',
	maxHeight: '55px',
	fontSize: '20px',
	padding: '15px 30px',
	color: buttonBorderColor,
	background: buttonBackgroundColor,
	borderRadius: '12px',
	border: '2px solid',
	transition: 'transform 0.3s',

	':hover': {
		transform: 'scale(1.1)',
	},

	selectors: {
		'& + &': {
			marginTop: '10px',
		},
	},
});
