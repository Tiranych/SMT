import styled from 'styled-components';

export const Subtitle = styled.h3`
	font-size: 34px;
	margin-bottom: 30px;
`;

export const CompanyName = styled.h4`
	font-size: 22px;
	font-weight: 700;
	margin-bottom: 30px;
`;

export const List = styled.ul`
	display: flex;
	gap: 30px 100px;
	justify-content: space-between;
	flex-wrap: wrap;
`;

export const Item = styled.div`
	flex-grow: 1;
`;

export const Box = styled.li`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	gap: 0 100px;
	align-items: center;
	margin-bottom: 30px;

	&:last-child {
		margin-bottom: 0;
	}

	@media (max-width: 1200px) {
		gap: 0 30px;
	}
`;

export const Text = styled.span`
	font-size: 18px;
	font-weight: 700;

	& + & {
		margin-top: 10px;
	}

	@media (max-width: 450px) {
		font-size: 16px;
	}
`;

export const Value = styled.span`
	font-size: 18px;
	line-height: 24px;
	max-width: 300px;
	text-align: end;
	word-break: auto-phrase;

	@media (max-width: 450px) {
		font-size: 16px;
		line-height: 20px;
	}
`;
