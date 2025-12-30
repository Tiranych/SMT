import { footerBackgroundColor } from '@utils/variables';

import { style } from '@vanilla-extract/css';

export const Inner = style({
	padding: '20px 0',
	backgroundColor: footerBackgroundColor,
});

export const Wrapper = style({
	display: 'flex',
	justifyContent: 'space-between',
	alignItems: 'center',
	gap: '20px',

	'@media': {
		'(max-width: 450px)': {
			justifyContent: 'center',
			flexWrap: 'wrap',
		},
	},
});

export const LogoBox = style({
	display: 'flex',
	gap: '0 10px',
	alignItems: 'center',
});

export const Logo = style({
	maxWidth: '32px',
	maxHeight: '32px',
});

export const CompanyName = style({
	fontSize: '24px',
	marginTop: '5px',
});

export const Menu = style({
	display: 'flex',
	gap: '20px',
	fontSize: '18px',

	'@media': {
		'(max-width: 600px)': {
			flexDirection: 'column',
		},

		'(max-width: 450px)': {
			flexDirection: 'row',
		},
	},
});

export const Icons = style({
	display: 'flex',
	justifyContent: 'flex-end',
	alignItems: 'center',
	marginTop: '5px',
	gap: '0 5px',

	'@media': {
		'(max-width: 600px)': {
			justifyContent: 'flex-start',
			marginTop: '10px',
		},

		'(max-width: 450px)': {
			justifyContent: 'center',
		},
	},
});
