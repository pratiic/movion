import styled from "styled-components";

import { StyledMessage } from "../../styles/styles.generic";
import { WrapperSmallStyles } from "../../styles/styles.wrapper";
import { PageStyles } from "../../styles/styles.page";
import { cssColors } from "../../styles/styles.variables";

export const StyledChatsGeneric = styled.div`
	${WrapperSmallStyles};
	${PageStyles};

	${StyledMessage} {
		margin-bottom: 1.5rem;
	}
`;

export const ClearSearch = styled.p`
	color: ${cssColors.googleRed};
	margin-left: auto;
	cursor: pointer;
	width: fit-content;
	padding-bottom: 0.3rem;

	&:hover {
		border-bottom: 1px solid ${cssColors.googleRed};
	}

	&:active {
		color: ${cssColors.dangerRedDark};
		border-bottom: 1px solid ${cssColors.dangerRedDark};
	}
`;
