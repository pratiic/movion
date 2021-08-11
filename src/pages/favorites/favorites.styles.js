import styled, { css } from "styled-components";

import { StyledError } from "../../styles/styles.generic";
import { StyledTitle } from "../../styles/styles.title";
import { PageStyles } from "../../styles/styles.page";
import { cssColors } from "../../styles/styles.variables";

import { StyledMainCardsList } from "../../components/main-cards-list/main-cards-list.styles";

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
		margin-bottom: 7rem;
	}
`;

export const VerticalDivider = styled.div`
	margin-top: 1.5rem;
`