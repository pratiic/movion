import styled from "styled-components";

import { WrapperStyles } from "../../styles/styles.wrapper";

export const StyledChatContainer = styled.div`
	${WrapperStyles};
	padding-top: 0;
`;

export const Chat = styled.div`
	max-width: 850px;
	margin: auto;
	height: 100vh;
	display: flex;
	flex-direction: column;
	border-left: 1px solid ${({ theme }) => theme.bgFocused};
	border-right: 1px solid ${({ theme }) => theme.bgFocused};

	@media screen and (max-width: 500px) {
		border-left: none;
		border-right: none;
	}
`;

export const IndicatorContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 1.5rem 0;

	svg {
		height: 2.5rem;
		width: 2.5rem;
	}
`;
