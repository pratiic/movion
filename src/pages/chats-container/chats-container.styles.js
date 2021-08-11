import styled from "styled-components";

import { StyledMessage } from "../../styles/styles.generic";
import { WrapperSmallStyles } from "../../styles/styles.wrapper";
import { PageStyles } from "../../styles/styles.page";

export const StyledChatsContainer = styled.div`
	${WrapperSmallStyles};
	${PageStyles};

	${StyledMessage} {
		margin-bottom: 2.5rem;
	}
`;
