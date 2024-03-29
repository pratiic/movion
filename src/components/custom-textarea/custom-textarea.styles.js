import styled from "styled-components";

import { cssColors } from "../../styles/styles.variables";

export const StyledCustomTextarea = styled.form`
	position: relative;
`;

export const TextArea = styled.textarea`
	width: 100%;
	background-color: ${({ theme }) => theme.bgFocused};
	color: ${({ theme }) => theme.textIconBlur};
	border: none;
	outline: none;
	border-radius: 5px;
	height: ${({ size }) => (size === "smaller" ? "10rem" : "15rem")};
	resize: none;
	padding: 0.5rem;
	font-size: 1.7rem;
	font-family: inherit;
`;

export const ReplyButton = styled.button`
	position: absolute;
	bottom: 0;
	right: 0;
	width: auto;
	margin-left: auto;
	padding: 0.3rem 2.5rem;
	color: ${({ theme }) => theme.textMuted};
	background-color: ${({ theme }) => theme.bodyBg};
	border: 1px solid ${({ theme }) => theme.bgFocused};
	border-radius: 5px;
	font-family: inherit;
	text-transform: capitalize;
	cursor: pointer;
	font-size: 1.55rem;

	svg {
		margin-right: 0;
		path {
			fill: ${({ theme }) => theme.textIconBlur};
		}
	}

	&:hover {
		color: ${({ theme }) => theme.textFocused};
		background-color: ${({ theme }) => theme.bgFocused};
		border: 1px solid ${({ theme }) => theme.bodyBg};

		svg {
			path {
				fill: ${cssColors.bluePrimary};
			}
		}
	}

	&:active {
		background-color: ${({ theme }) => theme.bgFocusedDark};
	}
`;
