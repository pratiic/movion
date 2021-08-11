import { css } from "styled-components";

import { cssFonts } from "./styles.variables";
import { WrapperStyles } from "./styles.wrapper";

export const CardStyles = css`
	font-family: ${cssFonts.fontStackTertiary};
	position: relative;
	font-weight: 300;
	box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
		rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
	height: fit-content;

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

export const CardsListWrapperStyles = css`
	${WrapperStyles};
	display: grid;
	justify-content: center;
`;

export const CardsListStyles = css`
	margin-bottom: 3rem;
`;
