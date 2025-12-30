import { mainBackgroundColor, mainColor } from '@utils/variables';

import { globalStyle, style } from '@vanilla-extract/css';

globalStyle('*', {
	margin: 0,
	padding: 0,
	border: 0,
});

globalStyle('*, *::before, *::after', {
	MozBoxSizing: 'border-box',
	WebkitBoxSizing: 'border-box',
	boxSizing: 'border-box',
});

globalStyle(':focus, :active', {
	outline: 'none',
});

globalStyle('a:focus, a:active', {
	outline: 'none',
});

globalStyle('nav, footer, header, aside', {
	display: 'block',
});

globalStyle('html, body', {
	height: '100%',
	width: '100%',
	fontSize: '100%',
	lineHeight: 1,
	MozTextSizeAdjust: '100%',
	WebkitTextSizeAdjust: '100%',
});

globalStyle('input, button, textarea', {
	fontFamily: 'inherit',
});

globalStyle('input::-ms-clear', {
	display: 'none',
});

globalStyle('button', {
	cursor: 'pointer',
});

globalStyle('button::-moz-focus-inner', {
	padding: 0,
	border: 0,
});

globalStyle('a, a:visited', {
	textDecoration: 'none',
});

globalStyle('a', {
	color: 'inherit',
});

globalStyle('a:hover', {
	textDecoration: 'none',
});

globalStyle('ul li', {
	listStyle: 'none',
});

globalStyle('img', {
	verticalAlign: 'top',
});

globalStyle('h1,h2,h3,h4,h5,h6', {
	fontSize: 'inherit',
	fontWeight: 'inherit',
});

globalStyle('body, html', {
	fontFamily: 'Vollkorn, sans-serif',
	fontWeight: '400',
	fontSize: '16px',
	color: mainColor,
	backgroundColor: mainBackgroundColor,
	fontVariantNumeric: 'lining-nums',
	scrollBehavior: 'smooth',
});

export const Wrapper = style({
	display: 'flex',
	flexDirection: 'column',
	width: '100%',
	height: '100vh',
});
