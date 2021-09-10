import styled, { css } from "styled-components";

import { cssColors } from "../../styles/styles.variables";

export const StyledGenericButton = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	font-family: inherit;
	outline: none;
	font-size: 1.5rem;
	text-transform: uppercase;
	width: ${({ width }) => (width === "full" ? "100%" : "fit-content")};
	padding: 0.6rem 1.2rem;
	font-weight: 400;
	background-color: ${cssColors.bluePrimary};
	border: 1px solid ${cssColors.bluePrimary};
	border-radius: 3px;
	color: ${cssColors.greyDark};
	letter-spacing: 1px;
	cursor: pointer;
	transition: color 100ms ease-in;

	svg {
		margin-right: ${({ iconOnly }) => (iconOnly ? "0rem" : "0.8rem")};
		path {
			fill: ${cssColors.bluePrimary};
		}
	}

	&:hover {
		background-color: ${cssColors.bluePrimaryDark};
	}

	&:active {
		background-color: ${cssColors.bluePrimaryDarker};
	}

	${({ color }) =>
		color === "red" &&
		css`
			background-color: ${cssColors.googleRed};
			border: 1px solid ${cssColors.googleRed};

			svg {
				path {
					fill: ${cssColors.googleRed};
				}
			}

			&:hover {
				background-color: ${cssColors.googleRedDark};
			}

			&:active {
				background-color: ${cssColors.googleRedDarker};
			}
		`}

	${({ btnType }) => {
		if (btnType === "outlined") {
			return css`
				background-color: transparent;
				color: ${cssColors.bluePrimary};

				&:hover {
					background-color: ${cssColors.bluePrimary};
					color: ${cssColors.greyDark};

					svg {
						path {
							fill: ${cssColors.greyDark};
						}
					}
				}

				&:active {
					background-color: ${cssColors.bluePrimaryDarker};
				}

				${({ color }) =>
					color === "red" &&
					css`
						color: ${cssColors.googleRed};

						&:hover {
							background-color: ${cssColors.googleRed};
						}

						&:active {
							background-color: ${cssColors.googleRedDarker};
						}
					`}
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
`;

export const LoadMoreButton = styled.button`
	display: block;
	margin: 0 auto 1.5rem auto;
	background-color: transparent;
	outline: none;
	border: 1px solid ${({ theme }) => theme.textMuted};
	border-radius: 5px;
	padding: 0.3rem 0.5rem;
	color: ${({ theme }) => theme.textMuted};
	font-size: 1.5rem;
	font-family: inherit;
	cursor: pointer;

	&::first-letter {
		text-transform: uppercase;
	}

	&:hover {
		border: 1px solid ${cssColors.bluePrimary};
		color: ${cssColors.bluePrimary};
	}

	&:active {
		border: 1px solid ${({ theme }) => theme.textMuted};
		color: ${({ theme }) => theme.textMuted};
	}
`;
