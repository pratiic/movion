import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

import { SpinnerOverlay } from "../components/spinner/spinner.styles";

import { cssColors } from "./styles.variables";
import { PageStyles } from "./styles.page";

export const FormPageStyles = css`
	${PageStyles};

	button {
		@media screen and (max-width: 450px) {
			width: 100%;

			&:first-child {
				margin-bottom: 1.7rem;
			}
		}
	}

	@media screen and (max-width: 500px) {
		padding-top: 1.5rem;
	}

	@media screen and (max-width: 350px) {
		padding-top: 1rem;
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
