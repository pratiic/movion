import styled, { css } from "styled-components";

import { cssColors } from "../../styles/styles.variables";

export const StyledProfilePicture = styled.div`
	height: 2.75rem;
	width: 2.75rem;
	border-radius: 50%;
	background-color: ${cssColors.greyLight};
	color: ${cssColors.greyLighter};
	font-size: 1.8rem;
	display: flex;
	justify-content: center;
	align-items: center;
	text-transform: uppercase;
	cursor: pointer;

	img {
		height: 100%;
		width: 100%;
		border-radius: 50%;
	}

	${({ size }) =>
		size === "smaller" &&
		css`
			height: 2.4rem;
			width: 2.4rem;
			font-size: 1.55rem;
		`}

	&:hover {
		color: white;
	}

	&:active {
		color: ${cssColors.greyLighter};
	}

	@media screen and (max-width: 1150px) {
		pointer-events: none;
		margin-right: 1.3rem;
	}
`;
