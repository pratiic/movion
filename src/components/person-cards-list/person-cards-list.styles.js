import styled from "styled-components";

import {
	CardsListWrapperStyles,
	CardsListStyles,
} from "../../styles/styles.generic";

export const StyledPersonCardsList = styled.div`
	${CardsListStyles}
`;

export const PersonCardsListWrapper = styled.div`
	${CardsListWrapperStyles};
	grid-template-columns: repeat(auto-fill, 13rem);
	grid-gap: 2rem;
`;
