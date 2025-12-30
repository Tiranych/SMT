import { style } from '@vanilla-extract/css';

export const StyledSection = style({
	padding: '30px 0',

	'@media': {
		'(max-width: 700px)': {
			padding: '15px 0',
		},
	},
});
