import styled from "styled-components";

import { cssColors, cssFonts } from "../../styles/styles.variables";

export const TextAreaContainer = styled.div`
	margin: 0 auto 1.7rem auto;
	position: relative;

	button {
		position: absolute;
		bottom: 0;
		right: 0;
		width: auto;
		margin-left: auto;
		padding: 0.3rem 2.5rem;
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

export const StyledTextArea = styled.textarea`
	width: 100%;
	height: 15rem;
	margin: auto;
	background-color: ${({ theme }) => theme.bgFocused};
	color: ${({ theme }) => theme.textIconBlur};
	border: none;
	outline: none;
	border-radius: 5px;
	padding: 0.5rem;
	font-size: 1.55rem;
	font-family: ${cssFonts.fontStackTertiary};
	resize: none;
	box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
		rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;

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
