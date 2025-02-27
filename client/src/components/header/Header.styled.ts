import styled from 'styled-components';

import { buttonBackgroundColor, buttonBorderColor } from '@utils/variables';

export const Wrapper = styled.header`
	background:
		linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.2)),
		url('../assets/images/header_image.jpg');
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center;
	min-height: 591px;
	padding: 50px 0;
`;

export const HeaderTop = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const LogoBox = styled.a`
	display: flex;
	align-items: center;
	max-width: 280px;
`;

export const Img = styled.img`
	max-width: 32px;
	max-height: 32px;
`;

export const CompanyName = styled.span`
	font-size: 28px;
	margin-left: 10px;
	margin-top: 6px;
`;

export const Menu = styled.ul`
	display: flex;
	gap: 0 20px;
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
	gap: 0 40px;
	font-size: 20px;
`;

export const Content = styled.div`
	display: flex;
	flex-direction: column;
	gap: 5px 0;
`;

export const Tel = styled(Anchor)`
	padding: 10px;
`;

export const Icons = styled.div`
	display: flex;
	align-items: center;
	padding: 5px 10px;
	gap: 0 5px;
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

export const HeaderBody = styled.div`
	padding-top: 30px;
`;

export const Title = styled.h1`
	font-size: 70px;
	font-weight: 700;
	max-width: 900px;
	padding-bottom: 30px;
`;

export const Advantages = styled.div`
	display: flex;
	justify-content: space-between;
	padding-top: 30px;
`;

export const Subtitle = styled.h3`
	font-size: 20px;
	line-height: 125%;
	max-width: 380px;
`;
