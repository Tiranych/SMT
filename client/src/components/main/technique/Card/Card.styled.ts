import styled from 'styled-components';

export const Item = styled.li`
	width: 100%;
	min-height: 415px;

	@media (max-width: 1200px) {
		min-height: 510px;
	}

	@media (max-width: 1000px) {
		min-height: 415px;
	}

	@media (max-width: 700px) {
		min-height: 565px;
	}
`;

export const Img = styled.img`
	width: 100%;
	height: 100%;
	max-height: 300px;
	object-fit: cover;
	border-radius: 12px;
	transition: transform 0.4s;

	&:hover {
		transform: scale(1.025);
	}

	@media (max-width: 1200px) {
		max-height: 400px;
	}

	@media (max-width: 1000px) {
		max-height: 300px;
	}

	@media (max-width: 700px) {
		max-height: 450px;
	}
`;

export const Subtitle = styled.p`
	padding: 10px 0;
	font-size: 32px;

	@media (max-width: 400px) {
		font-size: 28px;
	}
`;

export const Text = styled.p<{ $isStrong: boolean; $isBig: boolean }>`
	padding: 5px 0;
	font-size: ${({ $isBig }) => ($isBig ? '24px' : '18px')};
	font-weight: ${({ $isStrong }) => ($isStrong ? '700' : '400')};
`;
