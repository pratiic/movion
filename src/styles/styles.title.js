import styled, { css } from "styled-components";

import { TextStyles } from "./styles.text";
import { cssColors } from "./styles.variables";

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

export const StyledSubtitle = styled.div`
	${TextStyles};
	font-size: 1.85rem;
	margin-bottom: 5rem;
	color: ${cssColors.greyText};

	@media screen and (max-width: 500px) {
		margin-bottom: 3rem;
	}
`;
