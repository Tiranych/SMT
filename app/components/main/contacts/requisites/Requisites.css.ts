import { style } from '@vanilla-extract/css';

export const Subtitle = style({
	fontSize: '34px',
	marginBottom: '30px',
});

export const CompanyName = style({
	fontSize: '22px',
	fontWeight: 700,
	marginBottom: '30px',
});

export const List = style({
	display: 'flex',
	gap: '30px 100px',
	justifyContent: 'space-between',
	flexWrap: 'wrap',
});

export const Item = style({
	flexGrow: 1,
});

export const Box = style({
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'space-between',
	width: '100%',
	gap: '0 100px',
	marginBottom: '30px',

	':last-child': {
		marginBottom: 0,
	},

	'@media': {
		'(max-width: 1200px)': {
			gap: '0 30px',
		},
	},
});

export const Text = style({
	fontSize: '18px',
	fontWeight: 700,

	selectors: {
		'& + &': {
			marginTop: '10px',
		},
	},

	'@media': {
		'(max-width: 450px)': {
			fontSize: '16px',
		},
	},
});

export const Value = style({
	fontSize: '18px',
	lineHeight: '24px',
	maxWidth: '300px',
	textAlign: 'end',
	wordBreak: 'auto-phrase',

	'@media': {
		'(max-width: 450px)': {
			fontSize: '16px',
			lineHeight: '20px',
		},
	},
});
