import styled, { css } from "styled-components";

import { HeaderElementStyles } from "../header/header.styles";
import { cssColors } from "../../styles/styles.variables";

export const StyledHeaderUtil = styled.div`
	${HeaderElementStyles}

	display: flex;
	align-items: center;
	position: relative;
	padding: 0.5rem;
	border-radius: 50%;

	&:hover {
		background-color: ${({ theme }) => theme.bgFocused};

		svg {
			path {
				fill: ${cssColors.bluePrimary};
			}
		}
	}

	&:active {
		background-color: ${({ theme }) => theme.bgFocusedDark};

		svg {
			path {
				fill: ${({ theme }) => theme.textIconBlur};
			}
		}
	}

	${({ active }) =>
		active &&
		css`
			background-color: ${({ theme }) => theme.bgFocused};

			svg {
				path {
					fill: ${cssColors.bluePrimary};
				}
			}
		`}

	${({ smallerScreen }) =>
		smallerScreen &&
		css`
			display: none;

			@media screen and (max-width: 850px) {
				display: flex;
			}
		`}

	${({ smallScreen }) =>
		smallScreen &&
		css`
			display: none;

			@media screen and (max-width: 1150px) {
				display: flex;
			}
		`}
`;

export const StyledText = styled.span`
	position: absolute;
	right: -0.75rem;
	top: -0.3rem;
	display: flex;
	justify-content: center;
	align-items: center;
	color: ${({ theme }) => theme.textIconBlur};
	background-color: ${({ theme }) => theme.bgFocused};
	border-radius: 50%;
	height: 2rem;
	width: 2rem;
	font-size: 1.3rem;
	margin-left: 0.3rem;
	font-weight: 500;
`;
