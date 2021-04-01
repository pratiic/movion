import styled from "styled-components";

import { cssColors, cssFonts } from "../../styles/styles.variables";
import { StyledSendIcon } from "../../styles/styles.icons";

import { StyledGenericButton } from "../generic-button/generic-button.styles";

export const StyledTextArea = styled.textarea`
	width: 100%;
	height: 10rem;
	background-color: ${({ theme }) => theme.bgFocused};
	color: ${({ theme }) => theme.textIconBlur};
	border: none;
	outline: none;
	border-radius: 5px;
	padding: 0.5rem;
	font-size: 1.55rem;
	font-family: ${cssFonts.fontStackTertiary};
	resize: none;
	box-shadow: 0 0 0.4rem 0 rgba(0, 0, 0, 0.5);
	&::-webkit-scrollbar {
		width: 0.3rem;
	}

	&::-webkit-scrollbar-thumb {
		background-color: ${cssColors.greyText};
	}

	&:focus {
		border: 1px solid ${cssColors.bluePrimary};
	}
`;

export const TextAreaContainer = styled.div`
	position: relative;
	margin-bottom: 1.7rem;

	button {
		width: auto;
		margin-left: auto;
		padding: 0.3rem 2.5rem;
		position: absolute;
		bottom: 0;
		right: 0;
		background-color: ${({ theme }) => theme.bgFocused};
		border: 1px solid ${({ theme }) => theme.bodyBg};
		color: ${({ theme }) => theme.textIconBlur};
		text-transform: lowercase;

		svg {
			margin-right: 0;
			path {
				fill: ${({ theme }) => theme.textIconBlur};
			}
		}

		&:hover {
			svg {
				path {
					fill: ${cssColors.bluePrimary};
				}
			}
		}

		&:active {
			background-color: ${({ theme }) => theme.bodyBg};
		}
	}
`;
