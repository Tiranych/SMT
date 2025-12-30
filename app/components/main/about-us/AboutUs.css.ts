import { style } from '@vanilla-extract/css';

export const Content = style({
	fontSize: '22px',
	lineHeight: '35px',
	margin: '15px 0',

	':last-child': {
		marginBottom: 0,
	},

	'@media': {
		'(max-width: 700px)': {
			fontSize: '20px',
			lineHeight: '30px',
		},
	},
});
