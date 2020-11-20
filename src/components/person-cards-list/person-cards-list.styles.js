import styled, { css } from "styled-components";

import {
	CardsListWrapperStyles,
	CardsListStyles,
} from "../../styles/styles.generic";

export const StyledPersonCardsList = styled.div`
	${CardsListStyles}

	transform: scaleY(0);
	height: 0;
	//transition: transform 150ms ease-in, height 150ms ease-in;
	transform-origin: top;
	${({ show }) =>
		show &&
		css`
			transform: scaleY(1);
			height: auto;
		`}
`;

export const PersonCardsListWrapper = styled.div`
	${CardsListWrapperStyles};
	grid-template-columns: repeat(auto-fill, 13rem);
	grid-gap: 2rem;
`;
