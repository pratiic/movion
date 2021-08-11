import styled, { css } from "styled-components";

import {
	CardsListWrapperStyles,
	CardsListStyles,
} from "../../styles/styles.cards";

export const StyledPersonCardsList = styled.div`
	${CardsListStyles}

	transform: scaleY(0);
	height: 0;
	transform-origin: top;
	${({ show }) =>
		show &&
		css`
			transform: scaleY(1);
			height: auto;
		`}
`;

export const PersonCardsListWrapper = styled.div`
	display: grid;
	justify-content: center;
	grid-template-columns: repeat(auto-fill, 13rem);
	grid-gap: 2rem;
	margin-bottom: 1.5rem;
`;
