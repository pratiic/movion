import styled from "styled-components";

import { PageStyles } from "../../styles/styles.page";
import { WrapperSmallStyles } from "../../styles/styles.wrapper";
import { StyledMessage } from "../../styles/styles.generic";

export const StyledFindFriends = styled.div`
	${WrapperSmallStyles};
	${PageStyles};

	${StyledMessage} {
		margin-bottom: 2.5rem;
	}
`;

export const Divider = styled.div`
	margin-bottom: 1.5rem;
`;
