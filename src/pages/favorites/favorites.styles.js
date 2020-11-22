import styled, { css } from "styled-components";

import {
	StyledTitle,
	PageStyles,
	StyledError,
} from "../../styles/styles.generic";

import { StyledMainCardsList } from "../../components/main-cards-list/main-cards-list.styles";

import { cssColors } from "../../styles/styles.variables";

export const StyledFavoritesPage = styled.div`
	${PageStyles};

	${StyledTitle} {
		${({ size }) =>
			size === "smaller" &&
			css`
				border-bottom: 1px solid ${cssColors.greyLighter};
			`}
	}

	${StyledError} {
		text-transform: lowercase;
		margin-top: -2.5rem;
		font-size: 2.1rem;
	}

	${StyledMainCardsList} {
		margin-bottom: 5rem;
	}
`;
