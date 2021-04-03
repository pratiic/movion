import styled from "styled-components";

import { PageStyles, WrapperStyles } from "../../styles/styles.generic";

export const StyledChatContainer = styled.div`
	${WrapperStyles};
	${PageStyles};
	padding-top: 0;
`;

export const Chat = styled.div`
	max-width: 850px;
	margin: auto;
	height: calc(100vh - 5rem);
	display: flex;
	flex-direction: column;
	border-left: 1px solid ${({ theme }) => theme.bgFocused};
	border-right: 1px solid ${({ theme }) => theme.bgFocused};

	@media screen and (max-width: 500px) {
		border-left: none;
		border-right: none;
	}
`;
