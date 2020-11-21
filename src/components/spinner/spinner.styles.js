import styled, { css } from "styled-components";

import { cssColors } from "../../styles/styles.variables";

export const SpinnerOverlay = styled.div`
	height: ${({ height }) => height || "60vh"};
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const StyledSpinner = styled.div`
	height: 3.5rem;
	width: 3.5rem;
	border-radius: 50%;
	border: 3px solid ${cssColors.bluePrimary};
	border-left-color: transparent;
	animation: spinner-anim 550ms linear infinite;
	${({ smaller }) =>
		smaller &&
		css`
			height: 2.5rem;
			width: 2.5rem;
			border: 2px solid ${cssColors.bluePrimary};
			border-left-color: transparent;
			animation-duration: 350ms;
		`}

	@keyframes spinner-anim {
		to {
			transform: rotate(360deg);
		}
	}
`;
