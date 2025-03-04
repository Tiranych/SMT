import styled from 'styled-components';

import { footerBackgroundColor } from '@utils/variables';

export const Button = styled.button<{ $isClose: boolean }>`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	position: fixed;
	z-index: 200;
	right: 5px;
	width: 60px;
	height: 60px;
	border: 1px solid;
	border-color: ${footerBackgroundColor};
	border-radius: 50%;
	transition: all 0.3s;

	& span {
		display: ${({ $isClose }) => ($isClose ? 'none' : 'block')};
		margin: 5px 0;
		width: 30px;
		height: 4px;
		background: rgb(30, 27, 27);
		border-radius: 5px;
	}

	&::before,
	&::after {
		content: '';
		display: block;
		width: 30px;
		height: 4px;
		background: rgb(30, 27, 27);
		border-radius: 5px;
		position: ${({ $isClose }) => ($isClose ? 'fixed' : 'static')};
	}

	&::before {
		transform: ${({ $isClose }) => ($isClose ? 'rotate(45deg)' : 'rotate(0deg)')};
	}

	&::after {
		transform: ${({ $isClose }) => ($isClose ? 'rotate(-45deg)' : 'rotate(0deg)')};
	}

	@media (max-width: 400px) {
		width: 50px;
		height: 50px;
		right: 5px;
	}
`;
