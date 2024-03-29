import styled from "styled-components";

import {
	CardsListWrapperStyles,
	CardsListStyles,
} from "../../styles/styles.cards";

export const StyledMainCardsList = styled.div`
	${CardsListStyles}
`;

export const MainCardsListWrapper = styled.div`
	${CardsListWrapperStyles};
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
