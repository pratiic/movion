import styled, { css } from "styled-components";

import { cssColors } from "../../styles/styles.variables";

export const StyledGenericButton = styled.button`
	font-family: inherit;
	outline: none;
	font-size: 1.5rem;
	text-transform: uppercase;
	width: fit-content;
	padding: 0.6rem 1.2rem;
	font-weight: 500;
	background-color: ${cssColors.bluePrimary};
	border: 2px solid ${cssColors.bluePrimary};
	border-radius: 3px;
	color: white;
	letter-spacing: 1px;
	cursor: pointer;
	display: flex;
	align-items: center;

	${({ outlined }) =>
		outlined &&
		css`
			background-color: transparent;
			color: ${cssColors.bluePrimary};
			border: 2px solid ${cssColors.bluePrimary};

			&:hover {
				background-color: ${cssColors.bluePrimary};
				color: white;
			}
		`}

	${({ bigger }) =>
		bigger &&
		css`
			padding: 0.7rem 2.5rem;
		`}

	${({ marginbt }) =>
		marginbt &&
		css`
			margin-bottom: 3rem;
		`}

	${({ centered }) =>
		centered &&
		css`
			margin-left: auto;
			margin-right: auto;
		`}

	&:active {
		background-color: #125bbb;
	}
`;
