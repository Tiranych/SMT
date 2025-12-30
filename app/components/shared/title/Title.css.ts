import { style } from '@vanilla-extract/css';

export const StyledTitle = style({
	fontSize: '50px',

	'@media': {
		'(max-width: 700px)': {
			fontSize: '40px',
		},
	},
});
