import styled from 'styled-components';

export const Content = styled.div`
	font-size: 22px;
	line-height: 35px;
	margin: 15px 0;

	&:last-child {
		margin-bottom: 0;
	}

	@media (max-width: 700px) {
		font-size: 20px;
		line-height: 30px;
	}
`;
