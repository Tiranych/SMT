import styled from 'styled-components';

export const CardList = styled.ul`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 50px 100px;
	padding-top: 30px;

	@media (max-width: 1200px) {
		grid-template-columns: repeat(2, 1fr);
	}

	@media (max-width: 1000px) {
		gap: 50px;
	}

	@media (max-width: 700px) {
		gap: 15px;
		grid-template-columns: repeat(1, 1fr);
	}
`;
