import styled, { css } from "styled-components";

export const StyledUserNotification = styled.div`
	border: 1px solid ${({ theme }) => theme.bgFocused};
	border-radius: 5px;
	padding: 0 1rem;
	margin-bottom: 1rem;
	height: 4rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
	cursor: pointer;
	box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
		rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;

	/* ${({ seen }) =>
		!seen &&
		css`
			border: 1px solid ${({ theme }) => theme.textFocused};

			${StyledMessage} {
				font-weight: 500;
			}
		`} */
`;

export const StyledMessage = styled.p`
	display: flex;
	align-items: center;
	color: ${({ theme }) => theme.textIconBlur};
	flex: 1 1 auto;
	padding: 0 1rem;
	margin: 0 0.75rem;
	height: 100%;

	&::first-letter {
		text-transform: uppercase;
	}

	&:hover {
		background-color: ${({ theme }) => theme.bgFocused};

		color: ${({ theme }) => theme.textFocused};
	}

	&:active {
		background-color: ${({ theme }) => theme.bgFocusedDark};
	}
`;

export const StyledNotificationTime = styled.span`
	margin-left: 0.75rem;
	color: ${({ theme }) => theme.textMuted};
	font-size: 1.55rem;
`;
