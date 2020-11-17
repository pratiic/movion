import styled from "styled-components";

import { CardsListStyles } from "../../styles/styles.generic";

export const StyledPersonCardsList = styled.div`
	margin-bottom: 3rem;
`;

export const PersonCardsListWrapper = styled.div`
	${CardsListStyles};
	grid-template-columns: repeat(auto-fill, 13rem);
	grid-gap: 2rem;
`;
