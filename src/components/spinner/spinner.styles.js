import styled, { css } from "styled-components";

import { cssColors } from "../../styles/styles.variables";

export const SpinnerOverlay = styled.div`
	height: ${({ height }) => height || "60vh"};
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const StyledSpinner = styled.div`
	height: 3.5rem;
	width: 3.5rem;
	border-radius: 50%;
	border: 3px solid ${cssColors.bluePrimary};
	border-left-color: transparent;
	animation: spinner-anim 350ms linear infinite;
	margin-bottom: 0.75rem;

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
		/* 25% {
			transform: rotate(360deg);
			border: 2px solid ${cssColors.orangePrimary};
			border-left-color: transparent;
		}

		50% {
			transform: rotate(720deg);
			border: 3px solid ${cssColors.googleRed};
			border-left-color: transparent;
		}

		75% {
			transform: rotate(1080deg);
			border: 2px solid ${cssColors.greyLighter};
			border-left-color: transparent;
		}

		100% {
			transform: rotate(1440deg);
			border: 1px solid ${cssColors.bluePrimary};
			border-left-color: transparent;
		} */
	}
`;
