import styled from "styled-components";

import { PageStyles } from "../../styles/styles.page";

export const StyledSearchResults = styled.div`
	${PageStyles};
`;

export const Query = styled.span`
	color: ${({ theme }) => theme.textMuted};
	text-transform: lowercase;
`;
