import styled from "styled-components";

import { StyledMessage } from "../../styles/styles.generic";

export const StyledMessages = styled.div`
	flex: 1;
	overflow-y: scroll;
	overflow-x: hidden;
	padding: 0.7rem 0.8rem 0rem 0.7rem;
	position: relative;

	&::-webkit-scrollbar {
		width: 0;
	}

	&::-webkit-scrollbar-thumb {
		background-color: none;
	}

	${StyledMessage} {
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
		white-space: nowrap;
	}

	@media screen and (max-width: 500px) {
		padding: 0.7rem 0;
	}
`;

export const DivAtBottom = styled.div``;

export const LoadMore = styled.button`
	color: ${({ theme }) => theme.textMuted};
	background-color: transparent;
	border: 1px solid ${({ theme }) => theme.textMuted};
	outline: none;
	padding: 0.3rem 0.5rem;
	border-radius: 5px;
	cursor: pointer;
	display: block;
	width: fit-content;
	margin: 0 auto 0.7rem auto;

	&:active {
		color: ${({ theme }) => theme.bgFocused};
	}
`;

export const Typing = styled.div`
	color: ${({ theme }) => theme.textMuted};
	width: fit-content;
	display: flex;

	p {
		border: 1px solid ${({ theme }) => theme.textMuted};
		border-radius: 5px;
		margin-left: 0.8rem;
		padding: 0 0.3rem;
	}
`;
