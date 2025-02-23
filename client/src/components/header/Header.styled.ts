import styled from 'styled-components';

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
		color 0.5s;
	padding: 5px 10px;
	border-radius: 12px;

	&:hover {
		background: rgba(0, 0, 0, 0.856);
		color: rgba(255, 197, 6, 0.884);
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
	display: block;
	transition: transform 0.3s;
	max-width: 240px;
	max-height: 53px;

	font-size: 20px;
	padding: 15px 30px;
	color: rgba(255, 197, 6, 0.884);
	background: rgba(0, 0, 0, 0.856);
	border-radius: 12px;
	border: 2px solid;

	&:hover {
		transform: scale(1.1);
	}
`;

export const HeaderBody = styled.div`
	padding: 80px 0;
`;

export const Title = styled.h1`
	font-size: 50px;
	line-height: 55px;
	font-weight: 700;
	max-width: 600px;
	padding-bottom: 30px;
`;

export const Advantages = styled.div`
	display: flex;
	justify-content: space-between;
	padding-top: 30px;
`;

export const Subtitle = styled.h3`
	font-size: 20px;
	line-height: 110%;
	max-width: 380px;
`;
