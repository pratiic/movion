import styled from "styled-components";

import {
	PageStyles,
	WrapperStyles,
	StyledTitle,
} from "../../styles/styles.generic";

export const StyledFindFriends = styled.div`
	${WrapperStyles};
	${PageStyles};
	padding-top: 0;

	${StyledTitle} {
		padding-top: 1.7rem;
	}
`;

export const FindFriendsMain = styled.div`
	max-width: 600px;
	margin: auto;
`;
