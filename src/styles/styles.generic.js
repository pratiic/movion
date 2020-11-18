import styled, { css } from "styled-components";

import { cssFonts } from "./styles.variables";

export const WrapperStyles = css`
	max-width: 1400px;
	margin: auto;
	padding: 0 7rem;

	@media screen and (max-width: 850px) {
		padding: 0 5rem;
	}

	@media screen and (max-width: 750px) {
		padding: 0 3.5rem;
	}

	@media screen and (max-width: 550px) {
		padding: 0rem 2.5rem;
	}

	@media screen and (max-width: 450px) {
		padding: 0rem 1.75rem;
	}
`;

export const StyledTitle = styled.div`
	${WrapperStyles};
	font-size: 3rem;
	font-weight: 300;
	text-align: ${({ align }) => align || "center"};
	margin: 0 auto;
	margin-bottom: ${({ marginbt }) => marginbt || "3rem"};
	text-transform: capitalize;
	letter-spacing: 1px;

	${({ size }) => {
		if (size === "smaller") {
			return css`
				font-size: 2.5rem;
			`;
		} else if (size === "smallest") {
			return css`
				font-size: 2.3rem;
			`;
		}
	}}
`;

export const OverlayStyles = css`
	&::after {
		content: "";
		position: absolute;
		left: 0;
		top: 0;
		height: 100%;
		width: 100%;
		background-color: rgba(0, 0, 0, 0.65);
	}
`;

export const CardStyles = css`
	font-family: ${cssFonts.fontStackTertiary};
	position: relative;
	font-weight: 300;

	.card-image-container {
		width: 100%;

		img {
			width: 100%;
			height: 100%;
			display: block;
		}

		cursor: pointer;
	}
`;

export const CardsListStyles = css`
	margin-bottom: 3rem;
`;

export const CardsListWrapperStyles = css`
	${WrapperStyles};
	display: grid;
	justify-content: center;
`;

export const StyledError = styled.div`
	${WrapperStyles};
	font-size: 2.2rem;
	text-align: ${({ align }) => align || "center"};
	color: white;
	font-weight: 300;
	${({ marginbt }) =>
		marginbt &&
		css`
			margin-bottom: 3rem;
		`}
`;
