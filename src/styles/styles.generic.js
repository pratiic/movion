import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

import { SpinnerOverlay } from "../components/spinner/spinner.styles";

import { cssColors, cssFonts } from "./styles.variables";

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

export const WrapperSmallestStyles = css`
	${WrapperStyles};
	max-width: 650px;
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
		background-color: ${({ theme }) => theme.bodyBg};

		img {
			width: 100%;
			height: 100%;
			display: block;
		}

		cursor: pointer;
	}

	.content-info {
		border: 1px solid ${({ theme }) => theme.bgFocused};
	}

	.content-name {
		color: ${({ theme }) => theme.textFocused};
		font-size: 1.75rem;
		margin-bottom: 0.5rem;
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

export const TextStyles = css`
	text-align: ${({ align }) => align || "center"};
	font-weight: 300;
	margin: 0 auto;
	color: white;
	${WrapperStyles};
`;

export const PageStyles = css`
	margin-top: 6.5rem;
	padding-top: 3rem;
`;

export const FormPageStyles = css`
	${PageStyles};

	@media screen and (max-width: 500px) {
		padding-top: 1.5rem;
	}

	@media screen and (max-width: 350px) {
		padding-top: 1rem;
	}

	button {
		@media screen and (max-width: 450px) {
			width: 100%;

			&:first-child {
				margin-bottom: 1.7rem;
			}
		}
	}
`;

export const FormStyles = css`
	width: 35rem;
	margin: 0 auto;

	${SpinnerOverlay} {
		margin-bottom: 2rem;
		margin-top: -2rem;
	}

	@media screen and (max-width: 450px) {
		width: 30rem;
	}

	@media screen and (max-width: 375px) {
		width: 27rem;
	}
`;

export const StyledFormLink = styled(Link)`
	color: ${cssColors.bluePrimary};
	cursor: pointer;

	&:hover {
		border-bottom: 1px solid ${cssColors.bluePrimary};
	}

	&:active {
		color: ${cssColors.greyLighter};
		border-color: ${cssColors.greyLighter};
	}
`;

export const StyledTitle = styled.div`
	${TextStyles};
	font-size: 3rem;
	margin-bottom: ${({ marginbt }) => marginbt || "3rem"};
	text-transform: capitalize;
	letter-spacing: 1px;
	font-weight: ${({ fontWeight }) => fontWeight || 300};
	color: ${({ theme }) => theme.textIconBlur};

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

	${({ transform }) =>
		transform === "uppercase" &&
		css`
			text-transform: uppercase;
		`}
`;

export const StyledError = styled.div`
	${TextStyles};
	font-size: 2rem;
	margin-bottom: ${({ marginbt }) => marginbt || "3rem"};
	text-align: ${({ align }) => align || "center"};
	color: ${({ theme }) => theme.textMuted};
`;

export const StyledSubtitle = styled.div`
	${TextStyles};
	font-size: 1.85rem;
	margin-bottom: 5rem;
	color: ${cssColors.greyText};

	@media screen and (max-width: 500px) {
		margin-bottom: 3rem;
	}
`;

export const StyledMessage = styled.p`
	font-size: 2rem;
	text-align: center;
	color: ${({ theme }) => theme.textMuted};
`;
