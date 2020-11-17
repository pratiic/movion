import styled from "styled-components";

import { CardsListStyles } from "../../styles/styles.generic";

export const StyledMainCardsList = styled.div`
	margin-bottom: 3rem;
`;

export const MainCardsListWrapper = styled.div`
	${CardsListStyles};
	grid-template-columns: repeat(auto-fit, minmax(15rem, 20rem));
	grid-gap: 3.5rem;

	@media screen and (max-width: 550px) {
		grid-template-columns: repeat(2, 1fr);
		grid-gap: 2rem;
	}

	@media screen and (max-width: 400px) {
		grid-template-columns: repeat(1, 75%);
	}
`;
