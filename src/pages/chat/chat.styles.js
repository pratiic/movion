import styled from "styled-components";

import {
	PageStyles,
	WrapperSmallestStyles,
	StyledTitle,
} from "../../styles/styles.generic";

import { cssColors } from "../../styles/styles.variables";

export const StyledChat = styled.div`
	${WrapperSmallestStyles};
	${PageStyles};
	padding-top: 0;

	${StyledTitle} {
		padding-top: 1.7rem;
	}

	a {
		color: ${cssColors.bluePrimary};
		display: block;
	}
`;
