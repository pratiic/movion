import styled, { css } from "styled-components";

import { cssColors } from "../../styles/styles.variables";

export const StyledGenericButton = styled.button`
	font-family: inherit;
	outline: none;
	font-size: 1.5rem;
	text-transform: uppercase;
	width: ${({ width }) => (width === "full" ? "100%" : "fit-content")};
	padding: 0.6rem 1.2rem;
	font-weight: 400;
	background-color: ${({ bg }) => bg || cssColors.bluePrimary};
	border: ${({ bg }) =>
		bg ? `1px solid ${bg}` : `1px solid ${cssColors.bluePrimary}`};
	border-radius: 3px;
	color: ${cssColors.greyDark};
	letter-spacing: 1px;
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: space-between;
	transition: color 100ms ease-in;

	svg {
		margin-right: 0.8rem;

		path {
			fill: ${({ color }) => color || cssColors.greyLighter};
		}
	}

	${({ btnType }) => {
		if (btnType === "outlined") {
			return css`
				background-color: transparent;
				color: ${({ color }) => color || cssColors.bluePrimary};

				&:hover {
					background-color: ${({ bg }) =>
						bg || cssColors.bluePrimary};
					color: ${({ hoverColor }) =>
						hoverColor || cssColors.greyDark};

					svg {
						path {
							fill: ${({ hoverColor }) =>
								hoverColor || cssColors.greyDark};
						}
					}
				}
			`;
		}
	}}

	${({ size }) => {
		if (size === "smaller") {
			return css`
				padding: 0.2rem 0.85rem;
			`;
		}

		if (size === "bigger") {
			return css`
				padding: 0.7rem 2.5rem;
			`;
		}
	}}

	${({ marginbt }) =>
		marginbt &&
		css`
			margin-bottom: 3rem;
		`}

	${({ justify }) =>
		justify === "center" &&
		css`
			margin-left: auto;
			margin-right: auto;
		`}

	&:active {
		background-color: ${({ darkBg }) => darkBg || "#125bbb"};
	}
`;
