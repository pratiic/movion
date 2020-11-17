import styled from "styled-components";

import { WrapperStyles } from "../../styles/styles.generic";

export const StyledPersonCardsList = styled.div`
	margin-bottom: 3rem;
`;

export const PersonCardsListWrapper = styled.div`
	${WrapperStyles};
	display: grid;
	grid-template-columns: repeat(auto-fill, 13rem);
	grid-gap: 2rem;
	justify-content: center;
`;
