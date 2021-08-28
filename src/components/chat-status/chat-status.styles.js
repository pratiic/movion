import styled, { css } from "styled-components";

import { StyledMessage } from "../../styles/styles.generic";

export const StyledChatStatus = styled.div`
	flex: 1;

	&,
	& > * {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}

	${StyledMessage} {
		/* ${({ requestSent }) =>
			requestSent &&
			css`
				border: 1px solid ${({ theme }) => theme.textMuted};
				border-radius: 5px;
				padding: 0.5rem 0.75rem;
			`} */

		flex-direction: row;

		svg {
			margin-right: 0.75rem;

			path {
				fill: ${({ theme }) => theme.textMuted};
			}
		}
	}
`;

export const SendRequest = styled.div`
	& > *:first-child {
		margin-bottom: 0.75rem;
	}
`;

export const HandleRequest = styled.div``;

export const Buttons = styled.div`
	display: flex;
	align-items: center;
	margin-top: 1.5rem;

	& > *:last-child {
		margin-left: 1.5rem;
	}
`;
