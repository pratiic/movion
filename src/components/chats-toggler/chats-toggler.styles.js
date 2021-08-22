import styled, { css } from "styled-components";

import { cssColors } from "../../styles/styles.variables";

export const ToggleOption = styled.div`
	background-color: ${({ theme }) => theme.bgFocused};
	width: 50%;
	padding: 0.5rem 0;
	text-transform: capitalize;
	color: ${({ theme }) => theme.textMuted};
	cursor: pointer;

	${({ active }) =>
		active &&
		css`
			color: ${({ theme }) => theme.textIconBlur};
		`}

	&:first-child {
		border-top-left-radius: 5px;
		border-bottom-left-radius: 5px;
	}

	&:last-child {
		border-top-right-radius: 5px;
		border-bottom-right-radius: 5px;
		border-left: 1px solid ${({ theme }) => theme.textMuted};
	}

	&:hover {
		color: ${({ theme }) => theme.textIconBlur};
	}

	&:active {
		color: ${({ theme }) => theme.textMuted};
		background-color: ${({ theme }) => theme.bgFocusedDark};
	}
`;

export const NumberTag = styled.p`
	margin-left: 0.75rem;
	background-color: ${cssColors.bluePrimary};
	color: ${({ theme }) => theme.textFocused};
	border-radius: 50%;
	font-size: 1.3rem;
	height: 1.75rem;
	width: 1.75rem;
`;

export const StyledChatsToggler = styled.div`
	display: flex;
	align-items: center;
	margin-bottom: 1.5rem;

	${ToggleOption}, ${NumberTag} {
		display: flex;
		justify-content: center;
		align-items: center;
	}
`;
