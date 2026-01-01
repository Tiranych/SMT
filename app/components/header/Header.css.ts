import { recipe } from '@vanilla-extract/recipes';

import { style } from '@vanilla-extract/css';

export const Wrapper = style({
	background: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.4)), url('/assets/images/header_image.jpg')`,
	backgroundSize: 'cover',
	backgroundRepeat: 'no-repeat',
	backgroundPosition: 'center',
	minHeight: '681px',
	padding: '50px 0',

	'@media': {
		'(max-width: 768px)': {
			background: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/assets/images/header_image.jpg')`,
			backgroundSize: 'cover',
			backgroundRepeat: 'no-repeat',
			backgroundPosition: 'center',
		},
	},
});

export const HeaderTop = style({
	display: 'flex',
	justifyContent: 'space-between',
	alignItems: 'center',
});

export const LogoBox = style({
	display: 'flex',
	alignItems: 'center',
	maxWidth: '280px',
});

export const Img = style({
	maxWidth: '32px',
	maxHeight: '32px',
});

export const CompanyName = style({
	fontSize: '28px',
	marginLeft: '10px',
	marginTop: '6px',
});

export const HeaderBody = style({
	paddingTop: '30px',

	'@media': {
		'(max-width: 1000px)': {
			paddingTop: '70px',
		},
		'(max-width: 600px) ': {
			paddingTop: '40px',
		},
	},
});

export const Title = style({
	fontSize: '70px',
	fontWeight: '700',
	maxWidth: '900px',
	paddingBottom: '20px',

	'@media': {
		'(max-width: 1200px)': {
			fontSize: '60px',
		},

		'(max-width: 700px)': {
			fontSize: '50px',
			paddingBottom: '10px',
		},
	},
});

export const Advantages = style({
	display: 'flex',
	justifyContent: 'space-between',
	paddingTop: '20px',
	gap: '15px',

	'@media': {
		'(max-width: 1200px)': {
			flexWrap: 'wrap',
		},

		'(max-width: 700px)': {
			paddingTop: '10px',
		},
	},
});

export const Subtitle = recipe({
	base: {
		fontSize: '20px',
		lineHeight: '125%',
		maxWidth: '380px',
	},
	variants: {
		display: {
			none: {
				'@media': {
					'(max-width: 700px)': {
						display: 'none',
					},
				},
			},
			black: {
				'@media': {
					'(max-width: 700px)': {
						display: 'black',
					},
				},
			},
		},
	},
});
