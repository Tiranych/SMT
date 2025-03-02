import styled from 'styled-components';

import { buttonBackgroundColor, buttonBorderColor, footerBackgroundColor } from '@utils/variables';

export const Wrapper = styled.div<{ $isOpen: boolean }>`
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 50px;

	@media (max-width: 1000px) {
		position: fixed;
		top: 0;
		bottom: 0;
		right: 0;
		z-index: 150;
		justify-content: center;
		flex-direction: column;
		background: #fff;
		min-width: 250px;
		background-color: ${footerBackgroundColor};
		transform: ${({ $isOpen }) => ($isOpen ? 'translateX(0%)' : 'translateX(100%)')};
		transition: transform 0.3s;
		margin-bottom: 0;
	}

	@media (max-width: 400px) {
		width: 100%;
	}
`;

export const Inner = styled.ul<{ $isOpen: boolean }>`
	display: flex;
	flex-direction: ${({ $isOpen }) => ($isOpen ? 'column' : 'row')};
	gap: 30px 20px;
	align-items: center;
`;

export const Item = styled.li`
	font-size: 22px;
`;

export const Anchor = styled.a`
	transition:
		background 0.5s,
		border-color 0.5s,
		color 0.5s;
	padding: 5px 10px;
	border-radius: 12px;
	border: 2px solid transparent;

	&:hover {
		border-color: ${buttonBorderColor};
		background: ${buttonBackgroundColor};
		color: ${buttonBorderColor};
	}
`;

export const Box = styled.div`
	display: flex;
	gap: 20px 40px;
	font-size: 20px;

	@media (max-width: 1200px) {
		flex-direction: column;
	}
`;

export const Content = styled.div`
	display: flex;
	flex-direction: column;
	gap: 5px 0;
`;

export const Tel = styled(Anchor)`
	text-align: center;
	padding: 10px;
`;

export const Icons = styled.div`
	display: flex;
	align-items: center;
	padding: 5px 10px;
	gap: 0 5px;

	@media (max-width: 1000px) {
		justify-content: center;
	}
`;

export const Button = styled.a`
	display: flex;
	align-items: center;
	justify-content: center;
	max-width: 240px;
	max-height: 55px;
	font-size: 20px;
	padding: 15px 30px;
	color: ${buttonBorderColor};
	background: ${buttonBackgroundColor};
	border-radius: 12px;
	border: 2px solid;
	transition: transform 0.3s;

	&:hover {
		transform: scale(1.1);
	}

	& + & {
		margin-top: 10px;
	}
`;
