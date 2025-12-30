import { recipe } from '@vanilla-extract/recipes';

import { footerBackgroundColor } from '@utils/variables';

import { style } from '@vanilla-extract/css';

export const parent = style({});

export const Button = recipe({
	base: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		position: 'fixed',
		zIndex: 200,
		right: '5px',
		width: '60px',
		height: '60px',
		border: '1px solid',
		borderColor: footerBackgroundColor,
		borderRadius: '50%',
		transition: 'all 0.3s',

		'@media': {
			'(max-width: 400px)': {
				width: '50px',
				height: '50px',
				right: '5px',
			},
		},

		selectors: {
			'&::before, &::after': {
				content: '',
				display: 'block',
				width: '30px',
				height: '4px',
				background: 'rgb(30, 27, 27)',
				borderRadius: '5px',
			},
		},
	},

	variants: {
		position: {
			fixed: {
				selectors: {
					'&::before, &::after': {
						position: 'fixed',
					},
				},
			},
			static: {
				selectors: {
					'&::before, &::after': {
						position: 'static',
					},
				},
			},
		},
		transformBefore: {
			rotate: {
				selectors: {
					'&::before': {
						transform: 'rotate(45deg)',
					},
				},
			},
			'no-rotate': {
				selectors: {
					'&::before': {
						transform: 'rotate(0deg)',
					},
				},
			},
		},
		transformAfter: {
			rotate: {
				selectors: {
					'&::after': {
						transform: 'rotate(-45deg)',
					},
				},
			},
			'no-rotate': {
				selectors: {
					'&::after': {
						transform: 'rotate(0deg)',
					},
				},
			},
		},
	},
});

export const Span = recipe({
	base: {
		selectors: {
			[`${parent} &`]: {
				margin: '5px 0',
				width: '30px',
				height: '4px',
				background: 'rgb(30, 27, 27)',
				borderRadius: '5px',
			},
		},
	},
	variants: {
		display: {
			none: {
				selectors: {
					[`${parent} &`]: {
						display: 'none',
					},
				},
			},
			block: {
				selectors: {
					[`${parent} &`]: {
						display: 'block',
					},
				},
			},
		},
	},
});
