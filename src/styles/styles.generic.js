import styled, { css } from "styled-components";

import { TextStyles } from "./styles.text";
import { cssColors } from "./styles.variables";

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

export const StyledError = styled.div`
	${TextStyles};
	font-size: 2rem;
	margin-bottom: ${({ marginbt }) => marginbt || "3rem"};
	text-align: ${({ align }) => align || "center"};
	color: ${({ theme }) => theme.textMuted};
`;

export const StyledMessage = styled.p`
	font-size: 2rem;
	text-align: center;
	color: ${({ theme }) => theme.textMuted};
	/* margin-top: ${({ marginTop }) => marginTop && marginTop}; */
	${({ size }) =>
		size === "smaller" &&
		css`
			font-size: 1.7rem;
		`};

	a {
		color: ${cssColors.bluePrimary};
	}

	&::first-letter {
		text-transform: uppercase;
	}
`;
