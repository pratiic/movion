import styled from "styled-components";

export const StyledCardsList = styled.div``;

export const CardsListWrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(15rem, 20rem));
	grid-gap: 3.5rem;
	justify-content: center;
	max-width: 1400px;
	padding: 0 7rem;
	margin: 0 auto;

	@media screen and (max-width: 850px) {
		padding: 0 5rem;
	}

	@media screen and (max-width: 600px) {
		padding: 0 3rem;
	}

	@media screen and (max-width: 550px) {
		grid-template-columns: repeat(2, 1fr);
		grid-gap: 2rem;
	}

	@media screen and (max-width: 400px) {
		grid-template-columns: repeat(1, 75%);
		padding: 0 2.5rem;
	}
`;
