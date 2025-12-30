import { style } from '@vanilla-extract/css';

export const CardList = style({
	display: 'grid',
	gridTemplateColumns: 'repeat(3, 1fr)',
	gap: '50px 100px',
	paddingTop: '30px',

	'@media': {
		'(max-width: 1200px)': {
			gridTemplateColumns: 'repeat(2, 1fr)',
		},

		'(max-width: 1000px)': {
			gap: '50px',
		},

		'(max-width: 700px)': {
			gap: '15px',
			gridTemplateColumns: 'repeat(1, 1fr)',
		},
	},
});
