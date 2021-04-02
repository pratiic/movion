import styled from "styled-components";

import {
	PageStyles,
	WrapperSmallestStyles,
	StyledTitle,
} from "../../styles/styles.generic";

export const StyledFindFriends = styled.div`
	${WrapperSmallestStyles};
	${PageStyles};
	padding-top: 0;
	max-width: 650px;

	${StyledTitle} {
		padding-top: 1.7rem;
	}
`;
