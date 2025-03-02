import styled from 'styled-components';

export const Wrapper = styled.header`
	background:
		linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.4)),
		url('./assets/images/header_image.jpg');
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

export const HeaderBody = styled.div`
	padding-top: 30px;

	@media (max-width: 1000px) {
		padding-top: 70px;
	}

	@media (max-width: 600px) {
		padding-top: 40px;
	}
`;

export const Title = styled.h1`
	font-size: 70px;
	font-weight: 700;
	max-width: 900px;
	padding-bottom: 20px;

	@media (max-width: 1200px) {
		font-size: 60px;
	}

	@media (max-width: 700px) {
		font-size: 50px;
		padding-bottom: 10px;
	}
`;

export const Advantages = styled.div`
	display: flex;
	justify-content: space-between;
	padding-top: 20px;
	gap: 15px;

	@media (max-width: 1200px) {
		flex-wrap: wrap;
	}

	@media (max-width: 700px) {
		padding-top: 10px;
	}
`;

export const Subtitle = styled.h3<{ $hide?: boolean }>`
	font-size: 20px;
	line-height: 125%;
	max-width: 380px;

	@media (max-width: 700px) {
		display: ${({ $hide }) => ($hide ? 'none' : 'block')};
	}
`;
