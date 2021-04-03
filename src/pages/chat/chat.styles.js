import styled from "styled-components";

import {
	PageStyles,
	WrapperStyles,
	StyledTitle,
	StyledMessage,
} from "../../styles/styles.generic";

import { cssColors } from "../../styles/styles.variables";

export const StyledChat = styled.div`
	${WrapperStyles};
	${PageStyles};
	padding-top: 0;

	${StyledTitle} {
		padding-top: 1.7rem;
	}

	a {
		color: ${cssColors.bluePrimary};
		/* display: block; */
	}

	${StyledMessage} {
		margin-bottom: 2.5rem;
	}
`;

export const ChatMain = styled.div`
	max-width: 600px;
	margin: auto;
`;
