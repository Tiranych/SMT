import styled from 'styled-components';

export const Img = styled.img`
	width: 100%;
	height: 100%;
	max-width: 400px;
	max-height: 300px;
	object-fit: cover;
	border-radius: 12px;
	transition: transform 0.4s;

	&:hover {
		transform: scale(1.025);
	}
`;

export const Subtitle = styled.p`
	padding: 10px 0;
	font-size: 32px;
`;

export const Text = styled.p<{ $isStrong: boolean; $isBig: boolean }>`
	padding: 5px 0;
	font-size: ${({ $isBig }) => ($isBig ? '24px' : '18px')};
	font-weight: ${({ $isStrong }) => ($isStrong ? '700' : '400')};
`;
