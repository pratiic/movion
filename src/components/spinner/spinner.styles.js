import styled from "styled-components";

import { cssColors } from "../../styles/styles.variables";

export const SpinnerOverlay = styled.div`
	${(props) => {
		console.log(props);
	}}
	height: ${({ height }) => height || "50vh"};
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

	@keyframes spinner-anim {
		to {
			transform: rotate(360deg);
		}
	}
`;
