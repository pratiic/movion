import styled, { css } from "styled-components";

import { StyledMessage } from "../../styles/styles.generic";

export const StyledMessages = styled.div`
	${({ pushMessagesDown }) =>
		!pushMessagesDown &&
		css`
			flex: 1;
		`}
	overflow-y: scroll;
	overflow-x: hidden;
	padding: 0.7rem 0.8rem 0rem 0.7rem;
	position: relative;
	margin-top: 5rem;

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
